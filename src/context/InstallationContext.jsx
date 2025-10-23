import { useState, useEffect } from 'react';
import { InstallationContext } from './installationContextObject';

export const InstallationProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalledApps(storedApps);
  }, []);

  const installApp = (app) => {
    setInstalledApps((prevApps) => {
      const appWithTimestamp = { ...app, installedAt: Date.now() };
      const newApps = [appWithTimestamp, ...prevApps]; 
      localStorage.setItem('installedApps', JSON.stringify(newApps));
      return newApps;
    });
  };

  const uninstallApp = (appId) => {
    setInstalledApps((prevApps) => {
      const newApps = prevApps.filter((app) => app.id !== appId);
      localStorage.setItem('installedApps', JSON.stringify(newApps));
      return newApps;
    });
  };

  return (
    <InstallationContext.Provider value={{ installedApps, installApp, uninstallApp }}>
      {children}
    </InstallationContext.Provider>
  );
};
