import React, { useState, useRef } from 'react';
import axios from 'axios';
import './guestBook.scss';
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

  const updateLocalState = (data) => {
    const messages = props.messages;
    props.setMessages([ ...messages, {node: data }]);
    props.setUpdateMessages(props.updateMessages + 1);
  }

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
      preview: '(Local Preview)',
      id: Date.now(),
    }

    const fetchData = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(messageData),
    }

    updateLocalState(messageData); //becasue local preview of the message = better UX.
    resetForm();
    await fetch("/", fetchData);
    console.log(fetchData, 'data')
    sendGuestWebhook(); //beacuse we want a rebuild when new data is submitted to DB.
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
      className={`guestBookForm ${props.showForm} ${props.formDisplay}`}
      name="guestBook"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={e => handleSubmitMessage(e)}>
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
