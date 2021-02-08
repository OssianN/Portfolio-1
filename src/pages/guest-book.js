import React, { useState, useEffect } from 'react'
import GuestBookForm from '../components/guestbook/GestbookForm';
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import '../components/guestbook/guestBook.scss';

const GuestBook = (props) => {
  const [updateMessages, setUpdateMessages] = useState(0);
  const [messages, setMessages] = useState([]);
  const [showForm, setShowForm] = useState('hideGuestBookForm');
  const [formDisplay, setFormDisplay] = useState('displayNoneClass')
  
  const fetchDBMessages = async () => {
    const messagesDB = await props.data.allMongodbGuestBookDbGuestbooks.edges;
    setMessages(messagesDB);
  }
  
  const renderMessages = () => {
    const messagesCopy = [...messages];
    return messagesCopy?.reverse().map(message => {
      const info = message.node || message
      return (
        <li key={info.id}>
          <h2>{info.name} {info.preview ? <span className='localPreview'>{info.preview}</span> : ''}</h2>
          <p>{info.msg}</p>
        </li>
      );
    });
  };

  const showGuestBookForm = () => {
    if (showForm === 'hideGuestBookForm') {
      setFormDisplay('');
      setShowForm('showGuestBookForm');
    } else {
      setShowForm('hideGuestBookForm');
      setTimeout(() => setFormDisplay('displayNoneClass'), 1000);
    }
  }
  
    useEffect(() => {
      fetchDBMessages();
    }, []);

  return (
    <Layout  tabName='guest-book'>
      <div className='guestBookContainer'>
        <div className='guestBook'>
          <GuestBookForm
            updateMessages={updateMessages}
            setUpdateMessages={setUpdateMessages}
            messages={messages}
            setMessages={setMessages}
            showForm={showForm}
            setShowForm={setShowForm}
            showGuestBookForm={showGuestBookForm}
            formDisplay={formDisplay}
          />
          <div className='mobileMessageButton'>
            <button onClick={showGuestBookForm} className='showFormButton'>Write a message</button>
          </div>
          <div className='messages'>
            <ul>
              {renderMessages()}
            </ul>
          </div>
        </div>
        <div className='fadeListBottom'></div>
      </div>
    </Layout>
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
