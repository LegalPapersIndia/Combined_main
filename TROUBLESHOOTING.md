# 🔧 Troubleshooting Guide

## Common Issues & Solutions

---

## Backend Issues

### ❌ "MongoDB Connection Error: connect ECONNREFUSED"

**Problem**: MongoDB is not running or connection string is wrong

**Solutions**:

1. **Check if MongoDB is installed**:
   ```bash
   mongosh --version
   ```

2. **Start MongoDB service**:
   - **Windows**: 
     ```bash
     # If installed via installer
     net start MongoDB
     # Or run directly
     mongod
     ```
   - **Mac**: 
     ```bash
     brew services start mongodb-community
     ```
   - **Linux**: 
     ```bash
     sudo service mongod start
     ```

3. **Verify connection string in `.env`**:
   ```env
   # For local MongoDB
   MONGO_URI=mongodb://localhost:27017/company_leads
   
   # Test connection
   mongosh mongodb://localhost:27017/company_leads
   ```

4. **Try MongoDB Atlas instead**:
   - Go to https://www.mongodb.com/cloud/atlas
   - Create free cluster
   - Get connection string
   - Update `.env`:
     ```env
     MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/company_leads
     ```

---

### ❌ "npm run init-admin fails with error"

**Problem**: Admin initialization script fails

**Solutions**:

1. **Ensure MongoDB is connected first**
   ```bash
   # Terminal 1: Start MongoDB
   mongod
   
   # Terminal 2: Run init script
   npm run init-admin
   ```

2. **Check .env file exists** in Backend folder:
   ```bash
   ls Backend/.env
   # If not found, create it with proper settings
   ```

3. **Clear existing admin (if issue is "admin already exists")**:
   ```bash
   mongosh
   use company_leads
   db.admins.deleteMany({})
   exit
   
   npm run init-admin
   ```

4. **Check MongoDB connection directly**:
   ```bash
   mongosh "mongodb://localhost:27017/company_leads"
   db.ping()  # Should return { ok: 1 }
   ```

---

### ❌ "Cannot find module 'mongoose' / 'express' / etc"

**Problem**: Dependencies not installed

**Solution**:
```bash
cd Backend/
npm install

# Verify installation
npm list
```

---

### ❌ "Port 5000 already in use"

**Problem**: Another application using port 5000

**Solutions**:

1. **Find process using port 5000**:
   ```bash
   # Windows
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   
   # Mac/Linux
   lsof -i :5000
   kill -9 <PID>
   ```

2. **Use different port**:
   ```env
   # In Backend/.env
   PORT=5001
   
   # Update Frontend/.env
   VITE_API_URL=http://localhost:5001
   ```

---

### ❌ "ValidationError: Path 'email' is required"

**Problem**: Admin model missing email

**Solutions**:

1. **Check init-admin.js includes email**:
   ```javascript
   const admin = new Admin({
     email: "admin@company.com",  // ← Must have this
     password: "admin123",
     name: "System Admin",
     role: "super_admin"
   });
   ```

2. **Clear admins collection and reinit**:
   ```bash
   mongosh
   use company_leads
   db.admins.deleteMany({})
   exit
   
   npm run init-admin
   ```

---

### ❌ "UnauthorizedError: No token provided"

**Problem**: Frontend not sending JWT token

**Solutions**:

1. **Ensure token is in localStorage** (Check browser DevTools):
   ```javascript
   // Browser Console
   localStorage.getItem('adminToken')  // Should show token, not null
   ```

2. **Re-login to get new token**:
   - Go to `/admin-panel-login`
   - Enter credentials
   - Logout and login again

3. **Check Authorization header format** in requests:
   ```javascript
   // Should be: Authorization: Bearer {token}
   // NOT: Authorization: {token}
   ```

---

## Frontend Issues

### ❌ "Cannot find module UnifiedAdminLogin/UnifiedAdminPanel"

**Problem**: Admin components not found

**Solutions**:

1. **Verify files exist**:
   ```bash
   ls Frontend/src/components/AdminPanel/
   # Should show:
   # UnifiedAdminLogin.jsx
   # UnifiedAdminPanel.jsx
   ```

2. **Check import paths in App.jsx**:
   ```javascript
   // Should be:
   import UnifiedAdminLogin from "./components/AdminPanel/UnifiedAdminLogin";
   import UnifiedAdminPanel from "./components/AdminPanel/UnifiedAdminPanel";
   ```

3. **Verify folder structure** is correct (case-sensitive on Mac/Linux)

---

### ❌ "VITE_API_URL is undefined"

**Problem**: Frontend environment not configured

**Solutions**:

1. **Create Frontend/.env file**:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

2. **Restart frontend server**:
   ```bash
   # Stop current process (Ctrl+C)
   # Start again
   npm run dev
   ```

3. **Clear browser cache**:
   - F12 → DevTools
   - Right-click Refresh button
   - Select "Empty cache and hard refresh"

---

### ❌ "Form data not saving to database"

**Problem**: Submission fails silently or shows error

