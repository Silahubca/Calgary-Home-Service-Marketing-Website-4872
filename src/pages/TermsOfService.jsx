import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';

const TermsOfService = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Terms of Service for Silahub Technologies Inc. digital marketing services.",
    "publisher": {
      "@type": "Organization",
      "name": "Silahub Technologies Inc.",
      "url": "https://silahub.com"
    }
  };

  return (
    <>
      <SEOHead
        title="Terms of Service - Silahub Technologies"
        description="Read the terms of service for Silahub Technologies digital marketing services. Understand your rights and obligations when working with our Calgary marketing agency."
        keywords="terms of service, Silahub Technologies terms, digital marketing terms, service agreement"
        canonicalUrl="/terms-of-service"
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
                Terms of Service
              </h1>
              <p className="text-xl leading-relaxed">
                Last updated: January 1, 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
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
                  <h2 className="text-2xl font-bold text-primary mb-4">1. Agreement to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing and using the services provided by Silahub Technologies Inc. ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. Description of Services</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Silahub Technologies provides digital marketing services including but not limited to:
                  </p>
                  <ul className="text-gray-600 space-y-2 ml-6">
                    <li>• Search Engine Optimization (SEO)</li>
                    <li>• Google Ads Management</li>
                    <li>• Social Media Marketing</li>
                    <li>• Website Design and Development</li>
                    <li>• Content Marketing</li>
                    <li>• Reputation Management</li>
                    <li>• Digital Marketing Consulting</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. Service Agreements</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Specific services will be detailed in separate service agreements or statements of work. These Terms of Service apply to all services unless specifically modified in writing.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. Payment Terms</h2>
                  <div className="text-gray-600 space-y-4">
                    <p><strong>4.1 Payment Schedule:</strong> Unless otherwise specified, services are billed monthly in advance.</p>
                    <p><strong>4.2 Late Payments:</strong> Payments not received within 30 days of the due date may result in service suspension.</p>
                    <p><strong>4.3 Refunds:</strong> Refund policies will be specified in individual service agreements.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Client Responsibilities</h2>
                  <div className="text-gray-600 space-y-4">
                    <p><strong>5.1 Cooperation:</strong> Client agrees to provide timely feedback, approvals, and necessary materials for service delivery.</p>
                    <p><strong>5.2 Access:</strong> Client will provide necessary access to websites, social media accounts, and other platforms as required.</p>
                    <p><strong>5.3 Content:</strong> Client is responsible for the accuracy and legality of all content provided.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">6. Intellectual Property</h2>
                  <div className="text-gray-600 space-y-4">
                    <p><strong>6.1 Client Content:</strong> Client retains ownership of all content, trademarks, and materials provided to us.</p>
                    <p><strong>6.2 Work Product:</strong> Unless otherwise specified, client will own work product created specifically for them upon full payment.</p>
                    <p><strong>6.3 Company IP:</strong> We retain ownership of our methodologies, processes, and general knowledge.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">7. Confidentiality</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Both parties agree to maintain confidentiality of proprietary information shared during the course of the business relationship.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">8. Limitation of Liability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To the maximum extent permitted by law, Silahub Technologies shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">9. Termination</h2>
                  <div className="text-gray-600 space-y-4">
                    <p><strong>9.1 By Client:</strong> Client may terminate services with 30 days written notice.</p>
                    <p><strong>9.2 By Company:</strong> We may terminate services for non-payment or breach of terms with 30 days notice.</p>
                    <p><strong>9.3 Effect of Termination:</strong> Upon termination, client will pay for all services rendered through the termination date.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">10. Governing Law</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of Alberta, Canada.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">11. Changes to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Continued use of services constitutes acceptance of modified Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">12. Contact Information</h2>
                  <div className="text-gray-600 space-y-2">
                    <p>For questions about these Terms of Service, please contact us:</p>
                    <p><strong>Silahub Technologies Inc.</strong></p>
                    <p>Email: hello@silahub.com</p>
                    <p>Phone: (825) 558-1832</p>
                    <p>Address: Calgary, Alberta, Canada</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mt-12">
                  <p className="text-gray-600 text-sm">
                    <strong>Disclaimer:</strong> This Terms of Service document is provided for informational purposes. For specific service terms and conditions, please refer to your individual service agreement or contact us directly.
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

export default TermsOfService;