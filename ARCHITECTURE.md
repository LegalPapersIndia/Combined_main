# 🏗️ System Architecture Overview

## Complete System Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE (Frontend)                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────┐ │
│  │  Food Form   │  │  GST Form    │  │  IEC Form    │  │ Payment  │ │
│  │  @ /food     │  │  @ /gst      │  │  @ /iec      │  │  Page    │ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └────▲─────┘ │
│         │                 │                 │               │       │
│         └─────────────────┴─────────────────┴───────────────┼───────┘
│                           │                                 │
│                    POST /api/leads/submit                   │
│                           │                                 │
└───────────────────────────┼─────────────────────────────────┼────────┘
                            │                                 │
                            ▼                                 │
┌─────────────────────────────────────────────────────────────┼────────┐
│                    API LAYER (Backend)                      │        │
├─────────────────────────────────────────────────────────────┼────────┤
│                                                              │        │
│  ┌────────────────────────────────────────┐  Public API    │        │
│  │ POST /api/leads/submit                 │  (No Auth)     │        │
│  │ - Save form data                       │                │        │
│  │ - Extract fields                       │                │        │
│  │ - Store in MongoDB                     │                │        │
│  └────────────────────────────────────────┘                │        │
│                                                              │        │
│  ┌────────────────────────────────────────┐  Protected API │        │
│  │ POST /api/admin/login                  │  (JWT Auth)    │        │
│  │ GET  /api/admin/leads                  │                │        │
│  │ GET  /api/admin/leads/:id              │                │        │
│  │ PUT  /api/admin/leads/:id              │                │        │
│  │ DELETE /api/admin/leads/:id            │                │        │
│  │ GET  /api/admin/stats                  │                │        │
│  └────────────────────────────────────────┘                │        │
│                                                              │        │
└────────────────┬────────────────────────────────────────────┼────────┘
                 │                                             │
                 │ (1) Save to MongoDB                        │
                 │ (2) Optional: CRM API call                 │
                 │ (3) Return success                         │
                 │                                            │
                 ▼                                            │
    ┌─────────────────────────┐                              │
    │      MONGODB             │                              │
    ├─────────────────────────┤                              │
    │ Database: company_leads │                              │
    │                         │                              │
    │ Collections:            │                              │
    │ • leads (with indexes)  │                              │
    │ • admins (hashed pwd)   │                              │
    │                         │                              │
    │ Features:               │                              │
    │ • Full CRUD ops         │                              │
    │ • Real-time queries     │                              │
    │ • Statistics            │                              │
    └─────────────────────────┘                              │
                                                              │
    ┌──────────────────────────┐                             │
    │   EXTERNAL: CRM API      │                             │
    ├──────────────────────────┤                             │
    │ URL: legalpapers...      │                             │
    │ Parallel call (async)    │                             │
    │ Non-blocking             │                             │
    │ Data still goes there    │                             │
    └──────────────────────────┘                             │
                                                              │
                                                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│                  ADMIN INTERFACE (Frontend)                          │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │            ADMIN PANEL LOGIN                                │    │
