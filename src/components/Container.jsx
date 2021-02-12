import React, { useEffect, useState } from 'react';
import Card from './Card';
import styled from "styled-components";
import Form from './Form';

const GridWrapper = styled.div`
  width: 90%;
  margin: auto;

  @media(min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    grid-column-gap: 50px;
    max-width: 1440px;
  }
`

function Container(props) {
  const [countries, setCountries] = useState([]);
  const [formValue, setFormValue] = useState("");
  
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(result => setCountries(result)
    )
  },[]);

  function changeFormValue(e) {
    setFormValue(e.target.value.toLowerCase());
  }
  
  return (
    <>
      <Form onChange={changeFormValue} theme={props.theme}/>
      <GridWrapper>
        {
          countries.map((country, index) => {
            if (!formValue) {
              return (<Card 
                key={index}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />)
            }
            if (country.name.toLowerCase().includes(formValue)) {
              return (<Card 
                key={index}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />)
            }
            return "";
          })
        }
      </GridWrapper>
    </>
  );
}

export default Container;