import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import SEOHead from '../components/common/SEOHead';
import { useLead } from '../contexts/LeadContext';

const { FiCheck, FiX, FiStar, FiArrowRight, FiPhone, FiMail } = FiIcons;

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    package: '',
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
        source: 'Pricing Page',
        type: 'Package Inquiry'
      });
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        package: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsSubmitting(false);
  };

  const packages = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with digital marketing',
      monthlyPrice: 1497,
      yearlyPrice: 14970,
      features: [
        'Google My Business Optimization',
        'Basic Local SEO',
        'Social Media Setup',
        'Monthly Performance Reports',
        'Email Support',
        '1 Landing Page'
      ],
      notIncluded: [
        'Google Ads Management',
        'Facebook Ads Management',
        'Advanced SEO',
        'Content Marketing'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Growth',
      description: 'Most popular package for established businesses ready to scale',
      monthlyPrice: 2497,
      yearlyPrice: 24970,
      features: [
        'Everything in Starter',
        'Google Ads Management',
        'Facebook Ads Management',
        'Advanced Local SEO',
        'Content Marketing',
        'Review Management',
        'Weekly Performance Reports',
        'Phone & Email Support',
        'Up to 3 Landing Pages'
      ],
      notIncluded: [
        'Advanced Analytics',
        'Custom Integrations'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for large businesses dominating their market',
      monthlyPrice: 4497,
      yearlyPrice: 44970,
      features: [
        'Everything in Growth',
        'Advanced Analytics & Reporting',
        'Custom Website Development',
        'Branding & Design Services',
        'Marketing Automation',
        'Dedicated Account Manager',
        'Priority Support',
        'Unlimited Landing Pages',
        'Custom Integrations'
      ],
      notIncluded: [],
      popular: false,
      cta: 'Contact Us'
    }
  ];

  const addOns = [
    {
      name: 'Additional Landing Pages',
      price: 297,
      description: 'Professional landing pages optimized for conversions'
    },
    {
      name: 'Video Marketing',
      price: 497,
      description: 'Custom video content creation and marketing'
    },
    {
      name: 'Advanced Analytics',
      price: 197,
      description: 'Detailed analytics and custom reporting dashboards'
    },
    {
      name: 'Reputation Management',
      price: 297,
      description: 'Proactive online reputation monitoring and management'
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Silahub Technologies Inc.",
      "url": "https://silahub.com"
    },
    "offers": packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.name,
      "description": pkg.description,
      "price": billingCycle === 'monthly' ? pkg.monthlyPrice : pkg.yearlyPrice,
      "priceCurrency": "CAD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": billingCycle === 'monthly' ? pkg.monthlyPrice : pkg.yearlyPrice,
        "priceCurrency": "CAD",
        "unitText": billingCycle === 'monthly' ? "MONTH" : "YEAR"
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Digital Marketing Pricing - Affordable Packages for Calgary Businesses"
        description="Transparent pricing for digital marketing services in Calgary. Choose from Starter, Growth, or Enterprise packages designed for home service businesses and contractors."
        keywords="digital marketing pricing Calgary, SEO pricing, Google Ads management cost, social media marketing pricing, Calgary marketing agency rates"
        canonicalUrl="/pricing"
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
                Transparent Pricing for Calgary Businesses
              </h1>
              <p className="text-xl leading-relaxed mb-8">
                Choose the perfect digital marketing package for your business. All packages include our proven strategies and dedicated support to help you dominate your local market.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={`${billingCycle === 'monthly' ? 'text-white' : 'text-gray-300'}`}>Monthly</span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative inline-flex items-center h-6 rounded-full w-11 bg-white/20 transition-colors duration-200"
                >
                  <span
                    className={`${
                      billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200`}
                  />
                </button>
                <span className={`${billingCycle === 'yearly' ? 'text-white' : 'text-gray-300'}`}>
                  Yearly <span className="text-secondary">(Save 17%)</span>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                    pkg.popular ? 'ring-2 ring-primary scale-105 lg:scale-110' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">
                        ${billingCycle === 'monthly' ? pkg.monthlyPrice : pkg.yearlyPrice}
                      </span>
                      <span className="text-gray-600">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                      {billingCycle === 'yearly' && (
                        <div className="text-sm text-green-600 font-semibold mt-1">
                          Save ${(pkg.monthlyPrice * 12) - pkg.yearlyPrice}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => setFormData({ ...formData, package: pkg.name })}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                        pkg.popular
                          ? 'bg-primary text-white hover:bg-accent'
                          : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                      }`}
                    >
                      {pkg.cta}
                    </button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">What's Included:</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {pkg.notIncluded.length > 0 && (
                      <div className="pt-4">
                        <h4 className="font-semibold text-gray-400 mb-3">Not Included:</h4>
                        <ul className="space-y-2">
                          {pkg.notIncluded.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <SafeIcon icon={FiX} className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-400 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Optional Add-ons
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enhance your package with additional services tailored to your specific business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-primary mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">
                    ${addon.price}<span className="text-sm font-normal text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 text-sm">{addon.description}</p>
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
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-600">
                  Contact us to discuss which package is right for your business and get a custom quote.
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
                    <p className="text-gray-600">We'll contact you within 24 hours to discuss your package options.</p>
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
                      <select
                        name="package"
                        value={formData.package}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select a Package</option>
                        <option value="Starter">Starter Package</option>
                        <option value="Growth">Growth Package</option>
                        <option value="Enterprise">Enterprise Package</option>
                        <option value="Custom">Custom Solution</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Tell us about your business and goals..."
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
                      {isSubmitting ? 'Submitting...' : 'Get Custom Quote'}
                    </button>
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
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  question: "What's included in the setup process?",
                  answer: "All packages include complete setup of your chosen services, initial strategy development, and onboarding with your dedicated account manager."
                },
                {
                  question: "Can I change my package later?",
                  answer: "Yes, you can upgrade or downgrade your package at any time. We'll work with you to ensure a smooth transition."
                },
                {
                  question: "Do you require long-term contracts?",
                  answer: "We believe in earning your business every month. While we recommend a minimum 6-month commitment for best results, we don't lock you into long-term contracts."
                },
                {
                  question: "What kind of reporting do you provide?",
                  answer: "You'll receive detailed monthly reports showing your performance metrics, ROI, and recommendations for continued growth."
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
                Ready to Start Growing Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join 20+ successful Calgary home service businesses that trust our proven digital marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+18255581832" className="btn-secondary text-primary hover:bg-white text-lg px-8 py-4 inline-flex items-center justify-center">
                  <SafeIcon icon={FiPhone} className="mr-2 w-5 h-5" />
                  Call (825) 558-1832
                </a>
                <a href="mailto:hello@silahub.com" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center">
                  <SafeIcon icon={FiMail} className="mr-2 w-5 h-5" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;