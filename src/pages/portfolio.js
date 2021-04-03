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
  const reversePortfolio = portfolios?.reverse();

  return (
    <Layout tabName='portfolio'>
      <div className='portfolioContainer'>
        <div className='portfolio'>
          <header className='portfolio__header'>
            <h1 className='header-title--standard'>Here are some projects I've done.</h1>
          </header>
          <div className='projectsContainer'>
            <div className='timePole'></div>
            {reversePortfolio?.map((portfolio, i) => {
              return (
                <>
                <FadeInSection key={i}>
                  <h2 className='portfolio-box__header'>{ portfolio.node.title }</h2>
                  <a href={ portfolio.node.link } className='portfolioLink'>
                    <Img fluid={ portfolio.node.portfolioImg.fluid } alt={ portfolio.node.portfolioImg.title } className='portfolioImg'></Img>
                  </a>
                  <p className='bread-text--standard portfolio-box__bread-text'>{ portfolio.node.description.description }</p>
                </FadeInSection>
                <div className='timePole'></div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio;