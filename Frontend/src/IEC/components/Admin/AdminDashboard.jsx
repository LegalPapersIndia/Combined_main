import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);           // All leads
  const [filteredLeads, setFilteredLeads] = useState([]); // For display only
  const [searchTerm, setSearchTerm] = useState('');
  
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) return navigate('/admin');
    
    fetchLeads();
  }, []);

  // Filter leads for display
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredLeads(leads);
      return;
    }

    const term = searchTerm.toLowerCase().trim();

    const filtered = leads.filter((l) => {
      const businessName = (l.business_entity || l.rawPayload?.txtBusinesEntity || '').toLowerCase();
      const pan = (l.pan_no || l.rawPayload?.txtPanNo || '').toLowerCase();
      const mobile = (l.contact_no || l.rawPayload?.txtphone || '').toLowerCase();
      const email = (l.email || l.rawPayload?.txtemail || '').toLowerCase();
      const state = (l.state || l.rawPayload?.txtpstate || '').toLowerCase();

      return (
        businessName.includes(term) ||
        pan.includes(term) ||
        mobile.includes(term) ||
        email.includes(term) ||
        state.includes(term)
      );
    });

    setFilteredLeads(filtered);
  }, [leads, searchTerm]);

  const fetchLeads = async () => {
    try {
      const credentials = btoa(`${import.meta.env.VITE_ADMIN_USERNAME}:${import.meta.env.VITE_ADMIN_PASSWORD}`);

      const res = await fetch(`${API_URL}/api/iec-leads`, {
        headers: { Authorization: `Basic ${credentials}` }
      });

      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setLeads(data);
      setFilteredLeads(data);
    } catch (err) {
      console.error(err);
      alert('Error fetching leads');
    }
  };

  const exportToExcel = () => {
    // Export ALL leads (original behavior)
    const worksheet = XLSX.utils.json_to_sheet(leads);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'IEC_Leads');
    XLSX.writeFile(workbook, `IEC_Leads_${new Date().toISOString().slice(0,10)}.xlsx`);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">IEC Leads Dashboard</h1>
          
          <div className="flex gap-3">
            <button 
              onClick={exportToExcel} 
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              📤 Export to Excel ({leads.length})
            </button>
            <button 
              onClick={() => { sessionStorage.clear(); navigate('/admin'); }} 
              className="bg-red-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search by Business Name, PAN, Mobile, Email or State..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-gray-700"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </div>
            
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
          
          {searchTerm && (
            <p className="text-sm text-gray-500 mt-2">
              Showing {filteredLeads.length} of {leads.length} leads
            </p>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800 text-white sticky top-0">
              <tr>
                <th className="p-4 text-left">Business Name</th>
                <th className="p-4 text-left">PAN</th>
                <th className="p-4 text-left">Mobile</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">State</th>
                <th className="p-4 text-left">Date & Time</th>   {/* Changed */}
              </tr>
            </thead>
            <tbody>
              {filteredLeads.length > 0 ? (
                filteredLeads.map((l) => (
                  <tr key={l._id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-4 font-medium">
                      {l.business_entity || l.rawPayload?.txtBusinesEntity || "-"}
                    </td>
                    <td className="p-4">{l.pan_no || l.rawPayload?.txtPanNo || "-"}</td>
                    <td className="p-4">{l.contact_no || l.rawPayload?.txtphone || "-"}</td>
                    <td className="p-4">{l.email || l.rawPayload?.txtemail || "-"}</td>
                    <td className="p-4">{l.state || l.rawPayload?.txtpstate || "-"}</td>
                    <td className="p-4 text-sm">
                      {new Date(l.createdAt).toLocaleString('en-IN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      })}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-12 text-center text-gray-500">
                    No leads found for your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}