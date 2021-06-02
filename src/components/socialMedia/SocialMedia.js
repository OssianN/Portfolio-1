import React, { useState, useLayoutEffect } from 'react';
import images from '../../images';
import './socialMedia.scss';

const SocialMedia = ( { tabName } ) => {
  const [ socialMediaTransition, setSocialMediaTransition ] = useState(null);

  useLayoutEffect(() => {
    if (tabName === 'home') {
      setTimeout(() => setSocialMediaTransition({ transition: '1s ease-out', opacity: 1 }), 6000);
      return;
    }
    setSocialMediaTransition({ opacity: 1 });
  }, [tabName])

  return (
    <>
      <div className='externalLinksContainer'>
        <div className='externalLinksBlob'></div>
        <div className='social-media__inset-bubble' style={socialMediaTransition}></div>
        <a href='https://github.com/OssianN' style={socialMediaTransition}>
          <img src={images.git} alt='GitHub link' />
        </a>
        <a href='https://linkedin.com/in/ossian-nörthen' style={socialMediaTransition}>
          <img src={images.linkedin} alt='LinkedIn link' />
        </a>
      </div>
    </>
  )
}

export default SocialMedia;