# ✅ Setup Verification Checklist

After following the setup guide, use this checklist to verify everything is working correctly.

---

## 🔧 Backend Setup Verification

### Database
- [ ] MongoDB is running locally OR MongoDB Atlas is configured
- [ ] Connection string works (test: `npm run init-admin`)
- [ ] Database name: `company_leads`
- [ ] Collections created: `leads`, `admins`

### Server
- [ ] Backend server starts: `npm run dev` (no errors)
- [ ] Runs on port 5000
- [ ] Health check works: `http://localhost:5000/health`
- [ ] API responds: `GET http://localhost:5000/health`

### Admin User
- [ ] `npm run init-admin` runs successfully
- [ ] No error "Admin already exists" (first time only)
- [ ] Can see: "✅ Admin user created successfully"
- [ ] Email: `admin@company.com`
- [ ] Password: `admin123`

---

## 🎨 Frontend Setup Verification

### Configuration
- [ ] `.env` file exists in Frontend/ folder
- [ ] `VITE_API_URL=http://localhost:5000` is set
- [ ] Frontend runs: `npm run dev` (no errors)
- [ ] Runs on port 5173 (or alternative)

### Routes Available
- [ ] `/admin-panel-login` accessible
- [ ] `/admin-panel` (after login) accessible
- [ ] `/food` form page works
- [ ] `/gst` form page works
- [ ] `/iec` form page works

---

## 🔐 Admin Login Test

### Step 1: Navigate to Login
- [ ] Go to: `http://localhost:5173/admin-panel-login`
- [ ] Page loads correctly
- [ ] Form has email & password fields

### Step 2: Enter Credentials
- [ ] Email field: `admin@company.com`
- [ ] Password field: `admin123`
- [ ] Click "✨ Login" button

### Step 3: Verify Login
- [ ] No errors appear
- [ ] Redirected to `/admin-panel` (dashboard)
- [ ] See dashboard layout with stats
- [ ] Token stored in browser localStorage

---

## 📊 Admin Panel Test

### Dashboard Stats
- [ ] "Total Leads" count displays (0 initially)
- [ ] "Pending" count displays
- [ ] "Completed" count displays
- [ ] "Services" count displays

### Leads Table
- [ ] Empty table shows "No leads found" (initially)
- [ ] Search field is visible
- [ ] Status filter dropdown works
- [ ] Service filter dropdown works
- [ ] Refresh button works
- [ ] Export button is visible

### Filters & Search
- [ ] Try status filter "Pending" (shows 0 leads initially)
- [ ] Try status filter "All" (shows 0 leads initially)
- [ ] Try service filter "FSSAI Registration"
- [ ] Search field accepts text

### Action Buttons
- [ ] 🔄 Refresh button (no errors)
- [ ] 📊 Export button (no errors)
- [ ] Logout button (on top right)

---

## 📝 Form Submission Test

### Step 1: Test Food Form
- [ ] Go to: `http://localhost:5173/food`
- [ ] Form page loads completely
- [ ] All fields are visible

### Step 2: Fill Form
- [ ] Fill all required fields with test data
- [ ] Example:
  - Application Type: "Registration"
  - Applicant Name: "Test User"
  - Email: "test@example.com"
  - Mobile: "9876543210"
  - Nature of Business: "Restaurant"
  - Designation: "INDIVIDUAL"
  - State: "DELHI"

### Step 3: Submit Form
- [ ] Click Submit button
- [ ] Success message appears
- [ ] Redirected to payment page

### Step 4: Verify in Admin Panel
- [ ] Go back to admin panel: `http://localhost:5173/admin-panel`
- [ ] New lead appears in the table
- [ ] Name matches what you entered
- [ ] Email matches what you entered
- [ ] Service shows "fssaiReg"

---

## 🔄 Data Flow Test

### Complete Flow Verification
- [ ] Submit food form
- [ ] Check admin panel → Lead appears (MongoDB saved)
- [ ] Redirect to payment page works
- [ ] Lead data visible in payment page
- [ ] CRM API call happened (check backend logs)

### GST Form Test
- [ ] Go to `/gst`
- [ ] Fill form with test data
- [ ] Submit and check admin panel
- [ ] Service shows "gstReg"
- [ ] Data in admin panel matches submitted data

