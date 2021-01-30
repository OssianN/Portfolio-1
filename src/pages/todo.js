import { Link } from 'gatsby';
import React from 'react'
import TodoComponent from '../components/todo';

const Todo = () => {
  return (
    <>
      <Link to='/portfolio' className='backToPortfolioLink'>&#x2039; Portfolio</Link>
      <TodoComponent /> 
    </>
  );
};

export default Todo;
