
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const useCases = [
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Create product demos, tutorials, and promotional videos that convert.',
    icon: '📣',
    examples: [
      'Product demos',
      'Marketing tutorials',
      'Social media content',
      'Campaign reviews'
    ]
  },
  {
    id: 'sales',
    title: 'Sales',
    description: 'Personalize your outreach with custom video messages and presentations.',
    icon: '💰',
    examples: [
      'Sales pitches',
      'Product walkthroughs',
      'Proposal explanations',
      'Follow-up messages'
    ]
  },
  {
    id: 'support',
    title: 'Support',
    description: 'Answer customer questions with visual explanations and step-by-step guides.',
    icon: '🛟',
    examples: [
      'Help desk responses',
      'Troubleshooting guides',
      'Feature walkthroughs',
      'Customer onboarding'
    ]
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Create engaging instructional content for students and learners of all ages.',
    icon: '🎓',
    examples: [
      'Lesson recordings',
      'Assignment feedback',
      'Student tutorials',
      'Course materials'
    ]
  },
];

const UseCases = () => {
  const [activeTab, setActiveTab] = useState('marketing');
  
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-in-on-scroll">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            One tool, endless possibilities
          </h2>
          <p className="text-lg text-foreground/70 text-balance">
            Berrycast adapts to your workflow, helping teams across all departments communicate more effectively.
          </p>
        </div>
        
        <div className="bg-white shadow-elevated rounded-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 border-r border-gray-100">
              <div className="p-1">
                {useCases.map((useCase) => (
                  <button
                    key={useCase.id}
                    className={`w-full text-left p-4 transition-all rounded-lg ${
                      activeTab === useCase.id 
                        ? 'bg-primary/5 text-primary' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab(useCase.id)}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{useCase.icon}</span>
                      <div>
                        <h3 className="font-medium">{useCase.title}</h3>
                        <p className={`text-sm ${activeTab === useCase.id ? 'text-primary/70' : 'text-foreground/60'}`}>
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3 p-8">
              {useCases.map((useCase) => (
                <div 
                  key={useCase.id} 
                  className={`${activeTab === useCase.id ? 'block' : 'hidden'}`}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      Berrycast for {useCase.title}
                    </h3>
                    <p className="text-foreground/70">
                      {useCase.description} Our intuitive tools make it easy to create professional videos in minutes.
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {useCase.examples.map((example, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>{example}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/use-cases/${useCase.id}`} 
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    <span>Learn more about Berrycast for {useCase.title}</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
