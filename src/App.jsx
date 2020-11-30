import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';
import Header from './components/Header';
import Home from "./components/Home";
import { darkTheme, lightTheme } from './components/styles/Themes';

function App() {
  const [theme, setTheme] = useState('light');
  
  const themeToggler = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
    console.log(theme);
  }
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <Home />
    </ThemeProvider>
  );
}

export default App;
