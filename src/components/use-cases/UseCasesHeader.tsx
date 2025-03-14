
import React from 'react';

const UseCasesHeader: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 slide-in-on-scroll">
      <div className="inline-block mb-8">
        <span className="relative inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-2">
          Use Cases
        </span>
        <span className="block h-px w-12 bg-accent mx-auto mt-2"></span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
        One tool, endless possibilities
      </h2>
      <p className="text-lg text-foreground/70 text-balance">
        Berrycast adapts to your workflow, helping teams across all departments communicate more effectively.
      </p>
    </div>
  );
};

export default UseCasesHeader;
