# TalentFlow — Multi-page MERN Recruitment Management System

Portfolio-focused MERN recruitment application.

Pages:
- `/` Dashboard
- `/candidates` Candidates
- `/candidates/:id` Candidate Details
- `/jobs` Job Positions
- `/applications` Applications
- `/interviews` Interviews
- `/reports` Reports & Analytics

Candidate CRUD is connected to MongoDB. Jobs, Applications and Interviews currently have polished UI placeholders so we can implement them progressively while learning.

Architecture:
React Router → Pages/Components → candidateApi.js → Express Routes → Controllers → Services → Mongoose → MongoDB

Run backend:
`cd backend`
`npm install`
`copy .env.example .env`
`npm run dev`

Run frontend in another terminal:
`cd frontend`
`npm install`
`copy .env.example .env`
`npm run dev`

The project uses the same recruitment domain as the Salesforce Recruitment Management System, so the business model can later be compared across MERN and Salesforce.
