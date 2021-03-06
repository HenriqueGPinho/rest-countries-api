import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import formatNumber from '../assets/formatNumber';

const CardWrapper = styled.div`
  background-color:${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.shadow};
  margin-bottom: 5em;
  border-radius: .5em;
  

  .link {
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    height: 100%;
    text-decoration: none;
    color:${({ theme }) => theme.text};
  }

  img {
    border-radius: .5em .5em 0 0 ;
  }

  .infos {
    padding: 0 2em 2em 2em;
    font-size: 1.4em;
  }

  @media(min-width: 480px) {
    max-width: 430px;
  }
`

function Card(props) {
  return (
    <CardWrapper>
      <Link className="link" to={`/country?id=${props.alphaCode}`}>
        <img src={props.flag} alt="country flag"/>
        <section className="infos">
          <h2>{props.name}</h2>
          <p>
            <strong>Population:</strong> {formatNumber(props.population)}<br />
            <strong>Region:</strong> {props.region}<br />
            <strong>Capital:</strong> {props.capital}
          </p>
        </section>
      </Link>
    </CardWrapper>
  );
}

export default Card;