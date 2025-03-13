
import { useEffect, useRef } from 'react';
import { Video, MonitorSmartphone, CloudLightning, Wand2, Share2, Clock } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from './ui/button';

const features = [
  {
    icon: (color?: string) => <Video className="h-6 w-6" color={color} />,
    title: 'Effortless Screen Recording',
    description: 'Capture your screen, webcam, or both in HD quality with just a few clicks. No downloads required.',
  },
  {
    icon: (color?: string) => <MonitorSmartphone className="h-6 w-6" color={color} />,
    title: 'Cross-Platform Compatibility',
    description: 'Works seamlessly on Mac, Windows, iOS, and Android. Record from any device, anywhere.',
  },
  {
    icon: (color?: string) => <CloudLightning className="h-6 w-6" color={color} />,
    title: 'Instant Cloud Hosting',
    description: 'Your recordings are automatically uploaded to the cloud for immediate access and sharing.',
  },
  {
    icon: (color?: string) => <Wand2 className="h-6 w-6" color={color} />,
    title: 'AI-Powered Insights',
    description: 'Generate transcriptions, summaries, and key moments using our advanced AI tools.',
  },
  {
    icon: (color?: string) => <Share2 className="h-6 w-6" color={color} />,
    title: 'One-Click Sharing',
    description: 'Share your recordings via link, email, or embed them directly into your favorite tools.',
  },
  {
    icon: (color?: string) => <Clock className="h-6 w-6" color={color} />,
    title: 'Time-Saving Templates',
    description: 'Create custom recording templates for consistent, professional videos every time.',
  },
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const { currentTheme } = useTheme();
  
  // Gold color for icons when using Jade theme
  const iconColor = currentTheme === 'jade' ? 'hsl(45, 90%, 70%)' : undefined;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.slide-in-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section ref={featuresRef} className="section-spacing relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 -z-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-in-on-scroll">
          <div className="inline-block mb-8">
            <span className="relative inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-2">
              Why Choose Berrycast
            </span>
            <span className="block h-px w-12 bg-accent mx-auto mt-2"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Powerful features to supercharge your communication
          </h2>
          <p className="text-lg text-foreground/70 text-balance">
            Berrycast combines simplicity with powerful features to help you communicate more effectively through video.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="slide-in-on-scroll group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative p-8 rounded-xl transition-all duration-500 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 hover:shadow-luxe border border-gray-100/80 dark:border-gray-700/80 overflow-hidden group-hover:border-accent/20">
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full transform translate-x-1/2 -translate-y-1/2 group-hover:from-accent/20 transition-colors duration-300"></div>
                
                <div className="h-16 w-16 rounded-full bg-primary/5 text-accent flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary/10 transition-all duration-300 shadow-inner">
                  <div className="h-14 w-14 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center border border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                    {feature.icon(iconColor)}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-foreground/70 mb-6">{feature.description}</p>
                
                <div className="h-px w-12 bg-accent group-hover:w-20 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="luxe" size="luxe" className="mx-auto">
            Explore our comprehensive feature library
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
