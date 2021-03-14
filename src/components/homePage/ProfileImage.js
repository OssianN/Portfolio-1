import React, { useState } from 'react';
import './home.scss';
import images from '../../images';

const ProfileImage = () => {
  const [showImage, setShowImage] = useState('hide');

const handleTitleTransition = () => {
  return setTimeout(() => {
    return setShowImage('profileImageBig');
  }, 100);
};

handleTitleTransition();

  return (
    <div className="imgContainer">
      <img src={images.profilePic} alt='profilePic' className={showImage}/>
    </div>
  );
}

export default ProfileImage;
