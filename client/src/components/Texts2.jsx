// display the texts
import { useState, useEffect } from "react";
import { getWebSocket } from "util/WebSocket";
import "./Texts2.css";
const Texts = ({ controller }) => {
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
      <div className="text-container">
        <div className="imessage">
          {controller.texts.map((data, index) => {
            return data.pfp != null ? (
            
                <p key={index} className="fromThem">{data.message}</p>

            ) : (
              <p key={index} className="fromMe">{data.message}</p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Texts;
