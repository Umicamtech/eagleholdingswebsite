import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: 'Partner Login | Eagle Holdings',
  description: 'Secure access to global strategic briefings and project data.',
};

export default function PartnerLogin() {
  return (
    <>
      <Header />
      <main className={styles.main}>

        {/* ─── Hero strip ─── */}
        <div className={styles.heroStrip}>
          <div className={styles.bgGrid}></div>
          <div className={styles.heroContent}>
            <div className={styles.goldLine}></div>
            <h1 className={styles.pageTitle}>Partner Portal</h1>
            <p className={styles.pageSubtitle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'text-bottom', color: 'var(--gold)'}}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
              </svg>
              Secure access to global strategic briefings and proprietary project data.
              Authentication required.
            </p>
          </div>
        </div>

        {/* ─── Form section ─── */}
        <section className={styles.formSection}>
          <div className={styles.container}>
            <form className={styles.form}>
              
              <div className={styles.field}>
                <label className={styles.label} htmlFor="partnerId">Partner ID</label>
                <input 
                  id="partnerId"
                  name="partnerId"
                  type="text" 
                  placeholder="Enter your credential ID" 
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="securityKey">Security Key</label>
                <input 
                  id="securityKey"
                  name="securityKey"
                  type="password" 
                  placeholder="••••••••••••" 
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formFooter}>
                <Link href="/request-credentials" className={styles.secondaryLink}>
                  Don't have an account? <span>Request Credentials</span>
                </Link>
                <button type="button" className={styles.submitBtn}>
                  <span>Authenticate</span>
                  <span className={styles.btnLine}></span>
                </button>
              </div>

            </form>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
