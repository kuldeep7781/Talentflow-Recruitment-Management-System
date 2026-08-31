import Job from "../models/Job.js";

export function getAllJobs() {
  return Job.find().sort({ createdAt: -1 });
}

export function getJobById(id) {
  return Job.findById(id);
}

export function createJob(data) {
  return Job.create(data);
}

export function updateJob(id, data) {
  return Job.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
}

export function deleteJob(id) {
  return Job.findByIdAndDelete(id);
}
