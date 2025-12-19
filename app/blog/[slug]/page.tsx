import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import EnquiryForm from '@/app/components/EnquiryForm';
import TrustedBrands from '@/app/components/TrustedBrands';
import RelatedServices from '@/app/components/RelatedServices';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '@/app/data/blogs';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found | MyDigital Crown',
    };
  }

  return {
    title: `${blog.title} | MyDigital Crown Blog`,
    description: blog.excerpt,
    keywords: [
      blog.title,
      blog.category,
      'digital marketing',
      'MyDigital Crown',
      'marketing tips',
      'business growth',
      'SEO',
      'social media',
      'content marketing',
      'online marketing',
    ],
    authors: [{ name: blog.author, url: 'https://mydigitalcrown.in' }],
    creator: 'MyDigital Crown',
    publisher: 'MyDigital Crown',
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://mydigitalcrown.in/blog/${blog.slug}`,
      siteName: 'MyDigital Crown',
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: 'en_IN',
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      creator: '@mydigitalcrown',
    },
    alternates: {
      canonical: `https://mydigitalcrown.in/blog/${blog.slug}`,
    },
    category: blog.category,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                Blog
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 truncate">{blog.title}</li>
          </ol>
        </div>
      </nav>

      {/* Blog Post Hero */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <time dateTime={blog.date}>
                {new Date(blog.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          {/* Blog Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-ul:space-y-3
              prose-li:text-gray-700
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-3">
              {[blog.category, 'Digital Marketing', 'MyDigital Crown', 'Marketing Tips'].map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  #{tag.toLowerCase().replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {blog.author.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">About {blog.author}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {blog.author} is a digital marketing expert and the founder of MyDigital Crown, 
                  a leading digital marketing agency in Mumbai. With over 8 years of experience, 
                  he specializes in SEO, social media marketing, and helping businesses grow their online presence.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
                >
                  <span>Get in Touch</span>
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Share this article:</h3>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
              <button className="flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </button>
              <button className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </button>
              <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogs
                .filter((b) => b.id !== blog.id && b.category === blog.category)
                .slice(0, 3)
                .map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blog/${relatedBlog.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
                  >
                    <div className="relative h-48">
                      <Image
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block text-blue-600 text-sm font-bold mb-2">
                        {relatedBlog.category}
                      </span>
                      <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Back to Blog Link */}
          <div className="mt-16 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-800"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let&apos;s discuss how we can help you achieve your digital marketing goals
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <span>Get Free Consultation</span>
            <svg className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Enquiry Form */}
      <EnquiryForm />

      {/* Trusted Brands */}
      <TrustedBrands />

      {/* Related Services */}
      <RelatedServices />

      <Footer />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BlogPosting',
                '@id': `https://mydigitalcrown.in/blog/${blog.slug}#article`,
                headline: blog.title,
                description: blog.excerpt,
                image: {
                  '@type': 'ImageObject',
                  url: blog.image,
                  width: 1200,
                  height: 630,
                },
                datePublished: blog.date,
                dateModified: blog.date,
                author: {
                  '@type': 'Person',
                  name: blog.author,
                  url: 'https://mydigitalcrown.in',
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'MyDigital Crown',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://mydigitalcrown.in/logo.png',
                  },
                },
                mainEntityOfPage: {
                  '@type': 'WebPage',
                  '@id': `https://mydigitalcrown.in/blog/${blog.slug}`,
                },
                articleSection: blog.category,
                keywords: `${blog.title}, ${blog.category}, digital marketing, MyDigital Crown`,
              },
              {
                '@type': 'BreadcrumbList',
                '@id': `https://mydigitalcrown.in/blog/${blog.slug}#breadcrumb`,
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://mydigitalcrown.in',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Blog',
                    item: 'https://mydigitalcrown.in/blog',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: blog.title,
                    item: `https://mydigitalcrown.in/blog/${blog.slug}`,
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
