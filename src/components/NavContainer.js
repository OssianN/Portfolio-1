import React, { useState, useLayoutEffect } from 'react';
import Navigation from './NavigationBar';
import Hamburger from './hamburger';
import '../styles/navbar.scss';

const Nav = props => {
  const [showMobileNav, setShowMobileNav] = useState('-400px');
  const [ homeTransition, setHomeTransition ] = useState(null);

  useLayoutEffect(() => {
    if (props.tabName !== 'home') {
      setHomeTransition({ opacity: 1 });
    }
    if (props.tabName === 'home') {
      setTimeout(() => setHomeTransition({ transition: '1s ease-out', opacity: 1 }), 6000);
    }
  }, [])

  return (
    <div>
      <Hamburger
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      <Navigation
        homeTransition={homeTransition}
        showMobileNav={showMobileNav}
        setActiveTabPosition={props.setActiveTabPosition}
      />
    </div>
  );
}

export default Nav;
