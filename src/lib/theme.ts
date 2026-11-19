// Theme Management Engine for VANTA ARCHIVE
// Seamlessly toggles between Obsidian Dark Luxury and Alabaster / Travertine Light Luxury

export type ThemeMode = 'dark' | 'light';

const THEME_STORAGE_KEY = 'vanta_theme_mode';

let currentTheme: ThemeMode = 'dark';
type ThemeListener = (theme: ThemeMode) => void;
const listeners = new Set<ThemeListener>();

export function getTheme(): ThemeMode {
  return currentTheme;
}

export function applyThemeToDOM(theme: ThemeMode) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  if (theme === 'light') {
    root.classList.add('light');
    root.classList.remove('dark');
    root.setAttribute('data-theme', 'light');
    root.style.colorScheme = 'light';
  } else {
    root.classList.add('dark');
    root.classList.remove('light');
    root.setAttribute('data-theme', 'dark');
    root.style.colorScheme = 'dark';
  }
}

export function setTheme(theme: ThemeMode) {
  currentTheme = theme;
  applyThemeToDOM(theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore
  }
  listeners.forEach((fn) => fn(currentTheme));
}

export function toggleTheme(): ThemeMode {
  const next = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

export function initTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'dark';

  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
    if (saved === 'light' || saved === 'dark') {
      currentTheme = saved;
    } else {
      // Check system preference
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      currentTheme = prefersLight ? 'light' : 'dark';
    }
  } catch {
    currentTheme = 'dark';
  }

  applyThemeToDOM(currentTheme);
  return currentTheme;
}

export function subscribeTheme(fn: ThemeListener): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
