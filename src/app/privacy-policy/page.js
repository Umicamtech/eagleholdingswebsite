import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Privacy Policy | Eagle Holdings',
  description: 'Eagle Holdings Privacy Policy — how we collect, use, and protect your personal information.',
};

const LAST_UPDATED = 'July 8, 2025';
const COMPANY_EMAIL = 'office@eagleholdings-ph.com';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>

        {/* Hero strip */}
        <div className={styles.heroStrip}>
          <div className={styles.bgGrid}></div>
          <div className={styles.heroContent}>
            <div className={styles.goldLine}></div>
            <h1 className={styles.pageTitle}>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last updated: {LAST_UPDATED}</p>
          </div>
        </div>

        {/* Content */}
        <article className={styles.article}>
          <div className={styles.container}>

            <p className={styles.lead}>
              Eagle Holdings (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to
              protecting your personal information and your right to privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you visit our website or
              submit an inquiry through our contact form.
            </p>

            <section className={styles.section}>
              <h2 className={styles.heading}>1. Information We Collect</h2>
              <p>When you submit our contact form, we collect the following personal information you voluntarily provide:</p>
              <ul className={styles.list}>
                <li><strong>Full Name</strong> — to address you appropriately in our response.</li>
                <li><strong>Organization</strong> — to understand the context of your inquiry.</li>
                <li><strong>Email Address</strong> — our primary channel for responding to your inquiry.</li>
                <li><strong>Phone Number</strong> — optional, used only if you request a call.</li>
                <li><strong>Area of Inquiry &amp; Message</strong> — to route and respond to your request.</li>
              </ul>
              <p>We do not collect sensitive personal data (e.g. financial account details, health information) through this website.</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>2. How We Use Your Information</h2>
              <p>We use the information you provide solely for the following purposes:</p>
              <ul className={styles.list}>
                <li>To respond to your consultation inquiry and communicate with you regarding your request.</li>
                <li>To route your inquiry to the appropriate member of our advisory team.</li>
                <li>To maintain a record of our correspondence for internal audit and compliance purposes.</li>
              </ul>
              <p>We will never use your information for unsolicited marketing communications without your express consent.</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>3. Legal Basis for Processing</h2>
              <p>We process your personal data under the following legal bases:</p>
              <ul className={styles.list}>
                <li><strong>Consent</strong> — by checking the consent box on our contact form, you explicitly agree to the processing described in this Policy.</li>
                <li><strong>Legitimate Interests</strong> — processing is necessary for our legitimate interest in responding to business inquiries.</li>
                <li><strong>Legal Obligation</strong> — where required by applicable law.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>4. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil the purpose for
                which it was collected, or as required by applicable law. Inquiry records are generally retained
                for <strong>3 years</strong> following our last substantive communication, after which they
                are securely deleted.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>5. Disclosure of Your Information</h2>
              <p>We do not sell, trade, or transfer your personal information to third parties, except in the following limited circumstances:</p>
              <ul className={styles.list}>
                <li><strong>Internal Personnel</strong> — your inquiry may be shared with Eagle Holdings team members who need it to respond to your request.</li>
                <li><strong>Email Service Providers</strong> — we use a transactional email provider to deliver your inquiry to our team. These providers process your data solely to deliver the email and are bound by their own privacy obligations.</li>
                <li><strong>Legal Requirements</strong> — we may disclose your information if required by law or valid requests from public authorities.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>6. Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal information
                against unauthorised access, alteration, disclosure, or destruction. Our contact form is protected
                by a proof-of-work verification mechanism (ALTCHA) to prevent automated bot submissions, and all
                data in transit is encrypted via TLS.
              </p>
              <p>
                No method of transmission over the Internet is 100% secure. While we strive to use commercially
                acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>7. Cookies &amp; Tracking</h2>
              <p>
                This website does not use tracking cookies, advertising pixels, or third-party analytics services
                that collect personally identifiable information.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>8. Your Rights</h2>
              <p>You may have the following rights regarding your personal data under applicable data protection law:</p>
              <ul className={styles.list}>
                <li><strong>Right to Access</strong> — you may request a copy of the personal data we hold about you.</li>
                <li><strong>Right to Rectification</strong> — you may request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to Erasure</strong> — you may request deletion of your personal data, subject to legal retention obligations.</li>
                <li><strong>Right to Restriction</strong> — you may request that we limit the processing of your data.</li>
                <li><strong>Right to Object</strong> — you may object to our processing of your data based on legitimate interests.</li>
                <li><strong>Right to Withdraw Consent</strong> — you may withdraw your consent at any time by contacting us directly.</li>
              </ul>
              <p>To exercise any of these rights, please contact us using the details in Section 10.</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>9. International Transfers</h2>
              <p>
                Where your information is transferred internationally, we ensure that appropriate safeguards
                are in place, including contractual protections in line with applicable data protection frameworks.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>10. Contact Us</h2>
              <p>
                If you have questions, concerns, or wish to exercise your data rights, please contact us at:
              </p>
              <div className={styles.contactBlock}>
                <p><strong>Eagle Holdings</strong></p>
                <p>
                  Email:{' '}
                  <a href={`mailto:${COMPANY_EMAIL}`} className={styles.link}>
                    {COMPANY_EMAIL}
                  </a>
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.heading}>11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be reflected by an
                updated &ldquo;Last updated&rdquo; date at the top of this page. Your continued use of our
                website after changes constitutes acceptance of the revised Policy.
              </p>
            </section>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
