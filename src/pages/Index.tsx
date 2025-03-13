
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { ArrowRight, Video, Laptop, CirclePlay, ArrowUpRight } from 'lucide-react';

const Testimonial = ({ quote, author, role, company, image }) => (
  <div className="bg-white p-6 rounded-xl shadow-subtle border border-gray-100">
    <div className="mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="text-yellow-400 inline-block">★</span>
      ))}
    </div>
    <p className="text-foreground/80 mb-6 italic">"{quote}"</p>
    <div className="flex items-center">
      <div className="h-12 w-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
        <div className="w-full h-full bg-gray-300"></div>
      </div>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-foreground/60">{role}, {company}</p>
      </div>
    </div>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for animation on scroll
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
    
    // Add event listener to initialize any other animations
    document.addEventListener('DOMContentLoaded', () => {
      const script = document.createElement('script');
      script.innerHTML = `
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth'
              });
            }
          });
        });
      `;
      document.body.appendChild(script);
    });
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Berry Capture Connect - Premium Screen Recording Solution" 
        description="Communicate with elegance and sophistication. The ultimate luxury screen recording and video hosting solution for elite professionals."
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Social Proof */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <p className="text-center text-foreground/60 mb-8">Trusted by 10,000+ companies and creators worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {['Apple', 'Microsoft', 'Google', 'Amazon', 'Netflix', 'Spotify'].map((company) => (
              <div key={company} className="text-foreground/40 font-medium text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 slide-in-on-scroll">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Three simple steps to better communication
            </h2>
            <p className="text-lg text-foreground/70 text-balance">
              Berrycast makes it easy to record, share, and collaborate with anyone, anywhere.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -z-10 hidden md:block"></div>
            
            {[
              {
                icon: <Video className="h-6 w-6" />,
                title: 'Record',
                description: 'Capture your screen, webcam, or both with a single click. No downloads required.',
              },
              {
                icon: <CirclePlay className="h-6 w-6" />,
                title: 'Share',
                description: 'Get an instant shareable link to send to clients, team members, or friends.',
              },
              {
                icon: <Laptop className="h-6 w-6" />,
                title: 'Collaborate',
                description: 'Collect feedback, answer questions, and track engagement all in one place.',
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="slide-in-on-scroll flex flex-col items-center text-center"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 relative z-10">
                  <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <Features />
      
      {/* Benefits Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="bg-primary/5 rounded-2xl p-6 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent opacity-70 -z-10"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="slide-in-on-scroll">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-4">
                  Why Berrycast
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  Communicate more effectively with video
                </h2>
                <p className="text-lg text-foreground/80 mb-8 text-pretty">
                  Say goodbye to lengthy emails and confusing text explanations. Show exactly what you mean with quick screen recordings and get your point across clearly every time.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    'Reduce miscommunication and back-and-forth emails',
                    'Save time explaining complex concepts or processes',
                    'Create a personal connection with clients and team members',
                    'Document processes and create training materials effortlessly'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup" className="button-primary">
                    Try Berrycast Free
                  </Link>
                  <Link to="/features" className="button-outline flex items-center justify-center">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="slide-in-on-scroll">
                <div className="relative">
                  <div className="aspect-video bg-white rounded-xl shadow-elevated overflow-hidden border border-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-primary/90 text-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-5 -right-5">
                    <div className="glassmorphism rounded-xl p-4 max-w-[240px] animate-float">
                      <div className="flex items-start space-x-3">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                            <path d="M7 12l4 4 6-6"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium mb-1">94% time saved</p>
                          <p className="text-sm text-foreground/60">Users report saving up to 94% of their time compared to writing emails</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <UseCases />
      
      {/* Testimonials Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 slide-in-on-scroll">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Loved by thousands of teams
            </h2>
            <p className="text-lg text-foreground/70 text-balance">
              See what our users have to say about how Berrycast has transformed their communication.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial 
              quote="Berrycast has completely transformed our client communication. We can explain complex concepts visually and get feedback instantly."
              author="Sarah Johnson"
              role="Marketing Director"
              company="TechCorp"
              image=""
            />
            <Testimonial 
              quote="As a remote team, we rely on Berrycast daily. It's the next best thing to being in the same room with someone."
              author="Michael Chen"
              role="Product Manager"
              company="Innovate Inc"
              image=""
            />
            <Testimonial 
              quote="The AI transcription feature alone has saved our support team countless hours. Berrycast is now an essential part of our workflow."
              author="Emily Rodriguez"
              role="Customer Support Lead"
              company="ServicePro"
              image=""
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-12 md:p-20 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_60%)]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
                Start communicating more effectively today
              </h2>
              <p className="text-white/80 text-lg mb-8 text-balance">
                Join thousands of teams who use Berrycast to save time, reduce miscommunication, and collaborate more effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/signup" 
                  className="px-8 py-4 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-colors inline-flex items-center justify-center"
                >
                  Try Berrycast Free
                </Link>
                <Link 
                  to="/demo" 
                  className="px-8 py-4 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-white/30 backdrop-blur-sm transition-colors inline-flex items-center justify-center"
                >
                  Request a Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <p className="text-white/60 text-sm mt-4">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
