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
  title: "Web App Developer Mumbai | 500+ Apps | PWA SPA Cloud Solutions",
  description: "Web App Developer Mumbai. 500+ Apps Built | Custom PWAs, SPAs & Cloud Solutions | 10+ Years | 99% Uptime Guaranteed. Call +91-83695-11877",
  keywords: [
    // Primary Keywords
    "Web Application Developer in Mumbai", "web app developer Mumbai", "custom web application Mumbai", "progressive web apps Mumbai", "SPA development Mumbai",
    // Quality Keywords
    "best web app developer Mumbai", "professional web application development Mumbai", "expert app developer Mumbai", "top web app company Mumbai", "certified web developer Mumbai",
    // Service-Specific Keywords
    "cloud application developer Mumbai", "web app development services Mumbai", "enterprise web apps Mumbai", "scalable web applications Mumbai", "custom software development Mumbai",
    "SaaS development Mumbai", "PWA development Mumbai", "single page application Mumbai", "real-time web apps Mumbai", "API development Mumbai",
    // Technical Keywords
    "React web app Mumbai", "Angular development Mumbai", "Vue.js application Mumbai", "Node.js backend Mumbai", "Python web app Mumbai",
    "microservices Mumbai", "cloud deployment Mumbai", "AWS development Mumbai", "Azure application Mumbai", "database design Mumbai",
    // Business Keywords
    "web app consulting Mumbai", "MVP development Mumbai", "startup web app Mumbai", "enterprise software Mumbai", "web application modernization Mumbai",
    "agile development Mumbai", "DevOps Mumbai"
  ],
  authors: [{ name: "Aditya Pandey", url: "https://mydigital-mu.vercel.app/about" }],
  creator: "MyDigital Crown",
  publisher: "MyDigital Crown",
  category: "Web Application Development Services",
  classification: "Custom Web App & Software Development",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  canonical: "https://mydigital-mu.vercel.app/services/web-applications-development",
  
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mydigital-mu.vercel.app/services/web-applications-development",
    siteName: "MyDigital Crown",
    title: "Web Application Developer in Mumbai | #1 Custom App Services 2025",
    description: "Top Web Application Developer in Mumbai offering custom web apps, PWAs, SPAs & cloud solutions. 50+ apps built with expertise.",
    images: [
      {
        url: "https://mydigital-mu.vercel.app/images/web-app-development-mumbai.jpg",
        width: 1200,
        height: 630,
        alt: "Web Application Developer in Mumbai - MyDigital Crown",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Web Application Developer in Mumbai | #1 Custom App Services 2025",
    description: "Top Web Application Developer in Mumbai offering custom web apps, PWAs & cloud solutions.",
    images: ["https://mydigital-mu.vercel.app/images/web-app-development-mumbai.jpg"],
  },
}

