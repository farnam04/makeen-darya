"use client";
import React, { useState, useEffect } from "react";

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: React.FC = () => {
  const [time, setTime] = useState<Time>({
    hours: 6,
    minutes: 15,
    seconds: 48,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(timer);
              return { hours: 0, minutes: 0, seconds: 0 };
            } else {
              hours -= 1;
              minutes = 59;
              seconds = 59;
            }
          } else {
            minutes -= 1;
            seconds = 59;
          }
        } else {
          seconds -= 1;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center">
     
      <div className="text-6xl font-bold text-black bg-gray-100 p-4 rounded-lg">
        {time.seconds.toString().padStart(2, "0")}
      </div>
      <div className="text-6xl font-bold text-black">:</div>
    
      <div className="text-6xl font-bold text-black bg-gray-100 p-4 rounded-lg">
        {time.minutes.toString().padStart(2, "0")}
      </div>
      <div className="text-6xl font-bold text-black">:</div>
     

      <div className="text-6xl font-bold text-black bg-gray-100 p-4 rounded-lg">
        {time.hours.toString().padStart(2, "0")}
      </div>
    </div>
  );
};

export default Timer;
