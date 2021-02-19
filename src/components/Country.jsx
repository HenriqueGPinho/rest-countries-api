import React from 'react';

function Country(props) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  console.log(id);

  return (
    //TODO create the page
    <h1>Paeis</h1>
  )
}

export default Country;