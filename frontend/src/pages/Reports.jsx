import {
  BarChart3,
  Users,
  BriefcaseBusiness,
  CalendarDays,
  TrendingUp,
} from "lucide-react";
import StatCard from "../components/StatCard.jsx";
export default function Reports({ stats }) {
  return (
    <>
      <section className="page-title-row">
        <div>
          <p className="eyebrow">INSIGHTS</p>
          <h1>Reports & Analytics</h1>
          <p>Understand your recruitment pipeline and hiring activity.</p>
        </div>
      </section>
      <section className="stats-grid">
        <StatCard icon={<Users />} label="Talent Pool" value={stats.total} />
        <StatCard
          icon={<BriefcaseBusiness />}
          label="Open Positions"
          value="2"
        />
        <StatCard icon={<CalendarDays />} label="Interviews" value="3" />
        <StatCard icon={<TrendingUp />} label="Hiring Rate" value="18%" />
      </section>
      <div className="dashboard-grid">
        <div className="panel chart-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">PIPELINE</p>
              <h2>Applications by stage</h2>
            </div>
            <BarChart3 size={20} />
          </div>
          <div className="fake-chart">
            {[70, 52, 38, 25, 15].map((v, i) => (
              <div className="bar-group" key={i}>
                <div className="bar" style={{ height: `${v}%` }}></div>
                <span>
                  {
                    ["Applied", "Screening", "Shortlist", "Interview", "Hired"][
                      i
                    ]
                  }
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <p className="eyebrow">ROADMAP</p>
          <h2>Next modules</h2>
          <ul className="roadmap-list">
            <li>Persist Jobs, Applications and Interviews</li>
            <li>Authentication and recruiter roles</li>
            <li>Resume uploads</li>
            <li>AI candidate matching and RAG assistant</li>
          </ul>
        </div>
      </div>
    </>
  );
}
