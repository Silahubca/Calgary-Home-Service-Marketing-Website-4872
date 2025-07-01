import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LeadContext = createContext();

export const useLead = () => {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error('useLead must be used within a LeadProvider');
  }
  return context;
};

export const LeadProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load leads from localStorage on component mount
    const savedLeads = localStorage.getItem('silahub_leads');
    if (savedLeads) {
      setLeads(JSON.parse(savedLeads));
    }
  }, []);

  const saveLeads = (newLeads) => {
    setLeads(newLeads);
    localStorage.setItem('silahub_leads', JSON.stringify(newLeads));
  };

  const createLead = async (leadData) => {
    const newLead = {
      ...leadData,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      status: 'new',
      notes: []
    };
    
    const updatedLeads = [newLead, ...leads];
    saveLeads(updatedLeads);
    
    // Send email notification (in a real app, this would be handled by a backend)
    await sendEmailNotification(newLead);
    
    return newLead;
  };

  const updateLead = (id, updates) => {
    const updatedLeads = leads.map(lead => 
      lead.id === id 
        ? { ...lead, ...updates, updatedAt: new Date().toISOString() }
        : lead
    );
    saveLeads(updatedLeads);
    return updatedLeads.find(lead => lead.id === id);
  };

  const deleteLead = (id) => {
    const updatedLeads = leads.filter(lead => lead.id !== id);
    saveLeads(updatedLeads);
  };

  const addNote = (leadId, note) => {
    const updatedLeads = leads.map(lead => 
      lead.id === leadId 
        ? { 
            ...lead, 
            notes: [...(lead.notes || []), {
              id: uuidv4(),
              text: note,
              createdAt: new Date().toISOString()
            }],
            updatedAt: new Date().toISOString()
          }
        : lead
    );
    saveLeads(updatedLeads);
  };

  const sendEmailNotification = async (lead) => {
    // In a real application, this would send an actual email
    // For demo purposes, we'll just log it
    console.log('Email notification sent for new lead:', lead);
    
    // You would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Nodemailer with SMTP
    
    return Promise.resolve();
  };

  const getLeadsByStatus = (status) => {
    return leads.filter(lead => lead.status === status);
  };

  const getLeadStats = () => {
    const total = leads.length;
    const newLeads = leads.filter(lead => lead.status === 'new').length;
    const contacted = leads.filter(lead => lead.status === 'contacted').length;
    const qualified = leads.filter(lead => lead.status === 'qualified').length;
    const closed = leads.filter(lead => lead.status === 'closed').length;
    
    return { total, new: newLeads, contacted, qualified, closed };
  };

  const value = {
    leads,
    loading,
    createLead,
    updateLead,
    deleteLead,
    addNote,
    getLeadsByStatus,
    getLeadStats
  };

  return (
    <LeadContext.Provider value={value}>
      {children}
    </LeadContext.Provider>
  );
};