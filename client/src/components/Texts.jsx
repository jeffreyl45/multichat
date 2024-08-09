import {useState, useEffect} from 'react';
import {getWebSocket} from 'util/WebSocket';
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
            <h1>LOL</h1>
        <ul>
            {
                texts.map((text, index) => {
                    return <li key={index}>{text}</li>;
                })
            }
        </ul>
        </div>
    );
};

export default Texts;