import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { createJob, updateJob } from "../services/jobApi.js";

const initialForm = {
  title: "",
  department: "",
  location: "",
  employmentType: "Full Time",
  description: "",
  requiredSkills: "",
  experienceRequired: "",
  openings: 1,
  status: "Draft",
};

export default function JobForm({ editingJob, onSaved, onCancel }) {
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");

      const jobData = {
        title: form.title,
        department: form.department,
        location: form.location,
        employmentType: form.employmentType,
        description: form.description,

        requiredSkills: form.requiredSkills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),

        experienceRequired: Number(form.experienceRequired) || 0,

        openings: Number(form.openings) || 1,

        status: form.status,
      };

      if (editingJob) {
        await updateJob(editingJob._id, jobData);
      } else {
        await createJob(jobData);
      }

      await onSaved();

      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    if (editingJob) {
      setForm({
        title: editingJob.title || "",
        department: editingJob.department || "",
        location: editingJob.location || "",
        employmentType: editingJob.employmentType || "Full Time",
        description: editingJob.description || "",
        requiredSkills: (editingJob.requiredSkills || []).join(", "),
        experienceRequired: editingJob.experienceRequired ?? "",
        openings: editingJob.openings ?? 1,
        status: editingJob.status || "Draft",
      });
    } else {
      setForm(initialForm);
    }
  }, [editingJob]);

  return (
    <div className="panel form-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">JOB POSITION</p>

          <h2>{editingJob ? "Edit job position" : "Create new position"}</h2>
        </div>

        <button className="icon-button" onClick={onCancel}>
          <X size={18} />
        </button>
      </div>

      {error && <div className="inline-error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="two-col">
          <Field label="Job title">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Frontend Developer"
              required
            />
          </Field>

          <Field label="Department">
            <input
              name="department"
              value={form.department}
              onChange={handleChange}
              placeholder="Engineering"
              required
            />
          </Field>
        </div>

        <div className="two-col">
          <Field label="Location">
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Remote / Indore"
              required
            />
          </Field>

          <Field label="Employment type">
            <select
              name="employmentType"
              value={form.employmentType}
              onChange={handleChange}
            >
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </Field>
        </div>

        <div className="two-col">
          <Field label="Experience required">
            <input
              type="number"
              name="experienceRequired"
              min="0"
              step="0.5"
              value={form.experienceRequired}
              onChange={handleChange}
              placeholder="1"
            />
          </Field>

          <Field label="Number of openings">
            <input
              type="number"
              name="openings"
              min="1"
              value={form.openings}
              onChange={handleChange}
              required
            />
          </Field>
        </div>

        <Field label="Required skills">
          <input
            name="requiredSkills"
            value={form.requiredSkills}
            onChange={handleChange}
            placeholder="React, JavaScript, HTML, CSS"
          />

          <small>Separate skills with commas.</small>
        </Field>

        <Field label="Job description">
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the role and responsibilities..."
            rows="5"
            required
          />
        </Field>

        <Field label="Status">
          <select name="status" value={form.status} onChange={handleChange}>
            <option>Draft</option>
            <option>Open</option>
            <option>Closed</option>
          </select>
        </Field>

        <div className="form-actions">
          <button type="button" className="secondary-button" onClick={onCancel}>
            Cancel
          </button>

          <button className="primary-button" disabled={saving}>
            {saving
              ? "Saving..."
              : editingJob
                ? "Update Position"
                : "Create Position"}
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}
