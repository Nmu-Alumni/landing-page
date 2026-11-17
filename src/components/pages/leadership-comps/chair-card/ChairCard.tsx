import type { Trustee } from "../../../../types";
import styles from "./ChairCard.module.css";
import { ArrowRight } from "lucide-react";

interface Props {
  chair: Trustee;
  buttonText?: string;
}

const ChairCard = ({ chair, buttonText = "View Full Profile" }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={chair.image} alt={chair.name} />
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>{chair.title.toUpperCase()}</span>

        <h2>{chair.name}</h2>

        <p className={styles.meta}>
          {chair.profession}, {chair.experience}
        </p>

        <p className={styles.tenure}>{chair.tenure}</p>

        <p className={styles.bio}>{chair.bio}</p>

        <button className={styles.button}>
          {buttonText}
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
};

export default ChairCard;
