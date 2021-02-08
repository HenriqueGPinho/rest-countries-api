import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 1px solid black;
  margin-bottom: 50px;

  img {
    width: 100%;
  }
`

function Card(props) {
  return (
    <CardWrapper>
      <img src={props.flag} alt="country flag"/>
      <h2>{props.name}</h2>
      <p>Population: {props.population}</p>
      <p>Region: {props.region}</p>
      <p>Capital: {props.capital}</p>
    </CardWrapper>
  );
}

export default Card;