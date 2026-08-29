import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  MapPin,
  Users,
  Plus,
  AlertCircle,
} from "lucide-react";

import { deleteJob, getJobs } from "../services/jobApi.js";
import { Link } from "react-router-dom";
import JobForm from "../components/JobForm.jsx";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editingJob, setEditingJob] = useState(null);
  const [showForm, setShowForm] = useState(false);

  async function loadJobs() {
    try {
      setLoading(true);
      setError("");

      const data = await getJobs();

      setJobs(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadJobs();
  }, []);

  async function handleDelete(id) {
    const confirmed = window.confirm("Delete this job position?");

    if (!confirmed) return;

    try {
      await deleteJob(id);

      await loadJobs();
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }

  return (
    <>
      <section className="page-title-row">
        <div>
          <p className="eyebrow">HIRING PLAN</p>

          <h1>Job Positions</h1>

          <p>Define roles, requirements and open positions.</p>
        </div>

        <button className="primary-button" onClick={() => setShowForm(true)}>
          <Plus size={16} />
          Create Position
        </button>
      </section>

      {showForm && (
        <JobForm
          onSaved={async () => {
            setShowForm(false);
            await loadJobs();
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {error && (
        <div className="alert">
          <AlertCircle size={16} />
          {error}
        </div>
      )}

      {loading ? (
        <div className="panel">
          <div className="empty-state">
            <div className="spinner" />
            <p>Loading jobs...</p>
          </div>
        </div>
      ) : jobs.length === 0 ? (
        <div className="panel">
          <div className="empty-state">
            <BriefcaseBusiness size={40} />

            <h3>No job positions yet</h3>

            <p>Create your first job position to start hiring.</p>
          </div>
        </div>
      ) : (
        <div className="job-grid">
          {jobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              onEdit={() => {
                setEditingJob(job);
                setShowForm(true);
              }}
              onDelete={() => handleDelete(job._id)}
            />
          ))}
        </div>
      )}
    </>
  );
}

function JobCard({ job, onEdit, onDelete }) {
  return (
    <article className="job-card panel">
      <div className="job-icon">
        <BriefcaseBusiness size={22} />
      </div>

      <div className="job-top">
        <span className={`status ${job.status.toLowerCase()}`}>
          {job.status}
        </span>
      </div>

      <h2>{job.title}</h2>

      <p className="job-dept">{job.department}</p>

      <div className="job-meta">
        <span>
          <MapPin size={14} />
          {job.location}
        </span>

        <span>
          <Users size={14} />
          {job.openings} openings
        </span>
      </div>

      <div className="skills job-skills">
        {job.requiredSkills?.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="job-footer">
        <span>{job.experienceRequired}+ years experience</span>

        <div className="row-actions">
          <button className="text-link" onClick={onEdit}>
            Edit
          </button>

          <button className="text-link" onClick={onDelete}>
            Delete
          </button>

          <Link className="text-link" to={`/jobs/${job._id}`}>
            View details →
          </Link>
        </div>
      </div>
    </article>
  );
}
