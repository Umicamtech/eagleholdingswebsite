import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../privacy-policy/page.module.css';

export const metadata = {
  title: 'Modern Slavery Statement | Eagle Holdings',
  description: 'Eagle Holdings Modern Slavery and Human Trafficking Statement.',
};

export default function ModernSlaveryStatementPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>

        <div className={styles.heroStrip}>
          <div className={styles.bgGrid}></div>
          <div className={styles.heroContent}>
            <div className={styles.goldLine}></div>
            <h1 className={styles.pageTitle}>Modern Slavery Statement</h1>
          </div>
        </div>

        <article className={styles.article}>
          <div className={styles.container}>
            <p className={styles.lead}>
              This statement sets out the actions taken by Eagle Holdings to understand all potential 
              modern slavery risks related to its business and to put in place steps that are aimed 
              at ensuring that there is no slavery or human trafficking in its own business and its supply chains.
            </p>

            <section className={styles.section}>
              <h2 className={styles.heading}>Organizational Structure and Supply Chains</h2>
              <p>
                Eagle Holdings provides global strategic advisory services, public infrastructure development, 
                and comprehensive global mobility solutions. We operate globally, engaging with sovereign entities, 
                private enterprises, and international suppliers.
              </p>
              <p>
                Our supply chains primarily include professional services (legal, financial, IT), 
                technology providers, and specialized consultants. Given the nature of our business, 
                we consider our direct risk of modern slavery and human trafficking to be low. However, 
                we recognize that our influence extends to the projects we advise on, particularly in 
                infrastructure development.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>Our Policies</h2>
              <p>We are committed to ensuring that there is no modern slavery or human trafficking in our supply chains or in any part of our business. Our policies reflect our commitment to acting ethically and with integrity in all our business relationships.</p>
              <ul className={styles.list}>
                <li><strong>Code of Conduct:</strong> We expect all employees and contractors to maintain the highest standards of ethical conduct.</li>
                <li><strong>Supplier Diligence:</strong> We conduct due diligence on critical suppliers and partners to assess compliance with international labor standards.</li>
                <li><strong>Whistleblowing Policy:</strong> We encourage all personnel to report any concerns related to the direct activities or the supply chains of the organization.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>Due Diligence and Risk Assessment</h2>
              <p>
                As part of our initiative to identify and mitigate risk, particularly when advising on large-scale 
                BOT/BOO infrastructure projects, we integrate Environmental, Social, and Governance (ESG) criteria 
                into our strategic assessments. We expect our partners and contractors to adhere strictly to local 
                labor laws and international human rights conventions.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>Continuous Improvement</h2>
              <p>
                We continuously review our procurement processes and advisory methodologies to ensure we remain 
                vigilant against modern slavery. We are committed to increasing awareness across our organization 
                and working with our stakeholders to uphold human dignity globally.
              </p>
            </section>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
