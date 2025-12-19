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
  title: 'Vue.js Developer Mumbai | 300+ Projects | Vue 3 Nuxt Expert',
  description: 'Vue.js Developer Mumbai. 300+ Projects | Vue 3, Nuxt.js & SPA Development | Composition API & Pinia Expert | 10+ Years. Call +91-83695-11877',
  keywords: [
    // Primary Keywords (5)
    'vue.js developer in mumbai',
    'vue js developer mumbai',
    'vue.js development mumbai',
    'vue developer mumbai',
    'vuejs developer mumbai',
    
    // Quality & Authority Keywords (8)
    'best vue.js developer mumbai',
    'top vue.js developer mumbai',
    'expert vue.js developer mumbai',
    'professional vue.js developer mumbai',
    'leading vue development agency mumbai',
    'premier vue.js services',
    'trusted vue.js consultant mumbai',
    'vue.js specialist mumbai',
    
    // Service-specific Keywords (10)
    'vue 3 developer mumbai',
    'composition api developer mumbai',
    'nuxt.js developer mumbai',
    'vue spa development mumbai',
    'pinia state management mumbai',
    'vue router developer mumbai',
    'progressive web app vue mumbai',
    'vue component library mumbai',
    'reactive applications mumbai',
    'vue typescript developer mumbai',
    
    // Performance & ROI Keywords (8)
    'fast vue.js development mumbai',
    'scalable vue applications',
    'vue.js performance optimization',
    'enterprise vue.js mumbai',
    'vue.js ssr development',
    'vue.js ssg development',
    'modern vue development',
    'vue.js migration services',
    
    // Industry Keywords (6)
    'vue.js freelancer mumbai',
    'vue.js agency mumbai',
    'startup vue developer mumbai',
    'ecommerce vue development',
    'b2b vue applications mumbai',
    'vue.js consultant mumbai'
  ],
  authors: [{ name: 'MyDigital Crown' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Frontend Development Services',
  classification: 'Vue.js & Nuxt.js Application Development',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mydigital-mu.vercel.app'),
  alternates: {
    canonical: '/services/vuejs-developer',
  },
  openGraph: {
    title: 'Vue js Developer in Mumbai | #1 Vue.js Expert Services 2025',
    description: 'Top Vue js Developer in Mumbai offering Vue 3, Nuxt.js, SPA development & progressive web apps. 300+ projects built with 10+ years expertise.',
    url: 'https://mydigital-mu.vercel.app/services/vuejs-developer',
    siteName: 'MyDigital Crown',
    images: [
      {
        url: 'https://mydigital-mu.vercel.app/images/vuejs-developer-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Vue js Developer in Mumbai - MyDigital Crown',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vue js Developer in Mumbai | #1 Vue.js Expert Services 2025',
    description: 'Top Vue js Developer in Mumbai offering Vue 3, Nuxt.js, SPA development & progressive web apps. 300+ projects built.',
    images: ['https://mydigital-mu.vercel.app/images/vuejs-developer-mumbai.jpg'],
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
}

// Comprehensive Schema Markup for Vue js Developer in Mumbai
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mydigital-mu.vercel.app/#organization",
      "name": "MyDigital Crown",
      "url": "https://mydigital-mu.vercel.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mydigital-mu.vercel.app/logo.png",
        "width": 250,
        "height": 60
      },
      "description": "Leading Vue js Developer in Mumbai specializing in Vue 3, Nuxt.js, progressive web apps, and modern reactive applications.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-83695-11877",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi", "Marathi"]
        }
      ],
      "sameAs": [
        "https://www.facebook.com/mydigitalcrown",
        "https://www.instagram.com/mydigitalcrown",
        "https://www.linkedin.com/company/mydigitalcrown",
        "https://twitter.com/mydigitalcrown"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://mydigital-mu.vercel.app/services/vuejs-developer#service",
      "serviceType": "Vue js Developer in Mumbai",
      "provider": {
        "@id": "https://mydigital-mu.vercel.app/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Vue.js Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vue 3 Development with Composition API",
              "description": "Modern Vue 3 applications built with Composition API, TypeScript support, and script setup syntax for reactive web applications."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Single Page Application (SPA) Development",
              "description": "Fast, dynamic SPAs built with Vue Router, client-side routing, and navigation guards for seamless user experiences."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nuxt.js SSR/SSG Development",
              "description": "Server-side rendering and static site generation with Nuxt.js for SEO-optimized, fast-loading Vue applications."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "State Management with Pinia/Vuex",
              "description": "Scalable state management solutions using Pinia or Vuex for complex Vue.js applications with global state."
            }
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://mydigital-mu.vercel.app/services/vuejs-developer#localbusiness",
      "name": "MyDigital Crown - Vue js Developer in Mumbai",
      "image": "https://mydigital-mu.vercel.app/images/vuejs-developer-mumbai.jpg",
      "telephone": "+91-83695-11877",
      "email": "info@mydigitalcrown.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mumbai",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.0760,
        "longitude": 72.8777
      },
      "url": "https://mydigital-mu.vercel.app/services/vuejs-developer",
      "priceRange": "₹₹₹",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "200",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://mydigital-mu.vercel.app/services/vuejs-developer#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Vue js Developer in Mumbai do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professional Vue js Developer in Mumbai specializes in building modern, reactive web applications using the Vue.js framework. They create single-page applications (SPAs), progressive web apps (PWAs), and component-based interfaces using Vue 3, Composition API, Vue Router, and state management solutions like Pinia. At MyDigital Crown, our Vue js Developer in Mumbai team builds scalable, high-performance applications with TypeScript, Nuxt.js for SSR/SSG, and modern development practices."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Vue.js development cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vue.js development costs in Mumbai vary based on project complexity, features, and timeline. Basic Vue applications start from ₹40,000, while enterprise-level solutions range from ₹2-8 lakhs or more. As the leading Vue js Developer in Mumbai, we provide transparent pricing with detailed quotes based on your specific requirements, technology stack (Vue 3, Nuxt.js, TypeScript), and integration needs."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose Vue.js over React or Angular?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vue.js offers a progressive framework that's easy to learn, incrementally adoptable, and highly performant. It combines the best of React (virtual DOM, component-based) and Angular (templates, directives) with a gentle learning curve. Our Vue js Developer in Mumbai team recommends Vue.js for projects requiring rapid development, excellent documentation, smaller bundle sizes, and flexible architecture that scales from simple to complex applications."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide Nuxt.js development services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We specialize in Nuxt.js development for server-side rendering (SSR), static site generation (SSG), and SEO-optimized Vue applications. Our Vue js Developer in Mumbai experts build Nuxt 3 applications with auto-imports, file-based routing, middleware, and advanced features. We handle SSR for dynamic content, SSG for static sites, and hybrid rendering for the best of both worlds."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Composition API and why use it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Composition API is Vue 3's new way to organize component logic using composable functions instead of options. It offers better code organization, improved TypeScript support, easier logic reuse, and better performance. Every Vue js Developer in Mumbai at MyDigital Crown uses Composition API with script setup for modern, maintainable applications that scale with your business needs."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mydigital-mu.vercel.app/services/vuejs-developer#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mydigital-mu.vercel.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://mydigital-mu.vercel.app/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Vue js Developer in Mumbai",
          "item": "https://mydigital-mu.vercel.app/services/vuejs-developer"
        }
      ]
    }
  ]
}

