import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default function UnifiedAdminPanel() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterService, setFilterService] = useState('all');
  const [selectedLead, setSelectedLead] = useState(null);
  const [stats, setStats] = useState(null);
  const [authError, setAuthError] = useState('');

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const getLeadValue = (lead, value, rawKeys = []) => {
    if (value) return value;
    if (!lead.rawPayload) return undefined;
    for (const key of rawKeys) {
      if (lead.rawPayload[key]) return lead.rawPayload[key];
    }
    return undefined;
  };

  // Get token from localStorage
  const getToken = () => localStorage.getItem('adminToken');

  const fetchStats = async (token) => {
    try {
      const response = await fetch(`${API_URL}/api/admin/stats`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to fetch stats');
      const data = await response.json();
      setStats(data.stats);
    } catch (error) {
      console.error('Fetch Stats Error:', error);
    }
  };

  const fetchLeads = async (token) => {
    try {
      let url = `${API_URL}/api/admin/leads?limit=100`;
      if (filterStatus !== 'all') url += `&status=${filterStatus}`;
      if (filterService !== 'all') url += `&serviceCategory=${filterService}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        setAuthError('Session expired. Please login again.');
        navigate('/admin-login');
        return;
      }

      if (!response.ok) throw new Error(`Server Error: ${response.status}`);

      const data = await response.json();
      setLeads(Array.isArray(data.data) ? data.data : []);
    } catch (error) {
      console.error('Fetch Leads Error:', error);
      setAuthError('Unable to fetch leads. Please check backend.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = getToken();

    if (!token) {
      navigate('/admin-login');
      return;
    }

    fetchLeads(token);
    fetchStats(token);
  }, [filterStatus, filterService, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  const handleRefresh = () => {
    setLoading(true);
    const token = getToken();
    if (token) {
      fetchLeads(token);
      fetchStats(token);
    }
  };

  const handleUpdateLead = async (leadId, updates) => {
    try {
      const token = getToken();
      const response = await fetch(`${API_URL}/api/admin/leads/${leadId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      if (response.ok) {
        setSelectedLead(null);
        handleRefresh();
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('Failed to update lead');
    }
  };

  const handleDeleteLead = async (leadId) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;

    try {
      const token = getToken();
      const response = await fetch(`${API_URL}/api/admin/leads/${leadId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        handleRefresh();
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete lead');
    }
  };

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    const searchLower = searchTerm.toLowerCase().trim();

    return leads.filter((lead) => {
      const name = (lead.applicantName || lead.fullName || getLeadValue(lead, null, ['txtBusinesEntity', 'business_entity', 'entity_name', 'companyName', 'businessName']) || '').toString().toLowerCase();
      const email = (lead.email || getLeadValue(lead, null, ['txtemail', 'email', 'emailAddress']) || '').toString().toLowerCase();
      const mobile = (lead.mobile || getLeadValue(lead, null, ['txtphone', 'contact_no', 'phone']) || '').toString();
      const company = (lead.companyName || lead.businessName || getLeadValue(lead, null, ['txtBusinesEntity', 'business_entity', 'entity_name']) || '').toString().toLowerCase();

      const matchesSearch =
        name.includes(searchLower) ||
        email.includes(searchLower) ||
        mobile.includes(searchTerm) ||
        company.includes(searchLower);

      return matchesSearch;
    });
  }, [leads, searchTerm]);

  const exportToExcel = () => {
    const data = filteredLeads.map(lead => ({
      'Service': lead.serviceCategory || getLeadValue(lead, null, ['serviceCategory', 'service_category']) || 'Unknown',
      'Name': lead.applicantName || lead.fullName || getLeadValue(lead, null, ['txtBusinesEntity', 'business_entity', 'entity_name', 'companyName', 'businessName']) || '-',
      'Email': lead.email || getLeadValue(lead, null, ['txtemail', 'email', 'emailAddress']) || '-',
      'Mobile': lead.mobile || getLeadValue(lead, null, ['txtphone', 'contact_no', 'phone']) || '-',
      'Company': lead.companyName || lead.businessName || getLeadValue(lead, null, ['txtBusinesEntity', 'business_entity', 'entity_name']) || '-',
      'Status': lead.applicationStatus,
      'Payment': lead.paymentStatus,
      'Date': new Date(lead.createdAt).toLocaleDateString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Leads');
    saveAs(
      new Blob([XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' })]),
      `leads-${Date.now()}.xlsx`
    );
  };

  if (loading && leads.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-blue-100 mt-1">Unified Lead Management System</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-medium transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats */}
      {stats && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                <p className="text-gray-600 text-sm font-medium">Total Leads</p>
                <p className="text-3xl font-bold text-blue-900">{stats.totalLeads || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border border-yellow-200">
                <p className="text-gray-600 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold text-yellow-900">{stats.pendingLeads || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                <p className="text-gray-600 text-sm font-medium">Completed</p>
                <p className="text-3xl font-bold text-green-900">{stats.completedLeads || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                <p className="text-gray-600 text-sm font-medium">Services</p>
                <p className="text-3xl font-bold text-purple-900">{stats.byService?.length || 0}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {authError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {authError}
          </div>
        )}

        {/* Filters & Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <input
              type="text"
              placeholder="Search by name, email, mobile, company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="rejected">Rejected</option>
            </select>
            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Services</option>
              <option value="fssaiReg">FSSAI Registration</option>
              <option value="gstReg">GST Registration</option>
              <option value="iecReg">IEC Registration</option>
            </select>
            <div className="flex gap-2">
              <button
                onClick={handleRefresh}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                🔄 Refresh
              </button>
              <button
                onClick={exportToExcel}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
              >
                📊 Export
              </button>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {filteredLeads.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p className="text-lg font-medium">No leads found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Mobile</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Service</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Payment</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead._id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {lead.applicantName || lead.fullName || getLeadValue(lead, null, ['txtBusinesEntity', 'business_entity', 'entity_name', 'companyName', 'businessName']) || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{lead.email || getLeadValue(lead, null, ['txtemail', 'email', 'emailAddress']) || '-'}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{lead.mobile || getLeadValue(lead, null, ['txtphone', 'contact_no', 'phone']) || '-'}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          {lead.serviceCategory || getLeadValue(lead, null, ['serviceCategory', 'service_category']) || 'Unknown'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <select
                          value={lead.applicationStatus}
                          onChange={(e) =>
                            handleUpdateLead(lead._id, { applicationStatus: e.target.value })
                          }
                          className="px-2 py-1 border border-gray-300 rounded text-sm"
                        >
                          <option value="pending">Pending</option>
                          <option value="in-progress">In Progress</option>
                          <option value="completed">Completed</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <select
                          value={lead.paymentStatus || 'pending'}
                          onChange={(e) =>
                            handleUpdateLead(lead._id, { paymentStatus: e.target.value })
                          }
                          className="px-2 py-1 border border-gray-300 rounded text-sm"
                        >
                          <option value="pending">Pending</option>
                          <option value="completed">Completed</option>
                          <option value="failed">Failed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedLead(lead)}
                            className="text-blue-600 hover:text-blue-900 font-medium"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleDeleteLead(lead._id)}
                            className="text-red-600 hover:text-red-900 font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Lead Details</h2>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-2xl font-bold hover:text-gray-200"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                  <p className="text-gray-900">
                    {selectedLead.applicantName || selectedLead.fullName || getLeadValue(selectedLead, null, ['txtBusinesEntity', 'business_entity', 'entity_name', 'companyName', 'businessName']) || '-'}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <p className="text-gray-900">{selectedLead.email || getLeadValue(selectedLead, null, ['txtemail', 'email', 'emailAddress']) || '-'}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile</label>
                  <p className="text-gray-900">{selectedLead.mobile || getLeadValue(selectedLead, null, ['txtphone', 'contact_no', 'phone']) || '-'}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Service</label>
                  <p className="text-gray-900">{selectedLead.serviceCategory || getLeadValue(selectedLead, null, ['serviceCategory', 'service_category']) || '-'}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Company</label>
                  <p className="text-gray-900">
                    {selectedLead.companyName || selectedLead.businessName || getLeadValue(selectedLead, null, ['txtBusinesEntity', 'business_entity', 'entity_name']) || '-'}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Date Submitted</label>
                  <p className="text-gray-900">{new Date(selectedLead.createdAt).toLocaleString()}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Admin Notes</label>
                <textarea
                  defaultValue={selectedLead.adminNotes || ''}
                  onChange={(e) => setSelectedLead({ ...selectedLead, adminNotes: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-gray-700">Raw Payload</p>
                  <span className="text-xs text-gray-500">Fallback data from submission</span>
                </div>
                <div className="max-h-48 overflow-y-auto text-xs text-gray-700 bg-white p-3 rounded-lg border border-gray-200">
                  <pre className="whitespace-pre-wrap break-words">
{JSON.stringify(selectedLead.rawPayload || {}, null, 2)}
                  </pre>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    handleUpdateLead(selectedLead._id, { adminNotes: selectedLead.adminNotes });
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Save Notes
                </button>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
