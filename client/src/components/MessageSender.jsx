import {useState} from 'react';
import { getWebSocket } from 'util/WebSocket';

const MessageSender = ({controller}) => {
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const webSocket = getWebSocket();
        webSocket.emit("sendMessage", {message});
        setMessage('');
        controller.addText({message})

    }
    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="message">Message:</label><br />
            <input type="text" name="message" value={message} onChange={handleChange}></input><br />
            <input type="submit" disabled={message.length == 0}></input>
        </form>
    )

};
export default MessageSender;