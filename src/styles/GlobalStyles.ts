'use client';

import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    overflow-x: hidden; /* Prevenir scroll horizontal */
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.white};
    color: ${theme.colors.pColor};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
