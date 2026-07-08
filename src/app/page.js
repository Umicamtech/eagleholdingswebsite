import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
