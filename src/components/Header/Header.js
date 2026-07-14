"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change / resize back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logoContainer} onClick={closeMenu}>
          <Image
            src="/eagle-logo.png"
            alt="Eagle Holdings Logo"
            width={48}
            height={48}
            className={styles.logoImage}
            priority
          />
          <span className={`${styles.brandName} brand-font`}>EAGLE HOLDINGS</span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.navActions} aria-label="Main navigation">
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/partner-login" className={styles.buttonPrimary}>Partner Login</Link>
          <Link href="/request-credentials" className={styles.buttonSecondary}>Request Credentials</Link>
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`${styles.mobileDrawer} ${menuOpen ? styles.mobileDrawerOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact</Link>
          <Link href="/partner-login" className={styles.mobileButtonPrimary} onClick={closeMenu}>Partner Login</Link>
          <Link href="/request-credentials" className={styles.mobileButtonSecondary} onClick={closeMenu}>Request Credentials</Link>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />
      )}
    </>
  );
}
