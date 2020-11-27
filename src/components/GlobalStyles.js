import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
  body: {
    background: ${({ theme }) => theme.background};
    text: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
    transition: all 0.50s linear;
  }
`