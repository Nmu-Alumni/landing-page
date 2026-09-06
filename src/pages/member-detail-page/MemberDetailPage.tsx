import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import styles from "./MemberDetailPage.module.css";
import { allMembers, getMemberById } from "../../mockdata/membersData";
import type { MemberProfile } from "../../types";

const MemberDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const member = getMemberById(id || "");

  const { prev, next, related } = useMemo(() => {
    if (!member) return { prev: null, next: null, related: [] };

    const idx = allMembers.findIndex((m) => m.id === member.id);
    const prev = idx > 0 ? allMembers[idx - 1] : null;
    const next = idx < allMembers.length - 1 ? allMembers[idx + 1] : null;

    // Same category, exclude self, max 3
    const related = allMembers
      .filter((m) => m.category === member.category && m.id !== member.id)
      .slice(0, 3);

    return { prev, next, related };
  }, [member]);

  if (!member) {
    return (
      <div className={styles.notFound}>
        <h2>Member not found</h2>
        <p>The profile you’re looking for doesn’t exist or has been moved.</p>
        <Link to="/leadership" className={styles.primaryBtn}>
          ← Back to all members
        </Link>
      </div>
    );
  }

  const categoryLabel =
    member.category === "executive"
      ? "National Executive Council"
      : member.category === "directors"
      ? "Director"
      : "Member";

  return (
    <div className={styles.page}>
      {/* Sticky top bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link to="/leadership" className={styles.backLink}>
            ← All Members
          </Link>
          <span className={styles.topName}>{member.name}</span>
        </div>
      </div>

      <div className={styles.container}>
        {/* Header card */}
        <header className={styles.header}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.image}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/placeholder-avatar.png";
                }}
              />
            </div>
          </div>

          <div className={styles.infoCol}>
            <span className={styles.category}>{categoryLabel}</span>
            <h1 className={styles.name}>{member.name}</h1>
            <p className={styles.title}>{member.title}</p>
            <p className={styles.profession}>{member.profession}</p>

            {member.tenure && member.tenure !== "—" && (
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Tenure</span>
                <span className={styles.metaValue}>{member.tenure}</span>
              </div>
            )}

            <div className={styles.actions}>
              <a href="#about" className={styles.primaryBtn}>
                Read full bio
              </a>
              <Link to="/leadership" className={styles.secondaryBtn}>
                View all members
              </Link>
            </div>
          </div>
        </header>

        {/* Full Bio */}
        <section id="about" className={styles.bioSection}>
          <h2>About {member.name.split(" ")[0]}</h2>
          <div className={styles.bio}>
            {member.fullBio
              .split("\n")
              .filter((p) => p.trim())
              .map((paragraph, i) => (
                <p key={i}>{paragraph.trim()}</p>
              ))}
          </div>
        </section>

        {/* Related members */}
        {related.length > 0 && (
          <section className={styles.relatedSection}>
            <h2>Others in {categoryLabel}</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <RelatedCard key={r.id} member={r} />
              ))}
            </div>
          </section>
        )}

        {/* Prev / Next */}
        <nav className={styles.nav} aria-label="Member navigation">
          {prev ? (
            <Link to={`/leadership/${prev.id}`} className={styles.navCard}>
              <span className={styles.navLabel}>Previous</span>
              <span className={styles.navName}>← {prev.name}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/leadership/${next.id}`}
              className={`${styles.navCard} ${styles.navCardRight}`}
            >
              <span className={styles.navLabel}>Next</span>
              <span className={styles.navName}>{next.name} →</span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </div>
  );
};

const RelatedCard = ({ member }: { member: MemberProfile }) => (
  <Link to={`/leadership/${member.id}`} className={styles.relatedCard}>
    <img
      src={member.image}
      alt={member.name}
      loading="lazy"
      onError={(e) => {
        (e.target as HTMLImageElement).src = "/images/placeholder-avatar.png";
      }}
    />
    <div>
      <strong>{member.name}</strong>
      <span>{member.title}</span>
    </div>
  </Link>
);

export default MemberDetailPage;
