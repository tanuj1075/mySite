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
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center rounded-full p-1 shadow-lg backdrop-blur-md transition-all border ${
        isLight
          ? 'bg-white/95 border-[#E9D9CA] shadow-[0_4px_24px_rgba(0,0,0,0.10)] text-[#242321]'
          : 'bg-[#1a1a1f]/95 border-[#333340] shadow-[0_4px_24px_rgba(0,0,0,0.40)] text-[#f4f4f6]'
      }`}
    >
      <div className="flex items-center gap-0.5">
        {/* Dark Mode Button */}
        <button
          id="floating-theme-dark-btn"
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
            !isLight
              ? 'bg-[#B4532A] text-white shadow-sm'
              : 'text-[#77716B] hover:text-[#242321] hover:bg-[#F7F2EC]'
          }`}
          title="Dark Mode"
        >
          <Moon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Dark</span>
        </button>

        {/* Light Mode Button */}
        <button
          id="floating-theme-light-btn"
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
            isLight
              ? 'bg-[#B4532A] text-white shadow-sm'
              : 'text-[#8E8E98] hover:text-[#F4F4F6] hover:bg-[#242429]'
          }`}
          title="Light Mode"
        >
          <Sun className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Light</span>
        </button>
      </div>
    </aside>
  );
};
