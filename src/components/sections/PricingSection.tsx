import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5,000 contacts',
      '10 AI-powered campaigns',
      'Basic analytics dashboard',
      'Email support',
      'Standard integrations'
    ],
    buttonText: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Ideal for growing businesses and marketing teams',
    features: [
      'Up to 50,000 contacts',
      'Unlimited AI campaigns',
      'Advanced analytics & insights',
      'Priority support',
      'Premium integrations',
      'A/B testing suite',
      'Custom reporting'
    ],
    buttonText: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$299',
    period: '/month',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited contacts',
      'Unlimited everything',
      'White-label solution',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security features',
      'SLA guarantee',
      'Custom training'
    ],
    buttonText: 'Contact Sales',
    popular: false
  }
];

export const PricingSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI features 
            with no hidden fees or surprise charges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              variant={plan.popular ? 'glass' : 'default'}
              className={`relative p-8 ${plan.popular ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 transform scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="primary" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2">
                    <Star size={16} className="mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                {plan.name === 'Starter' && (
                  <p className="text-sm text-gray-500">14-day free trial included</p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="text-green-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? 'primary' : 'outline'}
                size="lg"
                className="w-full"
              >
                {plan.popular && <Zap size={20} className="mr-2" />}
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <Check className="text-green-600" size={20} />
            <span className="text-green-800 font-medium">30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};