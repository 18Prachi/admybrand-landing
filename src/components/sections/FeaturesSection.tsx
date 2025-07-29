import React from 'react';
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  Sparkles,
  TrendingUp 
} from 'lucide-react';
import { Card } from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Advanced machine learning algorithms analyze customer behavior and predict optimal marketing strategies in real-time.'
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Reach the right audience at the perfect moment with our intelligent targeting system that adapts continuously.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Get instant insights into campaign performance with beautiful dashboards and actionable recommendations.'
  },
  {
    icon: Zap,
    title: 'Automation Engine',
    description: 'Automate repetitive tasks and optimize campaigns 24/7 with our intelligent automation workflows.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption, compliance certifications, and data protection.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy campaigns across multiple channels and regions with our globally distributed infrastructure.'
  },
  {
    icon: Sparkles,
    title: 'Creative AI',
    description: 'Generate compelling ad copy, visuals, and content variations using our advanced creative AI engine.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Continuous optimization using AI to improve ROI and conversion rates across all marketing channels.'
  }
];

export const FeaturesSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive AI suite provides everything you need to create, manage, 
            and optimize successful marketing campaigns at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                variant="default"
                hover
                className="text-center group"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-16">
          <Card variant="gradient" className="text-center p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Experience the Future of Marketing?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of businesses already using ADmyBRAND AI Suite to transform 
                their marketing strategies and achieve unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Shield size={20} className="text-green-600" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Zap size={20} className="text-blue-600" />
                  <span>Setup in 5 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Target size={20} className="text-purple-600" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};