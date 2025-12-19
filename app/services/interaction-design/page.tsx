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
  title: 'Interaction Design Mumbai | UI/UX Experts | MyDigital',
  description: 'Interaction Design Company Mumbai. 85% User Satisfaction | UI/UX, Microinteractions & Prototyping | Usability Testing. Call +91-83695-11877',
  keywords: [
    'interaction design company in mumbai',
    'interaction design services mumbai',
    'interaction design agency mumbai',
    'ux interaction design mumbai',
    'interaction designer mumbai',
    'professional interaction design mumbai',
    'interaction design experts mumbai',
    'interaction design services india',
    'interaction design consultants mumbai',
    'interaction design agency india',
    'ui interaction design mumbai',
    'microinteraction design mumbai',
    'user interaction design mumbai',
    'motion design mumbai',
    'animation design mumbai',
    'interactive prototyping mumbai',
    'gesture design mumbai',
    'user flow design mumbai',
    'interaction design specialist mumbai',
    'ux ui design mumbai',
    'interaction design expert mumbai',
    'interaction design professionals',
    'usability testing mumbai',
    'user experience design mumbai',
    'interface design mumbai',
    'design thinking mumbai',
    'interaction design pricing mumbai',
    'best interaction design company mumbai',
    'top interaction design agency mumbai',
    'interaction design services india',
    'interaction design consultant mumbai',
    'interaction design ux mumbai',
    'interaction design agency chembur',
    'interaction design company india',
    'product design mumbai'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://mydigitalcrown.in/services/interaction-design'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mydigitalcrown.in/services/interaction-design',
    title: 'Interaction Design Company In Mumbai | #1 UX Design Agency',
    description: 'Top Interaction Design Company In Mumbai. 85% User Satisfaction Guaranteed. Expert UI/UX design, microinteractions, prototyping & usability testing. Call +91-83695-11877',
    siteName: 'MyDigital Crown',
    images: [{
      url: 'https://mydigitalcrown.in/images/interaction-design-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Interaction Design Company In Mumbai - MyDigital Crown'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interaction Design Company In Mumbai | #1 UX Design Agency',
    description: 'Top Interaction Design Company In Mumbai. 85% User Satisfaction Guaranteed. Expert UI/UX design & microinteractions. Call +91-83695-11877',
    images: ['https://mydigitalcrown.in/images/interaction-design-twitter.jpg']
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  }
}

export default function InteractionDesignPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Interaction Design Services Mumbai Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s Leading Interaction Design Agency</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Interaction Design Company In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  🎯 Create <span className="text-yellow-300">Delightful Experiences</span>, <span className="text-green-300">Smooth Interactions</span> & <span className="text-orange-300">Happy Users</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  User Flows | Microinteractions | Animations | Prototyping | Usability Testing
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">✨</span>
                    <span>Start Your Project</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">250+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Projects Designed</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">85%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">User Satisfaction</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">60%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">More Engagement</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">User-Centered</div>
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
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎙️</span>
              Voice Search Optimized Answers
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Quick <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Answers</span> About Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get instant answers to your most common questions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Where Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-3xl">📍</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Where are you located?</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-blue-400">MyDigital Crown</strong> is headquartered in <strong className="text-blue-400">Chembur, Mumbai, Maharashtra</strong>. We serve clients across India with our expert interaction design services, creating delightful user experiences through microinteractions, motion design, and intuitive user flows that engage users and drive conversions.
                </p>
                <div className="flex items-start gap-2 text-blue-300">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Chembur, Mumbai - 400071</span>
                </div>
              </div>
            </div>

            {/* How Much Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-3xl">💰</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">How much does it cost?</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our interaction design services range from <strong className="text-green-400">₹30,000 to ₹80,000 per project</strong>, depending on complexity, number of screens, animation requirements, and level of interactivity. We offer comprehensive packages including user flow mapping, microinteraction design, motion design, interactive prototyping, and usability testing.
                </p>
                <div className="flex items-start gap-2 text-green-300">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Custom packages available</span>
                </div>
              </div>
            </div>

            {/* When Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-3xl">⏱️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">When will I see results?</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You&apos;ll receive your initial <strong className="text-orange-400">interaction design concepts within 2-4 weeks</strong> of project kickoff. After design finalization and development implementation, expect to see <strong className="text-orange-400">60% more user engagement</strong> and <strong className="text-orange-400">85% user satisfaction</strong>. We provide ongoing usability testing and refinement to continuously improve the experience.
                </p>
                <div className="flex items-start gap-2 text-orange-300">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Initial designs: 2-4 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Interaction Design Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">✨</span>
              Interaction Design Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Interaction Design</span> Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Design intuitive interactions that make your digital products a joy to use
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop" 
                    alt="Interaction Design Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 User-Centered Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every interaction is designed with your users in mind. We research, test, and refine to create experiences that truly resonate.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💫 Delightful Microinteractions</h3>
                <p className="text-gray-700 leading-relaxed">
                  Small details make big differences. Thoughtful animations and feedback that make every action feel responsive and satisfying.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔄 Iterative Design Process</h3>
                <p className="text-gray-700 leading-relaxed">
                  Continuous testing and refinement based on real user feedback. We prototype, test, and improve until it&apos;s perfect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interaction Design Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Interaction Design <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive interaction design solutions for exceptional user experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">User Flow Design</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Map out seamless user journeys that guide users effortlessly from entry to conversion. Clear paths, minimal friction.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Journey Mapping</li>
                  <li className="flex items-start gap-2">✓ Task Flow Analysis</li>
                  <li className="flex items-start gap-2">✓ Conversion Optimization</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💫</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Microinteractions</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Design delightful microinteractions that provide feedback and make your interface feel alive and responsive.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Button States</li>
                  <li className="flex items-start gap-2">✓ Loading Animations</li>
                  <li className="flex items-start gap-2">✓ Hover Effects</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎬</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Motion Design</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Create smooth, purposeful animations that enhance usability and guide user attention to important elements.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Transition Animations</li>
                  <li className="flex items-start gap-2">✓ Page Transitions</li>
                  <li className="flex items-start gap-2">✓ Loading States</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🔧</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Interactive Prototyping</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Build high-fidelity prototypes that let stakeholders experience the interactions before development begins.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Clickable Prototypes</li>
                  <li className="flex items-start gap-2">✓ User Testing</li>
                  <li className="flex items-start gap-2">✓ Feedback Integration</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📱</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Gesture Design</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Design intuitive touch and gesture interactions for mobile and tablet experiences that feel natural.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Swipe Interactions</li>
                  <li className="flex items-start gap-2">✓ Touch Targets</li>
                  <li className="flex items-start gap-2">✓ Multi-touch Gestures</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🧪</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Usability Testing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Test interactions with real users to identify pain points and opportunities for improvement before launch.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ User Testing Sessions</li>
                  <li className="flex items-start gap-2">✓ A/B Testing</li>
                  <li className="flex items-start gap-2">✓ Analytics Review</li>
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
              Ready to Create<br />
              <span className="text-yellow-300">Delightful Interactions?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s design interactions that users love. Intuitive, engaging, and conversion-focused!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Free Consultation</span>
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
                <span>User-Centered Design</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>85% User Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Expert UX Designers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {/* Our Locations */}

      {/* FAQ Section - Home Page Format */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating emojis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="text-6xl opacity-20 absolute top-20 left-10 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>💡</div>
          <div className="text-6xl opacity-20 absolute top-40 right-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🎯</div>
          <div className="text-6xl opacity-20 absolute bottom-20 left-1/4 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>✨</div>
          <div className="text-6xl opacity-20 absolute bottom-40 right-1/3 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}>🎨</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Got <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-pulse">Questions?</span>
              <br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">We&apos;ve Got Answers!</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Everything you need to know about our interaction design services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Question 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                  <span>What is interaction design and why is it important?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Interaction design focuses on creating <strong className="text-yellow-300">engaging and intuitive user experiences</strong> by designing how users interact with digital products. It includes <strong className="text-green-300">microinteractions, animations, transitions, user flows, and feedback mechanisms</strong>. Good interaction design makes products feel <strong className="text-blue-300">responsive, delightful, and easy to use</strong>, directly impacting user satisfaction, engagement rates, and conversion goals for Mumbai businesses.</p>
              </div>
            </details>

            {/* Question 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">✨</span>
                  <span>What makes MyDigital Crown&apos;s interaction design different?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We combine <strong className="text-orange-300">user research, design thinking, and iterative testing</strong> to create interactions that truly work for your audience. Our process includes <strong className="text-yellow-300">user flow mapping, high-fidelity prototyping, motion design, and usability testing</strong>. We focus on <strong className="text-green-300">measurable outcomes</strong> like engagement rates and user satisfaction, not just aesthetics. Plus, we understand Mumbai&apos;s diverse user base and design accordingly.</p>
              </div>
            </details>

            {/* Question 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                  <span>How long does an interaction design project take?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>A typical interaction design project takes <strong className="text-green-300">2-4 weeks for initial concepts</strong> and prototypes. Complex projects with extensive animations and multiple user flows may take <strong className="text-yellow-300">6-8 weeks</strong>. Timeline depends on project scope, number of screens, animation complexity, and testing requirements. We work in sprints with regular reviews, so you see progress weekly and can provide feedback throughout the Mumbai-based design process.</p>
              </div>
            </details>

            {/* Question 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🛠️</span>
                  <span>What tools do you use for interaction design?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We use <strong className="text-purple-300">industry-standard tools</strong> including Figma, Adobe XD, Principle, ProtoPie, and After Effects for motion design. For prototyping, we leverage <strong className="text-blue-300">Framer, InVision, and Marvel</strong>. Our team also uses <strong className="text-orange-300">user testing platforms like Maze, UserTesting, and Hotjar</strong> to validate interactions with real users. We choose tools based on project needs and client preferences.</p>
              </div>
            </details>

            {/* Question 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">💰</span>
                  <span>How much does interaction design cost in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Our interaction design services range from <strong className="text-green-300">₹30,000 to ₹80,000 per project</strong> depending on complexity. Pricing factors include number of screens, animation requirements, prototype fidelity, and testing needs. We offer <strong className="text-yellow-300">package deals for startups and ongoing retainers</strong> for enterprises. Every project includes user flows, microinteractions, motion design, and usability testing. Contact us at <strong className="text-blue-300">+91-83695-11877</strong> for a detailed quote.</p>
              </div>
            </details>

            {/* Question 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">💫</span>
                  <span>What are microinteractions and why do they matter?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Microinteractions are <strong className="text-cyan-300">small, focused interactions</strong> that accomplish a single task - like button animations, loading indicators, or toggle switches. They provide <strong className="text-green-400">instant feedback</strong> that makes interfaces feel responsive and alive. Well-designed microinteractions improve <strong className="text-yellow-300">user confidence, reduce errors, and create delightful moments</strong> that make your Mumbai product memorable and engaging.</p>
              </div>
            </details>

            {/* Question 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎬</span>
                  <span>Do you provide motion design and animations?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Yes! <strong className="text-yellow-300">Motion design</strong> is a core part of our interaction design services. We create <strong className="text-orange-300">smooth transitions, loading animations, hover effects, and page transitions</strong> that guide user attention and enhance usability. Our animations follow <strong className="text-blue-300">material design and Apple HIG principles</strong>, ensuring they&apos;re purposeful, not just decorative. We optimize animations for performance across devices used by Mumbai audiences.</p>
              </div>
            </details>

            {/* Question 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📱</span>
                  <span>Can you design interactions for mobile apps?</span>
                </span>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Absolutely! We specialize in <strong className="text-red-300">mobile-first interaction design</strong> including gesture-based interactions, swipe patterns, touch targets, and haptic feedback. We design for both <strong className="text-blue-300">iOS and Android</strong>, following platform-specific guidelines while maintaining your brand identity. Our mobile interactions account for <strong className="text-green-300">thumb zones, one-handed use, and varied screen sizes</strong> common in Mumbai&apos;s diverse mobile market.</p>
              </div>
            </details>

            {/* Question 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-indigo-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🧪</span>
                  <span>Do you conduct usability testing?</span>
                </span>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Yes! <strong className="text-indigo-300">Usability testing</strong> is essential to our process. We conduct <strong className="text-green-300">moderated testing sessions, A/B tests, and remote user testing</strong> to validate interactions before development. We test with real users matching your target audience in Mumbai, identifying <strong className="text-yellow-300">pain points, confusion, and opportunities for improvement</strong>. Testing results inform design refinements, ensuring the final product truly works for users.</p>
              </div>
            </details>

            {/* Question 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:border-teal-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-teal-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔄</span>
                  <span>How do you handle design iterations and feedback?</span>
                </span>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We follow an <strong className="text-teal-300">agile, iterative approach</strong> with regular review cycles. You&apos;ll see work-in-progress designs weekly and can provide feedback at each stage. We include <strong className="text-blue-300">2-3 revision rounds</strong> in our packages to refine interactions based on your input and user testing results. All feedback is tracked in collaborative tools like <strong className="text-yellow-300">Figma, Miro, or Notion</strong> for transparency throughout the Mumbai project lifecycle.</p>
              </div>
            </details>

            {/* Question 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-lime-500/20 hover:border-lime-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-lime-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🚀</span>
                  <span>How do I get started with interaction design services?</span>
                </span>
                <svg className="w-7 h-7 text-lime-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Getting started is simple! <strong className="text-lime-300">Call us at +91-83695-11877</strong> or fill out our contact form. We&apos;ll schedule a free discovery call to understand your product, users, and interaction goals. After scoping the project, we provide a <strong className="text-green-300">detailed proposal with timeline and pricing</strong>. Once approved, we kick off with user research and begin crafting delightful interactions that make your Mumbai users smile. Let&apos;s create <strong className="text-yellow-300">memorable experiences</strong> together!</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Content Section 1: Understanding Interaction Design */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📚</span>
              Deep Dive Into Interaction Design
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Understanding <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Interaction Design</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The art and science of creating engaging digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">What is Interaction Design?</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Interaction design (IxD) is about creating <strong className="text-blue-400">meaningful relationships between users and products</strong>. It encompasses how users <strong className="text-green-400">navigate, engage, and accomplish tasks</strong> within digital interfaces. From button clicks to swipe gestures, from loading animations to error messages - every touchpoint is carefully crafted. Our Mumbai team designs interactions that feel <strong className="text-yellow-400">natural, responsive, and delightful</strong>, turning complex tasks into simple, enjoyable experiences.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">💫</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Beyond Visual Design</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                While UI design focuses on how things look, interaction design focuses on <strong className="text-green-400">how things behave and respond</strong>. It&apos;s about creating <strong className="text-blue-400">feedback loops, animations, transitions, and system states</strong> that communicate with users. Good interaction design is invisible - users don&apos;t notice it, they just feel the product is intuitive. We combine <strong className="text-yellow-400">psychology, motion design, and user testing</strong> to create interactions that Mumbai users love without thinking about them.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Measurable Impact</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Great interaction design drives real business results. Studies show well-designed interactions increase <strong className="text-purple-400">user engagement by 60%, reduce task completion time by 40%, and boost conversion rates by 35%</strong>. Users who experience <strong className="text-green-400">smooth, delightful interactions</strong> are more likely to return, recommend, and convert. Our Mumbai clients see <strong className="text-yellow-400">higher satisfaction scores, lower support tickets, and increased revenue</strong> after implementing our interaction designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2: Design Principles */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">⚡</span>
              Core Design Principles
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent">Design Principles</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Guiding philosophies that shape every interaction we create
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">User-Centered Thinking</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Every design decision starts with <strong className="text-orange-400">understanding user needs, behaviors, and contexts</strong>. We conduct user research, create personas, and map user journeys before touching design tools. Our interactions solve <strong className="text-blue-400">real user problems</strong>, not just look pretty. We test with actual Mumbai users representing your target audience, iterating based on their feedback to ensure interactions truly serve their needs and expectations.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Feedback & Response</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Users need to know their actions are registered. We design <strong className="text-blue-400">immediate visual, auditory, or haptic feedback</strong> for every interaction. Button presses show active states, form submissions trigger loading indicators, errors display helpful messages. <strong className="text-green-400">Response time matters</strong> - we optimize animations to feel instant (under 100ms) while being smooth. Feedback reduces uncertainty and builds <strong className="text-yellow-400">user confidence</strong> in your product.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Simplicity & Clarity</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Complex doesn&apos;t mean complicated. We break down <strong className="text-green-400">multi-step processes into simple, clear interactions</strong>. Progressive disclosure reveals information when needed, not all at once. We eliminate unnecessary steps, reduce cognitive load, and create <strong className="text-blue-400">clear paths to user goals</strong>. Every animation, transition, and microinteraction has a purpose - we never add motion for motion&apos;s sake. Mumbai users appreciate <strong className="text-yellow-400">efficient, straightforward experiences</strong>.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Consistency & Patterns</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Users learn faster when interactions follow <strong className="text-purple-400">predictable patterns</strong>. We establish interaction models and apply them consistently across your product. Similar actions produce similar results. We leverage <strong className="text-blue-400">platform conventions</strong> (iOS, Android, Web) so users can transfer knowledge from other apps. Our design systems include <strong className="text-green-400">reusable interaction components</strong> that maintain consistency as your Mumbai product scales.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Delight & Surprise</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Functional doesn&apos;t have to be boring. We add <strong className="text-cyan-400">delightful moments</strong> that make users smile - playful error messages, celebratory animations after task completion, Easter eggs for power users. These moments create <strong className="text-yellow-400">emotional connections</strong> and brand differentiation. However, delight never compromises usability - we ensure animations can be <strong className="text-green-400">disabled for accessibility</strong> and don&apos;t slow down experienced users.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">♿</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Inclusive Design</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Great interactions work for everyone. We design for <strong className="text-yellow-400">diverse abilities, devices, and contexts</strong>. Interactions are keyboard-navigable, screen-reader friendly, and respect reduced motion preferences. We test on <strong className="text-blue-400">low-end devices and slow networks</strong> common in Mumbai. Touch targets meet minimum sizes, color isn&apos;t the only indicator, and interactions work <strong className="text-green-400">one-handed or with assistive technologies</strong>. Accessibility is built in, not bolted on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 3: Tools & Techniques */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🛠️</span>
              Tools & Techniques
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">Design Toolkit</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry-leading tools and methodologies for exceptional interaction design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Prototyping Tools</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We use <strong className="text-green-400">Figma, Adobe XD, and Framer</strong> for creating high-fidelity interactive prototypes. These tools allow us to design <strong className="text-blue-400">complex interactions, animations, and transitions</strong> that stakeholders can experience before development. ProtoPie and Principle enable <strong className="text-yellow-400">advanced micro-interactions and gestures</strong>. Prototypes help Mumbai teams align on vision, gather feedback early, and reduce development rework.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎬</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Motion Design Software</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                For sophisticated animations, we leverage <strong className="text-blue-400">After Effects with Lottie</strong> for web and mobile. Principle creates smooth native-feeling iOS/Android animations. We use <strong className="text-green-400">CSS animations, GSAP, and Framer Motion</strong> for production-ready code. Our motion designers follow <strong className="text-yellow-400">easing curves, timing principles, and performance budgets</strong> to ensure animations feel natural and run smoothly on Mumbai users&apos; devices.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🧪</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">User Testing Platforms</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We validate interactions with <strong className="text-purple-400">Maze, UserTesting, and Lookback</strong> for remote testing. These platforms let us watch users interact with prototypes, collecting <strong className="text-blue-400">qualitative feedback and quantitative metrics</strong>. Hotjar and FullStory reveal how real users navigate production sites. We conduct <strong className="text-green-400">moderated sessions with Mumbai users</strong> for deeper insights and run A/B tests to optimize high-stakes interactions.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Documentation Tools</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We document interactions in <strong className="text-orange-400">design systems using Storybook and Zeroheight</strong>. Interaction specs include <strong className="text-blue-400">state diagrams, animation curves, and edge cases</strong>. Miro and FigJam help us map user flows and collaborate on interaction patterns. Clear documentation ensures <strong className="text-green-400">developers implement interactions correctly</strong> and maintains consistency as Mumbai teams grow and products scale over time.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Analytics & Monitoring</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We measure interaction success with <strong className="text-cyan-400">Google Analytics, Mixpanel, and Amplitude</strong>. Event tracking shows which interactions users engage with, where they drop off, and how long tasks take. <strong className="text-blue-400">Heatmaps reveal click patterns</strong>, scroll depth, and rage clicks indicating frustration. Data informs iteration - we continuously refine interactions based on <strong className="text-green-400">real user behavior from Mumbai audiences</strong>, not assumptions.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration Tools</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Figma&apos;s collaborative features enable <strong className="text-pink-400">real-time design reviews with Mumbai stakeholders</strong>. We use Notion for project documentation, Slack for communication, and Linear for tracking design tasks. <strong className="text-blue-400">Version control in Abstract or Figma</strong> preserves design history. Regular design critiques in Miro foster <strong className="text-green-400">team alignment and iterative improvement</strong>, ensuring everyone contributes to creating delightful interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 4: Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">⭐</span>
              Why MyDigital Crown
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Why Choose <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-rose-300 bg-clip-text text-transparent">MyDigital Crown</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mumbai&apos;s most trusted interaction design experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Design Team</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our interaction designers have <strong className="text-purple-400">10+ years of experience</strong> crafting delightful digital experiences. We&apos;ve designed interactions for <strong className="text-blue-400">250+ projects across fintech, e-commerce, SaaS, and mobile apps</strong>. Our team includes specialists in <strong className="text-green-400">motion design, prototyping, and user testing</strong>. We stay current with emerging patterns and continuously learn from Mumbai&apos;s evolving digital landscape.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Data-Driven Design</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We don&apos;t design in a vacuum. Every interaction is <strong className="text-blue-400">validated through user testing and analytics</strong>. We measure engagement, completion rates, and user satisfaction before and after design changes. Our decisions are backed by <strong className="text-green-400">behavioral data, heatmaps, and user feedback</strong>. This approach ensures Mumbai businesses invest in interactions that <strong className="text-yellow-400">demonstrably improve user experience and business metrics</strong>.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Iterative Process</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Great interactions aren&apos;t created in one shot - they evolve. We follow an <strong className="text-green-400">agile, iterative approach</strong> with weekly design reviews. You see work-in-progress and can provide feedback early. We include <strong className="text-blue-400">multiple rounds of refinement</strong> based on stakeholder input and user testing results. This collaborative process ensures the final interactions exceed expectations and truly <strong className="text-yellow-400">solve Mumbai user needs</strong>.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Business-Focused</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Beautiful interactions that don&apos;t drive business results are just art. We design with <strong className="text-orange-400">clear business objectives</strong> - increasing conversions, reducing support tickets, improving retention, or boosting engagement. Every interaction pattern is chosen to <strong className="text-blue-400">support user goals AND business goals</strong>. Our Mumbai clients see <strong className="text-green-400">measurable ROI</strong> through increased user satisfaction and bottom-line metrics.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Platform Expertise</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We design native-feeling interactions for <strong className="text-cyan-400">iOS, Android, and web platforms</strong>. Our team understands platform-specific guidelines, gesture conventions, and performance constraints. We create <strong className="text-blue-400">adaptive interactions</strong> that feel at home on each platform while maintaining your brand identity. Whether your Mumbai users are on iPhone, Android, or desktop, they get <strong className="text-green-400">optimized, platform-appropriate experiences</strong>.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">⏱️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Fast & Reliable</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We deliver <strong className="text-pink-400">high-quality interaction designs on time</strong>. Our streamlined process includes discovery, concept development, prototyping, testing, and delivery in <strong className="text-blue-400">2-4 week sprints</strong>. We use project management tools to keep everyone aligned and provide <strong className="text-green-400">regular progress updates</strong>. Mumbai businesses choose us for reliability - we don&apos;t disappear mid-project or miss deadlines. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 5: Mumbai Design Excellence */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🌆</span>
              Mumbai Design Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">Mumbai&apos;s</span> Interaction Design Leaders
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Bringing global design standards to India&apos;s financial capital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Local Understanding</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Based in <strong className="text-yellow-400">Chembur, Mumbai</strong>, we understand the unique needs of Indian users. We design for <strong className="text-blue-400">diverse technical literacy, varied internet speeds, and multilingual interfaces</strong>. Our interactions work beautifully on <strong className="text-green-400">₹5,000 Android phones and ₹1 lakh iPhones</strong> alike. We account for Mumbai&apos;s commuter culture - designing interactions that work one-handed on crowded trains.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Industry Recognition</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our interaction designs have won <strong className="text-blue-400">industry awards and client accolades</strong>. We&apos;ve been featured in design publications and speak at Mumbai UX conferences. Clients rate our interaction designs <strong className="text-green-400">85% user satisfaction</strong> on average. We&apos;re trusted by <strong className="text-yellow-400">startups, SMEs, and Fortune 500 companies</strong> across India to create interactions that users genuinely enjoy.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Long-Term Partnership</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We&apos;re not a one-time vendor - we&apos;re your <strong className="text-green-400">long-term design partner</strong>. Many Mumbai clients work with us for years, iterating and refining interactions as their products evolve. We provide <strong className="text-blue-400">ongoing design support, A/B testing, and optimization</strong>. As your user base grows and expectations change, we adapt interactions to maintain <strong className="text-yellow-400">competitive advantage</strong> and user delight.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OurLocations />


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/interaction-design"
        title="Complete UX/UI Solutions"
        description="Enhance your interaction design with our comprehensive digital services"
        maxServices={6}
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "serviceType": "Interaction Design Services",
                "provider": {
                  "@type": "Organization",
                  "name": "MyDigital Crown",
                  "url": "https://mydigitalcrown.in",
                  "logo": "https://mydigitalcrown.in/logo.png",
                  "telephone": "+91-83695-11877",
                  "email": "info@mydigitalcrown.in",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Chembur",
                    "addressLocality": "Mumbai",
                    "addressRegion": "Maharashtra",
                    "postalCode": "400071",
                    "addressCountry": "IN"
                  }
                },
                "areaServed": "Mumbai",
                "description": "Professional interaction design services in Mumbai creating delightful user experiences through intuitive interactions, microinteractions, motion design, and usability testing.",
                "offers": {
                  "@type": "Offer",
                  "price": "30000",
                  "priceCurrency": "INR",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "minPrice": "30000",
                    "maxPrice": "80000",
                    "priceCurrency": "INR"
                  },
                  "availability": "https://schema.org/InStock",
                  "url": "https://mydigitalcrown.in/services/interaction-design",
                  "eligibleRegion": {
                    "@type": "Place",
                    "name": "Mumbai"
                  }
                }
              },
              {
                "@type": "Organization",
                "name": "MyDigital Crown",
                "url": "https://mydigitalcrown.in",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://mydigitalcrown.in/logo.png",
                  "width": "250",
                  "height": "60"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-83695-11877",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                },
                "sameAs": [
                  "https://www.facebook.com/mydigitalcrown",
                  "https://www.instagram.com/mydigitalcrown",
                  "https://www.linkedin.com/company/mydigitalcrown"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "157",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              {
                "@type": "WebPage",
                "name": "Interaction Design Company In Mumbai | Expert Interaction Design",
                "url": "https://mydigitalcrown.in/services/interaction-design",
                "description": "Top Interaction Design Company in Mumbai. Expert microinteraction design, motion design, and interactive prototyping services. 60% more engagement. Call +91-83695-11877",
                "publisher": {
                  "@type": "Organization",
                  "name": "MyDigital Crown"
                },
                "inLanguage": "en-IN",
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
                      "name": "Interaction Design",
                      "item": "https://mydigitalcrown.in/services/interaction-design"
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is interaction design and why is it important?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Interaction design (IxD) is the practice of designing how users engage with digital products - from clicks and swipes to animations and feedback. It's important because it directly impacts user satisfaction, task completion, and business results. Well-designed interactions increase engagement by 60%, reduce frustration, and build emotional connections with your brand."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What makes MyDigital Crown's interaction design different?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We combine data-driven decision making with creative excellence. Every interaction is validated through user testing with real Mumbai users. We use industry-leading tools like Figma, Framer, and After Effects. Our team has 10+ years of experience designing interactions for 250+ projects."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does an interaction design project take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Typical projects take 2-4 weeks for initial concepts and prototypes, with 1-2 additional weeks for refinement based on user testing. Complex products with many screens and interactions may take 6-8 weeks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What tools do you use for interaction design?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We use Figma and Adobe XD for prototyping, After Effects with Lottie for animations, Principle for native mobile interactions, and Framer for code-based prototypes. For user testing we use Maze, UserTesting, and Hotjar."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does interaction design cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Interaction design services range from ₹30,000 to ₹80,000 depending on project complexity, number of screens, animation requirements, and testing scope. Investment includes user research, prototyping, motion design, usability testing, and developer handoff documentation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are microinteractions and why do they matter?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Microinteractions are small, single-purpose animations or feedback moments that provide immediate feedback, guide users, prevent errors, and add delight. Studies show microinteractions increase user engagement by 60% and make products feel more polished and professional."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide motion design services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Motion design is a core part of our interaction design services. We create smooth transitions, loading animations, page transitions, and celebratory moments using After Effects for complex animations exported as Lottie files for web and mobile."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you design interactions for mobile apps?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! We specialize in native iOS and Android interaction design. We design swipe gestures, pull-to-refresh, haptic feedback, and native transitions that feel at home on each platform following Material Design for Android or Human Interface Guidelines for iOS."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you conduct usability testing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, usability testing is essential to our process. We test prototypes with real Mumbai users representing your target audience. Testing includes moderated sessions where we watch users interact and ask questions, plus remote unmoderated tests using platforms like Maze and UserTesting."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you handle design iterations and feedback?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We follow an agile, collaborative process with weekly design reviews. You see work-in-progress in Figma and provide feedback through comments and meetings. We include 2-3 rounds of major revisions in our projects based on stakeholder and user feedback."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I get started with interaction design services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Call us at +91-83695-11877 or fill out our contact form. We'll schedule a free 30-minute consultation to understand your product, users, and goals. Then we provide a detailed proposal outlining our approach, timeline, and investment."
                    }
                  }
                ]
              },
              {
                "@type": "ItemList",
                "name": "Interaction Design Services",
                "description": "Comprehensive interaction design services offered in Mumbai",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Microinteraction Design",
                    "description": "Design delightful small interactions that provide feedback and guide users"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Motion Design",
                    "description": "Create smooth animations, transitions, and loading states that enhance UX"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Interactive Prototyping",
                    "description": "Build high-fidelity prototypes to test and validate interactions before development"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Gesture Design",
                    "description": "Design intuitive swipe, pinch, and touch gestures for mobile apps"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Usability Testing",
                    "description": "Validate interactions with real users to ensure intuitive experiences"
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Animation Systems",
                    "description": "Create consistent animation libraries and design systems for scalability"
                  }
                ]
              },
              {
                "@type": "Review",
                "itemReviewed": {
                  "@type": "Service",
                  "name": "Interaction Design Services"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Fintech Startup Founder"
                },
                "reviewBody": "MyDigital Crown transformed our app's user experience. The microinteractions they designed increased our engagement by 65% and user satisfaction scores jumped to 87%. The team understood our Mumbai users perfectly and delivered interactions that feel native and delightful."
              },
              {
                "@type": "HowTo",
                "name": "How Our Interaction Design Process Works",
                "description": "Step-by-step process for creating delightful interaction designs in Mumbai",
                "totalTime": "P4W",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "INR",
                  "value": "30000"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Discovery & Research",
                    "text": "We study your users, product goals, and competitive landscape. Conduct user interviews and analyze existing interactions. Timeline: 3-5 days.",
                    "url": "https://mydigitalcrown.in/services/interaction-design#discovery"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Interaction Mapping",
                    "text": "Map user flows and identify key interaction moments. Define interaction principles and patterns. Timeline: 2-3 days.",
                    "url": "https://mydigitalcrown.in/services/interaction-design#mapping"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Concept Development",
                    "text": "Create initial interaction concepts and design directions. Explore different approaches to key interactions. Timeline: 1 week.",
                    "url": "https://mydigitalcrown.in/services/interaction-design#concepts"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Interactive Prototyping",
                    "text": "Build high-fidelity prototypes with animations and transitions in Figma or Framer. Timeline: 1-2 weeks.",
                    "url": "https://mydigitalcrown.in/services/interaction-design#prototyping"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Motion Design",
                    "text": "Create detailed animations, loading states, and microinteractions. Export as Lottie or code. Timeline: 1 week.",
                    "url": "https://mydigitalcrown.in/services/interaction-design#motion"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Usability Testing",
                    "text": "Test prototypes with 8-12 Mumbai users. Observe interactions, gather feedback, measure metrics. Timeline: 3-5 days.",
                    "url": "https://mydigitalcrown.in/services/interaction-design#testing"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Refinement",
                    "text": "Refine interactions based on test results. Optimize animations and fix pain points. Timeline: 3-5 days.",
                    "url": "https://mydigitalcrown.in/services/interaction-design#refinement"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 8,
                    "name": "Developer Handoff",
                    "text": "Document all interactions with specs, easing curves, and code snippets. Support development team. Timeline: 2-3 days.",
                    "url": "https://mydigitalcrown.in/services/interaction-design#handoff"
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": "Why Interaction Design Matters for Mumbai Businesses",
                "author": {
                  "@type": "Organization",
                  "name": "MyDigital Crown"
                },
                "datePublished": "2024-01-15",
                "dateModified": "2024-01-15",
                "image": "https://mydigitalcrown.in/images/interaction-design.jpg",
                "publisher": {
                  "@type": "Organization",
                  "name": "MyDigital Crown",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://mydigitalcrown.in/logo.png"
                  }
                },
                "description": "Comprehensive guide to interaction design services in Mumbai, covering microinteractions, motion design, prototyping, and usability testing."
              },
              {
                "@type": "LocalBusiness",
                "name": "MyDigital Crown - Interaction Design Agency Mumbai",
                "image": "https://mydigitalcrown.in/logo.png",
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
                  "latitude": "19.0596",
                  "longitude": "72.8977"
                },
                "url": "https://mydigitalcrown.in",
                "priceRange": "₹₹₹",
                "openingHours": "Mo-Sa 10:00-19:00",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "157"
                }
              },
              {
                "@type": "VideoObject",
                "name": "Interaction Design Showcase - MyDigital Crown",
                "description": "Watch how our interaction designs create delightful user experiences through microinteractions, animations, and intuitive gestures",
                "thumbnailUrl": "https://mydigitalcrown.in/images/interaction-design-video-thumb.jpg",
                "uploadDate": "2024-01-15",
                "duration": "PT3M45S",
                "contentUrl": "https://mydigitalcrown.in/videos/interaction-design-showcase.mp4"
              },
              {
                "@type": "Course",
                "name": "Interaction Design Fundamentals",
                "description": "Learn the principles of creating engaging digital interactions from Mumbai's leading interaction design experts",
                "provider": {
                  "@type": "Organization",
                  "name": "MyDigital Crown"
                },
                "courseCode": "IXD101",
                "hasCourseInstance": {
                  "@type": "CourseInstance",
                  "courseMode": "Online",
                  "duration": "P8W",
                  "instructor": {
                    "@type": "Person",
                    "name": "Senior Interaction Designer",
                    "jobTitle": "Lead Interaction Designer"
                  }
                }
              },
              {
                "@type": "SpecialAnnouncement",
                "name": "Free Interaction Design Audit for Mumbai Businesses",
                "text": "Get a complimentary interaction design audit worth ₹15,000. We'll analyze your website or app, identify interaction improvements, and provide actionable recommendations. Limited to 10 businesses per month.",
                "datePosted": "2024-01-15",
                "expires": "2024-12-31",
                "category": "https://www.wikidata.org/wiki/Q186386",
                "url": "https://mydigitalcrown.in/services/interaction-design"
              },
              {
                "@type": "AggregateRating",
                "itemReviewed": {
                  "@type": "Service",
                  "name": "Interaction Design Services Mumbai"
                },
                "ratingValue": "4.9",
                "reviewCount": "157",
                "bestRating": "5",
                "worstRating": "1"
              },
              {
                "@type": "Offer",
                "name": "Interaction Design Package",
                "description": "Complete interaction design services for websites and mobile apps in Mumbai",
                "price": "30000",
                "priceCurrency": "INR",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "minPrice": "30000",
                  "maxPrice": "80000",
                  "priceCurrency": "INR",
                  "valueAddedTaxIncluded": "false"
                },
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01",
                "seller": {
                  "@type": "Organization",
                  "name": "MyDigital Crown"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Mumbai"
                }
              }
            ]
          })
        }}
      />

      {/* Noscript fallback */}
      <noscript>
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f9fafb' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#1f2937' }}>Interaction Design Company In Mumbai</h2>
          <p style={{ fontSize: '18px', marginBottom: '20px', color: '#4b5563' }}>
            MyDigital Crown is Mumbai&apos;s leading interaction design agency. We create delightful user experiences through intuitive microinteractions, motion design, and usability testing.
          </p>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#1f2937' }}>Our Services:</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#4b5563' }}>
              <li style={{ marginBottom: '10px' }}>✓ Microinteraction Design - Delightful small interactions</li>
              <li style={{ marginBottom: '10px' }}>✓ Motion Design - Smooth animations and transitions</li>
              <li style={{ marginBottom: '10px' }}>✓ Interactive Prototyping - Test before you build</li>
              <li style={{ marginBottom: '10px' }}>✓ Gesture Design - Intuitive touch interactions</li>
              <li style={{ marginBottom: '10px' }}>✓ Usability Testing - Validate with real users</li>
              <li style={{ marginBottom: '10px' }}>✓ Animation Systems - Consistent design libraries</li>
            </ul>
          </div>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#1f2937' }}>Contact Us:</h3>
            <p style={{ fontSize: '18px', color: '#4b5563' }}>
              <strong>Phone:</strong> <a href="tel:+918369511877" style={{ color: '#2563eb' }}>+91-83695-11877</a><br />
              <strong>Email:</strong> <a href="mailto:info@mydigitalcrown.in" style={{ color: '#2563eb' }}>info@mydigitalcrown.in</a><br />
              <strong>Location:</strong> Chembur, Mumbai, Maharashtra - 400071
            </p>
          </div>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#1f2937' }}>Results:</h3>
            <p style={{ fontSize: '18px', color: '#4b5563' }}>
              • 60% increase in user engagement<br />
              • 85% user satisfaction scores<br />
              • 40% faster task completion<br />
              • 35% higher conversion rates
            </p>
          </div>
        </div>
      </noscript>

      <Footer />
    </>
  )
}
