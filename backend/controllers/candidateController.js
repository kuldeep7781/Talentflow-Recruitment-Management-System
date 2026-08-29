import * as candidateService from "../services/candidateService.js";
export async function getCandidates(req, res, next) {
  try {
    res.json(await candidateService.getAllCandidates());
  } catch (e) {
    next(e);
  }
}
export async function getCandidate(req, res, next) {
  try {
    const c = await candidateService.getCandidateById(req.params.id);
    if (!c) return res.status(404).json({ message: "Candidate not found" });
    res.json(c);
  } catch (e) {
    next(e);
  }
}
export async function createCandidate(req, res, next) {
  try {
    res.status(201).json(await candidateService.createCandidate(req.body));
  } catch (e) {
    next(e);
  }
}
export async function updateCandidate(req, res, next) {
  try {
    const c = await candidateService.updateCandidate(req.params.id, req.body);
    if (!c) return res.status(404).json({ message: "Candidate not found" });
    res.json(c);
  } catch (e) {
    next(e);
  }
}
export async function deleteCandidate(req, res, next) {
  try {
    const c = await candidateService.deleteCandidate(req.params.id);
    if (!c) return res.status(404).json({ message: "Candidate not found" });
    res.json({ message: "Candidate deleted successfully" });
  } catch (e) {
    next(e);
  }
}
