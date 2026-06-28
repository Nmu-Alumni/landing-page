import { provostRepresentatives } from "../../../../mockdata/mockdata";
import TrusteeCard from "../trustee-card/TrusteeCard";
import styles from "./ProvostRepresentatives.module.css";

const ProvostRepresentatives = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Provost Marshal & Faculty Representatives
        </h2>

        <p className={styles.description}>
          Faculty Representatives serve one per faculty — Faculty of
          Transport & Logistics, Faculty of Engineering, Faculty of
          Environmental Science.
        </p>

        <div className={styles.grid}>
          {provostRepresentatives.map((member) => (
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

export default ProvostRepresentatives;