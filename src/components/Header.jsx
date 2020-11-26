import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/Themes';

import '../styles/Header.css';
import GlobalStyles from './globalStyles';


function Header() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    console.log(theme);
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="header-container">
          <div className="header-content">
            <h1>Where in the World?</h1>
            <button onClick={themeToggler}>Dark Mode</button>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default Header;