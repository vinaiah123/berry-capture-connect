import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Compass } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    // Prevent body scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    closeMenu();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'header-blur py-2' : 'py-4'}`}>
      <nav className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <img 
            src="/berrycast-logo.svg" 
            alt="Berrycast" 
            className={`h-8 transition-opacity ${isDarkMode ? 'brightness-110 contrast-125' : ''}`} 
          />
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8">
          <div className="relative group">
            <button 
              className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-colors" 
              onClick={() => toggleDropdown('features')}
            >
              <span>Features</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className={`absolute top-full pt-2 left-1/2 transform -translate-x-1/2 w-64 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300`}>
              <div className="glassmorphism rounded-xl p-4 shadow-elevated grid gap-2">
                <Link to="/features/screen-recorder" className="hover:bg-accent p-2 rounded-md transition-colors">Screen Recorder</Link>
                <Link to="/features/ai-tools" className="hover:bg-accent p-2 rounded-md transition-colors">AI Tools</Link>
                <Link to="/features/video-hosting" className="hover:bg-accent p-2 rounded-md transition-colors">Video Hosting</Link>
                <Link to="/features/screenshot" className="hover:bg-accent p-2 rounded-md transition-colors">Screenshot Tool</Link>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <button 
              className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-colors" 
              onClick={() => toggleDropdown('use-cases')}
            >
              <span>Use Cases</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className={`absolute top-full pt-2 left-1/2 transform -translate-x-1/2 w-64 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300`}>
              <div className="glassmorphism rounded-xl p-4 shadow-elevated grid gap-2">
                <Link to="/use-cases/marketing" className="hover:bg-accent p-2 rounded-md transition-colors">Marketing</Link>
                <Link to="/use-cases/sales" className="hover:bg-accent p-2 rounded-md transition-colors">Sales</Link>
                <Link to="/use-cases/support" className="hover:bg-accent p-2 rounded-md transition-colors">Support</Link>
                <Link to="/use-cases/education" className="hover:bg-accent p-2 rounded-md transition-colors">Education</Link>
                <Link to="/use-cases/engineering" className="hover:bg-accent p-2 rounded-md transition-colors">Engineering</Link>
              </div>
            </div>
          </div>
          
          <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">
            Pricing
          </Link>
          
          <Link to="/blog" className="text-foreground/80 hover:text-foreground transition-colors">
            Blog
          </Link>
        </div>
        
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/login" className="button-ghost">
            Log in
          </Link>
          <Link to="/signup" className="button-primary">
            Try for Free
          </Link>
        </div>
        
        <div className="lg:hidden flex items-center">
          <button 
            className="relative z-50 flex items-center justify-center p-2 rounded-full bg-primary bg-opacity-10 hover:bg-opacity-20 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Compass className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </nav>
      
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
    </header>
  );
};

export default Navbar;
