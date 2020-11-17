import React from 'react';
import '../styles/Form.css';

function Form() {
  return(
    <form>
      <input type="text" placeholder="Search for a country" />
      <select>
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
}

export default Form;