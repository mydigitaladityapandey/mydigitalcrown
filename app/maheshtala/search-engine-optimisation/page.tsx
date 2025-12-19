import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EnquiryForm from '@/app/components/EnquiryForm'
import TrustedBrands from '@/app/components/TrustedBrands'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from "next/link";
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Company Maheshtala | 400+ Clients Ranked #1 | MyDigital',
  description: 'SEO Company Maheshtala. 400+ Clients Ranked #1 | 500% Traffic Growth | Local & National SEO | Google Certified Experts. Call +91-83695-11877',
  keywords: [
    'seo company in maheshtala',
    'seo company maheshtala',
    'seo services maheshtala',
    'seo agency maheshtala',
    'best seo company maheshtala',
    'maheshtala seo company',
    'seo services in maheshtala',
    'search engine optimization maheshtala',
    'seo consultant maheshtala',
    'professional seo services maheshtala',
    'top seo company in maheshtala',
    'seo experts maheshtala',
    'seo agency in maheshtala',
    'maheshtala seo services',
    'local seo maheshtala',
    'seo specialist maheshtala',
    'seo optimization maheshtala',
    'affordable seo maheshtala',
    'seo firm maheshtala',
    'organic seo maheshtala',
    'seo marketing maheshtala',
    'google seo maheshtala',
    'maheshtala seo expert',
    'seo packages maheshtala',
    'seo solutions maheshtala',
    'enterprise seo maheshtala',
    'seo consultant in maheshtala',
    'white hat seo maheshtala',
    'maheshtala seo agency',
    'best seo services maheshtala',
    'seo company for small business maheshtala',
    'ecommerce seo maheshtala',
    'technical seo maheshtala',
    'maheshtala seo optimization',
    'seo and digital marketing maheshtala'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'SEO & Search Marketing Services',
  classification: 'Search Engine Optimization & Ranking',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'SEO Company In Maheshtala | #1 SEO Services Agency',
    description: 'Top SEO Company In Maheshtala. 400+ Clients Ranked #1. 500% Traffic Growth. Expert SEO Services.',
    url: 'https://mydigitalcrown.in/services/search-engine-optimisation',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/seo-company-maheshtala.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Company In Maheshtala - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company In Maheshtala | #1 SEO Services Agency',
    description: 'Top SEO Company In Maheshtala. 400+ Clients Ranked #1. 500% Traffic Growth. Expert SEO Services.',
    images: ['https://mydigitalcrown.in/images/seo-company-maheshtala.jpg'],
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
  alternates: {
    canonical: 'https://mydigitalcrown.in/maheshtala/search-engine-optimisation',
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

export default function SEO() {
  // Comprehensive Schema Markup for 100% SEO/VSO/ASO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Service Schema
      {
        "@type": "Service",
        "name": "SEO Services",
        "description": "Professional Search Engine Optimization services in Maheshtala delivering 500% traffic growth and #1 Google rankings",
        "provider": {
          "@type": "Organization",
          "name": "MyDigital Crown",
          "url": "https://mydigitalcrown.in"
        },
        "areaServed": {
          "@type": "City",
          "name": "Maheshtala",
          "addressRegion": "West Bengal",
          "addressCountry": "IN"
        },
        "serviceType": "Search Engine Optimization",
        "offers": {
          "@type": "Offer",
          "price": "15000",
          "priceCurrency": "INR",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "description": "SEO packages starting from ₹15,000/month for small businesses"
        }
      },
      // 2. Organization Schema
      {
        "@type": "Organization",
        "name": "MyDigital Crown",
        "url": "https://mydigitalcrown.in",
        "logo": "https://mydigitalcrown.in/logo.png",
        "description": "Maheshtala's #1 SEO Company delivering 500% traffic growth for 400+ clients",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Chembur",
          "addressLocality": "Maheshtala",
          "addressRegion": "West Bengal",
          "postalCode": "700141",
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
          "https://www.linkedin.com/company/mydigitalcrown",
          "https://twitter.com/mydigitalcrown"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "400",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      // 3. WebPage Schema
      {
        "@type": "WebPage",
        "name": "SEO Company In Maheshtala | #1 SEO Services Agency",
        "description": "Top SEO Company In Maheshtala. 400+ Clients Ranked #1. 500% Traffic Growth. Expert SEO Services.",
        "url": "https://mydigitalcrown.in/services/search-engine-optimisation",
        "inLanguage": "en-IN",
        "isPartOf": {
          "@type": "WebSite",
          "name": "MyDigital Crown",
          "url": "https://mydigitalcrown.in"
        },
        "about": {
          "@type": "Thing",
          "name": "SEO Services",
          "description": "Professional Search Engine Optimization services"
        },
        "keywords": "seo company in maheshtala, seo services maheshtala, seo agency maheshtala, best seo company maheshtala"
      },
      // 4. BreadcrumbList Schema
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
            "name": "SEO Services",
            "item": "https://mydigitalcrown.in/services/search-engine-optimisation"
          }
        ]
      },
      // 5. FAQPage Schema
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What SEO services does your Maheshtala company provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide comprehensive SEO services including on-page optimization, off-page link building, technical SEO audits, local SEO for Maheshtala businesses, content strategy, keyword research, competitor analysis, and monthly performance reporting. Our services are customized to your business goals and industry competition."
            }
          },
          {
            "@type": "Question",
            "name": "How much do your SEO services cost in Maheshtala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our SEO packages start at ₹15,000/month for small businesses with 5-10 target keywords. Mid-size businesses typically invest ₹30,000-50,000/month for competitive industries. Enterprise SEO campaigns start at ₹1,00,000/month. We offer custom pricing based on your specific needs, competition level, and business goals."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see SEO results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial improvements in rankings and traffic typically appear within 2-3 months. Significant results usually occur within 4-6 months of consistent SEO work. Highly competitive keywords may take 6-12 months to reach top positions. SEO is a long-term investment that delivers compounding returns over time."
            }
          },
          {
            "@type": "Question",
            "name": "Do you guarantee #1 Google rankings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No legitimate SEO company can guarantee specific rankings as Google's algorithm is constantly evolving. However, we guarantee significant improvements in rankings, organic traffic, and online visibility using proven white-hat strategies. We've helped 400+ clients achieve #1 rankings through strategic, sustainable SEO practices."
            }
          },
          {
            "@type": "Question",
            "name": "Do you use white-hat or black-hat SEO techniques?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We exclusively use 100% white-hat, Google-approved SEO techniques. Our strategies comply with all search engine guidelines, ensuring long-term sustainable rankings without risk of penalties. We never engage in keyword stuffing, cloaking, link schemes, or any manipulative tactics that could harm your website's reputation."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with local SEO for Maheshtala businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! Local SEO is one of our specialties. We optimize Google Business Profile, build local citations, create location-specific content, earn local backlinks, and implement schema markup for local businesses. We help Maheshtala businesses dominate local search results and Google Maps rankings in their service areas."
            }
          }
        ]
      },
      // 6. ItemList Schema (Services)
      {
        "@type": "ItemList",
        "name": "SEO Services Offered",
        "description": "Comprehensive SEO services for Maheshtala businesses",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Technical SEO Optimization"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "On-Page SEO Excellence"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Content Strategy & Creation"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Off-Page SEO & Link Building"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Local SEO for Maheshtala"
          }
        ]
      },
      // 7. Review Schema
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "SEO Services",
          "provider": {
            "@type": "Organization",
            "name": "MyDigital Crown"
          }
        },
        "author": {
          "@type": "Person",
          "name": "Satisfied Client"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "MyDigital Crown delivered exceptional SEO results. Our organic traffic increased by 500% in 6 months and we now rank #1 for our primary keywords."
      },
      // 8. HowTo Schema
      {
        "@type": "HowTo",
        "name": "How to Get Started with SEO Services",
        "description": "Step-by-step process to start your SEO campaign with MyDigital Crown",
        "totalTime": "P1D",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": "15000"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Free SEO Audit",
            "text": "Schedule a free consultation and comprehensive SEO audit to analyze your website's current performance",
            "url": "https://mydigitalcrown.in/services/search-engine-optimisation"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Strategy Development",
            "text": "Receive a custom SEO strategy tailored to your business goals and competition level",
            "url": "https://mydigitalcrown.in/services/search-engine-optimisation"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Campaign Launch",
            "text": "Begin implementation with technical fixes, content optimization, and link building",
            "url": "https://mydigitalcrown.in/services/search-engine-optimisation"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Monthly Reporting",
            "text": "Track progress with detailed monthly reports showing rankings, traffic, and ROI",
            "url": "https://mydigitalcrown.in/services/search-engine-optimisation"
          }
        ]
      },
      // 9. Article Schema
      {
        "@type": "Article",
        "headline": "Complete Guide to SEO Company Services in Maheshtala",
        "description": "Comprehensive guide to choosing and working with the best SEO company in Maheshtala",
        "author": {
          "@type": "Organization",
          "name": "MyDigital Crown"
        },
        "publisher": {
          "@type": "Organization",
          "name": "MyDigital Crown",
          "logo": {
            "@type": "ImageObject",
            "url": "https://mydigitalcrown.in/logo.png"
          }
        },
        "datePublished": "2024-01-01",
        "dateModified": "2025-01-07",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://mydigitalcrown.in/services/search-engine-optimisation"
        },
        "image": "https://mydigitalcrown.in/images/seo-company-maheshtala.jpg"
      },
      // 10. LocalBusiness Schema
      {
        "@type": "LocalBusiness",
        "name": "MyDigital Crown - SEO Company Maheshtala",
        "description": "Maheshtala's leading SEO company delivering 500% traffic growth",
        "url": "https://mydigitalcrown.in",
        "telephone": "+91-83695-11877",
        "email": "info@mydigitalcrown.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Chembur",
          "addressLocality": "Maheshtala",
          "addressRegion": "West Bengal",
          "postalCode": "700141",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "22.4862",
          "longitude": "88.2431"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "₹₹",
        "image": "https://mydigitalcrown.in/images/seo-company-maheshtala.jpg",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "400"
        }
      },
      // 11. VideoObject Schema
      {
        "@type": "VideoObject",
        "name": "How SEO Company Services Work in Maheshtala",
        "description": "Learn how our SEO company delivers results for Maheshtala businesses",
        "thumbnailUrl": "https://mydigitalcrown.in/images/seo-video-thumbnail.jpg",
        "uploadDate": "2024-01-01",
        "duration": "PT5M",
        "contentUrl": "https://mydigitalcrown.in/videos/seo-services.mp4"
      },
      // 12. Course Schema
      {
        "@type": "Course",
        "name": "SEO Training for Businesses",
        "description": "Learn advanced SEO strategies from Maheshtala's top SEO company",
        "provider": {
          "@type": "Organization",
          "name": "MyDigital Crown"
        },
        "offers": {
          "@type": "Offer",
          "category": "Paid",
          "price": "25000",
          "priceCurrency": "INR"
        }
      },
      // 13. SpecialAnnouncement Schema
      {
        "@type": "SpecialAnnouncement",
        "name": "Free SEO Audit for Maheshtala Businesses",
        "text": "Get a comprehensive SEO audit worth ₹10,000 absolutely free when you contact us today",
        "datePosted": "2025-01-07",
        "expires": "2025-12-31",
        "url": "https://mydigitalcrown.in/services/search-engine-optimisation"
      },
      // 14. AggregateRating Schema
      {
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "Service",
          "name": "SEO Services",
          "provider": {
            "@type": "Organization",
            "name": "MyDigital Crown"
          }
        },
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "400"
      },
      // 15. Offer Schema
      {
        "@type": "Offer",
        "name": "SEO Services Package",
        "description": "Professional SEO services for Maheshtala businesses",
        "price": "15000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://mydigitalcrown.in/services/search-engine-optimisation",
        "priceValidUntil": "2025-12-31",
        "seller": {
          "@type": "Organization",
          "name": "MyDigital Crown"
        },
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Complete search engine optimization services"
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
      
      {/* Noscript Fallback */}
      <noscript>
        <div>
          <p>MyDigital Crown - SEO Company In Maheshtala</p>
          <p>Top SEO Company In Maheshtala. 400+ Clients Ranked #1. 500% Traffic Growth.</p>
          <p>Call: +91-83695-11877 | Email: info@mydigitalcrown.in</p>
          <p>Address: Chembur, Maheshtala, West Bengal - 700141</p>
        </div>
      </noscript>

      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Search Engine Optimization Maheshtala Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Maheshtala&apos;s #1 SEO Company</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                SEO Company In Maheshtala - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  Expert SEO Services | 400+ Clients Ranked #1 | 500% Traffic Growth Guaranteed
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  On-Page SEO | Off-Page SEO | Technical SEO | Local SEO | Content Strategy | Analytics
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
                    <span>Get Free SEO Audit</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">1000+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Keywords Ranked</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">500%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Traffic Growth</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">400+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Clients Ranked #1</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">White Hat SEO</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Voice Search Quick Answers Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-4">
              <span className="text-white font-semibold">🎤 Voice Search Optimized Answers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Answers About SEO Company In Maheshtala
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Where Card */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Where is the best SEO company in Maheshtala?</h3>
              <p className="text-blue-100 leading-relaxed">
                MyDigital Crown is Maheshtala&apos;s leading SEO company with offices in Chembur, Andheri, Bandra, Powai, and Thane. We serve clients across Maheshtala, Navi Maheshtala, and Thane with expert SEO services that deliver real results.
              </p>
            </div>

            {/* How Much Card */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">How much do SEO services cost in Maheshtala?</h3>
              <p className="text-blue-100 leading-relaxed">
                Professional SEO services in Maheshtala range from ₹15,000/month for small businesses to ₹1,00,000+/month for enterprise solutions. Pricing depends on competition, website size, and business goals. We offer custom packages to fit every budget.
              </p>
            </div>

            {/* When Card */}
            <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-white mb-4">When will I see SEO results in Maheshtala?</h3>
              <p className="text-blue-100 leading-relaxed">
                Initial SEO improvements appear within 2-3 months. Significant rankings and traffic growth typically occur within 4-6 months. Competitive industries may take 6-12 months for top rankings. SEO is a long-term investment with compounding returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About SEO Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🔍</span>
              SEO Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Services</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dominate search results with proven SEO strategies that deliver sustainable organic growth
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                    alt="SEO Services Maheshtala"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📈 Proven Results</h3>
                <p className="text-gray-700 leading-relaxed">
                  Track record of ranking 400+ clients on Google&apos;s first page with sustainable white-hat strategies.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Data-Driven Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Advanced analytics and keyword research to target high-converting search terms with maximum ROI.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ White Hat Only</h3>
                <p className="text-gray-700 leading-relaxed">
                  100% Google-approved techniques that ensure long-term rankings without risk of penalties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our SEO <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive SEO solutions to dominate search rankings and drive qualified organic traffic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📄</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">On-Page SEO</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Optimize every element of your website for search engines and user experience.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Keyword Research</li>
                  <li className="flex items-start gap-2">✓ Content Optimization</li>
                  <li className="flex items-start gap-2">✓ Meta Tags & Headers</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔗</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Off-Page SEO</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Build authority and trust with high-quality backlinks and brand mentions.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Link Building</li>
                  <li className="flex items-start gap-2">✓ Guest Posting</li>
                  <li className="flex items-start gap-2">✓ Brand Mentions</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚙️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Technical SEO</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Fix technical issues that prevent search engines from crawling and indexing your site.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Site Speed Optimization</li>
                  <li className="flex items-start gap-2">✓ Mobile Optimization</li>
                  <li className="flex items-start gap-2">✓ Schema Markup</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Local SEO</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Dominate local search results and Google Maps for location-based searches.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Google Business Profile</li>
                  <li className="flex items-start gap-2">✓ Local Citations</li>
                  <li className="flex items-start gap-2">✓ Map Pack Rankings</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Content Strategy</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Create SEO-optimized content that ranks well and engages your target audience.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Content Planning</li>
                  <li className="flex items-start gap-2">✓ SEO Copywriting</li>
                  <li className="flex items-start gap-2">✓ Blog Strategy</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">SEO Analytics</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Track rankings, traffic, and conversions with comprehensive SEO reporting.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Rank Tracking</li>
                  <li className="flex items-start gap-2">✓ Traffic Analysis</li>
                  <li className="flex items-start gap-2">✓ Monthly Reports</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Google Page Speed</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Optimize your website&apos;s loading speed to improve rankings and user experience.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Core Web Vitals</li>
                  <li className="flex items-start gap-2">✓ Performance Optimization</li>
                  <li className="flex items-start gap-2">✓ Speed Score Improvement</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">LLM SEO</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Optimize for Large Language Models like ChatGPT, Gemini, and Claude for AI search visibility.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ AI Search Optimization</li>
                  <li className="flex items-start gap-2">✓ LLM-Friendly Content</li>
                  <li className="flex items-start gap-2">✓ Conversational Queries</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-teal-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-teal-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🧠</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">AI SEO</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Leverage artificial intelligence to automate and enhance your SEO strategies.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ AI Content Generation</li>
                  <li className="flex items-start gap-2">✓ Predictive Analytics</li>
                  <li className="flex items-start gap-2">✓ Smart Keyword Research</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎤</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">VSO (Voice Search)</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Optimize for voice assistants like Alexa, Siri, and Google Assistant queries.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Conversational Keywords</li>
                  <li className="flex items-start gap-2">✓ Featured Snippets</li>
                  <li className="flex items-start gap-2">✓ Question-Based Content</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-pink-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">�</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">ASO (Answer Search)</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Optimize content to appear in answer boxes and position zero on search engines.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Featured Snippets</li>
                  <li className="flex items-start gap-2">✓ Answer Box Optimization</li>
                  <li className="flex items-start gap-2">✓ Direct Answer Formats</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-emerald-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🌱</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Organic SEO</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Achieve sustainable long-term growth with white-hat organic SEO strategies.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Natural Link Building</li>
                  <li className="flex items-start gap-2">✓ Quality Content Marketing</li>
                  <li className="flex items-start gap-2">✓ Sustainable Rankings</li>
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
              Ready to Rank #1<br />
              <span className="text-yellow-300">on Google?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our SEO experts create a customized strategy to dominate search results and drive organic growth!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Free SEO Audit</span>
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
                <span>Google Certified SEO Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>400+ #1 Rankings</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>500% Traffic Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        
        {/* Floating Emoji Decorations */}
        <div className="absolute top-20 left-20 text-6xl opacity-20 animate-bounce">🔍</div>
        <div className="absolute top-40 right-20 text-6xl opacity-20 animate-bounce animation-delay-2000">📈</div>
        <div className="absolute bottom-20 left-1/3 text-6xl opacity-20 animate-bounce animation-delay-4000">🚀</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <span className="text-white font-semibold">❓ Frequently Asked Questions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Everything About <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">SEO Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get answers to the most common questions about our SEO company and services in Maheshtala
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-blue-300/50 transition-all duration-300 hover:shadow-blue-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    What SEO services does your Maheshtala company provide?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  We provide comprehensive SEO services including on-page optimization, off-page link building, technical SEO audits, local SEO for Maheshtala businesses, content strategy, keyword research, competitor analysis, and monthly performance reporting. Our services are customized to your business goals and industry competition.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-purple-300/50 transition-all duration-300 hover:shadow-purple-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">💰</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    How much do your SEO services cost in Maheshtala?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Our SEO packages start at ₹15,000/month for small businesses with 5-10 target keywords. Mid-size businesses typically invest ₹30,000-50,000/month for competitive industries. Enterprise SEO campaigns start at ₹1,00,000/month. We offer custom pricing based on your specific needs, competition level, and business goals.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-green-300/50 transition-all duration-300 hover:shadow-green-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                    How long does it take to see SEO results?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Initial improvements in rankings and traffic typically appear within 2-3 months. Significant results usually occur within 4-6 months of consistent SEO work. Highly competitive keywords may take 6-12 months to reach top positions. SEO is a long-term investment that delivers compounding returns over time.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-yellow-300/50 transition-all duration-300 hover:shadow-yellow-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔍</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    Do you guarantee #1 Google rankings?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  No legitimate SEO company can guarantee specific rankings as Google&apos;s algorithm is constantly evolving. However, we guarantee significant improvements in rankings, organic traffic, and online visibility using proven white-hat strategies. We&apos;ve helped 400+ clients achieve #1 rankings through strategic, sustainable SEO practices.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-pink-300/50 transition-all duration-300 hover:shadow-pink-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">✅</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                    Do you use white-hat or black-hat SEO techniques?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  We exclusively use 100% white-hat, Google-approved SEO techniques. Our strategies comply with all search engine guidelines, ensuring long-term sustainable rankings without risk of penalties. We never engage in keyword stuffing, cloaking, link schemes, or any manipulative tactics that could harm your website&apos;s reputation.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-orange-300/50 transition-all duration-300 hover:shadow-orange-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">📊</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                    What kind of reporting do you provide?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  We provide comprehensive monthly SEO reports including keyword ranking updates, organic traffic growth, backlink acquisition, technical improvements implemented, content published, competitor analysis, and ROI metrics. Reports include actionable insights and recommendations for the next month&apos;s strategy.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-cyan-300/50 transition-all duration-300 hover:shadow-cyan-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🏙️</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Can you help with local SEO for Maheshtala businesses?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Absolutely! Local SEO is one of our specialties. We optimize Google Business Profile, build local citations, create location-specific content, earn local backlinks, and implement schema markup for local businesses. We help Maheshtala businesses dominate local search results and Google Maps rankings in their service areas.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-red-300/50 transition-all duration-300 hover:shadow-red-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🛍️</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                    Do you work with e-commerce websites?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Yes, we specialize in e-commerce SEO for platforms like Shopify, WooCommerce, Magento, and custom solutions. Our e-commerce SEO includes product page optimization, category structure, technical SEO for large catalogs, schema markup for products, content marketing, and conversion rate optimization.
                </p>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-indigo-300/50 transition-all duration-300 hover:shadow-indigo-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔧</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    What is included in technical SEO services?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Technical SEO includes site speed optimization, mobile responsiveness, Core Web Vitals improvement, XML sitemap creation, robots.txt configuration, canonical tags, structured data implementation, HTTPS security, fixing crawl errors, redirect management, and site architecture optimization for better crawlability and indexation.
                </p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-teal-300/50 transition-all duration-300 hover:shadow-teal-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">📝</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    Do you provide content writing for SEO?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Yes, our SEO packages include professional content writing services. Our experienced writers create SEO-optimized blog posts, articles, website copy, and product descriptions that rank well while engaging readers. All content is original, researched, and optimized for target keywords with natural readability.
                </p>
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-violet-300/50 transition-all duration-300 hover:shadow-violet-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔗</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    How do you build backlinks for clients?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-violet-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  We build high-quality backlinks through guest posting on authoritative sites, digital PR campaigns, resource page outreach, broken link building, industry directories, and strategic partnerships. We focus on earning links from relevant, high-authority websites that boost your domain authority and rankings naturally.
                </p>
              </div>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-lime-300/50 transition-all duration-300 hover:shadow-lime-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">💡</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-lime-300 transition-colors">
                    How do I get started with your SEO services?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-lime-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Simply call us at +91-83695-11877 or fill out our contact form. We&apos;ll schedule a free SEO consultation and audit to analyze your current rankings, identify opportunities, and create a custom strategy. After discussing your goals and budget, we&apos;ll provide a detailed proposal with timelines and expected outcomes.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Understanding SEO Company Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-6">
                <span className="text-blue-300 font-semibold">🔍 Complete Guide</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Understanding <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">SEO Company Services</span> in Maheshtala
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Search Engine Optimization has become the cornerstone of digital marketing success for Maheshtala businesses. As an established SEO company serving Maheshtala&apos;s diverse business landscape, we understand that effective SEO is not just about rankings—it&apos;s about driving qualified traffic, converting visitors into customers, and building sustainable online growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Strategic SEO Planning</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every successful SEO campaign begins with comprehensive strategy development. We analyze your business objectives, target audience, market competition, and industry trends to create a customized roadmap. Our strategic approach ensures every SEO activity aligns with your revenue goals and brand positioning in the Maheshtala market.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-white mb-4">Data-Driven Methodology</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our SEO company relies on advanced analytics and performance metrics to guide every decision. We track keyword rankings, organic traffic patterns, user behavior, conversion rates, and ROI metrics. This data-driven approach allows us to continuously optimize campaigns, identify opportunities, and demonstrate measurable business impact to our Maheshtala clients.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Long-Term Growth Focus</h3>
                <p className="text-gray-300 leading-relaxed">
                  Unlike short-term marketing tactics, SEO builds compound value over time. Our Maheshtala SEO company focuses on sustainable strategies that create lasting competitive advantages. We prioritize building authoritative content, earning quality backlinks, and establishing your website as a trusted industry resource that maintains top rankings for years.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Core SEO Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Comprehensive <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SEO Services</span> Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our full-service SEO company delivers end-to-end optimization across all critical ranking factors, from technical infrastructure to content excellence and authority building.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 text-white text-3xl font-bold min-w-[80px] h-20 flex items-center justify-center">
                    01
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Technical SEO Optimization</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      The foundation of SEO success lies in technical excellence. Our Maheshtala SEO company conducts comprehensive technical audits to identify and resolve issues affecting your website&apos;s crawlability, indexability, and performance. We optimize site architecture, implement proper URL structures, fix broken links, improve site speed through code optimization and CDN implementation, ensure mobile responsiveness across all devices, and configure XML sitemaps and robots.txt files correctly.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      We also focus on Core Web Vitals—Google&apos;s key performance metrics including Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). By optimizing these technical elements, we ensure search engines can efficiently crawl, understand, and rank your website while providing exceptional user experiences that convert visitors into customers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4 text-white text-3xl font-bold min-w-[80px] h-20 flex items-center justify-center">
                    02
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">On-Page SEO Excellence</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      On-page optimization ensures every element of your web pages is perfectly aligned with search engine requirements and user expectations. Our SEO company in Maheshtala meticulously optimizes title tags, meta descriptions, header tags (H1-H6), and URL structures for maximum keyword relevance. We strategically place keywords in content while maintaining natural readability and user value.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Beyond keywords, we implement comprehensive schema markup to help search engines understand your content better and enable rich snippets in search results. We optimize images with descriptive alt text and compression, create compelling internal linking structures that distribute page authority, and ensure every page delivers clear value propositions with strong calls-to-action that drive conversions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-600/10 to-red-600/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-xl p-4 text-white text-3xl font-bold min-w-[80px] h-20 flex items-center justify-center">
                    03
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Content Strategy & Creation</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Content is the currency of SEO success. Our Maheshtala SEO company develops comprehensive content strategies based on keyword research, competitor gap analysis, and user intent mapping. We create high-quality, original content that answers user questions, solves problems, and establishes your brand as an industry authority.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Our content services include in-depth blog articles, comprehensive service pages, engaging product descriptions, informative guides and whitepapers, compelling case studies, and FAQ sections optimized for voice search. Every piece of content is researched, SEO-optimized, and designed to attract links naturally while providing genuine value that keeps readers engaged and drives conversions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-xl p-4 text-white text-3xl font-bold min-w-[80px] h-20 flex items-center justify-center">
                    04
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Off-Page SEO & Link Building</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Building website authority requires earning high-quality backlinks from relevant, authoritative sources. Our SEO company employs ethical, white-hat link building strategies including guest posting on industry publications, digital PR campaigns that earn media coverage, strategic partnerships with complementary businesses, and resource page outreach.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      We focus on earning links that drive referral traffic and boost domain authority rather than manipulative tactics that risk penalties. Our Maheshtala team has established relationships with publishers, bloggers, and industry influencers that help our clients earn authoritative backlinks that significantly impact rankings and brand visibility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-4 text-white text-3xl font-bold min-w-[80px] h-20 flex items-center justify-center">
                    05
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Local SEO for Maheshtala Businesses</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      For businesses serving Maheshtala customers, local SEO is critical. We optimize Google Business Profiles with accurate information, compelling descriptions, and regular posts. We build local citations across directories, optimize for &quot;near me&quot; searches, create location-specific landing pages, and implement local schema markup.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Our local SEO strategies help Maheshtala businesses dominate Google Maps results, appear in the Local Pack for relevant searches, and attract customers searching for services in specific Maheshtala neighborhoods like Andheri, Bandra, Powai, Chembur, and Thane. We manage reviews, respond to customer feedback, and build local authority that drives foot traffic and phone calls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Why Choose Our SEO Company */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Why Maheshtala Businesses <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Choose Us</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our track record of delivering measurable results for 400+ clients across industries sets us apart as Maheshtala&apos;s premier SEO company.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">🏆</div>
                <div className="text-4xl font-black text-white mb-2">500%</div>
                <p className="text-blue-300 font-semibold">Average Traffic Growth</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">⭐</div>
                <div className="text-4xl font-black text-white mb-2">400+</div>
                <p className="text-purple-300 font-semibold">Clients Ranked #1</p>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">📈</div>
                <div className="text-4xl font-black text-white mb-2">12+</div>
                <p className="text-pink-300 font-semibold">Years Experience</p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">💯</div>
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <p className="text-green-300 font-semibold">White-Hat Practices</p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Our Competitive Advantages:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 rounded-lg p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Proven Track Record</h4>
                    <p className="text-gray-300">Over 12 years delivering measurable SEO results for Maheshtala businesses across e-commerce, professional services, healthcare, real estate, and technology sectors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 rounded-lg p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Transparent Reporting</h4>
                    <p className="text-gray-300">Detailed monthly reports showing keyword rankings, traffic growth, conversions, and ROI with full transparency into our SEO activities and results.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-600 rounded-lg p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Industry Expertise</h4>
                    <p className="text-gray-300">Deep understanding of Maheshtala&apos;s competitive landscape, local search behavior, and market dynamics that inform effective SEO strategies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 rounded-lg p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Custom Strategies</h4>
                    <p className="text-gray-300">No cookie-cutter approaches—every SEO campaign is customized to your specific business goals, competition level, and target audience characteristics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: SEO Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Our Proven <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SEO Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We follow a systematic, data-driven approach that ensures consistent results and continuous improvement for our Maheshtala clients.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">1</div>
                  <h3 className="text-2xl font-bold text-white">Discovery & Audit</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  We begin with comprehensive website audits analyzing technical SEO, content quality, backlink profiles, and competitor strategies. This discovery phase identifies opportunities, prioritizes improvements, and establishes baseline metrics for measuring progress.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">2</div>
                  <h3 className="text-2xl font-bold text-white">Strategy Development</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  Based on audit findings, we develop customized SEO strategies aligned with your business objectives. This includes keyword targeting, content planning, technical improvements roadmap, link building strategies, and timeline expectations with clear deliverables.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">3</div>
                  <h3 className="text-2xl font-bold text-white">Implementation & Optimization</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  Our Maheshtala SEO team executes the strategy through technical fixes, on-page optimization, content creation, and link building campaigns. We implement changes methodically, testing and refining approaches based on performance data and algorithm updates.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-900/20 to-red-900/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">4</div>
                  <h3 className="text-2xl font-bold text-white">Monitoring & Reporting</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  Continuous monitoring of rankings, traffic, and conversions allows us to identify trends and opportunities quickly. Monthly reports provide transparency into SEO performance, competitive positioning, and ROI metrics that matter to your business.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">5</div>
                  <h3 className="text-2xl font-bold text-white">Continuous Improvement</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  SEO is never &quot;finished&quot;—it requires ongoing optimization and adaptation. We continuously test new strategies, expand keyword targeting, improve content, and build authority to maintain and improve rankings as competition and algorithms evolve.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Getting Started */}
          <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">Dominate</span> Search Rankings?
              </h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Partner with Maheshtala&apos;s leading SEO company to drive organic traffic, generate qualified leads, and achieve sustainable business growth through search engine optimization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-6xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us Today</h3>
                <p className="text-blue-200">+91-83695-11877</p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-blue-200">info@mydigitalcrown.in</p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Our Office</h3>
                <p className="text-blue-200">Chembur, Maheshtala</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">What You Get with Our SEO Services:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">Free comprehensive SEO audit worth ₹10,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">Custom SEO strategy tailored to your business</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">Dedicated account manager and SEO team</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">Monthly performance reports and strategy calls</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">100% white-hat SEO techniques guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">No long-term contracts—flexible engagement</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="tel:+918369511877" className="inline-block bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-110 transition-transform duration-300 shadow-2xl shadow-orange-500/50">
                Get Your Free SEO Audit Now →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Our Locations */}
      <OurLocations />

      {/* Related Services */}
      <RelatedServices 
        currentService="/services/search-engine-optimisation"
        title="Complete SEO Solutions"
        description="Enhance your SEO strategy with our comprehensive digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  );
}
