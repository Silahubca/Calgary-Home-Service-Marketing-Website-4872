import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../components/common/SafeIcon';
import SEOHead from '../../components/common/SEOHead';
import { useLead } from '../../contexts/LeadContext';

const { FiGlobe, FiSmartphone, FiZap, FiSearch, FiCheck, FiArrowRight } = FiIcons;

const WebsiteDesign = () => {
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createLead({
        ...formData,
        source: 'Website Design Page',
        type: 'Website Consultation'
      });
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', business: '', website: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setIsSubmitting(false);
  };

  const features = [
    'Custom Website Design',
    'Mobile-Responsive Development',
    'SEO-Optimized Structure',
    'Fast Loading Speed',
    'Lead Generation Forms',
    'Content Management System',
    'SSL Security Certificate',
    'Google Analytics Integration'
  ];

  const benefits = [
    'Professional brand image',
    'Mobile-friendly design',
    'Search engine optimized',
    'Easy content updates',
    'Lead capture optimization',
    'Fast loading performance'
  ];

  const results = [
    { metric: '300%', description: 'Average increase in website conversions' },
    { metric: '85%', description: 'Faster page loading speeds' },
    { metric: '200%', description: 'More mobile traffic' },
    { metric: '24/7', description: 'Online lead generation' }
  ];

  return (
    <>
      <SEOHead
        title="Website Design & Development Calgary - Professional Web Solutions"
        description="Professional website design and development for Calgary home service businesses. Mobile-responsive, SEO-optimized websites that convert visitors into customers."
        keywords="website design Calgary, web development, responsive design, SEO websites, professional websites Calgary"
        canonicalUrl="/website-design-development"
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
                  Professional Websites That Convert Visitors Into Customers
                </h1>
                <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                  Get a professional, mobile-responsive website that ranks well in search engines and converts visitors into paying customers. Our proven designs help Calgary home service businesses establish credibility and generate leads 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact-form" className="btn-secondary text-primary hover:bg-white text-lg px-8 py-4 text-center">
                    Get Free Website Audit
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
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                  alt="Professional website design on multiple devices" 
                  className="rounded-2xl shadow-2xl" 
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">300%</div>
                    <div className="text-sm text-gray-600">More Conversions</div>
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
                Proven Website Results
              </h2>
              <p className="text-xl text-gray-600">
                Real results from Calgary businesses using our website design services
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
                Our Website Design & Development Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional website solutions designed specifically for Calgary home service businesses.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-6">What's Included:</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <SafeIcon icon={FiCheck} className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-lg">{feature}</span>
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
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
                  alt="Website development process" 
                  className="rounded-2xl shadow-2xl" 
                />
              </motion.div>
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
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80" 
                  alt="Website analytics and performance" 
                  className="rounded-2xl shadow-2xl" 
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                  Why Your Business Needs a Professional Website
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-600 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Get Your Free Website Audit
                </h2>
                <p className="text-xl text-gray-600">
                  Discover how a professional website can generate more leads for your Calgary business.
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
                    <p className="text-gray-600">We'll send you a comprehensive website audit within 24 hours.</p>
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
                        placeholder="Current Website URL (if any)"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Tell us about your website goals..."
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
                      {isSubmitting ? 'Submitting...' : 'Get Free Website Audit'}
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
                Ready to Launch Your Professional Website?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join successful Calgary businesses that trust our website design expertise to establish their online presence.
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

export default WebsiteDesign;