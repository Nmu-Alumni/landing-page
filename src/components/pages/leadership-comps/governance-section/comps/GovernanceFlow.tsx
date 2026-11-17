import styles from "./GovernanceFlow.module.css";

const GovernanceFlow = () => {
  return (
    <div className={styles.flow}>
      <div className={`${styles.card} ${styles.active}`}>
        <h3>NGA</h3>
        <span>Supreme</span>
      </div>

      <div className={styles.lineGold}></div>

      <div className={styles.card}>
        <h3>BOT</h3>
        <span>Fiduciary</span>
      </div>

      <div className={styles.lineGray}></div>

      <div className={styles.card}>
        <h3>NEC</h3>
        <span>Executive</span>
      </div>

      <div className={styles.right}>
        <div className={styles.branch}></div>

        <div className={styles.column}>
          <div className={styles.card}>
            <h3>NALECO</h3>
            <span>Electoral</span>
          </div>

          <div className={styles.card}>
            <h3>EDT</h3>
            <span>Judicial</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceFlow;