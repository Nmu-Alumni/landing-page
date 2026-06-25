// components/OurStorySection/OurStorySection.tsx
import React from "react";
import styles from "./OurStorySection.module.css";

const OurStorySection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>OUR HISTORY</span>
          <h2 className={styles.title}>Our Story</h2>
        </div>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            Nigeria Maritime University was established in 2018 as Nigeria&apos;s
            — and indeed West Africa&apos;s — first university dedicated solely to
            maritime education. Situated in Okerenkoko, Delta State, in the
            heart of Nigeria&apos;s oil-rich Niger Delta, NMU was born from the
            recognition that Africa&apos;s largest economy needed a world-class
            institution to produce the maritime professionals who would drive
            its blue economy.
          </p>

          <p className={styles.paragraph}>
            As the first cohorts of graduates emerged from NMU&apos;s hallowed
            portals, the need for a structured alumni network became clear. The
            NMUAA was formed to give these pioneer graduates a platform — to
            connect them with each other, with the university, with industry,
            and with the international maritime community. We carry the weight
            and pride of being the first. Everything we build, we build for
            those who come after us.
          </p>

          <div className={styles.quoteBox}>
            <p className={styles.quote}>
              “We are the graduates of the first maritime university in Nigeria
              and West Africa. Our legacy is not just behind us — it is ahead of
              us.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;