import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BlogContext = createContext();

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load posts from localStorage on component mount
    const savedPosts = localStorage.getItem('silahub_blog_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Initialize with sample posts
      const samplePosts = [
        {
          id: uuidv4(),
          title: 'How to Dominate Local SEO in Calgary',
          slug: 'how-to-dominate-local-seo-in-calgary',
          excerpt: 'Learn the essential strategies to rank your home service business at the top of local search results in Calgary.',
          content: '<h2>Understanding Local SEO in Calgary</h2><p>Local SEO is crucial for home service businesses in Calgary. With the right strategies, you can dominate local search results and attract more customers.</p><h3>Key Local SEO Strategies</h3><ul><li>Optimize your Google My Business profile</li><li>Build local citations</li><li>Generate positive reviews</li><li>Create location-specific content</li></ul>',
          author: 'Silahub Team',
          publishedAt: new Date().toISOString(),
          status: 'published',
          featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
          tags: ['SEO', 'Local Marketing', 'Calgary'],
          metaDescription: 'Learn essential local SEO strategies to dominate Calgary search results for your home service business.',
          metaKeywords: 'local SEO Calgary, Calgary SEO, home service SEO'
        },
        {
          id: uuidv4(),
          title: 'Google Ads vs Facebook Ads: Which is Better for Home Services?',
          slug: 'google-ads-vs-facebook-ads-for-home-services',
          excerpt: 'Compare Google Ads and Facebook Ads to determine the best advertising platform for your home service business.',
          content: '<h2>Google Ads vs Facebook Ads</h2><p>Both platforms offer unique advantages for home service businesses. Let\'s explore which one might be better for your specific needs.</p><h3>Google Ads Advantages</h3><ul><li>High intent traffic</li><li>Local targeting</li><li>Immediate results</li></ul><h3>Facebook Ads Advantages</h3><ul><li>Detailed targeting options</li><li>Visual storytelling</li><li>Lower cost per click</li></ul>',
          author: 'Silahub Team',
          publishedAt: new Date(Date.now() - 86400000).toISOString(),
          status: 'published',
          featuredImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2039&q=80',
          tags: ['Google Ads', 'Facebook Ads', 'PPC Marketing'],
          metaDescription: 'Compare Google Ads and Facebook Ads to find the best advertising platform for your home service business.',
          metaKeywords: 'Google Ads, Facebook Ads, home service advertising, PPC marketing'
        }
      ];
      setPosts(samplePosts);
      localStorage.setItem('silahub_blog_posts', JSON.stringify(samplePosts));
    }
  }, []);

  const savePosts = (newPosts) => {
    setPosts(newPosts);
    localStorage.setItem('silahub_blog_posts', JSON.stringify(newPosts));
  };

  const createPost = (postData) => {
    const newPost = {
      ...postData,
      id: uuidv4(),
      publishedAt: new Date().toISOString(),
      slug: postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    };
    const updatedPosts = [newPost, ...posts];
    savePosts(updatedPosts);
    return newPost;
  };

  const updatePost = (id, postData) => {
    const updatedPosts = posts.map(post => 
      post.id === id 
        ? { 
            ...post, 
            ...postData,
            slug: postData.title ? postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : post.slug
          }
        : post
    );
    savePosts(updatedPosts);
    return updatedPosts.find(post => post.id === id);
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    savePosts(updatedPosts);
  };

  const getPostBySlug = (slug) => {
    return posts.find(post => post.slug === slug && post.status === 'published');
  };

  const getPostById = (id) => {
    return posts.find(post => post.id === id);
  };

  const getPublishedPosts = () => {
    return posts.filter(post => post.status === 'published').sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  };

  const value = {
    posts,
    loading,
    createPost,
    updatePost,
    deletePost,
    getPostBySlug,
    getPostById,
    getPublishedPosts
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};