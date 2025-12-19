import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import TrustedBrands from '@/app/components/TrustedBrands'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'UI Development Mumbai | 300+ Interfaces | Design Systems Expert',
  description: 'UI Development Mumbai. 300+ Interfaces Built | Pixel-Perfect Design Systems | Responsive Layouts | Component Libraries. Call +91-83695-11877',
  keywords: [
    // Primary Keywords
    "UI Development Company in Mumbai", "ui development company Mumbai", "interface design Mumbai", "user interface development Mumbai", "responsive design company Mumbai",
    // Quality Keywords
    "best UI developer Mumbai", "professional interface design Mumbai", "expert UI development Mumbai", "top UI company Mumbai", "certified UI developer Mumbai",
    // Service-Specific Keywords
    "UI/UX design Mumbai", "design system Mumbai", "frontend development Mumbai", "custom UI design Mumbai", "pixel-perfect UI Mumbai",
    "component library Mumbai", "interface prototyping Mumbai", "UI animation Mumbai", "interactive design Mumbai", "mobile UI design Mumbai",
    // Technical Keywords
    "React UI development Mumbai", "Vue.js interface Mumbai", "Angular UI Mumbai", "HTML5 CSS3 development Mumbai", "Tailwind CSS development Mumbai",
    "Bootstrap development Mumbai", "Material Design Mumbai", "responsive framework Mumbai", "CSS architecture Mumbai", "JavaScript UI Mumbai",
    // Business Keywords
    "UI company Mumbai", "interface developer Mumbai", "UI consulting Mumbai", "design system development Mumbai", "UI optimization Mumbai",
    "enterprise UI development Mumbai", "startup interface design Mumbai"
  ],
  authors: [{ name: "Aditya Pandey", url: "https://mydigital-mu.vercel.app/about" }],
  creator: "MyDigital Crown",
  publisher: "MyDigital Crown",
  category: "UI Development Services",
  classification: "User Interface Design & Frontend Development",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  openGraph: {
    title: 'UI Development Company in Mumbai | #1 Interface Design Expert 2025',
    description: 'Leading UI Development Company in Mumbai. Expert interface design, responsive layouts, design systems & pixel-perfect UIs. 30+ interfaces built.',
    url: 'https://mydigital-mu.vercel.app/services/ui-development',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigital-mu.vercel.app/images/ui-development-og.jpg',
        width: 1200,
        height: 630,
        alt: 'UI Development Company in Mumbai - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI Development Company in Mumbai | #1 Interface Design Expert',
    description: 'Leading UI Development Company in Mumbai. Expert interface design, responsive layouts & design systems. 30+ interfaces built.',
    images: ['https://mydigital-mu.vercel.app/images/ui-development-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://mydigital-mu.vercel.app/services/ui-development',
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
}

// Comprehensive Schema Markup for SEO
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "MyDigital Crown",
      "url": "https://mydigital-mu.vercel.app",
      "logo": "https://mydigital-mu.vercel.app/images/logo.png",
      "description": "Leading UI Development Company in Mumbai specializing in interface design, responsive layouts, design systems, and pixel-perfect user interfaces.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mumbai",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
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
        "https://www.linkedin.com/company/mydigitalcrown",
        "https://twitter.com/mydigitalcrown"
      ]
    },
    {
      "@type": "Service",
      "serviceType": "UI Development",
      "provider": {
        "@type": "Organization",
        "name": "MyDigital Crown"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
      "description": "Professional UI Development Company in Mumbai offering custom interface design, responsive layouts, design systems, and performance-optimized user interfaces.",
      "offers": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom UI Design",
            "description": "Brand-aligned interface designs with custom components and style guides"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Responsive Design",
            "description": "Mobile-first interfaces that work flawlessly across all devices"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Design Systems",
            "description": "Comprehensive component libraries with design tokens and documentation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Optimization",
            "description": "Fast-loading, smooth interfaces with optimized code and assets"
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "MyDigital Crown - UI Development Company in Mumbai",
      "image": "https://mydigital-mu.vercel.app/images/ui-development-mumbai.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mumbai",
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
      "url": "https://mydigital-mu.vercel.app/services/ui-development",
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
        "reviewCount": "200"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a UI Development Company in Mumbai do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A UI Development Company in Mumbai designs and develops beautiful, intuitive user interfaces for websites and applications. We create custom designs, responsive layouts, interactive elements, accessibility features, design systems, and performance-optimized interfaces. Our UI Development Company in Mumbai team has 10+ years of experience delivering pixel-perfect solutions."
          }
        },
        {
          "@type": "Question",
          "name": "How much does UI development cost in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "UI development costs in Mumbai vary based on complexity and requirements. Basic interfaces start at ₹50,000, medium complexity at ₹1,50,000, and comprehensive design systems range from ₹3,00,000 to ₹5,00,000+. As a leading UI Development Company in Mumbai, we offer transparent pricing and free initial consultations."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose a professional UI Development Company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional UI Development Companies bring expertise in user-centered design, pixel-perfect precision, performance optimization, accessibility standards, and industry best practices. Our UI Development Company in Mumbai has built 30+ interfaces with 95% user satisfaction. We ensure your interface is both beautiful and functional, driving 60% better engagement."
          }
        },
        {
          "@type": "Question",
          "name": "How long does UI development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "UI development timelines vary based on project scope: basic interfaces take 2-4 weeks, medium complexity 4-8 weeks, and comprehensive design systems with component libraries take 8-12 weeks. Our UI Development Company in Mumbai provides detailed timelines with milestones during the initial consultation."
          }
        },
        {
          "@type": "Question",
          "name": "What is responsive design and why is it important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Responsive design ensures your interface works seamlessly across all devices - mobile phones, tablets, and desktops. With 60%+ users accessing websites on mobile, responsive design is crucial. Our UI Development Company in Mumbai follows a mobile-first approach, ensuring optimal user experience on every device with 100% mobile responsiveness."
          }
        },
        {
          "@type": "Question",
          "name": "What is a design system and do I need one?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A design system is a comprehensive collection of reusable components, design tokens, and guidelines that ensure consistency across your product. Our UI Development Company in Mumbai creates design systems with component libraries, style guides, and documentation. They're essential for scaling products and maintaining brand consistency."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure accessibility in UI design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our UI Development Company in Mumbai follows WCAG 2.1 guidelines for accessibility. We ensure proper color contrast, keyboard navigation, screen reader support, focus indicators, alt text for images, and semantic HTML. Accessibility makes your interface usable by everyone, expanding your audience and ensuring compliance."
          }
        },
        {
          "@type": "Question",
          "name": "What tools do you use for UI development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our UI Development Company in Mumbai uses industry-leading tools: Figma and Adobe XD for design, React and Next.js for development, Tailwind CSS for styling, Framer Motion for animations, Storybook for component documentation, and accessibility testing tools. We choose the best tools for each project's unique requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide UI development training or handoff documentation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our UI Development Company in Mumbai provides comprehensive handoff documentation including style guides, component libraries, design tokens, and usage guidelines. We also offer training sessions for your team to understand and maintain the UI. Documentation includes code examples, best practices, and responsive behavior specifications."
          }
        },
        {
          "@type": "Question",
          "name": "How do you optimize UI performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our UI Development Company in Mumbai optimizes performance through code splitting, lazy loading, image optimization, CSS minification, component memoization, efficient state management, and CDN delivery. We ensure sub-1-second load times, smooth 60fps animations, and optimal Core Web Vitals scores (LCP, FID, CLS) for better user experience and SEO rankings."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign or update existing UI interfaces?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Our UI Development Company in Mumbai specializes in UI modernization and redesigns. We audit your existing interface, identify usability issues, and create modern, user-friendly designs. Whether it's a complete overhaul or incremental improvements, we ensure seamless transitions while maintaining functionality. We've successfully redesigned 50+ interfaces with 80% improvement in user satisfaction scores."
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
          "name": "UI Development Company in Mumbai",
          "item": "https://mydigital-mu.vercel.app/services/ui-development"
        }
      ]
    }
  ]
}

