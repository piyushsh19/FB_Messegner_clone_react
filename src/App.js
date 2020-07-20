import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState(["hi", 'ther']);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessage([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messanger App</h1>
      <form>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <Button type='submit' onClick={sendMessage} variant="contained" color="primary">Send Me</Button>
      </form>
      {
        messages.map(message => 
          <p>{message}</p>
        )
      }
    </div>
  );
}

export default App;