export default function VueJSDeveloperPage() {
  return (
    <>
      {/* Inject Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Vue.js Developer Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Vue.js Development Experts</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Vue.js Developer in Mumbai | #1 Vue.js Expert Services 2025
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  💚 Build <span className="text-yellow-300">Reactive Apps</span>, <span className="text-green-300">Component-Based</span> & <span className="text-orange-300">Lightning Fast</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Vue 3 | Composition API | Vuex/Pinia | Nuxt.js | Single Page Apps
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">🚀</span>
                    <span>Hire Vue.js Developer</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">15+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Vue.js Projects</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">50+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Expert Developers</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">95%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Client Satisfaction</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">24/7</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Support Available</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Voice Search Quick Answers Section - VSO */}
      <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎤</span>
              Voice Search Optimized Answers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Answers About Vue.js Development
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get instant answers to common questions about Vue.js development services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:scale-105">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What is Vue.js development?</h3>
              <p className="text-gray-700 leading-relaxed">
                Vue.js is a progressive JavaScript framework for building modern, reactive web applications. Our Vue.js developers create single-page applications (SPAs), progressive web apps (PWAs), and component-based interfaces using Vue 3, Composition API, and modern tools like Nuxt.js for optimal performance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:scale-105">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much does Vue.js development cost?</h3>
              <p className="text-gray-700 leading-relaxed">
                Vue.js development costs in Mumbai range from ₹40,000 for basic applications to ₹2-8 lakhs for enterprise solutions. The cost depends on project complexity, features, timeline, and whether you need Nuxt.js SSR/SSG, TypeScript integration, or custom component libraries.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-pink-100 hover:border-pink-300 transition-all hover:scale-105">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does Vue.js development take?</h3>
              <p className="text-gray-700 leading-relaxed">
                Simple Vue.js applications take 3-6 weeks, medium-complexity SPAs need 2-3 months, and enterprise solutions require 3-6 months. We follow agile methodology with 2-week sprints, providing regular updates and demos throughout the development process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Vue.js Development Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">💚</span>
              Vue.js Development Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vue.js Developers</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert Vue.js developers building progressive, reactive web applications with modern best practices
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop" 
                    alt="Vue.js Developer Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Progressive Framework</h3>
                <p className="text-gray-700 leading-relaxed">
                  Build incrementally adoptable applications from simple to complex with Vue.js flexibility.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Composition API</h3>
                <p className="text-gray-700 leading-relaxed">
                  Modern Vue 3 development with Composition API for better code organization and reusability.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 High Performance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Optimized reactive rendering system for blazing-fast user experiences and smooth interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vue.js Development Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Vue.js <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive Vue.js development services to build modern, reactive web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💚</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Vue 3 Development</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Modern Vue 3 applications with Composition API and latest features.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Composition API</li>
                  <li className="flex items-start gap-2">✓ Script Setup</li>
                  <li className="flex items-start gap-2">✓ TypeScript Support</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Single Page Apps</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Build fast, dynamic SPAs with Vue Router and state management.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Vue Router</li>
                  <li className="flex items-start gap-2">✓ Client-Side Routing</li>
                  <li className="flex items-start gap-2">✓ Navigation Guards</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🏪</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">State Management</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Implement Vuex or Pinia for scalable state management solutions.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Pinia (Recommended)</li>
                  <li className="flex items-start gap-2">✓ Vuex Integration</li>
                  <li className="flex items-start gap-2">✓ Global State</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎨</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Component Libraries</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Develop reusable component libraries with Vue best practices.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Custom Components</li>
                  <li className="flex items-start gap-2">✓ Vuetify/Quasar</li>
                  <li className="flex items-start gap-2">✓ Design Systems</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🌐</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Nuxt.js Development</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Server-side rendering and static site generation with Nuxt.js.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ SSR/SSG</li>
                  <li className="flex items-start gap-2">✓ SEO Optimization</li>
                  <li className="flex items-start gap-2">✓ Nuxt 3 Features</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔧</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">API Integration</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Seamless integration with REST APIs and GraphQL backends.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Axios/Fetch</li>
                  <li className="flex items-start gap-2">✓ GraphQL/Apollo</li>
                  <li className="flex items-start gap-2">✓ Real-time Data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Digital Marketing Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
              <span className="mr-2">🚀</span>
              Premium Digital Marketing Services
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              50+ Services To Skyrocket <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Your Growth</span>
            </h2>
            
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Beyond Vue.js apps - complete digital solutions for your business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service 1 - SEO Services */}
            <Link href="/services/seo" className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop"
                  alt="SEO Services Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">🔍</span>
                    <h3 className="text-2xl font-bold text-white">SEO Services</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Rank higher on Google with expert SEO strategies</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 2 - Social Media Marketing */}
            <Link href="/services/social-media-marketing" className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop"
                  alt="Social Media Marketing Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">📱</span>
                    <h3 className="text-2xl font-bold text-white">Social Media Marketing</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Build brand presence across social platforms</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 3 - Google Ads */}
            <Link href="/services/google-ads" className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                  alt="Google Ads Services Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-pink-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">🎯</span>
                    <h3 className="text-2xl font-bold text-white">Google Ads</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Drive instant traffic with targeted PPC campaigns</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 4 - WordPress Development */}
            <Link href="/services/wordpress-developer" className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
                  alt="WordPress Development Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900 via-orange-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">⚡</span>
                    <h3 className="text-2xl font-bold text-white">WordPress Development</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Custom WordPress websites that scale</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 5 - Digital Branding */}
            <Link href="/services/digital-branding" className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
                  alt="Digital Branding Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">🎨</span>
                    <h3 className="text-2xl font-bold text-white">Digital Branding</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Create a memorable brand identity online</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 6 - YouTube Marketing */}
            <Link href="/services/youtube-marketing" className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop"
                  alt="YouTube Marketing Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-red-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">📹</span>
                    <h3 className="text-2xl font-bold text-white">YouTube Marketing</h3>
                  </div>
                  <p className="text-red-100 mb-4">Grow your channel with video marketing</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* View All Services CTA */}
          <div className="text-center">
            <Link href="/services" className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
              <span className="mr-3">View All 50+ Services</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
        </section>

        {/* Client Success Stories */}
        <ClientSuccessStories 
          title="Client Success Stories"
        />

        {/* Trusted Brands */}
        <TrustedBrands />      {/* FAQ Section */}
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
          <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>💚</div>
          <div className="absolute bottom-32 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>✨</div>
          <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>🎯</div>
          <div className="absolute top-1/3 left-1/2 text-4xl opacity-20 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}>💬</div>
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
              Everything you need to know about Vue.js development in Mumbai ✨
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">💚</span>
                  <span>What does a Vue js Developer in Mumbai do?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                A professional Vue js Developer in Mumbai specializes in building modern, reactive web applications using the Vue.js framework. They create single-page applications (SPAs), progressive web apps (PWAs), and component-based interfaces using Vue 3, Composition API, Vue Router, and state management solutions like Pinia. At MyDigital Crown, our Vue js Developer in Mumbai team builds scalable, high-performance applications with TypeScript, Nuxt.js for SSR/SSG, and follows modern best practices for optimal user experiences.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">💰</span>
                  <span>How much does Vue.js development cost in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Vue.js development costs in Mumbai vary based on project complexity, features, and timeline. Basic Vue applications start from ₹40,000, while enterprise-level solutions range from ₹2-8 lakhs or more. As the leading Vue js Developer in Mumbai, we provide transparent pricing with detailed quotes based on your specific requirements, technology stack (Vue 3, Nuxt.js, TypeScript), and integration needs. Contact us for a customized estimate.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🏆</span>
                  <span>Why choose Vue.js over React or Angular?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Vue.js offers a progressive framework that&apos;s easy to learn, incrementally adoptable, and highly performant. It combines the best of React (virtual DOM, component-based) and Angular (templates, directives) with a gentle learning curve. Our Vue js Developer in Mumbai team recommends Vue.js for projects requiring rapid development, excellent documentation, smaller bundle sizes, and flexible architecture that scales from simple to complex applications. Vue 3 with Composition API delivers enterprise-grade performance.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                  <span>How long does Vue.js project development take?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Development timelines depend on project scope and complexity. Simple Vue.js applications take 3-6 weeks, medium-complexity SPAs need 2-3 months, and enterprise solutions require 3-6 months or more. As an experienced Vue js Developer in Mumbai, we follow agile methodology with 2-week sprints, providing regular updates and demos. Vue.js&apos;s progressive nature allows us to deliver MVPs quickly so you can start testing while we continue adding features.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🎨</span>
                  <span>What is the Composition API and why use it?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                The Composition API is Vue 3&apos;s new way to organize component logic using composable functions instead of options. It offers better code organization, improved TypeScript support, easier logic reuse, and better performance. Every Vue js Developer in Mumbai at MyDigital Crown uses Composition API with script setup for modern, maintainable applications that scale with your business needs. It enables better code sharing and testing capabilities.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🌐</span>
                  <span>Do you provide Nuxt.js development services?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Yes! We specialize in Nuxt.js development for server-side rendering (SSR), static site generation (SSG), and SEO-optimized Vue applications. Our Vue js Developer in Mumbai experts build Nuxt 3 applications with auto-imports, file-based routing, middleware, and advanced features. We handle SSR for dynamic content, SSG for static sites, and hybrid rendering for the best of both worlds with optimal performance.
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔄</span>
                  <span>Can you migrate existing apps to Vue.js?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Absolutely! We specialize in migrating legacy applications to Vue.js and upgrading Vue 2 apps to Vue 3. Our Vue js Developer in Mumbai team performs thorough analysis, creates migration roadmaps, and executes seamless transitions. We handle jQuery to Vue migrations, framework replacements, and Vue 2 to Vue 3 upgrades with Composition API. The progressive nature of Vue.js allows incremental migrations without full rewrites.
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-indigo-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🏪</span>
                  <span>What state management solution do you recommend?</span>
                </span>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                We primarily recommend Pinia, the official state management library for Vue 3, which offers excellent TypeScript support, intuitive API, and better performance. Our Vue js Developer in Mumbai team implements Pinia for modern applications and maintains Vuex for legacy projects. We also use composables for simpler state management needs. The choice depends on your application complexity and requirements.
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">⚡</span>
                  <span>How do you optimize Vue.js application performance?</span>
                </span>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                We optimize Vue.js applications through lazy loading components, code splitting, virtual scrolling for large lists, proper use of v-memo and v-once directives, and optimizing reactivity. We also implement SSR with Nuxt.js for better initial load times, use web workers for heavy computations, and optimize bundle size with tree-shaking. Performance monitoring and lighthouse audits ensure applications maintain 90+ scores.
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:border-teal-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-teal-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🔧</span>
                  <span>Can you migrate my existing application to Vue.js?</span>
                </span>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Yes, we specialize in migrating applications from React, Angular, or jQuery to Vue.js. Our migration process includes analyzing your current codebase, creating a detailed migration roadmap, implementing incremental migration strategy to minimize downtime, and thorough testing at each stage. We&apos;ve successfully migrated 50+ applications to Vue.js, ensuring improved performance and maintainability while preserving all existing functionality.
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-lime-500/20 hover:border-lime-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-lime-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">📱</span>
                  <span>Do you provide ongoing support and maintenance?</span>
                </span>
                <svg className="w-7 h-7 text-lime-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Absolutely! We offer comprehensive maintenance packages including regular updates, security patches, performance monitoring, bug fixes, and feature enhancements. Our Vue.js Developer in Mumbai team provides 24/7 support options, proactive monitoring, monthly health checks, and keeps your application updated with the latest Vue.js versions. We also provide documentation and knowledge transfer to ensure smooth long-term operation.
              </div>
            </details>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-xl text-white/80 mb-6">
              Still have questions? Our Vue js Developer in Mumbai experts are here to help!
            </p>
            <a href="tel:+918369511877" className="inline-flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
              <span className="text-2xl mr-3">📞</span>
              <span>Call: +91-83695-11877</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">📝</span>
              <span>Complete Information</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose a Professional<br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Vue js Developer</span><br />
              <span className="text-4xl md:text-5xl text-gray-800">in Mumbai?</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about professional <span className="text-blue-600 font-semibold">Vue.js development</span> services in Mumbai
            </p>
          </div>

          <div className="space-y-12">
            {/* Content Block 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-4xl mr-4">🎯</span>
                What Makes a Great Vue js Developer in Mumbai?
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  Finding the right <strong>Vue js Developer in Mumbai</strong> is crucial for your modern web application success. At MyDigital Crown, we bring over 10 years of expertise in building progressive Vue.js applications that drive real business results. Our <strong>Vue js Developer in Mumbai</strong> team has successfully delivered 300+ projects across industries including e-commerce, healthcare, education, finance, and SaaS platforms.
                </p>
                <p className="mt-4">
                  What sets a professional <strong>Vue js Developer in Mumbai</strong> apart is mastery of Vue 3&apos;s Composition API, understanding of reactive programming principles, and deep knowledge of the Vue ecosystem including Vue Router, Pinia state management, and Nuxt.js. Our developers combine technical excellence with business acumen to create applications that solve real problems and delight users.
                </p>
                <p className="mt-4">
                  As the leading <strong>Vue js Developer in Mumbai</strong>, we don&apos;t just write code - we architect solutions. We take time to understand your business goals, user workflows, and technical requirements before designing the perfect Vue.js architecture. Our agile development process ensures transparency, regular communication, and on-time delivery with zero compromise on quality or performance.
                </p>
              </div>
            </div>

            {/* Content Block 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-4xl mr-4">💚</span>
                Vue 3 Development Excellence with Composition API
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  Our <strong>Vue js Developer in Mumbai</strong> specializes in Vue 3 development using the powerful Composition API. This modern approach to Vue development offers better code organization, improved TypeScript support, and enhanced reusability through composable functions. Every project we build leverages Vue 3&apos;s latest features including script setup syntax, Suspense components, and Teleport for optimal developer experience and application performance.
                </p>
                <p className="mt-4">
                  We build single-page applications (SPAs) that rival native app experiences with lightning-fast routing using Vue Router 4, smooth transitions, and intelligent code splitting. Our <strong>Vue js Developer in Mumbai</strong> implements Pinia for state management - the official replacement for Vuex that offers intuitive API, excellent TypeScript integration, and better performance through modular stores.
                </p>
                <p className="mt-4">
                  From reactive dashboards to complex enterprise applications, our <strong>Vue js Developer in Mumbai</strong> handles projects of all scales. We follow industry best practices including component-driven development, comprehensive testing with Vitest, proper TypeScript typing, and automated CI/CD pipelines to ensure your Vue.js application is maintainable, scalable, and production-ready.
                </p>
              </div>
            </div>

            {/* Content Block 3 - Services Grid */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="text-4xl mr-4">🚀</span>
                Comprehensive Vue.js Development Services
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Progressive Web Apps (PWAs)</h4>
                  <p className="text-gray-700">
                    Build installable Vue.js PWAs with offline support, push notifications, and native-like performance for maximum user engagement.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                  <div className="text-3xl mb-3">🌐</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Nuxt.js SSR/SSG</h4>
                  <p className="text-gray-700">
                    SEO-optimized Vue applications with server-side rendering or static site generation using Nuxt 3 for superior search rankings.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                  <div className="text-3xl mb-3">🎨</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Component Libraries</h4>
                  <p className="text-gray-700">
                    Custom Vue component libraries and design systems with Vuetify, Quasar, or headless UI for consistent branding.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Block 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-4xl mr-4">📊</span>
                Performance & Scalability with Vue.js
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  Every <strong>Vue js Developer in Mumbai</strong> at MyDigital Crown is trained in building high-performance applications that scale effortlessly. Vue 3&apos;s virtual DOM implementation, optimized reactivity system, and tree-shaking capabilities ensure your application loads fast and runs smooth even with complex state and thousands of components. We achieve sub-second page loads and buttery-smooth interactions.
                </p>
                <p className="mt-4">
                  Performance optimization is in our DNA. Our <strong>Vue js Developer in Mumbai</strong> implements code splitting for faster initial loads, lazy loading for route-based components, asset optimization with modern image formats, and intelligent caching strategies. We use Vue Devtools and performance profiling to identify bottlenecks and optimize render times for 60fps experiences.
                </p>
                <p className="mt-4">
                  We architect Vue.js applications with scalability in mind from day one. This includes modular component structure, centralized state management with Pinia, proper API abstraction layers, and comprehensive error handling. Our <strong>Vue js Developer in Mumbai</strong> ensures your application can handle growth from hundreds to millions of users without performance degradation.
                </p>
              </div>
            </div>

            {/* Content Block 5 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-4xl mr-4">🔒</span>
                TypeScript & Modern Development Practices
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  Our <strong>Vue js Developer in Mumbai</strong> builds enterprise-grade applications with full TypeScript support. Vue 3&apos;s excellent TypeScript integration provides type safety, better IDE support, and fewer runtime errors. We define proper interfaces, use generic components, and implement strict typing throughout the application for maintainable, bug-free code.
                </p>
                <p className="mt-4">
                  We follow modern development practices including automated testing with Vitest and Vue Test Utils, E2E testing with Playwright or Cypress, ESLint for code quality, Prettier for formatting, and Git-based workflows. Our <strong>Vue js Developer in Mumbai</strong> team uses Vue Devtools for debugging, Vite for blazing-fast builds, and implements proper CI/CD pipelines with GitHub Actions or GitLab CI.
                </p>
                <p className="mt-4">
                  Security is paramount. Our <strong>Vue js Developer in Mumbai</strong> implements XSS protection, CSRF tokens, secure authentication (JWT, OAuth 2.0), input validation, and follows OWASP guidelines. We conduct regular security audits, dependency updates, and penetration testing to keep your Vue.js application protected from vulnerabilities and threats.
                </p>
              </div>
            </div>

            {/* Content Block 6 - Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl text-white">
              <h3 className="text-3xl font-bold mb-8 flex items-center">
                <span className="text-4xl mr-4">🏆</span>
                Why MyDigital Crown is the Best Vue js Developer in Mumbai?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1">10+ Years Vue.js Expertise</h4>
                    <p className="text-blue-100">Decade-long experience building production Vue applications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1">300+ Vue.js Projects Delivered</h4>
                    <p className="text-blue-100">Extensive portfolio across multiple industries and use cases</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Vue 3 & Composition API Masters</h4>
                    <p className="text-blue-100">Specialized in latest Vue 3 features and best practices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Nuxt.js SSR/SSG Experts</h4>
                    <p className="text-blue-100">Full-stack Vue development with Nuxt 3 for SEO optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1">TypeScript Integration</h4>
                    <p className="text-blue-100">Type-safe Vue applications with full TypeScript support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1">95%+ Client Satisfaction</h4>
                    <p className="text-blue-100">Proven track record of happy clients and successful launches</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Transparent Pricing</h4>
                    <p className="text-blue-100">Fixed-price contracts with no hidden costs or surprises</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1">24/7 Support & Maintenance</h4>
                    <p className="text-blue-100">Round-the-clock technical support for production applications</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl text-white mb-6">
                  Ready to Work with the Best Vue js Developer in Mumbai?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+918369511877" className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Call Now</span>
                  </a>
                  <Link href="/contact" className="inline-flex items-center bg-yellow-400 text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                    <span>Get Free Consultation</span>
                    <svg className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
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
              Ready to Build with<br />
              <span className="text-yellow-300">Vue.js?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our Vue.js experts create progressive, reactive web applications that delight your users!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Hire Vue.js Developer</span>
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
                <span>Vue.js Certified Developers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>300+ Vue.js Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>95% Client Satisfaction</span>
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
        currentService="/services/vuejs-developer"
        title="Complete Development Solutions"
        description="Enhance your Vue.js application with our comprehensive development services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
