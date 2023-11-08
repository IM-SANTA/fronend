// import { Outlet } from 'react-router-dom';
// import Layout from './pages/Layout';
import { useNavigate } from 'react-router-dom';
import onboarding from './assets/onboarding.svg';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <img src={onboarding} alt="logo" className="h-full object-cover" />
    </div>
  );
}

export default App;
