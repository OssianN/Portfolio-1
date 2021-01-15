import React, { useEffect, useState } from 'react';
import './todo.css';
import Form from './form/Form';
import CardsList from './cardsList/CardsList';

const Todo = () => {
  const [cardsArr, setCardsArr] = useState([]);

  const getLocalStorage = () => {
    setCardsArr(JSON.parse(window.localStorage.getItem('cardsArr2')) || []);
  }

  const setLocalStorage = () => {
    window.localStorage.setItem('cardsArr2', JSON.stringify(cardsArr));
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    setLocalStorage();
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
