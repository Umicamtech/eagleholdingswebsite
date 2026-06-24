import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <Image 
          src="/eagle-logo.png" 
          alt="Eagle Holdings Logo" 
          width={50} 
          height={50} 
          className={styles.logoImage}
        />
        <span className={`${styles.brandName} brand-font`}>EAGLE HOLDINGS</span>
      </div>
      <p className={styles.securityText}>
        Access to project-specific data, strategic briefings, and the secure Partner Portal is restricted to verified stakeholders.
      </p>
      <p className={styles.registrationText}>
        EAGLE HOLDINGS IS A COMPANY REGISTERED WITH INANA.
      </p>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} EAGLE HOLDINGS. All rights reserved.
      </div>
    </footer>
  );
}
