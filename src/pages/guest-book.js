import React, { useState, useEffect } from 'react'
import GuestBookForm from '../components/guestbookForm';
import { graphql } from "gatsby";
import Nav from '../components/Nav';
import '../components/guestbookForm/guestBook.css';

const GuestBook = (props) => {
  const [updateMessages, setUpdateMessages] = useState();
  const [messages, setMessages] = useState([]);
  

  const fetchAllMessages = async () => {
    const messages = props.data.allMongodbGuestBookDbGuestbooks.edges;
  //   const res = await axios({
  //     method: 'get',
  //     url: '/api/getGuestMessage',
  //   });
    setMessages(messages);
  }

  useEffect(() => {
    fetchAllMessages();
  }, [updateMessages])

    
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
        <GuestBookForm />
        <div className='messages'>
          <ul>
            {renderMessages()}
          </ul>
        </div>
      </div>
    </div>
  )
}

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
`
