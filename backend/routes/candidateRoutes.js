import { Router } from "express";
import {
  getCandidates,
  getCandidate,
  createCandidate,
  updateCandidate,
  deleteCandidate,
} from "../controllers/candidateController.js";
const router = Router();
router.get("/", getCandidates);
router.get("/:id", getCandidate);
router.post("/", createCandidate);
router.put("/:id", updateCandidate);
router.delete("/:id", deleteCandidate);
export default router;
