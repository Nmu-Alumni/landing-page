// components/AimsObjectivesSection/AimsObjectivesSection.tsx
import React from "react";
import styles from "./AimsObjectivesSection.module.css";

type Aim = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const HandshakeIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
    <path
      d="M8.8 11.2 6.9 9.4a2 2 0 0 0-2.8 0L2.5 11a1.4 1.4 0 0 0 0 2l3.6 3.6a2 2 0 0 0 2.8 0l1.8-1.8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.2 12.8l1.9 1.8a2 2 0 0 0 2.8 0l1.6-1.6a1.4 1.4 0 0 0 0-2l-3.6-3.6a2 2 0 0 0-2.8 0l-1.8 1.8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m8.2 13.8 3.8-3.8a2 2 0 0 1 2.8 0l1 1a2 2 0 0 1 0 2.8l-3.6 3.6a2 2 0 0 1-2.8 0l-1.2-1.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
    <circle
      cx="12"
      cy="12"
      r="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M4 12h16M12 4c2.4 2.2 3.6 5 3.6 8S14.4 17.8 12 20M12 4c-2.4 2.2-3.6 5-3.6 8S9.6 17.8 12 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CapIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
    <path
      d="M3 9.5 12 5l9 4.5L12 14 3 9.5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M7 11.7v3.1c0 .7 2.1 2.2 5 2.2s5-1.5 5-2.2v-3.1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AnchorIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
    <path
      d="M12 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 5.5V18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M7 10.5c0 3 2.2 5.5 5 5.5s5-2.5 5-5.5M5 8.5h4M15 8.5h4M7 14l-3-2.8M17 14l3-2.8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
    <path
      d="M10.5 13.5 8.8 15.2a3 3 0 1 1-4.2-4.2l2.7-2.7a3 3 0 0 1 4.2 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 10.5 15.2 8.8a3 3 0 1 1 4.2 4.2l-2.7 2.7a3 3 0 0 1-4.2 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m9.5 14.5 5-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const MegaphoneIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
    <path
      d="M4 12.5V9.8c0-.5.4-.9.9-.9H8l7-3v12l-7-3H4.9c-.5 0-.9-.4-.9-.9Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M8 14.9v3.1a1.6 1.6 0 0 0 1.6 1.6h.4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
    <path
      d="M4.5 6.5A2.5 2.5 0 0 1 7 4h11v14H7a2.5 2.5 0 0 0-2.5 2.5V6.5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M7 4v14M12 7h4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const WavesIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
    <path
      d="M3 8c1.3 1 2.7 1 4 0s2.7-1 4 0 2.7 1 4 0 2.7-1 4 0M3 12c1.3 1 2.7 1 4 0s2.7-1 4 0 2.7 1 4 0 2.7-1 4 0M3 16c1.3 1 2.7 1 4 0s2.7-1 4 0 2.7 1 4 0 2.7-1 4 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const aims: Aim[] = [
  {
    id: 1,
    title: "Unity & Fellowship",
    description:
      "Promote unity, fellowship, professional development, and mutual welfare among all NMU alumni.",
    icon: <HandshakeIcon />,
  },
  {
    id: 2,
    title: "Global Network",
    description:
      "Foster a vibrant network connecting members with NMU, government agencies, the maritime industry, and the international maritime community.",
    icon: <GlobeIcon />,
  },
  {
    id: 3,
    title: "Academic Support",
    description:
      "Actively support, advocate for, and contribute to the improvement of academic standards, facilities, and research at NMU.",
    icon: <CapIcon />,
  },
  {
    id: 4,
    title: "Maritime Advancement",
    description:
      "Advance the interests of Nigeria's maritime sector in partnership with NIMASA, the Nigerian Ports Authority, the IMO, and all maritime stakeholders.",
    icon: <AnchorIcon />,
  },
  {
    id: 5,
    title: "Heritage Fund",
    description:
      "Establish and manage a Maritime Heritage and Development Fund for the benefit of members, the university, and the broader Nigerian maritime community.",
    icon: <LinkIcon />,
  },
  {
    id: 6,
    title: "Advocacy & Policy",
    description:
      "Engage in advocacy, policy formulation, capacity building, and public interest activities consistent with the maritime vocation of members.",
    icon: <MegaphoneIcon />,
  },
  {
    id: 7,
    title: "Scholarships & Mentorship",
    description:
      "Establish scholarship programmes and mentorship schemes for current students of Nigeria Maritime University.",
    icon: <BookIcon />,
  },
  {
    id: 8,
    title: "International Standards",
    description:
      "Promote the values of the STCW Convention, MARPOL, MLC 2006, and allied IMO instruments in the conduct of members.",
    icon: <WavesIcon />,
  },
];

const AimsObjectivesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.kicker}>WHAT WE STAND FOR</span>
          <h2 className={styles.title}>Our Aims &amp; Objectives</h2>
          
        </header>

        <div className={styles.grid}>
          {aims.map((aim) => (
            <article key={aim.id} className={styles.card}>
              <div className={styles.iconWrap}>{aim.icon}</div>
              <h3 className={styles.cardTitle}>{aim.title}</h3>
              <p className={styles.cardText}>{aim.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AimsObjectivesSection;