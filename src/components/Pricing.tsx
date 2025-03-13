
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, HelpCircle } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  yearlyPrice, 
  description, 
  features, 
  cta, 
  popular = false,
  isYearly
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-subtle border ${popular ? 'border-primary/30 shadow-elevated' : 'border-gray-200'} p-6 flex flex-col h-full transition-all duration-200 hover:shadow-elevated relative`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-5">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-foreground/70 mb-4 text-sm">{description}</p>
        <div className="mb-2">
          <span className="text-3xl font-bold">${isYearly ? yearlyPrice : price}</span>
          <span className="text-foreground/60 ml-1">/{isYearly ? 'year' : 'month'}</span>
        </div>
        {isYearly && (
          <p className="text-sm text-green-600 font-medium">Save ${(price * 12) - yearlyPrice} yearly</p>
        )}
      </div>
      
      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Link 
        to="/signup" 
        className={`w-full py-2 px-4 rounded-lg text-center transition-all ${
          popular 
            ? 'bg-primary text-white hover:bg-primary/90' 
            : 'bg-secondary text-foreground hover:bg-secondary/80'
        }`}
      >
        {cta}
      </Link>
    </div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);
  
  const plans = [
    {
      title: 'Free',
      price: 0,
      yearlyPrice: 0,
      description: 'Perfect for individuals getting started with screen recording',
      features: [
        'Up to 5 videos per month',
        '5-minute maximum recording length',
        'Basic video editing tools',
        'Standard video quality',
        'Public link sharing',
      ],
      cta: 'Get Started',
    },
    {
      title: 'Pro',
      price: 12,
      yearlyPrice: 120,
      description: 'For professionals who need more advanced features',
      features: [
        'Unlimited videos',
        'No recording time limits',
        'Advanced editing capabilities',
        'HD video quality',
        'Password-protected videos',
        'Custom branding',
        'AI transcription (60 min/month)',
        'Analytics and insights',
      ],
      cta: 'Start Pro Trial',
      popular: true,
    },
    {
      title: 'Enterprise',
      price: 39,
      yearlyPrice: 390, 
      description: 'For teams and organizations with advanced needs',
      features: [
        'Everything in Pro',
        'SSO authentication',
        'Advanced security controls',
        'Dedicated account manager',
        'Priority support',
        'Team workspaces',
        'Unlimited AI transcription',
        'Advanced analytics',
        'API access',
      ],
      cta: 'Contact Sales',
    }
  ];
  
  return (
    <section id="pricing" className="section-spacing bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-in-on-scroll">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-foreground/70 text-balance">
            Choose the plan that's right for you and start creating amazing video content today.
          </p>
          
          <div className="flex items-center justify-center mt-6">
            <div className="bg-secondary rounded-full p-1 inline-flex">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !isYearly ? 'bg-white shadow-sm' : 'text-foreground/70'
                }`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isYearly ? 'bg-white shadow-sm' : 'text-foreground/70'
                }`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
              </button>
            </div>
            
            {isYearly && (
              <span className="ml-3 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                Save up to 20%
              </span>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="slide-in-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              <PricingCard {...plan} isYearly={isYearly} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-foreground/60 slide-in-on-scroll">
          <p className="flex items-center justify-center">
            <HelpCircle className="h-4 w-4 mr-2" />
            Have questions about our pricing? <a href="#" className="text-primary ml-1 hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
