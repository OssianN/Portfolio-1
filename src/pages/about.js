import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import '../styles/about.scss';
import ReactSVG from '../components/ReactSVG';

const About = () => {
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 10))

  return (
    <div className='aboutContainer'>
      <Nav navStyle='notHomeNav' />
      <div className='about'>
      <h1>Skills</h1>
        <div className='aboutListContainer' >
          <div className='skillBall'>
            <ReactSVG
              blobType={randomNum}
            />
            <ul>
              <h2>Backend</h2>
              <li>
                Node.js
              </li>
              <li>
                Express.js
              </li>
              <li>
                REST
              </li>
              <li>
                GraphQL
              </li>
              <li>
                MongoDB
              </li>
              <li>
                PostgreSQL
              </li>
            </ul>
          </div>
          <div className='skillBall'>
          <ReactSVG
              blobType={randomNum + 1 <= 9 ? randomNum + 1 : 0}
            />
            <ul>
            <h2>Frontend</h2>
              <li>
                HTML
              </li>
              <li>
                CSS/SASS
              </li>
              <li>
                React
              </li>
              <li>
                Gatsby
              </li>
              <li>
                Redux
              </li>
            </ul>
          </div>
          <div className='skillBall'>
          <ReactSVG
              blobType={randomNum - 1 >= 0 ? randomNum - 1 : 9}
            />
            <ul>
            <h2>Tools</h2>
              <li>
                Netlify
              </li>
              <li>
                Heroku
              </li>
              <li>
                Contentful
              </li>
              <li>
                Mocha/Jest
              </li>
              <li>
                TDD
              </li>
              <li>
                Agile methods
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;