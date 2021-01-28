import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import '../styles/navbar.scss';

const Nav = props => {
  const [navShow, setNavShow] = useState('hide');
  const [navClass, setNavClass] = useState('');
  const [showMobileNav, setShowMobileNav] = useState('-400px');
  const [navToogleClass, setNavToggleClass] = useState('');
  const [activeTab, setActiveTab] = useState(window?.location.href.match(/[-\w]+\/?$/ig)[0]);

  const handleNavTransition = () => {
    if (props.navStyle === 'homeNav') {
      setTimeout(() => {
        setNavShow('navBar');
      }, 1100);
    } else {
      setNavShow('navBar');
    };
  };

  const changeNavBar = () => {
    if (props.navStyle === 'homeNav') {
      setNavClass('homeNav');
    } else {
      setNavClass('notHomeNav');
    };
  };

  const handleMobileNavToggle = () => {
    if (showMobileNav === '0') {
      setShowMobileNav('-400px');
      setNavToggleClass('')
    } else {
      setShowMobileNav('0');
      setNavToggleClass('open')
    };
  };

  const handleActiveTab = () => {
    const tabName = window?.location.href.match(/[-\w]+\/?$/ig)[0];
    setActiveTab(tabName);
  };


  useEffect(() => {
    handleNavTransition();
    changeNavBar();
    handleActiveTab();
  });

    return (
      <>
        <div className='navContainer'>
          <button className='mobileNavButton' onClick={handleMobileNavToggle}>
            <div id='nav-icon2' className={navToogleClass}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <nav className={`mobileNav ${navShow}`} style={{marginRight: showMobileNav}}>
          <ul className={`defaultNav ${props.navStyle}`} >
            <li style={ activeTab === '' ? { borderTop: '3px solid #3b5249' } :{ borderTop: '3px solid #00000000' }}>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li style={ activeTab === 'guest-book' ? { borderTop: '3px solid #3b5249' } :{ borderTop: '3px solid #00000000' }}>
              <Link to='/guest-book'>
                Guest Book
              </Link>
            </li>
            <li style={ activeTab === 'about' ? { borderTop: '3px solid #3b5249' } :{ borderTop: '3px solid #00000000' }}>
              <Link to='/about'>
                About
              </Link>
            </li>
            <li style={ activeTab === 'portfolio' ? { borderTop: '3px solid #3b5249' } :{ borderTop: '3px solid #00000000' }}>
              <Link to='/portfolio'>
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Nav;
