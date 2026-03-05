"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="M15.6 3.5a8.2 8.2 0 1 0 4.9 14.8 8.8 8.8 0 0 1-10.8-10.8 8.2 8.2 0 0 0 5.9-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial: Theme = saved === "light" || saved === "dark" ? saved : "dark";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Alternar entre tema claro e escuro"
      onClick={() => {
        const next: Theme = isDark ? "light" : "dark";
        setTheme(next);
        applyTheme(next);
      }}
      className="group inline-flex items-center gap-2 rounded-full border-2 border-foreground/40 bg-surface/85 px-2 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
    >
      <span
        className={`relative inline-flex h-8 w-16 items-center rounded-full border transition-colors duration-200 ${
          isDark
            ? "border-foreground/20 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.12)]"
            : "border-transparent bg-[#1f1f1f] shadow-[0_1px_4px_rgba(0,0,0,0.2)]"
        }`}
      >
        <span
          className={`absolute inline-flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 ${
            isDark
              ? "left-[34px] bg-black text-white"
              : "left-[2px] bg-white text-[#161616]"
          }`}
        >
          {isDark ? <MoonIcon /> : <SunIcon />}
        </span>
      </span>
      <span className={`text-xs font-semibold transition-colors duration-200 ${isDark ? "text-brand-purple" : "text-deep-purple"}`}>
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
