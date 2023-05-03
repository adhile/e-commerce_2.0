import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [targetTime, setTargetTime] = useState(
    parseInt(localStorage.getItem("targetTime")) || calculateTargetTime()
  );
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());

      if (remainingTime.total <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [remainingTime]);

  function calculateTargetTime() {
   
    const now = new Date().getTime();
    const target =
      now + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 2 * 60 * 1000;
    localStorage.setItem("targetTime", target.toString());
    return target;
  }

  function calculateRemainingTime() {
    const now = new Date().getTime();
    const difference = targetTime - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const total = difference;

    return { days, hours, minutes, seconds, total };
  }

  return (
    <div>
      {remainingTime.total <= 0 ? (
        <div>EXPIRED</div>
      ) : (
        <div className="flex space-x-4">
          <div className="flex flex-col justify-center items-center">
            <div className="font-Poppins font-medium text-xs"> Days</div>
            <div className="font-Inter font-bold text-3xl">
              {remainingTime.days}
            </div>
          </div>
          <span className="flex items-center text-brickRed"> :</span>
          <div className="flex flex-col justify-center items-center">
            <div className="font-Poppins font-medium text-xs"> Hours</div>
            <div className="font-Inter font-bold text-3xl">
              {remainingTime.hours}
            </div>
          </div>
          <span className="flex items-center text-brickRed"> :</span>
          <div className="flex flex-col justify-center items-center">
            <div className="font-Poppins font-medium text-xs"> Minutes</div>
            <div className="font-Inter font-bold text-3xl">
              {remainingTime.minutes}
            </div>
          </div>
          <span className="flex items-center text-brickRed"> :</span>
          <div className="flex flex-col justify-center items-center">
            <div className="font-Poppins font-medium text-xs"> Seconds</div>
            <div className="font-Inter font-bold text-3xl">
              {remainingTime.seconds}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
