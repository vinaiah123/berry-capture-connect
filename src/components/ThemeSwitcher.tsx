
import React, { useState } from 'react';
import { Paintbrush, Palette, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const ThemeSwitcher = () => {
  const { currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleThemePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Theme Panel */}
      {isOpen && (
        <div className="glassmorphism mb-4 p-5 rounded-xl w-[280px] shadow-elevated">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Palette className="h-5 w-5 mr-2 text-primary" />
              <h3 className="font-medium">Theme Switcher</h3>
            </div>
            <button 
              onClick={toggleThemePanel}
              className="rounded-full h-8 w-8 flex items-center justify-center hover:bg-background transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <ToggleGroup 
            type="single" 
            value={currentTheme} 
            onValueChange={(value) => value && setTheme(value as any)}
            className="grid grid-cols-1 gap-2"
          >
            {themes.map((theme) => (
              <ToggleGroupItem 
                key={theme.id} 
                value={theme.id}
                className={`flex justify-between items-center px-3 py-2 h-auto ${theme.id === 'jade' ? 'border-2 border-accent' : ''}`}
              >
                <div className="flex items-center">
                  <div 
                    className={`h-6 w-6 rounded-full mr-3 ${theme.id === 'jade' ? 'ring-2 ring-accent ring-offset-2' : ''}`}
                    style={{ backgroundColor: theme.primaryColor }}
                  />
                  <div className="text-left">
                    <div className="font-medium text-sm">{theme.name}</div>
                    <div className="text-xs text-muted-foreground">{theme.description}</div>
                  </div>
                </div>
                {currentTheme === theme.id && (
                  <div className={`h-2 w-2 rounded-full ${theme.id === 'jade' ? 'bg-accent' : 'bg-primary'}`} />
                )}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={toggleThemePanel}
        className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-samurai hover:bg-primary/90 transition-colors"
        aria-label="Toggle theme panel"
      >
        <Paintbrush className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
