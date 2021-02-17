import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color:${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.shadow};
  margin-bottom: 50px;
  border-radius: .5em;

  img {
    width: 100%;
    border-radius: .5em .5em 0 0 ;
  }

  .infos {
    padding: 0 2em 2em 2em;
    font-size: 1.4em;
  }
`

function Card(props) {
  return (
    <CardWrapper>
      <img src={props.flag} alt="country flag"/>
      <section className="infos">
        <h2>{props.name}</h2>
        <p><strong>Population:</strong> {props.population}<br />
        <strong>Region:</strong> {props.region}<br />
        <strong>Capital:</strong> {props.capital}</p>
      </section>
    </CardWrapper>
  );
}

export default Card;