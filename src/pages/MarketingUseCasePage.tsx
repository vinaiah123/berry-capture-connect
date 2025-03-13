
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCases } from '@/components/UseCases';

const MarketingUseCasePage = () => {
  const [activeTab, setActiveTab] = useState('demos');

  const marketingTabs = [
    {
      id: 'demos',
      title: 'Product demos',
      description: 'Create engaging product demos that showcase your product\'s features and benefits.',
      benefits: [
        'Highlight key features quickly',
        'Demonstrate product value visually',
        'Easy sharing with prospects',
        'Boost conversion rates'
      ],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'tutorials',
      title: 'Marketing tutorials',
      description: 'Record how-to videos and tutorials for marketing campaigns and tools.',
      benefits: [
        'Train team members efficiently',
        'Create reusable documentation',
        'Share knowledge across teams',
        'Reduce training time'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'social',
      title: 'Social media content',
      description: 'Create engaging video content for all your social media channels with ease.',
      benefits: [
        'Increase engagement rates',
        'Create consistent brand messaging',
        'Easily repurpose content',
        'Save time on content creation'
      ],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop'
    },
  ];

  const testimonials = [
    {
      quote: "Berrycast has transformed our marketing team's ability to create product demos. We've seen a 40% increase in engagement since switching.",
      author: "Jessica Thompson",
      role: "Marketing Director",
      company: "GrowthStream"
    },
    {
      quote: "Creating content for our social media channels used to take days. With Berrycast, we can produce high-quality videos in minutes.",
      author: "Michael Rodriguez",
      role: "Social Media Manager",
      company: "BrandBoost"
    }
  ];

  const stats = [
    { value: '40%', label: 'Higher engagement' },
    { value: '65%', label: 'Time saved' },
    { value: '3x', label: 'More content created' },
    { value: '78%', label: 'Increase in conversions' }
  ];

  const activeTabContent = marketingTabs.find(tab => tab.id === activeTab);

  return (
    <>
      <Helmet>
        <title>Berrycast for Marketing Teams | Video Content Creation</title>
        <meta 
          name="description" 
          content="Boost your marketing team's performance with Berrycast. Create product demos, tutorials, and social media content that engages your audience."
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
                    Marketing Teams
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                  Create engaging marketing videos in minutes
                </h1>
                <p className="text-lg text-foreground/70 mb-8 text-balance">
                  Berrycast helps marketing teams create product demos, tutorials, and social media content that engages audiences and drives conversions.
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
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                    alt="Marketing professional using Berrycast" 
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
                How Berrycast works for marketing teams
              </h2>
              <p className="text-lg text-foreground/70 text-balance">
                From product demos to social media content, Berrycast helps you create engaging video content quickly and easily.
              </p>
            </div>

            <div className="bg-background dark:bg-gray-900 shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 slide-in-on-scroll">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 border-r border-gray-100 dark:border-gray-700">
                  <div className="p-2">
                    {marketingTabs.map((tab) => (
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
                            {tab.id === 'demos' && <Play className="h-5 w-5" />}
                            {tab.id === 'tutorials' && <Check className="h-5 w-5" />}
                            {tab.id === 'social' && <ArrowRight className="h-5 w-5" />}
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
                Trusted by marketing teams worldwide
              </h2>
              <p className="text-lg text-foreground/70 text-balance">
                See how marketing professionals use Berrycast to create engaging content and drive results.
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
                Ready to transform your marketing content?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of marketing professionals using Berrycast to create engaging video content.
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

export default MarketingUseCasePage;
