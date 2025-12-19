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
  title: "Custom Development Mumbai | 300% ROI | Bespoke Solutions",
  description: "Custom Development Mumbai. 300% ROI Guaranteed | Bespoke Software, API & Web Apps | Tailored Solutions | Enterprise Grade. Call +91-83695-11877",
  keywords: [
    // Primary Keywords
    'custom website development in mumbai',
    'custom website development mumbai',
    'custom web development mumbai',
    'bespoke software development mumbai',
    'tailored web solutions mumbai',
    
    // Service-specific Keywords
    'custom web application development',
    'custom software development mumbai',
    'bespoke web development services',
    'custom api development mumbai',
    'enterprise software development',
    'custom cms development mumbai',
    'custom ecommerce development',
    'progressive web app development',
    
    // Location-based Keywords
    'custom development company mumbai',
    'mumbai custom development agency',
    'best custom development mumbai',
    'top custom website developer mumbai',
    'professional custom development mumbai',
    'custom development consultancy mumbai',
    
    // Business-specific Keywords
    'startup custom development mumbai',
    'small business custom software',
    'enterprise custom solutions mumbai',
    'b2b custom development',
    'b2c web application development',
    'saas development mumbai',
    
    // Solution Keywords
    'custom web applications',
    'bespoke business solutions',
    'tailored software development',
    'custom database development',
    'custom integration solutions',
    'custom mobile app development',
    'full stack custom development',
    
    // Technology Keywords
    'react custom development mumbai',
    'node.js development mumbai',
    'python custom development',
    'php custom development',
    'nextjs custom development',
    'custom rest api development',
    'custom graphql api development',
    
    // Industry Keywords
    'innovative custom development',
    'scalable custom solutions',
    'secure custom web development',
    'agile custom development',
    'modern custom development',
    
    // Local SEO
    'custom development chembur',
    'web development agency maharashtra',
    'mumbai software developers',
    
    // Service Types
    'custom crm development',
    'custom erp solutions',
    'custom portal development',
    'custom dashboard development',
    'custom admin panel development',
    'custom payment gateway integration',
    
    // Package Keywords
    'complete custom development package',
    'affordable custom development mumbai',
    'premium custom software services',
    'end to end custom development',
    'custom development consulting',
    'custom development support'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Custom Software Development Services',
  classification: 'Bespoke Web Applications & Custom Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mydigitalcrown.in'),
  alternates: {
    canonical: '/services/custom-development',
  },
  openGraph: {
    title: 'Custom Website Development In Mumbai | #1 Bespoke Software Solutions',
    description: 'Top Custom Website Development In Mumbai. 300% ROI Guaranteed. Expert Bespoke Web Development, Custom Software & Tailored Applications.',
    url: 'https://mydigitalcrown.in/services/custom-development',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/custom-development-mumbai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Website Development In Mumbai - MyDigital Crown',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Website Development In Mumbai | #1 Bespoke Software',
    description: 'Top Custom Website Development In Mumbai. 300% ROI Guaranteed. Expert Bespoke Web Development & Custom Software Solutions.',
    images: ['https://mydigitalcrown.in/images/custom-development-mumbai-twitter.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function CustomDevelopmentPage() {
  // Comprehensive Schema Markup - 15 Schema Types
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mydigitalcrown.in/services/custom-development#service",
        "name": "Custom Website Development Services",
        "description": "Top Custom Website Development In Mumbai. 300% ROI Guaranteed. Expert Bespoke Web Development, Custom Software, Tailored Applications & API Solutions across Mumbai and India.",
        "provider": {
          "@type": "Organization",
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Mumbai",
            "containedIn": {
              "@type": "State",
              "name": "Maharashtra"
            }
          },
          {
            "@type": "Country",
            "name": "India"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Custom Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Applications"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom API Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise Solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Progressive Web Apps"
              }
            }
          ]
        },
        "priceRange": "₹₹₹",
        "url": "https://mydigitalcrown.in/services/custom-development"
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
          "contactType": "Customer Service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Chembur",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400071",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.facebook.com/mydigitalcrown",
          "https://www.instagram.com/mydigitalcrown",
          "https://twitter.com/mydigitalcrown",
          "https://www.linkedin.com/company/mydigitalcrown"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://mydigitalcrown.in/services/custom-development#webpage",
        "url": "https://mydigitalcrown.in/services/custom-development",
        "name": "Custom Website Development In Mumbai | MyDigital Crown",
        "description": "Top Custom Website Development In Mumbai. Expert Bespoke Web Development, Custom Software & Tailored Applications.",
        "publisher": {
          "@type": "Organization",
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mydigitalcrown.in/services/custom-development#breadcrumb",
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
              "@id": "https://mydigitalcrown.in/services/custom-development",
              "name": "Custom Website Development"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://mydigitalcrown.in/services/custom-development#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is custom website development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Custom website development is the process of building tailored web solutions from scratch, designed specifically for your unique business requirements. Unlike template-based solutions, custom development gives you complete control over features, functionality, design, and scalability."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose MyDigital Crown for custom website development in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MyDigital Crown is Mumbai's leading custom development agency with 150+ successful projects, expert developers in modern technologies, agile methodology, 100% tailored solutions, 24/7 support, and proven track record of delivering scalable, secure custom web applications."
            }
          },
          {
            "@type": "Question",
            "name": "How much does custom website development cost in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Custom website development cost in Mumbai varies based on complexity, features, and technology stack. Basic custom web applications start from ₹1.5L, mid-level projects range ₹3L-8L, and enterprise-grade custom solutions can range ₹10L+. We offer flexible payment plans and transparent pricing with no hidden costs."
            }
          },
          {
            "@type": "Question",
            "name": "How long does custom website development take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Timeline depends on project scope: Simple custom web apps take 4-8 weeks, medium complexity projects require 2-4 months, and large enterprise custom solutions may take 4-8 months. We follow agile methodology with regular updates and milestone deliveries."
            }
          },
          {
            "@type": "Question",
            "name": "What technologies do you use for custom development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use modern technologies including React.js, Next.js, Vue.js, Node.js, Python (Django/Flask), PHP (Laravel), MongoDB, PostgreSQL, MySQL, GraphQL, REST APIs, AWS, Docker, and other cutting-edge tools based on your project requirements."
            }
          },
          {
            "@type": "Question",
            "name": "What industries do you serve for custom development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve all industries including e-commerce, healthcare, education, finance, real estate, manufacturing, logistics, hospitality, startups, and enterprises. Our custom solutions are tailored to industry-specific workflows and compliance requirements."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://mydigitalcrown.in/#localbusiness",
        "name": "MyDigital Crown - Custom Website Development",
        "image": "https://mydigitalcrown.in/logo.png",
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
        "priceRange": "₹₹₹",
        "openingHours": "Mo-Su 00:00-23:59"
      },
      {
        "@type": "Review",
        "@id": "https://mydigitalcrown.in/services/custom-development#review",
        "itemReviewed": {
          "@type": "Service",
          "@id": "https://mydigitalcrown.in/services/custom-development#service"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.9",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Rahul Sharma"
        },
        "reviewBody": "MyDigital Crown built our custom ERP system from scratch. The team's expertise in understanding our complex requirements and delivering a scalable solution was outstanding. Highly recommend for custom development!"
      },
      {
        "@type": "AggregateRating",
        "@id": "https://mydigitalcrown.in/services/custom-development#aggregaterating",
        "ratingValue": "4.9",
        "reviewCount": "250",
        "bestRating": "5",
        "worstRating": "1",
        "itemReviewed": {
          "@type": "Service",
          "@id": "https://mydigitalcrown.in/services/custom-development#service"
        }
      },
      {
        "@type": "HowTo",
        "@id": "https://mydigitalcrown.in/services/custom-development#howto",
        "name": "How to Get Custom Website Development in Mumbai",
        "description": "Step-by-step process for custom website development",
        "totalTime": "P8W",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": "150000"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Discovery & Planning",
            "text": "Discuss your requirements, goals, and technical specifications. Define project scope and create detailed documentation.",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Design & Architecture",
            "text": "Create wireframes, mockups, and system architecture. Design user interfaces and database schema.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Development & Testing",
            "text": "Build custom solution using agile methodology. Continuous testing, code reviews, and quality assurance.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Deployment & Support",
            "text": "Launch your custom solution with training, documentation, and ongoing 24/7 maintenance support.",
            "position": 4
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://mydigitalcrown.in/services/custom-development#article",
        "headline": "Custom Website Development In Mumbai - Complete Guide 2025",
        "description": "Comprehensive guide to custom website development services in Mumbai with expert insights on technologies, costs, and best practices.",
        "author": {
          "@type": "Person",
          "name": "Aditya Pandey"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "datePublished": "2025-01-01",
        "dateModified": "2025-10-11"
      },
      {
        "@type": "ItemList",
        "@id": "https://mydigitalcrown.in/services/custom-development#itemlist",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Service",
              "name": "Custom Web Applications",
              "description": "Full-stack web apps built from scratch"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Service",
              "name": "Custom API Development",
              "description": "RESTful and GraphQL APIs"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Service",
              "name": "Enterprise Solutions",
              "description": "Complex business systems and ERP"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Service",
              "name": "Progressive Web Apps",
              "description": "App-like experiences with offline support"
            }
          }
        ]
      },
      {
        "@type": "Offer",
        "@id": "https://mydigitalcrown.in/services/custom-development#offer",
        "price": "150000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://mydigitalcrown.in/services/custom-development",
        "priceValidUntil": "2025-12-31",
        "itemOffered": {
          "@type": "Service",
          "@id": "https://mydigitalcrown.in/services/custom-development#service"
        },
        "description": "Complete custom website development package with 35% discount this month"
      },
      {
        "@type": "VideoObject",
        "@id": "https://mydigitalcrown.in/services/custom-development#video",
        "name": "Custom Website Development Process - MyDigital Crown",
        "description": "Learn how we build custom web applications and bespoke software solutions in Mumbai",
        "thumbnailUrl": "https://mydigitalcrown.in/images/custom-development-video-thumb.jpg",
        "uploadDate": "2025-01-15",
        "duration": "PT3M45S",
        "contentUrl": "https://mydigitalcrown.in/videos/custom-development-process.mp4"
      },
      {
        "@type": "Course",
        "@id": "https://mydigitalcrown.in/services/custom-development#course",
        "name": "Custom Web Development Training",
        "description": "Learn modern custom web development technologies and best practices",
        "provider": {
          "@type": "Organization",
          "@id": "https://mydigitalcrown.in/#organization"
        }
      },
      {
        "@type": "SpecialAnnouncement",
        "@id": "https://mydigitalcrown.in/services/custom-development#announcement",
        "name": "35% OFF on Custom Development This Month",
        "description": "Get complete custom website development package with 35% discount. Limited time offer for Mumbai businesses.",
        "datePosted": "2025-10-01",
        "expires": "2025-10-31"
      }
    ]
  };

  return (
    <>
      {/* Schema Markup Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Noscript Fallback */}
      <noscript>
        <h1>Custom Website Development In Mumbai - MyDigital Crown</h1>
        <p>Top Custom Website Development Company In Mumbai. Expert Bespoke Web Development, Custom Software Solutions, Tailored Applications & API Development. Call +91-83695-11877 for Custom Development Services.</p>
      </noscript>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-sky-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-sky-700/95"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s Custom Development Specialists</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Custom Website Development
                </span>
                <br />
                <span className="text-4xl md:text-6xl">In Mumbai</span>
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto font-bold leading-relaxed">
                  💻 Build <span className="text-sky-300">Exactly What You Need</span> - <span className="text-blue-300">No Compromises</span>, <span className="text-cyan-300">No Limitations</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-semibold leading-relaxed">
                  Custom Web Apps | APIs | Enterprise Solutions | Bespoke Software
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-sky-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">🚀</span>
                    <span>Build Custom Solution</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">150+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Custom Projects</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Tailored</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">Scalable</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Solutions</div>
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

      {/* Voice Search Quick Answers Section - VSO */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4 shadow-lg">
              <span className="mr-2">🎯</span>
              Quick Answers - Voice Search Optimized
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Know About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Custom Website Development</span>
            </h2>
          </header>

          <div className="grid md:grid-cols-3 gap-8" itemScope itemType="https://schema.org/FAQPage">
            {/* Question 1 - Where */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-2xl" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center" itemProp="name">
                Where is the best custom website development company in Mumbai?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-700 text-center leading-relaxed" itemProp="text">
                  <strong>MyDigital Crown</strong> is located in <strong>Chembur, Mumbai, Maharashtra - 400071</strong>. We are Mumbai&apos;s leading custom development agency with <strong>150+ successful projects</strong> and expert developers in modern technologies.
                </p>
              </div>
            </div>

            {/* Question 2 - How Much */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-2xl" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center" itemProp="name">
                How much does custom website development cost in Mumbai?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-700 text-center leading-relaxed" itemProp="text">
                  Custom website development in Mumbai starts from <strong>₹1.5 Lakhs</strong> for basic web apps, <strong>₹3-8 Lakhs</strong> for mid-level projects, and <strong>₹10L+</strong> for enterprise solutions. We offer <strong>flexible payment plans</strong> and <strong>35% discount this month</strong>!
                </p>
              </div>
            </div>

            {/* Question 3 - Timeline */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-indigo-100 hover:border-indigo-300 transition-all hover:shadow-2xl" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">⏱️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center" itemProp="name">
                How long does custom website development take?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-700 text-center leading-relaxed" itemProp="text">
                  Timeline varies by complexity: <strong>Simple custom web apps: 4-8 weeks</strong>, <strong>Medium projects: 2-4 months</strong>, <strong>Enterprise solutions: 4-8 months</strong>. We use <strong>agile methodology</strong> with regular milestone deliveries.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg mb-6">
              🚀 Ready to build your custom solution? <strong>Call now for free consultation!</strong>
            </p>
            <a 
              href="tel:+918369511877" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <span className="text-2xl">📞</span>
              <span>+91-83695-11877</span>
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <EnquiryForm />

      {/* About Custom Development Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-sky-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎯</span>
              Why Choose Custom Development
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Solutions That <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">Fit Perfectly</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Off-the-shelf solutions don&apos;t always fit your unique business needs. Custom development gives you complete control, flexibility, and the exact features you require to succeed.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-sky-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
                    alt="Custom Development Services Mumbai - Bespoke Solutions"
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Customization</h3>
                    <p className="text-gray-600">Build exactly what you envision with no limitations or compromises.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Architecture</h3>
                    <p className="text-gray-600">Solutions designed to grow with your business needs and scale seamlessly.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Full Control</h3>
                    <p className="text-gray-600">Own your code, data, and infrastructure without vendor lock-in.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Advantage</h3>
                    <p className="text-gray-600">Stand out with unique features competitors can&apos;t replicate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Development Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-sky-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">💻</span>
              <span>Our Custom Development Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">Bespoke</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">Development Solutions</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Web Applications</h3>
              <p className="text-gray-600 mb-4">Full-stack web apps built from scratch with modern technologies and best practices.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ React/Next.js Apps</li>
                <li className="flex items-center gap-2">✓ Vue/Nuxt.js Apps</li>
                <li className="flex items-center gap-2">✓ Node.js Backend</li>
                <li className="flex items-center gap-2">✓ Database Design</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-gradient-to-br from-sky-50 to-cyan-50 rounded-3xl p-8 border-2 border-sky-200 hover:border-sky-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🔌</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom API Development</h3>
              <p className="text-gray-600 mb-4">RESTful and GraphQL APIs designed for performance, security, and scalability.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ RESTful APIs</li>
                <li className="flex items-center gap-2">✓ GraphQL APIs</li>
                <li className="flex items-center gap-2">✓ API Documentation</li>
                <li className="flex items-center gap-2">✓ Third-party Integration</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">Complex business systems and enterprise-grade applications for large organizations.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ ERP Systems</li>
                <li className="flex items-center gap-2">✓ CRM Solutions</li>
                <li className="flex items-center gap-2">✓ Business Automation</li>
                <li className="flex items-center gap-2">✓ Integration Platforms</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Progressive Web Apps</h3>
              <p className="text-gray-600 mb-4">App-like experiences that work across all devices with offline capabilities.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Offline Support</li>
                <li className="flex items-center gap-2">✓ Push Notifications</li>
                <li className="flex items-center gap-2">✓ Home Screen Install</li>
                <li className="flex items-center gap-2">✓ Fast Performance</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="group relative bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 border-2 border-sky-200 hover:border-sky-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom CMS Development</h3>
              <p className="text-gray-600 mb-4">Tailored content management systems with exactly the features you need.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Custom Admin Panel</li>
                <li className="flex items-center gap-2">✓ Content Workflows</li>
                <li className="flex items-center gap-2">✓ User Management</li>
                <li className="flex items-center gap-2">✓ Media Management</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="group relative bg-gradient-to-br from-cyan-50 to-sky-50 rounded-3xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom E-commerce</h3>
              <p className="text-gray-600 mb-4">Bespoke online stores with unique features and seamless shopping experiences.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Custom Cart Logic</li>
                <li className="flex items-center gap-2">✓ Payment Integration</li>
                <li className="flex items-center gap-2">✓ Inventory System</li>
                <li className="flex items-center gap-2">✓ Order Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-sky-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">⚙️</span>
              <span>Our Development Process</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">How We Build</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">Your Custom Solution</span>
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                1
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Planning</h3>
                <p className="text-gray-600">Deep dive into requirements, goals, and technical specifications.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                2
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Design & Architecture</h3>
                <p className="text-gray-600">Create wireframes, mockups, and system architecture design.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                3
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Development & Testing</h3>
                <p className="text-gray-600">Agile development with continuous testing and quality assurance.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                4
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Deploy & Support</h3>
                <p className="text-gray-600">Launch your solution with ongoing maintenance and support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-sky-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sky-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400 to-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <span className="text-2xl mr-3 animate-pulse">⭐</span>
              <span className="text-lg">Why Choose MyDigital Crown</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Your Custom Development <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Experts</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-sky-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🏆</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Expert Developers</h3>
                <p className="text-blue-100 leading-relaxed">Highly skilled team with expertise in modern technologies and best practices.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Agile Methodology</h3>
                <p className="text-blue-100 leading-relaxed">Flexible, iterative development process with regular feedback and updates.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Quality Assurance</h3>
                <p className="text-blue-100 leading-relaxed">Rigorous testing and QA processes to ensure bug-free, reliable solutions.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-sky-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📈</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
                <p className="text-blue-100 leading-relaxed">Built to grow with your business, handling increased load effortlessly.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔒</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
                <p className="text-blue-100 leading-relaxed">Industry-standard security practices to protect your data and users.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🤝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Full Transparency</h3>
                <p className="text-blue-100 leading-relaxed">Regular updates, clear communication, and complete project visibility.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Build Your Custom Solution?
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Let&apos;s discuss your requirements and create something amazing together.
              </p>
              <Link 
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 inline-flex items-center justify-center transform hover:scale-110"
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
      <section className="py-20 bg-gradient-to-br from-blue-600 via-sky-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-sky-300 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎁</span>
              Exclusive Development Offer
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Complete Custom Development Package<br />
              <span className="text-sky-300">With 35% OFF</span> This Month
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Full-stack development, API integration, database design, testing, deployment, and support. Build your dream solution!
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-300 mb-2">35%</div>
                <div className="text-blue-100">Discount</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-300 mb-2">150+</div>
                <div className="text-blue-100">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-300 mb-2">100%</div>
                <div className="text-blue-100">Tailored</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-300 mb-2">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 hover:-translate-y-1">
                <span className="mr-3">Get Your Quote</span>
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

      {/* FAQ Section - Comprehensive 12 Questions */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl">
              <span className="mr-2">❓</span>
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Got Questions About <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Custom Website Development?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find answers to the most common questions about our custom development services in Mumbai
            </p>
          </header>

          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {/* FAQ 1 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-bold text-lg hover:text-blue-300 transition-colors">
                <span itemProp="name">What is custom website development and how is it different from template-based solutions?</span>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-blue-100 leading-relaxed" itemProp="text">
                  Custom website development is the process of building tailored web solutions from scratch, designed specifically for your unique business requirements. Unlike template-based solutions that offer limited customization, custom development provides complete control over features, functionality, design, scalability, and user experience. You get exactly what you envision without any compromises or limitations, along with ownership of the code and no vendor lock-in.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-bold text-lg hover:text-blue-300 transition-colors">
                <span itemProp="name">Why choose MyDigital Crown for custom website development in Mumbai?</span>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-blue-100 leading-relaxed" itemProp="text">
                  MyDigital Crown is Mumbai&apos;s leading custom development agency with 150+ successful projects delivered. We offer expert developers proficient in modern technologies (React, Node.js, Python, PHP), agile development methodology with regular updates, 100% tailored solutions with no compromises, rigorous quality assurance and testing, scalable architecture that grows with your business, industry-standard security practices, complete transparency with regular communication, competitive pricing with flexible payment plans, and 24/7 ongoing support and maintenance.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-bold text-lg hover:text-blue-300 transition-colors">
                <span itemProp="name">How much does custom website development cost in Mumbai?</span>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-blue-100 leading-relaxed" itemProp="text">
                  Custom website development cost in Mumbai varies based on complexity, features, and technology stack. Basic custom web applications (simple CRUD apps, minimal features) start from ₹1.5 Lakhs. Mid-level projects (custom CMS, e-commerce platforms, API integrations) range from ₹3-8 Lakhs. Enterprise-grade custom solutions (ERP systems, complex business applications, advanced features) can range from ₹10 Lakhs and above. We offer flexible payment plans, transparent pricing with no hidden costs, and currently have a 35% discount this month on complete packages!
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-bold text-lg hover:text-blue-300 transition-colors">
                <span itemProp="name">How long does custom website development take in Mumbai?</span>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-blue-100 leading-relaxed" itemProp="text">
                  Timeline depends on project scope and complexity. Simple custom web applications (basic features, minimal integrations) take 4-8 weeks. Medium complexity projects (custom CMS, API development, moderate features) require 2-4 months. Large enterprise custom solutions (ERP systems, complex workflows, multiple integrations) may take 4-8 months. We follow agile methodology with 2-week sprints, provide regular milestone deliveries and progress updates, offer flexible development schedules, and can expedite for urgent requirements with additional resources.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-bold text-lg hover:text-blue-300 transition-colors">
                <span itemProp="name">What technologies do you use for custom website development?</span>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-blue-100 leading-relaxed" itemProp="text">
                  We use modern, industry-leading technologies tailored to your project requirements. Frontend: React.js, Next.js, Vue.js, Nuxt.js, Angular, TypeScript. Backend: Node.js (Express, NestJS), Python (Django, Flask), PHP (Laravel, CodeIgniter), Ruby on Rails. Databases: MongoDB, PostgreSQL, MySQL, Redis. APIs: RESTful APIs, GraphQL. Cloud & DevOps: AWS, Google Cloud, Docker, Kubernetes. Mobile: React Native, Flutter for hybrid apps. We recommend the best technology stack based on your specific needs, scalability requirements, and budget.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-bold text-lg hover:text-blue-300 transition-colors">
                <span itemProp="name">What is your custom website development process?</span>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-blue-100 leading-relaxed" itemProp="text">
                  Our 4-phase development process: (1) Discovery & Planning - Deep dive into your requirements, goals, technical specifications, and create detailed documentation. (2) Design & Architecture - Create wireframes, mockups, user interface designs, system architecture, and database schema. (3) Development & Testing - Agile development with 2-week sprints, continuous testing, code reviews, quality assurance, and regular client feedback. (4) Deployment & Support - Launch your solution with server setup, training, documentation, and ongoing 24/7 maintenance support. We maintain complete transparency with regular updates throughout the process.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-bold text-lg hover:text-blue-300 transition-colors">
                <span itemProp="name">What types of custom websites and applications can you build?</span>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-blue-100 leading-relaxed" itemProp="text">
                  We build all types of custom solutions: Custom Web Applications (SaaS platforms, booking systems, dashboards), Custom E-commerce Platforms (online stores with unique features, multi-vendor marketplaces), Enterprise Solutions (CRM systems, ERP applications, HR management systems), Custom CMS (content management with tailored workflows), Custom APIs (RESTful and GraphQL APIs, third-party integrations), Progressive Web Apps (offline-capable, installable web apps), Custom Portals (customer portals, vendor portals, employee intranets), Custom Admin Panels (data management, analytics dashboards), and Industry-Specific Applications (healthcare, education, real estate, logistics).
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-bold text-lg hover:text-blue-300 transition-colors">
                <span itemProp="name">Do I own the source code and intellectual property rights?</span>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-blue-100 leading-relaxed" itemProp="text">
                  Yes! Upon project completion and full payment, you receive complete ownership of the source code and all intellectual property rights. We provide full source code repository access, complete documentation (technical and user guides), database schemas and architecture documentation, deployment guides, and all design files and assets. There is no vendor lock-in - you have the freedom to modify, enhance, or migrate your custom solution as needed. We can also provide ongoing support and maintenance on a retainer basis if you choose.
                </p>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-bold text-lg hover:text-blue-300 transition-colors">
                <span itemProp="name">What industries do you serve for custom development?</span>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-blue-100 leading-relaxed" itemProp="text">
                  We serve all industries with tailored custom solutions: E-commerce & Retail (online stores, inventory management), Healthcare (patient management, telemedicine platforms), Education (learning management systems, online courses), Finance & Banking (fintech apps, payment systems), Real Estate (property management, listing platforms), Manufacturing (inventory, supply chain management), Logistics & Transportation (tracking systems, route optimization), Hospitality & Travel (booking systems, reservation platforms), Startups (MVP development, scalable SaaS platforms), and Enterprises (complex business applications, workflow automation). Each solution is customized to industry-specific requirements and compliance standards.
                </p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-bold text-lg hover:text-blue-300 transition-colors">
                <span itemProp="name">How do you ensure security and data protection in custom development?</span>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-blue-100 leading-relaxed" itemProp="text">
                  Security is our top priority. We implement industry-standard security practices: Secure authentication and authorization (JWT, OAuth 2.0), data encryption in transit and at rest, SQL injection and XSS attack prevention, CSRF protection and input validation, secure API design with rate limiting, regular security audits and penetration testing, compliance with GDPR, HIPAA, and other regulations, secure hosting infrastructure, regular security patches and updates, database backups and disaster recovery plans, SSL/TLS certificates for all deployments, and comprehensive security documentation. We follow OWASP security guidelines and best practices throughout development.
                </p>
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-bold text-lg hover:text-blue-300 transition-colors">
                <span itemProp="name">Do you provide ongoing support and maintenance after development?</span>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-blue-100 leading-relaxed" itemProp="text">
                  Yes! We offer comprehensive ongoing support and maintenance: Free support (3 months bug fixes after launch), 24/7 technical support (via phone, email, chat), regular updates and security patches, performance monitoring and optimization, server and hosting management, database maintenance and backups, feature enhancements and additions, scaling support as your business grows, emergency support for critical issues, monthly maintenance retainers available, dedicated support team, and priority response times for retainer clients. We ensure your custom solution stays secure, updated, and optimized for peak performance.
                </p>
              </div>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-bold text-lg hover:text-blue-300 transition-colors">
                <span itemProp="name">How do I get started with custom website development at MyDigital Crown?</span>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-blue-100 leading-relaxed" itemProp="text">
                  Getting started is easy! Simply: Call us at +91-83695-11877 for immediate consultation, or fill out our contact form on the website, or email us at info@mydigitalcrown.in. We will schedule a free consultation call to discuss your requirements, provide a detailed project proposal with timeline and cost estimation, sign agreement and finalize project scope, begin development with our agile process, and deliver your custom solution with training and support. We offer flexible payment plans and currently have 35% discount this month on custom development packages. Let&apos;s build something amazing together!
                </p>
              </div>
            </details>
          </div>

          <div className="text-center mt-12">
            <p className="text-blue-100 text-lg mb-6">
              Still have questions? We&apos;re here to help! 📞
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+918369511877" 
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <span className="text-2xl">📞</span>
                <span>Call: +91-83695-11877</span>
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <span className="text-2xl">💬</span>
                <span>Get Free Consultation</span>
              </Link>
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
