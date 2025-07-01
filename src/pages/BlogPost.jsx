import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import SEOHead from '../components/common/SEOHead';
import { useBlog } from '../contexts/BlogContext';

const { FiCalendar, FiUser, FiArrowLeft, FiShare2, FiTag, FiArrowRight } = FiIcons;

const BlogPost = () => {
  const { slug } = useParams();
  const { getPostBySlug, getPublishedPosts } = useBlog();
  
  const post = getPostBySlug(slug);
  const allPosts = getPublishedPosts();
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription || post.excerpt,
    "image": post.featuredImage,
    "author": {
      "@type": "Organization",
      "name": "Silahub Technologies Inc.",
      "url": "https://silahub.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Silahub Technologies Inc.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751361970405-main%20logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://silahub.com/blog/${post.slug}`
    }
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.metaDescription || post.excerpt}
        keywords={post.metaKeywords}
        canonicalUrl={`/blog/${post.slug}`}
        ogImage={post.featuredImage}
        schemaMarkup={schemaMarkup}
      />

      <div className="min-h-screen">
        {/* Back to Blog */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-accent transition-colors">
              <SafeIcon icon={FiArrowLeft} className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                {/* Meta Information */}
                <div className="flex items-center justify-center space-x-6 text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiUser} className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Excerpt */}
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                  {post.excerpt}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        <SafeIcon icon={FiTag} className="w-3 h-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Share Button */}
                <button className="inline-flex items-center text-primary hover:text-accent transition-colors">
                  <SafeIcon icon={FiShare2} className="w-4 h-4 mr-2" />
                  Share Article
                </button>
              </motion.div>

              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="card p-8"
              >
                <div className="flex items-start space-x-6">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt="Silahub Team"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">About Silahub Technologies</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Silahub Technologies is Calgary's premier digital marketing agency, specializing in helping home service businesses and contractors dominate their local markets through proven digital strategies.
                    </p>
                    <Link to="/about" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                      Learn More About Our Team
                      <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Related Articles
                  </h2>
                  <p className="text-xl text-gray-600">
                    Continue reading more insights and tips
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.article
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="card group overflow-hidden"
                    >
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <div className="relative overflow-hidden">
                          <img
                            src={relatedPost.featuredImage}
                            alt={relatedPost.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        <div className="p-6">
                          <div className="flex items-center space-x-4 text-gray-500 mb-3">
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                              <span className="text-sm">
                                {new Date(relatedPost.publishedAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>

                          <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {relatedPost.excerpt}
                          </p>

                          <div className="inline-flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                            Read More
                            <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

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
                Ready to Apply These Strategies?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our team help you implement these proven digital marketing strategies for your Calgary business.
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

export default BlogPost;