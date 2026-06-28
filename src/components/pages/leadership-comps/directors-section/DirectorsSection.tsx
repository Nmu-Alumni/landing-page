import { directors } from "../../../../mockdata/mockdata";
import TrusteeCard from "../trustee-card/TrusteeCard";
import styles from "./DirectorsSection.module.css";


const DirectorsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>National Executive Council — Directors</h2>

        <p>
          Directors are elected on a merit basis across geopolitical zones,
          except the Director of Education & Research and Director of Maritime
          Affairs which follow faculty-based rotation per Schedule 2.
        </p>

        <div className={styles.grid}>
          {directors.map((director) => (
            <TrusteeCard key={director.id} trustee={director} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;
