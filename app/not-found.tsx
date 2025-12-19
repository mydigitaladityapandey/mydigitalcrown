import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found | MyDigital Crown',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, the page you are looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all transform hover:scale-105 font-bold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go to Homepage
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all font-bold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Popular pages you might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services" className="text-blue-600 hover:text-blue-800 font-semibold">Services</Link>
              <span className="text-gray-400">|</span>
              <Link href="/about" className="text-blue-600 hover:text-blue-800 font-semibold">About Us</Link>
              <span className="text-gray-400">|</span>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">Blog</Link>
              <span className="text-gray-400">|</span>
              <Link href="/course" className="text-blue-600 hover:text-blue-800 font-semibold">Courses</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
