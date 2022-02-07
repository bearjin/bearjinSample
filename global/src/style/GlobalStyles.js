import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-size: 14px;
    color: #000;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  button {
    border: 0;
    background-color: transparent;
  }
`;

export default GlobalStyles;