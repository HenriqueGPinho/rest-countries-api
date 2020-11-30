import React from 'react';
import FormWrapper from './styles/FormWrapper';

function Form() {
  return(
    <FormWrapper>
    <input type="text" placeholder="Search for a country" />
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