import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
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
      <FormControl>
        <InputLabel> Enter A Message </InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} type='submit' onClick={sendMessage} variant="contained" color="primary">Send Me</Button>
        </FormControl>
      </form>
      {
        messages.map(message => 
          <Message  text={message}/>
        )
      }
    </div>
  );
}

export default App;
