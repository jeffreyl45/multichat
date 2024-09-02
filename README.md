# Multichat

A Multi User Chat Application

# Purpose of this Project:
I built this project to learn about full stack development, particularly how to connect the front end with the back end

# What this Project Does:
This project allows two separate users to send messages to each other through a server. The rendering of the messages to each user is different and is dependent on whether or not the message was from another user or sent by the current user (i.e. like you would expect from any social media direct message feature)

# Next Steps:
Allow users to see messages sent to them prior to logging in using a database system

# Setup for Backend:

1. Setup virtual environment for python: python -m venv server/venvs
2. Activate virtual environment: source server/venv/bin/activate
3. Go into the 'server' directory
4. Install all requirements in requirements.txt using pip install -r requirements.txt
5. Run the server from the server directory using: python server.py
6. Test using curl --header "Content-Type: application/json" --request POST --data '{"message":"hello!"}' http://127.0.0.1:5000/sendMessage

# Setup for Frontend:

1. Create react app from multichat directory using npx create-react-app client
2. Run the client server with npm run start
3. Create .env secrets file with app configurations secret key (can be anything of your choice) for session management. Also include the following items for setup:
<ul>
    <li><a href ="https://blog.logrocket.com/guide-adding-google-login-react-app/">client id from Google Cloud console</a></li>
    <li><a href ="https://www.balbooa.com/help/gridbox-documentation/integrations/other/google-client-id">client secret from Google Cloud console</a></li>
    <li><a href="https://blog.logrocket.com/guide-adding-google-login-react-app/">redirect url</a></li>
</ul>


