import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../privacy-policy/page.module.css';

export const metadata = {
  title: 'Anti-Money Laundering Policy | Eagle Holdings',
  description: 'Eagle Holdings Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) Policy.',
};

export default function AMLPolicyPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>

        <div className={styles.heroStrip}>
          <div className={styles.bgGrid}></div>
          <div className={styles.heroContent}>
            <div className={styles.goldLine}></div>
            <h1 className={styles.pageTitle}>Anti-Money Laundering (AML) Policy</h1>
          </div>
        </div>

        <article className={styles.article}>
          <div className={styles.container}>
            <p className={styles.lead}>
              Eagle Holdings is committed to the highest standards of compliance against money laundering 
              and terrorist financing. This policy outlines our framework for preventing our services from 
              being used to facilitate financial crimes.
            </p>

            <section className={styles.section}>
              <h2 className={styles.heading}>1. Our Commitment</h2>
              <p>
                We adhere strictly to international AML and Counter-Terrorist Financing (CTF) laws and regulations. 
                Our executive board and management team hold a zero-tolerance approach towards financial crime 
                and actively promote a culture of compliance across all our global operations.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>2. Know Your Customer (KYC) & Due Diligence</h2>
              <p>
                Before entering into any advisory agreement, partnership, or facilitating capital movement, 
                Eagle Holdings conducts rigorous KYC procedures. This includes:
              </p>
              <ul className={styles.list}>
                <li>Verifying the identity of individual clients.</li>
                <li>Identifying the ultimate beneficial owners (UBOs) of corporate entities.</li>
                <li>Understanding the nature of the client's business and the intended purpose of the relationship.</li>
                <li>Conducting enhanced due diligence (EDD) for high-risk clients, including Politically Exposed Persons (PEPs).</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>3. Ongoing Monitoring</h2>
              <p>
                Our compliance obligations do not end at onboarding. We conduct continuous monitoring of our 
                business relationships and the transactions we advise on to ensure they remain consistent with our 
                knowledge of the client, their business, and their risk profile.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>4. Suspicious Activity Reporting</h2>
              <p>
                Eagle Holdings maintains internal procedures for personnel to report any knowledge or suspicion 
                of money laundering or terrorist financing. Where legally required, we will promptly report such 
                suspicions to the relevant Financial Intelligence Unit (FIU) or regulatory authority.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>5. Training and Awareness</h2>
              <p>
                All relevant employees receive regular training on AML and CTF risks. This ensures our team is 
                equipped to recognize red flags and understands their legal obligations under our compliance framework.
              </p>
            </section>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
