import React, { useState, useRef } from 'react';
import axios from 'axios';
import './guestBook.css';
require('dotenv').config();

const GuestBookForm = (props) => {
  const [nameData, setNameData] = useState(null);
  const [msgData, setMsgData] = useState(null);
  const nameValue = useRef('');
  const messageValue = useRef('');

  const sendGuestWebhook = () => {
    axios({
      method: 'post',
      url: 'https://api.netlify.com/build_hooks/6002ba1b511639c24ee7b511',
    });
  }


  const resetForm = () => {
    nameValue.current.value = null;
    messageValue.current.value = null;
  };
  
  const handleSubmitMessage = async e => {
    const messageData = {
      node: {
        name: nameData,
        msg: msgData,
        id: Date.now(),
      }
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: messageData,
    })
    e.preventDefault();
    // await axios({
    //   method: 'put',
    //   url: '/api/postGuestMessage',
    //   data: messageData
    // });
    // sendGuestWebhook();
    
    const messages = props.messages;
    props.setMessages([ ...messages, messageData ]);
    props.setUpdateMessages(props.updateMessages + 1);
  };

  const handleNameChange = e => {
    setNameData(e.target.value);
  };

  const handleMsgChange = e => {
    setMsgData(e.target.value);
  };
  
  return (
    <form 
      className={`guestBookForm ${props.showForm}`}
      onSubmit={e => handleSubmitMessage(e)}
      name="guestBook"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      action=''
      data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="guestBook" />
      <button className="cancelFormButton" onClick={props.showGuestBookForm}>&#10005;</button>
      <h1>Write something for all visitors to see... or just smile and wave!</h1>
      <label htmlFor='nameInput'>Your Name</label>
      <input id='nameInput' ref={nameValue} onChange={handleNameChange} name="guestName"></input>
      <label htmlFor='messageInput'>Message</label>
      <textarea id='messageInput' ref={messageValue} onChange={handleMsgChange} name="guestMessage"></textarea>
      <button type='submit' id='sendMessage'>Send It</button>
      <div data-netlify-recaptcha="true"></div>
    </form>
  );
};

export default GuestBookForm;
