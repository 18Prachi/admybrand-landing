import React from 'react';
import { Accordion, AccordionItem } from '../ui/Accordion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const faqs = [
  {
    question: 'How does the AI-powered marketing automation work?',
    answer: 'Our AI analyzes your customer data, market trends, and campaign performance to automatically optimize targeting, timing, and messaging. It continuously learns from interactions to improve results and can make real-time adjustments to maximize ROI.'
  },
  {
    question: 'What integrations are available with ADmyBRAND AI Suite?',
    answer: 'We integrate with over 500+ marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, Shopify, and many more. Our API also allows for custom integrations to fit your specific tech stack.'
  },
  {
    question: 'How quickly can I see results from the platform?',
    answer: 'Most customers see initial improvements within the first week of implementation. Significant results typically appear within 30 days, with the full potential of AI optimization realized within 60-90 days as the system learns your audience patterns.'
  },
  {
    question: 'Is my data secure and compliant with privacy regulations?',
    answer: 'Absolutely. We maintain SOC 2 Type II certification, GDPR compliance, and use enterprise-grade encryption. Your data is stored in secure, geographically distributed data centers with 99.9% uptime guarantee and regular security audits.'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time without penalties. We offer a 30-day money-back guarantee for new customers, and you\'ll retain access to your data for 90 days after cancellation to ensure smooth transitions.'
  },
  {
    question: 'Do you provide training and support for new users?',
    answer: 'We provide comprehensive onboarding including live training sessions, video tutorials, documentation, and 24/7 customer support. Enterprise customers receive dedicated account managers and custom training programs.'
  },
  {
    question: 'What makes ADmyBRAND different from other marketing platforms?',
    answer: 'Our proprietary AI engine combines machine learning with behavioral psychology to predict customer actions with 94% accuracy. Unlike rule-based systems, our AI adapts in real-time and provides actionable insights that directly impact your bottom line.'
  },
  {
    question: 'Can I try the platform before committing to a paid plan?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start, and you can upgrade to a paid plan anytime during or after the trial period.'
  }
];

export const FAQSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ADmyBRAND AI Suite. 
            Can't find the answer you're looking for? Contact our support team.
          </p>
        </div>

        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="text-pink-500 hover:text-pink-600 font-semibold transition-colors duration-200"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};