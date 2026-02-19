import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SITE_URL = 'https://patin-tempoyak-kak-zee.vercel.app/';
const IMAGE_URL = 'https://patin-tempoyak-kak-zee.vercel.app/main-image.jpg';

const seoContent = {
  en: {
    title: 'Patin Tempoyak Kak Zee | Authentic Pahang Cuisine',
    description:
      'Enjoy authentic Patin Tempoyak and traditional Malaysian dishes in Sabak, Selangor. View menu, gallery, reviews, and location.',
    keywords:
      'patin tempoyak, malaysian food, pahang cuisine, sabak selangor restaurant, ayam penyet, traditional malay dishes',
    ogLocale: 'en_MY',
  },
  ms: {
    title: 'Patin Tempoyak Kak Zee | Rasa Asli Pahang',
    description:
      'Nikmati Patin Tempoyak asli dan hidangan tradisional Malaysia di Sabak, Selangor. Lihat menu, galeri, ulasan, dan lokasi.',
    keywords:
      'patin tempoyak, makanan malaysia, masakan pahang, restoran sabak selangor, ayam penyet, hidangan tradisional melayu',
    ogLocale: 'ms_MY',
  },
} as const;

const upsertMeta = (selector: string, attribute: 'name' | 'property', key: string, value: string) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', value);
};

const upsertLink = (id: string, rel: string, href: string, hreflang?: string) => {
  let element = document.getElementById(id) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.id = id;
    document.head.appendChild(element);
  }

  element.rel = rel;
  element.href = href;
  if (hreflang) {
    element.hreflang = hreflang;
  }
};

export const SeoHead = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const content = seoContent[language];

    document.title = content.title;

    upsertMeta('meta[name="description"]', 'name', 'description', content.description);
    upsertMeta('meta[name="keywords"]', 'name', 'keywords', content.keywords);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', content.title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', content.description);
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', content.ogLocale);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', SITE_URL);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', IMAGE_URL);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', content.title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', content.description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', IMAGE_URL);
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');

    upsertLink('canonical-link', 'canonical', SITE_URL);
    upsertLink('alternate-en', 'alternate', `${SITE_URL}?lang=en`, 'en');
    upsertLink('alternate-ms', 'alternate', `${SITE_URL}?lang=ms`, 'ms-MY');
    upsertLink('alternate-default', 'alternate', SITE_URL, 'x-default');

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'Patin Tempoyak Kak Zee',
      image: IMAGE_URL,
      url: SITE_URL,
      telephone: '+60-19-209-5833',
      servesCuisine: ['Malaysian', 'Pahang'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '22, Jalan Tebedu, Pekan Sabak',
        addressLocality: 'Sabak',
        addressRegion: 'Selangor',
        postalCode: '45200',
        addressCountry: 'MY',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '11:00',
          closes: '16:30',
        },
      ],
      inLanguage: language === 'ms' ? 'ms-MY' : 'en',
    };

    let script = document.getElementById('restaurant-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'restaurant-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, [language]);

  return null;
};
