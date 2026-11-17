import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Globe, Mail, MapPin, Phone } from "lucide-react";
import styles from "./BusinessDetail.module.css";
import {
  getAllBusinesses,
  getBusinessById,
} from "../../components/pages/business-comps/business-list/businessStore";

const BusinessDetail = () => {
  const { id } = useParams<{ id: string }>();
  const business = getBusinessById(id || "");

  const related = useMemo(() => {
    if (!business) return [];
    return getAllBusinesses()
      .filter((b) => b.category === business.category && b.id !== business.id)
      .slice(0, 3);
  }, [business]);

  if (!business) {
    return (
      <div className={styles.notFound}>
        <h2>Business not found</h2>
        <p>This listing doesn't exist or may have been removed.</p>
        <Link to="/business-directory" className={styles.primaryBtn}>
          ← Back to Business Directory
        </Link>
      </div>
    );
  }

  const websiteHref = business.website
    ? `https://${business.website.replace(/^https?:\/\//, "")}`
    : undefined;

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link to="/business-directory" className={styles.backLink}>
            <ArrowLeft size={16} /> All Businesses
          </Link>
        </div>
      </div>

      <div className={styles.coverWrap}>
        <img
          src={business.coverImage}
          alt={business.businessName}
          className={styles.cover}
        />
      </div>

      <div className={styles.container}>
        <header className={styles.header}>
          <img
            src={business.logo}
            alt=""
            aria-hidden="true"
            className={styles.logo}
          />
          <div>
            <span className={styles.category}>{business.category}</span>
            <h1 className={styles.name}>{business.businessName}</h1>
            <p className={styles.owner}>Owned by {business.ownerName}</p>
          </div>
        </header>

        <div className={styles.contentGrid}>
          <section className={styles.about}>
            <h2>About</h2>
            <div className={styles.description}>
              {business.description
                .split("\n")
                .filter((p) => p.trim())
                .map((paragraph, i) => (
                  <p key={i}>{paragraph.trim()}</p>
                ))}
            </div>
          </section>

          <aside className={styles.contactCard}>
            <h2>Contact</h2>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={16} /> {business.location}
              </li>
              {business.phone && (
                <li>
                  <Phone size={16} />
                  <a href={`tel:${business.phone}`}>{business.phone}</a>
                </li>
              )}
              {business.email && (
                <li>
                  <Mail size={16} />
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </li>
              )}
              {business.website && websiteHref && (
                <li>
                  <Globe size={16} />
                  <a href={websiteHref} target="_blank" rel="noopener noreferrer">
                    {business.website}
                  </a>
                </li>
              )}
            </ul>
          </aside>
        </div>

        {related.length > 0 && (
          <section className={styles.relatedSection}>
            <h2>More in {business.category}</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/business-directory/${r.id}`}
                  className={styles.relatedCard}
                >
                  <img src={r.coverImage} alt={r.businessName} loading="lazy" />
                  <div>
                    <strong>{r.businessName}</strong>
                    <span>{r.location}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BusinessDetail;
