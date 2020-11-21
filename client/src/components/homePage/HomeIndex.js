import React from 'react';
import './home.css';
import ProfileImage from './ProfileImage.js';
import Title from './Title.js';

const Home = () => (
    <div className='home'>
      <ProfileImage />
      <Title />
      <div className='backgroundColumn6'></div>
    </div>
  );

export default Home;
