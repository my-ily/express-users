# 📁 Project Structure - هيكل المشروع

## 🎯 البنية النهائية (Final Structure)

```
01/
│
├── 📂 frontend/              # Frontend Code
│   ├── views/                # EJS Templates (Views)
│   │   └── users.ejs         # Users template
│   │
│   └── public/               # Static Files (CSS, JS, Images)
│       ├── static/           # Organized static files
│       │   ├── css/          # Stylesheets
│       │   ├── js/           # JavaScript files
│       │   └── images/       # Images
│       └── index.html        # Static HTML files
│
├── 📂 backend/               # Backend Code
│   ├── routes/               # Routes (URL endpoints)
│   │   └── users.js          # User routes
│   │
│   ├── controllers/          # Controllers (Business Logic)
│   │   └── userController.js # User controller
│   │
│   └── models/               # Data Models (if using DB)
│       └── User.js           # User model
│
├── 📂 docs/                  # Documentation
│   └── flow-diagram.md       # Data flow explanation
│
├── 📄 server.js              # Main server file ⭐
├── 📄 package.json           # Dependencies
├── 📄 .gitignore            # Git ignore rules
├── 📄 README.md             # Project documentation
└── 📄 PROJECT_STRUCTURE.md  # This file
```

---

## 📌 الفصل بين Frontend و Backend

### 🎨 Frontend (واجهة المستخدم)

**المسؤوليات:**
- ✅ عرض البيانات (Views)
- ✅ جمع بيانات من المستخدم (Forms)
- ✅ عرض النتائج (UI)

**الملفات:**
- `views/*.ejs` - Templates (EJS)
- `public/static/*` - CSS, JS, Images

---

### ⚙️ Backend (اللوجيك)

**المسؤوليات:**
- ✅ استقبال البيانات من Frontend
- ✅ التحقق من البيانات (Validation)
- ✅ معالجة البيانات (Business Logic)
- ✅ إرجاع النتيجة

**الملفات:**
- `server.js` - Server setup
- `routes/*.js` - URL endpoints
- `controllers/*.js` - Business logic

---

## 🔄 تدفق البيانات (Data Flow)

```
User (Browser)
    ↓
Frontend (EJS Form)
    ↓ Submit
Backend (Express Route)
    ↓ Process
Backend (Controller - Logic)
    ↓
Database (Arrays/DB)
    ↓
Backend (Return Result)
    ↓
Frontend (Display Result)
    ↓
User (See Updated Page)
```

---

## 📝 ملاحظات مهمة (Important Notes)

### ✅ التنظيم الجيد:
1. **Frontend منفصل عن Backend**
2. **كل Route له Controller**
3. **Static files منظمة**
4. **Documentation موجود**

### 🎯 القواعد:
- ✅ `views/` للـ EJS templates فقط
- ✅ `public/static/` للملفات الثابتة
- ✅ `routes/` للـ URL endpoints
- ✅ `controllers/` للـ business logic

---

## 🚀 الخطوات القادمة (Next Steps)

1. ✅ **Routes Organization** - تنظيم Routes في ملفات
2. ✅ **Controllers** - فصل Logic في Controllers
3. ✅ **Database** - ربط قاعدة بيانات
4. ✅ **Error Handling** - معالجة أخطاء أفضل

---

**تم إنشاء هذا الملف لتوضيح هيكل المشروع** 📁

