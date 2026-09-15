import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import styles from "./BusinessCard.module.css";
import type { BusinessListing } from "../../../../types";

interface Props {
  business: BusinessListing;
}

const BusinessCard = ({ business }: Props) => {
  return (
    <Link to={`/business-directory/${business.id}`} className={styles.card}>
      <div className={styles.coverWrap}>
        <img
          src={business.coverImage}
          alt={business.businessName}
          className={styles.cover}
        />
        <span className={styles.categoryBadge}>{business.category}</span>
        <img
          src={business.logo}
          alt=""
          aria-hidden="true"
          className={styles.logo}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{business.businessName}</h3>
        <p className={styles.location}>
          <MapPin size={13} /> {business.location}
        </p>

        <p className={styles.description}>{business.description}</p>

        <div className={styles.footer}>
          <span className={styles.owner}>{business.ownerName}</span>
          <span className={styles.cta}>
            View Details <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BusinessCard;
