import React, { useState } from "react"
import Nav from '../components/Nav'
import HomePage from '../components/homePage/HomeIndex'
import '../styles/global.css';

export default function Home() {
  return <div className="App">
    <Nav navStyle={'homeNav'} />
    <HomePage />
</div>
}
