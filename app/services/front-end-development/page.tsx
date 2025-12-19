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
  title: 'Frontend Developer Mumbai | 300+ Projects | React Vue Angular',
  description: 'Frontend Developer Mumbai. 300+ Projects | Expert React, Vue, Angular & Next.js | Modern UI/UX Development. Call +91-83695-11877',
  keywords: [
    'frontend developer in mumbai',
    'frontend developer mumbai',
    'ui developer mumbai',
    'react developer mumbai',
    'angular developer mumbai',
    'vue developer mumbai',
    'javascript developer mumbai',
    'web developer mumbai',
    'ui ux developer mumbai',
    'front end developer mumbai',
    'frontend engineer mumbai',
    'react js developer mumbai',
    'next js developer mumbai',
    'typescript developer mumbai',
    'responsive web design mumbai',
    'html css developer mumbai',
    'frontend development company mumbai',
    'ui development services mumbai',
    'web interface developer mumbai',
    'react native developer mumbai',
    'frontend consultant mumbai',
    'ui engineer mumbai',
    'web app developer mumbai',
    'single page application developer mumbai',
    'progressive web app developer mumbai',
    'frontend architect mumbai',
    'javascript expert mumbai',
    'frontend programmer mumbai',
    'user interface developer mumbai',
    'modern web developer mumbai',
    'frontend specialist mumbai',
    'react expert mumbai',
    'vue specialist mumbai',
    'angular expert mumbai',
    'tailwind css developer mumbai',
    'frontend freelancer mumbai'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Frontend Development Services',
  classification: 'React, Vue, Angular & Modern UI Development',
  openGraph: {
    title: 'Frontend Developer In Mumbai | Expert React, Vue, Angular Development',
    description: 'Mumbai\'s leading frontend developer specializing in React, Vue, Angular, Next.js. 300+ projects built, 98% client satisfaction. Fast, responsive, accessible UIs.',
    url: 'https://mydigitalcrown.in/services/front-end-development',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/frontend-development-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Frontend Developer In Mumbai - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Developer In Mumbai | Expert UI/UX Development',
    description: 'Top Frontend Developer In Mumbai. Expert React, Vue, Angular development. 300+ projects built. Call +91-83695-11877',
    images: ['https://mydigitalcrown.in/images/frontend-development-twitter.jpg'],
    creator: '@mydigitalcrown',
  },
  alternates: {
    canonical: 'https://mydigitalcrown.in/services/front-end-development',
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

export default function FrontEndDevelopmentPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Front-End Development Services Mumbai Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s Premier Front-End Development Agency</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Frontend Developer In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  💻 Build Stunning <span className="text-yellow-300">User Interfaces</span> with <span className="text-green-300">Modern Frameworks</span> & <span className="text-orange-300">Best Practices</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  React | Vue | Angular | Next.js | TypeScript | Responsive Design
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">300+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Projects Built</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">98%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Client Satisfaction</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">50ms</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Load Time</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Responsive</div>
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
              Frontend Developer <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Quick Info</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about our frontend development services
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
                  <strong className="text-yellow-300">MyDigital Crown</strong> is based in <strong className="text-green-300">Chembur, Mumbai, Maharashtra - 400071</strong>. We serve clients across Mumbai, Navi Mumbai, Thane, and throughout India with remote frontend development services.
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
                  <strong className="text-yellow-300">Hourly: ₹1,500-3,500/hour</strong> based on complexity. <strong className="text-green-300">Project basis: ₹50,000-5,00,000+</strong> depending on scope. Monthly retainer: ₹80,000-2,00,000. Free consultation and project estimation included.
                </p>
                <p className="text-blue-200 text-sm">
                  Custom pricing for startups and long-term partnerships available.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⏱️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">When will my project be ready?</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  <strong className="text-yellow-300">Simple UI: 1-2 weeks</strong>. Complex web app: 4-8 weeks. <strong className="text-green-300">Enterprise project: 2-6 months</strong>. We work in agile sprints with weekly deliverables. First prototype ready within 3-5 days.
                </p>
                <p className="text-blue-200 text-sm">
                  Rush delivery available. Continuous updates and transparent progress tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* Section 1: Understanding Frontend Development */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              Understanding Frontend Development
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              The Power of <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Modern Frontend</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Frontend development is the art and science of creating exceptional user experiences through cutting-edge web technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Modern Web Experiences</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Frontend development has evolved from simple HTML pages to complex, interactive web applications that rival native apps in functionality and user experience. We build fast, responsive, accessible interfaces using the latest frameworks and technologies.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Today&apos;s users expect instant loading, smooth interactions, and seamless experiences across all devices. Our frontend solutions deliver exactly that - combining performance optimization, beautiful design, and robust functionality to create web experiences that users love and businesses benefit from.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">User-Centric Design</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Great frontend development starts with understanding users. We create interfaces that are intuitive, accessible, and delightful to use. Every interaction is carefully designed to guide users toward their goals while maintaining brand consistency and visual appeal.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our design process involves user research, wireframing, prototyping, and iterative testing to ensure the final product not only looks beautiful but also solves real user problems. We follow WCAG accessibility standards, implement responsive designs, and optimize for performance to deliver inclusive experiences.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-green-500/20 hover:border-green-400 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technology Stack Mastery</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We specialize in React, Vue, Angular, Next.js, and TypeScript - the most powerful and popular frontend technologies. Our expertise extends to state management, build tools, testing frameworks, and performance optimization techniques that ensure your application is fast, reliable, and maintainable.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you need a simple landing page, complex single-page application, Progressive Web App, or enterprise dashboard, we have the technical expertise to deliver. Our developers stay updated with the latest trends, attend conferences, and continuously improve their skills to bring you cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Skills & Technologies */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              Skills & Technologies
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Expertise Across the <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">Frontend Ecosystem</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technical capabilities to build any web interface you can imagine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="text-2xl font-bold text-white">React Development</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                Expert React developers proficient in Hooks, Context API, Server Components, and the latest React 19 features. We build component-based architectures that are reusable, testable, and maintainable.
              </p>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>React Hooks & Custom Hooks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Server & Client Components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Redux, Zustand, Recoil State Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Next.js 15 for SSR/SSG/ISR</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💚</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Vue.js Development</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                Progressive Vue.js framework expertise with Composition API, Nuxt 3, and modern tooling. Perfect for rapid development and incremental adoption in existing projects.
              </p>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Vue 3 Composition API & Reactivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Nuxt 3 for Universal Apps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Pinia State Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Vue Router & Vuetify UI</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-red-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🅰️</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Angular Framework</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                Enterprise-grade Angular development with TypeScript, dependency injection, and comprehensive tooling. Ideal for large-scale applications requiring robust architecture.
              </p>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Angular 17+ with Signals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>RxJS for Reactive Programming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Angular Material & PrimeNG</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Standalone Components Architecture</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📘</span>
                </div>
                <h3 className="text-2xl font-bold text-white">TypeScript Expertise</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                Type-safe development with TypeScript for better code quality, fewer bugs, and improved developer experience. We leverage advanced types, generics, and strict mode for robust applications.
              </p>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Strict Type Checking & Inference</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Advanced Types & Generics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Type-Safe API Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>IDE Autocomplete & IntelliSense</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Modern CSS & Styling</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                Beautiful, responsive styling with Tailwind CSS, Styled Components, CSS Modules, and modern CSS features. Pixel-perfect designs that work across all devices and browsers.
              </p>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Tailwind CSS Utility-First Approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Styled Components & Emotion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>CSS-in-JS & CSS Modules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Responsive Design & Animations</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-yellow-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Performance Optimization</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                Web performance optimization experts achieving sub-100ms load times, 90+ Lighthouse scores, and excellent Core Web Vitals. Fast websites convert better and rank higher.
              </p>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Code Splitting & Lazy Loading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Image & Asset Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Caching Strategies & CDN</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Core Web Vitals Excellence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Development Process */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              Development Process
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              From Concept to <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">Production</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven agile process ensures timely delivery, transparent communication, and exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">📋</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-4xl font-black text-orange-400 mr-3">01</span>
                <h3 className="text-2xl font-bold text-white">Requirements Analysis</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We start by understanding your business goals, target audience, technical requirements, and project constraints. Detailed discovery sessions help us create comprehensive specifications and project roadmap with clear milestones, deliverables, and timelines.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">🎨</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-4xl font-black text-blue-400 mr-3">02</span>
                <h3 className="text-2xl font-bold text-white">Design Implementation</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our designers create wireframes, mockups, and interactive prototypes that align with your brand identity and user experience goals. We iterate based on your feedback until the design perfectly captures your vision, ensuring pixel-perfect implementation in code.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">⚙️</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-4xl font-black text-purple-400 mr-3">03</span>
                <h3 className="text-2xl font-bold text-white">Component Development</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We build reusable, modular components following best practices and design patterns. Clean, well-documented code ensures maintainability and scalability. Each component is developed with accessibility, performance, and cross-browser compatibility in mind.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-green-500/20 hover:border-green-400 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">🔗</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-4xl font-black text-green-400 mr-3">04</span>
                <h3 className="text-2xl font-bold text-white">Integration & Testing</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We integrate frontend with backend APIs, third-party services, and data sources. Comprehensive testing includes unit tests, integration tests, end-to-end tests, and manual QA across devices and browsers to ensure everything works flawlessly before deployment.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-4xl font-black text-yellow-400 mr-3">05</span>
                <h3 className="text-2xl font-bold text-white">Performance Tuning</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We optimize load times, reduce bundle sizes, implement caching strategies, and fine-tune Core Web Vitals. Performance audits using Lighthouse, WebPageTest, and real user monitoring ensure your application is lightning-fast and provides excellent user experience.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-4xl font-black text-pink-400 mr-3">06</span>
                <h3 className="text-2xl font-bold text-white">Deployment & Support</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We deploy to your preferred hosting platform with CI/CD pipelines for automated builds and deployments. Post-launch support includes monitoring, bug fixes, performance optimization, and feature enhancements. We&apos;re with you every step of your digital journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Your Trusted <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Frontend Partner</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              300+ successful projects, 98% client satisfaction, and a commitment to excellence in every line of code
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-yellow-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Expert Development Team</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                Our Mumbai-based team consists of senior developers with 5-15 years of experience in React, Vue, Angular, and modern JavaScript. We&apos;ve worked with startups, enterprises, and everything in between, delivering solutions that scale.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">React Experts</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">Vue Specialists</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">Angular Pros</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏙️</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Mumbai Market Knowledge</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                Based in Chembur, Mumbai, we understand the local market dynamics, business needs, and user behaviors. We&apos;ve served 200+ Mumbai-based clients across finance, e-commerce, healthcare, education, and entertainment sectors.
              </p>
              <div className="flex items-center text-green-300">
                <span className="text-2xl mr-2">📍</span>
                <span>Serving Mumbai, Navi Mumbai, Thane & Pan-India</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Proven Track Record</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                300+ projects built, 98% client satisfaction rate, 50ms average load time, and 100% responsive designs. Our portfolio includes award-winning websites, high-traffic web apps, and enterprise dashboards serving millions of users.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-3xl font-black text-green-400">300+</div>
                  <div className="text-sm text-blue-200">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-400">98%</div>
                  <div className="text-sm text-blue-200">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Modern Tech Stack</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                We use the latest versions of React, Vue, Angular, Next.js, and TypeScript. Our developers attend conferences, contribute to open source, and continuously upgrade their skills to bring you cutting-edge solutions with best-in-class performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-200">React 19</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm text-green-200">Vue 3</span>
                <span className="px-3 py-1 bg-red-500/20 rounded-full text-sm text-red-200">Angular 17</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200">Next.js 15</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-orange-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Agile Methodology</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                We work in 2-week sprints with regular demos, feedback sessions, and iterative improvements. You get transparency, predictability, and the ability to adjust priorities as your business needs evolve. Daily standups keep everyone aligned.
              </p>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>2-Week Sprint Cycles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Weekly Progress Updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Continuous Feedback Loop</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-pink-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Post-Launch Support</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                Your success doesn&apos;t end at launch. We provide ongoing maintenance, performance monitoring, security updates, feature enhancements, and technical support. Flexible retainer models ensure you always have expert help when needed.
              </p>
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg p-4 mt-4">
                <div className="flex items-center text-white">
                  <span className="text-2xl mr-3">💡</span>
                  <div>
                    <div className="font-bold">Free Consultation</div>
                    <div className="text-sm text-blue-200">Let&apos;s discuss your project</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Mumbai Development Excellence */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              Mumbai Development Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Leading <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Frontend Development</span> in Mumbai
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Local expertise with global standards - delivering world-class frontend solutions from the heart of Mumbai
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mumbai Market Expertise</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We understand Mumbai&apos;s fast-paced business environment, diverse user demographics, and competitive market dynamics. Our solutions are tailored for Mumbai audiences while meeting global quality standards.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From Bandra startups to BKC enterprises, Andheri SMEs to South Mumbai traditional businesses going digital - we&apos;ve helped businesses across Mumbai establish strong digital presence with cutting-edge frontend solutions.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Client Success Stories</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our portfolio includes successful projects for fintech companies, e-commerce platforms, healthcare apps, educational portals, and entertainment websites. We&apos;ve helped startups raise funding and enterprises modernize legacy systems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Clients report 40-60% improvement in user engagement, 30-50% faster load times, 25-35% higher conversion rates, and significant cost savings through our efficient development process and optimized solutions.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-green-500/20 hover:border-green-400 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Advantage</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Get world-class frontend development at Mumbai prices - 40-60% more affordable than US/UK agencies with comparable quality. Timezone flexibility enables collaboration with global teams. English proficiency ensures smooth communication.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Fast turnaround times, agile development process, transparent pricing, dedicated account managers, and post-launch support make us the preferred frontend development partner for businesses across Mumbai and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Front-End Development Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">💻</span>
              Front-End Development Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Front-End Development</span> Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create exceptional user experiences with modern, fast, and accessible web interfaces
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop" 
                    alt="Front-End Development Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Lightning Fast Performance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Optimized code and modern techniques ensure your web app loads in milliseconds. Superior performance across all devices and networks.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Fully Responsive Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pixel-perfect designs that work flawlessly on desktop, tablet, and mobile. One codebase, every screen size covered.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">♿ Accessibility First</h3>
                <p className="text-gray-700 leading-relaxed">
                  WCAG compliant interfaces that work for everyone. Semantic HTML, keyboard navigation, and screen reader support built-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Frameworks Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Technologies We <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Modern frameworks and cutting-edge tools for exceptional front-end experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">⚛️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">React Development</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Build dynamic, component-based UIs with React. Hooks, Context API, and modern patterns for scalable applications.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ React 18+ with Hooks</li>
                  <li className="flex items-start gap-2">✓ State Management (Redux, Zustand)</li>
                  <li className="flex items-start gap-2">✓ Server Components</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">▲</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Next.js Framework</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Full-stack React framework with SSR, SSG, and ISR. SEO-friendly, fast, and production-ready applications.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ App Router & Server Actions</li>
                  <li className="flex items-start gap-2">✓ API Routes & Middleware</li>
                  <li className="flex items-start gap-2">✓ Image & Font Optimization</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">💚</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Vue.js Development</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Progressive JavaScript framework for building intuitive UIs. Composition API and reactive data binding.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Vue 3 Composition API</li>
                  <li className="flex items-start gap-2">✓ Nuxt.js Framework</li>
                  <li className="flex items-start gap-2">✓ Pinia State Management</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-red-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🅰️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Angular Framework</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Enterprise-grade framework for large-scale applications. TypeScript-first with powerful CLI and tools.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Angular 17+ with Signals</li>
                  <li className="flex items-start gap-2">✓ RxJS & Reactive Programming</li>
                  <li className="flex items-start gap-2">✓ Dependency Injection</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📘</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">TypeScript</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Type-safe JavaScript for robust applications. Catch errors early and improve code quality with static typing.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Advanced Type Systems</li>
                  <li className="flex items-start gap-2">✓ IntelliSense & Autocomplete</li>
                  <li className="flex items-start gap-2">✓ Better Code Refactoring</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎨</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Modern CSS</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Beautiful designs with Tailwind CSS, Styled Components, and CSS-in-JS. Responsive, utility-first styling.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Tailwind CSS</li>
                  <li className="flex items-start gap-2">✓ CSS Modules & Sass</li>
                  <li className="flex items-start gap-2">✓ Animations & Transitions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <ClientSuccessStories />

      {/* FAQ Section - Home Page Format */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Floating emojis */}
        <div className="absolute top-32 left-20 text-6xl animate-bounce">💻</div>
        <div className="absolute top-48 right-32 text-6xl animate-bounce animation-delay-2000">⚡</div>
        <div className="absolute bottom-32 left-1/3 text-6xl animate-bounce animation-delay-4000">🎨</div>
        <div className="absolute bottom-48 right-1/4 text-6xl animate-bounce">🚀</div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">❓</span>
              Frequently Asked Questions
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Got Questions About <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Frontend Development?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know about our frontend development services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">What is frontend development and what technologies do you use?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">💻</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  <strong className="text-yellow-300">Frontend development</strong> is the creation of user interfaces and experiences that users directly interact with in web applications. We specialize in <strong className="text-green-300">React, Vue, Angular, Next.js, and TypeScript</strong> to build modern, responsive, and accessible web applications.
                </p>
                <p>
                  Our tech stack includes modern frameworks, state management libraries (Redux, Zustand, Pinia), styling solutions (Tailwind CSS, Styled Components), build tools (Vite, Webpack), and testing frameworks. We follow <strong className="text-blue-300">best practices for performance, accessibility, and SEO</strong> to deliver exceptional user experiences.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">Why should I hire a frontend developer from Mumbai?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">⭐</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  Mumbai is India&apos;s tech hub with access to <strong className="text-yellow-300">world-class talent at competitive rates</strong>. Our team has built <strong className="text-green-300">300+ projects</strong> for clients across industries, delivering 98% client satisfaction. We combine technical expertise with understanding of local and international market needs.
                </p>
                <p>
                  Being based in <strong className="text-blue-300">Chembur, Mumbai</strong>, we offer timezone flexibility for global clients, competitive pricing compared to Western markets, and the ability to work remotely or on-site. Our developers are proficient in English, follow agile methodologies, and stay updated with latest frontend trends and technologies.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">How much does frontend development cost?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">💰</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  <strong className="text-yellow-300">Hourly rates: ₹1,500-3,500/hour</strong> based on complexity and developer experience. <strong className="text-green-300">Project-based pricing: ₹50,000-5,00,000+</strong> depending on scope, features, and timeline. Monthly retainers range from ₹80,000 to ₹2,00,000 for ongoing development and maintenance.
                </p>
                <p>
                  Simple landing page: ₹50,000-1,00,000. Complex web application: ₹2,00,000-5,00,000. Enterprise dashboard: ₹5,00,000+. We provide <strong className="text-blue-300">free consultation and detailed project estimation</strong> before starting. Custom pricing available for startups and long-term partnerships.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">What&apos;s the difference between React, Vue, and Angular?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">⚛️</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  <strong className="text-yellow-300">React</strong> is a flexible library with huge ecosystem, best for dynamic UIs and single-page apps. <strong className="text-green-300">Vue</strong> is progressive framework with gentle learning curve, ideal for quick development. <strong className="text-blue-300">Angular</strong> is comprehensive framework for enterprise applications with built-in features.
                </p>
                <p>
                  React offers component reusability and virtual DOM for performance. Vue provides reactive data binding and simple syntax. Angular includes TypeScript, dependency injection, and comprehensive tooling. We help you choose the right framework based on your project requirements, team expertise, scalability needs, and timeline.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">How long does it take to build a web application?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">⏱️</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  <strong className="text-yellow-300">Simple UI: 1-2 weeks</strong> for basic interfaces with few pages. <strong className="text-green-300">Complex web app: 4-8 weeks</strong> for feature-rich applications with multiple integrations. <strong className="text-blue-300">Enterprise project: 2-6 months</strong> for large-scale systems with custom requirements.
                </p>
                <p>
                  We work in agile 2-week sprints with deliverables at each sprint end. First clickable prototype ready within 3-5 days. Weekly progress updates keep you informed. Timeline depends on scope, design complexity, API integrations, and testing requirements. Rush delivery available for urgent projects with proper planning.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">Do you provide responsive design for mobile devices?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">📱</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  Absolutely! <strong className="text-yellow-300">100% of our projects are fully responsive</strong>, working flawlessly across desktop, tablet, and mobile devices. We use <strong className="text-green-300">mobile-first approach</strong>, designing for smartphones first and scaling up to larger screens for optimal user experience everywhere.
                </p>
                <p>
                  Our responsive designs adapt to any screen size with fluid grids, flexible images, and CSS media queries. We test on real devices (iPhone, Android, iPad) and browsers to ensure pixel-perfect rendering. <strong className="text-blue-300">Progressive Web App (PWA)</strong> capabilities available for app-like mobile experiences without app store distribution.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">Can you optimize my existing website&apos;s performance?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">⚡</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  Yes! We specialize in <strong className="text-yellow-300">performance optimization</strong> - reducing load times, improving Core Web Vitals, and enhancing user experience. We analyze your site, identify bottlenecks, and implement optimizations like code splitting, lazy loading, image optimization, and caching strategies.
                </p>
                <p>
                  Typical improvements: 50-90% faster load times, better Google PageSpeed scores (90+), reduced bounce rates, increased conversions. We optimize JavaScript bundles, compress assets, implement CDN delivery, and refactor inefficient code. <strong className="text-blue-300">Free performance audit included</strong> to identify improvement opportunities.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">Do you provide ongoing maintenance and support?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">🛠️</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  Yes! We offer <strong className="text-yellow-300">monthly maintenance packages</strong> starting at ₹20,000/month including bug fixes, security updates, performance monitoring, and minor feature additions. <strong className="text-green-300">Priority support</strong> ensures quick response times for critical issues.
                </p>
                <p>
                  Maintenance includes framework updates, dependency upgrades, security patches, compatibility fixes, backup management, and technical support. We also provide <strong className="text-blue-300">analytics reporting, A/B testing, and continuous optimization</strong>. Flexible retainer models available - choose hours per month or unlimited support within scope.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">How do you ensure code quality and best practices?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">✅</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  We follow <strong className="text-yellow-300">industry best practices</strong>: code reviews, automated testing (Jest, Cypress), linting (ESLint, Prettier), TypeScript for type safety, Git version control, CI/CD pipelines, and comprehensive documentation. Every line of code is reviewed before deployment.
                </p>
                <p>
                  Our developers write <strong className="text-green-300">clean, maintainable, scalable code</strong> following SOLID principles and design patterns. We use component-driven development, separation of concerns, and modular architecture. <strong className="text-blue-300">Automated tests ensure 90%+ code coverage</strong>. Performance budgets prevent bloat. Documentation makes handoff seamless.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">Can you integrate with existing backend systems and APIs?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">🔌</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  Absolutely! We have extensive experience integrating with <strong className="text-yellow-300">REST APIs, GraphQL, WebSockets, and third-party services</strong>. We work with any backend technology - Node.js, Python, Java, .NET, PHP - and cloud platforms like AWS, Azure, Google Cloud.
                </p>
                <p>
                  We handle authentication (OAuth, JWT), real-time data (WebSockets, Server-Sent Events), payment gateways (Stripe, Razorpay), analytics (Google Analytics, Mixpanel), CMS integrations (WordPress, Strapi), and custom API development. <strong className="text-blue-300">Secure, efficient data handling</strong> with proper error handling and loading states for smooth UX.
                </p>
              </div>
            </details>

            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-xl font-bold text-white pr-4">What makes your frontend development services unique?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform duration-300 group-open:animate-spin">🌟</span>
              </summary>
              <div className="mt-4 text-blue-100 leading-relaxed border-t border-white/20 pt-4">
                <p className="mb-3">
                  <strong className="text-yellow-300">300+ successful projects</strong>, 98% client satisfaction, 50ms average load time, and 100% responsive designs. Our Mumbai-based team combines <strong className="text-green-300">technical excellence with business understanding</strong>, delivering not just code but solutions that drive results.
                </p>
                <p>
                  We focus on performance optimization, accessibility compliance (WCAG), SEO-friendly code, conversion-focused UX design, and scalable architecture. <strong className="text-blue-300">Transparent communication, agile methodology, competitive pricing</strong>, and dedicated account managers ensure smooth collaboration. Your success is our success.
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
              Ready to Build Your<br />
              <span className="text-yellow-300">Dream Interface?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s create a stunning front-end experience that your users will love. Fast, beautiful, and responsive!
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
                <span>Award-Winning Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Expert Development Team</span>
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
        currentService="/services/front-end-development"
        title="Complete Development Solutions"
        description="Enhance your front-end with our comprehensive digital services"
        maxServices={6}
      />

      {/* Comprehensive Schema Markup - 15+ Types */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Frontend Developer In Mumbai",
                "description": "Expert frontend development services in Mumbai specializing in React, Vue, Angular, Next.js, and TypeScript. Build modern, fast, responsive web applications with 300+ projects delivered and 98% client satisfaction.",
                "provider": {
                  "@type": "Organization",
                  "name": "MyDigital Crown"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Mumbai"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Frontend Development Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "React Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Vue.js Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Angular Development"
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
                "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop",
                "description": "Leading frontend development agency in Mumbai offering React, Vue, Angular, Next.js development with 300+ projects and 98% satisfaction rate",
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
                  "email": "info@mydigitalcrown.in",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                },
                "sameAs": [
                  "https://www.facebook.com/mydigitalcrown",
                  "https://www.instagram.com/mydigitalcrown",
                  "https://www.linkedin.com/company/mydigitalcrown",
                  "https://twitter.com/mydigitalcrown"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "150",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              {
                "@type": "WebPage",
                "name": "Frontend Developer In Mumbai | #1 UI/UX Development | MyDigital Crown",
                "description": "Top Frontend Developer In Mumbai. Expert React, Vue, Angular & Next.js Development. 300+ Projects Built, 98% Satisfaction. Call +91-83695-11877",
                "url": "https://mydigitalcrown.in/services/front-end-development",
                "inLanguage": "en-IN",
                "isPartOf": {
                  "@type": "WebSite",
                  "name": "MyDigital Crown",
                  "url": "https://mydigitalcrown.in"
                },
                "about": {
                  "@type": "Thing",
                  "name": "Frontend Development"
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop",
                  "width": 1200,
                  "height": 630
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
                    "name": "Frontend Developer In Mumbai",
                    "item": "https://mydigitalcrown.in/services/front-end-development"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is frontend development and what technologies do you use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Frontend development is the creation of user interfaces and experiences that users directly interact with in web applications. We specialize in React, Vue, Angular, Next.js, and TypeScript to build modern, responsive, and accessible web applications. Our tech stack includes modern frameworks, state management libraries (Redux, Zustand, Pinia), styling solutions (Tailwind CSS, Styled Components), build tools (Vite, Webpack), and testing frameworks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why should I hire a frontend developer from Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Mumbai is India's tech hub with access to world-class talent at competitive rates. Our team has built 300+ projects for clients across industries, delivering 98% client satisfaction. Being based in Chembur, Mumbai, we offer timezone flexibility for global clients, competitive pricing compared to Western markets, and the ability to work remotely or on-site."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does frontend development cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Hourly rates: ₹1,500-3,500/hour based on complexity and developer experience. Project-based pricing: ₹50,000-5,00,000+ depending on scope, features, and timeline. Monthly retainers range from ₹80,000 to ₹2,00,000 for ongoing development and maintenance. We provide free consultation and detailed project estimation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's the difference between React, Vue, and Angular?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "React is a flexible library with huge ecosystem, best for dynamic UIs and single-page apps. Vue is progressive framework with gentle learning curve, ideal for quick development. Angular is comprehensive framework for enterprise applications with built-in features. We help you choose the right framework based on your project requirements."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to build a web application?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Simple UI: 1-2 weeks for basic interfaces. Complex web app: 4-8 weeks for feature-rich applications. Enterprise project: 2-6 months for large-scale systems. We work in agile 2-week sprints with deliverables at each sprint end. First clickable prototype ready within 3-5 days."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide responsive design for mobile devices?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! 100% of our projects are fully responsive, working flawlessly across desktop, tablet, and mobile devices. We use mobile-first approach, designing for smartphones first and scaling up to larger screens for optimal user experience everywhere."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you optimize my existing website's performance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! We specialize in performance optimization - reducing load times, improving Core Web Vitals, and enhancing user experience. Typical improvements: 50-90% faster load times, better Google PageSpeed scores (90+), reduced bounce rates, increased conversions. Free performance audit included."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide ongoing maintenance and support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! We offer monthly maintenance packages starting at ₹20,000/month including bug fixes, security updates, performance monitoring, and minor feature additions. Priority support ensures quick response times for critical issues."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you ensure code quality and best practices?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We follow industry best practices: code reviews, automated testing (Jest, Cypress), linting (ESLint, Prettier), TypeScript for type safety, Git version control, CI/CD pipelines, and comprehensive documentation. Every line of code is reviewed before deployment."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you integrate with existing backend systems and APIs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! We have extensive experience integrating with REST APIs, GraphQL, WebSockets, and third-party services. We work with any backend technology - Node.js, Python, Java, .NET, PHP - and cloud platforms like AWS, Azure, Google Cloud."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What makes your frontend development services unique?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "300+ successful projects, 98% client satisfaction, 50ms average load time, and 100% responsive designs. Our Mumbai-based team combines technical excellence with business understanding, delivering not just code but solutions that drive results."
                    }
                  }
                ]
              },
              {
                "@type": "ItemList",
                "name": "Frontend Development Technologies",
                "description": "Technologies and frameworks we master for frontend development",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "React Development"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Vue.js Development"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Angular Framework"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Next.js Framework"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "TypeScript"
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Tailwind CSS"
                  }
                ]
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Rajesh Kumar"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "MyDigital Crown built our entire e-commerce frontend using React and Next.js. The website is lightning-fast, mobile-responsive, and our conversion rates increased by 45%. Their Mumbai-based team was professional, communicative, and delivered on time.",
                "datePublished": "2024-11-15",
                "itemReviewed": {
                  "@type": "Service",
                  "name": "Frontend Development Services"
                }
              },
              {
                "@type": "HowTo",
                "name": "How We Develop Frontend Applications",
                "description": "Our proven 6-step process for delivering exceptional frontend solutions",
                "totalTime": "PT4W",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "INR",
                  "value": "200000"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "name": "Requirements Analysis",
                    "text": "Understanding business goals, target audience, and technical requirements through detailed discovery sessions",
                    "position": 1
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Design Implementation",
                    "text": "Creating wireframes, mockups, and interactive prototypes aligned with brand identity and UX goals",
                    "position": 2
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Component Development",
                    "text": "Building reusable, modular components with clean code ensuring maintainability and scalability",
                    "position": 3
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Integration & Testing",
                    "text": "Integrating with backend APIs and conducting comprehensive testing across devices and browsers",
                    "position": 4
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Performance Tuning",
                    "text": "Optimizing load times, reducing bundle sizes, and fine-tuning Core Web Vitals for excellence",
                    "position": 5
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Deployment & Support",
                    "text": "Deploying with CI/CD pipelines and providing ongoing monitoring, bug fixes, and enhancements",
                    "position": 6
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": "Frontend Developer In Mumbai - Complete Guide to Modern Web Development",
                "description": "Comprehensive guide to hiring frontend developers in Mumbai for React, Vue, Angular development with pricing, timelines, and best practices",
                "author": {
                  "@type": "Person",
                  "name": "Aditya Pandey"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "MyDigital Crown"
                },
                "datePublished": "2024-01-15",
                "dateModified": "2024-12-15",
                "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop",
                "articleSection": "Web Development",
                "keywords": "frontend developer mumbai, react developer, vue developer, angular developer, next.js development, typescript developer, web development mumbai"
              },
              {
                "@type": "LocalBusiness",
                "name": "MyDigital Crown - Frontend Development Services",
                "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop",
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
                  "longitude": "72.8295"
                },
                "telephone": "+91-83695-11877",
                "email": "info@mydigitalcrown.in",
                "url": "https://mydigitalcrown.in/services/front-end-development",
                "priceRange": "₹₹",
                "openingHours": "Mo-Sa 10:00-19:00",
                "sameAs": [
                  "https://www.facebook.com/mydigitalcrown",
                  "https://www.instagram.com/mydigitalcrown"
                ]
              },
              {
                "@type": "VideoObject",
                "name": "Frontend Development Portfolio - MyDigital Crown",
                "description": "Showcase of our frontend development projects built with React, Vue, Angular",
                "thumbnailUrl": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
                "uploadDate": "2024-01-15",
                "duration": "PT3M",
                "contentUrl": "https://mydigitalcrown.in/frontend-portfolio"
              },
              {
                "@type": "Course",
                "name": "Frontend Development Mastery",
                "description": "Comprehensive frontend development training covering React, Vue, Angular, TypeScript",
                "provider": {
                  "@type": "Organization",
                  "name": "MyDigital Crown"
                },
                "courseCode": "FE-001",
                "hasCourseInstance": {
                  "@type": "CourseInstance",
                  "courseMode": "Online",
                  "duration": "P3M",
                  "instructor": {
                    "@type": "Person",
                    "name": "Senior Frontend Developer"
                  }
                }
              },
              {
                "@type": "SpecialAnnouncement",
                "name": "Free Frontend Consultation",
                "text": "Get free consultation and detailed project estimation for your frontend development needs. Contact us at +91-83695-11877",
                "datePosted": "2024-12-01",
                "expires": "2025-12-31"
              },
              {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1",
                "itemReviewed": {
                  "@type": "Service",
                  "name": "Frontend Development Services Mumbai"
                }
              },
              {
                "@type": "Offer",
                "name": "Frontend Development Packages",
                "description": "Flexible pricing for frontend development - hourly, project-based, or monthly retainers",
                "priceCurrency": "INR",
                "price": "50000",
                "priceSpecification": [
                  {
                    "@type": "PriceSpecification",
                    "name": "Hourly Rate",
                    "price": "1500-3500",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "PriceSpecification",
                    "name": "Project Basis",
                    "price": "50000-500000",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "PriceSpecification",
                    "name": "Monthly Retainer",
                    "price": "80000-200000",
                    "priceCurrency": "INR"
                  }
                ],
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01"
              }
            ]
          })
        }}
      />

      {/* Noscript Fallback for Accessibility */}
      <noscript>
        <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#1e40af' }}>Frontend Developer In Mumbai - Services</h2>
          
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Our Frontend Development Services:</h3>
            <ul style={{ lineHeight: '1.8', fontSize: '16px' }}>
              <li>React Development - Hooks, Context API, Server Components</li>
              <li>Vue.js Development - Composition API, Nuxt 3, Pinia</li>
              <li>Angular Framework - Signals, RxJS, Dependency Injection</li>
              <li>Next.js Development - SSR, SSG, ISR, App Router</li>
              <li>TypeScript Development - Type Safety, Advanced Types</li>
              <li>Modern CSS - Tailwind, Styled Components, CSS-in-JS</li>
              <li>Performance Optimization - Core Web Vitals, Load Times</li>
              <li>Responsive Design - Mobile-First, Cross-Browser</li>
              <li>Progressive Web Apps - Offline Support, Install able</li>
              <li>API Integration - REST, GraphQL, WebSockets</li>
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Key Statistics:</h3>
            <ul style={{ lineHeight: '1.8', fontSize: '16px' }}>
              <li>300+ Projects Successfully Built</li>
              <li>98% Client Satisfaction Rate</li>
              <li>50ms Average Load Time</li>
              <li>100% Responsive Designs</li>
              <li>90+ Lighthouse Performance Scores</li>
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Pricing:</h3>
            <ul style={{ lineHeight: '1.8', fontSize: '16px' }}>
              <li><strong>Hourly Rate:</strong> ₹1,500-3,500/hour based on complexity</li>
              <li><strong>Project Basis:</strong> ₹50,000-5,00,000+ depending on scope</li>
              <li><strong>Monthly Retainer:</strong> ₹80,000-2,00,000 for ongoing work</li>
              <li><strong>Free Consultation:</strong> Get detailed project estimation at no cost</li>
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Timeline:</h3>
            <ul style={{ lineHeight: '1.8', fontSize: '16px' }}>
              <li>Simple UI: 1-2 weeks</li>
              <li>Complex Web App: 4-8 weeks</li>
              <li>Enterprise Project: 2-6 months</li>
              <li>First Prototype: 3-5 days</li>
            </ul>
          </div>

          <div style={{ padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Contact Us:</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              <strong>Phone:</strong> <a href="tel:+918369511877" style={{ color: '#1e40af' }}>+91-83695-11877</a><br />
              <strong>Email:</strong> <a href="mailto:info@mydigitalcrown.in" style={{ color: '#1e40af' }}>info@mydigitalcrown.in</a><br />
              <strong>Location:</strong> Chembur, Mumbai, Maharashtra - 400071<br />
              <strong>Serving:</strong> Mumbai, Navi Mumbai, Thane & Pan-India
            </p>
          </div>
        </div>
      </noscript>

      <Footer />
    </>
  )
}
