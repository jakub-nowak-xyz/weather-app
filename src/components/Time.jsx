import React, { useEffect, useState, useCallback } from "react";

const getGreeting = (date) => {
  const hours = date.getHours();

  if (hours >= 5 && hours < 12) {
    return "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

const Time = () => {
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");

  const updateTime = useCallback(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(formattedTime);
    setGreeting(getGreeting(now));
  }, []);

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 10000);

    return () => clearInterval(interval);
  }, [updateTime]);

  return (
    <div className="time">
      <h3>{greeting}</h3>
      <h1>{time}</h1>
    </div>
  );
};

export default Time;
