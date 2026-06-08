import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { SITE } from "./content/sections";

const chillax = localFont({
  src: "../public/fonts/Chillax-Bold.otf",
  variable: "--font-chillax-custom",
  display: "swap",
  weight: "700",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit-custom",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: "/",
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${chillax.variable} ${outfit.variable}`}>
      <body className="antialiased bg-cream text-ink font-body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
