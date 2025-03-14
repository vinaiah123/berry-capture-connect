
import { Link } from 'react-router-dom';
import { Compass, X } from 'lucide-react';

interface NavActionsProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavActions = ({ isMenuOpen, setIsMenuOpen }: NavActionsProps) => {
  return (
    <>
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
    </>
  );
};

export default NavActions;
