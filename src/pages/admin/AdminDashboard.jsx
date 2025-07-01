import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../components/common/SafeIcon';
import { useAuth } from '../../contexts/AuthContext';
import { useLead } from '../../contexts/LeadContext';
import { useBlog } from '../../contexts/BlogContext';

const {
  FiUsers,
  FiFileText,
  FiTrendingUp,
  FiCalendar,
  FiMail,
  FiPhone,
  FiEye,
  FiEdit,
  FiLogOut,
  FiPlus,
  FiBarChart
} = FiIcons;

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const { leads, getLeadStats } = useLead();
  const { posts } = useBlog();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/silahub-admin-login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const leadStats = getLeadStats();
  const recentLeads = leads.slice(0, 5);
  const recentPosts = posts.slice(0, 5);

  const stats = [
    {
      title: 'Total Leads',
      value: leadStats.total,
      icon: FiUsers,
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    {
      title: 'New Leads',
      value: leadStats.new,
      icon: FiTrendingUp,
      color: 'text-green-600',
      bg: 'bg-green-100'
    },
    {
      title: 'Blog Posts',
      value: posts.length,
      icon: FiFileText,
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    {
      title: 'Qualified Leads',
      value: leadStats.qualified,
      icon: FiBarChart,
      color: 'text-orange-600',
      bg: 'bg-orange-100'
    }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.username}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/admin/blog-editor"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                <SafeIcon icon={FiPlus} className="w-4 h-4 inline mr-2" />
                New Post
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center">
                <div className={`${stat.bg} p-3 rounded-lg`}>
                  <SafeIcon icon={stat.icon} className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Leads */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Leads</h2>
                <Link
                  to="/admin/leads"
                  className="text-primary hover:text-accent text-sm font-medium"
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="p-6">
              {recentLeads.length > 0 ? (
                <div className="space-y-4">
                  {recentLeads.map((lead) => (
                    <div key={lead.id} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <SafeIcon icon={FiUsers} className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {lead.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">{lead.business}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`status-${lead.status}`}>
                          {lead.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No leads yet</p>
              )}
            </div>
          </motion.div>

          {/* Recent Blog Posts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Posts</h2>
                <Link
                  to="/admin/blog-editor"
                  className="text-primary hover:text-accent text-sm font-medium"
                >
                  New Post
                </Link>
              </div>
            </div>
            <div className="p-6">
              {recentPosts.length > 0 ? (
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <SafeIcon icon={FiFileText} className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {post.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/admin/blog-editor/${post.id}`}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <SafeIcon icon={FiEdit} className="w-4 h-4" />
                        </Link>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <SafeIcon icon={FiEye} className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No posts yet</p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/admin/leads"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <SafeIcon icon={FiUsers} className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Manage Leads</h3>
                  <p className="text-sm text-gray-500">View and manage all leads</p>
                </div>
              </div>
            </Link>

            <Link
              to="/admin/blog-editor"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <SafeIcon icon={FiFileText} className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Create Post</h3>
                  <p className="text-sm text-gray-500">Write a new blog post</p>
                </div>
              </div>
            </Link>

            <a
              href="/"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <SafeIcon icon={FiEye} className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">View Website</h3>
                  <p className="text-sm text-gray-500">Go to the main website</p>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;