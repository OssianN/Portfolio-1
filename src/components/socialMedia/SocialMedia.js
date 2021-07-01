import React, { useState, useLayoutEffect } from 'react'
import images from '../../images'
import './socialMedia.scss'

const SocialMedia = ({ tabName }) => {
  const [socialMediaTransition, setSocialMediaTransition] = useState(null)

  useLayoutEffect(() => {
    if (tabName === 'home') {
      setSocialMediaTransition({ display: 'none' })
    }
  }, [tabName])

  return (
    <div className='social-media__container'>
      <div className='social-media__blob' style={socialMediaTransition}></div>
      <a href='https://github.com/OssianN'>
        <img src={images.git} alt='GitHub link' />
      </a>
      <a href='https://linkedin.com/in/ossian-nörthen'>
        <img src={images.linkedin} alt='LinkedIn link' />
      </a>
    </div>
  )
}

export default SocialMedia
