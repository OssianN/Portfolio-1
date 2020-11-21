import React, { useState, useEffect } from 'react';
import './home.css';

const name = "Ossian Nörthen";
const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

const Title = () => {
  const [titleShow, setTitleShow] = useState({display: 'none'});

  const handleTitleTransition = () => {
    setTimeout(() => {
      setTitleShow({display: 'flex'});
    }, 3000);
  };

  useEffect(() => {
    handleTitleTransition();
  })

  return (
    <div className='title'>
      <h1 className="titleHeading" style={ titleShow }>{ name }</h1>
      <p className="titleDescription" style={ titleShow }>{ desc }</p>
    </div>
  );
};
  
export default Title;