"use client";

import React from "react";

interface FooterProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

export default function Footer({ toggleDarkMode, isDarkMode }: FooterProps) {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; 2025 US11</p>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:opacity-80 transition"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </footer>
  );
}

