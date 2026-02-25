import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import { Suspense, lazy } from 'react';
import Spinner from '../components/Spinner/Spinner';
import Home from '../pages/home/home';
import GlobalError from '../components/GlobalError/GlobalError';

const SetList = lazy(() => import('../pages/setList/SetList'));
const SetListDetail = lazy(
  () => import('../pages/setListDetail/SetListDetail'),
);
const NotFound = lazy(() => import('../pages/notFound/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Spinner />}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <GlobalError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Navigate to="/" replace />,
      },
      {
        path: 'setlist',
        children: [
          {
            index: true,
            element: <SetList />,
          },
          {
            path: ':id',
            element: <SetListDetail />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
