import React from 'react';
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

const countries = [
  {
    name: "Afghanistan",
    population: 27657145,
    region: "Asia",
    capital: "Kabul",
    flag: "https://restcountries.eu/data/afg.svg"
  },
  {
    name: "Åland Islands",
    population: 28875,
    region: "Europe",
    capital: "Mariehamn",
    flag: "https://restcountries.eu/data/ala.svg"
  },
  {
    name: "Albania",
    population: 2886026,
    region: "Europe",
    capital: "Tirana",
    flag: "https://restcountries.eu/data/alb.svg"
  },
  {
    name: "Algeria",
    population: 40400000,
    region:  "Africa",
    capital: "Algiers",
    flag: "https://restcountries.eu/data/dza.svg"
  },
  {
    name: "American Samoa",
    population: 57100,
    region: "Oceania",
    capital: "Pago Pago",
    flag: "https://restcountries.eu/data/asm.svg"
  },
  {
    name: "Andorra",
    population: 78014,
    region: "Europe",
    capital: "Andorra la Vella",
    flag: "https://restcountries.eu/data/and.svg"
  },
  {
    name: "Angola",
    population: 25868000,
    region: "Africa",
    capital: "Luanda",
    flag: "https://restcountries.eu/data/ago.svg"
  },
  {
    name: "Anguilla",
    population: 13452,
    region: "Americas",
    capital: "The Valley",
    flag: "https://restcountries.eu/data/aia.svg"
  },
  {
    name: "Antarctica",
    population: 1000,
    region: "Polar",
    capital: "",
    flag: "https://restcountries.eu/data/ata.svg"
  }
]

function Container() {
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
        })
      }
    </GridWrapper>
  );
}

export default Container;