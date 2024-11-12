import React, { useEffect, useState } from "react";

const StarryBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars on component mount
    const generateStars = () => {
      return Array.from({ length: 200 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: Math.random() * 5 + 10,
      }));
    };

    setStars(generateStars());
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        <div id="stars1" className="absolute w-full h-full">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.left}%`,
                top: `${star.top}%`,
                animationDelay: `${star.animationDelay}s`,
                animationDuration: `${star.animationDuration}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarryBackground;