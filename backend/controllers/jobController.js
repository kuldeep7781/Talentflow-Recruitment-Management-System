import * as jobService from "../services/jobService.js";

export async function getJobs(req, res, next) {
  try {
    const jobs = await jobService.getAllJobs();

    res.json(jobs);
  } catch (error) {
    next(error);
  }
}

export async function getJob(req, res, next) {
  try {
    const job = await jobService.getJobById(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.json(job);
  } catch (error) {
    next(error);
  }
}

export async function createJob(req, res, next) {
  try {
    const job = await jobService.createJob(req.body);

    res.status(201).json(job);
  } catch (error) {
    next(error);
  }
}

export async function updateJob(req, res, next) {
  try {
    const job = await jobService.updateJob(req.params.id, req.body);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.json(job);
  } catch (error) {
    next(error);
  }
}

export async function deleteJob(req, res, next) {
  try {
    const job = await jobService.deleteJob(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}
