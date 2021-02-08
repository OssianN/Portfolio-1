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
      if (prevScrollY < currentScrollY && currentScrollY > 50) {
        navbarRef.current.classList.add('scrollNav');
      } else {
        navbarRef.current.classList.remove('scrollNav');
      }
      prevScrollY = currentScrollY;
    }
  }

  useEffect(() => {
    hideNavOnScroll();
    changeNavBackground();
  });

  return (
    <nav className='navbar' ref={navbarRef} style={{marginRight: props.showMobileNav}}>
      <ul>
        <span className='activeTabSpan activeHome' style={{opacity: props.tabName === 'home' ? 1 : 0}}></span>
        <li>
          <Link to="/">home</Link>
        </li>
        <span className='activeTabSpan activeAbout' style={{opacity: props.tabName === 'about' ? 1: 0}}></span>
        <li>
          <Link to="/about/">about</Link>
        </li>
        <span className='activeTabSpan activeGuestBook' style={{opacity: props.tabName === 'guest-book' ? 1: 0}}></span>
        <li>
          <Link to="/guest-book/">guest book</Link>
        </li>
        <span className='activeTabSpan activePortfolio' style={{opacity: props.tabName === 'portfolio' ? 1: 0}}></span>
        <li>
          <Link to="/portfolio/">portfolio</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;