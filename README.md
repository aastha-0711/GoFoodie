# 🍽️ GoFood - A Modern Food Ordering Application

GoFood is a full-stack food delivery platform that simplifies online food ordering. From live location detection during signup to browsing food items like 🍕 Pizza, 🍛 Biryani, and 🌶️ Starters — GoFood offers a seamless and responsive user experience with secure authentication and detailed order tracking.

---

## ✨ Features

- 🔐 **User Authentication**
  - Secure login/signup using JWT tokens and password hashing with bcryptjs.

- 📍 **Live Location Detection**
  - Uses OpenCage Geocoding API to auto-fetch your address during signup.

- 🍽️ **Browse by Category**
  - Food items are categorized into:
    - 🍕 Pizza  
    - 🍛 Biryani  
    - 🌶️ Starters  

- 🔎 **Search Functionality**
  - Search for your favorite dish instantly.

- 🛒 **Dynamic Cart Management**
  - Add, remove, and update items in your cart with quantity and size options.

- 📦 **Order History**
  - See your previous orders with full details and timestamps.

- 📱 **Responsive UI**
  - Built using Bootstrap for smooth experience across devices.

---

## 🧰 Tech Stack

| Layer      | Technology                                |
|------------|--------------------------------------------|
| Frontend   | React.js, Bootstrap, HTML5/CSS3, JavaScript (ES6) |
| Backend    | Node.js, Express.js                        |
| Database   | MongoDB (with Mongoose ODM)                |
| Auth       | JWT (JSON Web Tokens), bcryptjs            |
| APIs       | OpenCage Geocoding API, Fetch API, Axios   |

---

## 🖥️ Screenshots

> Replace the placeholders below with actual image links once uploaded to your `images/` folder.

### 🔐 Login Page  
![Login](./images/Screenshot%202025-06-30%20025831.png)

---

### 📝 Signup Page (with Live Location Detection)  
![Signup](./images/Screenshot%202025-06-30%20025839.png)

---

### 🍽️ Home Page – Food Categories  
#### 🍕 Pizza  
![Pizza](./images/Screenshot%202025-06-30%20035654.png)

#### 🍛 Biryani  
![Biryani](./images/Screenshot%202025-06-30%20025755.png)

#### 🌶️ Starters  
![Starters](./images/Screenshot%202025-06-30%20025810.png)

---

### 🏠 Overview of All Categories  
![Home Overview](./images/Screenshot%202025-06-30%20025740.png)

---

### 🛒 Cart Page  
![Cart](./images/Screenshot%202025-06-30%20035630.png)

---

### 📜 Previous Orders Page  
![Order History](./images/Screenshot%202025-06-30%20035712.png)

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (LTS)
- MongoDB (local or Atlas)
- OpenCage Geocoding API Key

---

### 🛠️ Installation & Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/GoFood.git
cd GoFood
