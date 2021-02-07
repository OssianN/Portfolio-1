import React, { useState } from 'react';
import './home.scss';

const firstName = 'OSSIAN ';
const lastName = 'NÖRTHEN';
const desc = 'Software · Technology · People';

const Title = () => {
  const [titleShow, setTitleShow] = useState('hide');

  const handleTitleTransition = () => {
    return setTimeout(() => {
      return setTitleShow('title');
    }, 900);
  };
  
  handleTitleTransition();

  return (
    <div className={titleShow}>
      <p className="titleDescription">{ desc }</p>
      <h1 className="titleHeading">{ firstName }<span></span>{ lastName }</h1>
    </div>
  );
};
  
export default Title;