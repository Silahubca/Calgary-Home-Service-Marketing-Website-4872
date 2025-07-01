import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import SEOHead from '../components/common/SEOHead';

const { FiSearch, FiTarget, FiMegaphone, FiUsers, FiGlobe, FiStar, FiEdit, FiTrendingUp, FiMapPin, FiPhone, FiArrowRight, FiCheck } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiSearch,
      title: 'SEO Calgary',
      description: 'Dominate local search results and attract more customers with our proven SEO strategies specifically designed for Calgary home service businesses.',
      features: ['Local SEO Optimization', 'Google My Business Management', 'Keyword Research & Strategy', 'Technical SEO Audits', 'Content Optimization', 'Monthly Reporting'],
      link: '/seo-calgary'
    },
    {
      icon: FiTarget,
      title: 'Google Ads Management',
      description: 'Get immediate results with expertly managed Google Ads campaigns that convert visitors into paying customers.',
      features: ['Campaign Setup & Strategy', 'Keyword Research', 'Ad Copy Creation', 'Landing Page Optimization', 'Bid Management', 'Performance Tracking'],
      link: '/google-ads-management'
    },
    {
      icon: FiMegaphone,
      title: 'Facebook Ads Management',
      description: 'Reach your ideal customers on Facebook and Instagram with highly targeted advertising campaigns.',
      features: ['Audience Research & Targeting', 'Creative Development', 'Campaign Management', 'A/B Testing', 'Retargeting Campaigns', 'ROI Optimization'],
      link: '/facebook-ads-management'
    },
    {
      icon: FiUsers,
      title: 'Social Media Management',
      description: 'Build your brand presence and engage with customers across all major social media platforms.',
      features: ['Content Creation & Scheduling', 'Community Management', 'Social Media Strategy', 'Brand Voice Development', 'Engagement Tracking', 'Reputation Monitoring'],
      link: '/social-media-management'
    },
    {
      icon: FiGlobe,
      title: 'Website Design & Development',
      description: 'Professional, mobile-responsive websites that convert visitors into customers and rank well in search engines.',
      features: ['Custom Website Design', 'Mobile Optimization', 'SEO-Friendly Structure', 'Fast Loading Speed', 'Lead Generation Forms', 'Content Management System'],
      link: '/website-design-development'
    },
    {
      icon: FiStar,
      title: 'Reputation Management',
      description: 'Protect and enhance your online reputation with proactive review management and crisis response.',
      features: ['Review Monitoring', 'Review Response Management', 'Review Generation Campaigns', 'Crisis Management', 'Brand Monitoring', 'Reputation Reporting'],
      link: '/reputation-management'
    },
    {
      icon: FiEdit,
      title: 'Content Marketing',
      description: 'Establish authority in your industry with valuable content that attracts and educates your target audience.',
      features: ['Content Strategy Development', 'Blog Writing', 'Video Content Creation', 'Email Marketing', 'Lead Magnets', 'Content Distribution'],
      link: '/content-marketing'
    },
    {
      icon: FiTrendingUp,
      title: 'Branding Services',
      description: 'Develop a strong, memorable brand identity that sets you apart from competitors and builds customer trust.',
      features: ['Brand Strategy', 'Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Brand Voice Development', 'Visual Identity'],
      link: '/branding-services'
    },
    {
      icon: FiMapPin,
      title: 'Google Maps SEO',
      description: 'Improve your visibility in local map searches and attract customers looking for services in your area.',
      features: ['Google My Business Optimization', 'Local Citations Building', 'NAP Consistency', 'Local Schema Markup', 'Review Management', 'Local Link Building'],
      link: '/google-maps-seo'
    },
    {
      icon: FiPhone,
      title: 'Google Local Service Ads',
      description: 'Get featured at the top of Google search results with Google-screened badge for maximum credibility.',
      features: ['Account Setup & Verification', 'Lead Management', 'Budget Optimization', 'Performance Tracking', 'Dispute Management', 'ROI Reporting'],
      link: '/google-local-service-ads'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business goals, target audience, and current marketing efforts to develop a customized strategy.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Based on our analysis, we create a comprehensive digital marketing strategy tailored to your specific business needs and market conditions.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our team implements the strategy across all chosen channels, ensuring everything is properly set up for maximum effectiveness.'
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'We continuously monitor performance and make data-driven optimizations to improve results and maximize your ROI.'
    },
    {
      step: '05',
      title: 'Reporting & Growth',
      description: 'Regular detailed reports show your progress, and we work together to scale successful strategies for continued growth.'
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "Silahub Technologies Inc.",
      "url": "https://silahub.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Calgary",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "hasOfferingCatalog": {
      "@type": "OfferingCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <SEOHead
        title="Digital Marketing Services Calgary - Home Service Business Experts"
        description="Comprehensive digital marketing services for Calgary home service businesses. SEO, Google Ads, Social Media, Website Design, and more. Proven results for contractors and home services."
        keywords="digital marketing services Calgary, SEO Calgary, Google Ads Calgary, social media marketing, website design Calgary, home service marketing"
        canonicalUrl="/services"
        schemaMarkup={schemaMarkup}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Digital Marketing Services for Calgary Home Service Businesses
              </h1>
              <p className="text-xl leading-relaxed">
                Comprehensive digital marketing solutions designed specifically for contractors and home service businesses. Get more leads, increase revenue, and dominate your local market.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Digital Marketing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a complete suite of digital marketing services to help your home service business thrive online.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group card p-8 h-full flex flex-col"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={service.link} className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors mt-auto">
                    Learn More
                    <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure your digital marketing success.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-6 mb-12 last:mb-0"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Focus Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in digital marketing for home service businesses and contractors.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                'HVAC', 'Plumbing', 'Electrical', 'Roofing',
                'Landscaping', 'Cleaning Services', 'Flooring', 'General Contracting',
                'Painting', 'Windows & Doors', 'Handyman Services', 'Pool Services'
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="card p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="font-semibold text-primary">{industry}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our digital marketing services can help your home service business dominate the Calgary market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary text-primary hover:bg-white text-lg px-8 py-4">
                  Get Free Consultation
                </Link>
                <Link to="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;