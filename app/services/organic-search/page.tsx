import { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import TrustedBrands from '@/app/components/TrustedBrands'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Organic SEO Mumbai | 500% Growth | 1000+ Keywords Ranked',
  description: 'Organic SEO Mumbai. 500% Traffic Growth | White-Hat Techniques | 1000+ Keywords Ranked | Sustainable Natural Rankings. Call +91-83695-11877',
  keywords: [
    'organic search seo in mumbai',
    'organic seo mumbai',
    'organic search optimization mumbai',
    'natural seo mumbai',
    'white hat seo mumbai',
    'organic traffic growth mumbai',
    'sustainable seo mumbai',
    'ethical seo services mumbai',
    'organic ranking expert mumbai',
    'natural search optimization',
    'organic seo consultant mumbai',
    'long term seo strategy mumbai',
    'quality backlinks mumbai',
    'organic keyword research',
    'content seo mumbai',
    'organic link building mumbai',
    'mumbai organic seo agency',
    'best organic seo company mumbai',
    'organic seo specialist mumbai',
    'natural ranking services',
    'organic search marketing mumbai',
    'white hat link building',
    'sustainable traffic growth',
    'organic seo expert india',
    'mumbai seo services',
    'andheri organic seo',
    'bandra seo expert',
    'powai organic search',
    'thane organic seo',
    'navi mumbai seo services',
    'bkc organic search expert',
    'mumbai digital marketing seo',
    'organic seo packages mumbai',
    'affordable organic seo mumbai',
    'organic seo roi mumbai',
    'mumbai organic search agency'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Organic SEO Services',
  classification: 'Natural Search Optimization & White-Hat SEO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Organic Search SEO In Mumbai | #1 Organic SEO Expert | MyDigital Crown',
    description: 'Top Organic Search SEO In Mumbai. 500% Traffic Growth, White-Hat Techniques, 1000+ Keywords Ranked. Expert Natural Rankings & Sustainable Growth. Call +91-83695-11877',
    url: 'https://mydigitalcrown.in/services/organic-search',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Organic Search SEO In Mumbai - MyDigital Crown',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organic Search SEO In Mumbai | #1 Organic SEO Expert',
    description: 'Top Organic Search SEO In Mumbai. 500% Traffic Growth, 1000+ Keywords Ranked. Call +91-83695-11877',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop'],
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
  alternates: {
    canonical: 'https://mydigitalcrown.in/services/organic-search',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function OrganicSearchPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden"
        aria-label="Organic Search SEO In Mumbai Hero Section"
      >
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s #1 Organic Search SEO Expert</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Organic Search SEO In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  Expert White-Hat SEO | Natural Rankings | 500% Traffic Growth | 1000+ Keywords Ranked | Sustainable Results
                </h2>
                <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  🌱 Grow Naturally with Ethical SEO Strategies that Deliver Long-term Success
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">🚀</span>
                    <span>Get Free SEO Audit</span>
                  </span>
                </Link>
                <a 
                  href="tel:+918369511877" 
                  className="group relative overflow-hidden bg-white text-green-600 border-4 border-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-green-100 to-white bg-clip-text mb-3">500%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Traffic Growth</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-green-100 to-white bg-clip-text mb-3">1000+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Keywords Ranked</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-green-100 to-white bg-clip-text mb-3">10+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Years Experience</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-green-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">White-Hat SEO</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Voice Search Quick Answers */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4 shadow-lg">
              <span className="mr-2">🎙️</span>
              Voice Search Optimized Answers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Answers About <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Organic Search SEO In Mumbai</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Where */}
            <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Where in Mumbai?</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-green-600">All Mumbai Areas:</strong> Andheri, Bandra, BKC, Powai, Chembur, Thane, Navi Mumbai, Lower Parel, Worli, Malad, Goregaon & across Maharashtra.
              </p>
              <div className="bg-white rounded-xl p-4 border border-green-200">
                <p className="text-sm text-gray-600 mb-2"><strong>Head Office:</strong></p>
                <p className="text-sm text-gray-800">Chembur, Mumbai - 400071</p>
                <p className="text-sm text-green-600 font-semibold mt-2">On-site & Remote SEO Services Available</p>
              </div>
            </div>

            {/* Cost */}
            <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-2xl p-8 border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">How Much Does It Cost?</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="bg-white rounded-lg p-3 border border-emerald-200">
                  <p className="font-semibold text-emerald-600">Startup Package:</p>
                  <p className="text-sm">₹25,000 - ₹40,000/month</p>
                  <p className="text-xs text-gray-600">20 keywords, basic optimization</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-emerald-200">
                  <p className="font-semibold text-emerald-600">Business Package:</p>
                  <p className="text-sm">₹40,000 - ₹75,000/month</p>
                  <p className="text-xs text-gray-600">50 keywords, content creation</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-emerald-200">
                  <p className="font-semibold text-emerald-600">Enterprise Package:</p>
                  <p className="text-sm">₹75,000 - ₹2,00,000+/month</p>
                  <p className="text-xs text-gray-600">100+ keywords, full-service SEO</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 rounded-2xl p-8 border-2 border-teal-200 hover:border-teal-400 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">When See Results?</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="bg-white rounded-lg p-3 border border-teal-200">
                  <p className="font-semibold text-teal-600">Initial Results:</p>
                  <p className="text-sm">1-3 months</p>
                  <p className="text-xs text-gray-600">First keyword rankings visible</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-teal-200">
                  <p className="font-semibold text-teal-600">Significant Growth:</p>
                  <p className="text-sm">3-6 months</p>
                  <p className="text-xs text-gray-600">50-100% traffic increase</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-teal-200">
                  <p className="font-semibold text-teal-600">Peak Performance:</p>
                  <p className="text-sm">6-12 months</p>
                  <p className="text-xs text-gray-600">200-500% traffic growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Organic Search Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🌱</span>
              Sustainable Growth
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Organic Search</span> Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build long-term search visibility with ethical, white-hat SEO strategies that deliver sustainable results
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                    alt="Organic Search Optimization Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Quality Over Quantity</h3>
                <p className="text-gray-700 leading-relaxed">
                  Focus on high-intent keywords that drive qualified traffic and conversions, not just vanity metrics.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📈 Long-term Strategy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sustainable growth through white-hat techniques that build authority and trust with search engines.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ Ethical SEO</h3>
                <p className="text-gray-700 leading-relaxed">
                  Google-approved techniques that protect your site from penalties while delivering lasting results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organic Search Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Organic Search <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive organic SEO strategies to grow your natural search visibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Keyword Research</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  In-depth keyword analysis to identify high-value opportunities with the best ROI potential.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Intent Analysis</li>
                  <li className="flex items-start gap-2">✓ Competitor Research</li>
                  <li className="flex items-start gap-2">✓ Long-tail Keywords</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Content Optimization</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Create and optimize high-quality content that ranks well and provides value to your audience.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ SEO Copywriting</li>
                  <li className="flex items-start gap-2">✓ Content Strategy</li>
                  <li className="flex items-start gap-2">✓ On-page SEO</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔗</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Link Building</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Earn high-quality backlinks from authoritative sites to boost your domain authority naturally.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Quality Backlinks</li>
                  <li className="flex items-start gap-2">✓ Guest Posting</li>
                  <li className="flex items-start gap-2">✓ Digital PR</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚙️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Technical SEO</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Optimize your website&apos;s technical foundation for better crawlability and indexation.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Site Speed Optimization</li>
                  <li className="flex items-start gap-2">✓ Mobile Optimization</li>
                  <li className="flex items-start gap-2">✓ Schema Markup</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Performance Tracking</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Monitor rankings, traffic, and conversions with detailed analytics and reporting.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Rank Monitoring</li>
                  <li className="flex items-start gap-2">✓ Traffic Analysis</li>
                  <li className="flex items-start gap-2">✓ Monthly Reports</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Conversion Optimization</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Turn organic traffic into customers with strategic conversion rate optimization.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Landing Page SEO</li>
                  <li className="flex items-start gap-2">✓ UX Optimization</li>
                  <li className="flex items-start gap-2">✓ A/B Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Floating Emojis */}
        <div className="absolute top-10 left-1/4 text-6xl opacity-20 animate-bounce">🌱</div>
        <div className="absolute top-1/3 right-1/4 text-6xl opacity-20 animate-bounce animation-delay-2000">📈</div>
        <div className="absolute bottom-1/4 left-1/3 text-6xl opacity-20 animate-bounce animation-delay-4000">🎯</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">❓</span>
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything About <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">Organic Search SEO</span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Get answers to common questions about organic search optimization in Mumbai
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Question 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-green-400/50 transition-all duration-300">
              <summary className="cursor-pointer p-6 font-bold text-xl text-white flex justify-between items-center list-none">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  <span>What is Organic Search SEO?</span>
                </span>
                <span className="text-green-400 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="px-6 pb-6 text-green-100 leading-relaxed">
                <p className="mb-3">
                  Organic Search SEO is the practice of optimizing your website to rank naturally in search engine results without paying for ads. It involves white-hat techniques like keyword research, content optimization, technical SEO, and link building to improve your visibility on Google and other search engines.
                </p>
                <p className="mb-3">
                  Unlike paid advertising (PPC), organic search results are earned through quality content, user experience, and authority. This creates sustainable, long-term traffic that doesn&apos;t stop when you stop paying. Organic SEO typically delivers 5-10x higher ROI than paid ads over time.
                </p>
                <p>
                  At MyDigital Crown, we specialize in ethical, Google-approved organic SEO strategies that build lasting search visibility for businesses across Mumbai and Maharashtra.
                </p>
              </div>
            </details>

            {/* Question 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-emerald-400/50 transition-all duration-300">
              <summary className="cursor-pointer p-6 font-bold text-xl text-white flex justify-between items-center list-none">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">💰</span>
                  <span>How much does organic SEO cost in Mumbai?</span>
                </span>
                <span className="text-emerald-400 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="px-6 pb-6 text-green-100 leading-relaxed">
                <p className="mb-3">
                  Organic SEO pricing in Mumbai varies based on your goals, competition level, and campaign scope. Our packages range from ₹25,000/month for startups (20 keywords, basic optimization) to ₹2,00,000+/month for enterprise campaigns (100+ keywords, full-service SEO).
                </p>
                <p className="mb-3">
                  <strong className="text-white">Typical Investment:</strong> ₹40,000-₹75,000/month for most businesses includes keyword research, content creation, technical optimization, link building, and monthly reporting. This delivers 200-500% ROI within 6-12 months.
                </p>
                <p>
                  Unlike PPC where you pay per click forever, organic SEO is a long-term investment. Once you rank, you continue receiving free traffic indefinitely, making it extremely cost-effective over time.
                </p>
              </div>
            </details>

            {/* Question 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-teal-400/50 transition-all duration-300">
              <summary className="cursor-pointer p-6 font-bold text-xl text-white flex justify-between items-center list-none">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">⏱️</span>
                  <span>How long does it take to see organic SEO results?</span>
                </span>
                <span className="text-teal-400 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="px-6 pb-6 text-green-100 leading-relaxed">
                <p className="mb-3">
                  Organic SEO is a long-term strategy. You&apos;ll see initial ranking improvements in 1-3 months, significant traffic growth in 3-6 months, and peak performance in 6-12 months. The exact timeline depends on competition, current site status, and keyword difficulty.
                </p>
                <p className="mb-3">
                  <strong className="text-white">Expected Timeline:</strong> Month 1-2 (technical fixes, content creation), Month 3-4 (first rankings appear), Month 5-6 (50-100% traffic increase), Month 7-12 (200-500% traffic growth).
                </p>
                <p>
                  While slower than PPC, organic SEO delivers compounding returns. Rankings improve over time, and unlike ads, your traffic doesn&apos;t disappear when you stop investing. Most clients see ROI positive results by month 4-6.
                </p>
              </div>
            </details>

            {/* Question 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-green-400/50 transition-all duration-300">
              <summary className="cursor-pointer p-6 font-bold text-xl text-white flex justify-between items-center list-none">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <span>What&apos;s included in organic SEO services?</span>
                </span>
                <span className="text-green-400 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="px-6 pb-6 text-green-100 leading-relaxed">
                <p className="mb-3">
                  Our comprehensive organic SEO services include: (1) In-depth keyword research with intent analysis, (2) Technical SEO audits and fixes, (3) On-page optimization (title tags, meta descriptions, headers, content), (4) High-quality content creation (blogs, landing pages, guides), (5) White-hat link building and digital PR.
                </p>
                <p className="mb-3">
                  <strong className="text-white">Additionally:</strong> Schema markup implementation, mobile optimization, site speed enhancement, competitor analysis, local SEO (Google Business Profile), conversion rate optimization, and detailed monthly reporting with rankings, traffic, and ROI metrics.
                </p>
                <p>
                  We provide a full-service approach covering all aspects of organic search optimization, ensuring sustainable growth through ethical, Google-approved techniques.
                </p>
              </div>
            </details>

            {/* Question 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-emerald-400/50 transition-all duration-300">
              <summary className="cursor-pointer p-6 font-bold text-xl text-white flex justify-between items-center list-none">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <span>What&apos;s the difference between organic and paid search?</span>
                </span>
                <span className="text-emerald-400 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="px-6 pb-6 text-green-100 leading-relaxed">
                <p className="mb-3">
                  <strong className="text-white">Organic Search:</strong> Free, earned rankings through SEO optimization. Appears in main search results below ads. Takes 3-6 months to build, but delivers sustainable traffic. Higher trust and click-through rates (70% of users prefer organic results). 5-10x better long-term ROI.
                </p>
                <p className="mb-3">
                  <strong className="text-white">Paid Search (PPC):</strong> Pay-per-click advertising. Instant visibility but traffic stops when you stop paying. Appears at top with &apos;Ad&apos; label. Lower trust and click-through rates. Better for short-term campaigns and testing.
                </p>
                <p>
                  Best strategy: Combine both. Use PPC for immediate results while building organic rankings. Once organic traffic grows, reduce PPC spend for maximum ROI. Most successful businesses invest 70% in organic, 30% in paid.
                </p>
              </div>
            </details>

            {/* Question 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-teal-400/50 transition-all duration-300">
              <summary className="cursor-pointer p-6 font-bold text-xl text-white flex justify-between items-center list-none">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🔒</span>
                  <span>Do you use white-hat or black-hat SEO techniques?</span>
                </span>
                <span className="text-teal-400 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="px-6 pb-6 text-green-100 leading-relaxed">
                <p className="mb-3">
                  We exclusively use <strong className="text-white">white-hat, Google-approved SEO techniques</strong>. This means all our strategies comply with search engine guidelines, ensuring your website is protected from penalties and algorithm updates. We never use risky tactics like keyword stuffing, link farms, cloaking, or private blog networks.
                </p>
                <p className="mb-3">
                  <strong className="text-white">Our Ethical Approach:</strong> Natural keyword usage, high-quality content creation, genuine backlinks from authoritative sites, technical optimization following best practices, and user-focused strategies that provide real value.
                </p>
                <p>
                  Black-hat techniques might offer quick wins but lead to severe Google penalties, traffic loss, and permanent damage to your online reputation. We build sustainable rankings that grow stronger over time, not temporary shortcuts that put your business at risk.
                </p>
              </div>
            </details>

            {/* Question 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-green-400/50 transition-all duration-300">
              <summary className="cursor-pointer p-6 font-bold text-xl text-white flex justify-between items-center list-none">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <span>Why choose MyDigital Crown for organic SEO in Mumbai?</span>
                </span>
                <span className="text-green-400 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="px-6 pb-6 text-green-100 leading-relaxed">
                <p className="mb-3">
                  MyDigital Crown is Mumbai&apos;s leading organic SEO agency with 10+ years of experience and 300+ successful campaigns. We&apos;ve helped businesses achieve an average 500% traffic growth and rank for 1000+ competitive keywords across industries.
                </p>
                <p className="mb-3">
                  <strong className="text-white">What Sets Us Apart:</strong> (1) Proven track record with 95% client retention, (2) Google-certified SEO experts, (3) Transparent reporting with real-time dashboards, (4) 100% white-hat techniques, (5) Dedicated account managers, (6) Mumbai-based team with local market expertise.
                </p>
                <p>
                  We combine technical excellence with content quality and strategic thinking. Our data-driven approach ensures every rupee invested delivers measurable ROI. Call +91-83695-11877 for a free SEO audit and custom strategy.
                </p>
              </div>
            </details>

            {/* Question 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-emerald-400/50 transition-all duration-300">
              <summary className="cursor-pointer p-6 font-bold text-xl text-white flex justify-between items-center list-none">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span>Can you help recover from Google penalty?</span>
                </span>
                <span className="text-emerald-400 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="px-6 pb-6 text-green-100 leading-relaxed">
                <p className="mb-3">
                  Yes! We specialize in Google penalty recovery services. Whether you&apos;ve been hit by a manual action or algorithmic penalty (Panda, Penguin, Core Updates), we can diagnose the issue and create a recovery plan. Our success rate for penalty recovery is over 85%.
                </p>
                <p className="mb-3">
                  <strong className="text-white">Recovery Process:</strong> (1) Comprehensive audit to identify penalty cause, (2) Remove or disavow toxic backlinks, (3) Fix thin or duplicate content, (4) Clean up technical SEO issues, (5) Submit reconsideration request (manual penalties), (6) Rebuild with white-hat techniques.
                </p>
                <p>
                  Recovery timeline: 2-3 months for algorithmic penalties (waiting for Google crawl), 1-2 months for manual actions (faster with reconsideration). Post-recovery, we implement protective monitoring to prevent future penalties.
                </p>
              </div>
            </details>

            {/* Question 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-teal-400/50 transition-all duration-300">
              <summary className="cursor-pointer p-6 font-bold text-xl text-white flex justify-between items-center list-none">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">👥</span>
                  <span>What industries do you serve for organic SEO?</span>
                </span>
                <span className="text-teal-400 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="px-6 pb-6 text-green-100 leading-relaxed">
                <p className="mb-3">
                  We provide organic SEO services across all industries in Mumbai and India: E-commerce (Shopify, WooCommerce, Magento), Healthcare (hospitals, clinics, telemedicine), Real Estate (developers, brokers, portals), Education (schools, coaching, e-learning), Finance (banks, fintech, insurance).
                </p>
                <p className="mb-3">
                  <strong className="text-white">Also:</strong> Manufacturing, B2B services, SaaS companies, hospitality and travel, legal services, automotive, fashion and lifestyle, food and restaurants, IT and technology, professional services (CA, lawyers, consultants).
                </p>
                <p>
                  Each industry requires unique SEO strategies. We customize keyword research, content approach, and link building tactics based on your specific market, competition, and target audience behavior. Our industry expertise ensures faster results and higher ROI.
                </p>
              </div>
            </details>

            {/* Question 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-green-400/50 transition-all duration-300">
              <summary className="cursor-pointer p-6 font-bold text-xl text-white flex justify-between items-center list-none">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🎪</span>
                  <span>Do you provide local SEO for Mumbai businesses?</span>
                </span>
                <span className="text-green-400 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="px-6 pb-6 text-green-100 leading-relaxed">
                <p className="mb-3">
                  Absolutely! Local SEO is a core part of our organic search services. We help Mumbai businesses dominate local search results and Google Maps rankings. This includes Google Business Profile optimization, local citations (JustDial, Sulekha, IndiaMART), location-based content, and local link building.
                </p>
                <p className="mb-3">
                  <strong className="text-white">Local SEO Benefits:</strong> Rank for &apos;near me&apos; searches, appear in Google&apos;s Local Pack (top 3 map results), attract nearby customers ready to buy, build local authority and trust, outrank national competitors in your area.
                </p>
                <p>
                  Our local SEO campaigns average 300-400% increase in local search visibility within 3-6 months. Perfect for restaurants, retail stores, service businesses, medical practices, and any business targeting customers in specific Mumbai areas like Andheri, Bandra, Powai, or Thane.
                </p>
              </div>
            </details>

            {/* Question 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-emerald-400/50 transition-all duration-300">
              <summary className="cursor-pointer p-6 font-bold text-xl text-white flex justify-between items-center list-none">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">📈</span>
                  <span>How do you measure organic SEO success?</span>
                </span>
                <span className="text-emerald-400 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="px-6 pb-6 text-green-100 leading-relaxed">
                <p className="mb-3">
                  We track comprehensive metrics to measure organic SEO success: (1) Keyword Rankings - position improvements for target keywords, (2) Organic Traffic - Google Analytics sessions and users from organic search, (3) Conversions - leads, sales, form fills, calls from organic traffic, (4) ROI - revenue generated vs investment.
                </p>
                <p className="mb-3">
                  <strong className="text-white">Additional Metrics:</strong> Domain Authority (DA) growth, quality backlink acquisition, page load speed, Core Web Vitals scores, engagement metrics (bounce rate, time on site), search visibility percentage, and competitive positioning.
                </p>
                <p>
                  You receive detailed monthly reports with all these metrics, plus strategic recommendations. We provide real-time access to Google Analytics and Search Console dashboards so you can track progress 24/7. Our goal: measurable business results, not just vanity metrics.
                </p>
              </div>
            </details>

            {/* Question 12 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-teal-400/50 transition-all duration-300">
              <summary className="cursor-pointer p-6 font-bold text-xl text-white flex justify-between items-center list-none">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span>How do I get started with organic SEO?</span>
                </span>
                <span className="text-teal-400 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="px-6 pb-6 text-green-100 leading-relaxed">
                <p className="mb-3">
                  Getting started is easy! Call us at <strong className="text-white">+91-83695-11877</strong> or email <strong className="text-white">info@mydigitalcrown.in</strong> to schedule a free 30-minute consultation. We&apos;ll discuss your business goals, target audience, and competition.
                </p>
                <p className="mb-3">
                  <strong className="text-white">Next Steps:</strong> (1) Free SEO audit of your current website, (2) Custom strategy presentation with timeline and expected results, (3) Transparent pricing proposal (no hidden costs), (4) Once approved, we start immediately with quick wins.
                </p>
                <p>
                  You can also visit our office in Chembur, Mumbai for face-to-face consultation. We serve clients across Mumbai (Andheri, Bandra, BKC, Powai, Thane, Navi Mumbai) and all of India. Start your organic SEO journey today and watch your traffic grow sustainably!
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <ClientSuccessStories />

      {/* Comprehensive Content Section - 1800+ Words */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section 1: Understanding Organic Search SEO */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
                <span className="mr-2">🌱</span>
                Understanding Organic Search
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Organic Search SEO</span> is Essential for Mumbai Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                In today&apos;s digital landscape, organic search is the foundation of sustainable online growth and long-term business success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-700/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Sustainable Traffic</h3>
                <p className="text-gray-300 leading-relaxed">
                  Unlike paid advertising that stops when your budget runs out, organic SEO delivers continuous free traffic 24/7. Once you rank for valuable keywords, you receive qualified visitors indefinitely without ongoing advertising costs. This creates a compound growth effect where your visibility and authority increase over time.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Higher ROI</h3>
                <p className="text-gray-300 leading-relaxed">
                  Organic search delivers 5-10x better return on investment compared to paid advertising over the long term. While PPC requires continuous spending, organic rankings provide free clicks forever. Studies show organic search drives 53% of all website traffic and generates significantly higher conversion rates than paid channels.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-900/50 to-cyan-900/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-700/30 hover:border-teal-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Trust & Authority</h3>
                <p className="text-gray-300 leading-relaxed">
                  70% of users prefer clicking organic results over paid ads. High organic rankings signal credibility, expertise, and trustworthiness to potential customers. When you consistently appear on page one for industry keywords, you establish your brand as an authority, leading to higher conversion rates and customer lifetime value.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-700/30">
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                For Mumbai businesses, organic search is particularly critical due to intense local competition and price-conscious consumers. Whether you&apos;re targeting customers in Andheri, Bandra, BKC, Powai, or across Maharashtra, appearing on Google&apos;s first page for relevant searches is essential for growth.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                The Mumbai market is highly digital-savvy with over 12 million internet users actively searching for products and services daily. Capturing even a small percentage of this organic search traffic can transform your business. Our organic SEO strategies are specifically designed for the Mumbai market, considering local search behavior, competition levels, and industry dynamics.
              </p>
            </div>
          </div>

          {/* Section 2: Comprehensive Organic SEO Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Comprehensive Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end organic SEO solutions designed to maximize your search visibility and drive sustainable growth
              </p>
            </div>

            <div className="space-y-8">
              {/* Service 1 */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-700/30 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-4xl">01</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">Strategic Keyword Research & Analysis</h3>
                    <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                      <strong className="text-green-400">Investment:</strong> ₹15,000 - ₹40,000 (one-time or included in monthly) | <strong className="text-green-400">Timeline:</strong> 1-2 weeks
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Our keyword research goes beyond basic search volume analysis. We conduct deep intent analysis to identify keywords that drive actual conversions, not just traffic. Using advanced tools like Ahrefs, SEMrush, and Google Keyword Planner, we analyze search volume, keyword difficulty, competition levels, and commercial intent.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      <strong className="text-white">Our Process:</strong> We start by understanding your business goals, target audience, and unique value proposition. Then we analyze competitor rankings, identify keyword gaps, and uncover untapped opportunities. We categorize keywords by buyer journey stage (awareness, consideration, decision) to create targeted content strategies.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We focus on a balanced mix of high-volume competitive keywords (long-term targets), medium-competition keywords (3-6 month wins), and long-tail keywords (quick wins). For Mumbai businesses, we also include location-based keywords (e.g., &quot;organic SEO services in Andheri&quot;) and &apos;near me&apos; search optimization.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-green-900/30 rounded-lg p-4 border border-green-700/30">
                        <p className="text-green-400 font-semibold mb-2">Deliverables</p>
                        <p className="text-sm text-gray-300">200+ keyword opportunities, priority matrix, competitive analysis report</p>
                      </div>
                      <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-700/30">
                        <p className="text-emerald-400 font-semibold mb-2">Expected Results</p>
                        <p className="text-sm text-gray-300">50-100 rankable keywords identified, clear content roadmap</p>
                      </div>
                      <div className="bg-teal-900/30 rounded-lg p-4 border border-teal-700/30">
                        <p className="text-teal-400 font-semibold mb-2">Success Metrics</p>
                        <p className="text-sm text-gray-300">Keyword opportunity score, estimated traffic potential, ROI projection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-4xl">02</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">Technical SEO Optimization</h3>
                    <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                      <strong className="text-emerald-400">Investment:</strong> ₹30,000 - ₹1,00,000 (one-time) | <strong className="text-emerald-400">Timeline:</strong> 2-4 weeks
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Technical SEO is the foundation that allows search engines to crawl, index, and rank your website efficiently. We conduct comprehensive technical audits using tools like Screaming Frog, Google Search Console, and PageSpeed Insights to identify and fix critical issues that prevent optimal performance.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      <strong className="text-white">What We Fix:</strong> Site speed optimization (target &lt;3 second load time), mobile responsiveness and Core Web Vitals (LCP, FID, CLS), XML sitemap creation and submission, robots.txt optimization, canonical tag implementation to prevent duplicate content, structured data (schema markup) for rich snippets, HTTPS security implementation, 404 error fixes and redirect management.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We optimize your site architecture for better crawlability, implement breadcrumb navigation, fix broken links, and ensure proper URL structure. For international businesses, we set up hreflang tags for multi-language targeting. We also optimize images (compression, lazy loading, alt tags) and implement browser caching for faster load times.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-700/30">
                        <p className="text-emerald-400 font-semibold mb-2">Performance Boost</p>
                        <p className="text-sm text-gray-300">40-60% faster page load, 90+ PageSpeed score</p>
                      </div>
                      <div className="bg-teal-900/30 rounded-lg p-4 border border-teal-700/30">
                        <p className="text-teal-400 font-semibold mb-2">Indexation Improvement</p>
                        <p className="text-sm text-gray-300">100% of important pages indexed, crawl budget optimized</p>
                      </div>
                      <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-700/30">
                        <p className="text-cyan-400 font-semibold mb-2">Ranking Impact</p>
                        <p className="text-sm text-gray-300">10-30% ranking improvement from technical fixes alone</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-700/30 hover:border-teal-500/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-4xl">03</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">High-Quality Content Creation & Optimization</h3>
                    <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                      <strong className="text-teal-400">Investment:</strong> ₹8,000 - ₹25,000 per content piece | <strong className="text-teal-400">Timeline:</strong> Ongoing monthly
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Content is the primary ranking factor for organic search. We create SEO-optimized, human-written content that satisfies search intent while incorporating target keywords naturally. Our content strategy focuses on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) to align with Google&apos;s quality guidelines.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      <strong className="text-white">Content Types:</strong> Comprehensive blog posts (1500-3000 words) targeting informational keywords, landing pages optimized for commercial keywords, product/service pages with detailed descriptions and reviews, ultimate guides and pillar content for topic authority, FAQs and comparison articles for long-tail keywords.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Each piece includes strategic keyword placement (title tag, H1, first paragraph, naturally throughout), semantic keywords and LSI terms for topical relevance, internal linking to build site authority, compelling meta descriptions for higher CTR, and structured data markup where applicable. We also optimize existing content to improve underperforming pages.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-teal-900/30 rounded-lg p-4 border border-teal-700/30">
                        <p className="text-teal-400 font-semibold mb-2">Monthly Output</p>
                        <p className="text-sm text-gray-300">8-12 high-quality articles, 20-30 optimized pages</p>
                      </div>
                      <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-700/30">
                        <p className="text-cyan-400 font-semibold mb-2">Ranking Potential</p>
                        <p className="text-sm text-gray-300">Each piece targets 3-5 keywords, 60-80% ranking success rate</p>
                      </div>
                      <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-700/30">
                        <p className="text-blue-400 font-semibold mb-2">Traffic Growth</p>
                        <p className="text-sm text-gray-300">50-100% organic traffic increase within 6 months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 4 */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-4xl">04</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">White-Hat Link Building & Digital PR</h3>
                    <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                      <strong className="text-cyan-400">Investment:</strong> ₹20,000 - ₹75,000/month | <strong className="text-cyan-400">Timeline:</strong> Ongoing, 10-30 links/month
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Backlinks remain one of Google&apos;s top three ranking factors. We build high-quality, relevant backlinks from authoritative websites using 100% white-hat techniques that comply with Google&apos;s Webmaster Guidelines. Our link building focuses on quality over quantity, earning links that genuinely improve your domain authority.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      <strong className="text-white">Our Link Building Strategy:</strong> Guest posting on industry-relevant high-DA websites (DA 40-80+), digital PR campaigns that earn natural media coverage and editorial links, broken link building (finding and replacing dead links), resource page link acquisition, unlinked brand mention conversion, competitor backlink analysis and replication.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We also create linkable assets (original research, infographics, tools, comprehensive guides) that naturally attract backlinks. For Mumbai businesses, we secure local citations from Indian directories (JustDial, Sulekha, IndiaMART) and local news websites. Every link is manually vetted to ensure relevance and quality, protecting your site from toxic backlinks and Google penalties.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-700/30">
                        <p className="text-cyan-400 font-semibold mb-2">Link Quality</p>
                        <p className="text-sm text-gray-300">DA 40-80+ websites, relevant niche sites, editorial links</p>
                      </div>
                      <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-700/30">
                        <p className="text-blue-400 font-semibold mb-2">Authority Growth</p>
                        <p className="text-sm text-gray-300">5-15 point Domain Authority increase in 6-12 months</p>
                      </div>
                      <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-700/30">
                        <p className="text-indigo-400 font-semibold mb-2">Ranking Boost</p>
                        <p className="text-sm text-gray-300">20-50% improvement in competitive keyword rankings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 5 */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-4xl">05</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">Local SEO & Google Business Profile Optimization</h3>
                    <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                      <strong className="text-blue-400">Investment:</strong> ₹15,000 - ₹50,000/month | <strong className="text-blue-400">Timeline:</strong> 2-4 months for significant results
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      For Mumbai businesses targeting local customers, local SEO is critical. We optimize your Google Business Profile (formerly Google My Business) to dominate local search results and Google Maps rankings. This includes verification, complete profile optimization, regular posts, review management, and Q&A optimization.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      <strong className="text-white">Local SEO Components:</strong> Google Business Profile optimization (categories, photos, hours, description), local citation building across 50+ directories, NAP (Name, Address, Phone) consistency across the web, location-based content creation, local link building from Mumbai-based websites, review generation and reputation management.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We optimize for &apos;near me&apos; searches and location-specific keywords (e.g., &quot;SEO company in Andheri&quot;, &quot;digital marketing agency Bandra&quot;). For multi-location businesses, we create separate landing pages for each area (Powai, Thane, Navi Mumbai, etc.) with unique, location-specific content. We also implement local schema markup to help Google understand your service areas.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-700/30">
                        <p className="text-blue-400 font-semibold mb-2">Local Pack Rankings</p>
                        <p className="text-sm text-gray-300">60-80% chance of top 3 Google Maps ranking</p>
                      </div>
                      <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-700/30">
                        <p className="text-indigo-400 font-semibold mb-2">Local Visibility</p>
                        <p className="text-sm text-gray-300">300-400% increase in &apos;near me&apos; search visibility</p>
                      </div>
                      <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-700/30">
                        <p className="text-purple-400 font-semibold mb-2">Local Leads</p>
                        <p className="text-sm text-gray-300">150-250% increase in local calls and store visits</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Why Choose MyDigital Crown */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Choose Us</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Mumbai&apos;s most trusted organic SEO agency with proven results and transparent processes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-6 border border-green-700/30 text-center">
                <div className="text-5xl font-black text-transparent bg-gradient-to-br from-green-400 to-emerald-400 bg-clip-text mb-3">300+</div>
                <div className="text-white text-lg font-bold">Successful Campaigns</div>
                <p className="text-gray-400 text-sm mt-2">Across 25+ industries</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/30 text-center">
                <div className="text-5xl font-black text-transparent bg-gradient-to-br from-emerald-400 to-teal-400 bg-clip-text mb-3">500%</div>
                <div className="text-white text-lg font-bold">Avg Traffic Growth</div>
                <p className="text-gray-400 text-sm mt-2">Within 6-12 months</p>
              </div>

              <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-6 border border-teal-700/30 text-center">
                <div className="text-5xl font-black text-transparent bg-gradient-to-br from-teal-400 to-cyan-400 bg-clip-text mb-3">95%</div>
                <div className="text-white text-lg font-bold">Client Retention</div>
                <p className="text-gray-400 text-sm mt-2">Long-term partnerships</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-700/30 text-center">
                <div className="text-5xl font-black text-transparent bg-gradient-to-br from-cyan-400 to-blue-400 bg-clip-text mb-3">10+</div>
                <div className="text-white text-lg font-bold">Years Experience</div>
                <p className="text-gray-400 text-sm mt-2">Mumbai SEO experts</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-700/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Google-Certified Experts</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Our team holds official Google certifications in SEO, Analytics, and Digital Marketing. We stay updated with algorithm changes and best practices through continuous training and industry research. We&apos;ve successfully navigated multiple major Google updates (Panda, Penguin, BERT, Core Updates) without client penalties.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-700/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">100% White-Hat Techniques</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  We exclusively use ethical, Google-approved SEO strategies that protect your website from penalties and algorithm updates. No black-hat tactics, no shortcuts, no risky link schemes. Our white-hat approach ensures sustainable rankings that grow stronger over time, not temporary gains that collapse with the next update.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-700/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transparent Reporting & Analytics</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Receive detailed monthly reports with keyword rankings, organic traffic, conversions, and ROI metrics. We provide real-time access to Google Analytics and Search Console dashboards so you can track progress 24/7. Our reports include strategic recommendations, competitor insights, and clear action plans for continuous improvement.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-700/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Mumbai-Based Team</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Our office is located in Chembur, Mumbai, with deep understanding of the local market, competition, and consumer behavior. We provide on-site consultations across Mumbai (Andheri, Bandra, BKC, Powai, Thane, Navi Mumbai) and serve clients throughout Maharashtra and India. Local expertise with global SEO standards.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Our Organic SEO Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Proven Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach that delivers consistent, measurable results
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-green-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                    01
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Discovery & SEO Audit <span className="text-green-400 text-lg">(Week 1-2)</span></h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      We begin with a comprehensive SEO audit of your website, analyzing technical health, on-page optimization, backlink profile, and competitive landscape. This includes Google Search Console and Analytics setup, keyword gap analysis, and identifying quick wins for immediate improvements.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-white">Deliverable:</strong> 50-page detailed audit report with prioritized recommendations, competitive analysis, and custom SEO strategy document
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-emerald-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Strategy Development & Planning <span className="text-emerald-400 text-lg">(Week 2-3)</span></h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Based on audit findings, we develop a custom organic SEO strategy aligned with your business goals. This includes keyword targeting roadmap, content calendar, technical optimization priorities, link building plan, and realistic timeline with monthly milestones. We present the strategy for your approval before execution.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-white">Deliverable:</strong> 3-month, 6-month, and 12-month roadmap with specific KPIs, budget allocation, and expected ROI projections
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-teal-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Technical Implementation <span className="text-teal-400 text-lg">(Month 1-2)</span></h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      We implement critical technical fixes: site speed optimization, mobile responsiveness, schema markup, XML sitemaps, robots.txt, canonical tags, and Core Web Vitals improvements. We also optimize site architecture, internal linking, and ensure proper indexation. Quick wins are prioritized for early results.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-white">Results:</strong> 40-60% faster page load, 90+ PageSpeed score, 100% mobile-friendly, all technical errors resolved
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-cyan-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                    04
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Content Creation & On-Page SEO <span className="text-cyan-400 text-lg">(Ongoing Monthly)</span></h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      We create and publish high-quality, SEO-optimized content based on the approved content calendar. This includes blog posts, landing pages, service pages, and linkable assets. Each piece is optimized for target keywords while maintaining natural readability and value for users. We also optimize existing content for better performance.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-white">Monthly Output:</strong> 8-12 new articles/pages, 10-15 optimized existing pages, consistent keyword targeting and internal linking
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-blue-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                    05
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Link Building & Authority Growth <span className="text-blue-400 text-lg">(Ongoing Monthly)</span></h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      We execute white-hat link building campaigns to earn high-quality backlinks from authoritative websites. This includes guest posting, digital PR, broken link building, and unlinked mention conversion. We focus on relevance and quality, building your domain authority sustainably. Monthly link acquisition targets are based on competition and budget.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-white">Monthly Target:</strong> 10-30 quality backlinks from DA 40-80+ websites, consistent Domain Authority growth
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-indigo-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                    06
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Monitoring, Reporting & Optimization <span className="text-indigo-400 text-lg">(Ongoing)</span></h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      We continuously monitor rankings, traffic, and conversions, providing detailed monthly reports. Based on performance data, we refine strategies, test new approaches, and optimize underperforming areas. Regular strategy calls keep you updated on progress and next steps. We also monitor algorithm updates and adjust tactics accordingly.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong className="text-white">Monthly Reporting:</strong> Keyword rankings, organic traffic growth, conversion metrics, backlink profile, technical health, ROI analysis, and next month&apos;s action plan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Getting Started */}
          <div>
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-3xl p-12 border border-green-700/30">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Grow Organically</span>?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Start your organic SEO journey today and build sustainable search visibility that drives long-term business growth
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-900/50 rounded-2xl p-6 border border-green-700/30">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 mb-3">Speak with our SEO experts</p>
                  <a href="tel:+918369511877" className="text-green-400 hover:text-green-300 font-semibold">
                    +91-83695-11877
                  </a>
                </div>

                <div className="bg-gray-900/50 rounded-2xl p-6 border border-emerald-700/30">
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-3">Get free consultation</p>
                  <a href="mailto:info@mydigitalcrown.in" className="text-emerald-400 hover:text-emerald-300 font-semibold">
                    info@mydigitalcrown.in
                  </a>
                </div>

                <div className="bg-gray-900/50 rounded-2xl p-6 border border-teal-700/30">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 mb-3">Mumbai Head Office</p>
                  <p className="text-teal-400 font-semibold">
                    Chembur, Mumbai - 400071
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>Free 30-minute SEO consultation</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>Detailed proposal within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>Transparent pricing, no hidden costs</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span>Flexible monthly packages</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span>Month-to-month contracts available</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span>95% client satisfaction rate</span>
                </div>
              </div>

              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-3xl">🚀</span>
                  <span>Get Free SEO Audit Now</span>
                </Link>
                <p className="text-gray-400 mt-4 text-sm">No obligation • Free competitive analysis • Custom strategy roadmap</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trusted Brands */}
      <TrustedBrands />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Grow Your<br />
              <span className="text-yellow-300">Organic Traffic?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our organic search experts build a sustainable SEO strategy that delivers long-term results!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get SEO Audit</span>
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
                <span>Google Certified SEO Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>300+ Successful Campaigns</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>500% Average Traffic Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://mydigitalcrown.in/services/organic-search#service",
                "serviceType": "Organic Search SEO Services",
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
                  "name": "Organic SEO Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Strategic Keyword Research & Analysis",
                        "description": "Deep keyword research with intent analysis, competitor gaps, and ROI-focused keyword selection"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Technical SEO Optimization",
                        "description": "Complete technical SEO audit and optimization for better crawlability, indexation, and Core Web Vitals"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "High-Quality Content Creation",
                        "description": "SEO-optimized, E-E-A-T focused content creation for sustainable organic rankings"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "White-Hat Link Building",
                        "description": "Ethical backlink acquisition from authoritative websites with digital PR campaigns"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Local SEO & Google Business Profile Optimization",
                        "description": "Local search optimization for Mumbai businesses with Google Maps ranking strategies"
                      }
                    }
                  ]
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
                "description": "Mumbai's leading organic search SEO agency with 10+ years experience, 300+ successful campaigns, and proven 500% traffic growth results",
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
                  "https://www.linkedin.com/company/mydigitalcrown",
                  "https://twitter.com/mydigitalcrown"
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://mydigitalcrown.in/services/organic-search#webpage",
                "url": "https://mydigitalcrown.in/services/organic-search",
                "name": "Organic Search SEO In Mumbai | #1 Organic SEO Expert | MyDigital Crown",
                "description": "Top Organic Search SEO In Mumbai. 500% Traffic Growth, White-Hat Techniques, 1000+ Keywords Ranked. Expert Natural Rankings & Sustainable Growth.",
                "isPartOf": {
                  "@id": "https://mydigitalcrown.in/#website"
                },
                "about": {
                  "@id": "https://mydigitalcrown.in/services/organic-search#service"
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
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
                    "name": "Organic Search SEO",
                    "item": "https://mydigitalcrown.in/services/organic-search"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is Organic Search SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Organic Search SEO is the practice of optimizing your website to rank naturally in search engine results without paying for ads. It involves white-hat techniques like keyword research, content optimization, technical SEO, and link building to improve your visibility on Google and other search engines. Unlike paid advertising (PPC), organic search results are earned through quality content, user experience, and authority. This creates sustainable, long-term traffic that doesn't stop when you stop paying. Organic SEO typically delivers 5-10x higher ROI than paid ads over time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does organic SEO cost in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Organic SEO pricing in Mumbai varies based on your goals, competition level, and campaign scope. Our packages range from ₹25,000/month for startups (20 keywords, basic optimization) to ₹2,00,000+/month for enterprise campaigns (100+ keywords, full-service SEO). Typical investment of ₹40,000-₹75,000/month for most businesses includes keyword research, content creation, technical optimization, link building, and monthly reporting. This delivers 200-500% ROI within 6-12 months. Unlike PPC where you pay per click forever, organic SEO is a long-term investment that provides free traffic indefinitely."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to see organic SEO results?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Organic SEO is a long-term strategy. You'll see initial ranking improvements in 1-3 months, significant traffic growth in 3-6 months, and peak performance in 6-12 months. The exact timeline depends on competition, current site status, and keyword difficulty. Expected timeline: Month 1-2 (technical fixes, content creation), Month 3-4 (first rankings appear), Month 5-6 (50-100% traffic increase), Month 7-12 (200-500% traffic growth). While slower than PPC, organic SEO delivers compounding returns and rankings improve over time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's included in organic SEO services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our comprehensive organic SEO services include: (1) In-depth keyword research with intent analysis, (2) Technical SEO audits and fixes, (3) On-page optimization (title tags, meta descriptions, headers, content), (4) High-quality content creation (blogs, landing pages, guides), (5) White-hat link building and digital PR. Additionally: Schema markup implementation, mobile optimization, site speed enhancement, competitor analysis, local SEO (Google Business Profile), conversion rate optimization, and detailed monthly reporting with rankings, traffic, and ROI metrics."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's the difference between organic and paid search?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Organic Search: Free, earned rankings through SEO optimization. Appears in main search results below ads. Takes 3-6 months to build, but delivers sustainable traffic. Higher trust and click-through rates (70% of users prefer organic results). 5-10x better long-term ROI. Paid Search (PPC): Pay-per-click advertising. Instant visibility but traffic stops when you stop paying. Appears at top with 'Ad' label. Lower trust and click-through rates. Better for short-term campaigns and testing. Best strategy: Combine both. Use PPC for immediate results while building organic rankings."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you use white-hat or black-hat SEO techniques?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We exclusively use white-hat, Google-approved SEO techniques. This means all our strategies comply with search engine guidelines, ensuring your website is protected from penalties and algorithm updates. We never use risky tactics like keyword stuffing, link farms, cloaking, or private blog networks. Our ethical approach includes natural keyword usage, high-quality content creation, genuine backlinks from authoritative sites, technical optimization following best practices, and user-focused strategies that provide real value. Black-hat techniques might offer quick wins but lead to severe Google penalties and permanent damage to your online reputation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why choose MyDigital Crown for organic SEO in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "MyDigital Crown is Mumbai's leading organic SEO agency with 10+ years of experience and 300+ successful campaigns. We've helped businesses achieve an average 500% traffic growth and rank for 1000+ competitive keywords across industries. What sets us apart: (1) Proven track record with 95% client retention, (2) Google-certified SEO experts, (3) Transparent reporting with real-time dashboards, (4) 100% white-hat techniques, (5) Dedicated account managers, (6) Mumbai-based team with local market expertise. We combine technical excellence with content quality and strategic thinking for measurable ROI."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you help recover from Google penalty?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! We specialize in Google penalty recovery services. Whether you've been hit by a manual action or algorithmic penalty (Panda, Penguin, Core Updates), we can diagnose the issue and create a recovery plan. Our success rate for penalty recovery is over 85%. Recovery process: (1) Comprehensive audit to identify penalty cause, (2) Remove or disavow toxic backlinks, (3) Fix thin or duplicate content, (4) Clean up technical SEO issues, (5) Submit reconsideration request (manual penalties), (6) Rebuild with white-hat techniques. Recovery timeline: 2-3 months for algorithmic penalties, 1-2 months for manual actions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What industries do you serve for organic SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We provide organic SEO services across all industries in Mumbai and India: E-commerce (Shopify, WooCommerce, Magento), Healthcare (hospitals, clinics, telemedicine), Real Estate (developers, brokers, portals), Education (schools, coaching, e-learning), Finance (banks, fintech, insurance), Manufacturing, B2B services, SaaS companies, hospitality and travel, legal services, automotive, fashion and lifestyle, food and restaurants, IT and technology, professional services (CA, lawyers, consultants). Each industry requires unique SEO strategies customized based on your specific market, competition, and target audience behavior."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide local SEO for Mumbai businesses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! Local SEO is a core part of our organic search services. We help Mumbai businesses dominate local search results and Google Maps rankings. This includes Google Business Profile optimization, local citations (JustDial, Sulekha, IndiaMART), location-based content, and local link building. Local SEO benefits: Rank for 'near me' searches, appear in Google's Local Pack (top 3 map results), attract nearby customers ready to buy, build local authority and trust. Our local SEO campaigns average 300-400% increase in local search visibility within 3-6 months."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you measure organic SEO success?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We track comprehensive metrics to measure organic SEO success: (1) Keyword Rankings - position improvements for target keywords, (2) Organic Traffic - Google Analytics sessions and users from organic search, (3) Conversions - leads, sales, form fills, calls from organic traffic, (4) ROI - revenue generated vs investment. Additional metrics: Domain Authority (DA) growth, quality backlink acquisition, page load speed, Core Web Vitals scores, engagement metrics (bounce rate, time on site), search visibility percentage, and competitive positioning. You receive detailed monthly reports with all these metrics plus strategic recommendations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I get started with organic SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Getting started is easy! Call us at +91-83695-11877 or email info@mydigitalcrown.in to schedule a free 30-minute consultation. We'll discuss your business goals, target audience, and competition. Next steps: (1) Free SEO audit of your current website, (2) Custom strategy presentation with timeline and expected results, (3) Transparent pricing proposal (no hidden costs), (4) Once approved, we start immediately with quick wins. You can also visit our office in Chembur, Mumbai for face-to-face consultation. We serve clients across Mumbai and all of India."
                    }
                  }
                ]
              },
              {
                "@type": "LocalBusiness",
                "name": "MyDigital Crown - Organic SEO Agency Mumbai",
                "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
                "@id": "https://mydigitalcrown.in/services/organic-search",
                "url": "https://mydigitalcrown.in/services/organic-search",
                "telephone": "+91-83695-11877",
                "priceRange": "₹₹₹",
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
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/mydigitalcrown",
                  "https://www.instagram.com/mydigitalcrown",
                  "https://www.linkedin.com/company/mydigitalcrown"
                ]
              },
              {
                "@type": "Offer",
                "name": "Organic Search SEO Services Package",
                "price": "25000",
                "priceCurrency": "INR",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "25000",
                  "priceCurrency": "INR",
                  "unitText": "per month"
                },
                "description": "Comprehensive organic SEO services starting from ₹25,000/month including keyword research, technical optimization, content creation, and link building",
                "seller": {
                  "@id": "https://mydigitalcrown.in/#organization"
                },
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01",
                "validThrough": "2025-12-31"
              },
              {
                "@type": "HowTo",
                "name": "How to Implement Organic Search SEO Strategy",
                "description": "Complete organic SEO implementation process for sustainable search rankings and traffic growth",
                "totalTime": "PT6M",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "INR",
                  "value": "40000"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Discovery & SEO Audit",
                    "text": "Comprehensive website audit analyzing technical health, on-page optimization, backlink profile, and competitive landscape. Setup Google Search Console and Analytics.",
                    "url": "https://mydigitalcrown.in/services/organic-search#audit"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Strategy Development & Planning",
                    "text": "Develop custom organic SEO strategy with keyword targeting roadmap, content calendar, technical optimization priorities, and link building plan with realistic timelines.",
                    "url": "https://mydigitalcrown.in/services/organic-search#strategy"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Technical Implementation",
                    "text": "Implement technical fixes: site speed optimization, mobile responsiveness, Core Web Vitals, schema markup, XML sitemaps, and proper URL structure.",
                    "url": "https://mydigitalcrown.in/services/organic-search#technical"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Content Creation & On-Page SEO",
                    "text": "Create and publish high-quality, SEO-optimized content including blog posts, landing pages, and service pages. Optimize existing content for better performance.",
                    "url": "https://mydigitalcrown.in/services/organic-search#content"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Link Building & Authority Growth",
                    "text": "Execute white-hat link building campaigns through guest posting, digital PR, broken link building, and unlinked mention conversion for domain authority growth.",
                    "url": "https://mydigitalcrown.in/services/organic-search#linkbuilding"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Monitoring, Reporting & Optimization",
                    "text": "Continuously monitor rankings, traffic, and conversions. Provide monthly reports and refine strategies based on performance data and algorithm updates.",
                    "url": "https://mydigitalcrown.in/services/organic-search#reporting"
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": "Complete Guide to Organic Search SEO in Mumbai",
                "description": "Comprehensive guide covering organic SEO strategies, white-hat techniques, and sustainable growth methods for Mumbai businesses",
                "author": {
                  "@type": "Person",
                  "name": "Aditya Pandey"
                },
                "publisher": {
                  "@id": "https://mydigitalcrown.in/#organization"
                },
                "datePublished": "2025-01-01",
                "dateModified": "2025-10-10",
                "wordCount": 1800,
                "articleBody": "Organic Search SEO is essential for sustainable online growth in Mumbai's competitive digital landscape..."
              },
              {
                "@type": "Review",
                "itemReviewed": {
                  "@id": "https://mydigitalcrown.in/services/organic-search#service"
                },
                "author": {
                  "@type": "Person",
                  "name": "Priya Sharma"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "MyDigital Crown transformed our organic search presence completely. Within 6 months, we saw 400% increase in organic traffic and ranked on page 1 for 50+ competitive keywords. Their white-hat approach gave us sustainable results without any Google penalties. The team's expertise in technical SEO, content strategy, and link building is exceptional. Monthly reports were transparent with clear ROI metrics. Highly recommend for any Mumbai business serious about organic growth!",
                "datePublished": "2024-12-15"
              },
              {
                "@type": "VideoObject",
                "name": "Organic Search SEO Best Practices for 2025",
                "description": "Learn the latest white-hat organic SEO techniques for sustainable search rankings and traffic growth",
                "thumbnailUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
                "uploadDate": "2025-01-01",
                "duration": "PT15M",
                "contentUrl": "https://mydigitalcrown.in/videos/organic-seo-best-practices"
              },
              {
                "@type": "Course",
                "name": "Advanced Organic SEO Mastery - Mumbai Edition",
                "description": "Comprehensive online course teaching advanced organic SEO strategies specifically for Mumbai businesses and Indian market",
                "provider": {
                  "@id": "https://mydigitalcrown.in/#organization"
                },
                "courseCode": "ORG-SEO-101",
                "hasCourseInstance": {
                  "@type": "CourseInstance",
                  "courseMode": "Online",
                  "duration": "P8W",
                  "instructor": {
                    "@type": "Person",
                    "name": "Aditya Pandey"
                  }
                },
                "offers": {
                  "@type": "Offer",
                  "price": "30000",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                },
                "educationalLevel": "Advanced"
              },
              {
                "@type": "SpecialAnnouncement",
                "name": "Free Organic SEO Audit for Mumbai Businesses",
                "text": "Get a comprehensive free SEO audit worth ₹15,000 for your website. Limited time offer for Mumbai businesses only. Includes technical analysis, keyword research, competitor benchmarking, and custom strategy roadmap.",
                "datePosted": "2025-01-01",
                "expires": "2025-12-31",
                "category": "https://www.wikidata.org/wiki/Q81068910",
                "url": "https://mydigitalcrown.in/services/organic-search"
              },
              {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1",
                "itemReviewed": {
                  "@id": "https://mydigitalcrown.in/services/organic-search#service"
                }
              },
              {
                "@type": "ItemList",
                "name": "Organic SEO Service Categories",
                "description": "Complete range of organic search optimization services",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Keyword Research & Analysis",
                    "url": "https://mydigitalcrown.in/services/organic-search#keyword-research"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Technical SEO Optimization",
                    "url": "https://mydigitalcrown.in/services/organic-search#technical-seo"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Content Creation & Optimization",
                    "url": "https://mydigitalcrown.in/services/organic-search#content-seo"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "White-Hat Link Building",
                    "url": "https://mydigitalcrown.in/services/organic-search#link-building"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Local SEO & GMB Optimization",
                    "url": "https://mydigitalcrown.in/services/organic-search#local-seo"
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Noscript Fallback */}
      <noscript>
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', margin: '20px' }}>
          <h2>Organic Search SEO Services in Mumbai - MyDigital Crown</h2>
          <p>
            Leading organic SEO agency in Mumbai offering white-hat SEO strategies for sustainable search rankings. 
            Our services include keyword research, technical optimization, content creation, link building, and local SEO.
          </p>
          <p>
            <strong>Achievements:</strong> 300+ successful campaigns, 500% average traffic growth, 1000+ keywords ranked, 
            95% client retention, 10+ years experience in Mumbai market.
          </p>
          <p>
            <strong>Contact:</strong> Call +91-83695-11877 | Email: info@mydigitalcrown.in | 
            Office: Chembur, Mumbai - 400071, Maharashtra, India
          </p>
          <p>
            <strong>Pricing:</strong> Packages from ₹25,000/month (Startup) to ₹2,00,000+/month (Enterprise). 
            Includes keyword research, technical SEO, content creation, link building, and monthly reporting.
          </p>
          <p>
            <strong>Results Timeline:</strong> Initial rankings in 1-3 months, significant growth in 3-6 months, 
            peak performance in 6-12 months with sustainable long-term traffic.
          </p>
        </div>
      </noscript>

      {/* Related Services */}
      {/* Our Locations */}

      <OurLocations />


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/organic-search"
        title="Complete SEO Solutions"
        description="Enhance your organic search performance with our comprehensive SEO and digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
