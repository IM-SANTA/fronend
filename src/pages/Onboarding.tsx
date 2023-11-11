import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import onboarding from '../assets/onboarding.svg';

function Onboarding() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex max-h-[1024px] justify-center items-center h-screen">
        <img src={onboarding} alt="onboarding" className="h-full object-cover" />
      </div>
    </div>
  );
}

export default Onboarding;
