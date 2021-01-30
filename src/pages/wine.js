import { Link } from 'gatsby';
import React from 'react'
import WineComponent from '../components/wine';

const Wine = () => {
  return (
    <>
      <Link to='/portfolio' className='backToPortfolioLink'>&#x2039; Portfolio</Link>
      <WineComponent /> 
    </>
  );
};

export default Wine;
