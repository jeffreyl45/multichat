import {useState} from 'react';
import { getWebSocket } from 'util/WebSocket';

const MessageSender = () => {
    const [message, setMessage] = useState('');
    const handleSubmit = async (event) => {
        // prevent the page from refreshing when entering text onto the form
        event.preventDefault();
        try {
            let res = await fetch("/sendMessage", {
                method: "POST",
                // content type header
                headers: {
                    // mime type to tell the backend to expect a json
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // message : message
                    message,
                })
            });
            const resJson = await res.json();
            console.log(resJson);
        } catch (err) {
            console.error(err);
        }
        setMessage('');
    }
    const handleSubmit2 = (event) => {
        event.preventDefault();
        const webSocket = getWebSocket();
        webSocket.emit("sendMessage", {message});

    }
    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit2}>
            <label htmlFor="message">Message:</label><br />
            <input type="text" name="message" value={message} onChange={handleChange}></input><br />
            <input type="submit" disabled={message.length == 0}></input>
        </form>
    )

};
export default MessageSender;