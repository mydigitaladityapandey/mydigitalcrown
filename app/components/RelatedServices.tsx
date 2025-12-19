import Link from 'next/link';

interface Service {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: '🔍',
    title: 'Search Engine Optimization',
    description: 'Dominate Google rankings with our proven SEO strategies. Get more organic traffic and qualified leads.',
    href: '/services/search-engine-optimisation',
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    description: 'Build a powerful social presence on Instagram, Facebook, LinkedIn & more. Engage & convert your audience.',
    href: '/services/social-media-marketing',
  },
  {
    icon: '💰',
    title: 'Google Ads (PPC)',
    description: 'Get instant traffic & leads with targeted Google Ads campaigns. Maximum ROI guaranteed.',
    href: '/services/google-ads',
  },
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Lightning-fast, mobile-responsive websites that convert visitors into customers. Built to perform.',
    href: '/services/web-development',
  },
  {
    icon: '🌐',
    title: 'Web Design',
    description: 'Beautiful, user-centric web designs that captivate visitors and drive conversions. Creative excellence.',
    href: '/services/web-design',
  },
  {
    icon: '🎨',
    title: 'Digital Branding',
    description: 'Stand out with powerful brand identity. Logo design, guidelines & complete visual storytelling.',
    href: '/services/digital-branding',
  },
  {
    icon: '✍️',
    title: 'Content Marketing',
    description: 'Compelling content that attracts, engages and converts. Build authority in your industry.',
    href: '/services/content-marketing',
  },
  {
    icon: '📧',
    title: 'Email Marketing',
    description: 'Nurture leads with automated sequences. Drive sales with strategic email campaigns.',
    href: '/services/email-marketing',
  },
  {
    icon: '🎥',
    title: 'YouTube Marketing',
    description: 'Grow your YouTube channel. Video content creation & advertising that engages audiences.',
    href: '/services/youtube-marketing',
  },
  {
    icon: '🛒',
    title: 'E-commerce Marketing',
    description: 'Skyrocket online store sales. Shopping ads, cart recovery & conversion optimization.',
    href: '/services/ecommerce-marketing',
  },
  {
    icon: '📊',
    title: 'Performance Marketing',
    description: 'Data-driven campaigns with measurable ROI. Track every rupee spent and optimize continuously.',
    href: '/services/performance-marketing',
  },
  {
    icon: '🎯',
    title: 'Conversion Rate Optimization',
    description: 'Turn more visitors into customers. Scientific testing & optimization for maximum conversions.',
    href: '/services/conversion-rate-optimization',
  },
  {
    icon: '🚀',
    title: 'Digital Marketing Strategy',
    description: 'Comprehensive roadmap to digital success. Strategic planning for sustainable growth.',
    href: '/services/digital-marketing-strategy',
  },
  {
    icon: '📱',
    title: 'Mobile App Marketing',
    description: 'Drive app downloads & engagement. Complete app marketing from launch to retention.',
    href: '/services/mobile-app-marketing',
  },
  {
    icon: '💡',
    title: 'Influencer Marketing',
    description: 'Partner with influential creators. Amplify brand reach & build authentic credibility.',
    href: '/services/influencer-marketing',
  }
];

interface RelatedServicesProps {
  currentService?: string; // Optional: to exclude current service from the list
  title?: string;
  description?: string;
  maxServices?: number; // Optional: limit number of services shown
}

export default function RelatedServices({ 
  currentService, 
  title = "Complete Digital Marketing Solutions",
  description = "Enhance your marketing strategy with our comprehensive digital marketing services designed for Mumbai businesses",
  maxServices 
}: RelatedServicesProps) {
  // Filter out current service if provided
  let filteredServices = currentService 
    ? services.filter(service => service.href !== currentService)
    : services;

  // Limit number of services if maxServices is provided
  if (maxServices) {
    filteredServices = filteredServices.slice(0, maxServices);
  }

  return (
    <section 
      className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden"
      aria-label="Digital Marketing Services"
    >
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
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-4 mb-8 shadow-2xl">
              <span className="text-2xl">🚀</span>
              <span className="text-white font-bold text-lg">Premium Digital Marketing Services</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">{title}</span>
            </h2>
            
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-4">
              {description}
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Everything your business needs to dominate online 🌟
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service, index) => (
              <Link 
                key={index}
                href={service.href} 
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 rounded-3xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-white/90 font-semibold group-hover:text-yellow-300 group-hover:gap-3 gap-2 transition-all">
                    <span>Learn More</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="relative bg-white/20 backdrop-blur-xl rounded-[3rem] shadow-2xl border-2 border-white/30 p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-pink-500/10 animate-pulse"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                  Ready to <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">10X</span> Your Business?
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join 150+ successful businesses who trust MyDigital Crown for their digital growth 🚀
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
  );
}
