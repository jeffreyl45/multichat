import logo from './logo.svg';
import './App.css';
import MessageSender from 'components/MessageSender';
import Texts from 'components/Texts';

function App() {
  return (
    <div className="App">
      <Texts/>
      <MessageSender/>
    </div>
  );
}

export default App;
