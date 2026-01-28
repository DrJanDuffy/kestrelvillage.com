import type { MetadataRoute } from 'next';
import { getAllCommunitySlugs } from '@/data/communities';

const BASE_URL = 'https://www.kestrelvillage.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllCommunitySlugs();
  const communityUrls: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/communities/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/communities`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...communityUrls,
  ];
}
