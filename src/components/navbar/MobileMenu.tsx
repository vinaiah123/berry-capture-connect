
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isMenuOpen: boolean;
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
  closeMenu: () => void;
}

const MobileMenu = ({ isMenuOpen, activeDropdown, toggleDropdown, closeMenu }: MobileMenuProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    closeMenu();
  };

  return (
    <div 
      className={`lg:hidden fixed inset-0 bg-background z-40 transform transition-transform duration-500 ease-in-out ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container pt-20 pb-6 h-full overflow-y-auto">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <button 
              className="flex items-center justify-between text-lg font-medium p-3 rounded-lg hover:bg-accent/50 transition-colors"
              onClick={() => toggleDropdown('features')}
            >
              <span>Features</span>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeDropdown === 'features' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="ml-4 flex flex-col space-y-1 border-l-2 border-primary/20 pl-4 py-2">
                <button onClick={() => handleNavigation('/features/screen-recorder')} className="p-2 text-left hover:text-primary transition-colors">Screen Recorder</button>
                <button onClick={() => handleNavigation('/features/ai-tools')} className="p-2 text-left hover:text-primary transition-colors">AI Tools</button>
                <button onClick={() => handleNavigation('/features/video-hosting')} className="p-2 text-left hover:text-primary transition-colors">Video Hosting</button>
                <button onClick={() => handleNavigation('/features/screenshot')} className="p-2 text-left hover:text-primary transition-colors">Screenshot Tool</button>
              </div>
            </div>
            
            <button 
              className="flex items-center justify-between text-lg font-medium p-3 rounded-lg hover:bg-accent/50 transition-colors"
              onClick={() => toggleDropdown('use-cases')}
            >
              <span>Use Cases</span>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${activeDropdown === 'use-cases' ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeDropdown === 'use-cases' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="ml-4 flex flex-col space-y-1 border-l-2 border-primary/20 pl-4 py-2">
                <button onClick={() => handleNavigation('/use-cases/marketing')} className="p-2 text-left hover:text-primary transition-colors">Marketing</button>
                <button onClick={() => handleNavigation('/use-cases/sales')} className="p-2 text-left hover:text-primary transition-colors">Sales</button>
                <button onClick={() => handleNavigation('/use-cases/support')} className="p-2 text-left hover:text-primary transition-colors">Support</button>
                <button onClick={() => handleNavigation('/use-cases/education')} className="p-2 text-left hover:text-primary transition-colors">Education</button>
                <button onClick={() => handleNavigation('/use-cases/engineering')} className="p-2 text-left hover:text-primary transition-colors">Engineering</button>
              </div>
            </div>
            
            <button onClick={() => handleNavigation('/pricing')} className="text-lg font-medium p-3 rounded-lg hover:bg-accent/50 transition-colors text-left">
              Pricing
            </button>
            
            <button onClick={() => handleNavigation('/blog')} className="text-lg font-medium p-3 rounded-lg hover:bg-accent/50 transition-colors text-left">
              Blog
            </button>
          </div>
          
          <div className="flex flex-col space-y-3 pt-4 border-t border-border">
            <button onClick={() => handleNavigation('/login')} className="button-outline w-full justify-center">
              Log in
            </button>
            <button onClick={() => handleNavigation('/signup')} className="button-primary w-full justify-center">
              Try for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
