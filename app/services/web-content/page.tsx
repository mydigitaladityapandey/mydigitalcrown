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
  title: "Web Content Writer Mumbai | 500K+ Words | SEO Copywriting",
  description: "Web Content Writer Mumbai. 500K+ Words Written | SEO Content, Blog Writing & Product Descriptions | 300+ Projects. Call +91-83695-11877",
  keywords: [
    // Primary Keywords
    "Website Content Writer in Mumbai", "content writer Mumbai", "SEO content writer Mumbai", "website copywriter Mumbai", "blog writer Mumbai",
    // Quality Keywords
    "professional content writer Mumbai", "best content writer Mumbai", "expert copywriter Mumbai", "top content writing services Mumbai", "certified content writer Mumbai",
    // Service-Specific Keywords
    "content writing services Mumbai", "web content writer Mumbai", "article writer Mumbai", "blog post writer Mumbai", "product description writer Mumbai",
    "technical content writer Mumbai", "creative copywriter Mumbai", "marketing content Mumbai", "website copy Mumbai", "landing page copy Mumbai",
    // Technical Keywords
    "SEO optimized content Mumbai", "keyword research Mumbai", "content strategy Mumbai", "conversion copywriting Mumbai", "content marketing Mumbai",
    "meta description writing Mumbai", "engaging content Mumbai", "long-form content Mumbai", "short-form copy Mumbai", "content editing Mumbai",
    // Business Keywords
    "freelance content writer Mumbai", "content agency Mumbai", "B2B content writer Mumbai", "B2C copywriter Mumbai", "ecommerce content writer Mumbai",
    "startup content writer Mumbai", "enterprise content services Mumbai"
  ],
  authors: [{ name: "Aditya Pandey", url: "https://mydigital-mu.vercel.app/about" }],
  creator: "MyDigital Crown",
  publisher: "MyDigital Crown",
  category: "Content Writing Services",
  classification: "SEO Content & Copywriting Services",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  canonical: "https://mydigital-mu.vercel.app/services/web-content",
  
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mydigital-mu.vercel.app/services/web-content",
    siteName: "MyDigital Crown",
    title: "Website Content Writer in Mumbai | #1 SEO Content Services 2025",
    description: "Top Website Content Writer in Mumbai offering SEO content, blog writing, website copywriting & product descriptions. 500K+ words written with expertise.",
    images: [
      {
        url: "https://mydigital-mu.vercel.app/images/content-writing-services-mumbai.jpg",
        width: 1200,
        height: 630,
        alt: "Website Content Writer in Mumbai - MyDigital Crown",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Website Content Writer in Mumbai | #1 SEO Content Services 2025",
    description: "Top Website Content Writer in Mumbai offering SEO content, blog writing & website copywriting services.",
    images: ["https://mydigital-mu.vercel.app/images/content-writing-services-mumbai.jpg"],
  },
}

