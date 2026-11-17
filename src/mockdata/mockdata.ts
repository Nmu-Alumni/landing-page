import type { Member, Trustee } from "../types";


export const chair: Trustee = {
  id: "1",
  name: "Chief Emeka Nwosu, SAN",
  title: "Chairman, Board of Trustees",
  profession: "Maritime Law Practitioner",
  experience: "32 years",
  tenure: "Appointed 2024 — Expires 2029",
  image: "/images/chairman.jpg",
  isChair: true,
  bio:
    "Chief Emeka Nwosu is a Senior Advocate of Nigeria with over three decades of practice in maritime and admiralty law. He has served as legal counsel to NIMASA and the Nigerian Ports Authority, and is a Fellow of the Chartered Institute of Arbitrators.",
};

export const trustees: Trustee[] = [
  {
    id: "2",
    name: "Prof. Ngozi Obi-Eze",
    title: "Trustee",
    profession: "Maritime Education",
    experience: "28 years",
    tenure: "2024–2029",
    image: "/images/trustee1.jpg",
  },
  {
    id: "3",
    name: "Engr. Salisu Bello",
    title: "Trustee",
    profession: "Marine Engineering",
    experience: "25 years",
    tenure: "2024–2029",
    image: "/images/trustee2.jpg",
  },
  {
    id: "4",
    name: "Dr. Amara Bassey",
    title: "Trustee",
    profession: "Port Operations & Logistics",
    experience: "20 years",
    tenure: "2024–2029",
    image: "/images/trustee3.jpg",
  },
  {
    id: "5",
    name: "Barr. Chidi Okonkwo",
    title: "Trustee",
    profession: "Corporate Governance",
    experience: "18 years",
    tenure: "2024–2029",
    image: "/images/trustee4.jpg",
  },
];




export const president: Trustee = {
  id: "1",
  name: "Capt. Daniel Okafor",
  title: "National President",
  profession: "Master Mariner",
  experience: "30 years",
  tenure: "Appointed 2024 — Expires 2027",
  image: "/images/president.jpg",
  bio:
    "Capt. Daniel Okafor has over thirty years of experience in maritime operations, international shipping, and leadership. He oversees the strategic direction of the Association.",
};

export const executives: Trustee[] = [
  {
    id: "2",
    name: "Mrs. Ada Nnaji",
    title: "Vice President",
    profession: "Marine Administration",
    experience: "20 years",
    tenure: "2024–2027",
    image: "/images/vp.jpg",
  },

  {
    id: "3",
    name: "Engr. Musa Ibrahim",
    title: "Secretary General",
    profession: "Marine Engineering",
    experience: "22 years",
    tenure: "2024–2027",
    image: "/images/sec.jpg",
  },

  {
    id: "4",
    name: "Mrs. Faith Williams",
    title: "Treasurer",
    profession: "Finance",
    experience: "18 years",
    tenure: "2024–2027",
    image: "/images/treasurer.jpg",
  },

  {
    id: "5",
    name: "Dr. Kelvin James",

    title: "Public Relations Officer",

    profession: "Communications",

    experience: "15 years",

    tenure: "2024–2027",

    image: "/images/pro.jpg",
  },
];


export const directors: Member[] = [
  {
    id: "1",
    title: "Director",
    name: "Mr. Kelechi Obi",
    profession: "Director of Public Affairs & Communications",
    tenure: "2026 – 2028",
    image: "/images/director1.jpg",
  },
  {
    id: "2",
    title: "Director",
    name: "Miss Aisha Musa",
    profession: "Director of Membership & Database Management",
    tenure: "2026 – 2028",
    image: "/images/director2.jpg",
  },
  {
    id: "3",
    title: "Director",
    name: "Engr. Femi Adeyemi",
    profession: "Director of Welfare Programme & Events",
    tenure: "2026 – 2028",
    image: "/images/director3.jpg",
  },
  {
    id: "4",
    title: "Director",
    name: "Dr. Grace Nnadi",
    profession: "Director of Education & Research",
    tenure: "Faculty-based rotation • 2026 – 2028",
    image: "/images/director4.jpg",
  },
  {
    id: "5",
    title: "Director",
    name: "Capt. Hassan Yusuf",
    profession: "Director of Maritime Affairs",
    tenure: "Faculty-based rotation • 2026 – 2028",
    image: "/images/director5.jpg",
  },
  {
    id: "6",
    title: "Director",
    name: "Mrs. Ngozi Eze",
    profession: "Director of Career & Professional Development",
    tenure: "2026 – 2028",
    image: "/images/director6.jpg",
  },
  {
    id: "7",
    title: "Director",
    name: "Mr. Seun Adeleke",
    profession: "Director of Mentorship & Student Relations",
    tenure: "2026 – 2028",
    image: "/images/director7.jpg",
  },
  {
    id: "8",
    title: "Director",
    name: "Miss Chidinma Okafor",
    profession: "Director of Institutional Advancement & Development",
    tenure: "2026 – 2028",
    image: "/images/director8.jpg",
  },
];


export const provostRepresentatives: Member[] = [
  {
    id: "1",
    title: "Provost Marshal",
    name: "Mr. Rotimi Oladele",
    profession: "Provost Marshal",
    tenure: "2026 – 2028",
    image: "/images/provost-marshal.jpg",
  },

  {
    id: "2",
    title: "Faculty Rep — Transport & Logistics",
    name: "Miss Amarachi Eze",
    profession: "Faculty Representative",
    tenure: "2026 – 2028",
    image: "/images/faculty-rep-1.jpg",
  },

  {
    id: "3",
    title: "Faculty Rep — Engineering",
    name: "Engr. Musa Abdullahi",
    profession: "Faculty Representative",
    tenure: "2026 – 2028",
    image: "/images/faculty-rep-2.jpg",
  },

  {
    id: "4",
    title: "Faculty Rep — Environmental Science",
    name: "Miss Isioma Nwachukwu",
    profession: "Faculty Representative",
    tenure: "2026 – 2028",
    image: "/images/faculty-rep-3.jpg",
  },
];