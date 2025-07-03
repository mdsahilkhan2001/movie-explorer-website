 # 🎬 Movie Explorer Website

A React + Vite movie browsing app using the TMDB API with fallback support and MyList management.

## 📸 Demo

![App Screenshot](src/assets/Screenshot.png)

## 🚀 Features
- Fetches movies using TMDB API (`now_playing`, `popular`, etc.)
- Graceful fallback to mock JSON data on API failure
- MyList feature using localStorage
- Clean UI built with React + Vite
- Postman API testing support

## 🧪 Postman Collection

Test all TMDB endpoints used:
👉 [movie-api-collection.json](postman/movie-api-collection.json)

## 🔧 Getting Started

```bash
git clone https://github.com/mdsahilkhan2001/movie-explorer-website.git
cd movie-explorer-website
npm install
npm run dev
