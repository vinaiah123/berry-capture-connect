
import React from 'react';
import { Link } from 'react-router-dom';
import { Video, CirclePlay, Laptop, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
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
  );
};

export default HowItWorks;
