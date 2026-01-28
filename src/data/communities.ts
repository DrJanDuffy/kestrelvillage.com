export type Community = {
  slug: string;
  name: string;
  builder: string;
  type: string;
  sqft: string;
  beds: string;
  baths: string;
  garage: string;
  price: string;
  status: string;
  units: number;
  highlight: string;
  description: string;
  highlights: string[];
  amenities: string[];
};

export const communities: Community[] = [
  {
    slug: 'dove-rock',
    name: 'Dove Rock',
    builder: 'Woodside Homes',
    type: 'Townhomes',
    sqft: '1,724 - 2,217',
    beds: '2-4',
    baths: '2.5',
    garage: '2-car',
    price: 'From $520K',
    status: 'Now Preselling',
    units: 67,
    highlight: 'Community pool, master-planned Summerlin lifestyle',
    description: 'Dove Rock in Summerlin offers Woodside Homes townhomes from $519,990. 4 floor plans (Arden, Briar, Cora, Haven) with 2–4 beds, 1,724–2,217 sq ft. Community pool, near Red Rock Canyon, Downtown Summerlin, and TPC golf.',
    highlights: [
      'Community pool',
      'Master-planned Summerlin community',
      '4 floor plans: Arden, Briar, Cora, Haven',
      '2–4 bedrooms, 1,724–2,217 sq ft',
      'Near Red Rock Canyon & Downtown Summerlin'
    ],
    amenities: ['Community pool', '200+ miles of trails', 'Near TPC Summerlin golf', 'Downtown Summerlin shopping', 'Energy-efficient features', '26 top-rated schools nearby']
  },
  {
    slug: 'falcon-crest',
    name: 'Falcon Crest',
    builder: 'Woodside Homes',
    type: 'Single-Story',
    sqft: '1,950 - 2,218',
    beds: '3-5',
    baths: '2.5-3.5',
    garage: '3-car',
    price: 'From $580K',
    status: 'Coming Soon',
    units: 110,
    highlight: 'All single-story homes in a gated community setting',
    description: 'Falcon Crest at Kestrel Village will feature Woodside Homes single-story homes. Expected pricing from $580K. 3–5 beds, 1,950–2,218 sq ft. Gated community in Summerlin West. Contact Dr. Jan Duffy for updates.',
    highlights: [
      'All single-story living',
      'Gated community',
      '3–5 bedrooms',
      '1,950–2,218 sq ft',
      '3-car garage'
    ],
    amenities: ['Gated entry', 'Single-story living', 'Spacious lots', 'Private courtyards']
  },
  {
    slug: 'mockingbird',
    name: 'Mockingbird',
    builder: 'Lennar',
    type: 'Two-Story',
    sqft: '3,000 - 3,335',
    beds: '5',
    baths: '3-4',
    garage: '2-3 car',
    price: 'From $838K',
    status: 'Now Selling',
    units: 79,
    highlight: 'NextGen suites for multigenerational living',
    description: 'Mockingbird at Kestrel Village offers Lennar two-story homes from $837,990. 3 floor plans (Bobby, Peter, Greg NextGen) with 5 beds, 3,000–3,335 sq ft. NextGen suites for multigenerational living in Summerlin West.',
    highlights: [
      'NextGen suites available',
      '3 floor plans: Bobby, Peter, Greg NextGen',
      '5 bedrooms, 3-4 baths',
      '3,000–3,335 sq ft',
      'Multigenerational living options'
    ],
    amenities: ['NextGen private suite', 'Dual master options', 'Expansive great rooms', 'Outdoor living spaces', 'Smart home features']
  },
  {
    slug: 'blacktail',
    name: 'Blacktail',
    builder: 'Pulte Homes',
    type: 'Single-Family',
    sqft: '2,100 - 2,800',
    beds: '3-5',
    baths: '2.5-3.5',
    garage: '2-3 car',
    price: 'From $590K',
    status: 'Coming Soon',
    units: 95,
    highlight: 'Life-tested Pulte designs with smart home technology',
    description: 'Blacktail at Kestrel Village will feature Pulte Homes single-family homes. Expected pricing from $590K. 3–5 beds, 2,100–2,800 sq ft. Life-tested designs, smart home ready. Contact Dr. Jan Duffy for updates.',
    highlights: [
      'Life-tested Pulte designs',
      'Smart home ready',
      'Gated community',
      '3–5 bedrooms',
      '2,100–2,800 sq ft'
    ],
    amenities: ['Smart home technology', 'Energy-efficient construction', 'Gated neighborhood', 'Flex spaces']
  },
  {
    slug: 'vireo',
    name: 'Vireo',
    builder: 'Woodside Homes',
    type: '2-3 Story',
    sqft: '1,441 - 2,034',
    beds: '2-3',
    baths: '2.5-3.5',
    garage: '2-car',
    price: 'From $477K',
    status: 'Final Opportunity',
    units: 112,
    highlight: 'Final homes available, covered patios & decks',
    description: 'Vireo in Summerlin offers Woodside Homes 2–3 story homes from $477,490. 5 floor plans (Aspen, Sage, Acacia, Laurel, Rowan) with 2–3 beds, 1,441–2,034 sq ft. Final opportunity - selling out! Energy Star certified with covered patios.',
    highlights: [
      'Final Opportunity - Selling Out!',
      '5 floor plans: Aspen, Sage, Acacia, Laurel, Rowan',
      '2–3 bedrooms, 2.5–3.5 baths',
      '1,441–2,034 sq ft',
      'Quick Move-In homes available'
    ],
    amenities: ['Energy Star certified', 'WaterSense fixtures', 'MERV 13 air filtration', 'Covered patios & decks', '200+ miles of Summerlin trails', 'Near Red Rock Canyon']
  }
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}

export function getAllCommunitySlugs(): string[] {
  return communities.map((c) => c.slug);
}