**Solutions**:

1. **Check browser console for errors** (F12):
   - Look for network errors
   - Check for JavaScript errors
   - Look for failed fetch calls

2. **Verify API endpoint URL**:
   ```javascript
   // Should be: /api/leads/submit
   // NOT: /leadRoutes
   
   // Check in RegistrationForm.jsx
   const response = await fetch(`${API_URL}/api/leads/submit`, {
   ```

3. **Check API_URL is correct**:
   ```javascript
   // Browser Console
   import.meta.env.VITE_API_URL  // Should show correct URL
   ```

4. **Verify backend is running**:
   ```bash
   curl http://localhost:5000/health
   # Should return: {"status":"OK","message":"Server is running"}
   ```

5. **Check backend logs** for errors:
   - Look at Terminal where backend is running
   - Look for "Error:", "TypeError:", etc.

---

### ❌ "Payment page not receiving data"

**Problem**: Submitted data not available in payment component

**Solutions**:

1. **Verify data is stored in sessionStorage**:
   ```javascript
   // Browser Console
   sessionStorage.getItem('fssaiSubmittedData')
   // Should return JSON object, not null
   ```

2. **Check form submission success message**:
   - Should show success before redirecting
   - If error, fix form submission first

3. **Verify redirect logic** in form:
   ```javascript
   // After successful submission
   navigate("/food/payment-summary");  // Check correct path
   ```

---

## API Issues

### ❌ "CORS Error: Access to XMLHttpRequest blocked"

**Problem**: Frontend can't access backend (CORS issue)

**Solutions**:

1. **Verify backend CORS is configured** in server.js:
   ```javascript
   app.use(cors({
     origin: "*",
     allowedHeaders: ["Content-Type", "Authorization"]
   }));
   ```

2. **Check both servers are running**:
   - Backend: `http://localhost:5000`
   - Frontend: `http://localhost:5173`

3. **Verify API_URL in frontend .env**:
   ```env
   VITE_API_URL=http://localhost:5000
   # Must exactly match backend URL
   ```

4. **Try accessing health check directly**:
   ```bash
   curl http://localhost:5000/health
   # If fails, backend not running
   ```

---

### ❌ "404: Cannot POST /api/leads/submit"

**Problem**: Route not found

**Solutions**:

1. **Verify route exists** in Backend/routes/leadRoutes.js:
   ```javascript
   router.post("/submit", async (req, res) => {
     // handler
   });
   ```

2. **Check route is registered** in server.js:
   ```javascript
   app.use("/api/leads", leadRoutes);
   // This creates /api/leads/submit
   ```

3. **Restart backend server** after changes

4. **Check for typos** in API URL from frontend

---

### ❌ "500: Internal Server Error"

**Problem**: Backend processing error

**Solutions**:

1. **Check backend console** for error message
   - Look at Terminal running backend
   - See specific error details

2. **Common causes**:
   ```
   • MongoDB not connected
   • Invalid JWT_SECRET
   • Missing required fields
   • Database validation error
   ```

3. **Check request payload** (Browser DevTools → Network):
   - Click failed request
   - Check "Request" tab
   - Verify all required fields present

4. **Test API directly with Postman/curl**:
   ```bash
   curl -X POST http://localhost:5000/api/leads/submit \
     -H "Content-Type: application/json" \
     -d '{"applicant_name":"Test","email":"test@example.com"}'
   ```

---

### ❌ "401 Unauthorized: Invalid token"

**Problem**: JWT token invalid or expired

**Solutions**:

1. **Check token exists**:
   ```javascript
   // Browser Console
   localStorage.getItem('adminToken')
   ```

2. **Verify token format** in requests:
   ```javascript
   // Should be:
   Authorization: Bearer {actual_token_here}
   // NOT:
   Authorization: Bearer undefined
   Authorization: Bearer null
   ```

3. **Re-login to get fresh token**:
   - Go to `/admin-panel-login`
   - Enter: admin@company.com / admin123
   - This generates new token

4. **Check JWT_SECRET is same** everywhere:
   - Backend: `JWT_SECRET` in .env
   - Used in both `/api/admin/login` and `authMiddleware.js`

---

## Database Issues

### ❌ "Lead not appearing in admin panel"

**Problem**: Lead saved to database but not showing in panel

**Solutions**:

1. **Verify lead was actually saved**:
   ```bash
   mongosh
   use company_leads
   db.leads.find()
   # Should show leads
   ```

2. **Check filters in admin panel**:
   - Status filter set correctly?
   - Service filter set correctly?
   - Try "All Status" and "All Services"

3. **Refresh admin panel**:
   - Click 🔄 Refresh button
   - Or refresh page (F5)

4. **Check authentication**:
   - Verify JWT token is valid
   - Try re-login

---

### ❌ "Cannot read property '_id' of undefined"

**Problem**: Data structure mismatch

**Solutions**:

1. **Check MongoDB document structure**:
   ```bash
   mongosh
   use company_leads
   db.leads.findOne()
   # Verify it has _id field
   ```

