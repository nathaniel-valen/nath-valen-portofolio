"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg transition-colors duration-300"
      title="Toggle Theme"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
