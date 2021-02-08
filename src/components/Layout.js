import React from 'react'
import NavContainer from './NavContainer';
import SocialMedia from './socialMedia/SocialMedia';

const Template = ({ children, tabName }) => {
  return (
    <>
      <NavContainer 
        tabName={tabName}
        />
      { children }
      <SocialMedia />
    </>
  )
}

export default Template;
