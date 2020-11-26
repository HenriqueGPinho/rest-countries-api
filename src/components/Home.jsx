import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Container from './Container';

function Home() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  
  return (
    <>
      <Header />
      <Form />
      <Container />
    </>
  );
}

export default Home;