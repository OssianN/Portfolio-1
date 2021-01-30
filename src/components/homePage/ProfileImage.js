import React from 'react';
import './home.scss';
import images from '../images';

const ProfileImage = () => {
  // fixa så bilden laddar innan render, så att den inte laddar animation innan bild.
  return (
    <div className="imgContainer">
      <img src={images.profilePic} alt='' className={'profileImageBig'} />
    </div>
  );
};

export default ProfileImage;
