import GovernanceFlow from "./comps/GovernanceFlow";
import styles from "./GovernanceSection.module.css";

const GovernanceSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.infoCard}>
          <p>
            The NMUAA is governed through six distinct organs as defined in
            Article III of the NMUAA Constitution — the National General
            Assembly (NGA), the Board of Trustees (BOT), the National Executive
            Council (NEC), the National Electoral Commission (NALECO), the
            Ethics and Disciplinary Tribunal (EDT), and Chapters. Each organ
            has a distinct, non-overlapping mandate.
          </p>
        </div>

        <GovernanceFlow />
      </div>
    </section>
  );
};

export default GovernanceSection;