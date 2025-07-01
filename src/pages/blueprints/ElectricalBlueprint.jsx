import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../components/common/SafeIcon';
import SEOHead from '../../components/common/SEOHead';
import { useLead } from '../../contexts/LeadContext';

const { FiZap, FiTrendingUp, FiUsers, FiDollarSign, FiCheck, FiArrowRight } = FiIcons;

const ElectricalBlueprint = () => {
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
        source: 'Electrical Marketing Blueprint',
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
      title: 'Emergency Electrical SEO',
      description: 'Rank #1 for "electrician Calgary", "electrical emergency", and high-value electrical services.'
    },
    {
      icon: FiUsers,
      title: 'Commercial & Residential Marketing',
      description: 'Separate strategies for commercial electrical work and residential electrical services.'
    },
    {
      icon: FiDollarSign,
      title: 'Panel Upgrade & Rewiring Focus',
      description: 'Target high-value services like panel upgrades, rewiring, and electrical inspections.'
    }
  ];

  const results = [
    { metric: '280%', description: 'Increase in service calls' },
    { metric: '95%', description: 'More panel upgrade jobs' },
    { metric: '$60K+', description: 'Additional monthly revenue' },
    { metric: '#1', description: 'Electrical contractor ranking' }
  ];

  return (
    <>
      <SEOHead
        title="Electrical Marketing Blueprint - Power Up Your Calgary Electrical Business"
        description="Get our proven electrical marketing blueprint. Increase service calls by 280%, boost panel upgrade jobs, and dominate Calgary's electrical market."
        keywords="electrical marketing Calgary, electrician advertising, electrical contractor marketing, panel upgrade marketing, electrical SEO Calgary"
        canonicalUrl="/electrical-marketing-blueprint"
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
                <SafeIcon icon={FiZap} className="w-16 h-16 mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                  Electrical Marketing Blueprint: Power Up Your Business
                </h1>
                <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                  The complete marketing strategy to increase service calls by 280% and become Calgary's most trusted electrical contractor.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#blueprint-form"
                    className="btn-secondary text-primary hover:bg-white text-lg px-8 py-4 text-center"
                  >
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
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                  alt="Professional electrician working"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">280%</div>
                    <div className="text-sm text-gray-600">More Service Calls</div>
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
                Proven Results for Electrical Contractors
              </h2>
              <p className="text-xl text-gray-600">
                Real results from Calgary electricians using our blueprint
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
                What's Inside the Electrical Marketing Blueprint
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive strategies specifically designed for electrical contractors.
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
                  Get Your Free Electrical Marketing Blueprint
                </h2>
                <p className="text-xl text-gray-600">
                  Download the complete strategy guide and start dominating your local electrical market today.
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
                    <p className="text-gray-600">Check your email for the Electrical Marketing Blueprint and next steps.</p>
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
                          placeholder="Electrical Business Name *"
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
                        placeholder="Tell us about your electrical business goals..."
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
                      {isSubmitting ? 'Sending Blueprint...' : 'Get Free Electrical Marketing Blueprint'}
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
                Ready to Power Up Your Electrical Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join successful electrical contractors that trust our proven marketing strategies to grow their business.
              </p>
              <Link
                to="/contact"
                className="btn-secondary text-primary hover:bg-white text-lg px-8 py-4 inline-block"
              >
                Get Free Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ElectricalBlueprint;