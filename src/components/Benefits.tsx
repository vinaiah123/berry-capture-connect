
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Benefits = () => {
  return (
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
  );
};

export default Benefits;
