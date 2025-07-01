import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../components/common/SafeIcon';
import SEOHead from '../../components/common/SEOHead';
import { useLead } from '../../contexts/LeadContext';

const { FiSearch, FiTarget, FiTrendingUp, FiMapPin, FiUsers, FiAward, FiCheck, FiArrowRight, FiStar } = FiIcons;

const SEOCalgary = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { createLead } = useLead();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createLead({
        ...formData,
        source: 'SEO Calgary Page',
        type: 'SEO Consultation'
      });
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        website: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsSubmitting(false);
  };

  const seoServices = [
    {
      icon: FiMapPin,
      title: 'Local SEO Optimization',
      description: 'Optimize your Google My Business profile and local search presence to dominate Calgary search results.'
    },
    {
      icon: FiSearch,
      title: 'Keyword Research & Strategy',
      description: 'Target the right keywords that your Calgary customers are searching for to find services like yours.'
    },
    {
      icon: FiTrendingUp,
      title: 'Technical SEO',
      description: 'Fix technical issues that prevent your website from ranking well in search engines.'
    },
    {
      icon: FiUsers,
      title: 'Content Optimization',
      description: 'Create and optimize content that answers your customers\' questions and drives organic traffic.'
    }
  ];

  const benefits = [
    'Increased visibility in Calgary search results',
    'More qualified leads from organic search',
    'Higher conversion rates from targeted traffic',
    'Improved Google My Business performance',
    'Better local market dominance',
    'Long-term sustainable growth'
  ];

  const results = [
    { metric: '300%', description: 'Average increase in organic traffic' },
    { metric: '150%', description: 'Average increase in qualified leads' },
    { metric: '#1', description: 'Rankings for target keywords' },
    { metric: '90%', description: 'Client retention rate' }
  ];

  const process = [
    {
      step: 1,
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your current website and local search presence.'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create a customized SEO strategy based on your business goals and market analysis.'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Execute on-page and off-page SEO optimizations to improve your search rankings.'
    },
    {
      step: 4,
      title: 'Monitoring & Reporting',
      description: 'Track progress and provide detailed monthly reports on your SEO performance.'
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SEO Services Calgary",
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
    "description": "Professional SEO services for Calgary home service businesses. Dominate local search results and attract more customers with our proven SEO strategies.",
    "offers": {
      "@type": "Offer",
      "description": "Comprehensive SEO services including local SEO, keyword optimization, technical SEO, and content optimization."
    }
  };

  return (
    <>
      <SEOHead
        title="SEO Calgary - Professional SEO Services for Home Service Businesses"
        description="Dominate Calgary search results with our proven SEO services. Increase organic traffic, generate more leads, and grow your home service business with expert SEO strategies."
        keywords="SEO Calgary, Calgary SEO services, local SEO Calgary, search engine optimization Calgary, home service SEO, contractor SEO Calgary"
        canonicalUrl="/seo-calgary"
        schemaMarkup={schemaMarkup}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                  SEO Calgary: Dominate Local Search Results
                </h1>
                <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                  Get your Calgary home service business found by more customers with our proven SEO strategies. Increase organic traffic, generate more qualified leads, and outrank your competition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact-form" className="btn-secondary text-primary hover:bg-white text-lg px-8 py-4 text-center">
                    Get Free SEO Audit
                    <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                  </a>
                  <a href="#results" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center">
                    View Results
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
                  alt="SEO Calgary results dashboard"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">300%</div>
                    <div className="text-sm text-gray-600">Traffic Increase</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Proven SEO Results for Calgary Businesses
              </h2>
              <p className="text-xl text-gray-600">
                Our SEO strategies deliver measurable results that grow your business
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{result.metric}</div>
                  <div className="text-gray-600 font-medium">{result.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Calgary SEO Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive SEO solutions designed specifically for Calgary home service businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {seoServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                  Why Calgary Businesses Choose Our SEO Services
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <SafeIcon icon={FiCheck} className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="SEO analytics and growth"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our SEO Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven 4-step process that delivers consistent SEO results for Calgary businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Get Your Free SEO Audit
                </h2>
                <p className="text-xl text-gray-600">
                  Discover how your website is performing and get actionable recommendations to improve your Calgary search rankings.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <SafeIcon icon={FiCheck} className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-green-600 mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll send you a comprehensive SEO audit within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="business"
                          placeholder="Business Name *"
                          value={formData.business}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type="url"
                        name="website"
                        placeholder="Website URL *"
                        value={formData.website}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Tell us about your SEO goals..."
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-textarea"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 text-lg disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get Free SEO Audit'}
                    </button>
                  </form>
                )}
              </motion.div>
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
                Ready to Dominate Calgary Search Results?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join successful Calgary home service businesses that trust our SEO expertise to drive their growth.
              </p>
              <a href="tel:+18255581832" className="btn-secondary text-primary hover:bg-white text-lg px-8 py-4 inline-block">
                Call (825) 558-1832
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SEOCalgary;