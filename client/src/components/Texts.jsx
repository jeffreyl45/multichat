// display the texts 
import {useState, useEffect} from 'react';
import {getWebSocket} from 'util/WebSocket';
import './Texts.css';
const Texts = () => {
    const [datas, setDatas] = useState([]);
    const webSocket = getWebSocket();
    webSocket.off('new text');
    webSocket.on('new text', data => {
        console.log('Got data', data);
        console.log('texts', datas);
        setDatas([...datas, data]);
    });

    return (
        <div>
            <h1>Multichat</h1>
            <br/>
        <ul className="text-container">
            {
                datas.map((data, index) => {
                    return <li key={index} className="Texts">
                        <div>
                        <img className = "pfp" src = {data.pfp} alt = " user's profile picture"></img>
                        {data.message}
                        </div>
                        
                        </li>;
                })
            }
        </ul>
        </div>
    );
};

export default Texts;