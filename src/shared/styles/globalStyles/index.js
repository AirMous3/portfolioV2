import { createGlobalStyle } from 'styled-components';

import '@/shared/assets/fonts/adrianna/stylesheet.css';
import '@/shared/assets/fonts/druk/stylesheet.css';

export const GlobalStyle = createGlobalStyle`

  body {
    touch-action: none;
    margin: 0;
    font-family: 'Roboto', serif;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  #root {
    overflow-y: auto;
    overflow-x: hidden;
  }

  ul,
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  img {
    pointer-events: none;
  }
`;
