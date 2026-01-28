import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kestrel Village New Homes | Summerlin West Las Vegas | Dr. Jan Duffy",
  description: "Explore Kestrel Village new construction homes in Summerlin West, Las Vegas. 6+ communities from $480K by Woodside, Pulte, Lennar & Taylor Morrison. Call Dr. Jan Duffy 702-222-1964 for VIP tours.",
  keywords: "Kestrel Village, Summerlin West homes, Las Vegas new construction, Woodside Homes, Pulte Homes, Lennar, Taylor Morrison, Dr. Jan Duffy, 89138",
  authors: [{ name: "Dr. Jan Duffy" }],
  openGraph: {
    title: "Kestrel Village New Homes | Summerlin West Las Vegas",
    description: "New construction homes from $480K in Las Vegas' most sought-after village. 6+ communities by premier builders.",
    url: "https://kestrelvillage.com",
    siteName: "Kestrel Village",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kestrel Village New Homes | Summerlin West",
    description: "New construction homes from $480K in Las Vegas' most sought-after village.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kestrelvillage.com",
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
      </body>
    </html>
  );
}
