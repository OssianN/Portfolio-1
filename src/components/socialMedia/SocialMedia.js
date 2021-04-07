import React, { useState, useEffect, useRef } from 'react';
import images from '../../images';
import './socialMedia.scss';

const SocialMedia = ( { tabName } ) => {
  const [ hide, setHide ] = useState('0');

  if (tabName === 'home') {
    setTimeout(() => setHide('1'), 4500)
  }

  if (!tabName || tabName !== 'home') {
    setTimeout(() => setHide('1'), 0)
  }

  return (
    <>
      <div className='externalLinksContainer'>
        <div className='externalLinksBlob'>
        </div>
        <div className='social-media__inset-bubble' style={{opacity: hide}}></div>
        <a href='https://github.com/OssianN' style={{opacity: hide}}>
          <img src={images.git} alt='GitHub link' />
        </a>
        <a href='https://linkedin.com/in/ossian-nörthen' style={{opacity: hide}}>
          <img src={images.linkedin} alt='LinkedIn link' />
        </a>
      </div>
    </>
  )
}

export default SocialMedia;