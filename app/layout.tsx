import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import Cursor from "@/components/Cursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Roan Co. — Save Money. Get Smarter. Look Better.",
  description:
    "We help small and medium businesses save on payment processing, implement AI workflows, and build modern websites. Salt Lake City & Jupiter, FL.",
  keywords: [
    "Roan Co",
    "payment processing",
    "AI consulting",
    "AI workflows",
    "small business",
    "website development",
    "business automation",
  ],
  authors: [{ name: "Roan Co." }],
  creator: "Roan Co.",
  openGraph: {
    title: "Roan Co. — Save Money. Get Smarter. Look Better.",
    description:
      "We help SMBs save on payment processing, implement AI workflows, and build modern websites.",
    type: "website",
    siteName: "Roan Co.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roan Co. — Save Money. Get Smarter. Look Better.",
    description:
      "We help SMBs save on payment processing, implement AI workflows, and build modern websites.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>R</text></svg>"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Roan Co.",
              description:
                "Payment processing, AI workflow consulting, and website development for SMBs.",
              foundingDate: "2026",
              founders: [
                { "@type": "Person", name: "Stiles Dichter", jobTitle: "CEO" },
                { "@type": "Person", name: "Josh Langsam", jobTitle: "CTO" },
              ],
              knowsAbout: [
                "Payment Processing",
                "AI Workflow Automation",
                "Website Development",
                "Small Business Consulting",
              ],
            }),
          }}
        />
      </head>
      <body className="grain">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
