import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 60%;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;

    //TODO fix and enable transition
    /*transition: all 0.50s linear*/;
  }
`