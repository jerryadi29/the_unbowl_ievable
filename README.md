# 🥗 Leaf Me Up Salad – "The Unbowl-ievable"

A modern, full-stack e-commerce platform for ordering fresh salads and healthy meals with OTP-based authentication, integrated payments, and subscription management.

---

## 📋 Project Overview

**Leaf Me Up Salad** is a full-featured salad ordering web application built with a **monorepo architecture** using **pnpm workspaces**. It combines a robust backend API (Node.js + Express) with an interactive frontend (React + Vite) to deliver a seamless ordering experience.

### ✨ Key Features

- 🔐 **OTP-Based Authentication** – SMS verification via Twilio
- 💳 **Payment Integration** – Razorpay for secure transactions
- 🛒 **Shopping Cart & Orders** – Full checkout workflow
- 📦 **Subscriptions** – Recurring meal plans
- ⭐ **Reviews & Ratings** – Customer feedback system
- 👤 **User Profiles** – Order history & preferences
- 📱 **Responsive Design** – Tailwind CSS styling
- 🔍 **Product Browsing** – Categories, search, and filters

---

## 🏗️ Architecture

### Monorepo Structure

```
leaf_me_up_salad/
├── backend/              # Express.js API Server
│   ├── src/
│   │   ├── modules/      # Feature modules (auth, orders, products, etc.)
│   │   ├── config/       # Database & Redis configuration
│   │   ├── middlewares/  # Auth, validation, error handling
│   │   ├── utils/        # Helper functions
│   │   └── constant/     # API keys & config
│   ├── prisma/           # Database schema & migrations
│   ├── app.js
│   ├── server.js
│   └── package.json
├── frontend/             # React + Vite Application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── data/         # Static data & constants
│   │   ├── utils/        # Helper utilities
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
├── pnpm-workspace.yaml   # Workspace configuration
└── package.json          # Root dependencies
```

### Technology Stack

#### Backend
| Component | Technology |
|-----------|------------|
| Runtime | Node.js |
| Framework | Express.js 5.x |
| Database | PostgreSQL + Prisma ORM |
| Cache | Redis |
| Authentication | JWT + OTP (Twilio SMS) |
| Payments | Razorpay API |
| Email | Nodemailer |
| Validation | Joi |

#### Frontend
| Component | Technology |
|-----------|------------|
| Library | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| State Management | Redux Toolkit |
| Routing | React Router v7 |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18+ 
- **pnpm** v10+ (`npm install -g pnpm`)
- **PostgreSQL** 12+
- **Redis** 6+
- **Twilio** account (for SMS OTP)
- **Razorpay** account (for payments)

### Installation

1. **Clone the Repository:**
```bash
git clone https://github.com/jerryadi29/the_unbowl_ievable.git
cd leaf_me_up_salad
```

2. **Install Dependencies:**
```bash
pnpm install
```

3. **Configure Environment Variables:**

**Backend** (`backend/.env`):
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/leaf_me_up_salad

# Redis
REDIS_URL=redis://localhost:6379

# JWT Authentication
JWT_SECRET=your-super-secret-key-here

# Twilio (OTP)
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your-auth-token-here
TWILIO_SENDER_NUMBER=+1xxxxxxxxxx

# Razorpay (Payments)
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your-secret-key

# OTP Configuration
OTP_LENGTH=6
OTP_EXPIRY_TIME=120000  # 2 minutes in milliseconds

# Email (Nodemailer - Optional)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

**Frontend** (`frontend/.env`):
```env
VITE_API_URL=http://localhost:5000
```

4. **Initialize Database:**
```bash
cd backend
npx prisma migrate dev --name init
npx prisma db seed  # Optional: seed demo data
cd ..
```

5. **Start Development Servers:**

**Terminal 1 – Backend (Port 5000):**
```bash
cd backend
pnpm dev
```

**Terminal 2 – Frontend (Port 5173):**
```bash
cd frontend
pnpm dev
```

Access the app at `http://localhost:5173`

---

## 📁 Project Structure Details

### Backend Modules

#### Authentication (`src/modules/auth/`)
```
auth/
├── auth.controller.js    # Login/signup endpoints
├── auth.service.js       # Business logic
├── auth.model.js         # Database model
├── auth.route.js         # Route definitions
├── auth.validation.js    # Input validation (Joi)
├── otp.controller.js     # OTP endpoints
├── otp.service.js        # OTP logic (Twilio integration)
└── otp.route.js          # OTP routes
```

