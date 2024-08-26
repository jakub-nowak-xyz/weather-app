import { useState, useEffect } from "react";
import axios from "axios";

const useWeather = (location) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location.latitude},${location.longitude}&days=5&aqi=no&alerts=no`;

      try {
        const response = await axios.get(url);
        const {
          location,
          current,
          forecast: { forecastday },
        } = response.data;

        setWeatherInfo({ location: location.name, current, forecastday });
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (location) {
      fetchData();
    }
  }, [location]);

  return { isLoading, isError, weatherInfo };
};

export default useWeather;
