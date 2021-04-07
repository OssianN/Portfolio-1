import React, { useState } from 'react';
import './home.scss';
import images from '../../images';

const ProfileImage = () => {
  const [showImage, setShowImage] = useState({ opacity: 0 });

const handleTitleTransition = () => {
  return setTimeout(() => {
    return setShowImage({ opacity: 1 });
  }, 4000);
};

handleTitleTransition();

  return (
    <div className="profile-img__container">
      <img src={images.profilePic} alt='profilePic' className='profile-img__img' style={showImage} />
    </div>
  );
}

export default ProfileImage;
