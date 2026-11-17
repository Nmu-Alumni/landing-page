import { FileText, Gavel, Handshake, ScrollText } from "lucide-react";
import styles from "./ElectionsConstitution.module.css";

export default function ElectionsConstitution() {
  return (
    
    <section className={styles.section}>
      {/* Background watermark icon */}

      <div className={styles.watermark}>
        <ScrollText size={300} />
      </div>

      <div className={styles.inner}>
        {/* Eyebrow badge */}
        <div className={styles.badge}>
          <Gavel size={16} className={styles.badgeIcon} />
          Elections &amp; Constitution
        </div>

        <h2 className={styles.heading}>Governing Our Network</h2>

        <p className={styles.description}>
          The NMU Alumni Association operates under a democratic constitution.
          National Executive Council members are elected to serve a two-year
          tenure by registered alumni in good financial standing.
        </p>

        {/* Cards grid */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <FileText size={24} className={styles.cardIconTeal} />
            <h3 className={styles.cardTitle}>Read Constitution</h3>
            <p className={styles.cardText}>
              Download the official governing document of the association.
            </p>
            <a href="#" className={styles.cardLink}>
              Download PDF
            </a>
          </div>

          <div className={styles.card}>
            <Handshake size={24} className={styles.cardIconGold} />
            <h3 className={styles.cardTitle}>Upcoming Elections</h3>
            <p className={styles.cardText}>
              The next general election holds November 2026. Nominations open
              August 2026.
            </p>
          </div>
        </div>

        <button className={styles.cta}>Nominate / Run for Office</button>
      </div>
    </section>
  );
}