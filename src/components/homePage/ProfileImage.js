import React from 'react';
import './home.scss';
import profilePic from './images/profilePic.jpg';

const ProfileImage = () => {
  // fixa så bilden laddar innan render, så att den inte laddar animation innan bild.
  return (
    <div className="imgContainer">
      <img src={profilePic} alt='' className={'profileImageBig'} />
    </div>
  );
};

export default ProfileImage;
