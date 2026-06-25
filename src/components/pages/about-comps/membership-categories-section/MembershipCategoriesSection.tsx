// components/MembershipCategoriesSection/MembershipCategoriesSection.tsx
import React from "react";
import styles from "./MembershipCategoriesSection.module.css";

const MembershipCategoriesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ---------- heading ---------- */}
        <div className={styles.header}>
          <span className={styles.kicker}>JOIN THE NETWORK</span>
          <h2 className={styles.title}>Membership Categories</h2>
          <p className={styles.subtitle}>
            NMUAA membership is open to all NMU graduates, former staff, and
            distinguished individuals who share our commitment to maritime
            excellence.
          </p>
        </div>

        {/* ---------- cards ---------- */}
        <div className={styles.grid}>
          {/* FULL MEMBER */}
          <article className={`${styles.card} ${styles.fullCard}`}>
            <div className={`${styles.topLine} ${styles.topLineNavy}`} />

            <div className={`${styles.badge} ${styles.badgeLight}`}>
              FULL MEMBERSHIP
            </div>

            <h3 className={styles.cardTitle}>Full Member</h3>

            <p className={styles.cardDescription}>
              Open to all graduates of Nigeria Maritime University, Okerenkoko
              who have successfully completed a recognised degree or
              postgraduate programme.
            </p>

            <div className={styles.listHeading}>RIGHTS &amp; BENEFITS</div>

            <ul className={`${styles.list} ${styles.goldBullets}`}>
              <li>Vote in elections</li>
              <li>Contest elected offices</li>
              <li>Access welfare benefits</li>
              <li>Receive official communications</li>
            </ul>

            <div className={styles.priceBox}>
              <div className={styles.priceLabel}>Annual Subscription:</div>
              <div className={styles.priceRow}>
                <span className={styles.priceMain}>₦30,000</span>
                <span className={styles.priceExtra}>/ USD 50 (Diaspora)</span>
              </div>
            </div>

            <button className={`${styles.ctaButton} ${styles.ctaNavy}`}>
              Join as Full Member <span aria-hidden="true">→</span>
            </button>
          </article>

          {/* ASSOCIATE MEMBER */}
          <article className={`${styles.card} ${styles.associateCard}`}>
            <div className={`${styles.topLine} ${styles.topLineTeal}`} />

            <div className={`${styles.badge} ${styles.badgeTeal}`}>
              ASSOCIATE MEMBERSHIP
            </div>

            <h3 className={styles.cardTitle}>Associate Member</h3>

            <p className={styles.cardDescription}>
              Open to former academic and administrative staff of NMU, industry
              experts with sustained engagement with the University, and persons
              who completed non-degree programmes.
            </p>

            <div className={styles.listHeading}>RIGHTS &amp; BENEFITS</div>

            <ul className={`${styles.list} ${styles.tealBullets}`}>
              <li>Receive official communications</li>
              <li>Attend association events</li>
              <li>Contribute to the network</li>
            </ul>

            <p className={styles.note}>
              Cannot vote or contest elections.
            </p>

            <div className={styles.priceBox}>
              <div className={styles.priceLabel}>Annual Subscription:</div>
              <div className={styles.priceRow}>
                <span className={styles.priceMain}>₦20,000</span>
              </div>
            </div>

            <button className={`${styles.ctaButton} ${styles.ctaTeal}`}>
              Join as Associate Member <span aria-hidden="true">→</span>
            </button>
          </article>

          {/* HONORARY MEMBER */}
          <article className={`${styles.card} ${styles.honoraryCard}`}>
            <div className={`${styles.topLine} ${styles.topLineGold}`} />

            <div className={`${styles.badge} ${styles.badgeGold}`}>
              HONORARY MEMBERSHIP
            </div>

            <h3 className={`${styles.cardTitle} ${styles.cardTitleLight}`}>
              Honorary Member
            </h3>

            <p className={`${styles.cardDescription} ${styles.cardDescriptionLight}`}>
              Conferred by the National General Assembly upon persons of
              distinguished repute who have rendered exceptional service to
              maritime education, the maritime industry, or the NMUAA.
            </p>

            <div className={`${styles.listHeading} ${styles.listHeadingGold}`}>
              RIGHTS &amp; PRIVILEGES
            </div>

            <ul className={`${styles.list} ${styles.goldBulletsDark}`}>
              <li>Participate in events and network</li>
              <li>Exempt from annual dues</li>
              <li>Honorary recognition</li>
            </ul>

            <p className={styles.noteDark}>
              Cannot vote or contest elections.
            </p>

            <div className={styles.priceBoxDark}>
              <div className={styles.priceLabelDark}>Annual Subscription:</div>
              <div className={styles.priceRow}>
                <span className={styles.priceGold}>Exempt</span>
              </div>
            </div>

            <div className={styles.infoBoxDark}>
              Conferred by NGA resolution. Not a self-application.
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MembershipCategoriesSection;