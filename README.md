# multichat
Multi User Chat

# Setup
1. Setup virtual environment for python: python -m venv server/venvs
2. Activate virtual environment: source server/venv/bin/activate
3. Install flask: pip install flask
4. Create flask server with: /sendMessage POST route
5. Run the server from the server directory using: flask --app server run 
6. Test using curl --header "Content-Type: application/json" --request POST --data '{"message":"hello!"}' http://127.0.0.1:5000/sendMessage
7. Create react app from multichat directory using npx create-react-app client
