interface Testimonial {
  icon: string;
  quote: string;
  initials: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    icon: '💼',
    quote: "MyDigital Crown transformed our furniture business completely. Their digital marketing strategies increased our sales by 200% within 6 months. Aditya's team understands the furniture industry perfectly and delivered exceptional results.",
    initials: 'FF',
    name: 'Farhan Furniturewalla',
    title: 'Owner, Furniturewalla'
  },
  {
    icon: '🏥',
    quote: "As a healthcare facility, we needed a digital partner who understands our industry. MyDigital Crown delivered outstanding SEO and social media marketing that brought us 150+ new patients monthly. Unmatched professionalism!",
    initials: 'SK',
    name: 'Dr. Shrish Kumar',
    title: 'Care Hospital'
  },
  {
    icon: '🎓',
    quote: "MyDigital Crown's educational marketing expertise helped us reach thousands of prospective students. Their targeted campaigns increased our admissions by 180%. Excellent ROI throughout!",
    initials: 'UB',
    name: 'Umesh Batkar',
    title: 'Director, Trinkets Institute'
  },
  {
    icon: '🧽',
    quote: "Our cleaning service flourished after partnering with MyDigital Crown. Their local SEO strategies helped us dominate Mumbai's market. We now get 50+ inquiries weekly. Outstanding team!",
    initials: 'SK',
    name: 'Shagufta Khan',
    title: 'Founder, Clean n Shine'
  }
];

interface ClientSuccessStoriesProps {
  title?: string;
}

export default function ClientSuccessStories({
  title = "Client Success Stories"
}: ClientSuccessStoriesProps) {
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-4 mb-8 shadow-2xl">
            <span className="text-2xl">❤️</span>
            <span className="text-white font-bold text-lg">{title}</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            What Mumbai <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Businesses</span><br />
            Say About Our Services
          </h2>
          
          <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Real results, real clients, real growth stories from Mumbai&apos;s most successful businesses
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
          {testimonials.map((testimonial, index) => {
            const gradientColors = [
              'from-yellow-400 to-orange-500',
              'from-green-400 to-emerald-500', 
              'from-blue-400 to-purple-500',
              'from-pink-400 to-rose-500'
            ];
            const avatarColors = [
              'from-orange-400 to-red-500',
              'from-green-400 to-emerald-500',
              'from-blue-400 to-purple-500', 
              'from-pink-400 to-rose-500'
            ];
            
            return (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r ${gradientColors[index]} rounded-full flex items-center justify-center text-2xl shadow-2xl`}>
                  {testimonial.icon}
                </div>
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg text-white/90 leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                </div>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${avatarColors[index]} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-white/70">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
