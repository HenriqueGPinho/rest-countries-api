function alphaCodeToName(alphaCode, countriesList) {
  let name;
  countriesList.forEach(item => {
    if (item.alpha3Code === alphaCode) name = item.name; 
  })
  return name;
}

export default alphaCodeToName;