import React from 'react'
import { RiSearchLine } from 'react-icons/ri';

export default function SearchInput({ inputValue, onChange }) {
  return (
    <div className="relative w-60">
      <input
        type="text"
        placeholder="Search Coffee ..."
        className="w-full bg-black/10 px-3 py-1 rounded-xl border-0"
        value={inputValue}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <button className="absolute right-2 top-1.5 text-xl cursor-pointer">
        <RiSearchLine />
      </button>
    </div>
  );
}
