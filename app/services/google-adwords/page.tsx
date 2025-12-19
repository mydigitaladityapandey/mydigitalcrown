import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import TrustedBrands from '@/app/components/TrustedBrands'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Google Ads Mumbai | PPC Management Experts | MyDigital',
  description: 'Google AdWords Services Mumbai. 400% ROI | -40% CPC | Expert PPC Management | Certified Google Partners. Call +91-83695-11877',
  keywords: ['google adwords', 'google ads mumbai', 'ppc management', 'search advertising', 'google ads campaign', 'adwords expert mumbai', 'ppc agency', 'google advertising', 'paid search marketing', 'adwords optimization', 'google ads consultant', 'ppc specialist', 'search engine marketing', 'google ads management', 'adwords agency mumbai', 'ppc campaign', 'google display ads', 'shopping ads', 'remarketing ads', 'conversion tracking', 'quality score optimization', 'bid management', 'keyword research', 'ad copywriting', 'landing page optimization', 'google analytics setup', 'roi tracking', 'cpc optimization', 'search network ads', 'display network ads', 'video ads youtube', 'app promotion ads', 'local ads mumbai', 'google my business ads', 'certified google partner', 'adwords reporting', 'performance marketing', 'lead generation ads', 'ecommerce ads', 'b2b google ads'],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  alternates: {
    canonical: 'https://www.mydigitalcrown.in/services/google-adwords'
  },
  openGraph: {
    title: 'Google AdWords Services Mumbai | PPC Management Experts',
    description: 'Professional Google AdWords management. 400% ROI, -40% CPC, 24/7 optimization. Certified Google Partners. Call +91-83695-11877',
    url: 'https://www.mydigitalcrown.in/services/google-adwords',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.mydigitalcrown.in/images/google-adwords-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Google AdWords Services Mumbai'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google AdWords Services Mumbai | PPC Experts',
    description: 'Expert Google AdWords management. Lower CPC, Higher ROI. Call +91-83695-11877',
    images: ['https://www.mydigitalcrown.in/images/google-adwords-mumbai.jpg']
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
  category: 'Digital Marketing Services',
  classification: 'Google AdWords, PPC Management, Search Advertising',
}

