
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
