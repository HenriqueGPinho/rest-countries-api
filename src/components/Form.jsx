import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  max-width: 1440px;
  margin: auto;

  input, select {
    margin: 20px 0;
    border: 15px solid ${({ theme }) => theme.elements};
    border-radius: .5em;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.elements};
    box-shadow: ${({ theme }) => theme.shadow};
    font-family: inherit;
    font-size: 1.2em;
  }
  
  input {
    box-sizing: border-box;
    ::placeholder {
      color: ${({ theme }) => theme.placeholder}
    }
  }

  select {
    padding-right: 45px;
  }

  //TODO apply style to the options
  
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
        placeholder="Search for a country..."
      />
      <select>
        <option value="" hidden>Filter by Region</option>
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