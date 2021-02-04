import React, { useState } from 'react';
import Nav from '../components/Nav';
import '../styles/about.scss';
import ReactSVG from '../components/ReactSVG';
import SocialMedia from '../components/socialMedia/SocialMedia'

const About = () => {
  const [randomNum] = useState(Math.floor(Math.random() * 10))

  return (
    <div className='aboutContainer'>
      <Nav navStyle='notHomeNav' />
      <div className='about'>
        <div className='myStory'>
          <h1>My story in a few sentences</h1>
          <p>
            Human interaction and behavior has for a long time been an interest of mine.
            With that interest in <i>mind</i>, I tailored my education at Lund's university to result in two bachelor degrees – one in Sociology, one in Psychology – and one master's degree in HR and work psychology.
            <br />
            <br />
            Plot twist though, towards the end of this journey I discovered software development.
            I quickly realized, that was an even better fit for me, as I found it extremly captivating and rewarding.
            I decided, after my masters, to persue this dream.
            This is when I discovered &lt;/salt&gt; – a possibility for me to achieve this goal through an intense bootcamp.
            Out of 1500 applicants, me and 30 others were selected for the program after having gone through an extensive assessment process.
            When the bootcamp was coming to an end, I was asked by &lt;/salt&gt; to come work as an instructor for the bootcamp.
            <br />
            <br />
            Sort of full circle, I'm now working as a Full Stack JS instructor.
            I get to apply my knowledge about software development as well as people every day, and I also learn a lot about both in the process.
          </p>
        </div>
        <div className='aboutListContainer' >
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
                SQL
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
                Figma
              </li>
              <li>
                Agile methods
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default About;