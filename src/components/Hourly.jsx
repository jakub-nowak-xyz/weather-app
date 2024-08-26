import React, { useMemo } from "react";
import ForecastCard from "./ForecastCard";
import dayjs from "dayjs";

const getHourlyForecast = (data) => {
  const hour = dayjs().hour();
  const [today, tomorrow] = data;

  const remainingToday = today.hour.slice(hour);

  if (remainingToday.length < 6) {
    const nextTomorrow = tomorrow.hour.slice(0, 6 - remainingToday.length);
    return [...remainingToday, ...nextTomorrow];
  } else {
    return remainingToday.slice(0, 6);
  }
};

const Hourly = ({ data }) => {
  const weatherData = useMemo(() => getHourlyForecast(data), [data]);

  return (
    <div className="hourly">
      <h3>Hourly Forecast</h3>
      <div className="hourly-cards">
        {weatherData.map((item) => {
          const {
            time_epoch,
            temp_c,
            condition: { text },
          } = item;

          const displayedHour = dayjs.unix(time_epoch).format("hh:mm A");
          return (
            <ForecastCard
              key={time_epoch}
              text={displayedHour}
              temp={temp_c}
              name={text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hourly;
