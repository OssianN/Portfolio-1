import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import '../styles/navbar.scss';

const Nav = props => {
  const [navShow, setNavShow] = useState('hide');
  const [navClass, setNavClass] = useState('');
  const [showMobileNav, setShowMobileNav] = useState('-400px');
  const [navToogleClass, setNavToggleClass] = useState('');
  const [activeTab, setActiveTab] = useState(null);

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
    const tabName = window ? window.location.href.match(/\/[-\w]*?\/?$/ig)[0] : undefined;
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
        <nav className={navShow} style={{marginRight: showMobileNav}}>
          <div className='fadeListTop'></div>
          <ul className={`defaultNav ${props.navStyle}`} >
            <li className={ activeTab === '/' ? 'activeTab' : ''}>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li className={ activeTab === '/guest-book' ? 'activeTab' : ''}>
              <Link to='/guest-book'>
                Guest Book
              </Link>
            </li>
            <li className={ activeTab === '/about' ? 'activeTab' : ''}>
              <Link to='/about'>
                About
              </Link>
            </li>
            <li className={ activeTab === '/portfolio' ? 'activeTab' : ''}>
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
