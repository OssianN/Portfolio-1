import React, { useState, useEffect } from 'react'
import GuestBookForm from '../components/guestbook/GestbookForm'
import Layout from '../components/Layout'
import BiggerTextInView from '../components/BiggerTextInView'
import '../styles/guestBook.scss'

const GuestBook = () => {
  const [updateMessages, setUpdateMessages] = useState(0)
  const [messages, setMessages] = useState([])
  const [showForm, setShowForm] = useState(false)

  const adjectiveList = [
    'cool',
    'awesome',
    'nice',
    'sweet',
    'great',
    'good',
    'better',
    'best',
    'damn',
    'send',
    'fantastic',
    'jäklar',
    'grym',
    'jävlar',
    'snygg',
    'snyggt',
    'Ossian',
    'kingen',
    'king',
  ]

  const emphasizeAdjectiveJSX = (word, i) => {
    return (
      <span key={i} className='message__emphasize-container'>
        <span className='message__emphasize-span'>{` ${word} `}</span>
        <span className='message__emphasize-placeholder'>{` ${word} `}</span>
      </span>
    )
  }

  const emphasizeAdjective = message => {
    if (!message) {
      return
    }

    return message.split(/\b/).map((word, i) => {
      const match = adjectiveList.find(
        adj => adj.toLowerCase() === word.toLowerCase()
      )
      if (match) {
        return emphasizeAdjectiveJSX(match, i)
      }
      return word
    })
  }

  const fetchDBMessages = async () => {
    const response = await fetch('/.netlify/functions/mongoDB')
    const data = await response.json()
    setMessages(data)
    setUpdateMessages(updateMessages + 1)
  }

  const renderMessages = () => {
    if (messages.length === 0) {
      return <h1>loading...</h1>
    }

    const messagesCopy = [...messages]

    return messagesCopy?.reverse().map(message => {
      const info = message.node || message
      return (
        <BiggerTextInView key={info._id}>
          <p className='bread-text--standard'>{info.name}</p>
          <p className='message__body-p'>{emphasizeAdjective(info.msg)}</p>
        </BiggerTextInView>
      )
    })
  }

  
  const showFormIfDesktop = () => {
    if (window && window.innerWidth > 1000) {
      setShowForm(true)
    }
  }

  const hideFormIfMobile = () => {
    if (window && window.innerWidth < 1001) {
      setShowForm(false)
    }
  }
  
  const showOrHideForm = () => {
    setShowForm(!showForm)
  }

  useEffect(() => {
    if (!window) {
      return
    }

    window.addEventListener('resize', () => {
      showFormIfDesktop()
      hideFormIfMobile()
    })

    return () => {
      window.removeEventListener('resize', () => {
        showFormIfDesktop()
        hideFormIfMobile()
      })
    }
  })

  useEffect(() => {
    showFormIfDesktop()
    hideFormIfMobile()
  }, [])

  useEffect(() => {
    if (messages.length === 0) {
      fetchDBMessages()
    }
  })

  return (
    <Layout tabName='guest-book'>
      <main className='guestbook'>
        <section className='guestbook__messages-wrapper'>
          <h1 className='header-title--standard guestbook-title'>
            Write something for all visitors to see...
            <p className='guestbook__title-span bread-text--standard'>
              or just smile and wave!
            </p>
          </h1>
          <div className='guestbook__show-form-container'>
            <button
              onClick={showOrHideForm}
              className='guestbook__show-form-button'>
              Write a message
            </button>
          </div>
          <ul className='guestbook__messages-ul'>{renderMessages()}</ul>
        </section>
        <GuestBookForm
          updateMessages={updateMessages}
          setUpdateMessages={setUpdateMessages}
          setMessages={setMessages}
          showForm={showForm}
          showOrHideForm={showOrHideForm}
        />
      </main>
      <div className='guestbook__messages-fade--bottom'></div>
    </Layout>
  )
}

export default GuestBook
