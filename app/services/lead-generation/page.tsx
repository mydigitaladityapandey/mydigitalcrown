import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import EnquiryForm from '@/app/components/EnquiryForm'
import TrustedBrands from '@/app/components/TrustedBrands'
import ClientSuccessStories from '@/app/components/ClientSuccessStories'
import RelatedServices from '@/app/components/RelatedServices'
import OurLocations from '@/app/components/OurLocations'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Lead Generation Company In Mumbai | #1 Lead Generation Services | MyDigital Crown',
  description: 'Top Lead Generation Company In Mumbai. 5000+ qualified leads generated, 35% conversion rate, ₹50L+ revenue. Call +91-83695-11877',
  keywords: [
    'lead generation company in mumbai',
    'lead generation services mumbai',
    'lead gen agency mumbai',
    'sales lead generation mumbai',
    'b2b lead generation mumbai',
    'b2c lead generation mumbai',
    'inbound marketing mumbai',
    'outbound marketing mumbai',
    'qualified leads mumbai',
    'lead generation expert mumbai',
    'lead generation specialist mumbai',
    'lead generation consultant mumbai',
    'customer acquisition mumbai',
    'sales pipeline mumbai',
    'lead nurturing mumbai',
    'lead scoring mumbai',
    'landing page design mumbai',
    'conversion optimization mumbai',
    'lead management mumbai',
    'crm integration mumbai',
    'marketing automation mumbai',
    'email marketing leads mumbai',
    'ppc lead generation mumbai',
    'social media lead generation mumbai',
    'content marketing leads mumbai',
    'seo lead generation mumbai',
    'best lead generation company mumbai',
    'top lead generation agency mumbai',
    'professional lead generation mumbai',
    'affordable lead generation mumbai',
    'lead generation packages mumbai',
    'lead generation campaign mumbai',
    'lead generation roi mumbai',
    'lead generation results mumbai',
    'quality leads mumbai',
    'targeted lead generation mumbai'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Lead Generation Services',
  classification: 'Sales & Marketing Lead Generation',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Lead Generation Company In Mumbai | #1 Lead Generation Services',
    description: 'Top Lead Generation Company In Mumbai. 5000+ qualified leads generated, 35% conversion rate, ₹50L+ revenue.',
    url: 'https://mydigitalcrown.in/services/lead-generation',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lead Generation Company In Mumbai | #1 Lead Generation Services',
    description: 'Top Lead Generation Company In Mumbai. 5000+ qualified leads generated, 35% conversion rate.',
  },
  alternates: {
    canonical: 'https://mydigitalcrown.in/services/lead-generation',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  }
}

