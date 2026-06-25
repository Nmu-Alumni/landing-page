// components/WhoWeAreSection/WhoWeAreSection.tsx
import React from "react";
import styles from "./WhoWeAreSection.module.css";
import { Anchor, Building2, MapPin } from "lucide-react";

type InfoItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

const InfoItem = ({ icon, label, value }: InfoItemProps) => {
  return (
    <div className={styles.infoItem}>
      <div className={styles.infoIcon}>{icon}</div>
      <div className={styles.infoText}>
        <span className={styles.infoLabel}>{label}: </span>
        <span className={styles.infoValue}>{value}</span>
      </div>
    </div>
  );
};

const WhoWeAreSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.kicker}>OUR IDENTITY</span>

          <h2 className={styles.title}>Who We Are</h2>

          <p className={styles.paragraph}>
            The Nigeria Maritime University Alumni Association (NMUAA) is the
            official alumni body of Nigeria Maritime University, Okerenkoko —
            the first dedicated maritime university in Nigeria and West Africa.
            We are a body of Incorporated Trustees, registered under Part F of
            the Companies and Allied Matters Act, 2020 (CAMA), operating as a
            non-partisan, non-sectarian, non-profit organisation under the laws
            of the Federal Republic of Nigeria.
          </p>

          <p className={styles.paragraph}>
            Our membership spans graduates across all faculties of NMU — from
            Marine Engineering and Naval Architecture to Maritime Law,
            Environmental Science, and Transport & Logistics. We also welcome
            former academic and administrative staff of the university as
            Associate Members, and honour distinguished individuals with
            Honorary Membership on the recommendation of the National General
            Assembly.
          </p>

          <div className={styles.infoList}>
            <InfoItem
              icon={<Building2 size={18} strokeWidth={1.8} />}
              label="Legal Status"
              value="Incorporated Trustees (CAMA 2020)"
            />
            <InfoItem
              icon={<MapPin size={18} strokeWidth={1.8} />}
              label="Headquarters"
              value="Delta State, Nigeria"
            />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.right}>
          <div className={styles.identityCard}>
            <div className={styles.cardTopIcon}>
             <Anchor size={54} strokeWidth={1.8} color="white" />
            </div>

            <div className={styles.cardOrgName}>
              NIGERIA MARITIME UNIVERSITY
              <br />
              ALUMNI ASSOCIATION
            </div>

            <div className={styles.cardAcronym}>NMUAA</div>

            <div className={styles.cardTagline}>
              "Charting the Future, Upholding Our Legacy"
            </div>

            <div className={styles.divider} />

            <div className={styles.cardFooterTitle}>OUR OFFICIAL COLOURS</div>

            <div className={styles.colorsRow}>
              <div className={styles.colorItem}>
                      <span className={styles.naybluSwatch} />
                <span className={styles.colorLabel}>Navy Blue</span>
              </div>

              <div className={styles.colorItem}>
                <span className={styles.goldSwatch} />
                <span className={styles.colorLabel}>Gold</span>
              </div>
              <div className={styles.colorItem}>
                <span className={styles.whiteSwatch} />
                <span className={styles.colorLabel}>White</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;