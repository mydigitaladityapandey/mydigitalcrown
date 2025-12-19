import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Guest Posting Website | Submit Guest Posts for Free - MyDigital Crown',
  description: 'Free guest posting website - Submit your articles for free on MyDigital Crown. Get dofollow backlinks, DA 45+ website, 50K+ monthly visitors, 24-48h approval. 100% free guest blogging platform for digital marketing, SEO, social media & business content.',
  keywords: [
    // Primary Keywords
    'free guest posting website',
    'free guest posting sites',
    'submit guest post free',
    'free guest blogging',
    'guest posting sites',
    
    // Location-Based Keywords
    'free guest posting sites India',
    'guest posting website India',
    'free guest blogging sites India',
    'Indian guest posting websites',
    
    // Service-Specific Keywords
    'digital marketing guest posts',
    'SEO guest posting',
    'social media guest posts',
    'business guest blogging',
    'free article submission sites',
    
    // Long-Tail Keywords
    'best free guest posting sites 2025',
    'high DA free guest posting',
    'dofollow backlinks free',
    'free guest post opportunities',
    'submit article for free backlinks',
    'guest posting sites without registration',
    
    // Voice Search Keywords
    'where can I submit guest posts for free',
    'how to get free backlinks through guest posting',
    'best free guest blogging platforms',
    'which sites accept free guest posts',
    
    // LSI Keywords
    'article submission sites',
    'blog submission sites',
    'free content publishing',
    'backlink building sites',
    'guest contributor opportunities',
    'free blog posting sites',
    'write for us free',
    'submit your article free',
    'guest author opportunities',
    'free dofollow links'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://mydigitalcrown.in'),
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Free Guest Posting Website | Submit Articles for Free - MyDigital Crown',
    description: 'India\'s #1 free guest posting platform. Submit articles for free, get dofollow backlinks from DA 45+ website with 50K+ monthly visitors. 100% free, no hidden charges, 24-48h approval time.',
    url: 'https://mydigitalcrown.in/blog',
    siteName: 'MyDigital Crown',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Free Guest Posting Website - MyDigital Crown Blog',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Guest Posting Website | Submit Guest Posts Free',
    description: 'Submit your articles for free on MyDigital Crown. Get dofollow backlinks, reach 50K+ visitors monthly. 100% free guest blogging platform.',
    creator: '@mydigitalcrown',
    images: ['https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&h=630'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Blog',
  classification: 'Guest Posting, Article Submission, Free Backlinks',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
