import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import TrustedBrands from '@/app/components/TrustedBrands'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Content Marketing Mumbai | 1000+ Pieces | 300% ROI Guaranteed",
  description: "Content Marketing Mumbai. 1000+ Content Pieces Created | 300% ROI Guaranteed | Expert Blog Writing & Content Strategy. Call +91-83695-11877",
  keywords: [
    // Primary Keywords
    'content marketing in mumbai',
    'content marketing agency mumbai',
    'content marketing services mumbai',
    'content marketing company mumbai',
    
    // Service-Specific Keywords
    'blog writing services mumbai',
    'blog content writing mumbai',
    'seo content writing mumbai',
    'website copywriting mumbai',
    'content creation mumbai',
    'content strategy mumbai',
    'social media content mumbai',
    'email marketing content mumbai',
    'content writer mumbai',
    'professional copywriter mumbai',
    
    // Content Types
    'blog post writing mumbai',
    'article writing services mumbai',
    'web content writing mumbai',
    'product description writing mumbai',
    'landing page copywriting mumbai',
    'email newsletter writing mumbai',
    'social media posts mumbai',
    'long form content mumbai',
    'whitepaper writing mumbai',
    'case study writing mumbai',
    
    // Location-Based Keywords
    'content marketing chembur',
    'content marketing south mumbai',
    'content marketing andheri',
    'content marketing bandra',
    'top content marketing agency mumbai',
    'best content marketing mumbai',
    'content marketing maharashtra',
    
    // Business-Specific Keywords
    'startup content marketing mumbai',
    'ecommerce content marketing mumbai',
    'b2b content marketing mumbai',
    'saas content marketing mumbai',
    'content marketing for startups',
    'small business content marketing mumbai',
    
    // Service Features
    'seo optimized content mumbai',
    'plagiarism free content writing',
    'original content creation mumbai',
    'content marketing strategy',
    'content calendar planning',
    'content distribution mumbai',
    'content performance tracking',
    
    // Industry-Specific
    'healthcare content marketing',
    'finance content writing mumbai',
    'tech content marketing',
    'real estate content writing',
    'education content marketing',
    
    // Related Services
    'content marketing consultant mumbai',
    'content marketing expert',
    'content marketing specialist',
    'digital content marketing',
    'inbound marketing mumbai',
    'content marketing agency near me',
    'affordable content marketing mumbai',
    'professional content marketing services'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Content Marketing Services',
  classification: 'Content Strategy & Blog Writing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Content Marketing In Mumbai | #1 Content Marketing Agency | MyDigital Crown',
    description: 'Top Content Marketing In Mumbai. 1000+ Content Pieces Created, 300% ROI Guaranteed, Expert Blog Writing & Content Strategy. Call +91-83695-11877',
    url: 'https://mydigitalcrown.in/services/content-marketing',
    siteName: 'MyDigital Crown',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Content Marketing Services Mumbai - MyDigital Crown',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Marketing In Mumbai | #1 Content Marketing Agency | MyDigital Crown',
    description: 'Top Content Marketing In Mumbai. 1000+ Content Pieces Created, 300% ROI Guaranteed, Expert Blog Writing & Content Strategy. Call +91-83695-11877',
    images: ['https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=630&fit=crop'],
    creator: '@mydigitalcrown',
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
  alternates: {
    canonical: 'https://mydigitalcrown.in/services/content-marketing',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

// Comprehensive Schema Markup for SEO, VSO, and ASO
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    // Service Schema
    {
      "@type": "Service",
      "name": "Content Marketing In Mumbai",
      "description": "Professional content marketing services in Mumbai including blog writing, SEO content creation, social media content, email marketing, website copywriting, and content strategy. 1000+ content pieces created with 300% ROI guaranteed.",
      "provider": {
        "@type": "Organization",
        "name": "MyDigital Crown",
        "url": "https://mydigitalcrown.in"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Content Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Blog Writing Services",
              "description": "SEO-optimized blog posts that drive traffic and engage readers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Copywriting",
              "description": "Compelling web copy that converts visitors into customers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Content",
              "description": "Engaging social media posts that build community and drive engagement"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Email Marketing Content",
              "description": "Persuasive email campaigns that nurture leads and drive conversions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Long-Form Content",
              "description": "In-depth guides, whitepapers, and eBooks that showcase expertise"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Content Strategy",
              "description": "Comprehensive content plans aligned with business goals"
            }
          }
        ]
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Businesses seeking content marketing services in Mumbai",
        "geographicArea": {
          "@type": "AdministrativeArea",
          "name": "Mumbai, Maharashtra, India"
        }
      }
    },
    
    // Organization Schema
    {
      "@type": "Organization",
      "name": "MyDigital Crown",
      "url": "https://mydigitalcrown.in",
      "logo": "https://mydigitalcrown.in/logo.png",
      "description": "Premier content marketing agency in Mumbai specializing in blog writing, SEO content, social media content, and comprehensive content strategies.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chembur",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400071",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-83695-11877",
        "contactType": "Customer Service",
        "email": "info@mydigitalcrown.in",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      },
      "sameAs": [
        "https://www.facebook.com/mydigitalcrown",
        "https://www.instagram.com/mydigitalcrown",
        "https://twitter.com/mydigitalcrown",
        "https://www.linkedin.com/company/mydigitalcrown"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "320",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    
    // WebPage Schema
    {
      "@type": "WebPage",
      "name": "Content Marketing In Mumbai | #1 Content Marketing Agency",
      "description": "Top Content Marketing In Mumbai. 1000+ Content Pieces Created, 300% ROI Guaranteed, Expert Blog Writing & Content Strategy.",
      "url": "https://mydigitalcrown.in/services/content-marketing",
      "breadcrumb": {
        "@type": "BreadcrumbList",
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
              "@id": "https://mydigitalcrown.in/services/content-marketing",
              "name": "Content Marketing In Mumbai"
            }
          }
        ]
      }
    },
    
    // BreadcrumbList Schema
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mydigitalcrown.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://mydigitalcrown.in/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Content Marketing In Mumbai",
          "item": "https://mydigitalcrown.in/services/content-marketing"
        }
      ]
    },
    
    // FAQPage Schema
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What content marketing services does MyDigital Crown offer in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive content marketing services including blog writing, website copywriting, social media content creation, email marketing campaigns, long-form content (whitepapers, eBooks, guides), product descriptions, landing page copy, and complete content strategy planning. All content is 100% original, SEO-optimized, and tailored to your brand voice and business goals."
          }
        },
        {
          "@type": "Question",
          "name": "How much does content marketing cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content marketing packages in Mumbai range from ₹15,000 to ₹2,00,000 per month depending on content volume and complexity. Blog posts start at ₹2,000 per article, social media content packages from ₹10,000/month, email marketing campaigns from ₹8,000/month, and comprehensive content strategy services from ₹50,000/month. We offer 45% discount on annual packages with guaranteed ROI."
          }
        },
        {
          "@type": "Question",
          "name": "How does content marketing generate ROI for businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content marketing drives ROI through organic traffic growth, lead generation, brand authority building, and customer nurturing. Our SEO-optimized content attracts qualified visitors, establishes your expertise, and guides prospects through the buyer's journey. Clients typically see 3X ROI within 6 months through increased website traffic, higher search rankings, more qualified leads, and improved conversion rates from engaged audiences."
          }
        },
        {
          "@type": "Question",
          "name": "What industries does your content marketing agency serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve diverse industries including technology, healthcare, finance, real estate, education, e-commerce, SaaS, manufacturing, hospitality, legal services, and professional services. Our content writers have subject matter expertise across 20+ industries, ensuring technically accurate, engaging content that resonates with your target audience and demonstrates industry knowledge."
          }
        },
        {
          "@type": "Question",
          "name": "What is your blog writing process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our blog writing process includes: (1) Keyword research and topic ideation based on search intent, (2) Outline creation and approval, (3) Professional writing with SEO optimization, internal linking, and engaging storytelling, (4) Quality review, plagiarism check, and SEO audit, (5) Client review and revisions, (6) Final delivery with meta descriptions and featured images. Turnaround time is 5-7 days per blog post with unlimited revisions included."
          }
        },
        {
          "@type": "Question",
          "name": "How do you optimize content for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our SEO content optimization includes comprehensive keyword research, strategic keyword placement in titles, headings, and body text, semantic keyword integration, optimal content structure with H2/H3 headings, internal and external linking, meta title and description optimization, image alt text, mobile-friendly formatting, readability optimization, and featured snippet targeting. All content follows E-E-A-T guidelines for maximum search visibility."
          }
        },
        {
          "@type": "Question",
          "name": "Do you create social media content calendars?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we create comprehensive social media content calendars covering 30-90 days with platform-specific posts for Facebook, Instagram, LinkedIn, Twitter, and YouTube. Each calendar includes post copy, captions, hashtag strategies, visual content recommendations, posting schedule, engagement tactics, and performance tracking metrics. Monthly packages include 20-60 posts across all platforms with analytics reports."
          }
        },
        {
          "@type": "Question",
          "name": "What makes your content marketing different from competitors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our unique approach combines expert industry writers, data-driven content strategy, rigorous SEO optimization, 100% original plagiarism-free content, unlimited revisions, dedicated account managers, performance tracking and reporting, multi-channel distribution strategy, and guaranteed results. We've created 1000+ successful content pieces with proven 300% average ROI, backed by our satisfaction guarantee and transparent communication throughout."
          }
        },
        {
          "@type": "Question",
          "name": "How do you develop a content strategy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content strategy development includes: audience research and persona creation, competitive content analysis, keyword gap analysis, content audit of existing assets, content pillar and topic cluster planning, editorial calendar creation, distribution channel mapping, KPI setting and measurement framework, content promotion strategy, and ongoing optimization. We align all content with your business goals, sales funnel stages, and customer journey touchpoints for maximum impact."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with content marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting started is simple: (1) Contact us via call +91-83695-11877 or website form, (2) Schedule a free consultation to discuss your goals and content needs, (3) Receive a customized content marketing proposal with pricing, (4) Sign agreement and complete onboarding questionnaire, (5) Kick-off meeting to align on brand voice, topics, and strategy, (6) Receive your first content within 7-10 days, (7) Ongoing collaboration with monthly reviews and optimization."
          }
        },
        {
          "@type": "Question",
          "name": "What is the typical turnaround time for content delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Turnaround times vary by content type: blog posts (5-7 days), website pages (7-10 days), social media content batches (3-5 days), email campaigns (5-7 days), whitepapers/eBooks (15-21 days), and content strategy documents (10-14 days). Rush delivery available for 20% additional fee. We maintain consistent quality regardless of timeline and include unlimited revisions in all packages."
          }
        },
        {
          "@type": "Question",
          "name": "How do you measure content marketing success?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We track comprehensive metrics including organic traffic growth, keyword ranking improvements, engagement rates (time on page, bounce rate, scroll depth), social shares and comments, lead generation conversions, email open and click-through rates, backlinks acquired, domain authority improvements, and revenue attribution. Monthly analytics reports show content performance, ROI calculations, and optimization recommendations for continuous improvement."
          }
        }
      ]
    },
    
    // LocalBusiness Schema
    {
      "@type": "LocalBusiness",
      "name": "MyDigital Crown - Content Marketing Agency Mumbai",
      "image": "https://mydigitalcrown.in/logo.png",
      "description": "Premier content marketing agency in Mumbai offering blog writing, SEO content, social media content, email marketing, and content strategy services.",
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
      "url": "https://mydigitalcrown.in/services/content-marketing",
      "telephone": "+91-83695-11877",
      "email": "info@mydigitalcrown.in",
      "priceRange": "₹₹",
      "openingHours": "Mo-Sa 09:00-18:00",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "320"
      }
    },
    
    // Review Schema
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "Service",
        "name": "Content Marketing Services"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Kumar"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "MyDigital Crown transformed our content marketing strategy. Their blog writing and SEO content services increased our organic traffic by 400% in just 6 months. Highly professional team with excellent turnaround times."
    },
    
    // AggregateRating Schema
    {
      "@type": "AggregateRating",
      "itemReviewed": {
        "@type": "Service",
        "name": "Content Marketing In Mumbai",
        "description": "Professional content marketing services"
      },
      "ratingValue": "4.9",
      "reviewCount": "320",
      "bestRating": "5",
      "worstRating": "1"
    },
    
    // HowTo Schema
    {
      "@type": "HowTo",
      "name": "How to Get Started with Content Marketing in Mumbai",
      "description": "Step-by-step process to launch successful content marketing campaigns with MyDigital Crown",
      "totalTime": "PT7D",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": "15000"
      },
      "step": [
        {
          "@type": "HowToStep",
          "name": "Free Consultation",
          "text": "Contact us for a free consultation to discuss your content marketing goals, target audience, and current challenges. We analyze your existing content and competitive landscape.",
          "position": 1
        },
        {
          "@type": "HowToStep",
          "name": "Strategy Development",
          "text": "Receive a customized content marketing strategy including content pillars, editorial calendar, SEO keyword targeting, distribution channels, and KPIs aligned with business objectives.",
          "position": 2
        },
        {
          "@type": "HowToStep",
          "name": "Content Creation",
          "text": "Our expert writers create high-quality, SEO-optimized content including blog posts, web pages, social media content, and email campaigns tailored to your brand voice.",
          "position": 3
        },
        {
          "@type": "HowToStep",
          "name": "Performance Optimization",
          "text": "Continuous monitoring, analytics reporting, and content optimization based on performance data to maximize ROI and achieve your marketing goals.",
          "position": 4
        }
      ]
    },
    
    // Article Schema
    {
      "@type": "Article",
      "headline": "Content Marketing In Mumbai - Complete Guide to Blog Writing & Content Strategy",
      "description": "Comprehensive guide to content marketing services in Mumbai including blog writing, SEO content, social media marketing, and content strategy.",
      "author": {
        "@type": "Organization",
        "name": "MyDigital Crown"
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
      "dateModified": "2025-01-10"
    },
    
    // ItemList Schema
    {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Blog Writing Services",
          "description": "SEO-optimized blog posts that drive organic traffic"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Website Copywriting",
          "description": "Compelling web copy that converts visitors"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Social Media Content",
          "description": "Engaging social posts that build community"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Email Marketing Content",
          "description": "Persuasive email campaigns that nurture leads"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Long-Form Content",
          "description": "In-depth guides, whitepapers, and eBooks"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Content Strategy",
          "description": "Comprehensive content plans for business growth"
        }
      ]
    },
    
    // Offer Schema
    {
      "@type": "Offer",
      "name": "Complete Content Marketing Package",
      "description": "Comprehensive content marketing services with 45% discount - includes blog writing, social media content, email marketing, and content strategy",
      "price": "15000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01",
      "priceValidUntil": "2025-12-31",
      "seller": {
        "@type": "Organization",
        "name": "MyDigital Crown"
      },
      "itemOffered": {
        "@type": "Service",
        "name": "Content Marketing Services"
      }
    },
    
    // VideoObject Schema
    {
      "@type": "VideoObject",
      "name": "Content Marketing Services Mumbai - MyDigital Crown",
      "description": "Learn how MyDigital Crown's content marketing services can transform your business with expert blog writing, SEO content, and content strategy.",
      "thumbnailUrl": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=630&fit=crop",
      "uploadDate": "2024-01-15",
      "contentUrl": "https://mydigitalcrown.in/services/content-marketing"
    },
    
    // Course Schema
    {
      "@type": "Course",
      "name": "Content Marketing Mastery",
      "description": "Learn professional content marketing strategies from industry experts at MyDigital Crown",
      "provider": {
        "@type": "Organization",
        "name": "MyDigital Crown"
      }
    },
    
    // SpecialAnnouncement Schema
    {
      "@type": "SpecialAnnouncement",
      "name": "Limited Time Content Marketing Offer",
      "text": "Get 45% off on all content marketing packages this month. Complete content marketing solutions including blog writing, social media content, email marketing, and strategy.",
      "datePosted": "2025-01-01",
      "expires": "2025-01-31",
      "category": "https://www.wikidata.org/wiki/Q62652344"
    }
  ]
};

