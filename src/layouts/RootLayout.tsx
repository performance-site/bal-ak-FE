import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Outlet, useLocation } from 'react-router-dom';

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: document.title,
    });
  }, [location]);

  return (
    <div className="pageContainer">
      <Outlet />
    </div>
  );
};

export default RootLayout;
