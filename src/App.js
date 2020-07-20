import React, { useState, useEffect } from 'react';
import {  FormControl, Input } from '@material-ui/core';
import Message from './Message';
import './App.css';
import db from "./firebase";
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc =>({id:doc.id, message:doc.data()})))
    })
  }, [])

  useEffect(() => {
    
    setUsername(prompt('Please enter your name'))
   
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //run on local 
    //setMessage([...messages, {username:username, message:input}]);
    setInput('');
  }

  return (
    <div className="App">
      <img src=""></img>
      <h1>Messanger App</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder="Enter a Message..." value={input} onChange={event => setInput(event.target.value)} />
        <IconButton className="app__button" disabled={!input} type='submit' onClick={sendMessage} variant="contained" color="primary">
          <SendIcon />
        </IconButton>
        </FormControl>
      </form>
      <FlipMove>
      {
        messages.map(({id, message}) => 
          //<Message username={message.username} text={message.text}/> 
          <Message  key= {id} username={username} message={message}/> //person  who logged in, and a whole meesage
          )
      }
      </FlipMove>
      
    </div>
  );
}

export default App;
