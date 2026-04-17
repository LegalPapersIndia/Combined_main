# 🚀 Backend & Admin Panel Setup Guide

## Overview

Your system now has:
- ✅ **MongoDB Integration** - All form data saved to database
- ✅ **Unified Admin Panel** - Single dashboard for all websites (Food, GST, IEC)
- ✅ **JWT Authentication** - Secure admin login
- ✅ **CRM Integration** - Data still goes to CRM parallel
- ✅ **Payment Flow** - Data flows to payment after submission

---

## 📋 Backend Setup

### Step 1: Install Dependencies

```bash
cd Backend/
npm install
```

### Step 2: Configure Environment

Edit `Backend/.env` file with your settings:

```env
# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/company_leads

# JWT Secret (use strong secret in production)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Port
PORT=5000

# Admin Email & Password (for init)
ADMIN_EMAIL=admin@company.com
ADMIN_PASSWORD=admin123
```

**MongoDB Setup Options:**
- **Local MongoDB**: Install from https://www.mongodb.com/try/download/community
- **MongoDB Atlas** (Cloud): https://www.mongodb.com/cloud/atlas
  - Replace MONGO_URI with: `mongodb+srv://username:password@cluster.mongodb.net/company_leads`

### Step 3: Initialize Admin User

```bash
npm run init-admin
```

This creates a default admin user in MongoDB:
- Email: `admin@company.com`
- Password: `admin123`

> ⚠️ **IMPORTANT**: Change this password after first login in production!

### Step 4: Start Backend Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

Expected output:
```
✅ MongoDB Connected
🚀 Server running on port 5000
📍 API: http://localhost:5000
🔗 Health Check: http://localhost:5000/health
```

---

## 🎨 Frontend Setup

### Step 1: Set Environment Variables

Edit `Frontend/.env` or `Frontend/.env.local`:

```env
VITE_API_URL=http://localhost:5000
```

### Step 2: Start Frontend

```bash
cd Frontend/
npm run dev
```

---

## 🔐 Admin Panel Usage

### Login

Navigate to: `http://localhost:5173/admin-panel-login`

Default credentials:
- Email: `admin@company.com`
- Password: `admin123`

### Features

**Dashboard:**
- View statistics (Total Leads, Pending, Completed)
- Service breakdown by type

**Lead Management:**
- Search leads by name, email, mobile, company
- Filter by status (Pending, In Progress, Completed, Rejected)
- Filter by service (FSSAI, GST, IEC)
- Change application status
- Update payment status
- Add admin notes
- Delete leads

**Export:**
- Export leads to Excel spreadsheet

---

## 📊 API Endpoints

### Leads API

#### Save Lead (Public)
```
POST /api/leads/submit
Content-Type: application/json

Body: {
  application_type: "Registration",
  applicant_name: "John Doe",
  email: "john@example.com",
  mobile: "9876543210",
  serviceCategory: "fssaiReg",
  ...
}

Response: { success: true, leadId: "..." }
```

### Admin API (Protected - Requires JWT Token)

#### Login
```
POST /api/admin/login
Content-Type: application/json

Body: {
  email: "admin@company.com",
  password: "admin123"
}

Response: {
  success: true,
  token: "eyJhbGc...",
  admin: { id, email, name, role }
}
```

#### Get All Leads
```
GET /api/admin/leads?status=pending&serviceCategory=fssaiReg&page=1&limit=20
Authorization: Bearer {token}

Response: {
  success: true,
  data: [ { _id, name, email, ... } ],
  pagination: { total, page, pages }
}
```

#### Get Single Lead
```
GET /api/admin/leads/{leadId}
Authorization: Bearer {token}
```

#### Update Lead
```
PUT /api/admin/leads/{leadId}
Authorization: Bearer {token}
Content-Type: application/json

Body: {
  applicationStatus: "in-progress",
  paymentStatus: "completed",
  adminNotes: "Processing..."
}
```

#### Delete Lead
```
DELETE /api/admin/leads/{leadId}
Authorization: Bearer {token}
```

