# Hsu's Gourmet — Restaurant PWA

A mobile-first web app for guests of **Hsu's Gourmet**, Downtown Atlanta.

📍 192 Peachtree Center Avenue, Atlanta, GA 30303

## Features

- 🥡 To-Go & To-out ordering (primary)
- 🛵 Delivery (DoorDash link)
- 🗓️ Table reservation with date/time picker
- 💳 Auto-pay with saved card or Apple Pay
- ✦ Points & loyalty rewards system
- 📱 PWA — installable on iPhone & Android

## Tech Stack

- Vanilla HTML / CSS / JavaScript
- Firebase (menu, orders, reservations)
- Stripe (payments)
- Hosted on Vercel (via GitHub)

---

## Deploy in 3 Steps

### 1. Use this Template

Click **"Use this template"** on GitHub → Create a new repository.

### 2. Connect Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your new GitHub repo
3. Framework Preset: **Other**
4. Root Directory: `.` (leave default)
5. Add environment variables (Firebase, Stripe keys)
6. Click **Deploy** 🎉

### 3. Your live URL

Vercel will give you a URL like `https://hsus-gourmet.vercel.app`

---

## Project Structure

```
hsus-gourmet/
├── index.html          ← Main app shell
├── hero.jpg            ← Hero image
├── manifest.json       ← PWA manifest
├── sw.js               ← Service worker
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── app.js          ← All logic & menu data
│   └── firebase-menu.js
├── pages/
│   └── admin.html      ← Admin panel
└── api/                ← Serverless API routes
```

## Customization

- **Menu items**: Edit `menuData` in `js/app.js` or via Admin panel
- **Colors**: Change CSS variables at top of `css/style.css`
- **Business hours**: Update in `js/app.js`
- **Address / phone**: Search & replace `192 Peachtree Center Avenue`
