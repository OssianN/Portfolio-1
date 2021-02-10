import React, { useState, useRef } from 'react';
import axios from 'axios';
import './guestBook.scss';
require('dotenv').config();

const GuestBookForm = (props) => {
  const [nameData, setNameData] = useState(null);
  const [msgData, setMsgData] = useState(null);
  const nameValue = useRef('');
  const messageValue = useRef('');

  const resetForm = () => {
    nameValue.current.value = null;
    messageValue.current.value = null;
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const hideFormIfMobile = () => {
    if (window === 'undefined') return;
    if (window.innerWidth > 1000) {
      props.showGuestBookForm();
    }
  }
  
  const handleSubmitMessage = async e => {
    e.preventDefault();
    hideFormIfMobile();

    const messageData = {
      name: nameData,
      msg: msgData,
      id: Date.now(),
    }

    const fetchData = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(messageData),
    }

    resetForm();
    props.showGuestBookForm();
    const response = await fetch("/.netlify/functions/mongoDB", fetchData);
    const data = await response.json();
    props.setMessages(data);
    props.setUpdateMessages(props.updateMessages + 1);
  }

  const handleNameChange = e => {
    setNameData(e.target.value);
  }

  const handleMsgChange = e => {
    setMsgData(e.target.value);
  }

  const handleCancelForm = () => {
    props.showGuestBookForm();
  }
  
  return (
    <form
      onSubmit={e => handleSubmitMessage(e)}
      className={`guestBookForm ${props.showForm} ${props.formDisplay}`}
      data-netlify-honeypot="bot-field"
      name="guestBook"
    >
      <input type="hidden" name="form-name" value="guestBook" />
      <button className="cancelFormButton" type='button' onClick={handleCancelForm}>&#10005;</button>
      <h1>Write something for all visitors to see... or just smile and wave!</h1>
      <label htmlFor='nameInput'>Your Name</label>
      <input id='nameInput' ref={nameValue} onChange={handleNameChange} name="guestName"></input>
      <label htmlFor='messageInput'>Message</label>
      <textarea id='messageInput' ref={messageValue} onChange={handleMsgChange} name="guestMessage"></textarea>
      <button type='submit' id='sendMessage'>Send It</button>
    </form>
  );
};

export default GuestBookForm;
