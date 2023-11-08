// import { Outlet } from 'react-router-dom';
// import Layout from './pages/Layout';
import { useNavigate } from 'react-router-dom';
import onboarding from './assets/onboarding.svg';

function App() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/home');
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <button onClick={handleOnClick}> */}
      <img onClick={handleOnClick} className="max-h-full cursor-pointer" src={onboarding} height="100%" alt="logo" />
      {/* </button> */}
    </div>
  );
}

export default App;
