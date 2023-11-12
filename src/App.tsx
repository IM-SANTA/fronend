import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import Onboarding from './pages/Onboarding';

ReactGA.initialize('G-BMBF7DL2L9');

const App = () => {
  const trackPage = (page: string) => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  };

  const location = useLocation();

  useEffect(() => {
    trackPage(location.pathname);
    // 라우팅 변경 시 trackPage 함수 호출
  }, [location]);

  return <Onboarding />;
};

export default App;
