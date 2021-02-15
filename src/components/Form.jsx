import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  max-width: 1440px;
  margin: auto;

  .search-bar, select {
    display: flex;
    align-items: center;
    margin: 20px 0;
    border-radius: .5em;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.elements};
    box-shadow: ${({ theme }) => theme.shadow};
    font-family: inherit;
    font-size: 1.2em;
  }
  
  .search-bar {
    box-sizing: border-box;
  }

  input, select {
    border-radius: .5em;
    border: 15px solid ${({ theme }) => theme.elements};
  }

  input {
    background-color: ${({ theme }) => theme.elements};
    ::placeholder {
      color: ${({ theme }) => theme.placeholder};
    }
  }

  select {
    padding-right: 45px;
  }

  svg {
    padding-left: 20px;
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
      <div className="search-bar">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill={props.theme ? "white" : "black"}
          width="18px" 
          height="18px"
        >
          <path 
            d="M0 0h24v24H0z" 
            fill="none"
          />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>

        <input
          type="text"
          onChange={props.onInputChange} 
          placeholder="Search for a country..."
        />
      </div>
      <select onChange={props.onSelectChange}>
        <option value="" hidden>Filter by Region</option>
        <option value="">All</option>
        {
          props.regions.map((region, index) => {
            return (
              <option key={index} value={region.toLowerCase()}>
                {region}
              </option>
            )
          })
        }
      </select>
    </FormWrapper>
  );
}

export default Form;