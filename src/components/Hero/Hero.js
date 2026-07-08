'use client';

import styles from "./Hero.module.css";

export default function Hero() {
  const scrollToCapabilities = () => {
    const section = document.getElementById('capabilities');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper}>
        <div className={styles.videoGradientTop}></div>
        <div className={styles.videoGradientBottom}></div>
        <video 
          className={styles.videoOverlay}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://cdn.jsdelivr.net/npm/videos-for-web/dist/gradient.webm" type="video/webm" />
        </video>
      </div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          <div className={styles.textContent}>

            <h1 className={`${styles.headline} fade-in delay-2`}>
              The Standard for <br/><span className={styles.goldText}>Global Strategic</span> Advisory.
            </h1>
            <p className={`${styles.subHeadline} fade-in delay-3`}>
              Leading public infrastructure development, private enterprise, and comprehensive global mobility.
            </p>
            <div className={`${styles.actions} fade-in delay-3`}>
              <button className={styles.primaryAction} onClick={scrollToCapabilities}>
                <span className={styles.buttonText}>Explore Capabilities</span>
                <span className={styles.buttonLine}></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