// Comprehensive Schema Markup for Website Content Writer in Mumbai
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mydigital-mu.vercel.app/#organization",
      "name": "MyDigital Crown",
      "url": "https://mydigital-mu.vercel.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mydigital-mu.vercel.app/images/logo.png",
        "width": 250,
        "height": 60
      },
      "description": "Leading Website Content Writer in Mumbai offering professional SEO content, blog writing, website copywriting, and content writing services.",
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
          "availableLanguage": ["en", "hi"]
        }
      ],
      "sameAs": [
        "https://www.facebook.com/mydigitalcrown",
        "https://twitter.com/mydigitalcrown",
        "https://www.instagram.com/mydigitalcrown",
        "https://www.linkedin.com/company/mydigitalcrown"
      ]
    },
    {
      "@type": "Service",
      "name": "Website Content Writer in Mumbai",
      "description": "Professional Website Content Writer in Mumbai offering expert SEO content writing, blog writing, website copywriting, and content creation services.",
      "provider": {
        "@id": "https://mydigital-mu.vercel.app/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Content Writing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Content Writing",
              "description": "Search engine optimized content that ranks higher and drives organic traffic"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Blog Writing Services",
              "description": "Engaging blog posts that educate, inform, and establish thought leadership"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Copywriting",
              "description": "Compelling website content that converts visitors into customers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Product Description Writing",
              "description": "Persuasive product descriptions highlighting features and benefits"
            }
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "MyDigital Crown - Website Content Writer in Mumbai",
      "@id": "https://mydigital-mu.vercel.app/services/web-content",
      "description": "Top-rated Website Content Writer in Mumbai providing professional SEO content writing, blog writing, website copywriting, and content marketing services.",
      "url": "https://mydigital-mu.vercel.app/services/web-content",
      "telephone": "+91-83695-11877",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mumbai Office",
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "200",
        "bestRating": "5",
        "worstRating": "1"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Website Content Writer in Mumbai do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professional Website Content Writer in Mumbai creates engaging, SEO-optimized content for websites including homepage copy, service pages, blog posts, product descriptions, and landing pages. We specialize in crafting content that not only ranks on search engines but also converts visitors into customers while maintaining your brand voice and messaging."
          }
        },
        {
          "@type": "Question",
          "name": "How much does content writing cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content writing costs vary based on word count, complexity, research required, and turnaround time. Basic blog posts start from ₹1,500, website pages from ₹3,000, and comprehensive content packages from ₹25,000. As the best Website Content Writer in Mumbai, we offer custom quotes tailored to your specific needs and budget."
          }
        },
        {
          "@type": "Question",
          "name": "Why hire a professional Website Content Writer in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional content writers bring expertise in SEO, persuasive copywriting, brand voice consistency, and content strategy. We understand the Mumbai market, local audience preferences, and search behavior. Our content not only reads well but also ranks on Google, engages your target audience, and drives measurable business results including leads, sales, and brand awareness."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to write website content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timeline varies based on project scope and complexity. Blog posts (800-1500 words) typically take 3-5 business days, website pages (500-1000 words) take 5-7 days, and complete website content (15-20 pages) takes 2-4 weeks. We offer rush delivery at additional cost. Our Website Content Writer in Mumbai team ensures quality is never compromised for speed."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide SEO-optimized content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! All our content is 100% SEO-optimized. We conduct thorough keyword research, strategically place keywords, optimize meta descriptions, use proper header tags, include internal/external links, and follow all SEO best practices. Our Website Content Writer in Mumbai specializes in creating content that ranks higher on search engines while remaining engaging and readable for human audiences."
          }
        },
        {
          "@type": "Question",
          "name": "Can you write for any industry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Our experienced Website Content Writer in Mumbai team has written for 50+ industries including healthcare, education, real estate, e-commerce, technology, finance, hospitality, manufacturing, and more. We conduct thorough industry research, understand your target audience, and create content that positions you as an authority in your field."
          }
        },
        {
          "@type": "Question",
          "name": "What is your content writing process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our proven 5-step process: (1) Discovery - understanding your business, audience, and goals, (2) Research - keyword research, competitor analysis, and industry insights, (3) Writing - crafting engaging, SEO-optimized content, (4) Review - internal editing and quality checks, (5) Delivery - final content with revisions included. We maintain transparent communication throughout the process."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide revisions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer 2 rounds of revisions included in all packages to ensure you're 100% satisfied with the content. Your Website Content Writer in Mumbai will work closely with you to refine the content based on your feedback. Additional revisions are available at nominal charges. Our goal is your complete satisfaction and content that delivers results."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide content strategy and planning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our Website Content Writer in Mumbai offers comprehensive content strategy services including competitor analysis, keyword mapping, content calendar creation, topic ideation, and content gap analysis. We develop data-driven strategies that align with your business goals, target audience, and SEO objectives to maximize ROI from your content investment."
          }
        },
        {
          "@type": "Question",
          "name": "What types of content do you write?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Website Content Writer in Mumbai creates diverse content types: website copy (homepage, about, services), blog articles, product/service descriptions, landing pages, email newsletters, social media content, press releases, case studies, white papers, ebooks, and more. We adapt writing style, tone, and format to match your brand voice and content goals."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle plagiarism and content originality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All content from our Website Content Writer in Mumbai is 100% original and written from scratch. We never copy-paste or use AI-generated content without human refinement. Every piece is checked through premium plagiarism detection tools (Copyscape, Grammarly) to ensure uniqueness. We guarantee plagiarism-free content with a detailed originality report upon request."
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
          "name": "Website Content Writer in Mumbai",
          "item": "https://mydigital-mu.vercel.app/services/web-content"
        }
      ]
    }
  ]
};

