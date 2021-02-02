import React from 'react';
import Card from './Card';
import styled from "styled-components";
import fetchCountries from '../assets/fetchCountries';

const GridWrapper = styled.div`
  width: 90%;
  margin: auto;

  @media(min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    grid-column-gap: 50px;
  }
`
// TODO fazer os cards receberem as informaçoes da api;

const countries = fetchCountries().then(data => data.map(country => {
  return {  
    name: country.name,
    population: country.population,
    region: country.region,
    capital: country.capital,
    flag: country.flag,
    code: country.alpha3Code,
  }
}));

console.log(countries);

function Container() {
  return (
    <GridWrapper>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </GridWrapper>
  );
}

export default Container;