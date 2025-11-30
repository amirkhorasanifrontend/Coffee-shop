import React from "react";

const messages = [
  "Freshly roasted coffee delivered to your door!☕ ",
  "Enjoy the rich aroma of our premium coffee beans 🌟",
  "Subscribe and never run out of your favorite coffee 🔔",
  "Limited edition flavors grab yours today! 🍫",
  "Brew happiness in every cup 😊",
  "Coffee that wakes up your senses ⚡",
  "Hand-picked beans from around the world 🌍"
];

const ScrollingTicker = () => {
  const tickerMessages = [...messages, ...messages]; // دوبار تکرار برای حرکت یکسره

  return (
    <div className="overflow-hidden relative bg-green p-4.5 w-full">
      <div className="flex animate-scrollTicker whitespace-nowrap">
        {tickerMessages.map((msg, idx) => (
          <span key={idx} className="mx-5 text-creamlight font-medium">
            {msg}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes scrollTicker {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-scrollTicker {
          display: inline-flex;
          animation: scrollTicker 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingTicker;
