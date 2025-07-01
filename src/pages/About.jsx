import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import SEOHead from '../components/common/SEOHead';

const { FiUsers, FiTarget, FiTrendingUp, FiAward, FiCheck, FiHeart } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiTarget,
      title: 'Results-Driven',
      description: 'Every strategy is designed with one goal in mind: growing your business and increasing your revenue.'
    },
    {
      icon: FiUsers,
      title: 'Client-Focused',
      description: 'We treat your business like our own, providing personalized attention and dedicated support.'
    },
    {
      icon: FiTrendingUp,
      title: 'Data-Driven',
      description: 'All decisions are backed by data and analytics to ensure maximum ROI for your marketing investment.'
    },
    {
      icon: FiHeart,
      title: 'Passionate',
      description: 'We genuinely care about your success and are passionate about helping local businesses thrive.'
    }
  ];

  const team = [
    {
      name: 'Founder & CEO',
      role: 'Digital Marketing Strategist',
      description: 'With a strong technical background and deep understanding of local markets, our founder leads the strategic vision for helping home service businesses succeed in the digital age.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
    }
  ];

  const achievements = [
    { number: '20+', label: 'Home Service Businesses Served' },
    { number: '150%', label: 'Average Lead Increase' },
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '5+', label: 'Years of Experience' }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Silahub Technologies Inc.",
      "description": "Calgary's premier digital marketing agency specializing in home service businesses and contractors.",
      "foundingDate": "2019",
      "url": "https://silahub.com",
      "employee": {
        "@type": "Person",
        "jobTitle": "Founder & CEO",
        "knowsAbout": ["Digital Marketing", "SEO", "Google Ads", "Social Media Marketing"]
      }
    }
  };

  return (
    <>
      <SEOHead
        title="About Us - Calgary's Digital Marketing Experts"
        description="Learn about Silahub Technologies, Calgary's premier digital marketing agency specializing in helping home service businesses and contractors dominate their local markets."
        keywords="about Silahub Technologies, Calgary digital marketing agency, home service marketing experts, contractor marketing specialists"
        canonicalUrl="/about"
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
                About Silahub Technologies
              </h1>
              <p className="text-xl leading-relaxed">
                We're on a mission to help home service businesses and contractors in Calgary thrive in the digital age through proven marketing strategies that deliver real results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Silahub Technologies was founded with a clear mission: to help home service businesses in Calgary thrive in the digital age. Our founder's technical background and deep understanding of local markets provide a strong foundation for delivering exceptional results.
                  </p>
                  <p>
                    We've had the privilege of working with over 20 home service businesses, ranging from small family-owned operations to large contracting companies. Our specialized focus on the unique challenges faced by contractors and home service providers in digital marketing sets us apart from generic marketing agencies.
                  </p>
                  <p>
                    Every strategy we implement is backed by data, tested for effectiveness, and optimized for maximum ROI. We don't believe in one-size-fits-all solutions – instead, we offer customized approaches designed specifically for each client's business goals and market conditions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                  alt="Digital marketing team working"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">20+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and ensure we deliver exceptional results for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <SafeIcon icon={value.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced team is dedicated to helping your business succeed in the digital marketplace.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="card p-8 text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Achievements</h2>
              <p className="text-xl text-gray-600">
                Numbers that showcase our commitment to client success
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                  Why Choose Silahub Technologies?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Home Service Expertise</h3>
                      <p className="text-gray-600">We exclusively work with home service businesses, understanding your unique challenges and opportunities better than any generalist agency.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Local Market Knowledge</h3>
                      <p className="text-gray-600">Deep understanding of Calgary's market dynamics, customer behavior patterns, and competitive landscape.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Proven Track Record</h3>
                      <p className="text-gray-600">Our clients see an average increase of 150% in qualified leads within the first 6 months of working with us.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Transparent Reporting</h3>
                      <p className="text-gray-600">Regular, detailed reports showing exactly how your marketing investment is performing and driving business growth.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80"
                  alt="Team meeting discussing strategy"
                  className="rounded-2xl shadow-2xl"
                />
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
                Ready to Partner with Us?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join the growing list of successful Calgary home service businesses that trust Silahub Technologies to drive their growth.
              </p>
              <a
                href="/contact"
                className="btn-secondary text-primary hover:bg-white text-lg px-8 py-4 inline-block"
              >
                Get Started Today
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;