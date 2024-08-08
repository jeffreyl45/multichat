import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
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
  }
  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label for="message">Message:</label><br/>
        <input type="text" name="message" value={message} onChange={handleChange}></input><br/>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default App;
