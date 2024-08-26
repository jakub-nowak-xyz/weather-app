import React from "react";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import isToday from "dayjs/plugin/isToday";
import ForecastCard from "./ForecastCard";

dayjs.extend(weekday);
dayjs.extend(isToday);

const DailyForecast = ({ data }) => {
  return (
    <div className="daily">
      {data.map((item) => {
        const {
          date_epoch,
          day: {
            avgtemp_c,
            condition: { text },
          },
        } = item;

        const weekDay = dayjs.unix(date_epoch);
        const weekDayName = weekDay.format("dddd");
        const displayDate = weekDay.isToday() ? "Today" : weekDayName;

        return (
          <ForecastCard
            key={date_epoch}
            text={displayDate}
            temp={avgtemp_c}
            name={text}
          />
        );
      })}
    </div>
  );
};

export default DailyForecast;
