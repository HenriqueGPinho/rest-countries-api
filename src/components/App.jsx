import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../assets/Global';
import Header from './Header';
import { darkTheme, lightTheme } from '../assets/Themes';
import Button from './Button';
import Container from './Container';

function App() {

  const [isDark, setIsDark] = useState(false);
  
  function changeMode() {
    isDark ? setIsDark(false) : setIsDark(true);
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header>
          <Button 
            onClick={changeMode}
            theme={isDark}
          >
            Dark Mode
          </Button>
        </Header>
        <Container />
    </ThemeProvider>
  );
}

export default App;
