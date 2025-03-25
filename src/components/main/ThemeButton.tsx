'use client';

import { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { toggleTheme } from 'utils/toggleTheme';

export function ThemeButton() {
  const [darkTheme, setDarkTheme] = useState(false);

  function handleThemeToggle() {
    toggleTheme();
    setDarkTheme((prev) => !prev);
  }

  return (
    <button
      onClick={handleThemeToggle}
      className="size-6.5 hover:size-7 border-zinc-400 rounded-md"
    >
      {darkTheme ? (
        <MdOutlineLightMode className="size-full" />
      ) : (
        <MdOutlineDarkMode className="size-full" />
      )}
    </button>
  );
}
