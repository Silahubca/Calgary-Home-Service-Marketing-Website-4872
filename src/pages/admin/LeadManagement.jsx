import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../components/common/SafeIcon';
import { useAuth } from '../../contexts/AuthContext';
import { useLead } from '../../contexts/LeadContext';

const {
  FiArrowLeft,
  FiSearch,
  FiFilter,
  FiMail,
  FiPhone,
  FiCalendar,
  FiMessageSquare,
  FiEdit,
  FiTrash2,
  FiDownload
} = FiIcons;

const LeadManagement = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { leads, updateLead, deleteLead, addNote } = useLead();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedLead, setSelectedLead] = useState(null);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/silahub-admin-login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  // Filter leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.business.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (leadId, newStatus) => {
    updateLead(leadId, { status: newStatus });
  };

  const handleAddNote = () => {
    if (selectedLead && noteText.trim()) {
      addNote(selectedLead.id, noteText.trim());
      setNoteText('');
      setShowNoteModal(false);
      // Update selectedLead to show new note
      const updatedLead = leads.find(l => l.id === selectedLead.id);
      setSelectedLead(updatedLead);
    }
  };

  const exportLeads = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Business', 'Source', 'Status', 'Created Date'],
      ...filteredLeads.map(lead => [
        lead.name,
        lead.email,
        lead.phone,
        lead.business,
        lead.source,
        lead.status,
        new Date(lead.createdAt).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leads.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

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
                <h1 className="text-2xl font-bold text-gray-900">Lead Management</h1>
                <p className="text-gray-600">{filteredLeads.length} leads found</p>
              </div>
            </div>
            <button
              onClick={exportLeads}
              className="btn-primary"
            >
              <SafeIcon icon={FiDownload} className="w-4 h-4 inline mr-2" />
              Export CSV
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="sm:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leads List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Leads</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <motion.div
                      key={lead.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`p-6 cursor-pointer hover:bg-gray-50 ${
                        selectedLead?.id === lead.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      }`}
                      onClick={() => setSelectedLead(lead)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-sm font-medium text-gray-900">{lead.name}</h3>
                            <span className={`status-${lead.status}`}>
                              {lead.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{lead.business}</p>
                          <p className="text-sm text-gray-500">{lead.source}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="p-12 text-center text-gray-500">
                    No leads found
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Lead Details */}
          <div className="lg:col-span-1">
            {selectedLead ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-lg shadow-sm"
              >
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Lead Details</h2>
                </div>
                <div className="p-6 space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <SafeIcon icon={FiMail} className="w-4 h-4 text-gray-400" />
                        <a href={`mailto:${selectedLead.email}`} className="text-sm text-blue-600 hover:text-blue-800">
                          {selectedLead.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <SafeIcon icon={FiPhone} className="w-4 h-4 text-gray-400" />
                        <a href={`tel:${selectedLead.phone}`} className="text-sm text-blue-600 hover:text-blue-800">
                          {selectedLead.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <SafeIcon icon={FiCalendar} className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {new Date(selectedLead.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status Update */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      value={selectedLead.status}
                      onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>

                  {/* Message */}
                  {selectedLead.message && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-2">Message</h3>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                        {selectedLead.message}
                      </p>
                    </div>
                  )}

                  {/* Notes */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-medium text-gray-900">Notes</h3>
                      <button
                        onClick={() => setShowNoteModal(true)}
                        className="text-sm text-primary hover:text-accent"
                      >
                        Add Note
                      </button>
                    </div>
                    {selectedLead.notes && selectedLead.notes.length > 0 ? (
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {selectedLead.notes.map((note) => (
                          <div key={note.id} className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-600">{note.text}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(note.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No notes yet</p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => deleteLead(selectedLead.id)}
                      className="flex-1 px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50"
                    >
                      <SafeIcon icon={FiTrash2} className="w-4 h-4 inline mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center text-gray-500">
                Select a lead to view details
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Note Modal */}
      {showNoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Note</h3>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Enter your note..."
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => setShowNoteModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddNote}
                className="flex-1 btn-primary"
              >
                Add Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadManagement;