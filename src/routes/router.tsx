import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

import Splash from '../components/Splash/Splash';

import NotFound from '../pages/notFound/NotFound';
import Home from '../pages/home/home';
import BookingPage from '../pages/bookingPage/BookingPage';
import SetList from '../pages/setList/SetList';
import SetListDetail from '../pages/setListDetail/SetListDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Splash /> },
      { path: 'home', element: <Home /> },
      { path: 'booking', element: <BookingPage /> },
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
