
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Check } from 'lucide-react';

const useCases = [
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Create product demos, tutorials, and promotional videos that convert.',
    icon: '📣',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1974&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
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
  const activeCase = useCases.find(u => u.id === activeTab) || useCases[0];
  
  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
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
        
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 border-r border-gray-100 dark:border-gray-700">
              <div className="p-2">
                {useCases.map((useCase) => (
                  <button
                    key={useCase.id}
                    className={`w-full text-left p-4 transition-all rounded-lg ${
                      activeTab === useCase.id 
                        ? 'bg-primary/5 text-primary' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setActiveTab(useCase.id)}
                  >
                    <div className="flex items-center">
                      <div className={`text-2xl mr-4 w-10 h-10 flex items-center justify-center rounded-full ${
                        activeTab === useCase.id 
                          ? 'bg-primary text-accent' 
                          : 'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        {useCase.icon}
                      </div>
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
            
            <div className="md:col-span-3 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-primary/5 -z-10"></div>
              
              {useCases.map((useCase) => (
                <div 
                  key={useCase.id} 
                  className={`${activeTab === useCase.id ? 'block' : 'hidden'}`}
                >
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
                        
                        <div className="space-y-4 mb-8">
                          {useCase.examples.map((example, index) => (
                            <div key={index} className="flex items-start">
                              <div className="h-6 w-6 rounded-full bg-primary text-accent flex items-center justify-center shrink-0 mr-3 mt-0.5 shadow-sm">
                                <Check className="h-3.5 w-3.5" />
                              </div>
                              <span className="text-sm font-medium">{example}</span>
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
