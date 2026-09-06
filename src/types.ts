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
