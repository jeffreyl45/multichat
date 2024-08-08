from flask import Flask, request

app = Flask(__name__)

@app.route("/hello")
def hello_world():
    return "<p> Hello, World!</p>"

@app.route("/sendMessage", methods = ['POST'])
def send_a_message():
    message = request.json['message']
    print(message)
    return {"Success": True}, 200
    
