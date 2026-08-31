const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function parseResponse(response) {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export async function getJobs() {
  const response = await fetch(`${API_URL}/jobs`);

  return parseResponse(response);
}

export async function getJob(id) {
  const response = await fetch(`${API_URL}/jobs/${id}`);

  return parseResponse(response);
}

export async function createJob(job) {
  const response = await fetch(`${API_URL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  return parseResponse(response);
}

export async function updateJob(id, job) {
  const response = await fetch(`${API_URL}/jobs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  return parseResponse(response);
}

export async function deleteJob(id) {
  const response = await fetch(`${API_URL}/jobs/${id}`, {
    method: "DELETE",
  });

  return parseResponse(response);
}
