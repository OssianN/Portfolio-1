import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import Card from "../components/portfolio/Card";
import FadeInSection from "../components/FadeInSection";
import "../styles/portfolio.scss";

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
              desktopImage {
                gatsbyImageData
              }
              mobileImage {
                gatsbyImageData
              }
              order
            }
          }
        }
      }
    `
  );

  const sortPortfolio = (a, b) => {
    if (a.order < b.order) return 1;
    if (a.order > b.order) return -1;
    return 0;
  };

  const portfolios = data.allContentfulPortfolio?.edges;
  const sortedPortfolioList = portfolios?.sort(sortPortfolio);

  return (
    <Layout tabName="portfolio">
      <div className="portfolio__container">
        <div className="portfolio">
          <header className="portfolio__header">
            <h1 className="header-title--standard">
              Here are some projects I've done.
            </h1>
          </header>
          <div className="projects__container">
            <div className="time-pole"></div>
            <ol className="projects__ol">
              {sortedPortfolioList.map((project, i) => {
                return (
                  <FadeInSection key={i}>
                    <Card project={project} />
                    <div
                      className={`time-pole ${
                        portfolios.length - 1 === i ? `time-pole--last` : ""
                      }`}
                    ></div>
                  </FadeInSection>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
