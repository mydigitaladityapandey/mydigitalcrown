import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseEnquiryForm from "../components/CourseEnquiryForm";
import Link from "next/link";

export const metadata = {
  title: "Digital Marketing Course in Varanasi | #1 Training Institute by Aditya Pandey | 100% Job Placement",
  description: "Learn Digital Marketing Course in Varanasi with Aditya Pandey. Best Digital Marketing Training Institute in Varanasi with 100% Job Placement, Live Projects, Google & Meta Certification. Advanced SEO, AI Models, Website Development. Enroll Now! ₹30,000 Course Fee with EMI.",
  keywords: "digital marketing course in varanasi, digital marketing training varanasi, digital marketing institute varanasi, seo course varanasi, google ads training varanasi, social media marketing course varanasi, best digital marketing course varanasi, digital marketing certification varanasi, aditya pandey digital marketing course, online digital marketing course varanasi",
  openGraph: {
    title: "Digital Marketing Course Varanasi | 100% Job Placement | Aditya Pandey",
    description: "Varanasi's #1 Digital Marketing Training Institute. Learn SEO, Google Ads, Social Media Marketing. 100% Job Placement. Live Projects. Google Certified. Enroll Now!",
    url: "https://mydigitalcrown.in/course",
    siteName: "MyDigital Crown",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://mydigitalcrown.in/images/aditya.webp",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Course Varanasi - Aditya Pandey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Course Varanasi | 100% Job Placement",
    description: "Best Digital Marketing Training in Varanasi. Google Certified. Live Projects. ₹15,000 Fee. Enroll Now!",
    images: ["https://mydigitalcrown.in/images/aditya.webp"],
  },
  alternates: {
    canonical: "https://mydigitalcrown.in/course",
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
};

export default function Course() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        '@id': 'https://mydigitalcrown.in/course#course',
        name: 'Digital Marketing Course in Varanasi',
        description: 'Comprehensive Digital Marketing Training in Varanasi covering SEO, Google Ads, Social Media Marketing, Content Marketing, Email Marketing, and more. 100% Job Placement Assistance.',
        provider: {
          '@type': 'EducationalOrganization',
          '@id': 'https://mydigitalcrown.in/#organization',
          name: 'MyDigital Crown',
          url: 'https://mydigitalcrown.in',
          sameAs: [
            'https://www.facebook.com/mydigitalcrown',
            'https://www.instagram.com/mydigitalcrown',
            'https://www.linkedin.com/company/mydigitalcrown'
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Andheri West',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
            postalCode: '400053',
            addressCountry: 'IN'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-83695-11877',
            contactType: 'Admissions',
            email: 'info@mydigitalcrown.in',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi']
          }
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: ['Online', 'Blended', 'In-Person'],
          courseWorkload: 'PT6M',
          instructor: {
            '@type': 'Person',
            name: 'Aditya Pandey',
            jobTitle: 'Digital Marketing Expert',
            description: 'Google & Meta Certified Digital Marketing Expert with 8+ years experience',
            image: 'https://mydigitalcrown.in/images/aditya.webp',
            sameAs: [
              'https://www.linkedin.com/in/adityapandey'
            ]
          }
        },
        offers: {
          '@type': 'Offer',
          category: 'Paid',
          price: '30000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          validFrom: '2025-01-01',
          url: 'https://mydigitalcrown.in/course',
          priceValidUntil: '2025-12-31',
          eligibleRegion: {
            '@type': 'Country',
            name: 'India'
          }
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '287',
          bestRating: '5',
          worstRating: '1'
        },
        educationalLevel: 'Beginner to Advanced',
        timeRequired: 'P6M',
        inLanguage: ['en-IN', 'hi-IN'],
        availableLanguage: ['English', 'Hindi'],
        coursePrerequisites: 'Basic computer knowledge and internet browsing skills',
        occupationalCredentialAwarded: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Certificate',
          name: 'Digital Marketing Professional Certificate'
        },
        teaches: [
          'Advanced Search Engine Optimization (SEO)',
          'AI Models for Digital Marketing',
          'Website Development',
          'Social Media Marketing & Strategy',
          'Google Ads (PPC)',
          'Content Marketing',
          'Email Marketing',
          'Web Analytics',
          'Digital Strategy',
          'YouTube Marketing',
          'Affiliate Marketing',
          'Influencer Marketing',
          'ChatGPT & AI Tools for Marketing',
          'WordPress & CMS Development'
        ],
        assesses: [
          'SEO Skills',
          'PPC Campaign Management',
          'Social Media Strategy',
          'Content Creation',
          'Analytics & Reporting'
        ],
        courseCode: 'DMC-VAR-2025',
        hasPart: [
          {
            '@type': 'Course',
            name: 'SEO Mastery Module',
            description: 'Complete Search Engine Optimization training from basics to advanced',
            timeRequired: 'P4W'
          },
          {
            '@type': 'Course',
            name: 'Google Ads Certification',
            description: 'Master Google Ads and PPC advertising',
            timeRequired: 'P3W'
          },
          {
            '@type': 'Course',
            name: 'Social Media Marketing',
            description: 'Facebook, Instagram, LinkedIn, Twitter marketing strategies',
            timeRequired: 'P3W'
          },
          {
            '@type': 'Course',
            name: 'Content & Email Marketing',
            description: 'Content strategy, creation, and email marketing automation',
            timeRequired: 'P2W'
          }
        ],
        educationalCredentialAwarded: 'Google & Meta Certified Digital Marketer',
        financialAid: 'EMI options available',
        isAccessibleForFree: false,
        numberOfCredits: 100
      },
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://mydigitalcrown.in/#organization',
        name: 'MyDigital Crown',
        alternateName: 'MyDigital Crown Digital Marketing Institute',
        description: 'Leading Digital Marketing Training Institute in Varanasi offering comprehensive courses with 100% job placement assistance',
        url: 'https://mydigitalcrown.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://mydigitalcrown.in/logo.png'
        },
        image: 'https://mydigitalcrown.in/images/aditya.webp',
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
        areaServed: [
          {
            '@type': 'City',
            name: 'Varanasi',
            sameAs: 'https://en.wikipedia.org/wiki/Varanasi'
          },
          {
            '@type': 'City',
            name: 'Mumbai'
          },
          {
            '@type': 'State',
            name: 'Uttar Pradesh'
          },
          {
            '@type': 'Country',
            name: 'India'
          }
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Marketing Courses',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Course',
                name: 'Complete Digital Marketing Course',
                price: '15000',
                priceCurrency: 'INR'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Course',
                name: 'SEO Specialist Course',
                price: '8000',
                priceCurrency: 'INR'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Course',
                name: 'Social Media Marketing Course',
                price: '7000',
                priceCurrency: 'INR'
              }
            }
          ]
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '287',
          bestRating: '5',
          worstRating: '1'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://mydigitalcrown.in/course#breadcrumb',
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
            name: 'Digital Marketing Course Varanasi',
            item: 'https://mydigitalcrown.in/course'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://mydigitalcrown.in/course#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the duration of Digital Marketing Course in Varanasi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The complete Digital Marketing Course in Varanasi is 3 months (12 weeks) with flexible timings. We offer weekend batches, weekday batches, and online classes to suit your schedule.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the course fee for Digital Marketing training in Varanasi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Digital Marketing Course fee in Varanasi is ₹15,000 for the complete program. We offer easy EMI options starting from ₹2,500 per month. Early bird discounts and group discounts are also available.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you provide job placement after Digital Marketing Course?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! We provide 100% job placement assistance. Our students have been placed in top companies with average salaries ranging from ₹3-5 LPA. We have tie-ups with 50+ digital marketing agencies across India.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is this Digital Marketing Course Google certified?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Our Digital Marketing Course in Varanasi includes Google Ads Certification, Google Analytics Certification, and Meta (Facebook) Blueprint Certification. You will receive industry-recognized certificates upon completion.'
            }
          },
          {
            '@type': 'Question',
            name: 'Who is the trainer for Digital Marketing Course in Varanasi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The course is taught by Aditya Pandey, a Google & Meta certified Digital Marketing Expert with 8+ years of industry experience. He has trained 500+ students and helped 150+ businesses grow online.'
            }
          },
          {
            '@type': 'Question',
            name: 'What will I learn in Digital Marketing Course Varanasi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You will learn SEO (Search Engine Optimization), Google Ads (PPC), Social Media Marketing (Facebook, Instagram, LinkedIn), Content Marketing, Email Marketing, Web Analytics, YouTube Marketing, Affiliate Marketing, and complete Digital Strategy with hands-on live projects.'
            }
          }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://mydigitalcrown.in/course#webpage',
        url: 'https://mydigitalcrown.in/course',
        name: 'Digital Marketing Course in Varanasi - MyDigital Crown',
        description: 'Best Digital Marketing Training Institute in Varanasi with 100% Job Placement',
        inLanguage: 'en-IN',
        isPartOf: {
          '@id': 'https://mydigitalcrown.in/#website'
        },
        breadcrumb: {
          '@id': 'https://mydigitalcrown.in/course#breadcrumb'
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://mydigitalcrown.in/images/aditya.webp'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://mydigitalcrown.in/#website',
        url: 'https://mydigitalcrown.in',
        name: 'MyDigital Crown',
        description: 'Leading Digital Marketing Training Institute and Agency',
        publisher: {
          '@id': 'https://mydigitalcrown.in/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://mydigitalcrown.in/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        },
        inLanguage: 'en-IN'
      },
      {
        '@type': 'ItemList',
        '@id': 'https://mydigitalcrown.in/course#courselist',
        name: 'Digital Marketing Course Modules',
        description: 'Complete list of modules covered in the Digital Marketing Course',
        numberOfItems: 10,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Advanced SEO Mastery',
            description: 'Complete Advanced Search Engine Optimization training'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'AI Models for Digital Marketing',
            description: 'ChatGPT, Midjourney, and AI tools for marketing'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Website Development',
            description: 'HTML, CSS, WordPress development from scratch'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Social Media Marketing & Strategy',
            description: 'Facebook, Instagram, LinkedIn, Twitter marketing'
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Google Ads (PPC)',
            description: 'Pay-Per-Click advertising and campaign management'
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Content Marketing',
            description: 'Content strategy, creation, and distribution'
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'Email Marketing',
            description: 'Email campaigns and marketing automation'
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: 'Web Analytics',
            description: 'Google Analytics and data-driven decision making'
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: 'YouTube Marketing',
            description: 'Video marketing and channel growth strategies'
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: 'Freelancing & Agency Setup',
            description: 'Start your own digital marketing agency or freelance career'
          }
        ]
      },
      {
        '@type': 'Review',
        '@id': 'https://mydigitalcrown.in/course#review1',
        author: {
          '@type': 'Person',
          name: 'Rahul Sharma'
        },
        datePublished: '2024-12-15',
        reviewBody: 'Excellent Digital Marketing Course in Varanasi! Aditya Pandey is an amazing trainer. The AI Models and Advanced SEO modules were game-changers for me. Got placed at a top agency within 2 months of completion.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1'
        },
        itemReviewed: {
          '@id': 'https://mydigitalcrown.in/course#course'
        }
      },
      {
        '@type': 'Review',
        '@id': 'https://mydigitalcrown.in/course#review2',
        author: {
          '@type': 'Person',
          name: 'Priya Singh'
        },
        datePublished: '2025-01-20',
        reviewBody: 'Best investment I made for my career. The Website Development module helped me build my own portfolio. The course is very practical with live projects. Highly recommend for anyone in Varanasi looking to learn digital marketing.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1'
        },
        itemReviewed: {
          '@id': 'https://mydigitalcrown.in/course#course'
        }
      },
      {
        '@type': 'VideoObject',
        '@id': 'https://mydigitalcrown.in/course#video',
        name: 'Digital Marketing Course Introduction - Varanasi',
        description: 'Introduction to our comprehensive Digital Marketing Course in Varanasi covering Advanced SEO, AI Models, Website Development, and Social Media Marketing',
        thumbnailUrl: 'https://mydigitalcrown.in/images/aditya.webp',
        uploadDate: '2024-01-01',
        duration: 'PT5M',
        contentUrl: 'https://mydigitalcrown.in/course',
        embedUrl: 'https://mydigitalcrown.in/course',
        publisher: {
          '@id': 'https://mydigitalcrown.in/#organization'
        }
      }
    ]
  };

  return (
    <>
      {/* Structured Data - Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      
      <Navbar />

      {/* Hero Section - Premium Design */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-800 via-purple-700 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">🏆 Varanasi&apos;s #1 Digital Marketing Training Institute</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                Digital Marketing Course
              </span>
              <br />
              <span className="text-white">in Varanasi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto font-bold leading-relaxed mb-8">
              Learn from <span className="text-yellow-300">Aditya Pandey</span> | <span className="text-green-300">100% Job Placement</span> | <span className="text-orange-300">Google Certified</span> | <span className="text-pink-300">Live Projects</span>
            </p>

            <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Master Advanced SEO, AI Models (ChatGPT, Midjourney), Website Development (WordPress, HTML/CSS), Social Media Marketing, Google Ads & More. Get Industry-Ready in 6 Months with Hands-on Training & Guaranteed Job Placement
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link 
                href="/contact" 
                className="group inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-yellow-300 hover:text-blue-900 transition-all duration-300 font-bold text-lg shadow-2xl transform hover:scale-105"
              >
                <span>Enroll Now - Limited Seats!</span>
                <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <a 
                href="tel:+918369511877" 
                className="group inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-lg transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call: +91 83695-11877</span>
              </a>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">₹30K</div>
                <div className="text-blue-100 font-semibold">Course Fee</div>
                <div className="text-xs text-blue-200 mt-1">EMI Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-black text-green-300 mb-2">6 Mon</div>
                <div className="text-blue-100 font-semibold">Duration</div>
                <div className="text-xs text-blue-200 mt-1">24 Weeks</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-black text-orange-300 mb-2">100%</div>
                <div className="text-blue-100 font-semibold">Placement</div>
                <div className="text-xs text-blue-200 mt-1">Guaranteed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-black text-pink-300 mb-2">500+</div>
                <div className="text-blue-100 font-semibold">Students</div>
                <div className="text-xs text-blue-200 mt-1">Trained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Below Hero */}
      <CourseEnquiryForm />

      {/* Why Choose Our Course Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">✨</span>
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Learn Digital Marketing <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">in Varanasi?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Varanasi&apos;s Most Comprehensive Digital Marketing Training with Industry Experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-white rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform text-3xl">
                👨‍🏫
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Trainer</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Learn from <strong>Aditya Pandey</strong> - Google & Meta Certified Expert with 8+ years industry experience and 150+ successful projects.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Google Ads Certified</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Meta Blueprint Certified</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>8+ Years Experience</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-white rounded-2xl border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform text-3xl">
                💼
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Job Placement</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Guaranteed job placement assistance with tie-ups with 50+ digital marketing agencies across India.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Resume Building</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Interview Preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>₹3-5 LPA Average Package</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-white rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform text-3xl">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Projects</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Work on real client projects and build your portfolio while learning. Get hands-on experience.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Real Client Work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Portfolio Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Industry Exposure</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 bg-white rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform text-3xl">
                📜
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Certifications</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Get Google Ads, Google Analytics, and Meta Blueprint certifications along with our course certificate.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Google Ads Certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Google Analytics Certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Meta Blueprint Certification</span>
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 bg-white rounded-2xl border-2 border-pink-100 hover:border-pink-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform text-3xl">
                💰
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable Fee</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Just ₹30,000 for the complete 6-month course with easy EMI options starting from ₹5,000/month.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>₹30,000 Total Fee</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>EMI from ₹5,000/month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>Early Bird Discounts</span>
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 bg-white rounded-2xl border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform text-3xl">
                🕐
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Timings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Choose from weekend batches, weekday batches, or online classes. Study at your convenience.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Weekend Batches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Weekday Batches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Online Classes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📚</span>
              Course Curriculum
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What You Will <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learn</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete Digital Marketing Training from Basics to Advanced - 14+ Comprehensive Modules
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Module 1 - Advanced SEO */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🔍</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Module 1: Advanced SEO Mastery</h3>
                  <p className="text-gray-700 mb-4">Complete Advanced Search Engine Optimization from basics to expert level</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">→</span>
                      <span>Advanced On-Page SEO & Technical SEO</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">→</span>
                      <span>Off-Page SEO & Advanced Link Building</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">→</span>
                      <span>Advanced Keyword Research & Competitor Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">→</span>
                      <span>Local SEO, International SEO & Voice Search</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">→</span>
                      <span>SEO Tools: Ahrefs, SEMrush, Screaming Frog</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">→</span>
                      <span>Core Web Vitals & Page Speed Optimization</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-sm font-semibold text-blue-600">Duration: 6 Weeks</div>
                </div>
              </div>
            </div>

            {/* Module 2 - AI Models */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🤖</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Module 2: AI Models for Digital Marketing</h3>
                  <p className="text-gray-700 mb-4">Master AI tools to supercharge your digital marketing efforts</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">→</span>
                      <span>ChatGPT for Content Creation & SEO</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">→</span>
                      <span>Midjourney & DALL-E for Image Generation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">→</span>
                      <span>AI-Powered Marketing Automation Tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">→</span>
                      <span>AI for Social Media Content & Scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">→</span>
                      <span>AI Analytics & Predictive Marketing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">→</span>
                      <span>ChatGPT Prompts for Marketing Success</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-sm font-semibold text-purple-600">Duration: 4 Weeks</div>
                </div>
              </div>
            </div>

            {/* Module 3 - Website Development */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-5xl">�</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Module 3: Website Development</h3>
                  <p className="text-gray-700 mb-4">Build professional websites from scratch</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">→</span>
                      <span>HTML, CSS & JavaScript Fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">→</span>
                      <span>WordPress Development & Customization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">→</span>
                      <span>Responsive Web Design & Mobile Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">→</span>
                      <span>Landing Page Design & Conversion Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">→</span>
                      <span>Website Speed & Performance Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">→</span>
                      <span>Domain, Hosting & Website Deployment</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-sm font-semibold text-green-600">Duration: 5 Weeks</div>
                </div>
              </div>
            </div>

            {/* Module 4 - Social Media Marketing */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border-2 border-pink-200 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-5xl">📱</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Module 4: Social Media Marketing & Strategy</h3>
                  <p className="text-gray-700 mb-4">Master all major social media platforms and advertising</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2 font-bold">→</span>
                      <span>Facebook & Instagram Marketing & Ads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2 font-bold">→</span>
                      <span>LinkedIn Marketing for B2B & Personal Branding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2 font-bold">→</span>
                      <span>Twitter/X Marketing & Engagement Strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2 font-bold">→</span>
                      <span>Social Media Content Strategy & Calendar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2 font-bold">→</span>
                      <span>Influencer Marketing & Collaborations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2 font-bold">→</span>
                      <span>Meta Blueprint Certification Preparation</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-sm font-semibold text-pink-600">Duration: 5 Weeks</div>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-5xl">�</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Module 5: Google Ads (PPC)</h3>
                  <p className="text-gray-700 mb-4">Master Pay-Per-Click advertising and Google Ads</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">→</span>
                      <span>Search Ads & Display Ads Mastery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">→</span>
                      <span>Shopping Ads & Video Ads (YouTube)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">→</span>
                      <span>Campaign Setup, Optimization & Scaling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">→</span>
                      <span>Remarketing & Retargeting Strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">→</span>
                      <span>Google Ads Certification Preparation</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-sm font-semibold text-orange-600">Duration: 4 Weeks</div>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border-2 border-indigo-200 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-5xl">✍️</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Module 6: Content Marketing</h3>
                  <p className="text-gray-700 mb-4">Content strategy, creation, and distribution mastery</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">→</span>
                      <span>Content Strategy & Planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">→</span>
                      <span>Blog Writing & SEO Content Writing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">→</span>
                      <span>Video Content Creation & Marketing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">→</span>
                      <span>Infographics & Visual Content Design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">→</span>
                      <span>Content Distribution & Promotion</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-sm font-semibold text-indigo-600">Duration: 2 Weeks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Modules Grid */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border-2 border-yellow-200 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-3">📧</div>
              <h4 className="font-bold text-gray-900 mb-2">Email Marketing</h4>
              <p className="text-sm text-gray-600">Automation & campaigns</p>
              <div className="text-xs text-yellow-600 font-semibold mt-2">2 Weeks</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border-2 border-teal-200 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="font-bold text-gray-900 mb-2">Web Analytics</h4>
              <p className="text-sm text-gray-600">Google Analytics & Tag Manager</p>
              <div className="text-xs text-teal-600 font-semibold mt-2">2 Weeks</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-200 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-3">�</div>
              <h4 className="font-bold text-gray-900 mb-2">YouTube Marketing</h4>
              <p className="text-sm text-gray-600">Channel growth & video SEO</p>
              <div className="text-xs text-red-600 font-semibold mt-2">2 Weeks</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 border-2 border-cyan-200 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-3">💡</div>
              <h4 className="font-bold text-gray-900 mb-2">Freelancing</h4>
              <p className="text-sm text-gray-600">Start your own agency</p>
              <div className="text-xs text-cyan-600 font-semibold mt-2">1 Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              <span className="text-2xl mr-2">🏆</span>
              Industry Certifications
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Certified by Top Platforms
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Earn globally recognized certifications to boost your career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">Google Ads</h3>
              <p className="text-blue-100 mb-4">Certification</p>
              <div className="text-sm text-blue-200">Become a certified Google Ads expert recognized globally</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Google Analytics</h3>
              <p className="text-blue-100 mb-4">Certification</p>
              <div className="text-sm text-blue-200">Master data analysis with official Google certification</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3">Meta Blueprint</h3>
              <p className="text-blue-100 mb-4">Certification</p>
              <div className="text-sm text-blue-200">Facebook & Instagram marketing certification by Meta</div>
            </div>
          </div>
        </div>
      </section>

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
              Everything you need to know about Digital Marketing Course in Varanasi ✨
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏰</span>
                  <span>What is the duration of Digital Marketing Course in Varanasi?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>The complete Digital Marketing Course in Varanasi is <strong className="text-white">6 months (24 weeks)</strong> with flexible timings. We offer weekend batches, weekday batches, and online classes to suit your schedule. The extended duration allows in-depth coverage of Advanced SEO, AI Models (ChatGPT, Midjourney), Website Development (WordPress, HTML/CSS), and Social Media Marketing with hands-on practice on live projects.</p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">💰</span>
                  <span>What is the course fee for Digital Marketing training in Varanasi?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>The Digital Marketing Course fee in Varanasi is <strong className="text-white">₹30,000</strong> for the complete 6-month program. We offer easy EMI options starting from ₹5,000 per month. Early bird discounts of up to 20% and group discounts are also available. The fee includes all course materials, certifications, and lifetime access to our learning portal.</p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">💼</span>
                  <span>Do you provide job placement after Digital Marketing Course?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Yes! We provide <strong className="text-white">100% job placement assistance</strong> with our extensive network of 50+ digital marketing agencies and companies across India. Our students have been placed in top companies with average salaries ranging from ₹3-5 LPA. We also provide interview preparation, resume building, and portfolio development support.</p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📜</span>
                  <span>Is this Digital Marketing Course Google certified?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Yes! Our Digital Marketing Course in Varanasi includes preparation and certification for <strong className="text-white">Google Ads Certification, Google Analytics Certification, and Meta (Facebook) Blueprint Certification</strong>. You will receive industry-recognized certificates that are valued globally and will boost your career prospects significantly.</p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-bounce">👨‍🏫</span>
                  <span>Who is the trainer for Digital Marketing Course in Varanasi?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>The course is taught by <strong className="text-white">Aditya Pandey</strong>, a Google & Meta certified Digital Marketing Expert with 8+ years of industry experience. He has trained 500+ students and helped 150+ businesses grow online. Aditya brings real-world expertise from managing campaigns worth crores and working with top brands across industries.</p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-pulse">📚</span>
                  <span>What will I learn in Digital Marketing Course Varanasi?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p className="mb-4">You will master <strong className="text-white">14+ modules</strong> including:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">🔍 <span><strong className="text-white">Advanced SEO</strong> - On-page, Off-page, Technical SEO, Core Web Vitals</span></li>
                  <li className="flex items-start gap-2">🤖 <span><strong className="text-white">AI Models</strong> - ChatGPT, Midjourney, DALL-E, AI Marketing Tools</span></li>
                  <li className="flex items-start gap-2">💻 <span><strong className="text-white">Website Development</strong> - WordPress, HTML, CSS, Landing Pages</span></li>
                  <li className="flex items-start gap-2">📱 <span><strong className="text-white">Social Media Marketing</strong> - Facebook, Instagram, LinkedIn, Twitter</span></li>
                  <li className="flex items-start gap-2">💰 <span><strong className="text-white">Google Ads (PPC)</strong> - Search, Display, Shopping Ads</span></li>
                  <li className="flex items-start gap-2">✍️ <span><strong className="text-white">Content Marketing</strong> - Blog Writing, Video Marketing</span></li>
                  <li className="flex items-start gap-2">📧 <span><strong className="text-white">Email Marketing & Analytics</strong> - Campaign Automation & Tracking</span></li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Comprehensive Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Best <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Marketing Course</span> in Varanasi
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your career with India&apos;s most comprehensive digital marketing training program, designed for Varanasi&apos;s aspiring digital marketers
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  Why Choose Digital Marketing Course in Varanasi?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Varanasi, the spiritual capital of India, is rapidly emerging as a hub for digital innovation and entrepreneurship. Our <strong>Digital Marketing Course in Varanasi</strong> is specifically designed to meet the growing demand for skilled digital marketers in the region. With businesses increasingly shifting online, the need for certified digital marketing professionals has never been higher.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you&apos;re a student looking to start your career, a business owner wanting to grow your business online, or a professional seeking to upskill, this course provides you with the complete toolkit needed to succeed in the digital world. Our curriculum covers everything from <strong>Advanced SEO and AI-powered marketing tools</strong> to <strong>website development and social media strategies</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🚀</span>
                  Career Opportunities After Digital Marketing Course
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Completing our <strong>Digital Marketing Course in Varanasi</strong> opens doors to numerous exciting career opportunities:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span><strong>SEO Specialist</strong> - Earn ₹3-6 LPA by helping businesses rank on Google</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span><strong>Social Media Manager</strong> - Manage brand presence across platforms at ₹4-7 LPA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span><strong>Google Ads Expert</strong> - Run profitable PPC campaigns earning ₹5-8 LPA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span><strong>Content Marketing Strategist</strong> - Create engaging content at ₹4-6 LPA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span><strong>Digital Marketing Consultant</strong> - Work as a freelancer earning ₹50,000-2 Lakhs/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span><strong>E-commerce Marketing Manager</strong> - Grow online stores at ₹6-10 LPA</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">💎</span>
                  What Makes Our Course Unique?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our <strong>Digital Marketing Course in Varanasi</strong> stands out from other training programs due to its comprehensive, industry-focused approach:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold mt-1">★</span>
                    <span><strong>AI-Powered Marketing Training</strong> - Learn ChatGPT, Midjourney, and cutting-edge AI tools that give you a competitive edge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold mt-1">★</span>
                    <span><strong>Website Development Skills</strong> - Unlike other courses, we teach you WordPress, HTML, and CSS so you can build complete websites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold mt-1">★</span>
                    <span><strong>Live Project Experience</strong> - Work on real client projects during the course to build your portfolio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold mt-1">★</span>
                    <span><strong>Google & Meta Certifications</strong> - Get industry-recognized certifications that employers value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold mt-1">★</span>
                    <span><strong>100% Placement Support</strong> - We don&apos;t just train you, we help you land your dream job</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold mt-1">★</span>
                    <span><strong>Flexible Learning Options</strong> - Choose from weekend, weekday, or online classes based on your schedule</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">📊</span>
                  Course Highlights
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-3xl font-black text-blue-600 mb-2">6 Months</div>
                    <div className="text-sm text-gray-600 font-semibold">Duration</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-3xl font-black text-purple-600 mb-2">14+</div>
                    <div className="text-sm text-gray-600 font-semibold">Modules</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-3xl font-black text-green-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600 font-semibold">Job Support</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-3xl font-black text-orange-600 mb-2">₹30K</div>
                    <div className="text-sm text-gray-600 font-semibold">Course Fee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">🎓</span>
                Digital Marketing Course Syllabus in Varanasi
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our <strong>Digital Marketing Course in Varanasi</strong> features a meticulously designed curriculum that covers all aspects of modern digital marketing. Here&apos;s what you&apos;ll master over 6 months:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">🔍 Advanced SEO Mastery</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Master on-page, off-page, and technical SEO. Learn Core Web Vitals, voice search optimization, local SEO, and international SEO strategies using industry tools like Ahrefs, SEMrush, and Screaming Frog.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all">
                  <h4 className="text-xl font-bold text-purple-900 mb-3">🤖 AI Marketing Tools</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Harness the power of ChatGPT for content creation, Midjourney and DALL-E for AI-generated images, and learn how to automate marketing tasks with cutting-edge AI technology.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all">
                  <h4 className="text-xl font-bold text-green-900 mb-3">💻 Website Development</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Build professional websites from scratch using WordPress, HTML, CSS, and JavaScript. Learn responsive design, landing page optimization, and conversion rate optimization.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-all">
                  <h4 className="text-xl font-bold text-orange-900 mb-3">📱 Social Media Marketing</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Master Facebook, Instagram, LinkedIn, and Twitter marketing. Learn content strategy, influencer marketing, social media ads, and community management for maximum engagement.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border-2 border-red-200 hover:shadow-xl transition-all">
                  <h4 className="text-xl font-bold text-red-900 mb-3">💰 Google Ads (PPC)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Create and manage profitable Google Ads campaigns. Learn search ads, display ads, shopping ads, remarketing, and advanced bid strategies to maximize ROI.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl border-2 border-indigo-200 hover:shadow-xl transition-all">
                  <h4 className="text-xl font-bold text-indigo-900 mb-3">📊 Analytics & Strategy</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Master Google Analytics, Google Tag Manager, and data analysis. Learn to create comprehensive digital marketing strategies based on data-driven insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 rounded-3xl text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                🌟 Why Varanasi Students Choose MyDigital Crown
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg leading-relaxed mb-4">
                    As Varanasi continues to embrace digital transformation, the demand for skilled digital marketers is skyrocketing. Local businesses, from traditional silk weavers to modern startups, are looking for professionals who can help them establish a strong online presence.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our <strong>Digital Marketing Course in Varanasi</strong> is taught by industry expert Aditya Pandey, who has worked with 150+ businesses across India. With small batch sizes, personalized attention, and hands-on training, we ensure every student becomes job-ready.
                  </p>
                </div>
                <div>
                  <p className="text-lg leading-relaxed mb-4">
                    <strong>Special Benefits for Varanasi Students:</strong>
                  </p>
                  <ul className="space-y-2 text-lg">
                    <li>✓ Local business case studies from Varanasi market</li>
                    <li>✓ Networking with Varanasi&apos;s business community</li>
                    <li>✓ Flexible timings for students and working professionals</li>
                    <li>✓ EMI options starting at just ₹5,000/month</li>
                    <li>✓ Lifetime access to updated course materials</li>
                    <li>✓ Alumni network of 500+ successful digital marketers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                🎯 Who Should Join This Digital Marketing Course?
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-2xl hover:shadow-xl transition-all">
                  <div className="text-5xl mb-4">🎓</div>
                  <h4 className="font-bold text-gray-900 mb-2">Students</h4>
                  <p className="text-sm text-gray-600">Kickstart your career in the booming digital industry</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-2xl hover:shadow-xl transition-all">
                  <div className="text-5xl mb-4">💼</div>
                  <h4 className="font-bold text-gray-900 mb-2">Professionals</h4>
                  <p className="text-sm text-gray-600">Upskill to switch to high-paying digital marketing roles</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-2xl hover:shadow-xl transition-all">
                  <div className="text-5xl mb-4">👨‍💼</div>
                  <h4 className="font-bold text-gray-900 mb-2">Business Owners</h4>
                  <p className="text-sm text-gray-600">Grow your business online and reduce marketing costs</p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-2xl hover:shadow-xl transition-all">
                  <div className="text-5xl mb-4">🚀</div>
                  <h4 className="font-bold text-gray-900 mb-2">Freelancers</h4>
                  <p className="text-sm text-gray-600">Build a profitable freelancing career with global clients</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">⚡</span>
                Ready to Start Your Digital Marketing Journey in Varanasi?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Don&apos;t miss this opportunity to transform your career with India&apos;s most comprehensive <strong>Digital Marketing Course in Varanasi</strong>. With limited seats per batch and high demand, we recommend enrolling early. Get 20% early bird discount if you enroll this month!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all font-bold text-lg transform hover:scale-105"
                >
                  Enroll Now - Limited Seats!
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a 
                  href="tel:+918369511877" 
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all font-bold text-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: +91 83695-11877
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <span className="text-2xl mr-2">🚀</span>
            Limited Seats Available - Enroll Today!
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your Digital Marketing Career Today
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 500+ successful students who transformed their careers with our Digital Marketing Course in Varanasi. Next batch starts soon!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link 
              href="/contact" 
              className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full hover:bg-yellow-300 hover:text-blue-900 transition-all duration-300 font-bold text-lg shadow-2xl transform hover:scale-105"
            >
              <span>Enroll Now - Get 20% Off!</span>
              <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <a 
              href="tel:+918369511877" 
              className="group inline-flex items-center bg-transparent border-2 border-white text-white px-10 py-5 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-lg transform hover:scale-105"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: +91 83695-11877</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black mb-2">₹30K</div>
              <div className="text-blue-100 font-semibold">Course Fee Only</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">6 Mon</div>
              <div className="text-blue-100 font-semibold">Complete Training</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">100%</div>
              <div className="text-blue-100 font-semibold">Job Placement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">500+</div>
              <div className="text-blue-100 font-semibold">Happy Students</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
