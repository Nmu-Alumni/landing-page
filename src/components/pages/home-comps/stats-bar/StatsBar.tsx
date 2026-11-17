import { Anchor, Globe2, Building2, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./StatsBar.module.css";

interface Stat {
  label: string;
  value: string;
  Icon: LucideIcon;
}

const STATS: Stat[] = [
  { label: "Total Alumni",         value: "3,500+", Icon: GraduationCap },
  { label: "Countries Represented",value: "42",     Icon: Globe2        },
  { label: "Partner Agencies",     value: "150+",   Icon: Building2     },
  { label: "Active Members",       value: "2,100",  Icon: Anchor        },
];

export default function StatsBar() {
  return (
    <section className={styles.bar}>
      <div className={styles.grid}>
        {STATS.map(({ label, value, Icon }) => (
          <div key={label} className={styles.cell}>
            <Icon className={styles.icon} size={32} />
            <span className={styles.value}>{value}</span>
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}