
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-6 bg-gradient-to-br from-background to-accent/30">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <span className="text-9xl font-bold bg-gradient-to-r from-berry-600 to-berry-800 bg-clip-text text-transparent">404</span>
          </div>
          <h1 className="text-3xl font-semibold mb-4">Path not found</h1>
          <p className="text-foreground/70 mb-8">
            Like a samurai in an empty dojo, we couldn't find the page you're looking for. It might have been moved or no longer exists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="button-primary inline-flex items-center justify-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return home
            </Link>
            <Link to="/contact" className="button-outline">
              Contact support
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
