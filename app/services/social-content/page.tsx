import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import TrustedBrands from '@/app/components/TrustedBrands'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Content Writer in Mumbai | #1 Content Writing Agency | MyDigital Crown',
  description: 'Top Social Content Writer in Mumbai. Expert social media content writing services for Instagram, Facebook, LinkedIn & Twitter. 300% engagement boost guaranteed. Call +91-83695-11877',
  keywords: [
    'social content writer in mumbai',
    'social content writer mumbai',
    'content writer for social media mumbai',
    'social media content writer',
    'instagram content writer mumbai',
    'facebook content writer mumbai',
    'linkedin content writer mumbai',
    'twitter content writer mumbai',
    'social media copywriter mumbai',
    'content writing services mumbai',
    'social media content creation mumbai',
    'freelance content writer mumbai',
    'professional content writer mumbai',
    'social content writing agency mumbai',
    'best content writer mumbai',
    'creative content writer',
    'content writing company mumbai',
    'social media posts writer',
    'instagram caption writer mumbai',
    'social media marketing content',
    'content creator mumbai',
    'digital content writer',
    'social media content strategy',
    'engagement content writer',
    'viral content writer mumbai',
    'brand content writer',
    'storytelling content writer',
    'social media content expert',
    'content writing for businesses',
    'corporate content writer mumbai',
    'startup content writer',
    'ecommerce content writer',
    'b2b content writer mumbai',
    'b2c content writer',
    'seo content writer mumbai',
    'conversion content writer'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mydigitalcrown.in'),
  alternates: {
    canonical: '/services/social-content',
  },
  openGraph: {
    title: 'Social Content Writer in Mumbai | #1 Content Writing Agency',
    description: 'Top Social Content Writer in Mumbai. Expert social media content writing for Instagram, Facebook, LinkedIn & Twitter. 300% engagement boost. Call +91-83695-11877',
    url: 'https://mydigitalcrown.in/services/social-content',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/social-content-writer-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Social Content Writer in Mumbai - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Content Writer in Mumbai | MyDigital Crown',
    description: 'Expert social media content writing services in Mumbai. 300% engagement boost guaranteed.',
    images: ['https://mydigitalcrown.in/images/social-content-writer-mumbai.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function SocialContentPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Social Content Creation Services Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s #1 Social Content Writer</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Social Content Writer In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  ✍️ Expert <span className="text-yellow-300">Content Writing</span> for <span className="text-green-300">Instagram</span>, <span className="text-blue-300">Facebook</span>, <span className="text-purple-300">LinkedIn</span> & <span className="text-pink-300">Twitter</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Engaging Captions | Viral Posts | Story Scripts | Ad Copy | Brand Storytelling
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">✍️</span>
                    <span>Hire Content Writer</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">2K+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Content Created</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">300%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Engagement Boost</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">5M+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Total Reach</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">150+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Happy Brands</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Voice Search Quick Answers Section - VSO Optimized */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Answers About Social Content Writer in Mumbai
            </h2>
            <p className="text-lg text-gray-600">Get instant answers to your most common questions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Where */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Where can I find the best social content writer in Mumbai?</h3>
              <p className="text-gray-700 leading-relaxed">
                MyDigital Crown is Mumbai&apos;s leading social content writing agency with offices in Chembur, Mumbai. We serve clients across Andheri, Bandra, Powai, Thane, and all Mumbai suburbs with expert content writers specializing in Instagram, Facebook, LinkedIn, and Twitter.
              </p>
            </div>

            {/* How Much */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much does a social content writer cost in Mumbai?</h3>
              <p className="text-gray-700 leading-relaxed">
                Our social content writing packages start from ₹15,000/month for 20 posts. Premium packages with daily posts, stories, and ad copy start from ₹35,000/month. Custom enterprise solutions available. Get 300% engagement boost guaranteed with our content strategy.
              </p>
            </div>

            {/* When */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">When will I see results from social content writing?</h3>
              <p className="text-gray-700 leading-relaxed">
                You&apos;ll see improved engagement within 7-14 days of consistent posting. Most clients achieve 100% increase in engagement within 30 days and 300% boost within 90 days. We provide weekly analytics reports to track your content performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Social Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📱</span>
              Social Content Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Social Content</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creative, engaging content that stops the scroll and drives meaningful social media engagement
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop" 
                    alt="Social Content Creation Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎨 Creative Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Eye-catching visuals and compelling copy that stand out in crowded social media feeds.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 Data-Driven Strategy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Content optimized based on analytics, trends, and audience insights for maximum engagement.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Platform-Specific</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tailored content for each platform - Instagram, Facebook, LinkedIn, Twitter, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Content Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Social Content <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Complete social media content creation services for all major platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📸</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Instagram Content</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Stunning feed posts, reels, stories, and carousel content for Instagram.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Feed Posts</li>
                  <li className="flex items-start gap-2">✓ Reels & Stories</li>
                  <li className="flex items-start gap-2">✓ Carousel Posts</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">👍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Facebook Content</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Engaging Facebook posts, videos, and campaigns that drive interaction.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Post Graphics</li>
                  <li className="flex items-start gap-2">✓ Video Content</li>
                  <li className="flex items-start gap-2">✓ Ad Creatives</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💼</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">LinkedIn Content</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Professional content that builds authority and drives B2B engagement.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Thought Leadership</li>
                  <li className="flex items-start gap-2">✓ Company Updates</li>
                  <li className="flex items-start gap-2">✓ Industry Insights</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🐦</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Twitter/X Content</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Witty, engaging tweets and threads that spark conversations.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Tweet Writing</li>
                  <li className="flex items-start gap-2">✓ Twitter Threads</li>
                  <li className="flex items-start gap-2">✓ Graphics & Memes</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎥</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Video Content</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Short-form video content optimized for social media platforms.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Reels Production</li>
                  <li className="flex items-start gap-2">✓ YouTube Shorts</li>
                  <li className="flex items-start gap-2">✓ TikTok Videos</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📅</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Content Calendar</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Strategic content planning and scheduling for consistent posting.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Monthly Planning</li>
                  <li className="flex items-start gap-2">✓ Content Scheduling</li>
                  <li className="flex items-start gap-2">✓ Trend Integration</li>
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

      {/* Comprehensive SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The Ultimate Guide to<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Social Media Content Creation
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know about creating compelling social media content that drives engagement, builds brand awareness, and converts followers into loyal customers.
            </p>
          </div>

          <div className="space-y-12 text-blue-100">
            {/* Why Social Media Content Matters */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">🎯</span>
                Why Social Media Content is Critical for Your Business
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                In today&apos;s digital landscape, social media content is no longer optional—it&apos;s essential. With over 4.9 billion active social media users worldwide, your potential customers are spending an average of 2.5 hours per day on social platforms. Quality content is your gateway to capturing their attention, building meaningful relationships, and driving business growth.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Effective social media content serves multiple purposes: it educates your audience about your products or services, entertains and engages followers to build community, establishes your brand as an industry thought leader, and drives traffic to your website while generating qualified leads. Unlike traditional advertising, social content allows for two-way communication, enabling you to receive real-time feedback and adapt your strategy accordingly.
              </p>
              <p className="text-lg leading-relaxed">
                The businesses that invest in consistent, high-quality social media content see measurable results. Our clients experience an average 300% increase in engagement rates, 250% boost in website traffic from social channels, and 180% improvement in lead generation within the first six months of implementing our content strategies.
              </p>
            </div>

            {/* Types of Social Media Content */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">📱</span>
                Types of High-Performing Social Media Content
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-2xl border border-blue-400/30">
                  <h4 className="text-xl font-bold text-blue-300 mb-3">Visual Content</h4>
                  <p className="leading-relaxed">
                    Images, infographics, and carousel posts that stop the scroll. Visual content receives 94% more views than text-only posts and is processed 60,000 times faster by the brain. We create eye-catching graphics optimized for each platform&apos;s dimensions and best practices.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-400/30">
                  <h4 className="text-xl font-bold text-purple-300 mb-3">Video Content</h4>
                  <p className="leading-relaxed">
                    Short-form videos, reels, and stories that drive the highest engagement rates. Video content generates 1200% more shares than text and image content combined. Our team produces platform-specific videos including TikToks, Instagram Reels, YouTube Shorts, and LinkedIn videos.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-6 rounded-2xl border border-green-400/30">
                  <h4 className="text-xl font-bold text-green-300 mb-3">Educational Content</h4>
                  <p className="leading-relaxed">
                    How-to guides, tutorials, and industry insights that position your brand as an authority. Educational content builds trust and credibility while providing genuine value to your audience. We create comprehensive guides, quick tips, and industry analysis tailored to your niche.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-400/30">
                  <h4 className="text-xl font-bold text-orange-300 mb-3">User-Generated Content</h4>
                  <p className="leading-relaxed">
                    Customer testimonials, reviews, and brand mentions that leverage social proof. UGC is 5x more likely to convert than brand-created content and costs 50% less to produce. We help you collect, curate, and amplify authentic customer stories.
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                The key to success is maintaining a balanced content mix. We recommend the 80-20 rule: 80% of your content should educate, entertain, or inspire your audience, while only 20% should be promotional. This approach builds trust and keeps your followers engaged without feeling like they&apos;re being constantly sold to.
              </p>
            </div>

            {/* Content Strategy Framework */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">📊</span>
                Our Proven Content Strategy Framework
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Creating random content and hoping it performs is not a strategy—it&apos;s a gamble. Our data-driven framework ensures every piece of content serves a specific purpose in your customer journey and aligns with your business objectives.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Audience Research & Persona Development</h4>
                    <p className="leading-relaxed">We dive deep into understanding your target audience&apos;s demographics, psychographics, pain points, and content preferences. This research informs every content decision we make, ensuring your message resonates with the right people at the right time.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Competitive Analysis & Gap Identification</h4>
                    <p className="leading-relaxed">We analyze what your competitors are doing well and, more importantly, what they&apos;re missing. This competitive intelligence reveals opportunities to differentiate your brand and capture underserved segments of your market.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Content Pillars & Theme Development</h4>
                    <p className="leading-relaxed">We establish 3-5 core content pillars that align with your business goals and audience interests. These pillars provide structure to your content calendar while allowing flexibility for trending topics and real-time engagement opportunities.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Platform-Specific Optimization</h4>
                    <p className="leading-relaxed">Each social platform has unique algorithms, audience behaviors, and content formats. We optimize your content for each platform&apos;s specifications—whether it&apos;s Instagram&apos;s visual storytelling, LinkedIn&apos;s professional insights, or TikTok&apos;s trending challenges.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Performance Tracking & Optimization</h4>
                    <p className="leading-relaxed">We monitor key metrics including reach, engagement, clicks, conversions, and ROI. This data informs our continuous optimization process, ensuring your content strategy evolves based on what&apos;s actually working, not guesswork or assumptions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI and Results */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">💰</span>
                Measuring ROI: Beyond Vanity Metrics
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                While likes and followers might feel good, they don&apos;t pay the bills. We focus on metrics that matter to your bottom line: lead generation, conversion rates, customer acquisition costs, and revenue attribution. Our comprehensive analytics dashboard tracks every touchpoint in the customer journey, from initial content engagement to final purchase.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                For B2C brands, we measure metrics like product discovery through social channels, add-to-cart rates from social traffic, and customer lifetime value of social media-acquired customers. For B2B companies, we track lead quality, sales-qualified leads, pipeline influence, and deal velocity for opportunities sourced from social content.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our clients see an average ROI of 400% within 12 months of implementing our content strategies. This includes direct revenue from social commerce, influenced revenue from multi-touch attribution, and cost savings from reduced paid advertising spend as organic reach grows.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-600/30 to-blue-800/30 p-6 rounded-2xl border border-blue-400/40 text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">300%</div>
                  <div className="text-sm uppercase tracking-wide text-blue-200">Average Engagement Increase</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/30 to-purple-800/30 p-6 rounded-2xl border border-purple-400/40 text-center">
                  <div className="text-4xl font-bold text-purple-300 mb-2">250%</div>
                  <div className="text-sm uppercase tracking-wide text-purple-200">Website Traffic Growth</div>
                </div>
                <div className="bg-gradient-to-br from-green-600/30 to-green-800/30 p-6 rounded-2xl border border-green-400/40 text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">180%</div>
                  <div className="text-sm uppercase tracking-wide text-green-200">Lead Generation Boost</div>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">✨</span>
                Content Creation Best Practices for Maximum Impact
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-6 py-2">
                  <h4 className="text-xl font-bold text-blue-300 mb-2">Consistency is King</h4>
                  <p className="leading-relaxed">Posting sporadically confuses the algorithm and your audience. We maintain a consistent posting schedule tailored to each platform&apos;s optimal frequency—whether that&apos;s 3-5 times daily on Twitter, once daily on Instagram, or 2-3 times weekly on LinkedIn. Consistency builds trust and keeps your brand top-of-mind.</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-6 py-2">
                  <h4 className="text-xl font-bold text-purple-300 mb-2">Quality Over Quantity</h4>
                  <p className="leading-relaxed">One well-researched, beautifully designed post will always outperform ten mediocre ones. We invest time in understanding what resonates with your audience, creating thumb-stopping visuals, and crafting compelling copy that drives action. Every piece of content is intentional and valuable.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-6 py-2">
                  <h4 className="text-xl font-bold text-green-300 mb-2">Embrace Authenticity</h4>
                  <p className="leading-relaxed">Today&apos;s consumers can spot inauthentic content from a mile away. We help brands find their unique voice and share genuine stories that connect emotionally with audiences. This includes behind-the-scenes content, employee spotlights, customer success stories, and transparent communication about your values and mission.</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-6 py-2">
                  <h4 className="text-xl font-bold text-orange-300 mb-2">Leverage Trending Topics</h4>
                  <p className="leading-relaxed">While evergreen content forms your foundation, trending topics and timely content boost visibility. We monitor trending hashtags, cultural moments, and industry news to identify opportunities for relevant, timely content that captures wider attention while staying true to your brand voice.</p>
                </div>
                <div className="border-l-4 border-pink-400 pl-6 py-2">
                  <h4 className="text-xl font-bold text-pink-300 mb-2">Engage, Don&apos;t Just Broadcast</h4>
                  <p className="leading-relaxed">Social media is social—it&apos;s a two-way conversation, not a megaphone. We actively engage with your audience through prompt responses to comments, participation in relevant conversations, and community building activities. This engagement increases algorithmic favorability and builds loyal brand advocates.</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">🚀</span>
                Why Choose MyDigital Crown for Social Content Creation
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                We&apos;re not just content creators—we&apos;re strategic partners invested in your success. Our team combines creative expertise with data-driven insights to produce content that doesn&apos;t just look good, but delivers measurable business results.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="text-3xl">🎨</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Creative Excellence</h4>
                    <p className="leading-relaxed">Our award-winning creative team stays ahead of design trends and platform updates to ensure your content is always fresh, relevant, and on-brand.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-3xl">📈</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Data-Driven Approach</h4>
                    <p className="leading-relaxed">Every creative decision is backed by data and testing. We continuously analyze performance metrics to optimize your content strategy for maximum ROI.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Rapid Turnaround</h4>
                    <p className="leading-relaxed">In the fast-paced world of social media, timing is everything. Our efficient workflow ensures quick turnaround times without compromising quality.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-3xl">🎯</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Industry Expertise</h4>
                    <p className="leading-relaxed">With over 150 successful clients across diverse industries, we understand the nuances of different markets and adapt our strategies accordingly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Social Media Presence?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let&apos;s create content that captures attention, drives engagement, and converts followers into customers. Contact us today for a free content strategy consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                  Get Your Free Strategy Session
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <a href="tel:+918369511877" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call: +91-83695-11877
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Create Content<br />
              <span className="text-yellow-300">That Goes Viral?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our creative team produce engaging social media content that drives engagement and builds your brand!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Start Creating Content</span>
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
                <span>Award-Winning Creators</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>10K+ Content Created</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>10M+ Total Reach</span>
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
        currentService="/services/social-content"
        title="Complete Social Media Solutions"
        description="Enhance your social media presence with our comprehensive digital marketing services"
        maxServices={6}
      />

      <Footer />
    </>
  )
}
