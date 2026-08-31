import { useEffect, useMemo, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Candidates from "./pages/Candidates.jsx";
import CandidateDetails from "./pages/CandidateDetails.jsx";
import Jobs from "./pages/Jobs.jsx";
import { getCandidates } from "./services/candidateApi.js";
import Applications from "./pages/Applications.jsx";
import Interviews from "./pages/Interviews.jsx";
import Reports from "./pages/Reports.jsx";
import JobDetails from "./pages/JobDetails.jsx";
import { getJobs } from "./services/jobApi.js";

export default function App() {
  const [candidates, setCandidates] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  async function loadCandidates() {
    try {
      setLoading(true);
      setCandidates(await getCandidates());
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }
  async function loadJobs() {
  try {
    setJobs(await getJobs());
  } catch (error) {
    console.error(error);
  }
}
  useEffect(() => {
    loadCandidates();
    loadJobs();
  }, []);
  const stats = useMemo(() => ({
  total: candidates.length,

  available: candidates.filter(
    (candidate) => candidate.status === "Available"
  ).length,

  interviewing: candidates.filter(
    (candidate) => candidate.status === "Interviewing"
  ).length,

  hired: candidates.filter(
    (candidate) => candidate.status === "Hired"
  ).length,

  totalJobs: jobs.length,

  openJobs: jobs.filter(
    (job) => job.status === "Open"
  ).length,

  draftJobs: jobs.filter(
    (job) => job.status === "Draft"
  ).length,

  closedJobs: jobs.filter(
    (job) => job.status === "Closed"
  ).length

}), [candidates, jobs]);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Dashboard
              stats={stats}
              candidates={candidates}
              loading={loading}
            />
          }
        />
        <Route
          path="/candidates"
          element={
            <Candidates
              candidates={candidates}
              loading={loading}
              onReload={loadCandidates}
            />
          }
        />
        <Route path="/candidates/:id" element={<CandidateDetails />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/reports" element={<Reports stats={stats} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      
    </Routes>
  );
}
