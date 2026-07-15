import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Us | Eagle Holdings",
  description: "Get in touch with Eagle Holdings for global strategic advisory, infrastructure development, and private enterprise solutions.",
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Get in Touch</h1>
            <p className={styles.subtitle}>
              Whether you&apos;re interested in a partnership, seeking strategic advisory, or have a general inquiry, our team is ready to assist you.
            </p>
            
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input type="text" id="name" name="name" className={styles.input} placeholder="John Doe" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input type="email" id="email" name="email" className={styles.input} placeholder="john@example.com" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <select id="subject" name="subject" className={styles.select} required>
                  <option value="">Select a subject</option>
                  <option value="advisory">Strategic Advisory</option>
                  <option value="infrastructure">Infrastructure Development</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" name="message" className={styles.textarea} placeholder="How can we help you?" required></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
          
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Contact Us</h3>
              <p className={styles.infoText}>For all inquiries, partnerships, and strategic advisory requests, reach us directly at:</p>
              <a href="mailto:office@eagleholdings-ph.com" className={styles.emailLink}>office@eagleholdings-ph.com</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
