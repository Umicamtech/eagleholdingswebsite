import styles from "./Services.module.css";

const services = [
  {
    title: "Public Infrastructure & Institutional Capital",
    body: "Implementing long-form participation models. We navigate FDI to anchor high-capacity civil assets and public-private partnerships.",
    delay: "delay-1",
  },
  {
    title: "Private Enterprise & Strategic Assets",
    body: "Driving commercial success across diverse sectors, including high-value real estate, retail development, and international import/export operations.",
    delay: "delay-2",
  },
  {
    title: "International Development & Strategic Mobility",
    body: "Facilitating sophisticated global transitions and sustainable asset development. We deliver comprehensive advisory services designed to seamlessly bridge international capital with emerging market infrastructure.",
    delay: "delay-3",
  },
];

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={`${styles.card} fade-in ${service.delay}`}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardBody}>{service.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
