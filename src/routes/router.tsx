import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

import Splash from '../components/Splash/Splash';

import NotFound from '../pages/notFound/NotFound';
import Home from '../pages/home/home';
import SetList from '../pages/setList/SetList';
import SetListDetail from '../pages/setListDetail/SetListDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Splash /> },
      { path: 'home', element: <Home /> },
      {
        path: 'setlist',
        children: [
          { index: true, element: <SetList /> },
          { path: ':id', element: <SetListDetail /> },
        ],
      },
    ],
  },
]);

export default router;
