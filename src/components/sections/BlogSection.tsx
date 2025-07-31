import BlogCard from "../ui/BlogCard";

const blogPosts = [
  {
    title: "10 Essential SaaS Metrics Every Founder Should Track",
    description:
      "Discover the key performance indicators that will help you measure your SaaS business success and make data-driven decisions for sustainable growth.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    image: "/assets/blogs/saas-metrics.jpg",
    slug: "essential-saas-metrics-founders",
    category: "Analytics",
  },
  {
    title: "Building a Scalable Customer Support System",
    description:
      "Learn how to create a customer support infrastructure that grows with your business while maintaining high satisfaction rates and reducing response times.",
    author: "Michael Rodriguez",
    date: "Dec 12, 2024",
    image: "/assets/blogs/customer-support.jpg",
    slug: "scalable-customer-support-system",
    category: "Customer Success",
  },
  {
    title: "The Complete Guide to SaaS Security Best Practices",
    description:
      "Protect your SaaS application and customer data with these comprehensive security measures, from encryption to access controls and compliance frameworks.",
    author: "Alex Thompson",
    date: "Dec 10, 2024",
    image: "/assets/blogs/saas-security.jpg",
    slug: "saas-security-best-practices",
    category: "Security",
  },
  {
    title: "Optimizing Your SaaS Onboarding Flow for Better Retention",
    description:
      "Transform your user onboarding experience with proven strategies that reduce churn, increase activation rates, and drive long-term customer success.",
    author: "Emma Wilson",
    date: "Dec 8, 2024",
    image: "/assets/blogs/saas-onboarding.jpg",
    slug: "optimizing-saas-onboarding-flow",
    category: "Product",
  },
  {
    title: "Pricing Strategies That Drive SaaS Growth",
    description:
      "Explore different pricing models and strategies that can accelerate your SaaS growth, from freemium to value-based pricing approaches.",
    author: "David Park",
    date: "Dec 5, 2024",
    image: "/assets/blogs/saas-pricing.jpg",
    slug: "pricing-strategies-saas-growth",
    category: "Strategy",
  },
  {
    title: "API Design Principles for Modern SaaS Applications",
    description:
      "Master the art of designing robust, scalable APIs that power modern SaaS applications with these essential principles and best practices.",
    author: "Lisa Kumar",
    date: "Dec 3, 2024",
    image: "/assets/blogs/saas-api.jpg",
    slug: "api-design-principles-saas",
    category: "Development",
  },
]

export default function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Resources & Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights in the SaaS industry. Our expert team
            shares actionable advice to help you grow your business.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              author={post.author}
              date={post.date}
              image={post.image}
              slug={post.slug}
              category={post.category}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md">
            View All Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
