import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import SEOHead from '../components/common/SEOHead';
import { useLead } from '../contexts/LeadContext';

const { FiPhone, FiMail, FiMapPin, FiClock, FiCheck, FiSend } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    services: '',
    budget: '',
    message: '',
    urgency: 'medium'
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
        source: 'Contact Page',
        type: 'General Consultation'
      });
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        website: '',
        services: '',
        budget: '',
        message: '',
        urgency: 'medium'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: '(825) 558-1832',
      link: 'tel:+18255581832',
      description: 'Call us for immediate assistance'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: 'hello@silahub.com',
      link: 'mailto:hello@silahub.com',
      description: 'Send us an email anytime'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      details: 'Calgary, Alberta, Canada',
      link: null,
      description: 'Serving Calgary and surrounding areas'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9:00 AM - 5:00 PM',
      link: null,
      description: 'Mountain Time Zone'
    }
  ];

  const services = [
    'SEO Optimization',
    'Google Ads Management',
    'Facebook Ads Management',
    'Social Media Management',
    'Website Design & Development',
    'Reputation Management',
    'Content Marketing',
    'Branding Services',
    'Google Maps SEO',
    'Local Service Ads'
  ];

  const budgetRanges = [
    'Under $1,500/month',
    '$1,500 - $2,500/month',
    '$2,500 - $5,000/month',
    '$5,000+/month',
    'Project-based pricing'
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Silahub Technologies Inc.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-825-558-1832",
        "contactType": "customer service",
        "email": "hello@silahub.com",
        "areaServed": "Calgary, AB, Canada",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Calgary",
        "addressRegion": "AB",
        "addressCountry": "CA"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us - Get Your Free Digital Marketing Consultation"
        description="Ready to grow your Calgary business? Contact Silahub Technologies for a free consultation. Call (825) 558-1832 or fill out our contact form to get started."
        keywords="contact Silahub Technologies, Calgary digital marketing consultation, free marketing consultation, contact Calgary marketing agency"
        canonicalUrl="/contact"
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
                Let's Grow Your Business Together
              </h1>
              <p className="text-xl leading-relaxed">
                Ready to dominate your local market? Get in touch for a free consultation and discover how our proven digital marketing strategies can transform your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple ways to reach us. Choose what works best for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <SafeIcon icon={info.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-lg font-medium text-gray-900 hover:text-primary transition-colors mb-2 block"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-gray-900 mb-2">{info.details}</p>
                  )}
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Request Your Free Consultation
                </h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours with a customized growth strategy for your business.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <SafeIcon icon={FiCheck} className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h3 className="text-3xl font-semibold text-green-600 mb-4">Thank You!</h3>
                    <p className="text-gray-600 text-lg mb-6">
                      We've received your consultation request. Our team will review your information and contact you within 24 hours with a customized growth strategy.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-primary mb-2">What happens next?</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• We'll analyze your current online presence</li>
                        <li>• Research your local competition</li>
                        <li>• Prepare a customized growth strategy</li>
                        <li>• Schedule a call to discuss opportunities</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          name="business"
                          placeholder="Your business name"
                          value={formData.business}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        placeholder="https://yourbusiness.com"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>

                    {/* Services Interest */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Services of Interest
                      </label>
                      <select
                        name="services"
                        value={formData.services}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select services you're interested in</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Monthly Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="form-input"
                        >
                          <option value="">Select your budget range</option>
                          {budgetRanges.map(range => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Urgency
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="form-input"
                        >
                          <option value="low">Not urgent (3+ months)</option>
                          <option value="medium">Moderate (1-3 months)</option>
                          <option value="high">Urgent (ASAP)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell Us About Your Goals
                      </label>
                      <textarea
                        name="message"
                        placeholder="Describe your business goals, current challenges, and what you hope to achieve with digital marketing..."
                        rows="6"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-textarea"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 text-lg disabled:opacity-50 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner mr-3"></div>
                          Sending Request...
                        </>
                      ) : (
                        <>
                          <SafeIcon icon={FiSend} className="mr-2 w-5 h-5" />
                          Request Free Consultation
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-500 text-sm">
                      By submitting this form, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about our consultation process
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  question: "How long does the free consultation take?",
                  answer: "Our initial consultation typically takes 30-45 minutes. We'll discuss your business goals, current challenges, and outline potential strategies."
                },
                {
                  question: "What should I prepare for the consultation?",
                  answer: "Come prepared to discuss your business goals, current marketing efforts, target audience, and any specific challenges you're facing. Access to your current website and social media accounts is helpful."
                },
                {
                  question: "Do you work with businesses outside of Calgary?",
                  answer: "While we specialize in Calgary businesses, we do work with clients throughout Alberta and across Canada, especially in the home service industry."
                },
                {
                  question: "What makes your approach different?",
                  answer: "We exclusively work with home service businesses, so we understand your unique challenges. Our strategies are data-driven, locally focused, and designed for sustainable growth."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
                Prefer to Talk Right Now?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Sometimes a quick phone call is the best way to get started. Call us directly for immediate assistance.
              </p>
              <a href="tel:+18255581832" className="btn-secondary text-primary hover:bg-white text-lg px-8 py-4 inline-flex items-center">
                <SafeIcon icon={FiPhone} className="mr-2 w-5 h-5" />
                Call (825) 558-1832
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;