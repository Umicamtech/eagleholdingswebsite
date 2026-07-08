import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://eagleholdings-ph.com'),
  title: "Eagle Holdings | Global Strategic Advisory",
  description: "The Standard for Global Strategic Advisory. Leading public infrastructure development, private enterprise, and comprehensive global mobility.",
  keywords: "Strategic Advisory, Infrastructure Development, Private Enterprise, Global Mobility, BOT, BOO, Ghana Relocation",
  openGraph: {
    title: "Eagle Holdings | Global Strategic Advisory",
    description: "The Standard for Global Strategic Advisory. Leading public infrastructure development, private enterprise, and comprehensive global mobility.",
    url: "https://eagleholdings-ph.com",
    siteName: "Eagle Holdings",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Eagle Holdings | Global Strategic Advisory",
    description: "The Standard for Global Strategic Advisory.",
  },
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Eagle Holdings",
  "url": "https://eagleholdings-ph.com",
  "logo": "https://eagleholdings-ph.com/eagle-logo.png",
  "description": "Global Strategic Advisory specializing in public infrastructure, private enterprise, and global mobility.",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "office@eagleholdings-ph.com",
    "contactType": "customer service"
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
