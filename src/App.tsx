import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import GlobalStyle from './styles/globalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <div style={{ fontSize: '16px' }}>
          <ReactQueryDevtools />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
