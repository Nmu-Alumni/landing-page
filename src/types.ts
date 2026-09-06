export interface MemberProfile {
  id: string;
  name: string;
  title: string;
  profession: string;
  tenure: string;
  image: string;
  driveId?: string;
  shortBio: string;
  fullBio: string;
  category: "executive" | "directors" | "members" | "trustees";
}
export type EventStatus = "Upcoming" | "Ongoing" | "Past";

export interface Event {
  id: string;
  title: string;
  date: string;      // display string, e.g. "Oct 15, 2026"
  time: string;      // display string, e.g. "18:00 - 23:00 EST"
  location: string;
  image: string;
  status: EventStatus;
}
export interface Trustee {
  id: string;
  name: string;
  title: string;
  profession: string;
  experience?: string;
  tenure: string;
  image: string;
  isChair?: boolean;
  bio?: string;
}

export interface Member {
  id: string;
  title: string;
  name: string;
  profession: string;
  tenure: string;
  image: string;
}
