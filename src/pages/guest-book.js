import React, { useState, useEffect, useRef } from 'react'
import GuestBookForm from '../components/guestbook/GestbookForm';
import { graphql } from "gatsby";
import Nav from '../components/Nav';
import '../components/guestbook/guestBook.scss';

const GuestBook = (props) => {
  const [updateMessages, setUpdateMessages] = useState(0);
  const [messages, setMessages] = useState([]);
  const [showForm, setShowForm] = useState('guestBookForm');
  const [showbutton, setShowButton] = useState('block');
  
  const fetchDBMessages = async () => {
    const messagesDB = await props.data.allMongodbGuestBookDbGuestbooks.edges;
    setMessages(messagesDB);
  };
  
  const renderMessages = () => {
    const messagesCopy = [...messages];
    return messagesCopy?.reverse().map(message => {
      const info = message.node;
      return (
        <li key={info.id}>
          <h2>{info.name}</h2>
          <p>{info.msg}</p>
        </li>
      );
    });
  };

  const showGuestBookForm = () => {
    hideShowButton();
    showForm === 'guestBookForm'
      ? setShowForm('showGuestBookForm')
      : setShowForm('guestBookForm');
  }

  const hideShowButton = () => showForm === 'showGuestBookForm'
    ? setShowButton('block')
    : setTimeout(() => setShowButton('none'), 1000);
  
    useEffect(() => {
      fetchDBMessages();
    }, []);

  return (
    <div className='guestBookContainer'>
      <div className='fadeListTop'></div>
      <Nav navStyle='guestbookNav' />
      <div className='guestBook'>
        <GuestBookForm
          updateMessages={updateMessages}
          setUpdateMessages={setUpdateMessages}
          messages={messages}
          setMessages={setMessages}
          showForm={showForm}
          setShowForm={setShowForm}
          showGuestBookForm={showGuestBookForm}
        />
        <div className='mobileMessageButton'>
          <button onClick={showGuestBookForm} style={{display: showbutton}}>Write a message</button>
        </div>
        <div className='messages'>
          <ul>
            {renderMessages()}
          </ul>
        </div>
      </div>
      <div className='fadeListBottom'></div>
    </div>
  );
};

export default GuestBook;

export const pageQuery = graphql`
  query {
    allMongodbGuestBookDbGuestbooks {
      edges {
        node {
          id
          name
          msg
        }
      }
    }
  }
`;
