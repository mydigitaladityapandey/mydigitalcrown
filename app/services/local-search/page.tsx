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
  title: 'Local Search Mumbai | Google Map Pack Ranking #1 | MyDigital',
  description: 'Top Local Search Company Mumbai. 500+ Businesses #1 in Map Pack | Google Business Profile | Local SEO & Citations. Call +91-83695-11877',
  keywords: [
    'local search company in mumbai',
    'local search services mumbai',
    'local search marketing mumbai',
    'local search agency mumbai',
    'local search optimization',
    'local search experts mumbai',
    'mumbai local search',
    'local search strategy',
    'google local search mumbai',
    'local search rankings',
    'near me optimization',
    'local search visibility',
    'local search consultant mumbai',
    'local business search',
    'google map pack rankings',
    'local search engine optimization',
    'proximity search optimization',
    'neighborhood search mumbai',
    'hyperlocal search',
    'local search advertising',
    'google business profile search',
    'local directory optimization',
    'city-based search mumbai',
    'location-based search',
    'local search presence',
    'geo-targeted search',
    'local search results',
    'mumbai business search',
    'local search visibility mumbai',
    'area-specific search',
    'local search dominance',
    'community search optimization',
    'local search performance',
    'regional search mumbai',
    'local search ranking company',
    'best local search mumbai'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Local Search & Map Pack Ranking Services',
  classification: 'Google Business Profile & Local SEO',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://mydigitalcrown.in/services/local-search'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mydigitalcrown.in/services/local-search',
    title: 'Local Search Company In Mumbai | #1 Local Search Services',
    description: 'Top Local Search Company In Mumbai. 500+ Businesses Ranked #1 in Map Pack. Expert Google Business Profile, Local SEO, Citations.',
    siteName: 'MyDigital Crown',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/local-search-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Local Search Company In Mumbai - MyDigital Crown'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Search Company In Mumbai | Local Search Services',
    description: 'Top Local Search Company In Mumbai. 500+ Businesses Ranked #1 in Map Pack. Expert optimization services.',
    images: ['https://mydigitalcrown.in/images/local-search-og.jpg'],
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  }
}

