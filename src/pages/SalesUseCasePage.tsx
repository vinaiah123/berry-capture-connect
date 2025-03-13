
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SalesUseCasePage = () => {
  const [activeTab, setActiveTab] = useState('prospecting');

  const salesTabs = [
    {
      id: 'prospecting',
      title: 'Prospecting',
      description: 'Create personalized video messages that cut through the noise and get your prospects\' attention.',
      benefits: [
        'Increase open rates with video thumbnails',
        'Build trust with face-to-face communication',
        'Stand out from text-based outreach',
        'Create custom demos in minutes'
      ],
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'demos',
      title: 'Product demos',
      description: 'Record engaging product demos that showcase your product\'s value and address prospect questions.',
      benefits: [
        'Create reusable demo libraries',
        'Personalize demos for each prospect',
        'Track engagement with analytics',
        'Collaborate with your team on demos'
      ],
      image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'proposals',
      title: 'Proposals & follow-ups',
      description: 'Send video proposals and follow-ups that clearly explain your solution and next steps.',
      benefits: [
        'Walk through proposals step by step',
        'Address objections proactively',
        'Maintain momentum in deals',
        'Reduce back-and-forth emails'
      ],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop'
    },
  ];

  const testimonials = [
    {
      quote: "Berrycast has transformed how we connect with prospects. Our response rates have increased by 3x since we started using video in our outreach.",
      author: "Alex Wilson",
      role: "Sales Director",
      company: "TechSolutions Inc."
    },
    {
      quote: "Recording quick product demos with Berrycast has shortened our sales cycle by 20%. Prospects understand our value proposition much faster through video.",
      author: "Sarah Chen",
      role: "Enterprise Sales Manager",
      company: "CloudStack"
    }
  ];

  const stats = [
    { value: '3x', label: 'Higher response rates' },
    { value: '35%', label: 'Faster deal cycles' },
    { value: '57%', label: 'More closed deals' },
    { value: '89%', label: 'Client satisfaction' }
  ];

  const activeTabContent = salesTabs.find(tab => tab.id === activeTab);

  return (
    <>
      <Helmet>
        <title>Berrycast for Sales Teams | Video Messaging for Sales</title>
        <meta 
          name="description" 
          content="Boost your sales team's performance with Berrycast. Create personalized video messages, product demos, and proposals that get results."
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
                    Sales Teams
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                  Connect with prospects and close more deals with video
                </h1>
                <p className="text-lg text-foreground/70 mb-8 text-balance">
                  Berrycast helps sales teams stand out from the competition with personalized video messages that build trust, communicate value, and speed up your sales cycle.
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
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                    alt="Sales professional using Berrycast" 
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

        {/* How it works for sales section */}
        <section className="section-spacing bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 slide-in-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                How Berrycast works for sales teams
              </h2>
              <p className="text-lg text-foreground/70 text-balance">
                From prospecting to closing deals, Berrycast helps you communicate more effectively at every stage of the sales process.
              </p>
            </div>

            <div className="bg-background dark:bg-gray-900 shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 slide-in-on-scroll">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 border-r border-gray-100 dark:border-gray-700">
                  <div className="p-2">
                    {salesTabs.map((tab) => (
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
                            {tab.id === 'prospecting' && <ArrowRight className="h-5 w-5" />}
                            {tab.id === 'demos' && <Play className="h-5 w-5" />}
                            {tab.id === 'proposals' && <Check className="h-5 w-5" />}
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
                Trusted by sales teams worldwide
              </h2>
              <p className="text-lg text-foreground/70 text-balance">
                See how sales professionals use Berrycast to connect with prospects and close more deals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 slide-in-on-scroll">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-subtle">
                  <div className="mb-6">
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

        {/* Features for sales section */}
        <section className="section-spacing bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 slide-in-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Features built for sales teams
              </h2>
              <p className="text-lg text-foreground/70 text-balance">
                Everything you need to create professional videos that help you sell more effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 slide-in-on-scroll">
              <div className="bg-background rounded-xl p-6 shadow-subtle dark:bg-gray-900">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Screen & webcam recording</h3>
                <p className="text-foreground/70">
                  Create professional-looking videos that combine your screen and webcam to demonstrate your product.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-subtle dark:bg-gray-900">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Annotation tools</h3>
                <p className="text-foreground/70">
                  Highlight important information with drawing tools, arrows, text boxes, and more.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-subtle dark:bg-gray-900">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Video analytics</h3>
                <p className="text-foreground/70">
                  See who watched your videos, how long they watched, and what parts they rewatched.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-subtle dark:bg-gray-900">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">CRM integrations</h3>
                <p className="text-foreground/70">
                  Integrate with Salesforce, HubSpot, and other CRMs to track video engagement and log activities.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-subtle dark:bg-gray-900">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Video messaging</h3>
                <p className="text-foreground/70">
                  Send video messages directly through email, messaging apps, or your CRM with just a link.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-subtle dark:bg-gray-900">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Team collaboration</h3>
                <p className="text-foreground/70">
                  Share videos with your team, collaborate on content, and build a library of sales resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-primary text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center slide-in-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to boost your sales with video?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of sales professionals using Berrycast to connect with prospects and close more deals.
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

        {/* FAQ Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 slide-in-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently asked questions
              </h2>
              <p className="text-lg text-foreground/70">
                Got questions about using Berrycast for sales? We've got answers.
              </p>
            </div>

            <div className="max-w-3xl mx-auto slide-in-on-scroll">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-subtle">
                  <h3 className="text-xl font-semibold mb-2">How can Berrycast help my sales team?</h3>
                  <p className="text-foreground/70">
                    Berrycast helps your sales team create personalized video messages for prospecting, demos, proposals, and follow-ups that stand out from text-based communication, build trust, and accelerate your sales cycle.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-subtle">
                  <h3 className="text-xl font-semibold mb-2">Do I need any special equipment to use Berrycast?</h3>
                  <p className="text-foreground/70">
                    No special equipment is needed. Berrycast works with your computer's built-in webcam and microphone. For best results, we recommend using a headset with a microphone and ensuring you have good lighting.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-subtle">
                  <h3 className="text-xl font-semibold mb-2">How do prospects view my Berrycast videos?</h3>
                  <p className="text-foreground/70">
                    When you create a video, Berrycast generates a unique link that you can share with your prospects. They can view your video in their browser without downloading any software or creating an account.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-subtle">
                  <h3 className="text-xl font-semibold mb-2">Does Berrycast integrate with my CRM?</h3>
                  <p className="text-foreground/70">
                    Yes, Berrycast integrates with popular CRMs including Salesforce, HubSpot, Outreach, and more. This allows you to track video engagement directly in your CRM and incorporate videos into your sales sequences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SalesUseCasePage;
