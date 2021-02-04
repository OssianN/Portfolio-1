import React from 'react';
import './home.scss';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import images from '../../images';

const ProfileImage = () => {
//   const data = useStaticQuery( graphql`
//   query MyQuery {
//     file(relativePath: {eq: "profilePic.jpg"}) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `) fluid={data.file.childImageSharp.fluid}  loading='lazy'

  return (
    <div className="imgContainer">
      <img src={images.profilePic} alt='profilePic' className={'profileImageBig'}/>
    </div>
  );
}

export default ProfileImage;
