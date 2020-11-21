import React, { useEffect, useState } from 'react';
import './wine.css';
import WineGrid from './wineGrid/WineGrid';
import AddWine from './addWine/AddWine';

const WineIndex = () => {
  const [cardArr, setCardArr] = useState([]);
  const [title, setTitle] = useState(null);
  const [displayForm, setDisplayForm] = useState('none');
  const [position, setPosition] = useState(null);
  const [updateOnPost, setUpdateOnPost] = useState(false)


  const getBackend = async () => {
    const title = await fetch('http://localhost:5000')
      .then(res => res.json());
    setTitle(title);
  }

  const getWines = async () => {
    try {
      const response = await fetch('http://localhost:5000/wines', {
        headers: { 'Content-Type': 'application/json' },
      });
      const resData = await response.json();
      const wineArr = resData.wineArr;
      setCardArr(wineArr);
    } catch (err) {
      console.error(err, 'getWines error')
    }
  }

  useEffect(() => {
    getBackend();
    getWines();
    console.log('updated!')
  }, [title, updateOnPost]);

  return (
    <div className="wineIndex">
      <h1 className="header">{title}</h1>
      <AddWine
        setCardArr={setCardArr}
        setDisplayForm={setDisplayForm}
        displayForm={displayForm}
        position={position}
        updateOnPost={updateOnPost}
        setUpdateOnPost={setUpdateOnPost}
      />
      <WineGrid
        cardArr={cardArr}
        setCardArr={setCardArr}
        setDisplayForm={setDisplayForm}
        displayForm={displayForm}
        setPosition={setPosition}
        updateOnPost={updateOnPost}
        setUpdateOnPost={setUpdateOnPost}
      />
    </div>
  );
}

export default WineIndex;
