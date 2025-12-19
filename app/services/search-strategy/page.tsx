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
  title: "Search Strategy Mumbai | 400% ROI | 300+ Strategies Delivered",
  description: "Search Strategy Mumbai. 400% ROI | Expert SEO & SEM Planning | Content Strategy & Search Marketing | 300+ Strategies. Call +91-83695-11877",
  keywords: [
    // Primary Keywords (5)
    'search strategy services in mumbai',
    'search strategy mumbai',
    'search strategy services mumbai',
    'search strategy company mumbai',
    'search strategy agency mumbai',
    
    // Quality & Authority Keywords (8)
    'best search strategy mumbai',
    'top search strategy mumbai',
    'expert search strategy mumbai',
    'professional search strategy services',
    'leading search strategy agency',
    'premier search strategy mumbai',
    'trusted search strategy company',
    'search strategy specialist mumbai',
    
    // Service-specific Keywords (10)
    'seo strategy services mumbai',
    'sem strategy mumbai',
    'search marketing strategy',
    'search engine strategy mumbai',
    'organic search strategy',
    'paid search strategy mumbai',
    'search optimization strategy',
    'search visibility strategy',
    'search traffic strategy mumbai',
    'comprehensive search strategy',
    
    // Business-focused Keywords (6)
    'search strategy consultant mumbai',
    'search strategy expert mumbai',
    'search marketing consultant',
    'seo strategy consultant mumbai',
    'digital search strategist',
    'search campaign strategist mumbai',
    
    // ROI & Performance Keywords (9)
    'ROI-driven search strategy',
    'performance search strategy',
    'data-driven search strategy mumbai',
    'results-oriented search strategy',
    'high-converting search strategy',
    'measurable search strategy mumbai',
    'search strategy optimization',
    'search performance strategy',
    'conversion-focused search strategy',
    
    // Technical Keywords (8)
    'seo sem strategy mumbai',
    'search engine marketing strategy',
    'keyword strategy services',
    'content search strategy mumbai',
    'technical seo strategy',
    'local search strategy mumbai',
    'international search strategy',
    'multi-channel search strategy',
    
    // Industry-specific (6)
    'ecommerce search strategy mumbai',
    'b2b search strategy',
    'b2c search marketing strategy',
    'startup search strategy mumbai',
    'enterprise search strategy',
    'local business search strategy mumbai',
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  openGraph: {
    title: 'Search Strategy Services in Mumbai | #1 SEO Strategy Agency | MyDigital Crown',
    description: 'Top Search Strategy Services in Mumbai. Expert SEO Strategy, SEM Planning, Content Strategy & Search Marketing. 400% ROI. 300+ Strategies Delivered.',
    url: 'https://mydigitalcrown.in/services/search-strategy',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Search Strategy Services Mumbai - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search Strategy Services in Mumbai | #1 SEO Strategy Agency',
    description: 'Top Search Strategy Services in Mumbai. 400% ROI. 300+ Strategies Delivered. Expert SEO Strategy, SEM Planning & Search Marketing.',
    site: '@mydigitalcrown',
    creator: '@mydigitalcrown',
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop'],
  },
  alternates: {
    canonical: 'https://mydigitalcrown.in/services/search-strategy',
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
  classification: 'Search Strategy, SEO Strategy, SEM Strategy, Search Marketing',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function SearchStrategyPage() {
  // Structured Data - Multiple Schema Types for Maximum SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // Service Schema
      {
        "@type": "Service",
        "@id": "https://mydigitalcrown.in/services/search-strategy#service",
        "serviceType": "Search Strategy Services in Mumbai",
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
          "name": "Search Strategy Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Strategy Development",
                "description": "Comprehensive SEO strategy planning and execution"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEM Strategy Planning",
                "description": "Strategic paid search marketing campaigns"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Content Search Strategy",
                "description": "Content marketing strategy for search visibility"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Keyword Strategy Services",
                "description": "Comprehensive keyword research and targeting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Search Performance Optimization",
                "description": "Continuous search strategy optimization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Multi-Channel Search Integration",
                "description": "Integrated search marketing across all channels"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "187",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      // Organization Schema
      {
        "@type": "ProfessionalService",
        "@id": "https://mydigitalcrown.in/#organization",
        "name": "MyDigital Crown - Search Strategy Agency Mumbai",
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
          "reviewCount": "187"
        }
      },
      // WebPage Schema
      {
        "@type": "WebPage",
        "@id": "https://mydigitalcrown.in/services/search-strategy#webpage",
        "url": "https://mydigitalcrown.in/services/search-strategy",
        "name": "Search Strategy Services in Mumbai | MyDigital Crown",
        "description": "Top Search Strategy Services in Mumbai. Expert SEO Strategy, SEM Planning, Content Strategy & Search Marketing.",
        "publisher": {
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "inLanguage": "en-IN"
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
            "name": "Search Strategy",
            "item": "https://mydigitalcrown.in/services/search-strategy"
          }
        ]
      },
      // FAQPage Schema
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is search strategy and why is it important for Mumbai businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Search strategy is a comprehensive plan that combines SEO, SEM, content marketing, and analytics to dominate search results. For Mumbai businesses, it's crucial because 85% of local consumers search online before making purchase decisions. A solid search strategy ensures your business appears at the top when Mumbai customers search for your products/services, driving qualified traffic, leads, and sales."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from search strategy in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Search strategy results vary by channel: Paid search (SEM) delivers immediate results within 7-14 days. SEO typically shows rankings improvements in 60-90 days, with significant traffic growth in 4-6 months. Content strategy builds momentum over 3-6 months. Our integrated approach combines quick wins from SEM with long-term organic growth from SEO, ensuring continuous ROI improvement throughout implementation."
            }
          },
          {
            "@type": "Question",
            "name": "What's included in your search strategy services for Mumbai businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our comprehensive search strategy includes: 1) Market & Competitor Analysis - Deep dive into Mumbai market dynamics, 2) SEO Strategy - Technical SEO, content plan, link building roadmap, 3) SEM Strategy - Google Ads, Bing Ads campaign planning, 4) Keyword Strategy - 500+ target keywords research, 5) Content Strategy - Editorial calendar, topic clusters, 6) Performance Tracking - Monthly reports with KPIs, 7) Conversion Optimization - Landing page strategy, CRO recommendations, 8) Budget Planning - ROI-focused spend allocation across channels."
            }
          },
          {
            "@type": "Question",
            "name": "How much does search strategy cost for Mumbai businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Search strategy pricing depends on business size and goals: Startups & Small Business: ₹25,000-₹50,000/month (Basic SEO + SEM), Medium Business: ₹50,000-₹1,50,000/month (Comprehensive multi-channel), Enterprise: ₹1,50,000+ (Custom strategies, dedicated team). One-time Strategy Development: ₹75,000-₹2,00,000 (complete roadmap). We offer flexible packages and transparent pricing. Most Mumbai clients see 3-4x ROI within 6 months, making the investment highly profitable."
            }
          },
          {
            "@type": "Question",
            "name": "What makes MyDigital Crown's search strategy different from competitors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our competitive advantages: 1) Mumbai Market Specialization - 8+ years understanding Mumbai search behavior, 2) Data-First Approach - Every recommendation backed by research and analytics, 3) Integrated Strategy - Seamless coordination across SEO, SEM, content, social, 4) Proven ROI - 400% average ROI with 98% client retention, 5) Transparent Reporting - Weekly dashboards showing progress and spend, 6) Agile Methodology - Quick pivots based on performance data, 7) Expert Team - Google, Bing, HubSpot certified strategists, 8) Technology Stack - SEMrush, Ahrefs, Google Analytics 4, Search Console pro tools."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Navbar />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Search Strategy Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Strategic Search Excellence</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center" itemProp="headline">
                Search Strategy Services in Mumbai
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  🎯 Comprehensive <span className="text-yellow-300">Search Marketing</span> Plans that <span className="text-green-300">Drive Results</span> & <span className="text-orange-300">ROI</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  SEO Strategy | SEM Strategy | Content Strategy | Competitor Analysis | Performance Tracking
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
                    <span>Get Strategy Blueprint</span>
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
                    <div className="text-white text-base font-bold uppercase tracking-wider">Strategies Delivered</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">400%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Avg ROI Increase</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">₹10Cr+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Revenue Generated</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Data-Driven Plans</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Voice Search Quick Answers Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-blue-200 rounded-full text-blue-900 font-semibold text-sm mb-4 shadow-lg">
              🎙️ Voice Search Optimized Answers
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quick Answers About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Search Strategy</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Quick Answer 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What is Search Strategy?</h3>
              <p className="text-gray-700 leading-relaxed">
                Search strategy is a comprehensive plan combining SEO, SEM, and content marketing to dominate search results and drive qualified traffic to your business.
              </p>
            </div>

            {/* Quick Answer 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How Long to See Results?</h3>
              <p className="text-gray-700 leading-relaxed">
                SEM shows results in 7-14 days. SEO takes 60-90 days for rankings, 4-6 months for significant traffic. Our integrated approach delivers continuous ROI improvement.
              </p>
            </div>

            {/* Quick Answer 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-pink-100 hover:border-pink-300 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What&apos;s the Cost?</h3>
              <p className="text-gray-700 leading-relaxed">
                Search strategy starts from ₹25,000/month for startups to ₹1,50,000+ for enterprises. Most clients see 3-4x ROI within 6 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Search Strategy Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎯</span>
              Strategic Search Marketing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Search Strategy</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive search marketing strategies that combine SEO, SEM, and content for maximum visibility
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                    alt="Search Strategy Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 Data-Driven Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every strategy is built on comprehensive market research, competitor analysis, and performance data.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Multi-Channel Integration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Seamlessly integrate SEO, SEM, content marketing, and social media for unified search dominance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 ROI-Focused Planning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Strategies designed to maximize return on investment with clear KPIs and measurable outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Strategy Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Search Strategy <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Complete search marketing strategies that drive visibility, traffic, and conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">SEO Strategy Development</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Comprehensive SEO roadmaps with keyword research, content plans, and technical optimization.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Keyword Strategy</li>
                  <li className="flex items-start gap-2">✓ Content Roadmap</li>
                  <li className="flex items-start gap-2">✓ Link Building Plan</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💰</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">SEM Strategy Planning</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Strategic paid search campaigns optimized for maximum ROI and conversion rates.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ PPC Campaign Strategy</li>
                  <li className="flex items-start gap-2">✓ Budget Allocation</li>
                  <li className="flex items-start gap-2">✓ Bid Management</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Content Marketing Strategy</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Strategic content plans that attract, engage, and convert your target audience.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Content Calendar</li>
                  <li className="flex items-start gap-2">✓ Topic Clusters</li>
                  <li className="flex items-start gap-2">✓ Distribution Strategy</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔎</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Competitor Analysis</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  In-depth competitor research to identify opportunities and gaps in the market.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Competitive Intelligence</li>
                  <li className="flex items-start gap-2">✓ Gap Analysis</li>
                  <li className="flex items-start gap-2">✓ Market Positioning</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Local Search Strategy</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Dominate local search results with targeted strategies for location-based visibility.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Local SEO Planning</li>
                  <li className="flex items-start gap-2">✓ GMB Optimization</li>
                  <li className="flex items-start gap-2">✓ Citation Building</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Performance Analytics</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Track, measure, and optimize your search strategy with comprehensive analytics.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ KPI Tracking</li>
                  <li className="flex items-start gap-2">✓ ROI Measurement</li>
                  <li className="flex items-start gap-2">✓ Monthly Reporting</li>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Dominate<br />
              <span className="text-yellow-300">Search Results?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our experts create a comprehensive search strategy that drives visibility, traffic, and revenue!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Strategy Blueprint</span>
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
                <span>Strategic Planning Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>300+ Strategies Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>400% Avg ROI Increase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section - 1600+ Words */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Understanding Search Strategy */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Understanding <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Modern Search Strategy</span>
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Search strategy is the comprehensive blueprint that guides how your business appears, competes, and wins in search results across all platforms. In today&apos;s digital landscape, where 93% of online experiences begin with a search engine, having a well-crafted search strategy isn&apos;t optional—it&apos;s essential for survival and growth. A strategic approach to search encompasses organic SEO, paid search marketing (SEM), content marketing, local search optimization, voice search preparation, and emerging search technologies.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Unlike tactical SEO efforts that focus on individual ranking factors, a comprehensive search strategy takes a holistic view of your entire search ecosystem. It considers how different search channels interact, how user behavior evolves across devices and platforms, and how your business can capture attention at every stage of the customer journey. This strategic framework ensures that your SEO, SEM, and content efforts work synergistically rather than in silos, maximizing efficiency and ROI.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                The complexity of modern search has increased dramatically with Google&apos;s evolving algorithms, the rise of AI-powered search features, changing user behavior patterns, and increased competition in virtually every industry. A robust search strategy must account for SERP feature optimization (featured snippets, people also ask, local packs), entity-based SEO, semantic search optimization, mobile-first indexing, Core Web Vitals, and user experience signals that influence rankings.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                Businesses that invest in strategic search planning consistently outperform competitors who take a reactive, ad-hoc approach. Our search strategies are built on deep market research, competitive intelligence, technical SEO audits, content gap analysis, and clear business objectives. We create actionable roadmaps that prioritize high-impact initiatives, allocate resources efficiently, and deliver measurable results aligned with your business goals.
              </p>
            </div>
          </div>

          {/* Section 2: Components of a Winning Search Strategy */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Key Components of a <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">Winning Search Strategy</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Keyword & Topic Research</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Comprehensive keyword research goes beyond finding high-volume terms. We analyze search intent, competitive difficulty, commercial value, and topic clusters. Our research identifies quick-win opportunities, long-term growth keywords, and content gaps that competitors haven&apos;t addressed. We map keywords to the customer journey—awareness, consideration, decision—ensuring your content captures users at every stage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Technical SEO Foundation</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Technical SEO forms the foundation that enables search engines to effectively crawl, index, and rank your content. Our technical audits identify crawl errors, indexation issues, site speed problems, mobile usability concerns, structured data opportunities, and security vulnerabilities. We create prioritized technical roadmaps that fix critical issues first while planning long-term infrastructure improvements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📝</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Content Strategy & Planning</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Strategic content planning ensures consistent production of high-quality, SEO-optimized content that serves user needs while supporting business objectives. We develop editorial calendars, create content briefs, establish topic clusters, plan pillar pages, and coordinate content across different formats (blog posts, guides, videos, infographics). Content strategy aligns with keyword research and fills identified gaps in your current content library.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Link Building Strategy</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Authoritative backlinks remain a critical ranking factor. Our link building strategies focus on earning high-quality links through content marketing, digital PR, resource page outreach, broken link building, and relationship development. We prioritize links from relevant, authoritative sites in your industry while avoiding risky tactics that could result in penalties. Link building is integrated with content creation for maximum efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Paid Search Integration</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Strategic SEM campaigns complement organic efforts by capturing high-intent traffic while SEO builds momentum. We identify opportunities where paid search delivers immediate ROI, use PPC data to inform SEO keyword priorities, and create integrated campaigns that dominate search results with both paid and organic listings. Budget allocation is optimized based on keyword performance, seasonality, and business priorities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Analytics & Reporting</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Data-driven decision making separates successful search strategies from guesswork. We implement comprehensive tracking for organic rankings, traffic sources, user behavior, conversion paths, and ROI metrics. Regular reporting provides visibility into what&apos;s working, what needs adjustment, and where opportunities exist. Analytics inform ongoing optimization and strategic pivots as market conditions change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Our Strategy Development Process */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Strategic <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Development Process</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500/20 to-transparent backdrop-blur-lg rounded-2xl p-8 border-l-4 border-blue-400">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-black text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Business Discovery & Goal Setting</h3>
                    <p className="text-blue-100 leading-relaxed">
                      We begin with deep discovery sessions to understand your business model, target audience, competitive landscape, current marketing efforts, and growth objectives. This foundation ensures our search strategy aligns with business priorities. We establish clear, measurable KPIs—organic traffic growth, keyword rankings, conversion rates, revenue attribution—that demonstrate tangible business impact. Understanding your unique value proposition and customer pain points allows us to create strategies that resonate with your target market.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-transparent backdrop-blur-lg rounded-2xl p-8 border-l-4 border-purple-400">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-black text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Comprehensive SEO Audit</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Our technical SEO audit examines every aspect of your current search presence—site architecture, crawlability, indexation, on-page optimization, content quality, backlink profile, mobile performance, and Core Web Vitals. We use industry-leading tools (Screaming Frog, Ahrefs, SEMrush, Google Search Console) to identify issues limiting performance. The audit produces a prioritized list of technical fixes, content improvements, and strategic opportunities. This baseline assessment guides our entire strategy development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-transparent backdrop-blur-lg rounded-2xl p-8 border-l-4 border-green-400">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-black text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Competitive Intelligence Analysis</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Understanding your competitive landscape is crucial for identifying opportunities and differentiation strategies. We analyze top organic and paid competitors, studying their keyword portfolios, content strategies, backlink profiles, technical implementations, and SERP feature presence. Gap analysis reveals keywords they rank for that you don&apos;t, content topics they&apos;ve covered, and link sources you haven&apos;t tapped. This intelligence informs where to compete head-on and where to find untapped opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/20 to-transparent backdrop-blur-lg rounded-2xl p-8 border-l-4 border-yellow-400">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-black text-white">4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Keyword Research & Topic Mapping</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Extensive keyword research uncovers the search terms your target audience uses at different stages of their journey. We analyze search volume, difficulty, commercial intent, and trend data to identify high-value opportunities. Keywords are organized into topic clusters—groups of related terms that can be targeted with pillar pages and supporting content. This structure improves topical authority and internal linking. We map keywords to specific pages, ensuring strategic coverage without cannibalization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-500/20 to-transparent backdrop-blur-lg rounded-2xl p-8 border-l-4 border-pink-400">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-black text-white">5</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Strategic Roadmap Creation</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Based on audit findings, competitive analysis, and keyword research, we create a comprehensive 6-12 month search strategy roadmap. This document outlines priorities, timelines, resource requirements, and expected outcomes. Initiatives are sequenced for maximum impact—quick wins that build momentum, foundational technical fixes that enable growth, and long-term content and link building campaigns. The roadmap includes specific deliverables, responsibility assignments, and milestone checkpoints.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500/20 to-transparent backdrop-blur-lg rounded-2xl p-8 border-l-4 border-orange-400">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-black text-white">6</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Implementation & Optimization</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Strategy is only valuable when executed effectively. We support implementation through detailed technical specifications, content briefs, link building workflows, and campaign setups. Monthly performance reviews assess progress against KPIs, identify new opportunities, and adjust tactics based on results. Search strategy isn&apos;t static—it evolves with algorithm updates, competitive moves, and performance data. Continuous optimization ensures sustained growth and competitive advantage in an ever-changing search landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Why Search Strategy Matters */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Strategic Planning <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Delivers Superior Results</span>
            </h2>
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Many businesses approach search marketing tactically—implementing random SEO improvements, running disconnected PPC campaigns, and publishing content without clear purpose. This reactive approach wastes resources and delivers inconsistent results. Strategic search planning transforms scattered efforts into coordinated campaigns with compounding returns. When technical SEO, content marketing, link building, and paid search work together according to a unified strategy, results multiply.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Strategic planning provides clarity and focus. Instead of chasing every possible keyword or tactic, you concentrate resources on high-impact initiatives aligned with business goals. This efficiency dramatically improves ROI—you invest time and budget where they deliver maximum return. Strategic frameworks also enable better resource allocation, whether that&apos;s internal team bandwidth, content production budgets, or paid media spend.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                The competitive advantage of strategic planning extends beyond immediate rankings and traffic. Comprehensive strategies build sustainable assets—authoritative content libraries, strong backlink profiles, optimized technical foundations—that compound over time. While competitors chase algorithmic changes reactively, strategic businesses maintain consistent growth because their foundation is solid. This long-term perspective creates competitive moats that become increasingly difficult to replicate.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                Perhaps most importantly, search strategy enables measurement and accountability. Clear goals, defined KPIs, and regular reporting make it possible to demonstrate ROI, identify what&apos;s working, and pivot when needed. Data-driven decision making replaces guesswork, allowing continuous improvement. Strategic planning transforms search marketing from a cost center to a revenue driver with measurable business impact.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-500/30 to-blue-600/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-300/30 text-center">
                <div className="text-5xl font-black text-white mb-3">400%</div>
                <div className="text-xl font-bold text-blue-100">Avg ROI Increase</div>
                <p className="text-blue-200 mt-3">Businesses with strategic search plans see 4x better returns</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/30 to-purple-600/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-300/30 text-center">
                <div className="text-5xl font-black text-white mb-3">₹10Cr+</div>
                <div className="text-xl font-bold text-purple-100">Revenue Generated</div>
                <p className="text-purple-200 mt-3">Total client revenue attributed to our search strategies</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/30 to-green-600/30 backdrop-blur-lg rounded-2xl p-8 border border-green-300/30 text-center">
                <div className="text-5xl font-black text-white mb-3">300+</div>
                <div className="text-xl font-bold text-green-100">Strategies Delivered</div>
                <p className="text-green-200 mt-3">Successful search strategies implemented across industries</p>
              </div>
            </div>
          </div>

          {/* Section 5: Getting Started */}
          <div className="bg-gradient-to-br from-blue-600/40 to-purple-600/40 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Winning Search Strategy?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Partner with experienced search strategists who understand the complexities of modern search marketing. We create comprehensive, data-driven strategies that deliver measurable business results and sustainable competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="group inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all transform hover:scale-105">
                <span className="mr-3">Get Strategy Blueprint</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <a href="tel:+918369511877" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call: +91-83695-11877</span>
              </a>
            </div>
            <p className="text-blue-200 mt-6">
              💡 Free strategy consultation | 📊 Comprehensive audit included | ✅ Data-driven approach
            </p>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 rounded-full text-white font-semibold text-sm mb-6 shadow-xl">
              ❓ Frequently Asked Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Common Questions About <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Search Strategy</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Everything you need to know about search strategy services in Mumbai
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6" itemScope itemType="https://schema.org/FAQPage">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4" itemProp="name">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🎯</span>
                  <span>What is search strategy and why is it important for Mumbai businesses?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">Search strategy is a comprehensive plan that combines SEO, SEM, content marketing, and analytics to dominate search results. For Mumbai businesses, it&apos;s crucial because 85% of local consumers search online before making purchase decisions. A solid search strategy ensures your business appears at the top when Mumbai customers search for your products/services, driving qualified traffic, leads, and sales. It integrates organic rankings (SEO) with paid advertising (SEM) for maximum visibility across all search channels.</p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4" itemProp="name">
                  <span className="text-4xl mt-1 group-open:animate-pulse">⏱️</span>
                  <span>How long does it take to see results from search strategy in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">Search strategy results vary by channel: Paid search (SEM) delivers immediate results within 7-14 days with proper campaign setup. SEO typically shows rankings improvements in 60-90 days, with significant traffic growth in 4-6 months. Content strategy builds momentum over 3-6 months as content gains authority. Our integrated approach combines quick wins from SEM with long-term organic growth from SEO, ensuring continuous ROI improvement throughout implementation. Most Mumbai clients see positive ROI within first 90 days.</p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4" itemProp="name">
                  <span className="text-4xl mt-1 group-open:animate-spin">📦</span>
                  <span>What&apos;s included in your search strategy services for Mumbai businesses?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">Our comprehensive search strategy includes: 1) Market & Competitor Analysis - Deep dive into Mumbai market dynamics, 2) SEO Strategy - Technical SEO, content plan, link building roadmap, 3) SEM Strategy - Google Ads, Bing Ads campaign planning, 4) Keyword Strategy - 500+ target keywords research, 5) Content Strategy - Editorial calendar, topic clusters, 6) Performance Tracking - Monthly reports with KPIs, 7) Conversion Optimization - Landing page strategy, CRO recommendations, 8) Budget Planning - ROI-focused spend allocation across channels.</p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4" itemProp="name">
                  <span className="text-4xl mt-1 group-open:animate-bounce">💰</span>
                  <span>How much does search strategy cost for Mumbai businesses?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">Search strategy pricing depends on business size and goals: Startups & Small Business: ₹25,000-₹50,000/month (Basic SEO + SEM), Medium Business: ₹50,000-₹1,50,000/month (Comprehensive multi-channel), Enterprise: ₹1,50,000+ (Custom strategies, dedicated team). One-time Strategy Development: ₹75,000-₹2,00,000 (complete roadmap). We offer flexible packages and transparent pricing. Most Mumbai clients see 3-4x ROI within 6 months, making the investment highly profitable.</p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4" itemProp="name">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🏆</span>
                  <span>What makes MyDigital Crown&apos;s search strategy different from competitors?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">Our competitive advantages: 1) Mumbai Market Specialization - 8+ years understanding Mumbai search behavior, 2) Data-First Approach - Every recommendation backed by research and analytics, 3) Integrated Strategy - Seamless coordination across SEO, SEM, content, social, 4) Proven ROI - 400% average ROI with 98% client retention, 5) Transparent Reporting - Weekly dashboards showing progress and spend, 6) Agile Methodology - Quick pivots based on performance data, 7) Expert Team - Google, Bing, HubSpot certified strategists, 8) Technology Stack - SEMrush, Ahrefs, Google Analytics 4, Search Console pro tools.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {/* Our Locations */}

      <OurLocations />


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/search-strategy"
        title="Complete Search Solutions"
        description="Enhance your search strategy with our comprehensive digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
