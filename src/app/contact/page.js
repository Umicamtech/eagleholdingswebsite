'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const inquiryTypes = [
  'Public Infrastructure Advisory',
  'Private Enterprise & Strategic Assets',
  'International Development & Mobility',
  'General Inquiry',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const altchaRef = useRef(null);

  // Load the Altcha web component from CDN (no npm package needed)
  useEffect(() => {
    if (document.querySelector('script[data-altcha]')) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/altcha/dist/altcha.min.js';
    script.type = 'module';
    script.async = true;
    script.dataset.altcha = 'true';
    document.head.appendChild(script);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    // Privacy consent check
    if (!privacyConsent) {
      setStatus('error');
      setErrorMsg('Please confirm you have read and agree to our Privacy Policy.');
      return;
    }

    // Grab the Altcha payload from the widget's hidden input
    const altchaPayload = altchaRef.current?.value || null;

    if (!altchaPayload) {
      setStatus('error');
      setErrorMsg('Please complete the security check before submitting.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, altcha: altchaPayload }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Submission failed.');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <>
      <Header />
      <main className={styles.main}>

        {/* ─── Hero strip ─── */}
        <div className={styles.heroStrip}>
          <div className={styles.bgGrid}></div>
          <div className={styles.heroContent}>
            <div className={styles.goldLine}></div>
            <h1 className={styles.pageTitle}>Initiate a Consultation</h1>
            <p className={styles.pageSubtitle}>
              Strategic engagements begin with a conversation. Provide your details
              below and a member of our advisory team will respond within 48 hours.
            </p>
          </div>
        </div>

        {/* ─── Form section ─── */}
        <section className={styles.formSection}>
          <div className={styles.container}>

            {status === 'success' ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h2 className={styles.successTitle}>Submission Received</h2>
                <p className={styles.successText}>
                  Thank you for reaching out. A member of our advisory team will
                  be in contact within 48 business hours.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>

                {/* Row 1 */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Your full name"
                      className={styles.input}
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="organization">Organization</label>
                    <input
                      id="organization" name="organization" type="text"
                      placeholder="Company or institution"
                      className={styles.input}
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email Address *</label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="your@email.com"
                      className={styles.input}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="phone">Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+1 (000) 000-0000"
                      className={styles.input}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Inquiry type */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="inquiryType">Area of Inquiry *</label>
                  <select
                    id="inquiryType" name="inquiryType" required
                    className={`${styles.input} ${styles.select}`}
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select a capability area</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Your Message *</label>
                  <textarea
                    id="message" name="message" required rows={6}
                    placeholder="Describe your strategic objectives, capital requirements, or the nature of your engagement..."
                    className={`${styles.input} ${styles.textarea}`}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Privacy Policy consent */}
                <div className={styles.consentRow}>
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    className={styles.checkbox}
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    required
                  />
                  <label htmlFor="privacyConsent" className={styles.consentLabel}>
                    I have read and agree to the{' '}
                    <a href="/privacy-policy" className={styles.consentLink} target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                    {' '}and consent to Eagle Holdings processing my personal data for the purpose of this inquiry.
                  </label>
                </div>

                {/* Altcha CAPTCHA widget */}
                <div className={styles.captchaWrapper}>
                  {/*
                    altcha-widget is a web component.
                    challengeurl points to our own API — no third-party tracking.
                    The widget silently runs a proof-of-work in the browser.
                  */}
                  <altcha-widget
                    ref={altchaRef}
                    challengeurl="/api/altcha"
                    style={{ '--altcha-color-base': 'transparent' }}
                  ></altcha-widget>
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p className={styles.errorMsg}>{errorMsg}</p>
                )}

                <div className={styles.formFooter}>
                  <p className={styles.disclaimer}>
                    All communications are treated with strict confidentiality.
                  </p>
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === 'loading'}
                  >
                    <span>{status === 'loading' ? 'Sending…' : 'Submit Inquiry'}</span>
                    <span className={styles.btnLine}></span>
                  </button>
                </div>

              </form>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
