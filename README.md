# 🔒 Secure Image Steganography - CryptImage

## 📌 Overview
Secure Image Steganography is a **web-based tool** that allows users to **hide secret messages inside images** and retrieve them later. This project utilizes **React.js** for the frontend and a **Flask-based API** for encoding and decoding messages within images.

---

## 🛠️ Technologies Used
### **Frontend (React.js)**
- React.js (JavaScript)
- HTML5 & CSS3 (Modern UI with Flexbox)
- Axios (for API requests)

### **Backend (Flask - Python)**
- Flask (Lightweight Python Web Framework)
- Pillow & OpenCV (for image processing)
- NumPy (for handling image data)

---

## 🚀 Features
✅ **Encode Message** – Hide a secret text inside an image  
✅ **Decode Message** – Extract hidden text from an encoded image  
✅ **Preview Image** – View the selected image before encoding/decoding  
✅ **Download Encoded Image** – Save the image after hiding a message  
✅ **Modern UI** – Responsive and user-friendly  

---

## 📂 Project Structure
```md
steganography-website/
│── frontend/            # React.js Frontend
│   ├── public/          
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── App.js       # Main React App component
│   │   ├── App.css      # Styling for the frontend
│   │   ├── index.js     # Entry point for React app
│   ├── package.json     # React dependencies & scripts
│   ├── package-lock.json
│
│── backend/             # Flask Backend
│   ├── app.py           # Main Flask application
│   ├── steganography.py # Encoding & Decoding logic
│   ├── requirements.txt # Python dependencies
│   ├── static/          # Stores static files (if needed)
│   ├── templates/       # Stores HTML templates (if used)
│
│── README.md            # Project Documentation
│── .gitignore           # Git ignored files (e.g., node_modules, venv)
│── LICENSE              # License Information
```

---

## 🎯 How to Run the Project

### **🔹 Step 1: Clone the Repository**
```sh
git clone https://github.com/LadiGayathri07/Steganography-App.git
cd steganography-website
```

### **🔹 Step 2: Install Dependencies**
#### **Frontend (React)**
```sh
cd frontend
npm install
npm start  # Runs the frontend at localhost:3000
```

#### **Backend (Flask)**
```sh
cd backend
pip install -r requirements.txt
python app.py  # Runs the backend at localhost:5000
```

---

## 📌 How It Works
1️⃣ **Upload an image** (PNG, JPG).  
2️⃣ **Enter a secret message** and click "Encode".  
3️⃣ **Download the encoded image**.  
4️⃣ **To decode**, upload an encoded image and click "Decode".  
5️⃣ The hidden message will be revealed! 🎉  

---

## 📜 License
This project is open-source and licensed under the **MIT License**.  

---

## 🤝 Contributing
Pull requests are welcome! If you have suggestions, feel free to fork this repository and contribute.  

---


🚀 **Enjoy Secure Image Steganography!** 🔥
