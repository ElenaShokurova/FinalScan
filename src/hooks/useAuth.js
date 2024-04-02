import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const expire = localStorage.getItem('expire');
      if (!accessToken || !expire) {
        setIsAuthenticated(false);
        return;
      }

      const currentTimestamp = new Date().getTime();
      if (currentTimestamp > new Date(expire).getTime()) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('expire');
        setIsAuthenticated(false);
        return;
      }

      setIsAuthenticated(true);
    }

    checkAuthentication();
  }, []);

  return isAuthenticated;
};

