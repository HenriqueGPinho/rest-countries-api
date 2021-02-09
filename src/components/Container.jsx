import React, { useEffect, useState } from 'react';
import Card from './Card';
import styled from "styled-components";

const GridWrapper = styled.div`
  width: 90%;
  margin: auto;

  @media(min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    grid-column-gap: 50px;
  }
`

function Container() {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(result => setCountries(result)
    )
  },[]);
  
  return (
    <GridWrapper>
      {
        countries.map((country, index) => {
          return (<Card 
            key={index}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />)
        },[])
      }
    </GridWrapper>
  );
}

export default Container;