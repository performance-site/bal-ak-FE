import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import { Suspense, lazy } from 'react';
import Splash from '../components/Splash/Splash';
import Spinner from '../components/Spinner/Spinner';
import Home from '../pages/home/home';

const Booking = lazy(() => import('../pages/booking/booking'));
const SetList = lazy(() => import('../pages/setList/SetList'));
const SetListDetail = lazy(
  () => import('../pages/setListDetail/SetListDetail'),
);
const NotFound = lazy(() => import('../pages/notFound/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <Splash />
          </Suspense>
        ),
      },
      {
        path: 'home',
        element: (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'booking',
        element: (
          <Suspense fallback={<Spinner />}>
            <Booking />
          </Suspense>
        ),
      },
      {
        path: 'setlist',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Spinner />}>
                <SetList />
              </Suspense>
            ),
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<Spinner />}>
                <SetListDetail />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Spinner />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
