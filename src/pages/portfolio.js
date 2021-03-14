import React from 'react';
import Layout from '../components/Layout';
import Img from "gatsby-image";
import FadeInSection from '../components/FadeInSection';
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/portfolio.scss';

const Portfolio = () => {

  const data = useStaticQuery(
    graphql`
    {
      allContentfulPortfolio {
        edges {
          node {
            description {
              description
            }
            link
            slug
            title
            portfolioImg {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `
  )

  const portfolios = data.allContentfulPortfolio?.edges;

  return (
    <Layout tabName='portfolio'>
      <div className='portfolioContainer'>
        <div className='portfolio'>
          <header className='portfolio_header'>
            <h2>Here are some projects I've done, starting from my first app at the bottom up to now.</h2>
          </header>
          <div className='projectsContainer'>
            <p>present</p>
            <div className='timePole'></div>
            {portfolios?.reverse().map(portfolio => {
              return (
                <>
                <FadeInSection>
                  <h2 className='portfolio_box_header'>{ portfolio.node.title }</h2>
                  <a href={ portfolio.node.link } className='portfolioLink'>
                    <Img fluid={ portfolio.node.portfolioImg.fluid } alt={ portfolio.node.portfolioImg.title } className='portfolioImg'></Img>
                  </a>
                  <p>{ portfolio.node.description.description }</p>
                </FadeInSection>
                <div className='timePole'></div>
                </>
              )
            })}
            <p className='beginning'>beginning</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio;