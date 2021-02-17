import React, { useState, useEffect } from 'react';
import './home.scss';
import './nameSpans.scss';


const firstName = 'OSSIAN ';
const lastName = 'NÖRTHEN';
const desc = 'Software · Technology · People';

const Title = () => {
  const [ titleShow, setTitleShow ] = useState('hide');
  const [ changeName, setChangeName ] = useState(null)
  const [nameHasChanged, setNameHasChanged ] = useState(false)

  const handleTitleTransition = () => setTimeout(() => setTitleShow('title'), 900);

  const handleNameChange = () => {
    if(!changeName) {
      setNameHasChanged(true);
      return setChangeName('change')
    }
    setChangeName(null);
  }

  const changeNameOnDelay = () => {
    setTimeout(() => {
      if(!nameHasChanged) {
        handleNameChange();
      }
    }, 3000);
  }
  
  useEffect(() => {
    handleTitleTransition();
    changeNameOnDelay();
  }, []);

  return (
    <div className={titleShow} onClick={handleNameChange}>
      <p className='titleDescription'>{ desc }</p>
      <h1 style={{display: 'none'}}>{ firstName }{ lastName }</h1>
      <div className={`nameSpans ${changeName}`}>
        {/*O*/}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {/*S*/}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {/*S*/}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {/*I*/}
        <span></span>
        <span></span>
        {/*A*/}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {/*N*/}
        <span></span>
        <span></span>
        <span></span>
        {/*E*/}
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
  
export default Title;