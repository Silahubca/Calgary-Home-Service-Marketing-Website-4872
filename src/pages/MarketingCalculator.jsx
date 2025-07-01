import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import SEOHead from '../components/common/SEOHead';

const { FiCalculator, FiDollarSign, FiTrendingUp, FiUsers, FiTarget, FiCheck, FiArrowRight } = FiIcons;

const MarketingCalculator = () => {
  const [formData, setFormData] = useState({
    industry: '',
    monthlyRevenue: '',
    averageJobValue: '',
    currentLeads: '',
    conversionRate: '',
    marketingBudget: ''
  });
  
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateROI = () => {
    const revenue = parseFloat(formData.monthlyRevenue) || 0;
    const jobValue = parseFloat(formData.averageJobValue) || 0;
    const leads = parseFloat(formData.currentLeads) || 0;
    const conversion = parseFloat(formData.conversionRate) || 0;
    const budget = parseFloat(formData.marketingBudget) || 0;

    // Calculate potential improvements
    const improvedLeads = leads * 2.5; // 150% increase
    const improvedConversion = Math.min(conversion * 1.3, 50); // 30% improvement, max 50%
    const newMonthlyJobs = (improvedLeads * improvedConversion) / 100;
    const newMonthlyRevenue = newMonthlyJobs * jobValue;
    const revenueIncrease = newMonthlyRevenue - revenue;
    const annualIncrease = revenueIncrease * 12;
    const roi = budget > 0 ? ((revenueIncrease - budget) / budget * 100) : 0;

    setResults({
      currentRevenue: revenue,
      currentLeads: leads,
      currentConversion: conversion,
      projectedLeads: Math.round(improvedLeads),
      projectedConversion: Math.round(improvedConversion * 10) / 10,
      projectedJobs: Math.round(newMonthlyJobs),
      projectedRevenue: Math.round(newMonthlyRevenue),
      monthlyIncrease: Math.round(revenueIncrease),
      annualIncrease: Math.round(annualIncrease),
      roi: Math.round(roi)
    });

    setShowResults(true);
  };

  const industries = [
    'HVAC',
    'Plumbing',
    'Electrical',
    'Roofing',
    'Landscaping',
    'Cleaning Services',
    'General Contracting',
    'Flooring',
    'Painting',
    'Windows & Doors'
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Marketing ROI Calculator",
    "description": "Calculate the potential return on investment for digital marketing services for Calgary home service businesses.",
    "url": "https://silahub.com/marketing-calculator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "provider": {
      "@type": "Organization",
      "name": "Silahub Technologies Inc.",
      "url": "https://silahub.com"
    }
  };

  return (
    <>
      <SEOHead
        title="Marketing ROI Calculator - Calculate Your Digital Marketing Potential"
        description="Use our free marketing ROI calculator to discover how much revenue growth your Calgary home service business could achieve with professional digital marketing."
        keywords="marketing ROI calculator, digital marketing calculator, home service marketing ROI, Calgary marketing calculator, marketing investment calculator"
        canonicalUrl="/marketing-calculator"
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
              <SafeIcon icon={FiCalculator} className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Marketing ROI Calculator
              </h1>
              <p className="text-xl leading-relaxed">
                Discover how much revenue growth your home service business could achieve with professional digital marketing. Get instant projections based on your current business metrics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Calculator Form */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-2xl p-8 shadow-2xl"
                >
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Enter Your Business Information
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Industry *
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      >
                        <option value="">Select your industry</option>
                        {industries.map(industry => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Monthly Revenue ($) *
                      </label>
                      <input
                        type="number"
                        name="monthlyRevenue"
                        placeholder="25000"
                        value={formData.monthlyRevenue}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Average Job Value ($) *
                      </label>
                      <input
                        type="number"
                        name="averageJobValue"
                        placeholder="500"
                        value={formData.averageJobValue}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Leads *
                      </label>
                      <input
                        type="number"
                        name="currentLeads"
                        placeholder="100"
                        value={formData.currentLeads}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Conversion Rate (%) *
                      </label>
                      <input
                        type="number"
                        name="conversionRate"
                        placeholder="20"
                        value={formData.conversionRate}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Marketing Budget ($) *
                      </label>
                      <input
                        type="number"
                        name="marketingBudget"
                        placeholder="2000"
                        value={formData.marketingBudget}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <button
                      onClick={calculateROI}
                      className="w-full btn-primary py-4 text-lg"
                      disabled={!formData.industry || !formData.monthlyRevenue}
                    >
                      Calculate My ROI Potential
                      <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </motion.div>

                {/* Results Section */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  {!showResults ? (
                    <div className="text-center py-12">
                      <SafeIcon icon={FiTrendingUp} className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                      <h3 className="text-xl font-semibold text-gray-600 mb-4">
                        Your Results Will Appear Here
                      </h3>
                      <p className="text-gray-500">
                        Fill out the form and click calculate to see your potential ROI with professional digital marketing.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-6">
                        Your Marketing ROI Projection
                      </h3>

                      <div className="space-y-6">
                        {/* Current vs Projected */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="text-sm font-medium text-gray-600 mb-2">Current Monthly Leads</h4>
                            <div className="text-2xl font-bold text-gray-900">{results.currentLeads}</div>
                          </div>
                          <div className="bg-white rounded-lg p-4 ring-2 ring-primary">
                            <h4 className="text-sm font-medium text-gray-600 mb-2">Projected Monthly Leads</h4>
                            <div className="text-2xl font-bold text-primary">{results.projectedLeads}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="text-sm font-medium text-gray-600 mb-2">Current Conversion Rate</h4>
                            <div className="text-2xl font-bold text-gray-900">{results.currentConversion}%</div>
                          </div>
                          <div className="bg-white rounded-lg p-4 ring-2 ring-primary">
                            <h4 className="text-sm font-medium text-gray-600 mb-2">Projected Conversion Rate</h4>
                            <div className="text-2xl font-bold text-primary">{results.projectedConversion}%</div>
                          </div>
                        </div>

                        {/* Revenue Projections */}
                        <div className="bg-gradient-primary text-white rounded-lg p-6">
                          <h4 className="text-lg font-semibold mb-4">Revenue Impact</h4>
                          <div className="grid grid-cols-1 gap-4">
                            <div>
                              <div className="text-sm opacity-90">Monthly Revenue Increase</div>
                              <div className="text-3xl font-bold">${results.monthlyIncrease.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-sm opacity-90">Annual Revenue Increase</div>
                              <div className="text-3xl font-bold">${results.annualIncrease.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-sm opacity-90">Projected ROI</div>
                              <div className="text-3xl font-bold">{results.roi}%</div>
                            </div>
                          </div>
                        </div>

                        {/* Key Improvements */}
                        <div className="bg-white rounded-lg p-6">
                          <h4 className="font-semibold text-primary mb-4">How We Achieve These Results:</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                              <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">150% increase in qualified leads through SEO and Google Ads</span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">30% improvement in conversion rates with optimized landing pages</span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">Enhanced reputation management and customer trust</span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">Improved local search visibility and brand recognition</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                How Our Calculations Work
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our projections are based on real results from over 20 Calgary home service businesses we've helped grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiUsers} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">Lead Generation</h3>
                <p className="text-gray-600">
                  Our clients see an average 150% increase in qualified leads through SEO, Google Ads, and local search optimization.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiTarget} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">Conversion Optimization</h3>
                <p className="text-gray-600">
                  We improve conversion rates by 30% through optimized websites, landing pages, and customer journey improvements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiDollarSign} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">Revenue Growth</h3>
                <p className="text-gray-600">
                  The combination of more leads and better conversions typically results in 200-400% ROI within 12 months.
                </p>
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
                Ready to Turn These Projections Into Reality?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover exactly how we can help your business achieve these results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-secondary text-primary hover:bg-white text-lg px-8 py-4">
                  Get Free Consultation
                </a>
                <a href="/case-studies" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  View Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarketingCalculator;