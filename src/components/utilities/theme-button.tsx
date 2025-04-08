'use client';

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

export function ThemeButton() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative size-8.5 p-1 rounded-full hover:bg-dark/85 dark:hover:bg-light/85 dark:hover:text-dark active:bg-dark/85 dark:active:bg-light/85 dark:active:text-dark duration-300"
    >
      <MdOutlineLightMode className="absolute inset-0 m-auto size-6.5 invisible opacity-0 dark:visible dark:opacity-100 transition-opacity duration-500" />
      <MdOutlineDarkMode className="absolute inset-0 m-auto size-6.5 visible dark:invisible dark:opacity-0 transition-opacity duration-500" />
    </button>
  );
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
}