#### Dashboard Stats
```
GET /api/admin/stats
Authorization: Bearer {token}

Response: {
  success: true,
  stats: {
    totalLeads: 150,
    pendingLeads: 45,
    completedLeads: 95,
    byService: [ { _id: "fssaiReg", count: 100 } ]
  }
}
```

---

## 🔄 Data Flow

### Form Submission Flow:

```
1. User fills form (Food/GST/IEC)
   ↓
2. Form validates & submits
   ↓
3. Parallel Actions:
   ├→ Save to YOUR MongoDB (/api/leads/submit)
   ├→ Send to CRM API (non-blocking)
   └→ Continue to next step
   ↓
4. Redirect to Payment Page
   └→ Data available in payment component
```

### Admin Panel Flow:

```
1. Admin visits /admin-panel-login
   ↓
2. Enter email & password
   ↓
3. Backend validates & returns JWT token
   ↓
4. Token stored in localStorage
   ↓
5. Admin Panel fetches leads with token
   ↓
6. View, Edit, Delete, Export leads
```

---

## 📁 Directory Structure

```
Backend/
├── server.js              # Main server
├── package.json           # Dependencies
├── .env                   # Configuration
├── init-admin.js          # Admin initialization script
├── middleware/
│   └── authMiddleware.js  # JWT verification
├── models/
│   ├── Lead.js            # Lead schema
│   └── Admin.js           # Admin schema
└── routes/
    ├── leadRoutes.js      # Lead endpoints
    └── adminRoutes.js     # Admin endpoints

Frontend/
├── src/
│   ├── components/
│   │   └── AdminPanel/
│   │       ├── UnifiedAdminLogin.jsx
│   │       └── UnifiedAdminPanel.jsx
│   └── Food|GST|IEC/
│       └── components/Form/RegistrationForm.jsx
```

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
❌ MongoDB Connection Error: connect ECONNREFUSED
```
**Solution:**
- Ensure MongoDB is running: `mongod`
- Check MONGO_URI in .env
- Verify database name exists

### JWT Token Expired
```
❌ Invalid token
```
**Solution:**
- Clear localStorage and re-login
- Check JWT_SECRET is same in backend and frontend

### CORS Error
```
❌ Access to XMLHttpRequest blocked by CORS
```
**Solution:**
- Ensure backend CORS is configured
- Check API_URL in frontend .env
- Both should be on same port or CORS enabled

### Admin Init Failed
```
❌ Admin already exists
```
**Solution:**
- This is fine - admin is already in database
- Just login with credentials

---

## 🔒 Security Recommendations

### For Production:

1. **Change Admin Password**
   - Login and update credentials
   - Never use default password

2. **Update JWT_SECRET**
   ```env
   JWT_SECRET=generate-random-secret-here
   ```

3. **Use HTTPS**
   - Configure SSL certificates
   - Update CORS to only allow your domain

4. **Environment Variables**
   - Never commit .env to git
   - Use environment variable services

5. **MongoDB Security**
   - Enable authentication
   - Use MongoDB Atlas VPC
   - Restrict IP whitelist

6. **Rate Limiting**
   - Add rate limiter middleware
   - Protect login endpoint

---

## 📞 Support

If you encounter any issues:

1. Check backend logs in terminal
2. Check browser console for errors
3. Verify all environment variables
4. Ensure MongoDB is connected
5. Check network tab in browser DevTools

---

## 🎯 Quick Start Checklist

- [ ] Install backend dependencies
- [ ] Setup MongoDB & get connection string
- [ ] Configure .env file
- [ ] Run `npm run init-admin`
- [ ] Start backend with `npm run dev`
- [ ] Configure Frontend .env with API_URL
- [ ] Start frontend with `npm run dev`
- [ ] Login to admin panel
- [ ] Test form submission
- [ ] Verify data in admin panel
- [ ] Test payment flow

---

**All Set! Your unified admin panel is ready! 🎉**
