import { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import EnquiryForm from '@/app/components/EnquiryForm';
import ClientSuccessStories from '@/app/components/ClientSuccessStories';
import TrustedBrands from '@/app/components/TrustedBrands';
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliate Marketing Mumbai | 500+ Partners | 300% ROI',
  description: 'Affiliate Marketing Mumbai. 500+ Active Partners | Performance Marketing | 300% ROI | Influencer Networks | Tracking Systems. Call +91-83695-11877',
  keywords: [
    // Primary Keywords
    'affiliate marketing in mumbai',
    'affiliate marketing mumbai',
    'affiliate marketing services mumbai',
    'affiliate marketing company mumbai',
    'affiliate marketing agency mumbai',
    
    // Service-Specific Keywords
    'affiliate program management',
    'affiliate network mumbai',
    'performance marketing mumbai',
    'influencer marketing mumbai',
    'partner marketing mumbai',
    'commission based marketing',
    'affiliate tracking mumbai',
    'affiliate recruitment services',
    
    // Long-tail Keywords (VSO)
    'how to start affiliate marketing in mumbai',
    'best affiliate marketing agency mumbai',
    'affiliate marketing services near me',
    'affiliate program setup mumbai',
    'affiliate marketing consultant mumbai',
    'affiliate marketing expert mumbai',
    
    // Solution-Based Keywords
    'grow revenue with affiliate marketing',
    'affiliate partnership programs',
    'performance based advertising',
    'affiliate commission tracking',
    'affiliate fraud prevention',
    'affiliate network management',
    
    // Location-Based Keywords
    'mumbai affiliate marketing',
    'affiliate marketing agency near me',
    'local affiliate marketing services',
    'mumbai digital marketing affiliate',
    
    // Industry Keywords
    'ecommerce affiliate marketing',
    'saas affiliate programs',
    'b2b affiliate marketing',
    'retail affiliate marketing',
    
    // Conversion Keywords
    'hire affiliate marketing agency',
    'affordable affiliate marketing',
    'professional affiliate services',
    'affiliate marketing roi',
    'affiliate marketing strategy mumbai'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown - Aditya Pandey',
  publisher: 'MyDigital Crown',
  category: 'Performance Marketing Services',
  classification: 'Affiliate Marketing & Partner Networks',
  openGraph: {
    title: 'Affiliate Marketing in Mumbai | 500+ Partners | #1 Agency',
    description: 'Performance-Based Affiliate Marketing Services in Mumbai. 500+ Verified Affiliates, Influencer Networks & ROI Tracking. 300% Average Growth | 150+ Brands Served. Free Strategy Session!',
    url: 'https://mydigitalcrown.in/services/affiliate-marketing',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/affiliate-marketing-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Affiliate Marketing Services in Mumbai - 500+ Partners - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affiliate Marketing Mumbai | 500+ Partners | Expert Services',
    description: 'Top Affiliate Marketing Agency in Mumbai. Build Profitable Partner Networks. 300% ROI Guaranteed. Call +91-83695-11877',
    site: '@mydigitalcrown',
    creator: '@mydigitalcrown',
    images: ['https://mydigitalcrown.in/images/affiliate-marketing-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://mydigitalcrown.in/services/affiliate-marketing',
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
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function AffiliateMarketingPage() {
  // Structured Data - Multiple Schema Types for Maximum SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // Service Schema
      {
        "@type": "Service",
        "@id": "https://mydigitalcrown.in/services/affiliate-marketing#service",
        "serviceType": "Affiliate Marketing Services",
        "provider": {
          "@type": "ProfessionalService",
          "name": "MyDigital Crown",
          "image": "https://mydigitalcrown.in/logo.png",
          "priceRange": "₹₹₹",
          "telephone": "+91-83695-11877",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Chembur",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400071",
            "addressCountry": "IN"
          }
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Mumbai"
          },
          {
            "@type": "State",
            "name": "Maharashtra"
          },
          {
            "@type": "Country",
            "name": "India"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Affiliate Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Affiliate Network Management",
                "description": "500+ verified affiliate partners across India"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Performance Tracking & Analytics",
                "description": "Real-time ROI tracking and commission management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commission Structure Design",
                "description": "CPA, CPS, CPL and hybrid commission models"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Affiliate Recruitment & Training",
                "description": "Partner onboarding and optimization programs"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Creative Assets for Affiliates",
                "description": "Banners, landing pages and promotional materials"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fraud Prevention & Compliance",
                "description": "Advanced fraud detection and quality assurance"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "156",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      // Organization Schema
      {
        "@type": "ProfessionalService",
        "@id": "https://mydigitalcrown.in/#organization",
        "name": "MyDigital Crown - Affiliate Marketing Agency Mumbai",
        "image": "https://mydigitalcrown.in/logo.png",
        "logo": "https://mydigitalcrown.in/logo.png",
        "url": "https://mydigitalcrown.in",
        "telephone": "+91-83695-11877",
        "email": "info@mydigitalcrown.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Chembur",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400071",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.0596",
          "longitude": "72.8295"
        },
        "priceRange": "₹₹₹",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/mydigitalcrown",
          "https://www.instagram.com/mydigitalcrown",
          "https://twitter.com/mydigitalcrown",
          "https://www.linkedin.com/company/mydigitalcrown"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "156"
        }
      },
      // WebPage Schema
      {
        "@type": "WebPage",
        "@id": "https://mydigitalcrown.in/services/affiliate-marketing#webpage",
        "url": "https://mydigitalcrown.in/services/affiliate-marketing",
        "name": "Affiliate Marketing in Mumbai | #1 Affiliate Marketing Agency",
        "description": "Top Affiliate Marketing Company in Mumbai. 500+ Partners, Performance Tracking, Commission Management & Influencer Networks. 300% ROI Guaranteed.",
        "inLanguage": "en-IN",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://mydigitalcrown.in/#website"
        },
        "breadcrumb": {
          "@id": "https://mydigitalcrown.in/services/affiliate-marketing#breadcrumb"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://mydigitalcrown.in/affiliate-marketing.jpg",
          "width": 1200,
          "height": 630
        }
      },
      // BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "@id": "https://mydigitalcrown.in/services/affiliate-marketing#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://mydigitalcrown.in",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://mydigitalcrown.in/services",
              "name": "Services"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": "https://mydigitalcrown.in/services/affiliate-marketing",
              "name": "Affiliate Marketing in Mumbai"
            }
          }
        ]
      },
      // FAQPage Schema for VSO
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is affiliate marketing and how does it work for Mumbai businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Affiliate marketing is a performance-based marketing model where businesses partner with affiliates (influencers, bloggers, content creators) who promote products/services in exchange for commissions on sales or leads. For Mumbai businesses, affiliate marketing is powerful because you only pay for results - no upfront advertising costs. Affiliates use unique tracking links to drive traffic, and you pay commissions (typically 5-30%) only when conversions happen. With Mumbai's vast digital audience and influencer ecosystem, affiliate marketing offers scalable growth with minimal risk and maximum ROI."
            }
          },
          {
            "@type": "Question",
            "name": "How much does affiliate marketing cost in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Affiliate marketing is performance-based, so you only pay for results! Setup costs range from ₹15,000-₹50,000 for initial program setup, network integration, and tracking systems. Commission structures vary by industry: E-commerce (5-15% CPS), SaaS/Digital Products (20-40% CPS), Lead Generation (₹500-₹5,000 CPL), Financial Services (₹1,000-₹10,000 CPA). At MyDigital Crown, we offer transparent pricing with no hidden fees. Our management fee starts from ₹25,000/month, which includes affiliate recruitment, creative assets, performance tracking, fraud prevention, and optimization. You control commission rates and only pay affiliates when they deliver results."
            }
          },
          {
            "@type": "Question",
            "name": "Which types of affiliates work best for Mumbai businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For Mumbai businesses, diverse affiliate types deliver results: 1) Influencers & Content Creators - Instagram, YouTube creators with 10K-1M+ followers for brand awareness and conversions, 2) Niche Bloggers - Industry-specific blogs with SEO traffic for long-term leads, 3) Coupon & Deal Sites - Price-conscious Mumbai shoppers love discounts, 4) Review & Comparison Sites - Build trust with unbiased product reviews, 5) Email Marketers - Targeted subscriber lists for direct conversions, 6) Cashback & Loyalty Platforms - Paytm, CashKaro for transaction-focused audiences. We match your product/service with the right affiliate mix based on your target audience, profit margins, and business goals."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from affiliate marketing in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Affiliate marketing results timeline: Initial Setup (Week 1-2) - Program setup, tracking integration, affiliate recruitment. First Conversions (Week 3-4) - Early sales from initial affiliate activations. Momentum Building (Month 2-3) - As more affiliates join and optimize, conversions increase 50-100% monthly. Mature Program (Month 4-6) - 100+ active affiliates generating consistent revenue, 200-400% growth. Long-term Success (6+ months) - Stable passive income stream with continuous optimization. Mumbai's large influencer base accelerates growth. Most brands see positive ROI within 2 months and 300%+ ROI by month 6."
            }
          },
          {
            "@type": "Question",
            "name": "What makes MyDigital Crown the best affiliate marketing agency in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MyDigital Crown stands out as Mumbai's premier affiliate marketing agency because: 1) 500+ Verified Affiliate Network - Pre-vetted partners across niches, 2) Performance Tracking Excellence - Real-time dashboard with advanced analytics, 3) 300% Average ROI - Proven track record with 50+ successful programs, 4) Fraud Prevention - Advanced click validation and quality assurance, 5) Creative Excellence - Professional banners, landing pages, and promotional materials, 6) Transparent Pricing - Pay-for-performance model with no hidden costs, 7) Industry Expertise - E-commerce, SaaS, Finance, Education, Healthcare specialists, 8) Dedicated Support - 24/7 assistance for brands and affiliates, 9) Mumbai Market Knowledge - Deep understanding of local influencer ecosystem, 10) Proven Results - 98% client retention with continuous revenue growth."
            }
          },
          {
            "@type": "Question",
            "name": "Do you recruit affiliates from specific Mumbai localities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We have affiliate partners across all Mumbai regions: Andheri (Fashion & Lifestyle influencers), Bandra (Premium lifestyle bloggers), Powai (Tech & SaaS reviewers), South Mumbai (Luxury & High-ticket affiliates), Navi Mumbai (E-commerce & Deal sites), Thane (Local business promoters), Western Suburbs (Food & Entertainment creators), Eastern Suburbs (Education & Career influencers). Our hyperlocal approach matches your brand with location-relevant affiliates who understand local preferences, speak regional languages (Hindi, Marathi, English), and have authentic connections with Mumbai audiences. This ensures higher conversion rates and better ROI from geo-targeted campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "What types of affiliate programs work best for Mumbai businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We create diverse affiliate programs for Mumbai businesses: 1) E-commerce Affiliates - Product reviews, unboxing videos, shopping guides (5-15% commission), 2) SaaS & Software - Free trial promotions, tutorial content, comparison reviews (20-40% recurring), 3) Lead Generation - Finance, insurance, real estate (₹500-₹10,000 per qualified lead), 4) B2B Partnerships - Business service referrals, enterprise sales (10-25% commission), 5) Educational Programs - Course promotions, skill development (15-30%), 6) Healthcare & Wellness - Clinic referrals, product endorsements (10-20%), 7) Travel & Hospitality - Hotel bookings, tour packages (5-12%), 8) Influencer Collaborations - Sponsored content, brand ambassadorships (Fixed fee + performance bonus), 9) Coupon & Cashback - Deal platforms for mass traffic (3-8%), 10) Niche Bloggers - SEO-driven evergreen content (Lifetime commissions)."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure affiliate marketing success in Mumbai market?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We track comprehensive affiliate marketing KPIs: 1) Revenue Attribution - Total sales generated by affiliate channel, 2) ROI (Return on Investment) - Revenue minus commissions and management fees (Target: 300%+), 3) EPC (Earnings Per Click) - Average earnings per affiliate link click (₹10-₹500), 4) Conversion Rate - Percentage of affiliate traffic converting to customers (1-8%), 5) Active Affiliates - Number of partners driving sales monthly (Target: 100+), 6) Average Order Value - Transaction size from affiliate traffic, 7) Commission Costs - Total payouts as percentage of revenue (Target: <25%), 8) Customer Lifetime Value - Long-term value of affiliate-acquired customers, 9) Fraud Rate - Invalid clicks/conversions detected (<2%), 10) Partner Performance - Top performers, dormant affiliates, optimization opportunities. Real-time dashboard shows all metrics with drill-down analytics."
            }
          },
          {
            "@type": "Question",
            "name": "Do you have affiliate marketing expertise for specific industries in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We manage affiliate programs across Mumbai's key industries: 1) E-commerce & Retail - Fashion, electronics, home decor, FMCG with product-based affiliates, 2) SaaS & Technology - Software subscriptions, mobile apps, cloud services with recurring commissions, 3) Finance & Insurance - Personal loans, credit cards, insurance policies with high-value CPA, 4) Education & E-learning - Online courses, coaching institutes, skill development with student referrals, 5) Healthcare & Wellness - Clinics, diagnostics, fitness, nutrition with local partnerships, 6) Travel & Hospitality - Hotels, flights, tour packages with booking affiliates, 7) Real Estate - Property sales, rentals with broker and portal affiliates, 8) B2B Services - Professional services, enterprise software with business referral networks, 9) Media & Entertainment - OTT platforms, events, gaming with content creator affiliates, 10) Food & Beverage - Cloud kitchens, restaurants, food delivery with food bloggers. Each industry has custom commission structures and affiliate recruitment strategies."
            }
          },
          {
            "@type": "Question",
            "name": "What makes successful affiliate creatives for Mumbai audience?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Successful affiliate creatives for Mumbai include: 1) Authentic Reviews - Real user experiences over generic promotions, 2) Local Language Content - Hindi, Marathi, English mix based on audience, 3) Mobile-Optimized Banners - 75% Mumbai users browse on mobile, 4) Discount & Deal Focus - Mumbai shoppers love value offers and cashback, 5) Video Content - Unboxing, tutorials, demonstrations perform 3x better, 6) Social Proof - Ratings, testimonials, verified badges build trust, 7) Festival Campaigns - Diwali, New Year, Mumbai-specific events, 8) Clear CTA - Direct affiliate links with transparent commission disclosure, 9) Comparison Content - Product vs product, service vs service for informed decisions, 10) Storytelling - Emotional connect with Mumbai lifestyle and aspirations. We provide ready-to-use creative assets: 300+ banner sizes, email templates, social media posts, landing pages, product feeds."
            }
          },
          {
            "@type": "Question",
            "name": "How does MyDigital Crown's affiliate marketing differ from competitors in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our competitive advantages: 1) 500+ Pre-Vetted Network - Largest verified affiliate base in Mumbai vs competitors' 50-100 partners, 2) Fraud-Free Guarantee - Advanced fraud detection saves 15-25% commission waste, 3) Industry-Specific Recruitment - Niche affiliates vs generic partner lists, 4) Creative Asset Library - 300+ ready templates vs DIY approach, 5) Real-Time Tracking - Live dashboard vs weekly/monthly reports, 6) Performance Optimization - Dedicated affiliate managers vs automated emails, 7) Transparent Pricing - No setup fees, clear commission split vs hidden charges, 8) Technology Stack - API integrations, automated payouts, multi-currency support, 9) Proven ROI - 300% average with case studies vs promises without proof, 10) Long-term Partnership - Continuous recruitment, training, optimization vs one-time setup. We don't just connect affiliates - we build revenue-generating ecosystems with ongoing support and growth."
            }
          }
        ]
      },
      // ItemList Schema
      {
        "@type": "ItemList",
        "name": "Affiliate Marketing Services",
        "description": "Comprehensive affiliate marketing services offered in Mumbai",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Service",
              "name": "Affiliate Network Management",
              "description": "500+ verified affiliate partners including influencers, bloggers, and content creators"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Service",
              "name": "Performance Tracking & Analytics",
              "description": "Real-time ROI tracking, conversion monitoring, and commission management dashboard"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Service",
              "name": "Commission Structure Design",
              "description": "Custom CPA, CPS, CPL and hybrid commission models for maximum profitability"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Service",
              "name": "Affiliate Recruitment & Onboarding",
              "description": "Strategic partner recruitment, vetting, and comprehensive training programs"
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Service",
              "name": "Creative Assets & Marketing Materials",
              "description": "Professional banners, landing pages, email templates, and promotional content"
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Service",
              "name": "Fraud Prevention & Compliance",
              "description": "Advanced fraud detection, click validation, and quality assurance systems"
            }
          }
        ]
      },
      // Review Schema 1
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Mehta"
        },
        "datePublished": "2024-09-15",
        "reviewBody": "MyDigital Crown's affiliate marketing program doubled our revenue in 6 months! Their 500+ partner network brought quality traffic, and the real-time commission tracking is incredible. Aditya's team understands Mumbai's influencer ecosystem perfectly!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "itemReviewed": {
          "@type": "Service",
          "name": "Affiliate Marketing Services Mumbai"
        }
      },
      // Review Schema 2
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priya Sharma"
        },
        "datePublished": "2024-10-01",
        "reviewBody": "Best affiliate marketing agency in Mumbai! Their verified affiliates eliminated fraud concerns, and we achieved 300% ROI in 4 months. Performance dashboard with transparent commission tracking is outstanding. Highly recommended!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "itemReviewed": {
          "@type": "Service",
          "name": "Affiliate Marketing Services Mumbai"
        }
      },
      // HowTo Schema for Voice Search Optimization
      {
        "@type": "HowTo",
        "name": "How to Set Up Successful Affiliate Marketing Program in Mumbai",
        "description": "Step-by-step guide to launching and scaling a profitable affiliate marketing program for Mumbai businesses",
        "totalTime": "P30D",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": "30000"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Partner Research & Network Selection",
            "text": "Research and identify potential affiliate partners - influencers, bloggers, content creators in Mumbai market. Analyze their audience demographics, engagement rates, and niche relevance to your products/services.",
            "url": "https://mydigitalcrown.in/services/affiliate-marketing#research"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Commission Structure Design",
            "text": "Design competitive commission structures (CPA, CPS, CPL) based on your profit margins and industry benchmarks. Set clear payout terms - 5-15% for e-commerce, 20-40% for SaaS, ₹500-₹10,000 CPL for lead gen.",
            "url": "https://mydigitalcrown.in/services/affiliate-marketing#commission"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Tracking & Attribution Setup",
            "text": "Implement robust tracking systems with unique affiliate links, cookies, and conversion pixels. Set up real-time dashboard for performance monitoring, commission calculation, and fraud prevention.",
            "url": "https://mydigitalcrown.in/services/affiliate-marketing#tracking"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Affiliate Recruitment & Onboarding",
            "text": "Recruit qualified affiliates through outreach, application process, and vetting. Provide comprehensive onboarding with program guidelines, promotional strategies, and compliance requirements specific to Mumbai market.",
            "url": "https://mydigitalcrown.in/services/affiliate-marketing#recruitment"
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Creative Assets Development",
            "text": "Create professional marketing materials - banners (multiple sizes), landing pages, email templates, product images, promotional copy. Ensure mobile-optimization and local language support (Hindi/Marathi/English).",
            "url": "https://mydigitalcrown.in/services/affiliate-marketing#creative"
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Program Launch & Partner Activation",
            "text": "Launch affiliate program with initial partner batch. Provide training on product positioning, promotional strategies, and performance optimization. Set clear expectations and communication channels.",
            "url": "https://mydigitalcrown.in/services/affiliate-marketing#launch"
          },
          {
            "@type": "HowToStep",
            "position": 7,
            "name": "Performance Monitoring & Support",
            "text": "Monitor affiliate performance in real-time - track conversions, EPC (₹10-₹500), ROI (target 300%+), and fraud indicators. Provide 24/7 support, resolve queries, and optimize underperforming campaigns.",
            "url": "https://mydigitalcrown.in/services/affiliate-marketing#monitoring"
          },
          {
            "@type": "HowToStep",
            "position": 8,
            "name": "Scaling & Optimization",
            "text": "Identify top-performing affiliates and increase their incentives. Recruit more partners in successful segments. Test different commission models, promotional strategies, and creative variations. Aim for 200-400% growth in 4-6 months.",
            "url": "https://mydigitalcrown.in/services/affiliate-marketing#optimization"
          }
        ]
      },
      // Article Schema for Content Indexing
      {
        "@type": "Article",
        "headline": "Affiliate Marketing in Mumbai: Complete Guide for Business Growth",
        "description": "Comprehensive guide to affiliate marketing services in Mumbai covering partner networks, commission structures, performance tracking, and ROI optimization through strategic partnerships.",
        "image": "https://mydigitalcrown.in/images/affiliate-marketing-mumbai.jpg",
        "author": {
          "@type": "Person",
          "name": "Aditya Pandey",
          "url": "https://mydigitalcrown.in/about",
          "jobTitle": "Digital Marketing Expert"
        },
        "publisher": {
          "@type": "Organization",
          "name": "MyDigital Crown",
          "logo": {
            "@type": "ImageObject",
            "url": "https://mydigitalcrown.in/logo.png"
          }
        },
        "datePublished": "2024-01-15",
        "dateModified": "2025-10-03",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://mydigitalcrown.in/services/affiliate-marketing"
        },
        "articleSection": "Digital Marketing",
        "keywords": "affiliate marketing mumbai, affiliate program management, performance marketing, influencer partnerships, commission optimization, affiliate network india",
        "wordCount": 3000
      },
      // LocalBusiness Schema for Local SEO
      {
        "@type": "LocalBusiness",
        "@id": "https://mydigitalcrown.in/#localbusiness",
        "name": "MyDigital Crown - Affiliate Marketing Agency",
        "image": "https://mydigitalcrown.in/logo.png",
        "description": "Premier affiliate marketing agency in Mumbai offering partner network management, performance tracking, commission optimization, and fraud prevention services.",
        "url": "https://mydigitalcrown.in",
        "telephone": "+91-83695-11877",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Chembur",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400071",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.0596,
          "longitude": 72.8295
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "156",
          "bestRating": "5",
          "worstRating": "1"
        },
        "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking",
        "currenciesAccepted": "INR"
      },
      // VideoObject Schema for Rich Snippets
      {
        "@type": "VideoObject",
        "name": "Affiliate Marketing Services in Mumbai - MyDigital Crown",
        "description": "Learn how MyDigital Crown builds profitable affiliate programs for Mumbai businesses with 300% average ROI through verified partner networks",
        "thumbnailUrl": "https://mydigitalcrown.in/images/affiliate-video-thumb.jpg",
        "uploadDate": "2024-06-15",
        "duration": "PT3M45S",
        "contentUrl": "https://mydigitalcrown.in/videos/affiliate-marketing.mp4",
        "embedUrl": "https://www.youtube.com/embed/affiliate-marketing-mumbai"
      },
      // Course Schema for Educational Content
      {
        "@type": "Course",
        "name": "Affiliate Marketing Masterclass for Mumbai Businesses",
        "description": "Learn professional affiliate marketing techniques, commission structures, and partner recruitment from Mumbai's top digital marketing agency",
        "provider": {
          "@type": "Organization",
          "name": "MyDigital Crown",
          "sameAs": "https://mydigitalcrown.in"
        },
        "hasCourseInstance": [
          {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "courseWorkload": "PT30H"
          }
        ]
      },
      // SpecialAnnouncement for Offers (Voice Search)
      {
        "@type": "SpecialAnnouncement",
        "name": "Free Affiliate Marketing Consultation for Mumbai Businesses",
        "text": "Get a free 30-minute affiliate marketing consultation for your Mumbai business. Learn how to build profitable partner networks - Call +91-83695-11877",
        "datePosted": "2025-10-01",
        "expires": "2025-12-31",
        "category": "https://www.wikidata.org/wiki/Q218616",
        "url": "https://mydigitalcrown.in/services/affiliate-marketing"
      }
    ]
  };

  return (
    <>
      {/* Enhanced Schema Markup for SEO/VSO/ASO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Noscript fallback for crawlers */}
      <noscript>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Affiliate Marketing in Mumbai - MyDigital Crown</h1>
          <p>Premier affiliate marketing agency in Mumbai offering partner network management, performance tracking, commission optimization, and fraud prevention services. Call +91-83695-11877 for free consultation.</p>
        </div>
      </noscript>
      
      <Navbar />
      
      <main className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
        {/* Hero Section - Home Page Style */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden" itemScope itemType="https://schema.org/Service">
          <meta itemProp="name" content="Affiliate Marketing Services Mumbai" />
          <meta itemProp="description" content="500+ Partner Network, Performance Tracking, Commission Optimization, Fraud Prevention for Mumbai Businesses" />
          <meta itemProp="provider" content="MyDigital Crown" />
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-yellow-500/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          {/* Floating Emojis */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>📊</div>
            <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🚀</div>
            <div className="absolute bottom-32 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>⭐</div>
            <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>🎯</div>
            <div className="absolute top-1/3 left-1/2 text-4xl opacity-20 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}>💡</div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6">
                <span className="text-2xl" role="img" aria-label="Chart">🤝</span>
                <span className="text-white font-semibold">Mumbai&apos;s #1 Affiliate Marketing Agency</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" itemProp="headline">
                <span itemProp="about">Affiliate Marketing Services</span> in{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent" itemProp="areaServed">
                  Mumbai
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8" itemProp="description">
                💰 Grow Revenue Through Strategic Partnerships, Influencer Networks & Performance Marketing<br />
                <span className="text-yellow-400 font-bold">Partner Networks | Commission-Based Marketing | ROI-Driven Campaigns | 24/7 Support</span>
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">%</span>
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-yellow-100 to-white bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">300%</div>
                  <div className="text-white/90 font-semibold text-lg">AVERAGE ROI</div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">+</span>
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-green-100 to-white bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-white/90 font-semibold text-lg">ACTIVE PARTNERS</div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">+</span>
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-white/90 font-semibold text-lg">BRANDS SERVED</div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300 animate-pulse">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-purple-100 to-white bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-white/90 font-semibold text-lg">Support</div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/contact"
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-500 transform hover:scale-110"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="text-2xl mr-3">🚀</span>
                    Get Free Strategy Session
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
                <a 
                  href="tel:+918369511877"
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    Call: +91-83695-11877
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Search Optimization Section - Quick Answers */}
        <section className="py-16 bg-gradient-to-r from-slate-50 to-gray-50" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Voice Query 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-bold text-blue-600 mb-3 flex items-center" itemProp="name">
                  <span className="text-2xl mr-2" role="img" aria-label="Location">📍</span>
                  Where to find affiliate marketing services in Mumbai?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-700 leading-relaxed" itemProp="text">
                    MyDigital Crown is Mumbai&apos;s premier affiliate marketing agency with 500+ active partners. We serve clients across Mumbai including Andheri, Bandra, Powai, and all localities. Call +91-83695-11877 for free consultation.
                  </p>
                </div>
              </div>

              {/* Voice Query 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-bold text-blue-600 mb-3 flex items-center" itemProp="name">
                  <span className="text-2xl mr-2" role="img" aria-label="Money">💰</span>
                  How much does affiliate marketing cost?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-700 leading-relaxed" itemProp="text">
                    Affiliate marketing is performance-based - you only pay for results! Commission structures start from 5-30% depending on your product/service. We offer flexible CPA, CPS, and CPL models ensuring maximum ROI.
                  </p>
                </div>
              </div>

              {/* Voice Query 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-bold text-blue-600 mb-3 flex items-center" itemProp="name">
                  <span className="text-2xl mr-2" role="img" aria-label="Time">⏱️</span>
                  When will I see results from affiliate marketing?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-700 leading-relaxed" itemProp="text">
                    Affiliate partnerships show initial results within 2-4 weeks. As we scale your network to 100+ active affiliates, most brands achieve 200-400% revenue growth within 3-6 months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <header className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl hover:shadow-2xl transition-all">
                <span className="text-2xl mr-3">🤝</span>
                Our Affiliate Marketing Services
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Makes Us Mumbai&apos;s <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Best Affiliate Marketing Agency</span>?
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don&apos;t just connect partners - we build profitable ecosystems 🌟
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">500+ Active Affiliate Partners</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Access our extensive network of verified affiliates, influencers, and content creators across India. We match your brand with the perfect partners for maximum conversions.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">✅ Verified Network</li>
                  <li className="flex items-start gap-2">✅ Quality Partners</li>
                  <li className="flex items-start gap-2">✅ Influencer Matching</li>
                  <li className="flex items-start gap-2">✅ Content Creator Network</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="group bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance-Based ROI Tracking</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Real-time dashboard showing every click, conversion, and commission. Track partner performance with advanced analytics and optimize campaigns for 300% ROI.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">✅ Real-Time Analytics</li>
                  <li className="flex items-start gap-2">✅ Conversion Tracking</li>
                  <li className="flex items-start gap-2">✅ Commission Reports</li>
                  <li className="flex items-start gap-2">✅ ROI Dashboard</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="group bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Commission Structures</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  CPA, CPS, CPL, or hybrid models - we design commission plans that motivate partners and maximize your profit margins. Only pay for results.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">✅ Pay for Performance</li>
                  <li className="flex items-start gap-2">✅ Custom Commission Plans</li>
                  <li className="flex items-start gap-2">✅ Tiered Incentives</li>
                  <li className="flex items-start gap-2">✅ Bonus Structures</li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="group bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-100 hover:border-green-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Assets & Support</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We provide banners, landing pages, promotional content, and marketing materials to your affiliates. Professional creatives that convert at 3x industry average.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">✅ Ready-to-Use Assets</li>
                  <li className="flex items-start gap-2">✅ Custom Banners</li>
                  <li className="flex items-start gap-2">✅ Landing Pages</li>
                  <li className="flex items-start gap-2">✅ Email Templates</li>
                </ul>
              </div>

              {/* Service 5 */}
              <div className="group bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl">�️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fraud Prevention & Compliance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Advanced fraud detection, click validation, and compliance monitoring. Protect your brand from invalid traffic and ensure quality partnerships.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">✅ 100% Secure</li>
                  <li className="flex items-start gap-2">✅ Fraud Detection</li>
                  <li className="flex items-start gap-2">✅ Click Validation</li>
                  <li className="flex items-start gap-2">✅ Compliance Monitoring</li>
                </ul>
              </div>

              {/* Service 6 */}
              <div className="group bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Partner Training & Optimization</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We train your affiliates on best practices, provide optimization tips, and run exclusive webinars. Turn good partners into great revenue generators.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">✅ Expert Training</li>
                  <li className="flex items-start gap-2">✅ Best Practice Guides</li>
                  <li className="flex items-start gap-2">✅ Optimization Workshops</li>
                  <li className="flex items-start gap-2">✅ 24/7 Support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-yellow-500/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <header className="text-center mb-16">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-4 text-base font-bold mb-8 shadow-xl">
                <span className="text-2xl mr-3">💎</span>
                <span className="text-white">Why Choose MyDigital Crown</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why We&apos;re Mumbai&apos;s <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Top Choice</span> for Affiliate Marketing
              </h2>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Experience the difference with a team that delivers measurable results and exceptional ROI through affiliate partnerships
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-3xl">🎯</span>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">8+ Years Mumbai Expertise</h3>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    Deep understanding of Mumbai market dynamics, consumer behavior, and advertising trends. We know what works in this competitive metro market.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-3xl">📊</span>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Data-Driven Strategies</h3>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    Every advertising decision backed by analytics and market research. We use cutting-edge tools to track, measure, and optimize your campaigns for maximum ROI.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-3xl">💰</span>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">300% Average ROI</h3>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    Our clients see an average 300% return on their advertising investment. We focus on results that matter - leads, sales, and business growth.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-3xl">🤝</span>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">150+ Successful Campaigns</h3>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    We&apos;ve helped 150+ brands across various industries achieve their advertising goals. Our portfolio speaks for our expertise and reliability.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
                <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-3xl">📱</span>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">Full-Service Solutions</h3>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    From strategy to creative, media buying to performance optimization - we handle everything. No need for multiple agencies!
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-3xl">⏰</span>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">24/7 Dedicated Support</h3>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    Your dedicated account manager is always available. Whether it&apos;s a query or an emergency, we&apos;re here round the clock to support your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Client Success Stories Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-4000"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-yellow-300 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-4 mb-8 shadow-2xl">
              <span className="text-2xl">❤️</span>
              <span className="text-white font-bold text-lg">Client Success Stories</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              What Mumbai <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Businesses</span><br />
              Say About Affiliate Marketing
            </h2>
            
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Real results, real clients, real growth stories from Mumbai&apos;s most successful affiliate marketing campaigns
            </p>
          </div>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-black text-yellow-400 mb-2">98%</div>
                <div className="text-white/90 font-medium">Client Retention</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-black text-green-400 mb-2">300%</div>
                <div className="text-white/90 font-medium">Average ROI</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-black text-blue-400 mb-2">500+</div>
                <div className="text-white/90 font-medium">Active Affiliates</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-black text-purple-400 mb-2">5.0</div>
                <div className="text-white/90 font-medium">Star Rating</div>
              </div>
            </div>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                🛒
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <blockquote className="text-lg text-white/90 leading-relaxed italic">
                  &quot;MyDigital Crown&apos;s affiliate marketing program transformed our e-commerce business. They connected us with <span className="text-yellow-400 font-bold">500+ quality affiliates</span> who drive consistent sales. Our revenue increased by 250% in just 8 months. Outstanding results!&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">RS</span>
                </div>
                <div>
                  <div className="font-bold text-white">Rajesh Shah</div>
                  <div className="text-white/70">CEO, ShopMumbai Online</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                💎
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <blockquote className="text-lg text-white/90 leading-relaxed italic">
                  &quot;The affiliate program managed by MyDigital Crown brought us <span className="text-green-400 font-bold">300+ qualified leads monthly</span>. Their transparent tracking and fraud prevention saved us thousands. Best ROI of any marketing channel!&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">PM</span>
                </div>
                <div>
                  <div className="font-bold text-white">Priya Mehta</div>
                  <div className="text-white/70">Marketing Director, LuxuryJewels</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                💻
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <blockquote className="text-lg text-white/90 leading-relaxed italic">
                  &quot;Our SaaS product gained massive traction through MyDigital Crown&apos;s affiliate network. <span className="text-purple-400 font-bold">40% recurring commission structure</span> attracted top-tier affiliates. Doubled our MRR in 6 months!&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AK</span>
                </div>
                <div>
                  <div className="font-bold text-white">Arjun Kumar</div>
                  <div className="text-white/70">Founder, CloudTech Solutions</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 4 */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                📚
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <blockquote className="text-lg text-white/90 leading-relaxed italic">
                  &quot;Perfect partner for our education business. MyDigital Crown recruited <span className="text-cyan-400 font-bold">200+ education bloggers and YouTubers</span> who genuinely promote our courses. Enrollment increased by 180%!&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SD</span>
                </div>
                <div>
                  <div className="font-bold text-white">Sneha Desai</div>
                  <div className="text-white/70">Director, SkillUp Academy</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Build Your Affiliate Network?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join 150+ successful Mumbai brands leveraging affiliate marketing for exponential growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  🚀 Start Affiliate Program
                </Link>
                <Link 
                  href="tel:+918369511877"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  📞 Call: +91-83695-11877
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <ClientSuccessStories 
        title="Client Success Stories"
      />

      {/* Trusted Brands Section */}
      <TrustedBrands 
        theme="dark"
        title="Trusted by Leading Brands"
        subtitle="150+ Happy Clients"
        description="Trusted by India's top companies for affiliate marketing excellence. Join the success story!"
      />

      {/* Related Services Section */}
      {/* Our Locations */}

      <OurLocations />


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/affiliate-marketing"
        title="Complete Digital Marketing Solutions"
        description="Enhance your affiliate marketing with our comprehensive digital marketing services designed for Mumbai businesses"
      />

      {/* Comprehensive SEO Content Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">📚</span>
              <span>The Ultimate Guide to Affiliate Marketing in Mumbai</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Master <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Affiliate Marketing</span><br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">For Mumbai Businesses</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know to build a profitable affiliate marketing program in India&apos;s most competitive market
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Content Block 1 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">What is Affiliate Marketing and Why Mumbai Businesses Need It</h3>
                  </div>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p>
                    Affiliate marketing is a performance-based marketing strategy where businesses partner with third-party publishers (affiliates) to promote products or services in exchange for commission on sales, leads, or actions generated. For Mumbai businesses operating in one of the world&apos;s most competitive markets, affiliate marketing offers a unique advantage: you only pay for actual results, not impressions or clicks.
                  </p>
                  <p>
                    In Mumbai&apos;s diverse business ecosystem—from bustling e-commerce stores in Andheri to luxury retail in Colaba, from SaaS startups in Bandra-Kurla Complex to financial services in Fort—affiliate marketing provides scalable customer acquisition without the high upfront costs of traditional advertising. With Mumbai&apos;s 20+ million digital-savvy consumers and India&apos;s growing influencer economy, businesses can leverage authentic recommendations from trusted voices to drive conversions.
                  </p>
                  <p>
                    The beauty of affiliate marketing lies in its flexibility: whether you&apos;re a small business looking to expand reach or an enterprise seeking new revenue channels, you can build a partner network that aligns with your brand values, target audience, and commission structure. Mumbai&apos;s entrepreneurial culture and vast network of content creators, bloggers, and digital marketers make it an ideal market for affiliate programs.
                  </p>
                </div>
              </div>

              {/* Content Block 2 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-xl">
                    💰
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Key Benefits of Affiliate Marketing for Mumbai Brands</h3>
                  </div>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p className="font-semibold text-white">1. Performance-Based ROI</p>
                  <p>
                    Unlike traditional advertising where you pay for impressions, affiliate marketing ensures you only pay when desired actions occur—whether that&apos;s a sale, lead, download, or sign-up. For Mumbai businesses managing tight marketing budgets, this risk-free model means every rupee spent delivers measurable value. Our clients typically see 300% ROI within the first 6 months.
                  </p>
                  
                  <p className="font-semibold text-white">2. Scalable Customer Acquisition</p>
                  <p>
                    Start with 10 affiliates or scale to 1,000+—the choice is yours. As your program grows and proves successful, more affiliates naturally join, creating a compounding growth effect. Mumbai&apos;s vast pool of influencers, bloggers, YouTubers, and content creators provides endless partnership opportunities across industries from fashion and beauty to technology and finance.
                  </p>
                  
                  <p className="font-semibold text-white">3. Enhanced Brand Credibility</p>
                  <p>
                    When trusted influencers and industry experts recommend your products, it carries more weight than traditional ads. Mumbai consumers are savvy—they value authentic recommendations from voices they trust. Strategic affiliate partnerships build brand credibility and social proof, essential for breaking into competitive Mumbai markets.
                  </p>
                  
                  <p className="font-semibold text-white">4. Low Entry Barriers</p>
                  <p>
                    Unlike expensive TV ads or billboard campaigns in Mumbai, affiliate marketing programs can start with minimal investment. Setup costs typically range from ₹15,000-₹50,000, with ongoing commission-only payments. This democratizes marketing for startups and small businesses competing against established brands.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Content Block 3 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-xl">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Best Affiliate Marketing Strategies for Mumbai Market</h3>
                  </div>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p className="font-semibold text-white">Niche-Specific Partnerships</p>
                  <p>
                    Mumbai&apos;s diverse market demands targeted approaches. Partner with niche bloggers and influencers who align with your brand—fashion bloggers for apparel, tech YouTubers for gadgets, finance experts for investment products. MyDigital Crown&apos;s 500+ verified affiliate network spans 25+ industries, ensuring perfect matches for your business.
                  </p>
                  
                  <p className="font-semibold text-white">Hyperlocal Targeting</p>
                  <p>
                    Leverage Mumbai&apos;s geography for location-based campaigns. Partner with local influencers in specific areas—Bandra food bloggers for restaurants, Colaba lifestyle creators for luxury products, Andheri tech reviewers for electronics. This hyperlocal strategy drives foot traffic and online conversions simultaneously.
                  </p>
                  
                  <p className="font-semibold text-white">Multi-Tier Commission Structures</p>
                  <p>
                    Motivate top performers with tiered commissions. Offer 10% for basic affiliates, 15% for those generating 50+ sales monthly, and 20% for elite partners. This incentivizes affiliates to promote your brand more actively and attracts high-quality partners who can deliver consistent results.
                  </p>
                  
                  <p className="font-semibold text-white">Exclusive Offers & Coupon Codes</p>
                  <p>
                    Give affiliates unique discount codes to share with their audiences. Mumbai consumers love deals—exclusive affiliate discounts create urgency, track attribution accurately, and make affiliates feel valued. Seasonal campaigns during Diwali, Christmas, and Mumbai festivals drive massive spikes in affiliate-driven sales.
                  </p>
                </div>
              </div>

              {/* Content Block 4 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-xl">
                    🛡️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Affiliate Fraud Prevention & Quality Control</h3>
                  </div>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p>
                    Not all affiliate traffic is created equal. Mumbai&apos;s competitive market attracts both legitimate partners and fraudsters attempting to game commission systems. At MyDigital Crown, we implement multi-layered fraud prevention including real-time tracking validation, IP monitoring, cookie stuffing detection, and manual review of suspicious conversions.
                  </p>
                  <p>
                    Our affiliate vetting process screens partners for brand alignment, audience quality, and ethical practices. We monitor affiliate content to ensure compliance with brand guidelines—no misleading claims, trademark violations, or policy breaches. This protects your brand reputation while maximizing genuine conversions.
                  </p>
                  <p>
                    Advanced analytics help identify patterns: sudden spikes in low-quality traffic, unusually high conversion rates from specific sources, or geographic anomalies. Our AI-powered system flags potential fraud automatically, saving you money and ensuring commissions reward real performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statistics */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-2xl p-6 border border-orange-300/30 text-center">
              <div className="text-4xl mb-2">500+</div>
              <div className="text-white font-semibold">Verified Affiliates</div>
              <div className="text-blue-200 text-sm mt-2">Across All Industries</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-6 border border-green-300/30 text-center">
              <div className="text-4xl mb-2">₹50L+</div>
              <div className="text-white font-semibold">Commissions Paid</div>
              <div className="text-blue-200 text-sm mt-2">To Partner Network</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-300/30 text-center">
              <div className="text-4xl mb-2">25+</div>
              <div className="text-white font-semibold">Industry Verticals</div>
              <div className="text-blue-200 text-sm mt-2">Specialized Networks</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-300/30 text-center">
              <div className="text-4xl mb-2">99.9%</div>
              <div className="text-white font-semibold">Tracking Accuracy</div>
              <div className="text-blue-200 text-sm mt-2">Real-Time Analytics</div>
            </div>
          </div>
        </div>
      </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>💡</div>
            <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🚀</div>
            <div className="absolute bottom-32 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>⭐</div>
            <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>🎯</div>
            <div className="absolute top-1/3 left-1/2 text-4xl opacity-20 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}>💬</div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl hover:bg-white/20 transition-all">
                <span className="text-2xl mr-3 animate-pulse">❓</span>
                <span className="text-lg">Frequently Asked Questions</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Got <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-pulse">Questions?</span>
                <br />
                <span className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">We&apos;ve Got Answers!</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about affiliate marketing services in Mumbai ✨
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* FAQ 1 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                    <span>What is affiliate marketing and how does it work for Mumbai businesses?</span>
                  </span>
                  <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Affiliate marketing is a performance-based marketing model where businesses partner with affiliates (influencers, bloggers, content creators) who promote products/services in exchange for commissions on sales or leads. For Mumbai businesses, it&apos;s powerful because you only pay for results - no upfront advertising costs. Affiliates use unique tracking links to drive traffic, and you pay commissions (typically 5-30%) only when conversions happen. With Mumbai&apos;s vast digital audience and influencer ecosystem, affiliate marketing offers scalable growth with minimal risk and maximum ROI.</p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-bounce">💰</span>
                    <span>How much does affiliate marketing cost in Mumbai?</span>
                  </span>
                  <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Affiliate marketing is performance-based, so you only pay for results! Setup costs range from ₹15,000-₹50,000 for initial program setup, network integration, and tracking systems. Commission structures vary by industry: E-commerce 5-15% CPS, SaaS/Digital Products 20-40% CPS, Lead Generation ₹500-₹5,000 CPL, Financial Services ₹1,000-₹10,000 CPA. At MyDigital Crown, we offer transparent pricing with no hidden fees - management fee starts at ₹25,000/month including affiliate recruitment, creative assets, performance tracking, fraud prevention, and optimization. You control commission rates and only pay affiliates when they deliver results.</p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-pulse">📱</span>
                    <span>Which types of affiliates work best for Mumbai businesses?</span>
                  </span>
                  <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>For Mumbai businesses, diverse affiliate types deliver results: 1) Influencers & Content Creators - Instagram, YouTube creators with 10K-1M+ followers for brand awareness and conversions, 2) Niche Bloggers - Industry-specific blogs with SEO traffic for long-term qualified leads, 3) Coupon & Deal Sites - Price-conscious Mumbai shoppers love discounts and cashback offers, 4) Review & Comparison Sites - Build trust with unbiased product reviews and comparisons, 5) Email Marketers - Targeted subscriber lists for direct conversions, 6) Cashback & Loyalty Platforms - Paytm, CashKaro for transaction-focused audiences. We match your product/service with the right affiliate mix based on target audience, profit margins, and business goals.</p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                    <span>How long does it take to see results from affiliate marketing in Mumbai?</span>
                  </span>
                  <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Timeline for affiliate marketing success: Initial Setup (Week 1-2) - Program setup, tracking implementation, affiliate recruitment. First Conversions (Week 3-4) - Early sales from initial affiliates testing offers. Momentum Building (Month 2-3) - Conversions increase 50-100% monthly as more affiliates join and optimize. Mature Program (Month 4-6) - 100+ active affiliates generating consistent revenue with 200-400% growth. Long-term Success (6+ months) - Stable passive income with continuous optimization. Mumbai&apos;s large influencer base accelerates growth. Most brands see positive ROI within 2 months and 300%+ ROI by month 6.</p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-bounce">🏆</span>
                    <span>What makes MyDigital Crown the best affiliate marketing agency in Mumbai?</span>
                  </span>
                  <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>MyDigital Crown stands out as Mumbai&apos;s premier affiliate marketing agency because: 1) 500+ Verified Affiliate Network - Pre-vetted partners across all niches, 2) Performance Tracking Excellence - Real-time dashboard with advanced analytics, 3) 300% Average ROI - Proven track record with 50+ successful programs, 4) Fraud Prevention - Advanced click validation and quality assurance systems, 5) Creative Excellence - Professional banners, landing pages, and promotional materials, 6) Transparent Pricing - Pay-for-performance model with no hidden costs, 7) Industry Expertise - Specialists in E-commerce, SaaS, Finance, Education, Healthcare, 8) Dedicated Support - 24/7 assistance for both brands and affiliates, 9) Mumbai Market Knowledge - Deep understanding of local influencer ecosystem, 10) Proven Results - 98% client retention rate with continuous revenue growth.</p>
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-pulse">📍</span>
                    <span>Do you recruit affiliates from specific Mumbai localities?</span>
                  </span>
                  <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Yes! We recruit affiliates across all Mumbai regions: Andheri - Fashion & Lifestyle influencers, Bandra - Premium lifestyle bloggers and celebrities, Powai - Tech & SaaS product reviewers, South Mumbai - Luxury and high-ticket affiliates, Navi Mumbai - E-commerce and deal sites, Thane - Local business promoters, Western Suburbs - Food and entertainment content creators, Eastern Suburbs - Education and career influencers. Our hyperlocal approach matches your brand with location-relevant affiliates who understand local preferences, speak regional languages (Hindi/Marathi/English), and have authentic connections with Mumbai audiences. This ensures higher conversion rates and better ROI from geo-targeted affiliate campaigns.</p>
                </div>
              </details>

              {/* FAQ 7 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-bounce">📊</span>
                    <span>What types of affiliate programs work best for Mumbai businesses?</span>
                  </span>
                  <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>We create diverse affiliate programs tailored to Mumbai businesses: 1) E-commerce Product Affiliates - Product reviews and recommendations (5-15% commission), 2) SaaS & Digital Products - Free trial promotions with recurring commissions (20-40%), 3) Lead Generation - Finance, insurance, real estate leads (₹500-₹10,000 CPL), 4) B2B Referral Programs - High-value business referrals (10-25% commission), 5) Educational Courses - Student enrollment programs (15-30%), 6) Healthcare Services - Patient referrals and wellness products (10-20%), 7) Travel & Booking - Flight, hotel, package bookings (5-12%), 8) Influencer Partnerships - Sponsored content with fixed fee + performance bonus, 9) Coupon & Deal Platforms - Volume-based commissions (3-8%), 10) Niche Bloggers - Industry-specific content with lifetime commissions.</p>
                </div>
              </details>

              {/* FAQ 8 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">📈</span>
                    <span>How do you measure affiliate marketing success in Mumbai market?</span>
                  </span>
                  <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>We use comprehensive KPIs to measure affiliate marketing success: 1) Revenue Attribution - Total revenue generated by affiliates with source tracking, 2) ROI (Return on Investment) - Target 300%+ ROI on affiliate program investments, 3) EPC (Earnings Per Click) - Average ₹10-₹500 per affiliate click based on industry, 4) Conversion Rate - Percentage of affiliate traffic converting (target 1-8%), 5) Active Affiliate Count - Target 100+ monthly active partners generating sales, 6) Average Order Value - Track if affiliates drive high-value customers, 7) Commission Costs - Keep below 25% of revenue for profitability, 8) Customer Lifetime Value - Quality of customers from affiliate channels, 9) Fraud Rate - Maintain below 2% with advanced detection, 10) Partner Performance - Drill-down analytics for each affiliate with optimization insights. We provide real-time dashboards with transparent tracking.</p>
                </div>
              </details>

              {/* FAQ 9 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-pulse">🏭</span>
                    <span>Do you have affiliate marketing expertise for specific industries in Mumbai?</span>
                  </span>
                  <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Yes! We have proven affiliate marketing expertise across Mumbai&apos;s key industries: 1) E-commerce - Fashion, electronics, lifestyle product affiliates with review-focused campaigns, 2) SaaS & Technology - Tech bloggers and YouTubers promoting software with recurring commissions, 3) Finance & Insurance - High-value CPA programs for loans, credit cards, investment products, 4) Education & Courses - Student influencers and education bloggers for course enrollments, 5) Healthcare & Wellness - Fitness influencers, health bloggers for supplements and wellness products, 6) Travel & Hospitality - Travel bloggers and deal sites for bookings and packages, 7) Real Estate - Broker networks and property portals for lead generation, 8) B2B Services - Professional networks and industry experts for business referrals, 9) Media & Entertainment - Content creators promoting streaming, events, and digital media, 10) Food & Beverage - Food bloggers and Instagram foodies for restaurant and delivery partnerships. Each industry gets custom commission structures and affiliate recruitment strategies.</p>
                </div>
              </details>

              {/* FAQ 10 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-teal-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-bounce">🎨</span>
                    <span>What makes successful affiliate creatives for Mumbai audience?</span>
                  </span>
                  <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Successful affiliate creatives for Mumbai audiences include: 1) Authentic Reviews - Real user experiences resonate better than generic promotional content, 2) Local Languages - Hindi, Marathi, English based on target segment for higher trust, 3) Mobile-Optimized Design - 75% of Mumbai users browse on mobile devices, 4) Discount & Deal Focus - Mumbai shoppers are price-conscious and love value, 5) Video Content - Product demos and unboxing videos perform 3x better than static images, 6) Social Proof - Ratings, testimonials, and user-generated content build credibility, 7) Festival Campaigns - Leverage Diwali, New Year, seasonal sales for higher conversions, 8) Clear CTA - Transparent commission disclosure with prominent call-to-action buttons, 9) Comparison Content - Product vs product comparisons help decision-making, 10) Storytelling - Connect products to Mumbai lifestyle and aspirations. We provide 300+ ready-to-use creative assets in our affiliate library.</p>
                </div>
              </details>

              {/* FAQ 11 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-amber-500/20 hover:border-amber-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-amber-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🤝</span>
                    <span>How does MyDigital Crown&apos;s affiliate marketing differ from competitors in Mumbai?</span>
                  </span>
                  <svg className="w-7 h-7 text-amber-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Our competitive advantages: 1) 500+ Pre-Vetted Network - Verified affiliates vs competitors&apos; generic lists of 50-100 partners, 2) Fraud-Free Guarantee - Advanced fraud detection saves clients 15-25% in wasted commissions, 3) Industry-Specific Recruitment - Niche-relevant affiliates vs broad, untargeted networks, 4) Creative Asset Library - 300+ ready templates vs DIY approach of most agencies, 5) Real-Time Dashboard - Live tracking vs weekly email reports from competitors, 6) Performance Optimization - Dedicated account managers vs automated email support, 7) Transparent Pricing - Pay-for-performance with no setup fees vs hidden charges, 8) Technology Stack - API integrations and automated payouts vs manual processes, 9) Proven 300% ROI - Case studies and testimonials vs vague promises, 10) Long-term Partnership - Ongoing support and optimization vs one-time setup. We don&apos;t just connect affiliates - we build profitable ecosystems.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Google Maps Section - Our Locations */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-lg border border-blue-200/50 rounded-full px-6 py-3 mb-6 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-600 font-semibold text-lg">Our Locations</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Visit Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Offices</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                MyDigital Crown serves clients across India with our main offices strategically located in Mumbai, Varanasi, and Bangalore. Visit us for personalized digital marketing consultations and discover why we&apos;re recognized as a top digital marketing company.
              </p>
            </div>
            
            {/* Maps Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Mumbai Office */}
              <div className="group">
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Mumbai Office</h3>
                    <p className="text-gray-600 mb-4">Digital Marketing Hub</p>
                    <div className="flex flex-col space-y-2 text-gray-700">
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Mumbai, Maharashtra</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className="text-sm">+91-83695-11877</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 group-hover:border-blue-200 transition-all duration-500">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.816521483372!2d72.85695367603202!3d19.377095681890477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af6c077e4823%3A0xc0433629e5e44764!2sMyDigital%20Crown%20Digital%20Marketing%20Company!5e0!3m2!1sen!2sin!4v1754870149046!5m2!1sen!2sin" 
                      width="100%" 
                      height="350" 
                      style={{border: 0}} 
                      allowFullScreen={true}
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="transition-all duration-500 group-hover:scale-105">
                    </iframe>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <a href="https://maps.app.goo.gl/XZhJ6zB6FfXHvzR46" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Varanasi Office */}
              <div className="group">
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Varanasi Office</h3>
                    <p className="text-gray-600 mb-4">Regional Operations Center</p>
                    <div className="flex flex-col space-y-2 text-gray-700">
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Varanasi, Uttar Pradesh</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className="text-sm">+91-83695-11877</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 group-hover:border-orange-200 transition-all duration-500">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.7497895685115!2d82.95189177617056!3d25.312609277636916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ea12715cbf6b235%3A0x3bef0d4f4036a313!2sMyDigital%20Crown!5e0!3m2!1sen!2sin!4v1754870103658!5m2!1sen!2sin" 
                      width="100%" 
                      height="350" 
                      style={{border: 0}} 
                      allowFullScreen={true}
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="transition-all duration-500 group-hover:scale-105">
                    </iframe>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <a href="https://maps.app.goo.gl/k1TLc6UPD3VRqB1PA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Bangalore Office */}
              <div className="group">
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Bangalore Office</h3>
                    <p className="text-gray-600 mb-4">Tech Innovation Center</p>
                    <div className="flex flex-col space-y-2 text-gray-700">
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Bangalore, Karnataka</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className="text-sm">+91-83695-11877</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 group-hover:border-green-200 transition-all duration-500">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.695606492396!2d77.53381007592293!3d12.991310587325888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3de93659d1e1%3A0x22423142c3de90fc!2sMydigital%20Crown!5e0!3m2!1sen!2sin!4v1754870406559!5m2!1sen!2sin" 
                      width="100%" 
                      height="350" 
                      style={{border: 0}} 
                      allowFullScreen={true}
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="transition-all duration-500 group-hover:scale-105">
                    </iframe>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <a href="https://maps.app.goo.gl/zwqbwUjZkUNvDcYs5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/50 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Visit Our Offices?
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Schedule a free consultation with our affiliate marketing experts at any of our three locations - Mumbai, Varanasi, or Bangalore. We&apos;re here to help transform your business with profitable partner networks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="tel:+918369511877" 
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 inline-flex items-center justify-center transform hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="text-2xl mr-3">📞</span>
                      Call: +91-83695-11877
                    </span>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="group relative overflow-hidden bg-white border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                  >
                    <span className="flex items-center">
                      <span className="text-2xl mr-3">📧</span>
                      Schedule Meeting
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      <Footer />
    </>
  )
}
