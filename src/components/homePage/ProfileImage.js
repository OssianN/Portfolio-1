import React from 'react';
import './home.scss';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import images from '../../images';

const ProfileImage = () => {
  const data = useStaticQuery( graphql`
  query MyQuery {
    file(relativePath: {eq: "profilePic.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
console.log(data.file.childImageSharp.fluid)
  return (
    <div className="imgContainer">
      <Img fluid={data.file.childImageSharp.fluid} alt='profilePic' className={'profileImageBig'} loading='lazy'/>
    </div>
  );
}

export default ProfileImage;
