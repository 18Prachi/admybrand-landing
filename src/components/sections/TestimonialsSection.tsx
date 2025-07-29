import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from '../ui/Card';
import { Carousel } from '../ui/Carousel';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'TechCorp',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'ADmyBRAND AI Suite transformed our marketing ROI by 340% in just 3 months. The AI insights are incredibly accurate and the automation saves us 20+ hours per week.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'CEO',
    company: 'GrowthCo',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The predictive analytics and automated optimization have revolutionized how we approach customer acquisition. We\'ve never seen results like this before.',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'Head of Digital',
    company: 'ScaleUp Inc',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The creative AI feature generates ad copy that outperforms our human copywriters. It\'s like having a team of marketing experts working 24/7.',
    rating: 5
  },
  {
    name: 'David Kim',
    role: 'VP Marketing',
    company: 'InnovateLabs',
    image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Implementation was seamless and the support team is exceptional. The platform pays for itself within the first month through improved conversion rates.',
    rating: 5
  }
];

export const TestimonialsSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  const testimonialCards = testimonials.map((testimonial, index) => (
    <Card key={index} variant="glass" className="mx-4 p-8 text-center">
      <div className="mb-6">
        <Quote className="text-blue-600 mx-auto mb-4" size={32} />
        <div className="flex justify-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-current" size={20} />
          ))}
        </div>
        <p className="text-lg text-gray-700 leading-relaxed italic">
          "{testimonial.content}"
        </p>
      </div>
      
      <div className="flex items-center justify-center space-x-4">
        <img 
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-left">
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
        </div>
      </div>
    </Card>
  ));

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Marketing Teams
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers say about their experience with ADmyBRAND AI Suite 
            and how it's transformed their marketing results.
          </p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          {testimonialCards}
        </Carousel>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">340%</div>
            <div className="text-gray-600">Average ROI Increase</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime Guarantee</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};