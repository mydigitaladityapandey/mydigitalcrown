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
  title: 'Content Writer Mumbai | SEO Blog Writing | MyDigital',
  description: 'Content Writing Services Mumbai. 2000+ Articles | 100% Plagiarism-Free | SEO-Optimized Blog & Web Copy. Call +91-83695-11877',
  keywords: [
    // Primary Keywords
    'content writer in mumbai',
    'content writing services mumbai',
    'professional content writer mumbai',
    'best content writer mumbai',
    'content writing agency mumbai',
    
    // Service-Specific Keywords
    'blog writer mumbai',
    'article writer mumbai',
    'copywriter mumbai',
    'website content writer mumbai',
    'seo content writer mumbai',
    'creative content writer mumbai',
    'freelance content writer mumbai',
    'technical content writer mumbai',
    
    // Content Types
    'blog writing services mumbai',
    'article writing services mumbai',
    'website content writing mumbai',
    'product description writer mumbai',
    'email copywriting mumbai',
    'social media content writer mumbai',
    'press release writing mumbai',
    'white paper writing mumbai',
    
    // Location-Based
    'content writer chembur',
    'content writing company mumbai',
    'top content writing agency mumbai',
    'expert content writer mumbai',
    'professional copywriter mumbai',
    
    // Business-Specific
    'startup content writer mumbai',
    'ecommerce content writer mumbai',
    'b2b content writer mumbai',
    'saas content writer mumbai',
    'healthcare content writer mumbai',
    'finance content writer mumbai',
    
    // Quality & Features
    'seo optimized content mumbai',
    'plagiarism free content mumbai',
    'original content writing mumbai',
    'engaging content writer mumbai',
    'conversion focused content mumbai',
    
    // Content Writing Solutions
    'affordable content writer mumbai',
    'premium content writing mumbai',
    'content writing packages mumbai',
    'bulk content writing mumbai',
    'regular content writing mumbai',
    'content marketing mumbai',
    
    // Related Services
    'content strategy mumbai',
    'content editing mumbai',
    'proofreading services mumbai',
    'content optimization mumbai',
    'content management mumbai',
    'ghostwriting services mumbai'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Content Writing Services',
  classification: 'SEO Content Writing, Blog Writing & Copywriting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mydigitalcrown.in'),
  alternates: {
    canonical: '/services/content-writing',
  },
  openGraph: {
    title: 'Content Writer In Mumbai | #1 Content Writing Agency | MyDigital Crown',
    description: 'Top Content Writer In Mumbai. 2000+ Articles Written, 100% Plagiarism-Free, SEO-Optimized Content. Expert blog writing, web copy & more.',
    url: 'https://mydigitalcrown.in/services/content-writing',
    siteName: 'MyDigital Crown',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Content Writer In Mumbai - Professional Content Writing Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Writer In Mumbai | #1 Content Writing Agency',
    description: 'Top Content Writer In Mumbai. 2000+ Articles Written, 100% Plagiarism-Free, SEO-Optimized Content.',
    images: ['https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=630&fit=crop'],
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
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://mydigitalcrown.in/services/content-writing#service",
      "name": "Content Writer In Mumbai",
      "description": "Professional content writing services in Mumbai. Expert writers crafting engaging blogs, articles, web copy, product descriptions and SEO-optimized content that converts.",
      "provider": {
        "@type": "Organization",
        "@id": "https://mydigitalcrown.in/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai",
        "containedIn": {
          "@type": "State",
          "name": "Maharashtra"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Content Writing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Blog Writing Services",
              "description": "SEO-optimized blog posts that engage readers and drive traffic"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Content Writing",
              "description": "Professional web copy that converts visitors into customers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Article Writing Services",
              "description": "In-depth articles that establish thought leadership"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Product Description Writing",
              "description": "Compelling product copy that drives sales"
            }
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
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-83695-11877",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.facebook.com/mydigitalcrown",
        "https://twitter.com/mydigitalcrown",
        "https://www.linkedin.com/company/mydigitalcrown",
        "https://www.instagram.com/mydigitalcrown"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chembur",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400071",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://mydigitalcrown.in/services/content-writing#webpage",
      "url": "https://mydigitalcrown.in/services/content-writing",
      "name": "Content Writer In Mumbai | #1 Content Writing Agency",
      "description": "Top Content Writer In Mumbai. 2000+ Articles Written, 100% Plagiarism-Free, SEO-Optimized Content.",
      "publisher": {
        "@id": "https://mydigitalcrown.in/#organization"
      },
      "inLanguage": "en-IN"
    },
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
          "name": "Content Writing",
          "item": "https://mydigitalcrown.in/services/content-writing"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What content writing services does MyDigital Crown offer in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive content writing services including blog writing, website content, article writing, product descriptions, email copywriting, social media content, press releases, and technical writing. All content is SEO-optimized, 100% original, and tailored to your brand voice."
          }
        },
        {
          "@type": "Question",
          "name": "How much do content writing services cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content writing pricing starts from ₹500 per 500 words for basic blog posts, ₹2,000+ for website pages, and ₹1,500+ for articles. We offer custom packages based on volume, complexity, and ongoing requirements. Contact us for a personalized quote."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure content is plagiarism-free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All content is written from scratch by our expert writers and verified using advanced plagiarism detection tools like Copyscape and Grammarly. We guarantee 100% original, unique content with plagiarism reports available on request."
          }
        },
        {
          "@type": "Question",
          "name": "What is your content writing turnaround time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard turnaround is 2-3 business days for blog posts (500-1000 words), 3-5 days for website pages, and 5-7 days for long-form articles. Rush delivery available within 24-48 hours for urgent projects at no extra cost for regular clients."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer SEO-optimized content writing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our content is SEO-optimized with proper keyword research, meta descriptions, heading structure, internal linking, and readability optimization. We follow Google's E-A-T guidelines and latest SEO best practices for maximum rankings."
          }
        },
        {
          "@type": "Question",
          "name": "Can you write content for specific industries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Our writers have expertise across multiple industries including technology, healthcare, finance, real estate, e-commerce, education, legal, travel, and more. We conduct thorough research to ensure industry-specific accuracy and tone."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide content revisions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer unlimited revisions until you're completely satisfied with the content quality. Typically, 2 rounds of revisions are included in the base price. We work closely with you to match your vision and requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What makes your content writing service different from others in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We combine expert writers, SEO optimization, plagiarism-free guarantee, on-time delivery, competitive pricing, and unlimited revisions. With 2000+ articles written and proven results, we deliver content that engages audiences and drives conversions."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with content strategy and planning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Beyond writing, we offer content strategy services including topic research, editorial calendar planning, keyword mapping, content gap analysis, and performance tracking to ensure your content marketing achieves business goals."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with your content writing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply call us at +91-83695-11877 or fill out our contact form. We'll discuss your requirements, provide a customized quote, and start creating quality content within 24 hours of approval. No long-term contracts required."
          }
        },
        {
          "@type": "Question",
          "name": "Do you write content in languages other than English?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer content writing in Hindi, Marathi, and other Indian languages for regional markets. Our multilingual writers ensure cultural appropriateness and linguistic accuracy for diverse audiences."
          }
        },
        {
          "@type": "Question",
          "name": "What is your content writing process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our 4-step process includes: 1) Research & Planning - understanding your topic and audience, 2) Writing & Drafting - creating engaging original content, 3) Editing & Proofreading - ensuring error-free quality, 4) SEO Optimization - maximizing search visibility and performance."
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "MyDigital Crown - Content Writing Services",
      "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=630&fit=crop",
      "@id": "https://mydigitalcrown.in/services/content-writing",
      "url": "https://mydigitalcrown.in/services/content-writing",
      "telephone": "+91-83695-11877",
      "priceRange": "₹₹",
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
        "latitude": 19.0522,
        "longitude": 72.8967
      },
      "openingHoursSpecification": {
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
      },
      "sameAs": [
        "https://www.facebook.com/mydigitalcrown",
        "https://twitter.com/mydigitalcrown",
        "https://www.linkedin.com/company/mydigitalcrown"
      ]
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Sharma"
      },
      "reviewBody": "MyDigital Crown's content writers are exceptional! They delivered 50+ SEO-optimized blog posts that increased our organic traffic by 300%. Professional, timely, and worth every rupee.",
      "itemReviewed": {
        "@type": "Service",
        "name": "Content Writing Services"
      }
    },
    {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    },
    {
      "@type": "HowTo",
      "name": "How Our Content Writing Process Works",
      "description": "Step-by-step process for professional content writing services in Mumbai",
      "totalTime": "PT3D",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": "500-5000"
      },
      "step": [
        {
          "@type": "HowToStep",
          "name": "Research & Planning",
          "text": "Deep dive into your topic, target audience, and content goals. Keyword research and competitive analysis.",
          "position": 1,
          "itemListElement": {
            "@type": "HowToDirection",
            "text": "We analyze your industry, audience demographics, and competitors to plan effective content strategy."
          }
        },
        {
          "@type": "HowToStep",
          "name": "Writing & Drafting",
          "text": "Expert writers craft engaging, original content aligned with your brand voice and messaging.",
          "position": 2,
          "itemListElement": {
            "@type": "HowToDirection",
            "text": "Our writers create compelling content that resonates with your target audience while maintaining brand consistency."
          }
        },
        {
          "@type": "HowToStep",
          "name": "Editing & Proofreading",
          "text": "Multiple rounds of editing to ensure error-free, polished, professional content.",
          "position": 3,
          "itemListElement": {
            "@type": "HowToDirection",
            "text": "Content undergoes thorough editing for grammar, style, clarity, and plagiarism checks."
          }
        },
        {
          "@type": "HowToStep",
          "name": "SEO Optimization",
          "text": "Final optimization for search engines while maintaining readability and user engagement.",
          "position": 4,
          "itemListElement": {
            "@type": "HowToDirection",
            "text": "We optimize headings, meta descriptions, keywords, and structure for maximum search visibility."
          }
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Professional Content Writer In Mumbai - Complete Guide 2025",
      "description": "Comprehensive guide to choosing the best content writing services in Mumbai for your business needs.",
      "author": {
        "@type": "Organization",
        "@id": "https://mydigitalcrown.in/#organization"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://mydigitalcrown.in/#organization"
      },
      "datePublished": "2025-01-01",
      "dateModified": "2025-10-11"
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Blog Writing Services",
          "url": "https://mydigitalcrown.in/services/content-writing#blog-writing"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Website Content Writing",
          "url": "https://mydigitalcrown.in/services/content-writing#website-content"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Article Writing",
          "url": "https://mydigitalcrown.in/services/content-writing#article-writing"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Product Description Writing",
          "url": "https://mydigitalcrown.in/services/content-writing#product-descriptions"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Email Copywriting",
          "url": "https://mydigitalcrown.in/services/content-writing#email-copywriting"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Social Media Content",
          "url": "https://mydigitalcrown.in/services/content-writing#social-media"
        }
      ]
    },
    {
      "@type": "Offer",
      "name": "Premium Content Writing Package",
      "description": "Comprehensive content writing services with 50% discount this month",
      "price": "500",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01",
      "priceValidUntil": "2025-12-31",
      "seller": {
        "@type": "Organization",
        "@id": "https://mydigitalcrown.in/#organization"
      }
    },
    {
      "@type": "VideoObject",
      "name": "Content Writing Services Mumbai - MyDigital Crown",
      "description": "Learn how our professional content writing services can grow your business",
      "thumbnailUrl": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=450&fit=crop",
      "uploadDate": "2025-01-01",
      "duration": "PT2M30S",
      "contentUrl": "https://mydigitalcrown.in/videos/content-writing-services"
    },
    {
      "@type": "Course",
      "name": "Content Writing Masterclass",
      "description": "Learn professional content writing techniques from Mumbai's top experts",
      "provider": {
        "@type": "Organization",
        "@id": "https://mydigitalcrown.in/#organization"
      },
      "courseCode": "CW101",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "duration": "P4W"
      }
    },
    {
      "@type": "SpecialAnnouncement",
      "name": "50% Off Content Writing Services",
      "text": "Get premium content writing services at 50% discount for new clients this month. Limited slots available!",
      "datePosted": "2025-10-01",
      "expires": "2025-10-31",
      "category": "https://www.wikidata.org/wiki/Q81068910"
    }
  ]
}

