import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 1px solid black;
  margin-bottom: 50px;

  img {
    width: 100%;
  }
`

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