
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

interface NavLogoProps {
  closeMenu: () => void;
}

const NavLogo = ({ closeMenu }: NavLogoProps) => {
  const { isDarkMode } = useTheme();
  
  return (
    <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
      <img 
        src="/berrycast-logo.svg" 
        alt="Berrycast" 
        className={`h-8 transition-opacity ${isDarkMode ? 'brightness-110 contrast-125' : ''}`} 
      />
    </Link>
  );
};

export default NavLogo;
