import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <span className={styles.brandName}>EAGLE</span>
        <Image 
          src="/eagle-icon.png" 
          alt="Eagle Holdings Logo" 
          width={45} 
          height={45} 
          className={styles.logoImage}
          priority
        />
        <span className={styles.brandName}>HOLDINGS</span>
      </div>
      
      <div className={styles.navActions}>
        <ThemeToggle />
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