2. **Check admin notes field**:
   ```bash
   db.leads.findOne()
   # If adminNotes is missing, need to initialize it
   ```

3. **Re-submit test form** to create new lead

---

### ❌ "Duplicate key error: email"

**Problem**: Email already exists (admin collection)

**Solutions**:

1. **Check if admin exists**:
   ```bash
   mongosh
   use company_leads
   db.admins.findOne({ email: "admin@company.com" })
   # If found, that's why
   ```

2. **Use different email** or delete existing:
   ```bash
   db.admins.deleteOne({ email: "admin@company.com" })
   # Then re-run init-admin
   npm run init-admin
   ```

---

## Performance Issues

### ⚠️ "Admin panel loading slowly"

**Problem**: Many leads in database slow down queries

**Solutions**:

1. **Check indexes are created**:
   ```bash
   mongosh
   use company_leads
   db.leads.getIndexes()
   # Should show multiple indexes
   ```

2. **If missing, create indexes manually**:
   ```bash
   db.leads.createIndex({ email: 1 })
   db.leads.createIndex({ serviceCategory: 1 })
   db.leads.createIndex({ createdAt: -1 })
   ```

3. **Limit query results** (pagination):
   - Already done: defaults to 20 per page

4. **Add filtering** before loading:
   - Use Status filter
   - Use Service filter
   - Reduces data loaded

---

### ⚠️ "Export to Excel is slow"

**Problem**: Too many leads to export

**Solutions**:

1. **Filter leads first**:
   - Select status/service/date range
   - Then export filtered results

2. **Export in chunks**:
   - Export one month at a time
   - Combine files manually if needed

---

## Security Issues

### 🔒 "Token stored in localStorage is visible"

**Problem**: JWT token visible in browser storage

**Solution**: This is normal and acceptable if:
- HTTPS is used (in production)
- JWT_SECRET is strong
- Token expiration is reasonable (7 days)

For extra security:
- Use short expiration (1 day)
- Implement token refresh mechanism
- Monitor unauthorized access attempts

---

## Deployment Issues

### ❌ "Works locally but fails on production"

**Problem**: Production environment issues

**Solutions**:

1. **Check environment variables**:
   ```bash
   # Production .env should have:
   MONGO_URI=mongodb+srv://...  # Production MongoDB
   JWT_SECRET=very-strong-key    # Unique, strong
   NODE_ENV=production           # Set to production
   ```

2. **Verify MongoDB Atlas connection**:
   - Check IP whitelist
   - Check credentials
   - Test connection string

3. **Check CORS for production domain**:
   ```javascript
   app.use(cors({
     origin: "https://yourdomain.com",
     allowedHeaders: ["Content-Type", "Authorization"]
   }));
   ```

4. **Verify API_URL in frontend build**:
   - Check deployment environment variables
   - Frontend `.env` should have production API URL

---

## Getting Help

### Step-by-step debugging:

1. **Identify the problem**:
   - Form submission? Admin panel? Login?
   - Error message? Silent failure?

2. **Check logs**:
   - Backend terminal
   - Browser console (F12)
   - Network tab (DevTools)

3. **Test components individually**:
   - Test backend endpoint with curl
   - Test database directly with mongosh
   - Test frontend component in isolation

4. **Verify configuration**:
   - .env files exist and correct
   - Environment variables loaded
   - Services running

5. **Try restarting**:
   - Stop and restart backend
   - Stop and restart frontend
   - Clear browser cache
   - Restart MongoDB

6. **Check documentation**:
   - `BACKEND_SETUP_GUIDE.md`
   - `DATABASE_SCHEMA.md`
   - Inline code comments

---

## Useful Commands for Debugging

### Backend Debugging:
```bash
# Check if port is in use
netstat -ano | findstr :5000

# Kill process using port
taskkill /PID <PID> /F

# Test API endpoint
curl http://localhost:5000/health

# Check MongoDB connection
mongosh mongodb://localhost:27017

# View backend logs
npm run dev  # Logs show in terminal
```

### Frontend Debugging:
```bash
# Browser Console Commands
localStorage.getItem('adminToken')
import.meta.env.VITE_API_URL
document.cookie

# Clear all storage
localStorage.clear()
sessionStorage.clear()
```

### Database Debugging:
```bash
# Connect to MongoDB
mongosh

# Use database
use company_leads

# Count documents
db.leads.countDocuments()

# Find all leads
db.leads.find().pretty()

# Find specific lead
db.leads.findOne({ email: "test@example.com" })
```

---

## Quick Fixes Checklist

Before contacting support, try:

- [ ] Restart backend server
- [ ] Restart frontend server
- [ ] Clear browser cache (Ctrl+Shift+Del)
- [ ] Check .env files
- [ ] Verify MongoDB is running
- [ ] Check network tab for failed requests
- [ ] Verify API_URL in frontend
- [ ] Try re-login
- [ ] Check browser console for errors
- [ ] Test API with curl/Postman

---

**Most issues can be resolved by restarting services and clearing cache!** 🚀
