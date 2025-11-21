# 🚀 Backend Training Project - Express.js

## 📁 هيكل المشروع (Project Structure)

```
01/
├── 📂 backend/              # Backend Code (Backend Logic)
│   ├── routes/              # Routes (URL endpoints)
│   │   └── users.js         # User routes
│   ├── controllers/         # Controllers (Business Logic)
│   │   └── userController.js
│   └── models/              # Data Models (if using DB)
│
├── 📂 frontend/             # Frontend Code (Views)
│   ├── views/               # EJS Templates
│   │   └── users.ejs        # Users page template
│   └── public/              # Static Files
│       ├── static/          # CSS, JS, Images
│       │   ├── css/
│       │   ├── js/
│       │   └── images/
│       └── index.html       # Static HTML files
│
├── 📂 docs/                 # Documentation
│   └── flow-diagram.md      # Data flow explanation
│
├── 📄 server.js             # Main server file
├── 📄 package.json          # Dependencies
├── 📄 .gitignore           # Git ignore file
└── 📄 README.md            # This file
```

## 🎯 التنظيم (Organization)

### 📦 Backend (server.js + routes + controllers)
- **server.js**: الإعداد الرئيسي للخادم
- **routes/**: تعريف المسارات (URLs)
- **controllers/**: اللوجيك (Logic) للعمليات

### 🎨 Frontend (views + public)
- **views/**: ملفات EJS (Templates)
- **public/**: ملفات ثابتة (CSS, JS, Images)
- **public/static/**: ملفات ثابتة منظمة

## 📝 الوظائف (Features)

- ✅ CRUD Operations (Create, Read, Update, Delete)
- ✅ EJS Templates
- ✅ Form Handling (POST, PUT, DELETE)
- ✅ Validation
- ✅ Error Handling

## 🚀 التشغيل (Running)

```bash
# تثبيت Dependencies
npm install

# تشغيل الخادم
npm start

# الوصول للمشروع
http://localhost:3002/users
```

## 📚 التقنيات المستخدمة (Technologies)

- **Express.js**: Web framework
- **EJS**: Template engine
- **Method-Override**: For PUT/DELETE in forms
- **Node.js**: Runtime environment

## 📖 للتعلم (Learning Resources)

- `docs/flow-diagram.md`: شرح تدفق البيانات بين Frontend و Backend

---

**تم إنشاء هذا المشروع للتدريب على Backend Development** 🎓

