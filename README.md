# multichat
Multi User Chat

# Setup
1. Setup virtual environment for python: python -m venv server/venvs
2. Activate virtual environment: source server/venv/bin/activate
3. Install flask: pip install flask
4. Create flask server with: /sendMessage POST route
5. Run the server from the server directory using: python server.py
6. Test using curl --header "Content-Type: application/json" --request POST --data '{"message":"hello!"}' http://127.0.0.1:5000/sendMessage
7. Create react app from multichat directory using npx create-react-app client
8. Run the client server with npm run start
9. Create .env secrets file with app configurations secret key for session management (can be anything of your choice), client id from Google Cloud console, see here: https://blog.logrocket.com/guide-adding-google-login-react-app/, client secret from Google Cloud console, see here: https://www.balbooa.com/help/gridbox-documentation/integrations/other/google-client-id, and redirect url, see here: https://blog.logrocket.com/guide-adding-google-login-react-app/ .