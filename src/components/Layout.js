import React from 'react'
import NavContainer from './NavContainer'
import SocialMedia from './socialMedia/SocialMedia'
import { Helmet } from 'react-helmet'

const Template = ({ tabName, children }) => {
  return (
    <>
      <NavContainer tabName={tabName} />
      <Helmet title='Ossian Nörthen' />
      <div className='layout__faded-background layout__faded-background--top'></div>
      <div className='layout__faded-background layout__faded-background--bottom'></div>
      {children}
      <SocialMedia tabName={tabName} />
    </>
  )
}

export default Template
