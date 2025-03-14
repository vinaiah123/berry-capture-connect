
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface DesktopMenuProps {
  toggleDropdown: (dropdown: string) => void;
}

const DesktopMenu = ({ toggleDropdown }: DesktopMenuProps) => {
  return (
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
  );
};

export default DesktopMenu;
