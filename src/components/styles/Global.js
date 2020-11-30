import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 60%;
  }

  body {
    background: ${({ theme }) => theme.background};
    text: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
    /*transition: all 0.50s linear*/;
  }
`