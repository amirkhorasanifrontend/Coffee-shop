import { useState } from "react";

export default function FeedbackBox() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      text: "This coffee blend is incredibly smooth. Totally exceeded expectations!",
      date: "2025-01-10"
    },
    {
      id: 2,
      name: "Daniel Lee",
      text: "Delivery was fast and the aroma was amazing. I’ll definitely buy again.",
      date: "2025-01-08"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newComment = {
      id: Date.now(),
      name,
      text: message,
      date: new Date().toISOString().split("T")[0]
    };

    setComments([newComment, ...comments]);
    setName("");
    setMessage("");
  };

  return (
    <div className="bg-creamdark p-6 mt-8 mb-10 rounded-2xl border-4 border-green-950/10 max-w-6xl mx-auto">

      {/* Title */}
      <h2 className="text-2xl font-bold text-brown mb-4">Customer Reviews</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-green-950/30 bg-creamlight text-brown focus:outline-none focus:border-green"
        />

        <textarea
          placeholder="Write your feedback..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-green-950/30 bg-creamlight text-brown h-28 resize-none focus:outline-none focus:border-green"
        ></textarea>

        <button className="w-full bg-green text-creamlight py-2 rounded-xl font-semibold shadow-lg hover:opacity-90 transition">
          Submit
        </button>
      </form>

      {/* Comments List */}
      <div className="mt-8 space-y-4">
        {comments.map((c) => (
          <div
            key={c.id}
            className="bg-creamlight p-4 rounded-xl border border-green-950/20 shadow-sm"
          >
            <div className="flex justify-between mb-1">
              <p className="font-semibold text-brown">{c.name}</p>
              <span className="text-green text-sm">{c.date}</span>
            </div>
            <p className="text-brown">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
