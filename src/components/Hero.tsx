
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-20 flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                Screen recording, simplified
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-pretty">
                Record your screen <span className="text-primary">in seconds</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg text-pretty">
              Create, share, and collaborate with instant screen recordings and AI-powered insights. No downloads required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/signup" className="button-primary text-base py-6 px-8 rounded-lg">
                Try Berrycast Free
              </Link>
              <Link to="/features" className="button-outline text-base py-6 px-8 rounded-lg flex items-center justify-center group">
                <span>See all features</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="pt-6">
              <p className="text-sm text-foreground/60">
                Used by 10,000+ companies worldwide
              </p>
              <div className="flex flex-wrap items-center gap-8 mt-4">
                {['Airbnb', 'Netflix', 'Microsoft', 'Shopify', 'Uber'].map((company) => (
                  <div key={company} className="text-foreground/40 font-medium">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white rounded-2xl shadow-elevated overflow-hidden border border-gray-100">
                <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="aspect-video bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary/90 text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="h-8 bg-gray-100 rounded-md w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-100 rounded-md w-full mb-2"></div>
                  <div className="h-4 bg-gray-100 rounded-md w-2/3"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 transform rotate-3">
              <div className="glassmorphism rounded-lg p-4 shadow-elevated animate-float">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Recording saved</p>
                    <p className="text-xs text-foreground/60">Ready to share</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 transform -rotate-3">
              <div className="glassmorphism rounded-lg p-3 shadow-elevated animate-subtle-bounce">
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                      <polyline points="10 17 15 12 10 7"></polyline>
                      <line x1="15" y1="12" x2="3" y2="12"></line>
                    </svg>
                  </div>
                  <p className="text-xs font-medium">One-click sharing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
