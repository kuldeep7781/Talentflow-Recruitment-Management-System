# TalentFlow – Recruitment Management System

A full-stack recruitment management application built with the **MERN stack** for managing candidates and job positions through a responsive web interface and RESTful backend APIs.

## 🚀 Features

### Candidate Management

* Create candidate profiles
* View candidate details
* Update candidate information
* Delete candidates
* Search candidates
* Track candidate status
* Store skills and experience

### Job Position Management

* Create job positions
* View available positions
* View detailed job information
* Update job positions
* Delete job positions
* Manage openings, location, experience, skills, and employment type
* Track job status

### Dashboard

* Candidate statistics
* Available candidate count
* Interviewing candidate count
* Open job position count
* Recent candidates
* Recruitment workspace overview

### UI & UX

* Responsive layout
* React Router navigation
* Reusable React components
* Loading states
* Error handling
* Empty states
* Responsive candidate and job views
* Lucide icons

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* JavaScript
* HTML5
* CSS3
* Vite
* Lucide React

### Backend

* Node.js
* Express.js
* REST APIs
* Mongoose

### Database

* MongoDB

### Development Tools

* Git
* GitHub
* VS Code
* Postman

---

## 🏗️ Project Architecture

The application follows a layered full-stack architecture:

```text
React Frontend
      ↓
API Service Layer
      ↓
Express Routes
      ↓
Controllers
      ↓
Services
      ↓
Mongoose Models
      ↓
MongoDB
```

### Backend Structure

```text
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── candidateController.js
│   └── jobController.js
│
├── middleware/
│   └── errorMiddleware.js
│
├── models/
│   ├── Candidate.js
│   └── Job.js
│
├── routes/
│   ├── candidateRoutes.js
│   └── jobRoutes.js
│
├── services/
│   ├── candidateService.js
│   └── jobService.js
│
├── .env
├── package.json
└── server.js
```

### Frontend Structure

```text
frontend/
│
├── src/
│   ├── components/
│   │   ├── CandidateForm.jsx
│   │   ├── JobForm.jsx
│   │   ├── Layout.jsx
│   │   └── StatCard.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Candidates.jsx
│   │   ├── CandidateDetails.jsx
│   │   ├── Jobs.jsx
│   │   ├── JobDetails.jsx
│   │   ├── Applications.jsx
│   │   ├── Interviews.jsx
│   │   └── Reports.jsx
│   │
│   ├── services/
│   │   ├── candidateApi.js
│   │   └── jobApi.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── .env
├── package.json
└── vite.config.js
```

---

## 🔌 API Endpoints

### Candidates

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| GET    | `/api/candidates`     | Get all candidates  |
| GET    | `/api/candidates/:id` | Get candidate by ID |
| POST   | `/api/candidates`     | Create candidate    |
| PUT    | `/api/candidates/:id` | Update candidate    |
| DELETE | `/api/candidates/:id` | Delete candidate    |

### Job Positions

| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| GET    | `/api/jobs`     | Get all jobs  |
| GET    | `/api/jobs/:id` | Get job by ID |
| POST   | `/api/jobs`     | Create job    |
| PUT    | `/api/jobs/:id` | Update job    |
| DELETE | `/api/jobs/:id` | Delete job    |

### Health Check

```text
GET /api/health
```

Returns the current API status.

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
cd talentflow-recruitment-management-system
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

### 3. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

Frontend normally runs on:

```text
http://localhost:5173
```

---

## 🔄 Application Flow

### Candidate Example

```text
User
 ↓
React Candidate Form
 ↓
candidateApi.js
 ↓
POST /api/candidates
 ↓
Express Route
 ↓
Candidate Controller
 ↓
Candidate Service
 ↓
Mongoose
 ↓
MongoDB
 ↓
JSON Response
 ↓
React State
 ↓
Updated UI
```

### Job Example

```text
User
 ↓
React Job Form
 ↓
jobApi.js
 ↓
POST /api/jobs
 ↓
Express
 ↓
Job Controller
 ↓
Job Service
 ↓
Mongoose
 ↓
MongoDB
 ↓
JSON Response
 ↓
React UI
```

---

## 📚 What This Project Demonstrates

This project was built to practice real full-stack development concepts including:

* React component architecture
* React state and lifecycle
* React Router
* Forms and controlled inputs
* REST API integration
* Asynchronous JavaScript
* HTTP methods
* JSON data exchange
* Express.js routing
* Controller-service separation
* Mongoose schemas and models
* MongoDB CRUD operations
* Error handling
* Loading and empty states
* Responsive frontend development
* Git and GitHub workflow

---

## 🔮 Future Scope

The current version intentionally focuses on **Candidate and Job Position management**.

Potential future extensions include:

* Authentication and role-based access
* Application management
* Interview scheduling
* Resume uploads
* AI-assisted resume parsing
* Candidate-job matching
* LLM-powered recruitment assistant
* RAG-based recruitment knowledge assistant
* Cloud deployment

These features are outside the scope of the current version.

---

## 👨‍💻 Project Purpose

TalentFlow was developed as a portfolio project to demonstrate practical **MERN full-stack development**, including frontend development, backend API design, database integration, and building a real-world business workflow.

The project also provides a foundation for experimenting with future **AI/Generative AI integrations** in recruitment technology.
