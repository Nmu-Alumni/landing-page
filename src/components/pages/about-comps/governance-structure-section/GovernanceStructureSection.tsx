// components/GovernanceStructureSection/GovernanceStructureSection.tsx
import React from "react";
import styles from "./GovernanceStructureSection.module.css";

type GovernanceItem = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const BuildingIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className={styles.iconSvg}
    aria-hidden="true"
  >
    <path d="M10 2.5 18 6.5 18 7.5 2 7.5 2 6.5Z" />
    <rect x="3" y="8.5" width="2.5" height="8" />
    <rect x="8.75" y="8.5" width="2.5" height="8" />
    <rect x="14.5" y="8.5" width="2.5" height="8" />
    <rect x="1.5" y="17" width="17" height="1.5" rx="0.5" />
    <rect x="7.5" y="12" width="5" height="4.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className={styles.iconSvg}
    aria-hidden="true"
  >
    <path d="M10 1.5 3 4v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V4Z" opacity="0.3" />
    <path
      d="M10 1.5 3 4v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V4Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7 10 9 12 13.5 7.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className={styles.iconSvg}
    aria-hidden="true"
  >
    <path d="M10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    <path d="M16.94 8.81 15.5 8.45A5.7 5.7 0 0 0 15 7.4l.73-1.3-1.83-1.83-1.3.73A5.7 5.7 0 0 0 11.55 4.5L11.19 3.06H8.81L8.45 4.5A5.7 5.7 0 0 0 7.4 5L6.1 4.27 4.27 6.1 5 7.4A5.7 5.7 0 0 0 4.5 8.45L3.06 8.81v2.38L4.5 11.55A5.7 5.7 0 0 0 5 12.6l-.73 1.3 1.83 1.83 1.3-.73A5.7 5.7 0 0 0 8.45 15.5l.36 1.44h2.38l.36-1.44A5.7 5.7 0 0 0 12.6 15l1.3.73 1.83-1.83-.73-1.3A5.7 5.7 0 0 0 15.5 11.55l1.44-.36Z" />
  </svg>
);

const BallotIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className={styles.iconSvg}
    aria-hidden="true"
  >
    <rect x="3" y="2.5" width="14" height="15" rx="2" />
    <rect x="5.5" y="6" width="9" height="1.5" rx="0.75" fill="#0a2540" />
    <path
      d="M5.5 10.5 7.5 12.5 11 8.5"
      stroke="#0a2540"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="8.5"
      y="10.5"
      width="6"
      height="1.2"
      rx="0.6"
      fill="#0a2540"
      opacity="0.4"
    />
    <rect
      x="5.5"
      y="13.5"
      width="9"
      height="1.2"
      rx="0.6"
      fill="#0a2540"
      opacity="0.3"
    />
  </svg>
);

const ScaleIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className={styles.iconSvg}
    aria-hidden="true"
  >
    <rect x="9.25" y="3" width="1.5" height="14" rx="0.75" />
    <path d="M5 6 1.5 12h7Z" />
    <path d="M15 6 11.5 12h7Z" />
    <rect x="4.5" y="12" width="5" height="1.25" rx="0.5" />
    <rect x="10.5" y="12" width="5" height="1.25" rx="0.5" />
    <rect x="8.25" y="16.5" width="3.5" height="1.25" rx="0.5" />
    <rect x="9.25" y="14" width="1.5" height="3" />
  </svg>
);

const ChaptersIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className={styles.iconSvg}
    aria-hidden="true"
  >
    <rect x="2" y="3" width="9.5" height="12" rx="1.5" />
    <rect x="5" y="2" width="9.5" height="12" rx="1.5" opacity="0.45" />
    <rect x="4" y="7.5" width="5" height="1.2" rx="0.6" />
    <rect x="4" y="10" width="5" height="1.2" rx="0.6" />
    <rect x="4" y="12.5" width="3" height="1.2" rx="0.6" />
  </svg>
);

const governanceItems: GovernanceItem[] = [
  {
    id: 1,
    title: "National General Assembly (NGA)",
    description:
      "The supreme legislative organ — the highest decision-making body of the association. Consists of all full members in good standing.",
    icon: <BuildingIcon />,
  },
  {
    id: 2,
    title: "Board of Trustees (BOT)",
    description:
      "The fiduciary and custodial organ. Holds the association's assets in trust and ensures constitutional compliance.",
    icon: <ShieldIcon />,
  },
  {
    id: 3,
    title: "National Executive Council (NEC)",
    description:
      "The executive organ. 18 elected officers who run the day-to-day operations of the association.",
    icon: <GearIcon />,
  },
  {
    id: 4,
    title: "NALECO",
    description:
      "The National Alumni Electoral Commission. An independent electoral organ that conducts all elections of the association.",
    icon: <BallotIcon />,
  },
  {
    id: 5,
    title: "Ethics & Disciplinary Tribunal (EDT)",
    description:
      "The independent judicial organ. Hears and decides all disciplinary matters brought before it.",
    icon: <ScaleIcon />,
  },
  {
    id: 6,
    title: "Chapters",
    description:
      "Sub-national organs operating in states across Nigeria and internationally for diaspora members.",
    icon: <ChaptersIcon />,
  },
];

const GovernanceStructureSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ---------- Header ---------- */}
        <header className={styles.header}>
          <span className={styles.kicker}>HOW WE&apos;RE GOVERNED</span>
          <h2 className={styles.title}>Our Governance Structure</h2>
          <p className={styles.subtitle}>
            NMUAA is governed through six distinct organs, each with a clear and
            non-overlapping mandate as defined in the NMUAA Constitution.
          </p>
        </header>

        {/* ---------- Cards ---------- */}
        <div className={styles.grid}>
          {governanceItems.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.iconWrap}>{item.icon}</div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ---------- Footer note ---------- */}
        <div className={styles.footerNote}>
          <span>For a full list of current office holders, visit our </span>
          <a href="/office-holders" className={styles.footerLink}>
            Office Holders page →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GovernanceStructureSection;