**Endpoints:**
- `POST /auth/request-otp` – Request OTP via SMS
- `POST /auth/verify-otp` – Verify OTP & login
- `POST /auth/logout` – Logout user

#### Products (`src/modules/products/`)
- Browse all products
- Filter by category
- Get product details with reviews

#### Orders (`src/modules/orders/`)
- Create new orders
- Track order status
- View order history

#### Payments (`src/modules/payments/`)
- Razorpay integration
- Payment verification
- Transaction logging

#### Subscriptions (`src/modules/subscriptions/`)
- View available plans
- Subscribe/unsubscribe
- Manage recurring payments

#### Reviews (`src/modules/reviews/`)
- Add product reviews
- View ratings
- Manage feedback

### Frontend Components

#### Pages
- **Home** (`Home.jsx`) – Dashboard with product categories
- **Menu** (`Menu.jsx`) – Browse all products
- **Login** (`Login.jsx`) – OTP-based authentication
- **Signup** (`Signup.jsx`) – User registration
- **Profile** (`Profile.jsx`) – User account & history
- **AddToCart** (`AddToCart.jsx`) – Shopping cart & checkout
- **AboutUs** (`AboutUs.jsx`) – Company information
- **Contact** (`Contact.jsx`) – Contact form

#### Components
- **ProductCard** – Individual product display
- **CategoryCard** – Category preview
- **SubscriptionCard** – Subscription plan cards
- **NavBar** – Navigation & user menu
- **Button** – Reusable button component

#### Data
- `categories.js` – Category definitions
- `product.js` – Product catalog

---

## 🔐 Authentication Flow

### OTP-Based Login

```
1. User enters phone number
   ↓
2. Backend validates & normalizes phone number
   ↓
3. Generate 6-digit OTP
   ↓
4. Hash OTP with bcrypt
   ↓
5. Store in Redis (2-minute expiry): otp:{phoneNumber} → hashedOtp
   ↓
6. Send SMS via Twilio: "+919876543210"
   ↓
7. User receives OTP
   ↓
8. User enters OTP
   ↓
9. Backend compares: bcrypt.compare(userOtp, storedOtp)
   ↓
10. If valid:
    - Create/update user in database
    - Generate JWT token (1-day expiry)
    - Delete OTP from Redis
    ↓
11. Return token to frontend
    ↓
12. Frontend stores token & redirects to home
```

### Phone Number Normalization

All phone numbers are normalized to E.164 format:
- Input: `9876543210`, `98-765-43210`, `+919876543210`
- Output: `+919876543210`

Implementation in `src/middlewares/phoneNormalize.js`:
```javascript
normalizePhoneNumber('9876543210') → '+919876543210'
normalizePhoneNumber('919876543210') → '+919876543210'
normalizePhoneNumber('+441234567890') → '+441234567890'
```

---

## 📡 API Documentation

### Authentication
| Method | Endpoint | Body | Response |
|--------|----------|------|----------|
| POST | `/auth/request-otp` | `{phoneNumber: string}` | `{ok: boolean, message: string}` |
| POST | `/auth/verify-otp` | `{otp: string, phoneNumber: string}` | `{ok: boolean, token: string, message: string}` |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | All products with pagination |
| GET | `/products/:id` | Product details + reviews |
| GET | `/products/category/:category` | Filter by category |
| GET | `/products/search?q=query` | Search products |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/orders` | Create new order |
| GET | `/orders` | Get user's orders |
| GET | `/orders/:id` | Order details |
| PATCH | `/orders/:id` | Update order status |

### Payments
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/payments/create` | Initiate Razorpay payment |
| POST | `/payments/verify` | Verify payment success |
| GET | `/payments/history` | Payment history |

### Subscriptions
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/subscriptions` | All available plans |
| POST | `/subscriptions/subscribe` | Subscribe to plan |
| DELETE | `/subscriptions/:id` | Cancel subscription |

---

## 🧪 Testing

### Test OTP Flow with cURL

**1. Request OTP:**
```bash
curl -X POST http://localhost:5000/auth/request-otp \
  -H "Content-Type: application/json" \
  -d '{"phoneNumber": "9876543210"}'
