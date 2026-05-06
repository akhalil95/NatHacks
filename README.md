# Mirra Call Assistive Mirror

An AI-powered assistive smart mirror designed to guide rehabilitation exercises and daily routines using real-time computer vision, pose estimation, and AR overlays.

Built with FastAPI, React, MediaPipe, and Raspberry Pi, the system provides low-latency visual guidance through on-device processing with optional Google Cloud Vision support.

The project was designed with accessibility and senior-friendly interaction in mind, focusing on real-time feedback, fullscreen usability, and lightweight deployment on Raspberry Pi hardware.

---

# ✨ Features

- Real-time pose and hand tracking using MediaPipe
- AR overlays for guided routines and movement feedback
- FastAPI backend with WebSocket communication
- React + TypeScript frontend with Canvas overlays
- Raspberry Pi + MagicMirror integration
- Senior-friendly fullscreen interface
- Low-latency real-time processing pipeline
- Configurable routine and task system

---

# 🛠️ Tech Stack

## Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## Backend
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv)
![MediaPipe](https://img.shields.io/badge/MediaPipe-FF6F00?style=for-the-badge)

## Infrastructure / Hardware
![Raspberry Pi](https://img.shields.io/badge/RaspberryPi-C51A4A?style=for-the-badge&logo=raspberry-pi)
![MagicMirror](https://img.shields.io/badge/MagicMirror-111111?style=for-the-badge)
![WebSockets](https://img.shields.io/badge/WebSockets-010101?style=for-the-badge)

  ---

   # 🧠 Architecture

```
Camera Feed
   ↓
Vision Pipeline (MediaPipe/OpenCV)
   ↓
FastAPI Backend
   ↓ WebSocket
React Overlay UI
   ↓
MagicMirror Display
```

---

# 🚀 Quick Start

## Backend Setup

Create virtual environment:

```bash
python -m venv .venv
```

Activate environment:

### Windows

```bash
.venv\Scripts\activate
```

### Mac/Linux

```bash
source .venv/bin/activate
```

### 1. Install Backend Dependencies 

```
pip install -r backend/requirements.txt
```
Note: Some additional dependencies are required for the backend to run successfully and are not currently included in the original requirements file.

Install them manually:
```
pip install google-cloud-aiplatform
pip install google-cloud-speech
pip install google-cloud-texttospeech
pip install pydub
pip install python-multipart
```

### 2. Start Backend Server

```
uvicorn backend.app:app --host 0.0.0.0 --port 8000 --reload
```

## 💻 Frontend Setup

### 3. Install Frontend Dependencies

```
npm install
```

### 4. Start Frontend

```
npm run dev
```

## 🪞 MagicMirror Setup

### 5. Install MagicMirror Module

```
cd modules/MMM-AssistiveCoach
npm install
```

### 6. Start MagicMirror

```
npm start
```

---

# 📄 License

MIT







