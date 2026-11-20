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

export function applyThemeToDOM(_theme: ThemeMode) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.classList.remove('dark');
  root.classList.add('light');
  root.setAttribute('data-theme', 'light');
  root.style.colorScheme = 'light';
}

export function setTheme(_theme: ThemeMode) {
  currentTheme = 'light';
  applyThemeToDOM('light');
  try {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');
  } catch {
    // ignore
  }
  listeners.forEach((fn) => fn(currentTheme));
}

export function toggleTheme(): ThemeMode {
  setTheme('light');
  return 'light';
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