// Comprehensive Schema Markup for Web Application Developer in Mumbai
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
      "description": "Leading Web Application Developer in Mumbai offering custom web applications, progressive web apps, and scalable cloud solutions.",
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
      "name": "Web Application Developer in Mumbai",
      "description": "Professional Web Application Developer in Mumbai offering custom web apps, progressive web applications, SPAs, and enterprise cloud solutions.",
      "provider": {
        "@id": "https://mydigital-mu.vercel.app/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Application Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Web Application Development",
              "description": "Tailored web applications built for specific business needs and workflows"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Progressive Web Apps (PWA)",
              "description": "Modern PWAs with offline support, push notifications, and native-like experience"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Single Page Applications (SPA)",
              "description": "Fast, responsive SPAs with React, Vue, or Angular frameworks"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud-Native Applications",
              "description": "Scalable cloud applications on AWS, Azure, or Google Cloud Platform"
            }
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "MyDigital Crown - Web Application Developer in Mumbai",
      "@id": "https://mydigital-mu.vercel.app/services/web-applications-development",
      "description": "Top-rated Web Application Developer in Mumbai providing custom web apps, PWAs, SPAs, and enterprise cloud solutions with 99.9% uptime.",
      "url": "https://mydigital-mu.vercel.app/services/web-applications-development",
      "telephone": "+91-83695-11877",
      "priceRange": "₹₹₹",
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
          "name": "What does a Web Application Developer in Mumbai do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professional Web Application Developer in Mumbai specializes in creating custom web-based software solutions that run in browsers. They handle everything from planning and design to development, testing, and deployment. At MyDigital Crown, our Web Application Developer in Mumbai team builds scalable, secure, and high-performance applications using modern frameworks like React, Angular, Node.js, and cloud technologies to solve complex business problems."
          }
        },
        {
          "@type": "Question",
          "name": "How much does web app development cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web application development costs vary based on complexity, features, and technology stack. Basic applications start from ₹50,000, while enterprise-level solutions can range from ₹3-10 lakhs or more. As the leading Web Application Developer in Mumbai, we provide transparent pricing with no hidden costs. Contact us for a detailed quote based on your specific requirements, timeline, and budget."
          }
        },
        {
          "@type": "Question",
          "name": "Why hire a professional Web Application Developer in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional developers bring expertise, best practices, and proven methodologies that save time and money. A skilled Web Application Developer in Mumbai ensures your application is secure, scalable, optimized for performance, and follows industry standards. We provide ongoing support, handle complex integrations, implement proper architecture, and deliver applications that grow with your business - something DIY or freelance solutions often lack."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a web application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Development timelines depend on project scope and complexity. Simple applications take 4-8 weeks, medium-complexity apps need 2-4 months, and enterprise solutions require 4-9 months or more. As an experienced Web Application Developer in Mumbai, we follow agile methodology with 2-week sprints, providing regular updates and demos. We deliver MVPs quickly so you can start testing and gathering feedback while we continue adding features."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies do you use for web application development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use cutting-edge technologies including React, Angular, Vue.js for frontend; Node.js, Python, PHP for backend; PostgreSQL, MongoDB for databases; AWS, Google Cloud, Azure for hosting; and Docker, Kubernetes for deployment. As a leading Web Application Developer in Mumbai, we select the best tech stack based on your specific requirements, scalability needs, and long-term goals."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide maintenance and support after development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We provide comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 monitoring. Our Web Application Developer in Mumbai team offers flexible maintenance packages with guaranteed response times. We ensure your application stays secure, updated, and performs optimally as your business grows."
          }
        },
        {
          "@type": "Question",
          "name": "Can you scale or upgrade existing web applications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We specialize in modernizing legacy applications, improving performance, adding new features, migrating to cloud platforms, and implementing auto-scaling infrastructure. Our Web Application Developer in Mumbai team audits your existing application, identifies bottlenecks, and creates a roadmap for improvement. We ensure seamless transitions with zero downtime and data integrity throughout the upgrade process."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure web application security?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Security is our top priority. We implement encryption (SSL/TLS), secure authentication (OAuth, JWT), input validation, SQL injection prevention, XSS protection, CSRF tokens, regular security audits, penetration testing, and GDPR compliance. As a trusted Web Application Developer in Mumbai, we follow OWASP guidelines and industry best practices to protect your data and users from cyber threats."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide API development and third-party integrations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our Web Application Developer in Mumbai team specializes in RESTful API development, GraphQL APIs, and seamless third-party integrations. We integrate payment gateways (Razorpay, PayPal), CRM systems (Salesforce, HubSpot), email services (SendGrid, Mailchimp), analytics (Google Analytics), social logins, and custom APIs. All integrations are secure, well-documented, and scalable."
          }
        },
        {
          "@type": "Question",
          "name": "What testing methods do you use for web applications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We employ comprehensive testing strategies: unit testing (Jest, Mocha), integration testing, end-to-end testing (Cypress, Selenium), load testing, security testing, usability testing, and cross-browser compatibility checks. Our Web Application Developer in Mumbai follows Test-Driven Development (TDD) ensuring 90%+ code coverage. Every release undergoes rigorous QA before deployment."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build Progressive Web Apps (PWAs)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Our Web Application Developer in Mumbai specializes in Progressive Web Apps that work offline, send push notifications, install on home screens, and provide app-like experiences without app store deployment. PWAs offer faster load times, lower development costs, and wider reach compared to native apps. We've built 20+ PWAs achieving 50% better engagement rates than traditional websites."
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
          "name": "Web Application Developer in Mumbai",
          "item": "https://mydigital-mu.vercel.app/services/web-applications-development"
        }
      ]
    }
  ]
};

