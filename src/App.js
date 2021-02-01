import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/Global';
import Header from './components/Header';
import Home from "./components/Home";
import { darkTheme, lightTheme } from './assets/Themes';
import fetchCountries from './assets/fetchCountries';

function App() {

  fetchCountries().then(data => console.log(data));

  const [isDark, setIsDark] = useState(false);
  
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header>
          <button onClick={
            () => {isDark ? setIsDark(false) : setIsDark(true)}
          } >Dark Mode</button>
        </Header>
        <Home />
    </ThemeProvider>
  );
}

export default App;