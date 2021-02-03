import React, { useRef } from 'react'
import Nav from '../components/Nav'
import '../styles/portfolio.scss';
import { Link } from 'gatsby';
import images from '../images';
import FadeInSection from '../components/FadeInSection';

const Portfolio = () => {
  const portolioRef = useRef(null);
  
  return (
    <div className='portfolioContainer'>
      <Nav navStyle='notHomeNav' portfolioRef={portolioRef} />
      <div className='portfolio' ref={portolioRef}>
        <div className='presentingPortfolio'>
          <h2>Here are some projects I've done, starting from my first React app at the bottom up to now.</h2>
        </div>
        <div className='projectsContainer'>
          <p>present</p>
          <div className='timePole'></div>
          <FadeInSection>
            <Link to='/' className='portfolioLink'>
              <h2>this.page</h2>
              <img src={ images.thisPage } alt='nextFB' className='portfolioImg'></img>
              <p>Check it out.</p>
            </Link>
          </FadeInSection>
          <div className='timePole'></div>
          <FadeInSection>
            <a href='https://forskoleupproret.netlify.app' className='portfolioLink'>
              <h2>Förskoleupproret's Webpage</h2>
              <img src={ images.forskoleupproret } alt='forskoleupproret' className='portfolioImg'></img>
              <p>Förskoleupproret is a non-profitable organization striving to improve the work conditions and the general environment in preschool. They asked me to build them a new webpage using their graphic profile. The serverless application is biult using React, Gatsby, Contentful, Netlify and styled with Sass.</p>
            </a>
          </FadeInSection>
          <div className='timePole'></div>
          <FadeInSection>
            <div className='portfolioLink'>
              <a href='https://qutine.herokuapp.com'>
                <h2>Qutine</h2>
                <img src={ images.qutine } alt='qutine' className='portfolioImg'></img>
              </a>
                <p>Qutine was created by me, <a style={{color:'#3b5249'}} href='https://github.com/jrodri06'>José Rodriguez &#x203A;</a> and <a style={{color:'#3b5249'}} href='https://github.com/tlorraine'>Therese Abrahamsson &#x203A;</a>. It's an app that helps you stay organized and keep your routine during quarantine. To create this app we utilized React, Redux, Express, MongoDB, Mongoose, Socket.io and Heruko. Only developed for desktop.</p>
            </div>
          </FadeInSection>
          <div className='timePole'></div>
          <FadeInSection>
            <a href='https://github.com/OssianN/GalleryApp-React' className='portfolioLink'>
              <h2>Gallery App</h2>
              <img src={images.gallery} alt='gallery' className='portfolioImg'></img>
              <p>During the &lt;/salt&gt; bootcamp, me and my mob built a lot of different projects, mobprogramming. This is one of them – a gallery app that works against the unsplashed API. It's built with React in the frontend and express in the backend. We havn't deployed it anyware, but check out the repo if you want.</p>
            </a>
          </FadeInSection>
          <div className='timePole'></div>
          <FadeInSection>
            <Link to='/wine' className='portfolioLink'>
              <h2>Wine App</h2>
              <img src={ images.wine } alt='wine' className='portfolioImg'></img>
              <p>A little solo project during my time at &lt;/salt&gt; for my two day hackaton.
                I asked my dad if there was an app that ha thought was missing in his life. His reply was a wine app to keep track of where the wines are in his shelf. The app is built using React, Express, MongoDB, Mongoose and Heruko. This is a demo version of that app.</p>
            </Link>
          </FadeInSection>
          <div className='timePole'></div>
          <FadeInSection>
            <Link to='/todo' className='portfolioLink'>
              <h2>ToDuties</h2>
              <img src={ images.todo } alt='todo' className='portfolioImg'></img>
              <p>My first app built with React. It's just a simple todo app, but god damnit, I built it and I'm proud.</p>
            </Link>
          </FadeInSection>
          <div className='timePole'></div>
          <p className='beginning'>beginning</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;