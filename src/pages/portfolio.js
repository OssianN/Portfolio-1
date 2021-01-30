import React from 'react'
import Nav from '../components/Nav'
import '../styles/portfolio.scss';
import { Link } from 'gatsby';
import images from '../components/images/';

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <Nav navStyle='notHomeNav' />
      <div className='portfolio'>
        <Link to='/guest-book' className='portfolioLink'>
          <h2>The Next Facebook</h2>
          <img alt='nextFB'></img>
          <p>Check it out.</p>
        </Link>
        <Link to='/todo' className='portfolioLink'>
          <h2>Förskoleupproret's Webpage</h2>
          <img src={ images.forskoleupproret } alt='forskoleupproret' className='portfolioImg'></img>
        </Link>
        <Link to='https://qutine.herokuapp.com' className='portfolioLink'>
          <h2>Qutine</h2>
          <img src={ images.qutine } alt='qutine' className='portfolioImg'></img>
          <p>Qutine was created by me, José Rodriguez and Therese Abrahamsson. It's an app that helps you stay organized and keep your routine during quarantine. To create this app we used React, Redux, Express, MongoDB, Mongoose, Socket.io and Heruko.</p>
        </Link>
        <Link to='/todo' className='portfolioLink'>
          <h2>Gallery App</h2>
        </Link>
        <Link to='/wine' className='portfolioLink'>
          <h2>Wine App</h2>
          <img src={ images.wine } alt='wine' className='portfolioImg'></img>
          <p>A little solo project during my time at &lt;/salt&gt; for my two day hackaton.
            <br/>
            <br/>
            I asked my dad if there was an app that ha thought was missing in his life. His reply was a wine app to keep track of where the wines are in his shelf. The app is built using React, Express, MongoDB, Mongoose and Heruko.</p>
        </Link>
        <Link to='/todo' className='portfolioLink'>
          <h2>ToDuties</h2>
          <img src={ images.todo } alt='todo' className='portfolioImg'></img>
          <p>My first app built with react. It's just a simple todo app, but god damnit, I built it and I'm proud.</p>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio;