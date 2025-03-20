// Dark Mode Toggle Component - components/DarkModeToggle.tsx
import React from "react";
import { useTheme } from "@/contex/ThemeContext";

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default DarkModeToggle;
