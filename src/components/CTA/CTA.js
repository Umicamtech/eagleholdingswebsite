import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.backgroundGrid}></div>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={`${styles.accentLine} fade-in`}></div>
          <h2 className={`${styles.headline} fade-in delay-1`}>
            Ready to Structure Your Next Venture?
          </h2>
          <p className={`${styles.subheadline} fade-in delay-2`}>
            Engage with our strategic advisory team to navigate complex capital requirements and secure definitive outcomes.
          </p>
          <div className={`${styles.actions} fade-in delay-3`}>
            <button className={styles.primaryButton}>
              <span className={styles.buttonText}>Initiate Consultation</span>
              <span className={styles.buttonLine}></span>
            </button>
            <button className={styles.secondaryButton}>
              View Track Record
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
