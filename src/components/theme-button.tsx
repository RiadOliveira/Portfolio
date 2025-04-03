'use client';

import { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { toggleTheme } from 'utils/toggleTheme';

export function ThemeButton() {
  const [darkTheme, setDarkTheme] = useState(true);

  function handleThemeToggle() {
    toggleTheme();
    setDarkTheme((prev) => !prev);
  }

  return (
    <button
      type="button"
      onClick={handleThemeToggle}
      className="size-8.5 p-1 rounded-full hover:bg-dark/85 dark:hover:bg-light/85 dark:hover:text-dark active:bg-dark/85 dark:active:bg-light/85 dark:active:text-dark duration-300"
    >
      {darkTheme ? (
        <MdOutlineLightMode className="size-full" />
      ) : (
        <MdOutlineDarkMode className="size-full" />
      )}
    </button>
  );
}
