import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../components/common/SafeIcon';
import SEOHead from '../../components/common/SEOHead';
import { useLead } from '../../contexts/LeadContext';

const { FiSun, FiTrendingUp, FiUsers, FiDollarSign, FiCheck, FiArrowRight } = FiIcons;

const LandscapingBlueprint = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
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
        source: 'Landscaping Marketing Blueprint',
        type: 'Blueprint Download'
      });
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsSubmitting(false);
  };

  const strategies = [
    {
      icon: FiTrendingUp,
      title: 'Seasonal Marketing Campaigns',
      description: 'Maximize revenue during spring cleanup, summer maintenance, and fall preparation seasons.'
    },
    {
      icon: FiUsers,
      title: 'Visual Portfolio Marketing',
      description: 'Showcase stunning before/after transformations to attract high-value landscape design projects.'
    },
    {
      icon: FiDollarSign,
      title: 'Commercial & Residential Focus',
      description: 'Separate strategies for commercial property maintenance and residential landscape design.'
    }
  ];

  const results = [
    { metric: '200%', description: 'Increase in project inquiries' },
    { metric: '65%', description: 'More design consultations' },
    { metric: '$35K+', description: 'Additional monthly revenue' },
    { metric: '#1', description: 'Landscaping company ranking' }
  ];

  return (
    <>
      <SEOHead
        title="Landscaping Marketing Blueprint - Grow Your Calgary Landscaping Business"
        description="Get our proven landscaping marketing blueprint. Increase project inquiries by 200%, boost design consultations, and dominate Calgary's landscaping market."
        keywords="landscaping marketing Calgary, landscape design marketing, lawn care advertising, landscaping SEO Calgary"
        canonicalUrl="/landscaping-marketing-blueprint"
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
                <SafeIcon icon={FiSun} className="w-16 h-16 mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                  Landscaping Marketing Blueprint: Grow Your Business
                </h1>
                <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                  The complete marketing strategy to increase project inquiries by 200% and become Calgary's premier landscaping company.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#blueprint-form" className="btn-secondary text-primary hover:bg-white text-lg px-8 py-4 text-center">
                    Get Free Blueprint
                    <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
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
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Beautiful landscaping project"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">200%</div>
                    <div className="text-sm text-gray-600">More Project Inquiries</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Proven Results for Landscaping Companies
              </h2>
              <p className="text-xl text-gray-600">
                Real results from Calgary landscapers using our blueprint
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

        {/* Strategies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What's Inside the Landscaping Marketing Blueprint
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive strategies specifically designed for landscaping businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <SafeIcon icon={strategy.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{strategy.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{strategy.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blueprint Form */}
        <section id="blueprint-form" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Get Your Free Landscaping Marketing Blueprint
                </h2>
                <p className="text-xl text-gray-600">
                  Download the complete strategy guide and start growing your landscaping business today.
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
                    <h3 className="text-2xl font-semibold text-green-600 mb-2">Blueprint Sent!</h3>
                    <p className="text-gray-600">Check your email for the Landscaping Marketing Blueprint and next steps.</p>
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
                          placeholder="Landscaping Business Name *"
                          value={formData.business}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Tell us about your landscaping business goals..."
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
                      {isSubmitting ? 'Sending Blueprint...' : 'Get Free Landscaping Marketing Blueprint'}
                    </button>

                    <p className="text-center text-gray-500 text-sm">
                      No spam, ever. Unsubscribe at any time.
                    </p>
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
                Ready to Grow Your Landscaping Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join successful landscaping companies that trust our proven marketing strategies to grow their business.
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

export default LandscapingBlueprint;