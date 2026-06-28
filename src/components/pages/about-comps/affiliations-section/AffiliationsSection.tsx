import styles from "./AffiliationsSection.module.css";

const affiliations = [
  {
    title: "NIMASA",
    description: "Nigerian Maritime Administration and Safety Agency",
  },
  {
    title: "NPA",
    description: "Nigerian Ports Authority",
  },
  {
    title: "IMO",
    description: "International Maritime Organization",
  },
  {
    title: "STCW",
    description: "Standards of Training, Certification & Watchkeeping",
  },
  {
    title: "NMU",
    description: "Nigeria Maritime University",
  },
  {
    title: "CAC",
    description: "Corporate Affairs Commission",
  },
];

const AffiliationsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>OUR AFFILIATIONS</span>

        <h2 className={styles.heading}>
          Industry Partners & Regulatory Bodies
        </h2>

        <p className={styles.description}>
          NMUAA works in close collaboration with Nigeria's leading maritime
          institutions and international regulatory bodies.
        </p>

        <div className={styles.cards}>
          {affiliations.map((item) => (
            <div key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliationsSection;