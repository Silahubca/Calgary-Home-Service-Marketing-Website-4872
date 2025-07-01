import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import SEOHead from '../components/common/SEOHead';
import { useBlog } from '../contexts/BlogContext';

const { FiSearch, FiCalendar, FiUser, FiArrowRight, FiTag } = FiIcons;

const Blog = () => {
  const { getPublishedPosts } = useBlog();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const posts = getPublishedPosts();
  
  // Get all unique tags
  const allTags = [...new Set(posts.flatMap(post => post.tags || []))];

  // Filter posts based on search and tag
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || (post.tags && post.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Silahub Technologies Blog",
    "description": "Digital marketing insights, tips, and strategies for Calgary home service businesses and contractors.",
    "url": "https://silahub.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Silahub Technologies Inc.",
      "url": "https://silahub.com"
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://silahub.com/blog/${post.slug}`,
      "datePublished": post.publishedAt,
      "author": {
        "@type": "Organization",
        "name": "Silahub Technologies Inc."
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Digital Marketing Blog - Tips & Insights for Calgary Businesses"
        description="Get the latest digital marketing insights, SEO tips, and growth strategies specifically for Calgary home service businesses and contractors."
        keywords="digital marketing blog, SEO tips Calgary, home service marketing, contractor marketing blog, Calgary business tips"
        canonicalUrl="/blog"
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
                Digital Marketing Insights for Calgary Businesses
              </h1>
              <p className="text-xl leading-relaxed">
                Get the latest tips, strategies, and insights to grow your home service business with proven digital marketing techniques.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                {/* Search */}
                <div className="flex-1 relative">
                  <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Tag Filter */}
                <div className="md:w-64">
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">All Topics</option>
                    {allTags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Article
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                <Link to={`/blog/${featuredPost.slug}`} className="group">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                      <div className="flex items-center space-x-4 text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                          <span className="text-sm">
                            {new Date(featuredPost.publishedAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <SafeIcon icon={FiUser} className="w-4 h-4" />
                          <span className="text-sm">{featuredPost.author}</span>
                        </div>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>

                      {featuredPost.tags && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {featuredPost.tags.map(tag => (
                            <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="inline-flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                        Read Full Article
                        <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                      </div>
                    </div>

                    <div className="order-1 lg:order-2">
                      <img
                        src={featuredPost.featuredImage}
                        alt={featuredPost.title}
                        className="rounded-2xl shadow-2xl w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* Regular Posts Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest digital marketing trends and strategies for home service businesses.
              </p>
            </motion.div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card group overflow-hidden"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <div className="relative overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                            <span className="text-sm">
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <SafeIcon icon={FiUser} className="w-4 h-4" />
                            <span className="text-sm">{post.author}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {post.tags && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="inline-flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                          Read More
                          <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gradient-primary text-white rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Stay Updated with Marketing Tips
                </h2>
                <p className="text-xl mb-8 text-gray-100">
                  Get the latest digital marketing insights delivered to your inbox weekly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="btn-secondary text-primary hover:bg-white px-6 py-3">
                    Subscribe
                  </button>
                </div>
                
                <p className="text-sm text-gray-200 mt-4">
                  No spam, ever. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
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
                Ready to Implement These Strategies?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our team of experts help you apply these proven digital marketing strategies to grow your Calgary business.
              </p>
              <Link to="/contact" className="btn-secondary text-primary hover:bg-white text-lg px-8 py-4 inline-block">
                Get Free Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;