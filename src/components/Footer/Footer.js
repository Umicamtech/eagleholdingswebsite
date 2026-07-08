import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.securityText}>
        Access to project-specific data, strategic briefings, and the secure Partner Portal is restricted to verified stakeholders.
      </p>
      <p className={styles.registrationText}>
        eAGLE HOLDINGS IS REGISTERED WITH INANA.
      </p>

      <div className={styles.legalLinks}>
        <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
        <Link href="/terms" className={styles.legalLink}>Terms & Conditions</Link>
        <Link href="/do-not-sell-data" className={styles.legalLink}>Do Not Sell My Data</Link>
        <Link href="/modern-slavery-statement" className={styles.legalLink}>Modern Slavery Statement</Link>
        <Link href="/aml-policy" className={styles.legalLink}>AML Policy</Link>
      </div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} EAGLE HOLDINGS. All rights reserved.
      </div>
    </footer>
  );
}
