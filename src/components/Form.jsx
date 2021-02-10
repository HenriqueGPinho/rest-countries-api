import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  margin: auto;

  input, select {
    padding: 15px 0;
    margin: 20px 0;
  }
  
  input {
    box-sizing: border-box;
  }
  
  @media(min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    
    input {
      width: 300px;
    }
  }
`

function Form(props) {
  return(
    <FormWrapper>
      <input
        type="text"
        onChange={props.onChange} 
        placeholder="Search for a country"
      />
      <select>
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </FormWrapper>
  );
}

export default Form;