import React from 'react'
import NavContainer from './NavContainer';
import SocialMedia from './socialMedia/SocialMedia';
import { Helmet } from 'react-helmet';

const Template = ({ children, tabName }) => {
  return (
    <>
      <NavContainer 
        tabName={tabName}
        />
      <Helmet title='Ossian Nörthen' />
      { children }
      <SocialMedia />
    </>
  )
}

export default Template;
