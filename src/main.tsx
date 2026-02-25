import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga4';
import theme from './styles/theme.ts';
import App from './App.tsx';

async function enableMocking() {
  // 개발 모드이고 MOCKING이 ture일때 worker 가져오기 및 실행
  if (
    import.meta.env.MODE === 'development' &&
    import.meta.env.VITE_APP_MOCKING === 'true'
  ) {
    const { worker } = await import('./mocks/browser');
    return worker.start({ onUnhandledRequest: 'bypass' });
  }
}

ReactGA.initialize('G-2D2N1DJSGS');

// MSW가 시작된 후 렌더링 진행
enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StrictMode>,
  );
});
