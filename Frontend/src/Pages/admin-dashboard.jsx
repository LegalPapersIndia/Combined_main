import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

const API_URL = import.meta.env.VITE_API_BASE_URL;

useEffect(() => {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    window.location.href = "/admin-login";
    return;
  }

  fetch(`${API_URL}/api/admin/leads`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Unauthorized");
      return res.json();
    })
    .then((data) => {
      setLeads(data);
      setLoading(false);
    })
    .catch(() => {
      alert("Session expired. Please login again.");
      localStorage.removeItem("adminToken");
      window.location.href = "/admin-login";
    });
}, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin-login";
  };

  // ✅ EXPORT TO CSV
  const exportToExcel = () => {
    if (leads.length === 0) {
      alert("No data to export");
      return;
    }

    const headers = [
      "Name",
      "Mobile",
      "Email",
      "Company Name",
      "Company Type",
      "Business Type",
      "Investment",
      "Members",
      "State",
      "Address",
      "Date",
    ];

    const rows = leads.map((lead) => [
      lead.fullName,
      lead.mobile,
      lead.email,
      lead.companyName,
      lead.applicationType,
      lead.natureOfBusiness,
      lead.investment,
      lead.members,
      lead.state,
      lead.address1,
      new Date(lead.createdAt).toLocaleString(),
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows]
        .map((e) => e.map((val) => `"${val || ""}"`).join(","))
        .join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = `leads_${new Date().toISOString().slice(0,10)}.csv`;
    link.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-600">
        Loading Leads...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl font-bold text-slate-900">
          Admin Dashboard
        </h1>

        <div className="flex gap-4">
          <button
            onClick={exportToExcel}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2 font-medium"
          >
            📥 Export Leads
          </button>

          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2 font-medium"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-500">Total Leads</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">{leads.length}</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-500">Today</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            {
              leads.filter(l =>
                new Date(l.createdAt).toDateString() === new Date().toDateString()
              ).length
            }
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-500">This Month</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            {
              leads.filter(l => {
                const d = new Date(l.createdAt);
                const now = new Date();
                return d.getMonth() === now.getMonth() &&
                       d.getFullYear() === now.getFullYear();
              }).length
            }
          </h2>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="bg-slate-100 text-slate-600 border-b border-slate-200">
              <tr>
                <th className="p-4 text-left font-semibold">Name</th>
                <th className="p-4 text-left font-semibold">Mobile</th>
                <th className="p-4 text-left font-semibold">Email</th>
                <th className="p-4 text-left font-semibold">Company</th>
                <th className="p-4 text-left font-semibold">Type</th>
                <th className="p-4 text-left font-semibold">Business</th>
                <th className="p-4 text-left font-semibold">State</th>
                <th className="p-4 text-left font-semibold">Date</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {leads.map((lead, i) => (
                <tr
                  key={i}
                  className="hover:bg-slate-50 transition"
                >
                  <td className="p-4 font-medium text-slate-900">{lead.fullName}</td>
                  <td className="p-4 text-slate-700">{lead.mobile}</td>
                  <td className="p-4 text-slate-700">{lead.email}</td>
                  <td className="p-4 text-slate-700">{lead.companyName}</td>
                  <td className="p-4 text-blue-600 font-medium">
                    {lead.applicationType || "-"}
                  </td>
                  <td className="p-4 text-slate-700">
                    {lead.natureOfBusiness || "-"}
                  </td>
                  <td className="p-4 text-slate-700">{lead.state}</td>
                  <td className="p-4 text-slate-500">
                    {new Date(lead.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Empty State */}
      {leads.length === 0 && (
        <div className="text-center mt-16 text-slate-500">
          No leads found yet 🚫
        </div>
      )}
    </div>
  );
}