import React from 'react'
import Nav from '../components/Nav'
import '../styles/portfolio.scss';
import { Link } from 'gatsby';

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <Nav navStyle='notHomeNav' />
      <div className='portfolio'>
        <Link to='/todo' className='portfolioLink'>
          <h2>ToDuties</h2>
        </Link>
        <Link to='/wine' className='portfolioLink'>
          <h2>Wine App</h2>
        </Link>
        <Link to='/todo' className='portfolioLink'>
          <h2>Qutine</h2>
        </Link>
        <Link to='/todo' className='portfolioLink'>
          <h2>Gallery App</h2>
        </Link>
        <Link to='/todo' className='portfolioLink'>
          <h2>Förskoleupprorets Hemsida</h2>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio;