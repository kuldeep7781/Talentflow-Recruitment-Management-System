const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function parseResponse(response) {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export async function getCandidates() {
  const response = await fetch(`${API_URL}/candidates`);

  return parseResponse(response);
}

export async function getCandidate(id) {
  const response = await fetch(`${API_URL}/candidates/${id}`);

  return parseResponse(response);
}

export async function createCandidate(candidate) {
  const response = await fetch(`${API_URL}/candidates`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(candidate),
  });

  return parseResponse(response);
}

export async function updateCandidate(id, candidate) {
  const response = await fetch(`${API_URL}/candidates/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(candidate),
  });

  return parseResponse(response);
}

export async function deleteCandidate(id) {
  const response = await fetch(`${API_URL}/candidates/${id}`, {
    method: "DELETE",
  });

  return parseResponse(response);
}
