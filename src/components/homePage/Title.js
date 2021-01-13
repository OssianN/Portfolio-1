import React, { useState } from 'react';
import './home.css';

const firstName = 'Ossian ';
const lastName = 'Nörthen';
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
      <h1 className="titleHeading">{ firstName }<span>  &#8226; </span>{ lastName }</h1>
      <p className="titleDescription">{ desc }</p>
    </div>
  );
};
  
export default Title;