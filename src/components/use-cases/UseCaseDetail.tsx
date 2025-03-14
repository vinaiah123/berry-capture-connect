
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { UseCase } from '@/data/useCasesData';
import UseCaseExample from './UseCaseExample';

interface UseCaseDetailProps {
  useCase: UseCase;
  onLearnMore: (id: string) => void;
  isActive: boolean;
}

const UseCaseDetail: React.FC<UseCaseDetailProps> = ({ useCase, onLearnMore, isActive }) => {
  if (!isActive) return null;
  
  return (
    <div className="grid md:grid-cols-2">
      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="h-8 w-8 rounded-full bg-primary text-accent flex items-center justify-center mr-3">
              {useCase.icon}
            </span>
            Berrycast for {useCase.title}
          </h3>
          <p className="text-foreground/70 mb-6">
            {useCase.description} Our intuitive tools make it easy to create professional videos in minutes.
          </p>
          
          <UseCaseExample examples={useCase.examples} />
          
          <button 
            onClick={() => onLearnMore(useCase.id)}
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            <span>Learn more about Berrycast for {useCase.title}</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
      
      <div className="relative h-full min-h-[300px] md:min-h-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${useCase.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="glassmorphism rounded-lg p-4 backdrop-blur-lg bg-white/10 border-white/20 inline-block">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary text-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Watch Demo</p>
                  <p className="text-white/70 text-xs">See how it works</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseDetail;
