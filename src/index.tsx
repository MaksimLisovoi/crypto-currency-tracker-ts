import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    tableBg?: string;
    border?: string;
    accent?: string;
    textColor?: string;
  }
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#05a',
      tableBg: '#293143',
      border: '#1d2330',
      accent: '#343e56',
      textColor: '#8699b8',
    },

    common: {
      black: '#293143',
    },
    background: {
      default: '#171B26',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/movie-web-app">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
