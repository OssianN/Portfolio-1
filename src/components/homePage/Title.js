import React, { useState, useEffect, useLayoutEffect } from 'react';
import './home.scss';
import './nameSpans.scss';


const firstName = 'OSSIAN ';
const lastName = 'NÖRTHEN';
const desc = 'Software · Technology · People';

const Title = () => {
  const [ titleShow, setTitleShow ] = useState('hide');

  const handleTitleTransition = () => setTimeout(() => setTitleShow('title'), 900);
  const removeClassOnDelay = element => setTimeout(() => element.classList?.remove('change'), 3000);
  const addNeutralClass = element => !element?.classList?.contains('name-span--neutral')
    ? element?.classList?.add('name-span--neutral')
    : null;

  const handleNameChange = (e) => {
    addNeutralClass(e?.target);
    removeClassOnDelay(e?.target);
    return e?.target?.classList?.add('change');
  }

  const renderSpans = () => {
    const arr = Array(23).fill(0);
    return arr.map((span, i) => {
      const delay = i / 5;
      return <span key={i} style={{animationDelay: `${delay}s`, animationFillMode: 'both'}} className=''></span>;
    })
  }

  useEffect(() => {
    handleTitleTransition();
  }, []);

  return (
    <div className={titleShow} >
      {/* <p className='titleDescription'>{ desc }</p> */}
      <h1 style={{display: 'none'}}>{ firstName }{ lastName }</h1>
      <div className={`nameSpans`} onClick={handleNameChange}>
        {renderSpans()}
      </div>
    </div>
  );
};
  
export default Title;