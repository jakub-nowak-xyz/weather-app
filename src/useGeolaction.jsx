import { useEffect, useState } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation(pos.coords);
        setLoading(false);
      },
      (err) => {
        setError(true);
        setLoading(false);
      }
    );
  }, []);

  return { loading, error, location };
};

export default useGeolocation;
