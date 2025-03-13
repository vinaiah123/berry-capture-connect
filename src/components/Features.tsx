
import { useEffect, useRef } from 'react';
import { Video, MonitorSmartphone, CloudLightning, Wand2, Share2, Clock } from 'lucide-react';

const features = [
  {
    icon: <Video className="h-6 w-6" />,
    title: 'Effortless Screen Recording',
    description: 'Capture your screen, webcam, or both in HD quality with just a few clicks. No downloads required.',
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: 'Cross-Platform Compatibility',
    description: 'Works seamlessly on Mac, Windows, iOS, and Android. Record from any device, anywhere.',
  },
  {
    icon: <CloudLightning className="h-6 w-6" />,
    title: 'Instant Cloud Hosting',
    description: 'Your recordings are automatically uploaded to the cloud for immediate access and sharing.',
  },
  {
    icon: <Wand2 className="h-6 w-6" />,
    title: 'AI-Powered Insights',
    description: 'Generate transcriptions, summaries, and key moments using our advanced AI tools.',
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: 'One-Click Sharing',
    description: 'Share your recordings via link, email, or embed them directly into your favorite tools.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Time-Saving Templates',
    description: 'Create custom recording templates for consistent, professional videos every time.',
  },
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
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
    <section ref={featuresRef} className="section-spacing bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-in-on-scroll">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
            Why Choose Berrycast
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Powerful features to supercharge your communication
          </h2>
          <p className="text-lg text-foreground/70 text-balance">
            Berrycast combines simplicity with powerful features to help you communicate more effectively through video.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="slide-in-on-scroll feature-card"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
