import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function Country(props) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  let country;
  let match = useRouteMatch();

  props.countries.forEach(item => {
    if (item.alpha3Code === id) country = item;
  });

  console.log(country);

  function listNames(array) {
    const names = [];
    for (let i = 0; i < array.length; i++) {
      if (i === array.length - 1) names.push(array[i].name);
      else names.push(array[i].name, ', ');
    }
    return names;
  }

  return (
    <div>
      <Link to='../'>Back</Link>
      <div>
        <img src={country.flag} alt="country flag"/>
        <h2>{country.name}</h2>
        <p>
          <strong>Native Name: </strong> {country.nativeName} <br/>
          <strong>Population: </strong> {country.population} <br/>
          <strong>Region: </strong> {country.region} <br/>
          <strong>Sub Region: </strong> {country.subregion} <br/>
          <strong>Capital: </strong> {country.capital} <br/>
        </p>
        <p>
          <strong>Top Level Domain: </strong> {country.topLevelDomain} <br/>
          <strong>Currencies: </strong> {listNames(country.currencies)} <br/>
          <strong>Languages: </strong> {listNames(country.languages)} <br/>
        </p>
        <section>
          <h3>Border Countries</h3>
          {country.borders.map((item, index) => {
            return (
              <Link to={`${match.url}?id=${item}`} key={index}>{item}</Link>
            )
          })}
        </section>
      </div>
    </div>
  )
}

export default Country;