export default function GoogleAdWordsPage() {
  // Enhanced Schema.org structured data for SEO/VSO/ASO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // Service Schema
      {
        "@type": "Service",
        "serviceType": "Google AdWords Management",
        "provider": {
          "@type": "Organization",
          "name": "MyDigital Crown",
          "url": "https://www.mydigitalcrown.in",
          "logo": "https://www.mydigitalcrown.in/logo.png",
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
            "contactType": "Customer Service",
            "areaServed": "IN",
            "availableLanguage": ["Hindi", "English", "Marathi"]
          }
        },
        "areaServed": {
          "@type": "City",
          "name": "Mumbai"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "180"
        }
      },
      // Organization Schema
      {
        "@type": "Organization",
        "name": "MyDigital Crown",
        "url": "https://www.mydigitalcrown.in",
        "logo": "https://www.mydigitalcrown.in/logo.png",
        "description": "Leading Google AdWords management company in Mumbai offering PPC campaigns, optimization, and ROI tracking",
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
          "contactType": "Sales",
          "areaServed": "IN"
        }
      },
      // WebPage Schema
      {
        "@type": "WebPage",
        "name": "Google AdWords Services Mumbai",
        "description": "Professional Google AdWords management services in Mumbai with PPC optimization",
        "url": "https://www.mydigitalcrown.in/services/google-adwords"
      },
      // BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.mydigitalcrown.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.mydigitalcrown.in/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Google AdWords",
            "item": "https://www.mydigitalcrown.in/services/google-adwords"
          }
        ]
      },
      // LocalBusiness Schema
      {
        "@type": "LocalBusiness",
        "name": "MyDigital Crown - Google AdWords Services",
        "image": "https://www.mydigitalcrown.in/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Chembur",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400071",
          "addressCountry": "IN"
        },
        "telephone": "+91-83695-11877",
        "priceRange": "₹₹",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "180"
        }
      }
    ]
  };

  return (
    <>
      {/* Enhanced Schema Markup for SEO/VSO/ASO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Noscript fallback for crawlers */}
      <noscript>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Google AdWords Services in Mumbai - MyDigital Crown</h1>
          <p>Expert Google AdWords management. 400% ROI, -40% CPC. Call +91-83695-11877 for free consultation.</p>
        </div>
      </noscript>

      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Google AdWords Services Mumbai Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s Certified Google AdWords Experts</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Google AdWords In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  📈 Drive <span className="text-yellow-300">Quality Traffic</span>, <span className="text-green-300">Lower CPC</span> & <span className="text-orange-300">Higher Conversions</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Campaign Setup | Optimization | Bid Management | Performance Tracking
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    <span>Launch Your Campaign</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">400%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">ROI Increase</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">-40%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Lower CPC</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">18%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Conv. Rate</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">24/7</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Optimization</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Google AdWords Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎯</span>
              AdWords Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Google AdWords</span> Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional AdWords management that delivers measurable results and maximum ROI
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                    alt="Google AdWords Management Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Strategic Campaign Setup</h3>
                <p className="text-gray-700 leading-relaxed">
                  Expert campaign structure with well-researched keywords, compelling ad copy, and optimized landing pages for maximum quality score.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 Continuous Optimization</h3>
                <p className="text-gray-700 leading-relaxed">
                  Daily monitoring and optimization of bids, keywords, and ad performance. A/B testing to constantly improve conversion rates.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Cost-Effective Management</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reduce wasted ad spend with negative keywords, geo-targeting, and schedule optimization. Every rupee counts towards your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdWords Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our AdWords <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive Google AdWords management for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔑</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Keyword Research</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Deep keyword analysis to find high-intent, low-competition keywords that drive qualified traffic at optimal costs.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Competitor Analysis</li>
                  <li className="flex items-start gap-2">✓ Long-tail Keywords</li>
                  <li className="flex items-start gap-2">✓ Negative Keywords</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">✍️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ad Copywriting</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Persuasive ad copy that stands out in search results and drives clicks. Clear calls-to-action that convert.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Compelling Headlines</li>
                  <li className="flex items-start gap-2">✓ Ad Extensions</li>
                  <li className="flex items-start gap-2">✓ A/B Testing</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💵</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Bid Management</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Smart bidding strategies that maximize conversions while keeping costs under control. Real-time bid adjustments.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Automated Bidding</li>
                  <li className="flex items-start gap-2">✓ Manual Optimization</li>
                  <li className="flex items-start gap-2">✓ Budget Control</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📄</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Landing Page Optimization</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Optimize landing pages for higher quality scores and better conversion rates. Fast load times and clear messaging.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Quality Score Improvement</li>
                  <li className="flex items-start gap-2">✓ Conversion Optimization</li>
                  <li className="flex items-start gap-2">✓ Mobile Optimization</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Conversion Tracking</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Comprehensive tracking setup to measure every conversion. Track calls, forms, purchases, and custom actions.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Google Analytics Setup</li>
                  <li className="flex items-start gap-2">✓ Goal Tracking</li>
                  <li className="flex items-start gap-2">✓ ROI Attribution</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Performance Reports</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Detailed monthly reports with insights and recommendations. Transparent reporting on all key metrics and ROI.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Custom Dashboards</li>
                  <li className="flex items-start gap-2">✓ Monthly Analytics</li>
                  <li className="flex items-start gap-2">✓ Strategy Recommendations</li>
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

      {/* Voice Search Optimization Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Quick Answers for Voice Search
            </h2>
            <p className="text-xl text-gray-600">
              Common Google AdWords questions answered instantly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Where to find Google AdWords experts in Mumbai?</h3>
              <p className="text-gray-700">MyDigital Crown offers certified Google AdWords management across Mumbai. We&apos;re Google Partners with 8+ years experience, 400% average ROI, and transparent reporting. Serving Andheri, Bandra, BKC, and all Mumbai areas!</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-lg text-gray-900 mb-3">How much does Google AdWords cost?</h3>
              <p className="text-gray-700">Campaign setup: ₹15K-₹50K. Monthly management: ₹10K-₹1L+ (based on ad spend). Minimum ad budget: ₹20K/month recommended. We work with budgets from ₹500/day to ₹50K+/day. Free campaign audit available!</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-lg text-gray-900 mb-3">When will I see AdWords results?</h3>
              <p className="text-gray-700">Initial traffic: 24-48 hours after campaign launch. Optimized performance: 2-4 weeks. Best ROI: 2-3 months with continuous optimization. We provide weekly reports tracking clicks, conversions, and ROI!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <span className="text-2xl mr-3 animate-pulse">❓</span>
              <span className="text-lg">Frequently Asked Questions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Got <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Questions?</span>
              <br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">We&apos;ve Got Answers!</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about Google AdWords in Mumbai ✨
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4">
                  <span className="text-4xl">🎯</span>
                  <span>What is Google AdWords and how does it work?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p><strong>Google AdWords</strong> (now Google Ads) is a pay-per-click advertising platform where your ads appear on Google search results and partner websites. You bid on keywords, create compelling ads, and only pay when someone clicks. We handle keyword research, ad copywriting, bid management, and continuous optimization to maximize your ROI while minimizing cost-per-click.</p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4">
                  <span className="text-4xl">💰</span>
                  <span>How much does Google AdWords cost in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">Google AdWords costs consist of two parts:</p>
                <ul className="space-y-2">
                  <li>💎 <strong>Campaign Setup:</strong> ₹15,000 - ₹50,000 (one-time)</li>
                  <li>💎 <strong>Monthly Management:</strong> ₹10,000 - ₹1,00,000+ (10-20% of ad spend)</li>
                  <li>💎 <strong>Ad Budget:</strong> ₹20,000 - ₹5,00,000+/month (paid to Google)</li>
                  <li>💎 <strong>Recommended Starting Budget:</strong> ₹500-₹1,000/day</li>
                </ul>
                <p className="mt-4">We work with all budget sizes and provide free campaign audits to estimate your specific costs and potential ROI.</p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4">
                  <span className="text-4xl">⏱️</span>
                  <span>How long does it take to see results?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">Timeline for Google AdWords results:</p>
                <ul className="space-y-2">
                  <li>⚡ <strong>Initial Traffic:</strong> 24-48 hours after campaign launch</li>
                  <li>⚡ <strong>First Conversions:</strong> 3-7 days (depends on industry)</li>
                  <li>⚡ <strong>Optimized Performance:</strong> 2-4 weeks of testing and optimization</li>
                  <li>⚡ <strong>Best ROI:</strong> 2-3 months with continuous optimization</li>
                  <li>⚡ <strong>Quality Score Improvement:</strong> 4-8 weeks</li>
                </ul>
                <p className="mt-4">We provide <strong>weekly performance reports</strong> tracking clicks, conversions, cost-per-click, and ROI from day one!</p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4">
                  <span className="text-4xl">🔑</span>
                  <span>What&apos;s included in your AdWords management?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">Our comprehensive AdWords management includes:</p>
                <ul className="space-y-2">
                  <li>✓ <strong>Keyword Research:</strong> High-intent, low-competition keywords</li>
                  <li>✓ <strong>Campaign Setup:</strong> Structure, ad groups, targeting</li>
                  <li>✓ <strong>Ad Copywriting:</strong> Compelling headlines and descriptions</li>
                  <li>✓ <strong>Bid Management:</strong> Daily optimization for best CPC</li>
                  <li>✓ <strong>Landing Page Optimization:</strong> Improve quality score</li>
                  <li>✓ <strong>A/B Testing:</strong> Continuous ad and landing page tests</li>
                  <li>✓ <strong>Conversion Tracking:</strong> Google Analytics setup</li>
                  <li>✓ <strong>Negative Keywords:</strong> Eliminate wasted spend</li>
                  <li>✓ <strong>Monthly Reports:</strong> Detailed performance analytics</li>
                  <li>✓ <strong>Strategy Calls:</strong> Regular optimization discussions</li>
                </ul>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4">
                  <span className="text-4xl">📊</span>
                  <span>How do you measure campaign success?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">We track multiple KPIs to ensure campaign success:</p>
                <ul className="space-y-2">
                  <li>📈 <strong>Return on Ad Spend (ROAS):</strong> Revenue vs. ad cost</li>
                  <li>📈 <strong>Cost Per Acquisition (CPA):</strong> Cost to acquire a customer</li>
                  <li>📈 <strong>Click-Through Rate (CTR):</strong> Ad relevance metric</li>
                  <li>📈 <strong>Conversion Rate:</strong> % of visitors who convert</li>
                  <li>📈 <strong>Quality Score:</strong> Ad relevance and landing page quality</li>
                  <li>📈 <strong>Cost Per Click (CPC):</strong> Optimization for lower costs</li>
                  <li>📈 <strong>Impression Share:</strong> Market visibility percentage</li>
                  <li>📈 <strong>Phone Calls & Form Leads:</strong> Direct business impact</li>
                </ul>
                <p className="mt-4">Custom dashboards provide <strong>real-time visibility</strong> into all metrics 24/7!</p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4">
                  <span className="text-4xl">🏆</span>
                  <span>Why choose MyDigital Crown for AdWords?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4"><strong className="text-xl text-cyan-300">Choose us for proven Google AdWords expertise:</strong></p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div>✓ <strong>Google Certified Partners</strong></div>
                    <div>✓ <strong>8+ years</strong> PPC experience</div>
                    <div>✓ <strong>400% average ROI</strong></div>
                    <div>✓ <strong>-40% CPC</strong> reduction</div>
                    <div>✓ <strong>18% conversion rate</strong></div>
                  </div>
                  <div className="space-y-2">
                    <div>✓ <strong>24/7 optimization</strong></div>
                    <div>✓ <strong>Transparent reporting</strong></div>
                    <div>✓ <strong>No long-term contracts</strong></div>
                    <div>✓ <strong>Free campaign audit</strong></div>
                    <div>✓ <strong>Dedicated account manager</strong></div>
                  </div>
                </div>
                <p className="mt-4">We manage ₹2 Cr+ annual ad spend across 100+ campaigns in Mumbai. Also offering <Link href="/services/seo" className="text-cyan-300 hover:underline font-semibold">SEO</Link>, <Link href="/services/social-media-marketing" className="text-cyan-300 hover:underline font-semibold">social media marketing</Link>, and <Link href="/services/website-development" className="text-cyan-300 hover:underline font-semibold">website development</Link>!</p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4">
                  <span className="text-4xl">🛡️</span>
                  <span>Do you guarantee results?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">We provide <strong>performance guarantees</strong> based on industry benchmarks:</p>
                <ul className="space-y-2">
                  <li>✓ <strong>CTR Improvement:</strong> Minimum 2% CTR within 30 days</li>
                  <li>✓ <strong>Quality Score:</strong> Reach 7+ quality score in 60 days</li>
                  <li>✓ <strong>CPC Reduction:</strong> Lower CPC by 20-40% in 90 days</li>
                  <li>✓ <strong>Conversion Tracking:</strong> Setup within first week</li>
                  <li>✓ <strong>Monthly ROI:</strong> Positive ROAS within 3 months</li>
                </ul>
                <p className="mt-4">If we don&apos;t meet agreed benchmarks, we offer <strong>performance refunds</strong> or additional optimization at no cost. Your success is our success!</p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4">
                  <span className="text-4xl">🎨</span>
                  <span>What types of ads do you manage?</span>
                </span>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">We manage all Google Ads campaign types:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-bold mb-2">🔍 Search Network Ads</div>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Text ads on Google Search</li>
                      <li>• Dynamic Search Ads</li>
                      <li>• Call-Only Ads</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-bold mb-2">🖼️ Display Network Ads</div>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Banner ads across websites</li>
                      <li>• Responsive display ads</li>
                      <li>• Gmail sponsored ads</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-bold mb-2">🛍️ Shopping Ads</div>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Product listing ads</li>
                      <li>• Showcase Shopping ads</li>
                      <li>• Local inventory ads</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-bold mb-2">🎥 Video & More</div>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• YouTube video ads</li>
                      <li>• App promotion ads</li>
                      <li>• Remarketing campaigns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">📊</span>
                  <span>What reports do you provide for Google Ads campaigns?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">We provide <strong>comprehensive reporting</strong> including:</p>
                <ul className="space-y-2">
                  <li>• <strong>Weekly performance dashboards</strong> with key metrics</li>
                  <li>• <strong>Monthly detailed reports</strong> with insights and recommendations</li>
                  <li>• <strong>Real-time Google Data Studio dashboards</strong> for 24/7 access</li>
                  <li>• <strong>Campaign-specific metrics:</strong> impressions, clicks, CTR, CPC, conversions, ROAS</li>
                  <li>• <strong>Competitor analysis</strong> and market insights</li>
                  <li>• <strong>A/B test results</strong> and optimization recommendations</li>
                  <li>• <strong>Conversion tracking</strong> and attribution analysis</li>
                </ul>
                <p className="mt-4">All reports are customized to your business goals with actionable insights for continuous improvement.</p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🎯</span>
                  <span>How do you optimize Google Ads for better Quality Score?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">We optimize Quality Score through <strong>systematic improvements</strong>:</p>
                <ul className="space-y-2">
                  <li>• <strong>Keyword relevance:</strong> Tight ad groups with highly relevant keywords</li>
                  <li>• <strong>Ad copy optimization:</strong> Including keywords in headlines and descriptions</li>
                  <li>• <strong>Landing page experience:</strong> Fast-loading, mobile-optimized pages with relevant content</li>
                  <li>• <strong>Expected CTR improvement:</strong> Compelling ad copy and extensions</li>
                  <li>• <strong>Negative keyword management:</strong> Filtering irrelevant traffic</li>
                  <li>• <strong>Ad extensions:</strong> Sitelinks, callouts, structured snippets for better visibility</li>
                  <li>• <strong>Historical performance:</strong> Pausing low-performing keywords and ads</li>
                </ul>
                <p className="mt-4">Higher Quality Scores lead to <strong>lower CPCs</strong> (30-50% reduction) and <strong>better ad positions</strong>.</p>
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔄</span>
                  <span>Can you help with remarketing campaigns?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4"><strong>Yes!</strong> We specialize in <strong>remarketing strategies</strong> to re-engage visitors:</p>
                <ul className="space-y-2">
                  <li>• <strong>Standard remarketing:</strong> Show ads to past website visitors</li>
                  <li>• <strong>Dynamic remarketing:</strong> Display specific products users viewed</li>
                  <li>• <strong>RLSA (Remarketing Lists for Search Ads):</strong> Target past visitors searching related keywords</li>
                  <li>• <strong>Video remarketing:</strong> Reach YouTube viewers who interacted with your content</li>
                  <li>• <strong>Customer list remarketing:</strong> Upload email lists for targeted campaigns</li>
                  <li>• <strong>Similar audiences:</strong> Find new customers similar to your best converters</li>
                  <li>• <strong>Sequential messaging:</strong> Show different ads based on user journey stage</li>
                </ul>
                <p className="mt-4">Remarketing campaigns typically achieve <strong>2-3x higher conversion rates</strong> and <strong>50% lower CPCs</strong>.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Maximize Your<br />
              <span className="text-yellow-300">AdWords Performance?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our certified experts manage your Google AdWords campaigns for better ROI and lower costs!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Free Campaign Audit</span>
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
                <span>Google Certified Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>400% Average ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Expert AdWords Specialists</span>
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
        currentService="/services/google-adwords"
        title="Complete Digital Advertising Solutions"
        description="Enhance your AdWords campaigns with our comprehensive digital services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
