import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import TrustedBrands from '@/app/components/TrustedBrands'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Ecommerce Design Mumbai | 150% Higher Conversions | 100+ Stores',
  description: 'Ecommerce Design Mumbai. 150% Higher Conversions | User-Centered UX | Mobile-First Design | 100+ Stores Built. Call +91-83695-11877',
  keywords: ['ecommerce design', 'online store design mumbai', 'shopping cart design', 'ecommerce ux', 'ecommerce website design', 'product page design', 'checkout optimization', 'ecommerce ui design', 'online shop design', 'ecommerce platform design', 'mobile ecommerce design', 'responsive store design', 'shopify design mumbai', 'woocommerce design', 'magento design', 'ecommerce conversion optimization', 'product catalog design', 'shopping experience design', 'ecommerce homepage design', 'category page design', 'filter design ecommerce', 'search functionality design', 'payment page design', 'cart abandonment solution', 'ecommerce branding', 'online retail design', 'fashion ecommerce design', 'electronics store design', 'grocery ecommerce design', 'b2b ecommerce design', 'marketplace design', 'multi-vendor store design', 'ecommerce app design', 'progressive web app ecommerce', 'headless ecommerce design', 'ecommerce redesign mumbai', 'store migration design', 'ecommerce seo design', 'fast loading store', 'secure checkout design', 'trust badge design'],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Ecommerce Design Services',
  classification: 'Online Store Design & UX Optimization',
  alternates: {
    canonical: 'https://www.mydigitalcrown.in/services/ecommerce-design'
  },
  openGraph: {
    title: 'E-commerce Design Services Mumbai | Online Store Design Experts',
    description: 'Professional E-commerce Design. 150% higher conversions, mobile-first design, fast loading. 100+ stores designed. Call +91-83695-11877',
    url: 'https://www.mydigitalcrown.in/services/ecommerce-design',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.mydigitalcrown.in/images/ecommerce-design-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'E-commerce Design Services Mumbai'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Design Services Mumbai | Online Store Experts',
    description: 'Professional E-commerce Design. Higher conversions, mobile-first. Call +91-83695-11877',
    images: ['https://www.mydigitalcrown.in/images/ecommerce-design-mumbai.jpg']
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
}

