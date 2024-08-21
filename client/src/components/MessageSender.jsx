import {useState} from 'react';
import { getWebSocket } from 'util/WebSocket';
import "./MessageSender.css"

const MessageSender = ({controller}) => {
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const webSocket = getWebSocket();
        webSocket.emit("sendMessage", {message});
        controller.addText({message})
        setMessage('');
        

    }
    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="message" placeholder="Message..." value={message} onChange={handleChange}></input>
            <input type="submit" disabled={message.length == 0} value="➢"></input>
        </form>
    )

};
export default MessageSender;