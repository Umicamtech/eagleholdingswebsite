'use client';

import { useRef, useEffect, useState } from 'react';
import styles from "./Services.module.css";

const services = [
  {
    title: "Public Infrastructure & Institutional Capital",
    body: "Implementing long-form participation models. We navigate FDI to anchor high-capacity civil assets and public-private partnerships.",
    number: "01"
  },
  {
    title: "Private Enterprise & Strategic Assets",
    body: "Driving commercial success across diverse sectors, including high-value real estate, retail development, and international import/export operations.",
    number: "02"
  },
  {
    title: "International Development & Strategic Mobility",
    body: "Facilitating sophisticated global transitions and sustainable asset development. We deliver comprehensive advisory services designed to seamlessly bridge international capital with emerging market infrastructure.",
    number: "03"
  },
];

// Each card animates in during a dedicated window of scroll progress
// progress 0.0 - 0.0: card 0 is always visible (starts there)
// progress 0.0 - 0.5: card 1 slides in from below
// progress 0.5 - 1.0: card 2 slides in from below
const CARD_WINDOWS = [
  { start: 0, end: 0 },   // card 0: already visible at start
  { start: 0, end: 0.5 }, // card 1: animates in during 0 → 0.5
  { start: 0.5, end: 1 }, // card 2: animates in during 0.5 → 1
];

// How much each card is offset vertically when stacked (creates the "deck" look)
const STACK_OFFSET = 16; // px per card

export default function Services() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Total scrollable distance = section height minus one viewport height
      const totalScrollable = rect.height - window.innerHeight;
      // How far we've scrolled into this section
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // sectionRef on the outer tall element - this is what creates the scroll space
    <section ref={sectionRef} className={styles.servicesSection}>

      {/* pinContainer sticks to viewport and shows the animated content */}
      <div className={styles.pinContainer}>
        <div className={styles.bgGrid}></div>

        <div className={styles.inner}>
          {/* Left column: title + description, stays locked */}
          <div className={styles.sidePanel}>
            <div className={styles.headerLine}></div>
            <h2 className={styles.sectionTitle}>Our<br />Capabilities</h2>
          </div>

          {/* Right column: stacked cards */}
          <div className={styles.cardStack}>
            {services.map((service, index) => {
              const win = CARD_WINDOWS[index];

              let cardProgress = 0;
              if (index === 0) {
                cardProgress = 1; // card 0 always fully visible
              } else {
                const rangeSize = win.end - win.start;
                cardProgress = Math.max(0, Math.min(1, (progress - win.start) / rangeSize));
              }

              // Cards slide in from 120vh below their resting position
              const translateY = (1 - cardProgress) * 120;
              
              // Each successive card is slightly smaller to create depth
              const stackScale = 1 - (index * 0.025);

              return (
                <div
                  key={index}
                  className={styles.card}
                  style={{
                    top: `${index * STACK_OFFSET}px`,
                    transform: `translateY(${translateY}vh) scale(${stackScale})`,
                    zIndex: index + 1,
                    transition: cardProgress > 0 && cardProgress < 1
                      ? 'transform 0.05s linear'
                      : 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease',
                  }}
                >
                  <div className={styles.cardGlow}></div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardTop}>
                      <span className={styles.cardNumber}>{service.number}</span>
                      <div className={styles.cardDivider}></div>
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardText}>{service.body}</p>
                    </div>
                    <div className={styles.cardAction}>
                      <span className={styles.actionText}>Read More</span>
                      <span className={styles.actionArrow}>→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
