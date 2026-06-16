import { Link } from "react-router";
import { Ship, CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./AboutNetwork.module.css";
import { Button } from "../../../ui/button/Button";

const FEATURES = [
  "Global Mentorship Programs",
  "Industry Networking Events",
  "Career & Placement Support",
];

export default function AboutNetwork() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left — text */}
        <div className={styles.textCol}>
          <div className={styles.eyebrow}>
            <Ship size={18} />
            Our Mission
          </div>

          <h2 className={styles.heading}>
            More Than a Degree — A Lifelong Brotherhood
          </h2>

          <p className={styles.body}>
            Founded under NIMASA and recognized by the International Maritime
            Organization (IMO), Nigeria Maritime University represents the
            pinnacle of maritime education in Africa.
          </p>
          <p className={styles.body}>
            Our Alumni Network serves to connect graduates across global
            shipping, oil &amp; gas, port management, and marine sciences. We
            carry the discipline, regimentation, and excellence of Okerenkoko
            to every corner of the globe.
          </p>

          <ul className={styles.featureList}>
            {FEATURES.map((item) => (
              <li key={item} className={styles.featureItem}>
                <CheckCircle2 className={styles.checkIcon} size={20} />
                {item}
              </li>
            ))}
          </ul>

          <Link to="/about">
            <Button  className={styles.learnBtn}>
              Learn More <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        {/* Right — image */}
        <div className={styles.imgCol}>
          <div className={styles.imgDecor} />
          <img
            src="https://images.unsplash.com/photo-1534724295769-d49447d13dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXZ5JTIwZ3JhZHVhdGlvbnxlbnwxfHx8fDE3NzYxNjk3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="NMU Graduation"
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
}