import React from "react"
import HomePage from '../components/homePage/HomeIndex'
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import '../styles/global.scss';

const Home = () => {
  return (
    <div className="App">
      <Layout tabName='/'>
        <HomePage />
      </Layout>
    </div>
  )
}

export default Home;
