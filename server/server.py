from flask import Flask, request
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route("/hello")
def hello_world():
    return "<p> Hello, World!</p>"

@app.route("/sendMessage", methods = ['POST'])
def send_a_message():
    message = request.json['message']
    print(message)
    socketio.emit('new text', {"message": message})
    return {"Success": True}, 200

@socketio.on('connect')
def test_connect(auth):
    print('Client Connected')

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    socketio.run(app)
    
