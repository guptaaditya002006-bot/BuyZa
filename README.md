# BuyZa 🛍️

<p align="center">
  <img src="https://via.placeholder.com/140x140.png?text=BuyZa" alt="BuyZa Logo" width="140" />
</p>

<p align="center">
  <a href="https://react.dev/" target="_blank"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" /></a>
  <a href="https://nodejs.org/" target="_blank"><img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" /></a>
  <a href="https://www.mongodb.com/" target="_blank"><img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /></a>
  <a href="https://jwt.io/" target="_blank"><img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" /></a>
  <a href="https://redux-toolkit.js.org/" target="_blank"><img src="https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" /></a>
  <a href="https://razorpay.com/" target="_blank"><img src="https://img.shields.io/badge/Payments-Razorpay-0086FF?style=for-the-badge&logo=razorpay&logoColor=white" alt="Razorpay" /></a>
  <a href="https://render.com/" target="_blank"><img src="https://img.shields.io/badge/Deployment-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" /></a>
</p>

A modern, dark-themed full-stack MERN e-commerce platform built for a premium shopping experience. BuyZa combines a sleek frontend, secure backend authentication, admin controls, and seamless payment flow to deliver a polished online store experience.

---

## ✨ Features

- 🔐 User Authentication
- 🛠️ Admin Dashboard
- 📦 Product Management (CRUD)
- 🛒 Shopping Cart
- 💳 Checkout
- 📜 Order History
- 📦 Order Management
- 🔒 Secure JWT Authentication
- 📱 Responsive UI

---

## 🧰 Tech Stack

| Category         | Technology          |
| ---------------- | ------------------- |
| Frontend         | React.js            |
| Backend          | Node.js, Express.js |
| Database         | MongoDB             |
| State Management | Redux Toolkit       |
| Authentication   | JWT                 |
| Payments         | Razorpay            |
| Deployment       | Render              |

---

## 📁 Folder Structure

```text
BuyZa/
├── client/                 # React frontend
│   ├── src/
│   │   ├── admin/          # Admin pages and components
│   │   ├── components/     # Shared UI components
│   │   ├── pages/          # Main application pages
│   │   ├── redux/          # Redux store and slices
│   │   └── styles/         # CSS styling files
├── server/                 # Express backend
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Auth and admin middleware
│   ├── model/              # MongoDB models
│   ├── routes/             # API routes
│   └── utils/              # Utility modules
├── package.json            # Root scripts
└── README.md               # Project documentation
```

---

## ⚙️ Installation

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/BuyZa.git
   cd BuyZa
   ```

2. Install dependencies

   ```bash
   npm run setup
   ```

3. Configure environment variables
   Create a `.env` file inside the `server` directory and add the required values.

---

## 🔐 Environment Variables

```env
MONGO_URI=
JWT_SECRET=
EMAIL_USER=
EMAIL_PASS=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

> Use placeholder values only. Never commit real credentials or secrets.

---

## ▶️ Run Locally

Start both frontend and backend:

```bash
npm run dev
```

Or run separately:

```bash
npm run dev:server
npm run dev:client
```

---

## 📸 Screenshots

Here are some preview areas for the project:

- 🏠 Home Page
- 🛍️ Product Listing & Details
- 🛒 Cart & Checkout
- 🧑‍💼 Admin Dashboard

![Homepage Preview](https://via.placeholder.com/1200x600.png?text=BuyZa+Homepage)
![Admin Dashboard Preview](https://via.placeholder.com/1200x600.png?text=Admin+Dashboard)

---

## 🌱 Future Improvements

- 🧠 AI-based product recommendations
- ❤️ Wishlist and saved items
- 📈 Advanced analytics dashboard
- 🚚 Order tracking and shipment updates
- 🌍 Multi-language and multi-currency support

---

## 👨‍💻 Author

Built by Aditya Gupta

- GitHub: [@guptaaditya002006-bot](https://github.com/guptaaditya002006-bot)
- LinkedIn: [Aditya Gupta](https://www.linkedin.com/in/aditya-gupta-a734ba377/)

---

## 📄 License

This project is licensed under the ISC License.

---

<p align="center">
  Made with ❤️ for modern e-commerce experiences.
</p>

<p align="center">
  <i>BuyZa — Premium shopping, built beautifully.</i>
</p>
