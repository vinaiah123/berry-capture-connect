
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface UseCaseTabProps {
  useCase: {
    id: string;
    title: string;
    icon: React.ReactNode;
  };
  isActive: boolean;
  onClick: () => void;
}

const UseCaseTab: React.FC<UseCaseTabProps> = ({ useCase, isActive, onClick }) => {
  const isMobile = useIsMobile();
  
  return (
    <button
      className={`w-full ${isMobile ? 'min-w-[140px]' : ''} text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3
        ${isActive 
          ? 'bg-primary/10 text-primary font-medium' 
          : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
        }`}
      onClick={onClick}
    >
      <div className={`flex-shrink-0 h-9 w-9 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center
        ${isActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}
      >
        {useCase.icon}
      </div>
      <span className={`${isMobile ? 'text-sm' : ''}`}>{useCase.title}</span>
    </button>
  );
};

export default UseCaseTab;
