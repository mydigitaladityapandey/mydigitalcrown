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
  title: 'Social Listening Mumbai | 24/7 Monitoring | Sentiment Analysis',
  description: 'Social Listening Mumbai. 24/7 Brand Monitoring | Real-Time Sentiment Analysis | Crisis Management | Track All Mentions. Call +91-83695-11877',
  keywords: [
    // Primary Keywords (5)
    'social listening service in mumbai',
    'social listening mumbai',
    'social listening services mumbai',
    'social listening company mumbai',
    'social listening agency mumbai',
    
    // Quality & Authority Keywords (8)
    'best social listening mumbai',
    'top social listening mumbai',
    'expert social listening mumbai',
    'professional social listening mumbai',
    'leading social monitoring agency mumbai',
    'premier social listening services',
    'trusted social intelligence mumbai',
    'social listening specialist mumbai',
    
    // Service-specific Keywords (10)
    'brand monitoring mumbai',
    'sentiment analysis mumbai',
    'social media monitoring mumbai',
    'competitor tracking mumbai',
    'crisis management mumbai',
    'reputation monitoring mumbai',
    'social intelligence mumbai',
    'brand mention tracking mumbai',
    'influencer tracking mumbai',
    'social analytics mumbai',
    
    // Performance & ROI Keywords (8)
    'real-time social listening mumbai',
    'ai social listening mumbai',
    'social listening tools mumbai',
    'social listening platform mumbai',
    'social listening software mumbai',
    'social listening solutions mumbai',
    'automated social monitoring',
    'social listening dashboard',
    
    // Industry Keywords (6)
    'social listening for brands mumbai',
    'enterprise social listening',
    'startup social monitoring mumbai',
    'ecommerce social listening',
    'b2b social listening mumbai',
    'social listening consultant mumbai'
  ],
  openGraph: {
    title: 'Social Listening Service in Mumbai | #1 Brand Monitoring Expert 2025',
    description: 'Leading Social Listening Service in Mumbai with real-time monitoring, sentiment analysis & crisis management. Track brand mentions 24/7.',
    url: 'https://mydigital-mu.vercel.app/services/social-listening',
    siteName: 'MyDigital Crown',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Social listing Service in Mumbai - MyDigital Crown',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Listening Service in Mumbai | #1 Brand Monitoring Expert 2025',
    description: 'Leading Social Listening Service in Mumbai with real-time monitoring, sentiment analysis & crisis management.',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop'],
  },
  alternates: {
    canonical: 'https://mydigital-mu.vercel.app/services/social-listening',
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
};

// Schema Markup for SEO
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "MyDigital Crown",
      "url": "https://mydigital-mu.vercel.app",
      "logo": "https://mydigital-mu.vercel.app/logo.png",
      "description": "Leading Social listing Service in Mumbai providing professional business listing and local SEO services",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mumbai",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
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
        "https://www.linkedin.com/company/mydigitalcrown"
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Social listing Service in Mumbai",
      "provider": {
        "@type": "Organization",
        "name": "MyDigital Crown"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
      "description": "Professional Social listing Service in Mumbai offering Google My Business optimization, directory submissions, local citations, and business listing management services",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Business Listing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google My Business Listing",
              "description": "Complete GMB profile setup, optimization, and management for local search visibility"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Directory Submissions",
              "description": "Submit your business to top local and industry-specific directories"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local Citations",
              "description": "Build consistent NAP citations across authoritative business directories"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Listing Management",
              "description": "Monitor and manage all your business listings from a single dashboard"
            }
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "MyDigital Crown - Social listing Service in Mumbai",
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
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
        "latitude": 19.377095681890477,
        "longitude": 72.85695367603202
      },
      "telephone": "+91-83695-11877",
      "priceRange": "₹₹₹",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Social listing Service in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Social listing Service in Mumbai specializes in creating, optimizing, and managing your business listings across Google My Business, online directories, and citation platforms to improve local search visibility and help customers find your business online."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Social listing Service cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Social listing Service costs in Mumbai vary based on the number of directories, citation volume, and ongoing management needs. Our Social listing Service in Mumbai offers packages starting from ₹8,000/month with customized pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose a professional Social listing Service in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professional Social listing Service in Mumbai ensures accurate, consistent business information across all platforms, improves local SEO rankings, increases online visibility, and helps potential customers find and trust your business."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results from business listing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most businesses see improved local search visibility within 2-4 weeks after listing optimization. Significant ranking improvements and increased customer inquiries typically occur within 2-3 months with our Social listing Service in Mumbai."
          }
        },
        {
          "@type": "Question",
          "name": "What platforms are included in Social listing Service in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Social listing Service in Mumbai covers Google My Business, Bing Places, Facebook, Instagram, JustDial, Sulekha, IndiaMART, and 50+ other local and industry-specific directories to maximize your online presence."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
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
          "name": "Social listing Service in Mumbai",
          "item": "https://mydigital-mu.vercel.app/services/social-listening"
        }
      ]
    }
  ]
};

