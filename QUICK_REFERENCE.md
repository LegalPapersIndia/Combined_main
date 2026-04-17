# 🎯 Quick Reference Card

## Essential Commands

### Backend Setup
```bash
cd Backend/
npm install
npm run init-admin
npm run dev
```

### Frontend Setup  
```bash
cd Frontend/
npm run dev
```

### MongoDB
```bash
mongosh mongodb://localhost:27017/company_leads
db.leads.find()
db.ping()
```

---

## Key URLs

| URL | Purpose |
|-----|---------|
| http://localhost:5173 | Frontend home |
| http://localhost:5173/admin-panel-login | Admin login |
| http://localhost:5173/admin-panel | Admin dashboard |
| http://localhost:5173/food | Food form |
| http://localhost:5173/gst | GST form |
| http://localhost:5173/iec | IEC form |
| http://localhost:5000/health | Backend health |
| http://localhost:5000/api/admin/login | Admin login API |

---

## Default Credentials

| Field | Value |
|-------|-------|
| Email | admin@company.com |
| Password | admin123 |

⚠️ **Change in production!**

---

## API Endpoints

### Public
```
POST /api/leads/submit
GET  /health
```

### Protected (need JWT)
```
POST   /api/admin/login
GET    /api/admin/leads
GET    /api/admin/leads/:id
PUT    /api/admin/leads/:id
DELETE /api/admin/leads/:id
GET    /api/admin/stats
```

---

## Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb://localhost:27017/company_leads
JWT_SECRET=your-secret-key
PORT=5000
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

---

## File Locations

### Backend Files
- Config: `Backend/.env`
- Main: `Backend/server.js`
- Models: `Backend/models/`
- Routes: `Backend/routes/`
- Init: `Backend/init-admin.js`

### Frontend Files
- Components: `Frontend/src/components/AdminPanel/`
- Forms: `Frontend/src/Food/components/Form/`
- Config: `Frontend/.env`

---

## Important Commands

### Check if running
```bash
curl http://localhost:5000/health
curl http://localhost:5173
```

### Kill ports
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

### Database
```bash
# Connect
mongosh

# View data
use company_leads
db.leads.find().pretty()
db.leads.countDocuments()
```

---

## Troubleshooting Quick Fixes

1. **Something not working?**
   - Restart backend
   - Restart frontend
   - Clear browser cache

2. **MongoDB error?**
   - Check if mongod is running
   - Run: npm run init-admin

3. **Admin login fails?**
   - Check credentials: admin@company.com / admin123
   - Try re-login

4. **Form not saving?**
   - Check API_URL in frontend .env
   - Verify backend is running
   - Check browser console for errors

5. **CORS error?**
   - Verify API_URL is correct
   - Restart frontend

---

## Data Flow

```
Form → /api/leads/submit → MongoDB + CRM → Payment → Admin Panel
```

---

## Check List

Daily development:
- [ ] MongoDB running
- [ ] Backend running (npm run dev)
- [ ] Frontend running (npm run dev)
- [ ] Admin panel accessible
- [ ] Able to login

---

## Admin Panel Features

| Feature | How |
|---------|-----|
| View leads | Dashboard → Leads table |
| Search | Top search box |
| Filter | Status/Service dropdowns |
| Update status | Click dropdown in table |
| View details | Click "View" button |
| Add notes | View lead → Edit notes → Save |
| Export | Click "📊 Export" button |
| See stats | Top of dashboard |
| Logout | Top right corner |

---

## Forms to Test

1. **Food** (fssaiReg): /food
2. **GST** (gstReg): /gst
3. **IEC** (iecReg): /iec

All save to same database with different serviceCategory.

---

## Service Categories

| Form | Category | Endpoint |
|------|----------|----------|
| Food | fssaiReg | /food |
| GST | gstReg | /gst |
| IEC | iecReg | /iec |

---

## Ports

| Service | Port | Status |
|---------|------|--------|
| Frontend | 5173 | Default |
| Backend | 5000 | Default |
| MongoDB | 27017 | Default |

---

## Documentation Files

| File | Purpose |
|------|---------|
| QUICK_START.md | 5-min setup |
| BACKEND_SETUP_GUIDE.md | Full guide |
| ARCHITECTURE.md | System design |
| DATABASE_SCHEMA.md | DB reference |
| VERIFICATION_CHECKLIST.md | Tests |
| TROUBLESHOOTING.md | Fixes |
| DOCUMENTATION_INDEX.md | Navigation |

Start with **QUICK_START.md**!

---

## Common Errors & Fixes

```
Error: connect ECONNREFUSED
Fix: mongod (start MongoDB)

Error: Cannot find module
Fix: npm install

Error: Port already in use
Fix: kill -9 <PID> or use different port

Error: Invalid credentials
Fix: npm run init-admin

Error: CORS error
Fix: Check VITE_API_URL in .env

Error: 404 Cannot POST
Fix: Check API endpoint is correct
```

---

## Performance Tips

- ✅ Restart backend after code changes
- ✅ Restart frontend after .env changes
- ✅ Clear browser cache if issues
- ✅ Use refresh button in admin panel
- ✅ Filter data before export

---

## Security Reminders

- 🔒 Change admin password
- 🔒 Use strong JWT_SECRET
- 🔒 Use HTTPS in production
- 🔒 Update .env values
- 🔒 Never commit .env to git

---

**Print this card and keep it handy!** 🎯

---

*Last Updated: April 17, 2026*
