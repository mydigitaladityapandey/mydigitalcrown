import { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import EnquiryForm from '@/app/components/EnquiryForm';
import TrustedBrands from '@/app/components/TrustedBrands';
import ClientSuccessStories from '@/app/components/ClientSuccessStories';
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Analytics Mumbai | 500+ Dashboards | GA4 Expert | 95% Accuracy',
  description: 'Analytics Mumbai. 500+ Dashboards Built | GA4 Setup & Migration | Conversion Tracking | Real-Time Insights | 95% Accuracy. Call +91-83695-11877',
  keywords: [
    // Primary Keywords
    'analytics services mumbai',
    'analytics mumbai',
    'reporting services mumbai',
    'google analytics mumbai',
    'data analytics mumbai',
    'web analytics mumbai',
    'analytics company mumbai',
    'analytics agency mumbai',
    
    // Service-Specific Keywords
    'google analytics setup mumbai',
    'ga4 implementation',
    'ga4 migration mumbai',
    'google analytics 4 setup',
    'conversion tracking mumbai',
    'roi measurement',
    'data visualization mumbai',
    'marketing analytics',
    'performance tracking',
    'dashboard creation',
    'google data studio',
    'analytics consulting',
    
    // Long-tail Keywords (VSO)
    'how to setup google analytics in mumbai',
    'best analytics agency mumbai',
    'google analytics expert mumbai',
    'analytics consultant mumbai',
    'data analysis services mumbai',
    'analytics services near me',
    'analytics expert near me',
    
    // Solution-Based Keywords
    'track website performance',
    'measure marketing roi',
    'analytics reporting',
    'data-driven decisions',
    'real-time analytics dashboard',
    'conversion funnel analysis',
    'marketing attribution',
    'e-commerce analytics',
    
    // Location-Based Keywords
    'mumbai analytics services',
    'analytics agency near me',
    'local analytics consultant',
    'andheri analytics services',
    'bandra analytics agency',
    'south mumbai analytics',
    
    // Industry Keywords
    'digital marketing analytics',
    'seo analytics',
    'social media analytics',
    'paid advertising analytics',
    'website analytics mumbai',
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Analytics & Data Services',
  classification: 'Google Analytics, GA4 & Performance Tracking',
  openGraph: {
    title: 'Analytics & Reporting Services in Mumbai | #1 Data Analytics Agency',
    description: 'Professional Google Analytics GA4 setup, conversion tracking & ROI measurement. 500+ dashboards created, 95% accuracy. Free analytics audit!',
    images: ['/images/analytics-og.jpg'],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Analytics & Reporting Services in Mumbai | MyDigital Crown',
    description: 'Track performance, measure ROI with professional analytics services. GA4 setup, dashboards & real-time insights.',
    images: ['/images/analytics-og.jpg'],
  },
  alternates: {
    canonical: 'https://mydigitalcrown.in/services/analytics',
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

export default function AnalyticsPage() {
  // Enhanced Schema Data for SEO/VSO/ASO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // Service Schema
      {
        "@type": "Service",
        "@id": "https://mydigitalcrown.in/services/analytics#service",
        "serviceType": "Analytics & Reporting Services",
        "provider": {
          "@type": "Organization",
          "name": "MyDigital Crown",
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Mumbai",
          "addressCountry": "IN"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Analytics Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Analytics Setup & GA4 Migration - Complete implementation with conversion tracking"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Dashboard Creation - Real-time Data Studio dashboards with automated reporting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Conversion Tracking - Goal tracking, funnel analysis & CRO optimization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ROI Measurement - Marketing ROI calculation and revenue attribution"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Marketing Attribution - Multi-touch attribution and customer journey mapping"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Performance Reporting - Automated insights with trend analysis and benchmarking"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "156",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://mydigitalcrown.in/#organization",
        "name": "MyDigital Crown - Analytics Services Agency Mumbai",
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
          "availableLanguage": ["Hindi", "English", "Marathi"]
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
          "https://www.linkedin.com/company/mydigitalcrown"
        ]
      },
      // WebPage Schema
      {
        "@type": "WebPage",
        "@id": "https://mydigitalcrown.in/services/analytics#webpage",
        "url": "https://mydigitalcrown.in/services/analytics",
        "name": "Analytics & Reporting Services in Mumbai | Google Analytics Expert",
        "description": "Professional analytics services including Google Analytics GA4 setup, conversion tracking, dashboard creation, ROI measurement. 500+ dashboards created, 95% accuracy rate, 200+ brands served.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://mydigitalcrown.in/",
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
                "@id": "https://mydigitalcrown.in/services/analytics",
                "name": "Analytics & Reporting in Mumbai"
              }
            }
          ]
        }
      },
      // FAQPage Schema for VSO
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What analytics services do you provide in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer comprehensive analytics services including Google Analytics setup (GA4), custom dashboard creation, conversion tracking, ROI measurement, marketing attribution, performance reporting, e-commerce analytics, mobile app tracking, and data visualization. Our team provides end-to-end solutions from implementation to ongoing optimization for Mumbai businesses."
            }
          },
          {
            "@type": "Question",
            "name": "How much do analytics services cost in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Analytics services in Mumbai range from ₹15,000-₹75,000/month depending on complexity. Basic GA4 setup starts at ₹15,000, standard dashboards ₹25,000-₹40,000/month, and enterprise solutions ₹50,000+. We offer customized packages including setup, tracking implementation, reporting, and ongoing optimization. Free initial audit included!"
            }
          },
          {
            "@type": "Question",
            "name": "Do you help with GA4 migration in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We specialize in GA4 migration for Mumbai businesses. Our service includes data migration from Universal Analytics, custom event setup, e-commerce tracking configuration, conversion tracking, goal recreation, historical data preservation, team training, and post-migration optimization. We ensure zero data loss during transition."
            }
          },
          {
            "@type": "Question",
            "name": "How long does analytics setup take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basic GA4 setup takes 3-5 days, standard implementation with custom events 1-2 weeks, and enterprise solutions 2-4 weeks. Timeline includes account setup, tracking code installation, goal configuration, testing, dashboard creation, and team training. Data starts flowing immediately after setup!"
            }
          },
          {
            "@type": "Question",
            "name": "What metrics should Mumbai businesses track?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Essential metrics include: Website traffic (sessions, users, pageviews), Conversion rate (goal completions, transactions), ROI (revenue per channel, ROAS), User behavior (bounce rate, time on site, pages per session), Traffic sources (organic, paid, social, referral), E-commerce metrics (cart abandonment, average order value), and Engagement (scroll depth, video views, downloads). We customize KPIs based on your business goals."
            }
          },
          {
            "@type": "Question",
            "name": "Can you create custom dashboards for my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! We create custom dashboards using Google Data Studio, Tableau, or Power BI tailored to your specific needs. Dashboards include real-time KPIs, automated updates, visual charts, trend analysis, comparative metrics, and executive summaries. We design mobile-friendly dashboards accessible 24/7 with automated email reports."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide analytics training in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We offer comprehensive analytics training programs for Mumbai businesses including Google Analytics fundamentals, GA4 advanced features, dashboard creation, report interpretation, conversion optimization, and data-driven decision making. Training includes hands-on workshops, video tutorials, documentation, and ongoing support to make your team analytics-proficient."
            }
          },
          {
            "@type": "Question",
            "name": "What industries do you provide analytics services for in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve all Mumbai industries including E-commerce (product analytics, cart tracking), SaaS (user behavior, churn analysis), Healthcare (patient journey, appointment tracking), Education (enrollment funnels, course completion), Finance (lead quality, conversion optimization), Real Estate (property views, inquiry tracking), Hospitality (booking analytics, revenue management), Manufacturing (B2B lead tracking), and Retail (offline+online attribution). Each industry gets customized tracking and reporting."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure data accuracy in analytics?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We maintain 95% accuracy through rigorous quality processes: proper tracking code implementation, bot traffic filtering, cross-domain tracking setup, duplicate transaction prevention, regular data validation audits, testing across devices/browsers, UTM parameter standardization, and GDPR-compliant data collection. We perform monthly accuracy checks and provide detailed audit reports to ensure reliable insights."
            }
          },
          {
            "@type": "Question",
            "name": "What makes MyDigital Crown the best analytics agency in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MyDigital Crown stands out with: 500+ dashboards created with proven accuracy, Google Analytics certified experts with 8+ years experience, 95% data accuracy rate with rigorous validation, 200+ Mumbai brands served across industries, Real-time dashboards with automated insights, 24/7 dedicated support team, Free analytics audit and consultation, Custom solutions tailored to business goals, GDPR-compliant data security, and Proven ROI improvement track record. We don't just track data - we turn insights into actionable growth strategies!"
            }
          }
        ]
      },
      // LocalBusiness Schema
      {
        "@type": "LocalBusiness",
        "@id": "https://mydigitalcrown.in/#localbusiness",
        "name": "MyDigital Crown - Analytics Services Agency",
        "image": "https://mydigitalcrown.in/logo.png",
        "description": "Premier analytics and reporting agency in Mumbai offering Google Analytics GA4 setup, conversion tracking, dashboard creation, ROI measurement, and performance reporting services.",
        "url": "https://mydigitalcrown.in",
        "telephone": "+91-83695-11877",
        "priceRange": "₹₹₹",
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
          "latitude": 19.0596,
          "longitude": 72.8295
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "156",
          "bestRating": "5",
          "worstRating": "1"
        },
        "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking",
        "currenciesAccepted": "INR"
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
          <h1>Analytics & Reporting Services in Mumbai - MyDigital Crown</h1>
          <p>Premier analytics and reporting agency in Mumbai offering Google Analytics GA4 setup, conversion tracking, dashboard creation, ROI measurement, and performance reporting. Call +91-83695-11877 for free consultation.</p>
        </div>
      </noscript>

      <Navbar />
      
      <main className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Analytics & Reporting Services Mumbai" />
        <meta itemProp="description" content="Google Analytics GA4 Setup, Conversion Tracking, Dashboard Creation, ROI Measurement for Mumbai Businesses" />
        <meta itemProp="provider" content="MyDigital Crown" />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden" itemScope itemType="https://schema.org/Service">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-yellow-500/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6">
                <span className="text-3xl">📊</span>
                <span className="text-white font-semibold">Mumbai&apos;s #1 Analytics Agency</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Analytics & Reporting
                <br />
                <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                  Services in Mumbai
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                📈 Track Performance, Measure ROI & Make Data-Driven Decisions with Real-Time Dashboards
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-white/90 mb-8">
                <span className="flex items-center">✅ Google Analytics Setup</span>
                <span className="flex items-center">✅ Conversion Tracking</span>
                <span className="flex items-center">✅ ROI Measurement</span>
                <span className="flex items-center">✅ 24/7 Support</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="tel:+918369511877"
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    📞 Call: +91-83695-11877
                  </span>
                </Link>
                <Link 
                  href="#enquiry"
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  Get Free Analytics Audit 🚀
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { icon: '📊', stat: '500+', label: 'Dashboards Created' },
                { icon: '🎯', stat: '95%', label: 'Accuracy Rate' },
                { icon: '💼', stat: '200+', label: 'Brands Served' },
                { icon: '🕐', stat: '24/7', label: 'Real-Time Support' },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-3xl font-black text-white mb-1">{item.stat}</div>
                  <div className="text-sm text-blue-200">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-3 mb-6">
                <span className="text-2xl">📈</span>
                <span className="text-blue-900 font-semibold">Our Analytics Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                What Makes Us Mumbai&apos;s Best
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Analytics Agency?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don&apos;t just track data - we turn insights into action 🌟
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🔍',
                  title: 'Google Analytics Setup & GA4',
                  description: 'Complete GA4 implementation, migration from Universal Analytics, custom event tracking, e-commerce tracking',
                  features: ['GA4 Migration', 'Custom Events', 'E-commerce Tracking']
                },
                {
                  icon: '📊',
                  title: 'Custom Dashboard Creation',
                  description: 'Real-time dashboards with Google Data Studio, automated reporting, KPI visualization, executive summaries',
                  features: ['Data Studio', 'Automated Reports', 'KPI Dashboards']
                },
                {
                  icon: '🎯',
                  title: 'Conversion Tracking',
                  description: 'Goal tracking, funnel analysis, conversion rate optimization, multi-channel attribution modeling',
                  features: ['Goal Tracking', 'Funnel Analysis', 'CRO Insights']
                },
                {
                  icon: '💰',
                  title: 'ROI Measurement',
                  description: 'Marketing ROI calculation, campaign performance tracking, budget optimization, revenue attribution',
                  features: ['ROI Tracking', 'Budget Analysis', 'Revenue Attribution']
                },
                {
                  icon: '🔄',
                  title: 'Marketing Attribution',
                  description: 'Multi-touch attribution, customer journey mapping, channel performance analysis, assisted conversions',
                  features: ['Attribution Models', 'Journey Mapping', 'Channel Analysis']
                },
                {
                  icon: '📈',
                  title: 'Performance Reporting',
                  description: 'Weekly/monthly reports, automated insights, trend analysis, competitive benchmarking, action recommendations',
                  features: ['Automated Reports', 'Trend Analysis', 'Benchmarking']
                }
              ].map((service, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300 transform hover:scale-105">
                  <div className="p-8">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Why We&apos;re Mumbai&apos;s Top Choice
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  for Analytics Services
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Experience the difference with a team that delivers measurable results and exceptional service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '🎓', title: 'Certified Experts', description: 'Google Analytics certified professionals with 8+ years experience' },
                { icon: '⚡', title: 'Real-Time Tracking', description: 'Live dashboards with instant insights and automated alerts' },
                { icon: '🔒', title: 'Data Security', description: '100% secure with GDPR compliance and privacy protection' },
                { icon: '📱', title: 'Mobile Analytics', description: 'App tracking, mobile conversion optimization, in-app events' },
                { icon: '🤝', title: 'Dedicated Support', description: '24/7 assistance from analytics specialists' },
                { icon: '💡', title: 'Actionable Insights', description: 'Data-driven recommendations for growth optimization' },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Client Success Stories Section */}
      <ClientSuccessStories 
        title="Client Success Stories"
      />


      {/* Trusted Brands Section */}
      <TrustedBrands 
        theme="dark"
        title="Trusted by Leading Brands"
        subtitle="200+ Happy Clients"
        description="Trusted by India's top companies for analytics excellence. Join the success story!"
      />

      {/* Related Services Section */}
      {/* Our Locations */}

      <OurLocations />


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/analytics"
        title="Complete Digital Marketing Solutions"
        description="Enhance your analytics with our comprehensive digital marketing services designed for Mumbai businesses"
      />

      {/* Comprehensive SEO Content Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">📊</span>
              <span>The Ultimate Guide to Analytics & Reporting in Mumbai</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Master <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Data Analytics</span><br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">For Mumbai Businesses</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about implementing powerful analytics to drive business growth in India&apos;s most competitive market
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Content Block 1 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Why Analytics is Critical for Mumbai Businesses</h3>
                  </div>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p>
                    In Mumbai&apos;s hyper-competitive business environment—from bustling retail markets in Colaba to tech startups in BKC, from e-commerce giants in Andheri to financial services in Fort—data-driven decision making isn&apos;t optional, it&apos;s essential for survival. Without proper analytics, you&apos;re essentially flying blind, making expensive marketing decisions based on gut feelings rather than facts.
                  </p>
                  <p>
                    Analytics transforms raw data into actionable insights. Instead of guessing which marketing channels work, you know exactly where every rupee goes and what returns it generates. Mumbai businesses face unique challenges: diverse customer demographics, intense competition, high advertising costs, and rapidly changing consumer behavior. Analytics helps you navigate these challenges by providing real-time visibility into what&apos;s working and what&apos;s not.
                  </p>
                  <p>
                    The stakes are high in Mumbai. A single wrong marketing decision can cost lakhs of rupees. Proper analytics implementation—Google Analytics 4, conversion tracking, attribution modeling, custom dashboards—ensures every decision is backed by data, dramatically reducing risk while maximizing ROI. Our clients typically recover 30-45% of wasted marketing spend within the first quarter of implementation.
                  </p>
                </div>
              </div>

              {/* Content Block 2 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-xl">
                    💰
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Key Benefits of Professional Analytics Implementation</h3>
                  </div>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p className="font-semibold text-white">1. Marketing Budget Optimization</p>
                  <p>
                    Stop wasting money on underperforming channels. Advanced attribution modeling reveals which touchpoints drive conversions. One e-commerce client discovered 40% of their Google Ads budget was going to non-converting keywords—we reallocated that ₹8L/month to high-performing campaigns, doubling their ROAS within 60 days.
                  </p>
                  
                  <p className="font-semibold text-white">2. Customer Journey Insights</p>
                  <p>
                    Understand how Mumbai customers find, research, and purchase from you. Multi-touch attribution shows the complete journey—from initial awareness through social media to final purchase via Google search. This visibility helps you optimize each touchpoint for maximum conversion, reducing customer acquisition costs by 25-40%.
                  </p>
                  
                  <p className="font-semibold text-white">3. Real-Time Performance Monitoring</p>
                  <p>
                    Custom dashboards provide instant visibility into KPIs that matter—revenue, conversions, traffic sources, user behavior. Mumbai&apos;s fast-paced market demands quick reactions. When a campaign underperforms, you know within hours, not weeks, allowing immediate optimization before significant budget waste.
                  </p>
                  
                  <p className="font-semibold text-white">4. Competitive Advantage Through Data</p>
                  <p>
                    While competitors rely on intuition, you make decisions backed by concrete evidence. Identify emerging trends before they become mainstream, spot revenue opportunities others miss, and optimize operations based on actual user behavior patterns rather than assumptions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Content Block 3 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-xl">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Essential Analytics Tools for Mumbai Market</h3>
                  </div>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p className="font-semibold text-white">Google Analytics 4 (GA4)</p>
                  <p>
                    The foundation of digital analytics. GA4 provides comprehensive insights into website traffic, user behavior, conversion paths, and audience demographics. We implement advanced features like enhanced e-commerce tracking, cross-domain measurement, and custom event tracking tailored to Mumbai businesses&apos; unique needs.
                  </p>
                  
                  <p className="font-semibold text-white">Google Tag Manager (GTM)</p>
                  <p>
                    Centralized tag management eliminates dependency on developers for tracking updates. Deploy conversion pixels, remarketing tags, and event tracking instantly. Our GTM implementations include comprehensive data layer setup, error tracking, and validation to ensure 99.9% tracking accuracy.
                  </p>
                  
                  <p className="font-semibold text-white">Data Visualization & Dashboards</p>
                  <p>
                    Custom Looker Studio (formerly Data Studio) dashboards transform complex data into visual insights. Executive dashboards showing revenue metrics, marketing dashboards tracking campaign performance, operations dashboards monitoring website health—all updating in real-time, accessible from any device.
                  </p>
                  
                  <p className="font-semibold text-white">Heatmaps & Session Recordings</p>
                  <p>
                    See exactly how users interact with your website. Hotjar and Microsoft Clarity reveal where users click, scroll, and get stuck. One client discovered users couldn&apos;t find their mobile checkout button—fixing this simple UX issue increased mobile conversions by 35%.
                  </p>
                </div>
              </div>

              {/* Content Block 4 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-xl">
                    📈
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Advanced Analytics Strategies That Drive Results</h3>
                  </div>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p className="font-semibold text-white">Conversion Rate Optimization (CRO)</p>
                  <p>
                    Analytics identifies conversion bottlenecks—pages with high bounce rates, forms with drop-offs, checkout steps causing abandonment. We use funnel analysis, A/B testing data, and user behavior insights to systematically improve conversion rates. Average improvement: 25-60% within 3-6 months.
                  </p>
                  
                  <p className="font-semibold text-white">Attribution Modeling</p>
                  <p>
                    Mumbai customers don&apos;t convert on first touch. They research across multiple channels—Google search, Instagram, YouTube, word-of-mouth—before buying. Multi-touch attribution reveals the true value of each channel, preventing you from cutting marketing that appears ineffective but actually drives crucial awareness.
                  </p>
                  
                  <p className="font-semibold text-white">Predictive Analytics & Forecasting</p>
                  <p>
                    Historical data predicts future performance. Machine learning models forecast revenue, identify high-value customer segments, predict churn risk, and recommend optimal pricing strategies. Stay ahead of Mumbai market trends instead of reacting to them.
                  </p>
                  
                  <p className="font-semibold text-white">Custom Reporting & Automation</p>
                  <p>
                    Automated weekly/monthly reports delivered to stakeholders save countless hours. Custom alerts notify you when KPIs deviate from targets—traffic drops, conversion rate declines, revenue spikes. Respond to opportunities and threats immediately, not after monthly reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statistics */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-2xl p-6 border border-orange-300/30 text-center">
              <div className="text-4xl mb-2">95%</div>
              <div className="text-white font-semibold">Tracking Accuracy</div>
              <div className="text-blue-200 text-sm mt-2">Validated & Tested</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-6 border border-green-300/30 text-center">
              <div className="text-4xl mb-2">500+</div>
              <div className="text-white font-semibold">Dashboards Built</div>
              <div className="text-blue-200 text-sm mt-2">Custom Analytics</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-300/30 text-center">
              <div className="text-4xl mb-2">200+</div>
              <div className="text-white font-semibold">Brands Served</div>
              <div className="text-blue-200 text-sm mt-2">Across Industries</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-300/30 text-center">
              <div className="text-4xl mb-2">24/7</div>
              <div className="text-white font-semibold">Real-Time Data</div>
              <div className="text-blue-200 text-sm mt-2">Always Updated</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6">
              <span className="text-3xl">❓</span>
              <span className="text-white font-semibold">Frequently Asked Questions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Got <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-pulse">Questions?</span>
              <br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">We&apos;ve Got Answers!</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about analytics services in Mumbai ✨
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                  <span>What analytics services do you provide in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We offer comprehensive analytics services including Google Analytics setup (GA4), custom dashboard creation, conversion tracking, ROI measurement, marketing attribution, performance reporting, e-commerce analytics, mobile app tracking, and data visualization. Our team provides end-to-end solutions from implementation to ongoing optimization for Mumbai businesses.</p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">💰</span>
                  <span>How much do analytics services cost in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Analytics services in Mumbai range from ₹15,000-₹75,000/month depending on complexity. Basic GA4 setup starts at ₹15,000, standard dashboards ₹25,000-₹40,000/month, and enterprise solutions ₹50,000+. We offer customized packages including setup, tracking implementation, reporting, and ongoing optimization. Free initial audit included!</p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">📱</span>
                  <span>Do you help with GA4 migration in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Yes! We specialize in GA4 migration for Mumbai businesses. Our service includes data migration from Universal Analytics, custom event setup, e-commerce tracking configuration, conversion tracking, goal recreation, historical data preservation, team training, and post-migration optimization. We ensure zero data loss during transition.</p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                  <span>How long does analytics setup take?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Basic GA4 setup takes 3-5 days, standard implementation with custom events 1-2 weeks, and enterprise solutions 2-4 weeks. Timeline includes account setup, tracking code installation, goal configuration, testing, dashboard creation, and team training. Data starts flowing immediately after setup!</p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🔍</span>
                  <span>What metrics should Mumbai businesses track?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Essential metrics include: Website traffic (sessions, users, pageviews), Conversion rate (goal completions, transactions), ROI (revenue per channel, ROAS), User behavior (bounce rate, time on site, pages per session), Traffic sources (organic, paid, social, referral), E-commerce metrics (cart abandonment, average order value), and Engagement (scroll depth, video views, downloads). We customize KPIs based on your business goals.</p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">📊</span>
                  <span>Can you create custom dashboards for my business?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Absolutely! We create custom dashboards using Google Data Studio, Tableau, or Power BI tailored to your specific needs. Dashboards include real-time KPIs, automated updates, visual charts, trend analysis, comparative metrics, and executive summaries. We design mobile-friendly dashboards accessible 24/7 with automated email reports.</p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🎓</span>
                  <span>Do you provide analytics training in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Yes! We offer comprehensive analytics training programs for Mumbai businesses including Google Analytics fundamentals, GA4 advanced features, dashboard creation, report interpretation, conversion optimization, and data-driven decision making. Training includes hands-on workshops, video tutorials, documentation, and ongoing support to make your team analytics-proficient.</p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🏭</span>
                  <span>What industries do you provide analytics services for in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We serve all Mumbai industries including E-commerce (product analytics, cart tracking), SaaS (user behavior, churn analysis), Healthcare (patient journey, appointment tracking), Education (enrollment funnels, course completion), Finance (lead quality, conversion optimization), Real Estate (property views, inquiry tracking), Hospitality (booking analytics, revenue management), Manufacturing (B2B lead tracking), and Retail (offline+online attribution). Each industry gets customized tracking and reporting.</p>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🔒</span>
                  <span>How do you ensure data accuracy in analytics?</span>
                </span>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We maintain 95% accuracy through rigorous quality processes: proper tracking code implementation, bot traffic filtering, cross-domain tracking setup, duplicate transaction prevention, regular data validation audits, testing across devices/browsers, UTM parameter standardization, and GDPR-compliant data collection. We perform monthly accuracy checks and provide detailed audit reports to ensure reliable insights.</p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-teal-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🤝</span>
                  <span>What makes MyDigital Crown the best analytics agency in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>MyDigital Crown stands out with: 500+ dashboards created with proven accuracy, Google Analytics certified experts with 8+ years experience, 95% data accuracy rate with rigorous validation, 200+ Mumbai brands served across industries, Real-time dashboards with automated insights, 24/7 dedicated support team, Free analytics audit and consultation, Custom solutions tailored to business goals, GDPR-compliant data security, and Proven ROI improvement track record. We don&apos;t just track data - we turn insights into actionable growth strategies!</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Voice Search Optimization Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Quick Answers for Voice Search
            </h2>
            <p className="text-lg text-gray-600">Common questions answered instantly</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Where to find analytics services in Mumbai?</h3>
              <p className="text-gray-700">MyDigital Crown offers professional analytics services in Mumbai with 500+ dashboards created, 95% accuracy, and Google Analytics certified experts. Serving Andheri, Bandra, South Mumbai, and all areas.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-lg text-gray-900 mb-3">How much does analytics setup cost?</h3>
              <p className="text-gray-700">Analytics services start from ₹15,000 for basic GA4 setup, ₹25,000-₹40,000/month for standard dashboards, and ₹50,000+ for enterprise solutions. Free initial audit included!</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-lg text-gray-900 mb-3">When will I see analytics results?</h3>
              <p className="text-gray-700">Data flows immediately after setup! Basic GA4 setup takes 3-5 days, standard implementation 1-2 weeks, enterprise solutions 2-4 weeks. Real-time dashboards available 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      <Footer />
    </>
  )
}
