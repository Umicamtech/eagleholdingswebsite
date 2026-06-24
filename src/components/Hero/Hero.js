import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video 
        className={styles.videoOverlay}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://cdn.jsdelivr.net/npm/videos-for-web/dist/gradient.webm" type="video/webm" />
      </video>
      <div className={styles.content}>
        <h1 className={`${styles.headline} fade-in`}>
          The Standard for Global Strategic Advisory.
        </h1>
        <p className={`${styles.subHeadline} fade-in delay-1`}>
          Leading public infrastructure development, private enterprise, and comprehensive global mobility.
        </p>
      </div>
    </section>
  );
}
