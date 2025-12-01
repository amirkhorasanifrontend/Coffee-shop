import { useState } from "react";

export default function FAQAccordion() {
  const faqs = [
    {
      id: 1,
      question: "What percentage of Younika coffee beans are Arabica?",
      answer: "Younika coffee beans are 100% Arabica.",
    },
    {
      id: 2,
      question: "How much caffeine is in Younika coffee beans?",
      answer: "The caffeine content varies depending on the roast level, but it generally contains a moderate amount.",
    },
    {
      id: 3,
      question: "What brewing methods are suitable for Younika coffee beans?",
      answer: "They work well with pour-over, espresso, French press, and cold brew methods.",
    },
    {
      id: 4,
      question: "How do we brew coffee using Younika beans?",
      answer: "Grind the beans according to your brewing method and adjust the ratio of water to coffee for taste.",
    },
  ];

  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-2xl mx-auto pt-5">      
      <h2 className="text-2xl font-semibold text-brown  text-center mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((item) => (
          <div
            key={item.id}
            className="border-2 border-black/10 bg-creamlight rounded-xl p-4 transition-all duration-200 shadow-sm"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="text-lg text-brown font-medium">{item.question}</span>
              <span
                className={`transition-transform duration-200 ${
                  openId === item.id ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            {openId === item.id && (
              <div className="mt-3 text-gray-700 animate-fadeIn">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Tailwind animation */
/* Add this to your global CSS if needed */
// .animate-fadeIn {
//   @apply transition-opacity duration-300 opacity-0;
// }
// .animate-fadeIn.opacity-0 {
//   opacity: 1;
// }
