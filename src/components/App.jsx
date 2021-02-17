import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../assets/Global';
import { darkTheme, lightTheme } from '../assets/Themes';
import { Link, Route, Router, Switch } from 'react-router-dom';
import Header from './Header';
import Button from './Button';
import Home from './Home';
import Country from './Country';

function App() {

  const [isDark, setIsDark] = useState(false);
  
  function changeMode() {
    isDark ? setIsDark(false) : setIsDark(true);
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header>
          <Button onClick={changeMode} theme={isDark}>
            {isDark ? "Light" : "Dark"} Mode
          </Button>
        </Header>
        
        <Home theme={isDark}/>
    </ThemeProvider>
  );
}

export default App;
