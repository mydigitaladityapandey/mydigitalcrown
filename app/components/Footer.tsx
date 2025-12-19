'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Floating Action Buttons - Right Side */}
      <a 
        href="tel:+918369511877" 
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Call us"
      >
        <span className="text-2xl">📞</span>
      </a>
      
      <a 
        href="https://wa.me/918369511877?text=Hi%20MyDigital%20Crown,%20I'm%20interested%20in%20your%20digital%20marketing%20services" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp us"
      >
        <span className="text-2xl">💬</span>
      </a>

      {/* Floating Action Buttons - Left Side */}
      <a 
        href="tel:+918369511877" 
        className="fixed bottom-24 left-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Call us"
      >
        <span className="text-2xl">📞</span>
      </a>
      
      <a 
        href="https://wa.me/918369511877?text=Hi%20MyDigital%20Crown,%20I'm%20interested%20in%20your%20digital%20marketing%20services" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp us"
      >
        <span className="text-2xl">💬</span>
      </a>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-pulse">
          <span className="text-6xl">👑</span>
        </div>
        <div className="absolute top-32 right-32 animate-bounce">
          <span className="text-5xl">📈</span>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-pulse" style={{animationDelay: '1s'}}>
          <span className="text-6xl">🌐</span>
        </div>
        <div className="absolute bottom-20 right-20 animate-bounce" style={{animationDelay: '2s'}}>
          <span className="text-5xl">🚀</span>
        </div>
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section with CTA */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
              <span className="text-yellow-400">📞</span>
              <span className="text-white font-semibold">Ready to Transform Your Business?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Build Your <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Digital Empire</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a 
                href="tel:+918369511877" 
                className="group bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <span className="mr-2">📞</span>
                <span>Call: +91-83695-11877</span>
              </a>
              <a 
                href="mailto:info@mydigitalcrown.in" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <span className="mr-2">✉️</span>
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">👑</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">MyDigital Crown</span>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  <strong>Leading Digital Marketing Company in Mumbai</strong> - MyDigital Crown is Mumbai&apos;s most trusted digital marketing agency offering 50+ services: SEO, Google Ads, Social Media Marketing, Web Development. Trusted by 150+ clients across India.
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <span className="mr-2 text-blue-400">🔗</span>
                  Connect With Us
                </h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.facebook.com/mydigitalcrown" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg"
                  >
                    <span className="text-xl text-white">f</span>
                  </a>
                  <a 
                    href="https://x.com/mydigitalcrown" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl flex items-center justify-center hover:from-sky-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg"
                  >
                    <span className="text-xl text-white font-bold">𝕏</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mydigital-crown-0b815429a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg"
                  >
                    <span className="text-xl text-white font-bold">in</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/mydigitalcrown/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-500 rounded-xl flex items-center justify-center hover:from-pink-700 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg"
                  >
                    <span className="text-xl">📷</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="mb-8">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span>🧭</span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">🏠 Home</Link></li>
                <li><Link href="/about" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">👥 About</Link></li>
                <li><Link href="/blog" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">📝 Blog</Link></li>
                <li><Link href="/gallery" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">🖼️ Gallery</Link></li>
                <li><Link href="/jobs" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">💼 Jobs</Link></li>
                <li><Link href="/contact" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">📞 Contact</Link></li>
                <li><Link href="/course" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">🎓 Course</Link></li>
              </ul>
            </div>
            
            {/* Digital Services */}
            <div className="mb-8">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span>📈</span>
                Digital Services
              </h3>
              <ul className="space-y-3">
                <li><Link href="/services/digital-marketing-strategy" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">🚀 Digital Marketing</Link></li>
                <li><Link href="/services/search-engine-optimisation" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">🔍 SEO Services</Link></li>
                <li><Link href="/services/social-media-marketing" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">📱 Social Media</Link></li>
                <li><Link href="/services/google-ads" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">📊 Google Ads</Link></li>
                <li><Link href="/services/content-marketing" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">✍️ Content Marketing</Link></li>
                <li><Link href="/services/youtube-promotion" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">🎥 YouTube Promotion</Link></li>
              </ul>
            </div>
            
            {/* Development & Tech */}
            <div className="mb-8">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span>💻</span>
                Development &amp; Tech
              </h3>
              <ul className="space-y-3">
                <li><Link href="/services/web-development" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">💻 Web Development</Link></li>
                <li><Link href="/services/web-design" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">🎨 Web Design</Link></li>
                <li><Link href="/services/mobile-app" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">📱 Mobile App</Link></li>
                <li><Link href="/services/digital-branding" className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all inline-block">🎨 Digital Branding</Link></li>
              </ul>
            </div>
          </div>

          {/* Location & Contact Section */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Visit Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Offices</span>
              </h3>
              <p className="text-gray-300 text-lg">Three strategic locations to serve you better</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Mumbai Office */}
              <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">🏢</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Mumbai Office</h4>
                <p className="text-gray-300 text-sm mb-4">Digital Hub</p>
                <div className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                  <span className="text-blue-400 mt-1">📍</span>
                  <span>A5-106 Navkar City Phase 3, Rajavali, Near Rajavali Talav, Naigaon East Mumbai 401208</span>
                </div>
              </div>
              
              {/* Varanasi Office */}
              <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">🏠</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Varanasi Office</h4>
                <p className="text-gray-300 text-sm mb-4">Regional Center</p>
                <div className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                  <span className="text-orange-400 mt-1">📍</span>
                  <span>254, Saraswati Nagar Colony, Lohta Road, Near Nand Ghar, Laharata, Bhitari, Varanasi, UP 221106</span>
                </div>
              </div>
              
              {/* Bangalore Office */}
              <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Bangalore Office</h4>
                <p className="text-gray-300 text-sm mb-4">Tech Innovation Center</p>
                <div className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                  <span className="text-green-400 mt-1">📍</span>
                  <span>Tech Innovation Center, Bangalore, Karnataka</span>
                </div>
              </div>
            </div>

            {/* Contact Strip */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">24/7 Support Available</h4>
                    <p className="text-gray-300 text-sm">We&apos;re here whenever you need us</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="tel:+918369511877" 
                    className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
                  >
                    <span>📞</span> +91 8369511877
                  </a>
                  <a 
                    href="tel:+919967906766" 
                    className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
                  >
                    <span>📞</span> +91 9967906766
                  </a>
                  <a 
                    href="mailto:info@mydigitalcrown.in" 
                    className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
                  >
                    <span>✉️</span> info@mydigitalcrown.in
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-300 text-center md:text-left">
                © 2025 MyDigital Crown. All rights reserved. | Crafted with ❤️ in Mumbai
              </p>
              <div className="flex items-center space-x-6">
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</Link>
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <span className="text-green-400">🛡️</span>
                  <span>SSL Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
