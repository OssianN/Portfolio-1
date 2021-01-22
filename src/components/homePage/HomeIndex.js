import React, { useState } from 'react';
import './home.scss';
import ProfileImage from './ProfileImage.js';
import Title from './Title.js';

const github = require('./images/git.png');
const linkedin = require('./images/linkedin.png');

const Home = () => {
  // const [background, setBackground] = useState({
  //   backgroundPositionX: 0,
  //   backgroundPositionY: 0
  // });
  // const moveBackground = (e) => {
  //   setBackground({
  //     backgroundPositionX: `${-e.clientX * .1}px`,
  //     backgroundPositionY: `${-e.clientY * .1}px`,
  //   });
  // };

  return (
    <div className='home'>
      <ProfileImage />
      <Title />
      <div className='externalLinksContainer'>
        <a href='https://github.com/OssianN'>
          <img src={github} alt='GitHub link' />
        </a>
        <a href='https://linkedin.com/in/ossian-nörthen'>
          <img src={linkedin} alt='LinkedIn link' />
        </a>
      </div>
    </div>
  )
};

export default Home;
