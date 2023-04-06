import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '@/shared/styles';

import { Main } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ThemeProvider theme={theme}>
      <Main />
      <GlobalStyle />
    </ThemeProvider>
  </>,
);
