import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

const data = [
  {
    id: 1,
    stars: 5,
    text: "The Calm Blend has become part of my morning journaling. It's like a soft start button for my day.",
    name: "Olivia S.",
    location: "Seattle",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 2,
    stars: 5,
    text: "I've tried countless coffee subscriptions, but Alder feels different — it's intentional in every detail.",
    name: "Nick D.",
    location: "Chicago",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 3,
    stars: 5,
    text: "I've never felt more connected to my coffee. Everything about Alder feels purposeful and grounded.",
    name: "Marcus H.",
    location: "Brooklyn",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 4,
    stars: 5,
    text: "It's like the coffee version of self-care. No more mindless cups for me.",
    name: "Claire N.",
    location: "Denver",
    avatar:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 5,
    stars: 5,
    text: "The Calm Blend helps me slow down and reconnect with myself before the day begins. It's smooth, comforting, and genuinely grounding.",
    name: "Lila M.",
    location: "San Francisco",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 6,
    stars: 5,
    text: "The quality is unreal. You can taste the difference — and knowing it's ethically sourced makes it even better.",
    name: "Jen L.",
    location: "Portland",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
  },
];

function Star({ filled }) {
  return (
    <svg
      aria-hidden="true"
      className="w-4 h-4 inline-block mr-0.5"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
        d="M12 .587l3.668 7.431L23.2 9.75l-5.6 5.456L19.335 24 12 19.771 4.665 24l1.735-8.794L.8 9.75l7.532-1.732L12 .587z"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="p-6 bg-creamlight">
      <SectionHeader
        title="People who start their"
        text="slow mornings with Alder"
      />

      <div className="max-w-7xl mx-auto pt-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map(({ id, stars, text, name, location, avatar }) => (
            <article
              key={id}
              className="relative bg-creamdark p-6 rounded-2xl shadow-sm ring-1 ring-white/30 border border-transparent transition-transform duration-400 hover:shadow-xl hover:scale-102"
            >
              <div className="mb-3 text-green">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < stars} />
                ))}
              </div>

              <blockquote className="text-creamdark2 font-semibold leading-relaxed mb-4">
                “{text}”
              </blockquote>

              <div className="flex items-center gap-3">
                <img
                  src={avatar}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover border border-white shadow"
                />

                <div className="text-sm">
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-gray-600 text-xs">{location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
