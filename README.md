# TalentFlow – Recruitment Management System

TalentFlow is a full-stack recruitment management application built with the **MERN stack**. It provides a responsive interface for managing candidates and job positions through RESTful APIs and MongoDB.

The current version focuses on **Candidate Management and Job Position Management**, with additional recruitment pages designed as UI prototypes for future expansion.

---

## 🚀 Implemented Features

### Candidate Management

* Create candidate profiles
* View candidate details
* Update candidate information
* Delete candidates
* Search candidates
* Track candidate status
* Store skills and experience
* MongoDB persistence

### Job Position Management

* Create job positions
* View job positions
* View job details
* Update job positions
* Delete job positions
* Manage job location and department
* Manage employment type
* Manage required skills
* Manage required experience
* Manage number of openings
* Track job status
* MongoDB persistence

### Dashboard

* Total candidate count
* Available candidate count
* Interviewing candidate count
* Hired candidate count
* Total job positions
* Open job positions
* Recent candidates
* Recruitment workspace overview

### Frontend

* Responsive UI
* React Router navigation
* Dynamic candidate and job detail pages
* Reusable React components
* Controlled forms
* Search functionality
* Loading states
* Error handling
* Empty states
* Lucide icons

---

## 🖥️ UI Prototypes

The project currently contains additional interface prototypes for future development:

* Applications
* Interviews
* Reports & Analytics

These pages currently use demonstration data and are **not connected to MongoDB or backend APIs**.

They are intentionally kept as UI prototypes while the core Candidate and Job Position modules are implemented end-to-end.

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

## 🏗️ Architecture

TalentFlow follows a layered full-stack architecture:

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

This separation keeps frontend communication, HTTP handling, business logic, and database operations organized independently.

---

## 📁 Project Structure

### Backend

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
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

### Frontend

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
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔌 REST API

### Candidate Endpoints

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| GET    | `/api/candidates`     | Get all candidates  |
| GET    | `/api/candidates/:id` | Get candidate by ID |
| POST   | `/api/candidates`     | Create candidate    |
| PUT    | `/api/candidates/:id` | Update candidate    |
| DELETE | `/api/candidates/:id` | Delete candidate    |

### Job Endpoints

| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| GET    | `/api/jobs`     | Get all jobs  |
| GET    | `/api/jobs/:id` | Get job by ID |
| POST   | `/api/jobs`     | Create job    |
| PUT    | `/api/jobs/:id` | Update job    |
| DELETE | `/api/jobs/:id` | Delete job    |

### API Health Check

```text
GET /api/health
```

Returns the status of the backend API.

---

## 🔄 Application Flow

### Candidate Creation

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

### Job Creation

```text
User
 ↓
React Job Form
 ↓
jobApi.js
 ↓
POST /api/jobs
 ↓
Express Route
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
React State
 ↓
Updated UI
```

### Dynamic Details

Candidate and job detail pages use the MongoDB document ID from the URL:

```text
/jobs/:id
/candidates/:id
```

React Router extracts the ID using `useParams()`, which is then used to request the corresponding record from the backend.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>

cd talentflow-recruitment-management-system
```

### 2. Backend Setup

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

Backend:

```text
http://localhost:5000
```

### 3. Frontend Setup

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

Frontend:

```text
http://localhost:5173
```

---

## 🔐 Environment Variables

Environment files are intentionally excluded from Git using `.gitignore`.

### Backend

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📚 Concepts Demonstrated

This project demonstrates practical full-stack development concepts including:

* React component architecture
* React state management
* React `useEffect`
* React Router
* Dynamic routes
* URL parameters
* Controlled forms
* REST API integration
* HTTP methods
* JSON data exchange
* Asynchronous JavaScript
* Fetch API
* Express.js routing
* Controllers
* Service layer architecture
* Mongoose schemas and models
* MongoDB CRUD operations
* API error handling
* Loading states
* Empty states
* Responsive UI development
* Git and GitHub

---

## 🔮 Future Scope

The current version intentionally focuses on **Candidates and Job Positions**.

Potential future extensions include:

* Authentication
* Role-based access control
* Application management
* Interview scheduling
* Resume uploads
* AI-assisted resume parsing
* Candidate-job matching
* LLM-powered recruitment assistant
* RAG-based recruitment knowledge assistant
* Cloud deployment

These features are **not implemented in the current version**.

---

## 🎯 Project Purpose

TalentFlow was developed as a portfolio project to demonstrate practical **MERN full-stack development** through a real-world recruitment management use case.

The project focuses on understanding the complete flow from a React interface to REST APIs, Express.js backend logic, Mongoose, and MongoDB persistence while maintaining a modular and maintainable project structure.
