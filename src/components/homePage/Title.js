import React, { useState, useLayoutEffect } from 'react';
import './home.scss';
import './nameSpans.scss';


const firstName = 'OSSIAN ';
const lastName = 'NÖRTHEN';
const desc = 'Software · Technology · People';

const Title = () => {
  const [ titleShow, setTitleShow ] = useState({});

  const handleTitleTransition = () => setTimeout(() => setTitleShow({ opacity: '1' }), 6000);
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
      const delay = (i / 7) + 1.5;
      return <span key={i} style={{ animationDelay: `${delay}s`, animationFillMode: 'both'}} className=''></span>;
    })
  }

  useLayoutEffect(() => {
    handleTitleTransition();
  }, []);

  return (
    <div className='home__glas-container'>
      <div className='home__glas-box' style={titleShow} ></div>
      <div className={`nameSpans`} onClick={handleNameChange}>
        {renderSpans()}
      </div>
      <h1 style={{display: 'none'}}>{ firstName }{ lastName }</h1>
    </div>
  );
};
  
export default Title;