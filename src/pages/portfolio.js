import React from 'react'
import TodoComponent from '../components/todo';
import Nav from '../components/Nav'

const Todo = () => {
  return (
    <div>
      <Nav navStyle='notHomeNav' />
      <TodoComponent />
    </div>
  )
}

export default Todo;