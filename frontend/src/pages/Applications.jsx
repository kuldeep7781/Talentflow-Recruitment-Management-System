import {
  ClipboardList,
  Users,
  ArrowRight,
  Clock3,
  CheckCircle2,
} from "lucide-react";
export default function Applications() {
  const cols = [
    ["Applied", ClipboardList, ["Kuldeep Sharma", "Aman Verma"]],
    ["Screening", Clock3, ["Rahul Sharma", "Priya Singh"]],
    ["Shortlisted", Users, ["Amit Patel"]],
    ["Selected", CheckCircle2, ["Neha Joshi"]],
  ];
  return (
    <>
      <section className="page-title-row">
        <div>
          <p className="eyebrow">HIRING PIPELINE</p>
          <h1>Applications</h1>
          <p>Track candidates from application to selection.</p>
        </div>
      </section>
      <div className="kanban">
        {cols.map(([title, Icon, items]) => (
          <section className="kanban-column" key={title}>
            <div className="kanban-title">
              <span>
                <Icon size={16} />
                {title}
              </span>
              <b>{items.length}</b>
            </div>
            {items.map((name) => (
              <article className="kanban-card" key={name}>
                <div className="avatar">{name[0]}</div>
                <div>
                  <strong>{name}</strong>
                  <p>Frontend Developer</p>
                </div>
                <ArrowRight size={15} />
              </article>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
