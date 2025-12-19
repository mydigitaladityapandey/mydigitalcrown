import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import TrustedBrands from '@/app/components/TrustedBrands'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Content Writer Mumbai | 5000+ Articles | 100% Original',
  description: 'SEO Content Writer Mumbai. 5000+ Articles | 100% Original Content | Keyword-Optimized Copy | Rank Higher on Google. Call +91-83695-11877',
  keywords: [
    'seo content writer in mumbai',
    'seo content writer mumbai',
    'content writing services mumbai',
    'seo content writing mumbai',
    'content writer in mumbai',
    'professional content writer mumbai',
    'seo copywriter mumbai',
    'blog writer mumbai',
    'website content writer mumbai',
    'freelance content writer mumbai',
    'content writing agency mumbai',
    'seo article writer mumbai',
    'digital content writer mumbai',
    'expert content writer mumbai',
    'mumbai content writing services',
    'best content writer in mumbai',
    'content creation services mumbai',
    'seo blog writing mumbai',
    'product description writer mumbai',
    'web copywriter mumbai',
    'content marketing mumbai',
    'seo writing services mumbai',
    'creative content writer mumbai',
    'technical content writer mumbai',
    'e-commerce content writer mumbai',
    'landing page copywriter mumbai',
    'content strategy mumbai',
    'content development mumbai',
    'seo content creation mumbai',
    'professional copywriting mumbai',
    'content writing company mumbai',
    'seo content specialist mumbai',
    'content writer for hire mumbai',
    'mumbai seo content services',
    'affordable content writer mumbai'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Content Writing Services',
  classification: 'SEO Content Writing & Copywriting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'SEO Content Writer in Mumbai | #1 SEO Content Writing Agency',
    description: 'Top SEO Content Writer in Mumbai. 5000+ Articles Written. 100% Original Content. Expert Content Writing Services.',
    url: 'https://mydigitalcrown.in/services/seo-content',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/seo-content-writer-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Content Writer in Mumbai - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Content Writer in Mumbai | #1 SEO Content Writing Agency',
    description: 'Top SEO Content Writer in Mumbai. 5000+ Articles Written. 100% Original Content. Expert Content Writing Services.',
    images: ['https://mydigitalcrown.in/images/seo-content-writer-mumbai.jpg'],
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
    canonical: 'https://mydigitalcrown.in/services/seo-content',
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

export default function SEOContentPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mydigitalcrown.in/services/seo-content#service",
        "name": "SEO Content Writing Services",
        "description": "Professional SEO content writing services in Mumbai. Blog posts, website copy, product descriptions, and SEO articles that rank and convert.",
        "provider": {
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO Content Writing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Blog Post Writing",
                "description": "SEO-optimized blog posts (500-2000 words) that rank on Google and engage readers"
              },
              "price": "500",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Copywriting",
                "description": "Persuasive website copy for homepages, service pages, and landing pages"
              },
              "price": "2000",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Product Description Writing",
                "description": "Compelling e-commerce product descriptions that drive sales"
              },
              "price": "100",
              "priceCurrency": "INR"
            }
          ]
        }
      },
      {
        "@type": "Organization",
        "@id": "https://mydigitalcrown.in/#organization",
        "name": "MyDigital Crown",
        "url": "https://mydigitalcrown.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mydigitalcrown.in/logo.png"
        },
        "description": "Leading digital marketing agency in Mumbai offering SEO, content writing, web development, and digital marketing services.",
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
          "https://www.linkedin.com/company/mydigitalcrown",
          "https://twitter.com/mydigitalcrown"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://mydigitalcrown.in/#localbusiness",
        "name": "MyDigital Crown - SEO Content Writer Mumbai",
        "image": "https://mydigitalcrown.in/images/seo-content-writer-mumbai.jpg",
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
        "priceRange": "₹₹",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "19:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://mydigitalcrown.in/services/seo-content#webpage",
        "url": "https://mydigitalcrown.in/services/seo-content",
        "name": "SEO Content Writer in Mumbai | #1 SEO Content Writing Agency",
        "description": "Top SEO Content Writer in Mumbai. 5000+ Articles Written. 100% Original Content. Expert Content Writing Services.",
        "isPartOf": {
          "@type": "WebSite",
          "name": "MyDigital Crown",
          "url": "https://mydigitalcrown.in"
        },
        "about": {
          "@id": "https://mydigitalcrown.in/services/seo-content#service"
        },
        "breadcrumb": {
          "@id": "https://mydigitalcrown.in/services/seo-content#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mydigitalcrown.in/services/seo-content#breadcrumb",
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
            "name": "SEO Content Writing",
            "item": "https://mydigitalcrown.in/services/seo-content"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://mydigitalcrown.in/services/seo-content#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What SEO content writing services do you offer in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer comprehensive SEO content writing services including blog posts, website copywriting, product descriptions, landing pages, SEO articles, email campaigns, social media content, and technical writing. Each piece is optimized for search engines while maintaining readability and engagement."
            }
          },
          {
            "@type": "Question",
            "name": "How much does SEO content writing cost in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our SEO content writing starts at ₹500 for a 500-word blog post. Website copywriting projects range from ₹2,000 to ₹10,000 depending on the number of pages. Complete content packages start at ₹15,000/month. We offer custom pricing based on your specific requirements and volume."
            }
          },
          {
            "@type": "Question",
            "name": "What is the turnaround time for content delivery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard blog posts (500-1000 words) are delivered within 2-3 business days. Longer articles (1500-2000 words) take 3-5 days. Website copywriting projects require 5-7 days. Rush delivery is available within 24-48 hours for urgent projects with priority service charges."
            }
          },
          {
            "@type": "Question",
            "name": "Is your content 100% original and plagiarism-free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely! All our content is written from scratch by experienced writers. We run every piece through Copyscape and Grammarly Premium to ensure 100% originality. We provide plagiarism reports upon request and guarantee that your content is unique and never recycled."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get started with your content writing services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply call us at +91-83695-11877 or fill out our contact form. We'll schedule a free consultation to discuss your content needs, target audience, goals, and budget. After understanding your requirements, we'll provide a custom quote and timeline for your project."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Get Professional SEO Content Written",
        "description": "Step-by-step process to get SEO-optimized content created for your business",
        "totalTime": "PT3D",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Discovery & Research",
            "text": "We understand your business, target audience, competitors, and goals. Conduct comprehensive keyword research and analyze search intent.",
            "itemListElement": [
              {
                "@type": "HowToDirection",
                "text": "Share your business details, target keywords, and content goals with our team."
              }
            ]
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Content Planning",
            "text": "Create detailed content outlines with logical flow, key points to cover, and strategic keyword placement.",
            "itemListElement": [
              {
                "@type": "HowToDirection",
                "text": "Review and approve the content outline and structure before writing begins."
              }
            ]
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Expert Writing",
            "text": "Experienced writers craft engaging, informative content that balances SEO optimization with natural readability.",
            "itemListElement": [
              {
                "@type": "HowToDirection",
                "text": "Our writers create your content following SEO best practices and brand guidelines."
              }
            ]
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Quality Assurance",
            "text": "Every piece goes through rigorous editing, proofreading, and plagiarism checking using Copyscape and Grammarly Premium.",
            "itemListElement": [
              {
                "@type": "HowToDirection",
                "text": "Content is tested for grammar errors, factual accuracy, readability scores, and SEO compliance."
              }
            ]
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Client Review",
            "text": "We deliver the content for your review and feedback. We offer 2 rounds of revisions free of charge.",
            "itemListElement": [
              {
                "@type": "HowToDirection",
                "text": "Review the content and provide feedback for any necessary adjustments."
              }
            ]
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Performance Tracking",
            "text": "After publication, we monitor content performance—rankings, traffic, engagement metrics, and conversions.",
            "itemListElement": [
              {
                "@type": "HowToDirection",
                "text": "Receive performance insights and recommendations for content optimization."
              }
            ]
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "SEO Content Writer in Mumbai - Professional Content Writing Services",
        "description": "Comprehensive guide to SEO content writing services in Mumbai, including benefits, process, pricing, and how to choose the right content writer.",
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
        "dateModified": "2025-10-09"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "LocalBusiness",
          "name": "MyDigital Crown - SEO Content Writer Mumbai"
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
        "reviewBody": "Excellent SEO content writing services. The team delivered high-quality, engaging content that helped improve our search rankings significantly. Professional, timely, and great value for money."
      },
      {
        "@type": "AggregateRating",
        "@id": "https://mydigitalcrown.in/services/seo-content#aggregaterating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      {
        "@type": "ProfessionalService",
        "name": "SEO Content Writing Services Mumbai",
        "url": "https://mydigitalcrown.in/services/seo-content",
        "telephone": "+91-83695-11877",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "ItemList",
        "name": "SEO Content Writing Services",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Blog Writing",
            "description": "SEO-optimized blog posts that rank on Google and engage readers"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Website Copywriting",
            "description": "Persuasive web copy that captures attention and drives conversions"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Product Descriptions",
            "description": "Compelling product descriptions that highlight benefits and drive sales"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Landing Pages",
            "description": "High-converting landing page copy optimized for campaigns and ads"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "SEO Articles",
            "description": "Long-form SEO articles that establish authority and rank for competitive keywords"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Email Copywriting",
            "description": "Engaging email copy that boosts open rates and drives conversions"
          }
        ]
      },
      {
        "@type": "VideoObject",
        "name": "SEO Content Writing Services in Mumbai",
        "description": "Learn about our professional SEO content writing services and how we help businesses rank higher on Google",
        "thumbnailUrl": "https://mydigitalcrown.in/images/seo-content-video-thumbnail.jpg",
        "uploadDate": "2024-01-01",
        "duration": "PT3M45S"
      },
      {
        "@type": "Course",
        "name": "SEO Content Writing Masterclass",
        "description": "Learn professional SEO content writing techniques from expert writers",
        "provider": {
          "@type": "Organization",
          "name": "MyDigital Crown"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "duration": "PT4H"
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
        <p>SEO Content Writer in Mumbai - MyDigital Crown offers professional SEO content writing services including blog posts, website copy, product descriptions, and SEO articles. Call +91-83695-11877</p>
      </noscript>

      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="SEO Content Writing Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s #1 SEO Content Writer</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                SEO Content Writer In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  Expert Content Writing Services | 5000+ Articles Written | 100% Original Content
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Blog Posts | Website Copy | Product Descriptions | Landing Pages | SEO Articles | Email Campaigns
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
                    <span>Hire Content Writer</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">5000+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Articles Written</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Original Content</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">50+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Happy Clients</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">24hrs</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Fast Delivery</div>
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
              Quick Answers About SEO Content Writers in Mumbai
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Where Card */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Where can I find SEO Content Writers in Mumbai?</h3>
              <p className="text-blue-100 leading-relaxed">
                MyDigital Crown offers expert SEO content writers in Mumbai with offices in Chembur, Andheri, Bandra, Powai, and Thane. We serve clients across Mumbai, Navi Mumbai, and Thane districts with professional content writing services.
              </p>
            </div>

            {/* How Much Card */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">How much does SEO content writing cost in Mumbai?</h3>
              <p className="text-blue-100 leading-relaxed">
                SEO content writing in Mumbai ranges from ₹500 per 500-word article to ₹5,000+ for comprehensive website copywriting projects. Pricing depends on content length, research requirements, and complexity.
              </p>
            </div>

            {/* When Card */}
            <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-white mb-4">When will I receive my SEO content?</h3>
              <p className="text-blue-100 leading-relaxed">
                Standard blog posts are delivered within 2-3 business days. Website copy projects take 5-7 days. Rush delivery (24-48 hours) available for urgent requirements with priority service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">✍️</span>
              SEO Content Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Content Writing</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertly crafted content that ranks on Google and converts readers into customers
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop" 
                    alt="SEO Content Writing Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📈 SEO-Optimized</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every piece is researched and optimized with target keywords to rank higher on search engines.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Conversion-Focused</h3>
                <p className="text-gray-700 leading-relaxed">
                  Compelling copy that not only attracts readers but persuades them to take action.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ 100% Original</h3>
                <p className="text-gray-700 leading-relaxed">
                  Plagiarism-free, unique content crafted by experienced writers with industry expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our SEO Content <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive content writing services that drive traffic, engagement, and conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Blog Writing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Engaging, informative blog posts optimized for search engines and readers.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Keyword Research</li>
                  <li className="flex items-start gap-2">✓ Topic Ideation</li>
                  <li className="flex items-start gap-2">✓ SEO Optimization</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🌐</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Website Copywriting</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Persuasive web copy that captures attention and drives conversions.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Homepage Copy</li>
                  <li className="flex items-start gap-2">✓ Service Pages</li>
                  <li className="flex items-start gap-2">✓ About Us Pages</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🛍️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Product Descriptions</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Compelling product descriptions that highlight benefits and drive sales.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ E-commerce Copy</li>
                  <li className="flex items-start gap-2">✓ Feature Highlights</li>
                  <li className="flex items-start gap-2">✓ SEO Keywords</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Landing Pages</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  High-converting landing page copy optimized for campaigns and ads.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ PPC Landing Pages</li>
                  <li className="flex items-start gap-2">✓ Lead Generation</li>
                  <li className="flex items-start gap-2">✓ CTA Optimization</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📰</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">SEO Articles</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Long-form SEO articles that establish authority and rank for competitive keywords.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ 1000-2000 Words</li>
                  <li className="flex items-start gap-2">✓ Research-Based</li>
                  <li className="flex items-start gap-2">✓ Link-Worthy</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📧</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Email Copywriting</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Engaging email copy that boosts open rates and drives conversions.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Newsletter Content</li>
                  <li className="flex items-start gap-2">✓ Promotional Emails</li>
                  <li className="flex items-start gap-2">✓ Drip Campaigns</li>
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
              Ready for Content that<br />
              <span className="text-yellow-300">Ranks & Converts?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our expert writers create SEO-optimized content that drives traffic and grows your business!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Order SEO Content</span>
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
                <span>Expert Content Writers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>50+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Original Content</span>
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
        <div className="absolute top-20 left-20 text-6xl opacity-20 animate-bounce">✍️</div>
        <div className="absolute top-40 right-20 text-6xl opacity-20 animate-bounce animation-delay-2000">📝</div>
        <div className="absolute bottom-20 left-1/3 text-6xl opacity-20 animate-bounce animation-delay-4000">💻</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <span className="text-white font-semibold">❓ Frequently Asked Questions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Everything About <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">SEO Content Writing</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get answers to the most common questions about our SEO content writing services in Mumbai
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-blue-300/50 transition-all duration-300 hover:shadow-blue-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    What SEO content writing services do you offer in Mumbai?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  We offer comprehensive SEO content writing services including blog posts, website copywriting, product descriptions, landing pages, SEO articles, email campaigns, social media content, and technical writing. Each piece is optimized for search engines while maintaining readability and engagement.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-purple-300/50 transition-all duration-300 hover:shadow-purple-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">💰</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    How much does SEO content writing cost in Mumbai?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Our SEO content writing starts at ₹500 for a 500-word blog post. Website copywriting projects range from ₹2,000 to ₹10,000 depending on the number of pages. Complete content packages start at ₹15,000/month. We offer custom pricing based on your specific requirements and volume.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-green-300/50 transition-all duration-300 hover:shadow-green-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                    What is the turnaround time for content delivery?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Standard blog posts (500-1000 words) are delivered within 2-3 business days. Longer articles (1500-2000 words) take 3-5 days. Website copywriting projects require 5-7 days. Rush delivery is available within 24-48 hours for urgent projects with priority service charges.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-yellow-300/50 transition-all duration-300 hover:shadow-yellow-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔍</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    How do you ensure content is SEO-optimized?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  We conduct thorough keyword research, optimize title tags and meta descriptions, use proper heading structure (H1, H2, H3), include internal and external links, optimize image alt text, maintain optimal keyword density (1-2%), and ensure content readability with short paragraphs and bullet points.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-pink-300/50 transition-all duration-300 hover:shadow-pink-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">✅</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                    Is your content 100% original and plagiarism-free?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Yes, absolutely! All our content is written from scratch by experienced writers. We run every piece through Copyscape and Grammarly Premium to ensure 100% originality. We provide plagiarism reports upon request and guarantee that your content is unique and never recycled.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-orange-300/50 transition-all duration-300 hover:shadow-orange-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎨</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                    Can you match my brand voice and style?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Definitely! We take time to understand your brand voice, tone, and style guidelines. Our writers adapt to your preferred communication style—whether formal, casual, technical, or conversational. We can match existing content samples and maintain consistency across all pieces.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-cyan-300/50 transition-all duration-300 hover:shadow-cyan-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔄</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Do you offer revisions if I&apos;m not satisfied?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Yes, we offer 2 rounds of revisions free of charge on all projects. Your satisfaction is our priority. If the content doesn&apos;t meet your expectations, we&apos;ll revise it until you&apos;re completely happy. Additional revisions beyond 2 rounds may incur minimal charges.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-red-300/50 transition-all duration-300 hover:shadow-red-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">📊</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                    What industries do you write content for?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  We write for diverse industries including technology, healthcare, finance, e-commerce, real estate, education, hospitality, manufacturing, and more. Our team includes specialists with expertise in various niches who can create authoritative, industry-specific content.
                </p>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-indigo-300/50 transition-all duration-300 hover:shadow-indigo-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">📱</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    Do you provide content strategy and planning?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Yes! We offer comprehensive content strategy services including content audits, topic research, editorial calendar creation, keyword planning, and content gap analysis. We help you build a sustainable content marketing strategy aligned with your business goals.
                </p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-teal-300/50 transition-all duration-300 hover:shadow-teal-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">👥</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    Who will be writing my content?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Your content will be created by experienced professional writers with 5+ years of expertise in SEO content writing. All our writers are native English speakers with proven track records. Each piece goes through our quality assurance process before delivery.
                </p>
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-violet-300/50 transition-all duration-300 hover:shadow-violet-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">📈</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    How will SEO content help my business grow?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-violet-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  SEO-optimized content improves your search engine rankings, drives organic traffic, establishes your authority in your industry, builds trust with potential customers, and ultimately generates more leads and sales. Quality content is the foundation of successful digital marketing.
                </p>
              </div>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-lime-300/50 transition-all duration-300 hover:shadow-lime-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">💡</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-lime-300 transition-colors">
                    How do I get started with your content writing services?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-lime-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Simply call us at +91-83695-11877 or fill out our contact form. We&apos;ll schedule a free consultation to discuss your content needs, target audience, goals, and budget. After understanding your requirements, we&apos;ll provide a custom quote and timeline for your project.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* SEO Content Section - 1600+ Words */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Why Choose Professional SEO Content Writers in Mumbai */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose Professional <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">SEO Content Writers in Mumbai?</span>
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                In today&apos;s digital landscape, content is the cornerstone of online success. Mumbai, being India&apos;s financial and commercial capital, hosts thousands of businesses competing for online visibility. Professional SEO content writers in Mumbai understand the local market dynamics, consumer behavior, and search patterns that drive business growth in this competitive environment.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Quality SEO content serves multiple purposes: it educates your audience, establishes your authority in your industry, improves your search engine rankings, and ultimately converts visitors into customers. Unlike generic content, SEO-optimized writing strategically incorporates keywords while maintaining natural readability, ensuring both search engines and human readers find value in your content.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Mumbai businesses face unique challenges—intense competition, diverse target audiences, and rapidly evolving market trends. Professional content writers based in Mumbai bring local expertise, understanding cultural nuances, regional preferences, and industry-specific requirements that make your content resonate with your target audience while achieving SEO goals.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                Investing in professional SEO content writing isn&apos;t just about filling your website with words—it&apos;s about creating valuable assets that continue generating traffic, leads, and revenue long after publication. Quality content compounds over time, building your domain authority and establishing your brand as a trusted resource in your industry.
              </p>
            </div>
          </div>

          {/* Section 2: What Makes Great SEO Content */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              What Makes <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">Great SEO Content?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Keyword Research & Optimization</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Great SEO content starts with thorough keyword research. We identify high-value keywords with strong search intent, analyze competition, and strategically place keywords in titles, headings, meta descriptions, and throughout the content while maintaining natural flow and readability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">User-Focused Content Structure</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Content must be structured for easy scanning and comprehension. We use clear headings (H1, H2, H3), short paragraphs, bullet points, and visual elements to break up text. This improves user experience, reduces bounce rates, and keeps readers engaged longer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💎</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Value-Driven Information</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Every piece of content must provide genuine value to readers. We focus on answering questions, solving problems, and providing actionable insights. Content that helps users achieve their goals earns backlinks, social shares, and return visitors—all positive SEO signals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Conversion Optimization</h3>
                    <p className="text-blue-100 leading-relaxed">
                      SEO content should guide readers toward desired actions. We incorporate strategic calls-to-action, compelling value propositions, and persuasive copywriting techniques that turn readers into leads and customers while maintaining authenticity and trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Our Content Writing Process */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Proven <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Content Writing Process</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500/20 to-transparent backdrop-blur-lg rounded-2xl p-8 border-l-4 border-blue-400">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-black text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Discovery & Research</h3>
                    <p className="text-blue-100 leading-relaxed">
                      We start by understanding your business, target audience, competitors, and goals. Our team conducts comprehensive keyword research, analyzes search intent, and studies top-ranking content in your niche. This research phase ensures we create content that meets both user needs and search engine requirements.
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
                    <h3 className="text-2xl font-bold text-white mb-3">Content Planning & Outlining</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Based on research insights, we create detailed content outlines with logical flow, key points to cover, and strategic keyword placement. We plan heading structure, internal linking opportunities, and calls-to-action. This blueprint ensures comprehensive coverage of topics while maintaining SEO best practices.
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
                    <h3 className="text-2xl font-bold text-white mb-3">Expert Writing & Optimization</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Our experienced writers craft engaging, informative content that balances SEO optimization with natural readability. We maintain optimal keyword density, use semantic variations, include relevant statistics and examples, and ensure every sentence adds value. The content is written to inform, engage, and convert.
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
                    <h3 className="text-2xl font-bold text-white mb-3">Quality Assurance & Editing</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Every piece goes through rigorous editing and proofreading. We check for grammar errors, factual accuracy, readability scores, and SEO compliance. Content is tested for plagiarism using Copyscape and Grammarly Premium. We ensure meta descriptions, title tags, and image alt text are optimized.
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
                    <h3 className="text-2xl font-bold text-white mb-3">Client Review & Revisions</h3>
                    <p className="text-blue-100 leading-relaxed">
                      We deliver the content for your review and feedback. Your input is valuable, and we offer 2 rounds of revisions to ensure the final content meets your expectations. We make adjustments to tone, style, or technical details based on your requirements while maintaining SEO integrity.
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
                    <h3 className="text-2xl font-bold text-white mb-3">Performance Tracking & Optimization</h3>
                    <p className="text-blue-100 leading-relaxed">
                      After publication, we monitor content performance—rankings, traffic, engagement metrics, and conversions. Based on data insights, we provide recommendations for updates, additional content, or optimization opportunities. Great SEO content evolves based on performance and changing search trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Mumbai Advantage */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The Mumbai <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Content Writing Advantage</span>
            </h2>
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Working with SEO content writers based in Mumbai offers distinct advantages for businesses targeting Indian markets. Mumbai writers understand the linguistic diversity, cultural nuances, and regional preferences that influence content effectiveness. They can naturally incorporate local references, examples, and contexts that resonate with Indian audiences while maintaining global appeal.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Mumbai&apos;s position as India&apos;s commercial hub means content writers here work with diverse industries—from finance and healthcare to e-commerce and technology. This exposure translates to versatile writing skills and industry knowledge that benefits your content. Whether you need technical white papers or creative blog posts, Mumbai writers deliver professional quality across formats.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                Cost-effectiveness is another significant advantage. Mumbai-based content writing services offer competitive pricing compared to international markets while maintaining high quality standards. You get professional, SEO-optimized content at rates that fit your budget, making it feasible to invest in consistent, long-term content marketing strategies.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-500/30 to-blue-600/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-300/30 text-center">
                <div className="text-5xl font-black text-white mb-3">5000+</div>
                <div className="text-xl font-bold text-blue-100">Articles Delivered</div>
                <p className="text-blue-200 mt-3">Successfully completed content projects across industries</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/30 to-purple-600/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-300/30 text-center">
                <div className="text-5xl font-black text-white mb-3">50+</div>
                <div className="text-xl font-bold text-purple-100">Happy Clients</div>
                <p className="text-purple-200 mt-3">Businesses trusting us for their content needs</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/30 to-green-600/30 backdrop-blur-lg rounded-2xl p-8 border border-green-300/30 text-center">
                <div className="text-5xl font-black text-white mb-3">100%</div>
                <div className="text-xl font-bold text-green-100">Original Content</div>
                <p className="text-green-200 mt-3">Plagiarism-free guarantee with Copyscape verification</p>
              </div>
            </div>
          </div>

          {/* Section 5: Getting Started CTA */}
          <div className="bg-gradient-to-br from-blue-600/40 to-purple-600/40 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Content Strategy?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Partner with Mumbai&apos;s leading SEO content writers to create compelling, optimized content that drives real business results. Whether you need blog posts, website copy, or comprehensive content marketing, we deliver quality that ranks and converts.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="group inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all transform hover:scale-105">
                <span className="mr-3">Get Started Today</span>
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
              💡 Free consultation available | ⚡ Rush delivery options | ✅ 2 free revisions included
            </p>
          </div>

        </div>
      </section>

      {/* Related Services */}
      {/* Our Locations */}

      <OurLocations />


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/seo-content"
        title="Complete Content Solutions"
        description="Enhance your content strategy with our comprehensive digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
