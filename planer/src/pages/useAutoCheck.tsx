import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const hashedKey = localStorage.getItem('hashedKey');
      if (!hashedKey) {
        navigate('/login');
      }
    };

    const intervalId = setInterval(checkAuth, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);
};

export default useAuthCheck;
