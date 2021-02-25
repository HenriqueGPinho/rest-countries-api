import React, { useState } from 'react';
import Card from './Card';
import styled from "styled-components";
import Form from './Form';
import pushIfDifferent from '../assets/pushIfDifferent';

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

function Home(props) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const regions = [];
  
  function changeSearch(e) {
    setSearchValue(e.target.value.toLowerCase());
  }

  function changeSelect(e) {
    setSelectedRegion(e.target.value);
  }
  
  return (
    <>
      <Form 
        onInputChange={changeSearch} 
        onSelectChange={changeSelect} 
        regions={regions}
        theme={props.theme}
      />
      <GridWrapper>
        {
          props.countries.map(country => {
            pushIfDifferent(country.region, regions);
            if (country.name.toLowerCase().includes(searchValue) 
            && (selectedRegion === country.region.toLowerCase() 
            || selectedRegion === "")) {
              return (
                <Card 
                  key={country.alpha3Code}
                  alphaCode={country.alpha3Code}
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