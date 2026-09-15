import { useState } from "react";
import { Quote, Sparkles } from "lucide-react";
import styles from "./Spotlight.module.css";
import { SPOTLIGHTS } from "./spotlightData";

type Tab = "Alumnus" | "Cadet";

export default function Spotlight() {
  const [tab, setTab] = useState<Tab>("Alumnus");
  const person = SPOTLIGHTS[tab];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <Sparkles size={18} />
              Spotlight
            </div>
            <h2 className={styles.heading}>Recognizing Our Own</h2>
          </div>

          <div className={styles.tabs} role="tablist">
            {(["Alumnus", "Cadet"] as Tab[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={tab === key}
                className={`${styles.tab} ${
                  tab === key ? styles.tabActive : ""
                }`}
                onClick={() => setTab(key)}
              >
                {key} of the Month
              </button>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imgWrap}>
            <img src={person.photo} alt={person.name} className={styles.img} />
            <span className={styles.badge}>
              {person.type} of the Month · {person.month}
            </span>
          </div>

          <div className={styles.body}>
            <h3 className={styles.name}>{person.name}</h3>
            <p className={styles.role}>{person.role}</p>
            <p className={styles.discipline}>{person.discipline}</p>

            <p className={styles.achievement}>{person.achievement}</p>

            <div className={styles.quoteWrap}>
              <Quote className={styles.quoteIcon} size={22} />
              <p className={styles.quote}>{person.quote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
