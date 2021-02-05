import React from 'react'
import Nav from './Nav';
import SocialMedia from './socialMedia/SocialMedia';
import { StaticQuery } from 'gatsby';

const Layout = ({ children, tabName }) => (
  <StaticQuery
    query={ graphql`
      query HomeQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              link
              name
            }
          }
        }
      }
    `}
    render = {data => (
      <React.Fragment>
        <Nav menuLinks={data.site.siteMetadata.menuLinks} tabName={tabName} siteTitle={data.site.siteMetadata.title} />
        {children}
        <SocialMedia />
      </React.Fragment>
    )}
  />
)

export default Layout;
