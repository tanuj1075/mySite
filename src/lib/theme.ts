// Theme Management Engine for VANTA ARCHIVE
// Seamlessly toggles between Obsidian Dark Luxury and Alabaster / Travertine Light Luxury

export type ThemeMode = 'dark' | 'light';

const THEME_STORAGE_KEY = 'vanta_theme_mode';

let currentTheme: ThemeMode = 'light';
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
    root.style.backgroundColor = '#F7F2EC';
  } else {
    root.classList.add('dark');
    root.classList.remove('light');
    root.setAttribute('data-theme', 'dark');
    root.style.colorScheme = 'dark';
    root.style.backgroundColor = '#09090b';
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
  if (typeof window === 'undefined') return 'light';

  currentTheme = 'light';
  try {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');
    localStorage.setItem('vanta_redesign_v2', 'true');
  } catch {
    // The page still renders in light mode when storage is unavailable.
  }

  applyThemeToDOM('light');
  return 'light';
}

export function subscribeTheme(fn: ThemeListener): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
