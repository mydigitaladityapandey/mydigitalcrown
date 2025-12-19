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
  title: 'Social Media Strategy Mumbai | 500+ Strategies | ROI Driven',
  description: 'Social Media Strategy Mumbai. 500+ Strategies Built | Audience Analysis & Content Planning | Community Building | Drive ROI. Call +91-83695-11877',
  keywords: [
    // Primary Keywords
    "Social Media Strategy in Mumbai", "social media strategy Mumbai", "social strategy Mumbai", "social media planning Mumbai", "strategy development Mumbai",
    // Quality Keywords
    "best social media strategy Mumbai", "professional strategy consultant Mumbai", "expert social strategy Mumbai", "top strategy agency Mumbai", "certified strategist Mumbai",
    // Service-Specific Keywords
    "audience analysis Mumbai", "content strategy Mumbai", "platform strategy Mumbai", "campaign strategy Mumbai", "engagement strategy Mumbai",
    "brand strategy Mumbai", "community strategy Mumbai", "growth strategy Mumbai", "influencer strategy Mumbai", "paid social strategy Mumbai",
    // Technical Keywords
    "social media audit Mumbai", "competitor analysis Mumbai", "target audience research Mumbai", "content calendar Mumbai", "social media goals Mumbai",
    "KPI tracking Mumbai", "analytics strategy Mumbai", "conversion strategy Mumbai", "brand positioning Mumbai", "messaging strategy Mumbai",
    // Business Keywords
    "social media consultant Mumbai", "strategy services Mumbai", "strategy company Mumbai", "B2B social strategy Mumbai", "social media ROI strategy Mumbai",
    "startup social strategy Mumbai", "enterprise social strategy Mumbai"
  ],
  authors: [{ name: "Aditya Pandey", url: "https://mydigital-mu.vercel.app/about" }],
  creator: "MyDigital Crown",
  publisher: "MyDigital Crown",
  category: "Social Media Strategy Services",
  classification: "Digital Strategy & Social Media Planning",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  openGraph: {
    title: 'Social Media Strategy in Mumbai | #1 Strategy Expert 2025',
    description: 'Leading Social Media Strategy in Mumbai specializing in strategy development, audience analysis & content planning. Create winning strategies, build communities & drive ROI.',
    url: 'https://mydigital-mu.vercel.app/services/social-media-strategy',
    siteName: 'MyDigital Crown',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Social Media Strategy in Mumbai - MyDigital Crown',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Strategy in Mumbai | #1 Strategy Expert 2025',
    description: 'Leading Social Media Strategy in Mumbai specializing in strategy development, audience analysis & content planning. 500+ strategies created!',
    images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop'],
  },
  alternates: {
    canonical: 'https://mydigital-mu.vercel.app/services/social-media-strategy',
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
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mydigital-mu.vercel.app/#organization",
      "name": "MyDigital Crown",
      "url": "https://mydigital-mu.vercel.app",
      "logo": "https://mydigital-mu.vercel.app/logo.png",
      "description": "Leading Social Media Strategy in Mumbai specializing in strategy development, audience analysis, and content planning.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mumbai",
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
          "availableLanguage": ["English", "Hindi"]
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
      "@id": "https://mydigital-mu.vercel.app/services/social-media-strategy#service",
      "serviceType": "Social Media Strategy in Mumbai",
      "provider": {
        "@id": "https://mydigital-mu.vercel.app/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Social Media Strategy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Strategy Development",
              "description": "Comprehensive social media plans aligned with business goals"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Audience Analysis",
              "description": "Deep dive into target audience demographics and behaviors"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Content Planning",
              "description": "Strategic content calendars with themes and posting schedules"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Competitive Analysis",
              "description": "Monitor competitors and identify opportunities to stand out"
            }
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://mydigital-mu.vercel.app/services/social-media-strategy#localbusiness",
      "name": "MyDigital Crown - Social Media Strategy in Mumbai",
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop",
      "telephone": "+91-83695-11877",
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
      "url": "https://mydigital-mu.vercel.app/services/social-media-strategy",
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
        "reviewCount": "200"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://mydigital-mu.vercel.app/services/social-media-strategy#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Social Media Strategy in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Social Media Strategy in Mumbai involves creating comprehensive plans for social media presence including platform selection, content strategy, audience analysis, competitive research, and performance optimization. Our experts develop data-driven strategies aligned with your business goals."
          }
        },
        {
          "@type": "Question",
          "name": "Why do I need a professional Social Media Strategy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professional Social Media Strategy in Mumbai ensures your social media efforts are focused, efficient, and effective. We align strategies with business goals, identify target audiences, create content roadmaps, and optimize for measurable results instead of random posting."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Social Media Strategy cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Social Media Strategy in Mumbai costs vary based on business size and complexity. We offer packages from ₹25,000/month for basic strategy to ₹1,50,000/month for comprehensive multi-platform strategies. Contact us at +91-83695-11877 for a custom quote."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results from a social media strategy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most businesses see initial improvements within 2-3 months of implementing a professional Social Media Strategy in Mumbai. Significant growth typically appears within 4-6 months. We provide monthly reports showing progress toward your goals."
          }
        },
        {
          "@type": "Question",
          "name": "What platforms should be included in my social media strategy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Platform selection depends on your target audience and business goals. As a Social Media Strategy in Mumbai expert, we analyze your audience to recommend the right platforms whether Facebook, Instagram, LinkedIn, Twitter, YouTube, or Pinterest."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mydigital-mu.vercel.app/services/social-media-strategy#breadcrumb",
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
          "name": "Social Media Strategy in Mumbai",
          "item": "https://mydigital-mu.vercel.app/services/social-media-strategy"
        }
      ]
    }
  ]
};

