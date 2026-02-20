# 🥄 Urban Spoon - Premium Restaurant Reservation System
> **Live Demo:** [https://urban-spoon-fe.vercel.app/](https://urban-spoon-fe.vercel.app/)

---
**Urban Spoon** ek advanced Full-Stack (MERN) web application hai jo modern UI/UX principles aur interactive elements par focused hai. Is project ko users ko ek premium booking experience dene aur admins ko ek clean management interface dene ke liye design kiya gaya hai.

---

## 🚀 Live Features

### 🎨 Innovative UI/UX
* **Adaptive Theme Switcher:** Smooth transition ke saath Dark aur Light mode.
* **Custom Spoon Cursor:** Light mode mein ek interactive 3D Spoon cursor jo click karne par rotate hota hai.
* **Web Audio API Integration:** Bina kisi external audio file ke, browser engine ka use karke metallic "Ting" sound generate kiya gaya hai.
* **Neon Glow Effect:** Dark mode mein mouse ke saath move hone wala dynamic glow cursor.
* **Glassmorphism Design:** Modern transparent elements with backdrop blur effects.

### 🍽️ Customer Experience
* **3D Filterable Menu:** 15+ dishes ka curated menu jise categories ke base par filter kiya ja sakta hai.
* **Smart Reservation Form:** Real-time validation aur `framer-motion` animations ke saath.
* **Booking Summary:** Form submit hone ke baad customer ko unki details ka digital receipt card dikhta hai.

### 🛡️ Admin Power Room
* **Real-time Dashboard:** Ek hi screen par saari bookings ka overview.
* **Live Search & Analytics:** Customer ke naam ya phone se instant search aur total guests ka automatic calculation.
* **CRUD Operations:** Bookings ko manage aur delete karne ke liye secure API calls.
* **Toast Notifications:** Har action par `react-hot-toast` ke through instant feedback.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js (Vite), Tailwind CSS, Framer Motion |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Icons & UI** | Lucide React, React Hot Toast |
| **Audio** | Web Audio API (Browser Built-in) |

---

## ⚙️ Installation & Setup

### 1. Repository Clone Karein
```bash
git clone [https://github.com/your-username/urban-spoon.git](https://github.com/your-username/urban-spoon.git)
cd urban-spoon
```

## 2. Frontend Setup
```Bash

cd furban-spoon-v2
npm install
```

## 3. Environment Variable Config
Frontend root mein ek .env file banayein:
```
VITE_API_URL=http://localhost:5000/api
```

## 4. Run the Project
```Bash

npm run dev

```


# 🧠 Technical Deep Dive
## 🔊 Procedural Audio Generation

* Humein is project ke liye kisi external .mp3 ki zaroorat nahi padi. Humne Web Audio API ka use karke real-time frequency generate ki hai:
JavaScript

### // Metallic Pitch Logic
```
oscillator.frequency.setValueAtTime(1400, audioCtx.currentTime); 

// Fast Decay (Sound fade-out logic)
gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.1); 
```
## 🖱️ Adaptive Cursor Logic

### Tailwind CSS ki dark class aur React state ka use karke cursor ko dynamically switch kiya gaya hai:

### Light Mode: cursor: none apply karke custom 🥄 Spoon element render hota hai jo mouse ke coordinates ko follow karta hai.

### Dark Mode: Glow effect ke liye ek custom div blur-[100px] ke saath mouse position par move hota hai, jo ek futuristic feel deta hai.# urban-spoon-FE
