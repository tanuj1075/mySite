import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { getTheme, setTheme, subscribeTheme, ThemeMode } from '../lib/theme';

export const FloatingThemeWidget: React.FC = () => {
  const [theme, setCurrentTheme] = useState<ThemeMode>(getTheme());

  useEffect(() => {
    return subscribeTheme((t) => setCurrentTheme(t));
  }, []);

  const isLight = theme === 'light';

  return (
    <aside
      id="floating-theme-toggle"
      aria-label="Theme mode switcher"
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center p-1 backdrop-blur-md transition-all font-mono border ${
        isLight
          ? 'bg-white/95 border-[#C9A96E]/70 shadow-[0_8px_32px_rgba(0,0,0,0.12)] text-[#121215]'
          : 'bg-[#121215]/95 border-[#C9A96E]/50 shadow-[0_8px_32px_rgba(0,0,0,0.45)] text-[#f4f4f6]'
      }`}
    >
      <div className="flex items-center gap-1">
        <button
          id="floating-theme-dark-btn"
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
            !isLight
              ? 'bg-[#C9A96E] text-[#09090B] shadow-sm'
              : 'text-[#5E5C66] hover:text-[#121215]'
          }`}
          title="Switch to Obsidian Dark Luxury Mode"
        >
          <Moon className="w-3.5 h-3.5" />
          <span>DARK</span>
        </button>

        <button
          id="floating-theme-light-btn"
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
            isLight
              ? 'bg-[#C9A96E] text-[#09090B] shadow-sm'
              : 'text-[#8E8E98] hover:text-[#F4F4F6]'
          }`}
          title="Switch to Alabaster Travertine Light Luxury Mode"
        >
          <Sun className="w-3.5 h-3.5" />
          <span>LIGHT</span>
        </button>
      </div>
    </aside>
  );
};
