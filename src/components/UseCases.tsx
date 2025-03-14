
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCases } from '@/data/useCasesData';
import UseCaseTab from './use-cases/UseCaseTab';
import UseCaseDetail from './use-cases/UseCaseDetail';
import UseCasesHeader from './use-cases/UseCasesHeader';
import { useIsMobile } from '@/hooks/use-mobile';

const UseCases = () => {
  const [activeTab, setActiveTab] = useState('marketing');
  const activeCase = useCases.find(u => u.id === activeTab) || useCases[0];
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const handleLearnMore = (useCaseId: string) => {
    navigate(`/use-cases/${useCaseId}`);
  };
  
  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <UseCasesHeader />
        
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="grid md:grid-cols-5">
            <div className={`${isMobile ? 'overflow-x-auto' : ''} md:col-span-2 border-r border-gray-100 dark:border-gray-700`}>
              <div className={`p-2 ${isMobile ? 'flex md:block' : ''}`}>
                {useCases.map((useCase) => (
                  <UseCaseTab
                    key={useCase.id}
                    useCase={useCase}
                    isActive={activeTab === useCase.id}
                    onClick={() => setActiveTab(useCase.id)}
                  />
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-primary/5 -z-10"></div>
              
              {useCases.map((useCase) => (
                <UseCaseDetail 
                  key={useCase.id}
                  useCase={useCase}
                  isActive={activeTab === useCase.id}
                  onLearnMore={handleLearnMore}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
export { useCases }; // Export for reuse in the use case pages
