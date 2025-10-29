"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#techstack" },
    { label: "Education", href: "#education" },
    { label: "Organization", href: "#organization" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* === Left Logo / Name === */}
        <Link
          href="#"
          className="text-2xl font-bold font-mono text-white hover:text-primary transition-colors"
        >
          <span className="text-primary">{"<"}</span>
          nath-valen
          <span className="text-primary">{"/>"}</span>
        </Link>

        {/* === Center Links (Desktop) === */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-mono">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative group hover:text-white transition"
            >
              {item.label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* === Right - Dark Mode Button === */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border border-white/20 hover:border-primary hover:text-primary transition-all"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* === Mobile Menu Toggle === */}
        <button
          className="md:hidden text-white ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* === Mobile Menu === */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 text-gray-300 font-mono bg-black/80 border-t border-white/10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
