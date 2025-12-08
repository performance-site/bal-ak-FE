import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga4';
import theme from './styles/theme.ts';
import App from './App.tsx';

ReactGA.initialize('G-27K54458MY');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