export default function ContentWritingPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Noscript fallback */}
      <noscript>
        <div>
          <h1>Content Writer In Mumbai | MyDigital Crown</h1>
          <p>Professional content writing services: Blog writing, website content, articles, product descriptions. Call +91-83695-11877</p>
        </div>
      </noscript>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 py-16 bg-gradient-to-br from-emerald-800 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 to-green-700/95"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s Professional Content Writing Experts</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-lime-300 bg-clip-text text-transparent">
                  Content Writer In Mumbai
                </span>
                <br />
                <span className="text-4xl md:text-6xl">MyDigital Crown</span>
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto font-bold leading-relaxed">
                  ✍️ Words That <span className="text-green-300">Engage</span>, <span className="text-emerald-300">Inspire</span> & <span className="text-lime-300">Convert</span>
                </h2>
                <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto font-semibold leading-relaxed">
                  Blog Writing | Web Copy | Articles | Product Descriptions
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-green-400 via-emerald-500 to-lime-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">✍️</span>
                    <span>Get Quality Content</span>
                  </span>
                </Link>
                <a 
                  href="tel:+918369511877" 
                  className="group relative overflow-hidden bg-white text-emerald-600 border-4 border-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-emerald-100 to-white bg-clip-text mb-3">2000+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Articles Written</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-emerald-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Plagiarism Free</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-emerald-100 to-white bg-clip-text mb-3">SEO</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Optimized</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-emerald-100 to-white bg-clip-text mb-3">24/7</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Support</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Voice Search Quick Answers Section - VSO Optimization */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4 shadow-lg">
              <span className="mr-2">🎯</span>
              Quick Answers - Voice Search Optimized
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions About <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Content Writing In Mumbai</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Answer 1: Where */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-2xl" itemScope itemType="https://schema.org/Question">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center" itemProp="name">
                Where is the best content writer in Mumbai?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="text-gray-700 text-center leading-relaxed mb-4">
                    <strong>MyDigital Crown</strong> is Mumbai&apos;s leading content writing agency located in Chembur. We serve clients across Mumbai, Navi Mumbai, and Thane with professional content writing services.
                  </p>
                  <div className="bg-emerald-50 rounded-xl p-4 text-center">
                    <p className="text-emerald-800 font-semibold">📍 Chembur, Mumbai - 400071</p>
                    <p className="text-emerald-600 text-sm mt-1">Serving All Mumbai Areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Answer 2: Cost */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-2xl" itemScope itemType="https://schema.org/Question">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center" itemProp="name">
                How much does content writing cost in Mumbai?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="text-gray-700 text-center leading-relaxed mb-4">
                    Content writing pricing in Mumbai varies by type and complexity:
                  </p>
                  <div className="bg-blue-50 rounded-xl p-4 space-y-2">
                    <p className="text-blue-800 font-semibold">📝 Blog Posts: ₹500-2,000</p>
                    <p className="text-blue-800 font-semibold">🌐 Website Pages: ₹2,000-8,000</p>
                    <p className="text-blue-800 font-semibold">📰 Articles: ₹1,500-5,000</p>
                    <p className="text-blue-600 text-sm mt-2">Volume discounts available!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Answer 3: Timeline */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-2xl" itemScope itemType="https://schema.org/Question">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center" itemProp="name">
                How long does content writing take?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="text-gray-700 text-center leading-relaxed mb-4">
                    Standard turnaround times for content delivery:
                  </p>
                  <div className="bg-purple-50 rounded-xl p-4 space-y-2">
                    <p className="text-purple-800 font-semibold">⚡ Blog Posts: 2-3 days</p>
                    <p className="text-purple-800 font-semibold">🚀 Website Pages: 3-5 days</p>
                    <p className="text-purple-800 font-semibold">📄 Long Articles: 5-7 days</p>
                    <p className="text-purple-600 text-sm mt-2">Rush delivery: 24-48 hours!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg mb-6">
              Ready to get started with professional content writing?
            </p>
            <a 
              href="tel:+918369511877" 
              className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <span className="text-2xl mr-3">📞</span>
              <span>Call Now: +91-83695-11877</span>
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <EnquiryForm />

      {/* About Content Writing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-lime-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📝</span>
              Why Professional Content Writing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Power of <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Quality Content</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In the digital age, content is king. Professional content writing helps you communicate effectively, build trust, improve SEO rankings, and convert visitors into loyal customers.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop" 
                    alt="Content Writing Services Mumbai - Professional Writers"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Communication</h3>
                    <p className="text-gray-600">Convey your message clearly and effectively to your target audience.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">SEO Benefits</h3>
                    <p className="text-gray-600">Optimized content that ranks higher in search engines and drives organic traffic.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💎</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Brand Authority</h3>
                    <p className="text-gray-600">Establish your brand as an industry expert with high-quality content.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Higher Conversions</h3>
                    <p className="text-gray-600">Persuasive content that turns readers into paying customers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Writing Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">✍️</span>
              <span>Our Content Writing Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">Comprehensive</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">Writing Solutions</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blog Writing</h3>
              <p className="text-gray-600 mb-4">Engaging, informative blog posts that attract readers and boost SEO rankings.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ SEO-Optimized</li>
                <li className="flex items-center gap-2">✓ Well-Researched</li>
                <li className="flex items-center gap-2">✓ Engaging Style</li>
                <li className="flex items-center gap-2">✓ Regular Publishing</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-gradient-to-br from-green-50 to-lime-50 rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Content</h3>
              <p className="text-gray-600 mb-4">Professional web copy that communicates your brand value and converts visitors.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Homepage Copy</li>
                <li className="flex items-center gap-2">✓ About Us Pages</li>
                <li className="flex items-center gap-2">✓ Service Pages</li>
                <li className="flex items-center gap-2">✓ Landing Pages</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-gradient-to-br from-lime-50 to-emerald-50 rounded-3xl p-8 border-2 border-lime-200 hover:border-lime-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Article Writing</h3>
              <p className="text-gray-600 mb-4">In-depth, well-researched articles that establish thought leadership.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Industry Articles</li>
                <li className="flex items-center gap-2">✓ Guest Posts</li>
                <li className="flex items-center gap-2">✓ News Content</li>
                <li className="flex items-center gap-2">✓ Expert Insights</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛍️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Descriptions</h3>
              <p className="text-gray-600 mb-4">Compelling product copy that highlights features and drives sales.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ E-commerce Copy</li>
                <li className="flex items-center gap-2">✓ Feature Highlights</li>
                <li className="flex items-center gap-2">✓ Benefit-Focused</li>
                <li className="flex items-center gap-2">✓ SEO-Friendly</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Copywriting</h3>
              <p className="text-gray-600 mb-4">Persuasive email content that increases open rates and conversions.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Newsletter Content</li>
                <li className="flex items-center gap-2">✓ Promotional Emails</li>
                <li className="flex items-center gap-2">✓ Drip Campaigns</li>
                <li className="flex items-center gap-2">✓ Welcome Series</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="group relative bg-gradient-to-br from-lime-50 to-green-50 rounded-3xl p-8 border-2 border-lime-200 hover:border-lime-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Copy</h3>
              <p className="text-gray-600 mb-4">Catchy social media posts that engage audiences and drive interaction.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✓ Post Captions</li>
                <li className="flex items-center gap-2">✓ Ad Copy</li>
                <li className="flex items-center gap-2">✓ Hashtag Strategy</li>
                <li className="flex items-center gap-2">✓ Bio Writing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">⚙️</span>
              <span>Our Writing Process</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">How We Create</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">Exceptional Content</span>
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                1
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Research & Planning</h3>
                <p className="text-gray-600">Deep dive into your topic, audience, and goals to plan effective content.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-green-500 to-lime-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                2
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Writing & Drafting</h3>
                <p className="text-gray-600">Craft engaging, original content that aligns with your brand voice.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                3
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Editing & Proofreading</h3>
                <p className="text-gray-600">Multiple rounds of editing to ensure error-free, polished content.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                4
              </div>
              <div className="mt-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">SEO Optimization</h3>
                <p className="text-gray-600">Optimize for search engines while maintaining readability and engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-green-900 to-lime-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-lime-400 to-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <span className="text-2xl mr-3 animate-pulse">⭐</span>
              <span className="text-lg">Why Choose MyDigital Crown</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Your Trusted <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-lime-300 bg-clip-text text-transparent">Content Writing Partner</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Expert Writers</h3>
                <p className="text-emerald-100 leading-relaxed">Experienced professionals with expertise across multiple industries and writing styles.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-emerald-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-emerald-400 to-lime-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">100% Original</h3>
                <p className="text-emerald-100 leading-relaxed">Plagiarism-free content verified with advanced detection tools for authenticity.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-lime-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">SEO Optimized</h3>
                <p className="text-emerald-100 leading-relaxed">Every piece optimized for search engines to improve rankings and visibility.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-lime-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⏰</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">On-Time Delivery</h3>
                <p className="text-emerald-100 leading-relaxed">Consistent, reliable delivery that meets your deadlines without compromising quality.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-emerald-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔄</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Unlimited Revisions</h3>
                <p className="text-emerald-100 leading-relaxed">We work until you&apos;re completely satisfied with the content quality.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-lime-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💰</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Competitive Pricing</h3>
                <p className="text-emerald-100 leading-relaxed">Premium quality content at affordable rates with transparent pricing.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready for Professional Content Writing?
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Let our expert writers create content that engages your audience and drives results.
              </p>
              <Link 
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-green-400 via-emerald-500 to-lime-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 inline-flex items-center justify-center transform hover:scale-110"
              >
                <span className="relative z-10 flex items-center">
                  <span className="text-2xl mr-3">🚀</span>
                  <span>Start Writing Project</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-lime-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-lime-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-emerald-300 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎁</span>
              Limited Time Special
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Content Writing Package<br />
              <span className="text-lime-300">With 50% OFF</span> This Month
            </h2>
            
            <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Blog posts, website copy, articles, product descriptions - everything you need for content success. Limited slots available!
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-300 mb-2">50%</div>
                <div className="text-emerald-100">Discount</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-300 mb-2">2000+</div>
                <div className="text-emerald-100">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-300 mb-2">100%</div>
                <div className="text-emerald-100">Original</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-300 mb-2">24/7</div>
                <div className="text-emerald-100">Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group inline-flex items-center bg-white text-emerald-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 hover:-translate-y-1">
                <span className="mr-3">Get Your Package</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>

              <a href="tel:+918369511877" className="group inline-flex items-center bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all transform hover:scale-105">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call: +91-83695-11877</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - ASO Optimization */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl">
              <span className="mr-2">❓</span>
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Everything You Need to Know About
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-lime-300 bg-clip-text text-transparent">Content Writing Services</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Get answers to the most common questions about our professional content writing services in Mumbai
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-emerald-300/50 transition-all overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-white/5 transition-colors" itemProp="name">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">📝</span>
                  <span>What content writing services does MyDigital Crown offer in Mumbai?</span>
                </span>
                <svg className="w-6 h-6 text-emerald-300 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-emerald-100 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="mb-4">We offer comprehensive content writing services including:</p>
                  <ul className="space-y-2 ml-6">
                    <li>✅ <strong>Blog Writing:</strong> SEO-optimized blog posts that drive traffic and engagement</li>
                    <li>✅ <strong>Website Content:</strong> Professional web copy for homepages, about pages, service pages, and landing pages</li>
                    <li>✅ <strong>Article Writing:</strong> In-depth articles for thought leadership and industry authority</li>
                    <li>✅ <strong>Product Descriptions:</strong> Compelling e-commerce copy that increases conversions</li>
                    <li>✅ <strong>Email Copywriting:</strong> Newsletters, drip campaigns, and promotional emails</li>
                    <li>✅ <strong>Social Media Content:</strong> Engaging posts for Facebook, Instagram, LinkedIn, and Twitter</li>
                    <li>✅ <strong>Press Releases:</strong> Professional announcements for media distribution</li>
                    <li>✅ <strong>Technical Writing:</strong> User manuals, documentation, and white papers</li>
                  </ul>
                  <p className="mt-4">All content is 100% original, SEO-optimized, and tailored to your brand voice and business goals.</p>
                </div>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-emerald-300/50 transition-all overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-white/5 transition-colors" itemProp="name">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">💰</span>
                  <span>How much do content writing services cost in Mumbai?</span>
                </span>
                <svg className="w-6 h-6 text-emerald-300 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-emerald-100 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="mb-4">Content writing pricing depends on the type and complexity:</p>
                  <ul className="space-y-3 ml-6">
                    <li>📝 <strong>Blog Posts (500-1000 words):</strong> ₹500 - ₹2,000</li>
                    <li>🌐 <strong>Website Pages (1000+ words):</strong> ₹2,000 - ₹8,000</li>
                    <li>📰 <strong>Articles (1500-2500 words):</strong> ₹1,500 - ₹5,000</li>
                    <li>🛍️ <strong>Product Descriptions (100-200 words):</strong> ₹200 - ₹500 each</li>
                    <li>📧 <strong>Email Campaigns:</strong> ₹1,000 - ₹3,000 per email</li>
                    <li>📱 <strong>Social Media Posts:</strong> ₹100 - ₹300 per post</li>
                  </ul>
                  <p className="mt-4"><strong>Volume Discounts:</strong> 10-20% off for bulk orders (10+ articles) and monthly retainer packages. Contact us for a customized quote based on your specific requirements.</p>
                </div>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-emerald-300/50 transition-all overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-white/5 transition-colors" itemProp="name">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🔍</span>
                  <span>How do you ensure content is plagiarism-free?</span>
                </span>
                <svg className="w-6 h-6 text-emerald-300 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-emerald-100 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="mb-4">We guarantee 100% original, plagiarism-free content through our rigorous quality control process:</p>
                  <ul className="space-y-2 ml-6">
                    <li>✅ <strong>Written from Scratch:</strong> All content is created original by our expert writers, never copied or spun</li>
                    <li>✅ <strong>Advanced Detection Tools:</strong> Every piece is verified using Copyscape, Grammarly Premium, and Turnitin</li>
                    <li>✅ <strong>Multiple Quality Checks:</strong> Content goes through 3 stages of review before delivery</li>
                    <li>✅ <strong>Plagiarism Reports:</strong> Available on request for complete transparency</li>
                    <li>✅ <strong>Citations & Attribution:</strong> Proper sourcing and referencing for all factual claims</li>
                    <li>✅ <strong>100% Money-Back Guarantee:</strong> If any plagiarism is found, full refund guaranteed</li>
                  </ul>
                  <p className="mt-4">We take content originality seriously and have zero tolerance for plagiarism in any form.</p>
                </div>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-emerald-300/50 transition-all overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-white/5 transition-colors" itemProp="name">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">⏰</span>
                  <span>What is your content writing turnaround time?</span>
                </span>
                <svg className="w-6 h-6 text-emerald-300 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-emerald-100 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="mb-4">Standard turnaround times for different content types:</p>
                  <ul className="space-y-3 ml-6">
                    <li>⚡ <strong>Blog Posts (500-1000 words):</strong> 2-3 business days</li>
                    <li>🚀 <strong>Website Pages (1000+ words):</strong> 3-5 business days</li>
                    <li>📄 <strong>Long Articles (2000+ words):</strong> 5-7 business days</li>
                    <li>🛍️ <strong>Product Descriptions (bulk):</strong> 1-3 days per 10 products</li>
                    <li>📧 <strong>Email Campaigns:</strong> 2-3 days</li>
                  </ul>
                  <p className="mt-4"><strong>Rush Delivery:</strong> Need urgent content? We offer 24-48 hour rush delivery at no extra cost for our regular clients. For new projects, expedited delivery available with priority handling.</p>
                  <p className="mt-2"><strong>Bulk Projects:</strong> For larger content requirements (20+ pieces), timelines are customized based on volume and complexity.</p>
                </div>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-emerald-300/50 transition-all overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-white/5 transition-colors" itemProp="name">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <span>Do you offer SEO-optimized content writing?</span>
                </span>
                <svg className="w-6 h-6 text-emerald-300 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-emerald-100 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="mb-4">Yes! All our content is SEO-optimized following Google&apos;s latest guidelines and best practices:</p>
                  <ul className="space-y-2 ml-6">
                    <li>✅ <strong>Keyword Research:</strong> Comprehensive analysis to identify high-traffic, low-competition keywords</li>
                    <li>✅ <strong>On-Page Optimization:</strong> Strategic keyword placement, meta descriptions, title tags, and heading structure</li>
                    <li>✅ <strong>Readability Optimization:</strong> Content structured for easy scanning with short paragraphs, bullet points, and subheadings</li>
                    <li>✅ <strong>Internal Linking:</strong> Strategic links to boost site architecture and user engagement</li>
                    <li>✅ <strong>E-A-T Compliance:</strong> Content demonstrates Expertise, Authority, and Trustworthiness</li>
                    <li>✅ <strong>Mobile Optimization:</strong> Content formatted for excellent mobile reading experience</li>
                    <li>✅ <strong>Schema Markup:</strong> Structured data implementation for rich snippets</li>
                    <li>✅ <strong>Voice Search Optimization:</strong> Natural language and question-based content for voice searches</li>
                  </ul>
                  <p className="mt-4">Our SEO content writing has helped clients achieve 200-400% organic traffic growth within 3-6 months.</p>
                </div>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-emerald-300/50 transition-all overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-white/5 transition-colors" itemProp="name">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🏢</span>
                  <span>Can you write content for specific industries?</span>
                </span>
                <svg className="w-6 h-6 text-emerald-300 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-emerald-100 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="mb-4">Absolutely! Our team includes specialized writers with expertise across multiple industries:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <ul className="space-y-2 ml-6">
                      <li>✅ Technology & IT</li>
                      <li>✅ Healthcare & Medical</li>
                      <li>✅ Finance & Banking</li>
                      <li>✅ Real Estate</li>
                      <li>✅ E-commerce & Retail</li>
                      <li>✅ Education & E-learning</li>
                      <li>✅ Legal & Law Firms</li>
                    </ul>
                    <ul className="space-y-2 ml-6">
                      <li>✅ Travel & Hospitality</li>
                      <li>✅ Fashion & Lifestyle</li>
                      <li>✅ Food & Restaurants</li>
                      <li>✅ Manufacturing</li>
                      <li>✅ Automotive</li>
                      <li>✅ SaaS & Software</li>
                      <li>✅ Non-Profit & NGOs</li>
                    </ul>
                  </div>
                  <p>Each writer conducts thorough industry research to ensure content accuracy, appropriate terminology, and industry-specific insights. We match writers to projects based on their expertise and experience in your field.</p>
                </div>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-emerald-300/50 transition-all overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-white/5 transition-colors" itemProp="name">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🔄</span>
                  <span>Do you provide content revisions?</span>
                </span>
                <svg className="w-6 h-6 text-emerald-300 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-emerald-100 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="mb-4">Yes! We offer <strong>unlimited revisions</strong> until you&apos;re 100% satisfied with the content quality. Our revision policy includes:</p>
                  <ul className="space-y-2 ml-6">
                    <li>✅ <strong>2 Free Revisions:</strong> Included in the base price for all projects</li>
                    <li>✅ <strong>Additional Revisions:</strong> Available at no extra cost for reasonable changes</li>
                    <li>✅ <strong>Quick Turnaround:</strong> Revisions completed within 24-48 hours</li>
                    <li>✅ <strong>Direct Communication:</strong> Work directly with your assigned writer for clarity</li>
                    <li>✅ <strong>No Questions Asked:</strong> If you&apos;re not satisfied, we&apos;ll rewrite until it&apos;s perfect</li>
                  </ul>
                  <p className="mt-4"><strong>Major Scope Changes:</strong> If your requirements change significantly after initial delivery (e.g., complete tone change, new target audience), we&apos;ll provide a revised quote. Minor tweaks and adjustments are always free.</p>
                  <p className="mt-2">Our goal is your complete satisfaction - we won&apos;t stop until you love the content!</p>
                </div>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-emerald-300/50 transition-all overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-white/5 transition-colors" itemProp="name">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">⭐</span>
                  <span>What makes your content writing service different from others in Mumbai?</span>
                </span>
                <svg className="w-6 h-6 text-emerald-300 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-emerald-100 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="mb-4">MyDigital Crown stands out from other Mumbai content writing agencies through:</p>
                  <ul className="space-y-3 ml-6">
                    <li>✅ <strong>Expert Writers:</strong> Team of experienced professionals with 5-10+ years in content writing</li>
                    <li>✅ <strong>Industry Specialization:</strong> Writers matched to your specific industry and niche</li>
                    <li>✅ <strong>SEO Excellence:</strong> Every piece optimized for maximum search visibility and rankings</li>
                    <li>✅ <strong>100% Plagiarism-Free:</strong> Verified with premium tools, plagiarism reports available</li>
                    <li>✅ <strong>On-Time Delivery:</strong> 98% of projects delivered before deadline</li>
                    <li>✅ <strong>Unlimited Revisions:</strong> We work until you&apos;re completely satisfied</li>
                    <li>✅ <strong>Competitive Pricing:</strong> Premium quality at affordable rates with volume discounts</li>
                    <li>✅ <strong>Direct Communication:</strong> Work directly with writers, no middlemen</li>
                    <li>✅ <strong>Content Strategy:</strong> Beyond writing - we help plan your content calendar</li>
                    <li>✅ <strong>2000+ Articles Written:</strong> Proven track record with measurable results</li>
                  </ul>
                  <p className="mt-4">Our clients have seen 200-400% traffic growth, improved engagement, and higher conversion rates within 3-6 months of our content marketing implementation.</p>
                </div>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-emerald-300/50 transition-all overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-white/5 transition-colors" itemProp="name">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  <span>Can you help with content strategy and planning?</span>
                </span>
                <svg className="w-6 h-6 text-emerald-300 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-emerald-100 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="mb-4">Yes! Beyond just writing, we offer comprehensive content strategy services to maximize your content marketing ROI:</p>
                  <ul className="space-y-2 ml-6">
                    <li>✅ <strong>Content Audit:</strong> Analysis of your existing content to identify gaps and opportunities</li>
                    <li>✅ <strong>Topic Research:</strong> Data-driven identification of high-potential topics for your audience</li>
                    <li>✅ <strong>Editorial Calendar:</strong> Month-by-month planning for consistent content publication</li>
                    <li>✅ <strong>Keyword Mapping:</strong> Strategic assignment of keywords to specific content pieces</li>
                    <li>✅ <strong>Content Gap Analysis:</strong> Identifying missing content compared to competitors</li>
                    <li>✅ <strong>Content Clustering:</strong> Topic cluster strategy for SEO authority building</li>
                    <li>✅ <strong>Performance Tracking:</strong> Monthly reports on traffic, engagement, and conversions</li>
                    <li>✅ <strong>Content Repurposing:</strong> Strategies to maximize value from existing content</li>
                  </ul>
                  <p className="mt-4">Our content strategists work with you to create a comprehensive plan aligned with your business goals, ensuring every piece of content drives measurable results.</p>
                </div>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-emerald-300/50 transition-all overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-white/5 transition-colors" itemProp="name">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span>How do I get started with your content writing services?</span>
                </span>
                <svg className="w-6 h-6 text-emerald-300 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-emerald-100 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="mb-4">Getting started is simple and quick! Follow these easy steps:</p>
                  <ol className="space-y-3 ml-6 list-decimal">
                    <li><strong>Contact Us:</strong> Call +91-83695-11877 or fill out our contact form with your requirements</li>
                    <li><strong>Consultation:</strong> Free 15-30 minute consultation to discuss your content needs and goals</li>
                    <li><strong>Custom Quote:</strong> Receive a detailed proposal with pricing, timeline, and deliverables within 24 hours</li>
                    <li><strong>Approve & Start:</strong> Once you approve the quote, we assign your dedicated writer and begin immediately</li>
                    <li><strong>First Draft:</strong> Receive your first piece within the agreed timeline for review</li>
                    <li><strong>Revisions:</strong> Request any changes or revisions - we&apos;ll refine until perfect</li>
                    <li><strong>Final Delivery:</strong> Get your polished, SEO-optimized content ready to publish</li>
                  </ol>
                  <p className="mt-4"><strong>No Long-Term Contracts:</strong> Work with us on a per-project basis or opt for monthly retainers for ongoing content needs. Cancel anytime with 30 days notice.</p>
                  <p className="mt-2"><strong>Quick Start Available:</strong> For urgent projects, we can start writing within 24 hours of approval!</p>
                </div>
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-emerald-300/50 transition-all overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-white/5 transition-colors" itemProp="name">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🌍</span>
                  <span>Do you write content in languages other than English?</span>
                </span>
                <svg className="w-6 h-6 text-emerald-300 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-emerald-100 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="mb-4">Yes! We offer multilingual content writing services for diverse audiences across India and beyond:</p>
                  <ul className="space-y-3 ml-6">
                    <li>✅ <strong>Hindi:</strong> Native Hindi writers for regional content marketing</li>
                    <li>✅ <strong>Marathi:</strong> Local Mumbai market content for Maharashtra audience</li>
                    <li>✅ <strong>Gujarati:</strong> Content for Gujarat and Gujarati-speaking communities</li>
                    <li>✅ <strong>Tamil:</strong> South Indian market content for Chennai, Bangalore audiences</li>
                    <li>✅ <strong>Bengali:</strong> Content for Kolkata and West Bengal markets</li>
                    <li>✅ <strong>Hinglish:</strong> Hindi-English mix popular on social media</li>
                  </ul>
                  <p className="mt-4"><strong>Quality Assurance:</strong> All multilingual content is written by native speakers who understand cultural nuances, idioms, and local preferences. Content is reviewed by language experts before delivery.</p>
                  <p className="mt-2"><strong>Regional SEO:</strong> Multilingual content is optimized for regional search engines and local keywords for maximum visibility in target markets.</p>
                </div>
              </div>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-emerald-300/50 transition-all overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-white/5 transition-colors" itemProp="name">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">⚙️</span>
                  <span>What is your content writing process?</span>
                </span>
                <svg className="w-6 h-6 text-emerald-300 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-emerald-100 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  <p className="mb-4">Our proven 4-step content writing process ensures consistently high-quality results:</p>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-emerald-300/30">
                      <h4 className="font-bold text-emerald-300 mb-2">Step 1: Research & Planning (Day 1)</h4>
                      <ul className="space-y-1 ml-6 text-sm">
                        <li>• Understand your topic, target audience, and business goals</li>
                        <li>• Comprehensive keyword research for SEO optimization</li>
                        <li>• Competitive analysis to identify content opportunities</li>
                        <li>• Create detailed content outline and structure</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-blue-300/30">
                      <h4 className="font-bold text-blue-300 mb-2">Step 2: Writing & Drafting (Day 2-3)</h4>
                      <ul className="space-y-1 ml-6 text-sm">
                        <li>• Expert writers craft engaging, original content</li>
                        <li>• Maintain your brand voice and messaging consistency</li>
                        <li>• Strategic keyword placement for SEO without stuffing</li>
                        <li>• Include compelling headlines, subheadings, and CTAs</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-purple-300/30">
                      <h4 className="font-bold text-purple-300 mb-2">Step 3: Editing & Proofreading (Day 3-4)</h4>
                      <ul className="space-y-1 ml-6 text-sm">
                        <li>• Multiple rounds of editing for grammar, clarity, and flow</li>
                        <li>• Plagiarism checks using Copyscape and Grammarly Premium</li>
                        <li>• Fact-checking and source verification</li>
                        <li>• Readability optimization (Flesch Reading Ease score)</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-emerald-300/30">
                      <h4 className="font-bold text-emerald-300 mb-2">Step 4: SEO Optimization & Delivery (Day 4-5)</h4>
                      <ul className="space-y-1 ml-6 text-sm">
                        <li>• Final SEO optimization (meta descriptions, alt tags, internal links)</li>
                        <li>• Format for web readability (short paragraphs, bullet points)</li>
                        <li>• Quality assurance checklist review</li>
                        <li>• Delivery with usage guidelines and publishing recommendations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4"><strong>Post-Delivery Support:</strong> We remain available for questions, revisions, and optimization suggestions even after final delivery.</p>
                </div>
              </div>
            </details>
          </div>

          <div className="text-center mt-12">
            <p className="text-emerald-100 text-lg mb-6">
              Still have questions? We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-emerald-400 via-green-500 to-lime-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
              >
                <span className="text-2xl mr-3">💬</span>
                <span>Get Free Consultation</span>
              </Link>
              <a 
                href="tel:+918369511877"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105"
              >
                <span className="text-2xl mr-3">📞</span>
                <span>Call: +91-83695-11877</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <ClientSuccessStories 
        title="Client Success Stories"
      />

      {/* Trusted Brands */}
      <TrustedBrands />

      {/* Related Services */}
      {/* Our Locations */}

      <OurLocations />


      {/* Related Services */}

      <RelatedServices />

      <Footer />
    </>
  )
}
