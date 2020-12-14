import React from 'react';

const Card = props => {
  const id = `${props.x}:${props.y}`;

  const handleEdit = async e => {
    props.setPosition([props.x, props.y]);
    props.setPickedCard({title: props.title, country: props.country, year: props.year});
    props.setShowEditModal({display: "flex"});
  };

  return (
    <div className='card' id={id} onClick={handleEdit}>
      <div className='cardHeader'>
        <p className='cardPosition'>{`${parseInt(props.x) + 1}:${parseInt(props.y) + 1}`}</p>
      </div>
      <h1 >{props.title}</h1>
      <h4 >{props.country}</h4>
      <p className='wineYear'>{props.year}</p>
    </div>
  );
};

export default Card;