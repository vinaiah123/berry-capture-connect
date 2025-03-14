
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollState } from '@/hooks/use-scroll';
import { useMenuScrollLock } from '@/hooks/use-menu-scroll-lock';
import NavLogo from '@/components/navbar/NavLogo';
import DesktopMenu from '@/components/navbar/DesktopMenu';
import MobileMenu from '@/components/navbar/MobileMenu';
import NavActions from '@/components/navbar/NavActions';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const isMobile = useIsMobile();
  const isScrolled = useScrollState(10);
  
  // Handle menu scroll lock
  useMenuScrollLock(isMenuOpen);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

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
        <NavLogo closeMenu={closeMenu} />
        <DesktopMenu toggleDropdown={toggleDropdown} />
        <NavActions isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>
      
      <MobileMenu 
        isMenuOpen={isMenuOpen}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        closeMenu={closeMenu}
      />
    </header>
  );
};

export default Navbar;
