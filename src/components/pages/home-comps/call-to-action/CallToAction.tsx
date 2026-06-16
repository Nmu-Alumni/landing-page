import { Link } from "react-router";
import styles from "./CallToAction.module.css";
import { Button } from "../../../ui/button/Button";

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        <h2 className={styles.heading}>
          Be Part of Nigeria's Maritime Future
        </h2>
        <p className={styles.body}>
          Join thousands of NMU graduates shaping the oceans, ports, and
          waterways of tomorrow.
        </p>
        <Link to="/login">
          <Button size="lg" className={styles.btn}>
            Sign Up Now — It's Free
          </Button>
        </Link>
      </div>
    </section>
  );
}