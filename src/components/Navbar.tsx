
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'header-blur py-2' : 'py-4'}`}>
      <nav className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <span className="text-2xl font-semibold text-primary">Berrycast</span>
        </Link>
        
        {/* Desktop Menu */}
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
        
        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-16 bg-background z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container p-4 flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <button 
              className="flex items-center justify-between text-lg font-medium p-2"
              onClick={() => toggleDropdown('features')}
            >
              <span>Features</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'features' && (
              <div className="ml-4 flex flex-col space-y-2 border-l-2 border-primary/20 pl-4">
                <Link to="/features/screen-recorder" className="p-2" onClick={closeMenu}>Screen Recorder</Link>
                <Link to="/features/ai-tools" className="p-2" onClick={closeMenu}>AI Tools</Link>
                <Link to="/features/video-hosting" className="p-2" onClick={closeMenu}>Video Hosting</Link>
                <Link to="/features/screenshot" className="p-2" onClick={closeMenu}>Screenshot Tool</Link>
              </div>
            )}
            
            <button 
              className="flex items-center justify-between text-lg font-medium p-2"
              onClick={() => toggleDropdown('use-cases')}
            >
              <span>Use Cases</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === 'use-cases' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'use-cases' && (
              <div className="ml-4 flex flex-col space-y-2 border-l-2 border-primary/20 pl-4">
                <Link to="/use-cases/marketing" className="p-2" onClick={closeMenu}>Marketing</Link>
                <Link to="/use-cases/sales" className="p-2" onClick={closeMenu}>Sales</Link>
                <Link to="/use-cases/support" className="p-2" onClick={closeMenu}>Support</Link>
                <Link to="/use-cases/education" className="p-2" onClick={closeMenu}>Education</Link>
                <Link to="/use-cases/engineering" className="p-2" onClick={closeMenu}>Engineering</Link>
              </div>
            )}
            
            <Link to="/pricing" className="text-lg font-medium p-2" onClick={closeMenu}>
              Pricing
            </Link>
            
            <Link to="/blog" className="text-lg font-medium p-2" onClick={closeMenu}>
              Blog
            </Link>
          </div>
          
          <div className="flex flex-col space-y-3 pt-4 border-t border-border">
            <Link to="/login" className="button-outline w-full justify-center" onClick={closeMenu}>
              Log in
            </Link>
            <Link to="/signup" className="button-primary w-full justify-center" onClick={closeMenu}>
              Try for Free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
