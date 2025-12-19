import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EnquiryForm from '@/app/components/EnquiryForm'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import TrustedBrands from '@/app/components/TrustedBrands'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from "next/link";
import Image from 'next/image'

export const metadata = {
  title: "Social Media Marketing Tiruchirappalli | SMM Agency | MyDigital",
  description: "Social Media Marketing Company Tiruchirappalli. 1000+ Campaigns | 50M+ Reach | Facebook, Instagram & LinkedIn Experts. Call +91-83695-11877",
  keywords: [
    // Primary Keywords
    "Social Media marketing company in Tiruchirappalli", "social media marketing Tiruchirappalli", "SMM company Tiruchirappalli", "social media agency Tiruchirappalli", "social media services Tiruchirappalli",
    // Quality Keywords
    "best social media company Tiruchirappalli", "top SMM agency Tiruchirappalli", "professional social media marketing Tiruchirappalli", "expert social media services Tiruchirappalli", "certified SMM company Tiruchirappalli",
    // Platform-Specific Keywords
    "Facebook marketing Tiruchirappalli", "Instagram marketing Tiruchirappalli", "LinkedIn marketing Tiruchirappalli", "Twitter marketing Tiruchirappalli", "YouTube marketing Tiruchirappalli",
    "TikTok marketing Tiruchirappalli", "Pinterest marketing Tiruchirappalli", "social media advertising Tiruchirappalli", "social media management Tiruchirappalli", "social media strategy Tiruchirappalli",
    // Service-Specific Keywords
    "social media content creation Tiruchirappalli", "social media optimization Tiruchirappalli", "social media campaign Tiruchirappalli", "influencer marketing Tiruchirappalli", "community management Tiruchirappalli",
    "social media analytics Tiruchirappalli", "paid social advertising Tiruchirappalli", "organic social media Tiruchirappalli", "social media branding Tiruchirappalli", "social media consulting Tiruchirappalli",
    // Business Keywords
    "affordable SMM Tiruchirappalli", "social media packages Tiruchirappalli", "social media ROI Tiruchirappalli", "social media growth Tiruchirappalli", "social media marketing consultant Tiruchirappalli",
    "B2B social media marketing Tiruchirappalli", "social media for business Tiruchirappalli"
  ],
  authors: [{ name: "Aditya Pandey", url: "https://mydigitalcrown.in/about" }],
  creator: "MyDigital Crown",
  publisher: "MyDigital Crown",
  category: "Social Media Marketing Services",
  classification: "Digital Marketing & Social Media Management",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  openGraph: {
    title: 'Social Media marketing company in Tiruchirappalli | #1 SMM Agency 2025',
    description: 'Leading Social Media marketing company in Tiruchirappalli with 1000+ campaigns, 50M+ reach & proven ROI. Expert Facebook, Instagram, LinkedIn marketing services.',
    url: 'https://mydigitalcrown.in/tiruchirappalli/social-media-marketing',
    siteName: 'MyDigital Crown',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Social Media marketing company in Tiruchirappalli - MyDigital Crown',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media marketing company in Tiruchirappalli | #1 SMM Agency 2025',
    description: 'Leading Social Media marketing company in Tiruchirappalli with 1000+ campaigns, 50M+ reach & proven ROI.',
    images: ['https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=630&fit=crop'],
  },
  alternates: {
    canonical: 'https://mydigitalcrown.in/tiruchirappalli/social-media-marketing',
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
      "description": "Leading Social Media marketing company in Tiruchirappalli providing expert SMM services",
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
      "serviceType": "Social Media marketing company in Tiruchirappalli",
      "provider": {
        "@type": "Organization",
        "name": "MyDigital Crown"
      },
      "areaServed": {
        "@type": "City",
        "name": "Tiruchirappalli"
      },
      "description": "Professional Social Media marketing company in Tiruchirappalli offering Facebook, Instagram, LinkedIn, Twitter marketing services with 1000+ campaigns and 50M+ reach",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Social Media Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Facebook Marketing",
              "description": "Professional Facebook marketing services including ads, page management, and community building"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Instagram Marketing",
              "description": "Expert Instagram marketing with reels, stories, ads, and influencer collaborations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "LinkedIn Marketing",
              "description": "B2B LinkedIn marketing services for professional networking and lead generation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Campaign Management",
              "description": "Complete social media campaign management across all major platforms"
            }
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "MyDigital Crown - Social Media marketing company in Tiruchirappalli",
      "image": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=630&fit=crop",
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
        "latitude": 10.7905,
        "longitude": 78.7047
      },
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
        "reviewCount": "800"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Social Media marketing company in Tiruchirappalli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Social Media marketing company in Tiruchirappalli specializes in managing and growing your brand's presence across social media platforms like Facebook, Instagram, LinkedIn, Twitter, YouTube, and TikTok through strategic content creation, paid advertising, community engagement, influencer partnerships, and data-driven campaigns that drive business growth and measurable ROI."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Social Media marketing cost in Tiruchirappalli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Social media marketing costs in Tiruchirappalli vary based on services, platforms, and campaign scope. Our Social Media marketing company in Tiruchirappalli offers customized packages: Starter ₹15,000-₹25,000/month, Growth ₹30,000-₹50,000/month, Premium ₹60,000-₹1,00,000/month, and Enterprise custom solutions with flexible pricing based on your specific business needs."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose a professional Social Media marketing company in Tiruchirappalli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professional Social Media marketing company in Tiruchirappalli brings expertise in platform algorithms, creative content production, paid advertising optimization, advanced analytics, community management, influencer marketing, crisis management, and proven strategies that deliver measurable ROI, brand growth, and competitive advantage in the digital marketplace."
          }
        },
        {
          "@type": "Question",
          "name": "Which social media platforms should my business use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best platforms depend on your target audience, industry, and business goals. Our Social Media marketing company in Tiruchirappalli conducts thorough audience research and competitor analysis to recommend the optimal platform mix from Facebook, Instagram, LinkedIn, Twitter, YouTube, Pinterest, TikTok, and emerging platforms based on where your customers are most active."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results from social media marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most businesses see initial engagement improvements within 2-4 weeks. Significant growth in followers, engagement, and conversions typically occurs within 3-6 months with consistent strategy execution. Our Social Media marketing company in Tiruchirappalli provides monthly performance reports tracking progress toward your specific KPIs and business objectives."
          }
        },
        {
          "@type": "Question",
          "name": "What services does your Social Media marketing company in Tiruchirappalli offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive social media services including strategy development, content creation (graphics, videos, reels), community management, paid advertising (Facebook Ads, Instagram Ads), influencer marketing, analytics and reporting, social media audits, competitor analysis, crisis management, and social commerce setup. All services are customized to your business goals."
          }
        },
        {
          "@type": "Question",
          "name": "How often should I post on social media?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Posting frequency varies by platform and strategy. Our Social Media marketing company in Tiruchirappalli recommends: Facebook 1-2 times daily, Instagram 1-3 times daily (posts + stories), LinkedIn 3-5 times weekly, Twitter 3-10 times daily, YouTube 2-4 times weekly. We create custom content calendars based on your audience engagement patterns and business objectives."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide content creation for social media?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our Social Media marketing company in Tiruchirappalli has an in-house team of graphic designers, video editors, copywriters, and content strategists who create high-quality, engaging content tailored to each platform. We produce custom graphics, videos, reels, stories, carousel posts, and written content aligned with your brand identity with approval workflows."
          }
        },
        {
          "@type": "Question",
          "name": "How do you measure social media success?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We track comprehensive metrics including engagement rates, reach, impressions, follower growth, click-through rates, conversion rates, website traffic, lead generation, sales attribution, and ROI. Our Social Media marketing company in Tiruchirappalli provides detailed monthly reports with performance insights, competitor analysis, audience demographics, and data-driven recommendations for continuous improvement."
          }
        },
        {
          "@type": "Question",
          "name": "Can you manage social media for multiple platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Our Social Media marketing company in Tiruchirappalli specializes in multi-platform management including Facebook, Instagram, LinkedIn, Twitter, YouTube, Pinterest, TikTok, and more. We create platform-specific strategies and content optimized for each network's unique audience and best practices with integrated campaigns and consistent branding."
          }
        },
        {
          "@type": "Question",
          "name": "What are your social media marketing packages and pricing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Social Media marketing company in Tiruchirappalli offers flexible packages: Starter ₹15,000-₹25,000/month (2 platforms, 12 posts), Growth ₹30,000-₹50,000/month (3 platforms, 20 posts, paid ads), Premium ₹60,000-₹1,00,000/month (5+ platforms, 30+ posts, advanced campaigns), and Enterprise custom solutions with strategy, content creation, management, analytics, and reporting included."
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
          "name": "Tiruchirappalli",
          "item": "https://mydigitalcrown.in/tiruchirappalli"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Social Media marketing company in Tiruchirappalli",
          "item": "https://mydigitalcrown.in/tiruchirappalli/social-media-marketing"
        }
      ]
    }
  ]
};

