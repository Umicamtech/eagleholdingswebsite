import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: 'Request Credentials | Eagle Holdings',
  description: 'Request access to the Eagle Holdings Partner Portal.',
};

export default function RequestCredentials() {
  return (
    <>
      <Header />
      <main className={styles.main}>

        {/* ─── Hero strip ─── */}
        <div className={styles.heroStrip}>
          <div className={styles.bgGrid}></div>
          <div className={styles.heroContent}>
            <div className={styles.goldLine}></div>
            <h1 className={styles.pageTitle}>Credential Request</h1>
            <p className={styles.pageSubtitle}>
              New stakeholders may request access to the Partner Portal. Each request undergoes 
              a rigorous verification process before credentials are issued.
            </p>
          </div>
        </div>

        {/* ─── Form section ─── */}
        <section className={styles.formSection}>
          <div className={styles.container}>
            <form className={styles.form}>
              
              {/* Row 1 */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="firstName">First Name *</label>
                  <input 
                    id="firstName"
                    name="firstName"
                    type="text" 
                    placeholder="Enter your first name" 
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="lastName">Last Name *</label>
                  <input 
                    id="lastName"
                    name="lastName"
                    type="text" 
                    placeholder="Enter your last name" 
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              {/* Corporate Email */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Corporate Email *</label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="name@company.com" 
                  className={styles.input}
                  required
                />
              </div>

              {/* Purpose */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="purpose">Purpose of Request *</label>
                <textarea 
                  id="purpose"
                  name="purpose"
                  placeholder="Please describe your affiliation and reason for requiring portal access..." 
                  className={`${styles.input} ${styles.textarea}`}
                  required
                />
              </div>

              <div className={styles.formFooter}>
                <p className={styles.disclaimer}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', verticalAlign: 'text-bottom'}}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                  </svg>
                  Credentials will be issued only to verified stakeholders. Access is monitored and strictly audited.
                </p>
                <button type="button" className={styles.submitBtn}>
                  <span>Submit Request</span>
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
