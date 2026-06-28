import { chair, trustees } from "../../../../mockdata/mockdata";
import ChairCard from "../chair-card/ChairCard";
import TrusteeCard from "../trustee-card/TrusteeCard";
import styles from "./BoardOfTrustees.module.css";


const BoardOfTrustees = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>
          TIER 1 — FIDUCIARY ORGAN
        </span>

        <h2 className={styles.heading}>
          Board of Trustees
        </h2>

        <p className={styles.description}>
          The BOT holds all assets of the Association in trust.
          Trustees serve 5-year terms and are appointed by a
          ⅔ majority of the NGA. Per Article III §3.03,
          no Trustee may simultaneously hold executive office.
        </p>

        <ChairCard chair={chair} />

        <div className={styles.grid}>
          {trustees.map((member) => (
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

export default BoardOfTrustees;