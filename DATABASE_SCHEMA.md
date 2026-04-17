# 📊 Database Schema Reference

## Collections Overview

Your MongoDB database has 2 main collections:

---

## 👥 Admins Collection

### Fields:

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Unique identifier |
| `email` | String | Admin email (unique) |
| `password` | String | Hashed password (bcryptjs) |
| `name` | String | Admin full name |
| `role` | String | admin / super_admin |
| `permissions` | Array | Allowed actions |
| `isActive` | Boolean | Account status |
| `lastLogin` | Date | Last login timestamp |
| `createdAt` | Date | Account creation date |
| `updatedAt` | Date | Last update date |

### Example Document:

```json
{
  "_id": ObjectId("..."),
  "email": "admin@company.com",
  "password": "$2a$10$...",
  "name": "System Admin",
  "role": "super_admin",
  "permissions": ["view_leads", "edit_leads", "delete_leads"],
  "isActive": true,
  "lastLogin": ISODate("2026-04-17T10:30:00Z"),
  "createdAt": ISODate("2026-04-17T09:00:00Z"),
  "updatedAt": ISODate("2026-04-17T10:30:00Z")
}
```

---

## 📋 Leads Collection

### Fields:

#### Service Information
| Field | Type | Description |
|-------|------|-------------|
| `serviceCategory` | String | fssaiReg / gstReg / iecReg |
| `leadSource` | String | Which website form (food, gst, iec) |
| `applicationType` | String | Registration / Modification / Renewal |
| `applicationStatus` | String | pending / in-progress / completed / rejected |

#### Personal Information
| Field | Type | Description |
|-------|------|-------------|
| `fullName` | String | Full name of applicant |
| `applicantName` | String | Alternative name field |
| `email` | String | Email address |
| `mobile` | String | Mobile number |
| `phone` | String | Alternate phone |

#### Company Information
| Field | Type | Description |
|-------|------|-------------|
| `companyName` | String | Company/Business name |
| `businessName` | String | Alternative business name |
| `natureOfBusiness` | String | Type of business |
| `businessType` | String | Business category |
| `designation` | String | Proprietorship / Partnership / Ltd / etc |

#### Address Information
| Field | Type | Description |
|-------|------|-------------|
| `state` | String | State name |
| `address1` | String | Primary address |
| `address2` | String | Secondary address |
| `city` | String | City name |
| `district` | String | District name |
| `pinCode` / `pin` | String | Postal code (6 digits) |

#### Business Details (GST/IEC/Food)
| Field | Type | Description |
|-------|------|-------------|
| `foodCategory` | String | Food category (for FSSAI) |
| `investment` | Number | Business investment amount |
| `businessInvestment` | String | Alternative investment field |
| `members` | String | Number of members |
| `annualTurnover` | String | Annual business turnover |
| `panNumber` | String | PAN number |
| `gstinNumber` | String | GSTIN number |
| `businessIncome` | String | Monthly/Annual income |
| `composition` | String | Composition scheme |

#### Payment & Status
| Field | Type | Description |
|-------|------|-------------|
| `paymentStatus` | String | pending / completed / failed |
| `paymentId` | String | Payment gateway ID |
| `orderId` | String | Order ID from payment |
| `amount` | Number | Payment amount |

#### Admin Management
| Field | Type | Description |
|-------|------|-------------|
| `adminNotes` | String | Notes added by admin |
| `assignedTo` | String | Admin ID assigned to lead |

#### Timestamps
| Field | Type | Description |
|-------|------|-------------|
| `submittedAt` | Date | Form submission time |
| `createdAt` | Date | Record creation time |
| `updatedAt` | Date | Last update time |

#### Additional
| Field | Type | Description |
|-------|------|-------------|
| `rawPayload` | Mixed | Complete original form data |

### Example Document:

```json
{
  "_id": ObjectId("..."),
  
  // Service Info
  "serviceCategory": "fssaiReg",
  "leadSource": "foodindia-registration.org",
  "applicationType": "Registration",
  "applicationStatus": "pending",
  
  // Personal Info
  "fullName": "Rajesh Kumar",
  "applicantName": "Rajesh Kumar",
  "email": "rajesh@example.com",
  "mobile": "9876543210",
  
  // Company Info
  "companyName": "Kumar Food Enterprises",
  "businessName": "Kumar Food Enterprises",
  "natureOfBusiness": "Restaurant",
  "designation": "INDIVIDUAL",
  
  // Address
  "state": "DELHI",
  "address1": "House No. 123",
  "city": "New Delhi",
  "district": "New Delhi",
  "pin": "110001",
  
  // Business Details
  "foodCategory": "Ready-to-eat savouries",
  "investment": "500000",
  "members": "1",
  
  // Payment
  "paymentStatus": "pending",
  "amount": 5000,
  
  // Admin
  "adminNotes": "Processing application",
  "assignedTo": ObjectId("..."),
  
  // Timestamps
  "submittedAt": ISODate("2026-04-17T09:30:00Z"),
  "createdAt": ISODate("2026-04-17T09:30:00Z"),
  "updatedAt": ISODate("2026-04-17T10:00:00Z"),
  
  // Raw Data
  "rawPayload": {
    "ctl00$ContentPlaceHolder1$ddlApplicationType": "Registration",
    "ctl00$ContentPlaceHolder1$txtName": "Rajesh Kumar",
    // ... all original form fields
  }
}
```

