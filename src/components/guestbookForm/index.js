import React, { useRef } from 'react';
import './guestBook.css';

const GuestBookForm = () => {
  
  const nameValue = useRef(null);
  const messageValue = useRef(null);
  
  const handleSubmitMessage = async e => {
    // e.preventDefault();
    // const data = {
    //   name: nameValue.current.value,
    //   msg: messageValue.current.value
    // };
    // await axios.post('/guestBook', data);
    // await getMessages();
    // resetForm();
  };

  const resetForm = () => {
    nameValue.current.value = '';
    messageValue.current.value = '';
  };
  
  return (
    <form className='guestBookForm' onSubmit={handleSubmitMessage}>
      <h1>Write something for all visitors to see.. be nice!</h1>
      <label htmlFor='nameInput'>Your Name</label>
      <input id='nameInput' ref={nameValue}></input>
      <label htmlFor='messageInput'>Message</label>
      <textarea id='messageInput' ref={messageValue}></textarea>
      <button type='submit' id='sendMessage'>Send It</button>
    </form>
  );
};

export default GuestBookForm;
