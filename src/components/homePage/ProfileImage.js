import React, { useState } from 'react';
import './home.scss';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import images from '../../images';

const ProfileImage = () => {
  const [showImage, setShowImage] = useState('hide');
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


const handleTitleTransition = () => {
  return setTimeout(() => {
    return setShowImage('profileImageBig');
  }, 700);
};

handleTitleTransition();

  return (
    <div className="imgContainer">
      <img src={images.profilePic} alt='profilePic' className={showImage}/>
    </div>
  );
}

export default ProfileImage;
