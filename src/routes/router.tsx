import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

import Splash from '../components/Splash/Splash';

import Home from '../pages/home/home';
import { lazy } from 'react';
const Booking = lazy(() => import('../pages/booking/Booking'));
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
      { index: true, element: <Splash /> },
      { path: 'home', element: <Home /> },
      { path: 'booking', element: <Booking /> },
      {
        path: 'setlist',
        children: [
          { index: true, element: <SetList /> },
          { path: ':id', element: <SetListDetail /> },
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
