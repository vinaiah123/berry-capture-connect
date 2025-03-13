
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Play, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCases } from '@/components/UseCases';

const SupportUseCasePage = () => {
  const [activeTab, setActiveTab] = useState('helpdesk');

  const supportTabs = [
    {
      id: 'helpdesk',
      title: 'Help desk responses',
      description: 'Create personalized video responses to customer questions and issues.',
      benefits: [
        'Reduce ticket resolution time',
        'Increase customer satisfaction',
        'Avoid miscommunications',
        'Provide clearer explanations'
      ],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop'
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting guides',
      description: 'Create visual walkthroughs that help customers solve technical problems quickly.',
      benefits: [
        'Show exact solutions step-by-step',
        'Reduce follow-up tickets',
        'Scale support efforts efficiently',
        'Train new support agents faster'
      ],
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'onboarding',
      title: 'Customer onboarding',
      description: 'Guide new customers through your product with interactive video tutorials.',
      benefits: [
        'Improve customer activation',
        'Reduce churn rates',
        'Accelerate time-to-value',
        'Create reusable onboarding content'
      ],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  const testimonials = [
    {
      quote: "Berrycast has revolutionized how we handle support tickets. Our resolution times have decreased by 45% since implementing video responses.",
      author: "David Jackson",
      role: "Customer Support Manager",
      company: "TechServe"
    },
    {
      quote: "Our customers love receiving video explanations instead of long text responses. It's made a huge difference in our customer satisfaction scores.",
      author: "Lisa Chen",
      role: "Head of Customer Experience",
      company: "SoftSolutions"
    }
  ];

  const stats = [
    { value: '45%', label: 'Faster resolution time' },
    { value: '89%', label: 'Customer satisfaction' },
    { value: '38%', label: 'Fewer follow-up tickets' },
    { value: '27%', label: 'Reduced support costs' }
  ];

  const activeTabContent = supportTabs.find(tab => tab.id === activeTab);

  return (
    <>
      <Helmet>
        <title>Berrycast for Support Teams | Visual Customer Support</title>
        <meta 
          name="description" 
          content="Enhance your customer support with Berrycast. Create visual explanations that solve problems faster and improve customer satisfaction."
        />
      </Helmet>

      <Navbar />

      <main className="pt-16">
        {/* Hero section */}
        <section className="section-spacing bg-gradient-to-b from-background to-secondary/50">
          <div className="container-custom pt-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="slide-in-on-scroll">
                <div className="inline-block mb-6">
                  <span className="relative inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-2">
                    Support Teams
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                  Support customers visually and solve issues faster
                </h1>
                <p className="text-lg text-foreground/70 mb-8 text-balance">
                  Berrycast helps support teams answer customer questions with visual explanations and step-by-step guides that improve understanding and increase satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="shadow-samurai">
                    Try for free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Watch demo
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative slide-in-on-scroll">
                <div className="rounded-xl overflow-hidden shadow-elevated relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1560438718-eb61ede255eb?q=80&w=2069&auto=format&fit=crop" 
                    alt="Support professional using Berrycast" 
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
        <section className="py-12 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center slide-in-on-scroll">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-xl bg-white shadow-subtle dark:bg-gray-800">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works section */}
        <section className="section-spacing bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 slide-in-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                How Berrycast works for support teams
              </h2>
              <p className="text-lg text-foreground/70 text-balance">
                From helpdesk responses to customer onboarding, Berrycast helps you provide visual support that resolves issues faster.
              </p>
            </div>

            <div className="bg-background dark:bg-gray-900 shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 slide-in-on-scroll">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 border-r border-gray-100 dark:border-gray-700">
                  <div className="p-2">
                    {supportTabs.map((tab) => (
                      <button
                        key={tab.id}
                        className={`w-full text-left p-4 transition-all rounded-lg ${
                          activeTab === tab.id 
                            ? 'bg-primary/5 text-primary' 
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
                            {tab.id === 'helpdesk' && <MessageCircle className="h-5 w-5" />}
                            {tab.id === 'troubleshooting' && <Check className="h-5 w-5" />}
                            {tab.id === 'onboarding' && <ArrowRight className="h-5 w-5" />}
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

        {/* Testimonials section */}
        <section className="section-spacing bg-gradient-to-b from-background to-secondary/50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 slide-in-on-scroll">
              <div className="inline-block mb-6">
                <span className="relative inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-2">
                  Success Stories
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Trusted by support teams worldwide
              </h2>
              <p className="text-lg text-foreground/70 text-balance">
                See how support professionals use Berrycast to resolve customer issues faster and improve satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 slide-in-on-scroll">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-subtle">
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
            <div className="max-w-3xl mx-auto text-center slide-in-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to revolutionize your customer support?
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
