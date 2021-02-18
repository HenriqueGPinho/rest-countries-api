import React, { useEffect, useState } from 'react';
import Card from './Card';
import styled from "styled-components";
import Form from './Form';

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;


  @media(min-width: 480px) {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    grid-column-gap: 50px;
    max-width: 1440px;
  }
`

function Home() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const regions = [];
  
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(result => setCountries(result)
    )
  },[]);

  function changeSearch(e) {
    setSearchValue(e.target.value.toLowerCase());
  }

  function changeSelect(e) {
    setSelectedRegion(e.target.value);
  }

  function pushIfDifferent(item) {
    if (!regions.includes(item) && item !== '') {
      regions.push(item);
    }
  }
  
  return (
    <>
      <Form 
        onInputChange={changeSearch} 
        onSelectChange={changeSelect} 
        regions={regions}
      />
      <GridWrapper>
        {
          countries.map((country, index) => {
            pushIfDifferent(country.region);
            if (country.name.toLowerCase().includes(searchValue) 
            && (selectedRegion === country.region.toLowerCase() 
            || selectedRegion === "")) {
              return (
                <Card 
                  key={index}
                  id={index}
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              )
            }
            return "";
          })
        }
      </GridWrapper>
    </>
  );
}

export default Home;