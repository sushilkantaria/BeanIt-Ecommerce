# ☕ BEAN IT – Coffee Brand E-Commerce Website

A fully functional and visually appealing eCommerce website for BEAN IT – a premium coffee brand. The platform enables customers to explore and purchase different coffee products while providing informative content about coffee culture, brewing tips, and more.

---

## 🌐 Live Demo

🚀 [View Website](https://beanit-ecommerce-frontend.onrender.com)

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Contact](#contact)

---

## ✨ Features

- 🛒 Full eCommerce experience
- 📖 Informative pages (brewing tips, coffee origins, FAQs, etc.)
- 🔒 Secure user login & registration
- 📦 Product management with categories, descriptions, and images
- 📊 Admin dashboard with order tracking and inventory management
- 💬 Contact form 

---

## 💻 Tech Stack

### Frontend
- React.js
- HTML5, CSS3, JavaScript
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (Authentication)
- Multer (Image uploads)

### Admin Panel
- React.js (separate panel)
- Secure login for admin only
- CRUD operations for products, orders, and users

### Deployment
- Frontend & Admin: Render
- Backend: Render 
- Database: MongoDB Atlas

---

## 📁 Project Structure

BEAN-IT/
├── frontend/
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ └── App.js
├── admin-panel/
│ ├── public/
│ └── src/
│ ├── components/
│ └── AdminDashboard.js
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
└── README.md

---

🛠️ Installation

1. Clone the Repository

git clone https://github.com/yourusername/bean-it.git
cd bean-it

2. Setup Backend

cd backend
npm install

Create a .env file and add:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

Start the backend:

npm start

3. Setup Frontend

cd ../frontend
npm install
npm start

4. Setup Admin Panel

cd ../admin-panel
npm install
npm start

---

## Contact
Created by [Sushil Kantaria](https://github.com/sushilkantaria)  
📧 sushilkantaria22100@gmail.com  
