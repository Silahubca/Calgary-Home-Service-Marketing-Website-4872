import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';

const PrivacyPolicy = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy Policy for Silahub Technologies Inc. Learn how we collect, use, and protect your personal information.",
    "publisher": {
      "@type": "Organization",
      "name": "Silahub Technologies Inc.",
      "url": "https://silahub.com"
    }
  };

  return (
    <>
      <SEOHead
        title="Privacy Policy - Silahub Technologies"
        description="Learn how Silahub Technologies collects, uses, and protects your personal information. Read our comprehensive privacy policy for digital marketing services."
        keywords="privacy policy, Silahub Technologies privacy, data protection, personal information"
        canonicalUrl="/privacy-policy"
        schemaMarkup={schemaMarkup}
        noindex={true}
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
                Privacy Policy
              </h1>
              <p className="text-xl leading-relaxed">
                Last updated: January 1, 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Silahub Technologies Inc. ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">2.1 Personal Information</h3>
                      <p className="text-gray-600 leading-relaxed mb-2">
                        We may collect the following personal information:
                      </p>
                      <ul className="text-gray-600 space-y-1 ml-6">
                        <li>• Name and contact information (email, phone, address)</li>
                        <li>• Business information (company name, industry, website)</li>
                        <li>• Payment and billing information</li>
                        <li>• Communications and correspondence with us</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">2.2 Technical Information</h3>
                      <ul className="text-gray-600 space-y-1 ml-6">
                        <li>• IP address and browser information</li>
                        <li>• Website usage data and analytics</li>
                        <li>• Cookies and tracking technologies</li>
                        <li>• Device and operating system information</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use the collected information for the following purposes:
                  </p>
                  <ul className="text-gray-600 space-y-2 ml-6">
                    <li>• To provide and improve our digital marketing services</li>
                    <li>• To communicate with you about our services</li>
                    <li>• To process payments and manage accounts</li>
                    <li>• To send marketing communications (with your consent)</li>
                    <li>• To analyze website usage and improve user experience</li>
                    <li>• To comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. Information Sharing and Disclosure</h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                    </p>
                    <ul className="text-gray-600 space-y-2 ml-6">
                      <li>• With your explicit consent</li>
                      <li>• To trusted service providers who assist in our operations</li>
                      <li>• When required by law or legal process</li>
                      <li>• To protect our rights, property, or safety</li>
                      <li>• In connection with a business transfer or merger</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Data Security</h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      We implement appropriate security measures to protect your personal information:
                    </p>
                    <ul className="text-gray-600 space-y-2 ml-6">
                      <li>• Encryption of sensitive data in transit and at rest</li>
                      <li>• Regular security assessments and updates</li>
                      <li>• Limited access to personal information on a need-to-know basis</li>
                      <li>• Secure data storage and backup procedures</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">6. Cookies and Tracking Technologies</h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      We use cookies and similar technologies to:
                    </p>
                    <ul className="text-gray-600 space-y-2 ml-6">
                      <li>• Remember your preferences and settings</li>
                      <li>• Analyze website traffic and usage patterns</li>
                      <li>• Provide personalized content and advertisements</li>
                      <li>• Improve our services and user experience</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      You can control cookie settings through your browser preferences.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">7. Your Privacy Rights</h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Depending on your location, you may have the following rights:
                    </p>
                    <ul className="text-gray-600 space-y-2 ml-6">
                      <li>• Right to access your personal information</li>
                      <li>• Right to correct or update your information</li>
                      <li>• Right to delete your personal information</li>
                      <li>• Right to restrict or object to processing</li>
                      <li>• Right to data portability</li>
                      <li>• Right to withdraw consent</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">8. Data Retention</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">9. International Data Transfers</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you are located outside of Canada, please be aware that your information may be transferred to and processed in Canada, where our servers and central database are located.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">10. Children's Privacy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">11. Third-Party Links</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">12. Changes to This Privacy Policy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website with an updated effective date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">13. Contact Us</h2>
                  <div className="text-gray-600 space-y-2">
                    <p>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
                    <p><strong>Silahub Technologies Inc.</strong></p>
                    <p>Email: hello@silahub.com</p>
                    <p>Phone: (825) 558-1832</p>
                    <p>Address: Calgary, Alberta, Canada</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mt-12">
                  <p className="text-gray-600 text-sm">
                    <strong>Note:</strong> This Privacy Policy is designed to comply with Canadian privacy laws including PIPEDA (Personal Information Protection and Electronic Documents Act). If you have specific privacy concerns or requests, please contact us directly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;