│  │  Route: /admin-panel-login                                 │    │
│  │  ┌─────────────────────────────────────────────────────┐   │    │
│  │  │ Email: admin@company.com                            │   │    │
│  │  │ Password: admin123                                  │   │    │
│  │  │ [Login Button]                                      │   │    │
│  │  └─────────────────────────────────────────────────────┘   │    │
│  │                        │                                    │    │
│  │                   POST /api/admin/login                     │    │
│  │                        │                                    │    │
│  │                        ▼                                    │    │
│  │              Returns JWT Token                             │    │
│  │              Stored in localStorage                        │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                              │                                       │
│                              ▼                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │         ADMIN DASHBOARD                                      │   │
│  │  Route: /admin-panel                                        │   │
│  │  Protected by JWT token                                     │   │
│  │                                                              │   │
│  │  ┌────────────────────────────────────────────────────┐    │   │
│  │  │ STATS:                                             │    │   │
│  │  │ [Total] [Pending] [Completed] [By Service]        │    │   │
│  │  └────────────────────────────────────────────────────┘    │   │
│  │                                                              │   │
│  │  ┌────────────────────────────────────────────────────┐    │   │
│  │  │ SEARCH & FILTERS:                                  │    │   │
│  │  │ [Search____] [Status ▼] [Service ▼] [🔄] [📊]    │    │   │
│  │  └────────────────────────────────────────────────────┘    │   │
│  │                                                              │   │
│  │  ┌────────────────────────────────────────────────────┐    │   │
│  │  │ LEADS TABLE:                                       │    │   │
│  │  │                                                     │    │   │
│  │  │ Name    │ Email   │ Mobile  │ Service  │ Status   │    │   │
│  │  │─────────┼─────────┼─────────┼──────────┼──────────│    │   │
│  │  │ Rajesh  │ raj@... │ 98765.. │ fssaiReg │ [Pend▼] │    │   │
│  │  │ Priya   │ pri@... │ 89765.. │ gstReg   │ [Pend▼] │    │   │
│  │  │ Akshay  │ aks@... │ 79765.. │ iecReg   │ [Comp▼] │    │   │
│  │  │         │         │         │          │ [View] │    │   │
│  │  │                                         │ [Delete]    │   │
│  │  │                                                     │    │   │
│  │  └────────────────────────────────────────────────────┘    │   │
│  │                                                              │   │
│  │  ┌────────────────────────────────────────────────────┐    │   │
│  │  │ LEAD DETAILS MODAL:                                │    │   │
│  │  │ ┌──────────────────────────────────────────────┐   │    │   │
│  │  │ │ Name:        Rajesh Kumar                    │   │    │   │
│  │  │ │ Email:       rajesh@example.com             │   │    │   │
│  │  │ │ Mobile:      9876543210                      │   │    │   │
│  │  │ │ Company:     Kumar Enterprises              │   │    │   │
│  │  │ │ Service:     fssaiReg                        │   │    │   │
│  │  │ │ Status:      pending                         │   │    │   │
│  │  │ │ Date:        2026-04-17                      │   │    │   │
│  │  │ │                                              │   │    │   │
│  │  │ │ Admin Notes: ____________________________     │   │    │   │
│  │  │ │             [Save Notes]                    │   │    │   │
│  │  │ └──────────────────────────────────────────────┘   │    │   │
│  │  └────────────────────────────────────────────────────┘    │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Component Interaction Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│                        FORM SUBMISSION                           │
└──────────────────────────────────────────────────────────────────┘
                              │
                    1. Validate Data
                              │
                              ▼
        ┌────────────────────────────────────────┐
        │  POST /api/leads/submit                │
        │  Content-Type: application/json        │
        │                                        │
        │  Payload: {                            │
        │    applicant_name: "...",              │
        │    email: "...",                       │
        │    mobile: "...",                      │
        │    serviceCategory: "fssaiReg",        │
        │    ... more fields ...                 │
        │  }                                     │
        └────────────────────────────────────────┘
                    │              │
         ┌──────────┴──────────┬──┴──────────────┐
         │                     │                 │
         ▼                     ▼                 ▼
    ┌─────────┐           ┌─────────┐       ┌──────────┐
    │ Lead    │           │ CRM     │       │ Return   │
    │ Model   │           │ API     │       │ Success  │
    │ Saves   │           │ Call    │       │          │
    │ to DB   │           │(Non-    │       └──────┬───┘
    │         │           │blocking)│             │
    └─────────┘           │         │             │
                          └─────────┘             │
                                                  ▼
                                        ┌──────────────────┐
                                        │ Data stored in   │
                                        │ MongoDB + CRM    │
                                        │ Redirect to      │
                                        │ Payment Page     │
                                        │ Data available   │
                                        └──────────────────┘
```

---

## Admin Authentication Flow

```
┌─────────────────────────────────────────────────────────┐
│ Admin visits /admin-panel-login                         │
└─────────────────────────────────────────────────────────┘
                      │
                      ▼
        ┌────────────────────────────┐
        │ Enter Credentials:         │
        │ • Email                    │
        │ • Password                 │
        │                            │
        │ [Login Button]             │
        └────────────────────────────┘
                      │
                      ▼
      ┌───────────────────────────────────┐
      │ POST /api/admin/login             │
      │ {                                 │
      │   email: "admin@company.com",     │
      │   password: "admin123"            │
      │ }                                 │
      └───────────────────────────────────┘
                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼
    ✅ Success              ❌ Invalid
    │                       │
    ├─ Find admin           └─ Return 401
    ├─ Compare password        Error message
    ├─ Generate JWT
    └─ Return token
        │
        ▼
    ┌─────────────────────────┐
    │ Frontend stores token   │
    │ in localStorage         │
    └─────────────────────────┘
        │
        ▼
    ┌──────────────────────────────────┐
    │ Redirect to /admin-panel         │
    │ Include token in requests:       │
    │ Authorization: Bearer {token}    │
    └──────────────────────────────────┘
        │
        ▼
    ┌──────────────────────────────┐
    │ Protected API verifies token │
    │ via authMiddleware           │
    │                              │
    │ If valid: Process request    │
    │ If invalid: Return 401       │
    └──────────────────────────────┘
