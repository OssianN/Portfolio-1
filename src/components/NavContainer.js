import React, { useState } from 'react';
import Navigation from './NavigationBar';
import Hamburger from './hamburger';
import '../styles/navbar.scss';

const Nav = props => {
  const [showMobileNav, setShowMobileNav] = useState('-400px');

  return (
    <>
      <Hamburger
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      <Navigation
        showMobileNav={showMobileNav}
        setActiveTabPosition={props.setActiveTabPosition}
      />
    </>
  );
}

export default Nav;
