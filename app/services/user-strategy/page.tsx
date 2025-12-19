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
  title: 'UX Strategy Mumbai | 600+ Studies | User Research Expert',
  description: 'UX Strategy Mumbai. 600+ Research Studies | Persona Development, Journey Mapping & Usability Testing | Data-Driven UX. Call +91-83695-11877',
  keywords: [
    // Primary Keywords
    "User Strategy developer in Mumbai", "user strategy developer Mumbai", "UX strategy Mumbai", "user research Mumbai", "persona development Mumbai",
    // Quality Keywords
    "best UX strategist Mumbai", "professional user research Mumbai", "expert UX strategy Mumbai", "top user experience consultant Mumbai", "certified UX researcher Mumbai",
    // Service-Specific Keywords
    "journey mapping Mumbai", "usability testing Mumbai", "user-centered design Mumbai", "user experience strategy Mumbai", "behavioral research Mumbai",
    "user flow design Mumbai", "empathy mapping Mumbai", "user testing Mumbai", "UX audit Mumbai", "design thinking Mumbai",
    // Technical Keywords
    "user persona creation Mumbai", "customer journey analysis Mumbai", "UX research methods Mumbai", "heuristic evaluation Mumbai", "A/B testing strategy Mumbai",
    "user feedback analysis Mumbai", "card sorting Mumbai", "tree testing Mumbai", "eye tracking Mumbai", "session recording Mumbai",
    // Business Keywords
    "UX strategy consultant Mumbai", "user research services Mumbai", "UX consulting firm Mumbai", "product strategy Mumbai", "user acquisition strategy Mumbai",
    "customer experience strategy Mumbai", "digital experience strategy Mumbai"
  ],
  authors: [{ name: "Aditya Pandey", url: "https://mydigital-mu.vercel.app/about" }],
  creator: "MyDigital Crown",
  publisher: "MyDigital Crown",
  category: "User Experience Strategy Services",
  classification: "UX Research & User Strategy Consulting",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  openGraph: {
    title: 'User Strategy developer in Mumbai | #1 UX Strategy Expert 2025',
    description: 'Leading User Strategy developer in Mumbai. Expert UX research, persona development, journey mapping & data-driven strategies. 600+ research studies.',
    url: 'https://mydigital-mu.vercel.app/services/user-strategy',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigital-mu.vercel.app/images/user-strategy-og.jpg',
        width: 1200,
        height: 630,
        alt: 'User Strategy developer in Mumbai - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'User Strategy developer in Mumbai | #1 UX Strategy Expert',
    description: 'Leading User Strategy developer in Mumbai. Expert UX research, persona development & journey mapping. 600+ research studies.',
    images: ['https://mydigital-mu.vercel.app/images/user-strategy-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://mydigital-mu.vercel.app/services/user-strategy',
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

// Comprehensive Schema Markup for SEO
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "MyDigital Crown",
      "url": "https://mydigital-mu.vercel.app",
      "logo": "https://mydigital-mu.vercel.app/images/logo.png",
      "description": "Leading User Strategy developer in Mumbai specializing in UX research, persona development, journey mapping, and data-driven user strategies.",
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
        "https://www.linkedin.com/company/mydigitalcrown",
        "https://twitter.com/mydigitalcrown"
      ]
    },
    {
      "@type": "Service",
      "serviceType": "User Strategy Development",
      "provider": {
        "@type": "Organization",
        "name": "MyDigital Crown"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
      "description": "Professional User Strategy developer in Mumbai offering comprehensive UX research, persona development, journey mapping, usability testing, and data-driven user strategies.",
      "offers": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "User Research & Analysis",
            "description": "In-depth user research including interviews, surveys, and behavioral analysis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Persona Development",
            "description": "Data-driven user persona creation with demographics, behaviors, and motivations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Journey Mapping",
            "description": "Comprehensive user journey mapping with touchpoint and pain point analysis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Usability Testing",
            "description": "Real user testing with prototype validation and feedback analysis"
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "MyDigital Crown - User Strategy developer in Mumbai",
      "image": "https://mydigital-mu.vercel.app/images/user-strategy-mumbai.jpg",
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
      "url": "https://mydigital-mu.vercel.app/services/user-strategy",
      "telephone": "+91-83695-11877",
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
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a User Strategy developer in Mumbai do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A User Strategy developer in Mumbai conducts comprehensive user research, develops data-driven personas, maps user journeys, performs usability testing, and creates strategies to improve user experience and engagement."
          }
        },
        {
          "@type": "Question",
          "name": "How much does User Strategy development cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "User Strategy development costs in Mumbai vary based on project scope, from ₹50,000 for basic research to ₹5,00,000+ for comprehensive strategy projects. We offer transparent pricing and free consultations."
          }
        },
        {
          "@type": "Question",
          "name": "Why is user research important for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "User research helps you understand your target audience's needs, behaviors, and pain points. This leads to better product decisions, higher user satisfaction, improved conversion rates, and reduced development costs."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a user strategy project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "User strategy projects typically take 2-8 weeks depending on scope. Basic research takes 2-4 weeks, while comprehensive strategies with personas, journey maps, and testing take 6-8 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in persona development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Persona development includes demographic analysis, behavior patterns, goals and motivations, pain points, user scenarios, and visual persona documents. We base personas on real user data and research."
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
          "name": "User Strategy developer in Mumbai",
          "item": "https://mydigital-mu.vercel.app/services/user-strategy"
        }
      ]
    }
  ]
}

