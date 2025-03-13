
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, image }) => (
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

export default Testimonial;
