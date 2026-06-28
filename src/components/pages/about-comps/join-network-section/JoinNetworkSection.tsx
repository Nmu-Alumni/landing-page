import styles from "./JoinNetworkSection.module.css";

const JoinNetworkSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <h2>
          Ready to Join the NMUAA
          <br />
          Network?
        </h2>

        <p>
          Become part of the alumni association of Nigeria's first maritime
          university. Connect with fellow graduates, access career
          opportunities, and help shape the future of Nigeria's blue economy.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>
            Register Now
          </button>

          <button className={styles.secondary}>
            Learn More About Membership
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinNetworkSection;