
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'berry' | 'forest' | 'matcha' | 'jade' | 'teal';

interface ThemeContextType {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  themes: {
    id: ThemeType;
    name: string;
    description: string;
    primaryColor: string;
    accentColor: string;
  }[];
}

const defaultThemes = [
  {
    id: 'berry' as ThemeType,
    name: 'Berry Blue',
    description: 'Modern & Professional',
    primaryColor: 'hsl(210, 90%, 50%)',
    accentColor: 'hsl(210, 80%, 96%)',
  },
  {
    id: 'forest' as ThemeType,
    name: 'Forest Sage',
    description: 'Natural & Serene',
    primaryColor: 'hsl(150, 40%, 35%)',
    accentColor: 'hsl(150, 40%, 95%)',
  },
  {
    id: 'matcha' as ThemeType,
    name: 'Matcha Cherry',
    description: 'Fresh & Balanced',
    primaryColor: 'hsl(130, 40%, 40%)',
    accentColor: 'hsl(350, 80%, 96%)',
  },
  {
    id: 'jade' as ThemeType,
    name: 'Jade Gold',
    description: 'Elegant & Prosperous',
    primaryColor: 'hsl(160, 50%, 30%)',
    accentColor: 'hsl(45, 90%, 70%)',
  },
  {
    id: 'teal' as ThemeType,
    name: 'Teal Rust',
    description: 'Unique & Timeless',
    primaryColor: 'hsl(185, 65%, 40%)',
    accentColor: 'hsl(20, 70%, 85%)',
  },
];

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'jade',
  setTheme: () => {},
  isDarkMode: false,
  toggleDarkMode: () => {},
  themes: defaultThemes,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem('berrycast-theme');
    return (savedTheme as ThemeType) || 'jade';
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('berrycast-dark-mode');
    return savedMode === 'true';
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('berrycast-dark-mode', (!isDarkMode).toString());
  };

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem('berrycast-theme', theme);
  };

  useEffect(() => {
    // Set initial theme and mode based on localStorage
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [currentTheme, isDarkMode]);

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      setTheme, 
      isDarkMode, 
      toggleDarkMode, 
      themes: defaultThemes 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