export default function UserStrategyPage() {
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
        aria-label="User Strategy Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">User Strategy Experts</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                User Strategy Developer In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  👥 Understand <span className="text-yellow-300">User Needs</span>, <span className="text-green-300">Build Personas</span> & <span className="text-orange-300">Drive Engagement</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  User Research | Persona Development | Journey Mapping | Strategy Planning
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
                    <span>Get User Strategy</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">600+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Research Studies</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">5000+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Users Interviewed</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">75%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Better UX Results</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Data-Driven Insights</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About User Strategy Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">👥</span>
              User-Centered Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">User Strategy</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven user strategy that puts your users at the center of every design decision
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop" 
                    alt="User Strategy Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔍 Deep User Research</h3>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive research to understand your users&apos; behaviors, needs, and pain points.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Actionable Insights</h3>
                <p className="text-gray-700 leading-relaxed">
                  Transform research data into practical strategies that improve user experience.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📈 Measurable Results</h3>
                <p className="text-gray-700 leading-relaxed">
                  User-centered strategies that deliver proven improvements in engagement and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Strategy Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Strategy <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive user strategy services to build products users love
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">User Research</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  In-depth research to understand your target audience.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ User Interviews</li>
                  <li className="flex items-start gap-2">✓ Surveys & Questionnaires</li>
                  <li className="flex items-start gap-2">✓ Behavioral Analysis</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">👤</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Persona Development</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Create detailed user personas based on real data.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Demographic Analysis</li>
                  <li className="flex items-start gap-2">✓ Behavior Patterns</li>
                  <li className="flex items-start gap-2">✓ Goals & Motivations</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🗺️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Journey Mapping</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Map user journeys to identify pain points and opportunities.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Touchpoint Analysis</li>
                  <li className="flex items-start gap-2">✓ Pain Point Identification</li>
                  <li className="flex items-start gap-2">✓ Opportunity Mapping</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🧪</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Usability Testing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Test designs with real users to validate assumptions.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Prototype Testing</li>
                  <li className="flex items-start gap-2">✓ A/B Testing</li>
                  <li className="flex items-start gap-2">✓ Feedback Analysis</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Analytics & Insights</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Track user behavior and extract actionable insights.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Behavior Analytics</li>
                  <li className="flex items-start gap-2">✓ Heatmap Analysis</li>
                  <li className="flex items-start gap-2">✓ Conversion Tracking</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Strategy Planning</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Develop comprehensive strategies aligned with user needs.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ UX Roadmapping</li>
                  <li className="flex items-start gap-2">✓ Feature Prioritization</li>
                  <li className="flex items-start gap-2">✓ Implementation Plans</li>
                </ul>
              </div>
            </div>
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
          {/* Section Header */}
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1: SEO */}
            <Link href="/services/search-engine-optimisation" className="group relative rounded-3xl overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop"
                  alt="SEO Services Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-blue-700/95 group-hover:from-blue-800/98 group-hover:to-blue-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Search Engine Optimization</h3>
                <p className="text-blue-100 mb-4 leading-relaxed">Dominate Google rankings with our proven SEO strategies. Get more organic traffic and qualified leads.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 2: Social Media Marketing */}
            <Link href="/services/social-media-marketing" className="group relative rounded-3xl overflow-hidden border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
                  alt="Social Media Marketing Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900/95 to-rose-700/95 group-hover:from-pink-800/98 group-hover:to-rose-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Social Media Marketing</h3>
                <p className="text-pink-100 mb-4 leading-relaxed">Build a powerful social presence on Instagram, Facebook, LinkedIn & more. Engage & convert your audience.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 3: Google Ads */}
            <Link href="/services/google-ads" className="group relative rounded-3xl overflow-hidden border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Google Ads Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 to-emerald-700/95 group-hover:from-green-800/98 group-hover:to-emerald-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Google Ads (PPC)</h3>
                <p className="text-green-100 mb-4 leading-relaxed">Get instant leads with high-converting Google Ads campaigns. ROI-focused pay-per-click advertising.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 4: Web Development */}
            <Link href="/services/web-development" className="group relative rounded-3xl overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                  alt="Web Development Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 to-indigo-700/95 group-hover:from-purple-800/98 group-hover:to-indigo-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Web Development</h3>
                <p className="text-purple-100 mb-4 leading-relaxed">Build fast, secure, and scalable websites. Custom web solutions tailored to your business needs.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 5: Content Marketing */}
            <Link href="/services/content-marketing" className="group relative rounded-3xl overflow-hidden border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&h=600&fit=crop"
                  alt="Content Marketing Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/95 to-amber-700/95 group-hover:from-orange-800/98 group-hover:to-amber-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Content Marketing</h3>
                <p className="text-orange-100 mb-4 leading-relaxed">Engage your audience with compelling content. Blogs, videos, infographics that drive results.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 6: Email Marketing */}
            <Link href="/services/email-marketing" className="group relative rounded-3xl overflow-hidden border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
                  alt="Email Marketing Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/95 to-blue-700/95 group-hover:from-cyan-800/98 group-hover:to-blue-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Email Marketing</h3>
                <p className="text-cyan-100 mb-4 leading-relaxed">Nurture leads with personalized email campaigns. Automation, segmentation & high conversion rates.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* View All Services CTA */}
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
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
          <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🚀</div>
          <div className="absolute bottom-32 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>⭐</div>
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
              Everything you need to know about User Strategy development in Mumbai ✨
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">👥</span>
                  <span>What does a User Strategy developer in Mumbai do?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                A User Strategy developer in Mumbai conducts comprehensive user research through interviews, surveys, and behavioral analysis. We develop data-driven personas, map user journeys to identify pain points, perform usability testing, and create actionable strategies to improve user experience and engagement. Our User Strategy developer in Mumbai team has 10+ years of experience delivering results-driven solutions.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">💰</span>
                  <span>How much does User Strategy development cost in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                User Strategy development costs in Mumbai vary based on project scope and requirements. Basic user research starts at ₹50,000, persona development at ₹75,000, journey mapping at ₹1,00,000, and comprehensive strategy projects range from ₹2,00,000 to ₹5,00,000+. As a leading User Strategy developer in Mumbai, we offer transparent pricing and free initial consultations. Call +91-83695-11877 for a custom quote.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🔍</span>
                  <span>Why is user research important for my business?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                User research helps you understand your target audience&apos;s needs, behaviors, pain points, and motivations. This leads to better product decisions, higher user satisfaction, improved conversion rates, reduced development costs, and competitive advantages. Our User Strategy developer in Mumbai services have helped clients achieve 75%+ better UX results and 300% ROI increases through data-driven insights.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                  <span>How long does a user strategy project take?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                User strategy projects typically take 2-8 weeks depending on scope and complexity. Basic user research takes 2-4 weeks, persona development 3-4 weeks, journey mapping 4-6 weeks, and comprehensive strategies with research, personas, journey maps, and usability testing take 6-8 weeks. Our User Strategy developer in Mumbai team provides detailed timelines and milestones during the initial consultation.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🎯</span>
                  <span>What&apos;s included in persona development?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Persona development includes demographic analysis (age, location, occupation, income), behavior patterns and habits, goals and motivations, pain points and frustrations, user scenarios and use cases, and comprehensive visual persona documents. As the leading User Strategy developer in Mumbai, we base all personas on real user data collected through interviews, surveys, and analytics rather than assumptions.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🧪</span>
                  <span>What methods do you use for user research?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Our User Strategy developer in Mumbai team uses qualitative methods (user interviews, contextual inquiries, usability testing, focus groups) and quantitative methods (surveys, analytics analysis, A/B testing, heatmap tracking). We combine both approaches for comprehensive insights that inform strategy decisions. We&apos;ve conducted 600+ research studies with 5000+ users interviewed.
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📊</span>
                  <span>How do you measure user strategy success?</span>
                </span>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                We measure success through key metrics: task completion rates, time on task, error rates, user satisfaction scores (NPS, CSAT), conversion rate improvements, engagement metrics, and business KPIs like revenue and customer retention. Our User Strategy developer in Mumbai provides detailed analytics dashboards and regular progress reports to track improvements over time.
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🔄</span>
                  <span>Can you help with existing products or only new ones?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Yes! Our User Strategy developer in Mumbai works with both new and existing products. For existing products, we conduct UX audits, identify improvement opportunities, perform usability testing, and develop optimization strategies. For new products, we handle discovery research, persona development, journey mapping, and validation testing. We&apos;ve successfully optimized 300+ existing products and launched 150+ new ones.
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-indigo-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">⏱️</span>
                  <span>How long does a user research project take?</span>
                </span>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                User research timelines vary: Quick usability tests 1-2 weeks, comprehensive persona development 3-4 weeks, full UX audits 4-6 weeks, extensive research studies 6-8 weeks. Our User Strategy developer in Mumbai provides detailed project timelines during consultation, with options for expedited research when needed for urgent product launches or iterations.
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:border-teal-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-teal-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">👥</span>
                  <span>Do you recruit participants for user testing?</span>
                </span>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Yes! Our User Strategy developer in Mumbai handles complete participant recruitment. We maintain a database of pre-screened participants across demographics, recruit based on your target personas, conduct screening surveys, schedule sessions, manage incentives, and ensure diverse representation. We can also work with your existing customers if preferred for more authentic insights.
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-rose-500/20 hover:border-rose-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-rose-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">💰</span>
                  <span>What are your user strategy pricing packages?</span>
                </span>
                <svg className="w-7 h-7 text-rose-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Our User Strategy developer in Mumbai packages: Usability Testing ₹30,000-₹50,000 (5-10 participants), Persona Development ₹40,000-₹70,000 (3-5 personas with research), Full UX Audit ₹60,000-₹1,00,000 (comprehensive analysis), Research Study ₹80,000-₹2,00,000 (extensive multi-method research). All include detailed reports, actionable recommendations, and presentation sessions.
              </div>
            </details>
          </div>

          {/* Floating Emoji Elements */}
          <div className="absolute top-10 right-10 text-6xl opacity-10 animate-bounce">💡</div>
          <div className="absolute bottom-10 left-10 text-6xl opacity-10 animate-bounce delay-1000">❓</div>
          <div className="absolute top-1/2 left-10 text-6xl opacity-10 animate-bounce delay-2000">✨</div>
          <div className="absolute bottom-20 right-20 text-6xl opacity-10 animate-bounce delay-500">🎯</div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-white text-lg mb-6">Still have questions? We&apos;re here to help!</p>
            <a 
              href="tel:+918369511877" 
              className="inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-2xl mr-3">📞</span>
              <span>Call Now: +91-83695-11877</span>
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
          {/* Section Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl hover:shadow-2xl transition-all">
              <span className="text-2xl mr-3">📝</span>
              <span>Complete Information</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Why Choose a Professional
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">User Strategy developer</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">in Mumbai?</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-semibold mb-4">
              Everything you need to know about <span className="text-blue-600">User Strategy development</span> services in <span className="text-purple-600">Mumbai</span>
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Comprehensive user research and strategy solutions 🚀
            </p>
          </header>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes a Great User Strategy developer in Mumbai?</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      A professional <strong>User Strategy developer in Mumbai</strong> combines deep expertise in user research, behavioral psychology, and business strategy to create data-driven solutions that improve user experiences. With over 10+ years of experience and 600+ research studies completed, our <strong>User Strategy developer in Mumbai</strong> team understands the unique challenges and opportunities in the Indian market.
                    </p>
                    <p>
                      The best <strong>User Strategy developer in Mumbai</strong> doesn&apos;t just conduct research - we transform insights into actionable strategies that drive business results. Our approach combines qualitative methods like user interviews and usability testing with quantitative analytics to provide comprehensive understanding of your users. We&apos;ve helped 150+ Mumbai businesses improve their user experience and achieve 300% ROI increases.
                    </p>
                    <p>
                      Our <strong>User Strategy developer in Mumbai</strong> expertise extends beyond basic research to include persona development, journey mapping, usability testing, and strategic planning. We understand that every business is unique, which is why we customize our approach to match your specific goals, industry, and target audience. Whether you&apos;re a startup or an established enterprise, our <strong>User Strategy developer in Mumbai</strong> services scale to meet your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🔍</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive User Research Excellence</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      As a leading <strong>User Strategy developer in Mumbai</strong>, we excel in comprehensive user research methodologies. Our research process includes user interviews with 20+ participants per study, surveys reaching 500+ users, contextual inquiries in real-world settings, and detailed behavioral analysis using advanced analytics tools.
                    </p>
                    <p>
                      Our <strong>User Strategy developer in Mumbai</strong> team has conducted research across diverse industries including e-commerce, healthcare, education, finance, and SaaS. We&apos;ve interviewed 5000+ users and analyzed millions of data points to understand user behaviors, motivations, and pain points. This extensive experience enables us to identify patterns and insights that drive meaningful improvements.
                    </p>
                    <p>
                      Every <strong>User Strategy developer in Mumbai</strong> project begins with thorough research planning, including defining research objectives, selecting appropriate methodologies, recruiting representative participants, and creating detailed research protocols. We use both moderated and unmoderated testing, remote and in-person sessions, and mix qualitative insights with quantitative validation for robust findings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 - Services Grid */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🚀</div>
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive User Strategy Services</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Persona Development */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                      <div className="text-3xl mb-3">👤</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Persona Development</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Our <strong>User Strategy developer in Mumbai</strong> creates data-driven personas based on real user research, including demographics, behaviors, goals, and pain points.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-2">
                        <li>• Demographic analysis</li>
                        <li>• Behavior pattern mapping</li>
                        <li>• Goal identification</li>
                        <li>• Visual persona documents</li>
                      </ul>
                    </div>

                    {/* Journey Mapping */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                      <div className="text-3xl mb-3">🗺️</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Journey Mapping</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Comprehensive journey maps showing every touchpoint, identifying pain points and opportunities for improvement across the entire user experience.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-2">
                        <li>• Touchpoint analysis</li>
                        <li>• Pain point identification</li>
                        <li>• Emotion mapping</li>
                        <li>• Opportunity discovery</li>
                      </ul>
                    </div>

                    {/* Usability Testing */}
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                      <div className="text-3xl mb-3">🧪</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Usability Testing</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Real user testing with prototypes and live products to validate design decisions and identify usability issues before launch.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-2">
                        <li>• Prototype testing</li>
                        <li>• A/B testing</li>
                        <li>• Think-aloud sessions</li>
                        <li>• Feedback analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Insights & Analytics</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Our <strong>User Strategy developer in Mumbai</strong> leverages advanced analytics tools to track user behavior, identify patterns, and extract actionable insights. We use heatmaps to understand where users click, scroll, and focus attention. Session recordings reveal how users navigate your product and where they encounter difficulties.
                    </p>
                    <p>
                      As an experienced <strong>User Strategy developer in Mumbai</strong>, we analyze conversion funnels to identify drop-off points, track user flows to optimize navigation, and monitor engagement metrics to measure success. We integrate with Google Analytics, Mixpanel, Hotjar, and custom analytics platforms to gather comprehensive data.
                    </p>
                    <p>
                      Our data-driven approach means every recommendation is backed by evidence. We don&apos;t rely on assumptions or best practices alone - we test hypotheses, validate findings, and measure results. This scientific approach to user strategy has helped our clients achieve 75%+ better UX results and significant improvements in key business metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🎨</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Planning & Implementation</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Beyond research and analysis, our <strong>User Strategy developer in Mumbai</strong> helps you implement findings through strategic planning. We create detailed UX roadmaps that prioritize improvements based on impact and feasibility, develop feature prioritization frameworks aligned with user needs and business goals, and design implementation plans with clear milestones and success metrics.
                    </p>
                    <p>
                      Our <strong>User Strategy developer in Mumbai</strong> team works closely with your designers, developers, and product managers to ensure smooth implementation. We provide design guidelines based on research insights, review prototypes and designs for alignment with user needs, conduct iterative testing throughout development, and measure results post-launch to validate improvements.
                    </p>
                    <p>
                      We believe in continuous improvement. Our <strong>User Strategy developer in Mumbai</strong> services include ongoing research and optimization to keep your product aligned with evolving user needs. We establish feedback loops, conduct regular usability testing, monitor analytics for emerging issues, and provide strategic recommendations for future enhancements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 - Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Why MyDigital Crown is the Best User Strategy developer in Mumbai?
                </h3>
                <p className="text-blue-100 text-lg">
                  Trusted by 150+ businesses across Mumbai and India
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">10+ Years UX Research Expertise</h4>
                    <p className="text-blue-100">Extensive experience across multiple industries and user types</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">600+ Research Studies Completed</h4>
                    <p className="text-blue-100">Proven track record of delivering actionable insights</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">5000+ Users Interviewed</h4>
                    <p className="text-blue-100">Deep understanding of diverse user behaviors and needs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">75%+ Better UX Results</h4>
                    <p className="text-blue-100">Measurable improvements in user satisfaction and engagement</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Data-Driven Methodologies</h4>
                    <p className="text-blue-100">Scientific approach combining qualitative and quantitative research</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">95%+ Client Satisfaction</h4>
                    <p className="text-blue-100">Long-term relationships built on trust and results</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Transparent Pricing</h4>
                    <p className="text-blue-100">Clear pricing with no hidden costs or surprises</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">24/7 Support & Consultation</h4>
                    <p className="text-blue-100">Always available to address your questions and concerns</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+918369511877" 
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-2xl mr-3">📞</span>
                  <span>Call Now: +91-83695-11877</span>
                </a>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-2xl mr-3">🚀</span>
                  <span>Get Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Work with the Best User Strategy developer in Mumbai?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let&apos;s transform your user experience with data-driven strategies. Get started today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+918369511877" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl mr-3">📞</span>
                <span>Call: +91-83695-11877</span>
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl mr-3">💬</span>
                <span>Get Free Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Build<br />
              <span className="text-yellow-300">User-Centered Products?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our user strategy experts help you understand your users and create experiences they&apos;ll love!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get User Strategy</span>
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
                <span>User Strategy Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>600+ Research Studies</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>75% Better UX Results</span>
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
        currentService="/services/user-strategy"
        title="Complete UX Solutions"
        description="Enhance your user strategy with our comprehensive design and development services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
