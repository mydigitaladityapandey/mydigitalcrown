import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import TrustedBrands from '@/app/components/TrustedBrands'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopify Developer Mumbai | 500+ Stores Built | MyDigital',
  description: 'Shopify Developer Mumbai. 500+ Stores Built | Custom Themes, App Integration & Migration | Expert Development. Call +91-83695-11877',
  keywords: [
    'shopify developer in mumbai',
    'shopify developer mumbai',
    'shopify development mumbai',
    'shopify expert mumbai',
    'shopify store developer mumbai',
    'shopify theme developer',
    'shopify app developer mumbai',
    'custom shopify development',
    'shopify ecommerce developer',
    'shopify plus developer mumbai',
    'shopify migration services',
    'shopify store setup mumbai',
    'hire shopify developer mumbai',
    'freelance shopify developer',
    'shopify development company mumbai',
    'shopify development agency',
    'shopify theme customization',
    'shopify app integration',
    'shopify payment gateway',
    'shopify seo services',
    'shopify speed optimization',
    'shopify store design mumbai',
    'ecommerce development mumbai',
    'online store developer',
    'shopify consultant mumbai',
    'shopify partner mumbai',
    'shopify certified developer',
    'shopify store migration',
    'woocommerce to shopify',
    'magento to shopify',
    'shopify dropshipping setup',
    'shopify liquid developer',
    'shopify api integration',
    'headless shopify development',
    'shopify plus partner',
    'best shopify developer mumbai'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'E-commerce Development Services',
  classification: 'Shopify Store Development & Customization',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mydigitalcrown.in'),
  alternates: {
    canonical: '/services/shopify-developer',
  },
  openGraph: {
    title: 'Shopify Developer in Mumbai | #1 Shopify Development Agency',
    description: 'Top Shopify Developer in Mumbai. Expert Shopify store development, custom themes, app integration. 500+ stores built. Call +91-83695-11877',
    url: 'https://mydigitalcrown.in/services/shopify-developer',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/shopify-developer-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Shopify Developer in Mumbai - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer in Mumbai | MyDigital Crown',
    description: 'Expert Shopify development services in Mumbai. 500+ stores built with custom themes & integrations.',
    images: ['https://mydigitalcrown.in/images/shopify-developer-mumbai.jpg'],
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

export default function ShopifyDeveloperPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // Service Schema
      {
        "@type": "Service",
        "@id": "https://mydigitalcrown.in/services/shopify-developer#service",
        "name": "Shopify Developer in Mumbai",
        "description": "Expert Shopify development services in Mumbai including custom store development, theme customization, app integration, migration, and ongoing support.",
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
          "name": "Shopify Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Shopify Store Setup",
                "description": "Complete Shopify store setup from scratch"
              },
              "price": "45000",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Theme Development",
                "description": "Custom Shopify theme design and development"
              },
              "price": "75000",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Shopify Migration",
                "description": "Platform migration to Shopify"
              },
              "price": "60000",
              "priceCurrency": "INR"
            }
          ]
        }
      },
      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://mydigitalcrown.in/#organization",
        "name": "MyDigital Crown",
        "url": "https://mydigitalcrown.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mydigitalcrown.in/logo.png",
          "width": "250",
          "height": "60"
        },
        "description": "Leading Shopify development agency in Mumbai offering expert e-commerce solutions",
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
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
          "https://www.facebook.com/mydigitalcrown",
          "https://www.instagram.com/mydigitalcrown",
          "https://www.linkedin.com/company/mydigitalcrown"
        ]
      },
      // LocalBusiness Schema
      {
        "@type": "LocalBusiness",
        "@id": "https://mydigitalcrown.in/#localbusiness",
        "name": "MyDigital Crown - Shopify Developer Mumbai",
        "image": "https://mydigitalcrown.in/images/shopify-developer-mumbai.jpg",
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
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "19:00"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150"
        }
      },
      // WebPage Schema
      {
        "@type": "WebPage",
        "@id": "https://mydigitalcrown.in/services/shopify-developer#webpage",
        "url": "https://mydigitalcrown.in/services/shopify-developer",
        "name": "Shopify Developer in Mumbai | #1 Shopify Development Agency",
        "description": "Top Shopify Developer in Mumbai. Expert Shopify store development, custom themes, app integration & migration services. 500+ stores built.",
        "isPartOf": {
          "@id": "https://mydigitalcrown.in/#website"
        },
        "about": {
          "@id": "https://mydigitalcrown.in/services/shopify-developer#service"
        },
        "breadcrumb": {
          "@id": "https://mydigitalcrown.in/services/shopify-developer#breadcrumb"
        }
      },
      // BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "@id": "https://mydigitalcrown.in/services/shopify-developer#breadcrumb",
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
            "name": "Shopify Developer",
            "item": "https://mydigitalcrown.in/services/shopify-developer"
          }
        ]
      },
      // FAQPage Schema
      {
        "@type": "FAQPage",
        "@id": "https://mydigitalcrown.in/services/shopify-developer#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does a Shopify developer in Mumbai provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A professional Shopify developer in Mumbai provides comprehensive services including custom Shopify store development, theme customization, app integration, migration from other platforms (WooCommerce, Magento), payment gateway setup, SEO optimization, speed optimization, third-party API integrations, custom app development, Shopify Plus development, and ongoing maintenance and support."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to hire a Shopify developer in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost varies based on project complexity. Basic Shopify store setup starts from ₹45,000, custom theme development from ₹75,000, complete e-commerce solutions from ₹1,50,000, and Shopify Plus development from ₹3,00,000. We offer flexible pricing packages and provide free consultations."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a Shopify store?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Timeline depends on complexity: Basic Shopify store setup takes 7-10 days, custom theme development 3-4 weeks, full e-commerce solution with custom features 6-8 weeks, and Shopify migration 2-3 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Can you customize an existing Shopify theme?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We specialize in customizing existing Shopify themes to match your brand identity. This includes modifying layouts, colors, fonts, adding custom sections, implementing new features, integrating third-party apps, optimizing mobile responsiveness, and improving site speed."
            }
          },
          {
            "@type": "Question",
            "name": "Do you help with migration from other platforms to Shopify?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! We provide seamless migration services from WooCommerce, Magento, BigCommerce, PrestaShop, and other e-commerce platforms to Shopify. Our migration process includes transferring all products, customer data, order history, blog posts, and maintaining SEO rankings."
            }
          }
        ]
      },
      // HowTo Schema
      {
        "@type": "HowTo",
        "name": "How to Build a Shopify Store in Mumbai",
        "description": "Step-by-step guide to building a successful Shopify store with a Mumbai developer",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Discovery & Planning",
            "text": "Understanding business goals, target audience, and creating project roadmap",
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Discuss requirements, analyze competitors, plan features and timeline"
            }
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Design & User Experience",
            "text": "Creating custom mockups that reflect brand identity",
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Design intuitive navigation, compelling product pages, mobile-first responsive design"
            }
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Development & Customization",
            "text": "Building the store with clean, optimized code",
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Custom theme development, app integrations, payment gateway setup"
            }
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Testing & Quality Assurance",
            "text": "Rigorous testing before launch",
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Test payment processing, checkout flow, mobile responsiveness, page speed"
            }
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Launch & Training",
            "text": "Technical launch and team training",
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Handle launch process, provide training on managing products and orders"
            }
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Ongoing Support",
            "text": "Post-launch maintenance and growth support",
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Provide updates, troubleshooting, optimization, and new feature additions"
            }
          }
        ],
        "totalTime": "PT6W"
      },
      // Article Schema
      {
        "@type": "Article",
        "headline": "The Complete Guide to Hiring a Shopify Developer in Mumbai",
        "description": "Comprehensive guide covering everything you need to know about Shopify development and choosing the right developer in Mumbai",
        "author": {
          "@type": "Organization",
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "publisher": {
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "datePublished": "2024-01-01",
        "dateModified": "2025-01-09"
      },
      // Review Schema
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "LocalBusiness",
          "name": "MyDigital Crown - Shopify Developer"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Satisfied Client"
        },
        "reviewBody": "Excellent Shopify development services. Built our e-commerce store from scratch with custom features. Professional team, great communication, delivered on time."
      },
      // AggregateRating Schema
      {
        "@type": "AggregateRating",
        "@id": "https://mydigitalcrown.in/services/shopify-developer#aggregaterating",
        "itemReviewed": {
          "@type": "Service",
          "name": "Shopify Development Services"
        },
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      // ProfessionalService Schema
      {
        "@type": "ProfessionalService",
        "name": "MyDigital Crown Shopify Development",
        "url": "https://mydigitalcrown.in/services/shopify-developer",
        "telephone": "+91-83695-11877",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      },
      // ItemList Schema
      {
        "@type": "ItemList",
        "name": "Shopify Development Services",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Custom Theme Development"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Shopify App Development"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Store Setup & Configuration"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Shopify Migration"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Performance Optimization"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Third-Party Integrations"
          }
        ]
      },
      // VideoObject Schema
      {
        "@type": "VideoObject",
        "name": "Shopify Development Services in Mumbai",
        "description": "Learn about our expert Shopify development services",
        "thumbnailUrl": "https://mydigitalcrown.in/images/shopify-video-thumbnail.jpg",
        "uploadDate": "2024-01-01",
        "duration": "PT2M30S"
      },
      // Course Schema
      {
        "@type": "Course",
        "name": "Shopify Store Management Training",
        "description": "Comprehensive training on managing your Shopify store",
        "provider": {
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "duration": "PT3H"
        }
      }
    ]
  };

  return (
    <>
      {/* Comprehensive Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <noscript>
        <p>Shopify Developer in Mumbai - Expert Shopify development services including custom stores, themes, and apps. Call +91-83695-11877</p>
      </noscript>

      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Shopify Developer Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s #1 Shopify Developer</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Shopify Developer In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  🛍️ Expert <span className="text-yellow-300">Shopify Store Development</span>, <span className="text-green-300">Custom Themes</span> & <span className="text-orange-300">App Integration</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Store Setup | Custom Development | Migration | SEO | Speed Optimization
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">�</span>
                    <span>Hire Shopify Developer</span>
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
                    <div className="text-white text-base font-bold uppercase tracking-wider">Shopify Stores</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">50+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Custom Themes</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">₹10Cr+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Sales Generated</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Shopify Certified</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Voice Search Quick Answers Section - VSO Optimized */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Answers About Shopify Developer in Mumbai
            </h2>
            <p className="text-lg text-gray-600">Get instant answers to your most common questions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Where */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Where can I find the best Shopify developer in Mumbai?</h3>
              <p className="text-gray-700 leading-relaxed">
                MyDigital Crown is Mumbai&apos;s leading Shopify development agency with offices in Chembur, Mumbai. We serve clients across Andheri, Bandra, Powai, Thane, and all Mumbai suburbs with expert Shopify Plus certified developers specializing in custom stores, themes, and apps.
              </p>
            </div>

            {/* How Much */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much does Shopify development cost in Mumbai?</h3>
              <p className="text-gray-700 leading-relaxed">
                Basic Shopify store setup starts from ₹45,000. Custom theme development from ₹75,000. Complete e-commerce solutions with integrations from ₹1,50,000. Shopify Plus development from ₹3,00,000. Free consultation and quote provided.
              </p>
            </div>

            {/* When */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">When will my Shopify store be ready?</h3>
              <p className="text-gray-700 leading-relaxed">
                Basic Shopify store setup: 7-10 days. Custom theme development: 3-4 weeks. Full e-commerce solution with custom features: 6-8 weeks. Shopify migration: 2-3 weeks. We provide weekly progress updates and support post-launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Shopify Development Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🛍️</span>
              Shopify Development Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Shopify Developers</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert Shopify development services that transform your e-commerce vision into reality
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop" 
                    alt="Shopify Developer Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Shopify Certified</h3>
                <p className="text-gray-700 leading-relaxed">
                  Official Shopify Partners with certified developers who understand platform best practices.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎨 Custom Solutions</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bespoke themes, apps, and integrations tailored to your unique business needs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Sales-Focused</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stores optimized for conversions with fast loading, mobile-friendly designs and seamless checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopify Development Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Shopify <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Complete Shopify development solutions to launch and grow your online store
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎨</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Custom Theme Development</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Unique, conversion-optimized Shopify themes designed for your brand.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Custom Design</li>
                  <li className="flex items-start gap-2">✓ Mobile Responsive</li>
                  <li className="flex items-start gap-2">✓ Fast Loading</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔧</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Shopify App Development</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Custom Shopify apps to extend functionality and automate workflows.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Private Apps</li>
                  <li className="flex items-start gap-2">✓ Public Apps</li>
                  <li className="flex items-start gap-2">✓ API Integration</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🛍️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Store Setup & Configuration</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Complete Shopify store setup from scratch with all essential features.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Store Configuration</li>
                  <li className="flex items-start gap-2">✓ Product Upload</li>
                  <li className="flex items-start gap-2">✓ Payment Gateway</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔄</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Shopify Migration</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Seamless migration from other platforms to Shopify without data loss.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ WooCommerce to Shopify</li>
                  <li className="flex items-start gap-2">✓ Magento to Shopify</li>
                  <li className="flex items-start gap-2">✓ Data Migration</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Performance Optimization</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Speed optimization to improve loading times and user experience.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Speed Optimization</li>
                  <li className="flex items-start gap-2">✓ Image Optimization</li>
                  <li className="flex items-start gap-2">✓ Code Minification</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔌</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Third-Party Integrations</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Integrate Shopify with CRM, ERP, and marketing automation tools.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ CRM Integration</li>
                  <li className="flex items-start gap-2">✓ Inventory Management</li>
                  <li className="flex items-start gap-2">✓ Marketing Tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <ClientSuccessStories />

      {/* Trusted Brands */}
      <TrustedBrands />

      {/* FAQ Section - Matching Home Page Style */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Floating Emojis */}
        <div className="absolute top-10 left-1/4 text-6xl opacity-20 animate-bounce">🛍️</div>
        <div className="absolute top-20 right-1/4 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}>💻</div>
        <div className="absolute bottom-10 left-1/3 text-6xl opacity-20 animate-bounce" style={{animationDelay: '1s'}}>🚀</div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6 hover:bg-white/20 transition-all">
              <span className="text-white font-semibold">💬 Frequently Asked Questions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Got Questions? We&apos;ve Got Answers!
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know about hiring a Shopify developer in Mumbai
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:shadow-blue-500/20 hover:border-blue-300/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-start p-8 cursor-pointer list-none">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🛍️</span>
                    <span className="text-xl font-bold text-white hover:text-blue-300 transition-colors">
                      What services does a Shopify developer in Mumbai provide?
                    </span>
                  </div>
                </div>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  A professional Shopify developer in Mumbai provides comprehensive services including custom Shopify store development, theme customization, app integration, migration from other platforms (WooCommerce, Magento), payment gateway setup, SEO optimization, speed optimization, third-party API integrations, custom app development, Shopify Plus development, and ongoing maintenance and support.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:shadow-purple-500/20 hover:border-purple-300/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-start p-8 cursor-pointer list-none">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">💰</span>
                    <span className="text-xl font-bold text-white hover:text-purple-300 transition-colors">
                      How much does it cost to hire a Shopify developer in Mumbai?
                    </span>
                  </div>
                </div>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  The cost varies based on project complexity. Basic Shopify store setup starts from ₹45,000, custom theme development from ₹75,000, complete e-commerce solutions from ₹1,50,000, and Shopify Plus development from ₹3,00,000. We offer flexible pricing packages and provide free consultations to understand your requirements and provide accurate quotes.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:shadow-green-500/20 hover:border-green-300/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-start p-8 cursor-pointer list-none">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                    <span className="text-xl font-bold text-white hover:text-green-300 transition-colors">
                      How long does it take to build a Shopify store?
                    </span>
                  </div>
                </div>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Timeline depends on complexity: Basic Shopify store setup takes 7-10 days, custom theme development 3-4 weeks, full e-commerce solution with custom features 6-8 weeks, and Shopify migration 2-3 weeks. We provide detailed project timelines and weekly progress updates to keep you informed throughout the development process.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:shadow-yellow-500/20 hover:border-yellow-300/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-start p-8 cursor-pointer list-none">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🎨</span>
                    <span className="text-xl font-bold text-white hover:text-yellow-300 transition-colors">
                      Can you customize an existing Shopify theme?
                    </span>
                  </div>
                </div>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Yes! We specialize in customizing existing Shopify themes to match your brand identity. This includes modifying layouts, colors, fonts, adding custom sections, implementing new features, integrating third-party apps, optimizing mobile responsiveness, and improving site speed. Theme customization is often more cost-effective than building from scratch while still achieving a unique look.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:shadow-pink-500/20 hover:border-pink-300/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-start p-8 cursor-pointer list-none">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🔄</span>
                    <span className="text-xl font-bold text-white hover:text-pink-300 transition-colors">
                      Do you help with migration from other platforms to Shopify?
                    </span>
                  </div>
                </div>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Absolutely! We provide seamless migration services from WooCommerce, Magento, BigCommerce, PrestaShop, and other e-commerce platforms to Shopify. Our migration process includes transferring all products, customer data, order history, blog posts, and maintaining SEO rankings. We ensure zero data loss and minimal downtime during the migration process.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:shadow-orange-500/20 hover:border-orange-300/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-start p-8 cursor-pointer list-none">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">📱</span>
                    <span className="text-xl font-bold text-white hover:text-orange-300 transition-colors">
                      Will my Shopify store be mobile-friendly?
                    </span>
                  </div>
                </div>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Yes! All our Shopify stores are built with mobile-first responsive design. With over 70% of e-commerce traffic coming from mobile devices, we ensure your store looks perfect and functions flawlessly on all screen sizes - smartphones, tablets, and desktops. We test on multiple devices and browsers before launch.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:shadow-cyan-500/20 hover:border-cyan-300/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-start p-8 cursor-pointer list-none">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🔌</span>
                    <span className="text-xl font-bold text-white hover:text-cyan-300 transition-colors">
                      Can you integrate payment gateways for Indian customers?
                    </span>
                  </div>
                </div>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Yes! We integrate all major Indian payment gateways including Razorpay, PayU, CCAvenue, Instamojo, Paytm, PhonePe, and international gateways like PayPal and Stripe. We also set up COD (Cash on Delivery), UPI, net banking, and digital wallet options to provide maximum payment flexibility for your customers.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:shadow-red-500/20 hover:border-red-300/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-start p-8 cursor-pointer list-none">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">⚡</span>
                    <span className="text-xl font-bold text-white hover:text-red-300 transition-colors">
                      Do you provide Shopify store speed optimization?
                    </span>
                  </div>
                </div>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Absolutely! Page speed directly impacts conversions and SEO rankings. We optimize your Shopify store through image compression, lazy loading, code minification, removing unused apps, optimizing Liquid code, implementing CDN, and reducing third-party scripts. We aim for 90+ Google PageSpeed scores and sub-2 second load times.
                </p>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:shadow-indigo-500/20 hover:border-indigo-300/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-start p-8 cursor-pointer list-none">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🎓</span>
                    <span className="text-xl font-bold text-white hover:text-indigo-300 transition-colors">
                      Will you provide training to manage the Shopify store?
                    </span>
                  </div>
                </div>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Yes! We provide comprehensive training sessions covering product management, inventory updates, order processing, discount creation, blog posting, theme customization basics, app management, and analytics interpretation. We also provide video tutorials and documentation so you can confidently manage your store independently.
                </p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:shadow-teal-500/20 hover:border-teal-300/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-start p-8 cursor-pointer list-none">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🔒</span>
                    <span className="text-xl font-bold text-white hover:text-teal-300 transition-colors">
                      Is Shopify secure for processing online payments?
                    </span>
                  </div>
                </div>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Yes, Shopify is one of the most secure e-commerce platforms. It&apos;s Level 1 PCI DSS compliant, provides 256-bit SSL certificates, offers fraud analysis tools, automatic security updates, and secure checkout. Your customers&apos; payment information is encrypted and never stored on your servers, ensuring complete security and peace of mind.
                </p>
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:shadow-violet-500/20 hover:border-violet-300/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-start p-8 cursor-pointer list-none">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🛠️</span>
                    <span className="text-xl font-bold text-white hover:text-violet-300 transition-colors">
                      Do you offer ongoing support and maintenance?
                    </span>
                  </div>
                </div>
                <svg className="w-7 h-7 text-violet-300 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Yes! We offer monthly maintenance packages including bug fixes, security updates, app updates, content updates, performance monitoring, backup management, technical support, and feature enhancements. Our support team is available via phone, email, and WhatsApp to ensure your store runs smoothly 24/7.
                </p>
              </div>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:shadow-lime-500/20 hover:border-lime-300/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-start p-8 cursor-pointer list-none">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">📊</span>
                    <span className="text-xl font-bold text-white hover:text-lime-300 transition-colors">
                      Can you help with Shopify SEO and digital marketing?
                    </span>
                  </div>
                </div>
                <svg className="w-7 h-7 text-lime-300 transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Absolutely! Beyond Shopify development, we offer comprehensive digital marketing services including Shopify SEO optimization, Google Ads campaigns, Facebook/Instagram ads, email marketing, content marketing, social media management, and conversion rate optimization. We help drive targeted traffic and maximize your store&apos;s sales potential.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The Complete Guide to<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hiring a Shopify Developer in Mumbai
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know about Shopify development, choosing the right developer, and building a successful e-commerce store in Mumbai
            </p>
          </div>

          <div className="space-y-12 text-blue-100">
            {/* Why Shopify */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">🛍️</span>
                Why Shopify is the Perfect E-Commerce Platform for Mumbai Businesses
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Shopify has revolutionized e-commerce in Mumbai and across India. As a leading Shopify developer in Mumbai, we&apos;ve seen firsthand how this platform transforms businesses. Shopify powers over 4.5 million online stores worldwide, processing billions in sales annually. For Mumbai entrepreneurs and established businesses alike, Shopify offers the perfect balance of ease-of-use, scalability, and powerful features.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Unlike traditional e-commerce platforms that require extensive technical knowledge, Shopify provides an intuitive interface that business owners can manage independently after initial setup. This is particularly valuable for Mumbai&apos;s diverse business landscape—from fashion boutiques in Colaba to electronics retailers in Lamington Road, from organic food stores in Bandra to luxury brands in BKC.
              </p>
              <p className="text-lg leading-relaxed">
                The platform handles all the technical complexities: hosting, security, payment processing, and updates. This means Mumbai business owners can focus on what they do best—selling great products and building customer relationships—while Shopify and your developer handle the technology. With built-in mobile responsiveness, SEO tools, and marketing features, Shopify provides everything needed to compete in today&apos;s digital marketplace.
              </p>
            </div>

            {/* What to Look For */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">🔍</span>
                What to Look for in a Shopify Developer
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-2xl border border-blue-400/30">
                  <h4 className="text-xl font-bold text-blue-300 mb-3">Shopify Certification & Experience</h4>
                  <p className="leading-relaxed">
                    Look for Shopify Partner certification and proven track record. A qualified developer should have experience building stores across different industries, understanding the nuances of Shopify Liquid, theme development, and app integration. Ask to see their portfolio and client testimonials.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-400/30">
                  <h4 className="text-xl font-bold text-purple-300 mb-3">Technical Expertise</h4>
                  <p className="leading-relaxed">
                    Beyond Shopify basics, your developer should understand HTML, CSS, JavaScript, Liquid templating, API integrations, payment gateways, shipping solutions, and third-party app ecosystem. They should also know SEO best practices and conversion optimization techniques.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-6 rounded-2xl border border-green-400/30">
                  <h4 className="text-xl font-bold text-green-300 mb-3">Mumbai Market Understanding</h4>
                  <p className="leading-relaxed">
                    A local Mumbai developer understands the unique challenges and opportunities of the Indian market—from integrating local payment gateways like Razorpay and PayU to setting up COD options, understanding local shipping partners, and navigating GST compliance for e-commerce.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-400/30">
                  <h4 className="text-xl font-bold text-orange-300 mb-3">Ongoing Support</h4>
                  <p className="leading-relaxed">
                    E-commerce is not set-it-and-forget-it. Choose a developer who offers ongoing maintenance, updates, troubleshooting, and growth support. Your store will evolve, and you need a partner who grows with you, not just someone who builds and disappears.
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                At MyDigital Crown, we check all these boxes and more. As Mumbai&apos;s leading Shopify development agency, we combine technical expertise with deep understanding of the local market, backed by 150+ successful store launches and ₹10Cr+ in client sales generated.
              </p>
            </div>

            {/* Development Process */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">⚙️</span>
                Our Shopify Development Process
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Discovery & Planning</h4>
                    <p className="leading-relaxed">We start by understanding your business goals, target audience, product catalog, and competitive landscape. This includes analyzing your current website (if migrating), identifying must-have features, and creating a detailed project roadmap with timelines and milestones.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Design & User Experience</h4>
                    <p className="leading-relaxed">Our designers create custom mockups that reflect your brand identity while following e-commerce best practices for conversions. We focus on intuitive navigation, compelling product pages, streamlined checkout, and mobile-first responsive design that looks perfect on all devices.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Development & Customization</h4>
                    <p className="leading-relaxed">Our certified Shopify developers build your store using clean, optimized code. This includes custom theme development, app integrations, payment gateway setup, shipping configuration, inventory management, and any custom functionality your business requires.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Testing & Quality Assurance</h4>
                    <p className="leading-relaxed">Before launch, we rigorously test every aspect: payment processing, checkout flow, mobile responsiveness, page speed, cross-browser compatibility, and user experience. We conduct test transactions, verify all integrations, and ensure everything functions flawlessly.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Launch & Training</h4>
                    <p className="leading-relaxed">We handle the technical launch process and provide comprehensive training to your team on managing products, processing orders, updating content, using apps, and interpreting analytics. You receive video tutorials and documentation for future reference.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">6</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Ongoing Support & Growth</h4>
                    <p className="leading-relaxed">Post-launch, we provide ongoing maintenance, updates, troubleshooting, and optimization. As your business grows, we help add new features, integrate additional tools, and scale your store to handle increased traffic and sales.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mumbai Advantage */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">🌆</span>
                The Mumbai Shopify Development Advantage
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Working with a local Shopify developer in Mumbai offers distinct advantages. Face-to-face meetings allow for better collaboration and faster decision-making. We understand Mumbai&apos;s business culture, working hours, and communication preferences. Time zone alignment means real-time support during your business hours—crucial when you need urgent assistance.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Mumbai developers are familiar with the Indian e-commerce ecosystem: local payment gateways, popular shipping providers (Delhivery, Blue Dart, India Post), GST compliance requirements, and consumer buying behaviors. We know which Shopify apps work best for Indian stores and can recommend solutions specific to your market segment.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our Mumbai location also means competitive pricing compared to international agencies, without compromising on quality. You get world-class Shopify development at prices that make sense for the Indian market, with the added benefit of building a long-term local partnership for your business growth.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-600/30 to-blue-800/30 p-6 rounded-2xl border border-blue-400/40 text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">150+</div>
                  <div className="text-sm uppercase tracking-wide text-blue-200">Shopify Stores Built</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/30 to-purple-800/30 p-6 rounded-2xl border border-purple-400/40 text-center">
                  <div className="text-4xl font-bold text-purple-300 mb-2">₹10Cr+</div>
                  <div className="text-sm uppercase tracking-wide text-purple-200">Sales Generated</div>
                </div>
                <div className="bg-gradient-to-br from-green-600/30 to-green-800/30 p-6 rounded-2xl border border-green-400/40 text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">100%</div>
                  <div className="text-sm uppercase tracking-wide text-green-200">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">🚀</span>
                Ready to Build Your Shopify Store?
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Whether you&apos;re launching a new e-commerce venture or migrating from another platform, choosing the right Shopify developer is crucial for your success. At MyDigital Crown, we combine technical excellence, creative design, and strategic thinking to build Shopify stores that don&apos;t just look good—they drive sales and grow your business.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Our team of certified Shopify developers in Mumbai is ready to transform your e-commerce vision into reality. Contact us today for a free consultation, and let&apos;s discuss how we can build a beautiful, high-performing Shopify store that achieves your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                  Get Your Free Consultation
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <a href="tel:+918369511877" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call: +91-83695-11877
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Launch Your<br />
              <span className="text-yellow-300">Shopify Store?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our certified Shopify developers build a beautiful, high-converting online store for your business!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Start Your Project</span>
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

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Shopify Certified Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>150+ Stores Launched</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>₹10Cr+ Sales Generated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {/* Our Locations */}

      <OurLocations />


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/shopify-developer"
        title="Complete E-Commerce Solutions"
        description="Enhance your Shopify store with our comprehensive digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
