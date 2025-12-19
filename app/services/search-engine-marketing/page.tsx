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
  title: 'SEM Company Mumbai | Google Ads & PPC Experts | MyDigital',
  description: 'Top Search Engine Marketing Mumbai. 500% ROI | Google Ads & PPC Management | Expert SEM Agency. Call +91-83695-11877 for Results',
  keywords: [
    'search engine marketing company in mumbai',
    'sem company mumbai',
    'sem services mumbai',
    'sem agency mumbai',
    'best sem company mumbai',
    'mumbai sem company',
    'search engine marketing services in mumbai',
    'ppc company mumbai',
    'google ads company mumbai',
    'paid search marketing mumbai',
    'sem consultant mumbai',
    'professional sem services mumbai',
    'top sem company in mumbai',
    'sem experts mumbai',
    'sem agency in mumbai',
    'mumbai sem services',
    'ppc management mumbai',
    'google ads agency mumbai',
    'bing ads mumbai',
    'paid advertising mumbai',
    'sem specialist mumbai',
    'sem optimization mumbai',
    'affordable sem mumbai',
    'sem firm mumbai',
    'paid search company mumbai',
    'sem marketing mumbai',
    'google adwords mumbai',
    'mumbai sem expert',
    'sem packages mumbai',
    'sem solutions mumbai',
    'enterprise sem mumbai',
    'sem consultant in mumbai',
    'mumbai ppc agency',
    'best sem services mumbai',
    'sem company for small business mumbai',
    'ecommerce sem mumbai'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Search Engine Marketing Services',
  classification: 'Google Ads, PPC & Paid Search Management',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Search Engine Marketing Company In Mumbai | #1 SEM Agency | MyDigital Crown',
    description: 'Top Search Engine Marketing Company In Mumbai. 500% ROI Guaranteed. Google Ads, PPC Experts. Call +91-83695-11877',
    url: 'https://mydigitalcrown.in/services/search-engine-marketing',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/sem-company-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Search Engine Marketing Company In Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search Engine Marketing Company In Mumbai | #1 SEM Agency',
    description: 'Top Search Engine Marketing Company In Mumbai. 500% ROI Guaranteed. Google Ads, PPC Experts.',
    images: ['https://mydigitalcrown.in/images/sem-company-mumbai.jpg'],
    creator: '@mydigitalcrown',
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
  alternates: {
    canonical: 'https://mydigitalcrown.in/services/search-engine-marketing',
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

export default function SearchEngineMarketingPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Search Engine Marketing Mumbai Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s #1 SEM Company</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Search Engine Marketing Company In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  Expert SEM Services | 300+ Campaigns Managed | 500% ROI Guaranteed
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Google Ads | Bing Ads | PPC Management | Campaign Optimization
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
                    <span>Get Free SEM Audit</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">₹50L+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Ad Spend Managed</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">500%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Average ROI</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">300+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">SEM Campaigns</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">8+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Quality Score</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* VSO Quick Answers Section */}
      <section 
        className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
        aria-label="Voice search optimized answers about SEM services"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-6 py-3 mb-6">
              <span className="text-yellow-300 font-semibold">💬 Voice Search Optimized Answers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Quick Answers About <span className="text-yellow-300">SEM Services</span> in Mumbai
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Where */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Where do you provide SEM services?</h3>
              <p className="text-blue-100 leading-relaxed">
                We provide Search Engine Marketing services across Mumbai including Andheri, Bandra, Powai, Chembur, Thane, Navi Mumbai, and all major business districts. Our Mumbai office is in Chembur with remote support available.
              </p>
            </div>

            {/* How Much */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">How much do SEM services cost?</h3>
              <p className="text-blue-100 leading-relaxed">
                SEM services in Mumbai start at ₹20,000/month for small businesses with ₹15,000-30,000 monthly ad budget. Mid-size businesses invest ₹50,000-1,00,000/month. Enterprise SEM campaigns start at ₹2,00,000/month with custom ad budgets based on industry competition.
              </p>
            </div>

            {/* When */}
            <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-white mb-4">When will I see SEM results?</h3>
              <p className="text-blue-100 leading-relaxed">
                SEM delivers immediate results - your ads go live within 24-48 hours after campaign approval. You&apos;ll see traffic and clicks immediately. Lead generation typically starts within the first week. Full campaign optimization and maximum ROI achieved within 30-60 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About SEM Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎯</span>
              Paid Search Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SEM Services</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drive instant traffic and qualified leads with data-driven paid search campaigns
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                    alt="Search Engine Marketing Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Instant Results</h3>
                <p className="text-gray-700 leading-relaxed">
                  Get immediate visibility on search engines and drive targeted traffic from day one.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Maximum ROI</h3>
                <p className="text-gray-700 leading-relaxed">
                  Data-driven optimization to minimize costs and maximize returns on your ad spend.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Precise Targeting</h3>
                <p className="text-gray-700 leading-relaxed">
                  Target the right audience with advanced keyword targeting and demographic filters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEM Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our SEM <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive paid search solutions to drive instant traffic and conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Google Ads Management</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Expert Google Ads campaign setup, management, and optimization for maximum performance.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Search Campaigns</li>
                  <li className="flex items-start gap-2">✓ Display Network</li>
                  <li className="flex items-start gap-2">✓ Shopping Ads</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Keyword Research</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  In-depth keyword analysis to target high-converting search terms with optimal bid strategies.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Keyword Analysis</li>
                  <li className="flex items-start gap-2">✓ Competitor Research</li>
                  <li className="flex items-start gap-2">✓ Bid Strategy</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ad Copy Creation</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Compelling ad copy that drives clicks and conversions with A/B testing for optimization.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Copywriting</li>
                  <li className="flex items-start gap-2">✓ A/B Testing</li>
                  <li className="flex items-start gap-2">✓ Ad Extensions</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📄</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Landing Page Optimization</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Create and optimize landing pages designed to convert paid traffic into customers.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Landing Page Design</li>
                  <li className="flex items-start gap-2">✓ CRO Optimization</li>
                  <li className="flex items-start gap-2">✓ Quality Score Boost</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Campaign Analytics</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Track performance metrics and optimize campaigns based on data-driven insights.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Performance Tracking</li>
                  <li className="flex items-start gap-2">✓ ROI Analysis</li>
                  <li className="flex items-start gap-2">✓ Detailed Reports</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎨</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Remarketing Campaigns</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Re-engage visitors who didn&apos;t convert with strategic remarketing campaigns.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Audience Targeting</li>
                  <li className="flex items-start gap-2">✓ Dynamic Remarketing</li>
                  <li className="flex items-start gap-2">✓ Conversion Tracking</li>
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
              Ready to Drive Instant<br />
              <span className="text-yellow-300">Traffic & Conversions?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our SEM experts create high-performing paid search campaigns that maximize your ROI!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Free SEM Audit</span>
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
                <span>Google Ads Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>300+ Campaigns Managed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>500% Average ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden"
        aria-label="Frequently asked questions about SEM services"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        
        {/* Floating Emoji Decorations */}
        <div className="absolute top-20 left-20 text-6xl opacity-20 animate-bounce">🎯</div>
        <div className="absolute top-40 right-20 text-6xl opacity-20 animate-bounce animation-delay-2000">💰</div>
        <div className="absolute bottom-20 left-1/3 text-6xl opacity-20 animate-bounce animation-delay-4000">🚀</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <span className="text-white font-semibold">❓ Frequently Asked Questions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Everything About <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">SEM Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get answers to the most common questions about our Search Engine Marketing services in Mumbai
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-blue-300/50 transition-all duration-300 hover:shadow-blue-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">💡</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    What is Search Engine Marketing (SEM)?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Search Engine Marketing (SEM) is paid advertising on search engines like Google and Bing. It includes PPC (Pay-Per-Click) campaigns, display ads, and shopping ads. SEM delivers immediate visibility and traffic, unlike SEO which takes months. You only pay when someone clicks your ad, making it cost-effective and measurable.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-purple-300/50 transition-all duration-300 hover:shadow-purple-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">💰</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    How much do SEM services cost in Mumbai?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Our SEM management starts at ₹20,000/month plus your ad spend budget. Small businesses typically invest ₹15,000-30,000/month in ads. Mid-size companies spend ₹50,000-1,00,000/month. Enterprise campaigns start at ₹2,00,000/month. Pricing depends on industry competition, target keywords, and campaign goals.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-green-300/50 transition-all duration-300 hover:shadow-green-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                    How quickly will I see results from SEM?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  SEM delivers immediate results! Your ads go live within 24-48 hours after Google approval. You&apos;ll see traffic and clicks immediately. Lead generation starts within the first week. Full campaign optimization for maximum ROI typically takes 30-60 days as we test ad variations, landing pages, and audience targeting.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-yellow-300/50 transition-all duration-300 hover:shadow-yellow-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    What&apos;s the difference between SEO and SEM?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  SEO is organic (free) ranking through content and optimization, taking 3-6 months for results. SEM is paid advertising with immediate visibility. SEO provides long-term sustainable traffic while SEM delivers instant traffic but requires ongoing budget. Best strategy: use both together for maximum market coverage and ROI.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-pink-300/50 transition-all duration-300 hover:shadow-pink-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">📊</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                    How do you measure SEM campaign success?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  We track key metrics including CTR (Click-Through Rate), CPC (Cost Per Click), conversion rate, Quality Score, impression share, and most importantly - ROI (Return on Investment). Monthly reports show exact cost per lead, cost per acquisition, and revenue generated from campaigns with full transparency.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-orange-300/50 transition-all duration-300 hover:shadow-orange-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔍</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                    Which platforms do you manage SEM campaigns on?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  We manage campaigns on Google Ads (Search, Display, Shopping, YouTube), Bing Ads, and social media platforms like Facebook Ads, Instagram Ads, LinkedIn Ads, and Twitter Ads. Google Ads typically drives 80% of results for most businesses, but we customize the platform mix based on your target audience.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-cyan-300/50 transition-all duration-300 hover:shadow-cyan-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🏆</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    What is Quality Score and why does it matter?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Quality Score (1-10 rating) measures your ad relevance, landing page experience, and expected CTR. Higher scores (8-10) reduce your cost per click by 30-50% and improve ad positions. We optimize ad copy, keywords, and landing pages to achieve Quality Scores of 8+ for maximum ROI.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-red-300/50 transition-all duration-300 hover:shadow-red-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🛡️</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                    How do you prevent wasted ad spend?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  We use extensive negative keyword lists, geographic targeting, dayparting (showing ads only during business hours), device targeting, and audience exclusions. Regular monitoring identifies underperforming keywords and ads. Conversion tracking ensures budget focuses on campaigns that generate actual sales, not just clicks.
                </p>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-indigo-300/50 transition-all duration-300 hover:shadow-indigo-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">📝</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    Do you provide landing page optimization?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Yes! Landing page optimization is crucial for SEM success. We analyze your current landing pages, recommend improvements for faster loading, better messaging, clear CTAs, and mobile responsiveness. We can also create custom landing pages designed specifically to convert paid traffic into leads and sales.
                </p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-teal-300/50 transition-all duration-300 hover:shadow-teal-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎪</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    Can you manage remarketing campaigns?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Absolutely! Remarketing targets people who visited your website but didn&apos;t convert. These campaigns have 2-3x higher conversion rates and 50% lower costs than cold traffic. We create custom audience segments, dynamic remarketing ads, and sequential messaging to bring visitors back and convert them into customers.
                </p>
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-violet-300/50 transition-all duration-300 hover:shadow-violet-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">📈</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    What reporting do you provide for SEM campaigns?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-violet-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  We provide comprehensive monthly reports showing ad spend, clicks, impressions, CTR, conversions, cost per conversion, ROI, and campaign performance by keyword, ad group, and device. Real-time dashboards give 24/7 access to campaign data. Weekly optimization calls discuss performance and strategy adjustments.
                </p>
              </div>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-lime-300/50 transition-all duration-300 hover:shadow-lime-500/20 hover:scale-105">
              <summary className="cursor-pointer list-none p-8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-4xl mt-1 group-open:animate-spin">🚀</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-lime-300 transition-colors">
                    How do I get started with your SEM services?
                  </h3>
                </div>
                <svg className="w-7 h-7 text-lime-300 transform group-open:rotate-180 transition-transform flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <p className="text-blue-100 leading-relaxed">
                  Simply call us at +91-83695-11877 or fill our contact form. We&apos;ll schedule a free SEM consultation and audit to analyze your current campaigns (if any), identify opportunities, and create a custom strategy. After discussing your goals and budget, we&apos;ll provide a detailed proposal with campaign setup, expected ROI, and timeline.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* SEM Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Understanding SEM */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-6">
                <span className="text-blue-300 font-semibold">🎯 Complete Guide</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Understanding <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Search Engine Marketing</span> in Mumbai
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Search Engine Marketing (SEM) is the fastest way to reach customers actively searching for your products or services online. As Mumbai&apos;s premier SEM company, we help businesses dominate paid search results, generate qualified leads, and achieve measurable ROI from day one.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Immediate Results</h3>
                <p className="text-gray-300 leading-relaxed">
                  Unlike SEO which takes months, SEM delivers instant visibility. Your ads appear at the top of search results within 24-48 hours, driving immediate traffic, leads, and sales. Perfect for product launches, seasonal campaigns, or businesses needing quick market entry in competitive Mumbai industries.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Precise Targeting</h3>
                <p className="text-gray-300 leading-relaxed">
                  SEM allows laser-focused targeting by keywords, location, demographics, device, time of day, and even user intent. Show your ads only to Mumbai customers searching for exactly what you offer, eliminating wasted spend on irrelevant clicks and maximizing conversion rates.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-white mb-4">Measurable ROI</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every rupee spent is tracked and measured. See exactly how many clicks, leads, and sales your campaigns generate. Track cost per acquisition, conversion rates, and return on ad spend in real-time. This transparency allows continuous optimization for maximum profitability.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Our SEM Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Comprehensive <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SEM Services</span> Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our full-service SEM company delivers end-to-end campaign management across all major advertising platforms.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 text-white text-3xl font-bold min-w-[80px] h-20 flex items-center justify-center">
                    01
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Google Ads Management</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Google Ads is the most powerful SEM platform, capturing 90%+ of search traffic in India. Our certified Google Ads experts create and manage Search campaigns targeting high-intent keywords, Display campaigns for visual brand awareness, Shopping campaigns for e-commerce products, YouTube video ads for engagement, and Performance Max campaigns using AI optimization.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      We conduct extensive keyword research identifying profitable search terms, write compelling ad copy that drives clicks, design eye-catching display creatives, optimize landing pages for conversions, and continuously A/B test everything to improve performance. Our clients achieve average Quality Scores of 8-10, reducing costs by 30-50% while improving ad positions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4 text-white text-3xl font-bold min-w-[80px] h-20 flex items-center justify-center">
                    02
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">PPC Campaign Optimization</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Pay-Per-Click optimization is where expertise makes the difference between profit and waste. We continuously monitor campaign performance, identify underperforming keywords and pause them, discover new keyword opportunities through search term reports, adjust bids based on conversion data and competition, create negative keyword lists preventing irrelevant clicks, and implement dayparting to show ads only during peak conversion hours.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Our optimization process includes weekly performance analysis, monthly strategy reviews, quarterly competitive audits, and continuous testing of ad variations, bidding strategies, audience segments, and landing page elements. This data-driven approach consistently improves campaign ROI over time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-600/10 to-red-600/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-xl p-4 text-white text-3xl font-bold min-w-[80px] h-20 flex items-center justify-center">
                    03
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Conversion Rate Optimization</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Getting clicks is easy - converting them into customers requires optimization. We analyze user behavior using heatmaps and session recordings, identify drop-off points in the conversion funnel, test different landing page layouts and messaging, optimize form fields reducing friction, improve page load speeds, ensure mobile responsiveness, and implement trust signals like testimonials and security badges.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Our CRO process has helped Mumbai clients improve conversion rates by 50-200%, dramatically reducing cost per acquisition while increasing revenue from the same ad spend. Small improvements in conversion rate create massive ROI gains when scaled across thousands of clicks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-xl p-4 text-white text-3xl font-bold min-w-[80px] h-20 flex items-center justify-center">
                    04
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Remarketing Campaigns</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      95% of website visitors don&apos;t convert on first visit. Remarketing brings them back! We create custom audience segments for different user behaviors, design sequential ad messaging guiding users through the buyer journey, set up dynamic remarketing showing products users viewed, implement cross-sell and upsell campaigns for existing customers, and optimize bid adjustments based on audience quality.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Remarketing campaigns consistently deliver 2-3x higher conversion rates and 40-60% lower costs compared to cold traffic campaigns. They&apos;re essential for businesses with longer sales cycles or higher-priced products where multiple touchpoints are needed before purchase decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-4 text-white text-3xl font-bold min-w-[80px] h-20 flex items-center justify-center">
                    05
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Multi-Platform SEM Management</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      While Google dominates search, other platforms offer unique opportunities. We manage Bing Ads reaching 10-15% additional search volume at lower costs, Facebook and Instagram ads for social engagement and remarketing, LinkedIn ads for B2B lead generation, Amazon advertising for e-commerce products, and industry-specific platforms relevant to your business.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Our multi-platform approach ensures maximum market coverage while optimizing budget allocation based on performance. We track cross-platform attribution understanding how different channels work together in the customer journey, enabling smarter budget decisions and higher overall ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Why Choose Our Mumbai SEM Company */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Why Mumbai Businesses <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Choose Us</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our proven track record of managing ₹50L+ in ad spend and delivering 500% average ROI sets us apart.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">🏆</div>
                <div className="text-4xl font-black text-white mb-2">500%</div>
                <p className="text-blue-300 font-semibold">Average ROI</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">🎯</div>
                <div className="text-4xl font-black text-white mb-2">300+</div>
                <p className="text-purple-300 font-semibold">Campaigns Managed</p>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">⚡</div>
                <div className="text-4xl font-black text-white mb-2">8.5+</div>
                <p className="text-pink-300 font-semibold">Avg Quality Score</p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">💰</div>
                <div className="text-4xl font-black text-white mb-2">₹50L+</div>
                <p className="text-green-300 font-semibold">Ad Spend Managed</p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Our Competitive Advantages:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 rounded-lg p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Certified Google Ads Experts</h4>
                    <p className="text-gray-300">Our team holds Google Ads certifications in Search, Display, Shopping, and YouTube, ensuring expert campaign management using latest best practices and beta features.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 rounded-lg p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Transparent Reporting</h4>
                    <p className="text-gray-300">Real-time dashboards show every rupee spent and every conversion generated. Monthly reports include ROI analysis, optimization recommendations, and competitive insights.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-600 rounded-lg p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Industry Expertise</h4>
                    <p className="text-gray-300">We&apos;ve managed SEM campaigns across 50+ industries in Mumbai including real estate, healthcare, education, e-commerce, professional services, and manufacturing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 rounded-lg p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Dedicated Account Manager</h4>
                    <p className="text-gray-300">Every client gets a dedicated SEM specialist who understands your business, responds quickly, and proactively identifies growth opportunities and optimization potential.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: SEM Campaign Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Our Proven <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SEM Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We follow a systematic, data-driven approach that ensures consistent results and continuous improvement.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">1</div>
                  <h3 className="text-2xl font-bold text-white">Campaign Strategy & Setup</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  We begin with comprehensive business analysis, competitive research, and goal setting. This discovery phase identifies your target audience, optimal keywords, budget allocation, and campaign structure that maximizes ROI from day one.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">2</div>
                  <h3 className="text-2xl font-bold text-white">Keyword Research & Ad Creation</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  Using advanced tools and Mumbai market insights, we identify high-converting keywords with optimal search volume and competition levels. We create compelling ad copy that drives clicks while maintaining high Quality Scores for cost efficiency.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">3</div>
                  <h3 className="text-2xl font-bold text-white">Campaign Launch & Monitoring</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  Campaigns go live within 48 hours after Google approval. We monitor performance daily, making immediate bid adjustments, pausing underperforming ads, and identifying early optimization opportunities during the critical first two weeks.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-900/20 to-red-900/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">4</div>
                  <h3 className="text-2xl font-bold text-white">Testing & Optimization</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  Continuous A/B testing of ad copy, landing pages, bidding strategies, and targeting options. We analyze search term reports, add negative keywords, discover new opportunities, and refine audience segments to improve performance week over week.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">5</div>
                  <h3 className="text-2xl font-bold text-white">Reporting & Strategy Refinement</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  Monthly performance reviews analyze what&apos;s working and what isn&apos;t. We provide detailed reports showing ROI, identify growth opportunities, adjust budgets based on performance, and evolve strategy as market conditions and business goals change.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Getting Started */}
          <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">Dominate</span> Paid Search?
              </h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Partner with Mumbai&apos;s leading SEM company to drive instant traffic, generate qualified leads, and achieve maximum ROI from your advertising budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-6xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us Today</h3>
                <p className="text-blue-200">+91-83695-11877</p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-blue-200">info@mydigitalcrown.in</p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Our Office</h3>
                <p className="text-blue-200">Chembur, Mumbai</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">What You Get with Our SEM Services:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">Free SEM audit worth ₹15,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">Custom campaign strategy tailored to your goals</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">Dedicated account manager and support team</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">Real-time dashboards and monthly reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">Guaranteed Quality Score of 7+ within 60 days</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">No long-term contracts—flexible engagement</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="tel:+918369511877" className="inline-block bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-110 transition-transform duration-300 shadow-2xl shadow-orange-500/50">
                Get Your Free SEM Audit Now →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Related Services */}
      {/* Our Locations */}

      <OurLocations />

      {/* Comprehensive Schema Markup - 15+ Types */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://mydigitalcrown.in/services/search-engine-marketing#service",
                "serviceType": "Search Engine Marketing Services",
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
                "offers": {
                  "@id": "https://mydigitalcrown.in/services/search-engine-marketing#offer"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "SEM Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Google Ads Management",
                        "description": "Certified Google Ads experts managing Search, Display, Shopping, YouTube, and Performance Max campaigns with 8-10 Quality Scores."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "PPC Campaign Optimization",
                        "description": "Continuous optimization of pay-per-click campaigns including bid management, keyword refinement, negative keywords, and dayparting."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Conversion Rate Optimization",
                        "description": "Landing page optimization, A/B testing, user behavior analysis, and funnel optimization to maximize conversions."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Remarketing Campaigns",
                        "description": "Strategic remarketing across Google Display Network and social platforms to re-engage website visitors and drive conversions."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Multi-Platform SEM Management",
                        "description": "Integrated advertising across Google Ads, Bing Ads, Facebook, Instagram, LinkedIn, and industry-specific platforms."
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@id": "https://mydigitalcrown.in/services/search-engine-marketing#aggregateRating"
                }
              },
              {
                "@type": "Organization",
                "@id": "https://mydigitalcrown.in/#organization",
                "name": "MyDigital Crown",
                "alternateName": "MyDigital Crown - SEM Company Mumbai",
                "url": "https://mydigitalcrown.in",
                "logo": "https://mydigitalcrown.in/images/logo.png",
                "description": "Mumbai's #1 Search Engine Marketing Company delivering 500% ROI. Expert Google Ads, PPC, and paid advertising services with ₹50L+ ad spend managed.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Chembur",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "postalCode": "400071",
                  "addressCountry": "IN"
                },
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+91-83695-11877",
                    "contactType": "Customer Service",
                    "areaServed": "IN",
                    "availableLanguage": ["English", "Hindi", "Marathi"]
                  },
                  {
                    "@type": "ContactPoint",
                    "email": "info@mydigitalcrown.in",
                    "contactType": "Sales"
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/mydigitalcrown",
                  "https://www.instagram.com/mydigitalcrown",
                  "https://www.linkedin.com/company/mydigitalcrown",
                  "https://twitter.com/mydigitalcrown"
                ],
                "founder": {
                  "@type": "Person",
                  "name": "Aditya Pandey"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://mydigitalcrown.in/services/search-engine-marketing#webpage",
                "url": "https://mydigitalcrown.in/services/search-engine-marketing",
                "name": "Search Engine Marketing Company In Mumbai | #1 SEM Agency | MyDigital Crown",
                "description": "Top Search Engine Marketing Company In Mumbai. 500% ROI Guaranteed. Google Ads, PPC Experts. Call +91-83695-11877",
                "isPartOf": {
                  "@id": "https://mydigitalcrown.in/#website"
                },
                "about": {
                  "@id": "https://mydigitalcrown.in/services/search-engine-marketing#service"
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://mydigitalcrown.in/images/sem-services-mumbai.jpg",
                  "width": 1200,
                  "height": 630
                },
                "datePublished": "2024-01-15T10:00:00+05:30",
                "dateModified": "2024-01-15T10:00:00+05:30",
                "breadcrumb": {
                  "@id": "https://mydigitalcrown.in/services/search-engine-marketing#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://mydigitalcrown.in/services/search-engine-marketing#breadcrumb",
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
                    "name": "Search Engine Marketing",
                    "item": "https://mydigitalcrown.in/services/search-engine-marketing"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://mydigitalcrown.in/services/search-engine-marketing#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is Search Engine Marketing (SEM)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "SEM is the practice of marketing your business using paid advertisements that appear on search engine results pages. When someone searches for keywords related to your business, your ads appear at the top of results, driving immediate traffic. This includes Google Ads, Bing Ads, and other paid search platforms."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much do your SEM services cost in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our SEM management starts at ₹20,000/month which includes campaign setup, optimization, reporting, and dedicated account management. Additionally, you need an ad budget (typically ₹15,000-₹2,00,000/month depending on industry and competition) which goes directly to Google/Bing for advertising."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly will I see results from SEM campaigns?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "SEM delivers instant results! Your ads can start appearing within 24-48 hours after approval. You'll see immediate traffic, clicks, and leads. Full optimization typically takes 30-60 days as we test and refine campaigns for maximum ROI."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's the difference between SEO and SEM?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "SEO (Search Engine Optimization) is free organic ranking that takes 3-6 months to see results but provides long-term traffic. SEM (Search Engine Marketing) is paid advertising that delivers instant visibility but requires ongoing ad spend. We recommend using both strategies together for comprehensive search dominance."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you measure SEM campaign success?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We track multiple KPIs including clicks, impressions, click-through rate (CTR), conversion rate, cost per click (CPC), cost per acquisition (CPA), Quality Score, return on ad spend (ROAS), and overall ROI. You'll receive detailed monthly reports showing exactly where your budget goes and what results it generates."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which advertising platforms do you manage?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We manage Google Ads (Search, Display, Shopping, YouTube, Performance Max), Bing Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, Amazon Advertising, and various industry-specific platforms depending on where your target audience searches and browses."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why is Quality Score important in Google Ads?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Quality Score (1-10 rating) determines your ad rank and cost per click. Higher Quality Scores mean lower costs and better ad positions. Our experts maintain 8-10 Quality Scores through relevant keywords, compelling ad copy, and optimized landing pages, reducing your ad spend by 30-50% compared to competitors."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you prevent wasted ad spend?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We prevent waste through comprehensive negative keyword lists, geographic targeting to Mumbai and relevant areas, dayparting showing ads only during high-conversion hours, device bid adjustments, continuous monitoring, and strict budget controls ensuring every rupee drives business value."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you optimize landing pages for SEM campaigns?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Landing page optimization is crucial for SEM success. We analyze user behavior, conduct A/B testing, improve page load speed, optimize for mobile, refine messaging and CTAs, add trust signals, and ensure seamless user experience to maximize conversion rates and reduce cost per acquisition."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is remarketing and why is it important?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Remarketing shows ads to people who previously visited your website but didn't convert. Since 95% of visitors don't buy on first visit, remarketing brings them back with targeted messaging. It delivers 2-3x higher conversion rates and 40-60% lower costs compared to cold traffic campaigns."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What kind of reporting do you provide?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You get real-time access to custom dashboards showing live performance data. Monthly reports include campaign overview, ROI analysis, keyword performance, ad copy testing results, conversion tracking, budget utilization, competitive insights, and strategic recommendations for the next month."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I get started with your SEM services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Getting started is easy! Call us at +91-83695-11877 or email info@mydigitalcrown.in. We'll conduct a free SEM audit analyzing your current advertising, competition, and opportunities. Then we'll create a custom strategy proposal with projected ROI. Once approved, campaigns launch within 48 hours!"
                    }
                  }
                ]
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://mydigitalcrown.in/#localbusiness",
                "name": "MyDigital Crown - SEM Company Mumbai",
                "image": "https://mydigitalcrown.in/images/logo.png",
                "priceRange": "₹₹₹",
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
                "url": "https://mydigitalcrown.in/services/search-engine-marketing",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "10:00",
                    "closes": "19:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "10:00",
                    "closes": "17:00"
                  }
                ],
                "aggregateRating": {
                  "@id": "https://mydigitalcrown.in/services/search-engine-marketing#aggregateRating"
                }
              },
              {
                "@type": "Offer",
                "@id": "https://mydigitalcrown.in/services/search-engine-marketing#offer",
                "price": "20000",
                "priceCurrency": "INR",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "20000",
                  "priceCurrency": "INR",
                  "referenceQuantity": {
                    "@type": "QuantitativeValue",
                    "value": "1",
                    "unitCode": "MON"
                  }
                },
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01T00:00:00+05:30",
                "seller": {
                  "@id": "https://mydigitalcrown.in/#organization"
                },
                "itemOffered": {
                  "@id": "https://mydigitalcrown.in/services/search-engine-marketing#service"
                }
              },
              {
                "@type": "HowTo",
                "@id": "https://mydigitalcrown.in/services/search-engine-marketing#howto",
                "name": "How to Launch Successful SEM Campaigns in Mumbai",
                "description": "Step-by-step process for creating profitable search engine marketing campaigns that deliver immediate results and maximum ROI.",
                "totalTime": "P30D",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "INR",
                  "value": "20000"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Campaign Strategy & Setup",
                    "text": "Conduct comprehensive business analysis, competitive research, and goal setting to identify target audience, optimal keywords, budget allocation, and campaign structure.",
                    "itemListElement": [
                      {
                        "@type": "HowToDirection",
                        "text": "Analyze your business model, target customers, and competition in Mumbai market"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Define clear campaign goals (leads, sales, brand awareness)"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Set realistic budgets based on industry benchmarks and expected ROI"
                      }
                    ]
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Keyword Research & Ad Creation",
                    "text": "Use advanced tools and Mumbai market insights to identify high-converting keywords with optimal search volume and create compelling ad copy.",
                    "itemListElement": [
                      {
                        "@type": "HowToDirection",
                        "text": "Research keywords your Mumbai customers are actively searching for"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Analyze competition levels and bid estimates for each keyword"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Write multiple ad variations with strong headlines and CTAs"
                      }
                    ]
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Campaign Launch & Monitoring",
                    "text": "Launch campaigns within 48 hours and monitor performance daily making immediate bid adjustments and optimizations.",
                    "itemListElement": [
                      {
                        "@type": "HowToDirection",
                        "text": "Submit campaigns for Google approval (typically 24-48 hours)"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Monitor initial performance focusing on click-through rates and Quality Scores"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Make quick adjustments to bids, budgets, and ad scheduling"
                      }
                    ]
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Testing & Optimization",
                    "text": "Continuous A/B testing of ad copy, landing pages, bidding strategies, and targeting options to improve performance week over week.",
                    "itemListElement": [
                      {
                        "@type": "HowToDirection",
                        "text": "Test different ad headlines, descriptions, and display URLs"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Analyze search term reports to add negative keywords and discover new opportunities"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Optimize landing pages for better conversion rates"
                      }
                    ]
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Reporting & Strategy Refinement",
                    "text": "Monthly performance reviews analyzing ROI, identifying growth opportunities, and evolving strategy based on market conditions.",
                    "itemListElement": [
                      {
                        "@type": "HowToDirection",
                        "text": "Generate detailed reports showing all key metrics and ROI"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Identify what's working and what needs improvement"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Adjust budgets and strategy based on performance data"
                      }
                    ]
                  }
                ]
              },
              {
                "@type": "Article",
                "@id": "https://mydigitalcrown.in/services/search-engine-marketing#article",
                "headline": "Complete Guide to Search Engine Marketing in Mumbai",
                "description": "Comprehensive guide to SEM services covering Google Ads, PPC optimization, conversion rate optimization, remarketing, and multi-platform advertising strategies for Mumbai businesses.",
                "author": {
                  "@type": "Person",
                  "name": "Aditya Pandey",
                  "url": "https://mydigitalcrown.in/about"
                },
                "publisher": {
                  "@id": "https://mydigitalcrown.in/#organization"
                },
                "datePublished": "2024-01-15T10:00:00+05:30",
                "dateModified": "2024-01-15T10:00:00+05:30",
                "mainEntityOfPage": {
                  "@id": "https://mydigitalcrown.in/services/search-engine-marketing#webpage"
                },
                "articleBody": "Search Engine Marketing (SEM) is the fastest way to reach customers actively searching for your products or services online. As Mumbai's premier SEM company, we help businesses dominate paid search results, generate qualified leads, and achieve measurable ROI from day one.",
                "wordCount": 1600
              },
              {
                "@type": "Review",
                "@id": "https://mydigitalcrown.in/services/search-engine-marketing#review1",
                "author": {
                  "@type": "Person",
                  "name": "Rajesh Mehta"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "MyDigital Crown transformed our online presence with their expert SEM management. We saw 400% ROI in just 3 months! Their Google Ads optimization reduced our cost per lead by 45% while tripling our lead volume. Highly recommended for any Mumbai business serious about growth.",
                "itemReviewed": {
                  "@id": "https://mydigitalcrown.in/services/search-engine-marketing#service"
                }
              },
              {
                "@type": "VideoObject",
                "@id": "https://mydigitalcrown.in/services/search-engine-marketing#video",
                "name": "How SEM Delivers Instant Traffic & Leads for Mumbai Businesses",
                "description": "Learn how search engine marketing works and why it's essential for immediate business growth in competitive Mumbai markets.",
                "thumbnailUrl": "https://mydigitalcrown.in/images/sem-video-thumbnail.jpg",
                "uploadDate": "2024-01-15T10:00:00+05:30",
                "contentUrl": "https://mydigitalcrown.in/videos/sem-guide.mp4",
                "embedUrl": "https://www.youtube.com/embed/example"
              },
              {
                "@type": "Course",
                "@id": "https://mydigitalcrown.in/services/search-engine-marketing#course",
                "name": "Advanced SEM Strategies for Business Growth",
                "description": "Comprehensive training on Google Ads, PPC optimization, conversion tracking, and ROI maximization for Mumbai businesses.",
                "provider": {
                  "@id": "https://mydigitalcrown.in/#organization"
                },
                "courseCode": "SEM-ADV-2024",
                "hasCourseInstance": {
                  "@type": "CourseInstance",
                  "courseMode": "Online",
                  "courseWorkload": "PT20H"
                }
              },
              {
                "@type": "SpecialAnnouncement",
                "@id": "https://mydigitalcrown.in/services/search-engine-marketing#announcement",
                "name": "Free SEM Audit Worth ₹15,000",
                "text": "Get a comprehensive SEM audit absolutely free! We'll analyze your current advertising, identify wasted spend, discover missed opportunities, and provide a custom strategy proposal with projected ROI.",
                "category": "https://www.wikidata.org/wiki/Q178651",
                "datePosted": "2024-01-15T10:00:00+05:30",
                "expires": "2024-12-31T23:59:59+05:30"
              },
              {
                "@type": "AggregateRating",
                "@id": "https://mydigitalcrown.in/services/search-engine-marketing#aggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              {
                "@type": "ItemList",
                "@id": "https://mydigitalcrown.in/services/search-engine-marketing#servicelist",
                "name": "SEM Services Offered in Mumbai",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Google Ads Management",
                    "url": "https://mydigitalcrown.in/services/search-engine-marketing#google-ads"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "PPC Campaign Optimization",
                    "url": "https://mydigitalcrown.in/services/search-engine-marketing#ppc"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Conversion Rate Optimization",
                    "url": "https://mydigitalcrown.in/services/search-engine-marketing#cro"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Remarketing Campaigns",
                    "url": "https://mydigitalcrown.in/services/search-engine-marketing#remarketing"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Multi-Platform Advertising",
                    "url": "https://mydigitalcrown.in/services/search-engine-marketing#multiplatform"
                  }
                ]
              }
            ]
          })
        }}
      />

      <noscript>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-700">
            <strong>Search Engine Marketing Company In Mumbai</strong> - MyDigital Crown is Mumbai&apos;s leading SEM agency delivering 500% average ROI. 
            Call +91-83695-11877 for expert Google Ads, PPC, and paid advertising services. 
            Our certified specialists have managed ₹50L+ in ad spend across 300+ campaigns. 
            Services include Google Ads Management, PPC Optimization, Conversion Rate Optimization, Remarketing Campaigns, and Multi-Platform Advertising. 
            Located in Chembur, Mumbai. Get your free SEM audit worth ₹15,000 today!
          </p>
        </div>
      </noscript>


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/search-engine-marketing"
        title="Complete Digital Marketing Solutions"
        description="Enhance your SEM campaigns with our comprehensive digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
