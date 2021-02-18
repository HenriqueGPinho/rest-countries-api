import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../assets/Global';
import { darkTheme, lightTheme } from '../assets/Themes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Button from './Button';
import Home from './Home';
import Country from './Country';
import PageNotFound from './PageNotFound';

function App() {

  const [isDark, setIsDark] = useState(false);
  
  function changeMode() {
    isDark ? setIsDark(false) : setIsDark(true);
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header>
          <Button onClick={changeMode} isDark={isDark}>
            {isDark ? "Light" : "Dark"} Mode
          </Button>
        </Header>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/country" component={Country} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
