import React, { useState, useLayoutEffect } from 'react'
import Navigation from './NavigationBar'
import Hamburger from './hamburger'
import '../styles/navbar.scss'

const Nav = ({ tabName, setActiveTabPosition }) => {
  const [showMobileNav, setShowMobileNav] = useState('-400px')
  const [homeTransition, setHomeTransition] = useState(null)

  useLayoutEffect(() => {
    if (tabName !== 'home') {
      setHomeTransition({ opacity: 1 })
    }
    if (tabName === 'home') {
      setTimeout(
        () => setHomeTransition({ transition: '1s ease-out', opacity: 1 }),
        6000
      )
    }
  }, [tabName])

  return (
    <div>
      <Hamburger
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      <Navigation
        homeTransition={homeTransition}
        showMobileNav={showMobileNav}
        setActiveTabPosition={setActiveTabPosition}
      />
    </div>
  )
}

export default Nav
