import Link from 'next/link';

interface Office {
  city: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
  gradient: string;
  bgColor: string;
}

const offices: Office[] = [
  {
    city: 'Mumbai',
    title: 'Mumbai Office',
    address: 'A5-106 Navkar City Phase 3, Rajavali, Near Rajavali Talav, Tivari Vasai Link Road, Naigaon East Mumbai 401208',
    phone: '+91-83695-11877',
    email: 'info@mydigitalcrown.in',
    mapUrl: 'https://maps.app.goo.gl/XZhJ6zB6FfXHvzR46',
    gradient: 'from-blue-500 to-purple-600',
    bgColor: 'group-hover:border-blue-200'
  },
  {
    city: 'Varanasi',
    title: 'Varanasi Office',
    address: '254, Saraswati Nagar Colony, Lohta Road, Near Nand Ghar, Laharata, Bhitari, Varanasi, Uttar Pradesh 221106',
    phone: '+91-83695-11877',
    email: 'info@mydigitalcrown.in',
    mapUrl: 'https://maps.app.goo.gl/k1TLc6UPD3VRqB1PA',
    gradient: 'from-orange-500 to-red-600',
    bgColor: 'group-hover:border-orange-200'
  },
  {
    city: 'Bangalore',
    title: 'Bangalore Office',
    address: 'Padmamba Nilaya, 250, 7th C Main Rd, 3rd Stage 4th Block, West of Chord Road 1st Stage, Basaveshwar Nagar, Bengaluru, Karnataka 560079',
    phone: '+91-83695-11877',
    email: 'info@mydigitalcrown.in',
    mapUrl: 'https://maps.app.goo.gl/zwqbwUjZkUNvDcYs5',
    gradient: 'from-green-500 to-emerald-600',
    bgColor: 'group-hover:border-green-200'
  }
];

export default function OurLocations() {
  return (
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
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-4 mb-8 shadow-2xl">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg">Our Locations</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Visit Our <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Offices</span>
          </h2>
          
          <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            MyDigital Crown serves clients across India with our main offices strategically located in Mumbai, Varanasi, and Bangalore. Visit us for personalized digital marketing consultations and discover why we&apos;re recognized as a top digital marketing company.
          </p>
        </div>
        
        {/* Offices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <div key={index} className="group">
              <div className={`bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 ${office.bgColor}`}>
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${office.gradient} rounded-2xl mb-4 shadow-lg`}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">{office.title}</h3>
                  <p className="text-white/70 mb-4">Digital Marketing Hub</p>
                </div>
                
                {/* Office Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-white/90 leading-relaxed">{office.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a href={`tel:${office.phone}`} className="text-white/90 hover:text-green-300 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-purple-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href={`mailto:${office.email}`} className="text-white/90 hover:text-purple-300 transition-colors">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white/90">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="text-center">
                  <a 
                    href={office.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${office.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Get Directions</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="relative bg-white/20 backdrop-blur-xl rounded-[3rem] shadow-2xl border-2 border-white/30 p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-pink-500/10 animate-pulse"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                Ready to <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Visit</span> Our Offices?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation with our digital marketing experts at any of our three locations. We&apos;re here to help transform your business with data-driven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="tel:+918369511877" 
                  className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-12 py-5 rounded-full font-black text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-110 inline-flex items-center justify-center overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Call Now: +91-83695-11877</span>
                  </span>
                </Link>
                <Link 
                  href="mailto:info@mydigitalcrown.in" 
                  className="group relative bg-white/10 backdrop-blur-sm border-3 border-white/50 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white hover:text-blue-600 hover:shadow-2xl transition-all transform hover:scale-110 inline-flex items-center justify-center"
                >
                  <span className="flex items-center">
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
      </div>
    </section>
  );
}