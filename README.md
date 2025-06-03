
# 🛒 eCommerce Platform Project - MERN Stack

Welcome to the **eCommerce Platform Project** built using the **MERN Stack** (MongoDB, Express.js, React, Node.js). This project provides a robust, full-featured online shopping platform packed with functionality to enhance the user experience.

### 🚀 Live App Demo:
👉 [https://mern-shop-abxs.onrender.com/](https://mern-shop-abxs.onrender.com/)

> **Note:** Render's free tier may shut down the server after 15 minutes of inactivity. The first request after reactivation might be slow, but subsequent requests will be faster.

---

## ✨ Features

- **Full-Featured Shopping Cart**: Add, remove, and manage products in the cart.
- **Product Reviews and Ratings**: Leave reviews and rate products.
- **Top Products Carousel**: Showcase top-rated or featured products.
- **Product Pagination**: Paginated browsing for better user experience.
- **Product Search Feature**: Search for products using keywords.
- **User Profile with Orders**: Users can create profiles and view order history.
- **Admin Dashboard**: Manage products, users, orders, and admins.

### 👤 Admin Features

- **Admin Management**: Add and manage admin accounts.
- **Product Management**: Add, edit, delete products.
- **User Management**: Manage user accounts.
- **Order Management**: View order details and mark as delivered.

### 💳 Checkout Process

- **Shipping & Payment**: Seamless checkout process with Razorpay integration.
- **Database Seeder**: Preload products and users for testing.

---

## 🛠️ Getting Started

### ✅ Prerequisites

1. Fork this repository.
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/MERN-eCommerce.git
   cd MERN-eCommerce
   ```
3. Create a MongoDB database and get your MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
4. Create a Razorpay account and get your **Key ID** and **Key Secret** from [Razorpay Dashboard](https://dashboard.razorpay.com/).
5. Create a [Brevo (formerly Sendinblue)](https://www.brevo.com/) account and generate a new **SMTP Key**.

### 🔐 Environment Variables

Rename `.env.example` to `.env` and add the following:

```env
NODE_ENV=development
PORT=5000
JWT_SECRET=your_jwt_secret_here

MONGO_URI=your_mongo_uri_here

RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here

PAGINATION_MAX_LIMIT=12

EMAIL_HOST=smtp-relay.brevo.com
EMAIL_PORT=587
EMAIL_USER=your_brevo_email_here
EMAIL_PASS=your_brevo_smtp_password_here
EMAIL_FROM=your_brevo_email_here
```

---

## 📦 Install Dependencies

Install backend dependencies:
```bash
npm install
```

Install frontend dependencies:
```bash
cd frontend
npm install
cd ..
```

---

## 🚀 Run the Application

Run frontend & backend together:
```bash
npm run dev
```

Run backend only:
```bash
npm run server
```

Build frontend for production:
```bash
cd frontend
npm run build
```

---

## 🌱 Seed the Database

To import sample data (users & products):
```bash
npm run data:import
```

To destroy all data:
```bash
npm run data:destroy
```

---

## 🔐 Sample Logins

### 🔑 Admin Login
👉 [Admin Dashboard](https://mern-shop-abxs.onrender.com/admin/login)  
**Email:** `admin@admin.com`  
**Password:** `admin123`

### 🧑‍💼 Customer Logins
👉 [Customer Login](https://mern-shop-abxs.onrender.com/login)

- **John Doe**  
  Email: `john@email.com`  
  Password: `john123`

- **Alice Smith**  
  Email: `alice@email.com`  
  Password: `alice123`

---

## 🤝 Contributing

We welcome contributions from the community!

### 📌 Steps to Contribute:

1. Fork the repo and clone it:
   ```bash
   git clone https://github.com/your-username/MERN-eCommerce.git
   cd MERN-eCommerce
   ```

2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. Make your changes, then:
   ```bash
   git add .
   git commit -m "Add: Your meaningful commit message"
   git push origin your-branch-name
   ```

4. Create a Pull Request on GitHub.

---

## 🙏 Thank You!

Thanks for checking out the eCommerce Platform Project!  
Feel free to explore, contribute, and customize it as per your needs.

**Happy coding! 🤩**