export default function EcommerceDesignPage() {
  // Enhanced Schema.org structured data for SEO/VSO/ASO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "E-commerce Design Services",
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
            "contactType": "Customer Service"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "165"
        }
      },
      {
        "@type": "Organization",
        "name": "MyDigital Crown",
        "url": "https://www.mydigitalcrown.in"
      },
      {
        "@type": "WebPage",
        "name": "E-commerce Design Services Mumbai",
        "url": "https://www.mydigitalcrown.in/services/ecommerce-design"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mydigitalcrown.in"},
          {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.mydigitalcrown.in/services"},
          {"@type": "ListItem", "position": 3, "name": "E-commerce Design", "item": "https://www.mydigitalcrown.in/services/ecommerce-design"}
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "MyDigital Crown - E-commerce Design Services",
        "telephone": "+91-83695-11877",
        "priceRange": "₹₹"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <noscript>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>E-commerce Design Services in Mumbai - MyDigital Crown</h1>
          <p>Professional E-commerce Design. 150% higher conversions. Call +91-83695-11877</p>
        </div>
      </noscript>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="E-commerce Design Services Mumbai Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s Expert E-commerce Design Agency</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                E-commerce Design In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  🛒 Create Stunning Online Stores with <span className="text-yellow-300">User-Centric Design</span>, <span className="text-green-300">Seamless Checkout</span> & <span className="text-orange-300">Mobile Optimization</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Professional E-commerce Design | Shopping Cart UX | Product Page Optimization
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    <span>Get FREE Design Consultation</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-orange-100 to-white bg-clip-text mb-3">100+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Stores Designed</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-orange-100 to-white bg-clip-text mb-3">150%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Higher Conversions</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-orange-100 to-white bg-clip-text mb-3">Mobile</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">First Design</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-orange-100 to-white bg-clip-text mb-3">24/7</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Support</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About E-commerce Design Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🛍️</span>
              E-commerce Design Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">E-commerce Design</span> Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your online store into a conversion machine with stunning, user-friendly e-commerce design
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                    alt="E-commerce Design Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎨 User-Centric Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  Create intuitive shopping experiences that guide customers from browsing to checkout seamlessly. Beautiful designs that prioritize usability and conversions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Mobile-First Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  70% of e-commerce traffic comes from mobile. Our designs are optimized for smartphones and tablets, ensuring perfect shopping experiences on any device.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Fast Loading Speed</h3>
                <p className="text-gray-700 leading-relaxed">
                  Speed matters! We optimize every element for lightning-fast loading times, reducing bounce rates and increasing sales conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              E-commerce Design <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Everything you need for a successful online store
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🛒</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Shopping Cart Design</h3>
                <p className="text-blue-100 leading-relaxed">
                  Intuitive cart interfaces with easy add/remove functionality, quantity updates, and clear pricing displays.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📦</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Product Page Design</h3>
                <p className="text-blue-100 leading-relaxed">
                  High-converting product pages with stunning imagery, detailed descriptions, reviews, and strategic CTAs.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💳</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Checkout Optimization</h3>
                <p className="text-blue-100 leading-relaxed">
                  Streamlined checkout process with minimal steps, guest checkout, and multiple payment options.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Search & Filter Design</h3>
                <p className="text-blue-100 leading-relaxed">
                  Advanced search functionality with smart filters, autocomplete, and category navigation.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⭐</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Review System Design</h3>
                <p className="text-blue-100 leading-relaxed">
                  Build trust with customer reviews, ratings, and testimonials prominently displayed throughout your store.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">👤</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Account Dashboard</h3>
                <p className="text-blue-100 leading-relaxed">
                  User-friendly account management with order history, wishlist, saved addresses, and preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <ClientSuccessStories />

      {/* Trusted Brands */}
      <TrustedBrands />

      {/* Voice Search Optimization Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Quick Answers for Voice Search
            </h2>
            <p className="text-xl text-gray-600">
              Common e-commerce design questions answered instantly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Where to find e-commerce design experts in Mumbai?</h3>
              <p className="text-gray-700">MyDigital Crown offers professional e-commerce design across Mumbai. We&apos;ve designed 100+ online stores with 150% higher conversions. Mobile-first design, fast loading, secure checkout. Serving all Mumbai areas!</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-lg text-gray-900 mb-3">How much does e-commerce design cost?</h3>
              <p className="text-gray-700">Basic store design: ₹50K-₹1.5L. Advanced store with custom features: ₹2L-₹5L+. Shopify/WooCommerce design: ₹75K-₹2L. Custom platform: ₹3L-₹10L+. Monthly maintenance: ₹10K-₹50K. Free consultation available!</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-lg text-gray-900 mb-3">When will my e-commerce store be ready?</h3>
              <p className="text-gray-700">Timeline: Basic store 3-4 weeks, Medium complexity 6-8 weeks, Custom enterprise store 10-16 weeks. Design phase: 1-2 weeks, Development: 2-6 weeks, Testing: 1 week. Fast-track options available!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <span className="text-2xl mr-3 animate-pulse">❓</span>
              <span className="text-lg">Frequently Asked Questions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Got <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Questions?</span>
              <br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">We&apos;ve Got Answers!</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4"><span className="text-4xl">🛒</span><span>What makes a good e-commerce design?</span></span>
                <svg className="w-7 h-7 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>A good e-commerce design combines <strong>beautiful aesthetics with functionality</strong>. Key elements include: intuitive navigation, high-quality product images, clear CTAs, fast loading speeds (under 3 seconds), mobile-first responsive design, streamlined checkout process, trust signals (reviews, security badges), smart search and filters, and optimized product pages. We focus on user experience that guides customers smoothly from landing to purchase.</p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4"><span className="text-4xl">💰</span><span>How much does e-commerce design cost in Mumbai?</span></span>
                <svg className="w-7 h-7 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <ul className="space-y-2">
                  <li>💎 <strong>Basic Store (Shopify/WooCommerce):</strong> ₹50,000 - ₹1,50,000</li>
                  <li>💎 <strong>Custom Store Design:</strong> ₹2,00,000 - ₹5,00,000</li>
                  <li>💎 <strong>Enterprise E-commerce Platform:</strong> ₹5,00,000 - ₹15,00,000+</li>
                  <li>💎 <strong>Mobile App Design:</strong> ₹3,00,000 - ₹8,00,000</li>
                  <li>💎 <strong>Monthly Maintenance:</strong> ₹10,000 - ₹50,000</li>
                </ul>
                <p className="mt-4">We offer free consultations and customized quotes based on your specific needs!</p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4"><span className="text-4xl">⏱️</span><span>How long does it take to design an e-commerce store?</span></span>
                <svg className="w-7 h-7 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <ul className="space-y-2">
                  <li>⚡ <strong>Basic Shopify/WooCommerce Store:</strong> 3-4 weeks</li>
                  <li>⚡ <strong>Custom Design Store:</strong> 6-8 weeks</li>
                  <li>⚡ <strong>Enterprise E-commerce Platform:</strong> 10-16 weeks</li>
                  <li>⚡ <strong>Design Phase:</strong> 1-2 weeks</li>
                  <li>⚡ <strong>Development & Integration:</strong> 2-6 weeks</li>
                  <li>⚡ <strong>Testing & Launch:</strong> 1-2 weeks</li>
                </ul>
                <p className="mt-4">We offer <strong>fast-track development</strong> options for urgent projects with dedicated resources!</p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4"><span className="text-4xl">📱</span><span>Do you design mobile-first e-commerce stores?</span></span>
                <svg className="w-7 h-7 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4"><strong>Absolutely!</strong> 70% of e-commerce traffic comes from mobile devices. Our mobile-first approach includes:</p>
                <ul className="space-y-2">
                  <li>✓ <strong>Responsive Design:</strong> Perfect display on all screen sizes</li>
                  <li>✓ <strong>Touch-Optimized:</strong> Large buttons, easy navigation</li>
                  <li>✓ <strong>Fast Loading:</strong> Optimized images and code for mobile networks</li>
                  <li>✓ <strong>Mobile Checkout:</strong> One-page checkout, autofill support</li>
                  <li>✓ <strong>PWA Technology:</strong> App-like experience without downloads</li>
                  <li>✓ <strong>Mobile Payment:</strong> UPI, wallets, mobile banking integration</li>
                </ul>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4"><span className="text-4xl">🎨</span><span>Which platforms do you design for?</span></span>
                <svg className="w-7 h-7 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">We design for all major e-commerce platforms:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-bold mb-2">🛒 <strong>SaaS Platforms</strong></div>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Shopify & Shopify Plus</li>
                      <li>• WooCommerce (WordPress)</li>
                      <li>• BigCommerce</li>
                      <li>• Wix E-commerce</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-bold mb-2">⚙️ <strong>Custom Platforms</strong></div>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Magento</li>
                      <li>• Custom PHP/Laravel</li>
                      <li>• React/Next.js Headless</li>
                      <li>• Custom Solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4"><span className="text-4xl">🏆</span><span>Why choose MyDigital Crown for e-commerce design?</span></span>
                <svg className="w-7 h-7 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div>✓ <strong>100+ stores</strong> designed</div>
                    <div>✓ <strong>150% higher</strong> conversions</div>
                    <div>✓ <strong>Mobile-first</strong> design</div>
                    <div>✓ <strong>Fast loading</strong> (under 3s)</div>
                    <div>✓ <strong>SEO-optimized</strong> design</div>
                  </div>
                  <div className="space-y-2">
                    <div>✓ <strong>Secure checkout</strong></div>
                    <div>✓ <strong>Payment gateway</strong> integration</div>
                    <div>✓ <strong>24/7 support</strong></div>
                    <div>✓ <strong>Transparent pricing</strong></div>
                    <div>✓ <strong>Post-launch support</strong></div>
                  </div>
                </div>
                <p className="mt-4">We also offer <Link href="/services/seo" className="text-cyan-300 hover:underline font-semibold">SEO</Link>, <Link href="/services/digital-marketing" className="text-cyan-300 hover:underline font-semibold">digital marketing</Link>, and <Link href="/services/social-media-marketing" className="text-cyan-300 hover:underline font-semibold">social media marketing</Link> to grow your store!</p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4"><span className="text-4xl">🎨</span><span>Can you redesign my existing e-commerce store?</span></span>
                <svg className="w-7 h-7 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Yes! We specialize in e-commerce store redesigns. We&apos;ll analyze your current store, identify conversion barriers, and create a modern design that improves user experience, increases sales, and aligns with your brand. We ensure zero data loss and minimal downtime during the migration process.</p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4"><span className="text-4xl">📱</span><span>Is your e-commerce design mobile-responsive?</span></span>
                <svg className="w-7 h-7 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Absolutely! Every e-commerce design we create is 100% mobile-responsive. With 70%+ of online shopping happening on mobile devices, we use mobile-first design principles to ensure your store looks stunning and functions perfectly on all devices – smartphones, tablets, and desktops.</p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4"><span className="text-4xl">🔒</span><span>Do you integrate payment gateways in e-commerce design?</span></span>
                <svg className="w-7 h-7 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Yes! We integrate all major payment gateways including Razorpay, PayU, Paytm, PhonePe, Google Pay, and international options like Stripe and PayPal. We ensure secure SSL certificates, PCI compliance, and encrypted transactions to protect your customers&apos; financial data and build trust.</p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white">
                <span className="flex items-start gap-4"><span className="text-4xl">⚡</span><span>How long does e-commerce design take?</span></span>
                <svg className="w-7 h-7 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>E-commerce design typically takes 4-8 weeks depending on complexity. This includes: discovery & planning (1 week), design mockups (2-3 weeks), development & integration (2-3 weeks), testing & launch (1 week). We offer expedited timelines for urgent projects with our dedicated team working exclusively on your store.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Launch Your<br />
              <span className="text-yellow-300">Dream E-commerce Store?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get a stunning e-commerce design that converts visitors into loyal customers. Start your project today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Started Now</span>
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
          </div>
        </div>
      </section>

      {/* Related Services */}
      {/* Our Locations */}

      <OurLocations />


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/ecommerce-design"
        title="Complete Digital Marketing Solutions"
        description="Enhance your e-commerce store with our comprehensive digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
