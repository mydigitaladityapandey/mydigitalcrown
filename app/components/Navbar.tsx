'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800">MyDigital Crown</span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Premium Digital Solutions</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 max-h-[80vh] overflow-y-auto">
                <Link href="/services/digital-marketing-strategy" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">
                  Digital Marketing Strategy
                </Link>
                <Link href="/services/search-engine-optimisation" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Search Engine Optimisation
                </Link>
                <Link href="/services/social-media-marketing" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Social Media Marketing
                </Link>
                <Link href="/services/web-development" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Web Development
                </Link>
                <Link href="/services/web-design" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Web Design
                </Link>
                <Link href="/services/mobile-app" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Mobile App Development
                </Link>
                <Link href="/services/google-ads" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Google Ads Management
                </Link>
                <Link href="/services/content-marketing" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Content Marketing
                </Link>
                <Link href="/services/digital-branding" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Digital Branding
                </Link>
                <Link href="/services/youtube-promotion" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">
                  YouTube Promotion
                </Link>
              </div>
            </div>
            <Link href="/course" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Course
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Gallery
            </Link>
            <Link href="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Jobs
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium flex items-center justify-between"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                <Link
                  href="/services/digital-marketing-strategy"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Digital Marketing Strategy
                </Link>
                <Link
                  href="/services/search-engine-optimisation"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Search Engine Optimisation
                </Link>
                <Link
                  href="/services/social-media-marketing"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Social Media Marketing
                </Link>
                <Link
                  href="/services/web-development"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  href="/services/web-design"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Web Design
                </Link>
                <Link
                  href="/services/mobile-app"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Mobile App Development
                </Link>
                <Link
                  href="/services/google-ads"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Google Ads Management
                </Link>
                <Link
                  href="/services/content-marketing"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Content Marketing
                </Link>
                <Link
                  href="/services/digital-branding"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Digital Branding
                </Link>
                <Link
                  href="/services/youtube-promotion"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  YouTube Promotion
                </Link>
              </div>
            )}
            <Link
              href="/course"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Course
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/jobs"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Jobs
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
