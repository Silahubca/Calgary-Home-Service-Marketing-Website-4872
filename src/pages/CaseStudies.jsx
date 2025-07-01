import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import SEOHead from '../components/common/SEOHead';

const { FiTrendingUp, FiUsers, FiDollarSign, FiTarget, FiArrowRight, FiStar } = FiIcons;

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      company: 'STAT Climate Control Solutions',
      industry: 'HVAC',
      location: 'Calgary, AB',
      challenge: 'Low online visibility and struggling to compete with larger HVAC companies in Calgary.',
      solution: 'Comprehensive SEO strategy, Google Ads management, and local search optimization.',
      results: [
        { metric: '350%', description: 'Increase in organic traffic' },
        { metric: '280%', description: 'More qualified leads' },
        { metric: '#1', description: 'Google ranking for "HVAC Calgary"' },
        { metric: '85%', description: 'Increase in revenue' }
      ],
      testimonial: "Silahub transformed our online presence completely. We went from barely getting calls to being booked solid for months ahead. The ROI has been incredible.",
      clientName: 'Mike Johnson',
      clientRole: 'Owner',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      duration: '12 months',
      featured: true
    },
    {
      id: 2,
      company: 'Precision Craft and Design',
      industry: 'General Contracting',
      location: 'Calgary, AB',
      challenge: 'Difficulty generating high-quality leads and inconsistent project pipeline.',
      solution: 'Local SEO optimization, content marketing, and reputation management strategy.',
      results: [
        { metric: '220%', description: 'Increase in website traffic' },
        { metric: '150%', description: 'More qualified inquiries' },
        { metric: '4.9', description: 'Star Google rating' },
        { metric: '60%', description: 'Increase in project value' }
      ],
      testimonial: "The team at Silahub really understands the contracting business. Their SEO work has us ranking #1 for all our target keywords.",
      clientName: 'Sarah Mitchell',
      clientRole: 'Co-Owner',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      duration: '8 months',
      featured: false
    },
    {
      id: 3,
      company: 'Windows West Calgary',
      industry: 'Windows & Doors',
      location: 'Calgary, AB',
      challenge: 'Seasonal business fluctuations and low brand recognition in competitive market.',
      solution: 'Year-round content strategy, Google Ads campaigns, and social media management.',
      results: [
        { metric: '300%', description: 'Increase in website traffic' },
        { metric: '190%', description: 'More service inquiries' },
        { metric: '45%', description: 'Reduction in cost per lead' },
        { metric: '70%', description: 'Increase in off-season sales' }
      ],
      testimonial: "Professional team, exceptional results. Our website traffic increased by 300% in just 6 months and we're now busy year-round.",
      clientName: 'David Chen',
      clientRole: 'General Manager',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      duration: '10 months',
      featured: false
    }
  ];

  const services = [
    { name: 'SEO Optimization', icon: FiTrendingUp },
    { name: 'Google Ads Management', icon: FiTarget },
    { name: 'Local Search Marketing', icon: FiUsers },
    { name: 'Content Marketing', icon: FiStar }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Case Studies",
    "description": "Real results from Calgary home service businesses that have grown with Silahub Technologies digital marketing services.",
    "publisher": {
      "@type": "Organization",
      "name": "Silahub Technologies Inc.",
      "url": "https://silahub.com"
    },
    "mainEntity": caseStudies.map(study => ({
      "@type": "Article",
      "headline": `${study.company} Case Study`,
      "description": study.challenge,
      "author": {
        "@type": "Organization",
        "name": "Silahub Technologies Inc."
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Case Studies - Real Results from Calgary Home Service Businesses"
        description="See how Silahub Technologies has helped Calgary HVAC, plumbing, electrical, and other home service businesses grow their revenue with proven digital marketing strategies."
        keywords="digital marketing case studies Calgary, SEO results Calgary, home service marketing success stories, HVAC marketing results, contractor marketing case studies"
        canonicalUrl="/case-studies"
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
                Real Results from Real Businesses
              </h1>
              <p className="text-xl leading-relaxed">
                Discover how Calgary home service businesses have transformed their growth with our proven digital marketing strategies. These case studies showcase measurable results and real ROI.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Study */}
        {caseStudies.filter(study => study.featured).map((study, index) => (
          <section key={study.id} className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Case Study
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-6 mb-4">
                  {study.company}
                </h2>
                <p className="text-xl text-gray-600">
                  {study.industry} • {study.location}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={study.image}
                    alt={`${study.company} case study`}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">The Challenge</h3>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Our Solution</h3>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Project Timeline</h3>
                    <p className="text-gray-600">{study.duration}</p>
                  </div>
                </motion.div>
              </div>

              {/* Results Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              >
                {study.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {result.metric}
                    </div>
                    <div className="text-gray-600 font-medium">{result.description}</div>
                  </div>
                ))}
              </motion.div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-600 italic mb-6 leading-relaxed">
                  "{study.testimonial}"
                </blockquote>
                <div>
                  <div className="font-semibold text-primary text-lg">{study.clientName}</div>
                  <div className="text-gray-600">{study.clientRole}, {study.company}</div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Other Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                More Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how we've helped other Calgary home service businesses achieve remarkable growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => !study.featured).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card p-8"
                >
                  <div className="mb-6">
                    <img
                      src={study.image}
                      alt={`${study.company} case study`}
                      className="rounded-xl w-full h-48 object-cover"
                    />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">{study.company}</h3>
                    <p className="text-gray-600 mb-4">{study.industry} • {study.location}</p>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.slice(0, 2).map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-2xl font-bold text-primary">{result.metric}</div>
                        <div className="text-sm text-gray-600">{result.description}</div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="text-gray-600 italic mb-4 leading-relaxed">
                    "{study.testimonial}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-primary">{study.clientName}</div>
                      <div className="text-sm text-gray-600">{study.clientRole}</div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <SafeIcon key={i} icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Used */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Services That Drive Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach combines multiple digital marketing strategies for maximum impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary">{service.name}</h3>
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
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join these successful Calgary businesses and start dominating your local market with proven digital marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-secondary text-primary hover:bg-white text-lg px-8 py-4 inline-flex items-center justify-center">
                  Get Free Consultation
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                </a>
                <a href="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  View Packages
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;