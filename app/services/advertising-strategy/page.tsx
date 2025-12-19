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
  title: 'Advertising Strategy Mumbai | 300% ROI | MyDigital Crown',
  description: 'Advertising Strategy Mumbai. 300% ROI | 150+ Brands | Media Planning & Campaign Management | Brand Positioning. Call +91-83695-11877',
  keywords: [
    // Primary Keywords (5)
    'advertising strategy in mumbai',
    'advertising strategy mumbai',
    'advertising strategy services mumbai',
    'advertising strategy company mumbai',
    'advertising strategy agency mumbai',
    
    // Quality & Authority Keywords (8)
    'best advertising strategy mumbai',
    'top advertising strategy mumbai',
    'expert advertising strategy mumbai',
    'professional advertising strategy mumbai',
    'leading advertising agency mumbai',
    'premier advertising strategy services',
    'trusted advertising consultant mumbai',
    'advertising strategy specialist mumbai',
    
    // Service-specific Keywords (10)
    'digital advertising strategy mumbai',
    'ad campaign strategy mumbai',
    'media strategy mumbai',
    'brand advertising strategy mumbai',
    'advertising campaign planning mumbai',
    'advertising planning mumbai',
    'strategic advertising planning mumbai',
    'advertising media strategy mumbai',
    'integrated advertising strategy mumbai',
    'advertising strategy development mumbai',
    
    // Performance & ROI Keywords (9)
    'advertising ROI strategy mumbai',
    'performance advertising strategy mumbai',
    'advertising optimization mumbai',
    'advertising conversion strategy mumbai',
    'data-driven advertising strategy',
    'results-oriented advertising mumbai',
    'high-converting ad campaigns mumbai',
    'ROI-focused advertising planning',
    'measurable advertising strategy',
    
    // Consultant & Expert Keywords (6)
    'advertising strategy consultant mumbai',
    'advertising strategy expert',
    'advertising consultant mumbai',
    'media planning consultant',
    'advertising strategist mumbai',
    'campaign strategy consultant',
    
    // Creative & Campaign Keywords (8)
    'creative advertising strategy mumbai',
    'advertising budget strategy mumbai',
    'advertising targeting strategy mumbai',
    'advertising analytics mumbai',
    'multi-channel advertising mumbai',
    'advertising growth strategy mumbai',
    'omnichannel advertising strategy',
    'advertising campaign development',
    
    // Industry & Business Keywords (6)
    'startup advertising strategy mumbai',
    'ecommerce advertising strategy',
    'b2b advertising strategy mumbai',
    'b2c advertising campaigns',
    'retail advertising strategy mumbai',
    'local business advertising mumbai',
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  openGraph: {
    title: 'Advertising Strategy in Mumbai | #1 Ad Strategy Agency',
    description: 'ROI-Driven Advertising Strategy in Mumbai. Expert Media Planning, Campaign Management & Brand Positioning. 300% ROI | 150+ Brands Served in Mumbai',
    url: 'https://mydigitalcrown.in/services/advertising-strategy',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/advertising-strategy-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Advertising Strategy Services in Mumbai - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advertising Strategy in Mumbai | Expert Ad Strategy',
    description: 'Top Advertising Strategy in Mumbai. 300% ROI Guaranteed. Call +91-83695-11877',
    site: '@mydigitalcrown',
    creator: '@mydigitalcrown',
    images: ['https://mydigitalcrown.in/images/advertising-strategy-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://mydigitalcrown.in/services/advertising-strategy',
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
  category: 'Digital Marketing Services',
  classification: 'Advertising Strategy, Media Planning, Campaign Management',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function AdvertisingStrategyPage() {
  // Structured Data - Multiple Schema Types for Maximum SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // Service Schema
      {
        "@type": "Service",
        "@id": "https://mydigitalcrown.in/services/advertising-strategy#service",
        "serviceType": "Advertising Strategy in Mumbai",
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
          "name": "Advertising Strategy Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Advertising Strategy",
                "description": "Comprehensive digital advertising planning and execution"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Media Planning & Buying",
                "description": "Strategic media planning and media buying services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Brand Positioning Strategy",
                "description": "Strategic brand positioning and advertising campaigns"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Campaign Management",
                "description": "End-to-end advertising campaign management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Creative Ad Strategy",
                "description": "Creative advertising strategy and content planning"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Performance Marketing",
                "description": "ROI-focused performance marketing strategies"
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
        "name": "MyDigital Crown - Advertising Strategy Agency Mumbai",
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
        "@id": "https://mydigitalcrown.in/services/advertising-strategy#webpage",
        "url": "https://mydigitalcrown.in/services/advertising-strategy",
        "name": "Advertising Strategy in Mumbai | #1 Ad Strategy Agency",
        "description": "Top Advertising Strategy in Mumbai. Expert Ad Planning, Media Strategy, Campaign Management & Brand Positioning. 300% ROI Guaranteed.",
        "inLanguage": "en-IN",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://mydigitalcrown.in/#website"
        },
        "breadcrumb": {
          "@id": "https://mydigitalcrown.in/services/advertising-strategy#breadcrumb"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://mydigitalcrown.in/advertising-strategy.jpg",
          "width": 1200,
          "height": 630
        }
      },
      // BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "@id": "https://mydigitalcrown.in/services/advertising-strategy#breadcrumb",
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
              "@id": "https://mydigitalcrown.in/services/advertising-strategy",
              "name": "Advertising Strategy in Mumbai"
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
            "name": "What is advertising strategy and why is it important for Mumbai businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Advertising strategy is a comprehensive plan that defines how your brand will communicate with target audiences to achieve marketing objectives. For Mumbai businesses, a well-crafted advertising strategy is crucial because Mumbai is India's most competitive market with diverse audiences, high media costs, and intense competition. A strategic approach helps optimize ad spend, target the right audience segments, choose appropriate media channels, and maximize ROI in this dynamic metro market."
            }
          },
          {
            "@type": "Question",
            "name": "How much does advertising strategy services cost in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Advertising strategy services in Mumbai typically range from ₹25,000 to ₹2,00,000+ per month, depending on campaign scope, media channels, and business size. At MyDigital Crown, we offer customized packages starting from ₹30,000/month for small businesses and ₹1,00,000+ for enterprise-level campaigns. Our pricing includes strategy development, media planning, creative direction, campaign management, and performance analytics. We focus on ROI and ensure every rupee spent delivers measurable results."
            }
          },
          {
            "@type": "Question",
            "name": "Which advertising channels work best for Mumbai market?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For Mumbai businesses, a multi-channel approach works best: 1) Digital Advertising (Google Ads, Facebook, Instagram) - Highly targeted and measurable, 2) Local Search Marketing - Critical for Mumbai's location-based searches, 3) Social Media Advertising - Effective for B2C brands, 4) Display & Video Ads - Great for brand awareness in competitive sectors, 5) Hyperlocal Campaigns - Target specific Mumbai localities like Andheri, Bandra, South Mumbai. We create integrated strategies combining online and offline channels based on your target audience behavior and business goals."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from advertising strategy in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Timeline varies by advertising channel and business goals: Digital Ads (Google, Facebook) - 2-4 weeks for initial results, 2-3 months for optimization. Brand Awareness Campaigns - 3-6 months for significant impact. Lead Generation Campaigns - 4-8 weeks for consistent lead flow. E-commerce & Performance Marketing - 1-2 months for ROI positive results. Local Market Penetration - 3-6 months for strong local presence. We provide weekly reports and continuously optimize campaigns to accelerate results in Mumbai's fast-paced market."
            }
          },
          {
            "@type": "Question",
            "name": "What makes MyDigital Crown the best advertising strategy agency in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MyDigital Crown stands out as Mumbai's premier advertising strategy agency because: 1) 8+ years of Mumbai market expertise, 2) 150+ successful campaigns across industries, 3) Data-driven strategies with 300% average ROI, 4) Expert team led by Aditya Pandey with proven track record, 5) Comprehensive services from strategy to execution, 6) Transparent reporting and real-time analytics, 7) Deep understanding of Mumbai's diverse audience segments, 8) Cost-effective solutions with guaranteed results. We don't just create ads - we build advertising ecosystems that drive sustainable business growth."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide advertising strategy for specific Mumbai localities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We specialize in hyperlocal advertising strategies for specific Mumbai areas including Andheri, Bandra, Powai, Navi Mumbai, Thane, South Mumbai, Western Suburbs, Eastern Suburbs, and Central Mumbai. Our hyperlocal approach includes: locality-specific audience targeting, local language ad copies (Hindi, Marathi, English), area-based competitor analysis, local media mix (digital + offline), location-based offers and promotions, and geo-targeted social media campaigns. This precision targeting ensures your advertising budget is spent reaching the most relevant audiences in your target localities."
            }
          },
          {
            "@type": "Question",
            "name": "What types of advertising campaigns do you create for Mumbai businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We create diverse advertising campaigns tailored to Mumbai businesses: 1) Brand Awareness Campaigns - Build recognition in competitive market, 2) Lead Generation Campaigns - Drive qualified leads and sales, 3) Performance Marketing - ROI-focused campaigns with measurable results, 4) Product Launch Campaigns - Create buzz for new products/services, 5) Seasonal & Festival Campaigns - Leverage Mumbai's festive spirit, 6) Retargeting Campaigns - Re-engage website visitors, 7) E-commerce Advertising - Drive online sales with shopping ads, 8) Local Business Promotion - Increase foot traffic and local visibility, 9) Corporate Branding - B2B advertising for professional services, 10) Crisis Management Advertising - Reputation protection campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure advertising campaign success in Mumbai market?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use comprehensive KPIs to measure advertising success: 1) ROI (Return on Investment) - Revenue generated vs ad spend, 2) ROAS (Return on Ad Spend) - Minimum 4:1 target ratio, 3) CPL (Cost Per Lead) - Track lead acquisition costs, 4) Conversion Rate - Percentage of clicks converting to customers, 5) CTR (Click-Through Rate) - Ad engagement metrics, 6) Brand Awareness - Reach, impressions, and brand recall, 7) Customer Acquisition Cost (CAC) - Cost to acquire new customer, 8) Engagement Metrics - Likes, shares, comments on social ads, 9) Quality Score - Google Ads performance rating, 10) Attribution Tracking - Multi-touch customer journey analysis. We provide weekly dashboards with real-time campaign performance data."
            }
          },
          {
            "@type": "Question",
            "name": "Do you have advertising strategy expertise for specific industries in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We have proven expertise across Mumbai's key industries: 1) Real Estate - Luxury properties, affordable housing, commercial spaces, 2) Healthcare - Hospitals, clinics, diagnostic centers, wellness centers, 3) Education - Schools, colleges, coaching institutes, online learning, 4) Retail & E-commerce - Fashion, electronics, FMCG, lifestyle brands, 5) Hospitality - Hotels, restaurants, cafes, event venues, 6) Finance - Banks, insurance, investment services, fintech, 7) IT & Technology - Software companies, startups, SaaS businesses, 8) Manufacturing - B2B industrial advertising, 9) Professional Services - Legal, accounting, consulting firms, 10) Entertainment & Media - Production houses, event companies. Each industry has unique advertising requirements that we understand deeply."
            }
          },
          {
            "@type": "Question",
            "name": "What makes a successful advertising creative for Mumbai audience?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Successful advertising creatives for Mumbai audiences include: 1) Cultural Relevance - Reflect Mumbai's diverse, cosmopolitan culture, 2) Local Language Mix - Hindi, Marathi, English based on target segment, 3) Fast-Paced Messaging - Match Mumbai's energetic lifestyle, 4) Visual Impact - Stand out in cluttered advertising environment, 5) Mobile-First Design - 70% Mumbai users browse on mobile, 6) Authenticity - Real stories resonate better than generic claims, 7) Emotional Connect - Tap into aspirations and dreams, 8) Clear CTA - Direct Mumbai audience to action, 9) Social Proof - Testimonials and reviews build trust, 10) Trendy & Contemporary - Stay current with Mumbai's evolving preferences. Our creative team crafts compelling ads that convert Mumbai audiences into customers."
            }
          },
          {
            "@type": "Question",
            "name": "How does MyDigital Crown's advertising strategy differ from competitors in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our competitive advantages: 1) Data-First Approach - Every decision backed by analytics, not assumptions, 2) Mumbai Market Specialization - Deep understanding of local consumer behavior, 3) Transparent Pricing - No hidden costs, clear ROI projections, 4) Dedicated Account Manager - Single point of contact for your campaigns, 5) Multi-Channel Integration - Seamless coordination across all advertising platforms, 6) Creative Excellence - Award-winning design and copywriting team, 7) Technology Stack - Advanced tools for tracking, automation, and optimization, 8) Proven Results - 300% average ROI with 98% client retention, 9) Agile Methodology - Quick pivots based on performance data, 10) Long-term Partnership - We grow with your business, not just run campaigns. We don't just execute advertising - we become your growth partner."
            }
          }
        ]
      },
      // ItemList Schema
      {
        "@type": "ItemList",
        "name": "Advertising Strategy Services",
        "description": "Comprehensive advertising strategy services offered in Mumbai",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Service",
              "name": "Digital Advertising Strategy",
              "description": "Comprehensive digital advertising planning across Google, Facebook, Instagram, LinkedIn and other platforms"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Service",
              "name": "Media Planning & Buying",
              "description": "Strategic media planning, budget allocation, and media buying services for maximum ROI"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Service",
              "name": "Brand Positioning & Messaging",
              "description": "Strategic brand positioning, messaging framework, and creative direction"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Service",
              "name": "Campaign Strategy & Management",
              "description": "End-to-end campaign strategy, execution, and performance management"
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Service",
              "name": "Performance Marketing",
              "description": "ROI-focused performance marketing strategies with measurable results"
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Service",
              "name": "Competitor Analysis",
              "description": "In-depth competitor advertising analysis and market intelligence"
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
        "reviewBody": "MyDigital Crown transformed our advertising approach completely. Their strategic planning helped us achieve 250% ROI on our Mumbai campaigns. Aditya's team understands the Mumbai market perfectly!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "itemReviewed": {
          "@type": "Service",
          "name": "Advertising Strategy Services Mumbai"
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
        "reviewBody": "Best advertising strategy agency in Mumbai! They optimized our ad spend and increased our leads by 300%. Data-driven approach with transparent reporting. Highly recommended!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "itemReviewed": {
          "@type": "Service",
          "name": "Advertising Strategy Services Mumbai"
        }
      },
      // HowTo Schema for Voice Search Optimization
      {
        "@type": "HowTo",
        "name": "How to Create an Effective Advertising Strategy in Mumbai",
        "description": "Step-by-step guide to creating a winning advertising strategy for Mumbai businesses",
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
            "name": "Market Research & Analysis",
            "text": "Conduct comprehensive market research to understand Mumbai audience demographics, competitor strategies, and market opportunities. Analyze local consumer behavior patterns and preferences.",
            "url": "https://mydigitalcrown.in/services/advertising-strategy#research"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Define Objectives & KPIs",
            "text": "Set clear advertising objectives (brand awareness, lead generation, sales) and define measurable KPIs like ROI, ROAS, CTR, conversion rate, and customer acquisition cost.",
            "url": "https://mydigitalcrown.in/services/advertising-strategy#objectives"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Audience Targeting & Segmentation",
            "text": "Identify and segment target audiences based on demographics, psychographics, location, interests, and buying behavior specific to Mumbai market.",
            "url": "https://mydigitalcrown.in/services/advertising-strategy#targeting"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Channel Selection & Media Planning",
            "text": "Choose optimal advertising channels (Google Ads, Facebook, Instagram, YouTube, etc.) based on target audience presence and campaign objectives. Create media mix strategy.",
            "url": "https://mydigitalcrown.in/services/advertising-strategy#channels"
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Creative Development",
            "text": "Develop compelling ad creatives (images, videos, copy) that resonate with Mumbai audiences. Ensure cultural relevance, emotional appeal, and clear call-to-action.",
            "url": "https://mydigitalcrown.in/services/advertising-strategy#creative"
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Budget Allocation",
            "text": "Allocate advertising budget across selected channels based on expected ROI, audience reach, and campaign goals. Reserve budget for testing and optimization.",
            "url": "https://mydigitalcrown.in/services/advertising-strategy#budget"
          },
          {
            "@type": "HowToStep",
            "position": 7,
            "name": "Campaign Launch & Monitoring",
            "text": "Launch campaigns across selected platforms with proper tracking setup. Monitor performance metrics in real-time and ensure proper ad delivery.",
            "url": "https://mydigitalcrown.in/services/advertising-strategy#launch"
          },
          {
            "@type": "HowToStep",
            "position": 8,
            "name": "Performance Analysis & Optimization",
            "text": "Analyze campaign performance data, identify winning strategies, pause underperforming ads, and continuously optimize for better ROI. Implement A/B testing for continuous improvement.",
            "url": "https://mydigitalcrown.in/services/advertising-strategy#optimization"
          }
        ]
      },
      // Article Schema for Content Indexing
      {
        "@type": "Article",
        "headline": "Advertising Strategy in Mumbai: Complete Guide for Business Growth",
        "description": "Comprehensive guide to advertising strategy services in Mumbai covering digital advertising, media planning, campaign management, and ROI optimization.",
        "image": "https://mydigitalcrown.in/images/advertising-strategy-mumbai.jpg",
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
          "@id": "https://mydigitalcrown.in/services/advertising-strategy"
        },
        "articleSection": "Digital Marketing",
        "keywords": "advertising strategy in mumbai, advertising strategy mumbai, ad campaign planning mumbai, media strategy mumbai, digital advertising mumbai, brand positioning mumbai",
        "wordCount": 3000
      },
      // LocalBusiness Schema for Local SEO
      {
        "@type": "LocalBusiness",
        "@id": "https://mydigitalcrown.in/#localbusiness",
        "name": "MyDigital Crown - Advertising Strategy Agency",
        "image": "https://mydigitalcrown.in/logo.png",
        "description": "Premier advertising strategy agency in Mumbai offering media planning, campaign management, and brand positioning services.",
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
        "name": "Advertising Strategy Services in Mumbai - MyDigital Crown",
        "description": "Learn how MyDigital Crown creates winning advertising strategies for Mumbai businesses with 300% average ROI",
        "thumbnailUrl": "https://mydigitalcrown.in/images/advertising-video-thumb.jpg",
        "uploadDate": "2024-06-15",
        "duration": "PT3M45S",
        "contentUrl": "https://mydigitalcrown.in/videos/advertising-strategy.mp4",
        "embedUrl": "https://www.youtube.com/embed/advertising-strategy-mumbai"
      },
      // Course Schema for Educational Content
      {
        "@type": "Course",
        "name": "Advertising Strategy Masterclass for Mumbai Businesses",
        "description": "Learn professional advertising strategy techniques from Mumbai's top digital marketing agency",
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
        "name": "Free Advertising Strategy Consultation for Mumbai Businesses",
        "text": "Get a free 30-minute advertising strategy consultation for your Mumbai business. Limited time offer - Call +91-83695-11877",
        "datePosted": "2025-10-01",
        "expires": "2025-12-31",
        "category": "https://www.wikidata.org/wiki/Q218616",
        "url": "https://mydigitalcrown.in/services/advertising-strategy"
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
          <p className="text-xl font-bold">Advertising Strategy in Mumbai - MyDigital Crown</p>
          <p>Premier advertising strategy agency in Mumbai offering ROI-driven campaigns, media planning, and brand positioning services. Call +91-83695-11877 for free consultation.</p>
        </div>
      </noscript>
      
      <Navbar />
      
      <main className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
        {/* Hero Section - Home Page Style */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden" itemScope itemType="https://schema.org/Service">
          <meta itemProp="name" content="Advertising Strategy Services Mumbai" />
          <meta itemProp="description" content="ROI-Driven Advertising Strategies, Expert Media Planning, Campaign Management for Mumbai Businesses" />
          <meta itemProp="provider" content="MyDigital Crown" />
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-yellow-500/10 rounded-full blur-3xl animate-blob"
              role="img"
              aria-label="Decorative animated background gradient"
            ></div>
            <div 
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"
              role="img"
              aria-label="Decorative animated background element"
            ></div>
            <div 
              className="absolute top-1/2 left-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"
              role="img"
              aria-label="Decorative floating background shape"
            ></div>
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
                <span className="text-2xl" role="img" aria-label="Chart">📊</span>
                <span className="text-white font-semibold">Mumbai&apos;s #1 Advertising Strategy Agency</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" itemProp="headline">
                Advertising Strategy in Mumbai
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8" itemProp="description">
                Expert Media Planning | Campaign Management | Brand Positioning | ROI-Driven Ad Strategy<br />
                <span className="text-yellow-400 font-bold">300% Average ROI | 150+ Brands Served | 8+ Years Experience</span>
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">%</span>
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-yellow-100 to-white bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">300%</div>
                  <div className="text-white/90 font-semibold text-lg">Average ROI</div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">+</span>
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-green-100 to-white bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">150+</div>
                  <div className="text-white/90 font-semibold text-lg">Brands Served</div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>

                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">+</span>
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">8+</div>
                  <div className="text-white/90 font-semibold text-lg">Years Experience</div>
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
                  Where to find advertising strategy services in Mumbai?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-700 leading-relaxed" itemProp="text">
                    MyDigital Crown is Mumbai&apos;s premier advertising strategy agency located in Chembur. We serve clients across Mumbai including Andheri, Bandra, Powai, and all localities. Call +91-83695-11877 for free consultation.
                  </p>
                </div>
              </div>

              {/* Voice Query 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-bold text-blue-600 mb-3 flex items-center" itemProp="name">
                  <span className="text-2xl mr-2" role="img" aria-label="Money">💰</span>
                  How much does advertising strategy cost?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-700 leading-relaxed" itemProp="text">
                    Our advertising strategy services start from ₹30,000 per month for small businesses. We offer customized packages based on your budget and goals, ensuring 300% average ROI.
                  </p>
                </div>
              </div>

              {/* Voice Query 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-lg font-bold text-blue-600 mb-3 flex items-center" itemProp="name">
                  <span className="text-2xl mr-2" role="img" aria-label="Time">⏱️</span>
                  When will I see results from advertising?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-700 leading-relaxed" itemProp="text">
                    Digital advertising campaigns show initial results within 2-4 weeks. Full optimization and maximum ROI typically achieved within 2-3 months of continuous campaign management.
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
                <span className="text-2xl mr-3">🎯</span>
                Our Advertising Strategy Services
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Advertising Solutions</span> for Mumbai Businesses
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From strategy to execution, we deliver advertising campaigns that drive real results and maximize your ROI
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Advertising Strategy</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Comprehensive digital advertising planning across Google Ads, Facebook, Instagram, LinkedIn, and other platforms. We create data-driven strategies that maximize your online visibility.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">✅ Platform Selection & Optimization</li>
                  <li className="flex items-start gap-2">✅ Audience Targeting Strategy</li>
                  <li className="flex items-start gap-2">✅ Budget Allocation Planning</li>
                  <li className="flex items-start gap-2">✅ Performance Tracking</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="group bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Media Planning & Buying</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Strategic media planning and buying services to get maximum reach at optimal costs. We negotiate the best rates and placements for your advertising campaigns.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">✅ Media Mix Strategy</li>
                  <li className="flex items-start gap-2">✅ Cost Negotiation</li>
                  <li className="flex items-start gap-2">✅ Placement Optimization</li>
                  <li className="flex items-start gap-2">✅ ROI Maximization</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="group bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Positioning Strategy</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Position your brand strategically in the Mumbai market. We develop messaging frameworks and creative strategies that resonate with your target audience.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">✅ Brand Identity Development</li>
                  <li className="flex items-start gap-2">✅ Messaging Framework</li>
                  <li className="flex items-start gap-2">✅ Competitive Differentiation</li>
                  <li className="flex items-start gap-2">✅ Creative Direction</li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="group bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-100 hover:border-green-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Campaign Management</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  End-to-end campaign strategy, execution, and management. We handle everything from creative development to performance optimization.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">✅ Campaign Planning</li>
                  <li className="flex items-start gap-2">✅ Creative Production</li>
                  <li className="flex items-start gap-2">✅ Launch & Execution</li>
                  <li className="flex items-start gap-2">✅ Continuous Optimization</li>
                </ul>
              </div>

              {/* Service 5 */}
              <div className="group bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Marketing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  ROI-focused performance marketing strategies with measurable results. We optimize every rupee spent to deliver maximum returns on your advertising investment.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">✅ Conversion Optimization</li>
                  <li className="flex items-start gap-2">✅ A/B Testing</li>
                  <li className="flex items-start gap-2">✅ Analytics & Reporting</li>
                  <li className="flex items-start gap-2">✅ ROI Tracking</li>
                </ul>
              </div>

              {/* Service 6 */}
              <div className="group bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitor Analysis</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In-depth competitor advertising analysis and market intelligence. Stay ahead of competition with strategic insights and data-driven recommendations.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">✅ Competitive Benchmarking</li>
                  <li className="flex items-start gap-2">✅ Market Gap Analysis</li>
                  <li className="flex items-start gap-2">✅ Strategic Insights</li>
                  <li className="flex items-start gap-2">✅ Opportunity Identification</li>
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
                Why We&apos;re Mumbai&apos;s <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Top Choice</span> for Advertising Strategy
              </h2>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Experience the difference with a team that delivers measurable results and exceptional service
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
              Say About Us
            </h2>
            
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Real results, real clients, real growth stories from Mumbai&apos;s most successful businesses
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
                <div className="text-4xl font-black text-blue-400 mb-2">150+</div>
                <div className="text-white/90 font-medium">Happy Clients</div>
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
                💼
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
                  &quot;MyDigital Crown transformed our furniture business completely. Their digital marketing strategies increased our sales by <span className="text-yellow-400 font-bold">200% within 6 months</span>. Aditya&apos;s team understands the furniture industry perfectly and delivered exceptional results.&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">FF</span>
                </div>
                <div>
                  <div className="font-bold text-white">Farhan Furniturewalla</div>
                  <div className="text-white/70">Owner, Furniturewalla</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                🏥
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
                  &quot;As a healthcare facility, we needed a digital partner who understands our industry. MyDigital Crown delivered outstanding SEO and social media marketing that brought us <span className="text-green-400 font-bold">150+ new patients monthly</span>. Unmatched professionalism!&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SK</span>
                </div>
                <div>
                  <div className="font-bold text-white">Dr. Shrish Kumar</div>
                  <div className="text-white/70">Care Hospital</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                🎓
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
                  &quot;MyDigital Crown&apos;s educational marketing expertise helped us reach thousands of prospective students. Their targeted campaigns increased our admissions by <span className="text-purple-400 font-bold">180%</span>. Excellent ROI throughout!&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">UB</span>
                </div>
                <div>
                  <div className="font-bold text-white">Umesh Batkar</div>
                  <div className="text-white/70">Director, Trinkets Institute</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 4 */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                🧽
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
                  &quot;Our cleaning service flourished after partnering with MyDigital Crown. Their local SEO strategies helped us dominate Mumbai&apos;s market. We now get <span className="text-cyan-400 font-bold">50+ inquiries weekly</span>. Outstanding team!&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SK</span>
                </div>
                <div>
                  <div className="font-bold text-white">Shagufta Khan</div>
                  <div className="text-white/70">Founder, Clean n Shine</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Let&apos;s create your digital marketing success story. Get started with a free consultation and discover how we can transform your business.
              </p>
              <a href="tel:+918369511877" className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 inline-flex items-center justify-center transform hover:scale-110">
                <span className="relative z-10 flex items-center">
                  <span className="text-2xl mr-3">📞</span>
                  <span className="font-extrabold tracking-wide">Call Now: +91-83695-11877</span>
                </span>
              </a>
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
        title="Trusted by Leading Brands"
        subtitle="150+ Happy Clients"
        description="Trusted by India's top companies for advertising strategy excellence. Join the success story!"
      />

      {/* Related Services Section */}
      {/* Our Locations */}

      <OurLocations />


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/advertising-strategy"
        title="Complete Digital Marketing Solutions"
        description="Enhance your advertising strategy with our comprehensive digital marketing services designed for Mumbai businesses"
      />

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
                Everything you need to know about advertising strategy services in Mumbai ✨
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* FAQ 1 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                    <span>What is advertising strategy and why is it important for Mumbai businesses?</span>
                  </span>
                  <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Advertising strategy is a comprehensive plan that defines how your brand will communicate with target audiences to achieve marketing objectives. For Mumbai businesses, a well-crafted advertising strategy is crucial because Mumbai is India&apos;s most competitive market with diverse audiences, high media costs, and intense competition. A strategic approach helps optimize ad spend, target the right audience segments, choose appropriate media channels, and maximize ROI in this dynamic metro market.</p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-bounce">💰</span>
                    <span>How much does advertising strategy services cost in Mumbai?</span>
                  </span>
                  <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Advertising strategy services in Mumbai typically range from ₹25,000 to ₹2,00,000+ per month, depending on campaign scope, media channels, and business size. At MyDigital Crown, we offer customized packages starting from ₹30,000/month for small businesses and ₹1,00,000+ for enterprise-level campaigns. Our pricing includes strategy development, media planning, creative direction, campaign management, and performance analytics. We focus on ROI and ensure every rupee spent delivers measurable results.</p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-pulse">📱</span>
                    <span>Which advertising channels work best for Mumbai market?</span>
                  </span>
                  <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>For Mumbai businesses, a multi-channel approach works best: 1) Digital Advertising (Google Ads, Facebook, Instagram) - Highly targeted and measurable, 2) Local Search Marketing - Critical for Mumbai&apos;s location-based searches, 3) Social Media Advertising - Effective for B2C brands, 4) Display & Video Ads - Great for brand awareness in competitive sectors, 5) Hyperlocal Campaigns - Target specific Mumbai localities like Andheri, Bandra, South Mumbai. We create integrated strategies combining online and offline channels based on your target audience behavior and business goals.</p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                    <span>How long does it take to see results from advertising strategy in Mumbai?</span>
                  </span>
                  <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Timeline varies by advertising channel and business goals: Digital Ads (Google, Facebook) - 2-4 weeks for initial results, 2-3 months for optimization. Brand Awareness Campaigns - 3-6 months for significant impact. Lead Generation Campaigns - 4-8 weeks for consistent lead flow. E-commerce & Performance Marketing - 1-2 months for ROI positive results. Local Market Penetration - 3-6 months for strong local presence. We provide weekly reports and continuously optimize campaigns to accelerate results in Mumbai&apos;s fast-paced market.</p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-bounce">🏆</span>
                    <span>What makes MyDigital Crown the best advertising strategy agency in Mumbai?</span>
                  </span>
                  <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>MyDigital Crown stands out as Mumbai&apos;s premier advertising strategy agency because: 1) 8+ years of Mumbai market expertise, 2) 150+ successful campaigns across industries, 3) Data-driven strategies with 300% average ROI, 4) Expert team led by Aditya Pandey with proven track record, 5) Comprehensive services from strategy to execution, 6) Transparent reporting and real-time analytics, 7) Deep understanding of Mumbai&apos;s diverse audience segments, 8) Cost-effective solutions with guaranteed results. We don&apos;t just create ads - we build advertising ecosystems that drive sustainable business growth.</p>
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-pulse">📍</span>
                    <span>Do you provide advertising strategy for specific Mumbai localities?</span>
                  </span>
                  <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Yes! We specialize in hyperlocal advertising strategies for specific Mumbai areas including Andheri, Bandra, Powai, Navi Mumbai, Thane, South Mumbai, Western Suburbs, Eastern Suburbs, and Central Mumbai. Our hyperlocal approach includes: locality-specific audience targeting, local language ad copies (Hindi, Marathi, English), area-based competitor analysis, local media mix (digital + offline), location-based offers and promotions, and geo-targeted social media campaigns. This precision targeting ensures your advertising budget is spent reaching the most relevant audiences in your target localities.</p>
                </div>
              </details>

              {/* FAQ 7 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-bounce">📊</span>
                    <span>What types of advertising campaigns do you create for Mumbai businesses?</span>
                  </span>
                  <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>We create diverse advertising campaigns tailored to Mumbai businesses: 1) Brand Awareness Campaigns - Build recognition in competitive market, 2) Lead Generation Campaigns - Drive qualified leads and sales, 3) Performance Marketing - ROI-focused campaigns with measurable results, 4) Product Launch Campaigns - Create buzz for new products/services, 5) Seasonal & Festival Campaigns - Leverage Mumbai&apos;s festive spirit, 6) Retargeting Campaigns - Re-engage website visitors, 7) E-commerce Advertising - Drive online sales with shopping ads, 8) Local Business Promotion - Increase foot traffic and local visibility, 9) Corporate Branding - B2B advertising for professional services, 10) Crisis Management Advertising - Reputation protection campaigns.</p>
                </div>
              </details>

              {/* FAQ 8 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">📈</span>
                    <span>How do you measure advertising campaign success in Mumbai market?</span>
                  </span>
                  <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>We use comprehensive KPIs to measure advertising success: 1) ROI (Return on Investment) - Revenue generated vs ad spend, 2) ROAS (Return on Ad Spend) - Minimum 4:1 target ratio, 3) CPL (Cost Per Lead) - Track lead acquisition costs, 4) Conversion Rate - Percentage of clicks converting to customers, 5) CTR (Click-Through Rate) - Ad engagement metrics, 6) Brand Awareness - Reach, impressions, and brand recall, 7) Customer Acquisition Cost (CAC) - Cost to acquire new customer, 8) Engagement Metrics - Likes, shares, comments on social ads, 9) Quality Score - Google Ads performance rating, 10) Attribution Tracking - Multi-touch customer journey analysis. We provide weekly dashboards with real-time campaign performance data.</p>
                </div>
              </details>

              {/* FAQ 9 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-pulse">🏭</span>
                    <span>Do you have advertising strategy expertise for specific industries in Mumbai?</span>
                  </span>
                  <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Yes! We have proven expertise across Mumbai&apos;s key industries: 1) Real Estate - Luxury properties, affordable housing, commercial spaces, 2) Healthcare - Hospitals, clinics, diagnostic centers, wellness centers, 3) Education - Schools, colleges, coaching institutes, online learning, 4) Retail & E-commerce - Fashion, electronics, FMCG, lifestyle brands, 5) Hospitality - Hotels, restaurants, cafes, event venues, 6) Finance - Banks, insurance, investment services, fintech, 7) IT & Technology - Software companies, startups, SaaS businesses, 8) Manufacturing - B2B industrial advertising, 9) Professional Services - Legal, accounting, consulting firms, 10) Entertainment & Media - Production houses, event companies. Each industry has unique advertising requirements that we understand deeply.</p>
                </div>
              </details>

              {/* FAQ 10 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-teal-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-bounce">🎨</span>
                    <span>What makes a successful advertising creative for Mumbai audience?</span>
                  </span>
                  <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Successful advertising creatives for Mumbai audiences include: 1) Cultural Relevance - Reflect Mumbai&apos;s diverse, cosmopolitan culture, 2) Local Language Mix - Hindi, Marathi, English based on target segment, 3) Fast-Paced Messaging - Match Mumbai&apos;s energetic lifestyle, 4) Visual Impact - Stand out in cluttered advertising environment, 5) Mobile-First Design - 70% Mumbai users browse on mobile, 6) Authenticity - Real stories resonate better than generic claims, 7) Emotional Connect - Tap into aspirations and dreams, 8) Clear CTA - Direct Mumbai audience to action, 9) Social Proof - Testimonials and reviews build trust, 10) Trendy & Contemporary - Stay current with Mumbai&apos;s evolving preferences. Our creative team crafts compelling ads that convert Mumbai audiences into customers.</p>
                </div>
              </details>

              {/* FAQ 11 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-amber-500/20 hover:border-amber-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-amber-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🤝</span>
                    <span>How does MyDigital Crown&apos;s advertising strategy differ from competitors in Mumbai?</span>
                  </span>
                  <svg className="w-7 h-7 text-amber-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>Our competitive advantages: 1) Data-First Approach - Every decision backed by analytics, not assumptions, 2) Mumbai Market Specialization - Deep understanding of local consumer behavior, 3) Transparent Pricing - No hidden costs, clear ROI projections, 4) Dedicated Account Manager - Single point of contact for your campaigns, 5) Multi-Channel Integration - Seamless coordination across all advertising platforms, 6) Creative Excellence - Award-winning design and copywriting team, 7) Technology Stack - Advanced tools for tracking, automation, and optimization, 8) Proven Results - 300% average ROI with 98% client retention, 9) Agile Methodology - Quick pivots based on performance data, 10) Long-term Partnership - We grow with your business, not just run campaigns. We don&apos;t just execute advertising - we become your growth partner.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Comprehensive Content Section - SEO Optimized */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            
            {/* Pulsing Dots Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-32 left-40 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 rounded-full text-white font-semibold text-sm mb-6 shadow-xl">
                  📚 Complete Guide to Advertising Strategy in Mumbai
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Master Advertising Strategy for Mumbai Market Success
                </h2>
                <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                  Comprehensive insights into creating winning advertising strategies that deliver 300% ROI in Mumbai&apos;s competitive market
                </p>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-1 gap-10">
                {/* What is Advertising Strategy */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-5xl">🎯</span>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">What is Advertising Strategy?</h3>
                      <div className="text-white/90 leading-relaxed space-y-4">
                        <p>Advertising strategy is a comprehensive plan that defines how businesses communicate their value proposition to target audiences through paid media channels. In Mumbai&apos;s bustling market of 20+ million consumers, a well-crafted advertising strategy is the difference between getting lost in the noise and becoming a household name.</p>
                        <p>At MyDigital Crown, we define advertising strategy as the strategic blueprint that aligns your business objectives with the right media channels, creative messaging, audience targeting, and budget allocation to achieve measurable results. It&apos;s not just about creating ads – it&apos;s about creating ads that convert.</p>
                        <p>A complete advertising strategy encompasses market research, competitor analysis, audience segmentation, channel selection, creative development, media planning, budget optimization, campaign execution, performance tracking, and continuous improvement. In Mumbai&apos;s diverse market, this requires deep understanding of local culture, language preferences, consumer behavior, and media consumption patterns.</p>
                        <p>Our proven advertising strategy framework has helped 150+ Mumbai businesses achieve an average 300% ROI, with some clients seeing 500%+ returns. We don&apos;t believe in one-size-fits-all approaches – every advertising strategy is customized based on your industry, target audience, business goals, and budget constraints.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Types of Advertising Strategies */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-5xl">📊</span>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">Types of Advertising Strategies for Mumbai Businesses</h3>
                      <div className="text-white/90 leading-relaxed space-y-4">
                        <p><strong className="text-yellow-400">1. Digital-First Advertising:</strong> With 70% of Mumbai consumers researching online before purchasing, digital advertising (Google Ads, Facebook Ads, Instagram, YouTube) delivers the highest ROI. We create integrated campaigns across search, social, display, and video platforms.</p>
                        <p><strong className="text-yellow-400">2. Brand Awareness Campaigns:</strong> Perfect for new businesses or product launches in Mumbai. Focus on reach, impressions, and brand recall through OOH (billboards, metro ads), TV, radio, and social media. Goal: Make your brand recognizable across Mumbai&apos;s diverse neighborhoods.</p>
                        <p><strong className="text-yellow-400">3. Performance Marketing:</strong> ROI-focused advertising with measurable KPIs. We track every rupee spent and optimize for conversions, leads, and sales. Ideal for e-commerce, B2B services, and direct-response businesses. Minimum 4:1 ROAS guaranteed.</p>
                        <p><strong className="text-yellow-400">4. Local Advertising Strategy:</strong> Target specific Mumbai areas (Andheri, Bandra, Chembur, Thane) with geo-targeted ads. Perfect for restaurants, retail stores, service businesses, and local brands wanting to dominate their neighborhood.</p>
                        <p><strong className="text-yellow-400">5. Seasonal & Festival Campaigns:</strong> Leverage Mumbai&apos;s vibrant festival calendar (Ganesh Chaturthi, Diwali, Christmas, Eid). These campaigns generate 200-300% higher engagement rates. We plan campaigns 3 months in advance for maximum impact.</p>
                        <p><strong className="text-yellow-400">6. Influencer & Content Marketing:</strong> Partner with Mumbai-based micro and macro influencers. Authentic storytelling resonates with Mumbai audiences. We manage end-to-end influencer campaigns with verified ROI tracking.</p>
                        <p><strong className="text-yellow-400">7. Retargeting & Remarketing:</strong> 98% of website visitors don&apos;t convert on first visit. We create sophisticated retargeting funnels to re-engage these prospects across Google, Facebook, and Instagram with personalized messaging.</p>
                        <p><strong className="text-yellow-400">8. B2B Advertising Strategy:</strong> LinkedIn advertising, industry publications, webinars, and account-based marketing for Mumbai&apos;s corporate sector. We help professional services, SaaS companies, and manufacturers generate qualified B2B leads.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits of Professional Advertising Strategy */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-5xl">💎</span>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">Benefits of Professional Advertising Strategy in Mumbai</h3>
                      <div className="text-white/90 leading-relaxed space-y-4">
                        <p><strong className="text-green-400">✓ Measurable ROI:</strong> Unlike traditional marketing, every advertising rupee is tracked. Our average client sees 300% ROI within 90 days. We provide weekly performance dashboards showing exactly what&apos;s working and what&apos;s not.</p>
                        <p><strong className="text-green-400">✓ Faster Market Entry:</strong> Launch your brand in Mumbai within 7 days with paid advertising. Organic growth takes 6-12 months, but advertising delivers immediate visibility and leads. Perfect for startups and time-sensitive launches.</p>
                        <p><strong className="text-green-400">✓ Precise Audience Targeting:</strong> Reach only your ideal customers based on demographics, interests, behavior, location, and device. Stop wasting budget on irrelevant audiences. Mumbai&apos;s diversity requires surgical targeting precision.</p>
                        <p><strong className="text-green-400">✓ Competitive Advantage:</strong> Outrank competitors in search results, social feeds, and display networks. We analyze competitor strategies and create campaigns that win market share. 85% of our clients report competitive dominance within 6 months.</p>
                        <p><strong className="text-green-400">✓ Scalable Growth:</strong> Start with ₹30,000/month and scale to ₹5 lakhs+ as campaigns prove profitable. Advertising is the only marketing channel that scales predictably with budget increases.</p>
                        <p><strong className="text-green-400">✓ Brand Building + Performance:</strong> Combine brand awareness (impressions, reach) with direct response (leads, sales) in integrated campaigns. Build your brand while generating revenue – the best of both worlds.</p>
                        <p><strong className="text-green-400">✓ Real-Time Optimization:</strong> Unlike print or TV ads that can&apos;t be changed, digital advertising allows real-time tweaks. We optimize campaigns daily based on performance data, ensuring continuous improvement.</p>
                        <p><strong className="text-green-400">✓ Multi-Device Reach:</strong> Mumbai consumers switch between mobile, desktop, and tablet. We create responsive ads that deliver seamless experiences across all devices, capturing customers wherever they are.</p>
                        <p><strong className="text-green-400">✓ Advanced Analytics:</strong> Understand customer journey from first click to final purchase. Attribution modeling reveals which touchpoints drive conversions. Use these insights for better business decisions.</p>
                        <p><strong className="text-green-400">✓ Crisis Management:</strong> Advertising helps manage brand reputation during crises. We create rapid-response campaigns to counter negative publicity and restore brand image quickly.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Advertising Strategy Process */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:scale-105">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-5xl">⚙️</span>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">MyDigital Crown&apos;s 8-Step Advertising Strategy Process</h3>
                      <div className="text-white/90 leading-relaxed space-y-4">
                        <p><strong className="text-blue-400">Step 1 - Discovery & Research (Week 1):</strong> We begin with comprehensive market research analyzing Mumbai&apos;s competitive landscape, target audience demographics, consumer behavior patterns, and industry trends. We audit your existing marketing assets and identify opportunities for advertising dominance.</p>
                        <p><strong className="text-blue-400">Step 2 - Audience Profiling (Week 1-2):</strong> Create detailed buyer personas representing your ideal customers in Mumbai. Include demographics (age, gender, income, location), psychographics (interests, values, lifestyle), online behavior (websites visited, social platforms used), and purchase triggers.</p>
                        <p><strong className="text-blue-400">Step 3 - Competitive Analysis (Week 2):</strong> Analyze what your competitors are advertising, on which platforms, with what messaging, and how much they&apos;re spending. We identify gaps in their strategy that we can exploit for your advantage.</p>
                        <p><strong className="text-blue-400">Step 4 - Channel Selection (Week 2-3):</strong> Choose optimal advertising channels based on where your audience spends time. We recommend media mix across Google Ads (search + display), Facebook/Instagram (feed + stories + reels), YouTube (video ads), LinkedIn (B2B), and OOH (high-traffic Mumbai locations).</p>
                        <p><strong className="text-blue-400">Step 5 - Creative Development (Week 3-4):</strong> Our award-winning creative team develops compelling ad copy, stunning visuals, engaging videos, and irresistible offers. Every creative element is A/B tested and optimized for Mumbai audiences. We create 10+ ad variations for continuous testing.</p>
                        <p><strong className="text-blue-400">Step 6 - Budget Planning (Week 4):</strong> Allocate advertising budget strategically across channels based on projected ROI. We provide transparent budget breakdowns showing spend allocation, expected reach, and revenue projections. Typical starting budgets: ₹30,000-₹1,00,000/month.</p>
                        <p><strong className="text-blue-400">Step 7 - Campaign Launch (Week 5):</strong> Launch campaigns with proper tracking pixels, conversion tags, and analytics setup. We set up custom dashboards showing real-time campaign performance. Initial campaigns run in &quot;learning mode&quot; for 7 days to gather optimization data.</p>
                        <p><strong className="text-blue-400">Step 8 - Optimization & Scaling (Ongoing):</strong> Daily monitoring of campaign metrics, weekly optimization meetings, and monthly strategy reviews. We pause underperforming ads, scale winners, and continuously test new audiences, creatives, and offers. This is where 300% ROI is achieved.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mumbai Market Insights */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:scale-105">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-5xl">🏙️</span>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">Mumbai Advertising Market Insights & Trends</h3>
                      <div className="text-white/90 leading-relaxed space-y-4">
                        <p><strong className="text-purple-400">Digital Adoption is Exploding:</strong> Mumbai has 18+ million internet users, with 85% accessing content on mobile devices. Social media penetration is 65%, making digital advertising more effective than traditional channels. COVID-19 accelerated digital adoption by 5 years.</p>
                        <p><strong className="text-purple-400">Regional Language Matters:</strong> While English dominates business communication, Hindi and Marathi ads generate 40% higher engagement rates for local businesses. We create multilingual campaigns that resonate with Mumbai&apos;s diverse population.</p>
                        <p><strong className="text-purple-400">Video Advertising Dominance:</strong> 78% of Mumbai internet users watch online videos daily. YouTube, Instagram Reels, and Facebook Videos deliver 3x higher engagement than static ads. Video advertising is no longer optional – it&apos;s essential.</p>
                        <p><strong className="text-purple-400">E-commerce Boom:</strong> Mumbai contributes 20% of India&apos;s e-commerce sales. Online shopping habits are permanent post-pandemic. E-commerce brands should allocate 60-70% of advertising budget to digital channels for maximum ROI.</p>
                        <p><strong className="text-purple-400">Influencer Marketing Growth:</strong> Mumbai influencers drive purchasing decisions. 63% of Mumbai consumers trust influencer recommendations more than brand advertising. Micro-influencers (10K-100K followers) deliver higher ROI than celebrities.</p>
                        <p><strong className="text-purple-400">Privacy & Data Regulations:</strong> iOS 14+ updates and GDPR-like regulations are changing advertising. First-party data collection (email lists, CRM) is now critical. We help clients build owned audiences to reduce platform dependency.</p>
                        <p><strong className="text-purple-400">Premium vs Mass Market:</strong> Mumbai has distinct market segments – luxury consumers in South Mumbai (Colaba, Malabar Hill, Worli) and mass market in suburbs (Thane, Virar, Kalyan). Advertising strategy must align with target segment&apos;s preferences and purchasing power.</p>
                        <p><strong className="text-purple-400">Commuter Advertising Opportunities:</strong> Mumbai&apos;s 7.5 million daily commuters spend 2+ hours traveling. Metro stations, local trains, and buses offer captive audiences. We create integrated campaigns combining OOH and mobile retargeting for maximum impact.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose MyDigital Crown */}
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-3xl p-10 border-2 border-yellow-400/50 shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500 hover:scale-105">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-5xl">🏆</span>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">Why Choose MyDigital Crown for Advertising Strategy in Mumbai?</h3>
                      <div className="text-white/90 leading-relaxed space-y-4">
                        <p><strong className="text-yellow-300">8+ Years Mumbai Experience:</strong> We&apos;ve been creating winning advertising strategies for Mumbai businesses since 2016. We know what works in this market because we&apos;ve tested everything. Our playbooks are built on real data, not theory.</p>
                        <p><strong className="text-yellow-300">Proven 300% Average ROI:</strong> Our clients don&apos;t just get advertising – they get profitable advertising. Every campaign is optimized for maximum ROI. If a campaign isn&apos;t profitable by month 3, we restructure at no additional cost.</p>
                        <p><strong className="text-yellow-300">150+ Mumbai Brands Served:</strong> From startups to established enterprises, we&apos;ve worked with businesses across 20+ industries. This cross-industry expertise means we bring fresh perspectives and proven tactics to your campaigns.</p>
                        <p><strong className="text-yellow-300">Certified Experts Team:</strong> Our advertising strategists hold Google Ads, Facebook Blueprint, HubSpot, and Analytics certifications. We invest ₹5 lakhs+ annually in team training to stay ahead of platform updates and industry trends.</p>
                        <p><strong className="text-yellow-300">Transparent Reporting:</strong> Access real-time campaign dashboards 24/7. Weekly performance emails. Monthly strategy calls. No hidden metrics. No jargon. Just clear insights on what&apos;s driving results and what&apos;s being optimized.</p>
                        <p><strong className="text-yellow-300">No Lock-in Contracts:</strong> We earn your business every month through results, not contracts. Cancel anytime with 30 days notice. 98% client retention rate proves our campaigns deliver consistent value.</p>
                        <p><strong className="text-yellow-300">Technology Advantage:</strong> We use enterprise-grade advertising tools (SEMrush, Ahrefs, HubSpot, Google Analytics 4, Facebook Analytics, CallRail) to gain competitive intelligence and optimize campaigns faster than competitors.</p>
                        <p><strong className="text-yellow-300">Quick Turnaround:</strong> Campaign launch within 7 days of onboarding. Other agencies take 4-6 weeks. Speed matters in competitive Mumbai market – delays cost you customers.</p>
                        <p><strong className="text-yellow-300">Creative Excellence:</strong> Award-winning design and copywriting team. We create ads that don&apos;t look like ads – they look like content people want to engage with. Higher engagement = lower costs = better ROI.</p>
                        <p><strong className="text-yellow-300">Free Consultation:</strong> Not sure if advertising is right for you? Book a free 30-minute strategy call. We&apos;ll analyze your business, recommend optimal channels, and project realistic ROI – with zero obligation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 border-2 border-white/30 shadow-2xl text-center">
                  <h3 className="text-4xl font-bold text-white mb-6">Ready to Dominate Mumbai Market with Winning Advertising Strategy?</h3>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Join 150+ Mumbai businesses generating 300% ROI with our proven advertising strategies. Free consultation. No obligations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="tel:+918369511877" className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>Call +91-83695-11877</span>
                    </a>
                    <a href="#enquiry-form" className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                      <span>Get Free Strategy</span>
                    </a>
                  </div>
                </div>
              </div>
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
                  Schedule a free consultation with our advertising strategy experts at any of our three locations - Mumbai, Varanasi, or Bangalore. We&apos;re here to help transform your business with data-driven strategies.
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
