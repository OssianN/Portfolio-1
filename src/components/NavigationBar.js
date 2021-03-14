import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import '../styles/navbar.scss';

const Navigation = props => {
  const navbarRef = useRef(null);

  const isWindowAndNavUndefined = () => window === 'undefined' || !navbarRef.current;

  const changeNavBackground = () => {
    if (isWindowAndNavUndefined()) return;
    if ( window.scrollY > 0 ) {
      navbarRef.current.style.backgroundColor = '#fcdfa6f6';
    } else {
      navbarRef.current.style.backgroundColor = 'transparent';
    }
  }

  const hideNavOnScroll = () => {
    if (isWindowAndNavUndefined()) return;
    let prevScrollY = window.scrollY;
    window.onscroll  = () => {
      if (isWindowAndNavUndefined()) return;
      changeNavBackground();
      const currentScrollY = window.scrollY;
      const windowBottom = window.innerHeight + window.pageYOffset;
      const bodyHeight = document.documentElement.scrollHeight;
      if ((prevScrollY < currentScrollY && currentScrollY > 50) || windowBottom >= bodyHeight) {
        navbarRef.current.classList.add('scrollNav');
      } else {
        navbarRef.current.classList.remove('scrollNav');
      }
      prevScrollY = currentScrollY;
    }
  }

  const handleActiveTab = () => {
    console.log(props.location);
  }

  useEffect(() => {
    hideNavOnScroll();
    changeNavBackground();
    handleActiveTab();
  });

  return (
    <nav className='navbar' ref={navbarRef} style={{marginRight: props.showMobileNav}}>
      <ul>
        <li className='navbar__list-item'>
          <Link to="/" activeClassName='activeTab'>
            <span className='navbar__list-item__active-span'></span>
            home
          </Link>
        </li>
        <li className='navbar__list-item'>
          <Link to="/about/" activeClassName='activeTab'>
            <span className='navbar__list-item__active-span'></span>
            about
          </Link>
        </li>
        <li className='navbar__list-item'>
          <Link to="/guest-book/" activeClassName='activeTab'>
            <span className='navbar__list-item__active-span'></span>
            guest book
          </Link>
        </li>
        <li className='navbar__list-item'>
          <Link to="/portfolio/" activeClassName='activeTab'>
            <span className='navbar__list-item__active-span'></span>
            portfolio
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;