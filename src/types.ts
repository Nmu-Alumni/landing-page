export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  status: string;
}

export interface Trustee {
  id: string;
  name: string;
  title: string;
  profession: string;
  tenure: string;
  image: string;
  experience?: string;
  bio?: string;
  isChair?: boolean;
}
export interface Member {
  id: string;
  name: string;

  profession: string;
  title: string,
  tenure: string;
  image: string;
}