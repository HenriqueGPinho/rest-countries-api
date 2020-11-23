import React from 'react';
import Form from './Form';
import Container from './Container';

import '../styles/Home.css';

function Home() {
  
  return (
    <>
      <header>
        <div className="header-content">
          <h1>Where in the World?</h1>
          <button>Dark Mode</button>
        </div>
      </header>
      <Form />
      <Container />
    </>
  );
}

export default Home;