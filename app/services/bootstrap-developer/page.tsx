import { Metadata } from 'next';
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import TrustedBrands from '@/app/components/TrustedBrands'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Bootstrap Developer Mumbai | 500+ Projects | MyDigital',
  description: 'Bootstrap Developer Mumbai. 500+ Projects | Bootstrap 5 Expert | Mobile-First Responsive Design | 8+ Years Experience. Call +91-83695-11877',
  keywords: [
    // Primary Keywords
    'bootstrap developer mumbai',
    'bootstrap developer in mumbai',
    'bootstrap development mumbai',
    'bootstrap development company mumbai',
    'bootstrap development services mumbai',
    
    // Service-Specific Keywords
    'hire bootstrap developer',
    'bootstrap 5 developer',
    'responsive web design mumbai',
    'mobile first design',
    'bootstrap framework development',
    'bootstrap ui development',
    'bootstrap custom components',
    'bootstrap theme development',
    
    // Long-tail Keywords (VSO)
    'best bootstrap developer mumbai',
    'bootstrap developer near me',
    'hire bootstrap developer in mumbai',
    'expert bootstrap programmer mumbai',
    'professional bootstrap developer',
    
    // Solution-Based Keywords
    'responsive website development',
    'mobile responsive design',
    'bootstrap landing page',
    'bootstrap dashboard development',
    'bootstrap admin panel',
    'bootstrap ecommerce website',
    
    // Location-Based Keywords
    'mumbai bootstrap developer',
    'bootstrap developer andheri',
    'bootstrap developer bandra',
    'bootstrap agency mumbai',
    
    // Technology Keywords
    'bootstrap css framework',
    'bootstrap javascript',
    'bootstrap grid system',
    'bootstrap components',
    'sass bootstrap',
    'bootstrap webpack',
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Frontend Development Services',
  classification: 'Bootstrap Framework Development & Design',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mydigitalcrown.in'),
  alternates: {
    canonical: '/services/bootstrap-developer',
  },
  openGraph: {
    title: 'Bootstrap Developer in Mumbai | #1 Bootstrap Development Company | MyDigital Crown',
    description: 'Top Bootstrap Developer in Mumbai. Expert Bootstrap 5 development for responsive, mobile-first websites. 500+ projects delivered. Call +91-83695-11877!',
    url: 'https://mydigitalcrown.in/services/bootstrap-developer',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/bootstrap-developer-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Bootstrap Developer in Mumbai - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bootstrap Developer in Mumbai | Expert Responsive Design | MyDigital Crown',
    description: 'Top Bootstrap Developer in Mumbai. 500+ responsive websites delivered. Expert Bootstrap 5 development. Call +91-83695-11877!',
    images: ['https://mydigitalcrown.in/images/bootstrap-developer-mumbai.jpg'],
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
      "@id": "https://mydigitalcrown.in/services/bootstrap-developer#service",
      "serviceType": "Bootstrap Developer Services",
      "provider": {
        "@id": "https://mydigitalcrown.in/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Bootstrap Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bootstrap 5 Development",
              "description": "Expert Bootstrap 5 development with latest features, components, and utilities"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Responsive Website Design",
              "description": "Mobile-first responsive websites that work perfectly on all devices"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Bootstrap Components",
              "description": "Custom components and themes tailored to your brand"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bootstrap Admin Panels",
              "description": "Professional admin dashboards with Bootstrap framework"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bootstrap Migration",
              "description": "Migrate existing sites to Bootstrap or upgrade to Bootstrap 5"
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
        "url": "https://mydigitalcrown.in/logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-83695-11877",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.facebook.com/mydigitalcrown",
        "https://twitter.com/mydigitalcrown",
        "https://www.linkedin.com/company/mydigitalcrown",
        "https://www.instagram.com/mydigitalcrown"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
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
      "description": "Top Bootstrap Developer in Mumbai with 500+ projects delivered. Expert Bootstrap 5 development services."
    },
    {
      "@type": "WebPage",
      "@id": "https://mydigitalcrown.in/services/bootstrap-developer#webpage",
      "url": "https://mydigitalcrown.in/services/bootstrap-developer",
      "name": "Bootstrap Developer in Mumbai | #1 Bootstrap Development Company",
      "description": "Top Bootstrap Developer in Mumbai. Expert Bootstrap 5 development for responsive, mobile-first websites. 500+ projects delivered.",
      "publisher": {
        "@id": "https://mydigitalcrown.in/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mydigitalcrown.in/services/bootstrap-developer#breadcrumb",
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
          "name": "Bootstrap Developer",
          "item": "https://mydigitalcrown.in/services/bootstrap-developer"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://mydigitalcrown.in/services/bootstrap-developer#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Bootstrap and why should I use it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bootstrap is the world's most popular front-end framework for building responsive, mobile-first websites. You should use it because: 1) Fast development with pre-built components, 2) Mobile-first responsive design, 3) Cross-browser compatibility, 4) Extensive documentation, 5) Large community support, 6) Easy customization with SASS variables, 7) Lightweight and performant. Bootstrap 5 is the latest version with improved features and no jQuery dependency."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Bootstrap development cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bootstrap development costs in Mumbai range from ₹15,000 to ₹2,00,000 depending on project complexity. Basic Bootstrap website (5-10 pages): ₹15,000-₹40,000, Business website (15-25 pages): ₹50,000-₹1,00,000, E-commerce Bootstrap site: ₹80,000-₹1,50,000, Custom Bootstrap dashboard: ₹1,00,000-₹2,00,000. All packages include responsive design, cross-browser testing, SEO optimization, and 3 months support."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between Bootstrap and custom CSS frameworks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bootstrap offers rapid development with pre-built components, extensive documentation, and proven reliability. Custom CSS frameworks offer complete control and lighter file sizes but require more development time. Bootstrap is ideal for most projects because: faster development (50% time savings), mobile-first approach, tested across browsers, regular updates, huge community, easy maintenance. Custom frameworks are better for unique design requirements or when minimal file size is critical."
          }
        },
        {
          "@type": "Question",
          "name": "Can you customize Bootstrap to match my brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We customize Bootstrap extensively using SASS variables, custom components, and theme customization. We can modify: colors, typography, spacing, grid breakpoints, component styles, animations. We create custom Bootstrap themes that perfectly match your brand identity while maintaining Bootstrap's responsive functionality and cross-browser compatibility."
          }
        },
        {
          "@type": "Question",
          "name": "Is Bootstrap 5 better than Bootstrap 4?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Bootstrap 5 offers significant improvements: No jQuery dependency (faster loading), improved grid system with XXL breakpoint, enhanced form controls, new utility classes, RTL support built-in, better customization with SASS, improved documentation, offcanvas component, updated color palette. We recommend Bootstrap 5 for all new projects. We also provide migration services from Bootstrap 4 to 5."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Bootstrap website development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bootstrap development timelines: Basic website (5-10 pages): 1-2 weeks, Business website (15-25 pages): 3-4 weeks, E-commerce site: 4-6 weeks, Custom dashboard: 5-8 weeks. Bootstrap's pre-built components allow 40-50% faster development compared to custom coding. Projects start within 2-3 days of approval."
          }
        },
        {
          "@type": "Question",
          "name": "Will my Bootstrap website work on all devices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Bootstrap is built mobile-first and works perfectly on all devices. We test on: smartphones (iOS, Android), tablets (iPad, Android tablets), laptops, desktops, large screens (4K monitors). Bootstrap's responsive grid system automatically adjusts layouts based on screen size. All our Bootstrap websites achieve 95+ mobile-friendliness score on Google's Mobile-Friendly Test."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide Bootstrap migration services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer comprehensive Bootstrap migration services: Bootstrap 3 to 5 upgrade, Custom CSS to Bootstrap, WordPress theme to Bootstrap, Static HTML to Bootstrap, Other frameworks to Bootstrap. Migration includes: code audit, component mapping, responsive conversion, testing across devices, SEO preservation, 301 redirects. Typical migration takes 2-4 weeks with zero downtime."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate Bootstrap with React, Angular, or Vue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We have extensive experience integrating Bootstrap with modern JavaScript frameworks: React Bootstrap, NG Bootstrap (Angular), Bootstrap Vue, Next.js with Bootstrap 5. We use framework-specific Bootstrap components for optimal performance and maintainability. This combination provides responsive design with powerful JavaScript functionality."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in Bootstrap development support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Bootstrap development includes 3 months free support covering: bug fixes, browser compatibility issues, minor design adjustments, content updates (up to 5 hours), security updates, performance monitoring, mobile responsiveness fixes. Extended support packages available: Basic (₹5,000/month), Professional (₹10,000/month), Enterprise (₹20,000/month) with priority support and unlimited revisions."
          }
        },
        {
          "@type": "Question",
          "name": "Is Bootstrap good for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Bootstrap is excellent for SEO when properly implemented. Benefits: clean semantic HTML5, fast loading times, mobile-first responsive design (Google ranking factor), structured grid system, accessibility features, lightweight CSS/JS. We optimize Bootstrap sites for SEO with: proper heading hierarchy, schema markup, optimized images, minified CSS/JS, fast server response, mobile optimization. All our Bootstrap sites achieve 90+ PageSpeed scores."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with Bootstrap development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting started is easy: 1) Free consultation - Call +91-83695-11877 or fill our enquiry form, 2) Requirement discussion - We understand your needs, design preferences, timeline, 3) Proposal & quote - Detailed scope, timeline, and pricing, 4) Design approval - We create Bootstrap mockups for your review, 5) Development - We build your responsive Bootstrap site, 6) Testing & launch - QA testing across devices and browsers, 7) Training & support - We train your team and provide 3 months free support. Projects start within 2-3 days!"
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://mydigitalcrown.in/#localbusiness",
      "name": "MyDigital Crown - Bootstrap Developer Mumbai",
      "image": "https://mydigitalcrown.in/logo.png",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chembur",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400071",
        "addressCountry": "IN"
      },
      "telephone": "+91-83695-11877",
      "email": "info@mydigitalcrown.in",
      "url": "https://mydigitalcrown.in/services/bootstrap-developer",
      "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking",
      "openingHours": "Mo-Su 00:00-23:59",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.0596",
        "longitude": "72.8295"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Rajesh Kumar"
      },
      "datePublished": "2025-09-15",
      "reviewBody": "MyDigital Crown built our responsive Bootstrap website in just 2 weeks. Professional team, clean code, perfect mobile responsiveness. Highly recommended!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    {
      "@type": "HowTo",
      "name": "How We Develop Bootstrap Websites",
      "description": "Our proven Bootstrap development process",
      "totalTime": "P21D",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": "50000"
      },
      "step": [
        {
          "@type": "HowToStep",
          "name": "Requirements & Planning",
          "text": "We understand your requirements, target audience, design preferences, and create detailed wireframes.",
          "position": 1
        },
        {
          "@type": "HowToStep",
          "name": "Bootstrap Design",
          "text": "We design custom Bootstrap layouts with your brand colors, typography, and components.",
          "position": 2
        },
        {
          "@type": "HowToStep",
          "name": "Responsive Development",
          "text": "We build mobile-first responsive pages using Bootstrap 5 grid system and components.",
          "position": 3
        },
        {
          "@type": "HowToStep",
          "name": "Testing & Optimization",
          "text": "Cross-browser testing, mobile testing, performance optimization, and SEO setup.",
          "position": 4
        },
        {
          "@type": "HowToStep",
          "name": "Launch & Support",
          "text": "We launch your Bootstrap website and provide 3 months free support and training.",
          "position": 5
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Bootstrap Developer in Mumbai - Expert Responsive Website Development",
      "description": "Professional Bootstrap development services in Mumbai. Build responsive, mobile-first websites with Bootstrap 5.",
      "author": {
        "@type": "Organization",
        "name": "MyDigital Crown"
      },
      "publisher": {
        "@id": "https://mydigitalcrown.in/#organization"
      },
      "datePublished": "2025-10-11",
      "dateModified": "2025-10-11"
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Bootstrap 5 Development"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Responsive Design"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Custom Components"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Admin Panels"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Bootstrap Migration"
        }
      ]
    },
    {
      "@type": "Offer",
      "price": "50000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://mydigitalcrown.in/services/bootstrap-developer",
      "seller": {
        "@id": "https://mydigitalcrown.in/#organization"
      },
      "validFrom": "2025-10-11",
      "priceValidUntil": "2025-12-31",
      "description": "Bootstrap Development Services - Starting from ₹50,000"
    },
    {
      "@type": "VideoObject",
      "name": "Bootstrap 5 Development Tutorial",
      "description": "Learn how we build responsive websites with Bootstrap 5",
      "thumbnailUrl": "https://mydigitalcrown.in/images/bootstrap-video-thumb.jpg",
      "uploadDate": "2025-10-11"
    },
    {
      "@type": "Course",
      "name": "Bootstrap 5 Development Course",
      "description": "Master responsive web development with Bootstrap 5",
      "provider": {
        "@id": "https://mydigitalcrown.in/#organization"
      }
    },
    {
      "@type": "SpecialAnnouncement",
      "name": "Special Offer on Bootstrap Development",
      "text": "Get 20% OFF on Bootstrap development projects. Limited time offer!",
      "datePosted": "2025-10-11",
      "expires": "2025-12-31"
    }
  ]
};

