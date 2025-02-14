// components/Countdown.tsx
import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(5);
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  return (
    <div className="mt-6 text-xl font-bold text-red-700">
      {timeLeft > 0
        ? `Surprise in... ${timeLeft} seconds`
        : "Surprise! It's just me, your favorite person ❤️"}
    </div>
  );
}
