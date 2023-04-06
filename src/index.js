import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from '@/shared/styles/globalStyles';

import { Main } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Main />
    <GlobalStyle />
  </>,
);
