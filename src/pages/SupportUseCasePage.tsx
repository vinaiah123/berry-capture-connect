
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Play, MessageSquare, Headset, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/use-scroll';

const SupportUseCasePage = () => {
  const [activeTab, setActiveTab] = useState('visual');
  useScrollAnimation();

  const supportTabs = [
    {
      id: 'visual',
      title: 'Visual answers',
      icon: <MessageSquare className="h-5 w-5" />,
      description: 'Provide clear visual explanations to solve customer issues faster.',
      benefits: [
        'Show, don\'t just tell with screen recordings',
        'Reduce back-and-forth communications',
        'Solve problems up to 66% faster',
        'Increase customer satisfaction'
      ],
      image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'onboarding',
      title: 'Customer onboarding',
      icon: <Users className="h-5 w-5" />,
      description: 'Create reusable onboarding videos to welcome and educate new customers.',
      benefits: [
        'Standardize your onboarding process',
        'Reduce time spent on repetitive training',
        'Improve customer activation rates',
        'Scale your customer success efforts'
      ],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'knowledge',
      title: 'Knowledge base',
      icon: <Headset className="h-5 w-5" />,
      description: 'Build a comprehensive video knowledge base for self-service support.',
      benefits: [
        'Reduce support ticket volume by 40%',
        'Create consistent help documentation',
        'Empower customers to solve issues themselves',
        'Make updates to documentation in minutes'
      ],
      image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  const testimonials = [
    {
      quote: "Since using Berrycast, our support team has reduced resolution times by 66%. Our customers love receiving visual explanations instead of lengthy text.",
      author: "Sarah Chen",
      role: "Head of Customer Support",
      company: "GrowthTech"
    },
    {
      quote: "Berrycast has transformed our support process. Our team now creates video responses in minutes, and our CSAT scores have improved by 27%.",
      author: "Michael Reed",
      role: "Director of Customer Success",
      company: "CloudSystems"
    }
  ];

  const stats = [
    { value: '66%', label: 'Faster resolution' },
    { value: '40%', label: 'Fewer tickets' },
    { value: '27%', label: 'Higher CSAT' },
    { value: '3.5x', label: 'Support efficiency' }
  ];

  const activeTabContent = supportTabs.find(tab => tab.id === activeTab);

  return (
    <>
      <Helmet>
        <title>Support Teams Use Case | Berrycast</title>
        <meta 
          name="description" 
          content="Help your support team deliver exceptional customer service with Berrycast's visual communication tools. Answer support tickets faster and with greater clarity."
        />
      </Helmet>

      <Navbar />

      <main className="pt-16">
        {/* Hero section */}
        <section className="section-spacing bg-gradient-to-b from-background to-secondary/10">
          <div className="container-custom pt-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="inline-block mb-6">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                    Support Teams
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                  Solve customer issues faster with visual support
                </h1>
                <p className="text-lg text-foreground/70 mb-8 text-balance">
                  Help your support team deliver exceptional customer service with video messages that reduce resolution time and increase satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="shadow-sm">
                    Try for free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Watch demo
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative animate-on-scroll">
                <div className="rounded-xl overflow-hidden shadow-lg relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1974&auto=format&fit=crop" 
                    alt="Support team using Berrycast" 
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary/90 transition-all">
                      <Play className="h-6 w-6 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-lg -z-10 rotate-6"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10 -rotate-12"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats section */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-on-scroll">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-xl bg-white shadow-sm dark:bg-gray-800">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video feature showcase */}
        <section className="section-spacing bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                How Berrycast works for support teams
              </h2>
              <p className="text-lg text-foreground/70 text-balance">
                Give your support team the tools they need to deliver exceptional customer service with visual explanations.
              </p>
            </div>

            <div className="bg-background dark:bg-gray-900 shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 animate-on-scroll">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 border-r border-gray-100 dark:border-gray-700">
                  <div className="p-2">
                    {supportTabs.map((tab) => (
                      <button
                        key={tab.id}
                        className={`w-full text-left p-4 transition-all rounded-lg ${
                          activeTab === tab.id 
                            ? 'bg-primary/10 text-primary' 
                            : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <div className="flex items-center">
                          <div className={`mr-4 w-10 h-10 flex items-center justify-center rounded-full ${
                            activeTab === tab.id 
                              ? 'bg-primary text-white' 
                              : 'bg-gray-100 dark:bg-gray-700'
                          }`}>
                            {tab.icon}
                          </div>
                          <div>
                            <h3 className="font-medium">{tab.title}</h3>
                            <p className={`text-sm ${activeTab === tab.id ? 'text-primary/70' : 'text-foreground/60'}`}>
                              {tab.description.substring(0, 60)}...
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-3 relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-primary/5 -z-10"></div>
                  
                  {activeTabContent && (
                    <div className="grid md:grid-cols-2">
                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-semibold mb-4">
                            {activeTabContent.title}
                          </h3>
                          <p className="text-foreground/70 mb-6">
                            {activeTabContent.description}
                          </p>
                          
                          <div className="space-y-4 mb-8">
                            {activeTabContent.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mr-3 mt-0.5 shadow-sm">
                                  <Check className="h-3.5 w-3.5" />
                                </div>
                                <span className="text-sm font-medium">{benefit}</span>
                              </div>
                            ))}
                          </div>
                          
                          <Button 
                            variant="link" 
                            className="p-0 h-auto text-primary font-medium hover:underline"
                          >
                            <span>Learn more about {activeTabContent.title}</span>
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="relative h-full min-h-[300px] md:min-h-0 overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center" 
                          style={{ backgroundImage: `url(${activeTabContent.image})` }}
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases scenarios */}
        <section className="section-spacing bg-gradient-to-b from-background to-secondary/10">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                How support teams use Berrycast
              </h2>
              <p className="text-lg text-foreground/70 text-balance">
                From resolving complex issues to creating reusable help content, see how Berrycast empowers support teams.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ticket responses</h3>
                <p className="text-foreground/70 mb-6">
                  Create clear visual explanations that solve customer issues on the first try.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Reduce back-and-forth messages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Solve complex problems visually</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Improve first contact resolution</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Team training</h3>
                <p className="text-foreground/70 mb-6">
                  Onboard new support agents faster with reusable training videos.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Standardize knowledge sharing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Reduce training time by 45%</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Update training materials quickly</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <Headset className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Self-service resources</h3>
                <p className="text-foreground/70 mb-6">
                  Build a comprehensive knowledge base for customer self-service.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Reduce inbound ticket volume</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Create consistent help content</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Update documentation in minutes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="section-spacing bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <div className="inline-block mb-6">
                <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                  Customer Success Stories
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Trusted by support teams worldwide
              </h2>
              <p className="text-lg text-foreground/70 text-balance">
                See how support professionals use Berrycast to resolve customer issues faster and improve satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 animate-on-scroll">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-background to-secondary/5 p-8 rounded-xl shadow-sm">
                  <div>
                    <div className="flex items-center text-amber-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-foreground/70">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-primary text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to transform your customer support?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of support professionals using Berrycast to solve customer issues faster.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="jade-gold" className="text-lg">
                  Start free trial
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg">
                  Request a demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SupportUseCasePage;
