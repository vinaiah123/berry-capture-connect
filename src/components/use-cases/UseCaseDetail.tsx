
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { UseCase } from '@/data/useCasesData';
import UseCaseExample from './UseCaseExample';
import { Button } from '@/components/ui/button';

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
          
          {useCase.benefits && useCase.benefits.length > 0 && (
            <div className="mb-6">
              <p className="font-medium mb-3 text-primary">Key Benefits:</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {useCase.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-primary mr-1.5">•</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <Button 
            onClick={() => onLearnMore(useCase.id)}
            variant="link" 
            className="p-0 h-auto text-primary font-medium hover:underline"
          >
            <span>Learn more about Berrycast for {useCase.title}</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
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
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                  <Play className="h-4 w-4 ml-0.5" />
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
