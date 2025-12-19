import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import TrustedBrands from '@/app/components/TrustedBrands'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Social ROI Mumbai | ₹12Cr+ Tracked | Revenue Attribution',
  description: 'Social ROI Mumbai. ₹12Cr+ Revenue Tracked | ROI Measurement & Attribution | Performance Analytics | Maximize Returns. Call +91-83695-11877',
  keywords: [
    // Primary Keywords
    "Social ROI Company in Mumbai", "social roi company Mumbai", "ROI tracking Mumbai", "social media ROI Mumbai", "revenue attribution Mumbai",
    // Quality Keywords
    "best ROI tracking company Mumbai", "professional ROI analyst Mumbai", "expert ROI measurement Mumbai", "top analytics company Mumbai", "certified ROI consultant Mumbai",
    // Service-Specific Keywords
    "performance analytics Mumbai", "ROI measurement Mumbai", "social media analytics Mumbai", "conversion tracking Mumbai", "revenue tracking Mumbai",
    "attribution modeling Mumbai", "marketing ROI Mumbai", "social commerce ROI Mumbai", "campaign ROI Mumbai", "advertising ROI Mumbai",
    // Technical Keywords
    "Google Analytics setup Mumbai", "Facebook pixel tracking Mumbai", "UTM tracking Mumbai", "conversion funnel analysis Mumbai", "multi-touch attribution Mumbai",
    "ROI dashboard Mumbai", "performance reporting Mumbai", "data analytics Mumbai", "metrics tracking Mumbai", "KPI monitoring Mumbai",
    // Business Keywords
    "ROI tracking services Mumbai", "ROI consulting Mumbai", "performance marketing Mumbai", "data-driven marketing Mumbai", "marketing analytics Mumbai",
    "revenue optimization Mumbai", "profit tracking Mumbai"
  ],
  authors: [{ name: "Aditya Pandey", url: "https://mydigital-mu.vercel.app/about" }],
  creator: "MyDigital Crown",
  publisher: "MyDigital Crown",
  category: "Social Media ROI & Analytics Services",
  classification: "ROI Tracking & Performance Analytics",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  openGraph: {
    title: 'Social ROI Company in Mumbai | #1 ROI Tracking Expert 2025',
    description: 'Leading Social ROI Company in Mumbai specializing in ROI measurement, revenue attribution & performance analytics. Track real revenue, measure impact & maximize returns.',
    url: 'https://mydigital-mu.vercel.app/services/social-roi',
    siteName: 'MyDigital Crown',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Social ROI Company in Mumbai - MyDigital Crown',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social ROI Company in Mumbai | #1 ROI Tracking Expert 2025',
    description: 'Leading Social ROI Company in Mumbai specializing in ROI measurement, revenue attribution & performance analytics. ₹12Cr+ tracked!',
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop'],
  },
  alternates: {
    canonical: 'https://mydigital-mu.vercel.app/services/social-roi',
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
      "description": "Leading Social ROI Company in Mumbai specializing in ROI measurement, revenue attribution, and performance analytics.",
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
      "@id": "https://mydigital-mu.vercel.app/services/social-roi#service",
      "serviceType": "Social ROI Company in Mumbai",
      "provider": {
        "@id": "https://mydigital-mu.vercel.app/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Social ROI Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Revenue Attribution Tracking",
              "description": "Multi-touch attribution and revenue tracking for social media campaigns"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Performance Analytics",
              "description": "Comprehensive analytics tracking all key performance metrics and KPIs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Campaign ROI Measurement",
              "description": "Detailed ROI calculation and analysis for individual campaigns"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversion Tracking",
              "description": "Advanced conversion tracking across all touchpoints and platforms"
            }
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://mydigital-mu.vercel.app/services/social-roi#localbusiness",
      "name": "MyDigital Crown - Social ROI Company in Mumbai",
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
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
      "url": "https://mydigital-mu.vercel.app/services/social-roi",
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
      "@id": "https://mydigital-mu.vercel.app/services/social-roi#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Social ROI Company in Mumbai do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Social ROI Company in Mumbai specializes in measuring and optimizing the return on investment from social media campaigns. We track revenue attribution, analyze performance metrics, measure conversion rates, and provide detailed reports that prove the value of your social media investments."
          }
        },
        {
          "@type": "Question",
          "name": "How do you measure social media ROI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use advanced tracking tools including multi-touch attribution models, conversion pixels, UTM parameters, and analytics platforms to measure revenue generated from social media. We track the complete customer journey from first touch to final conversion."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose a professional Social ROI Company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional Social ROI Companies have expertise in advanced attribution models, tracking tools, and analytics platforms. We provide accurate measurement, transparent reporting, and actionable insights that help you optimize campaigns and maximize returns."
          }
        },
        {
          "@type": "Question",
          "name": "What metrics do you track for social media ROI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We track comprehensive metrics including revenue, conversions, cost per acquisition, customer lifetime value, engagement rates, click-through rates, and return on ad spend. We provide custom dashboards showing all metrics that matter to your business."
          }
        },
        {
          "@type": "Question",
          "name": "How much does ROI tracking cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ROI tracking costs vary based on campaign complexity, number of platforms, and tracking requirements. Contact us at +91-83695-11877 for a custom quote. We offer transparent pricing with no hidden fees."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mydigital-mu.vercel.app/services/social-roi#breadcrumb",
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
          "name": "Social ROI Company in Mumbai",
          "item": "https://mydigital-mu.vercel.app/services/social-roi"
        }
      ]
    }
  ]
};