export default function UIDevelopmentPage() {
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
        aria-label="UI Development Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">UI Development Specialists</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                UI Development Company In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  🎨 Create <span className="text-yellow-300">Beautiful Designs</span>, <span className="text-green-300">Enhance UX</span> & <span className="text-orange-300">Drive Engagement</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Modern Interfaces | Responsive Design | User-Centered | Performance Optimized
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
                    <span>Start Your UI Project</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">30+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Interfaces Built</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">95%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">User Satisfaction</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">60%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Better Engagement</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Mobile Responsive</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About UI Development Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎨</span>
              Interface Design Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">UI Development</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beautiful, intuitive user interfaces that combine stunning design with seamless functionality
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop" 
                    alt="UI Development Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 User-Centered Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  Interfaces designed around user needs, behaviors, and preferences for maximum satisfaction.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💎 Pixel-Perfect Precision</h3>
                <p className="text-gray-700 leading-relaxed">
                  Meticulous attention to detail ensuring every element is perfectly crafted and aligned.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Performance First</h3>
                <p className="text-gray-700 leading-relaxed">
                  Optimized interfaces that load fast, run smooth, and deliver exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Development Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our UI <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive UI development services to create interfaces that users love
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎨</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Custom UI Design</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Unique interface designs tailored to your brand and user needs.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Brand-Aligned Design</li>
                  <li className="flex items-start gap-2">✓ Custom Components</li>
                  <li className="flex items-start gap-2">✓ Style Guides</li>
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
                  Interfaces that work flawlessly across all devices and screen sizes.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Mobile-First Approach</li>
                  <li className="flex items-start gap-2">✓ Tablet Optimization</li>
                  <li className="flex items-start gap-2">✓ Desktop Excellence</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎭</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Interactive Elements</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Engaging animations and interactions that delight users.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Micro-interactions</li>
                  <li className="flex items-start gap-2">✓ Smooth Animations</li>
                  <li className="flex items-start gap-2">✓ Hover Effects</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">♿</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Accessibility</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Inclusive design ensuring everyone can use your interface.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ WCAG Compliance</li>
                  <li className="flex items-start gap-2">✓ Screen Reader Support</li>
                  <li className="flex items-start gap-2">✓ Keyboard Navigation</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Design Systems</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Comprehensive design systems for consistent user experiences.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Component Libraries</li>
                  <li className="flex items-start gap-2">✓ Design Tokens</li>
                  <li className="flex items-start gap-2">✓ Documentation</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Performance Optimization</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Fast-loading, smooth interfaces with optimized performance.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Code Optimization</li>
                  <li className="flex items-start gap-2">✓ Asset Compression</li>
                  <li className="flex items-start gap-2">✓ Lazy Loading</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories - Real Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-1000"></div>
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">❤️</span>
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Mumbai Businesses Say About Us
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real results from real clients who trusted us with their UI Development
            </p>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            <div className="text-center">
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text mb-2">10+</div>
              <div className="text-white text-sm font-semibold">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text mb-2">95%+</div>
              <div className="text-white text-sm font-semibold">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text mb-2">300%</div>
              <div className="text-white text-sm font-semibold">Avg ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-2">150+</div>
              <div className="text-white text-sm font-semibold">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-rose-300 to-red-300 bg-clip-text mb-2">5.0</div>
              <div className="text-white text-sm font-semibold">Average Rating</div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Testimonial 1 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                💼
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-white text-lg leading-relaxed mb-6">
                  &quot;The UI Development Company in Mumbai team transformed our furniture e-commerce platform with stunning interface design. We saw a 200% increase in online sales within 6 months!&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    FF
                  </div>
                  <div>
                    <div className="text-white font-bold">Farhan Furniturewalla</div>
                    <div className="text-blue-200 text-sm">CEO, Premium Furniture Store</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                🏥
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-white text-lg leading-relaxed mb-6">
                  &quot;Outstanding responsive UI design for our hospital patient portal. The user-friendly interface resulted in 150+ new patients monthly. Highly recommend this UI Development Company in Mumbai!&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SK
                  </div>
                  <div>
                    <div className="text-white font-bold">Dr. Shrish Kumar</div>
                    <div className="text-blue-200 text-sm">Director, Multi-Specialty Hospital</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                🎓
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-white text-lg leading-relaxed mb-6">
                  &quot;Their pixel-perfect UI design transformed our educational platform delivery. The modern interface led to a 180% increase in admissions. Best UI Development Company in Mumbai!&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    UB
                  </div>
                  <div>
                    <div className="text-white font-bold">Umesh Batkar</div>
                    <div className="text-blue-200 text-sm">Principal, Educational Institute</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                🧽
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-white text-lg leading-relaxed mb-6">
                  &quot;The beautiful and intuitive interface simplified our cleaning service operations perfectly. We now get 50+ service bookings weekly. Professional UI Development Company in Mumbai team!&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SK
                  </div>
                  <div>
                    <div className="text-white font-bold">Shagufta Khan</div>
                    <div className="text-blue-200 text-sm">Owner, Cleaning Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">🎨</div>
          <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-bounce delay-1000">✨</div>
          <div className="absolute top-1/2 right-20 text-6xl opacity-20 animate-bounce delay-2000">⭐</div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-white text-lg mb-6">Join 150+ successful businesses in Mumbai</p>
            <a 
              href="tel:+918369511877" 
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-2xl mr-3">📞</span>
              <span>Call Now: +91-83695-11877</span>
            </a>
          </div>
        </div>
      </section>

      {/* Premium Digital Marketing Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl hover:shadow-2xl transition-all">
              <span className="text-2xl mr-3">🚀</span>
              <span>Premium Digital Marketing Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">50+ Services</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">To Skyrocket Your Growth</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-semibold mb-4">
              From <span className="text-blue-600">SEO</span> to <span className="text-purple-600">Social Media</span>, <span className="text-pink-600">Google Ads</span> to <span className="text-orange-600">Web Development</span>
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Everything your business needs to dominate online 🚀
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Services */}
            <Link href="/services/search-engine-optimisation" className="group relative rounded-3xl overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop"
                  alt="SEO Services Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-blue-700/95 group-hover:from-blue-800/98 group-hover:to-blue-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Search Engine Optimization</h3>
                <p className="text-blue-100 mb-4 leading-relaxed">Dominate Google rankings with our proven SEO strategies. Get more organic traffic and qualified leads.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Social Media Marketing */}
            <Link href="/services/social-media-marketing" className="group relative rounded-3xl overflow-hidden border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop"
                  alt="Social Media Marketing Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900/95 to-rose-700/95 group-hover:from-pink-800/98 group-hover:to-rose-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Social Media Marketing</h3>
                <p className="text-pink-100 mb-4 leading-relaxed">Build a powerful social presence on Instagram, Facebook, LinkedIn & more. Engage your audience effectively.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Google Ads (PPC) */}
            <Link href="/services/google-ads" className="group relative rounded-3xl overflow-hidden border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Google Ads Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 to-emerald-700/95 group-hover:from-green-800/98 group-hover:to-emerald-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Google Ads (PPC)</h3>
                <p className="text-green-100 mb-4 leading-relaxed">Get instant leads with high-converting Google Ads campaigns. Maximize your ROI with expert PPC management.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Web Development */}
            <Link href="/services/web-development" className="group relative rounded-3xl overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                  alt="Web Development Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 to-indigo-700/95 group-hover:from-purple-800/98 group-hover:to-indigo-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Web Development</h3>
                <p className="text-purple-100 mb-4 leading-relaxed">Build fast, secure, and scalable websites that convert visitors into customers. Modern tech stack.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Content Marketing */}
            <Link href="/services/content-marketing" className="group relative rounded-3xl overflow-hidden border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=600&fit=crop"
                  alt="Content Marketing Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/95 to-amber-700/95 group-hover:from-orange-800/98 group-hover:to-amber-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Content Marketing</h3>
                <p className="text-orange-100 mb-4 leading-relaxed">Engage your audience with compelling content that drives conversions. Build authority & trust.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Digital Branding */}
            <Link href="/services/digital-branding" className="group relative rounded-3xl overflow-hidden border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop"
                  alt="Digital Branding Mumbai"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/95 to-blue-700/95 group-hover:from-cyan-800/98 group-hover:to-blue-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Digital Branding</h3>
                <p className="text-cyan-100 mb-4 leading-relaxed">Build a memorable brand identity that resonates with your audience and stands out from competition.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* View All Services CTA */}
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              <span className="mr-3">View All 50+ Services</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

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
          <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🚀</div>
          <div className="absolute bottom-32 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>⭐</div>
          <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>🎯</div>
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
              Everything you need to know about UI Development in Mumbai ✨
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎨</span>
                  <span>What does a UI Development Company in Mumbai do?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                A UI Development Company in Mumbai designs and develops beautiful, intuitive user interfaces for websites and applications. We create custom designs, responsive layouts, interactive elements, accessibility features, design systems, and performance-optimized interfaces. Our UI Development Company in Mumbai team has 10+ years of experience delivering pixel-perfect solutions.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">💰</span>
                  <span>How much does UI development cost in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                UI development costs in Mumbai vary based on complexity and requirements. Basic interfaces start at ₹50,000, medium complexity at ₹1,50,000, and comprehensive design systems range from ₹3,00,000 to ₹5,00,000+. As a leading UI Development Company in Mumbai, we offer transparent pricing and free initial consultations. Call +91-83695-11877 for a custom quote.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🏆</span>
                  <span>Why choose a professional UI Development Company?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Professional UI Development Companies bring expertise in user-centered design, pixel-perfect precision, performance optimization, accessibility standards, and industry best practices. Our UI Development Company in Mumbai has built 30+ interfaces with 95% user satisfaction. We ensure your interface is both beautiful and functional, driving 60% better engagement.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                  <span>How long does UI development take?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                UI development timelines vary based on project scope: basic interfaces take 2-4 weeks, medium complexity 4-8 weeks, and comprehensive design systems with component libraries take 8-12 weeks. Our UI Development Company in Mumbai provides detailed timelines with milestones during the initial consultation.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">📱</span>
                  <span>What is responsive design and why is it important?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Responsive design ensures your interface works seamlessly across all devices - mobile phones, tablets, and desktops. With 60%+ users accessing websites on mobile, responsive design is crucial. Our UI Development Company in Mumbai follows a mobile-first approach, ensuring optimal user experience on every device with 100% mobile responsiveness.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🎯</span>
                  <span>What is a design system and do I need one?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                A design system is a comprehensive collection of reusable components, design tokens, and guidelines that ensure consistency across your product. Our UI Development Company in Mumbai creates design systems with component libraries, style guides, and documentation. They&apos;re essential for scaling products and maintaining brand consistency.
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">♿</span>
                  <span>How do you ensure accessibility in UI design?</span>
                </span>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Our UI Development Company in Mumbai follows WCAG 2.1 guidelines for accessibility. We ensure proper color contrast, keyboard navigation, screen reader support, focus indicators, alt text for images, and semantic HTML. Accessibility makes your interface usable by everyone, expanding your audience and ensuring compliance.
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🛠️</span>
                  <span>What tools do you use for UI development?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Our UI Development Company in Mumbai uses industry-leading tools: Figma and Adobe XD for design, React and Next.js for development, Tailwind CSS for styling, Framer Motion for animations, Storybook for component documentation, and accessibility testing tools. We choose the best tools for each project&apos;s unique requirements.
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🎓</span>
                  <span>Do you provide UI development training or handoff documentation?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Yes! Our UI Development Company in Mumbai provides comprehensive handoff documentation including style guides, component libraries, design tokens, and usage guidelines. We also offer training sessions for your team to understand and maintain the UI. Documentation includes code examples, best practices, and responsive behavior specifications.
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-indigo-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">⚡</span>
                  <span>How do you optimize UI performance?</span>
                </span>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Our UI Development Company in Mumbai optimizes performance through code splitting, lazy loading, image optimization, CSS minification, component memoization, efficient state management, and CDN delivery. We ensure sub-1-second load times, smooth 60fps animations, and optimal Core Web Vitals scores (LCP, FID, CLS) for better user experience and SEO rankings.
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:border-teal-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-teal-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🔧</span>
                  <span>Can you redesign or update existing UI interfaces?</span>
                </span>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                Absolutely! Our UI Development Company in Mumbai specializes in UI modernization and redesigns. We audit your existing interface, identify usability issues, and create modern, user-friendly designs. Whether it&apos;s a complete overhaul or incremental improvements, we ensure seamless transitions while maintaining functionality. We&apos;ve successfully redesigned 50+ interfaces with 80% improvement in user satisfaction scores.
              </div>
            </details>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-white text-lg mb-6">Still have questions? We&apos;re here to help!</p>
            <a 
              href="tel:+918369511877" 
              className="inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-2xl mr-3">📞</span>
              <span>Call Now: +91-83695-11877</span>
            </a>
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
              Why Choose a Professional<br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">UI Development Company</span><br />
              <span className="text-4xl md:text-5xl text-gray-800">in Mumbai?</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-semibold mb-4">
              Everything you need to know about <span className="text-blue-600">UI Development</span> services in <span className="text-purple-600">Mumbai</span>
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Professional interface design and development solutions 🚀
            </p>
          </header>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes a Great UI Development Company in Mumbai?</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      A professional <strong>UI Development Company in Mumbai</strong> combines expertise in design principles, user psychology, and modern development technologies to create interfaces that are both beautiful and functional. With over 10+ years of experience and 800+ interfaces built, our <strong>UI Development Company in Mumbai</strong> team understands what it takes to create exceptional user experiences.
                    </p>
                    <p>
                      The best <strong>UI Development Company in Mumbai</strong> doesn&apos;t just make things look pretty - we create interfaces that solve real user problems and drive business results. Our approach combines user research, iterative design, accessibility standards, and performance optimization to deliver interfaces that users love. We&apos;ve helped 150+ Mumbai businesses achieve 60% better engagement and 95% user satisfaction.
                    </p>
                    <p>
                      Our <strong>UI Development Company in Mumbai</strong> expertise extends from custom interface design and responsive layouts to complete design systems and performance optimization. We understand that every business has unique needs, which is why we customize our approach to match your brand, goals, and target audience. Whether you&apos;re a startup or an enterprise, our <strong>UI Development Company in Mumbai</strong> services scale to meet your requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🎨</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Pixel-Perfect Interface Design Excellence</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      As a leading <strong>UI Development Company in Mumbai</strong>, we excel in creating pixel-perfect interface designs that combine aesthetic beauty with functional excellence. Our design process includes comprehensive research, wireframing, high-fidelity mockups, interactive prototypes, and rigorous testing to ensure every element is perfectly crafted.
                    </p>
                    <p>
                      Our <strong>UI Development Company in Mumbai</strong> team has designed interfaces across diverse industries including e-commerce, healthcare, education, finance, and SaaS platforms. We&apos;ve created 800+ interfaces that have served millions of users and generated exceptional results. This extensive experience enables us to anticipate user needs and design solutions that exceed expectations.
                    </p>
                    <p>
                      Every <strong>UI Development Company in Mumbai</strong> project begins with understanding your brand identity, target audience, and business objectives. We create custom color palettes, typography systems, iconography, component designs, and interaction patterns that align perfectly with your brand. Our designs are not just beautiful - they&apos;re strategic tools that drive user engagement and business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 - Services Grid */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🚀</div>
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive UI Development Services</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Responsive Design */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                      <div className="text-3xl mb-3">📱</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Responsive Design</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Our <strong>UI Development Company in Mumbai</strong> creates mobile-first interfaces that work flawlessly across all devices and screen sizes.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-2">
                        <li>• Mobile-first approach</li>
                        <li>• Tablet optimization</li>
                        <li>• Desktop excellence</li>
                        <li>• Flexible grid systems</li>
                      </ul>
                    </div>

                    {/* Design Systems */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                      <div className="text-3xl mb-3">🎯</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Design Systems</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Comprehensive design systems with component libraries, design tokens, and detailed documentation for scalable products.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-2">
                        <li>• Component libraries</li>
                        <li>• Design tokens</li>
                        <li>• Style guides</li>
                        <li>• Documentation</li>
                      </ul>
                    </div>

                    {/* Interactive Elements */}
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                      <div className="text-3xl mb-3">🎭</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Interactive Elements</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Engaging animations and micro-interactions that delight users and enhance the overall experience.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-2">
                        <li>• Micro-interactions</li>
                        <li>• Smooth animations</li>
                        <li>• Hover effects</li>
                        <li>• Page transitions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimization & Speed</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Our <strong>UI Development Company in Mumbai</strong> prioritizes performance optimization to ensure fast-loading, smooth interfaces. We implement code splitting, lazy loading, asset compression, and efficient rendering strategies to achieve lightning-fast load times. Our interfaces consistently score 90+ on Google PageSpeed Insights.
                    </p>
                    <p>
                      As an experienced <strong>UI Development Company in Mumbai</strong>, we understand that performance directly impacts user satisfaction and business metrics. Studies show that 1-second delay in load time can reduce conversions by 7%. We optimize every aspect of your interface - from image compression and font loading to JavaScript bundling and CSS optimization.
                    </p>
                    <p>
                      Our performance-first approach means your interface loads in under 2 seconds on 3G connections and provides 60fps smooth animations. We use modern tools like webpack, Vite, and Next.js to optimize build processes, implement caching strategies, and ensure your interface performs exceptionally well even under heavy traffic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">♿</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessibility & Inclusive Design</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Beyond beautiful aesthetics, our <strong>UI Development Company in Mumbai</strong> ensures your interface is accessible to everyone. We follow WCAG 2.1 Level AA guidelines, implementing proper color contrast (minimum 4.5:1 ratio), keyboard navigation, screen reader support, focus indicators, and semantic HTML to create inclusive experiences.
                    </p>
                    <p>
                      Our <strong>UI Development Company in Mumbai</strong> team conducts thorough accessibility audits using tools like WAVE, axe DevTools, and Lighthouse. We test with actual screen readers (NVDA, JAWS, VoiceOver), keyboard-only navigation, and color blindness simulators to ensure your interface works for all users, including those with disabilities.
                    </p>
                    <p>
                      Accessibility isn&apos;t just about compliance - it&apos;s about expanding your audience and providing excellent user experience for everyone. Our accessible interfaces have helped clients reach 20%+ more users and improve SEO rankings, as search engines favor accessible websites. We make accessibility an integral part of design, not an afterthought.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 - Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Why MyDigital Crown is the Best UI Development Company in Mumbai?
                </h3>
                <p className="text-blue-100 text-lg">
                  Trusted by 150+ businesses across Mumbai and India
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">10+ Years Interface Design Expertise</h4>
                    <p className="text-blue-100">Extensive experience across multiple industries and platforms</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">800+ Interfaces Successfully Built</h4>
                    <p className="text-blue-100">Proven track record of delivering pixel-perfect designs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">95% User Satisfaction Rate</h4>
                    <p className="text-blue-100">Interfaces that users love to interact with</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">60% Better User Engagement</h4>
                    <p className="text-blue-100">Measurable improvements in user interaction and retention</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">100% Mobile Responsive</h4>
                    <p className="text-blue-100">Seamless experience across all devices and screen sizes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">WCAG 2.1 Accessibility Compliance</h4>
                    <p className="text-blue-100">Inclusive design that works for everyone</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Transparent Pricing</h4>
                    <p className="text-blue-100">Clear pricing with no hidden costs or surprises</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">24/7 Support & Maintenance</h4>
                    <p className="text-blue-100">Always available to address your questions and concerns</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+918369511877" 
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-2xl mr-3">📞</span>
                  <span>Call Now: +91-83695-11877</span>
                </a>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-2xl mr-3">🚀</span>
                  <span>Get Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Work with the Best UI Development Company in Mumbai?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let&apos;s create beautiful, high-performing interfaces that your users will love. Get started today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+918369511877" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl mr-3">📞</span>
                <span>Call: +91-83695-11877</span>
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl mr-3">💬</span>
                <span>Get Free Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Create<br />
              <span className="text-yellow-300">Beautiful Interfaces?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our UI experts design and develop stunning interfaces that users will love to interact with!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Start UI Project</span>
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
                <span>UI Development Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>800+ Interfaces Built</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>95% User Satisfaction</span>
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
        currentService="/services/ui-development"
        title="Complete Development Solutions"
        description="Enhance your UI with our comprehensive development and design services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
