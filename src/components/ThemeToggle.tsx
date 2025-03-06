import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { cn } from '../lib/utils';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'fixed top-4 right-4 z-50 rounded-full p-2',
        'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
        'dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700',
        'transition-colors duration-200'
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}