import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

const CoffeeFilterBar = () => {
  const categories = ['Popular', 'Espresso', 'Cold Brew', 'Light Roast', 'Dark Roast'];

  return (
    <div className="flex justify-center my-3">
      <div className="bg-creamlight w-full max-w-5xl rounded-2xl shadow-lg flex items-center justify-between px-6 py-4">
        {/* دسته‌بندی‌ها */}
        <div className="flex gap-6 font-semibold text-green items-center">
          {categories.map((category, idx) => (
            <p
              key={idx}
              className={category === 'Popular' ? 'bg-black/10 px-3 py-1 rounded-xl' : ''}
            >
              {category}
            </p>
          ))}
        </div>

        {/* جستجو */}
        <div className="relative w-60">
          <input
            type="text"
            placeholder="Search Coffee ..."
            className="w-full bg-black/10 px-3 py-1 rounded-xl border-0"
          />
          <button className="absolute right-2 top-1.5 text-xl cursor-pointer">
            <RiSearchLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeFilterBar;