export default function SocialMediaMarketing() {
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
        aria-label="Social Media Marketing Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">India&apos;s Top Social Media Agency</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Elite Social Media Agency Tiruchirappalli - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  🎯 Build <span className="text-yellow-300">Viral Campaigns</span>, <span className="text-green-300">Amplify Reach</span> & <span className="text-orange-300">Convert Audiences</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Strategic Social Media Excellence | Multi-Platform Mastery | Performance-Driven Results
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
                    <span>Grow Your Social Media</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">200+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Campaigns Run</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">5M+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">People Reached</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">₹2Cr+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Ad Spend Managed</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">150+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Happy Clients</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Social Media Marketing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">�</span>
              Social Media Transformation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Sets Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Social Media Strategies</span> Apart?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced social media management that creates brand advocates, amplifies engagement, and accelerates business expansion
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop" 
                    alt="Social Media Marketing Services Tiruchirappalli"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">� Viral Content Creation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Innovative content strategies that capture attention, spark conversations, and drive exponential organic growth.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">� Multi-Format Mastery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Expert production of reels, stories, carousels, and video content optimized for maximum platform performance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">� Growth Analytics</h3>
                <p className="text-gray-700 leading-relaxed">
                  Advanced performance tracking with deep insights to continuously optimize campaigns for maximum impact and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Premier Social Media <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive social media excellence across every major platform and audience segment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📘</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Facebook Marketing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Build communities and drive conversions with strategic Facebook campaigns.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Facebook Ads</li>
                  <li className="flex items-start gap-2">✓ Page Management</li>
                  <li className="flex items-start gap-2">✓ Community Building</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📸</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Instagram Marketing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Grow your Instagram presence with stunning visuals and engaging stories.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Instagram Ads</li>
                  <li className="flex items-start gap-2">✓ Reels & Stories</li>
                  <li className="flex items-start gap-2">✓ Influencer Marketing</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💼</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">LinkedIn Marketing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Build professional networks and generate B2B leads on LinkedIn.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ LinkedIn Ads</li>
                  <li className="flex items-start gap-2">✓ Company Page</li>
                  <li className="flex items-start gap-2">✓ B2B Lead Gen</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🐦</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Twitter/X Marketing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Engage in real-time conversations and build brand awareness on Twitter.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Twitter Ads</li>
                  <li className="flex items-start gap-2">✓ Tweet Strategy</li>
                  <li className="flex items-start gap-2">✓ Trend Jacking</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📺</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">YouTube Marketing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Grow your YouTube channel with optimized videos and strategic promotion.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ YouTube Ads</li>
                  <li className="flex items-start gap-2">✓ Video SEO</li>
                  <li className="flex items-start gap-2">✓ Channel Growth</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📌</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Pinterest Marketing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Drive traffic and sales with visually appealing Pinterest campaigns.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Pinterest Ads</li>
                  <li className="flex items-start gap-2">✓ Pin Strategy</li>
                  <li className="flex items-start gap-2">✓ Shopping Pins</li>
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
              <span className="mr-2">⚡</span>
              Advanced Digital Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              60+ Specialized Services To Amplify Your Success
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Beyond social media excellence, discover our comprehensive ecosystem of cutting-edge digital marketing solutions
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-2xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Emojis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-4xl animate-float opacity-10">📱</div>
          <div className="absolute top-40 right-20 text-5xl animate-float-delayed opacity-10">🎯</div>
          <div className="absolute bottom-32 left-1/4 text-3xl animate-float opacity-10">📊</div>
          <div className="absolute bottom-20 right-1/3 text-4xl animate-float-delayed opacity-10">🚀</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">💬</span>
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Questions About Advanced Social Media Solutions?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know about professional Social Media marketing company in Tiruchirappalli services and strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20 hover:border-blue-400/50">
              <summary className="cursor-pointer list-none p-6 font-bold text-lg text-white flex justify-between items-center">
                <span>What is Social Media marketing company in Tiruchirappalli? 📱</span>
                <svg className="w-6 h-6 text-blue-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                A Social Media marketing company in Tiruchirappalli specializes in managing and growing your brand&apos;s presence across social media platforms like Facebook, Instagram, LinkedIn, Twitter, and YouTube. Our Social Media marketing company in Tiruchirappalli offers comprehensive services including content creation, community management, paid advertising, influencer collaborations, and analytics to help businesses build engaged audiences and drive measurable results.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20 hover:border-pink-400/50">
              <summary className="cursor-pointer list-none p-6 font-bold text-lg text-white flex justify-between items-center">
                <span>How much does Social Media marketing cost in Tiruchirappalli? 💰</span>
                <svg className="w-6 h-6 text-blue-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Social media marketing costs in Tiruchirappalli vary based on the platforms, services, campaign scope, and business goals. Our Social Media marketing company in Tiruchirappalli offers flexible packages starting from ₹15,000/month for basic management to ₹50,000+ for comprehensive multi-platform campaigns with paid advertising. We provide customized pricing based on your specific needs, audience size, content requirements, and advertising budget.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20 hover:border-blue-400/50">
              <summary className="cursor-pointer list-none p-6 font-bold text-lg text-white flex justify-between items-center">
                <span>Why choose a professional Social Media marketing company in Tiruchirappalli? 🏆</span>
                <svg className="w-6 h-6 text-blue-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                A professional Social Media marketing company in Tiruchirappalli brings specialized expertise in platform algorithms, content strategy, creative design, paid advertising, community management, and analytics. We understand the nuances of each platform, create engaging content that resonates with your audience, manage campaigns efficiently, and deliver measurable ROI. Our Social Media marketing company in Tiruchirappalli has helped over 800 clients achieve significant growth through proven strategies and data-driven optimization.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20 hover:border-green-400/50">
              <summary className="cursor-pointer list-none p-6 font-bold text-lg text-white flex justify-between items-center">
                <span>How long does it take to see results from social media marketing? ⏱️</span>
                <svg className="w-6 h-6 text-blue-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Initial improvements in engagement and reach typically appear within 2-4 weeks of starting with our Social Media marketing company in Tiruchirappalli. Significant growth in followers, engagement rates, and conversions usually becomes evident within 3-6 months of consistent strategy execution. The timeline depends on factors like your starting point, industry competition, budget, content quality, and campaign objectives. Our Social Media marketing company in Tiruchirappalli provides monthly reports showing progress and optimization opportunities.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20 hover:border-purple-400/50">
              <summary className="cursor-pointer list-none p-6 font-bold text-lg text-white flex justify-between items-center">
                <span>Which social media platforms should my business use? 📊</span>
                <svg className="w-6 h-6 text-blue-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                The best platforms depend on your target audience, business type, and marketing goals. Our Social Media marketing company in Tiruchirappalli conducts audience analysis to recommend the optimal platform mix. B2C businesses often benefit from Facebook, Instagram, and YouTube. B2B companies see strong results on LinkedIn and Twitter. E-commerce brands thrive on Instagram and Pinterest. We help you focus resources on platforms where your audience is most active and engaged.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20 hover:border-orange-400/50">
              <summary className="cursor-pointer list-none p-6 font-bold text-lg text-white flex justify-between items-center">
                <span>What&apos;s included in Social Media marketing company in Tiruchirappalli services? 🎯</span>
                <svg className="w-6 h-6 text-blue-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Our Social Media marketing company in Tiruchirappalli provides comprehensive services including strategy development, content creation (graphics, videos, copywriting), posting schedule management, community engagement, paid advertising campaigns, influencer collaborations, hashtag research, competitor analysis, monthly analytics reports, and ongoing optimization. We handle everything from creative concepting to performance tracking, ensuring your social media presence drives real business results.
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20 hover:border-red-400/50">
              <summary className="cursor-pointer list-none p-6 font-bold text-lg text-white flex justify-between items-center">
                <span>How do you measure social media marketing success? 📈</span>
                <svg className="w-6 h-6 text-blue-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Our Social Media marketing company in Tiruchirappalli tracks comprehensive metrics including reach, impressions, engagement rate, follower growth, click-through rates, conversion rates, cost per acquisition, and ROI. We provide detailed monthly reports showing performance against goals, top-performing content, audience demographics, and actionable insights. Our transparent reporting ensures you understand exactly how social media contributes to your business objectives and revenue growth.
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20 hover:border-cyan-400/50">
              <summary className="cursor-pointer list-none p-6 font-bold text-lg text-white flex justify-between items-center">
                <span>Do you provide content creation for social media? 🎨</span>
                <svg className="w-6 h-6 text-blue-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Yes! Our Social Media marketing company in Tiruchirappalli has an in-house team of graphic designers, video editors, copywriters, and content strategists who create high-quality, engaging content tailored to each platform. We produce custom graphics, videos, reels, stories, carousel posts, and written content aligned with your brand identity. All content goes through approval before publishing, ensuring it meets your quality standards and brand guidelines.
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20 hover:border-yellow-400/50">
              <summary className="cursor-pointer list-none p-6 font-bold text-lg text-white flex justify-between items-center">
                <span>How do you measure social media success? 📊</span>
                <svg className="w-6 h-6 text-blue-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                We track comprehensive metrics including engagement rates, reach, impressions, follower growth, click-through rates, conversion rates, website traffic, lead generation, sales attribution, and ROI. Our Social Media marketing company in Tiruchirappalli provides detailed monthly reports with performance insights, competitor analysis, audience demographics, and data-driven recommendations for continuous improvement. We use advanced analytics tools and custom dashboards for real-time monitoring.
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20 hover:border-teal-400/50">
              <summary className="cursor-pointer list-none p-6 font-bold text-lg text-white flex justify-between items-center">
                <span>Can you manage social media for multiple platforms? 🌐</span>
                <svg className="w-6 h-6 text-blue-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Absolutely! Our Social Media marketing company in Tiruchirappalli specializes in multi-platform management including Facebook, Instagram, LinkedIn, Twitter, YouTube, Pinterest, TikTok, and more. We create platform-specific strategies and content optimized for each network&apos;s unique audience and best practices. Whether you need management for 2 platforms or 10, we provide integrated campaigns with consistent branding while leveraging each platform&apos;s strengths for maximum impact.
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20 hover:border-indigo-400/50">
              <summary className="cursor-pointer list-none p-6 font-bold text-lg text-white flex justify-between items-center">
                <span>What are your social media marketing packages and pricing? 💰</span>
                <svg className="w-6 h-6 text-blue-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-blue-100 leading-relaxed">
                Our Social Media marketing company in Tiruchirappalli offers flexible packages: Starter ₹15,000-₹25,000/month (2 platforms, 12 posts), Growth ₹30,000-₹50,000/month (3 platforms, 20 posts, paid ads), Premium ₹60,000-₹1,00,000/month (5+ platforms, 30+ posts, advanced campaigns), and Enterprise custom solutions. All packages include strategy development, content creation, community management, analytics, and monthly reporting. Contact us for a customized quote based on your specific requirements.
              </div>
            </details>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Still Have Questions About Social Media Marketing?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Our Social Media marketing company in Tiruchirappalli experts are here to help!
            </p>
            <a href="tel:+918369511877" className="inline-flex items-center justify-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <span className="mr-2">📞</span>
              Call Now: +91-83695-11877
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📝</span>
              Complete Information
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Professional Social Media marketing company in Tiruchirappalli?
            </h2>
          </div>

          <div className="space-y-12">
            {/* Section 1 */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🎯</div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">What Makes Great Social Media marketing company in Tiruchirappalli?</h3>
                  <div className="prose prose-lg max-w-none text-blue-100 leading-relaxed space-y-4">
                    <p>
                      A professional Social Media marketing company in Tiruchirappalli brings specialized expertise in creating and managing campaigns that drive measurable business results across platforms like Facebook, Instagram, LinkedIn, Twitter, YouTube, and Pinterest. With over 1000 campaigns run and 50M+ people reached, our Social Media marketing company in Tiruchirappalli understands the complexities of content strategy, paid advertising, community management, and performance optimization.
                    </p>
                    <p>
                      The best Social Media marketing company in Tiruchirappalli doesn&apos;t just post content randomly. We develop data-driven strategies aligned with your business goals, target audience insights, and platform best practices. Our Social Media marketing company in Tiruchirappalli has helped over 800 businesses achieve significant growth through creative content, strategic campaigns, and continuous optimization that maximizes ROI.
                    </p>
                    <p>
                      What sets a leading Social Media marketing company in Tiruchirappalli apart is the ability to connect social media activities directly to business outcomes like leads, sales, and revenue. We implement comprehensive tracking, analytics, and reporting systems that provide clear visibility into campaign performance. Every campaign from our Social Media marketing company in Tiruchirappalli is backed by data, creativity, and proven strategies designed to build engaged communities and drive conversions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">📱</div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Platform Expertise from Social Media marketing company in Tiruchirappalli</h3>
                  <div className="prose prose-lg max-w-none text-blue-100 leading-relaxed space-y-4">
                    <p>
                      Our Social Media marketing company in Tiruchirappalli specializes in managing campaigns across all major social media platforms. We master Facebook marketing for community building and lead generation, Instagram marketing for visual storytelling and e-commerce, LinkedIn marketing for B2B networking and professional services, Twitter marketing for real-time engagement and brand awareness, YouTube marketing for video content and channel growth, and Pinterest marketing for product discovery and traffic generation.
                    </p>
                    <p>
                      As an experienced Social Media marketing company in Tiruchirappalli provider, we understand each platform&apos;s unique algorithms, best practices, audience demographics, and advertising options. We create platform-specific content strategies that leverage each channel&apos;s strengths while maintaining consistent brand messaging. Our Social Media marketing company in Tiruchirappalli has managed ₹5Cr+ in ad spend, delivering exceptional ROI through expert campaign management and optimization.
                    </p>
                    <p>
                      The Social Media marketing company in Tiruchirappalli team develops comprehensive multi-platform strategies including content calendars, creative concepts, copywriting, graphic design, video production, paid advertising campaigns, influencer collaborations, community management, and performance analytics. Our Social Media marketing company in Tiruchirappalli has helped clients generate thousands of leads, millions in revenue, and build engaged communities of loyal customers across all social platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 - Three Column Services */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🚀</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4">Comprehensive Marketing Services from Social Media marketing company in Tiruchirappalli</h3>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Our Social Media marketing company in Tiruchirappalli offers end-to-end social media services covering all aspects of digital success.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                      <div className="text-4xl mb-4">🎨</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Content Creation</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Professional graphics, videos, and copy that stop the scroll. Our Social Media marketing company in Tiruchirappalli creates engaging content optimized for each platform and audience.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                      <div className="text-4xl mb-4">📊</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Paid Advertising</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Expert campaign management across Facebook Ads, Instagram Ads, LinkedIn Ads, and more. The Social Media marketing company in Tiruchirappalli maximizes ROI through strategic targeting and optimization.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                      <div className="text-4xl mb-4">💬</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Community Management</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Build and nurture engaged communities. Our Social Media marketing company in Tiruchirappalli manages comments, messages, and interactions to strengthen customer relationships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">📈</div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Campaign Management & Optimization by Social Media marketing company in Tiruchirappalli</h3>
                  <div className="prose prose-lg max-w-none text-blue-100 leading-relaxed space-y-4">
                    <p>
                      Our Social Media marketing company in Tiruchirappalli excels at creating and managing high-performing campaigns that drive business results. We develop comprehensive campaign strategies aligned with your goals, whether it&apos;s brand awareness, lead generation, website traffic, app installs, or e-commerce sales. Our Social Media marketing company in Tiruchirappalli team handles everything from campaign setup and creative development to targeting, bidding, and ongoing optimization.
                    </p>
                    <p>
                      The Social Media marketing company in Tiruchirappalli provides expert paid advertising management across all major platforms. We leverage advanced targeting options to reach your ideal customers based on demographics, interests, behaviors, and custom audiences. Our Social Media marketing company in Tiruchirappalli continuously tests and optimizes ad creatives, targeting parameters, ad placements, and bidding strategies to maximize ROI while minimizing cost per acquisition.
                    </p>
                    <p>
                      As a results-focused Social Media marketing company in Tiruchirappalli provider, we implement comprehensive tracking and analytics to measure campaign performance accurately. We track metrics like reach, impressions, engagement, clicks, conversions, and revenue attribution. Our transparent reporting shows exactly how social media marketing contributes to your business goals. The Social Media marketing company in Tiruchirappalli has helped businesses achieve 300% average ROI increase through strategic campaign management and data-driven optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">💡</div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Creative Content & Strategy by Social Media marketing company in Tiruchirappalli</h3>
                  <div className="prose prose-lg max-w-none text-blue-100 leading-relaxed space-y-4">
                    <p>
                      A professional Social Media marketing company in Tiruchirappalli creates content that captures attention, drives engagement, and inspires action. We develop comprehensive content strategies covering themes, formats, posting schedules, and distribution plans. Our Social Media marketing company in Tiruchirappalli produces high-quality graphics, videos, reels, stories, carousel posts, and written content tailored to each platform&apos;s requirements and your brand identity.
                    </p>
                    <p>
                      The Social Media marketing company in Tiruchirappalli includes experienced graphic designers, video editors, copywriters, and content strategists who collaborate to create scroll-stopping content. We conduct audience research to understand what resonates with your target customers, analyze competitor content for opportunities, and stay updated on trending formats and viral techniques. Our Social Media marketing company in Tiruchirappalli ensures consistent brand voice and visual identity across all platforms while adapting content for each channel&apos;s unique requirements.
                    </p>
                    <p>
                      Our Social Media marketing company in Tiruchirappalli also provides community management, influencer marketing, user-generated content campaigns, and social listening services. We monitor brand mentions, engage with followers, respond to comments and messages, manage customer service inquiries, and identify opportunities for engagement. The insights from our Social Media marketing company in Tiruchirappalli help you build authentic relationships with customers, turn followers into brand advocates, and create loyal communities that drive word-of-mouth growth.
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
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Why MyDigital Crown is the Best Social Media marketing company in Tiruchirappalli?</h3>
                  <p className="text-blue-100 text-lg leading-relaxed mb-8">
                    As Tiruchirappalli&apos;s leading Social Media marketing company in Tiruchirappalli provider, we deliver exceptional results through expert strategy, creative content, and data-driven optimization.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">1000+ Campaigns Run</div>
                        <div className="text-blue-100">Proven track record across all major social platforms</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">50M+ People Reached</div>
                        <div className="text-blue-100">Massive audience reach across all demographics</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">₹5Cr+ Ad Spend Managed</div>
                        <div className="text-blue-100">Expert management of large advertising budgets</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">800+ Happy Clients</div>
                        <div className="text-blue-100">Trusted by businesses across all industries</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">Multi-Platform Expertise</div>
                        <div className="text-blue-100">Master all social media platforms and formats</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">In-House Creative Team</div>
                        <div className="text-blue-100">Designers, videographers, and copywriters on staff</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">Data-Driven Optimization</div>
                        <div className="text-blue-100">Continuous testing and improvement for better ROI</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-bold text-lg mb-1">24/7 Campaign Monitoring</div>
                        <div className="text-blue-100">Round-the-clock performance tracking and support</div>
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
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Work with the Best Social Media marketing company in Tiruchirappalli?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Join 800+ successful businesses building engaged communities and driving sales through expert social media marketing
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
              Ready to Transform Your<br />
              <span className="text-yellow-300">Social Impact?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Partner with our elite social media specialists to create campaigns that captivate audiences and accelerate growth!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Start Your Campaign</span>
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
                <span>Top Social Media Agency</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>1000+ Campaigns Run</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>50M+ People Reached</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <OurLocations />

      {/* Related Services */}
      <RelatedServices 
        currentService="/services/social-media-marketing"
        title="Complete Social Media Solutions"
        description="Enhance your social media presence with our comprehensive digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  );
}
