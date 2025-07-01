import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import { BlogProvider } from './contexts/BlogContext';
import { LeadProvider } from './contexts/LeadContext';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SEOCalgary from './pages/services/SEOCalgary';
import GoogleAds from './pages/services/GoogleAds';
import FacebookAds from './pages/services/FacebookAds';
import SocialMedia from './pages/services/SocialMedia';
import WebsiteDesign from './pages/services/WebsiteDesign';
import ReputationManagement from './pages/services/ReputationManagement';
import ContentMarketing from './pages/services/ContentMarketing';
import BrandingService from './pages/services/BrandingService';
import GoogleMaps from './pages/services/GoogleMaps';
import LocalServiceAds from './pages/services/LocalServiceAds';
import Pricing from './pages/Pricing';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import MarketingCalculator from './pages/MarketingCalculator';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Landing Pages
import HVACBlueprint from './pages/blueprints/HVACBlueprint';
import PlumbingBlueprint from './pages/blueprints/PlumbingBlueprint';
import ElectricalBlueprint from './pages/blueprints/ElectricalBlueprint';
import RoofingBlueprint from './pages/blueprints/RoofingBlueprint';
import LandscapingBlueprint from './pages/blueprints/LandscapingBlueprint';
import CleaningBlueprint from './pages/blueprints/CleaningBlueprint';
import FlooringBlueprint from './pages/blueprints/FlooringBlueprint';

// Admin
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import BlogEditor from './pages/admin/BlogEditor';
import LeadManagement from './pages/admin/LeadManagement';

import './App.css';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <BlogProvider>
          <LeadProvider>
            <Router>
              <div className="App">
                <ScrollToTop />
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    
                    {/* Individual Service Pages */}
                    <Route path="/seo-calgary" element={<SEOCalgary />} />
                    <Route path="/google-ads-management" element={<GoogleAds />} />
                    <Route path="/facebook-ads-management" element={<FacebookAds />} />
                    <Route path="/social-media-management" element={<SocialMedia />} />
                    <Route path="/website-design-development" element={<WebsiteDesign />} />
                    <Route path="/reputation-management" element={<ReputationManagement />} />
                    <Route path="/content-marketing" element={<ContentMarketing />} />
                    <Route path="/branding-services" element={<BrandingService />} />
                    <Route path="/google-maps-seo" element={<GoogleMaps />} />
                    <Route path="/google-local-service-ads" element={<LocalServiceAds />} />
                    
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/marketing-calculator" element={<MarketingCalculator />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    
                    {/* Blueprint Landing Pages */}
                    <Route path="/hvac-marketing-blueprint" element={<HVACBlueprint />} />
                    <Route path="/plumbing-marketing-blueprint" element={<PlumbingBlueprint />} />
                    <Route path="/electrical-marketing-blueprint" element={<ElectricalBlueprint />} />
                    <Route path="/roofing-marketing-blueprint" element={<RoofingBlueprint />} />
                    <Route path="/landscaping-marketing-blueprint" element={<LandscapingBlueprint />} />
                    <Route path="/cleaning-marketing-blueprint" element={<CleaningBlueprint />} />
                    <Route path="/flooring-marketing-blueprint" element={<FlooringBlueprint />} />
                    
                    {/* Admin Routes */}
                    <Route path="/silahub-admin-login" element={<AdminLogin />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/blog-editor" element={<BlogEditor />} />
                    <Route path="/admin/blog-editor/:id" element={<BlogEditor />} />
                    <Route path="/admin/leads" element={<LeadManagement />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </Router>
          </LeadProvider>
        </BlogProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;