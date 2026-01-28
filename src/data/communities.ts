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
    sqft: '1,716 - 2,217',
    beds: '2-4',
    baths: '2.5',
    garage: '2-car',
    price: 'From $520K',
    status: 'Now Selling',
    units: 67,
    highlight: 'Community pool, modern Spanish architecture',
    description: 'Dove Rock at Kestrel Village offers Woodside Homes townhomes from $520K. 2–4 beds, 1,716–2,217 sq ft. Community pool and modern Spanish architecture in Summerlin West.',
    highlights: [
      'Community pool',
      'Modern Spanish architecture',
      '2–4 bedrooms',
      '1,716–2,217 sq ft',
      '2-car garage'
    ],
    amenities: ['Pool', 'HOA-maintained landscaping', 'Covered patios', 'Open floor plans']
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
    status: 'Move-In Ready',
    units: 110,
    highlight: 'All single-story, gated community',
    description: 'Falcon Crest at Kestrel Village features Woodside Homes single-story homes from $580K. 3–5 beds, 1,950–2,218 sq ft. Gated community with move-in ready homes in Summerlin West.',
    highlights: [
      'All single-story',
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
    builder: 'Lennar Homes',
    type: 'Two-Story',
    sqft: '3,000+',
    beds: '4-5',
    baths: '3-4',
    garage: '2-3 car',
    price: 'From $650K',
    status: 'Now Selling',
    units: 79,
    highlight: 'Next Gen suites for multigenerational living',
    description: 'Mockingbird at Kestrel Village offers Lennar two-story homes from $650K. 4–5 beds, 3,000+ sq ft. Next Gen suites for multigenerational living in Summerlin West.',
    highlights: [
      'Next Gen suites',
      'Multigenerational living',
      '4–5 bedrooms',
      '3,000+ sq ft',
      '2–3 car garage'
    ],
    amenities: ['Next Gen private suite', 'Dual master options', 'Expansive great rooms', 'Outdoor living spaces']
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
    status: 'Now Selling',
    units: 95,
    highlight: 'Life-tested designs, smart home ready, gated',
    description: 'Blacktail at Kestrel Village features Pulte Homes single-family homes from $590K. 3–5 beds, 2,100–2,800 sq ft. Life-tested designs, smart home ready, gated in Summerlin West.',
    highlights: [
      'Life-tested designs',
      'Smart home ready',
      'Gated community',
      '3–5 bedrooms',
      '2,100–2,800 sq ft'
    ],
    amenities: ['Smart home technology', 'Energy-efficient construction', 'Gated neighborhood', 'Flex spaces']
  },
  {
    slug: 'osprey-ridge',
    name: 'Osprey Ridge',
    builder: 'Taylor Morrison',
    type: 'Single-Family',
    sqft: '2,200 - 3,100',
    beds: '3-5',
    baths: '3-4',
    garage: '3-car',
    price: 'From $620K',
    status: 'Now Selling',
    units: 88,
    highlight: 'Premium elevated lots, mountain views',
    description: 'Osprey Ridge at Kestrel Village offers Taylor Morrison single-family homes from $620K. 3–5 beds, 2,200–3,100 sq ft. Premium elevated lots with mountain views in Summerlin West.',
    highlights: [
      'Premium elevated lots',
      'Mountain views',
      '3–5 bedrooms',
      '2,200–3,100 sq ft',
      '3-car garage'
    ],
    amenities: ['Elevated view lots', 'Mountain vistas', 'Designer finishes', 'Outdoor kitchens']
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
    price: 'From $480K',
    status: 'Now Selling',
    units: 112,
    highlight: 'Kestrel Commons, covered patios & decks',
    description: 'Vireo at Kestrel Village features Woodside Homes 2–3 story homes from $480K. 2–3 beds, 1,441–2,034 sq ft. Kestrel Commons, covered patios and decks in Summerlin West.',
    highlights: [
      'Kestrel Commons',
      'Covered patios & decks',
      '2–3 bedrooms',
      '1,441–2,034 sq ft',
      '2-car garage'
    ],
    amenities: ['Kestrel Commons proximity', 'Covered outdoor living', 'Flexible floor plans', 'Modern finishes']
  }
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}

export function getAllCommunitySlugs(): string[] {
  return communities.map((c) => c.slug);
}
