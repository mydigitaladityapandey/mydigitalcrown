'use client';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EnquiryForm from "../components/EnquiryForm";
import TrustedBrands from "../components/TrustedBrands";
import ClientSuccessStories from "../components/ClientSuccessStories";
import RelatedServices from "../components/RelatedServices";
import Link from 'next/link';
import Image from "next/image";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "10 SEO Trends to Watch in 2025",
      slug: "10-seo-trends-2025",
      excerpt: "Discover the latest SEO strategies that will dominate search rankings in the coming year.",
      category: "SEO",
      date: "Jan 15, 2025",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop",
      gradient: "from-blue-600 to-blue-800",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Instagram Marketing Guide for 2025",
      slug: "instagram-marketing-guide-2025",
      excerpt: "Learn how to leverage Instagram's latest features to grow your brand presence.",
      category: "Social Media",
      date: "Jan 12, 2025",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
      gradient: "from-purple-600 to-purple-800",
      textColor: "text-purple-600"
    },
    {
      id: 3,
      title: "Maximizing ROI with Google Ads",
      slug: "maximizing-roi-google-ads",
      excerpt: "Expert tips to optimize your Google Ads campaigns and increase conversion rates.",
      category: "PPC",
      date: "Jan 10, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      gradient: "from-orange-600 to-orange-800",
      textColor: "text-orange-600"
    },
    {
      id: 4,
      title: "Content Marketing Strategies That Work",
      slug: "content-marketing-strategies-that-work",
      excerpt: "Create compelling content that attracts, engages, and converts your target audience.",
      category: "Content Marketing",
      date: "Jan 8, 2025",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=600&fit=crop",
      gradient: "from-green-600 to-green-800",
      textColor: "text-green-600"
    },
    {
      id: 5,
      title: "Web Design Trends for 2025",
      slug: "web-design-trends-2025",
      excerpt: "Stay ahead with the latest web design trends that captivate users and boost conversions.",
      category: "Web Design",
      date: "Jan 5, 2025",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      gradient: "from-pink-600 to-pink-800",
      textColor: "text-pink-600"
    },
    {
      id: 6,
      title: "Email Marketing Best Practices",
      slug: "email-marketing-best-practices",
      excerpt: "Craft email campaigns that get opened, clicked, and drive real business results.",
      category: "Email Marketing",
      date: "Jan 3, 2025",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      gradient: "from-cyan-600 to-cyan-800",
      textColor: "text-cyan-600"
    },
    {
      id: 7,
      title: "AI in Digital Marketing: The Future is Now",
      slug: "ai-digital-marketing-future",
      excerpt: "Discover how artificial intelligence is revolutionizing digital marketing strategies.",
      category: "Technology",
      date: "Dec 30, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      gradient: "from-indigo-600 to-indigo-800",
      textColor: "text-indigo-600"
    },
    {
      id: 8,
      title: "YouTube Marketing: Grow Your Channel Fast",
      slug: "youtube-marketing-grow-channel",
      excerpt: "Proven strategies to increase subscribers, views, and engagement on YouTube.",
      category: "Video Marketing",
      date: "Dec 28, 2024",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop",
      gradient: "from-red-600 to-red-800",
      textColor: "text-red-600"
    },
    {
      id: 9,
      title: "Local SEO: Dominate Your Local Market",
      slug: "local-seo-dominate-market",
      excerpt: "Master local SEO techniques to attract more customers from your area.",
      category: "Local SEO",
      date: "Dec 25, 2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      gradient: "from-yellow-600 to-yellow-800",
      textColor: "text-yellow-600"
    }
  ]);

  // Fetch blogs from API on mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        if (data.blogs && data.blogs.length > 0) {
          // Map API blogs to match the format with gradients
          const formattedBlogs = data.blogs.map((blog: { id: number; title: string; slug: string; excerpt: string; category: string; date: string; image: string }, index: number) => ({
            id: blog.id,
            title: blog.title,
            slug: blog.slug,
            excerpt: blog.excerpt,
            category: blog.category,
            date: blog.date,
            image: blog.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            gradient: getGradient(index),
            textColor: getTextColor(index)
          }));
          setBlogPosts(formattedBlogs);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  const getGradient = (index: number) => {
    const gradients = [
      "from-blue-600 to-blue-800",
      "from-purple-600 to-purple-800",
      "from-orange-600 to-orange-800",
      "from-green-600 to-green-800",
      "from-pink-600 to-pink-800",
      "from-cyan-600 to-cyan-800",
      "from-indigo-600 to-indigo-800",
      "from-red-600 to-red-800",
      "from-yellow-600 to-yellow-800"
    ];
    return gradients[index % gradients.length];
  };

  const getTextColor = (index: number) => {
    const colors = [
      "text-blue-600",
      "text-purple-600",
      "text-orange-600",
      "text-green-600",
      "text-pink-600",
      "text-cyan-600",
      "text-indigo-600",
      "text-red-600",
      "text-yellow-600"
    ];
    return colors[index % colors.length];
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 py-16 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="text-center py-16">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-6 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">100% Free Guest Posting - No Charges Ever!</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Heading - SEO Optimized for "Free Guest Posting Website" */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight text-center" itemProp="headline">
                Free Guest Posting Website - <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">Submit for Free</span>
              </h1>
              
              {/* SEO-Rich Subtitle */}
              <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-4">
                India&apos;s #1 Free Guest Blogging Platform | MyDigital Crown
              </p>
              
              {/* Tagline - Guest Posting Focus */}
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto text-center font-semibold leading-relaxed mb-4" itemProp="description">
                  Submit your articles on our free guest posting website and get dofollow backlinks from a DA 45+ platform. Publish digital marketing, SEO, social media & business content with <strong>100% free submission</strong>, no hidden charges, 24-48h approval time! 🚀
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-lg text-white">
                  <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <span className="text-2xl">✅</span>
                    <strong>Free Submission</strong>
                  </span>
                  <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <span className="text-2xl">✅</span>
                    <strong>Dofollow Backlinks</strong>
                  </span>
                  <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <span className="text-2xl">✅</span>
                    <strong>High DA Website</strong>
                  </span>
                  <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <span className="text-2xl">✅</span>
                    <strong>Fast Approval</strong>
                  </span>
                </div>
              </div>
              
              {/* Stats - Guest Posting Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-black text-yellow-300 mb-2">100%</div>
                  <div className="text-white/90 font-medium">Free Forever</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-black text-green-300 mb-2">50K+</div>
                  <div className="text-white/90 font-medium">Monthly Visitors</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-black text-blue-300 mb-2">DA 45+</div>
                  <div className="text-white/90 font-medium">Domain Authority</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-black text-purple-300 mb-2">24-48h</div>
                  <div className="text-white/90 font-medium">Fast Approval</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog-posts" className="py-20 bg-white relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-base font-bold mb-8 shadow-xl">
              <span className="text-2xl mr-3">📖</span>
              <span>Latest Articles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Expert Insights</span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-800">To Grow Your Business</span>
            </h2>
          </header>

          {/* Active Filter Display */}
          {selectedCategory && (
            <div className="mb-8 flex items-center justify-between bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-gray-600">Showing:</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                  {selectedCategory}
                </span>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-gray-600 hover:text-red-600 font-semibold"
              >
                Clear Filter ✕
              </button>
            </div>
          )}

          {/* Blog Grid */}
          {blogPosts.filter((post) => !selectedCategory || post.category === selectedCategory).length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Articles Found</h3>
              <p className="text-gray-600 mb-8">
                We don&apos;t have any articles in the &quot;{selectedCategory}&quot; category yet.
              </p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all"
              >
                View All Articles
              </button>
            </div>
          ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !selectedCategory || post.category === selectedCategory)
              .map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100">
                <article>
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-40 group-hover:opacity-30 transition-opacity`}></div>
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block bg-white ${post.textColor} px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className={`${post.textColor} font-semibold hover:underline inline-flex items-center gap-2`}>
                      <span>Read More</span>
                      <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          )}

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <span className="mr-3">Load More Articles</span>
              <svg className="w-6 h-6 group-hover:translate-y-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Browse by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Category</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find exactly what you&apos;re looking for
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "SEO", icon: "🔍", color: "from-blue-500 to-blue-700" },
              { name: "Social Media", icon: "📱", color: "from-purple-500 to-purple-700" },
              { name: "Google Ads", icon: "💰", color: "from-green-500 to-green-700" },
              { name: "Content Marketing", icon: "✍️", color: "from-orange-500 to-orange-700" },
              { name: "Web Development", icon: "💻", color: "from-pink-500 to-pink-700" },
              { name: "Email Marketing", icon: "📧", color: "from-cyan-500 to-cyan-700" },
              { name: "Video Marketing", icon: "🎥", color: "from-red-500 to-red-700" },
              { name: "Analytics", icon: "📊", color: "from-indigo-500 to-indigo-700" },
              { name: "Branding", icon: "🎨", color: "from-yellow-500 to-yellow-700" },
              { name: "AI & Technology", icon: "🤖", color: "from-teal-500 to-teal-700" }
            ].map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  setSelectedCategory(category.name);
                  // Scroll to blog section
                  document.getElementById('blog-posts')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`group relative bg-gradient-to-br ${category.color} text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <div className="font-bold text-sm">{category.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="text-6xl mb-6">📬</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Never Miss an Update
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Subscribe to our newsletter and get the latest digital marketing insights delivered to your inbox weekly
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
              Subscribe Now
            </button>
          </form>
          <p className="text-blue-200 text-sm mt-4">
            Join 10,000+ marketers who trust our insights. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Free Guest Posting Guidelines Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">MyDigital Crown</span> for Guest Posting?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India&apos;s most trusted free guest blogging platform for digital marketers, SEO experts, and content creators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">High Quality Backlinks</h3>
              <p className="text-gray-600">
                Get <strong>dofollow backlinks</strong> from our high DA (45+) website. Boost your SEO rankings and domain authority with quality link building.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Massive Audience Reach</h3>
              <p className="text-gray-600">
                Reach <strong>50,000+ monthly visitors</strong> interested in digital marketing, SEO, social media, and business growth strategies.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Approval Process</h3>
              <p className="text-gray-600">
                Submit quality content and get approved within <strong>24-48 hours</strong>. No lengthy waiting periods or complex procedures.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">💯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Free Forever</h3>
              <p className="text-gray-600">
                <strong>No hidden charges, no payment required</strong>. We believe in supporting the content creator community completely free.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Author Bio & Links</h3>
              <p className="text-gray-600">
                Include your author bio with <strong>2-3 backlinks</strong> to your website, social profiles, and portfolio to build your personal brand.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Optimized Platform</h3>
              <p className="text-gray-600">
                Our website is <strong>Google indexed, mobile-friendly</strong>, and optimized for search engines to maximize your content visibility.
              </p>
            </div>
          </div>

          {/* Guest Posting Guidelines */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
              📋 Guest Posting <span className="text-blue-600">Guidelines & Requirements</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-green-600 text-2xl">✅</span> What We Accept
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Original, unique content</strong> (min 1000 words)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Topics: Digital Marketing, SEO, Social Media, Web Development, AI, Content Marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Well-researched articles with <strong>statistics & examples</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Proper headings (H2, H3), bullet points, and formatting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>High-quality images (royalty-free or original)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>2-3 dofollow backlinks</strong> naturally placed in content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Author bio with social links and website</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-red-600 text-2xl">❌</span> What We Don&apos;t Accept
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Plagiarized or AI-generated content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Promotional or overly salesy articles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Topics: Adult content, gambling, illegal activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Poor grammar, spelling errors, or low-quality writing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Thin content (less than 1000 words)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Excessive keyword stuffing or spam links</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Articles published elsewhere (must be unique)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                📧 How to Submit Your Guest Post
              </h4>
              <p className="text-gray-700 text-center mb-6 text-lg">
                Send your article (Word doc or Google Docs link) to: <strong className="text-blue-600">mydigitalcrown@gmail.com</strong>
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl mb-2">1️⃣</div>
                  <p className="text-sm font-semibold text-gray-700">Write Quality Content</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl mb-2">2️⃣</div>
                  <p className="text-sm font-semibold text-gray-700">Email to MyDigital Crown</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl mb-2">3️⃣</div>
                  <p className="text-sm font-semibold text-gray-700">Review & Approval (24-48h)</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl mb-2">4️⃣</div>
                  <p className="text-sm font-semibold text-gray-700">Published with Backlinks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for Guest Posting */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions About <span className="text-blue-600">Free Guest Posting</span>
          </h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <summary className="font-bold text-lg text-gray-900">
                ✅ Is guest posting on MyDigital Crown really free?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <strong>Yes, 100% free!</strong> Unlike other websites that charge ₹500-₹5000 for guest posts, MyDigital Crown offers completely free guest blogging opportunities. No hidden charges, no payment required ever. We believe in supporting the content creator community.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <summary className="font-bold text-lg text-gray-900">
                ✅ What are the benefits of guest posting on MyDigital Crown?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <strong>Benefits include:</strong> High-quality dofollow backlinks from DA 45+ website, exposure to 50,000+ monthly visitors, improved SEO rankings and domain authority, author bio with 2-3 backlinks, fast approval within 24-48 hours, social media promotion of your article, increased brand visibility and credibility, networking with industry experts, and lifetime publication (never removed).
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <summary className="font-bold text-lg text-gray-900">
                ✅ What topics can I write about for guest posting?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We accept articles on: <strong>Digital Marketing</strong> (strategies, trends, tools), <strong>SEO</strong> (on-page, off-page, technical), <strong>Social Media Marketing</strong> (Facebook, Instagram, LinkedIn, Twitter), <strong>Content Marketing</strong> (blogging, copywriting), <strong>PPC Advertising</strong> (Google Ads, Facebook Ads), <strong>Web Development</strong> (design, UX/UI), <strong>Email Marketing</strong>, <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, <strong>E-commerce</strong>, and <strong>Business Growth</strong> strategies.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <summary className="font-bold text-lg text-gray-900">
                ✅ How long does it take to get my guest post approved?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Our editorial team reviews all submissions within <strong>24-48 hours</strong>. If your content meets our quality guidelines, we&apos;ll publish it immediately. If revisions are needed, we&apos;ll provide specific feedback. Average approval time is 1-2 days. Rush? Email us at mydigitalcrown@gmail.com with &quot;URGENT&quot; in subject line.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <summary className="font-bold text-lg text-gray-900">
                ✅ How many backlinks can I include in my guest post?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                You can include <strong>2-3 dofollow backlinks</strong> naturally placed within your article content, plus additional links in your author bio. Links should be relevant, contextual, and add value to readers. We don&apos;t accept excessive linking (more than 3 links to same domain) or unrelated links.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <summary className="font-bold text-lg text-gray-900">
                ✅ What is the minimum word count for guest posts?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Minimum <strong>1000 words</strong> required. We prefer comprehensive, in-depth articles of 1500-2500 words that provide real value to readers. Longer, well-researched content performs better in SEO and gets more engagement. Include proper headings (H2, H3), bullet points, examples, statistics, and actionable tips.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <summary className="font-bold text-lg text-gray-900">
                ✅ Can I include images in my guest post?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <strong>Yes, highly recommended!</strong> Include 2-5 high-quality images (minimum 800x600px resolution). Use royalty-free images from Unsplash, Pexels, or your own original images. Provide image credits if required. Images improve readability and SEO. We also accept infographics, charts, and screenshots.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <summary className="font-bold text-lg text-gray-900">
                ✅ Do you accept AI-generated content or article spinning?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <strong>No, we do NOT accept AI-generated or spun content.</strong> All articles must be 100% original, human-written content. We use plagiarism checkers and AI detection tools. Quality matters more than quantity. Write from your expertise and experience. Well-written, valuable content gets published; automated content gets rejected.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <summary className="font-bold text-lg text-gray-900">
                ✅ Will my article be promoted on social media?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <strong>Yes!</strong> Every published guest post is promoted on our social media channels: Facebook (10K+ followers), Instagram (5K+ followers), LinkedIn (3K+ followers), and Twitter. This gives your content additional exposure beyond our website traffic. Tag us for even more visibility!
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <summary className="font-bold text-lg text-gray-900">
                ✅ Can I republish my guest post elsewhere after publication?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We require <strong>exclusive, original content</strong> that hasn&apos;t been published elsewhere. After 30 days of publication on MyDigital Crown, you can republish on your own blog with a canonical link back to our site. This protects both parties from duplicate content penalties and maintains SEO value.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <summary className="font-bold text-lg text-gray-900">
                ✅ How do I submit my guest post article?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <strong>Submission Process:</strong> 1) Write your article (1000+ words) in Google Docs or Word, 2) Email to <strong>mydigitalcrown@gmail.com</strong> with subject &quot;Guest Post Submission - [Your Topic]&quot;, 3) Include your author bio (50-100 words) with photo and website link, 4) Attach or link your article, 5) Mention desired backlink URLs. We&apos;ll review and respond within 24-48 hours. Call +91-83695-11877 for queries.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
              <summary className="font-bold text-lg text-gray-900">
                ✅ What is the Domain Authority (DA) of MyDigital Crown?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                MyDigital Crown has a <strong>Domain Authority (DA) of 45+</strong> and is growing consistently. We have 50,000+ monthly organic visitors, Google indexed pages, fast loading speed, mobile-friendly design, and regular high-quality content updates. Backlinks from our site significantly improve your SEO rankings.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action - Submit Guest Post */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Publish Your Article?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 500+ contributors who have published on MyDigital Crown. 100% free, dofollow backlinks, 50K+ monthly reach!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mydigitalcrown@gmail.com?subject=Guest Post Submission&body=Hi MyDigital Crown Team,%0D%0A%0D%0AI would like to submit a guest post article.%0D%0A%0D%0AArticle Topic: %0D%0AWord Count: %0D%0AAuthor Name: %0D%0AWebsite: %0D%0A%0D%0APlease find my article attached/linked.%0D%0A%0D%0AThank you!"
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all"
            >
              📧 Submit Guest Post
            </a>
            <a
              href="tel:+918369511877"
              className="bg-white/10 backdrop-blur-lg border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              📞 Call: +91-83695-11877
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <EnquiryForm />

      {/* Client Success Stories */}
      <ClientSuccessStories />

      {/* Trusted Brands */}
      <TrustedBrands />

      {/* Related Services */}
      <RelatedServices />

      <Footer />
    </>
  );
}
