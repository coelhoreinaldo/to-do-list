import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyle.ts';
import App from './App.tsx';
import 'remixicon/fonts/remixicon.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
