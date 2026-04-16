import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Enter email & password");
      return;
    }

    try {
      setLoading(true);

const API_URL = import.meta.env.VITE_API_BASE_URL;

const res = await fetch(`${API_URL}/api/admin/login`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email, password }),
});

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("adminToken", data.token);
        navigate("/admin");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      alert("Login failed. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center relative overflow-hidden">

      {/* Light Background Glows */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
            🔐
          </div>
          <h2 className="text-3xl font-bold text-slate-900">
            Admin Login
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Secure access to IncorpFast Dashboard
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-6">

          <div>
            <label className="text-slate-600 text-sm font-medium block mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3.5 rounded-2xl border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition text-slate-900 placeholder-slate-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-slate-600 text-sm font-medium block mb-1.5">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3.5 rounded-2xl border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition text-slate-900 placeholder-slate-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-8 py-3.5 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white transition-all shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login →"}
        </button>

        {/* Footer Note */}
        <p className="text-center text-slate-400 text-xs mt-8">
          Protected Admin Access • IncorpFast
        </p>

      </div>
    </div>
  );
}