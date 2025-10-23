import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios("../apps.json")
      .then((data) => setApps(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { apps, error, loading };
};

export default useApps;
