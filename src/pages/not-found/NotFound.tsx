import { Construction, ArrowLeft, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      {/* Ambient glow */}
      <div className={styles.glow} />

      <div className={styles.content}>
        {/* Icon */}
        <div className={styles.iconWrap}>
          <Construction size={36} className={styles.icon} />
        </div>

        {/* Label */}
        <p className={styles.eyebrow}>Page Under Construction</p>

        {/* Heading */}
        <h1 className={styles.heading}>We're still building this.</h1>

        {/* Description */}
        <p className={styles.description}>
          This section of the website isn't ready yet — our team is actively
          working on it. Check back soon, or head back to a page that's live.
        </p>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => navigate(-1)}>
            <ArrowLeft size={16} />
            Go Back
          </button>

          <button className={styles.btnSecondary} onClick={() => navigate("/")}>
            Return to Home
          </button>
        </div>

        {/* Notify row */}
        <div className={styles.notifyRow}>
          <Bell size={14} className={styles.notifyIcon} />
          <span>
            Want to know when this page goes live?{" "}
            <a href="mailto:ict@nmualumni.org" className={styles.notifyLink}>
              Drop us an email
            </a>
          </span>
        </div>
      </div>

      {/* Footer watermark */}
      <p className={styles.watermark}>404</p>
    </div>
  );
}