import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer} style={{ textDecoration: 'none' }}>
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
        </Link>
        
        <div className={styles.navActions}>
          <ThemeToggle />
          <Link href="/partner-login" className={styles.buttonPrimary}>
            Partner Login
          </Link>
          <Link href="/contact" className={styles.buttonPrimary}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
