import { getItem, setItem } from "../../../../utils/localStore";
import type { MentorRequest, MentorRequestStatus } from "../../../../types";

const REQUESTS_KEY = "nmu_alumni_mentor_requests";

export function getAllRequests(): MentorRequest[] {
  return getItem<MentorRequest[]>(REQUESTS_KEY, []);
}

export function getRequestsForUser(userId: string): MentorRequest[] {
  return getAllRequests().filter((r) => r.requesterId === userId);
}

export function getRequestsForMentor(mentorId: string): MentorRequest[] {
  return getAllRequests().filter((r) => r.mentorId === mentorId);
}

export function updateRequestStatus(
  requestId: string,
  status: MentorRequestStatus
): void {
  const updated = getAllRequests().map((r) =>
    r.id === requestId ? { ...r, status } : r
  );
  setItem(REQUESTS_KEY, updated);
}

export function addMentorRequest(
  request: Omit<MentorRequest, "id" | "status" | "createdAt">
): MentorRequest {
  const newRequest: MentorRequest = {
    ...request,
    id: `r${Date.now()}`,
    status: "Pending",
    createdAt: new Date().toISOString(),
  };

  setItem(REQUESTS_KEY, [...getAllRequests(), newRequest]);
  return newRequest;
}

export function hasPendingRequest(mentorId: string, requesterId: string): boolean {
  return getAllRequests().some(
    (r) => r.mentorId === mentorId && r.requesterId === requesterId
  );
}
