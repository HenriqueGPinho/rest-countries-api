import React from 'react';
import CardWrapper from '../styles/CardWrapper';
//import '../styles/Card.css';

function Card() {
  return (
    <CardWrapper>
      <img src="https://restcountries.eu/data/bra.svg" alt="country flag"/>
      <h2>Brazil</h2>
      <p>Population:</p>
      <p>Region:</p>
      <p>Capital:</p>
    </CardWrapper>
  );
}

export default Card;