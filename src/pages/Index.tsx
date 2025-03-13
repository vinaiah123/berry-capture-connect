
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import SocialProof from '@/components/SocialProof';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CtaSection from '@/components/CtaSection';

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
      <SocialProof />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Features Section */}
      <Features />
      
      {/* Benefits Section */}
      <Benefits />
      
      {/* Use Cases Section */}
      <UseCases />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* CTA Section */}
      <CtaSection />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
