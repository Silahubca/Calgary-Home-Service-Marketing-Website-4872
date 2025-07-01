import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../components/common/SafeIcon';
import { useAuth } from '../../contexts/AuthContext';
import { useBlog } from '../../contexts/BlogContext';

const { FiSave, FiEye, FiArrowLeft, FiImage, FiTag } = FiIcons;

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { createPost, updatePost, getPostById } = useBlog();

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    tags: '',
    metaDescription: '',
    metaKeywords: '',
    status: 'draft'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/silahub-admin-login');
      return;
    }

    if (id) {
      const post = getPostById(id);
      if (post) {
        setFormData({
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          featuredImage: post.featuredImage,
          tags: post.tags ? post.tags.join(', ') : '',
          metaDescription: post.metaDescription || '',
          metaKeywords: post.metaKeywords || '',
          status: post.status
        });
      }
    }
  }, [id, user, navigate, getPostById]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContentChange = (content) => {
    setFormData({
      ...formData,
      content
    });
  };

  const handleSave = async (status = 'draft') => {
    setIsSubmitting(true);
    setSaveSuccess(false);

    try {
      const postData = {
        ...formData,
        status,
        author: 'Silahub Team',
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        featuredImage: formData.featuredImage || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80'
      };

      if (id) {
        updatePost(id, postData);
      } else {
        createPost(postData);
      }

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);

      if (status === 'published') {
        setTimeout(() => navigate('/admin/dashboard'), 1500);
      }
    } catch (error) {
      console.error('Error saving post:', error);
    }

    setIsSubmitting(false);
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link'],
      ['clean']
    ],
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="text-gray-600 hover:text-gray-900"
              >
                <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {id ? 'Edit Post' : 'New Post'}
                </h1>
                <p className="text-gray-600">Create and manage blog content</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {saveSuccess && (
                <span className="text-green-600 text-sm font-medium">
                  Saved successfully!
                </span>
              )}
              <button
                onClick={() => handleSave('draft')}
                disabled={isSubmitting}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
              >
                <SafeIcon icon={FiSave} className="w-4 h-4 inline mr-2" />
                Save Draft
              </button>
              <button
                onClick={() => handleSave('published')}
                disabled={isSubmitting || !formData.title}
                className="btn-primary disabled:opacity-50"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter post title..."
                value={formData.title}
                onChange={handleInputChange}
                required
                className="form-input text-lg"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt *
              </label>
              <textarea
                name="excerpt"
                placeholder="Brief description of the post..."
                rows="3"
                value={formData.excerpt}
                onChange={handleInputChange}
                required
                className="form-textarea"
              />
            </div>

            {/* Featured Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <SafeIcon icon={FiImage} className="w-4 h-4 inline mr-1" />
                Featured Image URL
              </label>
              <input
                type="url"
                name="featuredImage"
                placeholder="https://images.unsplash.com/..."
                value={formData.featuredImage}
                onChange={handleInputChange}
                className="form-input"
              />
              {formData.featuredImage && (
                <img
                  src={formData.featuredImage}
                  alt="Featured"
                  className="mt-2 w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <ReactQuill
                theme="snow"
                value={formData.content}
                onChange={handleContentChange}
                modules={modules}
                style={{ minHeight: '300px' }}
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <SafeIcon icon={FiTag} className="w-4 h-4 inline mr-1" />
                Tags
              </label>
              <input
                type="text"
                name="tags"
                placeholder="SEO, Marketing, Calgary (comma separated)"
                value={formData.tags}
                onChange={handleInputChange}
                className="form-input"
              />
              <p className="text-sm text-gray-500 mt-1">
                Separate tags with commas
              </p>
            </div>

            {/* SEO Meta */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  name="metaDescription"
                  placeholder="SEO meta description..."
                  rows="3"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  className="form-textarea"
                  maxLength="160"
                />
                <p className="text-sm text-gray-500 mt-1">
                  {formData.metaDescription.length}/160 characters
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Keywords
                </label>
                <textarea
                  name="metaKeywords"
                  placeholder="SEO keywords..."
                  rows="3"
                  value={formData.metaKeywords}
                  onChange={handleInputChange}
                  className="form-textarea"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Comma separated keywords
                </p>
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogEditor;