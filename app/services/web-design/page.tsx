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
  title: "Web Design Mumbai | UI/UX Designer | MyDigital Crown",
  description: "Website Designer Mumbai. 2000+ Sites Designed | UI/UX, Responsive & E-commerce Design | 10+ Years Experience. Call +91-83695-11877",
  keywords: [
    // Primary Keywords
    "Website Designer In Mumbai", "web designer Mumbai", "UI UX designer Mumbai", "website design services Mumbai", "responsive web design Mumbai",
    // Quality Keywords
    "professional web designer Mumbai", "best website designer Mumbai", "top website designer Mumbai", "expert web designer Mumbai", "certified web designer Mumbai",
    // Service-Specific Keywords
    "e-commerce web design Mumbai", "corporate web design Mumbai", "custom web design Mumbai", "creative web design Mumbai", "modern web design Mumbai",
    "landing page design Mumbai", "portfolio website design Mumbai", "business website design Mumbai", "startup web design Mumbai", "mobile web design Mumbai",
    // Technical Keywords
    "Figma designer Mumbai", "Adobe XD designer Mumbai", "Sketch designer Mumbai", "wireframe design Mumbai", "prototype design Mumbai",
    "user interface design Mumbai", "user experience design Mumbai", "interaction design Mumbai", "visual design Mumbai", "graphic design Mumbai",
    // Business Keywords
    "affordable web designer Mumbai", "freelance web designer Mumbai", "web design agency Mumbai", "web design company Mumbai", "web design consultation Mumbai",
    "web design packages Mumbai", "web design pricing Mumbai"
  ],
  authors: [{ name: "Aditya Pandey", url: "https://mydigital-mu.vercel.app/about" }],
  creator: "MyDigital Crown",
  publisher: "MyDigital Crown",
  category: "Web Design Services",
  classification: "Website Design & UI/UX Services",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mydigital-mu.vercel.app'),
  alternates: {
    canonical: '/services/web-design',
  },
  openGraph: {
    title: "Website Designer In Mumbai | #1 UI/UX Design Services 2025",
    description: "Leading Website Designer In Mumbai offering expert UI/UX design, responsive web design, e-commerce design & brand identity. Get 200+ websites designed with 10+ years experience.",
    url: 'https://mydigital-mu.vercel.app/services/web-design',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Website Designer In Mumbai | #1 UI/UX Design Services 2025",
    description: "Leading Website Designer In Mumbai offering expert UI/UX design, responsive web design, e-commerce design & brand identity.",
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
};

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
        "url": "https://mydigital-mu.vercel.app/logo.png"
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
      "@id": "https://mydigital-mu.vercel.app/services/web-design#service",
      "serviceType": "Website Design Services",
      "provider": {
        "@id": "https://mydigital-mu.vercel.app/#organization"
      },
      "name": "Website Designer In Mumbai",
      "description": "Leading Website Designer In Mumbai offering expert UI/UX design, responsive web design, e-commerce design & brand identity services.",
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Design Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI/UX Design Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Responsive Web Design"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce Design"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Redesign Services"
            }
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://mydigital-mu.vercel.app/#localbusiness",
      "name": "MyDigital Crown - Website Designer In Mumbai",
      "image": "https://mydigital-mu.vercel.app/logo.png",
      "description": "Leading Website Designer In Mumbai offering expert UI/UX design, responsive web design, e-commerce design & brand identity services.",
      "url": "https://mydigital-mu.vercel.app/services/web-design",
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
        "reviewCount": "200"
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
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Website Designer In Mumbai do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Website Designer In Mumbai creates visually appealing, user-friendly website designs that enhance user experience and drive conversions. We specialize in UI/UX design, responsive design, e-commerce design, brand identity, wireframing, prototyping, and user interface development using modern design tools like Figma, Adobe XD, and Sketch."
          }
        },
        {
          "@type": "Question",
          "name": "How much does web design cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web design costs in Mumbai vary based on project complexity: Landing pages ₹15,000-₹30,000, business websites ₹40,000-₹80,000, e-commerce designs ₹80,000-₹2,00,000, custom UI/UX projects ₹1,00,000+. We offer transparent pricing with detailed quotes tailored to your specific requirements and budget."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose a professional Website Designer In Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional website designers create conversion-focused designs, ensure mobile responsiveness, optimize user experience, maintain brand consistency, follow design best practices, implement accessibility standards, deliver industry-standard quality, and help your business stand out online with designs that drive real business growth and customer engagement."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to design a website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website design timelines vary: Landing pages take 1-2 weeks, business websites 2-4 weeks, e-commerce sites 4-8 weeks, and custom complex projects 8-12+ weeks. Timeline depends on design complexity, number of pages, revision rounds, and client feedback speed. We provide detailed timelines and milestones during consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide responsive web design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! All our website designs are fully responsive and optimized for mobile, tablet, and desktop devices. We follow mobile-first design principles to ensure perfect display across all screen sizes, touch-friendly navigation, fast loading on mobile networks, and seamless user experience on any device with adaptive layouts and flexible images."
          }
        },
        {
          "@type": "Question",
          "name": "What design tools do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use industry-leading design tools including Figma for collaborative design, Adobe XD for prototyping, Sketch for UI design, Adobe Photoshop for graphics, Adobe Illustrator for vector graphics, InVision for interactive mockups, Zeplin for design handoff, and modern front-end frameworks for implementation ensuring high-quality deliverables."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign my existing website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We specialize in website redesign projects. We analyze your current website, identify improvement areas, preserve what works, modernize design elements, enhance user experience, improve mobile responsiveness, optimize conversion paths, and deliver a fresh, contemporary design that maintains your brand identity while significantly improving performance and user engagement."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide UI/UX design services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer comprehensive UI/UX design services including user research, persona development, user journey mapping, wireframing, interactive prototyping, visual design, usability testing, accessibility optimization, and iterative design improvements. Our user-centered approach ensures designs that are both beautiful and highly functional with optimal user experience."
          }
        },
        {
          "@type": "Question",
          "name": "Will I own the design files?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Upon project completion and final payment, you receive complete ownership of all design files including source files (Figma, PSD, AI), exported assets, fonts, icons, images, and documentation. We provide organized, well-labeled files with clear naming conventions for easy future modifications or handoff to other developers."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer design revisions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We include multiple revision rounds in our design packages: 2 rounds for landing pages, 3 rounds for business websites, and 4+ rounds for complex projects. We value your feedback and work collaboratively to refine designs until you're completely satisfied. Additional revisions beyond included rounds are available at reasonable rates."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in your web design packages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our web design packages include: initial consultation, competitor analysis, mood boards, wireframes, high-fidelity mockups, responsive design for all devices, custom graphics, icon sets, style guides, design system documentation, source files, revision rounds, and post-launch support. Packages are customizable based on your specific project requirements and budget."
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
          "name": "Website Designer In Mumbai",
          "item": "https://mydigital-mu.vercel.app/services/web-design"
        }
      ]
    }
  ]
};

export default function WebDesign() {
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
        aria-label="Web Design Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Award-Winning Web Designers</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Website Designer In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  🎨 Create <span className="text-yellow-300">Stunning Designs</span>, <span className="text-green-300">Enhance UX</span> & <span className="text-orange-300">Boost Conversions</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Modern UI/UX | Responsive Design | User-Centered | Brand-Focused
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
                    <span>Design My Website</span>
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
                    <div className="text-white text-base font-bold uppercase tracking-wider">Websites Designed</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">95%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Client Satisfaction</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">80%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Higher Conversions</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">24/7</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Design Support</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Web Design Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎨</span>
              Web Design Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Web Design</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stunning, user-centric designs that captivate visitors and convert them into loyal customers
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop" 
                    alt="Web Design Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">👁️ Visual Appeal</h3>
                <p className="text-gray-700 leading-relaxed">
                  Captivating designs that grab attention and create lasting first impressions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Responsive Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  Perfect display across all devices - mobile, tablet, and desktop experiences.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Conversion-Focused</h3>
                <p className="text-gray-700 leading-relaxed">
                  Strategic design elements that guide visitors toward taking action and converting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Design <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web design services to create stunning online experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎨</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Beautiful interfaces with exceptional user experiences.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ User Interface Design</li>
                  <li className="flex items-start gap-2">✓ User Experience</li>
                  <li className="flex items-start gap-2">✓ Wireframing</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📱</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Responsive Design</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Designs that adapt beautifully to any screen size.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Mobile-First</li>
                  <li className="flex items-start gap-2">✓ Tablet Optimized</li>
                  <li className="flex items-start gap-2">✓ Desktop Perfect</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🛒</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">E-commerce Design</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Conversion-optimized designs for online stores.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Product Pages</li>
                  <li className="flex items-start gap-2">✓ Checkout Flow</li>
                  <li className="flex items-start gap-2">✓ Shopping Cart</li>
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
                  High-converting landing pages for campaigns.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Campaign Pages</li>
                  <li className="flex items-start gap-2">✓ Lead Generation</li>
                  <li className="flex items-start gap-2">✓ A/B Testing Ready</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🏢</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Corporate Websites</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Professional designs for businesses and enterprises.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Business Sites</li>
                  <li className="flex items-start gap-2">✓ Corporate Portals</li>
                  <li className="flex items-start gap-2">✓ Professional Look</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔄</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Website Redesign</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Modernize and improve your existing website.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Modern Refresh</li>
                  <li className="flex items-start gap-2">✓ UX Improvements</li>
                  <li className="flex items-start gap-2">✓ Performance Boost</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Website Designer In Mumbai */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
                  <span className="mr-2">🎨</span>
                  Website Designer In Mumbai
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Why Choose a Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Website Designer In Mumbai</span>?
                </h2>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                In today&apos;s digital-first world, your website is often the first point of contact between your business and potential customers. As a leading <strong>Website Designer In Mumbai</strong>, MyDigital Crown understands that exceptional web design goes far beyond aesthetics—it&apos;s about creating immersive digital experiences that captivate visitors, build trust, and drive conversions. With over 10 years of experience serving Mumbai&apos;s diverse business landscape, we&apos;ve mastered the art and science of creating websites that don&apos;t just look stunning, but deliver measurable business results.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Mumbai, being India&apos;s commercial capital, demands digital solutions that reflect the city&apos;s dynamic energy and professional excellence. Our team of expert designers combines creative brilliance with technical expertise to craft websites that stand out in Mumbai&apos;s competitive digital marketplace. Whether you&apos;re a startup in Bandra, an established enterprise in BKC, or a growing business in Andheri, we deliver web design solutions that align perfectly with your brand vision and business objectives.
              </p>
            </div>

            {/* Core Services Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Web Design Services</span> We Offer
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🎨 Custom UI/UX Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our <strong>Website Designer In Mumbai</strong> team specializes in creating bespoke user interfaces that reflect your brand&apos;s unique personality. We conduct extensive user research, create detailed wireframes, and design intuitive user journeys that guide visitors seamlessly from landing page to conversion. Every pixel is carefully crafted to ensure visual harmony, accessibility, and optimal user engagement across all devices and screen sizes.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Responsive Web Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    With over 70% of Indian internet users accessing websites through mobile devices, responsive design isn&apos;t optional—it&apos;s essential. Our responsive web design approach ensures your website delivers flawless experiences across smartphones, tablets, laptops, and desktops. We employ mobile-first design principles, optimized touch interfaces, and progressive enhancement techniques to guarantee perfect rendering on every device.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🛍️ E-Commerce Design Excellence</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Transform your online store into a conversion powerhouse with our specialized e-commerce design services. We create stunning product showcases, intuitive shopping carts, streamlined checkout processes, and trust-building elements that significantly reduce cart abandonment rates. Our designs integrate seamlessly with platforms like Shopify, WooCommerce, Magento, and custom e-commerce solutions, ensuring robust functionality alongside beautiful aesthetics.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Brand Identity & Visual Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Establish a powerful visual identity that resonates with your target audience. Our comprehensive brand design services include logo design, color palette development, typography selection, icon creation, and complete brand guideline documentation. As your trusted <strong>Website Designer In Mumbai</strong>, we ensure every visual element communicates your brand values consistently across all digital touchpoints.
                  </p>
                </div>
              </div>
            </div>

            {/* Design Process Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
                  <span className="mr-2">⚡</span>
                  Our Process
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Our Proven <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Design Process</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Discovery & Research Phase</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We begin every project with comprehensive research into your business, industry, competitors, and target audience. Our team conducts stakeholder interviews, analyzes user behavior patterns, studies market trends, and creates detailed buyer personas. This foundational work ensures our design strategy aligns perfectly with your business goals and audience expectations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Planning & Wireframing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Based on research insights, we develop detailed information architecture, create low-fidelity wireframes, and map out user journeys. This stage focuses on functionality, content hierarchy, and navigation structure before investing in visual design. We collaborate closely with you to refine the structure until it perfectly supports your business objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Visual Design & Prototyping</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our creative team transforms wireframes into stunning visual designs that capture your brand essence. We create multiple design concepts, develop interactive prototypes, and refine every detail based on your feedback. This iterative process ensures the final design exceeds your expectations while maintaining optimal user experience standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Development & Quality Assurance</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Once designs are approved, our development team brings them to life using cutting-edge technologies and best coding practices. We conduct rigorous testing across devices, browsers, and screen sizes to ensure flawless performance. Every element is optimized for speed, accessibility, and search engine visibility before launch.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Launch & Ongoing Support</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We manage every aspect of your website launch, including domain configuration, hosting setup, and post-launch monitoring. Our commitment doesn&apos;t end at launch—we provide ongoing maintenance, performance optimization, security updates, and design enhancements to ensure your website continues delivering exceptional results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  What Makes Us Mumbai&apos;s <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Premier Web Design Agency</span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Choosing the right <strong>Website Designer In Mumbai</strong> is crucial for your digital success. Here&apos;s why businesses across Mumbai trust MyDigital Crown for their web design needs:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl">💡</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Creative Excellence</h4>
                    <p className="text-gray-700">Our award-winning designers stay ahead of design trends while creating timeless, effective designs that deliver long-term value.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-xl">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Technical Expertise</h4>
                    <p className="text-gray-700">We combine design brilliance with technical proficiency in HTML5, CSS3, JavaScript, React, and modern frameworks for optimal performance.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl">
                  <div className="text-3xl">📊</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Approach</h4>
                    <p className="text-gray-700">Every design decision is backed by user research, analytics insights, and conversion optimization principles to maximize ROI.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-orange-50 rounded-xl">
                  <div className="text-3xl">🚀</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround</h4>
                    <p className="text-gray-700">We understand Mumbai&apos;s fast-paced business environment and deliver projects on time without compromising quality.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-pink-50 rounded-xl">
                  <div className="text-3xl">💰</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h4>
                    <p className="text-gray-700">No hidden costs or surprise charges. We provide detailed quotes and transparent pricing for all our web design services.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-teal-50 rounded-xl">
                  <div className="text-3xl">🤝</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h4>
                    <p className="text-gray-700">Get access to our expert team 24/7 for support, updates, and consultation throughout your website&apos;s lifecycle.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
                  <span className="mr-2">🏢</span>
                  Industries We Serve
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Industries We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Specialize In</span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                As a versatile <strong>Website Designer In Mumbai</strong>, we&apos;ve successfully delivered web design solutions across diverse industries:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <div className="text-4xl mb-3">🏢</div>
                  <p className="font-semibold text-gray-900">Real Estate</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <div className="text-4xl mb-3">🏥</div>
                  <p className="font-semibold text-gray-900">Healthcare</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-100">
                  <div className="text-4xl mb-3">🎓</div>
                  <p className="font-semibold text-gray-900">Education</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100">
                  <div className="text-4xl mb-3">🛍️</div>
                  <p className="font-semibold text-gray-900">E-Commerce</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-100">
                  <div className="text-4xl mb-3">🍽️</div>
                  <p className="font-semibold text-gray-900">Restaurants</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <div className="text-4xl mb-3">💼</div>
                  <p className="font-semibold text-gray-900">Finance</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-100">
                  <div className="text-4xl mb-3">✈️</div>
                  <p className="font-semibold text-gray-900">Travel & Tourism</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-green-50 rounded-xl border border-teal-100">
                  <div className="text-4xl mb-3">⚖️</div>
                  <p className="font-semibold text-gray-900">Legal Services</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16" itemScope itemType="https://schema.org/FAQPage">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
                  <span className="mr-2">❓</span>
                  Frequently Asked Questions
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Web Design Questions</span> Answered
                </h2>
              </div>

              <div className="space-y-4 max-w-4xl mx-auto">
                <details className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                    <span itemProp="name">What does a Website Designer In Mumbai do?</span>
                    <span className="ml-4 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">A Website Designer In Mumbai creates visually appealing, user-friendly website designs that enhance user experience and drive conversions. We specialize in UI/UX design, responsive design, e-commerce design, brand identity, wireframing, prototyping, and user interface development using modern design tools like Figma, Adobe XD, and Sketch.</p>
                  </div>
                </details>

                <details className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                    <span itemProp="name">How much does web design cost in Mumbai?</span>
                    <span className="ml-4 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Web design costs in Mumbai vary based on project complexity: Landing pages ₹15,000-₹30,000, business websites ₹40,000-₹80,000, e-commerce designs ₹80,000-₹2,00,000, custom UI/UX projects ₹1,00,000+. We offer transparent pricing with detailed quotes tailored to your specific requirements and budget.</p>
                  </div>
                </details>

                <details className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                    <span itemProp="name">Why choose a professional Website Designer In Mumbai?</span>
                    <span className="ml-4 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Professional website designers create conversion-focused designs, ensure mobile responsiveness, optimize user experience, maintain brand consistency, follow design best practices, implement accessibility standards, deliver industry-standard quality, and help your business stand out online with designs that drive real business growth and customer engagement.</p>
                  </div>
                </details>

                <details className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                    <span itemProp="name">How long does it take to design a website?</span>
                    <span className="ml-4 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Website design timelines vary: Landing pages take 1-2 weeks, business websites 2-4 weeks, e-commerce sites 4-8 weeks, and custom complex projects 8-12+ weeks. Timeline depends on design complexity, number of pages, revision rounds, and client feedback speed. We provide detailed timelines and milestones during consultation.</p>
                  </div>
                </details>

                <details className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                    <span itemProp="name">Do you provide responsive web design?</span>
                    <span className="ml-4 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Yes! All our website designs are fully responsive and optimized for mobile, tablet, and desktop devices. We follow mobile-first design principles to ensure perfect display across all screen sizes, touch-friendly navigation, fast loading on mobile networks, and seamless user experience on any device with adaptive layouts and flexible images.</p>
                  </div>
                </details>

                <details className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                    <span itemProp="name">What design tools do you use?</span>
                    <span className="ml-4 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">We use industry-leading design tools including Figma for collaborative design, Adobe XD for prototyping, Sketch for UI design, Adobe Photoshop for graphics, Adobe Illustrator for vector graphics, InVision for interactive mockups, Zeplin for design handoff, and modern front-end frameworks for implementation ensuring high-quality deliverables.</p>
                  </div>
                </details>

                <details className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                    <span itemProp="name">Can you redesign my existing website?</span>
                    <span className="ml-4 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Absolutely! We specialize in website redesign projects. We analyze your current website, identify improvement areas, preserve what works, modernize design elements, enhance user experience, improve mobile responsiveness, optimize conversion paths, and deliver a fresh, contemporary design that maintains your brand identity while significantly improving performance and user engagement.</p>
                  </div>
                </details>

                <details className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                    <span itemProp="name">Do you provide UI/UX design services?</span>
                    <span className="ml-4 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Yes! We offer comprehensive UI/UX design services including user research, persona development, user journey mapping, wireframing, interactive prototyping, visual design, usability testing, accessibility optimization, and iterative design improvements. Our user-centered approach ensures designs that are both beautiful and highly functional with optimal user experience.</p>
                  </div>
                </details>

                <details className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                    <span itemProp="name">Will I own the design files?</span>
                    <span className="ml-4 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Yes! Upon project completion and final payment, you receive complete ownership of all design files including source files (Figma, PSD, AI), exported assets, fonts, icons, images, and documentation. We provide organized, well-labeled files with clear naming conventions for easy future modifications or handoff to other developers.</p>
                  </div>
                </details>

                <details className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                    <span itemProp="name">Do you offer design revisions?</span>
                    <span className="ml-4 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Yes! We include multiple revision rounds in our design packages: 2 rounds for landing pages, 3 rounds for business websites, and 4+ rounds for complex projects. We value your feedback and work collaboratively to refine designs until you&apos;re completely satisfied. Additional revisions beyond included rounds are available at reasonable rates.</p>
                  </div>
                </details>

                <details className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                    <span itemProp="name">What&apos;s included in your web design packages?</span>
                    <span className="ml-4 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Our web design packages include: initial consultation, competitor analysis, mood boards, wireframes, high-fidelity mockups, responsive design for all devices, custom graphics, icon sets, style guides, design system documentation, source files, revision rounds, and post-launch support. Packages are customizable based on your specific project requirements and budget.</p>
                  </div>
                </details>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Partner with Mumbai&apos;s leading <strong>Website Designer In Mumbai</strong> and create a website that not only looks spectacular but drives real business growth. Let&apos;s build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918369511877" className="inline-flex items-center justify-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call: +91-83695-11877
                </a>
                <a href="mailto:info@mydigitalcrown.in" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Get Free Quote
                </a>
              </div>
            </div>

          </article>
        </div>
      </section>

      {/* Client Success Stories */}
      <ClientSuccessStories 
        title="Client Success Stories"
      />

      {/* Trusted Brands */}
      <TrustedBrands />

      {/* Our Locations */}

      <OurLocations />


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/web-design"
        title="Complete Digital Solutions"
        description="Enhance your web design with our comprehensive development and marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  );
}

