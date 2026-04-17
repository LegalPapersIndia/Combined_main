# 🎯 Admin Panel & Backend - Quick Start

## ⚡ 5-Minute Quick Start

### 1️⃣ Backend Setup (Terminal 1)

```bash
cd Backend/
npm install
npm run init-admin
npm run dev
```

✅ You should see: "✅ MongoDB Connected" & "🚀 Server running on port 5000"

### 2️⃣ Frontend Setup (Terminal 2)

```bash
cd Frontend/
npm run dev
```

### 3️⃣ Access Admin Panel

- Go to: `http://localhost:5173/admin-panel-login`
- Email: `admin@company.com`
- Password: `admin123`

---

## 📝 What Was Built

### ✅ Backend Features
- MongoDB integration for all form types
- JWT-based admin authentication
- Admin CRUD operations
- Statistics & analytics
- Data exports to Excel
- CRM integration maintained

### ✅ Frontend Features
- Unified admin login page
- Unified admin dashboard
- Real-time lead management
- Search, filter, sort capabilities
- Status & payment tracking
- Excel export functionality

### ✅ Data Flow
```
Form Submit → MongoDB + CRM (parallel) → Payment Page → Admin View
```

---

## 🔑 Key Credentials

| Item | Value |
|------|-------|
| Admin Email | admin@company.com |
| Admin Password | admin123 |
| API Base URL | http://localhost:5000 |
| Admin Panel | /admin-panel-login |

⚠️ **Change password in production!**

---

## 📚 Important Files

| File | Purpose |
|------|---------|
| `Backend/.env` | Backend configuration |
| `Backend/init-admin.js` | Create admin user |
| `Backend/models/Lead.js` | Lead data schema |
| `Backend/models/Admin.js` | Admin user schema |
| `Frontend/src/components/AdminPanel/` | Admin UI components |

---

## 🔗 API Endpoints

### Public
- `POST /api/leads/submit` → Save form data

### Protected (Need JWT Token)
- `POST /api/admin/login` → Get token
- `GET /api/admin/leads` → View leads
- `GET /api/admin/stats` → Dashboard data
- `PUT /api/admin/leads/:id` → Update lead
- `DELETE /api/admin/leads/:id` → Delete lead

---

## ❌ Common Issues & Fixes

### "MongoDB Connection Error"
```bash
# Install MongoDB locally OR
# Get connection string from MongoDB Atlas
# Update MONGO_URI in .env
```

### "Cannot find module" error
```bash
npm install
```

### Admin login not working
```bash
npm run init-admin
# Make sure MongoDB is running
```

### "CORS error" in browser
- Check `VITE_API_URL` in Frontend/.env
- Must match backend URL (http://localhost:5000)

---

## 🎯 Next Steps

1. ✅ Get forms saving to MongoDB
2. ✅ Test admin login
3. ✅ View leads in admin panel
4. ✅ Test payment flow
5. Test each website form (Food, GST, IEC)
6. Export lead data to verify
7. Deploy to production

---

## 📱 Test with Sample Data

### Food Form Test
1. Go to: `http://localhost:5173/food`
2. Fill and submit form
3. Check admin panel for the new lead

### GST Form Test
1. Go to: `http://localhost:5173/gst`
2. Fill and submit form
3. Lead appears in admin panel

### IEC Form Test
1. Go to: `http://localhost:5173/iec`
2. Fill and submit form
3. Lead appears with "iecReg" service type

---

## 📊 Admin Panel Sections

**Dashboard:**
- Total leads count
- Pending leads
- Completed leads
- Breakdown by service type

**Leads Table:**
- Name, Email, Mobile, Service
- Filter by status & service
- Search functionality
- Quick actions (View, Delete)

**Single Lead View:**
- Full details
- Admin notes editor
- Save changes button

**Bulk Actions:**
- Export to Excel
- Refresh data
- Multi-select support

---

## 🚀 Production Deployment

1. Update `.env` with production values
2. Change admin password
3. Use strong JWT_SECRET
4. Use MongoDB Atlas or managed database
5. Enable HTTPS
6. Configure CORS properly
7. Add rate limiting
8. Setup monitoring & logging

---

## 📞 Support Files

- `BACKEND_SETUP_GUIDE.md` - Detailed setup guide
- `Backend/.env.example` - Environment template
- `Frontend/.env.example` - Frontend template

---

**All Set! 🎉 Your unified admin system is ready to use!**

For detailed instructions, see `BACKEND_SETUP_GUIDE.md`
