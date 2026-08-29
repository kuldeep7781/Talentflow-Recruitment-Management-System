import { Link } from "react-router-dom";
import {
  Users,
  UserPlus,
  Search,
  CheckCircle2,
  ArrowRight,
  CalendarDays,
  BriefcaseBusiness,
} from "lucide-react";
import StatCard from "../components/StatCard.jsx";
export default function Dashboard({ stats, candidates, loading }) {
  const recent = candidates.slice(0, 5);
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">RECRUITMENT OPERATIONS</p>
          <h1>Good morning, recruiter.</h1>
          <p>
            Track your hiring pipeline, candidates and interviews from one
            workspace.
          </p>
        </div>
        <Link className="primary-button link-button" to="/candidates">
          Add Candidate <ArrowRight size={16} />
        </Link>
      </section>
      <section className="stats-grid">
        <StatCard
          icon={<Users />}
          label="Total Candidates"
          value={stats.total}
          note="In talent pool"
        />
        <StatCard
          icon={<UserPlus />}
          label="Available"
          value={stats.available}
          note="Ready for opportunities"
        />
        <StatCard
          icon={<Search />}
          label="Interviewing"
          value={stats.interviewing}
          note="Active interview stage"
        />
        <StatCard
          icon={<BriefcaseBusiness />}
          label="Open Positions"
          value={stats.openJobs}
          note={`${stats.totalJobs} total positions`}
        />
      </section>
      <section className="dashboard-grid">
        <div className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">RECENT TALENT</p>
              <h2>Latest candidates</h2>
            </div>
            <Link className="text-link" to="/candidates">
              View all <ArrowRight size={15} />
            </Link>
          </div>
          {loading ? (
            <Loading />
          ) : recent.length === 0 ? (
            <Empty />
          ) : (
            <div className="candidate-list">
              {recent.map((c) => (
                <Link
                  className="candidate-row"
                  key={c._id}
                  to={`/candidates/${c._id}`}
                >
                  <div className="avatar">{c.name?.[0]?.toUpperCase()}</div>
                  <div className="row-main">
                    <strong>{c.name}</strong>
                    <span>{c.email}</span>
                  </div>
                  <span className={`status ${c.status.toLowerCase()}`}>
                    {c.status}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="panel overview-panel">
          <p className="eyebrow">WORKSPACE</p>
          <h2>Recruitment modules</h2>
          <Module
            icon={<BriefcaseBusiness />}
            title="Job Positions"
            text="Manage open roles and hiring requirements."
          />
          <Module
            icon={<CalendarDays />}
            title="Interviews"
            text="Schedule interviews and capture feedback."
          />
          <Module
            icon={<Search />}
            title="Applications"
            text="Track candidates through your hiring pipeline."
          />
        </div>
      </section>
    </>
  );
}
function Module({ icon, title, text }) {
  return (
    <div className="module-row">
      <div className="module-icon">{icon}</div>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}
function Loading() {
  return (
    <div className="empty-state">
      <div className="spinner" />
      <p>Loading candidates...</p>
    </div>
  );
}
function Empty() {
  return (
    <div className="empty-state">
      <Users size={36} />
      <p>No candidates yet. Add your first candidate.</p>
    </div>
  );
}
