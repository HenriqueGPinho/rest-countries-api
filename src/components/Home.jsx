import React from 'react';
import Form from './Form';
import '../styles/Home.css';

function Home() {
  
  return (
    <div>
      <header>
        <div className="header-content">
          <h1>Where in the World?</h1>
          <button>Dark Mode</button>
        </div>
      </header>
      <Form />
    </div>
  );
}

export default Home;