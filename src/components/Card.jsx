import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  margin-bottom: 50px;
  max-width: 300px;

  img {
    width: 100%;
  }
`

function Card(props) {
  return (
    <CardWrapper>
      <img src={props.flag} alt="country flag"/>
      <section className="infos">
        <h2>{props.name}</h2>
        <p>Population: {props.population}</p>
        <p>Region: {props.region}</p>
        <p>Capital: {props.capital}</p>
      </section>
    </CardWrapper>
  );
}

export default Card;