```

**Response:**
```json
{"ok": true, "message": "OTP sent successfully"}
```

**2. Verify OTP** (replace with actual OTP received):
```bash
curl -X POST http://localhost:5000/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"phoneNumber": "9876543210", "otp": "123456"}'
```

**Response:**
```json
{
  "ok": true,
  "message": "User registered",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Get Protected Endpoint:
```bash
curl -X GET http://localhost:5000/profile \
  -H "Authorization: Bearer {token}"
```

---

## 🚢 Deployment

### Build for Production

**Backend:**
```bash
cd backend
npm run build  # If applicable
npm start     # Run production server
```

**Frontend:**
```bash
cd frontend
pnpm build    # Creates optimized dist/ folder
```

Deploy `dist/` to:
- Netlify (drag & drop or Git integration)
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

### Environment Setup for Production
- Use separate `.env.production` files
- Store secrets in deployment platform (AWS Secrets Manager, Netlify Env, etc.)
- Enable CORS with production domain
- Use HTTPS for all endpoints

---

## 🐛 Troubleshooting

### OTP Not Received?
1. ✅ Verify Twilio credentials in `backend/src/constant/otp.key.js`
2. ✅ Check sender number is verified in Twilio console
3. ✅ Ensure phone number in E.164 format: `+919876543210`
4. ✅ Check backend logs: `pnpm dev` output
5. ✅ Review Twilio dashboard for failed messages

### Redis Connection Error?
```bash
# Check if Redis is running
redis-cli ping  # Should return "PONG"

# Start Redis (if using Docker)
docker run -d -p 6379:6379 redis:latest
```

### Database Migration Issues?
```bash
cd backend
npx prisma migrate reset   # Reset all migrations
npx prisma generate        # Regenerate client
npx prisma migrate dev     # Run migrations again
```

### Frontend Build Errors?
```bash
cd frontend
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

---

## 📚 Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Twilio SMS API](https://www.twilio.com/docs/sms/)
- [Razorpay Integration](https://razorpay.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

---

## 👨‍💻 Development Tips

### Code Style
- Use consistent indentation (2 spaces)
- Follow ES6+ standards
- Add comments for complex logic
- Use meaningful variable names

### Debugging
```javascript
// Backend: console.log with context
console.log('Event:', { userId, orderId, status });

// Frontend: React DevTools
// Use Redux DevTools for state debugging
```

### Git Workflow
```bash
git checkout -b feature/feature-name
git add .
git commit -m "feat: description"
git push origin feature/feature-name
# Create Pull Request
```

---

## 📄 License

**ISC License** – See `LICENSE` file for details

---

## 💬 Support & Contact

- **Repository:** https://github.com/jerryadi29/the_unbowl_ievable
- **Issues:** Create an issue on GitHub
- **Email:** Contact repository owner

---

## 🙏 Acknowledgments

Built with ❤️ by the development team using modern web technologies.

**Happy coding! 🚀**

On selecting a category → navigates to respective category page.

🥙 Category Pages (Salads / Bowls / Combos)

Each category page shows:

Product image

Name & description

Ratings & reviews

Price

+ / – button to adjust quantity

Add to Cart button

🛒 Cart Page

Shows list of items added

Increase/Decrease quantity

Remove item

Displays total amount

Checkout button

💳 Checkout Page

Users can:

Add delivery details

View order summary

Choose payment method:
✔ Google Pay
✔ PhonePe

Make payment

Place order

👤 User Profile Page

Shows:

User details (name, phone number)

Order history

Subscriptions taken (if any)

🔐 Authentication
Login Page

Login using phone number

Signup Page

Signup using phone number

🛠 Tech Stack (Recommended)
Frontend:

React + Vite

Tailwind CSS

React Query / Redux Toolkit (optional)

React Router

Backend (Optional Future Addition):

Node.js / Django

PostgreSQL / MongoDB

📁 Recommended Folder Structure
The Unbowl-ievable/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   │   ├── Home/
  │   │   ├── Category/
  │   │   ├── Cart/
  │   │   ├── Checkout/
  │   │   ├── Profile/
  │   │   ├── Login/
  │   │   ├── Signup/
  │   ├── assets/
  │   ├── context/ or store/
  │   ├── App.jsx
  │   └── main.jsx
  └── README.md


🧩 Future Enhancements

Coupon codes

Live delivery tracking

Subscription plans (weekly salads)

Admin panel for managing items & orders

AI recommendation engine (optional)
