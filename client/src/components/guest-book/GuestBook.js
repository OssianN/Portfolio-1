import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './GuestBook.css';

const GuestBook = () => {
  const [guestMessages, setGuestMessages] = useState(null);
  
  const nameValue = useRef(null);
  const messageValue = useRef(null);
  
  const getMessages = async () => {
    const response = await axios.get('/guestBook');
    console.log('get', response.data);
    setGuestMessages(await response.data);
  };

  const handleSubmitMessage = async e => {
    e.preventDefault();
    const data = {
      name: nameValue.current.value,
      msg: messageValue.current.value
    };
    await axios.post('/guestBook', data);
    await getMessages();
    resetForm();
  };
  
  const renderMessages = () => {
    return guestMessages?.reverse().map(msg => {
      return (
        <li key={msg._id}>
          <h2>{msg.name}</h2>
          <p>{msg.msg}</p>
        </li>
      );
    });
  };

  const resetForm = () => {
    nameValue.current.value = '';
    messageValue.current.value = '';
  };
  
    useEffect(() => {
      getMessages();
    }, []);
  
  return (
    <div className='guestBook'>
      <form className='guestBookForm' onSubmit={handleSubmitMessage}>
        <h1>Write something for all visitors to see.. be nice!</h1>
        <label htmlFor='nameInput'>Your Name</label>
        <input id='nameInput' ref={nameValue}></input>
        <label htmlFor='messageInput'>Message</label>
        <textarea id='messageInput' ref={messageValue}></textarea>
        <button type='submit' id='sendMessage'>Send It</button>
      </form>
      <div className='messages'>
        <ul>
          {renderMessages()}
        </ul>
      </div>
    </div>
  );
};

export default GuestBook;
