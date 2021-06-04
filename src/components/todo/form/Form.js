import React, { useEffect, useState } from 'react'

const Form = props => {
  const [titleInput, setTitleInput] = useState('')
  const [descInput, setDescInput] = useState('')
  const [reRender, setReRender] = useState(false)

  const createCard = () => ({
    id: Date.now(),
    title: titleInput,
    desc: descInput,
    checked: false,
  })

  const addCardToArr = () => {
    const addCard = props.cardsArr.concat(createCard())
    props.setCardsArr(addCard)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const title = e.target.children[0]
    const desc = e.target.children[1]
    setTitleInput(title.value)
    setDescInput(desc.value)
    setReRender(!reRender)
    title.value = ''
    desc.value = ''
  }

  useEffect(() => {
    if (titleInput !== '') {
      addCardToArr()
    }
    // eslint-disable-next-line
  }, [reRender])

  return (
    <div className='toDoForm'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='titleInput'
          placeholder='Add Todo'></input>
        <input
          type='text'
          className='descInput'
          placeholder='Add description'></input>
        <button type='submit' className='formButton'>
          &#x203A;
        </button>
      </form>
    </div>
  )
}

export default Form
