import React from 'react';

import '../styles/Card.css';

function Card() {
  return (
    <div className="card">
      <img src="https://restcountries.eu/data/bra.svg" alt="country flag"/>
      <h2>Brazil</h2>
      <p>Population:</p>
      <p>Region:</p>
      <p>Capital:</p>
    </div>
  );
}

export default Card;