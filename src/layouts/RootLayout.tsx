import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Outlet, useLocation } from 'react-router-dom';

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // 경로에 따른 GA용 페이지 제목 매핑
    const getGaTitle = (pathname: string) => {
      if (pathname === '/') return '홈';
      if (pathname === '/setlist') return '셋리스트';

      if (pathname.startsWith('/setlist/')) return '셋리스트 상세';

      return '404';
    };

    // GA 전송
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: getGaTitle(location.pathname),
    });
  }, [location]);

  return (
    <div className="pageContainer">
      <Outlet />
    </div>
  );
};

export default RootLayout;
