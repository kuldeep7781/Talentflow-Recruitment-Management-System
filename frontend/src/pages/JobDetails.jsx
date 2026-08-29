import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BriefcaseBusiness,
  MapPin,
  Users,
  Clock3,
  FileText
} from "lucide-react";

import { getJob } from "../services/jobApi.js";

export default function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadJob() {
      try {
        setLoading(true);
        setError("");

        const data = await getJob(id);

        setJob(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadJob();
  }, [id]);

  if (loading) {
    return (
      <div className="empty-state page-empty">
        <div className="spinner" />
        <p>Loading job...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert">
        {error}
      </div>
    );
  }

  if (!job) {
    return (
      <div className="empty-state page-empty">
        <BriefcaseBusiness size={40} />
        <h3>Job not found</h3>
      </div>
    );
  }

  return (
    <>
      <Link to="/jobs" className="back-link">
        <ArrowLeft size={16} />
        Back to Job Positions
      </Link>

      <section className="profile-header panel">

        <div className="large-avatar">
          <BriefcaseBusiness size={30} />
        </div>

        <div className="profile-main">

          <p className="eyebrow">
            JOB POSITION
          </p>

          <h1>{job.title}</h1>

          <p>
            {job.department}
          </p>

          <span
            className={`status ${job.status.toLowerCase()}`}
          >
            {job.status}
          </span>

        </div>

      </section>

      <div className="details-grid">

        <div className="panel">

          <div className="panel-heading">
            <div>
              <p className="eyebrow">
                POSITION DETAILS
              </p>

              <h2>
                Job information
              </h2>
            </div>
          </div>

          <Info
            icon={<MapPin />}
            label="Location"
            value={job.location}
          />

          <Info
            icon={<Users />}
            label="Openings"
            value={`${job.openings} positions`}
          />

          <Info
            icon={<Clock3 />}
            label="Employment Type"
            value={job.employmentType}
          />

          <Info
            icon={<BriefcaseBusiness />}
            label="Experience"
            value={`${job.experienceRequired}+ years`}
          />

        </div>

        <div className="panel">

          <div className="panel-heading">
            <div>
              <p className="eyebrow">
                REQUIREMENTS
              </p>

              <h2>
                Required skills
              </h2>
            </div>
          </div>

          <div className="skills large-skills">

            {job.requiredSkills?.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}

          </div>

        </div>

      </div>

      <div className="panel description-panel">

        <div className="panel-heading">

          <div>
            <p className="eyebrow">
              ROLE DESCRIPTION
            </p>

            <h2>
              About this position
            </h2>
          </div>

          <FileText size={20} />

        </div>

        <p className="job-description">
          {job.description}
        </p>

      </div>
    </>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="info-row">

      <div className="module-icon">
        {icon}
      </div>

      <div>
        <small>{label}</small>
        <strong>{value}</strong>
      </div>

    </div>
  );
}