import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={`${styles.badge} fade-in`}>Est. 2024</div>
        <h1 className={`${styles.headline} fade-in delay-1`}>
          The Standard for Global Strategic Advisory.
        </h1>
        <p className={`${styles.subHeadline} fade-in delay-2`}>
          Leading public infrastructure development, private enterprise, and comprehensive global mobility. We architect high-value solutions for institutional capital and the diaspora, delivering excellence across continents.
        </p>
        <div className={`${styles.actionGroup} fade-in delay-3`}>
          <a href="#services" className={styles.primaryAction}>Explore Our Pillars</a>
          <a href="/contact" className={styles.secondaryAction}>Schedule Consultation</a>
        </div>
      </div>
    </section>
  );
}
