import { executives, president } from "../../../../mockdata/mockdata";
import ChairCard from "../chair-card/ChairCard";
import TrusteeCard from "../trustee-card/TrusteeCard";
import styles from "./NationalExecutiveCouncil.module.css";



const NationalExecutiveCouncil = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>
          TIER 2 — EXECUTIVE ORGAN
        </span>

        <h2 className={styles.heading}>
          National Executive Council
        </h2>

        <p className={styles.description}>
          The National Executive Council (NEC) is responsible for the day-to-day
          administration of the Association, policy implementation, and strategic
          leadership across all chapters.
        </p>

        <ChairCard
          chair={president}
          buttonText="View Full Profile"
        />

        <div className={styles.grid}>
          {executives.map((member) => (
            <TrusteeCard
              key={member.id}
              trustee={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NationalExecutiveCouncil;