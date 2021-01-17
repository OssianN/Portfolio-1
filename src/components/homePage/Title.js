import React, { useState } from 'react';
import './home.css';

const firstName = 'OSSIAN ';
const lastName = 'NÖRTHEN';
const desc = 'Software · Technology · People';

const Title = () => {
  const [titleShow, setTitleShow] = useState('hide');

  const handleTitleTransition = () => {
    return setTimeout(() => {
      return setTitleShow('title');
    }, 1000);
  };
  
  handleTitleTransition();

  return (
    <div className={titleShow}>
      <h1 className="titleHeading">{ firstName }<span></span>{ lastName }</h1>
      <p className="titleDescription">{ desc }</p>
    </div>
  );
};
  
export default Title;