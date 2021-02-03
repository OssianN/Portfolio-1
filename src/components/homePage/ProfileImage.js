import React from 'react';
import './home.scss';
import images from '../images';

const ProfileImage = () => {

  return (
    <div className="imgContainer">
      <img src={images.profilePic} alt='' className={'profileImageBig'} />
    </div>
  );
}

export default ProfileImage;
