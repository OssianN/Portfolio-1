import React, { useState } from "react"
import Nav from '../components/Nav'
import HomePage from '../components/homePage/HomeIndex'
import '../styles/global.css';

export default function Home() {
  const [navStyle, setNavStyle] = useState('homeNav');

  return <div className="App">
    <Nav navStyle={navStyle} setNavStyle={setNavStyle} />
    <HomePage />
</div>
}
