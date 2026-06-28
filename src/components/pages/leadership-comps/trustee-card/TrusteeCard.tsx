import { ArrowRight } from "lucide-react";
import styles from "./TrusteeCard.module.css";
import type { Trustee } from "../../../../types";

interface TrusteeCardProps {
  trustee: Trustee;
}

const TrusteeCard = ({ trustee }: TrusteeCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={trustee.image}
          alt={trustee.name}
          className={styles.image}
        />
      </div>

      <span className={styles.badge}>
        {trustee.title.toUpperCase()}
      </span>

      <h3>{trustee.profession}</h3>

      <p className={styles.name}>{trustee.name}</p>

      {trustee.experience && (
        <p className={styles.experience}>
          {trustee.experience}
        </p>
      )}

      <p className={styles.tenure}>{trustee.tenure}</p>

      <button className={styles.link}>
        View Profile
        <ArrowRight size={15} />
      </button>
    </article>
  );
};

export default TrusteeCard;