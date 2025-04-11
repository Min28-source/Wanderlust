# 🏕️ Wanderlust (Inspired by Apna College)

A full-stack web application inspired by Airbnb, where users can create, edit, delete, and review campgrounds 🏕️. Built as part of [Shraddha Khapra's Sigma 3. 0 Course](https://www.apnacollege.in/course/sigma-3).

---
## Deployed Here
[Wanderlust](https://wanderlust-95rb.onrender.com)


## 📸 Screenshots

Home Listings Page
![Screenshot (217)](https://github.com/user-attachments/assets/5657a978-9088-4e5b-8085-96d29da8e130)


Show Page for every listing
![Screenshot (218)](https://github.com/user-attachments/assets/b5a9793e-7a8d-4bc5-b1c9-7b7188f3c9f2)


Map for listing location
---![Screenshot (219)](https://github.com/user-attachments/assets/07042a86-1811-4620-ad84-89c2d7469dc5)

Add new listing
![Screenshot (220)](https://github.com/user-attachments/assets/d6a92348-4555-4492-8252-a03e8ae3ffd9)

## 🧠 Features

- 🔐 User Authentication using Passportjs (Register/Login/Logout)
- 🏕️ CRUD Operations for Campgrounds
- 📝 Review system with ratings
- 📍 Map Integration (Maptiler/Leaflet)
- 🖼️ Image uploads with Cloudinary
- 🌍 Fully Responsive Design using Bootstrap 5
- 🚨 Flash messages and form validation
- 🔒 Authorization Middleware

---

## 🛠️ Tech Stack

### Frontend:
- HTML
- CSS
- Bootstrap 5
- EJS (Templating Engine)

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose

### Extras:
- Passport.js (for Auth)
- Cloudinary (Image Uploads)
- Maptiler (Maps & Geolocation)
- Express-session & Connect-flash
- Joi (Validation)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
  https://github.com/Min28-source/Wanderlust/pull/new/main
```

### 2. Install dependencies
```
npm install

```

### 3. Set up environment variables

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MAPTILER_API_KEY=your_maptiler_key
DB_URL=mongodb://localhost:27017/wanderlust
SECRET=sessionsecret


### 4. Run the server

```
node app.js

Visit: http://localhost:8080

```

### 🗃️ Folder Structure

#### 📦airbnb-clone
 #### ┣ 📂models
 #### ┣ 📂routes
 #### ┣ 📂public
 #### ┣ 📂views
 #### ┣ 📂middleware
 #### ┣ app.js
 #### ┗ README.md


---
### 🙋‍♀️ Author
#### Min28-source


---
### 💡 Acknowledgements
#### Shraddha Khapra for the amazing Web Development Course

#### Maptiler

#### Cloudinary

---
