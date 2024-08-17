import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import MessageSender from "components/MessageSender";
import Texts from "components/Texts";
import { GoogleOAuthProvider, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [texts, setTexts] = useState([]);



  const login = 
    useGoogleLogin({
      onSuccess: async (codeResponse) => {
        try {
          const data = await axios.get(`/profile-oauth?code=${codeResponse.code}`)
          setLoggedIn(true);
        } catch (err) {
          console.error("Error calling profile oauth", err);
        }
      },
      onError: (error) => console.error('Login Failed:', error),
      flow: "auth-code"
    });

  const loginClicked = () => {
    login();
  }

  const logoutClicked = () => {
    googleLogout();
    setLoggedIn(false);
  }

  const controller = {
    addText: message => {
      setTexts([...texts, message]);
    },
    texts,
    setTexts,

  }
  

  return (
      <div className="App">
        {!loggedIn ? (
          <button onClick={loginClicked}>Login</button>
        ) : (
          <>
            <Texts controller={controller}/>
            <MessageSender controller={controller}/>
            <button onClick={logoutClicked}>Signout</button>
          </>
        )}
      </div>
  );
}

export default App;
