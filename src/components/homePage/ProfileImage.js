import React from 'react';
import './home.css';
import profilePic from './images/profilePic.jpg';

const ProfileImage = () => {
  return (
    <div className="imgContainer">
      <img src={profilePic} alt='' className={'profileImageBig'} />
    </div>
  );
};

export default ProfileImage;
