import React, { useEffect, useState } from 'react';
import './home.css';

const ProfileImage = () => {
  const [imgClass, setImgClass] = useState('profileImage');

  const handleImgTransition = () => {
    setTimeout(() => {
      setImgClass('profileImageBig');
    }, 2200);
  };

  useEffect(() => {
    handleImgTransition();
  })

  return (
    <div className="imgContainer">
      <img src={require('./images/profilePic.JPG')} alt='' className={imgClass} />
    </div>
  );
};

export default ProfileImage;
