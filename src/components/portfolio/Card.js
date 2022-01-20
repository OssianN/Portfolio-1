import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Card = ({ project }) => {
  const desktopImage = getImage(project.node.desktopImage.gatsbyImageData);
  const mobileImage = getImage(project.node.mobileImage?.gatsbyImageData);
  console.log(desktopImage);

  return (
    <>
      <h2 className="project-box__header">{project.node.title}</h2>
      <a
        className="project__link"
        href={project.node.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="project__img-container">
          <div
            className={`project__img-frame--desktop ${
              project.node.mobileImage ? "" : "no-mobile"
            }`}
          >
            <GatsbyImage
              className="project__desktop-img"
              image={desktopImage}
              alt={project.node.title}
            />
          </div>
          {mobileImage && (
            <div className="project__img-frame--mobile">
              <GatsbyImage
                className="project__mobile-img"
                image={mobileImage}
                alt={project.node.title}
              />
            </div>
          )}
        </div>
      </a>
      <p className="bread-text--standard project-box__bread-text">
        {project.node.description.description}
      </p>
    </>
  );
};

export default Card;