---

## 🔍 Query Examples

### Find all Food leads:
```javascript
db.leads.find({ serviceCategory: "fssaiReg" })
```

### Find pending applications:
```javascript
db.leads.find({ applicationStatus: "pending" })
```

### Find leads by email:
```javascript
db.leads.findOne({ email: "rajesh@example.com" })
```

### Count leads by service:
```javascript
db.leads.aggregate([
  { $group: { _id: "$serviceCategory", count: { $sum: 1 } } }
])
```

### Find leads assigned to admin:
```javascript
db.leads.find({ assignedTo: ObjectId("...") })
```

### Find completed payments:
```javascript
db.leads.find({ paymentStatus: "completed" })
```

---

## 📈 Indexes

The Leads collection has the following indexes for better performance:

```javascript
db.leads.createIndex({ email: 1 })
db.leads.createIndex({ mobile: 1 })
db.leads.createIndex({ serviceCategory: 1 })
db.leads.createIndex({ applicationStatus: 1 })
db.leads.createIndex({ createdAt: -1 })
```

---

## 🔐 Data Validation

### Field Constraints:

**Email:**
- Format: `email@domain.com`
- Must be valid email format

**Mobile:**
- Format: 10 digits
- Starts with 6-9
- Example: 9876543210

**PIN:**
- Format: 6 digits
- Numeric only
- Example: 110001

**applicationStatus:**
- Allowed: `pending`, `in-progress`, `completed`, `rejected`
- Default: `pending`

**paymentStatus:**
- Allowed: `pending`, `completed`, `failed`
- Default: `pending`

**serviceCategory:**
- Allowed: `fssaiReg`, `gstReg`, `iecReg`

---

## 📊 MongoDB Operations

### Connect to MongoDB CLI:

```bash
# Local MongoDB
mongosh mongodb://localhost:27017/company_leads

# MongoDB Atlas
mongosh "mongodb+srv://username:password@cluster.mongodb.net/company_leads"
```

### Useful Commands:

```javascript
// Switch database
use company_leads

// Show all collections
show collections

// Count documents
db.leads.countDocuments()

// Find all
db.leads.find().pretty()

// Find with filters
db.leads.find({ serviceCategory: "fssaiReg" })

// Update
db.leads.updateOne(
  { _id: ObjectId("...") },
  { $set: { applicationStatus: "completed" } }
)

// Delete
db.leads.deleteOne({ _id: ObjectId("...") })

// Export to JSON
db.leads.find().toArray()
```

---

## 🔄 Data Relationships

```
Admin (1) ──── (Many) Leads
   ↓
   └─ Can manage assigned leads
   └─ Can add notes
   └─ Can update status
```

---

## 📦 Backup & Recovery

### Backup MongoDB (Local):
```bash
mongodump --db company_leads --out ./backup
```

### Restore MongoDB:
```bash
mongorestore --db company_leads ./backup/company_leads
```

### Backup MongoDB Atlas:
1. Go to MongoDB Atlas Dashboard
2. Click "Snapshots"
3. Click "Request One-off Snapshot"
4. Download when ready

---

## ⚠️ Important Notes

1. **Password Hashing**: Admin passwords are hashed with bcryptjs
   - Original password is never stored
   - Password is salted with 10 rounds

2. **Data Privacy**: All lead data is stored in MongoDB
   - Implement access controls
   - Regular backups recommended
   - Consider encryption at rest

3. **Timestamps**: All dates are in ISO 8601 format (UTC)
   - `createdAt` never changes
   - `updatedAt` updates on every change
   - `submittedAt` is when form was submitted

4. **Raw Payload**: Complete original form data is stored
   - Useful for debugging
   - Contains all fields exactly as submitted
   - Can be used to restore original data

---

**For more info, check MongoDB documentation: https://docs.mongodb.com/**