export default function SocialMediaStrategyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Social Media Strategy Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Strategic Social Media Experts</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Social Media Strategy In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  📊 Create <span className="text-yellow-300">Winning Strategies</span>, <span className="text-green-300">Build Communities</span> & <span className="text-orange-300">Drive ROI</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Strategy Planning | Audience Analysis | Content Roadmap | Performance Optimization
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
                    <span>Get Your Strategy</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">500+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Strategies Created</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">600%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Avg Growth Rate</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">₹8Cr+</div>
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

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Social Media Strategy Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📊</span>
              Strategic Planning Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Social Media Strategy</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven social media strategies that align with your business goals and deliver measurable results
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                    alt="Social Media Strategy Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Goal-Oriented</h3>
                <p className="text-gray-700 leading-relaxed">
                  Strategies designed around your specific business objectives and target audience insights.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 Data-Driven</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every decision backed by analytics, market research, and competitive intelligence.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Results-Focused</h3>
                <p className="text-gray-700 leading-relaxed">
                  Proven frameworks that deliver consistent growth, engagement, and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Strategy Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Strategy <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive social media strategy services to dominate your industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Strategy Development</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Comprehensive social media plans aligned with your business goals.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Goal Setting</li>
                  <li className="flex items-start gap-2">✓ Platform Selection</li>
                  <li className="flex items-start gap-2">✓ Content Strategy</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">👥</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Audience Analysis</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Deep dive into your target audience demographics and behaviors.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Demographic Research</li>
                  <li className="flex items-start gap-2">✓ Behavior Analysis</li>
                  <li className="flex items-start gap-2">✓ Persona Creation</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Competitive Analysis</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Monitor competitors and identify opportunities to stand out.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Competitor Research</li>
                  <li className="flex items-start gap-2">✓ Gap Analysis</li>
                  <li className="flex items-start gap-2">✓ Differentiation Strategy</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📅</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Content Planning</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Strategic content calendars with themes, topics, and posting schedules.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Content Calendar</li>
                  <li className="flex items-start gap-2">✓ Theme Planning</li>
                  <li className="flex items-start gap-2">✓ Posting Schedule</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💰</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Campaign Strategy</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Plan and execute social media campaigns that drive results.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Campaign Planning</li>
                  <li className="flex items-start gap-2">✓ Budget Allocation</li>
                  <li className="flex items-start gap-2">✓ Performance Goals</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Analytics & Optimization</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Track performance and continuously optimize for better results.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Performance Tracking</li>
                  <li className="flex items-start gap-2">✓ A/B Testing</li>
                  <li className="flex items-start gap-2">✓ Strategy Refinement</li>
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
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🚀</span>
              Premium Digital Marketing Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              50+ Services To Skyrocket Your Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond strategy, we offer comprehensive digital marketing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* SEO Services */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop"
                  alt="SEO Services Mumbai"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-4xl mb-3">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">SEO Services</h3>
                  <p className="text-blue-100 text-sm">Rank #1 on Google with proven SEO strategies</p>
                </div>
              </div>
              <div className="p-6">
                <Link href="/services/seo" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Social Media Marketing */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop"
                  alt="Social Media Marketing Mumbai"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-4xl mb-3">📱</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Social Media Marketing</h3>
                  <p className="text-blue-100 text-sm">Engage audiences & build brand presence</p>
                </div>
              </div>
              <div className="p-6">
                <Link href="/services/social-media-marketing" className="inline-flex items-center text-blue-600 font-semibold hover:text-purple-700">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Google Ads */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Google Ads Services Mumbai"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Google Ads</h3>
                  <p className="text-blue-100 text-sm">Drive instant traffic with targeted PPC campaigns</p>
                </div>
              </div>
              <div className="p-6">
                <Link href="/services/google-ads" className="inline-flex items-center text-blue-600 font-semibold hover:text-pink-700">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* WordPress Development */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                  alt="WordPress Development Mumbai"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-2xl font-bold text-white mb-2">WordPress Development</h3>
                  <p className="text-blue-100 text-sm">Custom WordPress websites that convert</p>
                </div>
              </div>
              <div className="p-6">
                <Link href="/services/wordpress-development" className="inline-flex items-center text-blue-600 font-semibold hover:text-orange-700">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Digital Branding */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
                  alt="Digital Branding Mumbai"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Digital Branding</h3>
                  <p className="text-blue-100 text-sm">Build memorable brand identity online</p>
                </div>
              </div>
              <div className="p-6">
                <Link href="/services/digital-branding" className="inline-flex items-center text-blue-600 font-semibold hover:text-green-700">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* YouTube Marketing */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop"
                  alt="YouTube Marketing Mumbai"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-4xl mb-3">📹</div>
                  <h3 className="text-2xl font-bold text-white mb-2">YouTube Marketing</h3>
                  <p className="text-red-100 text-sm">Grow your channel & monetize content</p>
                </div>
              </div>
              <div className="p-6">
                <Link href="/services/youtube-marketing" className="inline-flex items-center text-red-600 font-semibold hover:text-red-700">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
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
      <TrustedBrands />

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-1000"></div>
          <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">💬</span>
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Got Questions About Social Media Strategy?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know about professional Social Media Strategy in Mumbai services
            </p>
          </div>

          {/* Floating Emojis */}
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">📊</div>
          <div className="absolute top-40 right-20 text-6xl opacity-20 animate-bounce delay-1000">🎯</div>
          <div className="absolute bottom-40 left-20 text-6xl opacity-20 animate-bounce delay-2000">📈</div>
          <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-bounce delay-3000">🚀</div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-yellow-400/50 overflow-hidden hover:border-yellow-400 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center">
                <span className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">📊</span>
                  What is Social Media Strategy in Mumbai?
                </span>
                <svg className="w-6 h-6 text-yellow-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Social Media Strategy in Mumbai involves creating comprehensive plans for social media presence including platform selection, content strategy, audience analysis, competitive research, and performance optimization. Our Social Media Strategy in Mumbai experts develop data-driven strategies aligned with your business goals, target audience insights, and industry best practices to ensure maximum ROI from social media efforts.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-pink-400/50 overflow-hidden hover:border-pink-400 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center">
                <span className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">💰</span>
                  How much does Social Media Strategy cost in Mumbai?
                </span>
                <svg className="w-6 h-6 text-pink-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Social Media Strategy in Mumbai costs vary based on business size, industry complexity, and platform requirements. We offer packages from ₹25,000/month for basic strategy development to ₹1,50,000/month for comprehensive multi-platform strategies with ongoing optimization. As a leading Social Media Strategy in Mumbai provider, we offer transparent pricing with no hidden fees. Contact us at +91-83695-11877 for a custom quote.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-blue-400/50 overflow-hidden hover:border-blue-400 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center">
                <span className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  Why choose a professional Social Media Strategy in Mumbai?
                </span>
                <svg className="w-6 h-6 text-blue-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                A professional Social Media Strategy in Mumbai ensures your social media efforts are focused, efficient, and effective. We align strategies with business goals, identify target audiences, create content roadmaps, conduct competitive analysis, and optimize for measurable results. Our Social Media Strategy in Mumbai team eliminates guesswork and wasted ad spend through data-driven planning and proven frameworks that deliver consistent growth.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-green-400/50 overflow-hidden hover:border-green-400 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center">
                <span className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">⏱️</span>
                  How long does it take to see results from social media strategy?
                </span>
                <svg className="w-6 h-6 text-green-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Most businesses see initial improvements within 2-3 months of implementing a professional Social Media Strategy in Mumbai. Significant growth typically appears within 4-6 months as the strategy matures. Our Social Media Strategy in Mumbai includes monthly reports showing progress toward goals including follower growth, engagement rates, website traffic, and conversions. We continuously optimize the strategy based on performance data.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 overflow-hidden hover:border-purple-400 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center">
                <span className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">📱</span>
                  What platforms should be included in my social media strategy?
                </span>
                <svg className="w-6 h-6 text-purple-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Platform selection depends on your target audience and business goals. As a Social Media Strategy in Mumbai expert, we analyze your audience demographics, behaviors, and preferences to recommend the right platforms whether Facebook, Instagram, LinkedIn, Twitter, YouTube, Pinterest, or TikTok. We don&apos;t use a one-size-fits-all approach - each Social Media Strategy in Mumbai is customized to your specific needs.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-orange-400/50 overflow-hidden hover:border-orange-400 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center">
                <span className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  What&apos;s included in a Social Media Strategy in Mumbai?
                </span>
                <svg className="w-6 h-6 text-orange-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Our Social Media Strategy in Mumbai includes comprehensive strategy development, audience analysis and persona creation, competitive research, platform selection, content strategy and themes, posting schedule and calendar, visual identity guidelines, engagement tactics, paid advertising recommendations, KPI tracking framework, and monthly performance reports. We provide a complete roadmap for social media success.
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-red-400/50 overflow-hidden hover:border-red-400 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center">
                <span className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">📈</span>
                  How do you measure social media strategy success?
                </span>
                <svg className="w-6 h-6 text-red-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                As a data-driven Social Media Strategy in Mumbai provider, we measure success through comprehensive KPIs including follower growth, engagement rates, reach and impressions, website traffic from social, conversion rates, cost per acquisition, return on ad spend, brand sentiment, and overall ROI. Our Social Media Strategy in Mumbai includes custom dashboards showing all metrics that matter to your business goals with monthly detailed reports.
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-cyan-400/50 overflow-hidden hover:border-cyan-400 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center">
                <span className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">🔍</span>
                  Do you provide competitor analysis in your strategy?
                </span>
                <svg className="w-6 h-6 text-cyan-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Yes! Every Social Media Strategy in Mumbai includes comprehensive competitive analysis. We monitor your competitors&apos; social media activities, analyze their content strategies, identify their successful tactics, discover content gaps and opportunities, and benchmark your performance against industry leaders. This competitive intelligence helps our Social Media Strategy in Mumbai team position you for maximum differentiation and success.
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-indigo-400/50 overflow-hidden hover:border-indigo-400 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center">
                <span className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">⏱️</span>
                  How long does it take to develop a social media strategy?
                </span>
                <svg className="w-6 h-6 text-indigo-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Strategy development typically takes 2-4 weeks depending on complexity. Our Social Media Strategy in Mumbai process includes: Week 1 - Discovery & research, Week 2 - Analysis & planning, Week 3 - Strategy development, Week 4 - Documentation & presentation. We provide a comprehensive strategy document with actionable roadmap, content calendar templates, and implementation guidelines.
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-teal-400/50 overflow-hidden hover:border-teal-400 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center">
                <span className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  Can you help implement the strategy after development?
                </span>
                <svg className="w-6 h-6 text-teal-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Absolutely! Our Social Media Strategy in Mumbai team offers full implementation support. We can manage content creation, community engagement, paid advertising, analytics tracking, and ongoing optimization. We also provide strategy-only services if you have an in-house team, with training sessions, playbooks, and monthly strategy consulting to ensure successful execution.
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-rose-400/50 overflow-hidden hover:border-rose-400 transition-all duration-300">
              <summary className="cursor-pointer p-6 flex justify-between items-center">
                <span className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">💰</span>
                  What are your social media strategy pricing packages?
                </span>
                <svg className="w-6 h-6 text-rose-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Our Social Media Strategy in Mumbai packages: Basic Strategy ₹25,000-₹40,000 (2-3 platforms), Comprehensive Strategy ₹50,000-₹80,000 (4-5 platforms, advanced research), Enterprise Strategy ₹1,00,000+ (multi-brand, global strategy). All include competitive analysis, audience research, content strategy, platform recommendations, and implementation roadmap. Custom packages available based on your specific needs.
              </div>
            </details>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-blue-100 mb-6 text-lg">
              Still have questions? Our Social Media Strategy in Mumbai experts are here to help!
            </p>
            <a href="tel:+918369511877" className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
              <span className="mr-3">📞 Call Now: +91-83695-11877</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📝</span>
              Complete Information
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Professional Social Media Strategy in Mumbai?
            </h2>
          </div>

          <div className="space-y-12">
            {/* Section 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🎯</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">What Makes Great Social Media Strategy in Mumbai?</h3>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      A professional Social Media Strategy in Mumbai brings specialized expertise in creating comprehensive plans that drive measurable business results. With over 10 years of experience and 500+ strategies created, our Social Media Strategy in Mumbai team understands the complexities of platform selection, content planning, audience targeting, and performance optimization across all major social media channels.
                    </p>
                    <p>
                      The best Social Media Strategy in Mumbai doesn&apos;t just focus on posting content randomly. We develop data-driven strategies aligned with your business goals, target audience insights, and industry best practices. Our Social Media Strategy in Mumbai has helped over 150 businesses across industries achieve an average 600% growth rate through strategic planning, competitive analysis, and continuous optimization.
                    </p>
                    <p>
                      What sets a leading Social Media Strategy in Mumbai apart is the ability to connect social media activities directly to business outcomes. We implement comprehensive planning frameworks, audience analysis methodologies, and content strategies that provide clear roadmaps for success. Every recommendation from our Social Media Strategy in Mumbai is backed by data, research, and proven best practices designed to maximize your social media ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">📊</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Strategic Planning Excellence from Social Media Strategy in Mumbai</h3>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Our Social Media Strategy in Mumbai specializes in developing comprehensive strategic plans that cover all aspects of social media success. We begin with thorough business analysis to understand your goals, target audience, competitive landscape, and unique value proposition. This foundation ensures our Social Media Strategy in Mumbai aligns perfectly with your business objectives.
                    </p>
                    <p>
                      As an experienced Social Media Strategy in Mumbai provider, we conduct deep audience analysis to create detailed buyer personas, identify demographics, understand behaviors and preferences, map customer journeys, and discover content consumption patterns. This audience intelligence drives our Social Media Strategy in Mumbai recommendations for platform selection and content strategy.
                    </p>
                    <p>
                      The Social Media Strategy in Mumbai team develops detailed content strategies including content themes and pillars, posting schedules and frequency, visual identity guidelines, engagement tactics, hashtag strategies, and content format mix. Our Social Media Strategy in Mumbai has helped clients generate ₹8Cr+ in revenue through strategic social media planning and execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 - Three Column Services */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🚀</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Strategy Services from Social Media Strategy in Mumbai</h3>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Our Social Media Strategy in Mumbai offers end-to-end strategic planning services covering all aspects of social media success.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                      <div className="text-4xl mb-4">👥</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Audience Analysis</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Deep dive into target audience demographics and behaviors. Our Social Media Strategy in Mumbai creates detailed personas and identifies the best platforms to reach your ideal customers effectively.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                      <div className="text-4xl mb-4">📅</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Content Planning</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Strategic content calendars with themes and posting schedules. The Social Media Strategy in Mumbai provides complete content roadmaps aligned with your marketing goals and audience preferences.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                      <div className="text-4xl mb-4">🔍</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Competitive Analysis</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Monitor competitors and identify opportunities. Our Social Media Strategy in Mumbai analyzes competitive activities to position you for maximum differentiation and market leadership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">📈</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Platform Selection & Optimization by Social Media Strategy in Mumbai</h3>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Our Social Media Strategy in Mumbai helps you choose the right platforms based on where your target audience spends time and how they consume content. We analyze demographics, engagement patterns, and business objectives to recommend the optimal platform mix whether Facebook, Instagram, LinkedIn, Twitter, YouTube, Pinterest, or TikTok.
                    </p>
                    <p>
                      The Social Media Strategy in Mumbai team develops platform-specific strategies that leverage each platform&apos;s unique features and best practices. We create tailored content strategies for each platform including optimal posting times, content formats, engagement tactics, and paid advertising opportunities. This platform-specific approach ensures our Social Media Strategy in Mumbai maximizes results across all channels.
                    </p>
                    <p>
                      As a results-focused Social Media Strategy in Mumbai provider, we continuously optimize platform performance through A/B testing, audience refinement, content optimization, and budget allocation. Our transparent reporting shows exactly how each platform contributes to your business goals. The Social Media Strategy in Mumbai has helped businesses reduce wasted spend by 40% while increasing overall engagement by 600%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">💡</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Content Strategy & Planning by Social Media Strategy in Mumbai</h3>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      A professional Social Media Strategy in Mumbai develops comprehensive content strategies that resonate with your target audience and drive engagement. We identify content themes aligned with your brand values, create content pillars that support business goals, develop posting schedules optimized for audience activity, and plan content formats that maximize platform algorithms.
                    </p>
                    <p>
                      The Social Media Strategy in Mumbai includes detailed content calendars mapping out months of strategic content. We plan content mix across educational, entertaining, promotional, and community-building posts. Our Social Media Strategy in Mumbai ensures consistent brand voice, visual identity, and messaging across all platforms while adapting to each platform&apos;s unique requirements.
                    </p>
                    <p>
                      Our Social Media Strategy in Mumbai also includes crisis management protocols, engagement guidelines, influencer collaboration frameworks, and user-generated content strategies. We provide complete playbooks that empower your team to execute the strategy successfully. The insights from our Social Media Strategy in Mumbai help you create content that drives real business results not just vanity metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 - Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-600 to-pink-600 rounded-3xl p-12 shadow-2xl text-white">
              <div className="flex items-start gap-4 mb-8">
                <div className="text-5xl">🏆</div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Why MyDigital Crown is the Best Social Media Strategy in Mumbai?</h3>
                  <p className="text-blue-100 text-lg leading-relaxed mb-8">
                    As Mumbai&apos;s leading Social Media Strategy in Mumbai provider, we deliver winning strategies through expert planning, data-driven insights, and proven frameworks.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">10+ Years Strategy Expertise</div>
                        <div className="text-blue-100">Proven track record in social media strategic planning</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">500+ Strategies Created</div>
                        <div className="text-blue-100">Successfully developed strategies for diverse industries</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">600% Average Growth Rate</div>
                        <div className="text-blue-100">Clients see 600% average growth from our strategies</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">Data-Driven Planning</div>
                        <div className="text-blue-100">Every strategy backed by research and analytics</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">Comprehensive Audience Analysis</div>
                        <div className="text-blue-100">Deep insights into demographics and behaviors</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">Multi-Platform Expertise</div>
                        <div className="text-blue-100">Master all major social media platforms</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">Dedicated Strategy Consultants</div>
                        <div className="text-blue-100">Expert strategists managing your planning</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">24/7 Strategy Support</div>
                        <div className="text-blue-100">Round-the-clock expert guidance and consultation</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:+918369511877" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                      <span className="mr-2">📞</span>
                      Call Now: +91-83695-11877
                    </a>
                    <Link href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                      <span className="mr-2">🚀</span>
                      Get Free Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Work with the Best Social Media Strategy in Mumbai?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Join 150+ successful businesses building winning social media strategies with data-driven planning
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918369511877" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  <span className="mr-2">📞</span>
                  Call: +91-83695-11877
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  <span className="mr-2">💬</span>
                  Get Free Consultation
                </Link>
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
              Ready to Build Your<br />
              <span className="text-yellow-300">Winning Strategy?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our strategists create a comprehensive social media plan that drives growth and achieves your goals!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Strategy Plan</span>
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
                <span>500+ Strategies Created</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>600% Avg Growth Rate</span>
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
        currentService="/services/social-media-strategy"
        title="Complete Social Media Solutions"
        description="Enhance your social media strategy with our comprehensive digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
