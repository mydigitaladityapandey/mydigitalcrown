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
  title: 'Mobile SEO Mumbai | 95+ Page Speed | Core Web Vitals Expert',
  description: 'Mobile SEO Mumbai. 70% Mobile Traffic Growth | 95+ Page Speed | Core Web Vitals Optimization | AMP & Voice Search. Call +91-83695-11877',
  keywords: [
    'mobile search seo agency in mumbai',
    'mobile seo mumbai',
    'mobile optimization services',
    'page speed optimization mumbai',
    'core web vitals optimization',
    'mobile first indexing mumbai',
    'amp implementation mumbai',
    'responsive design seo',
    'mobile usability testing',
    'voice search optimization mumbai',
    'mobile seo expert mumbai',
    'mobile ranking optimization',
    'mobile site speed mumbai',
    'mobile ux optimization',
    'mobile friendly website',
    'mobile search ranking',
    'google mobile first',
    'mobile page speed',
    'lcp optimization mumbai',
    'fid optimization',
    'cls optimization',
    'mobile conversion optimization',
    'mobile analytics mumbai',
    'mobile seo consultant',
    'mobile traffic optimization',
    'accelerated mobile pages',
    'mobile seo strategy',
    'mobile keyword research',
    'mobile local seo mumbai',
    'mobile ecommerce seo',
    'progressive web app mumbai',
    'mobile seo audit',
    'touch optimization',
    'viewport optimization',
    'mobile search expert',
    'mumbai mobile seo agency'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Mobile SEO Services',
  classification: 'Mobile Search Optimization & Page Speed',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mydigitalcrown.in'),
  alternates: {
    canonical: '/services/mobile-search',
  },
  openGraph: {
    title: 'Mobile Search SEO Agency In Mumbai | #1 Mobile SEO Expert',
    description: '70% Mobile Traffic! Top Mobile Search SEO Agency In Mumbai. Page Speed 95+, Core Web Vitals, AMP, Voice Search.',
    url: 'https://mydigitalcrown.in/services/mobile-search',
    siteName: 'MyDigital Crown',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/mobile-search-seo.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile Search SEO Agency In Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Search SEO Agency In Mumbai | #1 Mobile SEO Expert',
    description: '70% Mobile Traffic! Page Speed 95+, Core Web Vitals, AMP, Voice Search Optimization.',
    images: ['https://mydigitalcrown.in/images/mobile-search-seo.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function MobileSearchPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
        aria-label="Mobile Search SEO Agency Mumbai Hero Section"
      >
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-300 font-semibold">🏆 #1 Mobile Search SEO Agency In Mumbai</span>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Mobile Search SEO Agency In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline with Stats */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  📱 70% Mobile Traffic | ⚡ 95+ Page Speed | 🎯 Top 3 Rankings | 🚀 300% Growth
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Core Web Vitals | AMP | Mobile-First Indexing | Voice Search | Page Speed Optimization
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a 
                  href="tel:+918369511877" 
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl animate-bounce">�</span>
                    <span>Call +91-83695-11877</span>
                  </span>
                </a>
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">�</span>
                    <span>Get Mobile SEO Audit</span>
                  </span>
                </Link>
              </div>
              
              {/* Trust Indicators with ItemList Schema */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white max-w-6xl mx-auto" itemScope itemType="https://schema.org/ItemList">
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl" itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <meta itemProp="position" content="1" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-cyan-100 to-white bg-clip-text mb-3" itemProp="name">70%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Mobile Traffic</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl" itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <meta itemProp="position" content="2" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-cyan-100 to-white bg-clip-text mb-3" itemProp="name">95+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Page Speed Score</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl" itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <meta itemProp="position" content="3" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-cyan-100 to-white bg-clip-text mb-3" itemProp="name">300%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Mobile Growth</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl" itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <meta itemProp="position" content="4" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-cyan-100 to-white bg-clip-text mb-3" itemProp="name">Top 3</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Mobile Rankings</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* VSO Quick Answers Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Answers About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Mobile Search SEO In Mumbai</span>
            </h2>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Answer 1: Where */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all shadow-lg" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3" itemProp="name">
                <span className="text-3xl">📍</span>
                Where to find Mobile SEO expert in Mumbai?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-700 leading-relaxed" itemProp="text">
                  <strong className="text-blue-700">MyDigital Crown in Chembur, Mumbai</strong> - serving Andheri, BKC, Powai, Lower Parel, Thane, Navi Mumbai. 
                  70% mobile traffic optimization, 95+ page speed scores, Core Web Vitals perfection. 
                  Call <strong>+91-83695-11877</strong> for mobile SEO audit.
                </p>
              </div>
            </div>

            {/* Quick Answer 2: Cost */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all shadow-lg" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3" itemProp="name">
                <span className="text-3xl">💰</span>
                How much does mobile SEO cost in Mumbai?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-700 leading-relaxed" itemProp="text">
                  <strong className="text-purple-700">₹40,000-₹1.5 lakh basic optimization</strong> (page speed, responsive design). 
                  Comprehensive mobile SEO: <strong>₹1.5 lakh-₹5 lakh</strong> (Core Web Vitals, AMP, voice search). 
                  Most clients achieve <strong>300% mobile traffic growth</strong> within 3-6 months.
                </p>
              </div>
            </div>

            {/* Quick Answer 3: Timeline */}
            <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-pink-200 hover:border-pink-400 transition-all shadow-lg" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3" itemProp="name">
                <span className="text-3xl">⏰</span>
                How long to see mobile SEO results?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-700 leading-relaxed" itemProp="text">
                  <strong className="text-pink-700">Page speed improvements in 7-14 days</strong>, mobile rankings boost in 4-6 weeks. 
                  Comprehensive mobile optimization shows <strong>significant traffic increase in 2-3 months</strong>. 
                  Average 70% mobile traffic within first quarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Mobile Search Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📱</span>
              Mobile SEO Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mobile Search</span> Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimize for the mobile-first world where 70% of searches happen on smartphones
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop" 
                    alt="Mobile Search Optimization Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Lightning-Fast Mobile</h3>
                <p className="text-gray-700 leading-relaxed">
                  Optimize page speed for mobile devices. Core Web Vitals perfection that Google rewards with higher rankings.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Mobile-First Indexing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Google uses mobile version for ranking. We ensure your mobile site is perfectly optimized for search engines.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Mobile UX Optimization</h3>
                <p className="text-gray-700 leading-relaxed">
                  Superior mobile user experience that converts. Touch-friendly, fast-loading pages that users and Google love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Search Optimization Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Mobile SEO <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive mobile search optimization to dominate mobile rankings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Page Speed Optimization</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Achieve sub-second load times on mobile. Optimize images, code, and caching for blazing speed.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Image Optimization</li>
                  <li className="flex items-start gap-2">✓ Code Minification</li>
                  <li className="flex items-start gap-2">✓ Browser Caching</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Core Web Vitals</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Perfect LCP, FID, and CLS scores. Meet Google&apos;s mobile ranking factors for maximum visibility.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ LCP Optimization</li>
                  <li className="flex items-start gap-2">✓ FID Improvement</li>
                  <li className="flex items-start gap-2">✓ CLS Fixing</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📱</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Responsive Design</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Perfect display on all devices. Mobile-first responsive design that adapts beautifully.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Mobile-First Design</li>
                  <li className="flex items-start gap-2">✓ Viewport Optimization</li>
                  <li className="flex items-start gap-2">✓ Touch-Friendly UI</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎤</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Voice Search Optimization</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Optimize for voice queries and mobile assistants. Capture the growing voice search market.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Natural Language</li>
                  <li className="flex items-start gap-2">✓ Featured Snippets</li>
                  <li className="flex items-start gap-2">✓ FAQ Schema</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚙️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">AMP Implementation</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Accelerated Mobile Pages for instant loading. Get the lightning bolt in mobile search results.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ AMP Setup</li>
                  <li className="flex items-start gap-2">✓ AMP Validation</li>
                  <li className="flex items-start gap-2">✓ AMP Optimization</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Mobile Usability Testing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Comprehensive mobile testing across devices. Fix all mobile usability issues Google detects.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Device Testing</li>
                  <li className="flex items-start gap-2">✓ Google Mobile Test</li>
                  <li className="flex items-start gap-2">✓ UX Improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Optimized */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden" itemScope itemType="https://schema.org/FAQPage">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">❓</span>
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Mobile Search SEO In Mumbai</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about mobile SEO, page speed, Core Web Vitals, and mobile optimization
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 shadow-2xl" itemScope itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-bold text-white mb-0 group-open:mb-4">
                <span itemProp="name">What is mobile search SEO and why is it important?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300">🔽</span>
              </summary>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-bounce" role="img" aria-label="Mobile">📱</div>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-300 leading-relaxed" itemProp="text">
                  <strong className="text-blue-300">Mobile search SEO</strong> is optimizing websites specifically for mobile devices and mobile-first indexing. 
                  It&apos;s critical because <strong>70% of all searches happen on mobile devices</strong>, and Google uses the mobile version of your site for ranking. 
                  Mobile SEO includes <strong>page speed optimization</strong>, Core Web Vitals (LCP, FID, CLS), responsive design, touch-friendly UI, and AMP implementation. 
                  Mumbai businesses need mobile SEO to capture the massive mobile audience and rank higher in local searches.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl" itemScope itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-bold text-white mb-0 group-open:mb-4">
                <span itemProp="name">How much does mobile SEO cost in Mumbai?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300">🔽</span>
              </summary>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-bounce" role="img" aria-label="Cost">💰</div>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-300 leading-relaxed" itemProp="text">
                  Mobile SEO pricing in Mumbai: <strong className="text-cyan-300">Basic mobile optimization: ₹40,000-₹1 lakh</strong> (page speed, responsive design fixes). 
                  Comprehensive mobile SEO: <strong>₹1 lakh-₹3 lakh</strong> (Core Web Vitals, AMP, mobile UX). 
                  Full mobile-first transformation: <strong>₹3 lakh-₹10 lakh+</strong> (progressive web app, advanced optimization). 
                  Most clients achieve <strong className="text-cyan-300">300% mobile traffic growth</strong> within 3-6 months, with 95+ page speed scores.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-indigo-400/50 transition-all duration-300 shadow-2xl" itemScope itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-bold text-white mb-0 group-open:mb-4">
                <span itemProp="name">What are Core Web Vitals and how do they affect mobile SEO?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300">🔽</span>
              </summary>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-bounce" role="img" aria-label="Metrics">📊</div>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-300 leading-relaxed" itemProp="text">
                  <strong className="text-indigo-300">Core Web Vitals</strong> are Google&apos;s mobile user experience metrics: 
                  <strong>LCP (Largest Contentful Paint)</strong> - should be under 2.5 seconds, measures loading speed. 
                  <strong>FID (First Input Delay)</strong> - should be under 100ms, measures interactivity. 
                  <strong>CLS (Cumulative Layout Shift)</strong> - should be under 0.1, measures visual stability. 
                  These are <strong className="text-indigo-300">direct ranking factors</strong> for mobile search. We optimize all three for maximum mobile visibility.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 shadow-2xl" itemScope itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-bold text-white mb-0 group-open:mb-4">
                <span itemProp="name">How long does it take to see mobile SEO results?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300">🔽</span>
              </summary>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-bounce" role="img" aria-label="Time">⏰</div>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-300 leading-relaxed" itemProp="text">
                  <strong className="text-blue-300">Page speed improvements show in 7-14 days</strong> (immediate technical fixes). 
                  Mobile ranking improvements appear in <strong>4-6 weeks</strong> (Google re-crawls and re-indexes). 
                  Comprehensive traffic growth takes <strong>2-3 months</strong> for full impact. 
                  We implement quick wins first (image optimization, caching, minification) while building long-term mobile SEO foundation. 
                  Average results: <strong className="text-blue-300">70% of traffic from mobile</strong> within first quarter.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl" itemScope itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-bold text-white mb-0 group-open:mb-4">
                <span itemProp="name">What is mobile-first indexing and how does it work?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300">🔽</span>
              </summary>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-bounce" role="img" aria-label="Index">🔍</div>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-300 leading-relaxed" itemProp="text">
                  <strong className="text-cyan-300">Mobile-first indexing</strong> means Google primarily uses the mobile version of your website for ranking and indexing. 
                  If your mobile site is poor, your rankings suffer even on desktop. 
                  This requires: <strong>identical content on mobile and desktop</strong>, responsive or separate mobile site, fast mobile page speed, and mobile-friendly navigation. 
                  We ensure your mobile site is <strong className="text-cyan-300">perfectly optimized for Google&apos;s mobile-first crawler</strong>.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-indigo-400/50 transition-all duration-300 shadow-2xl" itemScope itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-bold text-white mb-0 group-open:mb-4">
                <span itemProp="name">What is AMP and should I implement it?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300">🔽</span>
              </summary>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-bounce" role="img" aria-label="AMP">⚡</div>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-300 leading-relaxed" itemProp="text">
                  <strong className="text-indigo-300">AMP (Accelerated Mobile Pages)</strong> are ultra-fast mobile pages that load almost instantly. 
                  Benefits: <strong>lightning bolt in search results</strong>, priority placement in Google News/Top Stories, improved mobile rankings, reduced bounce rate. 
                  Best for: News sites, blogs, content publishers, eCommerce product pages. 
                  We implement <strong className="text-indigo-300">AMP for content-heavy sites</strong> to achieve sub-second mobile load times and maximum mobile visibility.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 shadow-2xl" itemScope itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-bold text-white mb-0 group-open:mb-4">
                <span itemProp="name">How do I improve mobile page speed?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300">🔽</span>
              </summary>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-bounce" role="img" aria-label="Speed">🚀</div>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-300 leading-relaxed" itemProp="text">
                  Mobile page speed optimization: <strong className="text-blue-300">Image optimization</strong> (WebP format, lazy loading, compression), 
                  <strong>code minification</strong> (remove unnecessary CSS/JS), <strong>browser caching</strong> (reduce server requests), 
                  <strong>CDN</strong> (content delivery network for faster loading), server response time optimization, and removing render-blocking resources. 
                  We achieve <strong className="text-blue-300">95+ Google PageSpeed scores</strong> through systematic mobile performance optimization.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl" itemScope itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-bold text-white mb-0 group-open:mb-4">
                <span itemProp="name">What is voice search optimization for mobile?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300">🔽</span>
              </summary>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-bounce" role="img" aria-label="Voice">🎤</div>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-300 leading-relaxed" itemProp="text">
                  <strong className="text-cyan-300">Voice search optimization</strong> targets mobile voice queries (Siri, Google Assistant, Alexa). 
                  Strategies: <strong>natural language content</strong> (conversational phrases), question-based keywords (who, what, where, when), 
                  <strong>featured snippets</strong> (position zero answers), FAQ schema markup, and local optimization. 
                  Critical for Mumbai businesses since <strong className="text-cyan-300">50% of mobile searches are voice queries</strong> in local markets.
                </p>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-indigo-400/50 transition-all duration-300 shadow-2xl" itemScope itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-bold text-white mb-0 group-open:mb-4">
                <span itemProp="name">How do I fix mobile usability issues?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300">🔽</span>
              </summary>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-bounce" role="img" aria-label="Fix">🔧</div>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-300 leading-relaxed" itemProp="text">
                  Common mobile usability fixes: <strong className="text-indigo-300">Touch targets too small</strong> (minimum 48x48px), 
                  text too small to read (minimum 16px font), content wider than screen (viewport issues), 
                  clickable elements too close together, and pop-ups blocking content. 
                  Use <strong>Google Mobile-Friendly Test</strong> and Search Console Mobile Usability report. 
                  We fix all issues to ensure <strong className="text-indigo-300">perfect mobile user experience</strong>.
                </p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 shadow-2xl" itemScope itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-bold text-white mb-0 group-open:mb-4">
                <span itemProp="name">What mobile SEO services do you offer in Mumbai?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300">🔽</span>
              </summary>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-bounce" role="img" aria-label="Services">🎯</div>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-300 leading-relaxed" itemProp="text">
                  Our Mumbai mobile SEO services: <strong className="text-blue-300">Page speed optimization</strong> (95+ scores), 
                  Core Web Vitals perfection (LCP/FID/CLS), responsive design implementation, AMP development, 
                  mobile usability testing, voice search optimization, mobile keyword research, mobile-first content strategy, 
                  mobile analytics tracking, and <strong className="text-blue-300">progressive web app (PWA) development</strong>. 
                  Serving Chembur, Andheri, BKC, Powai, Lower Parel, Thane, Navi Mumbai.
                </p>
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl" itemScope itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-bold text-white mb-0 group-open:mb-4">
                <span itemProp="name">Why choose MyDigital Crown for mobile SEO in Mumbai?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300">🔽</span>
              </summary>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-bounce" role="img" aria-label="Winner">🏆</div>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-300 leading-relaxed" itemProp="text">
                  <strong className="text-cyan-300">Proven results: 70% mobile traffic for Mumbai clients</strong>, 95+ page speed scores guaranteed, 
                  300% average mobile traffic growth. Expertise in <strong>Core Web Vitals, AMP, PWA, voice search</strong>. 
                  Located in Chembur, serving all Mumbai - we understand local mobile search behavior. 
                  Data-driven approach with detailed mobile analytics. 
                  <strong className="text-cyan-300">Free mobile SEO audit</strong> to identify opportunities. Call <strong>+91-83695-11877</strong>.
                </p>
              </div>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-indigo-400/50 transition-all duration-300 shadow-2xl" itemScope itemType="https://schema.org/Question">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-bold text-white mb-0 group-open:mb-4">
                <span itemProp="name">How do I get started with mobile SEO?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300">🔽</span>
              </summary>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-bounce" role="img" aria-label="Start">🚀</div>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-300 leading-relaxed" itemProp="text">
                  Simple process: <strong className="text-indigo-300">Step 1</strong>: Call/WhatsApp <strong>+91-83695-11877</strong> or fill contact form. 
                  <strong className="text-indigo-300">Step 2</strong>: Free mobile SEO audit - we analyze your page speed, Core Web Vitals, mobile usability. 
                  <strong className="text-indigo-300">Step 3</strong>: Receive mobile optimization roadmap with timeline. 
                  <strong className="text-indigo-300">Step 4</strong>: Implementation begins (quick wins in week 1). 
                  <strong className="text-indigo-300">Step 5</strong>: See mobile traffic growth in 4-6 weeks!
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <ClientSuccessStories />

      {/* Trusted Brands */}
      <TrustedBrands />

      {/* Comprehensive Content Section - 1800+ Words */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Understanding Mobile Search SEO */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-6">
                <span className="text-blue-300 font-semibold">💡 Complete Guide</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Understanding <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Mobile Search SEO</span> in Mumbai
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Master mobile-first optimization strategies to dominate search rankings and capture 70%+ of mobile searchers in Mumbai
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-2xl font-bold text-white mb-4">Mobile-First Reality</h3>
                <p className="text-gray-300 leading-relaxed">
                  In 2025, <strong className="text-blue-400">70% of all internet searches happen on mobile devices</strong>. For Mumbai businesses, this percentage reaches 75-80% during peak hours when commuters search on trains, buses, and while walking. If your website isn&apos;t optimized for mobile search, you&apos;re invisible to the majority of potential customers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Mobile-First Indexing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Google&apos;s <strong className="text-purple-400">mobile-first indexing</strong> means the search engine primarily uses the mobile version of your website for ranking and indexing. A slow mobile site or poor mobile UX will tank your rankings across <strong>all devices</strong>, including desktop.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Complete Optimization</h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-pink-400">Mobile Search SEO</strong> encompasses page speed optimization, Core Web Vitals perfection, responsive design, mobile usability, AMP implementation, voice search optimization, and mobile-specific content strategy tailored to on-the-go users.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Mobile SEO Services */}
          <div className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
            <header className="mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4">
                <span className="mr-2">🎯</span>
                Our Mobile SEO Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Mobile Optimization Services</span> in Mumbai
              </h2>
            </header>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-4">⚡</span>
                    1. Page Speed Optimization (₹40,000-₹1.5 Lakh)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-blue-700">Speed is everything on mobile.</strong> We optimize your site to load in under 2 seconds on 3G/4G networks common in Mumbai. 
                    Services include <strong>image optimization</strong> (WebP format, lazy loading, compression to reduce file sizes by 70-80%), 
                    code minification (remove unnecessary CSS, JavaScript, HTML), browser caching (reduce server requests by 60%), 
                    CDN implementation (faster content delivery), and server response time optimization.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Deliverables: <strong>95+ Google PageSpeed score</strong>, detailed performance report, ongoing monitoring, and monthly optimization. 
                    Timeline: <strong>Initial improvements in 7-14 days</strong>, full optimization in 4-6 weeks. 
                    Average results: <strong className="text-blue-700">65% faster load times</strong>, 40% lower bounce rates, 50% higher mobile engagement.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-4">📊</span>
                    2. Core Web Vitals Optimization (₹50,000-₹2 Lakh)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-blue-700">Core Web Vitals are Google&apos;s official ranking factors.</strong> We perfect all three metrics: 
                    <strong>LCP (Largest Contentful Paint)</strong> - optimize to under 2.5 seconds through image optimization, server upgrades, and caching. 
                    <strong>FID (First Input Delay)</strong> - reduce to under 100ms by optimizing JavaScript execution and minimizing main thread work. 
                    <strong>CLS (Cumulative Layout Shift)</strong> - eliminate layout shifts with proper image dimensions, font loading, and ad placement.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We use <strong>real user monitoring (RUM)</strong> to track Core Web Vitals from actual Mumbai users, not just lab tests. 
                    Deliverables: Perfect &quot;Good&quot; scores on all three metrics, Search Console verification, ongoing monitoring. 
                    Impact: <strong className="text-blue-700">Direct ranking improvement</strong>, better mobile user experience, lower bounce rates. 
                    Most sites see <strong>20-40% ranking improvement</strong> for competitive mobile keywords after Core Web Vitals optimization.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-4">📱</span>
                    3. Responsive Design & Mobile UX (₹60,000-₹2.5 Lakh)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-blue-700">Perfect mobile user experience across all devices.</strong> We implement mobile-first responsive design that adapts beautifully to smartphones, tablets, and foldable devices. 
                    Includes: <strong>touch-friendly UI</strong> (minimum 48x48px tap targets), readable text without zooming (16px minimum font size), 
                    viewport optimization (no horizontal scrolling), simplified navigation for mobile, and thumb-friendly button placement.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We conduct <strong>extensive device testing</strong> across iPhone models, Android devices (Samsung, OnePlus, Xiaomi popular in Mumbai), and various screen sizes. 
                    Fix all mobile usability issues flagged in Google Search Console. 
                    Timeline: <strong>Design phase 2-3 weeks</strong>, implementation 4-6 weeks, testing and refinement 2 weeks. 
                    Results: <strong className="text-blue-700">80% reduction in mobile bounce rate</strong>, 2-3x higher mobile conversion rates.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-4">⚡</span>
                    4. AMP Implementation (₹75,000-₹3 Lakh)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-blue-700">Accelerated Mobile Pages (AMP) load almost instantly.</strong> AMP strips unnecessary code to create ultra-fast mobile experiences. 
                    Benefits: <strong>Lightning bolt icon in search results</strong>, priority placement in Google News and Top Stories carousel, 
                    improved mobile rankings, dramatically lower bounce rates (users don&apos;t wait for slow pages), and better Core Web Vitals scores.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Best for: News sites, blogs, content publishers, eCommerce product pages, and any content-heavy sites. 
                    We implement <strong>AMP with analytics tracking</strong>, form functionality, and eCommerce integration. 
                    Setup includes AMP validation, Search Console verification, and ongoing maintenance. 
                    Average load time: <strong className="text-blue-700">Under 1 second on mobile</strong>. 
                    Mumbai publishers using AMP see <strong>200-300% mobile traffic increase</strong> from news and content searches.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-4">🎤</span>
                    5. Voice Search Optimization (₹50,000-₹1.5 Lakh)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-blue-700">50% of mobile searches are voice queries</strong> (Siri, Google Assistant, Alexa). 
                    Voice SEO targets natural language queries: &quot;best pizza near me&quot;, &quot;mobile repair shop in Andheri&quot;, &quot;what time does the store close&quot;. 
                    Strategies: <strong>Conversational content</strong> (how people actually speak), question-based keywords (who, what, where, when, why, how), 
                    featured snippets optimization (position zero answers), FAQ schema markup, and local business optimization.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We optimize for <strong>Mumbai-specific voice queries</strong> including local landmarks, neighborhoods, and Hindi-English mixed queries common in the region. 
                    Implement structured data for better voice assistant compatibility. 
                    Results: <strong className="text-blue-700">Featured snippet placements</strong>, higher &quot;near me&quot; rankings, increased local mobile traffic. 
                    Critical for restaurants, retail stores, services, and local businesses in Mumbai.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-4xl mr-4">🔍</span>
                    6. Mobile Usability Testing & Fixes (₹40,000-₹1 Lakh)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-blue-700">Comprehensive mobile testing across devices and scenarios.</strong> We use Google Mobile-Friendly Test, 
                    Search Console Mobile Usability report, real device testing (iPhone, Android), and user testing with Mumbai audiences. 
                    Fix all issues: <strong>Text too small</strong>, clickable elements too close, content wider than screen, viewport not configured, 
                    incompatible plugins, pop-ups blocking content, and touch target size problems.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Deliverables: <strong>Mobile usability audit report</strong>, prioritized fix list, implementation of all fixes, re-testing and validation. 
                    We ensure compliance with <strong>Google&apos;s mobile-friendly requirements</strong> and best practices. 
                    Timeline: Audit in 1 week, fixes in 2-4 weeks depending on complexity. 
                    Results: <strong className="text-blue-700">100% mobile-friendly status</strong>, removal of Search Console warnings, improved mobile user engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Why Choose Us */}
            <div className="mb-16">
              <header className="mb-8">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4">
                  <span className="mr-2">🏆</span>
                  Why Choose Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Why Mumbai Businesses Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">MyDigital Crown</span> for Mobile SEO
                </h2>
              </header>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                  <div className="text-5xl mb-4">📱</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">70% Mobile Traffic Guaranteed</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-blue-700">Proven track record of driving mobile dominance.</strong> Our Mumbai clients consistently achieve 70%+ of total traffic from mobile sources. 
                    We&apos;ve optimized sites across industries - eCommerce stores handling 80% mobile transactions, local service businesses getting 90% mobile leads, 
                    and content sites with 75% mobile readership. <strong>95+ PageSpeed scores guaranteed</strong>, Core Web Vitals perfection, and dramatic mobile ranking improvements.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-indigo-50 rounded-2xl p-8">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile-First Expertise</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-blue-700">Specialists in mobile-first indexing and optimization.</strong> Deep expertise in Google&apos;s mobile algorithms, 
                    Core Web Vitals optimization, AMP implementation, Progressive Web Apps (PWA), and mobile UX best practices. 
                    We understand Mumbai&apos;s mobile landscape - device preferences (Android dominance), network conditions (3G/4G variations), and local mobile search behavior. 
                    <strong>Data-driven mobile strategies</strong> backed by analytics and continuous testing.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mumbai Market Knowledge</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-blue-700">Located in Chembur, serving all Mumbai</strong> - Andheri, BKC, Powai, Lower Parel, Thane, Navi Mumbai. 
                    We understand local mobile usage patterns: commute-time searches (morning/evening peaks on trains), 
                    lunch-hour local queries, weekend entertainment searches, and festival/event-driven mobile traffic spikes. 
                    Optimize for <strong>Mumbai-specific keywords and voice queries</strong> that drive actual business results.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                  <div className="text-5xl mb-4">💎</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Results-Focused Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-blue-700">ROI-driven mobile SEO with measurable outcomes.</strong> Transparent reporting on mobile traffic, 
                    mobile conversion rates, page speed improvements, and ranking changes. We focus on metrics that matter: 
                    <strong>mobile revenue, mobile leads, mobile conversions</strong> - not vanity metrics. 
                    Free mobile SEO audit shows exactly where you&apos;re losing mobile traffic and how to fix it. 
                    Most clients see <strong>significant mobile traffic increase within 4-6 weeks</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Mobile SEO Process */}
            <div className="mb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
              <header className="mb-12 text-center">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-lg text-white px-6 py-3 rounded-full text-sm font-bold mb-4">
                  <span className="mr-2">⚙️</span>
                  Our Process
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">6-Step Mobile SEO</span> Optimization Process
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  From audit to mobile dominance - a proven methodology delivering 70% mobile traffic
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold mb-3">Step 1: Mobile Audit</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Comprehensive mobile SEO audit: page speed analysis, Core Web Vitals check, mobile usability testing, device compatibility, and competitive mobile benchmarking. 
                    Identify all mobile optimization opportunities. Timeline: <strong>5-7 days</strong>.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <div className="text-5xl mb-4">📋</div>
                  <h3 className="text-2xl font-bold mb-3">Step 2: Strategy Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Custom mobile optimization roadmap: prioritized fixes, page speed improvements, responsive design updates, AMP decision, voice search strategy. 
                    <strong>Traffic projections</strong> showing expected mobile growth. Timeline: <strong>1-2 weeks</strong>.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-3">Step 3: Quick Wins</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Implement <strong>immediate mobile improvements</strong>: image optimization, caching, minification, critical mobile fixes. 
                    See <strong>page speed boost in 7-14 days</strong> while building comprehensive mobile strategy.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <div className="text-5xl mb-4">🔧</div>
                  <h3 className="text-2xl font-bold mb-3">Step 4: Core Implementation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Full mobile optimization</strong>: Core Web Vitals perfection, responsive design, mobile UX improvements, AMP setup if applicable. 
                    Comprehensive mobile-first transformation. Timeline: <strong>4-8 weeks</strong>.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold mb-3">Step 5: Testing & Validation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Extensive mobile testing</strong>: real device testing, Google tools validation, user testing with Mumbai audience, performance monitoring. 
                    Ensure <strong>perfect mobile experience</strong> across all scenarios. Timeline: <strong>2 weeks</strong>.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-3">Step 6: Growth & Optimization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Continuous mobile optimization</strong>: monthly performance reviews, ongoing speed optimization, mobile content strategy, tracking mobile rankings and traffic. 
                    <strong>Sustained mobile growth</strong> over 6-12 months.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Getting Started */}
            <div className="mb-16">
              <header className="mb-8 text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4">
                  <span className="mr-2">🎯</span>
                  Get Started Today
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Dominate Mobile Search</span>?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Join Mumbai businesses achieving 70% mobile traffic, 95+ page speed scores, and 300% mobile growth
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">📞</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Call or WhatsApp</h3>
                  <p className="text-gray-700 mb-4">
                    Speak directly with mobile SEO experts
                  </p>
                  <a href="tel:+918369511877" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg">
                    +91-83695-11877
                  </a>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-indigo-50 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">📧</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
                  <p className="text-gray-700 mb-4">
                    Send your mobile website URL for analysis
                  </p>
                  <a href="mailto:info@mydigitalcrown.in" className="inline-block bg-gradient-to-r from-cyan-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-700 hover:to-indigo-700 transition-all shadow-lg">
                    info@mydigitalcrown.in
                  </a>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Visit Us</h3>
                  <p className="text-gray-700 mb-4">
                    Office in Chembur, serving all Mumbai
                  </p>
                  <p className="text-gray-600 font-semibold">
                    Chembur, Mumbai<br/>Maharashtra - 400071
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  🎁 Free Mobile SEO Audit Worth ₹15,000
                </h3>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                  Get comprehensive mobile analysis: page speed, Core Web Vitals, mobile usability issues, and <strong>actionable recommendations</strong> to achieve 95+ speed scores and 70% mobile traffic. No obligations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+918369511877" className="inline-block bg-white text-blue-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
                    📞 Call for Free Audit
                  </a>
                  <a href="#contact-form" className="inline-block bg-white/20 backdrop-blur-lg text-white border-2 border-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/30 transition-all">
                    💬 Schedule Analysis
                  </a>
                </div>
              </div>

              <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-4xl mb-2">📱</div>
                  <div className="text-3xl font-bold text-blue-700 mb-1">70%</div>
                  <div className="text-gray-600 font-semibold">Mobile Traffic</div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="text-3xl font-bold text-blue-700 mb-1">95+</div>
                  <div className="text-gray-600 font-semibold">Page Speed Score</div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-3xl font-bold text-blue-700 mb-1">300%</div>
                  <div className="text-gray-600 font-semibold">Mobile Growth</div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-4xl mb-2">🏆</div>
                  <div className="text-3xl font-bold text-blue-700 mb-1">Top 3</div>
                  <div className="text-gray-600 font-semibold">Mobile Rankings</div>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
                <p className="text-gray-700 text-lg mb-4">
                  <strong className="text-blue-700">Success Stories:</strong> eCommerce site achieved 95 PageSpeed score and 80% mobile transactions. 
                  Local restaurant increased mobile orders by 200% with voice search optimization. 
                  Content publisher got 300% mobile traffic boost with AMP implementation.
                </p>
                <p className="text-gray-600 italic">
                  &quot;Mobile-first is not the future - it&apos;s the present. Let&apos;s optimize your mobile experience today.&quot; - Aditya Pandey, Mobile SEO Expert
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Dominate<br />
              <span className="text-yellow-300">Mobile Search?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Optimize for mobile-first indexing and capture 70% of all search traffic!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Mobile SEO Audit</span>
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
                <span>Mobile SEO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>95+ Speed Score Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Mobile-First Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {/* Our Locations */}

      <OurLocations />

      {/* Schema Markup - 15+ Types */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://mydigitalcrown.in/services/mobile-search#service",
                "serviceType": "Mobile Search SEO Services",
                "name": "Mobile Search SEO Agency In Mumbai",
                "description": "Top Mobile Search SEO Agency In Mumbai - 70% Mobile Traffic, 95+ Page Speed, Core Web Vitals Optimization, AMP Implementation, Voice Search Optimization, Mobile Usability Testing. Call +91-83695-11877",
                "provider": {
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
                  "name": "Mobile SEO Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Page Speed Optimization",
                        "description": "Optimize mobile page speed to 95+ PageSpeed score with image optimization, code minification, caching, CDN implementation"
                      },
                      "priceSpecification": {
                        "@type": "PriceSpecification",
                        "minPrice": "40000",
                        "maxPrice": "150000",
                        "priceCurrency": "INR"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Core Web Vitals Optimization",
                        "description": "Perfect LCP, FID, CLS metrics for Google ranking factors with comprehensive optimization"
                      },
                      "priceSpecification": {
                        "@type": "PriceSpecification",
                        "minPrice": "50000",
                        "maxPrice": "200000",
                        "priceCurrency": "INR"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Responsive Design & Mobile UX",
                        "description": "Mobile-first responsive design with touch-friendly UI, perfect usability across all devices"
                      },
                      "priceSpecification": {
                        "@type": "PriceSpecification",
                        "minPrice": "60000",
                        "maxPrice": "250000",
                        "priceCurrency": "INR"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "AMP Implementation",
                        "description": "Accelerated Mobile Pages for instant loading and priority Google placement"
                      },
                      "priceSpecification": {
                        "@type": "PriceSpecification",
                        "minPrice": "75000",
                        "maxPrice": "300000",
                        "priceCurrency": "INR"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Voice Search Optimization",
                        "description": "Optimize for 50% mobile voice queries with conversational content and featured snippets"
                      },
                      "priceSpecification": {
                        "@type": "PriceSpecification",
                        "minPrice": "50000",
                        "maxPrice": "150000",
                        "priceCurrency": "INR"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile Usability Testing",
                        "description": "Comprehensive mobile testing, fix all usability issues, achieve 100% mobile-friendly status"
                      },
                      "priceSpecification": {
                        "@type": "PriceSpecification",
                        "minPrice": "40000",
                        "maxPrice": "100000",
                        "priceCurrency": "INR"
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "127",
                  "bestRating": "5",
                  "worstRating": "1"
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
                "@type": "WebPage",
                "@id": "https://mydigitalcrown.in/services/mobile-search#webpage",
                "url": "https://mydigitalcrown.in/services/mobile-search",
                "name": "Mobile Search SEO Agency In Mumbai | #1 Mobile SEO Expert | MyDigital Crown",
                "description": "70% Mobile Traffic! Top Mobile Search SEO Agency In Mumbai. Page Speed 95+, Core Web Vitals, AMP, Voice Search. Call +91-83695-11877",
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://mydigitalcrown.in/#website",
                  "url": "https://mydigitalcrown.in",
                  "name": "MyDigital Crown"
                },
                "about": {
                  "@id": "https://mydigitalcrown.in/services/mobile-search#service"
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200"
                }
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
                    "name": "Mobile Search SEO",
                    "item": "https://mydigitalcrown.in/services/mobile-search"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is mobile search SEO and why is it important?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Mobile search SEO is optimizing websites specifically for mobile devices to rank higher in mobile search results. It's critical because 70% of all internet searches happen on mobile devices, and Google uses mobile-first indexing - meaning the mobile version of your site determines rankings for all devices."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does mobile SEO cost in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Mobile SEO costs in Mumbai range from ₹40,000-₹1 lakh for basic page speed optimization, ₹1-3 lakhs for comprehensive mobile optimization, to ₹3-10+ lakhs for complete mobile transformation with AMP, PWA, and advanced features. Most businesses see 300% mobile traffic growth."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are Core Web Vitals?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Core Web Vitals are Google's official page experience metrics: LCP (Largest Contentful Paint - should be under 2.5 seconds), FID (First Input Delay - under 100ms), and CLS (Cumulative Layout Shift - under 0.1). These are direct ranking factors affecting mobile search positions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to see mobile SEO results?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Mobile page speed improvements show in 7-14 days. Mobile ranking improvements appear in 4-6 weeks. Full mobile traffic growth (70% mobile traffic) typically takes 2-3 months of comprehensive optimization."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is mobile-first indexing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Mobile-first indexing means Google primarily uses the mobile version of your website for ranking and indexing. If your mobile site is slow, broken, or missing content, you'll rank poorly on all devices - even desktop."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is AMP and do I need it?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "AMP (Accelerated Mobile Pages) creates ultra-fast mobile pages that load almost instantly. You get a lightning bolt icon in search results and priority placement in Google News. Best for news sites, blogs, and content publishers."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can I improve mobile page speed?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Improve mobile page speed through image optimization (WebP, lazy loading), code minification (CSS, JavaScript), browser caching, CDN implementation, and server optimization. Aim for 95+ Google PageSpeed score and sub-2-second load times."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is voice search optimization?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Voice search optimization targets natural language queries from mobile assistants (Siri, Google Assistant). 50% of mobile searches are voice queries. Optimize with conversational content, question-based keywords, and featured snippet strategies."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I fix mobile usability issues?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Fix mobile usability issues by ensuring touch targets are 48x48 pixels minimum, using 16px+ font sizes, configuring viewport properly, removing horizontal scrolling, and testing with Google Mobile-Friendly Test."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What mobile SEO services do you offer in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer page speed optimization, Core Web Vitals perfection, responsive design, AMP implementation, voice search optimization, and mobile usability testing across Mumbai - Chembur, Andheri, BKC, Powai, and all areas."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why choose MyDigital Crown for mobile SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "MyDigital Crown guarantees 70% mobile traffic, 95+ PageSpeed scores, and 300% average mobile growth. We're Mumbai-based with proven expertise in Core Web Vitals, AMP, and mobile-first strategies. Free mobile SEO audit included."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I get started with mobile SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Call +91-83695-11877 for a free mobile SEO audit. We analyze your mobile page speed, Core Web Vitals, and usability. Then create a custom roadmap with implementation timeline. Most clients see results within 4-6 weeks."
                    }
                  }
                ]
              },
              {
                "@type": "ItemList",
                "name": "Mobile SEO Service Categories",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Page Speed Optimization"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Core Web Vitals Optimization"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Responsive Design & Mobile UX"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "AMP Implementation"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Voice Search Optimization"
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Mobile Usability Testing"
                  }
                ]
              },
              {
                "@type": "Review",
                "itemReviewed": {
                  "@id": "https://mydigitalcrown.in/services/mobile-search#service"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Rajesh Kumar"
                },
                "reviewBody": "MyDigital Crown transformed our mobile website from 45 to 96 PageSpeed score. Mobile traffic increased from 40% to 78% in just 2 months. Core Web Vitals are now perfect. Best mobile SEO agency in Mumbai!"
              },
              {
                "@type": "HowTo",
                "name": "Mobile SEO Optimization Process",
                "description": "Complete 6-step process to achieve 70% mobile traffic and 95+ page speed scores",
                "totalTime": "P6W",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "INR",
                  "value": "40000"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Mobile Audit",
                    "text": "Comprehensive mobile SEO audit including page speed analysis, Core Web Vitals check, mobile usability testing, and device compatibility assessment",
                    "url": "https://mydigitalcrown.in/services/mobile-search#audit"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Strategy Design",
                    "text": "Custom mobile optimization roadmap with prioritized fixes, page speed improvements, responsive design updates, and AMP decision",
                    "url": "https://mydigitalcrown.in/services/mobile-search#strategy"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Quick Wins",
                    "text": "Implement immediate mobile improvements: image optimization, caching, minification. See page speed boost in 7-14 days",
                    "url": "https://mydigitalcrown.in/services/mobile-search#quick-wins"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Core Implementation",
                    "text": "Full mobile optimization: Core Web Vitals perfection, responsive design, mobile UX improvements, AMP setup. Timeline: 4-8 weeks",
                    "url": "https://mydigitalcrown.in/services/mobile-search#implementation"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Testing & Validation",
                    "text": "Extensive mobile testing: real device testing, Google tools validation, user testing, performance monitoring",
                    "url": "https://mydigitalcrown.in/services/mobile-search#testing"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Growth & Optimization",
                    "text": "Continuous mobile optimization: monthly reviews, ongoing speed optimization, mobile content strategy, sustained growth",
                    "url": "https://mydigitalcrown.in/services/mobile-search#growth"
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": "Complete Guide to Mobile Search SEO in Mumbai",
                "description": "Comprehensive guide covering mobile-first indexing, Core Web Vitals, page speed optimization, AMP, voice search, and mobile usability for Mumbai businesses",
                "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200",
                "author": {
                  "@type": "Person",
                  "name": "Aditya Pandey",
                  "url": "https://mydigitalcrown.in/about"
                },
                "publisher": {
                  "@id": "https://mydigitalcrown.in/#organization"
                },
                "datePublished": "2025-01-15",
                "dateModified": "2025-01-15",
                "wordCount": 1800
              },
              {
                "@type": "LocalBusiness",
                "name": "MyDigital Crown - Mobile SEO Agency Mumbai",
                "image": "https://mydigitalcrown.in/logo.png",
                "@id": "https://mydigitalcrown.in/services/mobile-search#localbusiness",
                "url": "https://mydigitalcrown.in/services/mobile-search",
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
                  "latitude": 19.0626,
                  "longitude": 72.8977
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "10:00",
                  "closes": "19:00"
                },
                "priceRange": "₹₹₹",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "127"
                }
              },
              {
                "@type": "VideoObject",
                "name": "Mobile SEO Optimization Tutorial",
                "description": "Learn how to optimize your website for mobile search with page speed, Core Web Vitals, and mobile usability",
                "thumbnailUrl": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
                "uploadDate": "2025-01-15",
                "duration": "PT15M",
                "contentUrl": "https://mydigitalcrown.in/videos/mobile-seo"
              },
              {
                "@type": "Course",
                "name": "Mobile SEO Mastery Course",
                "description": "Master mobile search optimization, Core Web Vitals, page speed, AMP, and voice search for Mumbai market",
                "provider": {
                  "@id": "https://mydigitalcrown.in/#organization"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "15000",
                  "priceCurrency": "INR"
                }
              },
              {
                "@type": "SpecialAnnouncement",
                "name": "Free Mobile SEO Audit",
                "text": "Get comprehensive mobile analysis: page speed, Core Web Vitals, mobile usability issues, and actionable recommendations worth ₹15,000. No obligations.",
                "datePosted": "2025-01-15",
                "expires": "2025-12-31"
              },
              {
                "@type": "AggregateRating",
                "itemReviewed": {
                  "@id": "https://mydigitalcrown.in/services/mobile-search#service"
                },
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://mydigitalcrown.in/services/mobile-search#service"
                },
                "price": "40000",
                "priceCurrency": "INR",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock",
                "url": "https://mydigitalcrown.in/services/mobile-search",
                "seller": {
                  "@id": "https://mydigitalcrown.in/#organization"
                }
              },
              {
                "@type": "TechArticle",
                "headline": "Understanding Core Web Vitals for Mobile SEO",
                "description": "Technical guide to optimizing LCP, FID, and CLS for mobile-first indexing and improved Google rankings",
                "author": {
                  "@type": "Person",
                  "name": "Aditya Pandey"
                },
                "publisher": {
                  "@id": "https://mydigitalcrown.in/#organization"
                },
                "datePublished": "2025-01-15",
                "proficiencyLevel": "Expert"
              }
            ]
          })
        }}
      />

      {/* Noscript Fallback */}
      <noscript>
        <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f3f4f6' }}>
          <h2>Mobile Search SEO Agency In Mumbai</h2>
          <p>
            <strong>70% Mobile Traffic | 95+ Page Speed | Top Mobile SEO Expert in Mumbai</strong>
          </p>
          <p>
            MyDigital Crown specializes in mobile search optimization: page speed optimization (95+ scores), 
            Core Web Vitals perfection (LCP, FID, CLS), responsive design, AMP implementation, 
            voice search optimization, and mobile usability testing.
          </p>
          <p>
            Services: ₹40,000-₹10+ lakhs | Results: 70% mobile traffic, 300% growth, Top 3 rankings
          </p>
          <p>
            <strong>Call: +91-83695-11877</strong> | Email: info@mydigitalcrown.in
          </p>
          <p>Office: Chembur, Mumbai, Maharashtra - 400071</p>
          <p>
            Serving: Andheri, BKC, Powai, Lower Parel, Thane, Navi Mumbai, and all Mumbai areas
          </p>
        </div>
      </noscript>

      {/* Related Services */}

      <RelatedServices 
        currentService="/services/mobile-search"
        title="Complete Mobile Solutions"
        description="Enhance your mobile presence with our comprehensive SEO and development services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
