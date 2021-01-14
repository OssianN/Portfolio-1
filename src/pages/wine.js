import React from 'react'
import WineComponent from '../components/wine';
import Nav from '../components/Nav'

const Wine = () => {
  return (
    <div>
      <Nav navStyle={'notHomeNav'} />
      <WineComponent />
    </div>
  )
}

export default Wine;