export default function WebContentPage() {
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
        aria-label="Web Content Writing Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Professional Content Writers</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Website Content Writer In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  ✍️ Write <span className="text-yellow-300">Engaging Copy</span>, <span className="text-green-300">Boost SEO</span> & <span className="text-orange-300">Drive Conversions</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  SEO Content | Website Copy | Blog Writing | Product Descriptions | Landing Pages
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
                    <span>Get Quality Content</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">500K+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Words Written</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">300+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Content Projects</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">60%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Conversion Boost</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">SEO Optimized</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Web Content Writing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">✍️</span>
              Content Writing Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Web Content Writing</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional content that engages your audience, improves SEO rankings, and drives measurable results
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop" 
                    alt="Web Content Writing Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Conversion-Focused</h3>
                <p className="text-gray-700 leading-relaxed">
                  Content crafted to engage readers and guide them toward taking action and converting.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔍 SEO-Optimized</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every piece optimized for search engines with strategic keywords and best practices.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">✨ Brand Voice</h3>
                <p className="text-gray-700 leading-relaxed">
                  Content that reflects your unique brand personality and resonates with your target audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Content Writing Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Content <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web content writing services to elevate your online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🌐</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Website Copy</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Compelling website content that captures attention and drives action.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Homepage Content</li>
                  <li className="flex items-start gap-2">✓ About Us Pages</li>
                  <li className="flex items-start gap-2">✓ Service Pages</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Blog Writing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Engaging blog posts that educate, inform, and establish authority.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ SEO Blog Posts</li>
                  <li className="flex items-start gap-2">✓ Industry Articles</li>
                  <li className="flex items-start gap-2">✓ Thought Leadership</li>
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
                  Persuasive product descriptions that highlight features and benefits.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ E-commerce Copy</li>
                  <li className="flex items-start gap-2">✓ Feature Highlights</li>
                  <li className="flex items-start gap-2">✓ Benefit-Driven</li>
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
                  High-converting landing page copy optimized for campaigns.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Headline Writing</li>
                  <li className="flex items-start gap-2">✓ CTA Optimization</li>
                  <li className="flex items-start gap-2">✓ Conversion-Focused</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">SEO Content</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Search-optimized content that ranks higher and drives organic traffic.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Keyword Research</li>
                  <li className="flex items-start gap-2">✓ On-Page SEO</li>
                  <li className="flex items-start gap-2">✓ Content Strategy</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">✏️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Content Editing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Professional editing to polish and perfect your existing content.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Proofreading</li>
                  <li className="flex items-start gap-2">✓ Copy Editing</li>
                  <li className="flex items-start gap-2">✓ Content Refresh</li>
                </ul>
              </div>
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
          <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>❓</div>
          <div className="absolute bottom-32 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>✨</div>
          <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>📝</div>
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
              Everything you need to know about Website Content Writer in Mumbai services ✨
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎨</span>
                  <span>What does a Website Content Writer in Mumbai do?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                A professional Website Content Writer in Mumbai creates engaging, SEO-optimized content for websites including homepage copy, service pages, blog posts, product descriptions, and landing pages. We specialize in crafting content that not only ranks on search engines but also converts visitors into customers while maintaining your brand voice and messaging.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">💰</span>
                  <span>How much does content writing cost in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Content writing costs vary based on word count, complexity, research required, and turnaround time. Basic blog posts start from ₹1,500, website pages from ₹3,000, and comprehensive content packages from ₹25,000. As the best Website Content Writer in Mumbai, we offer custom quotes tailored to your specific needs and budget. Contact us for a free consultation and detailed pricing!
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🏆</span>
                  <span>Why hire a professional Website Content Writer in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Professional content writers bring expertise in SEO, persuasive copywriting, brand voice consistency, and content strategy. We understand the Mumbai market, local audience preferences, and search behavior. Our content not only reads well but also ranks on Google, engages your target audience, and drives measurable business results including leads, sales, and brand awareness.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                  <span>How long does it take to write website content?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Timeline varies based on project scope and complexity. Blog posts (800-1500 words) typically take 3-5 business days, website pages (500-1000 words) take 5-7 days, and complete website content (15-20 pages) takes 2-4 weeks. We offer rush delivery at additional cost. Our Website Content Writer in Mumbai team ensures quality is never compromised for speed.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">📱</span>
                  <span>Do you provide SEO-optimized content?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Yes! All our content is 100% SEO-optimized. We conduct thorough keyword research, strategically place keywords, optimize meta descriptions, use proper header tags, include internal/external links, and follow all SEO best practices. Our Website Content Writer in Mumbai specializes in creating content that ranks higher on search engines while remaining engaging and readable for human audiences.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🔄</span>
                  <span>Can you write for any industry?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Absolutely! Our experienced Website Content Writer in Mumbai team has written for 50+ industries including healthcare, education, real estate, e-commerce, technology, finance, hospitality, manufacturing, and more. We conduct thorough industry research, understand your target audience, and create content that positions you as an authority in your field.
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                  <span>What is your content writing process?</span>
                </span>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Our proven 5-step process: (1) Discovery - understanding your business, audience, and goals, (2) Research - keyword research, competitor analysis, and industry insights, (3) Writing - crafting engaging, SEO-optimized content, (4) Review - internal editing and quality checks, (5) Delivery - final content with revisions included. We maintain transparent communication throughout the process.
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🛠️</span>
                  <span>Do you provide revisions?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Yes! We offer 2 rounds of revisions included in all packages to ensure you&apos;re 100% satisfied with the content. Your Website Content Writer in Mumbai will work closely with you to refine the content based on your feedback. Additional revisions are available at nominal charges. Our goal is your complete satisfaction and content that delivers results.
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-indigo-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">📊</span>
                  <span>Do you provide content strategy and planning?</span>
                </span>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Yes! Our Website Content Writer in Mumbai offers comprehensive content strategy services including competitor analysis, keyword mapping, content calendar creation, topic ideation, and content gap analysis. We develop data-driven strategies that align with your business goals, target audience, and SEO objectives to maximize ROI from your content investment.
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:border-teal-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-teal-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">✍️</span>
                  <span>What types of content do you write?</span>
                </span>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Our Website Content Writer in Mumbai creates diverse content types: website copy (homepage, about, services), blog articles, product/service descriptions, landing pages, email newsletters, social media content, press releases, case studies, white papers, ebooks, and more. We adapt writing style, tone, and format to match your brand voice and content goals.
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-rose-500/20 hover:border-rose-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-rose-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🔍</span>
                  <span>How do you handle plagiarism and content originality?</span>
                </span>
                <svg className="w-7 h-7 text-rose-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                All content from our Website Content Writer in Mumbai is 100% original and written from scratch. We never copy-paste or use AI-generated content without human refinement. Every piece is checked through premium plagiarism detection tools (Copyscape, Grammarly) to ensure uniqueness. We guarantee plagiarism-free content with a detailed originality report upon request.
              </div>
            </details>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-xl text-white/80 mb-6">
              Still Have Questions? Let&apos;s Talk!
            </p>
            <a href="tel:+918369511877" className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
              <span className="text-2xl mr-3">📞</span>
              <span>Call: +91-83695-11877</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Website Content Writer in Mumbai */}
      <section 
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
        aria-label="Website Content Writer in Mumbai Services Information"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="prose prose-lg max-w-none">
            
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
                <span className="mr-2">📝</span>
                Complete Information
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Why Choose a Professional <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Website Content Writer in Mumbai?</span>
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Your complete guide to professional content writing services in Mumbai
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-4xl mr-4">✍️</span>
                  What Makes a Great Website Content Writer in Mumbai?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A professional <strong>Website Content Writer in Mumbai</strong> combines creativity, SEO expertise, and deep understanding of your target audience to create compelling content that drives results. Our <strong>Website Content Writer in Mumbai</strong> team has 10+ years of experience crafting content for 1000+ websites across diverse industries.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you work with a <strong>Website Content Writer in Mumbai</strong>, you get access to local market insights, cultural understanding, and business-specific writing strategies that resonate with your Mumbai audience. Our <strong>Website Content Writer in Mumbai</strong> professionals stay updated with the latest SEO trends, content marketing strategies, and copywriting techniques.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Every <strong>Website Content Writer in Mumbai</strong> at MyDigital Crown follows industry best practices, focuses on conversion optimization, and ensures your content stands out from competitors while maintaining consistency with your brand voice and achieving your business goals.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-4xl mr-4">🔍</span>
                  SEO Content Writing Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Search Engine Optimization is critical for online visibility. Our <strong>Website Content Writer in Mumbai</strong> specializes in creating SEO-friendly content that ranks on Google. We conduct thorough keyword research, strategically place keywords, optimize meta tags, and follow all SEO best practices.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a leading <strong>Website Content Writer in Mumbai</strong>, we understand that great SEO content reduces bounce rates, increases organic traffic, and improves conversion rates. Our writing process includes competitor analysis, search intent research, and continuous optimization based on performance data.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The difference between average content and exceptional SEO content lies in the details. Our <strong>Website Content Writer in Mumbai</strong> professionals pay attention to keyword density, readability scores, content structure, internal linking, and user engagement signals that search engines love.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white mb-16">
              <h3 className="text-4xl font-bold mb-8 text-center">
                Comprehensive Content Writing Services
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="text-3xl mr-3">📰</span>
                    Blog Writing
                  </h4>
                  <p className="text-blue-100 leading-relaxed">
                    Our <strong>Website Content Writer in Mumbai</strong> creates engaging blog posts that educate your audience, establish thought leadership, and drive organic traffic. Every blog is researched, SEO-optimized, and designed to convert readers into customers.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="text-3xl mr-3">🌐</span>
                    Website Copywriting
                  </h4>
                  <p className="text-blue-100 leading-relaxed">
                    Specialized website copywriting from our <strong>Website Content Writer in Mumbai</strong> team. We create compelling homepage copy, service pages, product descriptions, and landing pages that capture attention and drive conversions.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="text-3xl mr-3">🛒</span>
                    Product Descriptions
                  </h4>
                  <p className="text-blue-100 leading-relaxed">
                    Beyond basic descriptions, our <strong>Website Content Writer in Mumbai</strong> helps craft persuasive product copy that highlights features, emphasizes benefits, and addresses customer pain points to boost e-commerce sales.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-4xl mr-4">🎨</span>
                  Brand Voice & Consistency
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your brand has a unique personality. Our <strong>Website Content Writer in Mumbai</strong> specializes in capturing your brand voice and maintaining consistency across all content. Whether it&apos;s professional, friendly, authoritative, or playful - we match your tone perfectly.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A professional <strong>Website Content Writer in Mumbai</strong> understands that consistent messaging builds brand recognition and trust. We create style guides, maintain tone of voice, and ensure all content aligns with your brand identity and values.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our <strong>Website Content Writer in Mumbai</strong> team has successfully maintained brand voice for 500+ clients, helping businesses create memorable brand experiences that resonate with their target audience and build long-term customer relationships.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-4xl mr-4">⚡</span>
                  Content Strategy & Planning
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Great content needs great strategy. Our <strong>Website Content Writer in Mumbai</strong> doesn&apos;t just write - we plan comprehensive content strategies aligned with your business goals. We identify content gaps, plan content calendars, and create topic clusters.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Strategy matters - 60% of businesses without a content plan fail to achieve their marketing goals. Our <strong>Website Content Writer in Mumbai</strong> ensures your content works together to build authority, drive traffic, and generate leads consistently.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Every content piece created by our <strong>Website Content Writer in Mumbai</strong> is part of a larger strategy. We plan content pillars, create content funnels, and ensure every word published contributes to your overall business objectives.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-12 mb-16 border-2 border-yellow-200">
              <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
                <span className="text-5xl mr-4">🏆</span>
                Why MyDigital Crown is the Best Website Content Writer in Mumbai?
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span><strong>10+ Years Experience:</strong> Our <strong>Website Content Writer in Mumbai</strong> team has a decade of proven content expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span><strong>500K+ Words Written:</strong> Extensive portfolio across all content types and industries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span><strong>100% SEO Optimized:</strong> Every piece of content follows SEO best practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span><strong>Award-Winning Content:</strong> Recognized for content excellence and results</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span><strong>Local Mumbai Expertise:</strong> Deep understanding of Mumbai market and audience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span><strong>Conversion-Focused:</strong> Content that actually drives business results and ROI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span><strong>24/7 Support:</strong> Always available to assist with your content needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <span><strong>Affordable Pricing:</strong> Premium quality content at competitive rates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center bg-white rounded-3xl p-12 shadow-2xl border-2 border-blue-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Work with the Best Website Content Writer in Mumbai?
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your website with compelling, SEO-optimized content from Mumbai&apos;s leading <strong>Website Content Writer in Mumbai</strong>. Let&apos;s create content that drives results!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918369511877" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  <span className="text-2xl mr-3">📞</span>
                  <span>Call: +91-83695-11877</span>
                </a>
                <Link href="/contact" className="inline-flex items-center bg-white border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105">
                  <span className="text-2xl mr-3">✉️</span>
                  <span>Get Free Consultation</span>
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
              Ready to Elevate Your<br />
              <span className="text-yellow-300">Web Content?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our expert writers create compelling content that engages your audience and drives conversions!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Quality Content</span>
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
                <span>Professional Content Writers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>500K+ Words Written</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% SEO Optimized</span>
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
        currentService="/services/web-content"
        title="Complete Content Solutions"
        description="Enhance your web content with our comprehensive digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
