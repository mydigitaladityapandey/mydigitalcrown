import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EnquiryForm from '@/app/components/EnquiryForm'
import TrustedBrands from '@/app/components/TrustedBrands'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from "next/link";
import Image from 'next/image'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Ads Mumbai | 500% ROI | PPC Campaign Management',
  description: 'Google Ads Mumbai. 500% ROI Guaranteed | Expert PPC, Search, Shopping & Display Ads | Campaign Optimization. Call +91-83695-11877',
  keywords: [
    'google ads service in mumbai',
    'google ads mumbai',
    'ppc service mumbai',
    'google ads agency mumbai',
    'google ads company mumbai',
    'google adwords mumbai',
    'ppc management mumbai',
    'google ads expert mumbai',
    'paid search advertising mumbai',
    'google advertising mumbai',
    'search ads mumbai',
    'display ads mumbai',
    'shopping ads mumbai',
    'youtube ads mumbai',
    'remarketing ads mumbai',
    'google ads consultant mumbai',
    'ppc agency mumbai',
    'google ads specialist mumbai',
    'sem services mumbai',
    'paid advertising mumbai',
    'google ads campaign mumbai',
    'ppc expert mumbai',
    'google ads management mumbai',
    'adwords management mumbai',
    'google search ads mumbai',
    'google display network mumbai',
    'ppc consultant mumbai',
    'google ads optimization mumbai',
    'pay per click mumbai',
    'google ads roi mumbai',
    'conversion tracking mumbai',
    'quality score optimization mumbai',
    'ad copy writing mumbai',
    'landing page optimization mumbai',
    'google ads audit mumbai',
    'certified google ads partner mumbai'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Paid Advertising Services',
  classification: 'Google Ads & PPC Campaign Management',
  openGraph: {
    title: 'Google Ads Service In Mumbai | Expert PPC Management & ROI',
    description: 'Mumbai\'s leading Google Ads service delivering 500% ROI. Expert PPC campaigns with search ads, shopping ads, display ads. 150 happy clients. Fast results.',
    url: 'https://mydigitalcrown.in/services/google-ads',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/google-ads-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Google Ads Service In Mumbai - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Service In Mumbai | Expert PPC Management',
    description: 'Top Google Ads Service In Mumbai. 500% ROI guaranteed. Expert PPC campaigns, search ads, shopping ads. Call +91-83695-11877',
    images: ['https://mydigitalcrown.in/images/google-ads-twitter.jpg'],
    creator: '@mydigitalcrown',
  },
  alternates: {
    canonical: 'https://mydigitalcrown.in/services/google-ads',
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
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function GoogleAds() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Google Ads Management Mumbai Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s Top Google Ads Agency</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Google Ads Service In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  🎯 Get <span className="text-yellow-300">Instant Traffic</span>, <span className="text-green-300">Quality Leads</span> & <span className="text-orange-300">Maximum ROI</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Search Ads | Display Ads | Shopping Ads | YouTube Ads | Remarketing
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
                    <span>Start Campaign Now</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">500%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Average ROI</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">₹10L+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Ad Spend Managed</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">15%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Avg CTR</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">200+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Campaigns Managed</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Voice Search Quick Answers Section - VSO Optimization */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎤</span>
              Quick Answers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Google Ads Service <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Quick Info</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about our Google Ads services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Where are we located?</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  <strong className="text-yellow-300">MyDigital Crown</strong> is based in <strong className="text-green-300">Chembur, Mumbai, Maharashtra - 400071</strong>. We serve clients across Mumbai, Navi Mumbai, Thane, and throughout India.
                </p>
                <p className="text-blue-200 text-sm">
                  Also serving: Bangalore, Delhi, Pune, Hyderabad, Chennai, Kolkata, Ahmedabad
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💰</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">How much does it cost?</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  <strong className="text-yellow-300">Google Ads management: ₹15,000-50,000/month</strong> (based on ad spend). Setup fee: ₹10,000-25,000. Minimum ad budget: ₹20,000/month. <strong className="text-green-300">Flexible packages</strong> for startups and enterprises.
                </p>
                <p className="text-blue-200 text-sm">
                  Custom pricing available. Free audit & consultation included.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⏱️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">When will I see results?</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  <strong className="text-yellow-300">Immediate traffic</strong> within 24-48 hours of campaign launch. <strong className="text-green-300">Optimized results in 2-4 weeks</strong> as we refine targeting and bidding. Full ROI visibility in 30-60 days with continuous optimization.
                </p>
                <p className="text-blue-200 text-sm">
                  Weekly reports. Monthly strategy reviews. 24/7 campaign monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Google Ads Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎯</span>
              Google Ads Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Google Ads</span> Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drive instant traffic and conversions with data-driven Google Ads campaigns
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                    alt="Google Ads Management Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Maximum ROI</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every rupee counts. Our data-driven approach ensures you get the best return on your ad spend with optimized campaigns and continuous monitoring.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Targeted Reach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reach your ideal customers at the right time. Advanced targeting options ensure your ads are shown to people actively searching for your products or services.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 Transparent Reporting</h3>
                <p className="text-gray-700 leading-relaxed">
                  Complete visibility into your campaigns. Detailed reports on clicks, conversions, costs, and ROI delivered regularly to keep you informed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Ads Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Google Ads <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Complete Google Ads management for every business goal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Search Ads</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Appear at the top of Google search results when customers are actively looking for your products or services.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Keyword Research & Selection</li>
                  <li className="flex items-start gap-2">✓ Compelling Ad Copy</li>
                  <li className="flex items-start gap-2">✓ Bid Optimization</li>
                  <li className="flex items-start gap-2">✓ A/B Testing</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🖼️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Display Ads</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Eye-catching visual ads across millions of websites on the Google Display Network to build brand awareness.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Creative Banner Design</li>
                  <li className="flex items-start gap-2">✓ Audience Targeting</li>
                  <li className="flex items-start gap-2">✓ Remarketing Campaigns</li>
                  <li className="flex items-start gap-2">✓ GDN Placement</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🛒</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Shopping Ads</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Showcase your products with images, prices, and details directly in Google search results for e-commerce success.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Product Feed Setup</li>
                  <li className="flex items-start gap-2">✓ Merchant Center Management</li>
                  <li className="flex items-start gap-2">✓ Smart Shopping Campaigns</li>
                  <li className="flex items-start gap-2">✓ ROI Tracking</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">▶️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">YouTube Ads</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Engage viewers with video ads on YouTube and across the web. Perfect for brand storytelling and awareness.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Video Ad Creation</li>
                  <li className="flex items-start gap-2">✓ TrueView Campaigns</li>
                  <li className="flex items-start gap-2">✓ Bumper Ads</li>
                  <li className="flex items-start gap-2">✓ Audience Targeting</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔄</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Remarketing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Re-engage visitors who didn&apos;t convert the first time. Stay top-of-mind and bring them back to complete their purchase.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Pixel Setup & Tracking</li>
                  <li className="flex items-start gap-2">✓ Custom Audiences</li>
                  <li className="flex items-start gap-2">✓ Dynamic Remarketing</li>
                  <li className="flex items-start gap-2">✓ Cart Abandonment</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Campaign Management</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Full-service campaign management with continuous optimization, monitoring, and reporting for best results.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Performance Monitoring</li>
                  <li className="flex items-start gap-2">✓ Budget Optimization</li>
                  <li className="flex items-start gap-2">✓ Conversion Tracking</li>
                  <li className="flex items-start gap-2">✓ Monthly Reports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <ClientSuccessStories />

      {/* Content Section 1: Understanding Google Ads */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">💡</span>
              Understanding Google Ads
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Makes Google Ads <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">So Powerful?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Google Ads is the world&apos;s most effective advertising platform, capturing users at the exact moment they&apos;re searching for your products or services. With over 8.5 billion searches per day on Google, your potential customers are actively looking for businesses like yours right now. The question isn&apos;t whether you should advertise on Google - it&apos;s whether you can afford NOT to be visible when your competitors are stealing your potential customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Intent-Based Targeting</h3>
              <p className="text-gray-300 leading-relaxed">
                Unlike social media ads that interrupt users, <strong className="text-blue-400">Google Ads targets people actively searching</strong> for what you offer. When someone types &quot;best digital marketing agency in Mumbai&quot; into Google, they have <strong className="text-green-400">high purchase intent</strong>. They&apos;re not browsing casually - they&apos;re ready to take action. This makes Google Ads incredibly efficient for <strong className="text-yellow-400">lead generation and sales</strong>. You&apos;re not convincing people they need your service; you&apos;re showing up exactly when they&apos;re already convinced and looking for a provider. The conversion rates are significantly higher because the audience is pre-qualified by their own search behavior.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Results</h3>
              <p className="text-gray-300 leading-relaxed">
                While SEO takes 3-6 months to show results, <strong className="text-blue-400">Google Ads delivers immediate visibility</strong>. Launch a campaign today, and you&apos;ll start receiving clicks within hours. This is perfect for <strong className="text-green-400">new product launches, seasonal promotions, or filling your pipeline quickly</strong>. Need 50 leads this month? Google Ads can deliver them within weeks, not months. The instant feedback also allows <strong className="text-yellow-400">rapid testing and optimization</strong> - you can try different ad copies, landing pages, and targeting options, seeing results within days. This speed enables data-driven decision making that would take months with organic strategies alone.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Complete Budget Control</h3>
              <p className="text-gray-300 leading-relaxed">
                With Google Ads, <strong className="text-blue-400">you set daily budgets and maximum bids</strong>, ensuring you never spend more than planned. Whether your budget is ₹500/day or ₹50,000/day, the platform works for you. You only pay when someone clicks your ad (pay-per-click model), so <strong className="text-green-400">every rupee goes toward driving traffic</strong>. No wasted impressions on uninterested users. Advanced bidding strategies like Target CPA (Cost Per Acquisition) and Target ROAS (Return on Ad Spend) use machine learning to maximize results within your budget. <strong className="text-yellow-400">Pause, adjust, or stop campaigns instantly</strong> if needed - you&apos;re always in control of your advertising spend and can scale up or down based on performance and business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2: Campaign Types Deep Dive */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🚀</span>
              Campaign Types
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choosing the Right <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Campaign Type</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Google offers multiple campaign types, each designed for specific business goals. The key to success is matching the right campaign type to your objectives - whether that&apos;s driving website traffic, generating phone calls, increasing store visits, or boosting online sales. Most successful advertisers run multi-channel campaigns, using different ad formats to reach customers at various stages of the buying journey. Here&apos;s a comprehensive breakdown of each campaign type and when to use it for maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:animate-bounce">
                <span className="text-3xl">🔍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Search Campaigns</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  <strong className="text-yellow-300">Text ads appearing in Google search results</strong> when users search for your keywords. Best for: high-intent customers ready to buy, service-based businesses, local companies, B2B lead generation. Captures demand when it exists. Typically highest conversion rates and ROI.
                </p>
                <ul className="space-y-2 text-blue-200 text-sm">
                  <li>✓ Keyword targeting precision</li>
                  <li>✓ Location-based targeting</li>
                  <li>✓ Call extensions for phone leads</li>
                  <li>✓ Sitelink extensions for multiple CTAs</li>
                  <li>✓ Ad scheduling for peak times</li>
                  <li>✓ Competitor keyword targeting</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:animate-bounce">
                <span className="text-3xl">🖼️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Display Campaigns</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  <strong className="text-blue-300">Visual banner ads across 3+ million websites</strong> in the Google Display Network. Best for: brand awareness, remarketing, visual products, top-of-funnel marketing. Creates demand and keeps your brand top-of-mind. Lower cost per click than search ads.
                </p>
                <ul className="space-y-2 text-blue-200 text-sm">
                  <li>✓ Responsive display ads</li>
                  <li>✓ Custom image and HTML5 ads</li>
                  <li>✓ Audience targeting (demographics, interests)</li>
                  <li>✓ Placement targeting specific websites</li>
                  <li>✓ Remarketing to past visitors</li>
                  <li>✓ Similar audiences expansion</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:animate-bounce">
                <span className="text-3xl">🛒</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Shopping Campaigns</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  <strong className="text-green-300">Product listings with images and prices</strong> in search results and Google Shopping tab. Best for: e-commerce, retail, product-based businesses. Shows product details before click, attracting qualified buyers. Higher conversion rates for online stores.
                </p>
                <ul className="space-y-2 text-blue-200 text-sm">
                  <li>✓ Google Merchant Center integration</li>
                  <li>✓ Product feed optimization</li>
                  <li>✓ Smart Shopping campaigns (automated)</li>
                  <li>✓ Showcase Shopping ads</li>
                  <li>✓ Local inventory ads</li>
                  <li>✓ Performance Max campaigns</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:animate-bounce">
                <span className="text-3xl">▶️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">YouTube Campaigns</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  <strong className="text-purple-300">Video ads on YouTube and partner sites</strong> reaching 2+ billion monthly users. Best for: brand storytelling, product demonstrations, broad awareness, visual engagement. TrueView ads only charge when viewers watch 30+ seconds or interact.
                </p>
                <ul className="space-y-2 text-blue-200 text-sm">
                  <li>✓ Skippable in-stream ads (TrueView)</li>
                  <li>✓ Non-skippable 15-second ads</li>
                  <li>✓ Bumper ads (6 seconds)</li>
                  <li>✓ Video discovery ads</li>
                  <li>✓ Masthead homepage ads</li>
                  <li>✓ Audience targeting by interests</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:animate-bounce">
                <span className="text-3xl">🔄</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Remarketing Campaigns</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  <strong className="text-pink-300">Re-engage users who visited your website</strong> but didn&apos;t convert. Best for: abandoned carts, re-engaging leads, nurturing warm prospects. Typically 2-3X higher conversion rates than cold traffic. Essential for maximizing ROI from initial traffic.
                </p>
                <ul className="space-y-2 text-blue-200 text-sm">
                  <li>✓ Standard remarketing (display ads)</li>
                  <li>✓ Dynamic remarketing (personalized products)</li>
                  <li>✓ RLSA (remarketing lists for search ads)</li>
                  <li>✓ Video remarketing on YouTube</li>
                  <li>✓ Customer list targeting</li>
                  <li>✓ Sequential messaging strategies</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:animate-bounce">
                <span className="text-3xl">📍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Local Campaigns</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  <strong className="text-cyan-300">Drive foot traffic to physical locations</strong> across Google Search, Maps, YouTube, and Display. Best for: restaurants, retail stores, service businesses with physical locations. Promotes visits, calls, and directions. Geo-targeted for maximum relevance.
                </p>
                <ul className="space-y-2 text-blue-200 text-sm">
                  <li>✓ Google Maps integration</li>
                  <li>✓ Location extensions</li>
                  <li>✓ Call extensions with tracking</li>
                  <li>✓ Store visit conversion tracking</li>
                  <li>✓ Radius targeting around locations</li>
                  <li>✓ Automated multi-channel delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 3: Our Process */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">⚙️</span>
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Deliver <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">500% ROI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our proven 6-step process combines strategic planning, precise execution, and continuous optimization to maximize your Google Ads performance. We don&apos;t just set up campaigns and hope for the best - we implement data-driven methodologies refined over hundreds of successful campaigns. Every step is designed to eliminate wasted spend, improve quality scores, lower costs per click, and ultimately deliver more conversions at a better ROI. Here&apos;s exactly how we turn your ad budget into profitable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white group-hover:scale-110 transition-transform">
                  01
                </div>
                <h3 className="text-2xl font-bold text-white">Business Audit</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We start with a <strong className="text-blue-400">comprehensive business analysis</strong> - understanding your products, target audience, competitors, unique selling propositions, and profit margins. We analyze your existing marketing efforts, identify gaps, and benchmark against competitors. <strong className="text-green-400">Free Google Ads account audit</strong> if you&apos;re currently running campaigns. This discovery phase ensures our strategy aligns perfectly with your <strong className="text-yellow-400">business goals and customer journey</strong>, whether that&apos;s lead generation, online sales, phone calls, or store visits.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white group-hover:scale-110 transition-transform">
                  02
                </div>
                <h3 className="text-2xl font-bold text-white">Keyword Research</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Using advanced tools like Google Keyword Planner, SEMrush, and Ahrefs, we identify <strong className="text-blue-400">high-intent, conversion-focused keywords</strong> specific to Mumbai market. We analyze search volume, competition levels, cost per click, and commercial intent. <strong className="text-green-400">Negative keyword research</strong> eliminates irrelevant traffic that wastes budget. We organize keywords into tightly themed ad groups for maximum quality scores. Special focus on <strong className="text-yellow-400">long-tail keywords with lower competition</strong> and geographic modifiers (&quot;near me&quot;, &quot;in Mumbai&quot;) for better ROI and local targeting.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white group-hover:scale-110 transition-transform">
                  03
                </div>
                <h3 className="text-2xl font-bold text-white">Campaign Setup</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We build <strong className="text-blue-400">strategically structured campaigns</strong> with proper account hierarchy - campaigns by objective, ad groups by theme, ads by variation. Settings optimization includes geo-targeting, ad scheduling, device bidding, audience targeting, and conversion tracking setup. <strong className="text-green-400">Conversion tracking implementation</strong> ensures we measure what matters - form submissions, phone calls, purchases, sign-ups. We create <strong className="text-yellow-400">compelling ad copy with strong CTAs</strong>, utilizing all ad extensions (sitelinks, callouts, structured snippets, call extensions) to maximize visibility and click-through rates.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white group-hover:scale-110 transition-transform">
                  04
                </div>
                <h3 className="text-2xl font-bold text-white">Landing Page Optimization</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-blue-400">Your ad is only half the equation</strong> - landing pages must convert clicks into customers. We audit your existing pages or create new ones with <strong className="text-green-400">conversion-focused design</strong>: clear headlines matching ad copy, compelling benefits, trust signals (testimonials, certifications), prominent CTAs, fast loading speeds, mobile optimization. We eliminate distractions and friction points. <strong className="text-yellow-400">A/B testing multiple variations</strong> to continuously improve conversion rates. A well-optimized landing page can double or triple your results without increasing ad spend.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white group-hover:scale-110 transition-transform">
                  05
                </div>
                <h3 className="text-2xl font-bold text-white">Continuous Optimization</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Google Ads requires <strong className="text-blue-400">ongoing management, not set-and-forget</strong>. We monitor campaigns daily, analyzing performance data to identify opportunities and issues. <strong className="text-green-400">Weekly optimizations</strong> include: adjusting bids for top performers, pausing underperforming keywords, testing new ad variations, refining audience targeting, adding negative keywords, improving quality scores. <strong className="text-yellow-400">Monthly strategic reviews</strong> assess overall performance, adjust budgets across campaigns, explore new keyword opportunities, and test advanced features like automated bidding strategies for maximum efficiency and ROI improvement.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white group-hover:scale-110 transition-transform">
                  06
                </div>
                <h3 className="text-2xl font-bold text-white">Reporting & Analysis</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-blue-400">Complete transparency with detailed reporting</strong>. Weekly email updates highlight key metrics: clicks, impressions, CTR, CPC, conversions, cost per conversion, and ROI. <strong className="text-green-400">Monthly video/phone strategy sessions</strong> provide deep-dive analysis, discuss performance trends, review competitor activity, and plan next month&apos;s optimizations. Access to <strong className="text-yellow-400">real-time dashboards</strong> through Google Ads and Analytics for 24/7 visibility. We explain everything in plain language - no confusing jargon. You&apos;ll always know exactly how your campaigns are performing and what we&apos;re doing to improve results month over month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 4: Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">⭐</span>
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Makes MyDigital Crown <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Different?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Mumbai has hundreds of digital marketing agencies, but very few deliver consistent, measurable ROI from Google Ads campaigns. We&apos;re not a generic agency running cookie-cutter strategies - we&apos;re Google Ads specialists who eat, sleep, and breathe PPC optimization. Our team combines Google Partner certification, years of hands-on experience, and deep Mumbai market knowledge to deliver campaigns that actually work. Here are the specific advantages that make us the #1 choice for businesses serious about Google Ads success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Google Partner Certified</h3>
              <p className="text-blue-100 leading-relaxed">
                We&apos;re an official <strong className="text-yellow-300">Google Partner agency</strong>, meaning we&apos;ve passed Google&apos;s rigorous certification exams and maintain performance standards across our client base. <strong className="text-green-300">Direct access to Google support</strong> gives us early insights into platform changes and beta features. Our team holds individual certifications in Search, Display, Shopping, Video, and Measurement. This isn&apos;t just a badge - it&apos;s proof of <strong className="text-blue-300">expertise validated by Google itself</strong>, ensuring you&apos;re working with qualified professionals who know the platform inside-out.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Track Record</h3>
              <p className="text-blue-100 leading-relaxed">
                <strong className="text-blue-300">500% average ROI</strong> across our client portfolio isn&apos;t luck - it&apos;s systematic excellence. We&apos;ve served <strong className="text-green-300">150 happy clients</strong> across industries: e-commerce, B2B services, local businesses, healthcare, education, real estate. Our campaigns have generated millions in revenue. <strong className="text-yellow-300">15% average CTR</strong> (industry average is 3-5%) shows our ad copy and targeting expertise. We&apos;ve managed over ₹10 lakh in ad spend monthly, giving us data-driven insights that smaller agencies simply don&apos;t have. Case studies available showing real results from real businesses.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mumbai Market Expertise</h3>
              <p className="text-blue-100 leading-relaxed">
                Based in <strong className="text-blue-300">Chembur, Mumbai</strong>, we understand local market dynamics, consumer behavior, seasonal trends, and competitive landscape unique to Mumbai and Maharashtra. We know which areas have higher purchasing power, which times see peak searches, which languages resonate (Hindi, Marathi, English), and how Mumbai&apos;s competitive environment affects bidding strategies. <strong className="text-green-300">Local targeting expertise</strong> means your ads reach the right Mumbai audience at the right time. <strong className="text-yellow-300">Pan-India experience</strong> serving Bangalore, Delhi, Pune, Hyderabad ensures broad digital marketing knowledge.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Transparent Pricing</h3>
              <p className="text-blue-100 leading-relaxed">
                No hidden fees or surprise charges. <strong className="text-blue-300">Clear, upfront pricing</strong>: management fees ₹15,000-50,000/month based on ad spend complexity, one-time setup ₹10,000-25,000, minimum ad budget ₹20,000/month for meaningful results. <strong className="text-green-300">You own all accounts and data</strong> - Google Ads account, Analytics, landing pages. No contracts locking you in - our retention comes from delivering results, not legal obligations. <strong className="text-yellow-300">Free consultation and account audit</strong> included. We explain exactly where your money goes and what you get for it. Honest recommendations even if it means less revenue for us.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fast Turnaround</h3>
              <p className="text-blue-100 leading-relaxed">
                <strong className="text-blue-300">Campaign launch within 3-5 business days</strong> from onboarding. No months-long delays - we move fast because we know every day without ads is lost revenue. <strong className="text-green-300">24-48 hour response times</strong> for questions and requests via WhatsApp/email/phone. Quick pivots when market changes or new opportunities emerge. We understand Mumbai&apos;s fast-paced business environment demands agility. <strong className="text-yellow-300">Weekly optimizations</strong> ensure continuous improvement, not waiting for month-end. Emergency pause capabilities if needed. Speed without sacrificing quality - our streamlined processes enable rapid execution with thorough attention to detail.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Dedicated Account Manager</h3>
              <p className="text-blue-100 leading-relaxed">
                You&apos;re not just a ticket number - <strong className="text-blue-300">every client gets a dedicated account manager</strong> who learns your business inside-out. Direct phone/WhatsApp access to your manager, no endless email chains or support tickets. <strong className="text-green-300">Personalized strategies</strong> tailored to your specific goals, not template approaches. Your manager becomes an extension of your team, understanding seasonal patterns, promotional calendars, competitive threats. <strong className="text-yellow-300">Proactive recommendations</strong> - we don&apos;t wait for you to ask, we identify opportunities and bring solutions. Monthly strategy calls keep you informed and aligned. Partnership approach over vendor mentality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 5: Mumbai Market Leadership */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🏙️</span>
              Mumbai Market Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dominating Google Ads <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">In Mumbai</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Mumbai is India&apos;s commercial capital with the most competitive digital advertising landscape in the country. From Nariman Point to Bandra, Andheri to Chembur, businesses are fighting for visibility in the world&apos;s most expensive ad markets. Success here requires more than generic strategies - it demands deep local expertise, cultural understanding, and market-specific optimization. As Mumbai&apos;s premier Google Ads agency, we&apos;ve cracked the code to profitability in this ultra-competitive environment, delivering exceptional results across diverse industries and neighborhoods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🌆</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Understanding Mumbai&apos;s Digital Ecosystem</h3>
              <p className="text-gray-300 leading-relaxed">
                Mumbai&apos;s <strong className="text-blue-400">20+ million population</strong> creates massive digital opportunity but also intense competition. We understand the nuances - <strong className="text-green-400">South Mumbai&apos;s affluent audience</strong> requires different messaging than Western suburbs. Weekday vs weekend search patterns differ dramatically. Local events, festivals (Ganesh Chaturthi, Diwali), monsoon season, and Mumbai-specific holidays affect search behavior. <strong className="text-yellow-400">Multilingual targeting</strong> (English, Hindi, Marathi) captures broader audiences. We know which industries dominate which areas - finance in Lower Parel, tech in Powai, retail in Colaba. This hyperlocal intelligence translates to <strong className="text-purple-400">better targeting, higher relevance, lower costs</strong>, and more conversions from your Google Ads campaigns.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Advantage In Expensive Markets</h3>
              <p className="text-gray-300 leading-relaxed">
                Mumbai keywords are <strong className="text-blue-400">among India&apos;s most expensive</strong> - ₹100-500 per click in competitive sectors like real estate, finance, legal services. How do we deliver ROI in such expensive markets? <strong className="text-green-400">Advanced quality score optimization</strong> (9-10 scores) reduces costs 30-50%. <strong className="text-yellow-400">Long-tail keyword strategies</strong> target specific buyer intent at lower CPCs. Geo-targeting by Mumbai neighborhoods ensures budget focuses on high-conversion areas. <strong className="text-purple-400">Ad scheduling</strong> based on Mumbai business hours maximizes efficiency. Negative keyword lists eliminate wasteful clicks from tire-kickers. The result: <strong className="text-pink-400">3-5X better ROI</strong> than competitors paying premium prices for poorly optimized campaigns in the same market.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🎖️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Success Stories Across Mumbai Industries</h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-blue-400">150 happy clients</strong> across Mumbai trust us with their Google Ads. We&apos;ve delivered results for: <strong className="text-green-400">e-commerce brands</strong> achieving 5-8X ROAS, <strong className="text-yellow-400">local service businesses</strong> (plumbers, electricians, packers-movers) generating 50+ leads monthly at ₹200-400 per lead, <strong className="text-purple-400">B2B companies</strong> reaching decision-makers in Mumbai corporate hubs, <strong className="text-pink-400">restaurants and cloud kitchens</strong> driving online orders, <strong className="text-cyan-400">healthcare providers</strong> filling appointment calendars, <strong className="text-orange-400">education institutes</strong> driving admissions. From startups in Andheri to established brands in Nariman Point, our Google Ads expertise transcends industries. Every campaign refined with Mumbai market intelligence for maximum impact and minimum waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Home Page Format */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Floating emojis */}
        <div className="absolute top-32 left-20 text-6xl animate-bounce">💰</div>
        <div className="absolute top-48 right-32 text-6xl animate-bounce animation-delay-2000">🎯</div>
        <div className="absolute bottom-32 left-1/3 text-6xl animate-bounce animation-delay-4000">📊</div>
        <div className="absolute bottom-48 right-1/4 text-6xl animate-bounce">🚀</div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">❓</span>
              Frequently Asked Questions
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Got Questions About <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Google Ads?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know about our Google Ads services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">What is Google Ads and how does it work?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">🎯</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  <strong className="text-yellow-300">Google Ads</strong> (formerly Google AdWords) is Google&apos;s online advertising platform where businesses pay to display brief advertisements, service offerings, product listings, or videos to web users. It works on a <strong className="text-green-300">pay-per-click (PPC) model</strong> where you only pay when someone clicks your ad.
                </p>
                <p>
                  Your ads appear in Google search results when users search for keywords you&apos;re targeting, or on websites across the Google Display Network. The ad position is determined by <strong className="text-blue-300">bid amount, quality score, and ad relevance</strong>. It&apos;s the fastest way to get traffic to your website.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">Why should I choose MyDigital Crown for Google Ads management?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">⭐</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  We&apos;re a <strong className="text-yellow-300">Google Partner certified agency</strong> with proven track record of delivering <strong className="text-green-300">500% average ROI</strong> for our clients. Our team of certified PPC experts brings years of experience managing campaigns across diverse industries in Mumbai.
                </p>
                <p>
                  We&apos;ve served <strong className="text-blue-300">150 happy clients</strong> with transparent reporting, data-driven optimization, and personalized strategies. Unlike generic agencies, we understand Mumbai&apos;s unique market dynamics and consumer behavior, ensuring your ads reach the right audience at the right time with maximum conversions.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">How much does Google Ads cost in Mumbai?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">💰</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  Our <strong className="text-yellow-300">Google Ads management fees range from ₹15,000 to ₹50,000/month</strong> based on your ad spend and campaign complexity. Initial setup fee is ₹10,000-25,000 (one-time). We recommend a minimum ad budget of ₹20,000/month for meaningful results.
                </p>
                <p>
                  The actual cost per click varies by industry - competitive sectors like real estate or finance might cost ₹50-200 per click, while local services could be ₹10-50. We optimize your budget for maximum ROI, ensuring every rupee delivers value. <strong className="text-green-300">Free audit and consultation included</strong> with all packages.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">What types of Google Ads campaigns do you manage?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">🎨</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  We manage all Google Ads campaign types: <strong className="text-yellow-300">Search Ads</strong> (text ads in Google search results), <strong className="text-green-300">Display Ads</strong> (banner ads across websites), <strong className="text-blue-300">Shopping Ads</strong> (product listings for e-commerce), <strong className="text-purple-300">YouTube Ads</strong> (video advertising), and <strong className="text-pink-300">Remarketing campaigns</strong> (re-engaging past visitors).
                </p>
                <p>
                  Each campaign type serves different business goals - search ads for immediate conversions, display ads for brand awareness, shopping ads for product sales, YouTube ads for engagement, and remarketing for higher conversion rates. We create customized multi-channel strategies tailored to your specific objectives.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">How quickly will I see results from Google Ads?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">⚡</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  <strong className="text-yellow-300">Immediate traffic starts within 24-48 hours</strong> of campaign launch! Unlike SEO which takes months, Google Ads delivers instant visibility at the top of search results. However, <strong className="text-green-300">optimized performance takes 2-4 weeks</strong> as we analyze data, refine targeting, improve ad copy, and adjust bidding strategies.
                </p>
                <p>
                  Full ROI visibility and consistent conversions typically emerge within <strong className="text-blue-300">30-60 days</strong> with continuous optimization. We provide weekly performance reports and monthly strategy reviews. Most clients see positive ROI by month 2, with campaigns becoming highly profitable by month 3-4 as we eliminate wasteful spending.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">What is Quality Score and why does it matter?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">📊</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  <strong className="text-yellow-300">Quality Score</strong> is Google&apos;s rating (1-10) of the quality and relevance of your keywords, ads, and landing pages. Higher scores mean <strong className="text-green-300">lower costs per click and better ad positions</strong>. It&apos;s calculated based on expected click-through rate, ad relevance, and landing page experience.
                </p>
                <p>
                  A quality score of 7+ can reduce your costs by 20-50% compared to competitors with lower scores. We optimize all three factors - writing compelling ad copy to improve CTR, ensuring keyword-ad-landing page alignment for relevance, and creating fast, mobile-friendly landing pages for better user experience. <strong className="text-blue-300">Higher quality score = lower costs + better positions</strong>.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">How do you track conversions and measure ROI?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">🎯</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  We implement <strong className="text-yellow-300">Google Ads conversion tracking</strong> and <strong className="text-green-300">Google Analytics 4</strong> to track every action - form submissions, phone calls, purchases, downloads, sign-ups, and more. Custom tracking pixels capture data on which keywords, ads, and campaigns drive actual business results.
                </p>
                <p>
                  Monthly reports show: clicks, impressions, CTR, CPC, conversions, conversion rate, cost per conversion, and ROI. We also track assisted conversions (multi-touch attribution), call tracking for phone leads, and offline conversions. <strong className="text-blue-300">Complete transparency</strong> with real-time dashboards accessible 24/7. You&apos;ll always know exactly what you&apos;re getting for your investment.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">Can Google Ads work for my small business with a limited budget?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">💼</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  Absolutely! Google Ads is perfect for small businesses because you <strong className="text-yellow-300">control your budget</strong> and only pay for clicks. Even with ₹20,000-30,000/month, you can generate quality leads by targeting specific locations (like Mumbai neighborhoods), using long-tail keywords with lower competition, and focusing on high-intent searchers.
                </p>
                <p>
                  We specialize in <strong className="text-green-300">budget optimization for small businesses</strong> - maximizing every rupee through precise targeting, negative keywords to eliminate waste, ad scheduling for peak times, and geo-targeting for local customers. Many of our small business clients achieve <strong className="text-blue-300">3-5X ROI</strong> within 2-3 months with smart campaign management.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">What&apos;s the difference between Google Ads and SEO?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">🔍</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  <strong className="text-yellow-300">Google Ads (paid search)</strong> delivers immediate visibility - your ads appear instantly at the top of search results, and you pay per click. <strong className="text-green-300">SEO (organic search)</strong> takes 3-6 months to show results but brings free long-term traffic once you rank.
                </p>
                <p>
                  Google Ads is ideal for: new businesses needing quick traffic, time-sensitive promotions, competitive keywords, testing markets. SEO is better for: long-term growth, building authority, sustainable traffic, lower cost per click over time. We recommend <strong className="text-blue-300">combining both strategies</strong> - use Google Ads for immediate results while building SEO for future organic growth.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">Do you provide monthly reports and campaign updates?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">📈</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  Yes! We provide <strong className="text-yellow-300">detailed weekly email reports</strong> and <strong className="text-green-300">comprehensive monthly strategy reviews</strong>. Reports include: campaign performance metrics, keyword analysis, ad performance, conversion data, budget utilization, ROI calculations, and optimization recommendations.
                </p>
                <p>
                  You also get <strong className="text-blue-300">24/7 access to real-time dashboards</strong> through Google Ads and Google Analytics. Monthly video/phone calls discuss performance, market changes, competitor activity, and next month&apos;s strategy. Complete transparency - you own all accounts and data. We&apos;re your partner, not a black box. Questions answered same-day via WhatsApp/email support.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">How is Google Ads different from Facebook Ads?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">🆚</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  <strong className="text-yellow-300">Google Ads targets intent</strong> - people actively searching for your product/service right now (high purchase intent). <strong className="text-green-300">Facebook Ads targets interests</strong> - people who might be interested based on demographics, behaviors, and interests (lower immediate intent, better for awareness).
                </p>
                <p>
                  Google Ads typically delivers: higher conversion rates, better for B2B, local services, immediate sales, capturing demand. Facebook Ads excel at: brand building, visual products, younger audiences, creating demand, lower cost per click. <strong className="text-blue-300">Best approach: Use both!</strong> Google Ads for bottom-funnel conversions, Facebook Ads for top-funnel awareness. We manage both platforms for integrated strategies.
                </p>
              </div>
            </details>
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
              Ready to Dominate<br />
              <span className="text-yellow-300">Google Search Results?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get instant visibility and qualified leads with professionally managed Google Ads campaigns!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Free Ads Audit</span>
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
                <span>Google Partner Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>500% Average ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certified PPC Experts</span>
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
        currentService="/services/google-ads"
        title="Complete Digital Marketing Solutions"
        description="Enhance your Google Ads with our comprehensive digital services"
        maxServices={6}
      />

      {/* Comprehensive Schema Markup for 100% SEO/VSO/ASO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Google Ads Service In Mumbai",
                "description": "Professional Google Ads (PPC) management services in Mumbai delivering 500% ROI. Expert search ads, display ads, shopping ads, YouTube ads, and remarketing campaigns.",
                "provider": {
                  "@type": "Organization",
                  "name": "MyDigital Crown",
                  "url": "https://mydigitalcrown.in"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Mumbai",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mumbai",
                    "addressRegion": "Maharashtra",
                    "addressCountry": "IN"
                  }
                },
                "offers": {
                  "@type": "Offer",
                  "price": "15000",
                  "priceCurrency": "INR",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "15000-50000",
                    "priceCurrency": "INR",
                    "unitText": "per month"
                  }
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "150",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              {
                "@type": "Organization",
                "name": "MyDigital Crown",
                "url": "https://mydigitalcrown.in",
                "logo": "https://mydigitalcrown.in/images/logo.png",
                "description": "Mumbai's leading Google Ads agency delivering 500% ROI through expert PPC management, search ads, shopping ads, display ads, and YouTube advertising.",
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
                  "availableLanguage": ["English", "Hindi", "Marathi"]
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
                "name": "Google Ads Service In Mumbai | Expert PPC Management",
                "url": "https://mydigitalcrown.in/services/google-ads",
                "description": "Top Google Ads Service In Mumbai. 500% ROI guaranteed. Expert PPC campaigns, search ads, shopping ads, display ads. Call +91-83695-11877",
                "breadcrumb": {
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
                      "name": "Google Ads Service In Mumbai",
                      "item": "https://mydigitalcrown.in/services/google-ads"
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is Google Ads and how does it work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Google Ads (formerly Google AdWords) is Google's online advertising platform where businesses pay to display brief advertisements, service offerings, product listings, or videos to web users. It works on a pay-per-click (PPC) model where you only pay when someone clicks your ad. Your ads appear in Google search results when users search for keywords you're targeting, or on websites across the Google Display Network. The ad position is determined by bid amount, quality score, and ad relevance."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why should I choose MyDigital Crown for Google Ads management?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We're a Google Partner certified agency with proven track record of delivering 500% average ROI for our clients. Our team of certified PPC experts brings years of experience managing campaigns across diverse industries in Mumbai. We've served 150 happy clients with transparent reporting, data-driven optimization, and personalized strategies. Unlike generic agencies, we understand Mumbai's unique market dynamics and consumer behavior."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does Google Ads cost in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our Google Ads management fees range from ₹15,000 to ₹50,000/month based on your ad spend and campaign complexity. Initial setup fee is ₹10,000-25,000 (one-time). We recommend a minimum ad budget of ₹20,000/month for meaningful results. The actual cost per click varies by industry - competitive sectors like real estate or finance might cost ₹50-200 per click, while local services could be ₹10-50."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What types of Google Ads campaigns do you manage?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We manage all Google Ads campaign types: Search Ads (text ads in Google search results), Display Ads (banner ads across websites), Shopping Ads (product listings for e-commerce), YouTube Ads (video advertising), and Remarketing campaigns (re-engaging past visitors). Each campaign type serves different business goals."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly will I see results from Google Ads?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Immediate traffic starts within 24-48 hours of campaign launch. Optimized performance takes 2-4 weeks as we analyze data, refine targeting, improve ad copy, and adjust bidding strategies. Full ROI visibility and consistent conversions typically emerge within 30-60 days with continuous optimization."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is Quality Score and why does it matter?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Quality Score is Google's rating (1-10) of the quality and relevance of your keywords, ads, and landing pages. Higher scores mean lower costs per click and better ad positions. A quality score of 7+ can reduce your costs by 20-50% compared to competitors with lower scores."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you track conversions and measure ROI?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We implement Google Ads conversion tracking and Google Analytics 4 to track every action - form submissions, phone calls, purchases, downloads, sign-ups, and more. Monthly reports show: clicks, impressions, CTR, CPC, conversions, conversion rate, cost per conversion, and ROI. You'll always know exactly what you're getting for your investment."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can Google Ads work for my small business with a limited budget?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! Google Ads is perfect for small businesses because you control your budget and only pay for clicks. Even with ₹20,000-30,000/month, you can generate quality leads by targeting specific locations, using long-tail keywords with lower competition, and focusing on high-intent searchers. Many of our small business clients achieve 3-5X ROI within 2-3 months."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's the difference between Google Ads and SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Google Ads (paid search) delivers immediate visibility - your ads appear instantly at the top of search results, and you pay per click. SEO (organic search) takes 3-6 months to show results but brings free long-term traffic once you rank. We recommend combining both strategies - use Google Ads for immediate results while building SEO for future organic growth."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide monthly reports and campaign updates?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! We provide detailed weekly email reports and comprehensive monthly strategy reviews. Reports include: campaign performance metrics, keyword analysis, ad performance, conversion data, budget utilization, ROI calculations, and optimization recommendations. You also get 24/7 access to real-time dashboards through Google Ads and Google Analytics."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is Google Ads different from Facebook Ads?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Google Ads targets intent - people actively searching for your product/service right now (high purchase intent). Facebook Ads targets interests - people who might be interested based on demographics, behaviors, and interests (lower immediate intent, better for awareness). Best approach: Use both! Google Ads for bottom-funnel conversions, Facebook Ads for top-funnel awareness."
                    }
                  }
                ]
              },
              {
                "@type": "ItemList",
                "name": "Google Ads Services",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Search Ads Management"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Display Ads Campaigns"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Shopping Ads for E-commerce"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "YouTube Video Advertising"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Remarketing Campaigns"
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Local Campaigns"
                  }
                ]
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Rajesh Mehta"
                },
                "datePublished": "2024-09-15",
                "reviewBody": "MyDigital Crown transformed our Google Ads campaigns. We went from losing money to achieving 6X ROI within 3 months. Their team's expertise in keyword targeting and ad optimization is exceptional. Highly recommend for any Mumbai business serious about PPC advertising.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "itemReviewed": {
                  "@type": "Service",
                  "name": "Google Ads Service In Mumbai"
                }
              },
              {
                "@type": "HowTo",
                "name": "How Our Google Ads Service Works",
                "description": "Step-by-step process for launching successful Google Ads campaigns in Mumbai",
                "totalTime": "P7D",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "INR",
                  "value": "15000"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Business Audit & Consultation",
                    "text": "Comprehensive analysis of your business, target audience, competitors, and marketing goals. Free Google Ads account audit if you're currently running campaigns.",
                    "url": "https://mydigitalcrown.in/services/google-ads#audit"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Keyword Research & Strategy",
                    "text": "Identify high-intent, conversion-focused keywords specific to Mumbai market. Analyze search volume, competition, CPC, and commercial intent. Create negative keyword lists.",
                    "url": "https://mydigitalcrown.in/services/google-ads#keywords"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Campaign Setup & Ad Creation",
                    "text": "Build strategically structured campaigns with proper account hierarchy. Create compelling ad copy with strong CTAs, utilizing all ad extensions for maximum visibility.",
                    "url": "https://mydigitalcrown.in/services/google-ads#setup"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Landing Page Optimization",
                    "text": "Audit existing pages or create new conversion-focused landing pages with clear headlines, compelling benefits, trust signals, and prominent CTAs.",
                    "url": "https://mydigitalcrown.in/services/google-ads#landing"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Campaign Launch & Monitoring",
                    "text": "Launch campaigns with 24-48 hour traffic start. Daily monitoring to identify opportunities and issues. Immediate optimization as data comes in.",
                    "url": "https://mydigitalcrown.in/services/google-ads#launch"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Continuous Optimization",
                    "text": "Weekly optimizations: adjust bids, pause underperformers, test new ads, refine targeting, add negative keywords. Monthly strategic reviews and detailed reporting.",
                    "url": "https://mydigitalcrown.in/services/google-ads#optimization"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "ROI Analysis & Scaling",
                    "text": "Track conversions, analyze ROI, identify top performers. Scale winning campaigns, eliminate wasteful spending, maximize profitability month over month.",
                    "url": "https://mydigitalcrown.in/services/google-ads#roi"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 8,
                    "name": "Monthly Reporting & Strategy",
                    "text": "Comprehensive monthly reports with performance metrics, insights, and recommendations. Video/phone strategy sessions to discuss results and plan next month.",
                    "url": "https://mydigitalcrown.in/services/google-ads#reporting"
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": "Google Ads Service In Mumbai: Complete Guide to PPC Success",
                "description": "Comprehensive guide to Google Ads management in Mumbai covering search ads, display ads, shopping campaigns, YouTube advertising, and remarketing strategies for maximum ROI.",
                "author": {
                  "@type": "Person",
                  "name": "Aditya Pandey"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "MyDigital Crown",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://mydigitalcrown.in/images/logo.png"
                  }
                },
                "datePublished": "2024-01-15",
                "dateModified": "2025-10-11",
                "mainEntityOfPage": "https://mydigitalcrown.in/services/google-ads"
              },
              {
                "@type": "LocalBusiness",
                "name": "MyDigital Crown - Google Ads Agency Mumbai",
                "image": "https://mydigitalcrown.in/images/office.jpg",
                "description": "Mumbai's premier Google Ads agency delivering 500% ROI through expert PPC management across search, display, shopping, and video campaigns.",
                "@id": "https://mydigitalcrown.in/services/google-ads",
                "url": "https://mydigitalcrown.in/services/google-ads",
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
                  "latitude": 19.0596,
                  "longitude": 72.8295
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "10:00",
                  "closes": "19:00"
                },
                "sameAs": [
                  "https://www.facebook.com/mydigitalcrown",
                  "https://www.instagram.com/mydigitalcrown"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "150"
                }
              },
              {
                "@type": "VideoObject",
                "name": "Google Ads Success Stories - MyDigital Crown",
                "description": "Watch how we helped Mumbai businesses achieve 500% ROI through expert Google Ads management, PPC optimization, and conversion-focused campaigns.",
                "thumbnailUrl": "https://mydigitalcrown.in/images/google-ads-video-thumb.jpg",
                "uploadDate": "2024-08-20",
                "duration": "PT5M30S",
                "contentUrl": "https://mydigitalcrown.in/videos/google-ads-success.mp4"
              },
              {
                "@type": "Course",
                "name": "Google Ads Mastery for Mumbai Businesses",
                "description": "Learn how to create, manage, and optimize Google Ads campaigns for maximum ROI in Mumbai's competitive market.",
                "provider": {
                  "@type": "Organization",
                  "name": "MyDigital Crown"
                }
              },
              {
                "@type": "SpecialAnnouncement",
                "name": "Free Google Ads Audit for Mumbai Businesses",
                "text": "Get a comprehensive free audit of your existing Google Ads account. We'll identify wasteful spending, optimization opportunities, and provide actionable recommendations to improve ROI.",
                "datePosted": "2025-10-01",
                "expires": "2025-12-31",
                "url": "https://mydigitalcrown.in/services/google-ads"
              },
              {
                "@type": "AggregateRating",
                "itemReviewed": {
                  "@type": "Service",
                  "name": "Google Ads Service In Mumbai"
                },
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              {
                "@type": "Offer",
                "name": "Google Ads Management Package",
                "description": "Complete Google Ads management including campaign setup, keyword research, ad creation, landing page optimization, and monthly reporting.",
                "price": "15000",
                "priceCurrency": "INR",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "15000-50000",
                  "priceCurrency": "INR",
                  "unitText": "per month"
                },
                "availability": "https://schema.org/InStock",
                "url": "https://mydigitalcrown.in/services/google-ads",
                "seller": {
                  "@type": "Organization",
                  "name": "MyDigital Crown"
                }
              }
            ]
          })
        }}
      />

      {/* Noscript fallback for accessibility */}
      <noscript>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Google Ads Service In Mumbai | MyDigital Crown</h2>
          <p>
            Mumbai&apos;s leading Google Ads agency delivering 500% ROI through expert PPC management.
            We manage search ads, display ads, shopping ads, YouTube ads, and remarketing campaigns.
          </p>
          <p>
            <strong>Services:</strong> Search Ads, Display Ads, Shopping Ads, YouTube Ads, Remarketing, Local Campaigns
          </p>
          <p>
            <strong>Results:</strong> 150 happy clients • 500% average ROI • 15% average CTR • ₹10L+ ad spend managed monthly
          </p>
          <p>
            <strong>Pricing:</strong> Management: ₹15,000-50,000/month • Setup: ₹10,000-25,000 • Min Budget: ₹20,000/month
          </p>
          <p>
            <strong>Contact:</strong> +91-83695-11877 • info@mydigitalcrown.in
          </p>
          <p>
            <strong>Location:</strong> Chembur, Mumbai, Maharashtra - 400071
          </p>
        </div>
      </noscript>

      <Footer />
    </>
  );
}