```

---

## Database Structure

```
┌────────────────────────────────────────┐
│       MongoDB Database                 │
│     "company_leads"                    │
├────────────────────────────────────────┤
│                                        │
│  ┌──────────────────────────────────┐ │
│  │ Collection: "leads"              │ │
│  ├──────────────────────────────────┤ │
│  │                                  │ │
│  │ Document Example:                │ │
│  │ {                                │ │
│  │   _id: ObjectId(...),            │ │
│  │   applicantName: "Rajesh",       │ │
│  │   email: "rajesh@...",           │ │
│  │   mobile: "9876543210",          │ │
│  │   serviceCategory: "fssaiReg",   │ │
│  │   applicationStatus: "pending",  │ │
│  │   paymentStatus: "pending",      │ │
│  │   createdAt: ISODate(...),       │ │
│  │   rawPayload: { ... }            │ │
│  │ }                                │ │
│  │                                  │ │
│  │ Indexes:                         │ │
│  │ • email (1)                      │ │
│  │ • mobile (1)                     │ │
│  │ • serviceCategory (1)            │ │
│  │ • applicationStatus (1)          │ │
│  │ • createdAt (-1)                 │ │
│  └──────────────────────────────────┘ │
│                                        │
│  ┌──────────────────────────────────┐ │
│  │ Collection: "admins"             │ │
│  ├──────────────────────────────────┤ │
│  │                                  │ │
│  │ Document Example:                │ │
│  │ {                                │ │
│  │   _id: ObjectId(...),            │ │
│  │   email: "admin@company.com",    │ │
│  │   password: "$2a$10$...",        │ │
│  │   name: "Admin User",            │ │
│  │   role: "super_admin",           │ │
│  │   isActive: true,                │ │
│  │   createdAt: ISODate(...)        │ │
│  │ }                                │ │
│  │                                  │ │
│  │ Index:                           │ │
│  │ • email (unique)                 │ │
│  └──────────────────────────────────┘ │
│                                        │
└────────────────────────────────────────┘
```

---

## Deployment Architecture (Simple)

```
┌─────────────────────────────────────────────────┐
│            Internet / Users                     │
└─────────────────────────────────────────────────┘
            │                        │
            ▼                        ▼
  ┌──────────────────┐      ┌──────────────────┐
  │  Frontend CDN    │      │   Backend VM     │
  │  (Vercel/Netlify)│      │   (Node.js)      │
  │                  │      │   Express App    │
  │  React App       │      │   :5000          │
  │  :5173           │      │                  │
  └──────────────────┘      └────────┬─────────┘
            │                        │
            │                   API Calls
            │                        │
            └────────────┬───────────┘
                        │
                        ▼
              ┌──────────────────┐
              │  MongoDB Atlas   │
              │  (Cloud Database)│
              │  company_leads   │
              └──────────────────┘
```

---

## Request Flow Example

```
User Action: Submit Food Registration Form
│
├─ 1. Form Validation ─────────────────────────────────────►  ✅ Valid
│
├─ 2. Form Data Object Created
│  └─ applicantName, email, mobile, serviceCategory, etc.
│
├─ 3. POST /api/leads/submit ──────────────────────────────►  Backend
│  │
│  └─ Request arrives at leadRoutes.js
│     │
│     ├─ Extract relevant fields from payload
│     ├─ Create new Lead document
│     ├─ Lead.save() ────────────────────────────────────►  MongoDB
│     │                                                    └─ Saved ✅
│     │
│     ├─ Parallel: CRM API Call (Non-blocking)
│     │  └─ POST to CRM ─────────────────────────────────►  External
│     │
│     └─ Return Response
│
├─ 4. Response Received (Frontend)
│  └─ { success: true, leadId: "..." }
│
├─ 5. Show Success Message
│
├─ 6. Navigate to Payment Page
│
└─ 7. Admin sees lead in dashboard (next refresh or real-time)

Time taken: ~200-500ms (most of database save)
CRM call: Async (doesn't block response)
Data availability: Immediate in admin panel
```

---

## Feature Matrix

```
┌──────────────────────────────────────────────────────────────┐
│ Feature                    │ Status  │ Where Used           │
├──────────────────────────────────────────────────────────────┤
│ Form Validation            │ ✅      │ Frontend (All forms) │
│ MongoDB Storage            │ ✅      │ Backend              │
│ CRM Integration            │ ✅      │ Backend (Async)      │
│ Admin Login                │ ✅      │ /admin-panel-login   │
│ JWT Authentication         │ ✅      │ Protected Routes     │
│ Lead Viewing               │ ✅      │ Admin Panel          │
│ Status Updates             │ ✅      │ Admin Panel          │
│ Payment Tracking           │ ✅      │ Admin Panel          │
│ Search/Filter              │ ✅      │ Admin Panel          │
│ Notes Management           │ ✅      │ Admin Panel          │
│ Excel Export               │ ✅      │ Admin Panel          │
│ Statistics Dashboard       │ ✅      │ Admin Panel          │
│ Multi-Service Support      │ ✅      │ All Forms            │
│ Real-time Sync             │ ✅      │ Admin Panel          │
│ Responsive Design          │ ✅      │ All UI               │
└──────────────────────────────────────────────────────────────┘
```

---

**This architecture is production-ready and scalable!** 🚀
