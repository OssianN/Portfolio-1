import React from 'react';

const Cards = props => {
  const handleToggle = e => {
    const newArr = props.cardsArr.map(card => {
      if (card.id.toString() === e.target.id) {
        return { ...card, checked: !card.checked };
      }
      return card;
    });
    props.setCardsArr(newArr);
  };

  const handleDelete = e => {
    const newArr = props.cardsArr.map(card => {
      if (card.id.toString() === e.target.parentElement.id) {
        const index = props.cardsArr.indexOf(card);
        props.cardsArr.splice(index, 1);
      }
      return card;
    });
    props.setCardsArr(newArr);
  };

  return (
    <li
    id={props.id}
    className={`checked${props.checked.toString()}`}
    onClick={handleToggle} >
      <input type="checkbox"></input>
      <span>&#x2714;</span>
      <div className="textField">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      <button
        style={{ display: props.checked ? 'block' : 'none' }}
        onClick={handleDelete}>
        &#x2715;
      </button>
    </li>
  );
};

export default Cards;
