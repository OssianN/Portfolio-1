import React from 'react';
import Nav from '../components/Nav';
import '../styles/about.scss';

const About = () => {
  return (
    <div className='aboutContainer'>
      <Nav navStyle='notHomeNav' />
      <div className='about'>
      <h1>Skills</h1>
        <div className='aboutListContainer' >
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
              Agile work methods
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;