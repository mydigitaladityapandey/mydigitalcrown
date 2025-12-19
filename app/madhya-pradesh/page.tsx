import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import TrustedBrands from '@/app/components/TrustedBrands'
import Link from 'next/link'
import Image from 'next/image'
import { blogs } from '@/app/data/blogs'
import { jobs } from '@/app/data/jobs'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://mydigitalcrown.in/#organization',
        name: 'MyDigital Crown',
        alternateName: 'MyDigital Crown - Digital Marketing Company Madhya Pradesh',
        url: 'https://mydigitalcrown.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://mydigitalcrown.in/logo.png',
          width: 250,
          height: 60
        },
        description: 'Leading Digital Marketing Company in Madhya Pradesh offering comprehensive digital marketing services including SEO, Google Ads, Social Media Marketing, and Web Development.',
        founder: {
          '@type': 'Person',
          name: 'Aditya',
          jobTitle: 'Founder & Digital Marketing Expert'
        },
        foundingDate: '2017',
        telephone: '+91-83695-11877',
        email: 'info@mydigitalcrown.in',
        address: [
          {
            '@type': 'PostalAddress',
            addressLocality: 'Madhya Pradesh',
            addressRegion: 'Madhya Pradesh',
            addressCountry: 'IN',
            name: 'Madhya Pradesh Office'
          },
          {
            '@type': 'PostalAddress',
            addressLocality: 'Varanasi',
            addressRegion: 'Uttar Pradesh',
            addressCountry: 'IN',
            name: 'Varanasi Office'
          },
          {
            '@type': 'PostalAddress',
            addressLocality: 'Bangalore',
            addressRegion: 'Karnataka',
            addressCountry: 'IN',
            name: 'Bangalore Office'
          }
        ],
        sameAs: [
          'https://www.facebook.com/mydigitalcrown',
          'https://www.instagram.com/mydigitalcrown',
          'https://www.linkedin.com/company/mydigitalcrown',
          'https://twitter.com/mydigitalcrown'
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '150',
          bestRating: '5',
          worstRating: '1'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-83695-11877',
          contactType: 'Customer Service',
          email: 'info@mydigitalcrown.in',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi']
        },
        knowsAbout: [
          'Digital Marketing',
          'SEO',
          'Social Media Marketing',
          'Google Ads',
          'Web Development',
          'Content Marketing',
          'Email Marketing',
          'PPC Advertising'
        ]
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://mydigitalcrown.in/#localbusiness',
        name: 'MyDigital Crown - Digital Marketing Company Madhya Pradesh',
        image: 'https://mydigitalcrown.in/images/office.jpg',
        priceRange: '₹₹',
        telephone: '+91-83695-11877',
        email: 'info@mydigitalcrown.in',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Madhya Pradesh Office',
          addressLocality: 'Madhya Pradesh',
          addressRegion: 'Madhya Pradesh',
          postalCode: '462001',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 23.2599,
          longitude: 77.4126
        },
        url: 'https://mydigitalcrown.in',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '16:00'
          }
        ],
        areaServed: [
          {
            '@type': 'City',
            name: 'Madhya Pradesh'
          },
          {
            '@type': 'State',
            name: 'Madhya Pradesh'
          },
          {
            '@type': 'Country',
            name: 'India'
          }
        ],
        slogan: 'Crown Your Digital Success',
        paymentAccepted: ['Cash', 'Credit Card', 'UPI', 'Bank Transfer']
      },
      {
        '@type': 'Service',
        '@id': 'https://mydigitalcrown.in/#service',
        serviceType: 'Digital Marketing Services',
        provider: {
          '@id': 'https://mydigitalcrown.in/#organization'
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Madhya Pradesh',
            '@id': 'https://en.wikipedia.org/wiki/Madhya Pradesh'
          },
          {
            '@type': 'City',
            name: 'Delhi'
          },
          {
            '@type': 'City',
            name: 'Bangalore'
          },
          {
            '@type': 'City',
            name: 'Pune'
          },
          {
            '@type': 'Country',
            name: 'India'
          }
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Marketing Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'SEO Services Madhya Pradesh',
                description: 'Search Engine Optimization services to rank higher on Google',
                url: 'https://mydigitalcrown.in/services/search-engine-optimisation'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Social Media Marketing Madhya Pradesh',
                description: 'Instagram, Facebook, LinkedIn marketing services',
                url: 'https://mydigitalcrown.in/services/social-media-marketing'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Google Ads Management Madhya Pradesh',
                description: 'PPC and Google Ads campaign management',
                url: 'https://mydigitalcrown.in/services/google-adwords'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web Development Madhya Pradesh',
                description: 'Professional website development and design services',
                url: 'https://mydigitalcrown.in/services/website-development'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Digital Branding Services',
                description: 'Complete branding and digital identity solutions',
                url: 'https://mydigitalcrown.in/services/digital-branding'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'YouTube Marketing Services',
                description: 'YouTube channel growth and video marketing',
                url: 'https://mydigitalcrown.in/services/youtube-marketing'
              }
            }
          ]
        },
        brand: {
          '@id': 'https://mydigitalcrown.in/#organization'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.mydigitalcrown.in/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the best digital marketing company in Madhya Pradesh?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'MyDigital Crown is one of the leading digital marketing companies in Madhya Pradesh, offering 50+ services including SEO, Google Ads, Social Media Marketing, and Web Development with 8+ years of experience and 150+ satisfied clients.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much does digital marketing cost in Madhya Pradesh?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Digital marketing costs in Madhya Pradesh vary based on services. At MyDigital Crown, we offer customized packages starting from ₹15,000/month for SEO to ₹50,000/month for comprehensive digital marketing solutions.'
            }
          },
          {
            '@type': 'Question',
            name: 'Which digital marketing agency is best in Madhya Pradesh?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'MyDigital Crown is recognized as one of the best digital marketing agencies in Madhya Pradesh, providing result-driven strategies with a proven track record of 300% average ROI for clients.'
            }
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://mydigitalcrown.in/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://mydigitalcrown.in'
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://mydigitalcrown.in/#website',
        url: 'https://mydigitalcrown.in',
        name: 'MyDigital Crown - Digital Marketing Company Madhya Pradesh',
        description: 'Leading Digital Marketing Company in Madhya Pradesh offering SEO, Social Media Marketing, Google Ads, Web Development & 50+ Digital Marketing Services',
        publisher: {
          '@id': 'https://mydigitalcrown.in/#organization'
        },
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://mydigitalcrown.in/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          }
        ],
        inLanguage: 'en-IN'
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://mydigitalcrown.in/#professionalservice',
        name: 'MyDigital Crown - Digital Marketing Services',
        description: 'Professional digital marketing services including SEO, PPC, Social Media Marketing, and Web Development',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Madhya Pradesh',
          addressRegion: 'Madhya Pradesh',
          addressCountry: 'IN'
        },
        telephone: '+91-83695-11877',
        url: 'https://mydigitalcrown.in',
        image: 'https://mydigitalcrown.in/images/office.jpg',
        serviceType: ['Digital Marketing', 'SEO', 'Social Media Marketing', 'Web Development', 'Google Ads'],
        areaServed: {
          '@type': 'Country',
          name: 'India'
        }
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navbar />
      
      {/* Hero Section - Main Content for Digital Marketing Company in Madhya Pradesh */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        itemScope 
        itemType="https://schema.org/Organization"
        aria-label="Digital Marketing Company Madhya Pradesh Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold" itemProp="slogan">Madhya Pradesh&apos;s Leading Digital Marketing Company</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading - H1 with primary keywords */}
              <h1 
                className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center"
                itemProp="name"
              >
                #1 Digital Marketing Company In Madhya Pradesh - MyDigital Crown
              </h1>
              
              {/* Tagline - Voice Search Optimized */}
              <div className="mb-10" itemProp="description">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  🚀 Transform Your Business with <span className="text-yellow-300">150+ Happy Clients</span>, <span className="text-green-300">8+ Years Experience</span> & <span className="text-orange-300">300% Average Growth</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  50+ Digital Marketing Services | SEO | Google Ads | Social Media | Web Development
                </p>
              </div>
              
              {/* CTA Buttons - Prominent Above Fold */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                  title="Get Free Digital Marketing Consultation Madhya Pradesh"
                  aria-label="Contact best digital marketing company in Madhya Pradesh for free audit"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    <span>Get FREE Consultation</span>
                  </span>
                </Link>
                <a 
                  href="tel:+918369511877" 
                  className="group relative overflow-hidden bg-white text-blue-600 border-4 border-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                  title="Call Best Digital Marketing Agency Madhya Pradesh"
                  aria-label="Call MyDigital Crown - Top Digital Marketing Company Madhya Pradesh"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl animate-bounce">📞</span>
                    <span>Call: +91-83695-11877</span>
                  </span>
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white max-w-6xl mx-auto">
                {/* 50+ Happy Clients */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/10 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">150+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider group-hover:text-yellow-200 transition-colors duration-300">Happy Clients</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>
                
                {/* 8+ Years Experience */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">⭐</span>
                  </div>
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">8+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">Years Experience</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>
                
                {/* 300% Average Growth */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-red-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">📈</span>
                  </div>
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-orange-100 to-white bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">300%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider group-hover:text-orange-200 transition-colors duration-300">Average Growth</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>
                
                {/* 24/7 Support */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-500/10 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300 animate-pulse">
                    <span className="text-white text-sm font-bold">🕐</span>
                  </div>
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-purple-100 to-white bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider group-hover:text-purple-200 transition-colors duration-300">Support</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* About Us Section - Digital Marketing Consultants Madhya Pradesh */}
      <section 
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
        aria-label="About MyDigital Crown - Digital Marketing Agency Madhya Pradesh"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">👋</span>
              About MyDigital Crown - Digital Marketing Consultants in Madhya Pradesh
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose MyDigital Crown as Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Marketing Partner</span> in Madhya Pradesh?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <strong>Looking for experienced digital marketing consultants in Madhya Pradesh?</strong> We are a trusted digital marketing agency in Madhya Pradesh transforming businesses through innovative digital marketing strategies since 2017
            </p>
          </header>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="/images/aditya.webp" 
                    alt="Aditya Pandey - Founder & Digital Marketing Consultant Madhya Pradesh | Best Digital Marketing Company"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                    priority
                    title="Aditya Pandey - Digital Marketing Expert Madhya Pradesh"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform translate-y-0 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">👨‍💼</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Aditya Pandey</h3>
                        <p className="text-blue-600 font-semibold">Founder & CEO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-blue-100 transform rotate-3 group-hover:rotate-6 transition-transform duration-500 hidden md:block">
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-600">8+</div>
                  <div className="text-sm text-gray-600 font-semibold">Years Exp</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-purple-100 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 hidden md:block">
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600">50+</div>
                  <div className="text-sm text-gray-600 font-semibold">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Your Partner in Digital Excellence
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Welcome to <span className="font-bold text-blue-600">MyDigital Crown</span> - Madhya Pradesh&apos;s premier digital marketing agency founded by <span className="font-bold">Aditya Pandey</span>. With over 8 years of industry experience, we&apos;ve helped 50+ businesses achieve remarkable growth through innovative digital marketing strategies.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From startups to established enterprises, we&apos;ve delivered <span className="font-bold text-purple-600">300% average growth</span> for our clients through data-driven SEO, strategic Google Ads campaigns, engaging social media marketing, and cutting-edge web development.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="font-bold text-gray-900">Result-Driven</div>
                  <div className="text-sm text-gray-600">Proven strategies</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 border border-purple-200">
                  <div className="text-3xl mb-2">💡</div>
                  <div className="font-bold text-gray-900">Innovation</div>
                  <div className="text-sm text-gray-600">Latest technology</div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-4 border border-pink-200">
                  <div className="text-3xl mb-2">🤝</div>
                  <div className="font-bold text-gray-900">Transparent</div>
                  <div className="text-sm text-gray-600">Clear reporting</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 border border-orange-200">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-bold text-gray-900">24/7 Support</div>
                  <div className="text-sm text-gray-600">Always available</div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-2xl mr-2">⭐</span>
                  Why Choose MyDigital Crown?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Guaranteed 300% average ROI for our clients</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>50+ specialized digital marketing services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Customized strategies for your business goals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Dedicated account manager & 24/7 support</span>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/about" 
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 inline-flex items-center justify-center"
                  title="Learn About Madhya Pradesh&apos;s Best Digital Marketing Company"
                  aria-label="Learn more about MyDigital Crown - Top Digital Marketing Agency Madhya Pradesh"
                >
                  <span className="relative flex items-center">
                    <span className="mr-2">📖</span>
                    Learn About Best Digital Marketing Company Madhya Pradesh
                  </span>
                </Link>
                <Link 
                  href="/contact" 
                  className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 inline-flex items-center justify-center"
                  title="Contact Digital Marketing Agency Madhya Pradesh - Free Consultation"
                  aria-label="Contact MyDigital Crown for Digital Marketing Services Madhya Pradesh"
                >
                  <span className="flex items-center">
                    <span className="mr-2">🚀</span>
                    Get Free Digital Marketing Consultation
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl opacity-10 animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}>🎯</div>
          <div className="absolute top-1/3 right-20 text-5xl opacity-10 animate-bounce" style={{animationDelay: '1s', animationDuration: '3.5s'}}>💎</div>
          <div className="absolute bottom-32 left-1/4 text-5xl opacity-10 animate-bounce" style={{animationDelay: '2s', animationDuration: '4.5s'}}>⚡</div>
          <div className="absolute bottom-20 right-1/3 text-6xl opacity-10 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}>🚀</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <span className="text-2xl mr-3 animate-pulse">⭐</span>
              <span className="text-lg">Why Choose MyDigital Crown</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              What Makes Us <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Different</span>
              <br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">From The Rest?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We don&apos;t just promise results - we guarantee them! Here&apos;s why 50+ businesses trust us 🌟
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🏆</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">Proven Track Record</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  8+ years of delivering exceptional results with 300% average growth for our clients. We don&apos;t just work for you - we work with you to achieve your goals.
                </p>
                <div className="flex items-center gap-2 text-yellow-300 font-bold">
                  <span>300% Avg Growth</span>
                  <svg className="w-5 h-5 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Data-Driven Strategies</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Every decision backed by analytics and insights. We use cutting-edge tools to track, measure, and optimize your campaigns for maximum ROI.
                </p>
                <div className="flex items-center gap-2 text-blue-300 font-bold">
                  <span>Real-Time Analytics</span>
                  <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">50+ Specialized Services</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  From SEO to social media, web development to Google Ads - we offer everything you need under one roof. No need for multiple agencies!
                </p>
                <div className="flex items-center gap-2 text-purple-300 font-bold">
                  <span>All-in-One Solution</span>
                  <svg className="w-5 h-5 animate-spin" style={{animationDuration: '3s'}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">💰</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">90-Day Results Guarantee</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  We guarantee measurable results within 90 days or we work for FREE until you see the growth you deserve. That&apos;s our commitment to your success!
                </p>
                <div className="flex items-center gap-2 text-green-300 font-bold">
                  <span>Risk-Free Partnership</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-pink-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🤝</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">Transparent & Honest</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  No hidden fees, no long-term contracts. Complete transparency with detailed monthly reports showing exactly how your investment is performing.
                </p>
                <div className="flex items-center gap-2 text-pink-300 font-bold">
                  <span>100% Transparency</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">⏰</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">24/7 Dedicated Support</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Your dedicated account manager is always available. Whether it&apos;s a query or an emergency, we&apos;re here round the clock to support your business.
                </p>
                <div className="flex items-center gap-2 text-orange-300 font-bold">
                  <span>Always Available</span>
                  <svg className="w-5 h-5 animate-ping" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-[3rem] shadow-2xl border-2 border-white/30 p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-pink-500/10 animate-pulse"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                  Ready to <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">10X</span> Your Business?
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join 50+ successful businesses who trust MyDigital Crown for their digital growth 🚀
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    href="/contact" 
                    className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-12 py-5 rounded-full font-black text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-110 inline-flex items-center justify-center overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative flex items-center">
                      <span className="text-3xl mr-3 animate-bounce">🎯</span>
                      Get Free Strategy Session
                    </span>
                  </Link>
                  <Link 
                    href="tel:+918369511877" 
                    className="group relative bg-white/10 backdrop-blur-sm border-3 border-white/50 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white hover:text-blue-600 hover:shadow-2xl transition-all transform hover:scale-110 inline-flex items-center justify-center"
                  >
                    <span className="flex items-center">
                      <span className="text-3xl mr-3 group-hover:animate-spin">📞</span>
                      Call: +91-83695-11877
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Digital Marketing Services Madhya Pradesh */}
      <section 
        className="py-20 bg-white relative overflow-hidden"
        aria-label="Digital Marketing Services in Madhya Pradesh"
        itemScope 
        itemType="https://schema.org/Service"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl hover:shadow-2xl transition-all">
              <span className="text-2xl mr-3">�</span>
              <span>Premium Digital Marketing Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight" itemProp="name">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">50+ Services</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-800">To Skyrocket Your Growth</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-semibold mb-4" itemProp="description">
              From <span className="text-blue-600">SEO</span> to <span className="text-purple-600">Social Media</span>, <span className="text-pink-600">Google Ads</span> to <span className="text-orange-600">Web Development</span>
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Everything your business needs to dominate online 🚀
            </p>
          </header>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1: SEO */}
            <Link href="/services/search-engine-optimisation" className="group relative rounded-3xl overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop"
                  alt="SEO Services Madhya Pradesh - Digital Marketing Company | Search Engine Optimization Agency"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-blue-700/95 group-hover:from-blue-800/98 group-hover:to-blue-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Search Engine Optimization</h3>
                <p className="text-blue-100 mb-4 leading-relaxed">Dominate Google rankings with our proven SEO strategies. Get more organic traffic and qualified leads.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 2: Social Media Marketing */}
            <Link href="/services/social-media-marketing" className="group relative rounded-3xl overflow-hidden border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
                  alt="Social Media Marketing Madhya Pradesh - Best Digital Marketing Agency | Instagram Facebook LinkedIn Marketing"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900/95 to-rose-700/95 group-hover:from-pink-800/98 group-hover:to-rose-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Social Media Marketing</h3>
                <p className="text-pink-100 mb-4 leading-relaxed">Build a powerful social presence on Instagram, Facebook, LinkedIn & more. Engage & convert your audience.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 3: Google Ads */}
            <Link href="/services/google-ads" className="group relative rounded-3xl overflow-hidden border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Google Ads PPC Madhya Pradesh - Digital Marketing Company | Pay Per Click Advertising Agency"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 to-emerald-700/95 group-hover:from-green-800/98 group-hover:to-emerald-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Google Ads (PPC)</h3>
                <p className="text-green-100 mb-4 leading-relaxed">Get instant traffic & leads with targeted Google Ads campaigns. Maximum ROI guaranteed.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 4: Web Development */}
            <Link href="/services/web-development" className="group relative rounded-3xl overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                  alt="Web Development Madhya Pradesh - Digital Marketing Company | Custom Website Development Agency"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 to-indigo-700/95 group-hover:from-purple-800/98 group-hover:to-indigo-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Web Development</h3>
                <p className="text-purple-100 mb-4 leading-relaxed">Lightning-fast, mobile-responsive websites that convert visitors into customers. Built to perform.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 5: Web Design */}
            <Link href="/services/web-design" className="group relative rounded-3xl overflow-hidden border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
                  alt="Web Design"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/95 to-red-700/95 group-hover:from-orange-800/98 group-hover:to-red-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Web Design</h3>
                <p className="text-orange-100 mb-4 leading-relaxed">Stunning, user-friendly designs that captivate your audience and boost conversions.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 6: Mobile App Development */}
            <Link href="/services/mobile-app" className="group relative rounded-3xl overflow-hidden border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
                  alt="Mobile App Development"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/95 to-teal-700/95 group-hover:from-cyan-800/98 group-hover:to-teal-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Mobile App Development</h3>
                <p className="text-cyan-100 mb-4 leading-relaxed">iOS & Android apps that engage users and drive business growth. Smooth & powerful.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 7: Content Marketing */}
            <Link href="/services/content-marketing" className="group relative rounded-3xl overflow-hidden border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=600&fit=crop"
                  alt="Content Marketing"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/95 to-amber-700/95 group-hover:from-yellow-800/98 group-hover:to-amber-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Content Marketing</h3>
                <p className="text-yellow-100 mb-4 leading-relaxed">Compelling content that attracts, engages, and converts. Build authority & trust.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 8: Digital Branding */}
            <Link href="/services/digital-branding" className="group relative rounded-3xl overflow-hidden border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop"
                  alt="Digital Branding"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 to-purple-700/95 group-hover:from-indigo-800/98 group-hover:to-purple-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Digital Branding</h3>
                <p className="text-indigo-100 mb-4 leading-relaxed">Build a memorable brand identity that resonates with your audience and stands out.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 9: Digital Marketing Strategy */}
            <Link href="/services/digital-marketing-strategy" className="group relative rounded-3xl overflow-hidden border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                  alt="Digital Marketing Strategy"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/95 to-rose-700/95 group-hover:from-red-800/98 group-hover:to-rose-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Digital Marketing Strategy</h3>
                <p className="text-red-100 mb-4 leading-relaxed">Data-driven strategies tailored to your business goals. Roadmap to digital success.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 10: YouTube Promotion */}
            <Link href="/services/youtube-promotion" className="group relative rounded-3xl overflow-hidden border-2 border-rose-200 hover:border-rose-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop"
                  alt="YouTube Promotion"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-rose-900/95 to-red-700/95 group-hover:from-rose-800/98 group-hover:to-red-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">YouTube Promotion</h3>
                <p className="text-rose-100 mb-4 leading-relaxed">Grow your YouTube channel with strategic promotion. More views, subscribers & engagement.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 11: Artificial Intelligence */}
            <Link href="/services/artificial-intelligence" className="group relative rounded-3xl overflow-hidden border-2 border-violet-200 hover:border-violet-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
                  alt="Artificial Intelligence"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/95 to-purple-700/95 group-hover:from-violet-800/98 group-hover:to-purple-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 7H7v6h6V7z" />
                    <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Artificial Intelligence</h3>
                <p className="text-violet-100 mb-4 leading-relaxed">Leverage AI-powered solutions for automation, chatbots, predictive analytics & intelligent marketing.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 12: Machine Learning */}
            <Link href="/services/machine-learning" className="group relative rounded-3xl overflow-hidden border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&h=600&fit=crop"
                  alt="Machine Learning"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 to-teal-700/95 group-hover:from-emerald-800/98 group-hover:to-teal-600/98 transition-all duration-300"></div>
              </div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Machine Learning</h3>
                <p className="text-emerald-100 mb-4 leading-relaxed">Build smart systems with ML algorithms for data analysis, pattern recognition & business intelligence.</p>
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

          </div>

          {/* View All Services CTA */}
          <div className="text-center mt-16">
            <Link href="/services" className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <span className="mr-3">View All 50+ Services</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🚀</span>
              Limited Time Offer
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get Your Free Digital Marketing<br />
              <span className="text-yellow-300">Strategy Session Worth ₹15,000</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover how to 10X your business growth with proven digital marketing strategies. Book your free consultation with our experts today!
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">150+</div>
                <div className="text-blue-100">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">8+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">300%</div>
                <div className="text-blue-100">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 hover:-translate-y-1">
                <span className="mr-3">Get Free Strategy Session</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>

              <a href="tel:+919876543210" className="group inline-flex items-center bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call Now: +91-83695-11877</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>5.0 Rating on Google</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Award-Winning Agency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse animation-delay-4000"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-yellow-300 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-4 mb-8 shadow-2xl">
              <span className="text-2xl">❤️</span>
              <span className="text-white font-bold text-lg">Client Success Stories</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              What Madhya Pradesh <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Businesses</span><br />
              Say About Us
            </h2>
            
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Real results, real clients, real growth stories from Madhya Pradesh&apos;s most successful businesses
            </p>
          </div>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-black text-yellow-400 mb-2">98%</div>
                <div className="text-white/90 font-medium">Client Retention</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-black text-green-400 mb-2">300%</div>
                <div className="text-white/90 font-medium">Average ROI</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-black text-blue-400 mb-2">150+</div>
                <div className="text-white/90 font-medium">Happy Clients</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-black text-purple-400 mb-2">5.0</div>
                <div className="text-white/90 font-medium">Star Rating</div>
              </div>
            </div>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                💼
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <blockquote className="text-lg text-white/90 leading-relaxed italic">
                  &quot;MyDigital Crown transformed our furniture business completely. Their digital marketing strategies increased our sales by <span className="text-yellow-400 font-bold">200% within 6 months</span>. Aditya&apos;s team understands the furniture industry perfectly and delivered exceptional results.&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">FF</span>
                </div>
                <div>
                  <div className="font-bold text-white">Farhan Furniturewalla</div>
                  <div className="text-white/70">Owner, Furniturewalla</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                🏥
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <blockquote className="text-lg text-white/90 leading-relaxed italic">
                  &quot;As a healthcare facility, we needed a digital partner who understands our industry. MyDigital Crown delivered outstanding SEO and social media marketing that brought us <span className="text-green-400 font-bold">150+ new patients monthly</span>. Unmatched professionalism!&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SK</span>
                </div>
                <div>
                  <div className="font-bold text-white">Dr. Shrish Kumar</div>
                  <div className="text-white/70">Care Hospital</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                🎓
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <blockquote className="text-lg text-white/90 leading-relaxed italic">
                  &quot;MyDigital Crown&apos;s educational marketing expertise helped us reach thousands of prospective students. Their targeted campaigns increased our admissions by <span className="text-purple-400 font-bold">180%</span>. Excellent ROI throughout!&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">UB</span>
                </div>
                <div>
                  <div className="font-bold text-white">Umesh Batkar</div>
                  <div className="text-white/70">Director, Trinkets Institute</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 4 */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl shadow-2xl">
                🧽
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <blockquote className="text-lg text-white/90 leading-relaxed italic">
                  &quot;Our cleaning service flourished after partnering with MyDigital Crown. Their local SEO strategies helped us dominate Madhya Pradesh&apos;s market. We now get <span className="text-cyan-400 font-bold">50+ inquiries weekly</span>. Outstanding team!&quot;
                </blockquote>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SK</span>
                </div>
                <div>
                  <div className="font-bold text-white">Shagufta Khan</div>
                  <div className="text-white/70">Founder, Clean n Shine</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Let&apos;s create your digital marketing success story. Get started with a free consultation and discover how we can transform your business.
              </p>
              <a href="tel:+918369511877" className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 inline-flex items-center justify-center transform hover:scale-110">
                <span className="relative z-10 flex items-center">
                  <span className="text-2xl mr-3">📞</span>
                  <span className="font-extrabold tracking-wide">Call Now: +91-83695-11877</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section - Trusted by Top Brands */}
      <TrustedBrands />

      {/* Google Maps Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-lg border border-blue-200/50 rounded-full px-6 py-3 mb-6 shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-blue-600 font-semibold text-lg">Our Locations</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visit Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Offices</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              MyDigital Crown serves clients across India with our main offices strategically located in Madhya Pradesh, Varanasi, and Bangalore. Visit us for personalized digital marketing consultations and discover why we&apos;re recognized as a top digital marketing company.
            </p>
            
            {/* GoodFirms Badge */}
            <div className="flex justify-center mt-8">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50">
                <a target="_blank" href="https://www.goodfirms.co/company/my-digital-crown-1" className="block hover:scale-105 transition-transform duration-300" rel="noopener noreferrer">
                  <Image src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg" width={243} height={100} title="Top Digital Marketing Company" alt="Top Digital Marketing Company on GoodFirms" className="mx-auto" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Maps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Madhya Pradesh Office */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Madhya Pradesh Office</h3>
                  <p className="text-gray-600 mb-4">Digital Marketing Hub</p>
                  <div className="flex flex-col space-y-2 text-gray-700">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Madhya Pradesh, Uttar Pradesh</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="text-sm">+91-83695-11877</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 group-hover:border-blue-200 transition-all duration-500">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.816521483372!2d72.85695367603202!3d19.377095681890477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af6c077e4823%3A0xc0433629e5e44764!2sMyDigital%20Crown%20Digital%20Marketing%20Company!5e0!3m2!1sen!2sin!4v1754870149046!5m2!1sen!2sin" 
                    width="100%" 
                    height="350" 
                    style={{border: 0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transition-all duration-500 group-hover:scale-105">
                  </iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="mt-6 text-center">
                  <a href="https://maps.app.goo.gl/XZhJ6zB6FfXHvzR46" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Varanasi Office */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Varanasi Office</h3>
                  <p className="text-gray-600 mb-4">Regional Operations Center</p>
                  <div className="flex flex-col space-y-2 text-gray-700">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Varanasi, Uttar Pradesh</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="text-sm">+91-83695-11877</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 group-hover:border-orange-200 transition-all duration-500">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.7497895685115!2d82.95189177617056!3d25.312609277636916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ea12715cbf6b235%3A0x3bef0d4f4036a313!2sMyDigital%20Crown!5e0!3m2!1sen!2sin!4v1754870103658!5m2!1sen!2sin" 
                    width="100%" 
                    height="350" 
                    style={{border: 0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transition-all duration-500 group-hover:scale-105">
                  </iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="mt-6 text-center">
                  <a href="https://maps.app.goo.gl/k1TLc6UPD3VRqB1PA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Bangalore Office */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bangalore Office</h3>
                  <p className="text-gray-600 mb-4">Tech Innovation Center</p>
                  <div className="flex flex-col space-y-2 text-gray-700">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Bangalore, Karnataka</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="text-sm">+91-83695-11877</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 group-hover:border-green-200 transition-all duration-500">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.695606492396!2d77.53381007592293!3d12.991310587325888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3de93659d1e1%3A0x22423142c3de90fc!2sMydigital%20Crown!5e0!3m2!1sen!2sin!4v1754870406559!5m2!1sen!2sin" 
                    width="100%" 
                    height="350" 
                    style={{border: 0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transition-all duration-500 group-hover:scale-105">
                  </iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="mt-6 text-center">
                  <a href="https://maps.app.goo.gl/zwqbwUjZkUNvDcYs5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/50 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Visit Our Offices?
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Schedule a free consultation with our digital marketing experts at any of our three locations - Madhya Pradesh, Varanasi, or Bangalore. We&apos;re here to help transform your business with data-driven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="tel:+918369511877" 
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Call Now: +91-83695-11877</span>
                  </span>
                </Link>
                <Link 
                  href="mailto:info@mydigitalcrown.in" 
                  className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>Email Us</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-4">
        <a 
          href="https://wa.me/918369511877" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-110"
          aria-label="WhatsApp"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <a 
          href="tel:+918369511877"
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-110"
          aria-label="Call"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </a>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Emojis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>💡</div>
          <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🚀</div>
          <div className="absolute bottom-32 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>⭐</div>
          <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>🎯</div>
          <div className="absolute top-1/3 left-1/2 text-4xl opacity-20 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}>💬</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl hover:bg-white/20 transition-all">
              <span className="text-2xl mr-3 animate-pulse">❓</span>
              <span className="text-lg">Frequently Asked Questions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Got <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-pulse">Questions?</span>
              <br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">We&apos;ve Got Answers!</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about digital marketing services in Madhya Pradesh ✨
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🏆</span>
                  <span>What makes MyDigital Crown the best digital marketing company in Madhya Pradesh?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>MyDigital Crown stands out as Madhya Pradesh&apos;s premier digital marketing agency with 8+ years of experience, 150+ happy clients, and a proven track record of delivering 300% average growth. We offer 50+ specialized services including SEO, Google Ads, social media marketing, web development, and more. Our data-driven strategies, 24/7 support, and commitment to measurable results make us the preferred choice for businesses in Madhya Pradesh looking to dominate their digital landscape.</p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🎯</span>
                  <span>What digital marketing services do you offer in Madhya Pradesh?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">We offer a comprehensive suite of 50+ digital marketing services including:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">🔍 <strong>SEO Services</strong> - Local SEO, Technical SEO, On-page & Off-page optimization</li>
                  <li className="flex items-start gap-2">📱 <strong>Social Media Marketing</strong> - Instagram, Facebook, LinkedIn, YouTube marketing</li>
                  <li className="flex items-start gap-2">💰 <strong>Google Ads Management</strong> - Search Ads, Display Ads, Shopping Ads</li>
                  <li className="flex items-start gap-2">🌐 <strong>Web Development & Design</strong> - Responsive websites, E-commerce platforms</li>
                  <li className="flex items-start gap-2">✍️ <strong>Content Marketing</strong> - Blog writing, Video marketing, Email campaigns</li>
                  <li className="flex items-start gap-2">📲 <strong>Mobile App Development</strong> - iOS & Android applications</li>
                  <li className="flex items-start gap-2">🎨 <strong>Digital Branding</strong> - Logo design, Brand strategy, Visual identity</li>
                </ul>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">💰</span>
                  <span>How much does digital marketing cost in Madhya Pradesh?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Digital marketing costs vary based on your business goals, industry, and chosen services. At MyDigital Crown, we offer flexible pricing packages starting from affordable monthly retainers to comprehensive enterprise solutions. We provide customized quotes after understanding your specific needs during our free consultation. Our pricing is transparent with no hidden costs, and we focus on delivering maximum ROI rather than just charging fees. Contact us for a free digital marketing audit and personalized pricing.</p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏰</span>
                  <span>How long does it take to see results from digital marketing?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">Results timeline varies by service:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">⚡ <strong>Google Ads/PPC:</strong> Immediate traffic, with optimization improving results within 2-4 weeks</li>
                  <li className="flex items-start gap-2">📈 <strong>SEO:</strong> Initial improvements in 2-3 months, significant results in 4-6 months</li>
                  <li className="flex items-start gap-2">🔥 <strong>Social Media Marketing:</strong> Engagement within weeks, sustained growth in 2-3 months</li>
                  <li className="flex items-start gap-2">📊 <strong>Content Marketing:</strong> Traffic growth visible in 3-4 months</li>
                </ul>
                <p className="mt-4">We guarantee measurable results within 90 days or work for free until you see the growth you deserve. Our data-driven approach ensures continuous optimization for faster, better results.</p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">📍</span>
                  <span>Do you provide local SEO services for Madhya Pradesh-based businesses?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">Yes! We specialize in local SEO for Madhya Pradesh businesses. Our local SEO services include:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">✅ Google Business Profile optimization and management</li>
                  <li className="flex items-start gap-2">✅ Local keyword research and targeting (Madhya Pradesh-specific)</li>
                  <li className="flex items-start gap-2">✅ Local citations and directory listings</li>
                  <li className="flex items-start gap-2">✅ Location-based content creation</li>
                  <li className="flex items-start gap-2">✅ Review management and reputation building</li>
                  <li className="flex items-start gap-2">✅ Local link building strategies</li>
                  <li className="flex items-start gap-2">✅ Map pack optimization for Madhya Pradesh searches</li>
                </ul>
                <p className="mt-4">We help your business dominate local search results when potential customers in Madhya Pradesh search for your services.</p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">🚀</span>
                  <span>Can you help my small business compete with larger companies in Madhya Pradesh?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">Absolutely! We specialize in helping small and medium businesses compete effectively with larger competitors. Our strategies focus on:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">🎯 Targeted niche marketing to reach your ideal customers</li>
                  <li className="flex items-start gap-2">💡 Cost-effective digital campaigns with high ROI</li>
                  <li className="flex items-start gap-2">📍 Local SEO to dominate specific Madhya Pradesh neighborhoods</li>
                  <li className="flex items-start gap-2">📲 Hyper-targeted social media advertising</li>
                  <li className="flex items-start gap-2">✍️ Content marketing that showcases your unique value</li>
                  <li className="flex items-start gap-2">🤝 Building authentic customer relationships online</li>
                </ul>
                <p className="mt-4">Many of our SMB clients have successfully outranked larger competitors through our strategic, data-driven approach.</p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🏢</span>
                  <span>What industries do you serve in Madhya Pradesh?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">We serve businesses across all major industries in Madhya Pradesh including:</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">🏠 Real Estate</div>
                  <div className="flex items-center gap-2">⚕️ Healthcare</div>
                  <div className="flex items-center gap-2">🛍️ E-commerce</div>
                  <div className="flex items-center gap-2">🎓 Education</div>
                  <div className="flex items-center gap-2">🏨 Hospitality</div>
                  <div className="flex items-center gap-2">💼 Financial Services</div>
                  <div className="flex items-center gap-2">🏭 Manufacturing</div>
                  <div className="flex items-center gap-2">⚖️ Professional Services</div>
                  <div className="flex items-center gap-2">💻 Technology</div>
                  <div className="flex items-center gap-2">👔 Fashion & Lifestyle</div>
                </div>
                <p className="mt-4">Our industry-specific expertise ensures customized strategies that work for your unique business needs.</p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">📱</span>
                  <span>Do you offer social media marketing services for Instagram and Facebook?</span>
                </span>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">Yes! We offer comprehensive social media marketing services across all major platforms:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">📸 <strong>Instagram:</strong> Content creation, Stories, Reels, IGTV, influencer partnerships</li>
                  <li className="flex items-start gap-2">👍 <strong>Facebook:</strong> Page management, paid ads, engagement campaigns, group marketing</li>
                  <li className="flex items-start gap-2">💼 <strong>LinkedIn:</strong> Professional networking, B2B lead generation, thought leadership</li>
                  <li className="flex items-start gap-2">🎥 <strong>YouTube:</strong> Video content strategy, channel growth, video SEO</li>
                  <li className="flex items-start gap-2">🐦 <strong>Twitter/X:</strong> Real-time engagement, trending topics, brand voice</li>
                </ul>
                <p className="mt-4">Our social media experts create engaging content, manage communities, run targeted ad campaigns, and provide detailed analytics to grow your brand presence in Madhya Pradesh and beyond.</p>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-indigo-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">📊</span>
                  <span>How do you measure the success of digital marketing campaigns?</span>
                </span>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">We use comprehensive analytics and tracking to measure campaign success:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">👥 <strong>Traffic Metrics:</strong> Website visitors, page views, bounce rate, time on site</li>
                  <li className="flex items-start gap-2">🎯 <strong>Conversion Tracking:</strong> Leads generated, form submissions, phone calls, sales</li>
                  <li className="flex items-start gap-2">🔍 <strong>SEO Metrics:</strong> Keyword rankings, organic traffic growth, domain authority</li>
                  <li className="flex items-start gap-2">📱 <strong>Social Media KPIs:</strong> Engagement rate, follower growth, reach, shares</li>
                  <li className="flex items-start gap-2">💰 <strong>ROI Analysis:</strong> Cost per acquisition, return on ad spend, revenue attribution</li>
                  <li className="flex items-start gap-2">🏆 <strong>Brand Metrics:</strong> Brand awareness, sentiment analysis, market share</li>
                </ul>
                <p className="mt-4">You receive detailed monthly reports with actionable insights and transparent metrics showing exactly how your investment is performing.</p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-lime-500/20 hover:border-lime-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-lime-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📝</span>
                  <span>Do I need to sign a long-term contract with your agency?</span>
                </span>
                <svg className="w-7 h-7 text-lime-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">No, we don&apos;t require long-term contracts! At MyDigital Crown, we believe in earning your business every month through results, not binding contracts. We offer:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">✅ Flexible month-to-month engagement options</li>
                  <li className="flex items-start gap-2">✅ No hidden fees or cancellation penalties</li>
                  <li className="flex items-start gap-2">✅ 90-day results guarantee (we work free until you see results)</li>
                  <li className="flex items-start gap-2">✅ Optional longer-term agreements with discounted rates</li>
                  <li className="flex items-start gap-2">✅ Complete transparency in all our dealings</li>
                </ul>
                <p className="mt-4">Our focus is on building long-term partnerships through exceptional results and service, not contractual obligations. You&apos;re free to continue or pause services based on your business needs.</p>
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:border-teal-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-teal-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">🌐</span>
                  <span>Can you help with website design and development in Madhya Pradesh?</span>
                </span>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">Yes! We provide complete website design and development services:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">🎨 <strong>Custom Website Design:</strong> Unique, brand-aligned designs that convert</li>
                  <li className="flex items-start gap-2">📱 <strong>Responsive Development:</strong> Mobile-first, fast-loading websites</li>
                  <li className="flex items-start gap-2">🛒 <strong>E-commerce Solutions:</strong> Online stores with payment gateway integration</li>
                  <li className="flex items-start gap-2">⚙️ <strong>CMS Development:</strong> WordPress, Shopify, custom solutions</li>
                  <li className="flex items-start gap-2">💻 <strong>Web Applications:</strong> Complex web apps using latest technologies</li>
                  <li className="flex items-start gap-2">🔧 <strong>Website Maintenance:</strong> Ongoing updates, security, and support</li>
                </ul>
                <p className="mt-4">All our websites are SEO-optimized, secure, and built to convert visitors into customers. We handle everything from design to development to hosting.</p>
              </div>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-rose-500/20 hover:border-rose-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-rose-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">⭐</span>
                  <span>What sets your digital marketing agency apart from others in Madhya Pradesh?</span>
                </span>
                <svg className="w-7 h-7 text-rose-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">What makes MyDigital Crown unique:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">🏆 <strong>Proven Track Record:</strong> 8+ years experience with 150+ successful client partnerships</li>
                  <li className="flex items-start gap-2">📈 <strong>300% Average Growth:</strong> Our clients see exceptional results consistently</li>
                  <li className="flex items-start gap-2">🎯 <strong>50+ Services:</strong> Complete digital marketing solutions under one roof</li>
                  <li className="flex items-start gap-2">⏰ <strong>24/7 Support:</strong> We&apos;re available whenever you need us</li>
                  <li className="flex items-start gap-2">✅ <strong>No Long-term Contracts:</strong> Flexibility and freedom to choose</li>
                  <li className="flex items-start gap-2">💯 <strong>90-Day Results Guarantee:</strong> We guarantee measurable results or work for free</li>
                  <li className="flex items-start gap-2">📍 <strong>Local Madhya Pradesh Expertise:</strong> Deep understanding of Madhya Pradesh&apos;s market dynamics</li>
                  <li className="flex items-start gap-2">📊 <strong>Transparent Reporting:</strong> Real-time access to all campaign metrics</li>
                  <li className="flex items-start gap-2">🤝 <strong>Dedicated Account Managers:</strong> Personal attention to your business</li>
                </ul>
                <p className="mt-4">We don&apos;t just execute campaigns – we become partners in your business growth journey.</p>
              </div>
            </details>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-[3rem] shadow-2xl border-2 border-white/30 p-12 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 animate-pulse"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-5 left-5 w-20 h-20 bg-gradient-to-br from-yellow-300/30 to-orange-300/30 rounded-full blur-xl animate-bounce"></div>
              <div className="absolute bottom-5 right-5 w-20 h-20 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s'}}></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-bounce">
                  <span className="text-5xl">💬</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                  Still Have <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Questions?</span>
                </h3>
                <p className="text-blue-100 mb-10 text-xl leading-relaxed max-w-2xl mx-auto">
                  Can&apos;t find the answer you&apos;re looking for? Our team is here to help you succeed. Get in touch with us for a <span className="text-yellow-300 font-bold">FREE</span> consultation! 🎉
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    href="/contact" 
                    className="group relative bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-10 py-5 rounded-full font-black text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-110 inline-flex items-center justify-center overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative flex items-center">
                      <span className="text-3xl mr-3 animate-pulse">📧</span>
                      Get Free Consultation
                    </span>
                  </Link>
                  <Link 
                    href="tel:+918369511877" 
                    className="group relative bg-white/10 backdrop-blur-sm border-3 border-white/50 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-purple-600 hover:shadow-2xl transition-all transform hover:scale-110 inline-flex items-center justify-center"
                  >
                    <span className="flex items-center">
                      <span className="text-3xl mr-3 group-hover:animate-spin">📞</span>
                      Call: +91-83695-11877
                    </span>
                  </Link>
                </div>
                
                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <span className="text-2xl">⚡</span>
                    <span className="text-white font-bold">Quick Response</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <span className="text-2xl">🎯</span>
                    <span className="text-white font-bold">Free Audit</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <span className="text-2xl">💯</span>
                    <span className="text-white font-bold">No Obligation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📝</span>
              Our Blog
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Digital Marketing <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and strategies in digital marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogs.map((blog, index) => {
              const categoryColors = [
                'from-blue-500 to-purple-600 text-blue-600',
                'from-green-500 to-emerald-600 text-green-600',
                'from-pink-500 to-rose-600 text-pink-600',
                'from-orange-500 to-red-600 text-orange-600',
                'from-yellow-500 to-amber-600 text-yellow-600',
                'from-indigo-500 to-purple-600 text-indigo-600'
              ];
              const colorClass = categoryColors[index % categoryColors.length];
              const [gradientClass, textColorClass] = colorClass.split(' text-');

              return (
                <Link 
                  key={blog.id}
                  href={`/blog/${blog.slug}`} 
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`relative h-64 bg-gradient-to-br ${gradientClass} overflow-hidden`}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <span>📅 {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>⏱️ {blog.readTime}</span>
                    </div>
                    <h3 className={`text-2xl font-bold text-gray-900 mb-3 group-hover:text-${textColorClass} transition-colors`}>{blog.title}</h3>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className={`flex items-center text-${textColorClass} font-semibold`}>
                      <span>Read More</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/blog" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <span className="mr-3">View All Blog Posts</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Jobs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">💼</span>
              Careers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Amazing Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and grow with Madhya Pradesh&apos;s leading digital marketing agency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {jobs.map((job) => {
              const typeColors = {
                'Full-time': 'bg-green-100 text-green-700',
                'Part-time': 'bg-blue-100 text-blue-700',
                'Internship': 'bg-purple-100 text-purple-700',
                'Contract': 'bg-orange-100 text-orange-700'
              };

              return (
                <div key={job.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200">
                  {/* Job Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={job.image}
                      alt={job.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`${typeColors[job.type as keyof typeof typeColors] || 'bg-gray-100 text-gray-700'} px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Job Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{job.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" /></svg>
                        {job.experience} experience
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" /></svg>
                        {job.salary}
                      </div>
                    </div>
                    
                    <Link href={`/jobs/${job.slug}`} className="block w-full bg-gradient-to-r from-green-600 to-teal-600 text-white text-center px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105">
                      Apply Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/jobs" className="inline-flex items-center bg-gradient-to-r from-green-600 to-teal-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <span className="mr-3">View All Job Openings</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
