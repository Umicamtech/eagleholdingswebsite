import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../privacy-policy/page.module.css';

export const metadata = {
  title: 'Do Not Sell My Personal Information | Eagle Holdings',
  description: 'Eagle Holdings policy regarding the sale of personal information.',
};

export default function DoNotSellDataPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>

        <div className={styles.heroStrip}>
          <div className={styles.bgGrid}></div>
          <div className={styles.heroContent}>
            <div className={styles.goldLine}></div>
            <h1 className={styles.pageTitle}>Do Not Sell My Personal Information</h1>
          </div>
        </div>

        <article className={styles.article}>
          <div className={styles.container}>
            <p className={styles.lead}>
              At Eagle Holdings, we value your privacy and are committed to protecting your personal data. 
              We want to be perfectly clear: <strong>we do not sell, rent, or trade your personal information to third parties.</strong>
            </p>

            <section className={styles.section}>
              <h2 className={styles.heading}>Our Data Practices</h2>
              <p>
                As a global strategic advisory firm, we handle sensitive information with the utmost discretion. 
                Any data collected through our website, partner portal, or direct consultations is used exclusively 
                to provide our services, respond to inquiries, and ensure security compliance.
              </p>
              <p>
                We do not participate in any data brokering networks, nor do we monetize client or visitor 
                information through third-party advertising platforms.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>California Consumer Privacy Act (CCPA)</h2>
              <p>
                For residents of California, the CCPA provides the right to opt-out of the "sale" of personal 
                information. Because we do not sell personal information as defined by the CCPA, there is no need 
                for you to opt-out. However, if you wish to exercise your other rights under the CCPA (such as 
                access or deletion), please contact us using the information below.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>Contact Information</h2>
              <p>
                If you have any questions or concerns regarding our data practices, please reach out to our 
                compliance team:
              </p>
              <div className={styles.contactBlock}>
                <p><strong>Eagle Holdings Compliance</strong></p>
                <p>Email: <a href="mailto:office@eagleholdings-ph.com" className={styles.link}>office@eagleholdings-ph.com</a></p>
              </div>
            </section>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
