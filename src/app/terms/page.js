import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../privacy-policy/page.module.css';

export const metadata = {
  title: 'Terms and Conditions | Eagle Holdings',
  description: 'Terms and conditions governing the use of Eagle Holdings website and services.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>

        <div className={styles.heroStrip}>
          <div className={styles.bgGrid}></div>
          <div className={styles.heroContent}>
            <div className={styles.goldLine}></div>
            <h1 className={styles.pageTitle}>Terms &amp; Conditions</h1>
          </div>
        </div>

        <article className={styles.article}>
          <div className={styles.container}>
            <p className={styles.lead}>
              Welcome to Eagle Holdings. By accessing or using our website, you agree to be bound by 
              these Terms and Conditions and our Privacy Policy. Please read them carefully.
            </p>

            <section className={styles.section}>
              <h2 className={styles.heading}>1. Use of the Website</h2>
              <p>
                The information provided on this website is for general informational purposes only and 
                does not constitute financial, legal, or strategic advice. You agree to use the site only 
                for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit 
                anyone else's use and enjoyment of the website.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise stated, Eagle Holdings and/or its licensors own the intellectual property 
                rights for all material on this website. All intellectual property rights are reserved. You may 
                access this from Eagle Holdings for your own personal use subjected to restrictions set in these 
                terms and conditions.
              </p>
              <p>You must not:</p>
              <ul className={styles.list}>
                <li>Republish material from Eagle Holdings</li>
                <li>Sell, rent, or sub-license material from Eagle Holdings</li>
                <li>Reproduce, duplicate, or copy material from Eagle Holdings</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>3. Partner Portal Access</h2>
              <p>
                Access to the Partner Portal is strictly limited to authorized and verified stakeholders. 
                If you are provided with credentials, you must treat such information as confidential. You 
                must not disclose it to any third party. We have the right to disable any credentials at any 
                time if, in our reasonable opinion, you have failed to comply with any of the provisions of 
                these terms.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>4. Limitation of Liability</h2>
              <p>
                In no event shall Eagle Holdings, nor any of its officers, directors, and employees, be held 
                liable for anything arising out of or in any way connected with your use of this website. 
                Eagle Holdings shall not be held liable for any indirect, consequential, or special liability 
                arising out of or in any way related to your use of this website.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>5. Governing Law & Jurisdiction</h2>
              <p>
                These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction 
                in which Eagle Holdings is registered, and you submit to the non-exclusive jurisdiction of the 
                state and federal courts located in for the resolution of any disputes.
              </p>
            </section>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
