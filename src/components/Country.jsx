import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import alphaCodeToName from '../assets/alphaCodeToName';
import listNames from '../assets/listNames';

const CountryWrapper = styled.div`
  //display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  font-size: 14px;
  

  img {
    width: 100%;
    margin: 1em 0;
  }

  .link {
    display: inline-block;
    font-size: 12px;
    text-decoration: none;
    border-radius: .2em;
    box-shadow: ${({ theme }) => theme.shadow};
    box-sizing: border-box;
    margin: .3em;
    padding: .5em;
    background-color: ${({ theme }) => theme.elements};
    color:${({ theme }) => theme.text};
  }

  .back-link {
    display: flex;
    width: 7em;
    align-items: center;
    justify-content: center;
    margin: 2em 0;
    padding: .5em;
    font-size: inherit;

    svg {
      padding-right: 5px;
    }
  }
`

function Country(props) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  let match = useRouteMatch();
  
  const [country, setCountry] = useState({
    flag: '',
    name: '',
    nativeName: '',
    population: 0,
    region: '',
    subregion: '',
    capital: '',
    topLevelDomain: [],
    currencies: [],
    languages: [],
    borders: []
  });

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
    .then(res => res.json())
    .then(result => setCountry(result)
    )
  },[id]);

  return (
    <CountryWrapper>
      <Link className="link back-link" to='../'>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={props.theme ? "white" : "black"}
        width="20px" 
        height="20px"
        >
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/>
        </svg>
        Back
      </Link>
      
      <img src={country.flag} alt="country flag"/>
      <h2>{country.name}</h2>
      <p>
        <strong>Native Name: </strong> {country.nativeName} <br/>
        <strong>Population: </strong> {country.population} <br/>
        <strong>Region: </strong> {country.region} <br/>
        <strong>Sub Region: </strong> {country.subregion} <br/>
        <strong>Capital: </strong> {country.capital} <br/>
      </p>
      <p>
        <strong>Top Level Domain: </strong> {country.topLevelDomain} <br/>
        <strong>Currencies: </strong> {listNames(country.currencies)} <br/>
        <strong>Languages: </strong> {listNames(country.languages)} <br/>
      </p>
      <section>
        <h3>Border Countries</h3>
        {country.borders.map((item) => {
          return (
            <Link 
            className="link"
            to={`${match.url}?id=${item}`} 
            key={item}
            >
              {alphaCodeToName(item, props.countries)}
            </Link>
          )
        })}
      </section>
    </CountryWrapper>
  )
}

export default Country;