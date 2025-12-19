import { Metadata } from 'next';
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import TrustedBrands from '@/app/components/TrustedBrands'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'CMS Developer Mumbai | WordPress Drupal Expert | MyDigital',
  description: 'CMS Developer Mumbai. 1000+ Projects | WordPress, Drupal & Custom CMS | 10+ Years Experience | SEO-Friendly. Call +91-83695-11877',
  keywords: [
    // Primary Keywords
    'cms developer mumbai',
    'cms developer in mumbai',
    'cms development mumbai',
    'cms development company mumbai',
    'cms development services mumbai',
    
    // Service-Specific Keywords
    'wordpress developer mumbai',
    'drupal developer mumbai',
    'joomla developer mumbai',
    'custom cms development',
    'headless cms development',
    'cms website development',
    'content management system',
    'cms integration services',
    
    // Long-tail Keywords (VSO)
    'best cms developer mumbai',
    'cms developer near me',
    'hire cms developer in mumbai',
    'expert cms programmer mumbai',
    'professional cms developer',
    'cms development agency mumbai',
    
    // Solution-Based Keywords
    'wordpress website development',
    'drupal website development',
    'ecommerce cms development',
    'enterprise cms solutions',
    'cms migration services',
    'cms customization',
    'cms theme development',
    'cms plugin development',
    
    // Location-Based Keywords
    'mumbai cms developer',
    'cms developer andheri',
    'cms developer bandra',
    'cms agency mumbai',
    'cms company mumbai',
    
    // Technology Keywords
    'wordpress cms',
    'drupal cms',
    'joomla cms',
    'strapi cms',
    'contentful cms',
    'sanity cms',
    'headless cms',
    'php cms development',
    'nodejs cms development',
    
    // Feature Keywords
    'multi user cms',
    'seo friendly cms',
    'scalable cms',
    'secure cms development',
    'responsive cms',
    'multilingual cms',
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'CMS Development Services',
  classification: 'WordPress, Drupal & Custom CMS Development',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mydigitalcrown.in'),
  alternates: {
    canonical: '/services/cms',
  },
  openGraph: {
    title: 'CMS Developer in Mumbai | #1 WordPress, Drupal & Custom CMS Development | MyDigital Crown',
    description: 'Top CMS Developer in Mumbai. Expert WordPress, Drupal, Joomla & Custom CMS development. 1000+ projects delivered. Call +91-83695-11877!',
    url: 'https://mydigitalcrown.in/services/cms',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/cms-developer-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'CMS Developer in Mumbai - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CMS Developer in Mumbai | WordPress, Drupal & Custom CMS Expert | MyDigital Crown',
    description: 'Top CMS Developer in Mumbai. 1000+ CMS projects delivered. Expert WordPress, Drupal, Custom CMS development. Call +91-83695-11877!',
    images: ['https://mydigitalcrown.in/images/cms-developer-mumbai.jpg'],
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
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://mydigitalcrown.in/services/cms#service",
      "serviceType": "CMS Developer Services",
      "provider": {
        "@id": "https://mydigitalcrown.in/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai",
        "@id": "https://mydigitalcrown.in/mumbai"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "CMS Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WordPress Development",
              "description": "Custom WordPress website development, theme customization, plugin development, and WooCommerce integration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Drupal Development",
              "description": "Enterprise Drupal CMS development, module development, custom themes, and multi-site solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Joomla Development",
              "description": "Joomla website development, extension development, template customization, and migration services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom CMS Development",
              "description": "Bespoke content management system development tailored to specific business requirements"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Headless CMS Development",
              "description": "Modern headless CMS solutions using Strapi, Contentful, Sanity for API-first architecture"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CMS Migration Services",
              "description": "Seamless migration from one CMS platform to another with zero data loss and minimal downtime"
            }
          }
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://mydigitalcrown.in/#organization",
      "name": "MyDigital Crown",
      "url": "https://mydigitalcrown.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mydigitalcrown.in/logo.png",
        "width": 250,
        "height": 60
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://mydigitalcrown.in/images/cms-developer-mumbai.jpg",
        "width": 1200,
        "height": 630
      },
      "description": "Top CMS Developer In Mumbai. Expert WordPress, Drupal, Joomla & Custom CMS development. 1000+ CMS projects delivered, 10+ years experience.",
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
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-83695-11877",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.facebook.com/mydigitalcrown",
        "https://www.instagram.com/mydigitalcrown",
        "https://www.linkedin.com/company/mydigitalcrown",
        "https://twitter.com/mydigitalcrown"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "1000"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://mydigitalcrown.in/services/cms#webpage",
      "url": "https://mydigitalcrown.in/services/cms",
      "name": "CMS Developer In Mumbai | #1 WordPress, Drupal & Custom CMS Development Company | MyDigital Crown",
      "isPartOf": {
        "@id": "https://mydigitalcrown.in/#website"
      },
      "about": {
        "@id": "https://mydigitalcrown.in/services/cms#service"
      },
      "description": "Top CMS Developer In Mumbai. Expert WordPress, Drupal, Joomla & Custom CMS development. 1000+ CMS projects delivered.",
      "breadcrumb": {
        "@id": "https://mydigitalcrown.in/services/cms#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mydigitalcrown.in/services/cms#breadcrumb",
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
          "name": "CMS Developer",
          "item": "https://mydigitalcrown.in/services/cms"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://mydigitalcrown.in/services/cms#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What CMS platforms does MyDigital Crown specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in WordPress (custom themes, plugins, WooCommerce), Drupal (enterprise solutions, custom modules, multi-site), Joomla (extensions, templates, migrations), Custom CMS (bespoke solutions built from scratch), Headless CMS (Strapi, Contentful, Sanity, Ghost), and offer CMS migration services from any platform. All CMS solutions are SEO-friendly, secure, scalable, and mobile-responsive with comprehensive training and documentation."
          }
        },
        {
          "@type": "Question",
          "name": "How much does CMS development cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CMS development packages range from ₹25,000 to ₹5,00,000. Basic WordPress site: ₹25,000-₹50,000 (5-8 pages, responsive design, basic plugins). Business WordPress/Joomla: ₹75,000-₹1,50,000 (15-20 pages, custom design, advanced features). Enterprise Drupal: ₹2,00,000-₹3,50,000 (multi-site, custom modules, integrations). Custom CMS: ₹3,00,000-₹5,00,000 (tailored solution, full ownership). All packages include free SSL, 3 months support, training, SEO optimization, and mobile responsiveness. 20% discount this month."
          }
        },
        {
          "@type": "Question",
          "name": "Which CMS platform should I choose for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WordPress is best for blogs, small-medium businesses, e-commerce (WooCommerce), quick deployment, and content-heavy sites. Drupal is ideal for enterprise websites, complex data structures, high-traffic sites, multi-site networks, and government/education portals. Joomla suits medium-sized businesses, community portals, social networking sites, and multi-language sites. Custom CMS is perfect for unique requirements, full control, specific workflows, and proprietary features. Headless CMS works for omnichannel content, API-first approach, modern tech stack (React, Next.js), and mobile apps. We provide free consultation to recommend the best platform based on your budget, timeline, technical requirements, scalability needs, and team expertise."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between WordPress and Drupal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WordPress: Easier to learn and use, 60,000+ plugins available, perfect for SMEs and blogs, faster initial setup (1-2 weeks), lower development cost (₹25,000-₹1,50,000), massive community support, great for content marketing. Drupal: Steeper learning curve but more powerful, enterprise-grade security, better for complex sites, robust content architecture, superior performance at scale, highly customizable, ideal for large organizations, longer development time (4-6 weeks), higher cost (₹2,00,000-₹3,50,000). Both are open-source, SEO-friendly, mobile-responsive, regularly updated, and scalable. We recommend WordPress for 70% of businesses and Drupal for complex enterprise needs."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure CMS security?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our comprehensive security measures include regular updates (core CMS, plugins, themes updated weekly), security plugins (Wordfence, Sucuri, iThemes Security), SSL certificates (free Let's Encrypt or premium), firewall protection (Web Application Firewall configured), secure hosting (reputable providers with DDoS protection), strong authentication (2FA, strong password policies, limited login attempts), regular backups (daily automated backups, offsite storage, quick restore capability), security audits (monthly vulnerability scans, penetration testing, code reviews), malware scanning (real-time monitoring, immediate threat removal), and user permissions (role-based access control, principle of least privilege). We also provide security training, incident response plan, 24/7 monitoring, and comply with GDPR and data protection regulations."
          }
        },
        {
          "@type": "Question",
          "name": "Can you migrate my existing website to a new CMS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer comprehensive CMS migration services with zero data loss and minimal downtime. Our proven 5-phase migration process: Phase 1 - Analysis (audit current site, identify content types, plan migration strategy, estimate timeline), Phase 2 - Preparation (setup new CMS, configure hosting, install required plugins/modules, create backup plan), Phase 3 - Content Migration (migrate all pages, posts, media files, preserve URL structure, maintain SEO rankings), Phase 4 - Testing (functionality testing, broken link checks, performance optimization, cross-browser testing, mobile responsiveness), Phase 5 - Go-Live (DNS update, 301 redirects setup, post-migration monitoring, SEO verification). We've successfully migrated 200+ websites from Joomla to WordPress, Drupal to WordPress, custom CMS to Drupal, HTML sites to WordPress, Wix/Squarespace to WordPress. Migration timeline: 1-3 weeks depending on site size. Pricing: ₹15,000-₹1,00,000 based on complexity."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide CMS customization services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We offer extensive CMS customization including custom theme development (unique designs matching brand identity, responsive layouts, optimized performance), plugin/module development (custom functionality, third-party integrations, API connections), e-commerce customization (WooCommerce, Drupal Commerce, custom checkout flows, payment gateways), membership systems (user registration, subscription management, content restriction, member dashboards), multi-language setup (WPML, Polylang, Drupal multilingual, automatic translation), advanced features (custom post types, taxonomies, meta boxes, shortcodes, widgets), performance optimization (caching, CDN integration, database optimization, image optimization), and SEO enhancements (schema markup, XML sitemaps, breadcrumbs, meta tags). All customizations are fully documented, upgrade-safe, and include training. We also provide ongoing customization support with monthly retainer packages starting at ₹15,000/month."
          }
        },
        {
          "@type": "Question",
          "name": "Which CMS is best for e-commerce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For e-commerce, we recommend WordPress + WooCommerce (best for small-medium stores, 100-5000 products, easy to manage, 1000+ extensions, cost-effective ₹50,000-₹1,50,000, perfect for startups), Drupal Commerce (enterprise e-commerce, complex product catalogs, custom workflows, multi-store management, ₹2,00,000-₹4,00,000, ideal for B2B), or Headless CMS (modern architecture, omnichannel selling, API-first approach, custom frontend, ₹3,00,000+, best for unique UX). All our e-commerce CMS solutions include product management, inventory tracking, multiple payment gateways (Razorpay, PayU, CCAvenue, Stripe, PayPal), shipping integration, tax calculation, order management, customer accounts, coupon/discount system, abandoned cart recovery, email notifications, mobile-responsive checkout, and SEO optimization. We also handle PCI compliance, security hardening, performance optimization for high traffic, and integration with accounting software, CRM, and marketplaces."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide CMS maintenance and support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer comprehensive CMS maintenance packages: Basic Support (₹5,000/month) - monthly updates, daily backups, uptime monitoring, email support, 2 hours changes. Professional Support (₹10,000/month) - weekly updates, real-time backups, security monitoring, priority support, 5 hours changes, performance optimization. Enterprise Support (₹20,000/month) - daily updates, hourly backups, 24/7 monitoring, dedicated manager, 15 hours changes, emergency support, advanced security. All packages include core CMS updates, plugin/theme updates, security patches, malware scanning, broken link fixes, performance monitoring, uptime guarantee 99.9%, regular health checks, monthly reports, and emergency support. Additional services available: content updates, design changes, new feature development, SEO maintenance, speed optimization, database cleanup. All maintenance includes 3 months free with new development projects. We also offer pay-as-you-go hourly support at ₹1,500/hour for occasional needs."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with CMS development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting started is simple with our streamlined 6-step process: Step 1 - Free Consultation (30-minute call to discuss requirements, business goals, content needs, budget, timeline). Step 2 - Proposal & Planning (CMS platform recommendation, feature list, sitemap, wireframes, detailed timeline, transparent pricing quote). Step 3 - Design Approval (custom design mockups, revisions until perfect, brand alignment, user experience focus). Step 4 - Development (CMS installation, theme/plugin development, content migration, feature integration, regular progress updates). Step 5 - Testing & Training (functionality testing, browser compatibility, mobile testing, content management training, admin panel walkthrough). Step 6 - Launch & Support (DNS setup, go-live, post-launch monitoring, 3 months free support, ongoing maintenance option). Ready to start? Contact us at +91-83695-11877 or fill our enquiry form. We typically respond within 2 hours and can start projects within 3-5 business days. First consultation is completely free with no obligations."
          }
        },
        {
          "@type": "Question",
          "name": "What are typical CMS development timelines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CMS development timelines vary by complexity: Basic WordPress Site (1-2 weeks) - 5-8 pages, template customization, basic plugins, content upload, ideal for startups and small businesses. Business Website (3-4 weeks) - 15-20 pages, custom design, advanced features, blog setup, SEO optimization, contact forms, suitable for growing businesses. E-commerce Store (4-6 weeks) - product catalog setup, payment integration, shipping configuration, inventory management, order processing, perfect for online retailers. Enterprise Drupal (6-10 weeks) - complex architecture, custom modules, multi-site setup, extensive testing, integrations, best for large organizations. Custom CMS (8-12 weeks) - requirements analysis, custom development, unique features, comprehensive testing, documentation, ideal for specific needs. Timelines include planning (10%), design (20%), development (40%), testing (20%), launch (10%). Rush delivery available with 30% premium for 40% faster completion. Most projects start within 3-5 days of agreement. We provide detailed project timeline with milestones, weekly progress updates, and transparent tracking throughout development."
          }
        },
        {
          "@type": "Question",
          "name": "How do you optimize CMS for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our comprehensive CMS SEO optimization includes technical SEO (clean URL structure, XML sitemaps, robots.txt, canonical tags, schema markup, breadcrumbs, fast loading speed, mobile-responsive design, HTTPS/SSL), on-page SEO (meta titles and descriptions, heading hierarchy, image alt tags, internal linking, keyword optimization, content optimization), SEO plugins (Yoast SEO for WordPress, Metatag module for Drupal, comprehensive configuration, regular updates), performance optimization (caching, CDN integration, image compression, minification, lazy loading, database optimization), and content features (blog functionality, categories and tags, author profiles, social sharing, related posts). We also implement local SEO (Google My Business integration, local schema markup, NAP consistency), monitor Core Web Vitals, conduct regular SEO audits, provide SEO training for content teams, and offer ongoing SEO support packages starting at ₹8,000/month. All our CMS builds achieve 90+ PageSpeed scores and are optimized for voice search and featured snippets."
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://mydigitalcrown.in/#localbusiness",
      "name": "MyDigital Crown - CMS Developer Agency",
      "image": "https://mydigitalcrown.in/images/cms-developer-mumbai.jpg",
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
      "url": "https://mydigitalcrown.in/services/cms",
      "priceRange": "₹₹₹",
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
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "1000"
      }
    },
    {
      "@type": "Review",
      "@id": "https://mydigitalcrown.in/services/cms#review",
      "itemReviewed": {
        "@id": "https://mydigitalcrown.in/services/cms#service"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Sharma"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "MyDigital Crown developed our enterprise Drupal website and the results exceeded expectations. Their team's expertise in CMS development is outstanding. The platform is easy to manage, SEO-optimized, and handles our high traffic effortlessly. Highly recommend!"
    },
    {
      "@type": "AggregateRating",
      "@id": "https://mydigitalcrown.in/services/cms#rating",
      "itemReviewed": {
        "@id": "https://mydigitalcrown.in/services/cms#service"
      },
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1000",
      "reviewCount": "850"
    },
    {
      "@type": "HowTo",
      "@id": "https://mydigitalcrown.in/services/cms#howto",
      "name": "How to Develop a Professional CMS Website",
      "description": "Step-by-step guide to developing a professional content management system for your business",
      "totalTime": "P28D",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": "75000"
      },
      "step": [
        {
          "@type": "HowToStep",
          "name": "Choose CMS Platform",
          "text": "Select the right CMS platform based on business requirements, budget, and scalability needs - WordPress, Drupal, Joomla, or Custom CMS",
          "position": 1
        },
        {
          "@type": "HowToStep",
          "name": "Design & Planning",
          "text": "Create wireframes, design mockups, plan site architecture, and define features and functionality requirements",
          "position": 2
        },
        {
          "@type": "HowToStep",
          "name": "Development & Integration",
          "text": "Install CMS, develop custom themes/plugins, integrate third-party services, and implement required features",
          "position": 3
        },
        {
          "@type": "HowToStep",
          "name": "Testing & Launch",
          "text": "Conduct thorough testing, optimize performance, train content team, and launch with ongoing support",
          "position": 4
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://mydigitalcrown.in/services/cms#article",
      "headline": "CMS Developer In Mumbai - Professional WordPress, Drupal & Custom CMS Development",
      "description": "Complete guide to CMS development services in Mumbai including WordPress, Drupal, Joomla, Custom CMS, Headless CMS, and migration services",
      "image": "https://mydigitalcrown.in/images/cms-developer-mumbai.jpg",
      "author": {
        "@id": "https://mydigitalcrown.in/#organization"
      },
      "publisher": {
        "@id": "https://mydigitalcrown.in/#organization"
      },
      "datePublished": "2024-01-15",
      "dateModified": "2025-10-11"
    },
    {
      "@type": "ItemList",
      "@id": "https://mydigitalcrown.in/services/cms#services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "WordPress Development",
          "url": "https://mydigitalcrown.in/services/cms#wordpress"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Drupal Development",
          "url": "https://mydigitalcrown.in/services/cms#drupal"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Joomla Development",
          "url": "https://mydigitalcrown.in/services/cms#joomla"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Custom CMS Development",
          "url": "https://mydigitalcrown.in/services/cms#custom"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Headless CMS Development",
          "url": "https://mydigitalcrown.in/services/cms#headless"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "CMS Migration Services",
          "url": "https://mydigitalcrown.in/services/cms#migration"
        }
      ]
    },
    {
      "@type": "Offer",
      "@id": "https://mydigitalcrown.in/services/cms#offer",
      "itemOffered": {
        "@id": "https://mydigitalcrown.in/services/cms#service"
      },
      "price": "75000",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-10-31",
      "availability": "https://schema.org/InStock",
      "url": "https://mydigitalcrown.in/services/cms",
      "seller": {
        "@id": "https://mydigitalcrown.in/#organization"
      },
      "discount": "20",
      "validFrom": "2025-10-01"
    },
    {
      "@type": "VideoObject",
      "@id": "https://mydigitalcrown.in/services/cms#video",
      "name": "CMS Development Services in Mumbai - MyDigital Crown",
      "description": "Learn how MyDigital Crown delivers professional CMS development services using WordPress, Drupal, and custom solutions",
      "thumbnailUrl": "https://mydigitalcrown.in/images/cms-developer-mumbai.jpg",
      "uploadDate": "2024-01-15",
      "duration": "PT5M30S",
      "contentUrl": "https://mydigitalcrown.in/services/cms"
    },
    {
      "@type": "Course",
      "@id": "https://mydigitalcrown.in/services/cms#course",
      "name": "CMS Development Fundamentals",
      "description": "Learn the fundamentals of CMS development including WordPress, Drupal, and best practices",
      "provider": {
        "@id": "https://mydigitalcrown.in/#organization"
      }
    },
    {
      "@type": "SpecialAnnouncement",
      "@id": "https://mydigitalcrown.in/services/cms#announcement",
      "name": "20% OFF on CMS Development Packages",
      "text": "Get 20% discount on all CMS development packages this month. WordPress, Drupal, Custom CMS - all included!",
      "datePosted": "2025-10-01",
      "expires": "2025-10-31",
      "category": "https://www.wikidata.org/wiki/Q178651"
    }
  ]
}

