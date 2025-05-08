'use client';

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

export function ThemeButton() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="hover:bg-dark/85 dark:hover:bg-light/85 dark:hover:text-dark active:bg-dark/85 dark:active:bg-light/85 dark:active:text-dark relative size-9 rounded-full p-1 duration-300 sm:size-8.5 md:size-9.5 lg:size-12"
    >
      <MdOutlineLightMode className="invisible absolute inset-0 m-auto size-7 opacity-0 transition-opacity duration-500 sm:size-6.5 md:size-7.5 lg:size-9 dark:visible dark:opacity-100" />
      <MdOutlineDarkMode className="visible absolute inset-0 m-auto size-7 transition-opacity duration-500 sm:size-6.5 md:size-7.5 lg:size-9 dark:invisible dark:opacity-0" />
    </button>
  );
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
}
