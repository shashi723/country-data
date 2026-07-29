// components/DarkModeToggle.tsx

import React from "react";
import { useTheme } from "@/contex/ThemeContext";

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="dark-mode-toggle"
      aria-label={`Switch to ${darkMode ? "Light" : "Dark"} Mode`}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;