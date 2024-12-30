from flask import Flask, request, session
from flask_socketio import SocketIO
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import Flow
import requests
from dotenv import dotenv_values

secrets = dotenv_values(".env")

app = Flask(__name__)
app.config["SECRET_KEY"] = secrets["app_config_secret"]
socketio = SocketIO(app)


@app.route("/hello")
def hello_world():
    return "<p> Hello, World!</p>"


# function with a route
@app.route("/sendMessage", methods=["POST"])
def send_a_message():
    message = request.json["message"]
    print(message)
    # broadcast to all connected clients
    socketio.emit("new text", {"message": message})
    return {"Success": True}, 200

@socketio.on("sendMessage")
def send_message(data):
    print("in sendMessage")
    print(session["user"])
    messageToBroadcast = {
        "message": data["message"],
        "name": session["user"]["name"],
        "pfp": session["user"]["picture"]
    }
    socketio.emit("new text", messageToBroadcast, include_self = False)

@socketio.on("connect")
def test_connect(auth):
    print("Client Connected")


@socketio.on("disconnect")
def test_disconnect():
    print("Client disconnected")


@app.route("/profile-oauth", methods=["GET"])
def get_profile():
    print(request.args.get("code"))
    flow = Flow.from_client_config(
        {
            "web": {
                "client_id": secrets["client_id"],
                "client_secret": secrets["client_secret"],
                "redirect_uris": [secrets["redirect_url"]],
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
            }
        },
        scopes=[
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
            "openid"
        ],
        redirect_uri=secrets["redirect_url"]
    )

    # Exchange the authorization code for an access token
    flow.fetch_token(code=request.args.get("code"))

    # Get the credentials (which includes the access token)
    credentials = flow.credentials

    response = requests.get(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        headers={"Authorization": f"Bearer {credentials.token}"},
    )
    print(response.json())
    session["user"] = response.json()
    return {"Success": True}, 200


if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5000)