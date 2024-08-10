// display the texts 
import {useState, useEffect} from 'react';
import {getWebSocket} from 'util/WebSocket';
import './Texts.css';
const Texts = () => {
    const [texts, setTexts] = useState([]);

    const webSocket = getWebSocket();
    webSocket.off('new text');
    webSocket.on('new text', data => {
        console.log('Got data', data);
        console.log('texts', texts);
        setTexts([...texts, data.message]);
    });

    return (
        <div>
            <h1>Multichat</h1>
            <br/>
        <ul className="text-container">
            {
                texts.map((text, index) => {
                    return <li key={index} className="Texts">{text}</li>;
                })
            }
        </ul>
        </div>
    );
};

export default Texts;