export default function SocialROIPage() {
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
        aria-label="Social Media ROI Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">ROI Measurement Experts</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Social ROI Company In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  💰 Track <span className="text-yellow-300">Real Revenue</span>, <span className="text-green-300">Measure Impact</span> & <span className="text-orange-300">Maximize Returns</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  ROI Tracking | Attribution Models | Revenue Analytics | Performance Metrics
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
                    <span>Track Your ROI</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">₹2.5Cr+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Revenue Tracked</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">350%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Avg ROI Increase</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">200+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Campaigns Measured</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Transparent Reports</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Social ROI Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">💰</span>
              ROI Measurement Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Track Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Social Media ROI</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ROI tracking that proves the value of your social media investments and drives better business decisions
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                    alt="Social Media ROI Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 Data-Driven Insights</h3>
                <p className="text-gray-700 leading-relaxed">
                  Measure every metric that matters - from engagement to conversions to actual revenue generated.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💡 Prove Your Value</h3>
                <p className="text-gray-700 leading-relaxed">
                  Show stakeholders exactly how social media contributes to business goals and bottom line.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Optimize Performance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Identify what&apos;s working, eliminate waste, and maximize returns on every campaign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social ROI Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our ROI <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive ROI measurement services to track, analyze, and optimize your social media investments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💰</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Revenue Attribution</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Track revenue directly attributed to your social media campaigns.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Multi-Touch Attribution</li>
                  <li className="flex items-start gap-2">✓ Revenue Tracking</li>
                  <li className="flex items-start gap-2">✓ Customer Journey Mapping</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Performance Analytics</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Comprehensive analytics tracking all key performance metrics.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ KPI Tracking</li>
                  <li className="flex items-start gap-2">✓ Engagement Metrics</li>
                  <li className="flex items-start gap-2">✓ Conversion Rates</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Campaign ROI</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Measure ROI for individual campaigns and overall strategy.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Campaign Analysis</li>
                  <li className="flex items-start gap-2">✓ Cost Per Acquisition</li>
                  <li className="flex items-start gap-2">✓ ROI Calculation</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📈</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Conversion Tracking</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Track conversions across all touchpoints and platforms.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Pixel Implementation</li>
                  <li className="flex items-start gap-2">✓ Event Tracking</li>
                  <li className="flex items-start gap-2">✓ Funnel Analysis</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📋</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Custom Reports</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Detailed reports that prove value to stakeholders.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Executive Dashboards</li>
                  <li className="flex items-start gap-2">✓ Monthly Reports</li>
                  <li className="flex items-start gap-2">✓ ROI Visualization</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Competitive Benchmarking</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Compare your ROI against industry standards and competitors.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Industry Benchmarks</li>
                  <li className="flex items-start gap-2">✓ Competitor Analysis</li>
                  <li className="flex items-start gap-2">✓ Performance Gaps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories - Real Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -top-48 -left-24 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl top-1/2 -right-24 animate-pulse delay-1000"></div>
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 left-1/2 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">❤️</span>
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Mumbai Businesses Say About Us
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real results from real businesses working with the best Social ROI Company in Mumbai
            </p>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl font-black text-transparent bg-gradient-to-br from-yellow-300 to-orange-300 bg-clip-text mb-2">8+</div>
              <div className="text-white text-sm font-semibold">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl font-black text-transparent bg-gradient-to-br from-green-300 to-emerald-300 bg-clip-text mb-2">95%+</div>
              <div className="text-white text-sm font-semibold">Client Retention</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl font-black text-transparent bg-gradient-to-br from-blue-300 to-cyan-300 bg-clip-text mb-2">300%</div>
              <div className="text-white text-sm font-semibold">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl font-black text-transparent bg-gradient-to-br from-purple-300 to-pink-300 bg-clip-text mb-2">50+</div>
              <div className="text-white text-sm font-semibold">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl font-black text-transparent bg-gradient-to-br from-pink-300 to-rose-300 bg-clip-text mb-2">5.0</div>
              <div className="text-white text-sm font-semibold">Client Rating</div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Testimonial 1 - Farhan Furniturewalla */}
            <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl text-3xl">
                💼
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    FF
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Farhan Furniturewalla</div>
                    <div className="text-blue-200 text-sm">Furniture E-commerce</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-blue-50 leading-relaxed mb-4">
                  &quot;The Social ROI Company in Mumbai team transformed our furniture e-commerce business with precise ROI tracking. We can now see exactly which social campaigns drive revenue. Our online sales increased by 200%!&quot;
                </blockquote>
                <div className="text-yellow-300 font-bold">📈 200% Increase in Online Sales</div>
              </div>
            </div>

            {/* Testimonial 2 - Dr. Shrish Kumar */}
            <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl text-3xl">
                🏥
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    SK
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Dr. Shrish Kumar</div>
                    <div className="text-blue-200 text-sm">Healthcare Services</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-blue-50 leading-relaxed mb-4">
                  &quot;Outstanding ROI measurement services for our hospital patient portal. The Social ROI Company in Mumbai team helped us track patient acquisition costs and optimize our social media spend. Now getting 150+ new patients monthly!&quot;
                </blockquote>
                <div className="text-blue-300 font-bold">📊 150+ New Patients Monthly</div>
              </div>
            </div>

            {/* Testimonial 3 - Umesh Batkar */}
            <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl text-3xl">
                🎓
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    UB
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Umesh Batkar</div>
                    <div className="text-blue-200 text-sm">Educational Institute</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-blue-50 leading-relaxed mb-4">
                  &quot;Data-driven ROI tracking transformed our educational platform marketing. The Social ROI Company in Mumbai helped us identify which social channels drive admissions. Our student enrollment increased by 180%!&quot;
                </blockquote>
                <div className="text-indigo-300 font-bold">🎯 180% Increase in Admissions</div>
              </div>
            </div>

            {/* Testimonial 4 - Shagufta Khan */}
            <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl text-3xl">
                🧽
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    SK
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Shagufta Khan</div>
                    <div className="text-blue-200 text-sm">Cleaning Services</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-blue-50 leading-relaxed mb-4">
                  &quot;Transparent ROI reporting helped us understand exactly how social media drives our cleaning service bookings. The Social ROI Company in Mumbai team made complex analytics simple. Getting 50+ service bookings weekly now!&quot;
                </blockquote>
                <div className="text-green-300 font-bold">✨ 50+ Service Bookings Weekly</div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-blue-100 mb-6 text-lg">
              Join 50+ successful businesses in Mumbai who trust us for ROI tracking
            </p>
            <a href="tel:+918369511877" className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
              <span className="mr-3">📞 Call Now: +91-83695-11877</span>
            </a>
          </div>
        </div>
      </section>

      {/* Premium Digital Marketing Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl hover:shadow-2xl transition-all">
              <span className="text-2xl mr-3">🚀</span>
              <span>Premium Digital Marketing Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">50+ Services</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">To Skyrocket Your Growth</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-semibold mb-4">
              From <span className="text-blue-600">SEO</span> to <span className="text-purple-600">Social Media</span>, <span className="text-pink-600">Google Ads</span> to <span className="text-orange-600">Web Development</span>
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Everything your business needs to dominate online 🚀
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Services */}
            <Link href="/services/search-engine-optimisation" className="group relative rounded-3xl overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop"
                  alt="SEO Services"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-blue-700/95 group-hover:from-blue-800/98 group-hover:to-blue-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                  🔍
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Search Engine Optimization</h3>
                <p className="text-blue-100 mb-6">Rank #1 on Google with proven SEO strategies</p>
                <div className="flex items-center text-white font-semibold">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Social Media Marketing */}
            <Link href="/services/social-media-marketing" className="group relative rounded-3xl overflow-hidden border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop"
                  alt="Social Media Marketing"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900/95 to-rose-700/95 group-hover:from-pink-800/98 group-hover:to-rose-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                  📱
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Social Media Marketing</h3>
                <p className="text-pink-100 mb-6">Engage audiences & build brand presence</p>
                <div className="flex items-center text-white font-semibold">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Google Ads */}
            <Link href="/services/google-ads" className="group relative rounded-3xl overflow-hidden border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Google Ads PPC"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 to-emerald-700/95 group-hover:from-green-800/98 group-hover:to-emerald-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Google Ads PPC</h3>
                <p className="text-green-100 mb-6">Drive instant traffic with targeted campaigns</p>
                <div className="flex items-center text-white font-semibold">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Web Development */}
            <Link href="/services/web-development" className="group relative rounded-3xl overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                  alt="Web Development"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 to-indigo-700/95 group-hover:from-purple-800/98 group-hover:to-indigo-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                  💻
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Web Development</h3>
                <p className="text-purple-100 mb-6">Custom websites that convert visitors</p>
                <div className="flex items-center text-white font-semibold">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Content Marketing */}
            <Link href="/services/content-marketing" className="group relative rounded-3xl overflow-hidden border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
                  alt="Content Marketing"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/95 to-amber-700/95 group-hover:from-orange-800/98 group-hover:to-amber-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                  📝
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Content Marketing</h3>
                <p className="text-orange-100 mb-6">Engage & convert with quality content</p>
                <div className="flex items-center text-white font-semibold">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Email Marketing */}
            <Link href="/services/email-marketing" className="group relative rounded-3xl overflow-hidden border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop"
                  alt="Email Marketing"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/95 to-blue-700/95 group-hover:from-cyan-800/98 group-hover:to-blue-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                  ✉️
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Email Marketing</h3>
                <p className="text-cyan-100 mb-6">Nurture leads & drive conversions via email</p>
                <div className="flex items-center text-white font-semibold">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
              <span className="mr-3">View All 50+ Services</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

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
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>💰</div>
          <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>📊</div>
          <div className="absolute bottom-32 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>📈</div>
          <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>🎯</div>
          <div className="absolute top-1/3 left-1/2 text-4xl opacity-20 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}>💬</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Everything you need to know about Social ROI tracking services in Mumbai ✨
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">💰</span>
                  <span>What does a Social ROI Company in Mumbai do?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                A Social ROI Company in Mumbai specializes in measuring and optimizing the return on investment from social media campaigns. We track revenue attribution, analyze performance metrics, measure conversion rates, implement multi-touch attribution models, and provide detailed reports that prove the value of your social media investments. Our Social ROI Company in Mumbai expertise helps businesses understand exactly how their social media spending translates to real business results.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">📊</span>
                  <span>How much does Social ROI tracking cost in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                ROI tracking costs vary based on campaign complexity, number of platforms tracked, and reporting requirements. As a leading Social ROI Company in Mumbai, we offer transparent pricing starting from ₹15,000/month for basic tracking to ₹75,000/month for enterprise-level attribution. Contact us at +91-83695-11877 for a custom quote tailored to your specific tracking needs. We provide clear pricing with no hidden fees.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🏆</span>
                  <span>Why choose a professional Social ROI Company?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                A professional Social ROI Company in Mumbai has expertise in advanced attribution models, tracking tools, analytics platforms, and data interpretation. We implement accurate measurement systems, provide transparent reporting, offer actionable insights, identify optimization opportunities, and benchmark against industry standards. Our Social ROI Company in Mumbai team eliminates guesswork and provides proven frameworks that maximize your social media returns.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📈</span>
                  <span>What metrics do you track for social media ROI?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                As a comprehensive Social ROI Company in Mumbai, we track revenue generated, conversion rates, cost per acquisition (CPA), customer lifetime value (CLV), return on ad spend (ROAS), engagement rates, click-through rates, social traffic, assisted conversions, and multi-channel attribution. We provide custom dashboards showing all metrics that matter to your business goals and provide detailed monthly reports.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">⏱️</span>
                  <span>How long does it take to see ROI results?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Initial tracking setup takes 1-2 weeks. You&apos;ll start seeing preliminary data within the first month. Meaningful ROI trends become clear after 2-3 months of data collection. Our Social ROI Company in Mumbai provides weekly progress updates and monthly comprehensive reports. Most clients see significant optimization opportunities within the first 90 days of working with us.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🎯</span>
                  <span>What attribution models do you use?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Our Social ROI Company in Mumbai implements multiple attribution models including first-touch, last-touch, linear, time-decay, position-based, and data-driven attribution. We help you choose the right model based on your business goals and customer journey. We also provide custom attribution models tailored to your specific sales cycle and customer behavior patterns.
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔍</span>
                  <span>Which social platforms can you track ROI for?</span>
                </span>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                As a full-service Social ROI Company in Mumbai, we track ROI across all major platforms including Facebook, Instagram, LinkedIn, Twitter, YouTube, Pinterest, TikTok, and Snapchat. We also track influencer marketing ROI, social commerce, and cross-platform attribution. Our unified dashboard provides a complete view of your social media performance across all channels.
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🛠️</span>
                  <span>What tools do you use for ROI tracking?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Our Social ROI Company in Mumbai uses industry-leading tools including Google Analytics 4, Facebook Pixel, LinkedIn Insight Tag, Google Tag Manager, custom UTM tracking, conversion APIs, CRM integration, and custom dashboards. We also implement advanced tools like Mixpanel, Segment, and custom data warehouses for enterprise clients requiring sophisticated attribution.
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-indigo-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">⏱️</span>
                  <span>How long does ROI tracking setup take?</span>
                </span>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Basic ROI tracking setup takes 1-2 weeks, comprehensive multi-channel tracking 2-4 weeks, enterprise attribution modeling 4-6 weeks. Our Social ROI Company in Mumbai handles technical implementation, testing, validation, and team training. You&apos;ll start seeing initial data immediately, with full attribution insights within 30-60 days as data accumulates.
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:border-teal-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-teal-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🎯</span>
                  <span>Can you track ROI for both organic and paid social?</span>
                </span>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Absolutely! Our Social ROI Company in Mumbai tracks both organic and paid social media ROI. For organic, we measure engagement value, brand awareness lift, community growth, and indirect conversions. For paid, we track direct conversions, ROAS, cost per acquisition, and lifetime value. We provide separate and combined reporting to show the full impact of your social media investments.
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-rose-500/20 hover:border-rose-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-rose-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">💰</span>
                  <span>What are your ROI tracking pricing packages?</span>
                </span>
                <svg className="w-7 h-7 text-rose-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Our Social ROI Company in Mumbai packages: Basic Tracking ₹20,000-₹35,000 (setup + 3 months), Advanced Analytics ₹40,000-₹70,000 (multi-channel + dashboards), Enterprise Attribution ₹80,000-₹1,50,000 (custom models + integrations). All include setup, configuration, training, monthly reports, and ongoing optimization. Monthly retainers available for continuous tracking and consulting.
              </div>
            </details>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-blue-100 mb-6 text-lg">
              Still have questions? Our Social ROI Company in Mumbai experts are here to help!
            </p>
            <a href="tel:+918369511877" className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
              <span className="mr-3">📞 Call Now: +91-83695-11877</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl hover:shadow-2xl transition-all">
              <span className="text-2xl mr-3">📝</span>
              <span>Complete Information</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Why Choose a Professional</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">Social ROI Company in Mumbai?</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-semibold mb-4">
              Deep dive into <span className="text-blue-600">ROI tracking</span>, <span className="text-purple-600">analytics</span>, and <span className="text-pink-600">performance optimization</span>
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Everything you need to know about maximizing your social media returns 📊
            </p>
          </div>

          <div className="space-y-12">
            {/* Section 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🎯</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">What Makes a Great Social ROI Company in Mumbai?</h3>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      A professional Social ROI Company in Mumbai brings specialized expertise in measuring, tracking, and optimizing the return on investment from social media campaigns. With over 8 years of experience and ₹2.5Cr+ in tracked revenue, our Social ROI Company in Mumbai understands the complexities of multi-channel attribution, customer journey mapping, and conversion tracking across all major social platforms.
                    </p>
                    <p>
                      The best Social ROI Company in Mumbai doesn&apos;t just track vanity metrics like likes and shares. We focus on metrics that matter to your business: revenue generated, cost per acquisition, customer lifetime value, return on ad spend, and actual business impact. Our Social ROI Company in Mumbai has helped over 50 businesses across industries maximize their social media returns through data-driven insights and transparent reporting.
                    </p>
                    <p>
                      What sets a leading Social ROI Company in Mumbai apart is the ability to connect social media activities directly to business outcomes. We implement advanced tracking systems, multi-touch attribution models, and comprehensive analytics that provide a complete picture of your social media performance. Every recommendation from our Social ROI Company in Mumbai is backed by data and designed to maximize your returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">💰</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">ROI Measurement Excellence from Social ROI Company in Mumbai</h3>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Our Social ROI Company in Mumbai specializes in implementing comprehensive ROI measurement systems that track every rupee spent and every rupee earned from your social media campaigns. We use industry-leading tools including Google Analytics 4, Facebook Pixel, LinkedIn Insight Tag, and custom tracking solutions to capture complete customer journey data.
                    </p>
                    <p>
                      As an experienced Social ROI Company in Mumbai, we implement multiple attribution models to give you a complete understanding of how social media contributes to conversions. From first-touch attribution that shows initial discovery to last-touch attribution that tracks final conversion, our Social ROI Company in Mumbai provides the insights you need to optimize spending across all social channels.
                    </p>
                    <p>
                      The Social ROI Company in Mumbai team conducts detailed conversion funnel analysis to identify drop-off points and optimization opportunities. We track micro-conversions like content engagement and macro-conversions like purchases or leads, providing a complete picture of campaign performance. Our Social ROI Company in Mumbai has helped clients achieve an average 350% increase in social media ROI through data-driven optimization.
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
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive ROI Services from Social ROI Company in Mumbai</h3>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Our Social ROI Company in Mumbai offers end-to-end ROI measurement services covering all aspects of social media performance tracking and optimization.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                      <div className="text-4xl mb-4">📊</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Revenue Attribution</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Track revenue directly from social media with multi-touch attribution models. Our Social ROI Company in Mumbai implements comprehensive tracking systems that connect social activities to actual sales and revenue generation.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                      <div className="text-4xl mb-4">📈</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Performance Analytics</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Comprehensive analytics tracking all KPIs that matter. The Social ROI Company in Mumbai provides custom dashboards showing engagement, conversions, and ROI across all social platforms in real-time.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                      <div className="text-4xl mb-4">🎯</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Campaign ROI</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Measure ROI for individual campaigns and overall strategy. Our Social ROI Company in Mumbai calculates cost per acquisition, return on ad spend, and customer lifetime value for every campaign.
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
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Advanced Tracking & Analytics by Social ROI Company in Mumbai</h3>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Our Social ROI Company in Mumbai implements advanced tracking technologies including conversion pixels, UTM parameters, event tracking, and custom conversion APIs. We track user behavior across all touchpoints from initial social media interaction through final conversion, providing complete visibility into customer journey.
                    </p>
                    <p>
                      The Social ROI Company in Mumbai team sets up comprehensive goal tracking in Google Analytics, Facebook Events Manager, and other analytics platforms. We track everything from micro-conversions like video views and content downloads to macro-conversions like purchases and lead submissions. This granular tracking allows our Social ROI Company in Mumbai to identify exactly what drives results.
                    </p>
                    <p>
                      As a data-focused Social ROI Company in Mumbai, we provide weekly performance reports and monthly comprehensive ROI analysis. Our transparent reporting shows exactly where your social media budget is going and what results it&apos;s generating. The Social ROI Company in Mumbai has helped businesses reduce wasted ad spend by an average of 30% while increasing overall ROI by 350%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🔍</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Data-Driven Optimization by Social ROI Company in Mumbai</h3>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      A professional Social ROI Company in Mumbai doesn&apos;t just measure performance – we use data to drive continuous optimization. Our Social ROI Company in Mumbai analyzes performance data to identify winning content, optimal posting times, high-converting audiences, and best-performing campaigns. We then use these insights to maximize your social media returns.
                    </p>
                    <p>
                      The Social ROI Company in Mumbai conducts A/B testing across all campaign elements including ad creative, copy, targeting, and bidding strategies. We test different attribution models to find the one that best represents your customer journey. Our Social ROI Company in Mumbai provides actionable recommendations based on data analysis, not guesswork.
                    </p>
                    <p>
                      Our Social ROI Company in Mumbai also performs competitive benchmarking to compare your performance against industry standards. We track competitor social media activity and ROI benchmarks to ensure you&apos;re staying ahead. The insights from our Social ROI Company in Mumbai help you identify opportunities and threats before they impact your bottom line.
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
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Why MyDigital Crown is the Best Social ROI Company in Mumbai?</h3>
                  <p className="text-blue-100 text-lg leading-relaxed mb-8">
                    As Mumbai&apos;s leading Social ROI Company in Mumbai, we deliver measurable results through expert tracking, transparent reporting, and data-driven optimization.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">8+ Years ROI Expertise</div>
                        <div className="text-blue-100">Proven track record in social media ROI measurement</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">₹2.5Cr+ Revenue Tracked</div>
                        <div className="text-blue-100">Successfully tracked and optimized ₹2.5Cr+ in social revenue</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">350% Average ROI Increase</div>
                        <div className="text-blue-100">Clients see 350% average increase in social media ROI</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">Multi-Platform Attribution</div>
                        <div className="text-blue-100">Track ROI across all social platforms in one dashboard</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">100% Transparent Reporting</div>
                        <div className="text-blue-100">Clear, comprehensive reports showing exactly where money goes</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">Advanced Analytics Tools</div>
                        <div className="text-blue-100">Industry-leading tracking and attribution technology</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">Dedicated ROI Experts</div>
                        <div className="text-blue-100">Certified analytics professionals managing your tracking</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">24/7 Support & Monitoring</div>
                        <div className="text-blue-100">Round-the-clock tracking and expert support</div>
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
                Ready to Work with the Best Social ROI Company in Mumbai?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Join 50+ successful businesses maximizing their social media ROI with data-driven tracking and optimization
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
              Ready to Prove Your<br />
              <span className="text-yellow-300">Social Media Value?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let us track, measure, and optimize your social media ROI with data-driven insights and transparent reporting!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Start ROI Tracking</span>
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
                <span>ROI Measurement Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>₹12Cr+ Revenue Tracked</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>850% Avg ROI Increase</span>
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
        currentService="/services/social-roi"
        title="Complete Social Media Solutions"
        description="Enhance your social media ROI with our comprehensive digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
