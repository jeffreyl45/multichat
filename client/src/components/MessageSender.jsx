import {useState} from 'react';

const MessageSender = () => {
    const [message, setMessage] = useState('');
    const handleSubmit = async (event) => {
        // prevent the page from refreshing when entering text onto the form
        event.preventDefault();
        try {
            let res = await fetch("/sendMessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
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