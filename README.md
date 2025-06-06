
# 🌍 MakeATrip – AI-Powered Sustainable Trip Planner

MakeATrip is an AI-driven travel planning application that simplifies and personalizes your trip planning experience. By leveraging Google Maps, Gemini API, Firebase, and Auth0, it offers a smart and secure way to build travel itineraries tailored to your needs.

---

## ✨ Features

- 🌐 Google Maps for location intelligence
- 🤖 Gemini AI for personalized recommendations
- 🔒 Auth0 for secure authentication
- ☁️ Firebase for real-time data management
- ⚡ Fast and user-friendly interface built with modern web technologies
- 📦 Modular code structure using Vite and TailwindCSS

---

## 🔧 Project Structure

- `index.html` – Entry HTML file
- `.env` – API keys and configuration variables (not for public sharing)
- `jsconfig.json` – Path aliases configuration
- `components.json` – Component styling and structure settings
- `src/` – Main source folder with application logic (referenced in jsconfig)

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/makeatrip.git
   cd makeatrip
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment:**
   - Create a `.env` file (example provided) with valid API keys from Google, Firebase, Gemini, and Auth0.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Visit the app:**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔐 Environment Variables (in `.env`)
```env
VITE_GOOGLE_MAP_API_KEY=
VITE_GEMINI_API_KEY=
VITE_DOMAIN_NAME=
VITE_AUTH0_CLIENT_ID=
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

---

## 📸 Preview

> Below is a basic HTML shell used in the app:

```html
<!-- index.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Make A Trip</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Developed By

Nithin – Final Year Computer Science (Data Science) Student  
Anurag University  
Passionate about AI and Travel Tech 🚀

---

