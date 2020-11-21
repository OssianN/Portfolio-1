import React from 'react';

const Card = props => {
  const id = `${props.x}:${props.y}`;

  const handleRemove = e => {
    const id = e.target.parentElement.id;
    fetch('http://localhost:5000/wines', {
      method: 'DELETE',
      mode: 'cors',
      headers: {  
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({id})
    });
    console.log('handleRemove updates');
    props.setUpdateOnPost(!props.updateOnPost);
  }

  return (
    <div className='card' id={id} >
      <button className='removeButton' onClick={handleRemove}>&#10005;</button>
      <h1>{props.title}</h1>
      <h4>{props.desc}</h4>
      <p>{props.country}</p>
    </div>
  );
};

export default Card;