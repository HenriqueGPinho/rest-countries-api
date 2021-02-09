import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../assets/Global';
import Header from './Header';
import Home from "./Home";
import { darkTheme, lightTheme } from '../assets/Themes';

function App() {

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
