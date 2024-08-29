// src/CountdownTimer.js
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      {timeLeft.hours !== undefined ? (
        <>
          <span>{timeLeft.hours}H : </span>
          <span>{timeLeft.minutes}M : </span>
          <span>{timeLeft.seconds}S</span>
        </>
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
