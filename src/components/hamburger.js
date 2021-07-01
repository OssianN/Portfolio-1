import React, { useState } from 'react'
import '../styles/hamburger.scss'

const Hamburger = props => {
  const [navToogleClass, setNavToggleClass] = useState('')

  const handleMobileNavToggle = () => {
    if (props.showMobileNav === '0') {
      props.setShowMobileNav('-400px')
      setNavToggleClass('')
    } else {
      props.setShowMobileNav('0')
      setNavToggleClass('open')
    }
  }

  return (
    <button className='mobileNavButton' onClick={handleMobileNavToggle}>
      <div className={`nav-icon ${navToogleClass}`}>
        <span></span>
        <span></span>
      </div>
    </button>
  )
}

export default Hamburger
