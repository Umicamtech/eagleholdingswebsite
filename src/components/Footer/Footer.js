import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.securityText}>
        Access to project-specific data, strategic briefings, and the secure Partner Portal is restricted to verified stakeholders.
      </p>
      <p className={styles.registrationText}>
        EAGLE HOLDINGS IS AN INDIGENOUS COMPANY REGISTERED WITH INANA.
      </p>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} EAGLE HOLDINGS. All rights reserved.
      </div>
    </footer>
  );
}