export default function BootstrapDeveloperPage() {
  return (
    <>
      <Navbar />
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Noscript Fallback */}
      <noscript>
        <div itemScope itemType="https://schema.org/Service">
          <meta itemProp="name" content="Bootstrap Developer in Mumbai" />
          <meta itemProp="description" content="Top Bootstrap Developer in Mumbai. Expert Bootstrap 5 development for responsive websites." />
        </div>
      </noscript>
      
      {/* Hero Section */}
      <section className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 to-blue-700/95"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s Expert Bootstrap Developers</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Professional Bootstrap
                </span>
                <br />
                <span className="text-4xl md:text-6xl">Developer Services in Mumbai</span>
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto font-bold leading-relaxed">
                  🚀 Build <span className="text-cyan-300">Responsive</span>, <span className="text-blue-300">Mobile-First</span> Websites with World&apos;s Most Popular Framework
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-semibold leading-relaxed">
                  Bootstrap 5 | Responsive Design | Fast Development | Cross-Browser Compatible
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">💻</span>
                    <span>Start Your Project</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">300+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Projects Done</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Responsive</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">Fast</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Development</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">24/7</div>
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

      {/* Voice Search Optimization - Quick Answers */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <span className="text-2xl mr-3">🎤</span>
              <span className="text-lg">Quick Answers</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Got Questions? <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">We&apos;ve Got Answers!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our Bootstrap development services in Mumbai
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* VSO Card 1 - Where */}
            <div className="group relative bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-10 border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-500 hover:shadow-2xl hover:scale-105" itemScope itemType="https://schema.org/Question">
              <div className="absolute -top-6 left-10 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">📍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4" itemProp="name">Where is the best Bootstrap developer in Mumbai?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <div itemProp="text">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong className="text-cyan-600">MyDigital Crown</strong> in Chembur, Mumbai is Mumbai&apos;s leading Bootstrap developer with:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold">✓</span>
                        <span>500+ Bootstrap projects delivered</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold">✓</span>
                        <span>Expert Bootstrap 5 developers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold">✓</span>
                        <span>8+ years responsive design experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold">✓</span>
                        <span>100% mobile-first approach</span>
                      </li>
                    </ul>
                    <a href="tel:+918369511877" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <span>📞</span>
                      <span>Call: +91-83695-11877</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* VSO Card 2 - How Much */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:scale-105" itemScope itemType="https://schema.org/Question">
              <div className="absolute -top-6 left-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">💰</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4" itemProp="name">How much does Bootstrap development cost in Mumbai?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <div itemProp="text">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong className="text-blue-600">Transparent pricing</strong> based on project scope:
                    </p>
                    <div className="space-y-3 mb-4">
                      <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                        <p className="font-bold text-gray-900">Basic Website</p>
                        <p className="text-2xl font-bold text-blue-600">₹15,000 - ₹40,000</p>
                        <p className="text-sm text-gray-600">5-10 pages, responsive design, 1-2 weeks</p>
                      </div>
                      <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                        <p className="font-bold text-gray-900">Business Website</p>
                        <p className="text-2xl font-bold text-blue-600">₹50,000 - ₹1,00,000</p>
                        <p className="text-sm text-gray-600">15-25 pages, custom components, 3-4 weeks</p>
                      </div>
                      <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                        <p className="font-bold text-gray-900">E-commerce/Dashboard</p>
                        <p className="text-2xl font-bold text-blue-600">₹80,000 - ₹2,00,000</p>
                        <p className="text-sm text-gray-600">Advanced features, admin panel, 4-8 weeks</p>
                      </div>
                    </div>
                    <p className="text-sm text-blue-600 font-bold">🎉 Special Offer: 20% OFF this month!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* VSO Card 3 - How Long */}
            <div className="group relative bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-10 border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl hover:scale-105" itemScope itemType="https://schema.org/Question">
              <div className="absolute -top-6 left-10 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">⏱️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4" itemProp="name">How long does Bootstrap development take?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <div itemProp="text">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong className="text-indigo-600">Fast turnaround times</strong> with Bootstrap:
                    </p>
                    <div className="space-y-3 mb-4">
                      <div className="bg-indigo-100 rounded-xl p-4 border-l-4 border-indigo-500">
                        <p className="font-bold text-gray-900">Basic Bootstrap Site</p>
                        <p className="text-2xl font-bold text-indigo-600">1-2 weeks</p>
                        <p className="text-sm text-gray-600">Simple responsive website with Bootstrap templates</p>
                      </div>
                      <div className="bg-indigo-100 rounded-xl p-4 border-l-4 border-indigo-500">
                        <p className="font-bold text-gray-900">Business Website</p>
                        <p className="text-2xl font-bold text-indigo-600">3-4 weeks</p>
                        <p className="text-sm text-gray-600">Custom design, advanced features, integrations</p>
                      </div>
                      <div className="bg-indigo-100 rounded-xl p-4 border-l-4 border-indigo-500">
                        <p className="font-bold text-gray-900">E-commerce/Dashboard</p>
                        <p className="text-2xl font-bold text-indigo-600">4-8 weeks</p>
                        <p className="text-sm text-gray-600">Complex features, admin panels, custom modules</p>
                      </div>
                    </div>
                    <p className="text-sm text-indigo-600 font-bold">⚡ Projects start within 2-3 days of approval!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Bootstrap Development Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎯</span>
              Why Bootstrap Framework
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Faster with <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Bootstrap Framework</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bootstrap is the world&apos;s most popular front-end framework for building responsive, mobile-first websites. Trusted by millions of developers worldwide.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop" 
                    alt="Bootstrap Developer Services Mumbai - Responsive Web Design"
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
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile-First Responsive</h3>
                    <p className="text-gray-600">Bootstrap&apos;s mobile-first approach ensures your website looks perfect on all devices - smartphones, tablets, and desktops.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Development</h3>
                    <p className="text-gray-600">Pre-built components and utilities enable rapid development, reducing time-to-market significantly.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-Browser Compatible</h3>
                    <p className="text-gray-600">Works seamlessly across all modern browsers including Chrome, Firefox, Safari, and Edge.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Customizable Design</h3>
                    <p className="text-gray-600">Easily customize colors, components, and styles to match your brand identity perfectly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Bootstrap Services */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">🛠️</span>
              <span>Our Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Complete Bootstrap</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">Development Solutions</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Bootstrap Design</h3>
              <p className="text-gray-600 mb-4">Bespoke Bootstrap designs tailored to your brand with custom components and styling.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Brand-Aligned Design</li>
                <li className="flex items-center gap-2">✓ Custom Components</li>
                <li className="flex items-center gap-2">✓ Unique Layouts</li>
                <li className="flex items-center gap-2">✓ Modern UI/UX</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Responsive Development</h3>
              <p className="text-gray-600 mb-4">Mobile-first responsive websites that adapt perfectly to all screen sizes and devices.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Mobile Optimization</li>
                <li className="flex items-center gap-2">✓ Tablet Friendly</li>
                <li className="flex items-center gap-2">✓ Desktop Perfect</li>
                <li className="flex items-center gap-2">✓ Fluid Grid System</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bootstrap 5 Development</h3>
              <p className="text-gray-600 mb-4">Latest Bootstrap 5 framework with improved performance and modern features.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Bootstrap 5.3+</li>
                <li className="flex items-center gap-2">✓ No jQuery Dependency</li>
                <li className="flex items-center gap-2">✓ Enhanced Grid</li>
                <li className="flex items-center gap-2">✓ Modern Components</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Theme Customization</h3>
              <p className="text-gray-600 mb-4">Complete customization of Bootstrap themes to match your exact requirements.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ SASS Customization</li>
                <li className="flex items-center gap-2">✓ Color Schemes</li>
                <li className="flex items-center gap-2">✓ Typography</li>
                <li className="flex items-center gap-2">✓ Component Styling</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
              <p className="text-gray-600 mb-4">Speed optimization to ensure fast loading times and excellent user experience.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Code Minification</li>
                <li className="flex items-center gap-2">✓ Asset Optimization</li>
                <li className="flex items-center gap-2">✓ Lazy Loading</li>
                <li className="flex items-center gap-2">✓ CDN Integration</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Migration & Upgrade</h3>
              <p className="text-gray-600 mb-4">Migrate existing sites to Bootstrap or upgrade to the latest Bootstrap version.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Version Upgrade</li>
                <li className="flex items-center gap-2">✓ Platform Migration</li>
                <li className="flex items-center gap-2">✓ Code Refactoring</li>
                <li className="flex items-center gap-2">✓ Testing & QA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <span className="text-2xl mr-3 animate-pulse">⭐</span>
              <span className="text-lg">Why Choose MyDigital Crown</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Why We&apos;re Mumbai&apos;s <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">Top Bootstrap Developers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💡</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Expert Developers</h3>
                <p className="text-blue-100 leading-relaxed">Our team of certified Bootstrap developers brings years of experience in responsive web development.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Fast Turnaround</h3>
                <p className="text-blue-100 leading-relaxed">Rapid development cycles with Bootstrap&apos;s powerful components and our streamlined workflow.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📱</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Mobile-First Design</h3>
                <p className="text-blue-100 leading-relaxed">Every project starts with mobile optimization, ensuring perfect performance on all devices.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎨</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
                <p className="text-blue-100 leading-relaxed">Tailored Bootstrap solutions that perfectly align with your brand and business goals.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔒</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Clean Code</h3>
                <p className="text-blue-100 leading-relaxed">Well-structured, maintainable code following Bootstrap best practices and standards.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🤝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-blue-100 leading-relaxed">Round-the-clock support and maintenance to keep your Bootstrap site running smoothly.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Build with Bootstrap?
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Let&apos;s create a stunning, responsive website that works flawlessly on all devices.
              </p>
              <Link 
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 inline-flex items-center justify-center transform hover:scale-110"
              >
                <span className="relative z-10 flex items-center">
                  <span className="text-2xl mr-3">🚀</span>
                  <span>Start Your Project</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎁</span>
              Special Offer
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get Your Bootstrap Website<br />
              <span className="text-cyan-300">With 40% OFF</span> This Month
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Limited time offer! Get a professional Bootstrap website with responsive design, custom components, and ongoing support.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-300 mb-2">40%</div>
                <div className="text-blue-100">Development Discount</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-300 mb-2">100%</div>
                <div className="text-blue-100">Responsive</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-300 mb-2">Fast</div>
                <div className="text-blue-100">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-300 mb-2">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 hover:-translate-y-1">
                <span className="mr-3">Claim Your Discount</span>
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

      {/* Client Success Stories Section */}
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
              <span className="text-2xl">❤️</span>
              <span className="text-white font-bold text-lg">Client Success Stories</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              What Mumbai <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Businesses</span><br />
              Say About Bootstrap Development
            </h2>
            
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Real results, real clients, real growth stories from responsive web development
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
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
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
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
                  &quot;MyDigital Crown&apos;s educational marketing expertise helped us reach thousands of prospective students. Their targeted campaigns increased our admissions by <span className="text-blue-400 font-bold">180%</span>. Excellent ROI throughout!&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
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
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
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
                  &quot;Our cleaning service flourished after partnering with MyDigital Crown. Their local SEO strategies helped us dominate Mumbai&apos;s market. We now get <span className="text-pink-400 font-bold">50+ inquiries weekly</span>. Outstanding team!&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SK</span>
                </div>
                <div>
                  <div className="font-bold text-white">Shagufta Khan</div>
                  <div className="text-white/70">Founder, Clean n Shine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <span className="text-2xl mr-3">❓</span>
              <span className="text-lg">Frequently Asked Questions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Everything You Need to Know About <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Bootstrap Development</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert answers to your Bootstrap development questions
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-cyan-50 to-white rounded-2xl shadow-lg border-2 border-cyan-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-cyan-600 transition-colors" itemProp="name">
                <span>What is Bootstrap and why should I use it?</span>
                <span className="text-3xl text-cyan-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Bootstrap is the world&apos;s most popular front-end framework for building responsive, mobile-first websites. You should use it because:</p>
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    <div className="bg-cyan-100 rounded-xl p-4 border-l-4 border-cyan-500">
                      <p className="font-bold text-gray-900">⚡ Fast Development</p>
                      <p className="text-sm">Pre-built components save 50% development time</p>
                    </div>
                    <div className="bg-cyan-100 rounded-xl p-4 border-l-4 border-cyan-500">
                      <p className="font-bold text-gray-900">📱 Mobile-First</p>
                      <p className="text-sm">Responsive design that works on all devices</p>
                    </div>
                    <div className="bg-cyan-100 rounded-xl p-4 border-l-4 border-cyan-500">
                      <p className="font-bold text-gray-900">🌐 Cross-Browser</p>
                      <p className="text-sm">Works perfectly across all modern browsers</p>
                    </div>
                    <div className="bg-cyan-100 rounded-xl p-4 border-l-4 border-cyan-500">
                      <p className="font-bold text-gray-900">📚 Documentation</p>
                      <p className="text-sm">Extensive docs and huge community support</p>
                    </div>
                  </div>
                  <p>Bootstrap 5 is the latest version with improved features, no jQuery dependency, and better performance.</p>
                </div>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border-2 border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-blue-600 transition-colors" itemProp="name">
                <span>How much does Bootstrap development cost in Mumbai?</span>
                <span className="text-3xl text-blue-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Bootstrap development costs in Mumbai range from <strong className="text-blue-600">₹15,000 to ₹2,00,000</strong> depending on project complexity:</p>
                  <div className="space-y-3 mb-4">
                    <div className="bg-blue-100 rounded-xl p-5 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900 text-lg">Basic Bootstrap Website</p>
                      <p className="text-2xl font-bold text-blue-600">₹15,000 - ₹40,000</p>
                      <p className="text-sm text-gray-600">5-10 pages, responsive design, basic components, 1-2 weeks delivery</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-5 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900 text-lg">Business Website</p>
                      <p className="text-2xl font-bold text-blue-600">₹50,000 - ₹1,00,000</p>
                      <p className="text-sm text-gray-600">15-25 pages, custom design, advanced features, blog, 3-4 weeks</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-5 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900 text-lg">E-commerce/Dashboard</p>
                      <p className="text-2xl font-bold text-blue-600">₹80,000 - ₹2,00,000</p>
                      <p className="text-sm text-gray-600">Custom admin panel, e-commerce features, integrations, 4-8 weeks</p>
                    </div>
                  </div>
                  <p className="text-blue-600 font-bold">All packages include responsive design, cross-browser testing, SEO optimization, and 3 months support!</p>
                </div>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg border-2 border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-indigo-600 transition-colors" itemProp="name">
                <span>What&apos;s the difference between Bootstrap and custom CSS frameworks?</span>
                <span className="text-3xl text-indigo-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-indigo-100 rounded-xl p-5 border-l-4 border-indigo-500">
                      <p className="font-bold text-gray-900 text-lg mb-3">✅ Bootstrap Framework</p>
                      <ul className="space-y-2 text-sm">
                        <li>• Faster development (50% time savings)</li>
                        <li>• Pre-tested components</li>
                        <li>• Huge community support</li>
                        <li>• Regular updates</li>
                        <li>• Easy maintenance</li>
                        <li>• Lower cost</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-100 rounded-xl p-5 border-l-4 border-indigo-500">
                      <p className="font-bold text-gray-900 text-lg mb-3">⚙️ Custom CSS</p>
                      <ul className="space-y-2 text-sm">
                        <li>• Complete control</li>
                        <li>• Lighter file sizes</li>
                        <li>• Unique designs</li>
                        <li>• Longer development time</li>
                        <li>• Higher cost</li>
                        <li>• More testing needed</li>
                      </ul>
                    </div>
                  </div>
                  <p><strong className="text-indigo-600">We recommend Bootstrap for 90% of projects</strong> due to faster delivery, proven reliability, and lower costs. Custom frameworks are better only for unique design requirements.</p>
                </div>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-cyan-50 to-white rounded-2xl shadow-lg border-2 border-cyan-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-cyan-600 transition-colors" itemProp="name">
                <span>Can you customize Bootstrap to match my brand?</span>
                <span className="text-3xl text-cyan-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Absolutely! We customize Bootstrap extensively using SASS variables and custom components. We can modify:</p>
                  <div className="grid md:grid-cols-3 gap-3 mb-4">
                    <div className="bg-cyan-100 rounded-xl p-4 text-center">
                      <p className="text-3xl mb-2">🎨</p>
                      <p className="font-bold text-gray-900">Colors & Themes</p>
                      <p className="text-sm text-gray-600">Brand colors, gradients, dark mode</p>
                    </div>
                    <div className="bg-cyan-100 rounded-xl p-4 text-center">
                      <p className="text-3xl mb-2">✍️</p>
                      <p className="font-bold text-gray-900">Typography</p>
                      <p className="text-sm text-gray-600">Custom fonts, sizes, weights</p>
                    </div>
                    <div className="bg-cyan-100 rounded-xl p-4 text-center">
                      <p className="text-3xl mb-2">📏</p>
                      <p className="font-bold text-gray-900">Spacing & Layout</p>
                      <p className="text-sm text-gray-600">Grids, breakpoints, margins</p>
                    </div>
                    <div className="bg-cyan-100 rounded-xl p-4 text-center">
                      <p className="text-3xl mb-2">🔘</p>
                      <p className="font-bold text-gray-900">Components</p>
                      <p className="text-sm text-gray-600">Buttons, cards, forms, navbars</p>
                    </div>
                    <div className="bg-cyan-100 rounded-xl p-4 text-center">
                      <p className="text-3xl mb-2">✨</p>
                      <p className="font-bold text-gray-900">Animations</p>
                      <p className="text-sm text-gray-600">Transitions, hover effects</p>
                    </div>
                    <div className="bg-cyan-100 rounded-xl p-4 text-center">
                      <p className="text-3xl mb-2">📱</p>
                      <p className="font-bold text-gray-900">Responsive</p>
                      <p className="text-sm text-gray-600">Mobile, tablet, desktop views</p>
                    </div>
                  </div>
                  <p>We create <strong className="text-cyan-600">custom Bootstrap themes</strong> that perfectly match your brand identity while maintaining Bootstrap&apos;s responsive functionality.</p>
                </div>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border-2 border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-blue-600 transition-colors" itemProp="name">
                <span>Is Bootstrap 5 better than Bootstrap 4?</span>
                <span className="text-3xl text-blue-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Yes! Bootstrap 5 offers significant improvements:</p>
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">⚡ No jQuery</p>
                      <p className="text-sm">Faster loading, better performance</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">📱 Improved Grid</p>
                      <p className="text-sm">XXL breakpoint for larger screens</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">🎨 Enhanced Forms</p>
                      <p className="text-sm">Better form controls and validation</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">🔧 Utility Classes</p>
                      <p className="text-sm">More utilities for faster styling</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">🌍 RTL Support</p>
                      <p className="text-sm">Built-in right-to-left support</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">📦 Offcanvas</p>
                      <p className="text-sm">New component for sidebars/menus</p>
                    </div>
                  </div>
                  <p><strong className="text-blue-600">We recommend Bootstrap 5 for all new projects</strong>. We also provide migration services from Bootstrap 4 to 5.</p>
                </div>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg border-2 border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-indigo-600 transition-colors" itemProp="name">
                <span>How long does Bootstrap website development take?</span>
                <span className="text-3xl text-indigo-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Bootstrap development timelines:</p>
                  <div className="space-y-3 mb-4">
                    <div className="bg-indigo-100 rounded-xl p-4 border-l-4 border-indigo-500 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-gray-900">Basic Website (5-10 pages)</p>
                        <p className="text-sm text-gray-600">Responsive design, basic components</p>
                      </div>
                      <p className="text-2xl font-bold text-indigo-600">1-2 weeks</p>
                    </div>
                    <div className="bg-indigo-100 rounded-xl p-4 border-l-4 border-indigo-500 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-gray-900">Business Website (15-25 pages)</p>
                        <p className="text-sm text-gray-600">Custom design, blog, SEO setup</p>
                      </div>
                      <p className="text-2xl font-bold text-indigo-600">3-4 weeks</p>
                    </div>
                    <div className="bg-indigo-100 rounded-xl p-4 border-l-4 border-indigo-500 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-gray-900">E-commerce Site</p>
                        <p className="text-sm text-gray-600">Product catalog, payments, admin</p>
                      </div>
                      <p className="text-2xl font-bold text-indigo-600">4-6 weeks</p>
                    </div>
                    <div className="bg-indigo-100 rounded-xl p-4 border-l-4 border-indigo-500 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-gray-900">Custom Dashboard</p>
                        <p className="text-sm text-gray-600">Admin panel, data visualization</p>
                      </div>
                      <p className="text-2xl font-bold text-indigo-600">5-8 weeks</p>
                    </div>
                  </div>
                  <p className="text-indigo-600 font-bold">Bootstrap&apos;s pre-built components allow 40-50% faster development. Projects start within 2-3 days!</p>
                </div>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-cyan-50 to-white rounded-2xl shadow-lg border-2 border-cyan-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-cyan-600 transition-colors" itemProp="name">
                <span>Will my Bootstrap website work on all devices?</span>
                <span className="text-3xl text-cyan-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Yes! Bootstrap is built mobile-first and works perfectly on all devices:</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    <div className="bg-cyan-100 rounded-xl p-4 text-center">
                      <p className="text-3xl mb-2">📱</p>
                      <p className="font-bold text-gray-900">Smartphones</p>
                      <p className="text-sm text-gray-600">iOS, Android</p>
                    </div>
                    <div className="bg-cyan-100 rounded-xl p-4 text-center">
                      <p className="text-3xl mb-2">📲</p>
                      <p className="font-bold text-gray-900">Tablets</p>
                      <p className="text-sm text-gray-600">iPad, Android tablets</p>
                    </div>
                    <div className="bg-cyan-100 rounded-xl p-4 text-center">
                      <p className="text-3xl mb-2">💻</p>
                      <p className="font-bold text-gray-900">Laptops</p>
                      <p className="text-sm text-gray-600">All screen sizes</p>
                    </div>
                    <div className="bg-cyan-100 rounded-xl p-4 text-center">
                      <p className="text-3xl mb-2">🖥️</p>
                      <p className="font-bold text-gray-900">Desktops</p>
                      <p className="text-sm text-gray-600">Including 4K monitors</p>
                    </div>
                  </div>
                  <p>Bootstrap&apos;s responsive grid system automatically adjusts layouts. All our sites achieve <strong className="text-cyan-600">95+ mobile-friendliness score</strong> on Google&apos;s test.</p>
                </div>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border-2 border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-blue-600 transition-colors" itemProp="name">
                <span>Do you provide Bootstrap migration services?</span>
                <span className="text-3xl text-blue-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Yes! We offer comprehensive Bootstrap migration services:</p>
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">📦 Bootstrap 3 to 5 Upgrade</p>
                      <p className="text-sm">Modern features, no jQuery</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">🔄 Custom CSS to Bootstrap</p>
                      <p className="text-sm">Faster maintenance, responsive</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">🎨 WordPress Theme to Bootstrap</p>
                      <p className="text-sm">Better performance, mobile-first</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">📄 Static HTML to Bootstrap</p>
                      <p className="text-sm">Responsive redesign</p>
                    </div>
                  </div>
                  <p>Migration includes: code audit, component mapping, responsive conversion, testing, SEO preservation, 301 redirects. <strong className="text-blue-600">Typical migration: 2-4 weeks, zero downtime!</strong></p>
                </div>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg border-2 border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-indigo-600 transition-colors" itemProp="name">
                <span>Can you integrate Bootstrap with React, Angular, or Vue?</span>
                <span className="text-3xl text-indigo-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Absolutely! We have extensive experience integrating Bootstrap with modern JavaScript frameworks:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-indigo-100 rounded-xl p-5 border-l-4 border-indigo-500">
                      <p className="font-bold text-gray-900 text-lg mb-2">⚛️ React Bootstrap</p>
                      <p className="text-sm text-gray-600">React components with Bootstrap styling, react-bootstrap library, Next.js integration</p>
                    </div>
                    <div className="bg-indigo-100 rounded-xl p-5 border-l-4 border-indigo-500">
                      <p className="font-bold text-gray-900 text-lg mb-2">🅰️ NG Bootstrap (Angular)</p>
                      <p className="text-sm text-gray-600">Native Angular directives, ng-bootstrap components, TypeScript support</p>
                    </div>
                    <div className="bg-indigo-100 rounded-xl p-5 border-l-4 border-indigo-500">
                      <p className="font-bold text-gray-900 text-lg mb-2">💚 Bootstrap Vue</p>
                      <p className="text-sm text-gray-600">Vue.js components, BootstrapVue library, Nuxt.js compatible</p>
                    </div>
                    <div className="bg-indigo-100 rounded-xl p-5 border-l-4 border-indigo-500">
                      <p className="font-bold text-gray-900 text-lg mb-2">⚡ Vanilla JavaScript</p>
                      <p className="text-sm text-gray-600">Pure Bootstrap 5 with modern JS, no framework overhead</p>
                    </div>
                  </div>
                  <p>This combination provides <strong className="text-indigo-600">responsive design with powerful JavaScript functionality</strong> for optimal performance and maintainability.</p>
                </div>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-cyan-50 to-white rounded-2xl shadow-lg border-2 border-cyan-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-cyan-600 transition-colors" itemProp="name">
                <span>What&apos;s included in Bootstrap development support?</span>
                <span className="text-3xl text-cyan-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Our Bootstrap development includes <strong className="text-cyan-600">3 months free support</strong> covering:</p>
                  <div className="grid md:grid-cols-3 gap-3 mb-4">
                    <div className="bg-cyan-100 rounded-xl p-4 border-2 border-cyan-300">
                      <p className="font-bold text-gray-900 text-lg mb-2">Basic Support</p>
                      <p className="text-2xl font-bold text-cyan-600 mb-2">₹5,000/mo</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>✓ Bug fixes</li>
                        <li>✓ Browser issues</li>
                        <li>✓ Minor adjustments</li>
                        <li>✓ 3 hours/month</li>
                      </ul>
                    </div>
                    <div className="bg-cyan-100 rounded-xl p-4 border-2 border-cyan-400">
                      <p className="font-bold text-gray-900 text-lg mb-2">Professional</p>
                      <p className="text-2xl font-bold text-cyan-600 mb-2">₹10,000/mo</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>✓ Priority support</li>
                        <li>✓ Content updates</li>
                        <li>✓ Performance monitoring</li>
                        <li>✓ 8 hours/month</li>
                      </ul>
                    </div>
                    <div className="bg-cyan-100 rounded-xl p-4 border-2 border-cyan-500">
                      <p className="font-bold text-gray-900 text-lg mb-2">Enterprise</p>
                      <p className="text-2xl font-bold text-cyan-600 mb-2">₹20,000/mo</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>✓ Dedicated support</li>
                        <li>✓ Unlimited revisions</li>
                        <li>✓ New features</li>
                        <li>✓ 20 hours/month</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-cyan-600 font-bold">All plans include security updates, mobile responsiveness fixes, and performance optimization!</p>
                </div>
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border-2 border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-blue-600 transition-colors" itemProp="name">
                <span>Is Bootstrap good for SEO?</span>
                <span className="text-3xl text-blue-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Yes! Bootstrap is excellent for SEO when properly implemented:</p>
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">📄 Clean HTML5</p>
                      <p className="text-sm">Semantic markup, proper structure</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">⚡ Fast Loading</p>
                      <p className="text-sm">Optimized CSS/JS, minified files</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">📱 Mobile-First</p>
                      <p className="text-sm">Google ranking factor</p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="font-bold text-gray-900">♿ Accessibility</p>
                      <p className="text-sm">ARIA labels, keyboard navigation</p>
                    </div>
                  </div>
                  <p className="mb-4">We optimize Bootstrap sites with: proper heading hierarchy, schema markup, optimized images, fast server response, mobile optimization.</p>
                  <p className="text-blue-600 font-bold">All our Bootstrap sites achieve 90+ PageSpeed scores and rank well on Google!</p>
                </div>
              </div>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg border-2 border-indigo-100 overflow-hidden transition-all duration-300 hover:shadow-xl" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <summary className="cursor-pointer list-none p-8 font-bold text-xl text-gray-900 flex justify-between items-center group-hover:text-indigo-600 transition-colors" itemProp="name">
                <span>How do I get started with Bootstrap development?</span>
                <span className="text-3xl text-indigo-600 group-open:rotate-180 transition-transform duration-300">›</span>
              </summary>
              <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <div itemProp="text">
                  <p className="mb-4">Getting started is easy! Follow our simple process:</p>
                  <div className="space-y-3 mb-4">
                    <div className="bg-indigo-100 rounded-xl p-4 border-l-4 border-indigo-500 flex items-start">
                      <span className="text-2xl font-bold text-indigo-600 mr-4">1</span>
                      <div>
                        <p className="font-bold text-gray-900">Free Consultation</p>
                        <p className="text-sm text-gray-600">Call +91-83695-11877 or fill enquiry form. Discuss requirements, design preferences, timeline.</p>
                      </div>
                    </div>
                    <div className="bg-indigo-100 rounded-xl p-4 border-l-4 border-indigo-500 flex items-start">
                      <span className="text-2xl font-bold text-indigo-600 mr-4">2</span>
                      <div>
                        <p className="font-bold text-gray-900">Proposal & Quote</p>
                        <p className="text-sm text-gray-600">Detailed scope, Bootstrap features, timeline, transparent pricing.</p>
                      </div>
                    </div>
                    <div className="bg-indigo-100 rounded-xl p-4 border-l-4 border-indigo-500 flex items-start">
                      <span className="text-2xl font-bold text-indigo-600 mr-4">3</span>
                      <div>
                        <p className="font-bold text-gray-900">Design Approval</p>
                        <p className="text-sm text-gray-600">Custom Bootstrap mockups, responsive previews, unlimited revisions.</p>
                      </div>
                    </div>
                    <div className="bg-indigo-100 rounded-xl p-4 border-l-4 border-indigo-500 flex items-start">
                      <span className="text-2xl font-bold text-indigo-600 mr-4">4</span>
                      <div>
                        <p className="font-bold text-gray-900">Development</p>
                        <p className="text-sm text-gray-600">Mobile-first coding, custom components, weekly progress updates.</p>
                      </div>
                    </div>
                    <div className="bg-indigo-100 rounded-xl p-4 border-l-4 border-indigo-500 flex items-start">
                      <span className="text-2xl font-bold text-indigo-600 mr-4">5</span>
                      <div>
                        <p className="font-bold text-gray-900">Testing & Launch</p>
                        <p className="text-sm text-gray-600">Cross-browser testing, mobile testing, SEO setup, go-live!</p>
                      </div>
                    </div>
                    <div className="bg-indigo-100 rounded-xl p-4 border-l-4 border-indigo-500 flex items-start">
                      <span className="text-2xl font-bold text-indigo-600 mr-4">6</span>
                      <div>
                        <p className="font-bold text-gray-900">Training & Support</p>
                        <p className="text-sm text-gray-600">Admin training, documentation, 3 months free support.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-indigo-600 font-bold text-lg">📞 Call now: +91-83695-11877 - Projects start within 2-3 days!</p>
                </div>
              </div>
            </details>

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
