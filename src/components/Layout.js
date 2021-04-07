import React, { useState } from 'react'
import NavContainer from './NavContainer';
import SocialMedia from './socialMedia/SocialMedia';
import { Helmet } from 'react-helmet';

const Template = ({ tabName, children }) => {
  return (
    <>
      <NavContainer tabName={tabName} />
      <Helmet title='Ossian Nörthen' />
      { children }
      <SocialMedia tabName={tabName} />
    </>
  )
}

export default Template;
