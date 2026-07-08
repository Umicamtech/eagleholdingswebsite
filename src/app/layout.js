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
  title: "Eagle Holdings | Global Strategic Advisory",
  description: "The Standard for Global Strategic Advisory. Leading public infrastructure development, private enterprise, and comprehensive global mobility.",
  keywords: "Strategic Advisory, Infrastructure Development, Private Enterprise, Global Mobility, BOT, BOO, Ghana Relocation",
  openGraph: {
    title: "Eagle Holdings | Global Strategic Advisory",
    description: "The Standard for Global Strategic Advisory. Leading public infrastructure development, private enterprise, and comprehensive global mobility.",
    url: "https://eagleholdings.com",
    siteName: "Eagle Holdings",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
