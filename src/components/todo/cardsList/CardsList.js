import React from 'react';
import Cards from '../cards/Cards';

const CardsList = props => {
  const createDomCard = (
    props.cardsArr.map(card => (
        <Cards
          key={card.id}
          id={card.id}
          title={card.title}
          desc={card.desc}
          checked={card.checked}
          cardsArr={props.cardsArr}
          toggleChecked={props.toggleChecked}
          toggleDelete={props.toggleDelete}
          setCardsArr={props.setCardsArr}
        />
    ))
  );

  return (
    <div className="cardsList" >
      <h1 className="header">ToDuties</h1>
      <ol>
        {createDomCard}
      </ol>
    </div>
  );
};

export default CardsList;
