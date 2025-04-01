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
      type="button"
      onClick={handleThemeToggle}
      className="size-8.5 p-1 rounded-full text-light hover:bg-dark/90 dark:hover:bg-light/90 dark:hover:text-dark active:bg-dark/90 dark:active:bg-light/90 dark:active:text-dark duration-300"
    >
      {darkTheme ? (
        <MdOutlineLightMode className="size-full" />
      ) : (
        <MdOutlineDarkMode className="size-full" />
      )}
    </button>
  );
}
