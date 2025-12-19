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
  title: 'Reputation Management Mumbai | 24/7 Brand Protection | ORM',
  description: 'Reputation Management Mumbai. 24/7 Monitoring | Crisis Control & Review Management | Negative Content Removal | ORM Experts. Call +91-83695-11877',
  keywords: [
    'reputation management company in mumbai',
    'reputation management company mumbai',
    'online reputation management mumbai',
    'orm company mumbai',
    'orm services mumbai',
    'brand reputation management mumbai',
    'reputation management agency mumbai',
    'reputation management services mumbai',
    'online reputation management company mumbai',
    'digital reputation management mumbai',
    'reputation management consultant mumbai',
    'reputation management expert mumbai',
    'review management company mumbai',
    'crisis management company mumbai',
    'online review management mumbai',
    'negative content removal mumbai',
    'reputation monitoring mumbai',
    'brand protection services mumbai',
    'reputation repair company mumbai',
    'reputation management firm mumbai',
    'best reputation management company mumbai',
    'top reputation management agency mumbai',
    'professional reputation management mumbai',
    'corporate reputation management mumbai',
    'personal reputation management mumbai',
    'executive reputation management mumbai',
    'reputation management specialist mumbai',
    'reputation management solutions mumbai',
    'reputation damage control mumbai',
    'reputation crisis management mumbai',
    'reputation monitoring services mumbai',
    'reputation management experts mumbai',
    'reputation management professionals mumbai',
    'mumbai reputation management company',
    'mumbai orm services',
    'mumbai brand protection'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Online Reputation Management Services',
  classification: 'Brand Protection & ORM Strategy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mydigitalcrown.in'),
  alternates: {
    canonical: '/services/reputation-management',
  },
  openGraph: {
    title: 'Reputation Management Company In Mumbai | #1 ORM Agency | MyDigital Crown',
    description: 'Top Reputation Management Company In Mumbai. Protect Your Brand 24/7. Crisis Control, Review Management, Content Removal Experts. Call +91-83695-11877',
    url: 'https://mydigitalcrown.in/services/reputation-management',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/orm-services-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Reputation Management Company In Mumbai - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reputation Management Company In Mumbai | #1 ORM Agency',
    description: 'Top Reputation Management Company In Mumbai. Protect Your Brand 24/7. Crisis Control Experts. Call +91-83695-11877',
    images: ['https://mydigitalcrown.in/images/orm-services-mumbai.jpg'],
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
    yandex: 'your-yandex-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function ReputationManagementPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Reputation Management Mumbai Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s #1 Reputation Management Company</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Reputation Management Company In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  Expert ORM Services | 24/7 Brand Monitoring | Crisis Control | 500+ Brands Protected
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Protect & Enhance Your Brand Reputation | Remove Negative Content | Build Trust Online
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">�️</span>
                    <span>Get Free Reputation Audit</span>
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
                    <div className="text-white text-base font-bold uppercase tracking-wider">Brands Protected</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">10K+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Reviews Managed</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">4.8★</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Average Rating</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">98%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Crisis Resolved</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Voice Search Quick Answers - VSO Optimized */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎯</span>
              Quick Answers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reputation Management</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Where in Mumbai */}
            <div className="group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-105">
              <div className="absolute top-6 right-6 text-6xl opacity-20">📍</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Where in Mumbai?</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Our reputation management experts serve all Mumbai areas including Andheri, Bandra, Powai, BKC, Lower Parel, Chembur, Thane, and Navi Mumbai with 24/7 monitoring and crisis response.
                </p>
                <div className="flex items-center gap-2 text-yellow-300 font-semibold">
                  <span>🏢</span>
                  <span>Serving All Mumbai Locations</span>
                </div>
              </div>
            </div>

            {/* How Much Cost */}
            <div className="group relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105">
              <div className="absolute top-6 right-6 text-6xl opacity-20">💰</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">How much do ORM services cost?</h3>
                <p className="text-purple-100 leading-relaxed mb-4">
                  Reputation management packages start from ₹25,000/month for basic monitoring. Comprehensive ORM with crisis management and content removal starts at ₹50,000/month. Custom enterprise solutions available.
                </p>
                <div className="flex items-center gap-2 text-yellow-300 font-semibold">
                  <span>💵</span>
                  <span>Starting ₹25,000/month</span>
                </div>
              </div>
            </div>

            {/* When Results */}
            <div className="group relative bg-gradient-to-br from-pink-600 to-pink-700 rounded-3xl p-8 shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 transform hover:scale-105">
              <div className="absolute top-6 right-6 text-6xl opacity-20">⏱️</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">When will I see results?</h3>
                <p className="text-pink-100 leading-relaxed mb-4">
                  Brand monitoring begins within 24 hours. Review management shows improvement in 7-14 days. Negative content suppression takes 30-90 days. Crisis control delivers immediate damage control within hours.
                </p>
                <div className="flex items-center gap-2 text-yellow-300 font-semibold">
                  <span>⚡</span>
                  <span>Monitoring starts in 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Reputation Management Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🛡️</span>
              Brand Protection
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reputation Management</span> Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect, monitor, and enhance your brand&apos;s online reputation with proactive strategies
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                    alt="Reputation Management Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 24/7 Monitoring</h3>
                <p className="text-gray-700 leading-relaxed">
                  Real-time brand monitoring across all digital platforms to catch and address issues instantly.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⭐ Review Management</h3>
                <p className="text-gray-700 leading-relaxed">
                  Strategic review generation and response management to build trust and improve ratings.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚨 Crisis Control</h3>
                <p className="text-gray-700 leading-relaxed">
                  Rapid response to negative content and reputation threats with proven crisis management strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reputation Management Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Reputation <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Management Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive reputation management solutions to protect and enhance your brand image
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📡</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Brand Monitoring</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Track brand mentions across social media, review sites, and news platforms in real-time.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Social Listening</li>
                  <li className="flex items-start gap-2">✓ Alert System</li>
                  <li className="flex items-start gap-2">✓ Sentiment Analysis</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⭐</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Review Management</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Generate positive reviews and professionally respond to all customer feedback.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Review Generation</li>
                  <li className="flex items-start gap-2">✓ Response Strategy</li>
                  <li className="flex items-start gap-2">✓ Rating Improvement</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🚨</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Crisis Management</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Rapid response to reputation threats with proven crisis communication strategies.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Crisis Response</li>
                  <li className="flex items-start gap-2">✓ Damage Control</li>
                  <li className="flex items-start gap-2">✓ Recovery Plan</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🗑️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Content Removal</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Remove or suppress negative content through legal and SEO strategies.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Negative Content Removal</li>
                  <li className="flex items-start gap-2">✓ SEO Suppression</li>
                  <li className="flex items-start gap-2">✓ Legal Takedowns</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📈</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Positive PR Building</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Build positive brand presence through strategic content and PR campaigns.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Positive Content</li>
                  <li className="flex items-start gap-2">✓ Press Releases</li>
                  <li className="flex items-start gap-2">✓ Brand Building</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Reputation Analytics</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Track and analyze your reputation score with detailed reporting and insights.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Reputation Scoring</li>
                  <li className="flex items-start gap-2">✓ Detailed Reports</li>
                  <li className="flex items-start gap-2">✓ Competitor Analysis</li>
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
              Ready to Protect Your<br />
              <span className="text-yellow-300">Brand Reputation?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our reputation management experts safeguard and enhance your brand image online!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Reputation Audit</span>
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
                <span>Reputation Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>500+ Brands Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        
        {/* Floating Emojis */}
        <div className="absolute top-32 left-20 text-6xl opacity-20 animate-bounce">🛡️</div>
        <div className="absolute top-64 right-32 text-6xl opacity-20 animate-bounce animation-delay-2000">⭐</div>
        <div className="absolute bottom-32 left-1/3 text-6xl opacity-20 animate-bounce animation-delay-4000">🚨</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">❓</span>
              Frequently Asked Questions
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Everything About <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">ORM Services</span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about online reputation management in Mumbai
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-blue-400/50 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">💡</span>
                  <h3 className="text-xl font-bold text-white">What is Online Reputation Management (ORM)?</h3>
                </div>
                <svg className="w-6 h-6 text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-blue-100 leading-relaxed">
                  ORM is the practice of monitoring, influencing, and protecting your brand&apos;s reputation across all digital channels. It involves tracking mentions, managing reviews, suppressing negative content, building positive presence, and responding to reputation threats. ORM ensures customers find accurate, positive information about your business when searching online, protecting your brand image and revenue.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-purple-400/50 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">💰</span>
                  <h3 className="text-xl font-bold text-white">How much do reputation management services cost in Mumbai?</h3>
                </div>
                <svg className="w-6 h-6 text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-purple-100 leading-relaxed">
                  Basic reputation monitoring starts at ₹25,000/month covering social media monitoring and review alerts. Comprehensive ORM including review management, crisis response, and content removal costs ₹50,000-₹1,00,000/month. Enterprise solutions for large brands with multiple locations start at ₹1,50,000/month. Crisis management retainers available separately. All packages include dedicated account managers and detailed monthly reports.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-green-400/50 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">⏱️</span>
                  <h3 className="text-xl font-bold text-white">How quickly can you fix my online reputation?</h3>
                </div>
                <svg className="w-6 h-6 text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-green-100 leading-relaxed">
                  Timeline varies by issue severity. Brand monitoring begins within 24 hours of onboarding. Crisis management delivers immediate damage control within hours. Review improvement shows results in 7-14 days through strategic response and generation. Negative content suppression takes 30-90 days using SEO and legal methods. Complete reputation recovery for severely damaged brands typically requires 3-6 months of sustained effort.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-yellow-400/50 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🎯</span>
                  <h3 className="text-xl font-bold text-white">What platforms do you monitor for reputation management?</h3>
                </div>
                <svg className="w-6 h-6 text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-yellow-100 leading-relaxed">
                  We monitor Google Reviews, Facebook, Instagram, Twitter, LinkedIn, YouTube, TripAdvisor, Justdial, Glassdoor, news websites, blogs, forums, Reddit, Quora, and industry-specific review sites. Our AI-powered tools track brand mentions, sentiment analysis, competitor activity, and emerging reputation threats across 100+ platforms in real-time, ensuring no negative content goes unnoticed.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-pink-400/50 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📊</span>
                  <h3 className="text-xl font-bold text-white">How do you remove negative content from Google?</h3>
                </div>
                <svg className="w-6 h-6 text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-pink-100 leading-relaxed">
                  We use three approaches: (1) Legal removal for defamatory, false, or policy-violating content through Google&apos;s legal request process. (2) SEO suppression by creating and ranking positive content to push negative results to page 2+. (3) Direct outreach to website owners requesting content removal or modification. Success rate: 65% complete removal, 90% suppression from page 1. Process takes 30-90 days depending on content type.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-orange-400/50 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🔍</span>
                  <h3 className="text-xl font-bold text-white">Can you improve my Google review rating?</h3>
                </div>
                <svg className="w-6 h-6 text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-orange-100 leading-relaxed">
                  Yes! We implement strategic review generation campaigns to collect authentic positive reviews from satisfied customers through automated email/SMS requests, QR codes, and review landing pages. We professionally respond to all reviews (positive and negative) to show engagement. We flag and remove fake/malicious reviews violating Google policies. Typical improvement: 0.5-1.5 star rating increase within 60-90 days through sustained effort.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🏆</span>
                  <h3 className="text-xl font-bold text-white">What happens during a reputation crisis?</h3>
                </div>
                <svg className="w-6 h-6 text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-cyan-100 leading-relaxed">
                  Our 24/7 crisis team activates immediately. Within 1 hour: assess situation severity and notify stakeholders. Within 3 hours: deploy holding statements and begin damage control. Within 24 hours: implement comprehensive crisis communication strategy across all channels. We coordinate media responses, suppress negative content, deploy positive PR, engage influencers, manage social media, and provide executive guidance until crisis resolution. Post-crisis reputation recovery and preventive measures follow.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-red-400/50 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🛡️</span>
                  <h3 className="text-xl font-bold text-white">Do you offer personal reputation management for executives?</h3>
                </div>
                <svg className="w-6 h-6 text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-red-100 leading-relaxed">
                  Absolutely! We provide specialized personal ORM for CEOs, celebrities, politicians, and high-profile individuals. Services include Google autocomplete suppression, privacy protection, negative content removal, positive content creation (Wikipedia, press releases, interviews), social media management, thought leadership building, and personal brand enhancement. Confidential handling with NDA protection. Premium packages starting ₹1,00,000/month for comprehensive personal reputation management.
                </p>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-indigo-400/50 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📝</span>
                  <h3 className="text-xl font-bold text-white">How do you handle fake negative reviews?</h3>
                </div>
                <svg className="w-6 h-6 text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-indigo-100 leading-relaxed">
                  We identify fake reviews through IP tracking, review patterns, and account analysis. We gather evidence proving policy violations (no purchase proof, competitor attacks, malicious intent). We submit detailed removal requests to Google, Facebook, TripAdvisor citing specific policy violations. We escalate through official channels and legal notices if needed. Success rate: 70-80% fake review removal. Also deploy positive reviews to dilute negative impact while removal is pending.
                </p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-teal-400/50 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🎪</span>
                  <h3 className="text-xl font-bold text-white">What reporting and analytics do you provide?</h3>
                </div>
                <svg className="w-6 h-6 text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-teal-100 leading-relaxed">
                  Real-time dashboard shows reputation score, sentiment trends, review statistics, brand mentions, competitor comparison, and crisis alerts. Weekly email digests highlight new reviews and mentions. Monthly comprehensive reports include reputation score analysis, review breakdown by platform, sentiment analysis, negative content status, crisis incidents handled, positive content published, ROI impact, and strategic recommendations for continuous improvement.
                </p>
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-violet-400/50 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📈</span>
                  <h3 className="text-xl font-bold text-white">Is ORM a one-time service or ongoing?</h3>
                </div>
                <svg className="w-6 h-6 text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-violet-100 leading-relaxed">
                  Reputation management requires ongoing monitoring and maintenance. While initial crisis resolution or negative content removal may be completed in 2-3 months, continuous monitoring prevents future issues. Online reputation constantly evolves with new reviews, mentions, and content. We recommend minimum 6-month engagements for initial reputation repair, then ongoing monthly retainers for sustained protection. Think of ORM like security - it&apos;s an ongoing investment in protecting your most valuable asset: your brand reputation.
                </p>
              </div>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-lime-400/50 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🚀</span>
                  <h3 className="text-xl font-bold text-white">How do I get started with your ORM services?</h3>
                </div>
                <svg className="w-6 h-6 text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-lime-100 leading-relaxed">
                  Getting started is simple! Call us at +91-83695-11877 or email info@mydigitalcrown.in for a free reputation audit. We&apos;ll analyze your current online presence across all major platforms, identify reputation threats, assess review ratings, and provide a detailed action plan with timelines and investment. Once approved, our team begins monitoring within 24 hours. Initial crisis issues addressed immediately while long-term reputation building commences.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ORM Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Understanding ORM */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-6">
                <span className="text-blue-300 font-semibold">🎯 Complete Guide</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Understanding <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Reputation Management</span> in Mumbai
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Online Reputation Management (ORM) is critical for Mumbai businesses in today&apos;s digital-first world. 92% of consumers read online reviews before making purchase decisions. A single negative review or crisis can cost millions in lost revenue and brand damage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Brand Protection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your brand reputation is your most valuable asset. ORM continuously monitors all digital channels protecting against negative content, fake reviews, competitor attacks, and reputation threats. Real-time alerts ensure no damaging content goes unnoticed, enabling immediate damage control before issues escalate into major crises.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold text-white mb-4">Trust Building</h3>
                <p className="text-gray-300 leading-relaxed">
                  Reviews drive purchasing decisions. Professional review management generates authentic positive reviews from satisfied customers, responds professionally to all feedback, and improves overall ratings. Strategic reputation building through positive content creation, PR campaigns, and thought leadership establishes your brand as industry leader in Mumbai.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-white mb-4">Revenue Impact</h3>
                <p className="text-gray-300 leading-relaxed">
                  Strong online reputation directly impacts bottom line. Studies show businesses with 4+ star ratings generate 26% more revenue than competitors. Effective ORM increases conversion rates, customer trust, premium pricing power, and competitive advantage. Mumbai businesses with managed reputations outperform competitors by 35% in customer acquisition.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Comprehensive ORM Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Our Complete <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">ORM Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                End-to-end reputation management protecting and enhancing your brand across all digital touchpoints
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 text-white text-3xl font-bold min-w-[80px] h-20 flex items-center justify-center">
                    01
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">24/7 Brand Monitoring & Alerts</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Our AI-powered monitoring system tracks brand mentions across 100+ platforms including Google Reviews, social media (Facebook, Instagram, Twitter, LinkedIn), review sites (TripAdvisor, Justdial, Glassdoor), news websites, blogs, forums, Reddit, and Quora. Real-time sentiment analysis identifies positive, negative, and neutral mentions enabling immediate response.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Instant SMS/email alerts notify stakeholders of critical mentions requiring urgent attention. Comprehensive dashboards provide reputation score tracking, sentiment trends, competitive analysis, and emerging threat identification. Weekly digests and monthly reports keep management informed of reputation health across all digital channels in Mumbai and beyond.
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
                    <h3 className="text-2xl font-bold text-white mb-4">Strategic Review Management</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Review generation campaigns collect authentic positive reviews from satisfied customers through automated email/SMS sequences, QR code displays, review landing pages, and incentivized review requests. We create platform-specific review funnels optimizing conversion rates for Google, Facebook, and industry-specific sites.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Professional review response service addresses every review within 24 hours with customized, empathetic responses showing customer care and resolving issues publicly. Strategic negative review suppression buries unfavorable reviews through positive review volume and SEO tactics. Fake review identification and removal eliminates malicious competitor attacks and policy-violating content through platform appeals and legal channels.
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
                    <h3 className="text-2xl font-bold text-white mb-4">Crisis Management & Damage Control</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      24/7 crisis response team activates within 1 hour of reputation threats. Immediate damage assessment, stakeholder notification, and holding statement deployment minimize initial impact. Comprehensive crisis communication strategy developed and deployed within 24 hours across all channels including media, social media, customers, and employees.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Crisis management includes negative content suppression through SEO, legal takedown coordination, media response coordination, social media management during crisis periods, influencer engagement for positive messaging, and executive communication coaching. Post-crisis reputation recovery plans rebuild trust systematically. Preventive crisis protocols and training prevent future incidents ensuring Mumbai businesses stay protected.
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
                    <h3 className="text-2xl font-bold text-white mb-4">Negative Content Removal & Suppression</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Legal content removal for defamatory, false, or policy-violating content through Google&apos;s legal removal process, platform-specific reporting, and cease-and-desist notices. Success rate 65% for complete removal of qualifying content. Direct outreach to website owners negotiating content removal or modification with compelling evidence and legal authority.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      SEO suppression strategies push negative content to page 2+ through creation and ranking of positive content assets (websites, articles, videos, profiles, press releases). Multi-channel content distribution across owned, earned, and paid media. Continuous optimization ensures negative content stays buried while positive content dominates first page search results for brand and key personnel names protecting Mumbai business reputations effectively.
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
                    <h3 className="text-2xl font-bold text-white mb-4">Positive Brand Building & PR</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Strategic content creation produces high-quality positive content establishing thought leadership and brand authority. Press release distribution through major news networks, industry publications, and local Mumbai media. Guest blogging on authoritative websites, podcast interviews, video content creation, and social media thought leadership campaigns position executives as industry experts.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Wikipedia page creation and maintenance for qualifying brands and executives. Google Knowledge Panel optimization ensures accurate brand information displays prominently. Strategic partnerships and awards increase positive brand associations. Influencer collaborations and testimonial campaigns build social proof. Continuous positive content publishing creates sustainable reputation foundation protecting against future negative content impact through sheer volume and authority of positive assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Why Choose Us */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Why Mumbai Businesses <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Trust Us</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Proven track record protecting 500+ brands with 98% crisis resolution rate and 4.8-star average client satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">🏆</div>
                <div className="text-4xl font-black text-white mb-2">500+</div>
                <p className="text-blue-300 font-semibold">Brands Protected</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">⚡</div>
                <div className="text-4xl font-black text-white mb-2">10K+</div>
                <p className="text-purple-300 font-semibold">Reviews Managed</p>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">🎯</div>
                <div className="text-4xl font-black text-white mb-2">98%</div>
                <p className="text-pink-300 font-semibold">Crisis Resolved</p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">⭐</div>
                <div className="text-4xl font-black text-white mb-2">4.8</div>
                <p className="text-green-300 font-semibold">Client Satisfaction</p>
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
                    <h4 className="text-lg font-bold text-white mb-2">24/7 Crisis Response Team</h4>
                    <p className="text-gray-300">Round-the-clock monitoring and immediate crisis response within 1 hour ensuring no reputation threat goes unaddressed regardless of timing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 rounded-lg p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">AI-Powered Monitoring</h4>
                    <p className="text-gray-300">Advanced sentiment analysis and threat detection across 100+ platforms using machine learning algorithms identifying issues before they escalate.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-600 rounded-lg p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Mumbai Market Expertise</h4>
                    <p className="text-gray-300">Deep understanding of Mumbai business landscape, local media, and regional reputation dynamics ensuring culturally relevant strategies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 rounded-lg p-2 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Transparent Reporting</h4>
                    <p className="text-gray-300">Real-time dashboards, weekly digests, and comprehensive monthly reports with reputation scores, sentiment trends, and actionable recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: ORM Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Our Proven <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">ORM Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Systematic approach delivering consistent reputation protection and enhancement results
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">1</div>
                  <h3 className="text-2xl font-bold text-white">Reputation Audit & Assessment</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  Comprehensive analysis of current online presence across all platforms. Review rating analysis, negative content identification, competitor benchmarking, and reputation threat assessment. Detailed audit report with reputation score, SWOT analysis, and strategic recommendations forms foundation for customized ORM strategy.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">2</div>
                  <h3 className="text-2xl font-bold text-white">Strategy Development & Setup</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  Custom ORM strategy developed addressing identified weaknesses and threats. Monitoring setup across all relevant platforms with alert configurations. Review generation systems implemented. Crisis response protocols established. Positive content calendar created. Team training and stakeholder alignment ensures everyone understands reputation protection procedures.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">3</div>
                  <h3 className="text-2xl font-bold text-white">Active Monitoring & Response</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  24/7 monitoring identifies all brand mentions across digital ecosystem. Review responses deployed within 24 hours. Positive review generation campaigns drive continuous rating improvement. Negative content flagged for suppression or removal. Crisis alerts trigger immediate response protocols ensuring no reputation threat goes unaddressed.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-900/20 to-red-900/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">4</div>
                  <h3 className="text-2xl font-bold text-white">Content Creation & PR</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  Strategic positive content created and published continuously. Press releases, blog articles, social media posts, video content, and executive thought leadership build positive brand narrative. SEO optimization ensures positive content ranks prominently for brand searches suppressing any negative content effectively.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">5</div>
                  <h3 className="text-2xl font-bold text-white">Reporting & Optimization</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  Weekly performance digests and monthly comprehensive reports track reputation metrics, sentiment trends, review statistics, crisis incidents, and content performance. Data-driven optimization refines strategies continuously improving reputation outcomes. Quarterly strategy reviews ensure alignment with evolving business goals and market conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Getting Started */}
          <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">Protect</span> Your Reputation?
              </h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Partner with Mumbai&apos;s leading reputation management company to safeguard your brand, build trust, and drive business growth through strategic online reputation management.
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
              <h3 className="text-2xl font-bold text-white mb-4 text-center">What You Get with Our ORM Services:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">Free reputation audit worth ₹20,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">24/7 brand monitoring across 100+ platforms</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">Dedicated reputation manager and crisis team</span>
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
                  <span className="text-gray-200">Guaranteed response within 1 hour during crisis</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">Flexible monthly retainers—no long-term lock-in</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="tel:+918369511877" className="inline-block bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-110 transition-transform duration-300 shadow-2xl shadow-orange-500/50">
                Get Your Free Reputation Audit Now →
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
                "@id": "https://mydigitalcrown.in/services/reputation-management#service",
                "serviceType": "Online Reputation Management Services",
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
                  "@id": "https://mydigitalcrown.in/services/reputation-management#offer"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "ORM Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Brand Monitoring",
                        "description": "24/7 monitoring across 100+ platforms with real-time alerts and sentiment analysis."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Review Management",
                        "description": "Strategic review generation, professional responses, and rating improvement services."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Crisis Management",
                        "description": "24/7 crisis response team with immediate damage control and reputation recovery."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Content Removal",
                        "description": "Legal removal and SEO suppression of negative content across search engines."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Positive PR Building",
                        "description": "Strategic content creation, press releases, and thought leadership campaigns."
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@id": "https://mydigitalcrown.in/services/reputation-management#aggregateRating"
                }
              },
              {
                "@type": "Organization",
                "@id": "https://mydigitalcrown.in/#organization",
                "name": "MyDigital Crown",
                "alternateName": "MyDigital Crown - Reputation Management Company Mumbai",
                "url": "https://mydigitalcrown.in",
                "logo": "https://mydigitalcrown.in/images/logo.png",
                "description": "Mumbai's #1 Reputation Management Company protecting 500+ brands. 24/7 monitoring, crisis control, review management, and content removal experts.",
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
                    "availableLanguage": ["English", "Hindi", "Marathi"],
                    "hoursAvailable": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                      ],
                      "opens": "00:00",
                      "closes": "23:59"
                    }
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
                "@id": "https://mydigitalcrown.in/services/reputation-management#webpage",
                "url": "https://mydigitalcrown.in/services/reputation-management",
                "name": "Reputation Management Company In Mumbai | #1 ORM Agency | MyDigital Crown",
                "description": "Top Reputation Management Company In Mumbai. Protect Your Brand 24/7. Crisis Control, Review Management, Content Removal Experts. Call +91-83695-11877",
                "isPartOf": {
                  "@id": "https://mydigitalcrown.in/#website"
                },
                "about": {
                  "@id": "https://mydigitalcrown.in/services/reputation-management#service"
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://mydigitalcrown.in/images/orm-services-mumbai.jpg",
                  "width": 1200,
                  "height": 630
                },
                "datePublished": "2024-01-15T10:00:00+05:30",
                "dateModified": "2024-01-15T10:00:00+05:30",
                "breadcrumb": {
                  "@id": "https://mydigitalcrown.in/services/reputation-management#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://mydigitalcrown.in/services/reputation-management#breadcrumb",
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
                    "name": "Reputation Management",
                    "item": "https://mydigitalcrown.in/services/reputation-management"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://mydigitalcrown.in/services/reputation-management#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is Online Reputation Management (ORM)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "ORM is the practice of monitoring, influencing, and protecting your brand's reputation across all digital channels. It involves tracking mentions, managing reviews, suppressing negative content, building positive presence, and responding to reputation threats. ORM ensures customers find accurate, positive information about your business when searching online, protecting your brand image and revenue."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much do reputation management services cost in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Basic reputation monitoring starts at ₹25,000/month covering social media monitoring and review alerts. Comprehensive ORM including review management, crisis response, and content removal costs ₹50,000-₹1,00,000/month. Enterprise solutions for large brands with multiple locations start at ₹1,50,000/month. Crisis management retainers available separately. All packages include dedicated account managers and detailed monthly reports."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly can you fix my online reputation?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Timeline varies by issue severity. Brand monitoring begins within 24 hours of onboarding. Crisis management delivers immediate damage control within hours. Review improvement shows results in 7-14 days through strategic response and generation. Negative content suppression takes 30-90 days using SEO and legal methods. Complete reputation recovery for severely damaged brands typically requires 3-6 months of sustained effort."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What platforms do you monitor for reputation management?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We monitor Google Reviews, Facebook, Instagram, Twitter, LinkedIn, YouTube, TripAdvisor, Justdial, Glassdoor, news websites, blogs, forums, Reddit, Quora, and industry-specific review sites. Our AI-powered tools track brand mentions, sentiment analysis, competitor activity, and emerging reputation threats across 100+ platforms in real-time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you remove negative content from Google?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We use three approaches: (1) Legal removal for defamatory, false, or policy-violating content through Google's legal request process. (2) SEO suppression by creating and ranking positive content to push negative results to page 2+. (3) Direct outreach to website owners requesting content removal or modification. Success rate: 65% complete removal, 90% suppression from page 1. Process takes 30-90 days."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you improve my Google review rating?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! We implement strategic review generation campaigns to collect authentic positive reviews from satisfied customers through automated email/SMS requests, QR codes, and review landing pages. We professionally respond to all reviews and flag/remove fake reviews. Typical improvement: 0.5-1.5 star rating increase within 60-90 days."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What happens during a reputation crisis?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our 24/7 crisis team activates immediately. Within 1 hour: assess situation and notify stakeholders. Within 3 hours: deploy holding statements and damage control. Within 24 hours: implement comprehensive crisis communication across all channels. We coordinate media responses, suppress negative content, deploy positive PR, and provide executive guidance until crisis resolution."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer personal reputation management for executives?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! We provide specialized personal ORM for CEOs, celebrities, politicians, and high-profile individuals. Services include Google autocomplete suppression, privacy protection, negative content removal, positive content creation, social media management, and thought leadership building. Premium packages starting ₹1,00,000/month with NDA protection."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you handle fake negative reviews?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We identify fake reviews through IP tracking, review patterns, and account analysis. We gather evidence proving policy violations and submit detailed removal requests to platforms citing specific violations. We escalate through official channels and legal notices if needed. Success rate: 70-80% fake review removal. Also deploy positive reviews to dilute impact."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What reporting and analytics do you provide?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Real-time dashboard shows reputation score, sentiment trends, review statistics, brand mentions, competitor comparison, and crisis alerts. Weekly email digests highlight new reviews and mentions. Monthly comprehensive reports include reputation score analysis, review breakdown, sentiment analysis, negative content status, crisis incidents, positive content published, ROI impact, and recommendations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is ORM a one-time service or ongoing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Reputation management requires ongoing monitoring and maintenance. While initial crisis resolution may complete in 2-3 months, continuous monitoring prevents future issues. We recommend minimum 6-month engagements for initial reputation repair, then ongoing monthly retainers for sustained protection. Think of ORM like security—it's an ongoing investment in protecting your brand."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I get started with your ORM services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Call us at +91-83695-11877 or email info@mydigitalcrown.in for a free reputation audit. We'll analyze your current online presence, identify reputation threats, assess review ratings, and provide a detailed action plan with timelines. Once approved, monitoring begins within 24 hours with immediate crisis issue addressing."
                    }
                  }
                ]
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://mydigitalcrown.in/#localbusiness",
                "name": "MyDigital Crown - Reputation Management Company Mumbai",
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
                "url": "https://mydigitalcrown.in/services/reputation-management",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "00:00",
                    "closes": "23:59"
                  }
                ],
                "aggregateRating": {
                  "@id": "https://mydigitalcrown.in/services/reputation-management#aggregateRating"
                }
              },
              {
                "@type": "Offer",
                "@id": "https://mydigitalcrown.in/services/reputation-management#offer",
                "price": "25000",
                "priceCurrency": "INR",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "25000",
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
                  "@id": "https://mydigitalcrown.in/services/reputation-management#service"
                }
              },
              {
                "@type": "HowTo",
                "@id": "https://mydigitalcrown.in/services/reputation-management#howto",
                "name": "How to Protect Your Brand Reputation Online",
                "description": "Step-by-step process for implementing comprehensive online reputation management protecting brand image and building customer trust.",
                "totalTime": "P90D",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "INR",
                  "value": "25000"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Reputation Audit & Assessment",
                    "text": "Conduct comprehensive analysis of current online presence across all platforms. Review rating analysis, negative content identification, competitor benchmarking, and reputation threat assessment.",
                    "itemListElement": [
                      {
                        "@type": "HowToDirection",
                        "text": "Analyze current reputation across Google, social media, review sites"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Identify negative content and reputation threats"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Benchmark against competitors and industry standards"
                      }
                    ]
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Strategy Development & Setup",
                    "text": "Develop custom ORM strategy addressing identified weaknesses. Setup monitoring across platforms with alert configurations, review generation systems, and crisis protocols.",
                    "itemListElement": [
                      {
                        "@type": "HowToDirection",
                        "text": "Create customized reputation management strategy"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Implement monitoring tools and alert systems"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Establish crisis response protocols and team training"
                      }
                    ]
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Active Monitoring & Response",
                    "text": "24/7 monitoring identifies brand mentions. Deploy review responses within 24 hours, run review generation campaigns, flag negative content for suppression.",
                    "itemListElement": [
                      {
                        "@type": "HowToDirection",
                        "text": "Monitor all brand mentions across 100+ platforms"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Respond to reviews professionally within 24 hours"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Execute review generation and crisis response protocols"
                      }
                    ]
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Content Creation & PR",
                    "text": "Create and publish strategic positive content. Press releases, articles, social posts, video content, and thought leadership build positive brand narrative.",
                    "itemListElement": [
                      {
                        "@type": "HowToDirection",
                        "text": "Develop positive content across multiple formats"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Optimize content for search engines and social platforms"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Suppress negative content through positive content volume"
                      }
                    ]
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Reporting & Optimization",
                    "text": "Track reputation metrics, sentiment trends, and content performance. Data-driven optimization refines strategies for continuous improvement.",
                    "itemListElement": [
                      {
                        "@type": "HowToDirection",
                        "text": "Monitor reputation score and key performance indicators"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Generate weekly and monthly performance reports"
                      },
                      {
                        "@type": "HowToDirection",
                        "text": "Optimize strategy based on data insights and trends"
                      }
                    ]
                  }
                ]
              },
              {
                "@type": "Article",
                "@id": "https://mydigitalcrown.in/services/reputation-management#article",
                "headline": "Complete Guide to Online Reputation Management in Mumbai",
                "description": "Comprehensive guide to ORM services covering brand monitoring, review management, crisis control, negative content removal, and positive PR building for Mumbai businesses.",
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
                  "@id": "https://mydigitalcrown.in/services/reputation-management#webpage"
                },
                "articleBody": "Online Reputation Management (ORM) is critical for Mumbai businesses in today's digital-first world. 92% of consumers read online reviews before making purchase decisions. A single negative review or crisis can cost millions in lost revenue and brand damage.",
                "wordCount": 1600
              },
              {
                "@type": "Review",
                "@id": "https://mydigitalcrown.in/services/reputation-management#review1",
                "author": {
                  "@type": "Person",
                  "name": "Priya Sharma"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "MyDigital Crown saved our brand reputation during a major crisis! Their 24/7 monitoring caught negative content within hours, and their crisis team had a response strategy deployed within 3 hours. Within 30 days, the negative content was suppressed and our review rating improved from 2.8 to 4.6 stars. Highly recommend their ORM expertise!",
                "itemReviewed": {
                  "@id": "https://mydigitalcrown.in/services/reputation-management#service"
                }
              },
              {
                "@type": "VideoObject",
                "@id": "https://mydigitalcrown.in/services/reputation-management#video",
                "name": "How Reputation Management Protects Your Brand in Mumbai",
                "description": "Learn how online reputation management works and why it's essential for protecting your brand image and driving business growth in competitive Mumbai markets.",
                "thumbnailUrl": "https://mydigitalcrown.in/images/orm-video-thumbnail.jpg",
                "uploadDate": "2024-01-15T10:00:00+05:30",
                "contentUrl": "https://mydigitalcrown.in/videos/orm-guide.mp4",
                "embedUrl": "https://www.youtube.com/embed/example"
              },
              {
                "@type": "Course",
                "@id": "https://mydigitalcrown.in/services/reputation-management#course",
                "name": "Advanced ORM Strategies for Business Protection",
                "description": "Comprehensive training on brand monitoring, crisis management, review optimization, and reputation building for Mumbai businesses.",
                "provider": {
                  "@id": "https://mydigitalcrown.in/#organization"
                },
                "courseCode": "ORM-ADV-2024",
                "hasCourseInstance": {
                  "@type": "CourseInstance",
                  "courseMode": "Online",
                  "courseWorkload": "PT15H"
                }
              },
              {
                "@type": "SpecialAnnouncement",
                "@id": "https://mydigitalcrown.in/services/reputation-management#announcement",
                "name": "Free Reputation Audit Worth ₹20,000",
                "text": "Get a comprehensive reputation audit absolutely free! We'll analyze your online presence across all platforms, identify reputation threats, assess review ratings, and provide a detailed action plan with timelines and investment recommendations.",
                "category": "https://www.wikidata.org/wiki/Q178651",
                "datePosted": "2024-01-15T10:00:00+05:30",
                "expires": "2024-12-31T23:59:59+05:30"
              },
              {
                "@type": "AggregateRating",
                "@id": "https://mydigitalcrown.in/services/reputation-management#aggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "152",
                "bestRating": "5",
                "worstRating": "1"
              },
              {
                "@type": "ItemList",
                "@id": "https://mydigitalcrown.in/services/reputation-management#servicelist",
                "name": "Reputation Management Services Offered in Mumbai",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "24/7 Brand Monitoring",
                    "url": "https://mydigitalcrown.in/services/reputation-management#monitoring"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Review Management",
                    "url": "https://mydigitalcrown.in/services/reputation-management#reviews"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Crisis Management",
                    "url": "https://mydigitalcrown.in/services/reputation-management#crisis"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Content Removal & Suppression",
                    "url": "https://mydigitalcrown.in/services/reputation-management#content-removal"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Positive PR Building",
                    "url": "https://mydigitalcrown.in/services/reputation-management#pr"
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
            <strong>Reputation Management Company In Mumbai</strong> - MyDigital Crown is Mumbai&apos;s leading ORM agency protecting 500+ brands 24/7. 
            Call +91-83695-11877 for expert brand monitoring, crisis control, review management, and negative content removal services. 
            Our specialized team provides 24/7 monitoring across 100+ platforms with immediate crisis response within 1 hour. 
            Services include Brand Monitoring, Review Management, Crisis Management, Content Removal & Suppression, Positive PR Building, and Reputation Analytics. 
            Located in Chembur, Mumbai. Get your free reputation audit worth ₹20,000 today! 
            Proven results: 98% crisis resolution rate, 4.8-star client satisfaction, 10,000+ reviews managed successfully.
          </p>
        </div>
      </noscript>


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/reputation-management"
        title="Complete Brand Protection Solutions"
        description="Enhance your reputation management with our comprehensive digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
