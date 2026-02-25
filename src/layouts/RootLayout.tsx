import { Outlet } from 'react-router-dom';
import usePageTracking from '../hooks/usePageTracking';

const RootLayout = () => {
  usePageTracking();

  return (
    <div className="pageContainer">
      <Outlet />
    </div>
  );
};

export default RootLayout;