export default function WebApplicationsPage() {
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
        aria-label="Web Application Development Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Web Application Development Experts</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Web Application Developer In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  🚀 Build <span className="text-yellow-300">Scalable Apps</span>, <span className="text-green-300">High Performance</span> & <span className="text-orange-300">Future-Ready</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Custom Web Apps | Progressive Web Apps | Cloud Solutions | Modern Architecture
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
                    <span>Build Your Web App</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">50+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Web Apps Built</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100K+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Active Users</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">99%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Uptime Rate</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">24/7</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Support & Monitoring</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Web Application Development Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🚀</span>
              Web Application Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Web Application Development</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade web applications built with cutting-edge technologies and scalable architecture
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                    alt="Web Application Development Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ High Performance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lightning-fast web applications optimized for speed, scalability, and seamless user experience.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔒 Secure & Reliable</h3>
                <p className="text-gray-700 leading-relaxed">
                  Enterprise-grade security with encryption, authentication, and continuous monitoring.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📈 Scalable Architecture</h3>
                <p className="text-gray-700 leading-relaxed">
                  Built to grow with your business, handling millions of users without breaking a sweat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Application Development Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Web App <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web application development services for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Custom Web Apps</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Tailored web applications built for your specific business needs.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Business Logic</li>
                  <li className="flex items-start gap-2">✓ Custom Features</li>
                  <li className="flex items-start gap-2">✓ Workflow Automation</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📱</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Progressive Web Apps</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Modern PWAs that work offline and feel like native apps.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Offline Support</li>
                  <li className="flex items-start gap-2">✓ Push Notifications</li>
                  <li className="flex items-start gap-2">✓ App-like Experience</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Single Page Apps</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Fast, responsive SPAs with React, Vue, or Angular frameworks.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Instant Navigation</li>
                  <li className="flex items-start gap-2">✓ Real-time Updates</li>
                  <li className="flex items-start gap-2">✓ Smooth Transitions</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">☁️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Solutions</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Cloud-native applications hosted on AWS, Azure, or Google Cloud.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Auto Scaling</li>
                  <li className="flex items-start gap-2">✓ High Availability</li>
                  <li className="flex items-start gap-2">✓ Global Distribution</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔌</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">API Development</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  RESTful and GraphQL APIs for seamless integrations.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ REST APIs</li>
                  <li className="flex items-start gap-2">✓ GraphQL</li>
                  <li className="flex items-start gap-2">✓ Third-party Integration</li>
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
                  Ongoing support, updates, and optimization for your web apps.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ 24/7 Monitoring</li>
                  <li className="flex items-start gap-2">✓ Security Updates</li>
                  <li className="flex items-start gap-2">✓ Performance Tuning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Digital Marketing Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
              <span className="mr-2">🚀</span>
              Premium Digital Marketing Services
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              50+ Services To Skyrocket <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Your Growth</span>
            </h2>
            
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Beyond web apps - complete digital solutions for your business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service 1 - SEO Services */}
            <Link href="/services/seo" className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop"
                  alt="SEO Services Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">🔍</span>
                    <h3 className="text-2xl font-bold text-white">SEO Services</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Rank higher on Google with expert SEO strategies</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 2 - Social Media Marketing */}
            <Link href="/services/social-media-marketing" className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop"
                  alt="Social Media Marketing Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">📱</span>
                    <h3 className="text-2xl font-bold text-white">Social Media Marketing</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Build brand presence across social platforms</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 3 - Google Ads */}
            <Link href="/services/google-ads" className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                  alt="Google Ads Services Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-pink-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">🎯</span>
                    <h3 className="text-2xl font-bold text-white">Google Ads</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Drive instant traffic with targeted PPC campaigns</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 4 - WordPress Development */}
            <Link href="/services/wordpress-developer" className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
                  alt="WordPress Development Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900 via-orange-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">⚡</span>
                    <h3 className="text-2xl font-bold text-white">WordPress Development</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Custom WordPress websites that scale</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 5 - Digital Branding */}
            <Link href="/services/digital-branding" className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
                  alt="Digital Branding Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">🎨</span>
                    <h3 className="text-2xl font-bold text-white">Digital Branding</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Create a memorable brand identity online</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 6 - YouTube Marketing */}
            <Link href="/services/youtube-marketing" className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop"
                  alt="YouTube Marketing Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-red-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">📹</span>
                    <h3 className="text-2xl font-bold text-white">YouTube Marketing</h3>
                  </div>
                  <p className="text-red-100 mb-4">Grow your channel with video marketing</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* View All Services CTA */}
          <div className="text-center">
            <Link href="/services" className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
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
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute w-96 h-96 top-0 -right-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 -bottom-8 left-20 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          {/* Floating Emojis */}
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">💡</div>
          <div className="absolute top-40 right-20 text-6xl opacity-20 animate-bounce animation-delay-2000">❓</div>
          <div className="absolute bottom-40 left-1/4 text-6xl opacity-20 animate-bounce animation-delay-4000">✨</div>
          <div className="absolute bottom-20 right-1/3 text-6xl opacity-20 animate-bounce animation-delay-1000">🎯</div>
          <div className="absolute top-1/2 left-1/2 text-6xl opacity-20 animate-bounce animation-delay-3000">💻</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg animate-pulse">
              <span className="mr-2">💬</span>
              Frequently Asked Questions
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Got Questions About <br />
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">Web App Development?</span>
            </h2>
            
            <p className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about professional web application development in Mumbai
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105 transition-all duration-300">
              <summary className="flex gap-4 items-start cursor-pointer list-none">
                <span className="text-4xl group-open:animate-spin flex-shrink-0">🎨</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    What does a Web Application Developer in Mumbai do?
                  </h3>
                </div>
                <svg className="w-6 h-6 text-yellow-400 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-white/80 leading-relaxed text-lg pl-16">
                A professional Web Application Developer in Mumbai specializes in creating custom web-based software solutions that run in browsers. They handle everything from planning and design to development, testing, and deployment. At MyDigital Crown, our Web Application Developer in Mumbai team builds scalable, secure, and high-performance applications using modern frameworks like React, Angular, Node.js, and cloud technologies to solve complex business problems.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105 transition-all duration-300">
              <summary className="flex gap-4 items-start cursor-pointer list-none">
                <span className="text-4xl group-open:animate-bounce flex-shrink-0">💰</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    How much does web app development cost in Mumbai?
                  </h3>
                </div>
                <svg className="w-6 h-6 text-pink-400 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-white/80 leading-relaxed text-lg pl-16">
                Web application development costs vary based on complexity, features, and technology stack. Basic applications start from ₹50,000, while enterprise-level solutions can range from ₹3-10 lakhs or more. As the leading Web Application Developer in Mumbai, we provide transparent pricing with no hidden costs. Contact us for a detailed quote based on your specific requirements, timeline, and budget.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105 transition-all duration-300">
              <summary className="flex gap-4 items-start cursor-pointer list-none">
                <span className="text-4xl group-open:animate-pulse flex-shrink-0">🏆</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Why hire a professional Web Application Developer in Mumbai?
                  </h3>
                </div>
                <svg className="w-6 h-6 text-blue-400 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-white/80 leading-relaxed text-lg pl-16">
                Professional developers bring expertise, best practices, and proven methodologies that save time and money. A skilled Web Application Developer in Mumbai ensures your application is secure, scalable, optimized for performance, and follows industry standards. We provide ongoing support, handle complex integrations, implement proper architecture, and deliver applications that grow with your business - something DIY or freelance solutions often lack.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105 transition-all duration-300">
              <summary className="flex gap-4 items-start cursor-pointer list-none">
                <span className="text-4xl group-open:animate-spin flex-shrink-0">⏱️</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    How long does it take to develop a web application?
                  </h3>
                </div>
                <svg className="w-6 h-6 text-green-400 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-white/80 leading-relaxed text-lg pl-16">
                Development timelines depend on project scope and complexity. Simple applications take 4-8 weeks, medium-complexity apps need 2-4 months, and enterprise solutions require 4-9 months or more. As an experienced Web Application Developer in Mumbai, we follow agile methodology with 2-week sprints, providing regular updates and demos. We deliver MVPs quickly so you can start testing and gathering feedback while we continue adding features.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105 transition-all duration-300">
              <summary className="flex gap-4 items-start cursor-pointer list-none">
                <span className="text-4xl group-open:animate-bounce flex-shrink-0">📱</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    What technologies do you use for web application development?
                  </h3>
                </div>
                <svg className="w-6 h-6 text-purple-400 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-white/80 leading-relaxed text-lg pl-16">
                We use cutting-edge technologies including React, Angular, Vue.js for frontend; Node.js, Python, PHP for backend; PostgreSQL, MongoDB for databases; AWS, Google Cloud, Azure for hosting; and Docker, Kubernetes for deployment. As a leading Web Application Developer in Mumbai, we select the best tech stack based on your specific requirements, scalability needs, and long-term goals.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105 transition-all duration-300">
              <summary className="flex gap-4 items-start cursor-pointer list-none">
                <span className="text-4xl group-open:animate-pulse flex-shrink-0">🔄</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Do you provide maintenance and support after development?
                  </h3>
                </div>
                <svg className="w-6 h-6 text-orange-400 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-white/80 leading-relaxed text-lg pl-16">
                Absolutely! We provide comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 monitoring. Our Web Application Developer in Mumbai team offers flexible maintenance packages with guaranteed response times. We ensure your application stays secure, updated, and performs optimally as your business grows.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105 transition-all duration-300">
              <summary className="flex gap-4 items-start cursor-pointer list-none">
                <span className="text-4xl group-open:animate-spin flex-shrink-0">🎯</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Can you scale or upgrade existing web applications?
                  </h3>
                </div>
                <svg className="w-6 h-6 text-red-400 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-white/80 leading-relaxed text-lg pl-16">
                Yes! We specialize in modernizing legacy applications, improving performance, adding new features, migrating to cloud platforms, and implementing auto-scaling infrastructure. Our Web Application Developer in Mumbai team audits your existing application, identifies bottlenecks, and creates a roadmap for improvement. We ensure seamless transitions with zero downtime and data integrity throughout the upgrade process.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105 transition-all duration-300">
              <summary className="flex gap-4 items-start cursor-pointer list-none">
                <span className="text-4xl group-open:animate-bounce flex-shrink-0">🛠️</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    How do you ensure web application security?
                  </h3>
                </div>
                <svg className="w-6 h-6 text-cyan-400 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-white/80 leading-relaxed text-lg pl-16">
                Security is our top priority. We implement encryption (SSL/TLS), secure authentication (OAuth, JWT), input validation, SQL injection prevention, XSS protection, CSRF tokens, regular security audits, penetration testing, and GDPR compliance. As a trusted Web Application Developer in Mumbai, we follow OWASP guidelines and industry best practices to protect your data and users from cyber threats.
              </p>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:shadow-indigo-500/20 hover:border-indigo-300/50 hover:scale-105 transition-all duration-300">
              <summary className="flex gap-4 items-start cursor-pointer list-none">
                <span className="text-4xl group-open:animate-pulse flex-shrink-0">📊</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Do you provide API development and third-party integrations?
                  </h3>
                </div>
                <svg className="w-6 h-6 text-indigo-400 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-white/80 leading-relaxed text-lg pl-16">
                Yes! Our Web Application Developer in Mumbai team specializes in RESTful API development, GraphQL APIs, and seamless third-party integrations. We integrate payment gateways (Razorpay, PayPal), CRM systems (Salesforce, HubSpot), email services (SendGrid, Mailchimp), analytics (Google Analytics), social logins, and custom APIs. All integrations are secure, well-documented, and scalable.
              </p>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:shadow-teal-500/20 hover:border-teal-300/50 hover:scale-105 transition-all duration-300">
              <summary className="flex gap-4 items-start cursor-pointer list-none">
                <span className="text-4xl group-open:animate-spin flex-shrink-0">💾</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    What testing methods do you use for web applications?
                  </h3>
                </div>
                <svg className="w-6 h-6 text-teal-400 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-white/80 leading-relaxed text-lg pl-16">
                We employ comprehensive testing strategies: unit testing (Jest, Mocha), integration testing, end-to-end testing (Cypress, Selenium), load testing, security testing, usability testing, and cross-browser compatibility checks. Our Web Application Developer in Mumbai follows Test-Driven Development (TDD) ensuring 90%+ code coverage. Every release undergoes rigorous QA before deployment.
              </p>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:shadow-rose-500/20 hover:border-rose-300/50 hover:scale-105 transition-all duration-300">
              <summary className="flex gap-4 items-start cursor-pointer list-none">
                <span className="text-4xl group-open:animate-bounce flex-shrink-0">🚀</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Can you build Progressive Web Apps (PWAs)?
                  </h3>
                </div>
                <svg className="w-6 h-6 text-rose-400 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-white/80 leading-relaxed text-lg pl-16">
                Absolutely! Our Web Application Developer in Mumbai specializes in Progressive Web Apps that work offline, send push notifications, install on home screens, and provide app-like experiences without app store deployment. PWAs offer faster load times, lower development costs, and wider reach compared to native apps. We&apos;ve built 20+ PWAs achieving 50% better engagement rates than traditional websites.
              </p>
            </details>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-xl text-white/80 mb-6">
              Still have questions? Our Web Application Developer in Mumbai experts are here to help!
            </p>
            <a href="tel:+918369511877" className="inline-flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
              <span className="text-2xl mr-3">📞</span>
              <span>Call: +91-83695-11877</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl opacity-10 animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}>💻</div>
          <div className="absolute top-1/3 right-20 text-5xl opacity-10 animate-bounce" style={{animationDelay: '1s', animationDuration: '3.5s'}}>⚡</div>
          <div className="absolute bottom-32 left-1/4 text-5xl opacity-10 animate-bounce" style={{animationDelay: '2s', animationDuration: '4.5s'}}>🚀</div>
          <div className="absolute bottom-20 right-1/3 text-6xl opacity-10 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}>🏆</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <span className="text-2xl mr-3 animate-pulse">⭐</span>
              <span className="text-lg">Why Choose MyDigital Crown</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              The Best <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Web Application</span>
              <br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Developer in Mumbai</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              10+ years of excellence in delivering world-class web applications 🌟
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🏆</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">10+ Years of Excellence</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Decade-long track record in delivering successful web applications across multiple industries and technologies.
                </p>
                <div className="flex items-center gap-2 text-yellow-300 font-bold">
                  <span>50+ Apps Built</span>
                  <svg className="w-5 h-5 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">99% Uptime Guaranteed</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Rock-solid infrastructure with enterprise-level reliability. Your application runs 24/7 without interruption.
                </p>
                <div className="flex items-center gap-2 text-blue-300 font-bold">
                  <span>100K+ Users Served</span>
                  <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">Latest Technologies</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Using React, Angular, Node.js, Python, and cloud platforms (AWS, Azure, Google Cloud) for cutting-edge solutions.
                </p>
                <div className="flex items-center gap-2 text-purple-300 font-bold">
                  <span>Modern Stack</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🔒</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">Enterprise Security</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  OWASP compliant, SSL/TLS encryption, OAuth 2.0, JWT tokens, and regular security audits to protect your data.
                </p>
                <div className="flex items-center gap-2 text-green-300 font-bold">
                  <span>GDPR Compliant</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">Agile Development</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  2-week sprints with regular demos and updates. Transparent development process with full visibility.
                </p>
                <div className="flex items-center gap-2 text-orange-300 font-bold">
                  <span>On-Time Delivery</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-pink-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">💎</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">24/7 Support</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Round-the-clock technical support, monitoring, and maintenance to keep your application running smoothly.
                </p>
                <div className="flex items-center gap-2 text-pink-300 font-bold">
                  <span>Always Available</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl hover:shadow-2xl transition-all">
              <span className="text-2xl mr-3">📝</span>
              <span>Complete Information</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Why Choose a Professional <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Web Application Developer</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">in Mumbai?</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-semibold mb-4">
              From <span className="text-blue-600">Custom Development</span> to <span className="text-purple-600">Cloud Solutions</span>, <span className="text-pink-600">Security</span> to <span className="text-orange-600">Scalability</span>
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Everything you need to know about professional web application development 🚀
            </p>
          </header>

          <div className="space-y-12">
            {/* Content Block 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-4xl mr-4">🎯</span>
                What Makes a Great Web Application Developer in Mumbai?
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  Finding the right <strong>Web Application Developer in Mumbai</strong> is crucial for your business success. At MyDigital Crown, we bring over 10 years of expertise in building custom web applications that drive results. Our <strong>Web Application Developer in Mumbai</strong> team has successfully delivered 50+ projects across industries including healthcare, education, e-commerce, finance, and logistics.
                </p>
                <p className="mt-4">
                  What sets a professional <strong>Web Application Developer in Mumbai</strong> apart is not just technical skills but understanding local market dynamics, business challenges, and user behavior. Our developers combine global best practices with deep knowledge of the Mumbai business ecosystem to create applications that truly resonate with your target audience.
                </p>
                <p className="mt-4">
                  As the leading <strong>Web Application Developer in Mumbai</strong>, we don&apos;t just write code - we solve problems. We take time to understand your business goals, workflows, and pain points before architecting the perfect solution. Our agile development process ensures transparency, regular communication, and on-time delivery without compromising quality.
                </p>
              </div>
            </div>

            {/* Content Block 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-4xl mr-4">💻</span>
                Custom Web Application Development Excellence
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  Our <strong>Web Application Developer in Mumbai</strong> specializes in creating bespoke solutions tailored to your unique requirements. Unlike off-the-shelf software, custom web applications are designed around your specific business logic, workflows, and user needs. This means better adoption rates, increased productivity, and competitive advantages.
                </p>
                <p className="mt-4">
                  We build web applications using modern frameworks and technologies including React for dynamic user interfaces, Node.js for scalable backends, Angular for enterprise applications, Vue.js for progressive web apps, and Python/Django for data-intensive systems. Each <strong>Web Application Developer in Mumbai</strong> on our team is certified and experienced in multiple technology stacks.
                </p>
                <p className="mt-4">
                  From simple CRUD applications to complex multi-tenant SaaS platforms, our <strong>Web Application Developer in Mumbai</strong> handles projects of all sizes. We follow industry best practices including clean code architecture, automated testing, continuous integration/deployment (CI/CD), and comprehensive documentation to ensure your application is maintainable and scalable.
                </p>
              </div>
            </div>

            {/* Content Block 3 - Services Grid */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="text-4xl mr-4">🚀</span>
                Comprehensive Web Application Development Services
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <div className="text-3xl mb-3">📱</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Progressive Web Apps (PWAs)</h4>
                  <p className="text-gray-700">
                    Build app-like experiences that work offline, send push notifications, and install on home screens. Perfect for mobile-first businesses.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Single Page Applications (SPAs)</h4>
                  <p className="text-gray-700">
                    Lightning-fast, responsive applications that load once and dynamically update content. Superior user experience and performance.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                  <div className="text-3xl mb-3">☁️</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Cloud-Native Applications</h4>
                  <p className="text-gray-700">
                    Scalable, resilient applications built for cloud platforms (AWS, Azure, Google Cloud) with auto-scaling and high availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Block 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-4xl mr-4">📊</span>
                Scalability & Performance Excellence
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  Every <strong>Web Application Developer in Mumbai</strong> at MyDigital Crown is trained in building applications that scale. Whether you start with 100 users or 1 million, our architecture supports growth seamlessly. We implement horizontal scaling, load balancing, database optimization, caching strategies (Redis, Memcached), and CDN integration to ensure peak performance.
                </p>
                <p className="mt-4">
                  Performance isn&apos;t just about speed - it&apos;s about user satisfaction and business outcomes. Our <strong>Web Application Developer in Mumbai</strong> optimizes every aspect: frontend rendering, API response times, database queries, asset loading, and server configuration. We achieve sub-second page loads and can handle thousands of concurrent users with 99.9% uptime guarantee.
                </p>
                <p className="mt-4">
                  We use advanced monitoring tools (New Relic, Datadog, Grafana) to track performance metrics in real-time. This proactive approach allows our <strong>Web Application Developer in Mumbai</strong> to identify and resolve bottlenecks before they impact users. Regular performance audits and optimizations keep your application running at peak efficiency.
                </p>
              </div>
            </div>

            {/* Content Block 5 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-4xl mr-4">🔒</span>
                Enterprise-Grade Security & Compliance
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  Security is non-negotiable for any professional <strong>Web Application Developer in Mumbai</strong>. We implement multiple layers of protection including SSL/TLS encryption, secure authentication mechanisms (OAuth 2.0, JWT tokens), role-based access control (RBAC), input validation, SQL injection prevention, cross-site scripting (XSS) protection, and CSRF token implementation.
                </p>
                <p className="mt-4">
                  Our <strong>Web Application Developer in Mumbai</strong> follows OWASP Top 10 security guidelines and conducts regular security audits. We perform penetration testing, code reviews, and vulnerability assessments to identify and fix security issues before deployment. All sensitive data is encrypted at rest and in transit using industry-standard algorithms.
                </p>
                <p className="mt-4">
                  For businesses in regulated industries, our <strong>Web Application Developer in Mumbai</strong> ensures compliance with GDPR, HIPAA, PCI-DSS, and ISO 27001 standards. We implement audit logging, data retention policies, privacy controls, and secure backup procedures. Your data and your users&apos; privacy are always protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute w-96 h-96 top-0 -right-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 -bottom-48 left-1/2 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Build Your<br />
              <span className="text-yellow-300">Next Web Application?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our experts build a scalable, high-performance web application that transforms your business!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Start Your Project</span>
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
                <span>Web App Development Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>50+ Apps Built</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>99.9% Uptime</span>
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
        currentService="/services/web-applications-development"
        title="Complete Development Solutions"
        description="Enhance your web application with our comprehensive development services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
