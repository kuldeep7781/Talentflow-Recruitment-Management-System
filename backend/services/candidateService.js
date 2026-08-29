import Candidate from "../models/Candidate.js";
export function getAllCandidates() {
  return Candidate.find().sort({ createdAt: -1 });
}
export function getCandidateById(id) {
  return Candidate.findById(id);
}
export function createCandidate(data) {
  return Candidate.create(data);
}
export function updateCandidate(id, data) {
  return Candidate.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
}
export function deleteCandidate(id) {
  return Candidate.findByIdAndDelete(id);
}
