import Link from "next/link";
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
            <Link 
              href="/contact" 
              className={styles.primaryButton}
              aria-label="Initiate Consultation with Eagle Holdings"
            >
              <span className={styles.buttonText}>Initiate Consultation</span>
              <span className={styles.buttonLine}></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
