export default async function fetchCountries() {
  const countries = [];
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await response.json();
  data.map(country => {
    return countries.push(country);
  });
  return countries;
}

//TODO chance method (use axios?)
