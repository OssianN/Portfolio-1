import React from "react"
import HomePage from '../components/homePage/HomeIndex'
import Layout from '../components/Layout';
import '../styles/layout.scss';

const Home = () => {
  return (
    <div className="App">
      <Layout tabName='home' delay={6000}>
        <HomePage />
      </Layout>
    </div>
  )
}

export default Home;
