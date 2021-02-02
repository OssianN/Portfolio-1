import React from 'react';
import './home.scss';
import Title from './Title.js';
import ProfileImage from './ProfileImage';
import images from '../images';

const Home = () => {
  return (
    <div className='home'>
      <ProfileImage />
      <Title />
      <div className='externalLinksContainer'>
        <div className='externalLinksBlob'>
          <img src={images.blob}></img>
        </div>
        <a href='https://github.com/OssianN'>
          <img src={images.git} alt='GitHub link' />
        </a>
        <a href='https://linkedin.com/in/ossian-nörthen'>
          <img src={images.linkedin} alt='LinkedIn link' />
        </a>
      </div>
    </div>
  )
};

export default Home;
