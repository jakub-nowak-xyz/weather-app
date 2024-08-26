import useWeather from "../useWeather";
// Components imports

import Current from "./Current";
import DailyForecast from "./DailyForecast";
import Time from "./Time";
import Hourly from "./Hourly";

const date = new Date().toLocaleDateString(["pl-PL"], {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

const Weather = ({ location }) => {
  const { isLoading, isError, weatherInfo } = useWeather(location);
  if (isLoading) {
    return (
      <div className="container loading">
        <h1>Loading...</h1>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container loading">
        <h1>Error during fetching weather data.</h1>
      </div>
    );
  }

  return (
    <div className="weather">
      <section className="weather-main">
        <nav className="navbar">
          <p className="city">{weatherInfo.location}</p>
          <p className="date">{date}</p>
        </nav>

        <Current data={weatherInfo.current} />
        <DailyForecast data={weatherInfo.forecastday} />
      </section>

      <section className="weather-sub">
        <Time />
        <Hourly data={weatherInfo.forecastday} />
      </section>
    </div>
  );
};

export default Weather;
