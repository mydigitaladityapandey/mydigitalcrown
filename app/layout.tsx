import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mydigitalcrown.in'),
  title: {
    default: 'Digital Marketing Company in Mumbai | Best Agency 2025 - MyDigital Crown',
    template: '%s | MyDigital Crown - Digital Marketing Company Mumbai'
  },
  description: 'MyDigital Crown - Top Digital Marketing Company in Mumbai offering 50+ services: SEO, Google Ads, Social Media Marketing, Web Development. Trusted Digital Marketing Agency Mumbai with 8+ years experience, 150+ clients. Call +91-83695-11877 for Free Consultation!',
  keywords: [
    'Digital Marketing Company in Mumbai',
    'Digital Marketing Agency in Mumbai',
    'Digital Marketing Consultants in Mumbai',
    'Digital Marketing Freelancer in Mumbai',
    'Best Digital Marketing Company Mumbai',
    'Top Digital Marketing Agency Mumbai',
    'SEO Company Mumbai',
    'Social Media Marketing Mumbai',
    'Google Ads Agency Mumbai',
    'PPC Agency Mumbai',
    'Web Development Mumbai',
    'Digital Marketing Services Mumbai',
    'Online Marketing Agency Mumbai',
    'Internet Marketing Mumbai',
    'Digital Marketing Expert Mumbai',
    'Mumbai Digital Marketing',
    'Digital Agency Mumbai'
  ],
  authors: [{ name: 'Aditya', url: 'https://www.mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.mydigitalcrown.in',
    title: 'Digital Marketing Company in Mumbai | MyDigital Crown',
    description: 'Leading Digital Marketing Agency in Mumbai - SEO, Google Ads, Social Media, Web Development. 150+ Happy Clients. Get Free Digital Marketing Audit!',
    siteName: 'MyDigital Crown',
    images: [
      {
        url: 'https://www.mydigitalcrown.in/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MyDigital Crown - Digital Marketing Company Mumbai',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Company Mumbai | MyDigital Crown',
    description: 'Top Digital Marketing Agency Mumbai - 50+ Services, 8+ Years, 150+ Clients. Call Now!',
    creator: '@mydigitalcrown',
    site: '@mydigitalcrown',
    images: ['https://www.mydigitalcrown.in/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.mydigitalcrown.in',
    languages: {
      'en-IN': 'https://www.mydigitalcrown.in',
      'en-US': 'https://www.mydigitalcrown.in',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification',
    },
  },
  category: 'Digital Marketing',
  classification: 'Digital Marketing Services',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-512.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', type: 'image/svg+xml' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
      },
    ],
  },
  manifest: '/manifest.json',
  themeColor: '#2D4BB5',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
