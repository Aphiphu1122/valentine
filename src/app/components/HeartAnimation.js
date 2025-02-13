"use client";

import { useEffect, useState } from "react";

export default function HeartAnimation() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [...prev, { id: Math.random(), left: Math.random() * 100 }]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute text-red-500 text-3xl animate-float"
          style={{ left: `${heart.left}%`, top: "100%" }}
        >
          ❤️
        </span>
      ))}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        .animate-float {
          animation: float 5s linear infinite;
        }
      `}</style>
    </div>
  );
}
