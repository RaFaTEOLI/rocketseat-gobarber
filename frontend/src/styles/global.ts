import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input:focus, textarea:focus, select:focus, div:focus {
    outline: none;
  }

  body {
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antiasliased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500
  }
`;
