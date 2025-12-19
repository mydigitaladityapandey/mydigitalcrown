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
  title: 'Web Development Moradabad | React Next.js Experts | MyDigital',
  description: 'Website Development Company Moradabad. 300+ Sites Built | React, Next.js & E-commerce | 10+ Years Experience. Call +91-83695-11877',
  keywords: [
    // Primary Keywords (5)
    'web development moradabad',
    'website development moradabad',
    'web development company moradabad',
    'website development company moradabad',
    'web development services moradabad',
    
    // Quality & Authority Keywords (8)
    'best web development company moradabad',
    'top website development company moradabad',
    'expert web development moradabad',
    'professional web development moradabad',
    'leading web development agency moradabad',
    'premier web development services',
    'trusted web developers moradabad',
    'web development specialist moradabad',
    
    // Service-specific Keywords (10)
    'custom website development moradabad',
    'responsive web development moradabad',
    'ecommerce website development moradabad',
    'react development moradabad',
    'nextjs development moradabad',
    'full stack development moradabad',
    'website redesign moradabad',
    'web application development moradabad',
    'progressive web apps moradabad',
    'api development moradabad',
    
    // Technical Keywords (8)
    'javascript development moradabad',
    'typescript development moradabad',
    'nodejs development moradabad',
    'mongodb development moradabad',
    'rest api development moradabad',
    'graphql development moradabad',
    'serverless web development',
    'cloud web development moradabad',
    
    // Business & Industry Keywords (6)
    'hire web developers moradabad',
    'freelance web developer moradabad',
    'web development for startups',
    'corporate website development moradabad',
    'enterprise web development',
    'web development agency moradabad',
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Web Development',
  classification: 'Technology Services',
  openGraph: {
    title: 'Website Development Company In Moradabad | #1 Custom Web Development Services 2025',
    description: 'Leading Website Development Company In Moradabad offering expert custom web development, e-commerce solutions, React/Next.js development & responsive website design.',
    url: 'https://mydigitalcrown.in/moradabad/web-development',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/web-development-moradabad.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Development Services in Moradabad - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company In Moradabad | #1 Custom Web Development Services 2025',
    description: 'Leading Website Development Company In Moradabad offering expert custom web development, e-commerce solutions, React/Next.js development & responsive website design.',
    creator: '@mydigitalcrown',
    site: '@mydigitalcrown',
    images: ['https://mydigitalcrown.in/images/twitter-web-development.jpg'],
  },
  alternates: {
    canonical: 'https://mydigitalcrown.in/moradabad/web-development',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function WebDevelopment() {
  // Schema Markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
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
        "serviceType": "Website Development Company In Moradabad",
        "provider": {
          "@id": "https://mydigitalcrown.in/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Moradabad"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Website Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "React & Next.js Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Maintenance & Support"
              }
            }
          ]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://mydigitalcrown.in/#localbusiness",
        "name": "MyDigital Crown - Website Development Company In Moradabad",
        "image": "https://mydigitalcrown.in/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Chembur",
          "addressLocality": "Moradabad",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "244001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.8389,
          "longitude": 78.7378
        },
        "url": "https://mydigitalcrown.in/moradabad/web-development",
        "telephone": "+91-83695-11877",
        "priceRange": "₹₹",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
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
            "name": "What does a website development company do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A website development company designs, develops, and maintains websites using technologies like HTML, CSS, JavaScript, React, Next.js, and more. We create custom websites, e-commerce stores, and web applications tailored to your business needs."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to hire a website development company in Moradabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Website development costs in Moradabad range from ₹25,000 for basic websites to ₹2,00,000+ for complex e-commerce platforms. Basic websites cost ₹25,000-₹50,000, business websites ₹50,000-₹1,50,000, e-commerce stores ₹1,00,000-₹5,00,000, and custom web applications start at ₹2,00,000+."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose MyDigital Crown as your website development company in Moradabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MyDigital Crown has built 300+ websites with 10+ years experience. We offer custom development, React/Next.js expertise, e-commerce solutions, 99.9% uptime, 24/7 support, mobile-responsive design, and competitive prices. We are Moradabad's trusted web development partner."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to develop a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basic websites take 2-4 weeks, business websites take 4-8 weeks, e-commerce platforms take 8-12 weeks, and complex web applications take 12-20 weeks. Timeline depends on project scope, features, and requirements."
            }
          },
          {
            "@type": "Question",
            "name": "What types of websites can you build?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build all types of websites including corporate websites, e-commerce stores, portfolio websites, educational platforms, real estate portals, booking systems, SaaS applications, CMS-based sites, progressive web apps (PWAs), and custom web applications."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer e-commerce website development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We specialize in e-commerce development using WooCommerce, Shopify, Magento, and custom solutions. Features include product catalogs, shopping carts, payment gateways, inventory management, order tracking, and customer accounts with secure checkout."
            }
          },
          {
            "@type": "Question",
            "name": "Is my website SEO-friendly and optimized for search engines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! All our websites are built with SEO best practices including clean code structure, fast loading speed, mobile responsiveness, schema markup, proper heading hierarchy, meta tags, sitemap generation, and optimized images for better search engine rankings."
            }
          },
          {
            "@type": "Question",
            "name": "Will my website work on mobile devices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! All our websites are 100% mobile-responsive and mobile-first with responsive design that adapts to all screen sizes, touch-friendly navigation, optimized images, fast loading on 3G/4G networks, PWA capabilities, and cross-browser compatibility."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide website maintenance and support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We offer comprehensive website maintenance packages including regular software and security updates, daily automated backups, 24/7 uptime monitoring, bug fixes, technical support, performance optimization, content updates, SEO monitoring, and monthly analytics reports."
            }
          },
          {
            "@type": "Question",
            "name": "What technologies do you use for web development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use latest technologies: Frontend - React, Next.js, Vue.js, TypeScript, HTML5, CSS3, Tailwind CSS. Backend - Node.js, Express, PHP, Python. Databases - MongoDB, PostgreSQL, MySQL, Firebase. CMS - WordPress, Shopify, Magento. Cloud - AWS, Google Cloud, Azure, Vercel."
            }
          },
          {
            "@type": "Question",
            "name": "What are your web development pricing packages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer flexible pricing: Basic websites ₹25,000-₹50,000, business websites ₹50,000-₹1,50,000, e-commerce stores ₹1,00,000-₹5,00,000, custom web applications ₹2,00,000+, enterprise solutions custom quotes, and maintenance plans ₹5,000-₹25,000/month."
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
            "item": "https://mydigitalcrown.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Moradabad",
            "item": "https://mydigitalcrown.in/moradabad"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Web Development",
            "item": "https://mydigitalcrown.in/moradabad/web-development"
          }
        ]
      }
    ]
  };

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
        aria-label="Web Development Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Expert Web Developers</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Website Development Company In Moradabad - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  💻 Build <span className="text-yellow-300">Modern Websites</span>, <span className="text-green-300">Lightning Fast</span> & <span className="text-orange-300">100% Secure</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Custom Development | React/Next.js | E-commerce | CMS Solutions
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
                    <span>Build Your Website</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">300+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Websites Built</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">15+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Expert Developers</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">99.9%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Uptime Guarantee</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">24/7</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Technical Support</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Web Development Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">💻</span>
              Web Development Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Web Development</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lightning-fast, secure, and scalable websites built with cutting-edge technology
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
                    alt="Web Development Services Moradabad"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Lightning Fast</h3>
                <p className="text-gray-700 leading-relaxed">
                  Optimized code and modern frameworks ensure blazing-fast load times and smooth performance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔒 Secure & Reliable</h3>
                <p className="text-gray-700 leading-relaxed">
                  Enterprise-grade security with SSL, encryption, and regular updates to protect your data.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📈 Scalable Solutions</h3>
                <p className="text-gray-700 leading-relaxed">
                  Built to grow with your business, handling increased traffic without performance issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Development <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development services powered by cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Custom Development</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Tailored websites built from scratch to match your exact needs.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Custom Features</li>
                  <li className="flex items-start gap-2">✓ Unique Design</li>
                  <li className="flex items-start gap-2">✓ Full Control</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚛️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">React/Next.js Apps</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Modern, fast web applications with React and Next.js frameworks.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ React Development</li>
                  <li className="flex items-start gap-2">✓ Next.js SSR/SSG</li>
                  <li className="flex items-start gap-2">✓ Performance</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🛒</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">E-commerce Solutions</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Full-featured online stores with payment gateways and inventory.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Shopping Cart</li>
                  <li className="flex items-start gap-2">✓ Payment Integration</li>
                  <li className="flex items-start gap-2">✓ Order Management</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">CMS Development</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Easy-to-manage websites with WordPress, Shopify, or custom CMS.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ WordPress Sites</li>
                  <li className="flex items-start gap-2">✓ Shopify Stores</li>
                  <li className="flex items-start gap-2">✓ Custom CMS</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔌</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">API Integration</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Connect your website with third-party services and APIs.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ REST APIs</li>
                  <li className="flex items-start gap-2">✓ Third-party Services</li>
                  <li className="flex items-start gap-2">✓ Custom Endpoints</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🛠️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Maintenance & Support</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Ongoing updates, security patches, and technical support.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Regular Updates</li>
                  <li className="flex items-start gap-2">✓ Security Patches</li>
                  <li className="flex items-start gap-2">✓ 24/7 Support</li>
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
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>💻</div>
          <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🚀</div>
          <div className="absolute bottom-20 left-1/4 text-6xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>⭐</div>
          <div className="absolute bottom-40 right-1/3 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}>🎨</div>
          <div className="absolute top-1/2 right-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.8s'}}>🔌</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-xl">
              <span className="mr-2">❓</span>
              Frequently Asked Questions
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">Got Questions?</span> We&apos;ve Got Answers!
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know about our Website Development Company In Moradabad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-orange-300/30 hover:border-blue-300/60 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-xl text-white cursor-pointer list-none">
                <span className="flex items-center gap-3">
                  <span className="text-3xl">💻</span>
                  <span>What does a website development company do?</span>
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-orange-300"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-blue-100 mt-4 leading-relaxed">
                A website development company designs, develops, and maintains websites using technologies like HTML, CSS, JavaScript, React, Next.js, PHP, and more. We create custom websites, e-commerce stores, web applications, and provide ongoing support to ensure your online presence thrives.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-blue-300/30 hover:border-blue-300/60 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-xl text-white cursor-pointer list-none">
                <span className="flex items-center gap-3">
                  <span className="text-3xl">💵</span>
                  <span>How much does it cost to hire a website development company in Moradabad?</span>
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-blue-300"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-blue-100 mt-4 leading-relaxed">
                Website development costs in Moradabad vary based on complexity:
                <br />• Basic Business Website: ₹25,000 - ₹50,000
                <br />• E-commerce Website: ₹50,000 - ₹1,50,000
                <br />• Custom Web Application: ₹1,00,000 - ₹5,00,000+
                <br />• Enterprise Solutions: Custom pricing based on requirements
                <br /><br />We offer flexible packages to suit every budget and business need.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-green-300/30 hover:border-green-300/60 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-xl text-white cursor-pointer list-none">
                <span className="flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  <span>Why choose MyDigital Crown as your website development company in Moradabad?</span>
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-green-300"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-blue-100 mt-4 leading-relaxed">
                We&apos;re Moradabad&apos;s leading website development company with:
                <br />• 300+ websites built successfully
                <br />• 10+ years of industry experience
                <br />• Expert developers (React, Next.js, WordPress, PHP)
                <br />• 99.9% uptime guarantee
                <br />• Lightning-fast load times (&lt;2 seconds)
                <br />• 24/7 technical support
                <br />• Competitive pricing with no hidden costs
                <br />• 95% client retention rate
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-300/30 hover:border-blue-300/60 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-xl text-white cursor-pointer list-none">
                <span className="flex items-center gap-3">
                  <span className="text-3xl">⏱️</span>
                  <span>How long does it take to develop a website?</span>
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-purple-300"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-blue-100 mt-4 leading-relaxed">
                Development timeline depends on project complexity:
                <br />• Basic Website (5-10 pages): 2-4 weeks
                <br />• Business Website (10-20 pages): 4-8 weeks
                <br />• E-commerce Website: 6-12 weeks
                <br />• Custom Web Application: 8-16 weeks
                <br /><br />We follow agile methodology with regular updates and milestone deliveries. Rush projects can be accommodated with additional resources.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-yellow-300/30 hover:border-yellow-300/60 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-xl text-white cursor-pointer list-none">
                <span className="flex items-center gap-3">
                  <span className="text-3xl">🔒</span>
                  <span>Do you provide website maintenance and support?</span>
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-yellow-300"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-blue-100 mt-4 leading-relaxed">
                Yes! We offer comprehensive website maintenance packages starting from ₹8,000/month including:
                <br />• Regular security updates and patches
                <br />• Daily backups and disaster recovery
                <br />• Performance monitoring and optimization
                <br />• Content updates (text, images, products)
                <br />• Bug fixes and troubleshooting
                <br />• SSL certificate management
                <br />• 24/7 technical support
                <br />• Monthly performance reports
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-pink-300/30 hover:border-blue-300/60 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-xl text-white cursor-pointer list-none">
                <span className="flex items-center gap-3">
                  <span className="text-3xl">🛒</span>
                  <span>Can you build an e-commerce website for my business?</span>
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-pink-300"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-blue-100 mt-4 leading-relaxed">
                Absolutely! We specialize in building powerful e-commerce websites with:
                <br />• Custom shopping cart and checkout
                <br />• Payment gateway integration (Razorpay, PayPal, Stripe, CCAvenue)
                <br />• Product catalog management
                <br />• Inventory tracking system
                <br />• Order management dashboard
                <br />• Customer accounts and wishlists
                <br />• Shipping integration (multiple carriers)
                <br />• Tax calculation and invoicing
                <br />• Mobile-responsive design
                <br />• SEO optimization for product pages
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-cyan-300/30 hover:border-cyan-300/60 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-xl text-white cursor-pointer list-none">
                <span className="flex items-center gap-3">
                  <span className="text-3xl">⚡</span>
                  <span>How can you make my website faster?</span>
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-cyan-300"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-blue-100 mt-4 leading-relaxed">
                We implement advanced performance optimization techniques:
                <br />• Code minification and compression (Gzip, Brotli)
                <br />• Image optimization (WebP, AVIF formats)
                <br />• Browser caching and CDN integration
                <br />• Lazy loading for images and videos
                <br />• Database query optimization
                <br />• Server-side rendering (SSR) with Next.js
                <br />• HTTP/2 and HTTP/3 support
                <br /><br />Result: Achieve &lt;2 second load times and 90+ Google PageSpeed scores!
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-red-300/30 hover:border-red-300/60 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-xl text-white cursor-pointer list-none">
                <span className="flex items-center gap-3">
                  <span className="text-3xl">📱</span>
                  <span>Will my website work on mobile devices?</span>
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-red-300"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-blue-100 mt-4 leading-relaxed">
                Yes! All our websites are 100% mobile-responsive and mobile-first:
                <br />• Responsive design that adapts to all screen sizes
                <br />• Touch-friendly navigation and buttons
                <br />• Optimized images for mobile bandwidth
                <br />• Fast loading on 3G/4G networks
                <br />• Progressive Web App (PWA) capabilities
                <br />• Mobile-specific features (click-to-call, maps, etc.)
                <br />• Cross-browser compatibility (Chrome, Safari, Firefox)
                <br /><br />Over 70% of traffic comes from mobile, so we prioritize mobile experience!
              </p>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-300/30 hover:border-purple-300/60 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-xl text-white cursor-pointer list-none">
                <span className="flex items-center gap-3">
                  <span className="text-3xl">🛡️</span>
                  <span>Do you provide website maintenance and support?</span>
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-purple-300"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-blue-100 mt-4 leading-relaxed">
                Yes! We offer comprehensive website maintenance and support packages:
                <br />• Regular software and security updates
                <br />• Daily automated backups
                <br />• 24/7 uptime monitoring
                <br />• Bug fixes and technical support
                <br />• Performance optimization
                <br />• Content updates and changes
                <br />• SEO monitoring and improvements
                <br />• Monthly analytics reports
                <br /><br />Our maintenance plans ensure your website stays secure, fast, and up-to-date at all times.
              </p>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-green-300/30 hover:border-green-300/60 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-xl text-white cursor-pointer list-none">
                <span className="flex items-center gap-3">
                  <span className="text-3xl">🚀</span>
                  <span>What technologies do you use for web development?</span>
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-green-300"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-blue-100 mt-4 leading-relaxed">
                We use the latest and most reliable web development technologies:
                <br />• <strong>Frontend:</strong> React, Next.js, Vue.js, TypeScript, HTML5, CSS3, Tailwind CSS
                <br />• <strong>Backend:</strong> Node.js, Express, PHP, Python, Ruby on Rails
                <br />• <strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, Firebase
                <br />• <strong>CMS:</strong> WordPress, Shopify, Magento, Drupal
                <br />• <strong>E-commerce:</strong> WooCommerce, Shopify, Custom solutions
                <br />• <strong>Cloud:</strong> AWS, Google Cloud, Azure, Vercel, Netlify
                <br /><br />We choose the right tech stack based on your project requirements and budget.
              </p>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-yellow-300/30 hover:border-yellow-300/60 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-xl text-white cursor-pointer list-none">
                <span className="flex items-center gap-3">
                  <span className="text-3xl">💰</span>
                  <span>What are your web development pricing packages?</span>
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-yellow-300"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-blue-100 mt-4 leading-relaxed">
                We offer flexible pricing based on your requirements:
                <br />• <strong>Basic Website:</strong> ₹25,000 - ₹50,000 (5-10 pages)
                <br />• <strong>Business Website:</strong> ₹50,000 - ₹1,50,000 (custom design + features)
                <br />• <strong>E-commerce Store:</strong> ₹1,00,000 - ₹5,00,000 (WooCommerce/Shopify)
                <br />• <strong>Custom Web Application:</strong> ₹2,00,000+ (complex functionality)
                <br />• <strong>Enterprise Solutions:</strong> Custom quotes (large-scale projects)
                <br />• <strong>Maintenance Plans:</strong> ₹5,000 - ₹25,000/month
                <br /><br />Contact us for a detailed quote tailored to your specific needs and budget!
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <article className="prose prose-lg max-w-none text-white">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Why Choose a Professional <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">Website Development Company In Moradabad</span>?
              </h2>
              
              <p className="text-xl text-blue-100 leading-relaxed mb-6">
                In today&apos;s digital age, your website is often the first interaction potential customers have with your business. Choosing the right <strong>Website Development Company In Moradabad</strong> can make or break your online success. Moradabad, being India&apos;s financial capital and a thriving business hub, demands websites that are not just visually appealing but also fast, secure, and conversion-optimized.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                At MyDigital Crown, we understand the unique challenges and opportunities that Moradabad businesses face. With over 10 years of experience and 300+ successful website projects, we&apos;ve established ourselves as the leading <strong>Website Development Company In Moradabad</strong>. Our team of expert developers specializes in cutting-edge technologies like React, Next.js, WordPress, and custom PHP development to create websites that deliver exceptional performance and ROI.
              </p>

              <h3 className="text-3xl font-bold text-blue-300 mb-4">Comprehensive Website Development Services We Offer</h3>
              
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                As Moradabad&apos;s premier <strong>Website Development Company In Moradabad</strong>, we offer end-to-end web development solutions tailored to your business needs:
              </p>

              <h4 className="text-2xl font-bold text-yellow-300 mb-3">Custom Website Development</h4>
              <p className="text-lg text-blue-100 leading-relaxed mb-4">
                Every business is unique, and your website should reflect that. Our custom website development services ensure your online presence stands out from the competition. We build websites from scratch using the latest web technologies, ensuring pixel-perfect design, lightning-fast performance, and seamless user experience across all devices.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Our development process includes thorough planning, wireframing, design mockups, and iterative development with your feedback at every stage. We use modern frameworks like React and Next.js for superior performance, implement responsive design principles for mobile-first experience, and ensure clean, maintainable code that&apos;s easy to update and scale as your business grows.
              </p>

              <h4 className="text-2xl font-bold text-yellow-300 mb-3">E-commerce Website Development</h4>
              <p className="text-lg text-blue-100 leading-relaxed mb-4">
                Transform your business with a powerful e-commerce website that drives sales 24/7. As an experienced <strong>Website Development Company In Moradabad</strong>, we&apos;ve built numerous successful online stores that process thousands of transactions daily. Our e-commerce solutions include custom shopping cart development, secure payment gateway integration supporting multiple payment methods (Razorpay, PayPal, Stripe, CCAvenue), advanced product catalog management with filters and search, inventory tracking and management systems, order processing and fulfillment automation, customer account management with order history, and mobile-responsive checkout process for higher conversions.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                We optimize your e-commerce website for both user experience and search engines, ensuring your products reach the right customers. With features like abandoned cart recovery, product recommendations, and detailed analytics, we help you maximize your online revenue.
              </p>

              <h4 className="text-2xl font-bold text-yellow-300 mb-3">React & Next.js Web Applications</h4>
              <p className="text-lg text-blue-100 leading-relaxed mb-4">
                For businesses requiring dynamic, high-performance web applications, we specialize in React and Next.js development. These modern JavaScript frameworks enable us to build lightning-fast, interactive websites with exceptional user experiences. Next.js offers server-side rendering for better SEO, automatic code splitting for faster load times, built-in image optimization, and API routes for backend functionality.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Our React/Next.js applications achieve Google PageSpeed scores of 90+ and load times under 2 seconds, giving you a competitive edge in user experience and search engine rankings. Whether you need a corporate website, SaaS platform, or complex web application, we have the expertise to deliver exceptional results.
              </p>

              <h3 className="text-3xl font-bold text-blue-300 mb-4">Website Performance Optimization & Speed Enhancement</h3>
              <p className="text-lg text-blue-100 leading-relaxed mb-4">
                Website speed is crucial for both user experience and SEO. Studies show that a 1-second delay in page load time can reduce conversions by 7% and increase bounce rates significantly. As a professional <strong>Website Development Company In Moradabad</strong>, we implement advanced optimization techniques to ensure your website loads blazing fast.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Our optimization services include code minification and compression, image optimization using modern formats (WebP, AVIF), browser caching and CDN integration for global speed, database query optimization and indexing, lazy loading for images and videos, server-side rendering with Next.js, HTTP/2 and HTTP/3 implementation, and Core Web Vitals optimization for Google rankings. With our performance optimization, most websites achieve 50-70% reduction in load times and 90+ Google PageSpeed scores, resulting in better user engagement, higher conversions, and improved search engine rankings.
              </p>

              <h3 className="text-3xl font-bold text-blue-300 mb-4">Website Security & Maintenance Services</h3>
              <p className="text-lg text-blue-100 leading-relaxed mb-4">
                Website security is not optional—it&apos;s essential. Our comprehensive security and maintenance packages ensure your website stays protected, updated, and performing optimally. We implement SSL certificates for encrypted data transmission, web application firewall (WAF) protection, regular security audits and vulnerability scanning, malware detection and removal, DDoS protection and mitigation, secure coding practices following OWASP guidelines, regular backups with disaster recovery plans, and 24/7 security monitoring and alerts.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Our maintenance packages start from ₹8,000/month and include all security updates, performance monitoring, content updates, technical support, and monthly performance reports. With our proactive maintenance, you can focus on your business while we ensure your website runs smoothly and securely.
              </p>

              <h3 className="text-3xl font-bold text-blue-300 mb-4">Why MyDigital Crown is the Best Website Development Company In Moradabad</h3>
              <p className="text-lg text-blue-100 leading-relaxed mb-4">
                With 10+ years in the industry and 300+ successful projects, MyDigital Crown has earned its reputation as Moradabad&apos;s leading <strong>Website Development Company In Moradabad</strong>. Here&apos;s what sets us apart:
              </p>

              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Our team comprises certified developers with expertise in React, Next.js, WordPress, PHP, and all modern web technologies. We don&apos;t just build websites—we create digital experiences that convert visitors into customers. Every project receives personalized attention with a dedicated project manager, regular updates, and transparent communication. We offer competitive pricing with no hidden costs and flexible payment plans. Our 99.9% uptime guarantee ensures your website is always accessible to customers. We provide 24/7 technical support with response times under 2 hours. With a 95% client retention rate, our clients trust us for long-term partnerships. We follow agile development methodology with iterative releases and your feedback incorporated at every stage.
              </p>

              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50 rounded-2xl p-8 mt-8">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-3">
                  <span className="text-4xl">🚀</span>
                  Ready to Build Your Dream Website?
                </h3>
                <p className="text-lg text-white mb-6 leading-relaxed">
                  Partner with Moradabad&apos;s #1 <strong>Website Development Company In Moradabad</strong> and transform your online presence. Get a free consultation and quote today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+918369511877" className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now: +91-83695-11877
                  </a>
                  <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <OurLocations />

      {/* Related Services */}
      <RelatedServices 
        currentService="/moradabad/web-development"
        title="Complete Digital Solutions"
        description="Enhance your website with our comprehensive development and marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  );
}
