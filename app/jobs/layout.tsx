import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MyDigital Crown Job Opening - Apply Now | Career Opportunities Mumbai',
  description: 'MyDigital Crown job opening - Apply now for digital marketing careers in Mumbai. Join India\'s #1 agency. SEO, Social Media, Web Development & Content Marketing positions available. Salary ₹3-15 LPA, growth opportunities, 5-day work week. Apply for MyDigital Crown jobs today!',
  keywords: [
    // Primary Keywords
    'MyDigital Crown Job Opening',
    'MyDigital Crown Careers',
    'MyDigital Crown Jobs',
    'digital marketing jobs Mumbai',
    'SEO jobs Mumbai',
    
    // Location-Based Keywords
    'digital marketing jobs near me',
    'marketing jobs in Mumbai',
    'SEO specialist jobs Mumbai',
    'social media manager jobs Mumbai',
    'content writer jobs Mumbai',
    'web developer jobs Mumbai',
    'graphic designer jobs Mumbai',
    
    // Service-Specific Job Keywords
    'SEO executive jobs',
    'digital marketing executive jobs',
    'social media marketing jobs',
    'content marketing jobs',
    'PPC specialist jobs',
    'email marketing jobs',
    'web development jobs',
    
    // Long-Tail Keywords
    'digital marketing agency jobs Mumbai',
    'best digital marketing company jobs',
    'full time digital marketing jobs',
    'fresher digital marketing jobs Mumbai',
    'experienced SEO professional jobs',
    'social media manager vacancy Mumbai',
    
    // Career-Related Keywords
    'digital marketing career opportunities',
    'Mumbai marketing agency careers',
    'digital marketing job openings 2025',
    'apply for digital marketing jobs',
    'digital marketing recruitment Mumbai',
    
    // Voice Search Keywords
    'who is hiring for digital marketing',
    'where to apply for SEO jobs',
    'how to join MyDigital Crown',
    'what jobs available at MyDigital Crown',
    
    // LSI Keywords
    'online marketing positions',
    'internet marketing careers',
    'digital advertising jobs',
    'marketing agency recruitment',
    'creative marketing jobs',
    'performance marketing roles'
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
    canonical: '/jobs',
  },
  openGraph: {
    title: 'MyDigital Crown Job Opening - Apply Now | Join Our Team',
    description: 'MyDigital Crown job opening - Apply now! Join Mumbai\'s #1 digital marketing agency. SEO, Social Media, Web Development positions available. Salary ₹3-15 LPA. 5-day work week, growth opportunities.',
    url: 'https://mydigitalcrown.in/jobs',
    siteName: 'MyDigital Crown',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'MyDigital Crown Career Opportunities - Digital Marketing Team',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyDigital Crown Job Opening - Apply Now',
    description: 'MyDigital Crown job opening - Apply for digital marketing careers in Mumbai. SEO, Social Media, Web Development positions. ₹3-15 LPA salary.',
    creator: '@mydigitalcrown',
    images: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=630'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'Careers',
  classification: 'Job Openings, Career Opportunities, Employment',
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
