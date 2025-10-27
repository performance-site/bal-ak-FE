import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

import Splash from '../components/Splash/Splash';

import NotFound from '../pages/notFound/notFound';
import Home from '../pages/home/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Splash /> },
      { path: 'home', element: <Home /> },
    ],
  },
]);

export default router;
