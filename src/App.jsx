import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import Header from './components/Header';
import Home from "./components/Home";
import { darkTheme, lightTheme } from './components/Themes';
import './styles/App.css';

function App() {
  const [theme, setTheme] = useState('light');
  
  const themeToggler = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
    console.log(theme);
  }
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <Header />
        <GlobalStyles />
        <Home />
      </>
    </ThemeProvider>
  );
}

export default App;
