import styles from "./Services.module.css";

const services = [
  {
    title: "Public Infrastructure & Institutional Capital",
    body: "Implementing long-form participation models. We navigate FDI to anchor high-capacity civil assets and public-private partnerships.",
    delay: "delay-1",
    number: "01"
  },
  {
    title: "Private Enterprise & Strategic Assets",
    body: "Driving commercial success across diverse sectors, including high-value real estate, retail development, and international import/export operations.",
    delay: "delay-2",
    number: "02"
  },
  {
    title: "International Development & Strategic Mobility",
    body: "Facilitating sophisticated global transitions and sustainable asset development. We deliver comprehensive advisory services designed to seamlessly bridge international capital with emerging market infrastructure.",
    delay: "delay-3",
    number: "03"
  },
];

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.bgGrid}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={`${styles.headerLine} fade-in`}></div>
          <h2 className={`${styles.sectionTitle} fade-in delay-1`}>Core Competencies</h2>
        </div>
        <div className={styles.stackWrapper}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.plate} fade-in ${service.delay}`}
              style={{ top: `calc(150px + ${index * 50}px)` }}
            >
              <div className={styles.plateGlow}></div>
              <div className={styles.plateContent}>
                <div className={styles.plateHeader}>
                  <span className={styles.plateNumber}>{service.number}</span>
                  <div className={styles.plateDivider}></div>
                </div>
                <div className={styles.plateBody}>
                  <h3 className={styles.plateTitle}>{service.title}</h3>
                  <p className={styles.plateText}>{service.body}</p>
                </div>
                <div className={styles.plateAction}>
                  <span className={styles.actionText}>Read More</span>
                  <span className={styles.actionArrow}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