export default function SocialListeningPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Social Media Listening Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Real-Time Social Intelligence</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Social Listening Service in Mumbai | #1 Brand Monitoring Expert 2025
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  👂 <span className="text-yellow-300">Monitor Conversations</span>, <span className="text-green-300">Track Sentiment</span> & <span className="text-orange-300">Protect Your Brand</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Brand Monitoring | Sentiment Analysis | Competitor Tracking | Crisis Management
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
                    <span>Start Listening Now</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">5M+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Mentions Tracked</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">24/7</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Real-Time Monitoring</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">150+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Brands Protected</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">95%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Accuracy Rate</div>
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
              Quick Answers About Social Listening
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get instant answers to common questions about our social listening services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:scale-105">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What is social listening?</h3>
              <p className="text-gray-700 leading-relaxed">
                Social listening is the process of monitoring social media platforms, forums, and online conversations to track brand mentions, analyze sentiment, and understand customer opinions in real-time. Our service helps you stay informed about what people are saying about your brand 24/7.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:scale-105">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much does social listening cost?</h3>
              <p className="text-gray-700 leading-relaxed">
                Social listening services in Mumbai typically cost ₹25,000-₹1,50,000/month depending on the number of keywords tracked, platforms monitored, and reporting frequency. We offer customized packages to fit your budget and requirements.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-pink-100 hover:border-pink-300 transition-all hover:scale-105">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How fast do you detect mentions?</h3>
              <p className="text-gray-700 leading-relaxed">
                Our social listening tools provide real-time monitoring with instant alerts. We detect brand mentions within seconds across social media, blogs, forums, and news sites, allowing you to respond quickly to both opportunities and crises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Social Listening Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">👂</span>
              Social Listening Intelligence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Social Listening</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced social media monitoring that helps you understand your audience and protect your brand reputation
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                    alt="Social Media Listening Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔍 Real-Time Monitoring</h3>
                <p className="text-blue-100 leading-relaxed">
                  Track brand mentions, keywords, and conversations across all social platforms 24/7.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 Sentiment Analysis</h3>
                <p className="text-blue-100 leading-relaxed">
                  AI-powered sentiment analysis to understand how people feel about your brand.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚨 Crisis Management</h3>
                <p className="text-blue-100 leading-relaxed">
                  Instant alerts for negative mentions so you can respond quickly and protect your reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Listening Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Social Listening <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive social media monitoring and intelligence services to protect and grow your brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Brand Monitoring</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Track every mention of your brand across social media, blogs, and forums.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Brand Mentions</li>
                  <li className="flex items-start gap-2">✓ Hashtag Tracking</li>
                  <li className="flex items-start gap-2">✓ Multi-Platform Coverage</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💭</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Sentiment Analysis</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Understand the emotions and opinions behind social conversations.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Positive/Negative Detection</li>
                  <li className="flex items-start gap-2">✓ Emotion Analysis</li>
                  <li className="flex items-start gap-2">✓ Trend Identification</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Competitor Tracking</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Monitor your competitors&apos; social media activities and customer feedback.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Competitor Mentions</li>
                  <li className="flex items-start gap-2">✓ Market Intelligence</li>
                  <li className="flex items-start gap-2">✓ Share of Voice</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🚨</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Crisis Detection</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Get instant alerts when negative conversations spike or issues arise.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Real-Time Alerts</li>
                  <li className="flex items-start gap-2">✓ Crisis Dashboard</li>
                  <li className="flex items-start gap-2">✓ Response Templates</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">👥</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Influencer Tracking</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Identify influencers talking about your brand and industry.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Influencer Discovery</li>
                  <li className="flex items-start gap-2">✓ Reach Analysis</li>
                  <li className="flex items-start gap-2">✓ Partnership Opportunities</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Analytics & Reporting</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Comprehensive reports with actionable insights and recommendations.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Custom Dashboards</li>
                  <li className="flex items-start gap-2">✓ Trend Reports</li>
                  <li className="flex items-start gap-2">✓ Executive Summaries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Digital Marketing Services */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🚀</span>
              Premium Digital Marketing Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              50+ Services To Skyrocket Your Growth
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Beyond business listings, explore our complete suite of digital marketing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service 1 - SEO */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent"></div>
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=300&fit=crop" 
                    alt="SEO Services"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-3">SEO Services</h3>
                  <p className="text-blue-100 mb-4">Dominate search rankings with data-driven SEO strategies</p>
                  <Link href="/services/seo" className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 - Social Media */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-transparent"></div>
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop" 
                    alt="Social Media Marketing"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">📱</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Social Media Marketing</h3>
                  <p className="text-blue-100 mb-4">Build engaged communities across all social platforms</p>
                  <Link href="/services/social-media-marketing" className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 - Google Ads */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-900/50 to-transparent"></div>
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" 
                    alt="Google Ads"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Google Ads</h3>
                  <p className="text-blue-100 mb-4">Drive qualified traffic with targeted PPC campaigns</p>
                  <Link href="/services/google-ads" className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 4 - WordPress */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/50 to-transparent"></div>
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop" 
                    alt="WordPress Development"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-2xl font-bold text-white mb-3">WordPress Development</h3>
                  <p className="text-blue-100 mb-4">Custom WordPress websites that convert visitors to customers</p>
                  <Link href="/services/wordpress-development" className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 5 - Digital Branding */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 to-transparent"></div>
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop" 
                    alt="Digital Branding"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Digital Branding</h3>
                  <p className="text-blue-100 mb-4">Create memorable brand identities that resonate</p>
                  <Link href="/services/digital-branding" className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 6 - YouTube Marketing */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:border-red-300/50 transition-all duration-500 hover:scale-105 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-transparent"></div>
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop" 
                    alt="YouTube Marketing"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">📹</div>
                  <h3 className="text-2xl font-bold text-white mb-3">YouTube Marketing</h3>
                  <p className="text-blue-100 mb-4">Grow your channel and reach millions with video marketing</p>
                  <Link href="/services/youtube-marketing" className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
              <span className="mr-2">🌟</span>
              View All 50+ Services
            </Link>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <ClientSuccessStories 
        title="Client Success Stories"
      />

      {/* Trusted Brands */}
      <TrustedBrands />

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Emojis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>👂</div>
          <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🔍</div>
          <div className="absolute bottom-32 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>💬</div>
          <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>📊</div>
          <div className="absolute top-1/3 left-1/2 text-4xl opacity-20 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}>🎯</div>
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
              Everything you need to know about social listening services in Mumbai ✨
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                  <span>What is Social listing Service in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">
                  Social listing Service in Mumbai is a comprehensive digital marketing solution that ensures your business appears consistently across all major online directories, search engines, and social platforms. Our Social listing Service in Mumbai includes Google My Business optimization, directory submissions, citation building, and ongoing listing management to maximize your local search visibility.
                </p>
                <p>
                  With our Social listing Service in Mumbai, you get professional management of 50+ business directories, regular NAP (Name, Address, Phone) consistency checks, review monitoring, and detailed performance analytics.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">💰</span>
                  <span>How much does Social listing Service in Mumbai cost?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">
                  Our Social listing Service in Mumbai pricing starts from ₹15,000/month for basic packages and goes up to ₹50,000/month for enterprise solutions. The cost of Social listing Service in Mumbai depends on factors like number of locations, directories covered, review management needs, and additional services required.
                </p>
                <p className="mb-4">
                  Every Social listing Service in Mumbai package includes GMB optimization, minimum 20 directory submissions, monthly reporting, and dedicated account manager. Contact us at +91-83695-11877 for a customized quote based on your specific business needs.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🏆</span>
                  <span>Why choose professional Social listing Service in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">
                  Professional Social listing Service in Mumbai ensures accuracy, consistency, and comprehensive coverage across all platforms. DIY listing management often leads to inconsistent NAP data, missed directories, and poor optimization. Our Social listing Service in Mumbai team has expertise in local SEO algorithms, directory relationships, and proven strategies that deliver results.
                </p>
                <p>
                  With professional Social listing Service in Mumbai, you save time, avoid costly mistakes, and benefit from ongoing monitoring and optimization that keeps your business visible as search algorithms evolve.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                  <span>How long to see results from Social listing Service in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">
                  Most businesses start seeing initial results from Social listing Service in Mumbai within 2-4 weeks, with significant improvements by 60-90 days. Our Social listing Service in Mumbai delivers quick wins like improved Google Maps visibility, while building long-term authority through comprehensive citation networks.
                </p>
                <p>
                  The timeline for Social listing Service in Mumbai results depends on your industry competition, current online presence, and number of locations. We provide monthly analytics showing your progress in local search rankings, directory coverage, and customer engagement metrics.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📍</span>
                  <span>What platforms are included in Social listing Service in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">
                  Our Social listing Service in Mumbai covers 50+ platforms including Google My Business, Bing Places, Facebook, Instagram, Apple Maps, JustDial, Sulekha, IndiaMART, TradeIndia, and industry-specific directories. Social listing Service in Mumbai ensures your business appears on all platforms where your customers search.
                </p>
                <p>
                  We customize Social listing Service in Mumbai directory selection based on your industry. For example, restaurants get listed on Zomato and Swiggy, while healthcare providers appear on Practo and 1mg. This targeted approach maximizes ROI from Social listing Service in Mumbai.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📦</span>
                  <span>What&apos;s included in Social listing Service in Mumbai packages?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">
                  Every Social listing Service in Mumbai package includes: Google My Business setup and optimization, business information verification, category selection, photo/video uploads, post management, 20-50 directory submissions, citation building, NAP consistency monitoring, duplicate listing removal, review monitoring, monthly performance reports, and dedicated account manager.
                </p>
                <p>
                  Premium Social listing Service in Mumbai packages add reputation management, competitor analysis, local link building, schema markup implementation, and priority support with same-day response times.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔧</span>
                  <span>How to maintain listings after Social listing Service in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">
                  Our Social listing Service in Mumbai includes ongoing maintenance to keep your listings accurate and optimized. We monitor for unauthorized changes, update business hours during holidays, add new photos, respond to reviews, and optimize content based on performance data. This continuous management is crucial for maintaining Social listing Service in Mumbai results.
                </p>
                <p>
                  With Social listing Service in Mumbai maintenance, you also get quarterly audits to identify new directory opportunities, remove outdated citations, and ensure compliance with the latest local search algorithm updates.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📊</span>
                  <span>How to measure ROI from Social listing Service in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">
                  Social listing Service in Mumbai ROI is measured through: Google My Business insights (views, clicks, calls, direction requests), website traffic from local search, phone call tracking, form submissions, store visits, search ranking improvements, and customer acquisition cost reduction. Our Social listing Service in Mumbai reports show clear before/after comparisons.
                </p>
                <p>
                  Most businesses see 3-5X ROI from Social listing Service in Mumbai within 6 months. We provide custom dashboards tracking all key metrics, making it easy to demonstrate the value of Social listing Service in Mumbai to stakeholders.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-indigo-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🎯</span>
                  <span>What platforms does social listening cover?</span>
                </span>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">
                  Our social listening service monitors all major platforms including Facebook, Twitter, Instagram, LinkedIn, YouTube, Reddit, blogs, news sites, forums, review sites like Google Reviews and Trustpilot, and industry-specific communities. We track brand mentions, hashtags, keywords, and competitor activity across these channels 24/7.
                </p>
                <p>
                  We also monitor regional platforms popular in India such as ShareChat, Moj, and local news portals to ensure complete coverage of conversations about your brand in the Mumbai market.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:border-teal-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-teal-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">⚙️</span>
                  <span>How quickly can you set up social listening?</span>
                </span>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">
                  We can set up basic social listening within 24-48 hours of onboarding. This includes keyword tracking, brand mention monitoring, and initial sentiment analysis. The setup process involves: identifying key tracking terms, configuring monitoring tools, setting up alert systems, creating custom dashboards, and establishing reporting schedules.
                </p>
                <p>
                  For comprehensive enterprise setups with multiple brands, products, or markets, full implementation takes 5-7 days. We provide training on reading reports and taking action on insights within the first week.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-amber-500/20 hover:border-amber-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-amber-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🚨</span>
                  <span>Do you provide crisis management through social listening?</span>
                </span>
                <svg className="w-7 h-7 text-amber-300 transform group-open:rotate-180 flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">
                  Yes! Our social listening includes real-time crisis detection and management. We set up automated alerts for sudden spikes in negative sentiment, viral negative posts, PR issues, and competitive attacks. When a potential crisis is detected, we immediately notify your team with actionable recommendations.
                </p>
                <p>
                  Our crisis management protocol includes: immediate alert notifications, sentiment trend analysis, recommended response strategies, competitive intelligence on similar situations, and post-crisis impact measurement. We&apos;ve helped Mumbai brands navigate multiple crises successfully with minimal reputation damage.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4 text-lg">Still have questions about Social listing Service in Mumbai?</p>
            <a href="tel:+918369511877" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <span className="mr-2">📞</span>
              Call Our Experts: +91-83695-11877
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Social listing Service in Mumbai is Essential for Your Business Success
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              In today&apos;s digital landscape, having a strong online presence through comprehensive Social listing Service in Mumbai is crucial for local business success. Our Social listing Service in Mumbai ensures your business appears prominently across all major search engines, directories, and social platforms where your customers are searching. With over 97% of consumers using the internet to find local businesses, professional Social listing Service in Mumbai has become a necessity, not a luxury.
            </p>

            <h3 className="text-3xl font-bold text-white mt-12 mb-6">
              What Makes Great Social listing Service in Mumbai Stand Out
            </h3>
            
            <p className="text-blue-100 leading-relaxed mb-6">
              Not all Social listing Service in Mumbai providers are created equal. At MyDigital Crown, our Social listing Service in Mumbai goes beyond basic directory submissions. We implement a comprehensive strategy that includes detailed business information optimization, high-quality visual content, strategic category selection, and continuous performance monitoring. Our Social listing Service in Mumbai team ensures perfect NAP (Name, Address, Phone) consistency across all platforms, which is critical for local search ranking algorithms.
            </p>

            <p className="text-blue-100 leading-relaxed mb-8">
              The best Social listing Service in Mumbai combines technical expertise with industry-specific knowledge. We understand the unique challenges Mumbai businesses face in local search competition and tailor our Social listing Service in Mumbai strategies accordingly. From handling multiple business locations to managing industry-specific directories, our Social listing Service in Mumbai covers every aspect of your online business presence.
            </p>

            <h3 className="text-3xl font-bold text-white mt-12 mb-6">
              Google My Business Optimization Excellence Through Social listing Service in Mumbai
            </h3>
            
            <p className="text-blue-100 leading-relaxed mb-6">
              Google My Business is the cornerstone of effective Social listing Service in Mumbai. Our Social listing Service in Mumbai team specializes in GMB optimization that drives real business results. We optimize your GMB profile with complete business information, compelling descriptions loaded with relevant keywords, professional photos and videos, strategic business categories, regular posts about offers and updates, and proactive review management.
            </p>

            <p className="text-blue-100 leading-relaxed mb-8">
              With our Social listing Service in Mumbai, your GMB profile becomes a powerful customer acquisition tool. We leverage features like Google Posts, Q&A management, booking buttons, and messaging to maximize engagement. Our data shows that businesses using our comprehensive Social listing Service in Mumbai see an average 250% increase in Google Maps visibility within the first 90 days.
            </p>

            <h3 className="text-3xl font-bold text-white mt-12 mb-6">
              Comprehensive Listing Services Included in Social listing Service in Mumbai
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">GMB Setup & Optimization</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Complete profile setup
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Business verification
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Category optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Photo & video uploads
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Regular post management
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border-2 border-green-200">
                <div className="text-5xl mb-4">📋</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Directory Submissions</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    50+ directory submissions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Industry-specific platforms
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Local business directories
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Social media profiles
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Niche directory targeting
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-2 border-orange-200">
                <div className="text-5xl mb-4">🔗</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Citation Building</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    NAP consistency checks
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Duplicate removal
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Citation cleanup
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Local link building
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Authority site submissions
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mt-12 mb-6">
              Directory Submission & Local Citation Building with Social listing Service in Mumbai
            </h3>
            
            <p className="text-blue-100 leading-relaxed mb-6">
              Our Social listing Service in Mumbai includes strategic submission to 50+ high-authority directories relevant to your industry and location. We don&apos;t just submit to generic directories – our Social listing Service in Mumbai team researches and targets platforms where your ideal customers actually search. This includes major platforms like JustDial, Sulekha, IndiaMART, TradeIndia, as well as industry-specific directories that drive qualified leads.
            </p>

            <p className="text-blue-100 leading-relaxed mb-8">
              Citation building through Social listing Service in Mumbai strengthens your local search authority. Each consistent citation acts as a vote of confidence for search engines, improving your local pack rankings. Our Social listing Service in Mumbai ensures every citation is accurate, complete, and optimized with relevant keywords and compelling business descriptions that convert browsers into customers.
            </p>

            <h3 className="text-3xl font-bold text-white mt-12 mb-6">
              Ongoing Listing Management & Monitoring with Social listing Service in Mumbai
            </h3>
            
            <p className="text-blue-100 leading-relaxed mb-6">
              Social listing Service in Mumbai isn&apos;t a one-time project – it requires continuous monitoring and optimization. Our team constantly watches for unauthorized changes to your listings, monitors customer reviews across all platforms, updates business information during changes or holidays, adds fresh content through posts and updates, and optimizes based on performance analytics. This proactive Social listing Service in Mumbai approach ensures your business maintains maximum visibility.
            </p>

            <p className="text-blue-100 leading-relaxed mb-8">
              With our Social listing Service in Mumbai monitoring, you receive monthly reports showing your progress across all key metrics: listing visibility scores, search ranking improvements, customer engagement rates, review sentiment analysis, and competitive positioning. This transparency ensures you always understand the value our Social listing Service in Mumbai delivers to your bottom line.
            </p>

            <h3 className="text-3xl font-bold text-white mt-12 mb-6">
              Why MyDigital Crown is the Best Choice for Social listing Service in Mumbai
            </h3>
            
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 my-12 border-2 border-blue-200 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-3">🏆</span>
                    Proven Track Record
                  </h4>
                  <p className="text-gray-700 mb-6">
                    Our Social listing Service in Mumbai has helped 150+ businesses achieve top local search rankings. With 10+ years of experience and 95%+ client retention, we deliver results that matter.
                  </p>

                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-3">🎯</span>
                    Industry Expertise
                  </h4>
                  <p className="text-gray-700 mb-6">
                    We specialize in Social listing Service in Mumbai across all industries – retail, healthcare, education, hospitality, professional services, and more. Each industry gets customized strategies.
                  </p>

                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-3">💰</span>
                    Transparent Pricing
                  </h4>
                  <p className="text-gray-700 mb-6">
                    Our Social listing Service in Mumbai packages are clearly defined with no hidden fees. You know exactly what you&apos;re getting and what you&apos;re paying for.
                  </p>

                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-3">📊</span>
                    Data-Driven Approach
                  </h4>
                  <p className="text-gray-700">
                    Every decision in our Social listing Service in Mumbai is backed by data. We track, measure, and optimize continuously based on real performance metrics.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-3">🚀</span>
                    Fast Results
                  </h4>
                  <p className="text-gray-700 mb-6">
                    While others take months, our Social listing Service in Mumbai delivers visible improvements within weeks. We prioritize quick wins while building long-term authority.
                  </p>

                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-3">👥</span>
                    Dedicated Support
                  </h4>
                  <p className="text-gray-700 mb-6">
                    Every Social listing Service in Mumbai client gets a dedicated account manager who knows your business inside out and responds quickly to your needs.
                  </p>

                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-3">🔄</span>
                    Comprehensive Service
                  </h4>
                  <p className="text-gray-700 mb-6">
                    From initial audit to ongoing optimization, our Social listing Service in Mumbai covers everything. You get a true end-to-end solution, not just basic submissions.
                  </p>

                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-3">✅</span>
                    Guaranteed Quality
                  </h4>
                  <p className="text-gray-700">
                    We stand behind our Social listing Service in Mumbai with quality guarantees. If we don&apos;t deliver results, we keep working until we do.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Dominate Local Search with Social listing Service in Mumbai?
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Join 150+ successful businesses that trust our Social listing Service in Mumbai. Get started today with a free listing audit and customized strategy proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+918369511877" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                  <span className="mr-2">📞</span>
                  Call Now: +91-83695-11877
                </a>
                <a href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                  <span className="mr-2">📧</span>
                  Get Free Audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Understand<br />
              <span className="text-yellow-300">Your Social Audience?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Start monitoring your brand mentions and protecting your reputation with our advanced social listening tools!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Start Monitoring</span>
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
                <span>24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>50M+ Mentions Tracked</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>95% Accuracy Rate</span>
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
        currentService="/services/social-listening"
        title="Complete Social Media Solutions"
        description="Enhance your social listening with our comprehensive digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
