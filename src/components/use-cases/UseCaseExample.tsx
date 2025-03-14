
import React from 'react';
import { Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface UseCaseExampleProps {
  examples: string[];
}

const UseCaseExample: React.FC<UseCaseExampleProps> = ({ examples }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-4 mb-8">
      {examples.map((example, index) => (
        <div key={index} className="flex items-start">
          <div className="h-6 w-6 rounded-full bg-primary text-accent flex items-center justify-center shrink-0 mr-3 mt-0.5 shadow-sm">
            <Check className="h-3.5 w-3.5" />
          </div>
          <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>{example}</span>
        </div>
      ))}
    </div>
  );
};

export default UseCaseExample;
