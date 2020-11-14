// https://restcountries.eu/rest/v2/all

const countriesArray = [];
fetch('https://restcountries.eu/rest/v2/all')
  .then(resp => resp.json())
  .then(data => data.map(c => countriesArray.push(c)));

const launchCountries = () => {
  console.log(countriesArray);
}

export default launchCountries;