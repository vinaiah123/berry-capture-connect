
import React from 'react';

const SocialProof = () => {
  return (
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
  );
};

export default SocialProof;