export default function LeadGenerationPage() {
  // Comprehensive Schema Markup for SEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization Schema
      {
        '@type': 'Organization',
        '@id': 'https://mydigitalcrown.in/#organization',
        name: 'MyDigital Crown - Lead Generation Company In Mumbai',
        url: 'https://mydigitalcrown.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://mydigitalcrown.in/logo.png',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-83695-11877',
          contactType: 'Customer Service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi', 'Marathi'],
        },
        sameAs: [
          'https://www.facebook.com/mydigitalcrown',
          'https://www.instagram.com/mydigitalcrown',
          'https://www.linkedin.com/company/mydigitalcrown',
        ],
      },
      // Service Schema
      {
        '@type': 'Service',
        '@id': 'https://mydigitalcrown.in/services/lead-generation#service',
        serviceType: 'Lead Generation Services',
        name: 'Lead Generation Company In Mumbai',
        description: 'Professional lead generation services including inbound marketing, outbound campaigns, landing page optimization, and lead nurturing for businesses in Mumbai.',
        provider: {
          '@id': 'https://mydigitalcrown.in/#organization',
        },
        areaServed: {
          '@type': 'City',
          name: 'Mumbai',
          '@id': 'https://en.wikipedia.org/wiki/Mumbai',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Lead Generation Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Inbound Marketing',
                description: 'SEO, content marketing, and social media strategies to attract qualified leads organically.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Paid Advertising',
                description: 'Google Ads, Facebook Ads, and LinkedIn campaigns optimized for lead generation.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Landing Page Design',
                description: 'High-converting landing pages with optimized forms and compelling CTAs.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Email Campaigns',
                description: 'Targeted email marketing and nurturing sequences to convert prospects into customers.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Lead Scoring',
                description: 'Data-driven lead qualification and prioritization for improved sales efficiency.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'CRM Integration',
                description: 'Seamless integration with Salesforce, HubSpot, and other CRM systems.',
              },
            },
          ],
        },
      },
      // LocalBusiness Schema
      {
        '@type': 'LocalBusiness',
        '@id': 'https://mydigitalcrown.in/services/lead-generation#localbusiness',
        name: 'MyDigital Crown - Lead Generation Company In Mumbai',
        image: 'https://mydigitalcrown.in/images/lead-generation-mumbai.jpg',
        telephone: '+91-83695-11877',
        email: 'info@mydigitalcrown.in',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Chembur',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          postalCode: '400071',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '19.0760',
          longitude: '72.8777',
        },
        priceRange: '₹₹',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '200',
          bestRating: '5',
          worstRating: '1',
        },
      },
      // FAQPage Schema
      {
        '@type': 'FAQPage',
        '@id': 'https://mydigitalcrown.in/services/lead-generation#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is lead generation and why is it important?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lead generation is the process of attracting and converting prospects into potential customers through various marketing strategies. It includes inbound tactics (SEO, content, social media) and outbound methods (cold outreach, paid ads, events). For Mumbai businesses, quality lead generation is crucial for consistent growth, predictable revenue, and building a robust sales pipeline.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why choose MyDigital Crown as your lead generation company in Mumbai?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We are Mumbai\'s leading lead generation agency with proven expertise in delivering 5000+ qualified leads, achieving 35% average conversion rates, and generating ₹50L+ revenue for clients. Our comprehensive approach combines inbound and outbound strategies, advanced analytics, multi-channel campaigns, and dedicated Mumbai-based support with 24/7 availability.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to see results from lead generation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Campaign setup takes 2-4 weeks. You\'ll see first qualified leads within the first month. Full momentum with consistent lead flow is typically achieved within 2-3 months as campaigns optimize and nurturing sequences mature.',
            },
          },
          {
            '@type': 'Question',
            name: 'What channels do you use for lead generation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We leverage multiple high-performance channels: SEO for organic leads, Google Ads and social media PPC for immediate results, content marketing for inbound leads, email campaigns for nurturing, landing pages optimized for conversions, and LinkedIn for B2B lead generation.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does professional lead generation cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our lead generation packages range from ₹25,000 to ₹70,000 per month, depending on lead volume, channels used, and campaign complexity. Basic packages deliver 100 qualified leads monthly, while premium packages generate 500+ leads with advanced nurturing and CRM integration.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is lead scoring and why does it matter?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lead scoring is a data-driven ranking system that assigns points to leads based on their behavior, demographics, and engagement. It helps your sales team prioritize high-value prospects most likely to convert, improving efficiency and boosting conversion rates by 30-40%.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you integrate with our existing CRM system?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! We seamlessly integrate with all major CRM systems including Salesforce, HubSpot, Zoho, Pipedrive, and custom solutions. Leads automatically sync with your CRM in real-time with complete tracking, scoring, and nurturing data for your sales team.',
            },
          },
          {
            '@type': 'Question',
            name: 'What industries do you generate leads for?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We have expertise generating leads across multiple industries: B2B SaaS and technology companies, professional services (legal, accounting, consulting), healthcare and medical services, real estate and property development, education and e-learning, manufacturing and industrial, e-commerce and retail, and financial services in Mumbai and across India.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you qualify and verify leads?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our rigorous 5-step qualification process includes demographic verification (company size, industry, location), behavior analysis (website engagement, content downloads), budget qualification through progressive profiling, decision-maker identification via LinkedIn data, and intent scoring based on actions taken. Only leads meeting your specific criteria are forwarded to sales.',
            },
          },
          {
            '@type': 'Question',
            name: 'What metrics and reporting do you provide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We provide comprehensive weekly and monthly reports covering lead volume and quality metrics, conversion rates at each funnel stage, cost per lead and CAC analysis, channel performance comparisons, ROI calculations, pipeline velocity, lead source attribution, and campaign-specific insights with actionable recommendations.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you guarantee a certain number of leads?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'While we cannot guarantee exact numbers due to market variables, we do provide transparent projections based on historical data. Our contracts specify minimum qualified lead thresholds, and we offer performance guarantees - if we don\'t meet agreed benchmarks, we work additional hours at no cost until targets are achieved.',
            },
          },
        ],
      },
      // BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://mydigitalcrown.in/services/lead-generation#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': 'https://mydigitalcrown.in',
              name: 'Home',
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': 'https://mydigitalcrown.in/services',
              name: 'Services',
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@id': 'https://mydigitalcrown.in/services/lead-generation',
              name: 'Lead Generation Company In Mumbai',
            },
          },
        ],
      },
      // WebPage Schema
      {
        '@type': 'WebPage',
        '@id': 'https://mydigitalcrown.in/services/lead-generation#webpage',
        url: 'https://mydigitalcrown.in/services/lead-generation',
        name: 'Lead Generation Company In Mumbai | #1 Lead Generation Services',
        description: 'Top Lead Generation Company In Mumbai. 5000+ qualified leads generated, 35% conversion rate, ₹50L+ revenue.',
        publisher: {
          '@id': 'https://mydigitalcrown.in/#organization',
        },
        breadcrumb: {
          '@id': 'https://mydigitalcrown.in/services/lead-generation#breadcrumb',
        },
      },
      // Review Schema 1
      {
        '@type': 'Review',
        '@id': 'https://mydigitalcrown.in/services/lead-generation#review1',
        itemReviewed: {
          '@type': 'Service',
          name: 'Lead Generation Services',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Mumbai B2B Company CEO',
        },
        reviewBody: 'MyDigital Crown transformed our lead generation completely. In 6 months, we went from 50 leads/month to 400+ qualified leads. Their multi-channel approach and CRM integration made our sales process 3x more efficient. ROI exceeded expectations!',
      },
      // Review Schema 2
      {
        '@type': 'Review',
        '@id': 'https://mydigitalcrown.in/services/lead-generation#review2',
        itemReviewed: {
          '@type': 'Service',
          name: 'Lead Generation Services',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Mumbai Startup Founder',
        },
        reviewBody: 'Best lead generation agency in Mumbai! Their landing pages convert at 35%, email campaigns have 45% open rates, and the lead scoring system helps our small sales team focus on hot prospects. Generated ₹50L revenue in first year!',
      },
      // HowTo Schema
      {
        '@type': 'HowTo',
        '@id': 'https://mydigitalcrown.in/services/lead-generation#howto',
        name: 'How Our Lead Generation Process Works',
        description: 'Step-by-step process for generating quality leads for Mumbai businesses',
        totalTime: 'P90D',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'INR',
          value: '35000',
        },
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Discovery & Strategy',
            text: 'Deep dive into your business, target audience, competitors, and goals to create a customized lead generation strategy. Timeline: 1-2 weeks.',
            url: 'https://mydigitalcrown.in/services/lead-generation#discovery',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Campaign Setup',
            text: 'Build landing pages, set up tracking, configure CRM integration, create ad campaigns, and develop content assets. Timeline: 2-3 weeks.',
            url: 'https://mydigitalcrown.in/services/lead-generation#setup',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Launch & Optimize',
            text: 'Launch campaigns across multiple channels, monitor performance, A/B test variations, and optimize for best results. Timeline: Ongoing.',
            url: 'https://mydigitalcrown.in/services/lead-generation#launch',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Lead Nurturing',
            text: 'Automated email sequences, retargeting campaigns, and personalized follow-ups to convert prospects into customers. Timeline: Ongoing.',
            url: 'https://mydigitalcrown.in/services/lead-generation#nurturing',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Reporting & Refinement',
            text: 'Weekly analytics reports, monthly strategy reviews, and continuous campaign refinement based on data insights. Timeline: Ongoing.',
            url: 'https://mydigitalcrown.in/services/lead-generation#reporting',
          },
        ],
      },
      // Article Schema
      {
        '@type': 'Article',
        '@id': 'https://mydigitalcrown.in/services/lead-generation#article',
        headline: 'Lead Generation Company In Mumbai | Complete Guide 2025',
        description: 'Comprehensive guide to lead generation services in Mumbai including strategies, pricing, and best practices.',
        author: {
          '@type': 'Person',
          name: 'Aditya Pandey',
        },
        publisher: {
          '@id': 'https://mydigitalcrown.in/#organization',
        },
        datePublished: '2025-01-15',
        dateModified: '2025-10-22',
      },
      // ItemList Schema
      {
        '@type': 'ItemList',
        '@id': 'https://mydigitalcrown.in/services/lead-generation#itemlist',
        name: 'Lead Generation Service Offerings',
        description: 'Comprehensive lead generation services offered in Mumbai',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inbound Marketing',
            description: 'SEO, content marketing, and social media to attract organic leads',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Outbound Campaigns',
            description: 'Cold email, LinkedIn outreach, and telemarketing for direct lead generation',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Paid Advertising',
            description: 'Google Ads, Facebook Ads, and LinkedIn campaigns optimized for conversions',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Landing Page Optimization',
            description: 'High-converting landing pages with A/B testing and CRO',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Email Marketing',
            description: 'Targeted email campaigns and automated nurturing sequences',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'CRM Integration',
            description: 'Seamless integration with Salesforce, HubSpot, and other CRM systems',
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden"
        aria-label="Lead Generation Services Mumbai Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s Premier Lead Generation Agency</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Lead Generation Company In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  🎯 Generate <span className="text-yellow-300">Quality Leads</span>, <span className="text-green-300">Boost Conversions</span> & <span className="text-orange-300">Grow Revenue</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Inbound Marketing | Outbound Campaigns | Landing Pages | Lead Nurturing
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
                    <span>Start Generating Leads</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">5000+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Leads Generated</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">35%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Conversion Rate</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">₹50L+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Revenue Generated</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">24/7</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Lead Tracking</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* Voice Search Quick Answers Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎤</span>
              Voice Search Optimized Answers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quick Answers About <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Lead Generation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get instant answers to your most common lead generation questions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Where Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <span className="text-3xl">📍</span>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Where to Get Lead Generation?</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-blue-400">MyDigital Crown</strong> in <strong className="text-blue-400">Chembur, Mumbai</strong> - Your trusted lead generation partner with 5000+ qualified leads generated across India.
                </p>
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-blue-400/30">
                  <p className="text-sm text-blue-200">
                    <strong>Address:</strong> Chembur, Mumbai, Maharashtra - 400071
                  </p>
                  <p className="text-sm text-blue-200 mt-2">
                    <strong>Phone:</strong> +91-83695-11877
                  </p>
                </div>
              </div>
            </div>

            {/* How Much Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <span className="text-3xl">💰</span>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">How Much Does Lead Generation Cost?</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Professional lead generation packages start from <strong className="text-purple-400">₹25,000 to ₹70,000 per month</strong>, depending on campaign scope, channels, and lead volume.
                </p>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/30">
                  <p className="text-sm text-purple-200">
                    <strong>Basic:</strong> ₹25,000/month - 100 leads
                  </p>
                  <p className="text-sm text-purple-200 mt-2">
                    <strong>Premium:</strong> ₹70,000/month - 500+ leads
                  </p>
                </div>
              </div>
            </div>

            {/* When Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <span className="text-3xl">⏱️</span>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">When Will I See Lead Generation Results?</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Campaign setup in <strong className="text-green-400">2-4 weeks</strong>. First qualified leads arrive within the first month. Full momentum and consistent lead flow achieved in 2-3 months.
                </p>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30">
                  <p className="text-sm text-green-200">
                    <strong>Setup:</strong> 2-4 weeks - Campaign ready
                  </p>
                  <p className="text-sm text-green-200 mt-2">
                    <strong>Results:</strong> 1-3 months - Steady leads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Lead Generation Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎯</span>
              Lead Generation Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Lead Generation</span> Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill your sales pipeline with qualified leads ready to convert into paying customers
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop" 
                    alt="Lead Generation Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Targeted Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  We target your ideal customer profile with precision. No more wasted effort on unqualified leads that won&apos;t convert.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 Multi-Channel Strategy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Leverage multiple channels - SEO, PPC, social media, email, and content marketing - to maximize lead generation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 High-Quality Leads</h3>
                <p className="text-gray-700 leading-relaxed">
                  Focus on quality over quantity. Our lead scoring ensures your sales team only contacts prospects ready to buy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Lead Generation <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive lead generation solutions to grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🧲</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Inbound Marketing</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Attract leads organically through valuable content, SEO, and social media that draws prospects to your business.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Content Marketing</li>
                  <li className="flex items-start gap-2">✓ SEO Optimization</li>
                  <li className="flex items-start gap-2">✓ Social Media Strategy</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📢</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Paid Advertising</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Generate immediate leads with targeted PPC campaigns on Google, Facebook, LinkedIn, and other platforms.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Google Ads Campaigns</li>
                  <li className="flex items-start gap-2">✓ Social Media Ads</li>
                  <li className="flex items-start gap-2">✓ Retargeting Campaigns</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📄</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Landing Page Design</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  High-converting landing pages optimized for conversions with compelling copy and clear calls-to-action.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Custom Page Design</li>
                  <li className="flex items-start gap-2">✓ A/B Testing</li>
                  <li className="flex items-start gap-2">✓ Mobile Responsive</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📧</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Email Campaigns</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Nurture leads through strategic email sequences that build relationships and drive conversions over time.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Drip Campaigns</li>
                  <li className="flex items-start gap-2">✓ Lead Nurturing</li>
                  <li className="flex items-start gap-2">✓ Automated Workflows</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Lead Scoring</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Identify and prioritize the most qualified leads using data-driven scoring models and behavior tracking.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Behavior Tracking</li>
                  <li className="flex items-start gap-2">✓ Lead Qualification</li>
                  <li className="flex items-start gap-2">✓ CRM Integration</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📞</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Lead Follow-up</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Timely follow-up systems that engage leads when they&apos;re most interested, maximizing conversion opportunities.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Instant Notifications</li>
                  <li className="flex items-start gap-2">✓ Automated Responses</li>
                  <li className="flex items-start gap-2">✓ Sales Team Integration</li>
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
              Ready to Fill Your<br />
              <span className="text-yellow-300">Sales Pipeline?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Start generating qualified leads that convert into paying customers. Let&apos;s grow your business together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Free Strategy Call</span>
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
                <span>5000+ Leads Generated</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>35% Conversion Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Expert Lead Generation Team</span>
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
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Floating emojis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>💡</div>
          <div className="absolute top-40 right-20 text-6xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🚀</div>
          <div className="absolute bottom-20 left-20 text-6xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}>⚡</div>
          <div className="absolute bottom-40 right-10 text-6xl opacity-20 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}>🎯</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Got <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-pulse">Questions?</span>
              <br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">We&apos;ve Got Answers!</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about professional lead generation services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                  <span>What is lead generation and why is it important?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Lead generation is the process of <strong className="text-orange-300">attracting and converting prospects</strong> into potential customers who have expressed interest in your products or services. It&apos;s crucial because it fills your <strong className="text-orange-300">sales pipeline with qualified opportunities</strong>, enabling predictable revenue growth and <strong className="text-orange-300">sustainable business expansion</strong>.</p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">✅</span>
                  <span>What makes MyDigital Crown&apos;s lead generation different?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We focus on <strong className="text-blue-300">quality over quantity</strong>, using advanced lead scoring to identify prospects most likely to convert. Our <strong className="text-blue-300">multi-channel approach</strong> (SEO, PPC, social media, email) ensures consistent lead flow, while our <strong className="text-blue-300">CRM integration and automated nurturing</strong> maximize conversion rates and ROI.</p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                  <span>How long does it take to see lead generation results?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Campaign setup takes <strong className="text-purple-300">2-4 weeks</strong>. You&apos;ll see first qualified leads within <strong className="text-purple-300">the first month</strong>. Full momentum with consistent lead flow is typically achieved within <strong className="text-purple-300">2-3 months</strong> as campaigns optimize and nurturing sequences mature.</p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📊</span>
                  <span>What channels do you use for lead generation?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We leverage <strong className="text-green-300">multiple high-performance channels</strong>: SEO for organic leads, Google Ads and social media PPC for immediate results, <strong className="text-green-300">content marketing for inbound leads</strong>, email campaigns for nurturing, landing pages optimized for conversions, and <strong className="text-green-300">LinkedIn for B2B lead generation</strong>.</p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">💰</span>
                  <span>How much does professional lead generation cost?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Our lead generation packages range from <strong className="text-pink-300">₹25,000 to ₹70,000 per month</strong>, depending on lead volume, channels used, and campaign complexity. Basic packages deliver 100 qualified leads monthly, while <strong className="text-pink-300">premium packages generate 500+ leads</strong> with advanced nurturing and CRM integration.</p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                  <span>What is lead scoring and why does it matter?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Lead scoring is a <strong className="text-yellow-300">data-driven ranking system</strong> that assigns points to leads based on their behavior, demographics, and engagement. It helps your sales team <strong className="text-yellow-300">prioritize high-value prospects</strong> most likely to convert, improving efficiency and <strong className="text-yellow-300">boosting conversion rates by 30-40%</strong>.</p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📧</span>
                  <span>How does lead nurturing work in your campaigns?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We use <strong className="text-cyan-300">automated email sequences</strong> and personalized content to guide leads through the buyer journey. Leads receive <strong className="text-cyan-300">targeted messages based on their behavior</strong>, gradually building trust and education until they&apos;re sales-ready. This typically <strong className="text-cyan-300">increases conversion rates by 50%</strong>.</p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔍</span>
                  <span>Do you provide B2B and B2C lead generation?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Yes! We specialize in both <strong className="text-orange-300">B2B lead generation</strong> using LinkedIn, industry-specific content, and targeted outreach, and <strong className="text-orange-300">B2C lead generation</strong> through social media, search ads, and consumer-focused campaigns. Each strategy is <strong className="text-orange-300">tailored to your specific audience</strong>.</p>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📊</span>
                  <span>How do you measure lead generation success?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We track <strong className="text-blue-300">comprehensive KPIs</strong>: total leads generated, lead quality score, conversion rate, cost per lead (CPL), customer acquisition cost (CAC), and <strong className="text-blue-300">revenue attribution</strong>. You receive detailed monthly reports showing campaign performance, <strong className="text-blue-300">lead source breakdown, and ROI</strong>.</p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🚀</span>
                  <span>Can lead generation help my local business in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Absolutely! We excel at <strong className="text-purple-300">local lead generation for Mumbai businesses</strong>. Using geo-targeted ads, local SEO, Google My Business optimization, and <strong className="text-purple-300">location-specific landing pages</strong>, we attract qualified local customers actively searching for your services in <strong className="text-purple-300">Mumbai and surrounding areas</strong>.</p>
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📞</span>
                  <span>How do I get started with lead generation services?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Getting started is simple! <strong className="text-green-300">Call us at +91-83695-11877</strong> or fill out our contact form. We&apos;ll conduct a free lead generation audit, analyze your target audience, and create a <strong className="text-green-300">customized strategy</strong> for your business. We&apos;ll explain our process, pricing, and expected results before you commit.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Content Section 1: Understanding Lead Generation */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📚</span>
              Lead Generation Fundamentals
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Understanding <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Professional Lead Generation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master the art and science of attracting qualified prospects and converting them into paying customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">What is Lead Generation?</h3>
              <p className="text-gray-300 leading-relaxed">
                Lead generation is the strategic process of <strong className="text-blue-400">attracting and identifying potential customers</strong> who have shown interest in your products or services. It&apos;s about <strong className="text-blue-400">filling your sales pipeline</strong> with qualified prospects ready to move through the buyer journey toward a purchase decision.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold text-white mb-4">How Lead Generation Works</h3>
              <p className="text-gray-300 leading-relaxed">
                The process starts with <strong className="text-blue-400">attracting visitors through multiple channels</strong> (SEO, ads, content, social media), capturing their information via landing pages or forms, then <strong className="text-blue-400">nurturing them with targeted content</strong> until they&apos;re ready to buy. It&apos;s a systematic, data-driven approach.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality Over Quantity</h3>
              <p className="text-gray-300 leading-relaxed">
                Success isn&apos;t about generating thousands of unqualified leads. It&apos;s about attracting <strong className="text-blue-400">high-quality prospects matching your ideal customer profile</strong>. With proper targeting and scoring, 100 qualified leads can <strong className="text-blue-400">outperform 1000 random contacts</strong> in revenue generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2: Lead Generation Strategies */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎨</span>
              Proven Strategies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Lead Generation Techniques</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multi-channel strategies that consistently deliver high-quality leads and maximize ROI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">🧲</div>
              <h3 className="text-2xl font-bold text-white mb-4">Inbound Marketing</h3>
              <p className="text-gray-300 leading-relaxed">
                Attract leads organically through <strong className="text-purple-400">valuable content, SEO, and social media</strong>. Create blog posts, videos, and resources that answer your audience&apos;s questions, establishing your brand as a <strong className="text-purple-400">trusted authority</strong> while naturally drawing in qualified prospects.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">📢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Paid Advertising</h3>
              <p className="text-gray-300 leading-relaxed">
                Generate immediate results with <strong className="text-purple-400">targeted PPC campaigns</strong> on Google Ads, Facebook, LinkedIn, and Instagram. Reach your ideal customers at the exact moment they&apos;re searching for solutions, with <strong className="text-purple-400">full control over budget and targeting</strong>.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-2xl font-bold text-white mb-4">Landing Page Optimization</h3>
              <p className="text-gray-300 leading-relaxed">
                Convert visitors into leads with <strong className="text-purple-400">high-converting landing pages</strong> designed around a single, compelling call-to-action. Through A/B testing and conversion optimization, we achieve <strong className="text-purple-400">conversion rates of 25-40%</strong> vs. industry average of 2-5%.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Campaigns</h3>
              <p className="text-gray-300 leading-relaxed">
                Nurture leads through <strong className="text-purple-400">strategic email sequences</strong> that educate, build trust, and guide prospects toward conversion. Automated drip campaigns deliver the <strong className="text-purple-400">right message at the right time</strong>, maximizing engagement and sales opportunities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Content Marketing</h3>
              <p className="text-gray-300 leading-relaxed">
                Create <strong className="text-purple-400">valuable content that attracts and engages</strong> your target audience. Whitepapers, case studies, webinars, and guides establish thought leadership while <strong className="text-purple-400">capturing contact information</strong> from interested prospects seeking deeper insights.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Social Media Lead Gen</h3>
              <p className="text-gray-300 leading-relaxed">
                Leverage <strong className="text-purple-400">Facebook Lead Ads, LinkedIn InMail</strong>, and Instagram Stories to capture leads directly on social platforms. Native lead forms reduce friction, while <strong className="text-purple-400">precise audience targeting</strong> ensures you reach the right prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 3: Quality Lead Analysis */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🔬</span>
              Quality Assessment
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Ensure <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">High-Quality Leads</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced qualification systems that identify prospects most likely to convert into customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Lead Scoring Models</h3>
              <p className="text-gray-300 leading-relaxed">
                We assign <strong className="text-pink-400">point values to leads based on demographics</strong> (job title, company size, industry) and behaviors (pages visited, content downloaded, email engagement). Leads reaching <strong className="text-pink-400">threshold scores are prioritized</strong> for sales follow-up, maximizing conversion efficiency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Ideal Customer Profile (ICP)</h3>
              <p className="text-gray-300 leading-relaxed">
                We define your <strong className="text-pink-400">perfect customer characteristics</strong> and target only prospects matching that profile. This includes firmographics, pain points, buying behavior, and <strong className="text-pink-400">budget capacity</strong>, ensuring every lead has genuine purchase potential.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Behavior Tracking</h3>
              <p className="text-gray-300 leading-relaxed">
                Monitor <strong className="text-pink-400">how leads interact with your content</strong> - pages viewed, time on site, repeat visits, content downloads. High-engagement leads show <strong className="text-pink-400">genuine interest</strong> and are more likely to convert than those with minimal interaction.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-4">Lead Verification</h3>
              <p className="text-gray-300 leading-relaxed">
                We verify lead information using <strong className="text-pink-400">email validation, phone verification</strong>, and data enrichment tools. This eliminates fake submissions and <strong className="text-pink-400">ensures contact accuracy</strong>, saving your sales team time and improving outreach success rates.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Intent Signals</h3>
              <p className="text-gray-300 leading-relaxed">
                Track <strong className="text-pink-400">buyer intent signals</strong> like pricing page visits, demo requests, comparison page views, and competitor research. Leads showing strong intent are <strong className="text-pink-400">sales-ready</strong> and should be contacted immediately for maximum conversion probability.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">Conversion Probability</h3>
              <p className="text-gray-300 leading-relaxed">
                Using <strong className="text-pink-400">predictive analytics and historical data</strong>, we estimate each lead&apos;s likelihood of converting. This helps prioritize <strong className="text-pink-400">high-probability prospects</strong> and allocate resources efficiently, improving overall campaign ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 4: Why Choose MyDigital Crown */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">⭐</span>
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">MyDigital Crown</span> for Lead Generation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven expertise, cutting-edge technology, and results-driven strategies that fill your pipeline
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-lg rounded-3xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-300 leading-relaxed">
                We&apos;ve generated <strong className="text-green-400">5000+ qualified leads</strong> for clients across industries, achieving an average <strong className="text-green-400">35% conversion rate</strong> and ₹50L+ in revenue. Our campaigns consistently outperform industry benchmarks through data-driven optimization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-lg rounded-3xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Multi-Channel Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                We don&apos;t rely on a single channel. Our <strong className="text-green-400">integrated approach</strong> combines SEO, PPC, social media, email, and content marketing to maximize reach and <strong className="text-green-400">ensure consistent lead flow</strong> even if one channel underperforms.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-lg rounded-3xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Technology</h3>
              <p className="text-gray-300 leading-relaxed">
                We leverage <strong className="text-green-400">marketing automation, CRM integration</strong>, and AI-powered analytics to track every lead interaction. Our tech stack includes HubSpot, Salesforce, Google Analytics, and <strong className="text-green-400">custom dashboards</strong> for real-time performance monitoring.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-lg rounded-3xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">ROI-Focused Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                Every campaign decision is driven by <strong className="text-green-400">ROI maximization</strong>. We continuously optimize targeting, messaging, and channels to reduce cost per lead while <strong className="text-green-400">improving lead quality</strong>, ensuring you get maximum value from every marketing rupee spent.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-lg rounded-3xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">Transparent Reporting</h3>
              <p className="text-gray-300 leading-relaxed">
                Receive <strong className="text-green-400">detailed monthly reports</strong> showing total leads, quality scores, conversion rates, cost per lead, and revenue attribution. Full transparency with <strong className="text-green-400">no hidden metrics</strong> - you see exactly what&apos;s working and what needs adjustment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-lg rounded-3xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team includes <strong className="text-green-400">certified specialists in PPC, SEO, content marketing</strong>, email automation, and conversion optimization. With 5+ years of experience, we know <strong className="text-green-400">what works and what doesn&apos;t</strong> in lead generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 5: Mumbai Lead Generation Advantage */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🌆</span>
              Mumbai Advantage
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lead Generation in <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Mumbai</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Local expertise meets national reach - dominate Mumbai market and scale across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 backdrop-blur-lg rounded-3xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">🏙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Local Mumbai Targeting</h3>
              <p className="text-gray-300 leading-relaxed">
                We excel at <strong className="text-orange-400">geo-targeted campaigns</strong> that attract Mumbai-based customers actively searching for your services. Using <strong className="text-orange-400">local SEO, Google My Business</strong>, and location-specific landing pages, we drive qualified local leads ready to buy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 backdrop-blur-lg rounded-3xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Pan-India Reach</h3>
              <p className="text-gray-300 leading-relaxed">
                While we specialize in Mumbai, our campaigns scale across India. We combine <strong className="text-orange-400">local expertise with national campaigns</strong> to help you dominate your home market while <strong className="text-orange-400">expanding into new cities</strong> and regions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 backdrop-blur-lg rounded-3xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-white mb-4">Mumbai Office Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Work directly with our <strong className="text-orange-400">Mumbai-based team in Chembur</strong>. Schedule face-to-face strategy sessions, get immediate support, and benefit from <strong className="text-orange-400">local market insights</strong> that remote agencies simply can&apos;t provide. Call +91-83695-11877 today!
              </p>
            </div>
          </div>
        </div>
      </section>

      <OurLocations />


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/lead-generation"
        title="Complete Marketing Solutions"
        description="Enhance your lead generation with our comprehensive digital services"
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
                "@id": "https://mydigitalcrown.in/services/lead-generation#service",
                "serviceType": "Lead Generation Services",
                "provider": {
                  "@id": "https://mydigitalcrown.in/#organization"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Mumbai",
                  "addressCountry": "IN"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Lead Generation Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Inbound Marketing"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Paid Advertising"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Landing Page Design"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Email Campaigns"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Lead Scoring"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Lead Follow-up"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "Organization",
                "@id": "https://mydigitalcrown.in/#organization",
                "name": "MyDigital Crown",
                "url": "https://mydigitalcrown.in",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://mydigitalcrown.in/logo.png"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-83695-11877",
                  "contactType": "Customer Service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                },
                "sameAs": [
                  "https://www.facebook.com/mydigitalcrown",
                  "https://twitter.com/mydigitalcrown",
                  "https://www.linkedin.com/company/mydigitalcrown"
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://mydigitalcrown.in/services/lead-generation#webpage",
                "url": "https://mydigitalcrown.in/services/lead-generation",
                "name": "Lead Generation Company In Mumbai | #1 Lead Generation Services | MyDigital Crown",
                "description": "Top Lead Generation Company In Mumbai. 5000+ qualified leads generated, 35% conversion rate, ₹50L+ revenue.",
                "publisher": {
                  "@id": "https://mydigitalcrown.in/#organization"
                },
                "breadcrumb": {
                  "@id": "https://mydigitalcrown.in/services/lead-generation#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://mydigitalcrown.in/services/lead-generation#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@id": "https://mydigitalcrown.in/",
                      "name": "Home"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@id": "https://mydigitalcrown.in/services",
                      "name": "Services"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@id": "https://mydigitalcrown.in/services/lead-generation",
                      "name": "Lead Generation"
                    }
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is lead generation and why is it important?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Lead generation is the process of attracting and converting prospects into potential customers who have expressed interest in your products or services. It's crucial because it fills your sales pipeline with qualified opportunities, enabling predictable revenue growth and sustainable business expansion."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What makes MyDigital Crown's lead generation different?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We focus on quality over quantity, using advanced lead scoring to identify prospects most likely to convert. Our multi-channel approach (SEO, PPC, social media, email) ensures consistent lead flow, while our CRM integration and automated nurturing maximize conversion rates and ROI."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to see lead generation results?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Campaign setup takes 2-4 weeks. You'll see first qualified leads within the first month. Full momentum with consistent lead flow is typically achieved within 2-3 months as campaigns optimize and nurturing sequences mature."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What channels do you use for lead generation?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We leverage multiple high-performance channels: SEO for organic leads, Google Ads and social media PPC for immediate results, content marketing for inbound leads, email campaigns for nurturing, landing pages optimized for conversions, and LinkedIn for B2B lead generation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does professional lead generation cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our lead generation packages range from ₹25,000 to ₹70,000 per month, depending on lead volume, channels used, and campaign complexity. Basic packages deliver 100 qualified leads monthly, while premium packages generate 500+ leads with advanced nurturing and CRM integration."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is lead scoring and why does it matter?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Lead scoring is a data-driven ranking system that assigns points to leads based on their behavior, demographics, and engagement. It helps your sales team prioritize high-value prospects most likely to convert, improving efficiency and boosting conversion rates by 30-40%."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does lead nurturing work in your campaigns?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We use automated email sequences and personalized content to guide leads through the buyer journey. Leads receive targeted messages based on their behavior, gradually building trust and education until they're sales-ready. This typically increases conversion rates by 50%."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide B2B and B2C lead generation?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! We specialize in both B2B lead generation using LinkedIn, industry-specific content, and targeted outreach, and B2C lead generation through social media, search ads, and consumer-focused campaigns. Each strategy is tailored to your specific audience."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you measure lead generation success?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We track comprehensive KPIs: total leads generated, lead quality score, conversion rate, cost per lead (CPL), customer acquisition cost (CAC), and revenue attribution. You receive detailed monthly reports showing campaign performance, lead source breakdown, and ROI."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can lead generation help my local business in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! We excel at local lead generation for Mumbai businesses. Using geo-targeted ads, local SEO, Google My Business optimization, and location-specific landing pages, we attract qualified local customers actively searching for your services in Mumbai and surrounding areas."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I get started with lead generation services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Getting started is simple! Call us at +91-83695-11877 or fill out our contact form. We'll conduct a free lead generation audit, analyze your target audience, and create a customized strategy for your business. We'll explain our process, pricing, and expected results before you commit."
                    }
                  }
                ]
              },
              {
                "@type": "ItemList",
                "name": "Lead Generation Services",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Inbound Marketing"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Paid Advertising"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Landing Page Design"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Email Campaigns"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Lead Scoring"
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Lead Follow-up"
                  }
                ]
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Priya Sharma"
                },
                "datePublished": "2024-01-20",
                "reviewBody": "MyDigital Crown's lead generation services transformed our business. We went from sporadic inquiries to 200+ qualified leads monthly. Their multi-channel approach and lead scoring helped us close 35% of leads vs. our previous 8%. Exceptional ROI and professional team!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "HowTo",
                "name": "How Our Lead Generation Process Works",
                "description": "Step-by-step guide to our professional lead generation methodology",
                "totalTime": "P2M",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "INR",
                  "value": "25000-70000"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Target Audience Analysis",
                    "text": "We conduct comprehensive research to define your ideal customer profile (ICP), including demographics, pain points, buying behavior, and budget capacity. This ensures we attract only qualified prospects.",
                    "url": "https://mydigitalcrown.in/services/lead-generation#analysis"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Multi-Channel Strategy Development",
                    "text": "We design a customized lead generation roadmap combining the most effective channels for your industry - SEO, PPC, social media ads, content marketing, and email campaigns.",
                    "url": "https://mydigitalcrown.in/services/lead-generation#strategy"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Landing Page Creation",
                    "text": "We build high-converting landing pages optimized for your target keywords and audience. Each page features compelling copy, clear CTAs, and trust signals to maximize conversion rates.",
                    "url": "https://mydigitalcrown.in/services/lead-generation#landing-pages"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Campaign Launch & Traffic Generation",
                    "text": "We launch targeted campaigns across selected channels, driving qualified traffic to your landing pages through SEO, paid ads, social media, and content distribution.",
                    "url": "https://mydigitalcrown.in/services/lead-generation#campaigns"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Lead Capture & Verification",
                    "text": "Visitors submit their information through optimized forms. We verify lead quality using email validation and data enrichment to eliminate fake submissions and ensure accuracy.",
                    "url": "https://mydigitalcrown.in/services/lead-generation#capture"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Lead Scoring & Qualification",
                    "text": "We assign scores to leads based on demographics and behavior. High-scoring leads matching your ICP are prioritized for immediate sales follow-up.",
                    "url": "https://mydigitalcrown.in/services/lead-generation#scoring"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Automated Nurturing",
                    "text": "Leads enter automated email sequences that educate, build trust, and guide them through the buyer journey until they're ready to purchase.",
                    "url": "https://mydigitalcrown.in/services/lead-generation#nurturing"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 8,
                    "name": "Performance Tracking & Optimization",
                    "text": "We continuously monitor campaign metrics - conversion rates, cost per lead, lead quality - and optimize targeting, messaging, and channels to improve ROI.",
                    "url": "https://mydigitalcrown.in/services/lead-generation#optimization"
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": "Lead Generation Company In Mumbai - Professional Lead Gen Services",
                "description": "Comprehensive guide to lead generation services in Mumbai. Learn about multi-channel strategies, lead scoring, and how to generate qualified leads that convert.",
                "author": {
                  "@type": "Person",
                  "name": "Aditya Pandey"
                },
                "publisher": {
                  "@id": "https://mydigitalcrown.in/#organization"
                },
                "datePublished": "2024-01-20",
                "dateModified": "2024-01-20"
              },
              {
                "@type": "LocalBusiness",
                "name": "MyDigital Crown - Lead Generation Services Mumbai",
                "image": "https://mydigitalcrown.in/logo.png",
                "@id": "https://mydigitalcrown.in/services/lead-generation",
                "url": "https://mydigitalcrown.in/services/lead-generation",
                "telephone": "+91-83695-11877",
                "priceRange": "₹₹",
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
                  "longitude": 72.8992
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "10:00",
                  "closes": "19:00"
                },
                "sameAs": [
                  "https://www.facebook.com/mydigitalcrown",
                  "https://twitter.com/mydigitalcrown",
                  "https://www.linkedin.com/company/mydigitalcrown"
                ]
              },
              {
                "@type": "VideoObject",
                "name": "Lead Generation Strategies for 2024",
                "description": "Learn professional lead generation techniques that work in 2024. Multi-channel strategies, lead scoring, and conversion optimization explained.",
                "thumbnailUrl": "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400",
                "uploadDate": "2024-01-20",
                "duration": "PT15M00S",
                "contentUrl": "https://mydigitalcrown.in/videos/lead-generation-guide"
              },
              {
                "@type": "Course",
                "name": "Professional Lead Generation Masterclass",
                "description": "Complete training on lead generation strategies, multi-channel campaigns, lead scoring, and conversion optimization for sustainable business growth.",
                "provider": {
                  "@id": "https://mydigitalcrown.in/#organization"
                }
              },
              {
                "@type": "SpecialAnnouncement",
                "name": "Lead Generation Package Offer",
                "text": "Get 20% off on our premium lead generation packages for new clients. Generate 500+ qualified leads monthly at discounted rates. Limited time offer!",
                "datePosted": "2024-01-20",
                "expires": "2024-03-31"
              },
              {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "94",
                "bestRating": "5",
                "worstRating": "1"
              },
              {
                "@type": "Offer",
                "name": "Lead Generation Services Packages",
                "description": "Professional lead generation services starting from ₹25,000/month. Choose from Basic, Advanced, or Premium packages.",
                "priceCurrency": "INR",
                "price": "25000",
                "priceValidUntil": "2024-12-31",
                "availability": "https://schema.org/InStock",
                "url": "https://mydigitalcrown.in/services/lead-generation",
                "seller": {
                  "@id": "https://mydigitalcrown.in/#organization"
                }
              }
            ]
          })
        }}
      />

      {/* Noscript Fallback */}
      <noscript>
        <div style={{ padding: '40px', backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif' }}>
          <h2 style={{ color: '#2D4BB5', marginBottom: '20px' }}>Lead Generation Company In Mumbai - MyDigital Crown</h2>
          
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#333' }}>Our Lead Generation Services:</h3>
            <ul style={{ lineHeight: '1.8', color: '#555' }}>
              <li>Inbound Marketing - Content and SEO lead generation</li>
              <li>Paid Advertising - Google Ads and social media campaigns</li>
              <li>Landing Page Design - High-converting page creation</li>
              <li>Email Campaigns - Automated nurturing sequences</li>
              <li>Lead Scoring - Data-driven qualification system</li>
              <li>Lead Follow-up - Timely engagement automation</li>
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#333' }}>Contact MyDigital Crown:</h3>
            <p style={{ lineHeight: '1.8', color: '#555' }}>
              <strong>Phone:</strong> +91-83695-11877<br />
              <strong>Email:</strong> info@mydigitalcrown.in<br />
              <strong>Location:</strong> Chembur, Mumbai, Maharashtra - 400071
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#333' }}>Why Choose Us:</h3>
            <ul style={{ lineHeight: '1.8', color: '#555' }}>
              <li>5000+ Qualified Leads Generated</li>
              <li>35% Average Conversion Rate</li>
              <li>₹50L+ Revenue Generated for Clients</li>
              <li>Multi-Channel Expertise</li>
              <li>Advanced Lead Scoring & Nurturing</li>
              <li>Affordable Packages from ₹25,000/month</li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#333' }}>Our Results:</h3>
            <p style={{ lineHeight: '1.8', color: '#555' }}>
              Professional lead generation services that deliver measurable results. Campaign setup in 2-4 weeks, 
              first qualified leads within the first month, full momentum achieved in 2-3 months. We focus on 
              quality over quantity, using advanced targeting and scoring to maximize conversion rates and ROI.
            </p>
          </div>
        </div>
      </noscript>

      <Footer />
    </>
  )
}
