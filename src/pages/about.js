import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/about.scss';
import ReactSVG from '../components/ReactSVG';

const About = () => {
  const [ rotateStyles, setRotateStyles ] = useState({
    ballOne: {},
    ballTwo: {},
    ballThree: {},
  })
  const [ zStyle, setZstyle ] = useState({});

  const handleMousePosition = e => {
    if( e && window ) {
      const name = e.target.attributes.name.value;
      const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
      const yAxis = ((window.innerHeight ) / 2 - e.clientY) / 15;
      setRotateStyles({...rotateStyles, [name]:
        {
          transform: `rotateX(${yAxis}deg) rotateY(${xAxis * -1}deg)`,
        }
      });
      setZstyle({transform: 'translateZ(100px)',});
    }
  }

  const handleMouseLeave = e => {
    if( e ) {
      const name = e?.target?.attributes?.name?.value;
      setRotateStyles({...rotateStyles, [name]: { transition: '.5s ease-out' }});
    }
    setZstyle({transform: '',});
  }

  return (
    <Layout tabName='about'>
      <div className='aboutContainer'>
        <div className='about'>
          <h1 className='header-title--standard'>A quick summary of my journey.</h1>
          <div className='myStory'>
            <p className='bread-text--standard'>
              Human interaction and behavior has for a long time been an interest of mine.
              With that interest in <i>mind</i>, I tailored my education at Lund's university to result in two bachelor degrees – one in Sociology, one in Psychology – and one master's degree in HR and work psychology.
              <br />
              <br />
              <b className='bold-text--big'>Plot twist</b> though, towards the end of this journey I discovered software development.
              I quickly realized, that was an even better fit for me, as I found it extremly captivating and rewarding.
              I decided, after my masters, to persue this dream.
              This is when I discovered &lt;/salt&gt; – a possibility for me to achieve this goal through an intense bootcamp.
              <b className='bold-text--big'> Out of 1500 applicants</b>, me and 30 others were selected for the program after having gone through an extensive assessment process.
              When the bootcamp was coming to an end, I was asked by &lt;/salt&gt; to come work as an instructor for the bootcamp.
              <br />
              <br />
              Sort of full circle, I'm now working as a <b className='bold-text--big'>Full Stack JS instructor</b>.
              I get to apply my knowledge about software development as well as people every day, and I also learn a lot about both in the process.
            </p>
          </div>
          <div className='aboutListContainer'>
            <div
              className='skillball__event-container'
              name='ballOne'
              onMouseMove={handleMousePosition}
              onMouseLeave={handleMouseLeave}>
              <div
                className='skillBall' style={rotateStyles.ballOne}>
                <ReactSVG
                  blobType={2}
                />
                <ul style={zStyle}>
                <h2 className='about-list__category-title'>Frontend</h2>
                  <li>
                    <p className='about-list__category-list-item'>
                      Javascript
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      HTML
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      CSS/SASS
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      React
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      Gatsby
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      Redux
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className='skillball__event-container'
              name='ballTwo'
              onMouseMove={handleMousePosition}
              onMouseLeave={handleMouseLeave}>
              <div className='skillBall' style={rotateStyles.ballTwo}>
                <ReactSVG
                  blobType={1}
                />
                <ul style={zStyle}>
                  <h2 className='about-list__category-title' >Backend</h2>
                  <li>
                    <p className='about-list__category-list-item'>
                      Node.js
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      Express.js
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      REST
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      GraphQL
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      MongoDB
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      SQL
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className='skillball__event-container'
              name='ballThree'
              onMouseMove={handleMousePosition}
              onMouseLeave={handleMouseLeave}>
              <div className='skillBall' style={rotateStyles.ballThree}>
              <ReactSVG
                  blobType={0}
                />
                <ul style={zStyle}>
                <h2 className='about-list__category-title' >Tools</h2>
                  <li>
                    <p className='about-list__category-list-item'>
                      Netlify
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      Heroku
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      Contentful
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      Mocha/Jest
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      TDD
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      Figma
                    </p>
                  </li>
                  <li>
                    <p className='about-list__category-list-item'>
                      Agile
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;