export default function LocalSearchPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Local Search Marketing Services Mumbai Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s #1 Local Search Experts</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Local Search Company In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  📍 Be Found <span className="text-yellow-300">Locally</span>, <span className="text-green-300">Get Discovered</span> & <span className="text-orange-300">Drive Foot Traffic</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Google My Business | Local SEO | Map Pack Rankings | Citations | Reviews
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
                    <span>Boost Local Visibility</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">500+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Local Businesses</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">#1</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Map Pack Rankings</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">300%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">More Calls</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">5⭐</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Average Rating</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* Voice Search Quick Answers Section (VSO) */}
      <section 
        className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
        aria-label="Voice search optimized answers for local search"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
              <span className="mr-2 text-2xl">🗣️</span>
              <span className="text-white font-bold">Voice Search Optimized Answers</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quick <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Answers</span> You&apos;re Looking For
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get instant answers to your most common local search questions
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Where Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 animate-bounce">📍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Where to get local search services in Mumbai?</h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-cyan-300">MyDigital Crown</strong> in Chembur, Mumbai offers expert local search optimization services. We&apos;re Mumbai&apos;s leading local search company with 500+ businesses ranking #1 in Google Map Pack across the city.
              </p>
              <div className="mt-6 flex items-center text-sm text-cyan-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Mumbai, Maharashtra
              </div>
            </div>

            {/* How Much Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 animate-bounce" style={{animationDelay: '0.2s'}}>💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">How much do local search services cost in Mumbai?</h3>
              <p className="text-gray-300 leading-relaxed">
                Local search optimization in Mumbai ranges from <strong className="text-purple-300">₹15,000 to ₹50,000 per month</strong> depending on business size, competition level, and target areas. We offer customized packages with transparent pricing and guaranteed first page results.
              </p>
              <div className="mt-6 flex items-center text-sm text-purple-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Flexible Pricing Plans
              </div>
            </div>

            {/* When Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 animate-bounce" style={{animationDelay: '0.4s'}}>⏱️</div>
              <h3 className="text-2xl font-bold text-white mb-4">When will I see local search results?</h3>
              <p className="text-gray-300 leading-relaxed">
                Most businesses see <strong className="text-orange-300">Google Map Pack rankings in 2-3 months</strong> and first page organic results in 4-6 months. Our proven strategies deliver 300% average increase in calls and consistent top 3 positions in local search results.
              </p>
              <div className="mt-6 flex items-center text-sm text-orange-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Fast Results Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Local Search Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📍</span>
              Local Search Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Local Search</span> Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dominate local search results and attract nearby customers actively looking for your services
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                    alt="Local Search Marketing Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🗺️ Google Map Pack Dominance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Secure top positions in Google&apos;s local 3-pack. Get featured where customers are actively searching for local businesses.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⭐ Review Management</h3>
                <p className="text-gray-700 leading-relaxed">
                  Build a stellar online reputation with strategic review generation and management. Turn satisfied customers into brand advocates.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Mobile-First Strategy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Capture &quot;near me&quot; searches and mobile users ready to visit. Optimized for the way customers search locally today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Search Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Local Search <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Complete local search optimization to get you found by nearby customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🏢</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Google Business Profile</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Complete optimization of your Google My Business profile. Posts, photos, Q&A, and continuous updates.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Profile Optimization</li>
                  <li className="flex items-start gap-2">✓ Regular Posts</li>
                  <li className="flex items-start gap-2">✓ Photo Management</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Local Citations</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Build consistent NAP citations across top local directories. Strengthen local search signals.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Directory Listings</li>
                  <li className="flex items-start gap-2">✓ NAP Consistency</li>
                  <li className="flex items-start gap-2">✓ Citation Building</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⭐</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Review Generation</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Strategic review generation campaigns. Build a 5-star reputation that attracts customers.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Review Requests</li>
                  <li className="flex items-start gap-2">✓ Response Management</li>
                  <li className="flex items-start gap-2">✓ Reputation Monitoring</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Local SEO</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  On-page optimization for local keywords. Rank for &quot;near me&quot; and location-based searches.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Local Keywords</li>
                  <li className="flex items-start gap-2">✓ Location Pages</li>
                  <li className="flex items-start gap-2">✓ Schema Markup</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Map Pack Rankings</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Strategies to dominate the local 3-pack. Get featured in map results for high-intent searches.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Map Optimization</li>
                  <li className="flex items-start gap-2">✓ Proximity Signals</li>
                  <li className="flex items-start gap-2">✓ Competitive Analysis</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Local Analytics</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Track local search performance, calls, directions, and customer actions from Google My Business.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Insights Tracking</li>
                  <li className="flex items-start gap-2">✓ Call Tracking</li>
                  <li className="flex items-start gap-2">✓ Performance Reports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <ClientSuccessStories />

      {/* Trusted Brands */}
      <TrustedBrands />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Dominate<br />
              <span className="text-yellow-300">Local Search?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get found by nearby customers and drive more foot traffic to your business!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Local SEO Audit</span>
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
                <span>Google Certified Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>500+ Local Businesses Ranked</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Local SEO Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Home Page Format */}
      <section 
        className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden"
        aria-label="Frequently asked questions about local search services"
      >
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Emojis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>💡</div>
          <div className="absolute top-20 right-20 text-6xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🎯</div>
          <div className="absolute bottom-20 left-20 text-6xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>🚀</div>
          <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>📍</div>
          <div className="absolute top-1/2 left-1/3 text-6xl opacity-20 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.2s'}}>⭐</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
              <span className="mr-2 text-2xl animate-pulse">❓</span>
              <span className="text-white font-bold">Frequently Asked Questions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Got <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-pulse">Questions?</span>
              <br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">We&apos;ve Got Answers!</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know about our local search services in Mumbai
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Question 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                  <span>What is local search and why is it important for Mumbai businesses?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Local search refers to Google searches with geographic intent - when customers search for services &quot;near me&quot; or in specific Mumbai locations like &quot;restaurant in Bandra&quot; or &quot;dentist near Andheri.&quot; It&apos;s critical because 46% of all Google searches have local intent, and 78% of mobile local searches result in offline purchases. For Mumbai businesses, ranking in local search means appearing in Google&apos;s Map Pack, Google Business Profile results, and location-based organic listings.</p>
              </div>
            </details>

            {/* Question 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📍</span>
                  <span>How does Google determine local search rankings in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Google uses three main factors for local search rankings: <strong>Relevance</strong> (how well your business matches the search query), <strong>Distance</strong> (proximity to the searcher or search location), and <strong>Prominence</strong> (how well-known and authoritative your business is). This includes your Google Business Profile completeness, review quantity and quality, local citations, on-page SEO, and overall online presence across Mumbai-specific platforms.</p>
              </div>
            </details>

            {/* Question 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🗺️</span>
                  <span>What is the Google Map Pack and how do I rank in it?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>The Google Map Pack (also called Local 3-Pack) is the box showing the top 3 local businesses on Google Search with a map. To rank in it, you need: a verified and optimized Google Business Profile, high-quality reviews (quantity, quality, recency), accurate NAP citations across Mumbai directories, relevant keywords in your profile, proximity to the searcher, and strong local SEO signals. These top 3 positions get 93% of all clicks from local searches.</p>
              </div>
            </details>

            {/* Question 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">⭐</span>
                  <span>How important are Google reviews for local search rankings?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Reviews are THE #1 local search ranking factor. Google prioritizes businesses with high review volume, positive ratings, keyword-rich reviews, and recent activity. Our data shows businesses with 50+ reviews rank 270% higher in Map Pack than those with fewer reviews. Reviews also improve click-through rates by 42% and conversions by 35%. We implement systematic review generation campaigns to build your 5-star reputation across Google, Facebook, and Mumbai-specific platforms.</p>
              </div>
            </details>

            {/* Question 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔍</span>
                  <span>What are &quot;near me&quot; searches and how do I optimize for them?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>&quot;Near me&quot; searches have grown 900% in recent years - when users search &quot;coffee shop near me&quot; or &quot;pharmacy near me&quot; on mobile. To optimize: ensure your Google Business Profile is complete with accurate location, select precise business categories, build location-specific content on your website, optimize for mobile (76% of near me searches are mobile), get listed on local Mumbai directories, and use local schema markup. Distance from the searcher is the key ranking factor.</p>
              </div>
            </details>

            {/* Question 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📱</span>
                  <span>Why is mobile optimization crucial for local search in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>76% of local searches in Mumbai happen on mobile devices, and 88% of mobile local searches result in action within 24 hours (store visit, call, purchase). Mobile users have high commercial intent - they&apos;re searching while commuting, shopping, or actively looking for services. We optimize for: fast mobile loading (under 2 seconds), click-to-call buttons, mobile-friendly forms, responsive design, AMP pages, and voice search queries that dominate mobile local search behavior in Mumbai.</p>
              </div>
            </details>

            {/* Question 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🏆</span>
                  <span>What makes MyDigital Crown the best local search company in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We have 500+ Mumbai businesses ranking #1 in Google Map Pack with 300% average increase in calls and foot traffic. Our team specializes in Mumbai&apos;s hyperlocal dynamics - understanding how Bandra searches differ from Andheri, which local directories matter most, and seasonal search patterns. We offer transparent pricing (₹15k-50k/month), dedicated account managers, 24/7 support, and guaranteed results. Our Mumbai expertise includes deep knowledge of neighborhood competition, local landmarks, and area-specific customer behavior.</p>
              </div>
            </details>

            {/* Question 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">💰</span>
                  <span>What&apos;s included in your local search packages for Mumbai businesses?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Our packages include: Complete Google Business Profile optimization and management, 50+ high-authority local citations on Mumbai directories, review generation and response management, local keyword research (100+ keywords), on-page SEO for local intent, Google Maps optimization, &quot;near me&quot; search optimization, mobile optimization, local content creation, competitor analysis, monthly Map Pack ranking reports, call tracking, and dedicated Mumbai-based support. Custom packages available for multi-location businesses.</p>
              </div>
            </details>

            {/* Question 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🚀</span>
                  <span>How long does it take to see local search results in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Initial improvements in Google Business Profile visibility appear within 2-4 weeks. Google Map Pack rankings typically improve within 2-3 months depending on competition and current position. First page organic local results take 4-6 months for competitive Mumbai keywords. Most clients see measurable increases in profile views, calls, direction requests, and website clicks within the first 60 days. We provide weekly updates and monthly comprehensive reports tracking all local search metrics.</p>
              </div>
            </details>

            {/* Question 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🌟</span>
                  <span>Do you offer local search optimization for multiple Mumbai locations?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Yes! We specialize in multi-location local search for businesses with branches across Mumbai (Andheri, Bandra, Powai, Thane, etc.). Our strategy includes: separate Google Business Profiles for each location with unique optimization, location-specific landing pages on your website, individual citation building for each address, localized content targeting neighborhood keywords, centralized review management, and unified reporting dashboard. Perfect for restaurants, clinics, salons, retail chains, and professional services expanding across Mumbai.</p>
              </div>
            </details>

            {/* Question 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📊</span>
                  <span>How do you track and report local search performance?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We provide comprehensive monthly reports tracking: Google Map Pack rankings for target keywords, organic local search positions, Google Business Profile insights (profile views, search queries, customer actions), call tracking with source attribution, direction requests and website clicks, review growth and rating trends, citation accuracy across directories, and competitive analysis. All data is visualized in easy-to-understand dashboards with actionable insights and ROI calculations showing exactly how local search drives business results.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Content Section 1: Understanding Local Search */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-lg border border-blue-300/20 rounded-full px-6 py-3 mb-6 shadow-xl">
              <span className="mr-2 text-2xl">📚</span>
              <span className="text-blue-300 font-bold">Understanding Local Search</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What is <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Local Search</span> and How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master the fundamentals of local search optimization for Mumbai businesses
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">What is Local Search?</h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-blue-300">Local search</strong> is the process by which Google shows geographically relevant results based on a user&apos;s location and search intent. When someone searches for &quot;coffee shop near me,&quot; &quot;dentist in Andheri,&quot; or &quot;best restaurant Bandra,&quot; they&apos;re performing local searches. Google uses the searcher&apos;s IP address, device location, and search query to display nearby businesses. Local search results appear as the Map Pack (top 3 local businesses with map), local organic results, and Google Business Profile knowledge panels. For Mumbai businesses, dominating local search means capturing customers at the exact moment they&apos;re ready to visit, call, or purchase.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">How Google Ranks Local Searches</h3>
              <p className="text-gray-300 leading-relaxed">
                Google&apos;s local search algorithm considers <strong className="text-purple-300">Relevance, Distance, and Prominence</strong>. Relevance measures how well your business matches the search query through categories, keywords, and descriptions. Distance calculates how close you are to the searcher or the location mentioned in the query - businesses within 1-2km get priority. Prominence measures your overall reputation through reviews, citations, backlinks, and online visibility. Google also factors in click-through rates, user engagement, website quality, and historical performance. The algorithm is constantly evolving to show the most helpful local results to users.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-white mb-4">Benefits of Local Search Dominance</h3>
              <p className="text-gray-300 leading-relaxed">
                Ranking in local search delivers <strong className="text-cyan-300">300% higher conversion rates</strong> than traditional digital marketing because you&apos;re capturing high-intent customers actively searching for your services. Benefits include: increased foot traffic to physical locations, higher call volume from qualified leads, improved brand visibility in your service area, competitive advantage in Mumbai&apos;s crowded market, cost-effective customer acquisition, mobile-first customer capture, and sustainable long-term growth. 93% of users click on Map Pack results, making it the most valuable real estate in local search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2: Local Search Strategies */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-500/10 backdrop-blur-lg border border-purple-300/20 rounded-full px-6 py-3 mb-6 shadow-xl">
              <span className="mr-2 text-2xl">⚙️</span>
              <span className="text-purple-300 font-bold">Local Search Strategies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Proven</span> Local Search Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive approach to dominating local search in Mumbai
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Google Business Profile Mastery</h3>
              <p className="text-gray-300 leading-relaxed">
                Your <strong className="text-purple-300">Google Business Profile</strong> is the foundation of local search success. We optimize every element: accurate business name, address, phone (NAP), primary and secondary categories, complete business description with keywords, high-quality photos (exterior, interior, team, products), regular Google Posts (updates, offers, events), Q&A management, attributes (wheelchair accessible, free Wi-Fi), services menu, booking buttons, and messaging. A 100% complete profile ranks 3x higher than incomplete ones. We update your profile weekly to maintain freshness signals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg border border-pink-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-pink-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Review Generation</h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-pink-300">Reviews are the #1 local ranking factor</strong> and social proof element. Our systematic review generation includes automated email/SMS requests after purchases, QR codes for in-store scanning, review landing pages, follow-up sequences, incentive programs (ethical, compliant), and multi-platform campaigns (Google, Facebook, JustDial). We respond to every review within 24 hours with personalized messages. Target: 10-15 new reviews monthly maintaining 4.5+ star average. Reviews with keywords boost rankings further - we guide customers on what to mention.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg border border-red-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-red-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-white mb-4">Local Citation Building</h3>
              <p className="text-gray-300 leading-relaxed">
                We build <strong className="text-red-300">50+ high-authority citations</strong> across top directories: JustDial, Sulekha, IndiaMART, TimesCity, AskLaila, India.com, and Mumbai-specific platforms. Each citation includes consistent NAP data, business description, categories, photos, and website links. We prioritize industry-relevant directories (Zomato for restaurants, Practo for healthcare) and local Mumbai directories. Citation cleanup removes incorrect listings that hurt rankings. Monthly monitoring ensures NAP consistency across all platforms - even minor discrepancies confuse Google and hurt local rankings.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg border border-orange-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🔑</div>
              <h3 className="text-2xl font-bold text-white mb-4">Local Keyword Optimization</h3>
              <p className="text-gray-300 leading-relaxed">
                We research <strong className="text-orange-300">100+ local keywords</strong> with commercial intent: geo-modified keywords (service + Mumbai location), &quot;near me&quot; searches, neighborhood terms (&quot;Bandra,&quot; &quot;Andheri West&quot;), landmark-based queries (&quot;near Dadar station&quot;), and long-tail local phrases. Keywords are integrated into your Google Business Profile, website location pages, meta tags, content, and structured data. We analyze search volume, competition, and user intent to prioritize keywords that drive actual customers. Voice search optimization captures conversational queries dominating mobile local search.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg border border-yellow-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">On-Page Local SEO</h3>
              <p className="text-gray-300 leading-relaxed">
                Website optimization for <strong className="text-yellow-300">local search intent</strong> includes: location-specific landing pages for each Mumbai neighborhood you serve, local schema markup (LocalBusiness, Service, FAQPage, BreadcrumbList), NAP in footer and contact page, embedded Google Maps, location-specific content answering local questions, local backlinks from Mumbai websites, mobile optimization for &quot;near me&quot; searches, and fast loading speed (under 2 seconds). Every page signals local relevance while providing value to Mumbai customers searching for your services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg border border-green-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Tracking & Reporting</h3>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive <strong className="text-green-300">local search analytics</strong> tracking: Google Map Pack rankings for target keywords, organic local positions, Google Business Profile insights (profile views, search queries, customer actions - calls, directions, website clicks), call tracking with source attribution, review growth and sentiment analysis, citation accuracy monitoring, competitive benchmarking, and conversion tracking. Monthly reports visualize trends, identify opportunities, and demonstrate ROI. Real-time dashboard access shows live data 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 3: Google Search Optimization */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-pink-500/10 backdrop-blur-lg border border-pink-300/20 rounded-full px-6 py-3 mb-6 shadow-xl">
              <span className="mr-2 text-2xl">🗺️</span>
              <span className="text-pink-300 font-bold">Google Search Optimization</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dominate <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Google Search</span> Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete optimization for Map Pack, organic, and voice search
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-900/40 to-orange-900/40 backdrop-blur-lg border border-pink-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-pink-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Map Pack Domination</h3>
              <p className="text-gray-300 leading-relaxed">
                The <strong className="text-pink-300">Google Map Pack</strong> (local 3-pack) gets 93% of clicks from local searches - it&apos;s the most valuable real estate online. To rank here, we optimize all ranking factors: proximity signals through accurate address and service area, relevance through precise category selection and keyword-rich descriptions, prominence through reviews and citations, user engagement through click-through rates and dwell time, and freshness through regular updates. We target high-value keywords where Map Pack appears, analyze competitors ranking in top 3, and implement strategies to outrank them systematically.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-orange-900/40 backdrop-blur-lg border border-orange-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🔊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Voice Search Optimization</h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-orange-300">Voice searches</strong> have grown 900% with &quot;Hey Google&quot; and Siri usage. Voice queries are conversational (&quot;Where&apos;s the best Italian restaurant near me?&quot;) and question-based. We optimize by: creating FAQ content answering common questions, using natural language and long-tail keywords, optimizing for question phrases (who, what, where, when, why, how), ensuring mobile-first design, improving site speed, implementing speakable schema markup, and getting featured snippets (position zero). Voice searches have ultra-high local intent - 58% result in store visits within 24 hours.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-orange-900/40 backdrop-blur-lg border border-red-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-red-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Mobile Local Search</h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-red-300">76% of local searches</strong> happen on mobile devices during commutes, shopping trips, and on-the-go moments. Mobile users have immediate intent - they want quick information, directions, or to call. We optimize for: lightning-fast mobile loading (under 2 seconds), responsive mobile-first design, large tap-friendly buttons (click-to-call, get directions), simplified mobile forms, AMP pages for instant loading, local structured data, and proximity-based targeting. Google prioritizes mobile-optimized sites for mobile searches, especially for competitive Mumbai keywords.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-orange-900/40 backdrop-blur-lg border border-yellow-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🎪</div>
              <h3 className="text-2xl font-bold text-white mb-4">Local Content Strategy</h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-yellow-300">Location-specific content</strong> helps Google understand your local relevance and provides value to Mumbai customers. We create: neighborhood guides (&quot;Best Coffee in Bandra&quot;), local event coverage, Mumbai-specific how-to guides, customer success stories from local clients, area-specific landing pages, local industry insights, and community involvement content. This builds topical authority, earns local backlinks, captures long-tail keywords, and engages local audience. Content is optimized with local keywords, schema markup, and internal linking structure.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-orange-900/40 backdrop-blur-lg border border-green-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold text-white mb-4">Local Link Building</h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-green-300">High-quality local backlinks</strong> boost your authority for Mumbai searches. We acquire links from: Mumbai news sites and blogs, local business associations and chambers of commerce, Mumbai-specific directories, local event sponsorships, partnerships with complementary local businesses, local PR and press releases, guest posts on Mumbai blogs, and community involvement. These geographically relevant links signal local authority to Google. We prioritize quality over quantity - one link from Mumbai Mirror is worth 100 generic links.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-orange-900/40 backdrop-blur-lg border border-teal-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-teal-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Analysis</h3>
              <p className="text-gray-300 leading-relaxed">
                We analyze <strong className="text-teal-300">top 3 competitors</strong> ranking for your target keywords in Mumbai to identify gaps and opportunities. Research includes: their Google Business Profile optimization, review quantity/quality/recency, citation profiles, keyword targeting, content strategy, backlink profiles, and user engagement metrics. We identify weaknesses to exploit and strengths to emulate. Competitive intelligence informs our strategy - understanding what works in your specific Mumbai niche and location gives us the blueprint to outrank them systematically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 4: Why Choose MyDigital Crown */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-green-500/10 backdrop-blur-lg border border-green-300/20 rounded-full px-6 py-3 mb-6 shadow-xl">
              <span className="mr-2 text-2xl">🏆</span>
              <span className="text-green-300 font-bold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">MyDigital Crown</span> for Local Search
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mumbai&apos;s most trusted local search company with proven results
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-900/40 to-cyan-900/40 backdrop-blur-lg border border-green-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-green-300">500+ Mumbai businesses</strong> ranking #1 in Google Map Pack with our local search strategies. Average results: 300% increase in calls, 250% more direction requests, 185% higher foot traffic, and 4.8+ star average rating. We&apos;ve helped restaurants dominate food delivery searches, clinics rank for healthcare queries, salons appear in beauty searches, retail stores capture shopping intent, and professional services win service searches across all Mumbai neighborhoods from South Mumbai to Thane.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-cyan-900/40 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Mumbai Market Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Deep understanding of <strong className="text-cyan-300">Mumbai&apos;s local search landscape</strong> - from hyperlocal competition (Bandra vs Juhu) to neighborhood search patterns (Western Suburbs vs Central). We know which local directories matter most (JustDial dominates, Sulekha for services, Zomato for restaurants), seasonal trends (monsoon vs festival searches), local landmarks that customers use in searches, and area-specific customer behavior. Our Mumbai-based team lives the market daily, giving you unbeatable local intelligence and competitive advantage.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-cyan-900/40 backdrop-blur-lg border border-teal-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-teal-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-white mb-4">Transparent Pricing & ROI</h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-teal-300">No hidden costs or long-term contracts</strong> - just transparent month-to-month pricing from ₹15,000. We provide detailed ROI tracking showing exactly how many customers, calls, and revenue local search generates. Free initial audit worth ₹5,000, competitive Mumbai market pricing, flexible packages for all business sizes, and guaranteed results or money-back policy. See exactly where your investment goes and the measurable returns it generates through comprehensive dashboard and monthly reports.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-cyan-900/40 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Dedicated Account Manager</h3>
              <p className="text-gray-300 leading-relaxed">
                Every client gets a <strong className="text-blue-300">dedicated local search specialist</strong> who knows your business, industry, and goals inside out. Direct WhatsApp/phone access for immediate support, weekly performance check-ins, monthly strategy calls, and proactive optimization recommendations. Your account manager monitors rankings daily, responds to reviews within 24 hours, updates content weekly, and adapts strategy based on performance data. No automated systems or offshore support - real Mumbai-based human expertise focused exclusively on your success.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-cyan-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fast Results & Updates</h3>
              <p className="text-gray-300 leading-relaxed">
                See <strong className="text-purple-300">initial improvements within 2-4 weeks</strong> and consistent monthly progress. We optimize for quick wins (Google Business Profile optimization, citation cleanup, review boost) while building long-term authority through content and links. Real-time ranking tracking with instant alerts for changes, weekly performance email updates, monthly comprehensive reports with insights, and 24/7 client dashboard access. Stay informed about every ranking improvement, new review, and customer action.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-cyan-900/40 backdrop-blur-lg border border-pink-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-pink-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-white mb-4">White-Hat Ethical Practices</h3>
              <p className="text-gray-300 leading-relaxed">
                100% <strong className="text-pink-300">Google-compliant strategies</strong> that build sustainable long-term rankings without risk. No fake reviews, spam citations, keyword stuffing, or black-hat tricks that risk Google penalties. We follow Google&apos;s Search Quality Guidelines religiously, earn reviews organically through ethical campaigns, build real citations on authoritative sites, and create genuine value for users. Your business reputation and long-term success matter more than short-term ranking hacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 5: Mumbai Local Search Advantage */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/10 backdrop-blur-lg border border-orange-300/20 rounded-full px-6 py-3 mb-6 shadow-xl">
              <span className="mr-2 text-2xl">🌆</span>
              <span className="text-orange-300 font-bold">Mumbai Advantage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Mumbai</span> Local Search Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dominate India&apos;s most competitive local search market
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-lg border border-orange-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🏙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Mumbai Market Dynamics</h3>
              <p className="text-gray-300 leading-relaxed">
                Mumbai is <strong className="text-orange-300">India&apos;s most competitive local market</strong> with 20+ million potential customers and intense business competition in every category. Understanding hyperlocal nuances is crucial - Bandra searches differ from Andheri, South Mumbai from Western Suburbs, and Central Mumbai from Thane. We optimize for neighborhood-specific search behavior, local landmarks (Dadar station, Gateway of India), train line proximity (Western, Central, Harbour), area demographics, and seasonal patterns (monsoon, festivals, holiday seasons). This granular Mumbai knowledge separates winners from losers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-lg border border-red-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-red-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Multi-Location Strategy</h3>
              <p className="text-gray-300 leading-relaxed">
                For businesses with <strong className="text-red-300">multiple Mumbai locations</strong>, we create custom strategies for each branch. Separate Google Business Profiles for Andheri, Bandra, Powai, Thane offices optimized individually, location-specific landing pages with unique content, individual citation building for each address, targeted review campaigns per location, and centralized reporting showing performance across all branches. We optimize for cross-location searches (&quot;near Dadar,&quot; &quot;in Western Suburbs&quot;) and manage location-specific competition dynamics.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-lg border border-yellow-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Affordable Mumbai Packages</h3>
              <p className="text-gray-300 leading-relaxed">
                We offer <strong className="text-yellow-300">Mumbai-specific pricing</strong> starting at ₹15,000/month - competitive rates that make sense for local businesses. Packages include: Google Business Profile optimization, 50+ citations, review management, local keyword research, monthly reporting, and dedicated support. Special rates for startups, multi-location businesses, and annual contracts. Transparent pricing with clear deliverables, no hidden fees, and guaranteed ROI that justifies every rupee spent. Flexible month-to-month or discounted annual options available.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-lg border border-green-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Mobile-First Mumbai</h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-green-300">Mumbai is mobile-first</strong> - 82% of local searches happen on mobile during commutes (local trains, metros, buses) and on-the-go shopping. We optimize specifically for mobile: lightning-fast loading under 2 seconds, responsive mobile-first design, large tap-friendly buttons (tap-to-call, get directions), simplified mobile forms, AMP pages for instant loading, and voice search optimization for &quot;Ok Google&quot; queries. Mumbai&apos;s mobile dominance requires specialized strategies we&apos;ve perfected through 500+ successful mobile-first campaigns.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold text-white mb-4">Local Link Network</h3>
              <p className="text-gray-300 leading-relaxed">
                Our <strong className="text-blue-300">Mumbai local link network</strong> includes partnerships with Mumbai Mirror, Mid-Day, TimeOutMumbai, Mumbai Foodie bloggers, local chambers of commerce, and neighborhood websites. We secure high-quality backlinks from authoritative Mumbai sources - Mumbai Press Club, BrihanMumbai Municipal Corporation resources, industry associations, and Mumbai-specific directories. These geographically relevant links significantly boost local authority and are impossible for national competitors to replicate. Local links + local citations + local content = unbeatable Mumbai relevance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Industry-Specific Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized <strong className="text-purple-300">industry knowledge</strong> for Mumbai businesses across sectors: restaurants (Zomato/Swiggy integration, food delivery optimization), healthcare (Practo listings, clinic searches), beauty (UrbanClap, salon near me), real estate (99acres, MagicBricks local optimization), retail (Google Shopping, product searches), professional services (LinkedIn local, B2B searches), and home services (plumber near me, AC repair). We understand category-specific ranking factors, review platforms, customer search behavior, and seasonal patterns unique to each industry in Mumbai&apos;s diverse market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {/* Our Locations */}

      <OurLocations />


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/local-search"
        title="Complete Local Marketing Solutions"
        description="Enhance your local presence with our comprehensive digital marketing services"
        maxServices={6}
      />

      {/* Comprehensive Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "serviceType": "Local Search Optimization Services",
                "provider": {
                  "@type": "Organization",
                  "name": "MyDigital Crown",
                  "url": "https://mydigitalcrown.in"
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
                  "name": "Local Search Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Google Business Profile Optimization",
                        "description": "Complete GMB optimization, posts, photos, Q&A, reviews"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Local Citations Building",
                        "description": "50+ high-authority local directory listings with NAP consistency"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Review Generation & Management",
                        "description": "Automated review campaigns and reputation monitoring"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Map Pack Rankings",
                        "description": "Optimize for Google local 3-pack top positions"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Local Search Analytics",
                        "description": "Track rankings, calls, directions, and conversions"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Near Me Optimization",
                        "description": "Mobile and voice search optimization for local queries"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "Organization",
                "name": "MyDigital Crown",
                "url": "https://mydigitalcrown.in",
                "logo": "https://mydigitalcrown.in/logo.png",
                "description": "Mumbai's leading local search company with 500+ businesses ranked #1 in Google Map Pack",
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
                  "contactType": "sales",
                  "areaServed": "IN",
                  "availableLanguage": ["en", "hi"]
                },
                "sameAs": [
                  "https://www.facebook.com/mydigitalcrown",
                  "https://www.linkedin.com/company/mydigitalcrown",
                  "https://twitter.com/mydigitalcrown"
                ]
              },
              {
                "@type": "WebPage",
                "name": "Local Search Company In Mumbai | MyDigital Crown",
                "description": "Top Local Search Company In Mumbai. 500+ businesses ranked #1. Expert Google Business Profile, Map Pack rankings, citations.",
                "url": "https://mydigitalcrown.in/services/local-search",
                "inLanguage": "en-IN",
                "isPartOf": {
                  "@type": "WebSite",
                  "name": "MyDigital Crown",
                  "url": "https://mydigitalcrown.in"
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
                    "name": "Local Search Company",
                    "item": "https://mydigitalcrown.in/services/local-search"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is local search and why is it important for Mumbai businesses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Local search refers to Google searches with geographic intent - when customers search for services near me or in specific Mumbai locations. It's critical because 46% of all Google searches have local intent, and 78% of mobile local searches result in offline purchases. For Mumbai businesses, ranking in local search means appearing in Google's Map Pack, Google Business Profile results, and location-based organic listings."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does Google determine local search rankings in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Google uses three main factors: Relevance (how well your business matches the search query), Distance (proximity to the searcher), and Prominence (how well-known and authoritative your business is). This includes Google Business Profile completeness, review quantity and quality, local citations, on-page SEO, and overall online presence."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the Google Map Pack and how do I rank in it?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The Google Map Pack (local 3-pack) shows the top 3 local businesses on Google Search with a map. To rank, you need: verified Google Business Profile, high-quality reviews, accurate NAP citations, relevant keywords, proximity to searcher, and strong local SEO signals. These top 3 positions get 93% of all clicks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How important are Google reviews for local search rankings?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Reviews are the #1 local search ranking factor. Google prioritizes businesses with high review volume, positive ratings, and recent activity. Businesses with 50+ reviews rank 270% higher in Map Pack than those with fewer reviews."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What makes MyDigital Crown the best local search company in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We have 500+ Mumbai businesses ranking #1 in Google Map Pack with 300% average increase in calls. Our team specializes in Mumbai's hyperlocal dynamics with deep knowledge of neighborhood competition, local directories, and search patterns. We offer transparent pricing, dedicated account managers, and guaranteed results."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much do local search services cost in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Local search optimization in Mumbai ranges from ₹15,000 to ₹50,000 per month depending on business size, competition level, and target areas. We offer customized packages with transparent pricing and guaranteed first page results."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's included in your local search packages for Mumbai businesses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our packages include: Complete Google Business Profile optimization, 50+ local citations, review management, local keyword research (100+ keywords), on-page SEO, Google Maps optimization, near me optimization, mobile optimization, local content, competitor analysis, monthly reports, call tracking, and dedicated support."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to see local search results in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Initial Google Business Profile improvements appear within 2-4 weeks. Map Pack rankings improve within 2-3 months. First page organic results take 4-6 months. Most clients see measurable increases in calls, directions, and website clicks within 60 days."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer local search optimization for multiple Mumbai locations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! We specialize in multi-location local search with separate Google Business Profiles for each location, location-specific landing pages, individual citation building, localized content, centralized review management, and unified reporting."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why is mobile optimization crucial for local search in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "76% of local searches in Mumbai happen on mobile devices, and 88% result in action within 24 hours. We optimize for fast mobile loading, click-to-call buttons, responsive design, AMP pages, and voice search queries."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you track and report local search performance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We provide monthly reports tracking: Map Pack rankings, organic positions, Google Business Profile insights (views, clicks, calls, directions), review growth, citation accuracy, and competitive analysis with easy-to-understand dashboards and ROI calculations."
                    }
                  }
                ]
              },
              {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "Service",
                    "position": 1,
                    "name": "Google Business Profile Optimization",
                    "description": "Complete profile setup, photos, posts, Q&A, and ongoing management"
                  },
                  {
                    "@type": "Service",
                    "position": 2,
                    "name": "Local Citations Building",
                    "description": "50+ high-authority citations on Mumbai directories"
                  },
                  {
                    "@type": "Service",
                    "position": 3,
                    "name": "Review Generation",
                    "description": "Strategic review campaigns for 5-star reputation"
                  },
                  {
                    "@type": "Service",
                    "position": 4,
                    "name": "Map Pack Rankings",
                    "description": "Optimize for Google local 3-pack top positions"
                  },
                  {
                    "@type": "Service",
                    "position": 5,
                    "name": "Local SEO",
                    "description": "On-page optimization for near me and location searches"
                  },
                  {
                    "@type": "Service",
                    "position": 6,
                    "name": "Local Analytics",
                    "description": "Track rankings, calls, directions, and performance"
                  }
                ]
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Priya Mehta"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": 5,
                  "bestRating": 5
                },
                "reviewBody": "MyDigital Crown transformed our local presence! We went from invisible to #1 in Google Map Pack within 3 months. Phone calls increased 300% and our Bandra location is now fully booked. Best local search investment we made!",
                "datePublished": "2024-02-15"
              },
              {
                "@type": "HowTo",
                "name": "How to Dominate Local Search in Mumbai",
                "description": "Step-by-step process to rank #1 in Google Map Pack and local search results",
                "totalTime": "P3M",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "INR",
                  "value": "15000-50000"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Google Business Profile Setup",
                    "text": "Create and verify your Google Business Profile with accurate NAP, categories, and complete information",
                    "url": "https://mydigitalcrown.in/services/local-search#gmb"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Profile Optimization",
                    "text": "Add high-quality photos, detailed description, services, attributes, and booking options",
                    "url": "https://mydigitalcrown.in/services/local-search#optimization"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Citation Building",
                    "text": "Build 50+ consistent citations on JustDial, Sulekha, and Mumbai-specific directories",
                    "url": "https://mydigitalcrown.in/services/local-search#citations"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Review Generation",
                    "text": "Implement automated review request campaigns to generate 10-15 reviews monthly",
                    "url": "https://mydigitalcrown.in/services/local-search#reviews"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Local Keyword Research",
                    "text": "Research 100+ local keywords including near me searches and neighborhood terms",
                    "url": "https://mydigitalcrown.in/services/local-search#keywords"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "On-Page Local SEO",
                    "text": "Optimize website with location pages, local schema, NAP in footer, and mobile-friendly design",
                    "url": "https://mydigitalcrown.in/services/local-search#onpage"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Local Link Building",
                    "text": "Acquire backlinks from Mumbai local websites, news sites, and industry directories",
                    "url": "https://mydigitalcrown.in/services/local-search#links"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 8,
                    "name": "Track & Optimize",
                    "text": "Monitor Map Pack rankings, GMB insights, calls, and continuously optimize based on data",
                    "url": "https://mydigitalcrown.in/services/local-search#tracking"
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": "Complete Guide to Local Search Optimization for Mumbai Businesses",
                "description": "Expert guide covering local search strategies, Google Business Profile optimization, Map Pack rankings, and dominating local search results in Mumbai",
                "author": {
                  "@type": "Person",
                  "name": "Aditya Pandey"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "MyDigital Crown",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://mydigitalcrown.in/logo.png"
                  }
                },
                "datePublished": "2024-01-01",
                "dateModified": "2024-02-15"
              },
              {
                "@type": "LocalBusiness",
                "name": "MyDigital Crown - Local Search Company Mumbai",
                "image": "https://mydigitalcrown.in/images/office.jpg",
                "@id": "https://mydigitalcrown.in/services/local-search",
                "url": "https://mydigitalcrown.in/services/local-search",
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
                  "latitude": 19.0626,
                  "longitude": 72.8991
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
                  "opens": "10:00",
                  "closes": "19:00"
                },
                "sameAs": [
                  "https://www.facebook.com/mydigitalcrown",
                  "https://www.linkedin.com/company/mydigitalcrown"
                ]
              },
              {
                "@type": "VideoObject",
                "name": "Local Search Services in Mumbai - MyDigital Crown",
                "description": "Learn how our local search services help Mumbai businesses rank #1 in Google Map Pack",
                "thumbnailUrl": "https://mydigitalcrown.in/images/local-search-video-thumb.jpg",
                "uploadDate": "2024-01-01",
                "duration": "PT6M15S",
                "contentUrl": "https://mydigitalcrown.in/videos/local-search-mumbai.mp4"
              },
              {
                "@type": "Course",
                "name": "Local Search Mastery for Mumbai Businesses",
                "description": "Complete course on dominating local search in Mumbai with Google Business Profile optimization and Map Pack rankings",
                "provider": {
                  "@type": "Organization",
                  "name": "MyDigital Crown",
                  "sameAs": "https://mydigitalcrown.in"
                }
              },
              {
                "@type": "SpecialAnnouncement",
                "name": "Free Local Search Audit Offer",
                "text": "Get a FREE comprehensive local search audit worth ₹5,000 for your Mumbai business. Limited time offer - claim now!",
                "datePosted": "2024-01-01",
                "expires": "2024-12-31"
              },
              {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              },
              {
                "@type": "Offer",
                "description": "Professional Local Search optimization packages for Mumbai businesses starting at ₹15,000/month",
                "priceCurrency": "INR",
                "price": "15000",
                "priceValidUntil": "2024-12-31",
                "availability": "https://schema.org/InStock",
                "url": "https://mydigitalcrown.in/services/local-search",
                "seller": {
                  "@type": "Organization",
                  "name": "MyDigital Crown"
                }
              }
            ]
          })
        }}
      />

      {/* Noscript Fallback */}
      <noscript>
        <div style={{ padding: '20px', backgroundColor: '#f3f4f6', textAlign: 'center' }}>
          <h2>Local Search Company In Mumbai - MyDigital Crown</h2>
          <p>
            Mumbai&apos;s leading local search company helping 500+ businesses rank #1 in Google Map Pack.
            We specialize in Google Business Profile optimization, local citations, review management, Map Pack rankings,
            and near me search optimization to drive more customers to your Mumbai business.
          </p>
          <p><strong>Services:</strong> Google Business Profile | Local Citations | Review Management | Map Pack Rankings | Local SEO | Near Me Optimization</p>
          <p><strong>Contact:</strong> +91-83695-11877 | info@mydigitalcrown.in</p>
          <p><strong>Location:</strong> Chembur, Mumbai, Maharashtra - 400071</p>
          <p>
            <strong>Results:</strong> 300% average increase in calls | #1 Map Pack rankings | 250% more direction requests | 
            4.8+ star average rating | 2-3 months to top 3 | Affordable Mumbai pricing from ₹15,000/month
          </p>
        </div>
      </noscript>

      <Footer />
    </>
  )
}
