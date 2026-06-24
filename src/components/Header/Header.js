import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image 
          src="/eagle-logo.png" 
          alt="Eagle Holdings Logo" 
          width={50} 
          height={50} 
          className={styles.logoImage}
          priority
        />
        <span className={styles.brandName}>EAGLE HOLDINGS</span>
      </div>
      
      <div className={styles.navActions}>
        <Link href="/partner-login" className={styles.buttonPrimary}>
          Partner Login
        </Link>
        <Link href="/request-credentials" className={styles.buttonSecondary}>
          Request Credentials
        </Link>
      </div>
    </header>
  );
}
