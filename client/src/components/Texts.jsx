// display the texts
import { useState, useEffect } from "react";
import { getWebSocket } from "util/WebSocket";
import "./Texts.css";
const Texts = ({controller}) => {
  const webSocket = getWebSocket();
  webSocket.off("new text");
  webSocket.on("new text", (data) => {
    console.log("Got data", data);
    console.log("texts", controller.texts);
    controller.setTexts([...controller.texts, data]);
  });

  return (
    <div>
      <h1>Multichat</h1>
      <br />
      <ul className="text-container">
        {controller.texts.map((data, index) => {
          return (data.pfp != null ? 
            <li key={index} className="Texts">
              <div>
                <img
                  className="pfp"
                  src={data.pfp}
                  alt="user's profile picture"
                ></img>
                <paragraph className="otherText">{data.message}</paragraph>
              </div>
            </li> :
            <li key={index} className="ownText">
            <div>
              {data.message}
            </div>
          </li> 
          );
        })}
      </ul>
    </div>
  );
};

export default Texts;
