import React from "react"
import Nav from '../components/Nav'
import HomePage from '../components/homePage/HomeIndex'
import SocialMedia from '../components/socialMedia/SocialMedia'
import '../styles/global.scss';

export default function Home() {
  return (
    <div className="App">
      <Nav navStyle='homeNav' />
      <HomePage />
      <SocialMedia />
    </div>
  )
}
