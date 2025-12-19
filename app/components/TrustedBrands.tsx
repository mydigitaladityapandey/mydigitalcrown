import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
  alt: string;
}

const clients: Client[] = [
  {
    name: 'Furniturewalla',
    logo: '/images/clients/furniturewalla.webp',
    alt: 'Furniturewalla - Furniture Business Digital Marketing Mumbai'
  },
  {
    name: 'Care Hospital',
    logo: '/images/clients/care-hospital.png',
    alt: 'Care Hospital - Healthcare SEO Services Mumbai'
  },
  {
    name: 'Trinkets Institute',
    logo: '/images/clients/trinkets.webp',
    alt: 'Trinkets Institute - Education Digital Marketing Mumbai'
  },
  {
    name: 'E10 Infotech',
    logo: '/images/clients/e10-infotech.png',
    alt: 'E10 Infotech - IT Company Digital Marketing Mumbai'
  },
  {
    name: 'Litmee',
    logo: '/images/clients/litmee.png',
    alt: 'Litmee - Social Media Marketing Mumbai'
  },
  {
    name: 'Metic',
    logo: '/images/clients/metic.png',
    alt: 'Metic - Web Development Mumbai'
  },
  {
    name: 'Suddh News',
    logo: '/images/clients/suddh-news.png',
    alt: 'Suddh News - News Portal Digital Marketing Mumbai'
  },
  {
    name: 'Trending Newswala',
    logo: '/images/clients/trending-newswala.png',
    alt: 'Trending Newswala - News Media SEO Mumbai'
  },
  {
    name: 'Digital Bot',
    logo: '/images/clients/digital-bot.svg',
    alt: 'Digital Bot - AI Services Digital Marketing Mumbai'
  },
  {
    name: 'Super Pest Control',
    logo: '/images/clients/super-pest-control.svg',
    alt: 'Super Pest Control - Pest Control Services Digital Marketing Mumbai'
  },
  {
    name: 'Clean n Shine',
    logo: '/images/clients/clean-shine.png',
    alt: 'Clean n Shine - Cleaning Services Digital Marketing Mumbai'
  },
  {
    name: 'Sea Water Sports',
    logo: '/images/clients/seawatersports.webp',
    alt: 'Sea Water Sports - Water Sports Business Digital Marketing'
  },
  {
    name: 'Elite Essential Cleaning',
    logo: '/images/clients/Elitessential-Cleaning.png',
    alt: 'Elite Essential Cleaning - Professional Cleaning Services Marketing'
  },
  {
    name: 'Banaras Killa',
    logo: '/images/clients/banaras-killa.jpeg',
    alt: 'Banaras Killa - Restaurant & Hospitality Digital Marketing'
  },
  {
    name: 'Parashar Infra',
    logo: '/images/clients/parashar-infra.png',
    alt: 'Parashar Infra - Real Estate & Infrastructure Marketing'
  }
];

interface TrustedBrandsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showStats?: boolean;
  theme?: 'dark' | 'light';
}

export default function TrustedBrands({
  title = "Trusted by Leading Brands",
  subtitle = "Our 150+ Happy Clients",
  description = "Trusted by India's top companies for digital marketing excellence. Join the success story!",
  showStats = true,
  theme = 'dark'
}: TrustedBrandsProps) {
  const isDark = theme === 'dark';
  
  return (
    <section 
      className={`py-20 relative overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'
      }`}
      aria-label="Our Clients - Trusted by Leading Brands"
    >
      {/* Animated Background */}
      {isDark && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-bold mb-6 border ${
            isDark 
              ? 'bg-white/10 backdrop-blur-sm text-white border-white/20' 
              : 'bg-blue-100 text-blue-600 border-blue-200'
          }`}>
            <span className="mr-2">🤝</span>
            {title}
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {isDark ? (
              <>Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{subtitle}</span></>
            ) : (
              <>Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{subtitle}</span></>
            )}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-blue-100' : 'text-gray-600'}`}>
            {description}
          </p>
        </header>

        {/* Clients Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-2xl border transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/30 hover:shadow-blue-500/20' 
                  : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-blue-300 hover:shadow-blue-500/20'
              }`}
            >
              <div className="relative h-20 w-full flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={200}
                  height={80}
                  className="object-contain max-h-full max-w-full filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        {showStats && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className={`p-6 rounded-xl border ${
              isDark 
                ? 'bg-white/5 backdrop-blur-sm border-white/10' 
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-yellow-400' : 'bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent'}`}>
                150+
              </div>
              <div className={isDark ? 'text-blue-100' : 'text-gray-600'}>Happy Clients</div>
            </div>
            <div className={`p-6 rounded-xl border ${
              isDark 
                ? 'bg-white/5 backdrop-blur-sm border-white/10' 
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-green-400' : 'bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'}`}>
                8+
              </div>
              <div className={isDark ? 'text-blue-100' : 'text-gray-600'}>Years Experience</div>
            </div>
            <div className={`p-6 rounded-xl border ${
              isDark 
                ? 'bg-white/5 backdrop-blur-sm border-white/10' 
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-orange-400' : 'bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'}`}>
                300%
              </div>
              <div className={isDark ? 'text-blue-100' : 'text-gray-600'}>Average Growth</div>
            </div>
            <div className={`p-6 rounded-xl border ${
              isDark 
                ? 'bg-white/5 backdrop-blur-sm border-white/10' 
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-pink-400' : 'bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'}`}>
                50+
              </div>
              <div className={isDark ? 'text-blue-100' : 'text-gray-600'}>Services Offered</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
