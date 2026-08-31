import { NavLink, Outlet } from "react-router-dom";
import {
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  ClipboardList,
  LayoutDashboard,
  Users,
  Bell,
  Search,
} from "lucide-react";
const links = [
  ["/", "Dashboard", LayoutDashboard, true],
  ["/candidates", "Candidates", Users],
  ["/jobs", "Job Positions", BriefcaseBusiness],
  ["/applications", "Applications", ClipboardList],
  ["/interviews", "Interviews", CalendarDays],
  ["/reports", "Reports", BarChart3],
];
export default function Layout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <BriefcaseBusiness size={21} />
          </div>
          <div>
            <strong>TalentFlow</strong>
            <span>Recruitment RMS</span>
          </div>
        </div>
        <nav className="nav">
          <p className="nav-label">WORKSPACE</p>
          {links.map(([to, label, Icon, end]) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="mini-avatar">R</div>
          <div>
            <strong>Recruiter</strong>
            <span>Talent Operations</span>
          </div>
        </div>
      </aside>
      <div className="main-area">
        <header className="topbar">
          <div className="mobile-brand">
            <BriefcaseBusiness size={19} /> TalentFlow
          </div>
          <div className="topbar-search">
            <Search size={17} />
            <span>Search workspace...</span>
          </div>
          <div className="topbar-actions">
            <button className="top-icon">
              <Bell size={18} />
            </button>
            <span className="top-role">Recruiter</span>
            <div className="top-avatar">R</div>
          </div>
        </header>
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
