import React, { useState, useEffect } from 'react'
import GuestBookForm from '../components/guestbook/GestbookForm';
import Layout from '../components/Layout';
import BiggerTextInView from '../components/BiggerTextInView';
import '../styles/guestBook.scss'

const GuestBook = () => {
  const [updateMessages, setUpdateMessages] = useState(0);
  const [messages, setMessages] = useState([]);
  const [showForm, setShowForm] = useState('hideGuestBookForm');
  const [formDisplay, setFormDisplay] = useState('displayNoneClass');

  const adjectiveList = [
    'cool', 'awesome', 'nice',
    'sweet', 'great', 'good',
    'better', 'best', 'damn',
    'send', 'fantastic', 'jäklar',
    'grym', 'jävlar', 'snygg',
    'snyggt','Ossian',
  ];

  const emphasizeAdjective = message => {
    let oneMatch = false;
    return message
      ?.split(/\b/)
      ?.map((word, i) => {
        const match = adjectiveList.filter(adj => adj.toLowerCase() === word.toLowerCase());
        if(match[0] && !oneMatch) {
          oneMatch = true;
          return (
            <span key={i} style={{position: 'relative'}}>
              <span className='message__emphasize-span'>{ ` ${match.join('')}` }</span>
              <span className='message__emphasize-placeholder'>{ ` ${match.join('')}` }</span>
            </span>
          )
        };
        return word;
      })
    }

  const fetchDBMessages = async () => {
    const response = await fetch("/.netlify/functions/mongoDB");
    const data = await response.json();
    setMessages(data);
    setUpdateMessages(updateMessages + 1);
  }

  const renderMessages = () => {
    const messagesCopy = [...messages];
    if (messages.length === 0) return <h1>loading...</h1>;

    return messagesCopy?.reverse().map(message => {
      const info = message.node || message
      return (
        <BiggerTextInView key={info._id}>
          <p className='bread-text--standard'>{info.name} {info.preview ? <span className='localPreview'>{info.preview}</span> : ''}</p>
          <p className='message__body-p'>{emphasizeAdjective(info.msg)}</p>
        </BiggerTextInView>
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
          <div className='messages'>
            <h1 className='guestbook-title header-title--standard'>Write something for all visitors to see...
              <p className='guestbook-form__title-span bread-text--standard'>or just smile and wave!</p>
            </h1>
            <div className='mobileMessageButton'>
              <button onClick={showGuestBookForm} className='showFormButton'>Write a message</button>
            </div>
            <ul>
              {renderMessages()}
            </ul>
          </div>
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
        </div>
        <div className='fadeListBottom'></div>
      </div>
    </Layout>
  );
};

export default GuestBook;
