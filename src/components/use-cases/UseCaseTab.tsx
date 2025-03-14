
import React from 'react';
import { UseCase } from '@/data/useCasesData';

interface UseCaseTabProps {
  useCase: UseCase;
  isActive: boolean;
  onClick: () => void;
}

const UseCaseTab: React.FC<UseCaseTabProps> = ({ useCase, isActive, onClick }) => {
  return (
    <button
      className={`w-full text-left p-4 transition-all rounded-lg ${
        isActive 
          ? 'bg-primary/5 text-primary' 
          : 'hover:bg-gray-50 dark:hover:bg-gray-700'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className={`text-2xl mr-4 w-10 h-10 flex items-center justify-center rounded-full ${
          isActive 
            ? 'bg-primary text-accent' 
            : 'bg-gray-100 dark:bg-gray-700'
        }`}>
          {useCase.icon}
        </div>
        <div>
          <h3 className="font-medium">{useCase.title}</h3>
          <p className={`text-sm ${isActive ? 'text-primary/70' : 'text-foreground/60'}`}>
            {useCase.description}
          </p>
        </div>
      </div>
    </button>
  );
};

export default UseCaseTab;
