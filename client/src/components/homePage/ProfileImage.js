import React from 'react';
import './home.css';

const ProfileImage = () => {
  return (
    <div className="imgContainer">
      <img src={require('./images/profilePic.JPG')} alt='' className={'profileImageBig'} />
    </div>
  );
};

export default ProfileImage;
