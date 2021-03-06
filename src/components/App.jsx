import React, { useEffect, useState } from 'react';
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
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    document.title = 'Where in the world?'
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(result => setCountries(result)
    )
  },[]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header>
          <Button onClick={() => {
            isDark ? setIsDark(false) : setIsDark(true);
          }} 
          isDark={isDark}>
            {isDark ? "Light" : "Dark"} Mode
          </Button>
        </Header>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true}>
              <Home countries={countries} theme={isDark}/>
            </Route>
            <Route path="/country" exact={true}>
              <Country countries={countries} theme={isDark}/>  
            </Route>
            <Route path="*">
              <PageNotFound />  
            </Route>
          </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
