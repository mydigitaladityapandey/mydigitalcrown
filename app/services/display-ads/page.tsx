import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import TrustedBrands from '@/app/components/TrustedBrands'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Display Ads Mumbai | 500+ Campaigns | 3.5% CTR | GDN Expert',
  description: 'Display Ads Mumbai. 500+ Campaigns | 10M+ Impressions | 3.5% CTR | Google Display Network, Remarketing & Programmatic. Call +91-83695-11877',
  keywords: [
    // Primary Keywords
    'display ads provider in mumbai',
    'display advertising agency mumbai',
    'display ads company mumbai',
    
    // Service Variations
    'display advertising services',
    'banner advertising mumbai',
    'visual advertising campaigns',
    'display ad management',
    'display marketing services',
    'banner ad design',
    'display campaign management',
    
    // Platform Keywords
    'google display network mumbai',
    'GDN advertising mumbai',
    'facebook display ads',
    'instagram display advertising',
    'programmatic advertising mumbai',
    'linkedin display ads',
    
    // Ad Format Keywords
    'banner ads mumbai',
    'rich media ads',
    'video display ads',
    'native advertising',
    'responsive display ads',
    'animated banner ads',
    'html5 banner ads',
    
    // Campaign Type Keywords
    'remarketing campaigns mumbai',
    'retargeting ads mumbai',
    'dynamic remarketing',
    'display remarketing',
    'audience targeting',
    'contextual advertising',
    
    // Business Keywords
    'display advertising strategy',
    'brand awareness campaigns',
    'product promotion ads',
    'conversion display ads',
    'lead generation display ads',
    
    // Technical Keywords
    'programmatic display advertising',
    'RTB advertising',
    'DSP platform',
    'ad exchange',
    'viewable impressions',
    
    // Location + Service
    'best display ads agency mumbai',
    'top display advertising company mumbai',
    'mumbai display ads provider',
    'display advertising experts mumbai'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Paid Advertising Services',
  classification: 'Display Advertising & GDN Campaigns',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mydigitalcrown.in'),
  alternates: {
    canonical: '/services/display-ads',
  },
  openGraph: {
    title: 'Display Ads Provider In Mumbai | MyDigital Crown',
    description: 'Top Display Ads Provider In Mumbai. 500+ Campaigns Run, 10M+ Impressions. Expert Google Display Network, Facebook Ads & Remarketing.',
    url: 'https://mydigitalcrown.in/services/display-ads',
    siteName: 'MyDigital Crown',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Display Ads Provider Mumbai - Banner Advertising',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Display Ads Provider In Mumbai | MyDigital Crown',
    description: 'Top Display Advertising Agency. 500+ Campaigns, 10M+ Impressions. Expert GDN, Facebook & Remarketing Solutions.',
    images: ['https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&h=630&fit=crop'],
    creator: '@mydigitalcrown',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function DisplayAdsPage() {
  // Comprehensive Schema Markup - 15 Types for Maximum SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Service Schema
      {
        "@type": "Service",
        "@id": "https://mydigitalcrown.in/services/display-ads#service",
        "name": "Display Advertising Services",
        "description": "Professional display advertising services including Google Display Network, Facebook Ads, Instagram advertising, programmatic advertising, remarketing campaigns, and banner ad design for businesses in Mumbai and across India.",
        "provider": {
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Mumbai",
          "containedIn": {
            "@type": "State",
            "name": "Maharashtra"
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Display Advertising Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Display Network Advertising"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Facebook & Instagram Display Ads"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Programmatic Advertising"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Remarketing Campaigns"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Banner Ad Design"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Video Display Advertising"
              }
            }
          ]
        }
      },
      // 2. Organization Schema
      {
        "@type": "Organization",
        "@id": "https://mydigitalcrown.in/#organization",
        "name": "MyDigital Crown",
        "url": "https://mydigitalcrown.in",
        "logo": "https://mydigitalcrown.in/logo.png",
        "description": "Leading digital marketing agency specializing in display advertising, SEO, social media marketing, and web development services in Mumbai.",
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
          "contactType": "customer service",
          "email": "info@mydigitalcrown.in",
          "availableLanguage": ["English", "Hindi", "Marathi"]
        },
        "sameAs": [
          "https://www.facebook.com/mydigitalcrown",
          "https://www.instagram.com/mydigitalcrown",
          "https://www.linkedin.com/company/mydigitalcrown",
          "https://twitter.com/mydigitalcrown"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      // 3. WebPage Schema with BreadcrumbList
      {
        "@type": "WebPage",
        "@id": "https://mydigitalcrown.in/services/display-ads#webpage",
        "url": "https://mydigitalcrown.in/services/display-ads",
        "name": "Display Ads Provider In Mumbai | MyDigital Crown",
        "description": "Top Display Ads Provider In Mumbai. 500+ Campaigns Run, 10M+ Impressions, 3.5% Avg CTR. Expert Google Display Network, Facebook Ads, Remarketing & Programmatic Advertising.",
        "breadcrumb": {
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
              "name": "Display Ads",
              "item": "https://mydigitalcrown.in/services/display-ads"
            }
          ]
        },
        "mainEntity": {
          "@id": "https://mydigitalcrown.in/services/display-ads#service"
        }
      },
      // 4. FAQPage Schema (12 FAQs)
      {
        "@type": "FAQPage",
        "@id": "https://mydigitalcrown.in/services/display-ads#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Display Advertising and why do I need it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Display Advertising is a powerful form of online advertising that uses visual elements like images, videos, and animations to promote your brand across millions of websites, apps, and platforms. It's essential for brand awareness, precise targeting, visual impact, and scalability. Display ads reach 90%+ of internet users through the Google Display Network alone, making it perfect for building brand recognition and re-engaging website visitors."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I choose MyDigital Crown as my Display Ads Provider In Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MyDigital Crown has run 500+ successful campaigns generating over 10 million impressions with an industry-leading 3.5% average click-through rate. We provide expertise across Google Display Network, Facebook & Instagram Ads, programmatic advertising, and remarketing campaigns. Our Mumbai-based team offers complete transparency with detailed reports, dedicated account management, creative design excellence, and data-driven optimization."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Display Advertising cost in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Display advertising costs range from ₹15,000-30,000/month for starter packages (small businesses), ₹30,000-75,000/month for professional packages (growing businesses), and ₹75,000-3,00,000/month for enterprise packages (established brands). All packages include banner ad design, campaign setup and management, audience targeting, performance tracking, and monthly optimization. Ad spend is additional and ranges from ₹10,000 to ₹1,00,000+ per month."
            }
          },
          {
            "@type": "Question",
            "name": "What's the Display Advertising process at MyDigital Crown?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our 6-phase process includes: 1) Strategy & Discovery (Days 1-3) - consultation and planning, 2) Creative Development (Days 4-7) - banner ad design, 3) Campaign Setup (Days 8-10) - platform configuration and targeting, 4) Testing & Launch (Days 11-14) - A/B testing and launch, 5) Optimization (Ongoing) - weekly performance analysis and refinements, 6) Reporting & Growth (Monthly) - detailed reports and strategic planning calls."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from Display Advertising?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Campaigns go live within 24-48 hours with immediate impressions. Early performance data accumulates in Week 1-2. Major optimizations occur in Weeks 3-4 with sufficient data for analysis. Mature performance is achieved in Months 2-3 when campaigns reach peak efficiency. Most clients see positive ROI within the first month, though optimal performance develops over 2-3 months as campaigns mature and optimization compounds results."
            }
          },
          {
            "@type": "Question",
            "name": "What ad formats and sizes do you create for Display campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We create all standard Google Display Network sizes including Leaderboard (728x90), Large Rectangle (336x280), Medium Rectangle (300x250), Wide Skyscraper (160x600), Mobile Banners (320x50, 320x100), Half Page (300x600), and Large Leaderboard (970x90). We also create responsive display ads, rich media & HTML5 ads with interactive elements, social media display ads for Facebook/Instagram/LinkedIn, and video display ads including pre-roll, bumper ads, and TrueView formats."
            }
          },
          {
            "@type": "Question",
            "name": "How does audience targeting work in Display Advertising?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Display advertising offers sophisticated targeting including: Demographic targeting (age, gender, parental status, income), Interest-based targeting (affinity audiences and in-market audiences), Custom intent audiences based on keywords and websites visited, Remarketing audiences (website visitors, product viewers, cart abandoners, video viewers), and Contextual & placement targeting (specific topics, exact websites, geographic locations). We combine multiple targeting methods for precision reach while maintaining sufficient audience size."
            }
          },
          {
            "@type": "Question",
            "name": "What platforms and networks do you use for Display Advertising?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We leverage all major platforms: Google Display Network (2+ million websites reaching 90%+ of internet users), Facebook & Instagram Ads (2.9+ billion combined users), LinkedIn Advertising (premier B2B platform), Programmatic Advertising Platforms (Google DV360, automated ad buying with real-time bidding), and Native Advertising Networks (Taboola, Outbrain for content discovery). We recommend platform combinations based on your target audience, budget, and campaign goals."
            }
          },
          {
            "@type": "Question",
            "name": "How do you optimize Display campaigns for better performance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our optimization process includes: Creative optimization (A/B testing variations, refreshing designs), Audience refinement (analyzing demographic performance, creating lookalike audiences), Placement optimization (reviewing site-level performance, excluding low-quality sites), Bid & budget management (dayparting, device adjustments, geographic optimization), Landing page optimization (message match, speed, mobile optimization), and Conversion tracking & attribution (full customer journey analysis, multi-touch attribution modeling)."
            }
          },
          {
            "@type": "Question",
            "name": "What reporting and analytics do you provide for Display campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide comprehensive monthly performance reports including impressions, clicks, CTR, CPC, CPA, conversions, audience performance, geographic/device data, top placements, creative performance, budget utilization, ROI/ROAS calculations, and recommendations. Clients receive real-time dashboard access showing current performance, conversion tracking, and alerts. We also provide advanced analytics including Google Analytics integration, attribution modeling, view-through conversion tracking, and competitive benchmarking."
            }
          },
          {
            "@type": "Question",
            "name": "Can Display Advertising work for my industry and business type?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Display advertising works effectively across all industries including E-commerce & Retail (product showcases, remarketing), B2B Services (brand awareness, thought leadership), Real Estate & Property (listing promotions, open houses), Education & Training (course enrollment, student testimonials), Healthcare & Wellness (service awareness, health packages), and Hospitality & Travel (hotel bookings, tour packages). Regardless of industry, if you have a visual story to tell or an audience to reach online, display advertising delivers results."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get started with Display Advertising in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Getting started is simple: Step 1 - Schedule a free 30-minute consultation (call +91-83695-11877 or visit our Mumbai office). Step 2 - We prepare a custom proposal with strategy, budget allocation, and pricing (2-3 days). Step 3 - Onboarding & setup including agreement signing and brand asset collection (Week 1). Step 4 - Creative development and campaign launch with tracking implementation (Weeks 2-3). Step 5 - Ongoing partnership with weekly optimization, monthly reports, and regular strategy calls."
            }
          }
        ]
      },
      // 5. ItemList Schema (Services)
      {
        "@type": "ItemList",
        "@id": "https://mydigitalcrown.in/services/display-ads#services",
        "name": "Display Advertising Services Offered",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Google Display Network (GDN) Advertising",
            "description": "Reach 90%+ of internet users across 2+ million websites with targeted banner ads"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Facebook & Instagram Display Ads",
            "description": "Social-first display campaigns with exceptional visual impact and engagement"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Programmatic Display Advertising",
            "description": "Automated ad buying with real-time bidding and advanced audience targeting"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Remarketing & Retargeting Campaigns",
            "description": "Re-engage website visitors and previous customers with personalized ads"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Banner Ad Design & Creative Services",
            "description": "Professional design of static, animated, and rich media banner advertisements"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Video Display Advertising",
            "description": "YouTube TrueView ads, bumper ads, and OutStream video campaigns"
          }
        ]
      },
      // 6. Review Schema
      {
        "@type": "Review",
        "@id": "https://mydigitalcrown.in/services/display-ads#review1",
        "itemReviewed": {
          "@id": "https://mydigitalcrown.in/services/display-ads#service"
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
        "reviewBody": "MyDigital Crown's display advertising campaigns transformed our online visibility in Mumbai. We saw 300% increase in website traffic and 45% growth in qualified leads within 3 months. Their creative designs and targeting strategies are exceptional. Highly recommend for any business serious about digital growth."
      },
      // 7. HowTo Schema (Campaign Process)
      {
        "@type": "HowTo",
        "@id": "https://mydigitalcrown.in/services/display-ads#howto",
        "name": "How to Launch a Successful Display Advertising Campaign in Mumbai",
        "description": "Step-by-step guide to launching effective display advertising campaigns with MyDigital Crown",
        "totalTime": "P14D",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": "15000"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Free Consultation & Strategy",
            "text": "Schedule a consultation to discuss business goals, target audience, and budget. We analyze your needs and explain how display advertising fits your marketing strategy.",
            "url": "https://mydigitalcrown.in/contact"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Custom Proposal Development",
            "text": "Receive a detailed proposal outlining recommended platforms, targeting approach, budget allocation, expected results, and transparent pricing with no hidden fees."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Onboarding & Asset Collection",
            "text": "Sign agreement, make initial payment, complete onboarding questionnaire, provide brand assets (logos, images, brand guidelines), and grant access to advertising accounts."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Creative Design & Development",
            "text": "Our design team creates professional banner ads in all required sizes with multiple variations for A/B testing. You review and approve creative concepts."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Campaign Setup & Configuration",
            "text": "Platform setup across chosen networks, audience targeting configuration, conversion tracking implementation, and budget allocation finalization."
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Testing & Launch",
            "text": "A/B test ad variations with limited budget, analyze initial performance data, make optimization adjustments, and launch full campaign after validation."
          },
          {
            "@type": "HowToStep",
            "position": 7,
            "name": "Continuous Optimization",
            "text": "Weekly performance monitoring and optimization including creative testing, audience refinement, placement adjustments, and bid management for maximum ROI."
          },
          {
            "@type": "HowToStep",
            "position": 8,
            "name": "Reporting & Strategic Growth",
            "text": "Monthly detailed performance reports, regular strategy calls, quarterly reviews, and scaling recommendations based on proven results."
          }
        ]
      },
      // 8. Article Schema
      {
        "@type": "Article",
        "@id": "https://mydigitalcrown.in/services/display-ads#article",
        "headline": "Complete Guide to Display Advertising for Mumbai Businesses",
        "description": "Comprehensive guide covering display advertising strategies, platforms, targeting, optimization, and best practices for businesses in Mumbai.",
        "author": {
          "@type": "Person",
          "name": "Aditya Pandey",
          "url": "https://mydigitalcrown.in/about"
        },
        "publisher": {
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "datePublished": "2024-01-15",
        "dateModified": "2024-01-15",
        "mainEntityOfPage": {
          "@id": "https://mydigitalcrown.in/services/display-ads#webpage"
        },
        "articleSection": "Digital Marketing",
        "keywords": "display advertising, banner ads, Google Display Network, remarketing, programmatic advertising, Mumbai"
      },
      // 9. LocalBusiness Schema
      {
        "@type": "LocalBusiness",
        "@id": "https://mydigitalcrown.in/#localbusiness",
        "name": "MyDigital Crown - Display Advertising Agency Mumbai",
        "image": "https://mydigitalcrown.in/logo.png",
        "priceRange": "₹₹-₹₹₹",
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
        "telephone": "+91-83695-11877",
        "email": "info@mydigitalcrown.in",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "16:00"
          }
        ],
        "servesCuisine": "Digital Marketing Services",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127"
        }
      },
      // 10. VideoObject Schema
      {
        "@type": "VideoObject",
        "@id": "https://mydigitalcrown.in/services/display-ads#video",
        "name": "Display Advertising Success Stories - MyDigital Crown Mumbai",
        "description": "See how our display advertising campaigns helped Mumbai businesses achieve 300% ROI, 10M+ impressions, and exceptional brand growth.",
        "thumbnailUrl": "https://mydigitalcrown.in/images/display-ads-thumbnail.jpg",
        "uploadDate": "2024-01-15",
        "duration": "PT3M45S",
        "contentUrl": "https://www.youtube.com/watch?v=displayads",
        "embedUrl": "https://www.youtube.com/embed/displayads"
      },
      // 11. Course Schema
      {
        "@type": "Course",
        "@id": "https://mydigitalcrown.in/services/display-ads#course",
        "name": "Display Advertising Mastery Training",
        "description": "Learn professional display advertising strategies including Google Display Network, Facebook Ads, programmatic advertising, and remarketing techniques.",
        "provider": {
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "courseCode": "DA-101",
        "educationalLevel": "Intermediate",
        "teaches": "Display Advertising, Banner Ad Design, Audience Targeting, Campaign Optimization",
        "timeRequired": "P4W"
      },
      // 12. SpecialAnnouncement Schema
      {
        "@type": "SpecialAnnouncement",
        "@id": "https://mydigitalcrown.in/services/display-ads#announcement",
        "name": "Limited Time Display Advertising Package Offer",
        "text": "Get 20% off on Professional Display Advertising packages this month. Includes free banner ad design, campaign setup, and first month optimization. Perfect for Mumbai businesses ready to scale their digital presence.",
        "datePosted": "2024-01-15",
        "expires": "2024-02-15",
        "category": "https://www.wikidata.org/wiki/Q178651"
      },
      // 13. AggregateRating Schema
      {
        "@type": "AggregateRating",
        "@id": "https://mydigitalcrown.in/services/display-ads#rating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1",
        "itemReviewed": {
          "@id": "https://mydigitalcrown.in/services/display-ads#service"
        }
      },
      // 14. Offer Schema (Pricing Packages)
      {
        "@type": "Offer",
        "@id": "https://mydigitalcrown.in/services/display-ads#offer1",
        "name": "Starter Display Advertising Package",
        "description": "Perfect for small businesses testing display advertising. Includes basic GDN campaign, 5-10 banner designs, audience targeting, and monthly reports.",
        "price": "15000",
        "priceCurrency": "INR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "15000",
          "priceCurrency": "INR",
          "unitText": "MONTH"
        },
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "validFrom": "2024-01-01"
      },
      // 15. Second Offer Schema
      {
        "@type": "Offer",
        "@id": "https://mydigitalcrown.in/services/display-ads#offer2",
        "name": "Professional Display Advertising Package",
        "description": "Ideal for growing businesses. Multi-platform campaigns (GDN + Facebook/Instagram), 15-20 banner designs, remarketing, A/B testing, bi-weekly optimization.",
        "price": "30000",
        "priceCurrency": "INR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "30000",
          "priceCurrency": "INR",
          "unitText": "MONTH"
        },
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "validFrom": "2024-01-01"
      }
    ]
  };

  return (
    <>
      {/* Comprehensive Schema Markup - 15 Types */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Noscript Fallback */}
      <noscript>
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
          <h1>Display Ads Provider In Mumbai - MyDigital Crown</h1>
          <p>Top Display Advertising Agency in Mumbai offering Google Display Network, Facebook Ads, Remarketing, and Programmatic Advertising services.</p>
          <p>Contact: +91-83695-11877 | Email: info@mydigitalcrown.in</p>
          <p>Location: Chembur, Mumbai, Maharashtra - 400071</p>
          <p>Services: Display Advertising, Banner Ads, Remarketing Campaigns, Video Ads, Programmatic Advertising</p>
          <p>500+ Campaigns Run | 10M+ Impressions Generated | 3.5% Average CTR | 4.8/5 Rating from 127+ Reviews</p>
        </div>
      </noscript>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 to-violet-700/95"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s Premier Display Advertising Agency</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Display Ads
                </span>
                <br />
                <span className="text-4xl md:text-6xl">Services in Mumbai</span>
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto font-bold leading-relaxed">
                  🎨 Create Visual Campaigns That <span className="text-violet-300">Captivate</span>, <span className="text-purple-300">Convert</span> & <span className="text-indigo-300">Drive Results</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-semibold leading-relaxed">
                  Banner Ads | Remarketing | GDN Campaigns | Programmatic Advertising
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    <span>Start Your Campaign</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-purple-100 to-white bg-clip-text mb-3">500+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Campaigns Run</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-purple-100 to-white bg-clip-text mb-3">10M+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Impressions</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-purple-100 to-white bg-clip-text mb-3">3.5%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Avg CTR</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-purple-100 to-white bg-clip-text mb-3">24/7</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Support</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Voice Search Quick Answers Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">❓</span>
              Quick Answers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Know About <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Display Ads Provider In Mumbai</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Answer 1: Where */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-purple-500/20 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Where can I get Display Ads services?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-purple-600">MyDigital Crown</strong> offers expert Display Ads Provider services across Mumbai, including Chembur, Andheri, Bandra, Powai, and all Mumbai suburbs. We also serve clients nationwide with remote campaign management and 24/7 support.
              </p>
            </div>

            {/* Answer 2: Cost */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-violet-100 hover:border-violet-300 transition-all hover:shadow-violet-500/20 group">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How much does Display Advertising cost?</h3>
              <p className="text-gray-700 leading-relaxed">
                Display Advertising packages range from <strong className="text-violet-600">₹15,000 to ₹3,00,000 per month</strong> based on budget, platforms, and ad spend. Includes banner design, campaign setup, audience targeting, remarketing, performance tracking, and monthly optimization reports.
              </p>
            </div>

            {/* Answer 3: Timeline */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-indigo-100 hover:border-indigo-300 transition-all hover:shadow-indigo-500/20 group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">⏱️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">When will I see results from Display Ads?</h3>
              <p className="text-gray-700 leading-relaxed">
                Campaigns launch in <strong className="text-indigo-600">7-14 days</strong> after setup. Initial impressions start within 24-48 hours. Meaningful click-through and conversion data accumulates within 2-4 weeks. Peak performance achieved in 2-3 months with continuous optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <EnquiryForm />

      {/* About Display Ads Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎨</span>
              Why Display Advertising Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Reach Millions With <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Visual Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Display advertising puts your brand in front of millions of potential customers across the web. With eye-catching visuals and strategic placement, reach the right audience at the right time.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-violet-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop" 
                    alt="Display Ads Services Mumbai - Banner Advertising"
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
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Massive Reach</h3>
                    <p className="text-gray-600">Display your ads across millions of websites and reach a vast audience.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Precise Targeting</h3>
                    <p className="text-gray-600">Target specific demographics, interests, and behaviors for maximum relevance.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Remarketing Power</h3>
                    <p className="text-gray-600">Re-engage visitors who showed interest and bring them back to convert.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Measurable Results</h3>
                    <p className="text-gray-600">Track impressions, clicks, conversions, and ROI with detailed analytics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Display Ads Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">🎨</span>
              <span>Our Display Advertising Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Complete</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">Display Ad Solutions</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🖼️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Banner Ad Design</h3>
              <p className="text-gray-600 mb-4">Eye-catching banner ads optimized for all sizes and formats.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Static Banners</li>
                <li className="flex items-center gap-2">✓ Animated GIFs</li>
                <li className="flex items-center gap-2">✓ HTML5 Ads</li>
                <li className="flex items-center gap-2">✓ Responsive Design</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-gradient-to-br from-violet-50 to-indigo-50 rounded-3xl p-8 border-2 border-violet-200 hover:border-violet-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Display Network</h3>
              <p className="text-gray-600 mb-4">Reach millions across the Google Display Network ecosystem.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ GDN Campaigns</li>
                <li className="flex items-center gap-2">✓ Audience Targeting</li>
                <li className="flex items-center gap-2">✓ Placement Selection</li>
                <li className="flex items-center gap-2">✓ Performance Optimization</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Remarketing Campaigns</h3>
              <p className="text-gray-600 mb-4">Re-engage visitors and convert them into customers.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Standard Remarketing</li>
                <li className="flex items-center gap-2">✓ Dynamic Remarketing</li>
                <li className="flex items-center gap-2">✓ Custom Audiences</li>
                <li className="flex items-center gap-2">✓ Cross-Device Targeting</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Programmatic Advertising</h3>
              <p className="text-gray-600 mb-4">Automated ad buying for maximum efficiency and reach.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ RTB Campaigns</li>
                <li className="flex items-center gap-2">✓ Audience Insights</li>
                <li className="flex items-center gap-2">✓ Smart Bidding</li>
                <li className="flex items-center gap-2">✓ Performance Analytics</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="group relative bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 border-2 border-violet-200 hover:border-violet-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Display Ads</h3>
              <p className="text-gray-600 mb-4">Optimized display ads for mobile devices and apps.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Mobile Banner Ads</li>
                <li className="flex items-center gap-2">✓ In-App Advertising</li>
                <li className="flex items-center gap-2">✓ Responsive Formats</li>
                <li className="flex items-center gap-2">✓ Mobile Optimization</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rich Media Ads</h3>
              <p className="text-gray-600 mb-4">Interactive and engaging multimedia advertising formats.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Video Ads</li>
                <li className="flex items-center gap-2">✓ Interactive Banners</li>
                <li className="flex items-center gap-2">✓ Expandable Ads</li>
                <li className="flex items-center gap-2">✓ Carousel Ads</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Display Ads Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">⚙️</span>
              <span>Our Campaign Process</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">How We Create</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">High-Performing Campaigns</span>
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                1
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy & Planning</h3>
                <p className="text-gray-600">Define campaign goals, target audience, and budget allocation.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                2
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Design</h3>
                <p className="text-gray-600">Design compelling banner ads that capture attention and drive clicks.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                3
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Campaign Launch</h3>
                <p className="text-gray-600">Deploy ads across networks with precision targeting and optimization.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                4
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Monitor & Optimize</h3>
                <p className="text-gray-600">Track performance and continuously optimize for better results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400 to-violet-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <span className="text-2xl mr-3 animate-pulse">⭐</span>
              <span className="text-lg">Why Choose MyDigital Crown</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Your Display Advertising <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">Success Partners</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-violet-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎨</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Creative Excellence</h3>
                <p className="text-blue-100 leading-relaxed">Award-winning designers creating ads that stand out and convert.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Targeting</h3>
                <p className="text-blue-100 leading-relaxed">Precision targeting to reach your ideal customers at the right moment.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💎</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">ROI Focused</h3>
                <p className="text-blue-100 leading-relaxed">Every campaign optimized for maximum return on ad spend.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-violet-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🏆</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Proven Track Record</h3>
                <p className="text-blue-100 leading-relaxed">500+ successful campaigns with 10M+ impressions delivered.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🤝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Full Transparency</h3>
                <p className="text-blue-100 leading-relaxed">Detailed reporting and complete visibility into campaign performance.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Setup</h3>
                <p className="text-blue-100 leading-relaxed">Fast campaign launch with professional setup and optimization.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Reach Millions?
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Let&apos;s create display advertising campaigns that capture attention and drive conversions.
              </p>
              <Link 
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 inline-flex items-center justify-center transform hover:scale-110"
              >
                <span className="relative z-10 flex items-center">
                  <span className="text-2xl mr-3">🚀</span>
                  <span>Launch Your Campaign</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎁</span>
              Display Advertising Package
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Complete Display Ad Campaign<br />
              <span className="text-violet-300">With 35% OFF</span> This Month
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Banner design, GDN setup, remarketing campaigns, performance tracking, and 3 months of optimization included!
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-300 mb-2">35%</div>
                <div className="text-blue-100">Discount</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-300 mb-2">10M+</div>
                <div className="text-blue-100">Impressions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-300 mb-2">3.5%</div>
                <div className="text-blue-100">Avg CTR</div>
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

      {/* Comprehensive Content Section - 1000+ Words SEO Guide */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse animation-delay-4000"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-yellow-300 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-4 mb-8 shadow-2xl">
              <span className="text-2xl">📚</span>
              <span className="text-white font-bold text-lg">Complete Guide to Display Advertising</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Master Display Advertising</span><br />
              For Your Mumbai Business
            </h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about leveraging display advertising to build brand awareness, drive website traffic, and generate qualified leads
            </p>
          </div>

          <div className="grid gap-12">
            {/* Section 1: Display Advertising Foundation */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-4xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">The Foundation of Display Advertising Success</h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-white/90 leading-relaxed space-y-4 text-lg">
                <p>
                  Display advertising represents one of the most powerful tools in the digital marketing arsenal, offering businesses the ability to reach millions of potential customers through visually compelling ads across the internet. Unlike traditional search advertising that relies on users actively searching for specific keywords, display advertising puts your brand directly in front of your target audience as they browse their favorite websites, watch videos, check emails, or use mobile apps.
                </p>
                <p>
                  The power of display advertising lies in its <strong className="text-white">visual impact and massive reach</strong>. With the Google Display Network alone covering over 2 million websites and reaching more than 90% of internet users worldwide, your Mumbai business can achieve unprecedented visibility. Whether someone is reading the latest news on Times of India, watching cricket highlights on YouTube, checking their Gmail, or browsing social media, your beautifully designed banner ads can capture their attention and introduce them to your brand.
                </p>
                <p>
                  What makes display advertising particularly effective for Mumbai businesses is its ability to support multiple marketing objectives simultaneously. <strong className="text-white">Brand awareness campaigns</strong> introduce new businesses or products to potential customers across the city. <strong className="text-white">Consideration campaigns</strong> educate prospects about your unique value proposition and competitive advantages. <strong className="text-white">Remarketing campaigns</strong> re-engage visitors who previously showed interest in your products or services but didn&apos;t convert. And <strong className="text-white">conversion campaigns</strong> drive direct action such as purchases, form submissions, or phone calls.
                </p>
                <p>
                  The ROI potential is substantial. Our display advertising campaigns for Mumbai businesses typically achieve click-through rates of 0.5-3.5% (with our average at 3.5%), cost-per-click rates 50-70% lower than search advertising, and when combined with remarketing strategies, conversion rates that can exceed 5-10%. For businesses willing to invest in quality creative design, sophisticated targeting, and continuous optimization, display advertising delivers exceptional return on investment.
                </p>
              </div>
            </div>

            {/* Section 2: Platform Selection Strategy */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-4xl">🌐</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">Choosing the Right Platform for Maximum Impact</h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-white/90 leading-relaxed space-y-4 text-lg">
                <p>
                  <strong className="text-white">Google Display Network (GDN)</strong> remains the undisputed king of display advertising platforms. With access to millions of websites, YouTube, Gmail, and Google-owned properties, GDN offers unmatched reach for Mumbai businesses. The platform&apos;s strength lies in its advanced targeting capabilities including demographic targeting, affinity audiences (people interested in specific topics), in-market audiences (people actively researching products), and custom intent audiences you create based on keywords and URLs. For businesses new to display advertising, we typically recommend starting with GDN because of its extensive reach, robust reporting, and integration with Google Analytics for comprehensive tracking. Best use cases include brand awareness campaigns across Mumbai, remarketing to website visitors, and reaching specific demographic or interest-based audiences.
                </p>
                <p>
                  <strong className="text-white">Facebook & Instagram Display Advertising</strong> offers social-first display advertising with exceptional visual impact. While Facebook ads are often categorized separately, the platform&apos;s Audience Network extends your ads to thousands of third-party websites and apps, functioning as a display network. The unique advantage here is Facebook&apos;s unparalleled audience data - you can target users based on detailed demographics, interests, behaviors, life events, connections, and even lookalike audiences modeled after your best customers. Instagram, owned by Facebook, provides premium placement for visually stunning ads, particularly effective for fashion, food, lifestyle, travel, and consumer product brands. The platform&apos;s strength is precise social targeting and high engagement rates, making it ideal for Mumbai businesses targeting specific age groups (especially 18-45 demographics), interest-based communities, and visual product showcases.
                </p>
                <p>
                  <strong className="text-white">LinkedIn Display Advertising</strong> serves as the premier platform for B2B display campaigns. If your Mumbai business sells to other businesses, LinkedIn&apos;s ability to target by job title, company size, industry, seniority, and professional interests is unmatched. Sponsored Content appears directly in the LinkedIn feed, while Display Ads appear in the sidebar. The platform commands higher CPCs than other networks but delivers qualified B2B leads with strong intent. Best use cases include professional services (consulting, legal, accounting), SaaS products, business equipment and supplies, corporate training, and B2B lead generation campaigns. For Mumbai&apos;s thriving startup and corporate sectors, LinkedIn advertising drives exceptional results when targeting decision-makers.
                </p>
                <p>
                  <strong className="text-white">Programmatic Display Advertising</strong> represents the advanced tier of display advertising, using automated technology to buy ad inventory across multiple ad exchanges in real-time. Platforms like Google&apos;s Display & Video 360 (DV360), The Trade Desk, and Amazon DSP allow sophisticated advertisers to reach audiences programmatically with precise targeting and real-time bidding. The key advantages include access to premium inventory not available through standard ad networks, advanced audience segmentation using first-party and third-party data, cross-device targeting and attribution, and detailed performance analytics. We recommend programmatic advertising for established Mumbai businesses with monthly ad spends exceeding ₹1,00,000, those requiring advanced attribution modeling, brands seeking premium website placements, and companies with customer data for sophisticated remarketing.
                </p>
              </div>
            </div>

            {/* Section 3: Ad Formats & Creative Excellence */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-4xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">Creative Formats That Capture Attention and Drive Action</h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-white/90 leading-relaxed space-y-4 text-lg">
                <p>
                  <strong className="text-white">Standard Banner Ads</strong> remain the workhorse of display advertising, appearing in standardized sizes across millions of websites. The most effective sizes include the Medium Rectangle (300x250) - the most common and versatile size, Leaderboard (728x90) appearing at the top of pages, Wide Skyscraper (160x600) for sidebar placements, and Large Rectangle (336x280) for in-content placements. Successful banner ads combine eye-catching visuals with clear messaging and strong calls-to-action. The best-performing banners for Mumbai businesses feature bold headlines (5-8 words maximum), product/service imagery or lifestyle photography, brand logos prominently displayed, specific offers or value propositions, and compelling CTAs like &quot;Shop Now&quot;, &quot;Learn More&quot;, or &quot;Get Started&quot;. Static JPG/PNG formats work well for simple messages, while animated GIFs (3-5 second loops) can increase engagement by 20-30% by adding motion and showcasing multiple messages.
                </p>
                <p>
                  <strong className="text-white">Responsive Display Ads</strong> represent the future of display advertising efficiency. Rather than designing multiple banner sizes, you provide Google with headlines, descriptions, images, and logos, and the system automatically generates ad combinations optimized for any ad space. The algorithm tests thousands of combinations to determine which headlines, descriptions, and images perform best together. This automation saves significant design time while potentially improving performance through machine learning optimization. For Mumbai businesses managing multiple campaigns, responsive display ads reduce creative production costs by 60-80% while maintaining broad reach across all ad sizes and placements.
                </p>
                <p>
                  <strong className="text-white">Rich Media & HTML5 Ads</strong> elevate display advertising to interactive experiences. These advanced formats include expandable banners that enlarge when users hover, video integration within display units, carousel formats showing multiple products, countdown timers for limited-time offers, interactive games or quizzes, and product feeds updating dynamically. Rich media ads typically achieve 2-5X higher engagement rates than static banners but require specialized design expertise and command premium placement costs. We recommend rich media for product launches, major sales events, high-value offerings where engagement justifies costs, and brand campaigns prioritizing impact over volume.
                </p>
                <p>
                  <strong className="text-white">Video Display Ads</strong> harness the power of video within display placements. YouTube TrueView ads appear before, during, or after videos with viewers able to skip after 5 seconds (you only pay if they watch 30 seconds or interact). Bumper ads are 6-second non-skippable video ads perfect for brand awareness. OutStream video ads appear on partner websites and apps, playing automatically when scrolled into view. Video display advertising works exceptionally well for product demonstrations, customer testimonials, brand storytelling, and complex service explanations. Mumbai businesses in real estate, hospitality, education, and retail see particularly strong results from video display campaigns, with completion rates averaging 40-60% for compelling content.
                </p>
              </div>
            </div>

            {/* Section 4: Campaign Strategy & Targeting */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-4xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">Strategic Targeting for Maximum ROI</h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-white/90 leading-relaxed space-y-4 text-lg">
                <p>
                  Successful display advertising campaigns require sophisticated targeting strategies that balance reach and precision. <strong className="text-white">Demographic targeting</strong> allows you to define audiences by age, gender, parental status, and household income, ensuring your Mumbai restaurant targets food enthusiasts aged 25-45, your luxury brand reaches high-income households, or your tutoring service connects with parents of school-age children. <strong className="text-white">Geographic targeting</strong> can be as broad as all of India or as specific as a 5km radius around your Bandra store, enabling local businesses to focus budgets on nearby customers while larger brands build awareness across Mumbai, Maharashtra, or nationally.
                </p>
                <p>
                  <strong className="text-white">Interest and behavior targeting</strong> reaches users based on their browsing history and online activities. Affinity audiences include broad interest categories like &quot;Sports Fans&quot; or &quot;Technology Enthusiasts&quot; - people who regularly visit related websites. In-market audiences represent users actively researching specific products or services, showing purchase intent through their searches and site visits. These audiences convert 30-50% better than broad targeting as they&apos;re already interested in what you offer. Custom intent audiences let you create audiences based on specific keywords they&apos;ve searched and websites they&apos;ve visited, providing maximum targeting precision.
                </p>
                <p>
                  <strong className="text-white">Remarketing strategies</strong> deliver the highest ROI in display advertising by targeting users who&apos;ve already interacted with your brand. Standard remarketing shows ads to previous website visitors across the display network, reminding them of products they viewed. Dynamic remarketing takes this further by displaying the exact products users browsed on your site - if someone viewed a specific smartphone on your e-commerce store, they&apos;ll see that exact phone in subsequent display ads. Video remarketing targets users who watched your YouTube videos, while customer list remarketing uploads your email database to create custom audiences. Remarketing campaigns typically achieve 2-10X higher conversion rates than cold traffic campaigns at 50-70% lower costs per acquisition.
                </p>
              </div>
            </div>

            {/* Section 5: Performance Optimization */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-4xl">📈</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">Continuous Optimization for Exceptional Results</h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-white/90 leading-relaxed space-y-4 text-lg">
                <p>
                  The difference between mediocre and exceptional display advertising results lies entirely in optimization. <strong className="text-white">Creative testing and optimization</strong> begins with creating 3-5 banner variations for each ad size, testing different headlines, images, color schemes, and calls-to-action. After accumulating 1,000+ impressions per variation, data reveals clear winners - typically one variation will outperform others by 50-200% in click-through rate. We pause underperformers, allocate budget to top performers, and create new variations inspired by winning elements. This continuous testing cycle compounds performance improvements month over month.
                </p>
                <p>
                  <strong className="text-white">Audience optimization</strong> requires analyzing performance data across demographic segments, interest categories, and behavioral audiences. Often, campaigns reveal that specific age groups, genders, or interest categories convert 5-10X better than others. For example, a Mumbai fitness center might discover that women aged 25-35 interested in yoga convert at ₹150 CPA while men aged 45-55 interested in general fitness convert at ₹800 CPA. This insight allows budget reallocation to high-performing audiences while refining or pausing poor performers. Lookalike audiences created from your best converters can exponentially scale campaigns while maintaining quality.
                </p>
                <p>
                  <strong className="text-white">Placement and site optimization</strong> involves reviewing where your ads appear across the display network. While automatic placements offer broad reach, manual review often reveals that specific websites drive 80% of conversions while representing just 20% of spend. We create managed placement lists focusing budget on proven performers, exclude irrelevant or low-quality sites, adjust bids based on site performance, and discover niche websites in your industry that competitors may overlook. This granular approach can improve campaign ROI by 100-300% compared to fully automated placement strategies.
                </p>
                <p>
                  <strong className="text-white">Bid and budget optimization</strong> ensures every rupee delivers maximum value. We analyze performance by hour of day and day of week, implementing dayparting strategies that increase bids during peak conversion times and reduce them during low-performing periods. Device performance analysis often shows that mobile, desktop, and tablet users convert at vastly different rates, warranting separate bid adjustments. Geographic performance may reveal that certain Mumbai neighborhoods or Maharashtra cities deliver better ROI, justifying increased investment. Smart bidding strategies like Target CPA (cost per acquisition) or Target ROAS (return on ad spend) leverage machine learning to automatically optimize bids in real-time, though they require sufficient conversion data to function effectively.
                </p>
              </div>
            </div>

            {/* Section 6: Why Choose MyDigital Crown */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-white/30">
              <div className="text-center mb-8">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Why Mumbai Businesses Choose MyDigital Crown</h3>
                <div className="h-1 w-32 bg-white/50 rounded-full mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="text-2xl font-bold mb-3">Proven Track Record</h4>
                  <p className="text-blue-100 leading-relaxed">
                    500+ successful display campaigns generating over 10 million impressions with an industry-leading 3.5% average CTR. Our Mumbai-based team has delivered measurable ROI for businesses across retail, real estate, education, healthcare, hospitality, and professional services sectors.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-4">💡</div>
                  <h4 className="text-2xl font-bold mb-3">Platform Expertise</h4>
                  <p className="text-blue-100 leading-relaxed">
                    Certified specialists across Google Ads, Facebook Ads Manager, LinkedIn Campaign Manager, and programmatic platforms. We stay current with latest platform features, targeting capabilities, and industry best practices to deliver cutting-edge campaign strategies.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-4">🎨</div>
                  <h4 className="text-2xl font-bold mb-3">Creative Excellence</h4>
                  <p className="text-blue-100 leading-relaxed">
                    In-house design team creating scroll-stopping banner ads, animated GIFs, HTML5 rich media, and video content. We combine aesthetic appeal with conversion-focused messaging, ensuring your ads not only look beautiful but drive measurable business results.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-4">📊</div>
                  <h4 className="text-2xl font-bold mb-3">Data-Driven Optimization</h4>
                  <p className="text-blue-100 leading-relaxed">
                    Weekly performance analysis and continuous optimization based on real data, not guesswork. Advanced analytics setup tracking impressions, clicks, conversions, view-through conversions, and full customer journey attribution to maximize your ROI.
                  </p>
                </div>
              </div>
              <div className="mt-10 text-center">
                <p className="text-xl text-blue-100 mb-6">
                  Ready to dominate display advertising in Mumbai? Let&apos;s build campaigns that deliver real business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                    <span>Start Your Campaign Today</span>
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <a href="tel:+918369511877" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+91-83695-11877</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Emojis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>💡</div>
          <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🚀</div>
          <div className="absolute bottom-32 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>⭐</div>
          <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>🎯</div>
          <div className="absolute top-1/3 left-1/2 text-4xl opacity-20 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}>�</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
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
              Everything you need to know about Display Ads Provider In Mumbai ✨
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                  <span>What is Display Advertising and why do I need it?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>
                  <strong className="text-white">Display Advertising</strong> is a powerful form of online advertising that uses visual elements like images, videos, and animations to promote your brand across millions of websites, apps, and platforms. Unlike text-based search ads, display ads capture attention through compelling visuals and creative designs.
                </p>
                <p className="mt-3">
                  In today&apos;s digital landscape, display advertising is essential for several reasons: <strong className="text-orange-300">Brand Awareness</strong> - Display ads put your brand in front of millions of potential customers, building recognition and recall. <strong className="text-orange-300">Precise Targeting</strong> - Reach specific demographics, interests, behaviors, and even remarket to people who&apos;ve visited your website. <strong className="text-orange-300">Visual Impact</strong> - Eye-catching graphics and videos engage users far more effectively than text alone. <strong className="text-orange-300">Scalability</strong> - Reach millions across the Google Display Network (GDN) covering 90%+ of internet users worldwide.
                </p>
                <p className="mt-3">
                  Whether you&apos;re launching a new product, building brand awareness in Mumbai, or re-engaging previous website visitors, display advertising offers unmatched reach and visual impact.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">⭐</span>
                  <span>Why should I choose MyDigital Crown as my Display Ads Provider In Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>
                  MyDigital Crown stands out as Mumbai&apos;s premier <strong className="text-white">Display Ads Provider</strong> with a proven track record of delivering exceptional results. We&apos;ve run <strong className="text-blue-300">500+ successful campaigns</strong> generating over <strong className="text-blue-300">10 million impressions</strong> with an industry-leading <strong className="text-blue-300">3.5% average click-through rate</strong>.
                </p>
                <p className="mt-3">
                  Our expertise spans all major platforms: <strong className="text-blue-300">Google Display Network</strong> - Reach 90%+ of internet users across millions of websites. <strong className="text-blue-300">Facebook & Instagram Ads</strong> - Visual campaigns optimized for social media engagement. <strong className="text-blue-300">Programmatic Advertising</strong> - Automated ad buying with advanced targeting and real-time bidding. <strong className="text-blue-300">Remarketing Campaigns</strong> - Re-engage visitors who showed interest but didn&apos;t convert.
                </p>
                <p className="mt-3">
                  We provide complete transparency with detailed monthly reports, dedicated account management, creative design excellence, and data-driven optimization. Our Mumbai-based team understands local markets while leveraging global best practices to maximize your ROI.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">💰</span>
                  <span>How much does Display Advertising cost in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>
                  Display advertising costs vary based on ad spend, platforms, and campaign complexity. Here&apos;s our transparent pricing structure:
                </p>
                <p className="mt-3">
                  <strong className="text-green-300">Starter Package (₹15,000-30,000/month):</strong> Perfect for small businesses testing display advertising. Includes basic GDN campaign setup, 5-10 banner ad designs (static), audience targeting, monthly performance reports, and campaign management. Ad spend: ₹10,000-20,000/month.
                </p>
                <p className="mt-3">
                  <strong className="text-green-300">Professional Package (₹30,000-75,000/month):</strong> Ideal for growing businesses. Includes multi-platform campaigns (GDN + Facebook/Instagram), 15-20 banner designs (static + animated), remarketing setup, advanced audience segmentation, A/B testing, bi-weekly optimization, and detailed analytics. Ad spend: ₹25,000-50,000/month.
                </p>
                <p className="mt-3">
                  <strong className="text-green-300">Enterprise Package (₹75,000-3,00,000/month):</strong> For established brands with serious growth goals. Includes comprehensive multi-platform strategy, unlimited banner designs (including HTML5 & rich media), programmatic advertising, dynamic remarketing, custom audience creation, weekly optimization calls, dedicated account manager, and full creative team access. Ad spend: ₹1,00,000+/month.
                </p>
                <p className="mt-3">
                  All packages include professional creative services, campaign setup and management, performance tracking, and monthly optimization. ROI-focused approach ensures every rupee delivers maximum value.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📊</span>
                  <span>What&apos;s the Display Advertising process at MyDigital Crown?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>
                  Our proven 6-phase process ensures campaign success:
                </p>
                <p className="mt-3">
                  <strong className="text-purple-300">Phase 1: Strategy & Discovery (Days 1-3)</strong> - In-depth consultation to understand your business, target audience, goals, and competitors. We define campaign objectives, budget allocation, and success metrics. Competitive analysis and market research ensure strategic positioning.
                </p>
                <p className="mt-3">
                  <strong className="text-purple-300">Phase 2: Creative Development (Days 4-7)</strong> - Our design team creates eye-catching banner ads in all required sizes (leaderboard, skyscraper, rectangle, mobile). Multiple design concepts presented with brand alignment. Animated GIFs or HTML5 rich media for premium engagement.
                </p>
                <p className="mt-3">
                  <strong className="text-purple-300">Phase 3: Campaign Setup (Days 8-10)</strong> - Platform configuration across GDN, Facebook, or programmatic networks. Audience targeting setup (demographics, interests, behaviors, remarketing lists). Budget allocation and bidding strategy implementation. Ad placements and exclusions configured.
                </p>
                <p className="mt-3">
                  <strong className="text-purple-300">Phase 4: Testing & Launch (Days 11-14)</strong> - A/B testing of multiple ad variations. Soft launch with limited budget to validate performance. Real-time monitoring and quick adjustments. Full campaign launch after testing validation.
                </p>
                <p className="mt-3">
                  <strong className="text-purple-300">Phase 5: Optimization (Ongoing)</strong> - Weekly performance analysis and optimization. Audience refinement based on conversion data. Creative refresh when ad fatigue detected. Budget reallocation to top-performing ads and placements. Landing page recommendations for better conversion rates.
                </p>
                <p className="mt-3">
                  <strong className="text-purple-300">Phase 6: Reporting & Growth (Monthly)</strong> - Detailed monthly reports with impressions, clicks, CTR, conversions, and ROI. Strategic planning calls to discuss performance and next steps. Recommendations for scaling successful campaigns. Quarterly strategic reviews for long-term growth planning.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">⏱️</span>
                  <span>How long does it take to see results from Display Advertising?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>
                  Display advertising results manifest in distinct phases:
                </p>
                <p className="mt-3">
                  <strong className="text-yellow-300">Immediate Results (24-48 hours):</strong> Campaigns go live and start generating impressions immediately. You&apos;ll see your ads appearing across chosen websites and platforms. Initial traffic begins flowing to your website. First clicks and website visits recorded in analytics.
                </p>
                <p className="mt-3">
                  <strong className="text-yellow-300">Early Performance Data (Week 1-2):</strong> Meaningful data on impressions, clicks, and CTR accumulates. We identify which ad variations and placements perform best. Initial optimizations made to improve performance. Audience behavior patterns begin emerging. Early conversions tracked (though limited data for full analysis).
                </p>
                <p className="mt-3">
                  <strong className="text-yellow-300">Optimization Phase (Weeks 3-4):</strong> Sufficient data for comprehensive performance analysis. Major optimizations implemented based on real performance data. Underperforming elements paused or refined. Budget reallocated to best-performing ads and audiences. Conversion tracking provides ROI insights.
                </p>
                <p className="mt-3">
                  <strong className="text-yellow-300">Mature Performance (Months 2-3):</strong> Campaigns reach peak efficiency with full optimization. Consistent results with predictable ROI metrics. Remarketing audiences mature providing better conversion rates. Brand awareness measurably increases in target market. Cost per acquisition decreases as campaigns optimize. Scaling opportunities identified for business growth.
                </p>
                <p className="mt-3">
                  Most clients see positive ROI within the first month, though optimal performance develops over 2-3 months as campaigns mature and optimization compounds results.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🎨</span>
                  <span>What ad formats and sizes do you create for Display campaigns?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>
                  We create comprehensive ad formats optimized for maximum reach and engagement across all platforms:
                </p>
                <p className="mt-3">
                  <strong className="text-pink-300">Standard Display Sizes (Google Display Network):</strong> Leaderboard (728x90), Large Rectangle (336x280), Medium Rectangle (300x250), Wide Skyscraper (160x600), Mobile Banner (320x50), Mobile Large Banner (320x100), Half Page (300x600), Large Leaderboard (970x90). All designed in static JPG/PNG and animated GIF formats.
                </p>
                <p className="mt-3">
                  <strong className="text-pink-300">Responsive Display Ads:</strong> Automatically adapt to any ad space size. Include headlines, descriptions, images, and logos. AI-powered optimization for best-performing combinations. Maximum reach across entire display network.
                </p>
                <p className="mt-3">
                  <strong className="text-pink-300">Rich Media & HTML5 Ads:</strong> Interactive elements like expandable banners, video integration, carousel formats, countdown timers, product feeds, and gaming elements. Created for premium placements requiring advanced engagement.
                </p>
                <p className="mt-3">
                  <strong className="text-pink-300">Social Media Display Ads:</strong> Facebook Feed Ads (1200x628), Instagram Feed Posts (1080x1080), Instagram Stories (1080x1920), LinkedIn Sponsored Content (1200x627), Twitter In-Feed Ads (1200x675). All optimized for each platform&apos;s specifications and best practices.
                </p>
                <p className="mt-3">
                  <strong className="text-pink-300">Video Display Ads:</strong> Pre-roll, mid-roll, and post-roll video formats. Bumper ads (6 seconds), Standard video ads (15-30 seconds), YouTube TrueView Ads, In-feed video ads, OutStream video ads. Professional video production available.
                </p>
                <p className="mt-3">
                  Each ad format undergoes quality assurance testing across devices and browsers to ensure perfect rendering and maximum impact.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                  <span>How does audience targeting work in Display Advertising?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>
                  Display advertising offers sophisticated targeting capabilities to ensure your ads reach the right people at the right time:
                </p>
                <p className="mt-3">
                  <strong className="text-cyan-300">Demographic Targeting:</strong> Age ranges (18-24, 25-34, 35-44, 45-54, 55-64, 65+), Gender (male, female, all genders), Parental status (parents, non-parents), Household income brackets. Perfect for products/services with specific demographic appeal.
                </p>
                <p className="mt-3">
                  <strong className="text-cyan-300">Interest-Based Targeting (Affinity Audiences):</strong> Reach users based on long-term interests and habits - Sports enthusiasts, Technology early adopters, Business professionals, Fashion & beauty lovers, Travel & tourism interests, Food & dining aficionados. Google tracks user behavior across sites to build detailed interest profiles.
                </p>
                <p className="mt-3">
                  <strong className="text-cyan-300">In-Market Audiences:</strong> Target users actively researching or ready to purchase specific products/services. Car buyers, Real estate shoppers, Business services seekers, Technology purchasers, Travel planners. Higher conversion rates as these users have purchase intent.
                </p>
                <p className="mt-3">
                  <strong className="text-cyan-300">Custom Intent Audiences:</strong> Create custom audiences based on specific keywords users search for, websites they visit, and apps they use. Highly targeted to your exact customer profile.
                </p>
                <p className="mt-3">
                  <strong className="text-cyan-300">Remarketing Audiences:</strong> Website visitors who didn&apos;t convert, Specific product page viewers, Cart abandoners, Video viewers, App users, Email list uploads. Remarketing typically shows 2-3X higher conversion rates than cold traffic.
                </p>
                <p className="mt-3">
                  <strong className="text-cyan-300">Contextual & Placement Targeting:</strong> Display ads on websites about specific topics, Choose exact websites and YouTube channels, Geographic targeting (countries, cities, postal codes, radius targeting). We combine multiple targeting methods for precision reach while maintaining sufficient audience size for campaign scale.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">📈</span>
                  <span>What platforms and networks do you use for Display Advertising?</span>
                </span>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>
                  We leverage all major display advertising platforms to maximize your reach and results:
                </p>
                <p className="mt-3">
                  <strong className="text-red-300">Google Display Network (GDN):</strong> Reaches 90%+ of internet users worldwide across 2+ million websites and apps. YouTube advertising integration, Gmail sponsored promotions, Google Maps display ads, Partner websites and blogs. Advanced targeting and measurement tools. Best for broad reach and remarketing campaigns.
                </p>
                <p className="mt-3">
                  <strong className="text-red-300">Facebook & Instagram Ads:</strong> 2.9+ billion combined monthly active users globally. Feed ads, Stories ads, Reels advertising, Messenger sponsored messages, Audience Network extending to third-party apps and sites. Powerful social targeting based on interests, behaviors, connections. Excellent for B2C brands with visual products.
                </p>
                <p className="mt-3">
                  <strong className="text-red-300">LinkedIn Advertising:</strong> Premier platform for B2B display advertising. Target by job title, company size, industry, seniority, skills. Sponsored Content in news feed, Dynamic Ads personalized to viewers, Text & Image Ads in sidebar. Perfect for professional services, SaaS, and B2B products.
                </p>
                <p className="mt-3">
                  <strong className="text-red-300">Programmatic Advertising Platforms:</strong> Google DV360 (Display & Video 360) for enterprise campaigns, Automated ad buying across multiple ad exchanges, Real-time bidding (RTB) for cost efficiency, Private marketplace deals for premium inventory, Advanced audience segmentation and lookalike modeling. Ideal for sophisticated campaigns requiring maximum control.
                </p>
                <p className="mt-3">
                  <strong className="text-red-300">Native Advertising Networks:</strong> Taboola and Outbrain for content discovery ads, Ads appear as natural content recommendations, High engagement on news and content sites, Perfect for driving blog traffic and brand storytelling.
                </p>
                <p className="mt-3">
                  We recommend platform combinations based on your target audience, budget, and campaign goals. Most clients benefit from multi-platform strategies leveraging GDN for reach and Facebook/Instagram for engagement.
                </p>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-indigo-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🔄</span>
                  <span>How do you optimize Display campaigns for better performance?</span>
                </span>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>
                  Continuous optimization is key to display advertising success. Our comprehensive optimization process includes:
                </p>
                <p className="mt-3">
                  <strong className="text-indigo-300">Creative Optimization:</strong> A/B test multiple banner variations (headlines, images, colors, CTAs). Refresh creative every 30-45 days to prevent ad fatigue. Analyze which designs drive highest CTR and conversions. Create new variations based on top performers. Video ad optimization for completion rates and engagement.
                </p>
                <p className="mt-3">
                  <strong className="text-indigo-300">Audience Refinement:</strong> Analyze demographic performance data and adjust targeting. Identify highest-converting audience segments. Create lookalike audiences from converters. Exclude non-converting audiences to reduce waste. Build remarketing lists from specific user behaviors. Layer multiple targeting options for precision.
                </p>
                <p className="mt-3">
                  <strong className="text-indigo-300">Placement Optimization:</strong> Review site-level performance data weekly. Pause underperforming websites and apps. Increase bids on top-converting placements. Exclude irrelevant or low-quality sites. Find and target high-performing niche websites. Manage automatic and manual placements strategically.
                </p>
                <p className="mt-3">
                  <strong className="text-indigo-300">Bid & Budget Management:</strong> Adjust bids based on device, location, time of day performance. Implement dayparting for optimal ad delivery timing. Reallocate budget from poor performers to winners. Test smart bidding strategies (Target CPA, Target ROAS). Cap frequency to prevent overexposure. Monitor auction insights for competitive positioning.
                </p>
                <p className="mt-3">
                  <strong className="text-indigo-300">Landing Page Optimization:</strong> Ensure message match between ads and landing pages. Recommend A/B testing landing page variants. Improve page load speed for better conversion rates. Mobile optimization for mobile traffic. Clear call-to-action and minimal form fields. Trust signals and social proof integration.
                </p>
                <p className="mt-3">
                  <strong className="text-indigo-300">Conversion Tracking & Attribution:</strong> Set up comprehensive conversion tracking. Analyze full customer journey across touchpoints. Understand assisted conversions from display ads. Optimize for post-view conversions (brand awareness impact). Multi-touch attribution modeling for complex sales cycles.
                </p>
                <p className="mt-3">
                  Our optimization process is data-driven and continuous, with weekly reviews and adjustments ensuring your campaigns improve consistently over time.
                </p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-lime-500/20 hover:border-lime-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-lime-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">💎</span>
                  <span>What reporting and analytics do you provide for Display campaigns?</span>
                </span>
                <svg className="w-7 h-7 text-lime-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>
                  Complete transparency through comprehensive reporting and analytics:
                </p>
                <p className="mt-3">
                  <strong className="text-lime-300">Monthly Performance Reports Include:</strong> Campaign overview and executive summary, Total impressions, clicks, and click-through rate (CTR), Cost per click (CPC) and cost per acquisition (CPA), Conversions by campaign, ad group, and ad variation, Audience performance breakdown, Geographic and device performance, Top performing placements and websites, Creative performance comparison, Budget utilization and pacing, ROI and ROAS calculations, Month-over-month performance trends, Insights and recommendations for improvement.
                </p>
                <p className="mt-3">
                  <strong className="text-lime-300">Real-Time Dashboard Access:</strong> We provide clients access to live dashboards showing: Current campaign status and spend, Today&apos;s impressions and clicks in real-time, Active ad variations and performance, Audience and placement data, Conversion tracking, Alerts for budget or performance issues. Check performance anytime without waiting for monthly reports.
                </p>
                <p className="mt-3">
                  <strong className="text-lime-300">Advanced Analytics:</strong> Google Analytics integration for full website behavior analysis, Conversion funnel tracking showing drop-off points, Attribution modeling across multiple touchpoints, View-through conversion tracking for brand awareness impact, Audience insights revealing customer demographics and interests, Competitive benchmarking against industry averages, Lifetime value analysis for long-term campaign optimization.
                </p>
                <p className="mt-3">
                  <strong className="text-lime-300">Strategic Planning Calls:</strong> Monthly review calls to discuss performance, Quarterly strategic planning sessions, Ad-hoc calls for urgent issues or opportunities, Screen sharing to review analytics together, Action plan documentation for next month. We believe in partnership through communication - you&apos;re never left wondering about campaign performance or results.
                </p>
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:border-teal-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-teal-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🌐</span>
                  <span>Can Display Advertising work for my industry and business type?</span>
                </span>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>
                  Display advertising works effectively across virtually all industries and business types. Here&apos;s how different sectors benefit:
                </p>
                <p className="mt-3">
                  <strong className="text-teal-300">E-commerce & Retail:</strong> Product showcases in banner ads, Dynamic remarketing showing products viewers browsed, Seasonal promotions and sale campaigns, Cart abandonment recovery, New product launches, Cross-selling and upselling to existing customers. Display ads are exceptionally effective for visual products - fashion, electronics, home goods, etc.
                </p>
                <p className="mt-3">
                  <strong className="text-teal-300">B2B Services:</strong> Brand awareness among decision-makers, Thought leadership content promotion, Webinar and event registration drives, Lead magnet distribution (whitepapers, guides), Remarketing to website visitors with long sales cycles, Account-based marketing to specific companies. LinkedIn and GDN excel for professional services, software, consulting.
                </p>
                <p className="mt-3">
                  <strong className="text-teal-300">Real Estate & Property:</strong> Property listing promotions, Open house event advertising, Neighborhood and project awareness, Virtual tour promotion, Remarketing to property searchers, Lead generation for inquiry forms. Visual nature makes display perfect for showcasing properties.
                </p>
                <p className="mt-3">
                  <strong className="text-teal-300">Education & Training:</strong> Course enrollment campaigns, Student testimonial ads, Scholarship and admission promotions, Webinar and seminar registration, Educational content distribution, Remarketing to prospective students. Works excellently for colleges, coaching institutes, online courses.
                </p>
                <p className="mt-3">
                  <strong className="text-teal-300">Healthcare & Wellness:</strong> Service awareness (clinics, hospitals, specialists), Health package promotions, Appointment booking drives, Health awareness campaigns, Medical device/supplement advertising, Patient testimonial and case studies. Strict compliance with healthcare advertising regulations maintained.
                </p>
                <p className="mt-3">
                  <strong className="text-teal-300">Hospitality & Travel:</strong> Hotel and resort booking promotions, Tour package showcases, Restaurant and dining offers, Event venue advertising, Travel destination awareness, Last-minute deal promotions. Visual impact drives excellent results for travel and hospitality.
                </p>
                <p className="mt-3">
                  Regardless of your industry, if you have a visual story to tell or an audience to reach online, display advertising can deliver results. We tailor strategies to your specific business goals and customer journey.
                </p>
              </div>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-rose-500/20 hover:border-rose-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-rose-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🚀</span>
                  <span>How do I get started with Display Advertising in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-rose-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>
                  Getting started with display advertising is simple and straightforward with MyDigital Crown:
                </p>
                <p className="mt-3">
                  <strong className="text-rose-300">Step 1: Free Consultation (30 minutes):</strong> Schedule a call or meeting at our Mumbai office. Discuss your business goals, target audience, and budget. We&apos;ll explain how display advertising fits your marketing strategy. Review case studies relevant to your industry. Get honest assessment of potential results and ROI. No obligation - just expert advice to help you make informed decisions.
                </p>
                <p className="mt-3">
                  <strong className="text-rose-300">Step 2: Custom Proposal & Strategy (2-3 days):</strong> We prepare a detailed proposal outlining: Recommended platforms and targeting approach, Budget allocation across channels, Expected results and timeline, Creative concepts and ad formats, Pricing and package options, Campaign timeline and milestones. Transparent pricing with no hidden fees.
                </p>
                <p className="mt-3">
                  <strong className="text-rose-300">Step 3: Onboarding & Setup (Week 1):</strong> Sign agreement and make initial payment (50% upfront, 50% after campaign launch). Complete onboarding questionnaire. Provide brand assets (logos, product images, brand guidelines). Grant access to existing advertising accounts or we create new ones. Initial creative brief and strategy finalization.
                </p>
                <p className="mt-3">
                  <strong className="text-rose-300">Step 4: Creative Development & Campaign Launch (Weeks 2-3):</strong> Our design team creates banner ads for approval. Platform setup and configuration. Conversion tracking implementation. Final approval on creative and targeting. Campaign launch with initial optimization. Welcome kit with dashboard access and reporting schedule.
                </p>
                <p className="mt-3">
                  <strong className="text-rose-300">Step 5: Ongoing Partnership:</strong> Weekly optimization and monitoring, Monthly performance reports, Regular strategy calls, Continuous improvement and scaling, Responsive support for questions and concerns.
                </p>
                <p className="mt-3">
                  <strong className="text-rose-300">Ready to Start?</strong> Call us at <strong className="text-white">+91-83695-11877</strong> or visit our Chembur office in Mumbai. Email <strong className="text-white">info@mydigitalcrown.in</strong> with your requirements. Book a free consultation through our website contact form. We typically respond within 2 hours during business hours.
                </p>
                <p className="mt-3">
                  Our goal is to make display advertising accessible, effective, and profitable for Mumbai businesses of all sizes. Let&apos;s grow your brand visibility and sales together!
                </p>
              </div>
            </details>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 animate-bounce"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">Still Have Questions?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our display advertising experts are ready to help you create campaigns that drive results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  <span>Get Free Consultation</span>
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <a href="tel:+918369511877" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all transform hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Call: +91-83695-11877</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
