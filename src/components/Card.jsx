import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color:${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.shadow};
  margin-bottom: 50px;
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
      <Link className="link" to={`/country?id=${props.numericCode}`}>
        <img src={props.flag} alt="country flag"/>
        <section className="infos">
          <h2>{props.name}</h2>
          <p>
            <strong>Population:</strong> {props.population}<br />
            <strong>Region:</strong> {props.region}<br />
            <strong>Capital:</strong> {props.capital}
          </p>
        </section>
      </Link>
    </CardWrapper>
  );
}

export default Card;