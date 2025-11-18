# the_unbowl_ievable
A modern salad-ordering web app where users can browse healthy items, add them to cart, and checkout using Google Pay or PhonePe. Includes category pages, phone-number login, user profile, order history, and subscription features.

🥗 LeafMeUp – Salad Ordering Web App

A modern web application where users can browse healthy items, order salads, bowls & combos, add them to cart, checkout, and pay using Google Pay / PhonePe.
Built for fast performance, smooth UI/UX, and a clean frontend architecture.

🚀 Features
✅ User Functionalities

Browse all categories: Salads, Bowls, Combos

View item details:

Image

Ratings & Reviews

Price

Increment/Decrement (+ / –) items

Add items to cart

Update quantity in cart

Checkout

Pay securely using Google Pay or PhonePe

Place order successfully

Login & Signup using phone number (OTP-like flow)

View order history

View subscriptions/plans taken

📄 Pages Overview
🏠 Home Page

Displays all the categories:

Salads

Bowls

Combos

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
leafmeup/
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
