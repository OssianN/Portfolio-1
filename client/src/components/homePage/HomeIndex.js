import React from 'react';
import './home.css';
import ProfileImage from './ProfileImage.js';
import Title from './Title.js';

const github = require('./images/git.png');
const linkedin = require('./images/linkedin.png');

const Home = props => (
  <div className='home'>
    <ProfileImage />
    <Title />
    <div className='backgroundColumn6' style={props.background} ></div>
    <div className='externalLinksContainer'>
      <a href='https://github.com/OssianN'>
        <img src={github} alt='GitHub link' />
      </a>
      <a href='https://linkedin.com/in/ossian-nörthen'>
        <img src={linkedin} alt='LinkedIn link' />
      </a>
    </div>
  </div>
);

export default Home;
