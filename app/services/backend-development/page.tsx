import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import TrustedBrands from '@/app/components/TrustedBrands'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'

export const metadata = {
  title: 'Backend Development Mumbai | Node.js Python API Experts',
  description: 'Backend Development Mumbai. Node.js, Python, PHP & .NET | 200+ Projects | API, Microservices & Database Design. Call +91-83695-11877',
  keywords: ['backend development mumbai', 'api development', 'nodejs development', 'python django', 'php laravel', 'microservices architecture', 'database design', 'rest api', 'graphql', 'server development mumbai', 'cloud backend', 'scalable architecture', 'backend engineer mumbai', 'api integration', 'web services mumbai', 'backend solutions india', 'mysql postgresql mongodb', 'aws backend', 'nodejs expert mumbai', 'python developer mumbai', 'backend consulting', 'enterprise backend', 'real-time applications', 'websocket development', 'backend optimization', 'server-side development', 'backend architecture', 'api security', 'database optimization', 'backend maintenance', 'devops integration', 'ci cd pipeline', 'docker kubernetes', 'serverless backend', 'backend modernization', 'legacy migration', 'backend performance', 'api gateway', 'authentication authorization', 'backend testing', 'microservices development', 'distributed systems', 'backend scalability', 'load balancing', 'caching strategies', 'backend monitoring', 'error handling', 'backend documentation', 'api versioning', 'backend best practices', 'secure backend development'],
  alternates: {
    canonical: 'https://www.mydigitalcrown.in/services/backend-development'
  },
  openGraph: {
    title: 'Backend Development Services Mumbai | Node.js Python PHP API Development',
    description: 'Expert Backend Development with Node.js, Python, PHP. Scalable APIs, microservices, database design. 200+ successful projects. Contact now!',
    url: 'https://www.mydigitalcrown.in/services/backend-development',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.mydigitalcrown.in/images/backend-development-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Backend Development Services Mumbai'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backend Development Services Mumbai | API Development Experts',
    description: 'Professional Backend Development - Node.js, Python, PHP, .NET. Scalable APIs & Microservices. Call +91-83695-11877',
    images: ['https://www.mydigitalcrown.in/images/backend-development-mumbai.jpg']
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Web Development Services',
  classification: 'Backend Development, API Development, Server-Side Development',
  referrer: 'origin-when-cross-origin',
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  themeColor: '#3b82f6',
}

export default function BackendDevelopmentPage() {
  // Enhanced Schema.org structured data for SEO/VSO/ASO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // Service Schema
      {
        "@type": "Service",
      "serviceType": "Backend Development Services",
      "provider": {
        "@type": "Organization",
        "name": "MyDigital Crown",
        "url": "https://www.mydigitalcrown.in",
        "logo": "https://www.mydigitalcrown.in/logo.png",
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
          "availableLanguage": ["Hindi", "English", "Marathi"]
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai",
        "containedIn": "Maharashtra, India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Backend Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Node.js Development",
              "description": "Scalable backend solutions with Node.js and Express.js framework"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Python Django Development",
              "description": "Robust backend applications using Python Django and Flask"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "API Development",
              "description": "RESTful and GraphQL API development with documentation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Microservices Architecture",
              "description": "Design and implement scalable microservices-based systems"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Database Design & Optimization",
              "description": "MySQL, PostgreSQL, MongoDB database architecture and optimization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Backend Deployment",
              "description": "AWS, Azure, Google Cloud backend deployment and management"
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
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MyDigital Crown",
      "url": "https://www.mydigitalcrown.in",
      "logo": "https://www.mydigitalcrown.in/logo.png",
      "description": "Leading Backend Development company in Mumbai offering Node.js, Python, PHP backend solutions",
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
        "contactType": "Sales",
        "areaServed": "IN",
        "availableLanguage": ["Hindi", "English", "Marathi"]
      },
      "sameAs": [
        "https://www.facebook.com/mydigitalcrown",
        "https://www.instagram.com/mydigitalcrown",
        "https://www.linkedin.com/company/mydigitalcrown",
        "https://twitter.com/mydigitalcrown"
      ]
    },
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Backend Development Services Mumbai",
      "description": "Professional Backend Development services in Mumbai with Node.js, Python, PHP, API development, and cloud solutions",
      "url": "https://www.mydigitalcrown.in/services/backend-development",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.mydigitalcrown.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.mydigitalcrown.in/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Backend Development",
            "item": "https://www.mydigitalcrown.in/services/backend-development"
          }
        ]
      }
    },
    // FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What backend development services do you offer in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive backend development services including Node.js development, Python Django/Flask, PHP Laravel, RESTful API development, GraphQL APIs, microservices architecture, database design (MySQL, PostgreSQL, MongoDB), cloud deployment (AWS, Azure, GCP), real-time applications with WebSockets, authentication & authorization systems, API integration, and backend optimization."
          }
        },
        {
          "@type": "Question",
          "name": "How much does backend development cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Backend development costs vary based on complexity. Simple API development: ₹50,000-₹1,50,000. Medium complexity backend (authentication, database, APIs): ₹2,00,000-₹5,00,000. Enterprise backend systems (microservices, scalability): ₹5,00,000-₹15,00,000+. Monthly retainer for backend maintenance: ₹50,000-₹2,00,000. We offer free consultation and customized quotes."
          }
        },
        {
          "@type": "Question",
          "name": "Which backend technologies do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in Node.js with Express.js/Nest.js, Python with Django/Flask/FastAPI, PHP with Laravel/Symfony, .NET Core, Java Spring Boot. For databases: MySQL, PostgreSQL, MongoDB, Redis. Cloud platforms: AWS, Azure, Google Cloud. DevOps: Docker, Kubernetes, CI/CD pipelines. API technologies: REST, GraphQL, gRPC, WebSockets."
          }
        },
        {
          "@type": "Question",
          "name": "How long does backend development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timeline depends on project scope. Simple API backend: 2-4 weeks. Medium complexity backend with database and authentication: 6-10 weeks. Enterprise backend with microservices: 3-6 months. Real-time backend systems: 8-12 weeks. MVP backend: 3-6 weeks. We follow Agile methodology with bi-weekly sprints."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide backend development for mobile apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We develop robust backends for mobile apps including RESTful APIs, push notifications, real-time data sync, user authentication (OAuth, JWT), file storage and CDN integration, payment gateway integration, analytics and tracking, scalable database architecture, and cloud deployment. We ensure your mobile app backend can handle millions of users."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate third-party APIs and services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We specialize in API integrations including payment gateways (Razorpay, Stripe, PayPal), social media APIs (Facebook, Google, LinkedIn), SMS/Email services (Twilio, SendGrid), shipping APIs, CRM integrations (Salesforce, HubSpot), analytics platforms, cloud services (AWS S3, Firebase), and custom third-party APIs. We ensure secure and efficient integration."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer backend migration and modernization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide backend migration services including legacy system modernization, monolith to microservices migration, database migration (SQL to NoSQL or vice versa), cloud migration (on-premise to AWS/Azure/GCP), framework upgrades, API refactoring, and performance optimization. We ensure zero downtime during migration with comprehensive testing."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure backend security?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Security is our top priority. We implement JWT/OAuth authentication, role-based access control (RBAC), data encryption (in transit and at rest), SQL injection prevention, XSS and CSRF protection, rate limiting and DDoS protection, secure API gateways, regular security audits, OWASP best practices, environment variable management, and compliance with GDPR, ISO 27001 standards."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide backend scalability and performance optimization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We specialize in scalable backend architecture with load balancing, horizontal and vertical scaling, caching strategies (Redis, Memcached), database optimization and indexing, CDN integration, microservices for independent scaling, auto-scaling with cloud services, performance monitoring, query optimization, and API response time improvement. We ensure your backend handles traffic spikes efficiently."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose MyDigital Crown for backend development in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose us for 200+ successful backend projects delivered, 8+ years of backend development expertise, 25+ expert backend engineers (Node.js, Python, PHP, .NET), latest technology stack and frameworks, scalable and secure architecture, 99.9% uptime guarantee, comprehensive API documentation, agile development methodology, transparent pricing with no hidden costs, post-launch support and maintenance, ISO 27001 certified security practices, and proven track record with startups to enterprises in Mumbai."
          }
        }
      ]
    },
    // LocalBusiness Schema
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "MyDigital Crown - Backend Development Services",
      "image": "https://www.mydigitalcrown.in/logo.png",
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
      "url": "https://www.mydigitalcrown.in/services/backend-development",
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
          <h1>Backend Development Services in Mumbai - MyDigital Crown</h1>
          <p>Leading Backend Development company in Mumbai offering Node.js, Python, PHP, API development. Call +91-83695-11877 for free consultation.</p>
        </div>
      </noscript>

      <Navbar />
      
      <main className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Backend Development Services Mumbai" />
        <meta itemProp="description" content="Professional Backend Development with Node.js, Python, PHP, API development" />
        <meta itemProp="provider" content="MyDigital Crown" />
        
        {/* Hero Section */}
        <section 
          className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden" 
          itemScope 
          itemType="https://schema.org/Service"
          aria-label="Backend development services Mumbai hero section"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-cyan-500/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-violet-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6">
                <span className="text-3xl">⚙️</span>
                <span className="text-white font-semibold">Mumbai&apos;s #1 Backend Development Company</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Backend Development Services In Mumbai - MyDigital Crown
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                🚀 Build Scalable, Secure & High-Performance Server-Side Solutions
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-white/90 mb-8">
                <span className="flex items-center">✅ Node.js & Python</span>
                <span className="flex items-center">✅ API Development</span>
                <span className="flex items-center">✅ Microservices</span>
                <span className="flex items-center">✅ Cloud Deployment</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="tel:+918369511877"
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    📞 Call: +91-83695-11877
                  </span>
                </Link>
                <Link 
                  href="#enquiry"
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  Get Backend Solution 🚀
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { icon: '⚙️', stat: '200+', label: 'Backend Projects' },
                { icon: '🏆', stat: '99.9%', label: 'Uptime Guarantee' },
                { icon: '👨‍💻', stat: '25+', label: 'Backend Engineers' },
                { icon: '⚡', stat: '8+', label: 'Years Experience' },
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
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-4000"></div>
            <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-6">
                <span className="text-2xl">🔧</span>
                <span className="text-white font-semibold">Our Backend Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Comprehensive Backend Solutions
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                  for Modern Applications
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                From APIs to microservices, we build robust server-side systems 🌟
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🟢',
                  title: 'Node.js Development',
                  description: 'Scalable backend solutions with Node.js, Express.js, Nest.js for high-performance applications',
                  features: ['RESTful APIs', 'Real-time WebSockets', 'Microservices Architecture']
                },
                {
                  icon: '🐍',
                  title: 'Python Django Development',
                  description: 'Robust backend applications using Python Django, Flask, FastAPI frameworks',
                  features: ['Django REST Framework', 'ORM & Migrations', 'Admin Dashboard']
                },
                {
                  icon: '🔌',
                  title: 'API Development',
                  description: 'RESTful and GraphQL API development with comprehensive documentation',
                  features: ['REST APIs', 'GraphQL', 'API Gateway']
                },
                {
                  icon: '🏗️',
                  title: 'Microservices Architecture',
                  description: 'Design and implement scalable microservices-based systems with Docker & Kubernetes',
                  features: ['Service Orchestration', 'Container Management', 'Load Balancing']
                },
                {
                  icon: '🗄️',
                  title: 'Database Design & Optimization',
                  description: 'MySQL, PostgreSQL, MongoDB database architecture, optimization and administration',
                  features: ['Schema Design', 'Query Optimization', 'Data Migration']
                },
                {
                  icon: '☁️',
                  title: 'Cloud Backend Deployment',
                  description: 'AWS, Azure, Google Cloud backend deployment, scaling and DevOps automation',
                  features: ['Cloud Infrastructure', 'CI/CD Pipelines', 'Auto-scaling']
                }
              ].map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-blue-100 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-blue-200">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 relative overflow-hidden">
          {/* Floating Stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse animation-delay-4000"></div>
            <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-yellow-300 rounded-full animate-pulse animation-delay-3000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Backend Technologies
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                  We Master
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Latest frameworks and tools for robust server-side development
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Node.js', icon: '🟢', desc: 'JavaScript Runtime' },
                { name: 'Python', icon: '🐍', desc: 'Django & Flask' },
                { name: 'PHP', icon: '🐘', desc: 'Laravel & Symfony' },
                { name: '.NET Core', icon: '🔷', desc: 'C# Framework' },
                { name: 'MongoDB', icon: '🍃', desc: 'NoSQL Database' },
                { name: 'PostgreSQL', icon: '🐘', desc: 'Relational DB' },
                { name: 'Docker', icon: '🐳', desc: 'Containerization' },
                { name: 'Kubernetes', icon: '☸️', desc: 'Orchestration' },
              ].map((tech, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <h3 className="font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors">{tech.name}</h3>
                  <p className="text-sm text-blue-100">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section 
          className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden"
          aria-label="Why choose our backend development services"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Why Choose Our
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Backend Development Services
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                200+ successful backend projects delivered across Mumbai
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '👨‍💻',
                  title: 'Expert Backend Team',
                  description: '25+ experienced backend engineers specializing in Node.js, Python, PHP, .NET with 8+ years expertise'
                },
                {
                  icon: '🚀',
                  title: 'Scalable Architecture',
                  description: 'Build systems that handle millions of requests with microservices, load balancing, and cloud scaling'
                },
                {
                  icon: '🔒',
                  title: 'Security First',
                  description: 'Implement JWT/OAuth authentication, encryption, OWASP best practices, and ISO 27001 compliance'
                },
                {
                  icon: '📊',
                  title: 'Performance Optimized',
                  description: 'Redis caching, database indexing, query optimization for lightning-fast API response times'
                },
                {
                  icon: '🛠️',
                  title: 'DevOps Integration',
                  description: 'CI/CD pipelines, Docker containers, Kubernetes orchestration, automated testing and deployment'
                },
                {
                  icon: '💬',
                  title: 'API Documentation',
                  description: 'Comprehensive Swagger/OpenAPI documentation, versioning, and developer-friendly endpoints'
                },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-4000"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-yellow-300 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-4 mb-8 shadow-2xl">
                <span className="text-2xl">❤️</span>
                <span className="text-white font-bold text-lg">Client Success Stories</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                What Mumbai <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Businesses</span><br />
                Say About Us
              </h2>
              
              <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Real results, real clients, real growth stories from Mumbai&apos;s most successful businesses
              </p>
            </div>
            
            {/* Success Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl font-black text-yellow-400 mb-2">98%</div>
                  <div className="text-white/90 font-medium">Client Retention</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl font-black text-green-400 mb-2">300%</div>
                  <div className="text-white/90 font-medium">Average ROI</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl font-black text-blue-400 mb-2">150+</div>
                  <div className="text-white/90 font-medium">Happy Clients</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl font-black text-purple-400 mb-2">5.0</div>
                  <div className="text-white/90 font-medium">Star Rating</div>
                </div>
              </div>
            </div>
            
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Testimonial 1 */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                  💼
                </div>
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  </div>
                  <blockquote className="text-lg text-white/90 leading-relaxed italic">
                    &quot;MyDigital Crown transformed our furniture business completely. Their digital marketing strategies increased our sales by <span className="text-yellow-400 font-bold">200% within 6 months</span>. Aditya&apos;s team understands the furniture industry perfectly and delivered exceptional results.&quot;
                  </blockquote>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">FF</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Farhan Furniturewalla</div>
                    <div className="text-white/70">Owner, Furniturewalla</div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                  🏥
                </div>
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  </div>
                  <blockquote className="text-lg text-white/90 leading-relaxed italic">
                    &quot;As a healthcare facility, we needed a digital partner who understands our industry. MyDigital Crown delivered outstanding SEO and social media marketing that brought us <span className="text-green-400 font-bold">150+ new patients monthly</span>. Unmatched professionalism!&quot;
                  </blockquote>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">SK</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Dr. Shrish Kumar</div>
                    <div className="text-white/70">Care Hospital</div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                  🎓
                </div>
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  </div>
                  <blockquote className="text-lg text-white/90 leading-relaxed italic">
                    &quot;MyDigital Crown&apos;s educational marketing expertise helped us reach thousands of prospective students. Their targeted campaigns increased our admissions by <span className="text-purple-400 font-bold">180%</span>. Excellent ROI throughout!&quot;
                  </blockquote>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">UB</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Umesh Batkar</div>
                    <div className="text-white/70">Director, Trinkets Institute</div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 4 */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                  🧽
                </div>
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  </div>
                  <blockquote className="text-lg text-white/90 leading-relaxed italic">
                    &quot;Our cleaning service flourished after partnering with MyDigital Crown. Their local SEO strategies helped us dominate Mumbai&apos;s market. We now get <span className="text-cyan-400 font-bold">50+ inquiries weekly</span>. Outstanding team!&quot;
                  </blockquote>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">SK</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Shagufta Khan</div>
                    <div className="text-white/70">Founder, Clean n Shine</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Ready to Join Our Success Stories?
                </h3>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Let&apos;s create your digital marketing success story. Get started with a free consultation and discover how we can transform your business.
                </p>
                <a href="tel:+918369511877" className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 inline-flex items-center justify-center transform hover:scale-110">
                  <span className="relative z-10 flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    <span className="font-extrabold tracking-wide">Call Now: +91-83695-11877</span>
                  </span>
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

        {/* FAQ Section */}
        <section 
          className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden"
          aria-label="Frequently asked questions about backend development"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-20 w-96 h-96 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          {/* Floating Emojis */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>💻</div>
            <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🚀</div>
            <div className="absolute bottom-32 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>⚡</div>
            <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>🔧</div>
            <div className="absolute top-1/3 left-1/2 text-4xl opacity-20 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}>💡</div>
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
                Everything you need to know about backend development services in Mumbai ✨
              </p>
            </div>

            {/* FAQ Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* FAQ 1 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🔧</span>
                    <span>What backend development services do you offer in Mumbai?</span>
                  </span>
                  <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p>We offer comprehensive backend development services including <strong>Node.js development</strong>, <strong>Python Django/Flask</strong>, <strong>PHP Laravel</strong>, RESTful API development, GraphQL APIs, microservices architecture, database design (MySQL, PostgreSQL, MongoDB), cloud deployment (AWS, Azure, GCP), real-time applications with WebSockets, authentication & authorization systems, API integration, and backend optimization. We also provide <Link href="/services/website-development" className="text-cyan-300 hover:underline font-semibold">website development</Link> and <Link href="/services/digital-marketing" className="text-cyan-300 hover:underline font-semibold">digital marketing</Link> services.</p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-bounce">💰</span>
                    <span>How much does backend development cost in Mumbai?</span>
                  </span>
                  <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p className="mb-4">Backend development costs vary based on complexity:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">💎 <strong>Simple API development:</strong> ₹50,000 - ₹1,50,000</li>
                    <li className="flex items-start gap-2">💎 <strong>Medium complexity backend</strong> (authentication, database, APIs): ₹2,00,000 - ₹5,00,000</li>
                    <li className="flex items-start gap-2">💎 <strong>Enterprise backend systems</strong> (microservices, scalability): ₹5,00,000 - ₹15,00,000+</li>
                    <li className="flex items-start gap-2">💎 <strong>Monthly retainer</strong> for backend maintenance: ₹50,000 - ₹2,00,000</li>
                  </ul>
                  <p className="mt-4">We offer free consultation and customized quotes. Contact us for a detailed proposal!</p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-pulse">💻</span>
                    <span>Which backend technologies do you use?</span>
                  </span>
                  <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p className="mb-4">We specialize in multiple backend technologies:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">🛠️ <strong>Frameworks</strong></div>
                      <ul className="space-y-1 ml-4">
                        <li>• Node.js with Express.js/Nest.js</li>
                        <li>• Python with Django/Flask/FastAPI</li>
                        <li>• PHP with Laravel/Symfony</li>
                        <li>• .NET Core, Java Spring Boot</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">🗄️ <strong>Databases & Cloud</strong></div>
                      <ul className="space-y-1 ml-4">
                        <li>• MySQL, PostgreSQL</li>
                        <li>• MongoDB, Redis</li>
                        <li>• AWS, Azure, Google Cloud</li>
                        <li>• Docker, Kubernetes, CI/CD</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4">API technologies: REST, GraphQL, gRPC, WebSockets</p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                    <span>How long does backend development take?</span>
                  </span>
                  <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p className="mb-4">Timeline depends on project scope:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">⚡ <strong>Simple API backend:</strong> 2-4 weeks</li>
                    <li className="flex items-start gap-2">⚡ <strong>Medium complexity backend</strong> with database and authentication: 6-10 weeks</li>
                    <li className="flex items-start gap-2">⚡ <strong>Enterprise backend</strong> with microservices: 3-6 months</li>
                    <li className="flex items-start gap-2">⚡ <strong>Real-time backend systems:</strong> 8-12 weeks</li>
                    <li className="flex items-start gap-2">⚡ <strong>MVP backend:</strong> 3-6 weeks</li>
                  </ul>
                  <p className="mt-4">We follow <strong>Agile methodology</strong> with bi-weekly sprints for transparent progress tracking.</p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-bounce">📱</span>
                    <span>Do you provide backend development for mobile apps?</span>
                  </span>
                  <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p className="mb-4"><strong>Yes!</strong> We develop robust backends for mobile apps including:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">✓ RESTful APIs for iOS and Android apps</li>
                    <li className="flex items-start gap-2">✓ Push notifications integration (FCM, APNs)</li>
                    <li className="flex items-start gap-2">✓ Real-time data sync with WebSockets</li>
                    <li className="flex items-start gap-2">✓ User authentication (OAuth, JWT, Social Login)</li>
                    <li className="flex items-start gap-2">✓ File storage and CDN integration</li>
                    <li className="flex items-start gap-2">✓ Payment gateway integration (Razorpay, Stripe)</li>
                    <li className="flex items-start gap-2">✓ Analytics and tracking</li>
                    <li className="flex items-start gap-2">✓ Scalable database architecture</li>
                  </ul>
                  <p className="mt-4">We ensure your mobile app backend can handle <strong>millions of users</strong> with zero downtime.</p>
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-pulse">🔌</span>
                    <span>Can you integrate third-party APIs and services?</span>
                  </span>
                  <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p className="mb-4"><strong>Absolutely!</strong> We specialize in API integrations including:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">💳 <strong>Payment & Commerce</strong></div>
                      <ul className="space-y-1 ml-4">
                        <li>• Razorpay, Stripe, PayPal</li>
                        <li>• Shipping APIs (Delhivery, Shiprocket)</li>
                        <li>• E-commerce platforms</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">💼 <strong>Business Tools</strong></div>
                      <ul className="space-y-1 ml-4">
                        <li>• CRM (Salesforce, HubSpot)</li>
                        <li>• SMS/Email (Twilio, SendGrid)</li>
                        <li>• Social Media APIs</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4">Cloud services (AWS S3, Firebase), analytics platforms, and custom third-party APIs. We ensure <strong>secure and efficient</strong> integration with proper error handling.</p>
                </div>
              </details>

              {/* FAQ 7 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🔄</span>
                    <span>Do you offer backend migration and modernization?</span>
                  </span>
                  <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p className="mb-4"><strong>Yes!</strong> We provide comprehensive backend migration services:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">→ <strong>Legacy system modernization</strong> - upgrade outdated backends to modern frameworks</li>
                    <li className="flex items-start gap-2">→ <strong>Monolith to microservices migration</strong> - break down monolithic apps into scalable microservices</li>
                    <li className="flex items-start gap-2">→ <strong>Database migration</strong> - SQL to NoSQL or vice versa with data integrity</li>
                    <li className="flex items-start gap-2">→ <strong>Cloud migration</strong> - move from on-premise to AWS/Azure/GCP</li>
                    <li className="flex items-start gap-2">→ <strong>Framework upgrades</strong> - Node.js, Python, PHP version updates</li>
                    <li className="flex items-start gap-2">→ <strong>API refactoring</strong> and performance optimization</li>
                  </ul>
                  <p className="mt-4">We ensure <strong>zero downtime</strong> during migration with comprehensive testing and rollback strategies.</p>
                </div>
              </details>

              {/* FAQ 8 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-bounce">🔒</span>
                    <span>How do you ensure backend security?</span>
                  </span>
                  <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p className="mb-4"><strong>Security is our top priority.</strong> We implement multiple layers of protection:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">🔑 <strong>Authentication & Access</strong></div>
                      <ul className="space-y-1 ml-4">
                        <li>• JWT/OAuth authentication</li>
                        <li>• Role-based access control (RBAC)</li>
                        <li>• Two-factor authentication (2FA)</li>
                        <li>• Session management</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">🛡️ <strong>Data Protection</strong></div>
                      <ul className="space-y-1 ml-4">
                        <li>• Data encryption (in transit & at rest)</li>
                        <li>• SQL injection prevention</li>
                        <li>• XSS and CSRF protection</li>
                        <li>• Rate limiting & DDoS protection</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4">We follow <strong>OWASP best practices</strong>, conduct regular security audits, and maintain <strong>ISO 27001</strong> compliance with GDPR standards.</p>
                </div>
              </details>

              {/* FAQ 9 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-blue-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-pulse">⚡</span>
                    <span>Do you provide backend scalability and performance optimization?</span>
                  </span>
                  <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p className="mb-4"><strong>Yes!</strong> We specialize in building highly scalable backend systems:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">⚡ <strong>Load balancing</strong> - distribute traffic across multiple servers</li>
                    <li className="flex items-start gap-2">⚡ <strong>Horizontal & vertical scaling</strong> - scale based on demand</li>
                    <li className="flex items-start gap-2">⚡ <strong>Caching strategies</strong> - Redis, Memcached for faster responses</li>
                    <li className="flex items-start gap-2">⚡ <strong>Database optimization</strong> - indexing, query optimization, connection pooling</li>
                    <li className="flex items-start gap-2">⚡ <strong>CDN integration</strong> - faster content delivery globally</li>
                    <li className="flex items-start gap-2">⚡ <strong>Microservices architecture</strong> - independent scaling of services</li>
                    <li className="flex items-start gap-2">⚡ <strong>Auto-scaling</strong> with AWS/Azure/GCP</li>
                    <li className="flex items-start gap-2">⚡ <strong>Performance monitoring</strong> - real-time metrics and alerts</li>
                  </ul>
                  <p className="mt-4">We ensure your backend handles <strong>traffic spikes efficiently</strong> with <strong>99.9% uptime guarantee</strong>.</p>
                </div>
              </details>

              {/* FAQ 10 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-lime-500/20 hover:border-lime-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-lime-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-bounce">🏆</span>
                    <span>Why choose MyDigital Crown for backend development in Mumbai?</span>
                  </span>
                  <svg className="w-7 h-7 text-lime-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p className="mb-4"><strong className="text-xl text-cyan-300">Choose us for proven excellence:</strong></p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">✓ <strong>200+ successful</strong> backend projects delivered</div>
                      <div className="flex items-start gap-2">✓ <strong>8+ years</strong> of backend development expertise</div>
                      <div className="flex items-start gap-2">✓ <strong>25+ expert</strong> backend engineers (Node.js, Python, PHP, .NET)</div>
                      <div className="flex items-start gap-2">✓ <strong>Latest technology</strong> stack and frameworks</div>
                      <div className="flex items-start gap-2">✓ <strong>Scalable & secure</strong> architecture</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">✓ <strong>99.9% uptime</strong> guarantee</div>
                      <div className="flex items-start gap-2">✓ <strong>Comprehensive API</strong> documentation</div>
                      <div className="flex items-start gap-2">✓ <strong>Agile development</strong> methodology</div>
                      <div className="flex items-start gap-2">✓ <strong>Transparent pricing</strong> with no hidden costs</div>
                      <div className="flex items-start gap-2">✓ <strong>Post-launch support</strong> and maintenance</div>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <p><strong>ISO 27001 certified</strong> security practices and proven track record with <strong>startups to enterprises</strong> across Mumbai. We also offer <Link href="/services/seo" className="text-cyan-300 hover:underline font-semibold">SEO services</Link>, <Link href="/services/social-media-marketing" className="text-cyan-300 hover:underline font-semibold">social media marketing</Link>, and <Link href="/services/digital-branding" className="text-cyan-300 hover:underline font-semibold">digital branding</Link> to grow your business!</p>
                  </div>
                </div>
              </details>

              {/* FAQ 11 */}
              <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
                <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="text-4xl mt-1 group-open:animate-spin">🔐</span>
                    <span>How do you ensure backend security and data protection?</span>
                  </span>
                  <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                  <p className="mb-4">We implement <strong>industry-leading security practices</strong> including:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">🔒 <strong>SSL/TLS encryption</strong> for all data in transit</li>
                    <li className="flex items-start gap-2">🔒 <strong>Database encryption</strong> at rest with AES-256</li>
                    <li className="flex items-start gap-2">🔒 <strong>JWT & OAuth 2.0</strong> authentication with refresh tokens</li>
                    <li className="flex items-start gap-2">🔒 <strong>Input validation</strong> and SQL injection prevention</li>
                    <li className="flex items-start gap-2">🔒 <strong>OWASP Top 10</strong> security compliance</li>
                    <li className="flex items-start gap-2">🔒 <strong>Regular security audits</strong> and penetration testing</li>
                    <li className="flex items-start gap-2">🔒 <strong>Rate limiting</strong> and DDoS protection</li>
                    <li className="flex items-start gap-2">🔒 <strong>GDPR & data privacy</strong> compliance</li>
                  </ul>
                  <p className="mt-4">Our backends are <strong>ISO 27001 certified</strong> and follow best practices for secure API development with comprehensive logging and monitoring.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Voice Search Optimization Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Quick Answers for Voice Search
              </h2>
              <p className="text-xl text-gray-600">
                Common backend development questions answered instantly
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Where to find backend developers in Mumbai?</h3>
                <p className="text-gray-700">MyDigital Crown offers expert backend development services across Mumbai with 8+ years experience, 200+ projects delivered, and 25+ backend engineers. We serve Andheri, Bandra, BKC, and all Mumbai areas!</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-lg text-gray-900 mb-3">How much does backend development cost?</h3>
                <p className="text-gray-700">Costs range from ₹50K-₹1.5L for simple APIs, ₹2L-₹5L for medium complexity backends, ₹5L-₹15L+ for enterprise systems. Monthly retainer: ₹50K-₹2L. Free consultation available!</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-lg text-gray-900 mb-3">When will my backend be ready?</h3>
                <p className="text-gray-700">Timeline: Simple API 2-4 weeks, Medium backend 6-10 weeks, Enterprise systems 3-6 months. MVP in 3-6 weeks. We follow Agile with bi-weekly sprints for faster delivery!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry Form Section */}
        <EnquiryForm />

      </main>

      <Footer />
    </>
  );
}
