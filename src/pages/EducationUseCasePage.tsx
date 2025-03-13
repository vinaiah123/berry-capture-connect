
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Play, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCases } from '@/components/UseCases';

const EducationUseCasePage = () => {
  const [activeTab, setActiveTab] = useState('lessons');

  const educationTabs = [
    {
      id: 'lessons',
      title: 'Lesson recordings',
      description: 'Create engaging video lessons that students can watch anytime, anywhere.',
      benefits: [
        'Create self-paced learning materials',
        'Enhance understanding with visual explanations',
        'Save time on repeated explanations',
        'Increase student engagement'
      ],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'feedback',
      title: 'Assignment feedback',
      description: 'Provide more personal and detailed feedback on student assignments through video.',
      benefits: [
        'Give clearer explanations of corrections',
        'Provide more personalized feedback',
        'Save time compared to written feedback',
        'Improve student comprehension'
      ],
      image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=2036&auto=format&fit=crop'
    },
    {
      id: 'tutorials',
      title: 'Student tutorials',
      description: 'Create step-by-step tutorials that help students master complex concepts.',
      benefits: [
        'Break down complex topics visually',
        'Allow students to learn at their own pace',
        'Create reusable educational content',
        'Improve learning outcomes'
      ],
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop'
    },
  ];

  const testimonials = [
    {
      quote: "Berrycast has transformed how I create content for my students. I can now quickly record lessons that my students can watch on their own time.",
      author: "Prof. Emma Thompson",
      role: "Biology Professor",
      company: "Western University"
    },
    {
      quote: "My students love receiving video feedback on their assignments. It feels more personal and they understand my comments much better than with written feedback.",
      author: "Mark Johnson",
      role: "High School Teacher",
      company: "Riverdale Academy"
    }
  ];

  const stats = [
    { value: '82%', label: 'Higher engagement' },
    { value: '63%', label: 'Better comprehension' },
    { value: '45%', label: 'Time saved on feedback' },
    { value: '3x', label: 'More content created' }
  ];

  const activeTabContent = educationTabs.find(tab => tab.id === activeTab);

  return (
    <>
      <Helmet>
        <title>Berrycast for Education | Video Learning Tools</title>
        <meta 
          name="description" 
          content="Enhance education with Berrycast. Create engaging video lessons, provide personalized feedback, and develop step-by-step tutorials that improve learning outcomes."
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
                    Education
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                  Create engaging educational content for all learning styles
                </h1>
                <p className="text-lg text-foreground/70 mb-8 text-balance">
                  Berrycast helps educators create dynamic video lessons, provide personalized feedback, and develop step-by-step tutorials that improve learning outcomes.
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
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
                    alt="Educator using Berrycast" 
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
                How Berrycast works for education
              </h2>
              <p className="text-lg text-foreground/70 text-balance">
                From lesson recordings to personalized feedback, Berrycast helps educators create engaging content that improves learning outcomes.
              </p>
            </div>

            <div className="bg-background dark:bg-gray-900 shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 slide-in-on-scroll">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 border-r border-gray-100 dark:border-gray-700">
                  <div className="p-2">
                    {educationTabs.map((tab) => (
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
                            {tab.id === 'lessons' && <BookOpen className="h-5 w-5" />}
                            {tab.id === 'feedback' && <Check className="h-5 w-5" />}
                            {tab.id === 'tutorials' && <Play className="h-5 w-5" />}
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
                Trusted by educators worldwide
              </h2>
              <p className="text-lg text-foreground/70 text-balance">
                See how educators use Berrycast to create engaging content and improve learning outcomes.
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
                Ready to transform your educational content?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of educators using Berrycast to create engaging video content that improves learning outcomes.
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

export default EducationUseCasePage;
