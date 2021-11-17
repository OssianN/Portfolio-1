import React, { useState, useRef } from 'react'
import '../../styles/guestBook.scss'
require('dotenv').config()

const GuestBookForm = props => {
  const [formInput, setFormInput] = useState({
    name: '',
    msg: '',
  })
  const [error, setError] = useState(null)

  const resetForm = () => {
    setFormInput({
      name: '',
      msg: '',
    })
  }

  const handleSubmitMessage = async e => {
    e.preventDefault()

    const { name, msg } = formInput

    if (!name || !msg) {
      return setError('enter a name and a message to send :)')
    }

    const messageData = {
      name,
      msg,
      id: Date.now(),
    }

    const fetchData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify(messageData),
    }

    resetForm()
    props.showOrHideForm()
    const response = await fetch('/.netlify/functions/mongoDB', fetchData)
    const data = await response.json()
    props.setMessages(data)
    props.setUpdateMessages(props.updateMessages + 1)
  }

  const handleInputChange = e => {
    const { name, value } = e.target

    setFormInput({
      ...formInput,
      [name]: value,
    })
  }

  const handleCancelForm = () => {
    props.showOrHideForm()
  }

  return (
    <form
      onSubmit={handleSubmitMessage}
      className={`guestbook-form ${props.showForm ? 'show-form' : 'hide-form'}`}
      data-netlify-honeypot='bot-field'
      name='guestBook'
      data-netlify-recaptcha='true'>
      <input type='hidden' name='form-name' value='guestbook-form' />
      <button
        className='guestbook-form__cancel-form'
        type='button'
        onClick={handleCancelForm}>
        &#10005;
      </button>
      {error ? <p className='guestbook-form__error-message'>{error}</p> : null}
      <label htmlFor='nameInput'>Name</label>
      <input
        id='nameInput'
        className='guestbook-form__input'
        name='name'
        value={formInput.name}
        onChange={handleInputChange}></input>
      <label htmlFor='messageInput'>Message</label>
      <textarea
        id='messageInput'
        name='msg'
        className='guestbook-form__textarea'
        value={formInput.msg}
        onChange={handleInputChange}></textarea>
      <div data-netlify-recaptcha='true'></div>
      <button type='submit' className='guestbook-form__submit-button'>
        Send It
      </button>
    </form>
  )
}

export default GuestBookForm
