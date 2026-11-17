import { Link } from "react-router";
import { Ship, CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./AboutNetwork.module.css";
import { Button } from "../../../ui/button/Button";
import aboutImg from '../../../../assets/images/png/about-img.png'

const FEATURES = [
  "Global Mentorship Programs",
  "Industry Networking Events",
  "Career & Professional Development",
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
            More Than a Degree — A Lifelong Fellowship
          </h2>

          <p className={styles.body}>
            Nigeria Maritime University, Okerenkoko — the first dedicated maritime 
            university in Nigeria and West Africa — represents the pinnacle of maritime 
            education on the continent.
          </p>
          <p className={styles.body}>
            Our Alumni Network exists to foster unity, professional excellence, and 
            lifelong connections among graduates working across global shipping, 
            ports, energy, and marine sectors. We uphold the highest standards of the 
            maritime profession as guided by IMO conventions and STCW.
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
            <Button className={styles.learnBtn}>
              Learn More <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        {/* Right — image */}
        <div className={styles.imgCol}>
          <div className={styles.imgDecor} />
          <img
            src={aboutImg}
            alt="NMU Graduation Ceremony"
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
}