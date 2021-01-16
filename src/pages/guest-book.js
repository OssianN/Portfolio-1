import React, { useState, useEffect } from 'react'
import GuestBookForm from '../components/guestbookForm';
import { graphql } from "gatsby";
import Nav from '../components/Nav';
import '../components/guestbookForm/guestBook.css';

const GuestBook = (props) => {
  const [updateMessages, setUpdateMessages] = useState(0);
  const [messages, setMessages] = useState([]);
  
  const fetchAllMessages = async () => {
    const messagesDB = await props.data.allMongodbGuestBookDbGuestbooks.edges;
    setMessages(messagesDB);
  };

  useEffect(() => {
    fetchAllMessages();
  }, []);

  const renderMessages = () => {
    return messages?.reverse().map(message => {
      const info = message.node;
      return (
        <li key={info.id}>
          <h2>{info.name}</h2>
          <p>{info.msg}</p>
        </li>
      );
    });
  };

  return (
    <div className='guestBookContainer'>
      <Nav navStyle={'guestbookNav'} />
      <div className='guestBook'>
        <GuestBookForm
          updateMessages={updateMessages}
          setUpdateMessages={setUpdateMessages}
          messages={messages}
          setMessages={setMessages}
        />
        <div className='messages'>
          <ul>
            {renderMessages()}
          </ul>
        </div>
      </div>
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
