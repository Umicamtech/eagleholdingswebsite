import styles from "./Services.module.css";

const services = [
  {
    title: "Public Infrastructure & Institutional Capital",
    body: "Implementing long-form participation models. We navigate FDI to anchor high-capacity civil assets and public-private partnerships.",
    features: ["Public-Private Partnerships (PPP)", "Foreign Direct Investment (FDI)", "Asset Management"],
    delay: "delay-1",
  },
  {
    title: "Private Enterprise & Strategic Assets",
    body: "Driving commercial success across diverse sectors, including high-value real estate, retail development, and international import/export operations.",
    features: ["High-Value Real Estate", "Retail Development", "Supply Chain Optimization"],
    delay: "delay-2",
  },
  {
    title: "Global Mobility & Sustainable Solutions",
    body: "Facilitating seamless relocation, repatriation, and lifestyle transitions—with a specialized focus on Africa. We provide comprehensive advisory.",
    features: ["Diaspora Repatriation", "Resource-Optimized Housing", "Expatriate Logistics"],
    delay: "delay-3",
  },
];

export default function Services() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Our Core Pillars</h2>
        <p className={styles.sectionSubtitle}>
          We structure our operations across three strategic domains, delivering measurable value and sustainable impact globally.
        </p>
      </div>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={`${styles.card} fade-in ${service.delay}`}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardBody}>{service.body}</p>
            <ul className={styles.featureList}>
              {service.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  <span className={styles.checkIcon}>✦</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
