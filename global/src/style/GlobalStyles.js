import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  html, body {
    min-height: 100%;
  }

  body {
    font-size: 14px;
    color: #000;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  button {
    padding: 0;
    border: 0;
    background-color: transparent;
  }
`;

export default GlobalStyles;