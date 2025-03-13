
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-20 flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full transform -translate-x-1/2 translate-y-1/3 -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div>
              <div className="flex items-center mb-4 space-x-2">
                <span className="h-px w-8 bg-accent"></span>
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  Screen recording, simplified
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-pretty">
                Record your screen <span className="relative inline-block">
                  <span className="relative z-10 text-primary">in seconds</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/30 -z-10"></span>
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg text-pretty">
              Create, share, and collaborate with instant screen recordings and AI-powered insights. No downloads required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="jade-gold" size="lg" asChild className="shadow-lg">
                <Link to="/signup">Try Berrycast Free</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group border-primary/20 hover:border-primary">
                <Link to="/features">
                  <span>See all features</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-sm text-foreground/60 mb-4 flex items-center">
                <span className="h-px w-4 bg-foreground/30 mr-2"></span>
                Used by 10,000+ companies worldwide
              </p>
              <div className="flex flex-wrap items-center gap-8 mt-4">
                {['Airbnb', 'Netflix', 'Microsoft', 'Shopify', 'Uber'].map((company, index) => (
                  <div 
                    key={company} 
                    className="text-foreground/40 font-medium"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="h-8 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="aspect-video bg-gray-100 dark:bg-gray-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-accent flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                  {/* Video placeholder overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    00:32 / 01:15
                  </div>
                </div>
                <div className="p-4">
                  <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded-md w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-md w-full mb-2"></div>
                  <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-md w-2/3"></div>
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
                  <div className="h-6 w-6 rounded-full bg-primary text-accent flex items-center justify-center">
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
            
            {/* New notification element */}
            <div className="absolute top-1/2 right-[-60px] transform">
              <div className="glassmorphism rounded-lg p-3 shadow-elevated animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  </div>
                  <p className="text-xs font-medium">New comment</p>
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