### IEC Form Test
- [ ] Go to `/iec`
- [ ] Fill form with test data
- [ ] Submit and check admin panel
- [ ] Service shows "iecReg"
- [ ] Data in admin panel matches submitted data

---

## 🛠️ Admin Panel Operations Test

### View Lead Details
- [ ] Click "View" button on any lead
- [ ] Modal popup shows full details
- [ ] All fields display correctly
- [ ] Admin notes textarea is editable
- [ ] Close button works

### Update Status
- [ ] Change "Status" dropdown to "In Progress"
- [ ] Status updates in table
- [ ] Change back to "Pending"
- [ ] Status updates correctly

### Update Payment Status
- [ ] Change "Payment" dropdown to "Completed"
- [ ] Payment status updates
- [ ] Try "Failed" status
- [ ] Status changes correctly

### Add Notes
- [ ] Click "View" on a lead
- [ ] Type something in admin notes field
- [ ] Click "Save Notes"
- [ ] Message indicates success
- [ ] View again - notes are saved

### Export to Excel
- [ ] Click "📊 Export" button
- [ ] File downloads (leads-{timestamp}.xlsx)
- [ ] Open Excel file
- [ ] Data displays in spreadsheet
- [ ] All columns present: Name, Email, Mobile, Service, etc.

### Delete Lead
- [ ] Click "Delete" on a lead
- [ ] Confirmation dialog appears
- [ ] Click "OK" to confirm
- [ ] Lead removed from table
- [ ] Table updates (count decreases)

---

## 🚨 Error Handling Test

### Invalid Login
- [ ] Try wrong email: error message appears
- [ ] Try wrong password: error message appears
- [ ] Try empty fields: validation works
- [ ] Error messages are clear

### Session Expiry
- [ ] Clear localStorage in DevTools
- [ ] Refresh admin panel
- [ ] Redirected to login page automatically
- [ ] Session protection works

### API Errors
- [ ] Stop backend server
- [ ] Try to fetch leads
- [ ] Error message appears
- [ ] Restart backend
- [ ] Refresh - works again

---

## 📈 Performance & Stability

### Load Testing
- [ ] Submit 5+ forms
- [ ] Admin panel loads smoothly
- [ ] No lag when filtering
- [ ] Export works with multiple records
- [ ] Search is responsive

### Browser DevTools
- [ ] Open console - no critical errors
- [ ] Check network tab - all requests successful (200/201)
- [ ] No CORS errors
- [ ] No 404 errors

---

## 🔒 Security Check

### Authentication
- [ ] Cannot access `/admin-panel` without login
- [ ] Cannot access `/admin-panel` with invalid token
- [ ] Logout clears token from localStorage
- [ ] New login gets new token

### API Protection
- [ ] Cannot call `/api/admin/leads` without token
- [ ] Cannot call `/api/admin/leads` with invalid token
- [ ] Get proper 401 error responses

---

## 📋 Final Checklist

Before considering setup complete:

- [ ] MongoDB connected and working
- [ ] Backend server running without errors
- [ ] Frontend running without errors
- [ ] Admin login works with default credentials
- [ ] Admin dashboard displays correctly
- [ ] At least 1 form submission successful
- [ ] Lead appears in admin panel
- [ ] Status updates work
- [ ] Export to Excel works
- [ ] Logout works
- [ ] Re-login works
- [ ] All three forms (Food, GST, IEC) tested
- [ ] No critical console errors
- [ ] No CORS errors
- [ ] API responses are correct

---

## 🎉 Setup Complete!

If all checkboxes above are ✅, your system is ready to go!

### Next Steps:
1. Change admin password in production
2. Update JWT_SECRET for production
3. Deploy backend to server
4. Deploy frontend to hosting
5. Setup SSL/HTTPS
6. Monitor logs in production

---

## ❓ Issues?

If any checkbox failed:

1. **Check backend logs** (Terminal 1)
   - Look for errors when services start
   - Check MongoDB connection

2. **Check frontend console** (F12 → Console)
   - Look for JavaScript errors
   - Check network requests

3. **Check network tab** (F12 → Network)
   - Verify API calls going to `http://localhost:5000`
   - Check response codes (should be 200, 201, etc.)

4. **Refer to** `BACKEND_SETUP_GUIDE.md` for detailed troubleshooting

---

**Happy coding! 🚀**
