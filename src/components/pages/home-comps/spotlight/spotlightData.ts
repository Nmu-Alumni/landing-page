import type { SpotlightPerson } from "../../../../types";

export const SPOTLIGHTS: Record<"Alumnus" | "Cadet", SpotlightPerson> = {
  Alumnus: {
    type: "Alumnus",
    month: "September 2026",
    name: "Engr. Chidera Okonkwo",
    role: "Chief Engineer, Product Tanker Fleet",
    discipline: "B.Eng. Marine Engineering, Class of 2019",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    achievement:
      "Named Best Young Seafarer at the 2026 West African Maritime Awards after implementing a predictive maintenance protocol that cut engine downtime by 40% across her fleet.",
    quote:
      "NMU gave me the fundamentals, but it was the discipline instilled during sea-time training at Escravos that made the real difference.",
  },
  Cadet: {
    type: "Cadet",
    month: "September 2026",
    name: "Cadet Ifeoma Balogun",
    role: "Final-Year Cadet, Nautical Science",
    discipline: "B.Sc. Nautical Science, Expected 2027",
    photo:
      "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&w=800&q=80",
    achievement:
      "Led her cohort's simulator team to first place at the National Maritime Universities Bridge Simulation Challenge, and mentors first-year cadets through the campus navigation club.",
    quote:
      "Every drill on the bridge simulator feels like practice for the responsibility I'll carry one day. I want to make my campus proud.",
  },
};
