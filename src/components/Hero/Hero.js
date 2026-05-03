import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={`${styles.headline} fade-in`}>
        The Standard for Global Strategic Advisory.
      </h1>
      <p className={`${styles.subHeadline} fade-in delay-1`}>
        Leading public infrastructure development, private enterprise, and comprehensive global mobility.
      </p>
    </section>
  );
}
