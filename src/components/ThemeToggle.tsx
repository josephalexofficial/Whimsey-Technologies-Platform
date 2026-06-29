import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative flex h-8 w-14 items-center rounded-full border-2 transition-all duration-300 ease-out ${
        isDark
          ? 'border-[#0056D2] bg-gray-800'
          : 'border-[#0056D2] bg-gray-200'
      }`}
    >
      <span
        className={`absolute flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ease-out ${
          isDark
            ? 'translate-x-7 bg-gray-700 text-white'
            : 'translate-x-0.5 bg-white text-[#0056D2]'
        }`}
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  )
}
