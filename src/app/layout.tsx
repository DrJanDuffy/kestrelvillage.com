import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_TRACKING_ID = "G-XQ8YL4EWTR";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kestrel Village New Homes | Summerlin West Las Vegas | Dr. Jan Duffy",
  description: "Explore Kestrel Village new construction homes in Summerlin West, Las Vegas. 5 communities from $477K by Woodside Homes, Lennar & Pulte. Call Dr. Jan Duffy 702-222-1964 for VIP tours.",
  keywords: "Kestrel Village, Summerlin West homes, Las Vegas new construction, Woodside Homes, Pulte Homes, Lennar, Dr. Jan Duffy, 89138",
  authors: [{ name: "Dr. Jan Duffy" }],
  metadataBase: new URL("https://www.kestrelvillage.com"),
  openGraph: {
    title: "Kestrel Village New Homes | Summerlin West Las Vegas",
    description: "New construction homes from $477K in Las Vegas' most sought-after village. 5 communities by Woodside, Lennar & Pulte.",
    url: "https://www.kestrelvillage.com",
    siteName: "Kestrel Village",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kestrel Village New Homes | Summerlin West",
    description: "New construction homes from $477K in Las Vegas' most sought-after village.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.kestrelvillage.com",
  },
  other: {
    "theme-color": "#0c0a09",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        {/* RealScout Property Search Widget */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
          type="module"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
