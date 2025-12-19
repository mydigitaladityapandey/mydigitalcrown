import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About MyDigital Crown - Top Digital Marketing Company Mumbai | Aditya Pandey",
  description: "Founded by Aditya Pandey in 2017, MyDigital Crown is Mumbai's leading digital marketing agency. 8+ years experience, 150+ happy clients, 300% average growth. Learn about our team, values & proven digital marketing success stories.",
  keywords: "about mydigital crown, aditya pandey digital marketing, digital marketing company mumbai, about us, digital marketing agency mumbai, best digital marketing consultant mumbai, digital marketing expert mumbai",
  openGraph: {
    title: "About MyDigital Crown - Mumbai's #1 Digital Marketing Company",
    description: "Founded by Aditya Pandey. 150+ clients, 8+ years experience, 300% average growth. Mumbai's most trusted digital marketing agency.",
    url: "https://mydigitalcrown.in/about",
    siteName: "MyDigital Crown",
    type: "website",
    images: [
      {
        url: "https://mydigitalcrown.in/images/aditya.webp",
        width: 1200,
        height: 630,
        alt: "Aditya Pandey - Founder MyDigital Crown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MyDigital Crown - Mumbai's Leading Digital Marketing Agency",
    description: "Founded by Aditya Pandey. 150+ clients, 8+ years, 300% growth. Trusted digital marketing company in Mumbai.",
    images: ["https://mydigitalcrown.in/images/aditya.webp"],
  },
  alternates: {
    canonical: "https://mydigitalcrown.in/about",
  },
};

export default function About() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://mydigitalcrown.in/about#webpage',
        url: 'https://mydigitalcrown.in/about',
        name: 'About MyDigital Crown - Digital Marketing Company Mumbai',
        description: 'Learn about MyDigital Crown, founded by Aditya Pandey, Mumbai\'s premier digital marketing agency with 8+ years experience serving 150+ clients.',
        isPartOf: {
          '@id': 'https://mydigitalcrown.in/#website'
        },
        about: {
          '@id': 'https://mydigitalcrown.in/#organization'
        },
        primaryImageOfPage: {
          '@id': 'https://mydigitalcrown.in/about#primaryimage'
        },
        inLanguage: 'en-IN',
        breadcrumb: {
          '@id': 'https://mydigitalcrown.in/about#breadcrumb'
        }
      },
      {
        '@type': 'ImageObject',
        '@id': 'https://mydigitalcrown.in/about#primaryimage',
        url: 'https://mydigitalcrown.in/images/aditya.webp',
        contentUrl: 'https://mydigitalcrown.in/images/aditya.webp',
        width: 600,
        height: 700,
        caption: 'Aditya Pandey - Founder & CEO MyDigital Crown',
        inLanguage: 'en-IN'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://mydigitalcrown.in/about#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://mydigitalcrown.in'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About Us',
            item: 'https://mydigitalcrown.in/about'
          }
        ]
      },
      {
        '@type': 'Person',
        '@id': 'https://mydigitalcrown.in/about#aditya-pandey',
        name: 'Aditya Pandey',
        givenName: 'Aditya',
        familyName: 'Pandey',
        jobTitle: 'Founder & CEO',
        description: 'Digital Marketing Expert with 8+ years experience helping 150+ businesses achieve 300% average growth through data-driven strategies',
        image: {
          '@type': 'ImageObject',
          url: 'https://mydigitalcrown.in/images/aditya.webp',
          caption: 'Aditya Pandey - Digital Marketing Expert'
        },
        url: 'https://mydigitalcrown.in/about',
        worksFor: {
          '@id': 'https://mydigitalcrown.in/#organization'
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Digital Marketing Institute'
        },
        knowsAbout: [
          'Digital Marketing',
          'Search Engine Optimization',
          'Google Ads',
          'Social Media Marketing',
          'Content Marketing',
          'Web Development',
          'Digital Strategy',
          'Brand Development'
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Digital Marketing Expert',
          occupationLocation: {
            '@type': 'City',
            name: 'Mumbai'
          },
          skills: 'SEO, PPC, Social Media Marketing, Content Strategy, Web Development',
          experienceRequirements: '8+ years'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-9819595495',
          contactType: 'Founder',
          email: 'aditya@mydigitalcrown.in',
          availableLanguage: ['English', 'Hindi']
        },
        sameAs: [
          'https://www.linkedin.com/in/adityapandey',
          'https://twitter.com/adityapandey',
          'https://www.facebook.com/adityapandey'
        ]
      },
      {
        '@type': 'Organization',
        '@id': 'https://mydigitalcrown.in/#organization',
        name: 'MyDigital Crown',
        alternateName: 'MyDigital Crown - Digital Marketing Company Mumbai',
        url: 'https://mydigitalcrown.in',
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://mydigitalcrown.in/#logo',
          url: 'https://mydigitalcrown.in/logo.png',
          contentUrl: 'https://mydigitalcrown.in/logo.png',
          caption: 'MyDigital Crown Logo'
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://mydigitalcrown.in/images/aditya.webp'
        },
        description: 'Mumbai\'s leading digital marketing agency founded by Aditya Pandey in 2017. Specializing in SEO, PPC, Social Media Marketing, and Web Development with 150+ satisfied clients.',
        slogan: 'Crown Your Digital Success',
        founder: {
          '@id': 'https://mydigitalcrown.in/about#aditya-pandey'
        },
        foundingDate: '2017-01-15',
        foundingLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN'
          }
        },
        numberOfEmployees: {
          '@type': 'QuantitativeValue',
          value: '20'
        },
        knowsAbout: [
          'Digital Marketing',
          'SEO Services',
          'Google Ads Management',
          'Social Media Marketing',
          'Content Marketing',
          'Web Development',
          'Digital Branding',
          'YouTube Marketing'
        ],
        areaServed: [
          {
            '@type': 'City',
            name: 'Mumbai'
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
        telephone: '+91-83695-11877',
        email: 'info@mydigitalcrown.in',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Andheri West',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          postalCode: '400053',
          addressCountry: 'IN'
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+91-83695-11877',
            contactType: 'Customer Service',
            email: 'info@mydigitalcrown.in',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi'],
            contactOption: 'TollFree',
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
              ],
              opens: '09:00',
              closes: '18:00'
            }
          },
          {
            '@type': 'ContactPoint',
            telephone: '+91-9819595495',
            contactType: 'Founder',
            email: 'aditya@mydigitalcrown.in',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi']
          }
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '150',
          bestRating: '5',
          worstRating: '1'
        },
        sameAs: [
          'https://www.facebook.com/mydigitalcrown',
          'https://www.instagram.com/mydigitalcrown',
          'https://www.linkedin.com/company/mydigitalcrown',
          'https://twitter.com/mydigitalcrown',
          'https://www.youtube.com/@mydigitalcrown'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://mydigitalcrown.in/#website',
        url: 'https://mydigitalcrown.in',
        name: 'MyDigital Crown',
        description: 'Mumbai\'s leading digital marketing agency offering SEO, PPC, Social Media Marketing, Web Development, and more',
        publisher: {
          '@id': 'https://mydigitalcrown.in/#organization'
        },
        inLanguage: 'en-IN'
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

      
      {/* Hero Section - Premium Design */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-800 via-blue-700 to-purple-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">Mumbai&apos;s #1 Digital Marketing Company Since 2017</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                About MyDigital Crown
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto font-bold leading-relaxed mb-8">
              Founded by <span className="text-yellow-300">Aditya Pandey</span> | <span className="text-green-300">8+ Years Experience</span> | <span className="text-orange-300">150+ Happy Clients</span> | <span className="text-pink-300">300% Average Growth</span>
            </p>

            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Mumbai&apos;s most trusted digital marketing agency transforming businesses through data-driven strategies, innovative campaigns, and measurable results since 2017
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">150+</div>
              <div className="text-blue-100 font-semibold">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-black text-green-300 mb-2">8+</div>
              <div className="text-blue-100 font-semibold">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-black text-orange-300 mb-2">300%</div>
              <div className="text-blue-100 font-semibold">Average Growth</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-black text-pink-300 mb-2">50+</div>
              <div className="text-blue-100 font-semibold">Services Offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📖</span>
              Our Story - Founded by Aditya Pandey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Businesses Through <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a vision in 2017 to Mumbai&apos;s most trusted digital marketing agency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side - Aditya Pandey */}
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="/images/aditya.webp" 
                    alt="Aditya Pandey - Founder & CEO MyDigital Crown | Digital Marketing Expert Mumbai"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                    priority
                    title="Aditya Pandey - Digital Marketing Expert with 8+ Years Experience"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
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
                  <div className="text-3xl font-black text-purple-600">150+</div>
                  <div className="text-sm text-gray-600 font-semibold">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-4xl mr-3">🚀</span>
                  Who We Are
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Welcome to <span className="font-bold text-blue-600">MyDigital Crown</span> - Mumbai&apos;s premier digital marketing agency founded by <span className="font-bold">Aditya Pandey</span> in 2017. What started as a vision to help local businesses thrive online has grown into one of Mumbai&apos;s most trusted digital marketing companies.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  With over <span className="font-bold text-purple-600">8+ years of industry experience</span>, we&apos;ve helped <span className="font-bold text-green-600">150+ businesses</span> achieve remarkable growth through innovative digital marketing strategies. From startups to established enterprises, we&apos;ve consistently delivered an average <span className="font-bold text-orange-600">300% growth</span> for our clients.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our expertise spans across <span className="font-bold text-blue-600">50+ digital marketing services</span> including data-driven SEO, strategic Google Ads campaigns, engaging social media marketing, cutting-edge web development, and comprehensive content marketing strategies.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🎯</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
                      <p className="text-gray-700">Empower businesses with data-driven digital marketing strategies that drive measurable growth, maximize ROI, and create lasting digital success.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🔮</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h4>
                      <p className="text-gray-700">To be India&apos;s most trusted digital marketing agency, known for innovation, transparency, and delivering exceptional results that transform businesses.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/contact" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-bold text-lg">
                <span className="mr-2">📞</span>
                Get in Touch with Aditya
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              <span className="text-2xl mr-2">⭐</span>
              Our Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Drives Us Every Day
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-xl">
                💡
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-blue-100 leading-relaxed">
                Always staying ahead with the latest digital marketing trends, tools, and technologies to give you a competitive edge.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-xl">
                🤝
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-blue-100 leading-relaxed">
                Building trust through transparent, honest practices and clear communication at every step of your digital journey.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-xl">
                🏆
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-blue-100 leading-relaxed">
                Committed to delivering exceptional quality and measurable results in everything we do, every single time.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-xl">
                ❤️
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Client-Centric</h3>
              <p className="text-blue-100 leading-relaxed">
                Your success is our success. We treat your business goals as our own and work tirelessly to achieve them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📊</span>
              Our Track Record
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proven Results, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Measurable Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to driving real business growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl border-2 border-blue-100 transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">150+</div>
              <div className="text-gray-700 text-lg font-bold">Happy Clients</div>
              <div className="text-gray-500 text-sm mt-2">Across India</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl border-2 border-green-100 transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl font-black bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-3">300%</div>
              <div className="text-gray-700 text-lg font-bold">Average Growth</div>
              <div className="text-gray-500 text-sm mt-2">ROI for Clients</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl border-2 border-purple-100 transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl font-black bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3">8+</div>
              <div className="text-gray-700 text-lg font-bold">Years Experience</div>
              <div className="text-gray-500 text-sm mt-2">Since 2017</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl border-2 border-orange-100 transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl font-black bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-3">50+</div>
              <div className="text-gray-700 text-lg font-bold">Services Offered</div>
              <div className="text-gray-500 text-sm mt-2">Complete Digital Solutions</div>
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-5xl mb-4">🎯</div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100 font-semibold">Client Satisfaction Rate</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-5xl mb-4">⚡</div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-100 font-semibold">Dedicated Support</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-5xl mb-4">🚀</div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100 font-semibold">Results-Driven Approach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MyDigital Crown - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">✨</span>
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MyDigital Crown</span> is Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes us the preferred digital marketing partner for businesses across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Strategies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every decision backed by comprehensive analytics and market research. We don&apos;t guess—we know what works for your industry.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Real-time performance tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Competitor analysis & benchmarking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Monthly ROI reports</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team of Specialists</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Team of certified professionals with deep expertise in SEO, PPC, social media, content marketing, and more.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Google & Meta certified experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>8+ years industry experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Continuous learning & training</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable & Flexible Packages</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Enterprise-grade digital marketing services at prices that work for businesses of all sizes—from startups to large corporations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Customized pricing plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>No long-term contracts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Transparent billing</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border-2 border-red-100 hover:border-red-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                300% average growth rate for our clients. Our results speak for themselves with 150+ successful campaigns.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Case studies across industries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Client testimonials & reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Measurable KPIs & outcomes</span>
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 bg-gradient-to-br from-yellow-50 to-white rounded-2xl border-2 border-yellow-100 hover:border-yellow-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Dedicated Support</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Round-the-clock support ensures your campaigns run smoothly and any issues are resolved immediately.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span>Direct access to Aditya Pandey</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span>Phone, email & WhatsApp support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span>Emergency response team</span>
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 bg-gradient-to-br from-indigo-50 to-white rounded-2xl border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent Reporting</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Detailed monthly reports and real-time dashboards so you always know exactly where your investment is going.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Live dashboard access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Weekly progress updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Custom reporting metrics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <span className="text-2xl mr-2">🚀</span>
            Let&apos;s Get Started
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 150+ successful businesses that trust MyDigital Crown for their digital marketing needs. Let&apos;s discuss how we can help you achieve 300% growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link 
              href="/contact" 
              className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full hover:bg-blue-50 transition-all duration-300 font-bold text-lg shadow-2xl transform hover:scale-105"
            >
              <span>Contact Aditya Pandey</span>
              <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <a 
              href="tel:+919819595495" 
              className="group inline-flex items-center bg-transparent border-2 border-white text-white px-10 py-5 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-lg transform hover:scale-105"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: +91 9819595495</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black mb-2">150+</div>
              <div className="text-blue-100 font-semibold">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">8+</div>
              <div className="text-blue-100 font-semibold">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">300%</div>
              <div className="text-blue-100 font-semibold">Average Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">24/7</div>
              <div className="text-blue-100 font-semibold">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