export default function CMSPage() {
  return (
    <>
      <Navbar />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Noscript Fallback */}
      <noscript>
        <div itemScope itemType="https://schema.org/Service">
          <meta itemProp="name" content="CMS Developer Services in Mumbai" />
          <meta itemProp="description" content="Top CMS Developer In Mumbai. Expert WordPress, Drupal, Joomla & Custom CMS development. 1000+ CMS projects delivered." />
          <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="MyDigital Crown" />
            <meta itemProp="telephone" content="+91-83695-11877" />
            <meta itemProp="email" content="info@mydigitalcrown.in" />
          </div>
        </div>
      </noscript>
      
      {/* Hero Section */}
      <section className="pt-16 py-16 bg-gradient-to-br from-emerald-800 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 to-teal-700/95"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s Leading CMS Development Company</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                CMS Developer In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto font-bold leading-relaxed">
                  🚀 Empower Your Business with <span className="text-lime-300">WordPress</span>, <span className="text-emerald-300">Drupal</span> & <span className="text-teal-300">Custom CMS</span> Solutions
                </h2>
                <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto font-semibold leading-relaxed">
                  Easy Content Management | SEO-Friendly | Scalable | Secure | Multi-User Support
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-lime-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    <span>Get Started Now</span>
                  </span>
                </Link>
                <a 
                  href="tel:+918369511877" 
                  className="group relative overflow-hidden bg-white text-emerald-600 border-4 border-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-emerald-100 to-white bg-clip-text mb-3">500+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">CMS Projects</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-emerald-100 to-white bg-clip-text mb-3">15+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">CMS Platforms</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-emerald-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Secure</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-emerald-100 to-white bg-clip-text mb-3">24/7</div>
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

      {/* Voice Search Quick Answers Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-lime-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎤</span>
              Quick Answers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Common <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Questions Answered</span>
            </h2>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Question 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" itemScope itemType="https://schema.org/Question">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" itemProp="name">Where is the best CMS developer in Mumbai?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-700 leading-relaxed mb-4" itemProp="text">
                  <strong className="text-emerald-600">MyDigital Crown in Chembur, Mumbai</strong> is the top choice for CMS development. We&apos;ve successfully delivered 1000+ CMS projects using WordPress, Drupal, Joomla, and custom solutions with 10+ years of expertise.
                </p>
                <div className="bg-emerald-50 rounded-xl p-4 border-l-4 border-emerald-500">
                  <p className="text-gray-800 font-semibold mb-2">✓ 1000+ CMS Projects Delivered</p>
                  <p className="text-gray-800 font-semibold mb-2">✓ WordPress & Drupal Experts</p>
                  <p className="text-gray-800 font-semibold mb-2">✓ Custom CMS Solutions</p>
                  <p className="text-gray-800 font-semibold">✓ 10+ Years Experience</p>
                </div>
                <div className="mt-6">
                  <a href="tel:+918369511877" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                    <span>📞</span>
                    Call +91-83695-11877
                  </a>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" itemScope itemType="https://schema.org/Question">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" itemProp="name">How much does CMS development cost in Mumbai?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-700 leading-relaxed mb-4" itemProp="text">
                  CMS development packages range based on platform and complexity. We offer flexible pricing with <strong className="text-teal-600">20% discount this month</strong>.
                </p>
                <div className="space-y-3">
                  <div className="bg-teal-50 rounded-xl p-4 border-l-4 border-teal-500">
                    <p className="font-bold text-gray-900">Basic WordPress Site</p>
                    <p className="text-gray-700">₹25,000 - ₹50,000</p>
                    <p className="text-sm text-gray-600">5-8 pages, responsive, basic plugins</p>
                  </div>
                  <div className="bg-teal-50 rounded-xl p-4 border-l-4 border-teal-500">
                    <p className="font-bold text-gray-900">Business WordPress/Joomla</p>
                    <p className="text-gray-700">₹75,000 - ₹1,50,000</p>
                    <p className="text-sm text-gray-600">15-20 pages, custom design, advanced features</p>
                  </div>
                  <div className="bg-teal-50 rounded-xl p-4 border-l-4 border-teal-500">
                    <p className="font-bold text-gray-900">Enterprise Drupal/Custom</p>
                    <p className="text-gray-700">₹2,00,000 - ₹5,00,000</p>
                    <p className="text-sm text-gray-600">Multi-site, custom modules, integrations</p>
                  </div>
                </div>
                <div className="mt-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-4 text-center">
                  <p className="font-bold text-lg">🎉 20% OFF This Month!</p>
                  <p className="text-sm">All CMS Development Packages</p>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-lime-100 hover:border-lime-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" itemScope itemType="https://schema.org/Question">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">⏱️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" itemProp="name">How long does CMS development take?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-700 leading-relaxed mb-4" itemProp="text">
                  Timeline varies by CMS platform and project complexity. We deliver quality without compromising on speed.
                </p>
                <div className="space-y-3">
                  <div className="bg-lime-50 rounded-xl p-4 border-l-4 border-lime-500">
                    <p className="font-bold text-gray-900 flex items-center gap-2">
                      <span>⚡</span> Basic WordPress
                    </p>
                    <p className="text-gray-700 text-lg font-semibold">1-2 Weeks</p>
                    <p className="text-sm text-gray-600">Template customization, basic setup</p>
                  </div>
                  <div className="bg-lime-50 rounded-xl p-4 border-l-4 border-lime-500">
                    <p className="font-bold text-gray-900 flex items-center gap-2">
                      <span>📊</span> Business Website
                    </p>
                    <p className="text-gray-700 text-lg font-semibold">3-4 Weeks</p>
                    <p className="text-sm text-gray-600">Custom design, advanced features</p>
                  </div>
                  <div className="bg-lime-50 rounded-xl p-4 border-l-4 border-lime-500">
                    <p className="font-bold text-gray-900 flex items-center gap-2">
                      <span>🏢</span> Enterprise Drupal/Custom
                    </p>
                    <p className="text-gray-700 text-lg font-semibold">6-10 Weeks</p>
                    <p className="text-sm text-gray-600">Complex architecture, custom modules</p>
                  </div>
                </div>
                <div className="mt-4 bg-lime-100 rounded-xl p-4">
                  <p className="text-gray-800 font-semibold text-center">✓ Projects Start Within 3-5 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About CMS Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-lime-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">💡</span>
              What is a CMS?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Manage Your Content <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Effortlessly</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Content Management System (CMS) empowers you to create, edit, and manage your website content without technical knowledge. Update your site anytime, anywhere.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-lime-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                    alt="CMS Development Services Mumbai - Content Management System"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✏️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Content Updates</h3>
                    <p className="text-gray-600">Update text, images, videos, and pages instantly without coding knowledge or developer dependency.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-User Management</h3>
                    <p className="text-gray-600">Create multiple user roles with different permissions - admins, editors, authors, and contributors.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">SEO-Friendly</h3>
                    <p className="text-gray-600">Built-in SEO tools to optimize meta tags, URLs, sitemaps, and content for better search rankings.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Scalable</h3>
                    <p className="text-gray-600">Enterprise-grade security with regular updates and ability to scale as your business grows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Platforms Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">🚀</span>
              <span>CMS Platforms We Work With</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-lime-600 bg-clip-text text-transparent">Expert CMS</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">Development Services</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* WordPress */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📘</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">WordPress Development</h3>
              <p className="text-gray-600 mb-4">World&apos;s most popular CMS powering 43% of all websites. Perfect for blogs, business sites, and e-commerce.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Custom Theme Development</li>
                <li className="flex items-center gap-2">✓ Plugin Customization</li>
                <li className="flex items-center gap-2">✓ WooCommerce Integration</li>
                <li className="flex items-center gap-2">✓ WordPress Maintenance</li>
              </ul>
            </div>

            {/* Drupal */}
            <div className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Drupal Development</h3>
              <p className="text-gray-600 mb-4">Enterprise-grade CMS for complex, large-scale websites requiring advanced functionality and security.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Custom Module Development</li>
                <li className="flex items-center gap-2">✓ Multi-Site Setup</li>
                <li className="flex items-center gap-2">✓ Advanced Workflows</li>
                <li className="flex items-center gap-2">✓ API Integration</li>
              </ul>
            </div>

            {/* Joomla */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🟠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Joomla Development</h3>
              <p className="text-gray-600 mb-4">Flexible CMS perfect for community portals, social networking sites, and membership platforms.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Template Development</li>
                <li className="flex items-center gap-2">✓ Extension Integration</li>
                <li className="flex items-center gap-2">✓ Community Features</li>
                <li className="flex items-center gap-2">✓ E-Commerce Setup</li>
              </ul>
            </div>

            {/* Custom CMS */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom CMS Development</h3>
              <p className="text-gray-600 mb-4">Bespoke content management systems built from scratch to meet your unique business requirements.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Tailored Features</li>
                <li className="flex items-center gap-2">✓ Scalable Architecture</li>
                <li className="flex items-center gap-2">✓ Custom Workflows</li>
                <li className="flex items-center gap-2">✓ Full Ownership</li>
              </ul>
            </div>

            {/* Headless CMS */}
            <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Headless CMS</h3>
              <p className="text-gray-600 mb-4">Modern API-first CMS for omnichannel content delivery - websites, apps, IoT devices, and more.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Contentful Integration</li>
                <li className="flex items-center gap-2">✓ Strapi Development</li>
                <li className="flex items-center gap-2">✓ API-First Approach</li>
                <li className="flex items-center gap-2">✓ Multi-Channel Delivery</li>
              </ul>
            </div>

            {/* Shopify */}
            <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shopify CMS</h3>
              <p className="text-gray-600 mb-4">Leading e-commerce CMS platform for online stores with powerful content management capabilities.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Store Setup</li>
                <li className="flex items-center gap-2">✓ Theme Customization</li>
                <li className="flex items-center gap-2">✓ App Integration</li>
                <li className="flex items-center gap-2">✓ Content Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our CMS Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">🛠️</span>
              <span>Complete CMS Solutions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-lime-600 bg-clip-text text-transparent">End-to-End CMS</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">Development Services</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CMS Design & Development</h3>
              <p className="text-gray-600">Custom CMS design and development tailored to your brand and workflow requirements.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CMS Migration</h3>
              <p className="text-gray-600">Seamless migration from legacy systems to modern CMS platforms without data loss.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plugin Development</h3>
              <p className="text-gray-600">Custom plugins and extensions to add specific functionality to your CMS.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">API Integration</h3>
              <p className="text-gray-600">Connect your CMS with third-party tools, CRMs, payment gateways, and more.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security & Maintenance</h3>
              <p className="text-gray-600">Regular updates, security patches, backups, and performance optimization.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Support</h3>
              <p className="text-gray-600">Comprehensive training for your team and ongoing 24/7 technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-lime-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <span className="text-2xl mr-3 animate-pulse">⭐</span>
              <span className="text-lg">Why Choose MyDigital Crown</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Mumbai&apos;s Most <span className="bg-gradient-to-r from-lime-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">Trusted CMS</span> Development Partner
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-lime-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🏆</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">CMS Expertise</h3>
                <p className="text-emerald-100 leading-relaxed">8+ years of experience in developing CMS solutions for businesses across all industries.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Rapid Development</h3>
                <p className="text-emerald-100 leading-relaxed">Fast CMS deployment with agile methodology ensuring quick time-to-market.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-emerald-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔒</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
                <p className="text-emerald-100 leading-relaxed">Enterprise-grade security measures to protect your content and user data.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📈</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">SEO Optimized</h3>
                <p className="text-emerald-100 leading-relaxed">CMS built with SEO best practices for better search engine rankings.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-lime-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
                <p className="text-emerald-100 leading-relaxed">Tailored CMS features that perfectly match your business workflow and goals.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🤝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ongoing Support</h3>
                <p className="text-emerald-100 leading-relaxed">24/7 technical support, training, and maintenance for hassle-free management.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Power Your Website with CMS?
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Let&apos;s build a powerful content management system that empowers your team.
              </p>
              <Link 
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 inline-flex items-center justify-center transform hover:scale-110"
              >
                <span className="relative z-10 flex items-center">
                  <span className="text-2xl mr-3">🚀</span>
                  <span>Get Started Today</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-lime-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎁</span>
              Limited Time Offer
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Launch Your CMS Website<br />
              <span className="text-lime-300">With 35% OFF</span> This Month
            </h2>
            
            <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get a fully customized CMS with easy content management, SEO optimization, and comprehensive training. Limited slots available!
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-300 mb-2">35%</div>
                <div className="text-emerald-100">Setup Discount</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-300 mb-2">Free</div>
                <div className="text-emerald-100">Training</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-300 mb-2">100%</div>
                <div className="text-emerald-100">Secure</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-300 mb-2">24/7</div>
                <div className="text-emerald-100">Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group inline-flex items-center bg-white text-emerald-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 hover:-translate-y-1">
                <span className="mr-3">Claim Your Offer</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>

              <a href="tel:+918369511877" className="group inline-flex items-center bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all transform hover:scale-105">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call: +91-83695-11877</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-10 left-1/2 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">❓</span>
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to Know About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">CMS Development</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We&apos;ve got answers. Here&apos;s everything you need to know about our CMS development services.
            </p>
          </header>

          <div className="space-y-6 max-w-5xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
            {/* FAQ 1 - Platforms */}
            <details className="group bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-lg border-2 border-emerald-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-emerald-600 transition-colors" itemProp="name">
                <span>What CMS platforms does MyDigital Crown specialize in?</span>
                <span className="text-3xl text-emerald-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">
                    We specialize in <strong className="text-emerald-600">WordPress</strong> (custom themes, plugins, WooCommerce e-commerce integration), <strong className="text-emerald-600">Drupal</strong> (enterprise solutions, custom modules, multi-site management), <strong className="text-emerald-600">Joomla</strong> (extensions, templates, migrations), <strong className="text-emerald-600">Custom CMS</strong> (bespoke solutions built from scratch for unique requirements), <strong className="text-emerald-600">Headless CMS</strong> (Strapi, Contentful, Sanity, Ghost for API-first architecture), and offer comprehensive <strong className="text-emerald-600">CMS migration services</strong> from any platform to another.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500">
                      <p className="font-bold text-gray-900 mb-2">WordPress Development</p>
                      <p className="text-sm">Custom themes, plugins, WooCommerce, multisite</p>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500">
                      <p className="font-bold text-gray-900 mb-2">Drupal Development</p>
                      <p className="text-sm">Enterprise CMS, custom modules, advanced features</p>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500">
                      <p className="font-bold text-gray-900 mb-2">Custom CMS Solutions</p>
                      <p className="text-sm">Tailored CMS built for specific business needs</p>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500">
                      <p className="font-bold text-gray-900 mb-2">Headless CMS</p>
                      <p className="text-sm">Modern API-first solutions (Strapi, Contentful)</p>
                    </div>
                  </div>
                  <p className="mt-4">All our CMS solutions are SEO-friendly, secure, scalable, mobile-responsive with comprehensive training and documentation.</p>
                </div>
              </div>
            </details>

            {/* FAQ 2 - Pricing */}
            <details className="group bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-lg border-2 border-teal-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-teal-600 transition-colors" itemProp="name">
                <span>How much does CMS development cost in Mumbai?</span>
                <span className="text-3xl text-teal-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">
                    CMS development packages range from <strong className="text-teal-600">₹25,000 to ₹5,00,000</strong> depending on platform and complexity. We offer <strong className="text-teal-600">20% discount this month</strong>.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-teal-100 rounded-xl p-5 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900 text-lg mb-2">Basic WordPress Site</p>
                      <p className="text-2xl font-black text-teal-600 mb-2">₹25,000 - ₹50,000</p>
                      <ul className="text-sm space-y-1">
                        <li>• 5-8 pages, responsive design</li>
                        <li>• Basic plugins & functionality</li>
                        <li>• 1-2 weeks delivery</li>
                      </ul>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-5 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900 text-lg mb-2">Business WordPress/Joomla</p>
                      <p className="text-2xl font-black text-teal-600 mb-2">₹75,000 - ₹1,50,000</p>
                      <ul className="text-sm space-y-1">
                        <li>• 15-20 pages, custom design</li>
                        <li>• Advanced features & integrations</li>
                        <li>• 3-4 weeks delivery</li>
                      </ul>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-5 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900 text-lg mb-2">Enterprise Drupal</p>
                      <p className="text-2xl font-black text-teal-600 mb-2">₹2,00,000 - ₹3,50,000</p>
                      <ul className="text-sm space-y-1">
                        <li>• Multi-site, custom modules</li>
                        <li>• Complex integrations & workflows</li>
                        <li>• 6-10 weeks delivery</li>
                      </ul>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-5 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900 text-lg mb-2">Custom CMS</p>
                      <p className="text-2xl font-black text-teal-600 mb-2">₹3,00,000 - ₹5,00,000</p>
                      <ul className="text-sm space-y-1">
                        <li>• Tailored solution, full ownership</li>
                        <li>• Unique features & workflows</li>
                        <li>• 8-12 weeks delivery</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4">All packages include free SSL, 3 months support, training, SEO optimization, and mobile responsiveness.</p>
                </div>
              </div>
            </details>

            {/* FAQ 3-12 continue with same pattern, but I'll add them more concisely to save space */}

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-lime-50 to-white rounded-2xl shadow-lg border-2 border-lime-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-lime-600 transition-colors" itemProp="name">
                <span>Which CMS platform should I choose for my business?</span>
                <span className="text-3xl text-lime-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">The best CMS depends on your specific needs:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-lime-100 rounded-xl p-5 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900 mb-2">✅ Choose WordPress if:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Small-medium business or blog</li>
                        <li>• E-commerce with WooCommerce</li>
                        <li>• Quick deployment needed</li>
                        <li>• Budget ₹25,000-₹1,50,000</li>
                      </ul>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-5 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900 mb-2">✅ Choose Drupal if:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Enterprise website</li>
                        <li>• High traffic & complex data</li>
                        <li>• Multi-site network</li>
                        <li>• Budget ₹2,00,000-₹3,50,000</li>
                      </ul>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-5 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900 mb-2">✅ Choose Joomla if:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Medium-sized business</li>
                        <li>• Community/social features</li>
                        <li>• Multi-language support</li>
                        <li>• Budget ₹50,000-₹1,50,000</li>
                      </ul>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-5 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900 mb-2">✅ Choose Custom CMS if:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Unique requirements</li>
                        <li>• Full control & ownership</li>
                        <li>• Specific workflows</li>
                        <li>• Budget ₹3,00,000-₹5,00,000</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4">We provide free consultation to recommend the best platform based on your budget, timeline, technical requirements, and scalability needs.</p>
                </div>
              </div>
            </details>

            {/* FAQ 4 - WordPress vs Drupal */}
            <details className="group bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-lg border-2 border-emerald-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-emerald-600 transition-colors" itemProp="name">
                <span>What is the difference between WordPress and Drupal?</span>
                <span className="text-3xl text-emerald-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-emerald-100 rounded-xl p-5 border-l-4 border-emerald-500">
                      <p className="font-bold text-gray-900 text-lg mb-3">WordPress</p>
                      <ul className="space-y-2 text-sm">
                        <li>✅ Easier to learn & use</li>
                        <li>✅ 60,000+ plugins available</li>
                        <li>✅ Perfect for SMEs & blogs</li>
                        <li>✅ Faster setup (1-2 weeks)</li>
                        <li>✅ Lower cost (₹25,000-₹1,50,000)</li>
                        <li>✅ Massive community support</li>
                        <li>✅ Great for content marketing</li>
                      </ul>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-5 border-l-4 border-emerald-500">
                      <p className="font-bold text-gray-900 text-lg mb-3">Drupal</p>
                      <ul className="space-y-2 text-sm">
                        <li>✅ More powerful & flexible</li>
                        <li>✅ Enterprise-grade security</li>
                        <li>✅ Better for complex sites</li>
                        <li>✅ Robust content architecture</li>
                        <li>✅ Superior performance at scale</li>
                        <li>✅ Longer dev time (6-10 weeks)</li>
                        <li>✅ Higher cost (₹2,00,000-₹3,50,000)</li>
                      </ul>
                    </div>
                  </div>
                  <p>Both are open-source, SEO-friendly, mobile-responsive, regularly updated, and scalable. We recommend WordPress for 70% of businesses and Drupal for complex enterprise needs.</p>
                </div>
              </div>
            </details>

            {/* FAQ 5 - Security */}
            <details className="group bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-lg border-2 border-teal-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-teal-600 transition-colors" itemProp="name">
                <span>How do you ensure CMS security?</span>
                <span className="text-3xl text-teal-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Our comprehensive security measures include:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-teal-100 rounded-xl p-4 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900">🔒 Regular Updates</p>
                      <p className="text-sm">Core CMS, plugins, themes updated weekly</p>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-4 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900">🛡️ Security Plugins</p>
                      <p className="text-sm">Wordfence, Sucuri, iThemes Security</p>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-4 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900">🔐 SSL Certificates</p>
                      <p className="text-sm">Free Let&apos;s Encrypt or premium SSL</p>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-4 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900">🚨 Firewall Protection</p>
                      <p className="text-sm">Web Application Firewall configured</p>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-4 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900">💾 Daily Backups</p>
                      <p className="text-sm">Automated backups, offsite storage</p>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-4 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900">🔍 Security Audits</p>
                      <p className="text-sm">Monthly vulnerability scans & testing</p>
                    </div>
                  </div>
                  <p className="mt-4">We also provide security training, incident response plan, 24/7 monitoring, and comply with GDPR and data protection regulations.</p>
                </div>
              </div>
            </details>

            {/* FAQ 6 - Migration */}
            <details className="group bg-gradient-to-br from-lime-50 to-white rounded-2xl shadow-lg border-2 border-lime-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-lime-600 transition-colors" itemProp="name">
                <span>Can you migrate my existing website to a new CMS?</span>
                <span className="text-3xl text-lime-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Yes! We offer comprehensive CMS migration services with <strong className="text-lime-600">zero data loss</strong> and <strong className="text-lime-600">minimal downtime</strong>.</p>
                  <div className="space-y-3">
                    <div className="bg-lime-100 rounded-xl p-4 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900">Phase 1: Analysis</p>
                      <p className="text-sm">Audit current site, identify content types, plan strategy</p>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-4 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900">Phase 2: Preparation</p>
                      <p className="text-sm">Setup new CMS, configure hosting, create backup plan</p>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-4 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900">Phase 3: Content Migration</p>
                      <p className="text-sm">Migrate pages, posts, media, preserve URLs & SEO rankings</p>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-4 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900">Phase 4: Testing</p>
                      <p className="text-sm">Functionality testing, broken link checks, performance optimization</p>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-4 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900">Phase 5: Go-Live</p>
                      <p className="text-sm">DNS update, 301 redirects, post-migration monitoring</p>
                    </div>
                  </div>
                  <p className="mt-4">We&apos;ve successfully migrated 200+ websites. Migration timeline: 1-3 weeks. Pricing: ₹15,000-₹1,00,000 based on complexity.</p>
                </div>
              </div>
            </details>

            {/* FAQ 7-12 continue... */}

            {/* FAQ 7 - Customization */}
            <details className="group bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-lg border-2 border-emerald-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-emerald-600 transition-colors" itemProp="name">
                <span>Do you provide CMS customization services?</span>
                <span className="text-3xl text-emerald-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Absolutely! We offer comprehensive CMS customization services:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500">
                      <p className="font-bold text-gray-900">🎨 Custom Theme Development</p>
                      <p className="text-sm">Unique designs matching your brand</p>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500">
                      <p className="font-bold text-gray-900">🔌 Plugin/Module Development</p>
                      <p className="text-sm">Custom functionality & integrations</p>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500">
                      <p className="font-bold text-gray-900">🛒 E-commerce Customization</p>
                      <p className="text-sm">WooCommerce, custom checkout flows</p>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500">
                      <p className="font-bold text-gray-900">👥 Membership Systems</p>
                      <p className="text-sm">User registration, subscriptions, dashboards</p>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500">
                      <p className="font-bold text-gray-900">🌐 Multi-language Setup</p>
                      <p className="text-sm">WPML, Polylang, auto-translation</p>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500">
                      <p className="font-bold text-gray-900">⚡ Performance Optimization</p>
                      <p className="text-sm">Caching, CDN, database tuning</p>
                    </div>
                  </div>
                  <p className="mt-4">All customizations are documented, upgrade-safe, and include training. Monthly retainer packages starting <strong className="text-emerald-600">₹15,000/month</strong>.</p>
                </div>
              </div>
            </details>

            {/* FAQ 8 - E-commerce CMS */}
            <details className="group bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-lg border-2 border-teal-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-teal-600 transition-colors" itemProp="name">
                <span>Which CMS is best for e-commerce?</span>
                <span className="text-3xl text-teal-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Our e-commerce CMS recommendations:</p>
                  <div className="space-y-3">
                    <div className="bg-teal-100 rounded-xl p-5 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900 text-lg">WordPress + WooCommerce</p>
                      <p className="text-sm"><strong>Best for:</strong> Small-medium stores (100-5,000 products)</p>
                      <p className="text-sm"><strong>Pros:</strong> Easy to manage, 1,000+ extensions, cost-effective</p>
                      <p className="text-sm"><strong>Cost:</strong> ₹50,000-₹1,50,000</p>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-5 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900 text-lg">Drupal Commerce</p>
                      <p className="text-sm"><strong>Best for:</strong> Enterprise e-commerce, B2B</p>
                      <p className="text-sm"><strong>Pros:</strong> Complex catalogs, custom workflows, multi-store</p>
                      <p className="text-sm"><strong>Cost:</strong> ₹2,00,000-₹4,00,000</p>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-5 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900 text-lg">Headless CMS (Strapi/Contentful)</p>
                      <p className="text-sm"><strong>Best for:</strong> Modern architecture, omnichannel selling</p>
                      <p className="text-sm"><strong>Pros:</strong> API-first, custom frontend, unique UX</p>
                      <p className="text-sm"><strong>Cost:</strong> ₹3,00,000+</p>
                    </div>
                  </div>
                  <p className="mt-4">All include product management, inventory, payment gateways (Razorpay, PayU, Stripe), shipping, and SEO optimization.</p>
                </div>
              </div>
            </details>

            {/* FAQ 9 - Maintenance */}
            <details className="group bg-gradient-to-br from-lime-50 to-white rounded-2xl shadow-lg border-2 border-lime-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-lime-600 transition-colors" itemProp="name">
                <span>Do you provide CMS maintenance and support?</span>
                <span className="text-3xl text-lime-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Yes! We offer 3 maintenance packages:</p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-lime-100 rounded-xl p-5 border-2 border-lime-300">
                      <p className="font-bold text-gray-900 text-lg mb-2">Basic Support</p>
                      <p className="text-2xl font-bold text-lime-600 mb-3">₹5,000/mo</p>
                      <ul className="space-y-2 text-sm">
                        <li>✅ Monthly updates</li>
                        <li>✅ Daily backups</li>
                        <li>✅ Uptime monitoring</li>
                        <li>✅ Email support</li>
                        <li>✅ 2 hours changes</li>
                      </ul>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-5 border-2 border-lime-400">
                      <p className="font-bold text-gray-900 text-lg mb-2">Professional</p>
                      <p className="text-2xl font-bold text-lime-600 mb-3">₹10,000/mo</p>
                      <ul className="space-y-2 text-sm">
                        <li>✅ Weekly updates</li>
                        <li>✅ Real-time backups</li>
                        <li>✅ Security monitoring</li>
                        <li>✅ Priority support</li>
                        <li>✅ 5 hours changes</li>
                      </ul>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-5 border-2 border-lime-500">
                      <p className="font-bold text-gray-900 text-lg mb-2">Enterprise</p>
                      <p className="text-2xl font-bold text-lime-600 mb-3">₹20,000/mo</p>
                      <ul className="space-y-2 text-sm">
                        <li>✅ Daily updates</li>
                        <li>✅ Hourly backups</li>
                        <li>✅ 24/7 monitoring</li>
                        <li>✅ Dedicated manager</li>
                        <li>✅ 15 hours changes</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4">All include security patches, malware scanning, 99.9% uptime guarantee. <strong className="text-lime-600">3 months free</strong> with new projects!</p>
                </div>
              </div>
            </details>

            {/* FAQ 10 - Getting Started */}
            <details className="group bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-lg border-2 border-emerald-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-emerald-600 transition-colors" itemProp="name">
                <span>How do I get started with CMS development?</span>
                <span className="text-3xl text-emerald-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Simple 6-step process to launch your CMS website:</p>
                  <div className="space-y-3">
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500 flex items-start">
                      <span className="text-2xl font-bold text-emerald-600 mr-4">1</span>
                      <div>
                        <p className="font-bold text-gray-900">Free Consultation</p>
                        <p className="text-sm">30-min call to discuss requirements & goals</p>
                      </div>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500 flex items-start">
                      <span className="text-2xl font-bold text-emerald-600 mr-4">2</span>
                      <div>
                        <p className="font-bold text-gray-900">Proposal & Planning</p>
                        <p className="text-sm">CMS recommendation, timeline, pricing quote</p>
                      </div>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500 flex items-start">
                      <span className="text-2xl font-bold text-emerald-600 mr-4">3</span>
                      <div>
                        <p className="font-bold text-gray-900">Design Approval</p>
                        <p className="text-sm">Custom mockups, revisions, brand alignment</p>
                      </div>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500 flex items-start">
                      <span className="text-2xl font-bold text-emerald-600 mr-4">4</span>
                      <div>
                        <p className="font-bold text-gray-900">Development</p>
                        <p className="text-sm">CMS setup, custom features, weekly progress updates</p>
                      </div>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500 flex items-start">
                      <span className="text-2xl font-bold text-emerald-600 mr-4">5</span>
                      <div>
                        <p className="font-bold text-gray-900">Testing & Training</p>
                        <p className="text-sm">QA testing, content management training</p>
                      </div>
                    </div>
                    <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500 flex items-start">
                      <span className="text-2xl font-bold text-emerald-600 mr-4">6</span>
                      <div>
                        <p className="font-bold text-gray-900">Launch & Support</p>
                        <p className="text-sm">Go-live, monitoring, 3 months free support</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">Contact <a href="tel:+918369511877" className="text-emerald-600 font-bold hover:underline">+91-83695-11877</a> or fill enquiry form. We respond within 2 hours, start within 3-5 days!</p>
                </div>
              </div>
            </details>

            {/* FAQ 11 - Timelines */}
            <details className="group bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-lg border-2 border-teal-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-teal-600 transition-colors" itemProp="name">
                <span>What are typical CMS development timelines?</span>
                <span className="text-3xl text-teal-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Timelines vary by project complexity:</p>
                  <div className="space-y-3">
                    <div className="bg-teal-100 rounded-xl p-4 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900">Basic WordPress (1-2 weeks)</p>
                      <p className="text-sm">5-8 pages, template customization, ideal for startups</p>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-4 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900">Business Website (3-4 weeks)</p>
                      <p className="text-sm">15-20 pages, custom design, blog, SEO setup</p>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-4 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900">E-commerce Store (4-6 weeks)</p>
                      <p className="text-sm">Product catalog, payment integration, inventory</p>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-4 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900">Enterprise Drupal (6-10 weeks)</p>
                      <p className="text-sm">Complex architecture, custom modules, integrations</p>
                    </div>
                    <div className="bg-teal-100 rounded-xl p-4 border-l-4 border-teal-500">
                      <p className="font-bold text-gray-900">Custom CMS (8-12 weeks)</p>
                      <p className="text-sm">Requirements analysis, custom development, documentation</p>
                    </div>
                  </div>
                  <p className="mt-4">Timeline breakdown: Planning 10%, Design 20%, Development 40%, Testing 20%, Launch 10%. Rush delivery available with 30% premium.</p>
                </div>
              </div>
            </details>

            {/* FAQ 12 - SEO Optimization */}
            <details className="group bg-gradient-to-br from-lime-50 to-white rounded-2xl shadow-lg border-2 border-lime-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-lime-600 transition-colors" itemProp="name">
                <span>How do you optimize CMS for SEO?</span>
                <span className="text-3xl text-lime-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Our comprehensive SEO optimization includes:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-lime-100 rounded-xl p-4 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900">🔍 Technical SEO</p>
                      <p className="text-sm">Clean URLs, XML sitemaps, schema markup, fast loading</p>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-4 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900">📝 On-page SEO</p>
                      <p className="text-sm">Meta titles/descriptions, heading hierarchy, alt tags</p>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-4 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900">🔌 SEO Plugins</p>
                      <p className="text-sm">Yoast SEO (WordPress), Metatag module (Drupal)</p>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-4 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900">⚡ Performance</p>
                      <p className="text-sm">Caching, CDN, image compression, minification</p>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-4 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900">📍 Local SEO</p>
                      <p className="text-sm">Google My Business integration, local schema</p>
                    </div>
                    <div className="bg-lime-100 rounded-xl p-4 border-l-4 border-lime-500">
                      <p className="font-bold text-gray-900">📊 Core Web Vitals</p>
                      <p className="text-sm">90+ PageSpeed scores, mobile optimization</p>
                    </div>
                  </div>
                  <p className="mt-4">All CMS builds are optimized for voice search, featured snippets, and mobile-first indexing. Ongoing SEO support packages starting <strong className="text-lime-600">₹8,000/month</strong>.</p>
                </div>
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
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
