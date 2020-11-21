import React, { useEffect, useState } from 'react';
import './todo.css';
import Form from './form/Form';
import CardsList from './cardsList/CardsList';

const Todo = () => {
  const [cardsArr, setCardsArr] = useState(JSON.parse(window.localStorage.getItem('cardsArr2')) || []);

  useEffect(() => {
    window.localStorage.setItem('cardsArr2', JSON.stringify(cardsArr));
  }, [cardsArr]);

  return (
    <div className="Todo">
      <Form
        setCardsArr={setCardsArr}
        cardsArr={cardsArr}
      />
      <CardsList
        setCardsArr={setCardsArr}
        cardsArr={cardsArr}
      />
    </div>
  );
};

export default Todo;
