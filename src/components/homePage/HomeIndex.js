import React from 'react';
import './home.scss';
import Title from './Title.js';
import ProfileImage from './ProfileImage';

const Home = () => {
  return (
    <div className='home'>
      <ProfileImage />
      <Title />
    </div>
  )
};

export default Home;
