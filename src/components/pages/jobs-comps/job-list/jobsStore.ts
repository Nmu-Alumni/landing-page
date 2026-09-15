import { getItem, setItem } from "../../../../utils/localStore";
import type { JobListing } from "../../../../types";
import { JOBS } from "./jobsData";

const JOBS_KEY = "nmu_alumni_user_jobs";

export function getUserJobs(): JobListing[] {
  return getItem<JobListing[]>(JOBS_KEY, []);
}

export function getAllJobs(): JobListing[] {
  return [...getUserJobs(), ...JOBS];
}

export function addJob(
  job: Omit<JobListing, "id" | "postedDate" | "isUserSubmitted">
): JobListing {
  const newJob: JobListing = {
    ...job,
    id: `j${Date.now()}`,
    postedDate: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    isUserSubmitted: true,
  };

  setItem(JOBS_KEY, [newJob, ...getUserJobs()]);
  return newJob;
}
