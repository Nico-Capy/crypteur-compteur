import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const handleDarkModeToggle = () => {
    const updatedMode = !isDarkMode;
    setIsDarkMode(updatedMode);
    localStorage.setItem('darkMode', updatedMode.toString());
    document.documentElement.classList.toggle('dark', updatedMode);
  };

  return (
    <button
      className="fixed top-6 right-6 flex items-center justify-center w-10 h-10 bg-indigo-700 dark:bg-indigo-950 text-white rounded-full transition-all duration-600"
      onClick={handleDarkModeToggle}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
