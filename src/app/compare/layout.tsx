import type { Metadata } from 'next';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Compare Kestrel Village Communities | Side-by-Side | Dr. Jan Duffy',
  description: 'Compare up to 3 Kestrel Village communities side by side. Specs, price, builder, and features for Summerlin West new construction.',
  alternates: { canonical: `${SITE_URL}/compare` },
  openGraph: {
    title: 'Compare Kestrel Village Communities',
    description: 'Side-by-side comparison of Kestrel Village communities. Select 2–3 to compare specs and price.',
    url: `${SITE_URL}/compare`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
