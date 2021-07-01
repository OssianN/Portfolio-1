import React, { useState } from 'react'
import './home.scss'

const ProfileImage = () => {
  const [showImage, setShowImage] = useState({ opacity: 0, transition: '1s' })

  const handleShowImage = () => {
    return setTimeout(() => {
      return setShowImage({ opacity: 1, transition: '1s' })
    }, 6000)
  }

  handleShowImage()

  return (
    <div className='profile-img__container' style={showImage}>
      <div className='profile-img__top-background'></div>
    </div>
  )
}

export default ProfileImage
