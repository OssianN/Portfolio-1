import React, { useState } from 'react'
import NavContainer from './NavContainer';
import SocialMedia from './socialMedia/SocialMedia';
import { Helmet } from 'react-helmet';

const Template = ({ children }) => {
  return (
    <>
      <NavContainer />
      <Helmet title='Ossian Nörthen' />
      { children }
      <SocialMedia />
    </>
  )
}

export default Template;