export default function ContentMarketing() {
  return (
    <>
      <Navbar />
      
      {/* Schema Markup Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Noscript fallback for schema */}
      <noscript>
        <div itemScope itemType="https://schema.org/LocalBusiness">
          <span itemProp="name">MyDigital Crown - Content Marketing Agency Mumbai</span>
          <span itemProp="telephone">+91-83695-11877</span>
          <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">Mumbai</span>,
            <span itemProp="addressRegion">Maharashtra</span>
          </span>
        </div>
      </noscript>
      
      {/* Hero Section */}
      <section className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 to-violet-700/95"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s Top Content Marketing Agency</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                Content Marketing In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto font-bold leading-relaxed">
                  ✍️ Create Content That <span className="text-violet-300">Engages</span>, <span className="text-purple-300">Educates</span> & <span className="text-fuchsia-300">Converts</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-semibold leading-relaxed">
                  Blog Writing | SEO Content | Social Media | Email Marketing
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">📝</span>
                    <span>Start Content Journey</span>
                  </span>
                </Link>
                <a 
                  href="tel:+918369511877" 
                  className="group relative overflow-hidden bg-white text-blue-600 border-4 border-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl animate-bounce">📞</span>
                    <span>Call: +91-83695-11877</span>
                  </span>
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white max-w-6xl mx-auto">
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-indigo-100 to-white bg-clip-text mb-3">1000+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Content Pieces</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-indigo-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Original</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-indigo-100 to-white bg-clip-text mb-3">SEO</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Optimized</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-indigo-100 to-white bg-clip-text mb-3">24/7</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Support</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <EnquiryForm />

      {/* Voice Search Optimization - Quick Answers Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎤</span>
              Quick Answers - Voice Search Optimized
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Content Marketing Questions</span> Answered
            </h2>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Answer 1 */}
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl"
              itemScope 
              itemType="https://schema.org/Question"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center" itemProp="name">
                Where is the best content marketing agency in Mumbai?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text" className="text-gray-600 text-center leading-relaxed">
                  MyDigital Crown in Chembur, Mumbai is the #1 content marketing agency with 1000+ content pieces created, 300% average ROI, and expert blog writing, SEO content, social media, and email marketing services. Available 24/7 at +91-83695-11877.
                </div>
              </div>
            </div>

            {/* Quick Answer 2 */}
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-xl"
              itemScope 
              itemType="https://schema.org/Question"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center" itemProp="name">
                How much does content marketing cost in Mumbai?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text" className="text-gray-600 text-center leading-relaxed">
                  Content marketing packages range from ₹15,000 to ₹2,00,000/month. Blog posts start at ₹2,000, social media packages from ₹10,000/month, and email marketing from ₹8,000/month. Get 45% off on annual packages with guaranteed ROI.
                </div>
              </div>
            </div>

            {/* Quick Answer 3 */}
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-100 hover:border-indigo-300 transition-all hover:shadow-xl"
              itemScope 
              itemType="https://schema.org/Question"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">⏱️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center" itemProp="name">
                How long does content marketing take to show results?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text" className="text-gray-600 text-center leading-relaxed">
                  Most businesses see initial results in 2-3 months with consistent content publishing. Significant traffic growth and lead generation typically occur at 4-6 months. Long-term SEO benefits and brand authority building continue improving for 12+ months.
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <span className="mr-3">🚀</span>
              <span>Get Your Free Content Strategy</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Content Marketing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎯</span>
              Why Content Marketing Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Power Your Business with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Quality Content</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Content marketing is the most effective way to attract, engage, and convert your target audience. Quality content builds trust, establishes authority, and drives measurable results.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop" 
                    alt="Content Marketing Services Mumbai - Blog Writing"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Drive Organic Traffic</h3>
                    <p className="text-gray-600">SEO-optimized content attracts qualified visitors and improves search rankings.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Build Authority</h3>
                    <p className="text-gray-600">Establish your brand as an industry thought leader with valuable content.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Engage Audiences</h3>
                    <p className="text-gray-600">Create meaningful connections through storytelling and valuable information.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Generate Leads</h3>
                    <p className="text-gray-600">Convert readers into customers with strategic calls-to-action and nurturing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Marketing Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">📝</span>
              <span>Our Content Marketing Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">Complete</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">Content Solutions</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blog Writing</h3>
              <p className="text-gray-600 mb-4">SEO-optimized blog posts that drive traffic, engage readers, and establish authority.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ SEO Optimization</li>
                <li className="flex items-center gap-2">✓ Keyword Research</li>
                <li className="flex items-center gap-2">✓ Engaging Topics</li>
                <li className="flex items-center gap-2">✓ Regular Publishing</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 border-2 border-violet-200 hover:border-violet-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Copywriting</h3>
              <p className="text-gray-600 mb-4">Compelling web copy that converts visitors into customers and ranks well.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Homepage Copy</li>
                <li className="flex items-center gap-2">✓ Product Descriptions</li>
                <li className="flex items-center gap-2">✓ Landing Pages</li>
                <li className="flex items-center gap-2">✓ About Us Pages</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Content</h3>
              <p className="text-gray-600 mb-4">Engaging social media posts that build community and drive engagement.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Post Creation</li>
                <li className="flex items-center gap-2">✓ Caption Writing</li>
                <li className="flex items-center gap-2">✓ Hashtag Strategy</li>
                <li className="flex items-center gap-2">✓ Content Calendar</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-3xl p-8 border-2 border-fuchsia-200 hover:border-fuchsia-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Marketing</h3>
              <p className="text-gray-600 mb-4">Persuasive email campaigns that nurture leads and drive conversions.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Newsletter Content</li>
                <li className="flex items-center gap-2">✓ Email Sequences</li>
                <li className="flex items-center gap-2">✓ Subject Lines</li>
                <li className="flex items-center gap-2">✓ CTA Optimization</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📄</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Long-Form Content</h3>
              <p className="text-gray-600 mb-4">In-depth guides, whitepapers, and eBooks that showcase expertise.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Comprehensive Guides</li>
                <li className="flex items-center gap-2">✓ Whitepapers</li>
                <li className="flex items-center gap-2">✓ Case Studies</li>
                <li className="flex items-center gap-2">✓ eBooks</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="group relative bg-gradient-to-br from-violet-50 to-indigo-50 rounded-3xl p-8 border-2 border-violet-200 hover:border-violet-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Strategy</h3>
              <p className="text-gray-600 mb-4">Comprehensive content plans aligned with your business goals.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Audience Research</li>
                <li className="flex items-center gap-2">✓ Content Planning</li>
                <li className="flex items-center gap-2">✓ Performance Tracking</li>
                <li className="flex items-center gap-2">✓ Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">⚙️</span>
              <span>Our Process</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">How We Create</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">Winning Content</span>
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                1
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Research & Planning</h3>
                <p className="text-gray-600">Understand your audience, goals, and competitive landscape.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                2
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Content Creation</h3>
                <p className="text-gray-600">Craft high-quality, engaging, and SEO-optimized content.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                3
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Review & Optimize</h3>
                <p className="text-gray-600">Edit, refine, and optimize for maximum impact and performance.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                4
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Publish & Promote</h3>
                <p className="text-gray-600">Distribute content and amplify reach across multiple channels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-fuchsia-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <span className="text-2xl mr-3 animate-pulse">⭐</span>
              <span className="text-lg">Why Choose MyDigital Crown</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Your Content Marketing <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">Success Partners</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-violet-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">✍️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Expert Writers</h3>
                <p className="text-blue-100 leading-relaxed">Professional content creators with expertise across multiple industries and formats.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">SEO-Driven</h3>
                <p className="text-blue-100 leading-relaxed">Every piece optimized for search engines to drive organic traffic and rankings.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-fuchsia-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">100% Original</h3>
                <p className="text-blue-100 leading-relaxed">Plagiarism-free, unique content created from scratch for your brand.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Data-Driven</h3>
                <p className="text-blue-100 leading-relaxed">Strategy backed by research, analytics, and performance metrics.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-violet-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⏰</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Timely Delivery</h3>
                <p className="text-blue-100 leading-relaxed">Consistent, reliable content delivery that meets your publishing schedule.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🤝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Full Collaboration</h3>
                <p className="text-blue-100 leading-relaxed">Work closely with you to align content with your brand voice and goals.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Content Marketing?
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Let&apos;s create content that attracts, engages, and converts your ideal customers.
              </p>
              <Link 
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 inline-flex items-center justify-center transform hover:scale-110"
              >
                <span className="relative z-10 flex items-center">
                  <span className="text-2xl mr-3">🚀</span>
                  <span>Start Content Strategy</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎁</span>
              Special Launch Offer
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Complete Content Marketing Package<br />
              <span className="text-violet-300">With 45% OFF</span> This Month
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Blog posts, website copy, social media content, email marketing, and content strategy. Everything you need to succeed!
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-300 mb-2">45%</div>
                <div className="text-blue-100">Discount</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-300 mb-2">1000+</div>
                <div className="text-blue-100">Content Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-300 mb-2">100%</div>
                <div className="text-blue-100">Original</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-300 mb-2">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 hover:-translate-y-1">
                <span className="mr-3">Get Your Package</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>

              <a href="tel:+918369511877" className="group inline-flex items-center bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call: +91-83695-11877</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section for ASO */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">❓</span>
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">Everything You Need</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">To Know About Content Marketing</span>
            </h2>
          </header>

          <div className="grid gap-6 max-w-5xl mx-auto">
            {/* FAQ 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-blue-600 flex-shrink-0">Q1.</span>
                <span>What content marketing services does MyDigital Crown offer in Mumbai?</span>
              </h3>
              <div className="ml-12 text-gray-700 leading-relaxed space-y-3">
                <p>
                  We offer comprehensive content marketing services including blog writing, website copywriting, social media content creation, email marketing campaigns, long-form content (whitepapers, eBooks, guides), product descriptions, landing page copy, and complete content strategy planning. All content is 100% original, SEO-optimized, and tailored to your brand voice and business goals.
                </p>
                <p>
                  Our services cover every stage of the content lifecycle from strategy and creation to distribution and performance optimization. We work across all industries and content formats to help businesses build authority, drive traffic, and generate qualified leads through strategic content marketing.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 shadow-lg border-2 border-violet-100 hover:border-violet-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-violet-600 flex-shrink-0">Q2.</span>
                <span>How much does content marketing cost in Mumbai?</span>
              </h3>
              <div className="ml-12 text-gray-700 leading-relaxed space-y-3">
                <p>
                  Content marketing packages in Mumbai range from ₹15,000 to ₹2,00,000 per month depending on content volume and complexity. Blog posts start at ₹2,000 per article (800-1500 words), social media content packages from ₹10,000/month (20-30 posts), email marketing campaigns from ₹8,000/month, and comprehensive content strategy services from ₹50,000/month.
                </p>
                <p>
                  We offer flexible pricing with monthly, quarterly, and annual packages. Annual contracts receive 45% discount with guaranteed ROI. Custom packages available for enterprise clients with unique requirements. All packages include unlimited revisions, dedicated account manager, and performance reporting.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-8 shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600 flex-shrink-0">Q3.</span>
                <span>How does content marketing generate ROI for businesses?</span>
              </h3>
              <div className="ml-12 text-gray-700 leading-relaxed space-y-3">
                <p>
                  Content marketing drives ROI through multiple channels: organic traffic growth from SEO-optimized content, lead generation through strategic calls-to-action, brand authority building that increases trust and conversions, and customer nurturing that shortens sales cycles. Our SEO-optimized content attracts qualified visitors actively searching for your solutions.
                </p>
                <p>
                  Clients typically see 3X ROI within 6 months through increased website traffic (average 250% growth), higher search rankings (first page for 15+ keywords), more qualified leads (40% increase in form submissions), and improved conversion rates from engaged, educated audiences. We track all metrics monthly with transparent reporting.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-2xl p-8 shadow-lg border-2 border-fuchsia-100 hover:border-fuchsia-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-fuchsia-600 flex-shrink-0">Q4.</span>
                <span>What industries does your content marketing agency serve?</span>
              </h3>
              <div className="ml-12 text-gray-700 leading-relaxed space-y-3">
                <p>
                  We serve diverse industries including technology, healthcare, finance, real estate, education, e-commerce, SaaS, manufacturing, hospitality, legal services, professional services, automotive, fashion, food & beverage, fitness & wellness, home services, retail, B2B services, nonprofits, and startups across all sectors.
                </p>
                <p>
                  Our content writers have subject matter expertise across 20+ industries, ensuring technically accurate, engaging content that resonates with your target audience and demonstrates industry knowledge. We research your specific niche, competitors, and audience pain points to create highly relevant, valuable content.
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-indigo-100 hover:border-indigo-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-indigo-600 flex-shrink-0">Q5.</span>
                <span>What is your blog writing process?</span>
              </h3>
              <div className="ml-12 text-gray-700 leading-relaxed space-y-3">
                <p>
                  Our blog writing process includes: (1) Keyword research and topic ideation based on search intent and audience interests, (2) Detailed outline creation and client approval, (3) Professional writing with SEO optimization, strategic keyword placement, internal linking, and engaging storytelling, (4) Quality review including plagiarism check (Copyscape), grammar check (Grammarly), and SEO audit.
                </p>
                <p>
                  After internal review, we submit for client review and revisions (unlimited), then final delivery with meta titles, meta descriptions, featured images, and publishing instructions. Turnaround time is 5-7 business days per blog post. Rush delivery available for 20% additional fee with 48-72 hour turnaround.
                </p>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-blue-600 flex-shrink-0">Q6.</span>
                <span>How do you optimize content for SEO?</span>
              </h3>
              <div className="ml-12 text-gray-700 leading-relaxed space-y-3">
                <p>
                  Our SEO content optimization includes comprehensive keyword research using tools like Ahrefs, SEMrush, and Google Keyword Planner, strategic keyword placement in titles, headings (H1, H2, H3), and body text, semantic keyword integration and LSI keywords, optimal content structure with clear heading hierarchy, internal linking to relevant pages, external links to authoritative sources, meta title and description optimization (under 60 and 160 characters), image alt text and compression, mobile-friendly formatting.
                </p>
                <p>
                  We also optimize for readability with short paragraphs and bullet points, featured snippet targeting with question-based headings and concise answers, and follow E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) guidelines. All content is checked for keyword density, readability score (Flesch Reading Ease 60+), and on-page SEO factors before delivery.
                </p>
              </div>
            </div>

            {/* FAQ 7 */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-2 border-violet-100 hover:border-violet-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-violet-600 flex-shrink-0">Q7.</span>
                <span>Do you create social media content calendars?</span>
              </h3>
              <div className="ml-12 text-gray-700 leading-relaxed space-y-3">
                <p>
                  Yes, we create comprehensive social media content calendars covering 30-90 days with platform-specific posts for Facebook, Instagram, LinkedIn, Twitter, and YouTube. Each calendar includes engaging post copy, compelling captions, strategic hashtag strategies (#research-based), visual content recommendations (images, graphics, videos), optimal posting schedule based on audience activity, engagement tactics (questions, polls, CTAs), and performance tracking metrics.
                </p>
                <p>
                  Monthly packages include 20-60 posts across all platforms with weekly analytics reports. We align social media content with your overall content marketing strategy, seasonal campaigns, product launches, and business objectives. All posts are brand-voice consistent and include A/B testing for optimal performance.
                </p>
              </div>
            </div>

            {/* FAQ 8 */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600 flex-shrink-0">Q8.</span>
                <span>What makes your content marketing different from competitors?</span>
              </h3>
              <div className="ml-12 text-gray-700 leading-relaxed space-y-3">
                <p>
                  Our unique approach combines expert industry writers with 5+ years experience, data-driven content strategy based on analytics and competitor research, rigorous SEO optimization with proven ranking methods, 100% original plagiarism-free content (verified by Copyscape), unlimited revisions until you&apos;re 100% satisfied, dedicated account managers for personalized service, comprehensive performance tracking and monthly reporting, multi-channel distribution strategy (blog, social, email, PR), guaranteed results with 300% average ROI.
                </p>
                <p>
                  We&apos;ve created 1000+ successful content pieces across 20+ industries with proven track record of driving traffic growth, lead generation, and revenue increases. Our transparent communication, collaborative approach, and commitment to your success sets us apart. All content is backed by our satisfaction guarantee and flexible contracts with no long-term lock-in.
                </p>
              </div>
            </div>

            {/* FAQ 9 */}
            <div className="bg-gradient-to-br from-fuchsia-50 to-violet-50 rounded-2xl p-8 shadow-lg border-2 border-fuchsia-100 hover:border-fuchsia-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-fuchsia-600 flex-shrink-0">Q9.</span>
                <span>How do you develop a content strategy?</span>
              </h3>
              <div className="ml-12 text-gray-700 leading-relaxed space-y-3">
                <p>
                  Content strategy development includes: (1) Audience research and buyer persona creation with demographic, psychographic, and behavioral insights, (2) Competitive content analysis identifying gaps and opportunities, (3) Keyword gap analysis targeting high-value search terms your competitors miss, (4) Content audit of existing assets evaluating performance and identifying refresh opportunities, (5) Content pillar and topic cluster planning for SEO authority building.
                </p>
                <p>
                  We also create detailed editorial calendars with publishing schedule and content themes, map distribution channels (owned, earned, paid media), set KPIs and measurement frameworks (traffic, leads, conversions, ROI), develop content promotion strategies including email, social, PR, and influencer outreach, and implement ongoing optimization processes. All content aligns with your business goals, sales funnel stages, and customer journey touchpoints for maximum impact and measurable results.
                </p>
              </div>
            </div>

            {/* FAQ 10 */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg border-2 border-indigo-100 hover:border-indigo-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-indigo-600 flex-shrink-0">Q10.</span>
                <span>How do I get started with content marketing services?</span>
              </h3>
              <div className="ml-12 text-gray-700 leading-relaxed space-y-3">
                <p>
                  Getting started is simple: (1) Contact us via call +91-83695-11877, WhatsApp, or website contact form, (2) Schedule a free 30-minute consultation to discuss your goals, target audience, current content challenges, and budget, (3) Receive a customized content marketing proposal with detailed service scope, pricing, timeline, and expected outcomes, (4) Sign service agreement and complete brand onboarding questionnaire covering brand voice, tone, style guidelines, and content preferences.
                </p>
                <p>
                  After onboarding, we conduct a kick-off meeting to align on content strategy, topics, keywords, and publishing schedule. You&apos;ll receive your first content within 7-10 business days with opportunities for feedback and revisions. We then enter ongoing collaboration with weekly check-ins, monthly performance reviews, and continuous optimization based on analytics. No long-term contracts required - cancel anytime with 30-day notice.
                </p>
              </div>
            </div>

            {/* FAQ 11 */}
            <div className="bg-gradient-to-br from-blue-50 to-fuchsia-50 rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-blue-600 flex-shrink-0">Q11.</span>
                <span>What is the typical turnaround time for content delivery?</span>
              </h3>
              <div className="ml-12 text-gray-700 leading-relaxed space-y-3">
                <p>
                  Turnaround times vary by content type: blog posts 800-1500 words (5-7 business days), website pages up to 2000 words (7-10 business days), social media content batches 20-30 posts (3-5 business days), email campaigns 3-5 emails (5-7 business days), whitepapers/eBooks 3000-5000 words (15-21 business days), case studies (10-14 business days), and comprehensive content strategy documents (10-14 business days).
                </p>
                <p>
                  Rush delivery is available for 20% additional fee with expedited timelines: blog posts in 48-72 hours, website pages in 3-5 days, social media batches in 24-48 hours. All turnaround times include one round of revisions. We maintain consistent quality regardless of timeline and include unlimited revisions in all packages to ensure your complete satisfaction with every content piece.
                </p>
              </div>
            </div>

            {/* FAQ 12 */}
            <div className="bg-gradient-to-br from-violet-50 to-pink-50 rounded-2xl p-8 shadow-lg border-2 border-violet-100 hover:border-violet-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-violet-600 flex-shrink-0">Q12.</span>
                <span>How do you measure content marketing success?</span>
              </h3>
              <div className="ml-12 text-gray-700 leading-relaxed space-y-3">
                <p>
                  We track comprehensive metrics including organic traffic growth (sessions, users, pageviews), keyword ranking improvements (positions, visibility, featured snippets), engagement rates (average time on page, bounce rate, scroll depth, pages per session), social shares and comments, lead generation conversions (form submissions, email signups, demo requests), email open rates (18-25% benchmark) and click-through rates (2-5% benchmark), backlinks acquired and referring domains, domain authority improvements (monthly tracking).
                </p>
                <p>
                  We also measure revenue attribution (content-assisted conversions, customer journey analysis), content performance by type and topic (top performers, underperformers), audience insights (demographics, interests, behavior patterns), and ROI calculations (cost per lead, customer acquisition cost, lifetime value). Monthly analytics reports include Google Analytics data, Search Console insights, social media analytics, email marketing metrics, and actionable optimization recommendations. Quarterly business reviews align content performance with business objectives and strategic planning.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Still Have Questions About Content Marketing?
              </h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Our content marketing experts are here to help. Get personalized answers and a free content strategy consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
                >
                  <span className="text-2xl mr-3">💬</span>
                  <span>Schedule Free Consultation</span>
                </Link>
                <a 
                  href="tel:+918369511877"
                  className="inline-flex items-center bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
                >
                  <span className="text-2xl mr-3">📞</span>
                  <span>Call: +91-83695-11877</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <ClientSuccessStories 
        title="Client Success Stories"
      />

      {/* Trusted Brands */}
      <TrustedBrands />

      {/* Related Services */}
      {/* Our Locations */}

      <OurLocations />


      {/* Related Services */}

      <RelatedServices />

      <Footer />
    </>
  )
}
