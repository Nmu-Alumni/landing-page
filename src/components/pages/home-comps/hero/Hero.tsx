import { Link } from "react-router";
import styles from "./Hero.module.css";
import heroBg from '../../../../assets/images/png/home-bacground.jpg'
import { Button } from "../../../ui/button/Button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop}>
        <img
          src={heroBg}
          alt="NMU Maritime Background"
          className={styles.backdropImg}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>
          Connecting Maritime Leaders Across Generations
        </h1>
        <p className={styles.subheading}>
          The official alumni network of Nigeria Maritime University — Nigeria's
          pioneer paramilitary maritime institution. Okerenkoko, Delta State.
        </p>
        <div className={styles.cta}>
          <Link to="/login">
            <Button size="lg" className={styles.btnPrimary}>
              Join the Network
            </Button>
          </Link>
          <Link to="/directory">
            <Button size="lg" variant="ghost" className={styles.btnGhost}>
              Explore Alumni
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}