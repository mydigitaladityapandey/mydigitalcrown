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
  title: 'Graphic Designer In Mumbai | #1 Graphic Design Agency | MyDigital Crown',
  description: 'Top Graphic Designer in Mumbai. Expert logo design, branding, social media graphics, packaging design. 1000+ designs created. Call +91-83695-11877',
  keywords: [
    'graphic designer in mumbai',
    'graphic design services mumbai',
    'logo designer mumbai',
    'brand identity designer mumbai',
    'professional graphic designer mumbai',
    'creative graphic designer mumbai',
    'logo design mumbai',
    'branding design mumbai',
    'social media graphics designer mumbai',
    'packaging design mumbai',
    'business card designer mumbai',
    'brochure designer mumbai',
    'poster designer mumbai',
    'flyer designer mumbai',
    'marketing materials designer mumbai',
    'digital illustration mumbai',
    'infographic designer mumbai',
    'icon designer mumbai',
    'freelance graphic designer mumbai',
    'affordable graphic designer mumbai',
    'best graphic designer mumbai',
    'graphic design agency mumbai',
    'graphic design company mumbai',
    'creative design studio mumbai',
    'visual designer mumbai',
    'corporate identity designer mumbai',
    'brand logo designer mumbai',
    'graphic design services chembur',
    'print design mumbai',
    'advertisement design mumbai',
    'catalogue designer mumbai',
    'banner designer mumbai',
    'signage designer mumbai',
    'stationery designer mumbai',
    'graphic design portfolio mumbai',
    'experienced graphic designer mumbai'
  ],
  authors: [{ name: 'Aditya Pandey', url: 'https://mydigitalcrown.in/about' }],
  creator: 'MyDigital Crown',
  publisher: 'MyDigital Crown',
  category: 'Graphic Design Services',
  classification: 'Creative Design & Visual Branding',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mydigitalcrown.in'),
  alternates: {
    canonical: '/services/graphic-design',
  },
  openGraph: {
    title: 'Graphic Designer In Mumbai | Expert Logo & Branding Design',
    description: 'Mumbai\'s leading graphic designer creating stunning logos, brand identities, and marketing materials. 1000+ designs, 150 happy clients. Fast delivery.',
    url: 'https://mydigitalcrown.in/services/graphic-design',
    siteName: 'MyDigital Crown',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://mydigitalcrown.in/images/graphic-design-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Graphic Designer In Mumbai - MyDigital Crown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graphic Designer In Mumbai | Expert Logo & Branding Design',
    description: 'Mumbai\'s leading graphic designer creating stunning logos, brand identities, and marketing materials. 1000+ designs created.',
    images: ['https://mydigitalcrown.in/images/graphic-design-twitter.jpg'],
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
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function GraphicDesignPage() {
  // Comprehensive Schema Markup for SEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization Schema
      {
        '@type': 'Organization',
        '@id': 'https://mydigitalcrown.in/#organization',
        name: 'MyDigital Crown - Graphic Designer In Mumbai',
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
        '@id': 'https://mydigitalcrown.in/services/graphic-design#service',
        serviceType: 'Graphic Design Services',
        name: 'Graphic Designer In Mumbai',
        description: 'Professional graphic design services including logo design, brand identity, social media graphics, packaging design, marketing materials, and illustrations for businesses in Mumbai.',
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
          name: 'Graphic Design Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Logo Design',
                description: 'Custom logo design with unlimited revisions for brand identity.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Brand Identity',
                description: 'Complete brand identity packages with logo, colors, typography, and guidelines.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Social Media Graphics',
                description: 'Eye-catching social media posts, covers, and story graphics.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Marketing Materials',
                description: 'Brochures, flyers, business cards, and print collateral design.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Packaging Design',
                description: 'Product packaging and label design for retail products.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Illustration & Infographics',
                description: 'Custom illustrations, icons, and infographic design.',
              },
            },
          ],
        },
      },
      // LocalBusiness Schema
      {
        '@type': 'LocalBusiness',
        '@id': 'https://mydigitalcrown.in/services/graphic-design#localbusiness',
        name: 'MyDigital Crown - Graphic Designer In Mumbai',
        image: 'https://mydigitalcrown.in/images/graphic-design-mumbai.jpg',
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
        priceRange: '₹',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '150',
          bestRating: '5',
          worstRating: '1',
        },
      },
      // FAQPage Schema
      {
        '@type': 'FAQPage',
        '@id': 'https://mydigitalcrown.in/services/graphic-design#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What graphic design services do you offer in Mumbai?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We offer comprehensive graphic design services including logo design with unlimited revisions, complete brand identity packages (logo, colors, typography, guidelines), social media graphics (posts, covers, stories), marketing materials (brochures, flyers, business cards, banners), packaging and label design, infographics and data visualization, custom illustrations and icons, presentation design, website graphics, and print design. Our designs are crafted for both digital and print mediums.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why choose our graphic design services in Mumbai?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We are Mumbai\'s trusted design partner with 1000+ designs created, 150+ happy clients, and a 98% client satisfaction rate. Our team uses industry-leading tools (Adobe Creative Suite, Figma, Sketch), delivers designs within 24-48 hours, offers unlimited revisions until you\'re satisfied, and provides print-ready files in all formats. We combine creative excellence with Mumbai-specific market insights for designs that truly resonate.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to complete a graphic design project?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Timeline varies by project complexity: Logo design takes 2-3 business days (including revisions). Social media graphics are delivered within 24-48 hours. Complete brand identity packages require 1-2 weeks. Marketing materials (brochures, flyers) take 3-5 business days. Packaging design projects need 1-2 weeks. Rush delivery is available for urgent projects at an additional cost.',
            },
          },
          {
            '@type': 'Question',
            name: 'What design tools and software do you use?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We use industry-standard professional tools: Adobe Illustrator for vector graphics and logos, Adobe Photoshop for image editing and digital designs, Adobe InDesign for print layouts and brochures, Figma for UI/UX and collaborative design, Sketch for interface design, CorelDRAW for technical illustrations, and Canva for quick social media assets. All final files are delivered in multiple formats (AI, PSD, PDF, PNG, JPG, SVG).',
            },
          },
          {
            '@type': 'Question',
            name: 'How much do your graphic design services cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our design pricing is transparent and affordable: Logo design starts at ₹5,000 (3 concepts, unlimited revisions). Social media graphics at ₹500-1,500 per post. Business cards from ₹2,000. Brochures and flyers from ₹3,000-8,000. Complete brand identity packages from ₹15,000-50,000. Monthly retainer packages available from ₹10,000/month for ongoing design needs. We provide detailed quotes after understanding your requirements.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer unlimited revisions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! We offer unlimited revisions on all design projects until you are 100% satisfied. However, revisions must be based on the original design brief. Major changes to the project scope (like completely different design direction or adding new deliverables) may require additional cost. Our goal is your complete satisfaction, and we work closely with you through multiple rounds of feedback to achieve the perfect design.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you design for both print and digital platforms?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely! We design for all mediums. For print, we provide high-resolution files (300 DPI minimum) in CMYK color mode with proper bleed and trim marks, ready for commercial printing. For digital use, we create optimized files in RGB color mode with appropriate dimensions for websites, social media, emails, and digital ads. We understand the technical requirements of both mediums and ensure your designs look perfect wherever they are used.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is included in your social media graphics service?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our social media graphics service includes custom-designed posts optimized for Instagram, Facebook, LinkedIn, Twitter, cover photos and banners for all platforms, Instagram Story graphics with engaging templates, carousel posts and multi-slide designs, promotional graphics for campaigns and offers, quote graphics with branded templates, event announcement graphics, and on-brand templates you can reuse. All designs are sized correctly for each platform and delivered in both PNG and JPG formats.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you create a complete brand identity package?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Our comprehensive brand identity packages include a unique logo design with variations (full color, black & white, icon version), defined color palette with RGB/CMYK/HEX codes, typography selection with font pairings, brand style guide document, business card design, letterhead and envelope design, social media profile templates, email signature design, and brand pattern/texture elements. This ensures consistent branding across all touchpoints.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is your design process and how do we get started?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our 5-step design process: 1) Consultation - We discuss your vision, target audience, competitors, and preferences. 2) Research - We analyze your industry, competitors, and design trends. 3) Concepts - We create 2-3 initial design concepts based on the brief. 4) Revisions - You provide feedback and we refine the chosen design with unlimited revisions. 5) Delivery - Final files delivered in all required formats with source files. To get started, simply contact us with your project details and we\'ll schedule a consultation call.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide the source files after project completion?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Upon project completion and final payment, you receive complete ownership with all source files including AI (Adobe Illustrator), PSD (Photoshop), InDesign files, high-resolution PNG and JPG exports, vector files (SVG, EPS), and PDF files for print. You also get different logo variations (color, black/white, transparent) and a usage guide. All files are organized and delivered via cloud storage link for easy download.',
            },
          },
        ],
      },
      // BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://mydigitalcrown.in/services/graphic-design#breadcrumb',
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
              '@id': 'https://mydigitalcrown.in/services/graphic-design',
              name: 'Graphic Designer In Mumbai',
            },
          },
        ],
      },
      // WebPage Schema
      {
        '@type': 'WebPage',
        '@id': 'https://mydigitalcrown.in/services/graphic-design#webpage',
        url: 'https://mydigitalcrown.in/services/graphic-design',
        name: 'Graphic Designer In Mumbai | #1 Graphic Design Agency',
        description: 'Top Graphic Designer in Mumbai. Expert logo design, branding, social media graphics, packaging design. 1000+ designs created.',
        publisher: {
          '@id': 'https://mydigitalcrown.in/#organization',
        },
        breadcrumb: {
          '@id': 'https://mydigitalcrown.in/services/graphic-design#breadcrumb',
        },
      },
      // Review Schema 1
      {
        '@type': 'Review',
        '@id': 'https://mydigitalcrown.in/services/graphic-design#review1',
        itemReviewed: {
          '@type': 'Service',
          name: 'Graphic Design Services',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Mumbai Restaurant Owner',
        },
        reviewBody: 'Outstanding graphic design work! MyDigital Crown created a stunning logo and complete brand identity for our restaurant. The designs perfectly captured our vision, and the social media graphics they made have dramatically increased our engagement. Fast delivery, unlimited revisions, very professional!',
      },
      // Review Schema 2
      {
        '@type': 'Review',
        '@id': 'https://mydigitalcrown.in/services/graphic-design#review2',
        itemReviewed: {
          '@type': 'Service',
          name: 'Graphic Design Services',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Mumbai Fashion Brand Founder',
        },
        reviewBody: 'Best graphic designer in Mumbai! They designed beautiful packaging for our fashion brand that stands out on retail shelves. The team is creative, responsive, and delivers on time. Their pricing is also very reasonable. Highly recommended for any design needs!',
      },
      // HowTo Schema
      {
        '@type': 'HowTo',
        '@id': 'https://mydigitalcrown.in/services/graphic-design#howto',
        name: 'How Our Graphic Design Process Works',
        description: 'Step-by-step graphic design process for Mumbai businesses',
        totalTime: 'P7D',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'INR',
          value: '8000',
        },
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Consultation & Brief',
            text: 'Discuss your project requirements, target audience, design preferences, and competitors. Define project scope and deliverables. Timeline: 1 day.',
            url: 'https://mydigitalcrown.in/services/graphic-design#consultation',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Research & Inspiration',
            text: 'Research your industry, analyze competitors, gather design inspiration, and create mood boards. Timeline: 1 day.',
            url: 'https://mydigitalcrown.in/services/graphic-design#research',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Concept Development',
            text: 'Create 2-3 initial design concepts based on the brief, exploring different styles and directions. Timeline: 2 days.',
            url: 'https://mydigitalcrown.in/services/graphic-design#concepts',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Feedback & Revisions',
            text: 'Present concepts for your review, gather feedback, and refine the chosen design with unlimited revisions until perfect. Timeline: 2-3 days.',
            url: 'https://mydigitalcrown.in/services/graphic-design#revisions',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Finalization & Delivery',
            text: 'Finalize design, prepare files in all required formats (AI, PDF, PNG, JPG, SVG), deliver with source files and usage guide. Timeline: 1 day.',
            url: 'https://mydigitalcrown.in/services/graphic-design#delivery',
          },
        ],
      },
      // Article Schema
      {
        '@type': 'Article',
        '@id': 'https://mydigitalcrown.in/services/graphic-design#article',
        headline: 'Graphic Designer In Mumbai | Complete Design Guide 2025',
        description: 'Comprehensive guide to graphic design services in Mumbai including logo design, branding, social media graphics, and marketing materials.',
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
        '@id': 'https://mydigitalcrown.in/services/graphic-design#itemlist',
        name: 'Graphic Design Service Offerings',
        description: 'Comprehensive graphic design services offered in Mumbai',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Logo Design',
            description: 'Custom logo design with unlimited revisions for brand identity',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Brand Identity',
            description: 'Complete brand identity packages with logo, colors, typography',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Social Media Graphics',
            description: 'Eye-catching social media posts, covers, and story graphics',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Marketing Materials',
            description: 'Brochures, flyers, business cards, and print collateral',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Packaging Design',
            description: 'Product packaging and label design for retail products',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Illustrations',
            description: 'Custom illustrations, icons, and infographic design',
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
        aria-label="Graphic Design Services Mumbai Hero Section"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Mumbai&apos;s Creative Design Studio</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-center">
                Graphic Designer In Mumbai - MyDigital Crown
              </h1>
              
              {/* Tagline */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-white mb-6 max-w-4xl mx-auto text-center font-bold leading-relaxed">
                  🎨 Create <span className="text-yellow-300">Stunning Visuals</span>, <span className="text-green-300">Memorable Brands</span> & <span className="text-orange-300">Engaging Designs</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center font-semibold leading-relaxed">
                  Logo Design | Branding | Marketing Materials | Social Media Graphics
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
                    <span>Start Your Design</span>
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
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">1000+</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Designs Created</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">150</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Happy Clients</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">48hr</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Fast Delivery</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text mb-3">100%</div>
                    <div className="text-white text-base font-bold uppercase tracking-wider">Satisfaction</div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">⚡</span>
              Quick Answers for Voice Search
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Looking for a <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Graphic Designer?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get instant answers to your most common questions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Where Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Where can I find you?</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-blue-400">MyDigital Crown</strong> is located in <strong className="text-green-400">Chembur, Mumbai, Maharashtra</strong>. We serve clients across Mumbai and all over India with our professional graphic design services.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Office:</strong> Chembur, Mumbai - 400071<br />
                  <strong className="text-white">Phone:</strong> <a href="tel:+918369511877" className="text-blue-400 hover:text-blue-300">+91-83695-11877</a>
                </p>
              </div>
            </div>

            {/* How Much Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">How much does it cost?</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our graphic design services start from <strong className="text-green-400">₹2,000 to ₹25,000+</strong> depending on project complexity and deliverables.
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">Logo Design:</strong> ₹5,000 - ₹15,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong className="text-white">Branding Package:</strong> ₹15,000 - ₹50,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span><strong className="text-white">Social Media Graphics:</strong> ₹2,000 - ₹10,000/month</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  Includes multiple concepts, unlimited revisions, and source files
                </p>
              </div>
            </div>

            {/* When Card */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">⏱️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">When will I get my designs?</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                We deliver initial design concepts within <strong className="text-orange-400">24-48 hours</strong> for most projects. Final designs ready in <strong className="text-green-400">3-7 days</strong> depending on complexity.
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong className="text-white">Fast Turnaround:</strong> 48-hour delivery available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span><strong className="text-white">Quality Assured:</strong> 1000+ designs created</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span><strong className="text-white">Satisfaction:</strong> 100% client satisfaction</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  Rush delivery available for urgent projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Graphic Design Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🎨</span>
              Graphic Design Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Graphic Design</span> Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your brand with stunning visual designs that tell your story and engage your audience
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-2 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop" 
                    alt="Graphic Design Services Mumbai"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">✨ Creative Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Award-winning designers who bring fresh perspectives and innovative ideas to every project. Stand out from the competition.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Brand Consistency</h3>
                <p className="text-gray-700 leading-relaxed">
                  Maintain a cohesive visual identity across all touchpoints. Every design aligns with your brand guidelines and values.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Fast Turnaround</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quick delivery without compromising quality. Unlimited revisions until you&apos;re 100% satisfied with the final design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graphic Design Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Design <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive graphic design solutions for all your visual needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎨</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Logo Design</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Unique, memorable logos that represent your brand identity. Modern designs that work across all platforms and sizes.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Custom Logo Concepts</li>
                  <li className="flex items-start gap-2">✓ Multiple Variations</li>
                  <li className="flex items-start gap-2">✓ Vector Files Included</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🏷️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Brand Identity</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Complete branding packages including logos, color palettes, typography, and brand guidelines for consistency.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Brand Strategy</li>
                  <li className="flex items-start gap-2">✓ Visual Guidelines</li>
                  <li className="flex items-start gap-2">✓ Brand Assets</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📱</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Social Media Graphics</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Eye-catching social media posts, stories, and covers designed to boost engagement and drive interactions.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Post Designs</li>
                  <li className="flex items-start gap-2">✓ Story Templates</li>
                  <li className="flex items-start gap-2">✓ Cover Images</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📄</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Marketing Materials</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Brochures, flyers, business cards, and promotional materials that leave lasting impressions on your audience.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Brochure Design</li>
                  <li className="flex items-start gap-2">✓ Business Cards</li>
                  <li className="flex items-start gap-2">✓ Print Materials</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🖼️</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Digital Illustrations</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Custom illustrations, icons, and infographics that simplify complex ideas and enhance visual storytelling.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Custom Illustrations</li>
                  <li className="flex items-start gap-2">✓ Icon Sets</li>
                  <li className="flex items-start gap-2">✓ Infographics</li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">📦</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Packaging Design</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Product packaging that stands out on shelves and creates memorable unboxing experiences for customers.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">✓ Product Packaging</li>
                  <li className="flex items-start gap-2">✓ Label Design</li>
                  <li className="flex items-start gap-2">✓ Box Design</li>
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
              <span className="text-yellow-300">Stunning Visuals?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s bring your brand to life with designs that captivate, engage, and convert!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="group inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="mr-3">Get Free Design Quote</span>
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
                <span>Unlimited Revisions</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Professional Designers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 1: Understanding Graphic Design */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">📚</span>
              Understanding Graphic Design
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              The Power of <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Visual Communication</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how professional graphic design transforms brands and drives business success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">What is Graphic Design?</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Graphic design is the <strong className="text-blue-400">art and practice of visual communication</strong>. It combines typography, imagery, color, and layout to convey messages, evoke emotions, and inspire action. From <strong className="text-green-400">logos that define brands</strong> to marketing materials that drive sales, graphic design is everywhere. In Mumbai&apos;s competitive market, professional design isn&apos;t optional - it&apos;s essential for <strong className="text-yellow-400">standing out and building trust</strong> with your audience.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Why Design Matters</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                First impressions form in <strong className="text-green-400">0.05 seconds</strong>, and 94% of those impressions are design-related. Good design builds <strong className="text-blue-400">credibility and trust</strong> - people judge your business by how it looks. Professional graphic design increases brand recognition by <strong className="text-yellow-400">80%, boosts revenue by 33%, and improves customer retention</strong>. For Mumbai businesses, investing in design means investing in growth, reputation, and competitive advantage.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Design ROI</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Every rupee invested in design returns <strong className="text-purple-400">₹4-10 in revenue</strong>. Professional branding increases perceived value, allowing Mumbai businesses to charge <strong className="text-green-400">premium prices</strong>. Consistent design across all touchpoints improves <strong className="text-blue-400">brand recall by 3.5 times</strong>. Good packaging design can increase sales by 30%. Social media posts with professional graphics get <strong className="text-yellow-400">94% more views and 120% more engagement</strong>. Design isn&apos;t an expense - it&apos;s an investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2: Design Specializations */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">⚡</span>
              Our Design Specializations
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Expert Design <span className="bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive graphic design solutions for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🏷️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Logo & Brand Identity</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your logo is your <strong className="text-orange-400">brand&apos;s face</strong>. We create memorable, versatile logos that work across all mediums. Our branding packages include <strong className="text-blue-400">logo design, color palette, typography, brand guidelines, and visual assets</strong>. We design for scalability - from business cards to billboards. Mumbai businesses trust us for <strong className="text-green-400">authentic, culturally-relevant branding</strong> that resonates with local and global audiences.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Social Media Graphics</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Social media is <strong className="text-blue-400">visual-first</strong>. We design eye-catching posts, stories, covers, and reels for Instagram, Facebook, LinkedIn, and Twitter. Each design is <strong className="text-green-400">optimized for platform dimensions and algorithms</strong>. We create templates for consistency and custom graphics for campaigns. Our Mumbai clients see <strong className="text-yellow-400">3x higher engagement, more followers, and increased website traffic</strong> with professional social media graphics.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📄</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Print Design</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Print design requires <strong className="text-green-400">precision and expertise</strong>. We create print-ready files with proper bleed, resolution (300 DPI), and CMYK colors. From <strong className="text-blue-400">business cards and brochures to banners and packaging</strong>, we handle technical requirements and work with Mumbai&apos;s best printers. We design materials that look professional, convey your message clearly, and <strong className="text-yellow-400">leave lasting impressions</strong> on clients and partners.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Digital Illustrations</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Custom illustrations make your brand <strong className="text-purple-400">unique and memorable</strong>. We create illustrations, icons, infographics, and vector graphics that simplify complex ideas and enhance visual storytelling. Our <strong className="text-blue-400">Mumbai-based illustrators</strong> work in various styles - flat, 3D, hand-drawn, minimalist. Illustrations are perfect for <strong className="text-green-400">explainer videos, presentations, websites, and marketing materials</strong> that need a distinctive visual identity.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📦</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Packaging Design</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Packaging is your <strong className="text-cyan-400">silent salesperson</strong>. We design product packaging that stands out on shelves, communicates brand values, and creates <strong className="text-blue-400">memorable unboxing experiences</strong>. Our designs consider materials, printing techniques, and sustainability. We work with Mumbai manufacturers for <strong className="text-green-400">prototyping and production</strong>. Great packaging increases perceived value, justifies premium pricing, and turns customers into brand advocates through shareworthy moments.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Marketing Materials</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Effective marketing requires <strong className="text-yellow-400">compelling visuals</strong>. We design flyers, posters, banners, catalogues, and presentations that grab attention and drive action. Each design follows <strong className="text-blue-400">proven marketing principles</strong> - clear hierarchy, strong CTAs, benefit-focused messaging. Our Mumbai team creates materials for <strong className="text-green-400">events, trade shows, retail displays, and digital campaigns</strong> that convert viewers into customers and deliver measurable ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 3: Design Process */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🛠️</span>
              Our Design Process
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              How We Create <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">Stunning Designs</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven 5-step process that delivers exceptional results every time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Discovery & Brief</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We start with a <strong className="text-green-400">detailed consultation</strong> to understand your business, target audience, goals, and preferences. We ask about competitors, brand personality, and design inspiration. You share <strong className="text-blue-400">any existing brand materials, style guides, or references</strong>. This brief becomes our roadmap. The more we know, the better we design. Mumbai clients appreciate our <strong className="text-yellow-400">thorough discovery process</strong> that prevents revisions and ensures alignment from day one.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Research & Strategy</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We research your <strong className="text-blue-400">industry, competitors, and target market</strong>. What design trends work in your sector? What do Mumbai customers respond to? We analyze successful brands and identify opportunities for differentiation. We develop a <strong className="text-green-400">design strategy</strong> that aligns with your business objectives. This research phase ensures our designs aren&apos;t just beautiful - they&apos;re <strong className="text-yellow-400">strategically positioned to achieve your goals</strong> and outperform competition.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Concept Development</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our designers create <strong className="text-purple-400">2-3 unique design concepts</strong> exploring different creative directions. Each concept is fully developed, not rough sketches. We present designs with <strong className="text-blue-400">rationale explaining our choices</strong> - why specific colors, fonts, imagery. You see variety and make informed decisions. This is where <strong className="text-green-400">creativity meets strategy</strong>. Most Mumbai clients select one concept to refine, though we can combine elements from multiple directions.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">4. Feedback & Revisions</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your feedback shapes the final design. We offer <strong className="text-orange-400">unlimited revisions</strong> until you&apos;re 100% satisfied. We refine colors, adjust layouts, tweak typography based on your inputs. We encourage <strong className="text-blue-400">specific, constructive feedback</strong> rather than subjective opinions. Most projects require 2-3 revision rounds. We maintain open communication throughout, providing updates and ensuring Mumbai clients are involved in the creative journey every step of the way.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">5. Final Delivery</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We deliver <strong className="text-cyan-400">all file formats</strong> you&apos;ll need - AI, PSD, PDF, PNG, JPG, SVG. You receive <strong className="text-blue-400">vector source files for scalability</strong>, high-resolution files for print, and web-optimized files for digital use. We provide usage guidelines and technical specifications. For branding projects, you get a <strong className="text-green-400">complete brand book</strong>. We offer post-delivery support for implementation questions. Your designs are 100% yours - full ownership and unlimited usage rights.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ongoing Support</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our relationship doesn&apos;t end at delivery. We offer <strong className="text-pink-400">ongoing design support</strong> for updates, new materials, and seasonal campaigns. Many Mumbai clients work with us long-term for <strong className="text-blue-400">monthly retainers or project-based work</strong>. We become your <strong className="text-green-400">extended design team</strong>, understanding your brand deeply and maintaining consistency across all communications. Our goal is partnership, not transactions - your success is our success.
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
              Mumbai&apos;s most trusted graphic design partner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Award-Winning Designers</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our <strong className="text-purple-400">talented design team</strong> brings years of experience and creative excellence to every project. We&apos;ve won industry awards and client accolades for our work. Our designers stay updated with <strong className="text-blue-400">global design trends, tools, and techniques</strong>. We combine artistic vision with business understanding to create designs that are both beautiful and effective. Mumbai businesses trust our <strong className="text-green-400">proven track record of 1000+ successful projects</strong>.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Fast Turnaround</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Time is money in business. We deliver <strong className="text-blue-400">initial concepts within 24-48 hours</strong> and final designs in 3-7 days. Our streamlined process, experienced team, and efficient workflows enable <strong className="text-green-400">fast delivery without quality compromise</strong>. Need rush delivery? We offer <strong className="text-yellow-400">same-day and overnight options</strong> for urgent projects. Mumbai clients appreciate our responsiveness and ability to meet tight deadlines consistently.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Affordable Pricing</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Professional design shouldn&apos;t break the bank. Our <strong className="text-green-400">competitive Mumbai pricing</strong> makes quality design accessible to startups and SMEs. We offer transparent quotes with no hidden costs. Packages start from ₹2,000 with <strong className="text-blue-400">payment plans available for larger projects</strong>. You get premium quality at fair prices because we believe every business deserves <strong className="text-yellow-400">professional branding regardless of budget</strong>.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Unlimited Revisions</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your satisfaction is guaranteed. We offer <strong className="text-orange-400">unlimited revisions</strong> on all projects until you love the final design. No restrictions, no additional charges. We refine based on your feedback, however many rounds it takes. This commitment to <strong className="text-blue-400">perfection and client happiness</strong> has earned us <strong className="text-green-400">100% client satisfaction</strong> and countless referrals from Mumbai businesses who became brand advocates.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Strategic Approach</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We don&apos;t just make things pretty - we <strong className="text-cyan-400">solve business problems through design</strong>. Every design decision is strategic, backed by research and aligned with your goals. We understand marketing, branding, and consumer psychology. Our designs <strong className="text-blue-400">communicate messages clearly, evoke desired emotions, and drive specific actions</strong>. Mumbai businesses see <strong className="text-green-400">measurable results</strong> - increased sales, better brand perception, higher engagement.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Collaborative Partnership</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We treat your business like our own. <strong className="text-pink-400">Open communication, regular updates, and collaborative approach</strong> define our working style. You&apos;re involved throughout the process, not surprised at the end. We listen to your ideas, provide expert guidance, and <strong className="text-blue-400">combine your vision with our expertise</strong>. Many Mumbai clients become long-term partners, returning for new projects and referring others because working with us is <strong className="text-green-400">easy, professional, and rewarding</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 5: Mumbai Design Leadership */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">🌆</span>
              Mumbai Design Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">Mumbai&apos;s</span> Graphic Design Experts
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leading the creative revolution in India&apos;s financial capital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Local Expertise</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Based in <strong className="text-yellow-400">Chembur, Mumbai</strong>, we understand the city&apos;s diverse market. We design for Mumbai&apos;s <strong className="text-blue-400">multicultural audience</strong> - from South Mumbai&apos;s luxury brands to suburban SMEs. We know what resonates with local customers while maintaining <strong className="text-green-400">global design standards</strong>. Our Mumbai roots give us insights into cultural nuances, festivals, regional preferences that make designs more effective and authentic.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🏅</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Proven Track Record</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-blue-400">1000+ designs created, 150 happy clients, 100% satisfaction rate</strong> - our numbers speak for ourselves. We&apos;ve worked with Mumbai startups that became unicorns, local shops that went national, and established brands that needed refreshes. Our portfolio showcases <strong className="text-green-400">diverse industries</strong> - tech, fashion, food, real estate, healthcare. Every project adds to our <strong className="text-yellow-400">experience and expertise</strong> in visual communication.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Growth Partner</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We grow with you. From <strong className="text-green-400">initial logo to complete brand evolution</strong>, we support Mumbai businesses at every stage. Startups appreciate our affordable entry packages. Scaling businesses rely on our <strong className="text-blue-400">consistent quality and fast turnaround</strong>. Established enterprises value our strategic insight and professionalism. We&apos;re not just designers - we&apos;re <strong className="text-yellow-400">invested partners in your success</strong>, celebrating your milestones and supporting your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Everything you need to know about our graphic design services in Mumbai
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Question 1 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-orange-500/20 hover:border-orange-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-orange-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎯</span>
                  <span>What graphic design services do you offer in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-orange-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We offer <strong className="text-orange-300">comprehensive graphic design services</strong> including logo design, brand identity creation, social media graphics, packaging design, business cards, brochures, flyers, digital illustrations, infographics, and marketing materials. Our <strong className="text-blue-300">Mumbai-based design team</strong> has created <strong className="text-green-300">1000+ designs</strong> for startups, SMEs, and large enterprises across all industries.</p>
              </div>
            </details>

            {/* Question 2 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-blue-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">✨</span>
                  <span>What makes MyDigital Crown the best graphic designer in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-blue-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Our <strong className="text-blue-300">award-winning design team</strong> brings creative excellence, fast turnaround (48-hour delivery available), and <strong className="text-green-300">100% client satisfaction</strong>. We&apos;ve served <strong className="text-yellow-300">150 happy clients</strong> with unlimited revisions, professional designers who understand Mumbai market trends, and competitive pricing. Every design aligns with your brand identity and business goals.</p>
              </div>
            </details>

            {/* Question 3 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-green-500/20 hover:border-green-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-green-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">⏱️</span>
                  <span>How long does it take to complete a graphic design project?</span>
                </span>
                <svg className="w-7 h-7 text-green-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>We deliver <strong className="text-green-300">initial design concepts within 24-48 hours</strong> for most projects. Final designs are ready in <strong className="text-blue-300">3-7 days</strong> depending on complexity. Simple projects like social media graphics can be completed in 24 hours, while comprehensive branding packages take 1-2 weeks. <strong className="text-yellow-300">Rush delivery available</strong> for urgent projects at no extra cost for existing clients.</p>
              </div>
            </details>

            {/* Question 4 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-purple-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🛠️</span>
                  <span>What design tools and software do you use?</span>
                </span>
                <svg className="w-7 h-7 text-purple-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Our Mumbai design team uses <strong className="text-purple-300">industry-standard professional tools</strong> including Adobe Photoshop, Illustrator, InDesign, Figma, CorelDRAW, and Canva Pro. We deliver designs in <strong className="text-blue-300">all file formats</strong> - AI, PSD, PDF, PNG, JPG, SVG - ensuring compatibility across print and digital platforms. You receive <strong className="text-green-300">vector source files</strong> for unlimited scalability.</p>
              </div>
            </details>

            {/* Question 5 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-pink-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">💰</span>
                  <span>How much do graphic design services cost in Mumbai?</span>
                </span>
                <svg className="w-7 h-7 text-pink-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Our pricing is <strong className="text-green-300">competitive and transparent</strong>: Logo Design ₹5,000-15,000, Complete Branding Package ₹15,000-50,000, Social Media Graphics ₹2,000-10,000/month, Business Cards ₹2,000-5,000, Brochure Design ₹3,000-10,000. All packages include <strong className="text-blue-300">multiple concepts, unlimited revisions, and source files</strong>. Contact <strong className="text-yellow-300">+91-83695-11877</strong> for a detailed quote.</p>
              </div>
            </details>

            {/* Question 6 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-cyan-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">💫</span>
                  <span>Do you offer unlimited revisions?</span>
                </span>
                <svg className="w-7 h-7 text-cyan-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Yes! We offer <strong className="text-cyan-300">unlimited revisions</strong> until you&apos;re 100% satisfied with the final design. Your feedback is valuable, and we refine designs based on your inputs. Most Mumbai clients are happy with <strong className="text-green-400">2-3 revision rounds</strong>, but we don&apos;t limit you. Our goal is to create designs that <strong className="text-yellow-300">perfectly represent your brand vision</strong> and exceed expectations.</p>
              </div>
            </details>

            {/* Question 7 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-yellow-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🎬</span>
                  <span>Can you design for both print and digital media?</span>
                </span>
                <svg className="w-7 h-7 text-yellow-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Absolutely! Our Mumbai designers are <strong className="text-yellow-300">experts in both print and digital design</strong>. We create print-ready files with CMYK colors, bleed, and high resolution (300 DPI) for business cards, brochures, and banners. For digital, we design <strong className="text-blue-300">RGB graphics optimized for web and social media</strong> platforms. Every design is <strong className="text-green-300">platform-optimized</strong> for maximum impact across all mediums.</p>
              </div>
            </details>

            {/* Question 8 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-red-500/20 hover:border-red-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-red-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">📱</span>
                  <span>Do you create social media graphics and templates?</span>
                </span>
                <svg className="w-7 h-7 text-red-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Yes! We specialize in <strong className="text-red-300">social media graphics</strong> for Instagram, Facebook, LinkedIn, Twitter, and YouTube. We create <strong className="text-blue-300">posts, stories, covers, and reusable templates</strong> that maintain brand consistency. Our Mumbai team designs <strong className="text-green-300">engaging visuals</strong> optimized for each platform&apos;s dimensions and best practices. Monthly packages available for ongoing social media design needs.</p>
              </div>
            </details>

            {/* Question 9 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 hover:border-indigo-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-indigo-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🧪</span>
                  <span>What&apos;s your design process and workflow?</span>
                </span>
                <svg className="w-7 h-7 text-indigo-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Our <strong className="text-indigo-300">streamlined 5-step process</strong>: 1) Brief Discussion - understand your requirements and brand, 2) Concept Development - create 2-3 initial design concepts, 3) Client Feedback - you review and provide inputs, 4) Revisions - refine based on feedback, 5) Final Delivery - provide all file formats and source files. We keep you <strong className="text-blue-300">updated throughout</strong> with regular communication and transparent timelines.</p>
              </div>
            </details>

            {/* Question 10 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:border-teal-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-teal-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🔄</span>
                  <span>Do you provide brand identity and guidelines?</span>
                </span>
                <svg className="w-7 h-7 text-teal-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Yes! Our <strong className="text-teal-300">complete branding packages</strong> include logo design, color palette, typography, brand guidelines document, business card designs, letterhead, email signature, and social media templates. The guidelines ensure <strong className="text-blue-300">consistent brand application</strong> across all touchpoints. Perfect for Mumbai startups and businesses looking to establish a <strong className="text-green-300">strong, cohesive brand identity</strong>.</p>
              </div>
            </details>

            {/* Question 11 */}
            <details className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-lime-500/20 hover:border-lime-300/50 hover:scale-105">
              <summary className="flex justify-between items-center cursor-pointer p-8 font-bold text-lg text-white hover:text-lime-300 transition-colors">
                <span className="flex items-start gap-4">
                  <span className="text-4xl mt-1 group-open:animate-spin">🚀</span>
                  <span>How do I get started with your graphic design services?</span>
                </span>
                <svg className="w-7 h-7 text-lime-300 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 text-blue-100 leading-relaxed border-t border-white/10 pt-6">
                <p>Getting started is easy! Simply <strong className="text-lime-300">call +91-83695-11877</strong> or fill out our contact form with your project details. We&apos;ll schedule a <strong className="text-blue-300">free consultation</strong> to discuss your requirements, timeline, and budget. Then we provide a detailed quote and project plan. Once approved, our Mumbai design team starts creating your <strong className="text-green-300">stunning visuals</strong> with concepts delivered within 24-48 hours!</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {/* Our Locations */}

      <OurLocations />


      {/* Related Services */}

      <RelatedServices 
        currentService="/services/graphic-design"
        title="Complete Creative Solutions"
        description="Enhance your graphic design with our comprehensive digital services"
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
                "serviceType": "Graphic Design Services",
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
                "description": "Professional graphic designer in Mumbai offering logo design, brand identity, social media graphics, packaging design, and all visual communication services.",
                "offers": {
                  "@type": "Offer",
                  "price": "2000",
                  "priceCurrency": "INR",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "minPrice": "2000",
                    "maxPrice": "50000",
                    "priceCurrency": "INR"
                  },
                  "availability": "https://schema.org/InStock",
                  "url": "https://mydigitalcrown.in/services/graphic-design",
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
                  "reviewCount": "150",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              {
                "@type": "WebPage",
                "name": "Graphic Designer In Mumbai | Expert Graphic Design Services",
                "url": "https://mydigitalcrown.in/services/graphic-design",
                "description": "Top Graphic Designer in Mumbai. Expert logo design, branding, social media graphics, packaging design. 1000+ designs created. Call +91-83695-11877",
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
                      "name": "Graphic Design",
                      "item": "https://mydigitalcrown.in/services/graphic-design"
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What graphic design services do you offer in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer comprehensive graphic design services including logo design, brand identity creation, social media graphics, packaging design, business cards, brochures, flyers, digital illustrations, infographics, and marketing materials. Our Mumbai-based design team has created 1000+ designs for startups, SMEs, and large enterprises."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What makes MyDigital Crown the best graphic designer in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our award-winning design team brings creative excellence, fast turnaround (48-hour delivery available), and 100% client satisfaction. We've served 150 happy clients with unlimited revisions, professional designers who understand Mumbai market trends, and competitive pricing."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to complete a graphic design project?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We deliver initial design concepts within 24-48 hours for most projects. Final designs are ready in 3-7 days depending on complexity. Simple projects like social media graphics can be completed in 24 hours, while comprehensive branding packages take 1-2 weeks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What design tools and software do you use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our Mumbai design team uses industry-standard professional tools including Adobe Photoshop, Illustrator, InDesign, Figma, CorelDRAW, and Canva Pro. We deliver designs in all file formats - AI, PSD, PDF, PNG, JPG, SVG - ensuring compatibility across print and digital platforms."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much do graphic design services cost in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our pricing is competitive and transparent: Logo Design ₹5,000-15,000, Complete Branding Package ₹15,000-50,000, Social Media Graphics ₹2,000-10,000/month, Business Cards ₹2,000-5,000, Brochure Design ₹3,000-10,000. All packages include multiple concepts, unlimited revisions, and source files."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer unlimited revisions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! We offer unlimited revisions until you're 100% satisfied with the final design. Your feedback is valuable, and we refine designs based on your inputs. Most Mumbai clients are happy with 2-3 revision rounds."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you design for both print and digital media?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! Our Mumbai designers are experts in both print and digital design. We create print-ready files with CMYK colors, bleed, and high resolution (300 DPI) for business cards, brochures, and banners. For digital, we design RGB graphics optimized for web and social media platforms."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you create social media graphics and templates?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! We specialize in social media graphics for Instagram, Facebook, LinkedIn, Twitter, and YouTube. We create posts, stories, covers, and reusable templates that maintain brand consistency. Monthly packages available for ongoing social media design needs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's your design process and workflow?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our streamlined 5-step process: 1) Brief Discussion - understand your requirements and brand, 2) Research & Strategy - analyze industry and competitors, 3) Concept Development - create 2-3 initial design concepts, 4) Feedback & Revisions - refine based on your inputs, 5) Final Delivery - provide all file formats and source files."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide brand identity and guidelines?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Our complete branding packages include logo design, color palette, typography, brand guidelines document, business card designs, letterhead, email signature, and social media templates ensuring consistent brand application across all touchpoints."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I get started with your graphic design services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Simply call +91-83695-11877 or fill out our contact form. We'll schedule a free consultation to discuss your requirements, timeline, and budget. Then we provide a detailed quote and project plan. Once approved, our Mumbai design team starts creating with concepts delivered within 24-48 hours."
                    }
                  }
                ]
              },
              {
                "@type": "ItemList",
                "name": "Graphic Design Services",
                "description": "Comprehensive graphic design services offered in Mumbai",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Logo Design",
                    "description": "Custom logo design with multiple concepts and unlimited revisions"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Brand Identity",
                    "description": "Complete branding packages including logos, color palettes, and brand guidelines"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Social Media Graphics",
                    "description": "Eye-catching posts, stories, and covers for all social platforms"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Marketing Materials",
                    "description": "Brochures, flyers, business cards, and promotional materials"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Digital Illustrations",
                    "description": "Custom illustrations, icons, and infographics"
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Packaging Design",
                    "description": "Product packaging that stands out and creates memorable experiences"
                  }
                ]
              },
              {
                "@type": "Review",
                "itemReviewed": {
                  "@type": "Service",
                  "name": "Graphic Design Services"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Mumbai Startup Founder"
                },
                "reviewBody": "MyDigital Crown created our complete brand identity from scratch. The logo perfectly captures our vision, and the brand guidelines ensure consistency across all our materials. Fast delivery, unlimited revisions, and professional service. Highly recommend!"
              },
              {
                "@type": "HowTo",
                "name": "How Our Graphic Design Process Works",
                "description": "Step-by-step process for creating professional graphic designs in Mumbai",
                "totalTime": "P7D",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "INR",
                  "value": "5000"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Discovery & Brief",
                    "text": "Detailed consultation to understand your business, target audience, goals, and design preferences. Timeline: 1 day.",
                    "url": "https://mydigitalcrown.in/services/graphic-design#discovery"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Research & Strategy",
                    "text": "Research your industry, competitors, and target market to develop a strategic design approach. Timeline: 1-2 days.",
                    "url": "https://mydigitalcrown.in/services/graphic-design#research"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Concept Development",
                    "text": "Create 2-3 unique design concepts exploring different creative directions. Timeline: 2-3 days.",
                    "url": "https://mydigitalcrown.in/services/graphic-design#concepts"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Feedback & Revisions",
                    "text": "Refine designs based on your feedback with unlimited revisions. Timeline: 2-3 days.",
                    "url": "https://mydigitalcrown.in/services/graphic-design#revisions"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Final Delivery",
                    "text": "Deliver all file formats, source files, and usage guidelines. Timeline: 1 day.",
                    "url": "https://mydigitalcrown.in/services/graphic-design#delivery"
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": "Why Graphic Design Matters for Mumbai Businesses",
                "author": {
                  "@type": "Organization",
                  "name": "MyDigital Crown"
                },
                "datePublished": "2024-01-15",
                "dateModified": "2024-01-15",
                "image": "https://mydigitalcrown.in/images/graphic-design.jpg",
                "publisher": {
                  "@type": "Organization",
                  "name": "MyDigital Crown",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://mydigitalcrown.in/logo.png"
                  }
                },
                "description": "Comprehensive guide to graphic design services in Mumbai, covering logo design, branding, social media graphics, and visual communication."
              },
              {
                "@type": "LocalBusiness",
                "name": "MyDigital Crown - Graphic Designer Mumbai",
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
                "priceRange": "₹₹",
                "openingHours": "Mo-Sa 10:00-19:00",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "150"
                }
              },
              {
                "@type": "VideoObject",
                "name": "Graphic Design Portfolio - MyDigital Crown",
                "description": "Watch our graphic design portfolio showcasing logos, branding, and visual designs for Mumbai businesses",
                "thumbnailUrl": "https://mydigitalcrown.in/images/graphic-design-video-thumb.jpg",
                "uploadDate": "2024-01-15",
                "duration": "PT2M30S",
                "contentUrl": "https://mydigitalcrown.in/videos/graphic-design-portfolio.mp4"
              },
              {
                "@type": "Course",
                "name": "Graphic Design Fundamentals",
                "description": "Learn professional graphic design principles from Mumbai's leading designers",
                "provider": {
                  "@type": "Organization",
                  "name": "MyDigital Crown"
                },
                "courseCode": "GD101",
                "hasCourseInstance": {
                  "@type": "CourseInstance",
                  "courseMode": "Online",
                  "duration": "P6W",
                  "instructor": {
                    "@type": "Person",
                    "name": "Senior Graphic Designer",
                    "jobTitle": "Lead Graphic Designer"
                  }
                }
              },
              {
                "@type": "SpecialAnnouncement",
                "name": "Free Brand Audit for Mumbai Businesses",
                "text": "Get a complimentary brand and design audit worth ₹10,000. We'll review your existing designs, identify improvement opportunities, and provide actionable recommendations. Limited to 15 businesses per month.",
                "datePosted": "2024-01-15",
                "expires": "2024-12-31",
                "category": "https://www.wikidata.org/wiki/Q186386",
                "url": "https://mydigitalcrown.in/services/graphic-design"
              },
              {
                "@type": "AggregateRating",
                "itemReviewed": {
                  "@type": "Service",
                  "name": "Graphic Design Services Mumbai"
                },
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              {
                "@type": "Offer",
                "name": "Graphic Design Package",
                "description": "Complete graphic design services for businesses in Mumbai",
                "price": "5000",
                "priceCurrency": "INR",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "minPrice": "2000",
                  "maxPrice": "50000",
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
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#1f2937' }}>Graphic Designer In Mumbai</h2>
          <p style={{ fontSize: '18px', marginBottom: '20px', color: '#4b5563' }}>
            MyDigital Crown is Mumbai&apos;s leading graphic designer creating stunning logos, brand identities, social media graphics, and all visual communication materials.
          </p>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#1f2937' }}>Our Services:</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#4b5563' }}>
              <li style={{ marginBottom: '10px' }}>✓ Logo Design - Unique, memorable logos</li>
              <li style={{ marginBottom: '10px' }}>✓ Brand Identity - Complete branding packages</li>
              <li style={{ marginBottom: '10px' }}>✓ Social Media Graphics - Engaging visual content</li>
              <li style={{ marginBottom: '10px' }}>✓ Marketing Materials - Brochures, flyers, business cards</li>
              <li style={{ marginBottom: '10px' }}>✓ Digital Illustrations - Custom artwork and icons</li>
              <li style={{ marginBottom: '10px' }}>✓ Packaging Design - Product packaging that sells</li>
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
            <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#1f2937' }}>Why Choose Us:</h3>
            <p style={{ fontSize: '18px', color: '#4b5563' }}>
              • 1000+ designs created<br />
              • 150 happy clients<br />
              • 48-hour fast delivery<br />
              • 100% client satisfaction<br />
              • Unlimited revisions<br />
              • Affordable pricing
            </p>
          </div>
        </div>
      </noscript>

      <Footer />
    </>
  )
}
