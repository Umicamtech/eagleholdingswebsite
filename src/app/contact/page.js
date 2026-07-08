'use client';

import { useState } from 'react';
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
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend / email service
    setSubmitted(true);
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

            {submitted ? (
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
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className={styles.input}
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="organization">Organization</label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
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
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className={styles.input}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
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
                    id="inquiryType"
                    name="inquiryType"
                    required
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
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe your strategic objectives, capital requirements, or the nature of your engagement..."
                    className={`${styles.input} ${styles.textarea}`}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formFooter}>
                  <p className={styles.disclaimer}>
                    All communications are treated with strict confidentiality.
                  </p>
                  <button type="submit" className={styles.submitBtn}>
                    <span>Submit Inquiry</span>
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
