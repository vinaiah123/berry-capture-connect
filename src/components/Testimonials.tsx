
import React from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;
