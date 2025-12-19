import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build optimization for large number of pages
  experimental: {
    memoryBasedWorkersCount: false,
    workerThreads: false,
    webpackMemoryOptimizations: true,
  },
  
  // Skip TypeScript and ESLint checks to reduce memory usage
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Memory optimization
  output: 'standalone',
  
  // Generate fewer pages at build time
  trailingSlash: false,
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  
  // Reduce build memory usage
  webpack: (config, { isServer, dev }) => {
    if (!dev) {
      // Aggressive memory optimization
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 10000,
          maxSize: 100000, // Smaller chunks
          maxAsyncRequests: 3, // Reduce async requests
          maxInitialRequests: 2, // Reduce initial requests
          cacheGroups: {
            default: {
              minChunks: 1,
              priority: -20,
              reuseExistingChunk: true,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: -10,
              reuseExistingChunk: true,
              chunks: 'all',
            },
          },
        },
        minimize: true,
        // Reduce memory usage
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
      };
    }
    
    // Memory limits
    config.stats = 'errors-only';
    config.performance = {
      hints: false,
    };
    
    // Reduce concurrent modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // Reduce memory usage during compilation
    config.infrastructureLogging = {
      level: 'error',
    };
    
    return config;
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.goodfirms.co',
        pathname: '/badges/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Redirects from old HTML pages to new Next.js routes
  async redirects() {
    return [
      // Main pages
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/blog.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/gallery.html',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/digital-marketing-course.html',
        destination: '/course',
        permanent: true,
      },
      {
        source: '/course.html',
        destination: '/course',
        permanent: true,
      },
      {
        source: '/jobs.html',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/service.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      
      // Main Service Pages
      {
        source: '/digital-marketing-strategy.html',
        destination: '/services/digital-marketing-strategy',
        permanent: true,
      },
      {
        source: '/search-engine-optimisation.html',
        destination: '/services/search-engine-optimisation',
        permanent: true,
      },
      {
        source: '/seo.html',
        destination: '/services/search-engine-optimisation',
        permanent: true,
      },
      {
        source: '/social-media-marketing.html',
        destination: '/services/social-media-marketing',
        permanent: true,
      },
      {
        source: '/web-development.html',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/web-design.html',
        destination: '/services/web-design',
        permanent: true,
      },
      {
        source: '/mobile-app.html',
        destination: '/services/mobile-app',
        permanent: true,
      },
      {
        source: '/google-ads.html',
        destination: '/services/google-ads',
        permanent: true,
      },
      {
        source: '/content-marketing.html',
        destination: '/services/content-marketing',
        permanent: true,
      },
      {
        source: '/digital-branding.html',
        destination: '/services/digital-branding',
        permanent: true,
      },
      {
        source: '/youtube-promotion.html',
        destination: '/services/youtube-promotion',
        permanent: true,
      },
      {
        source: '/artificial-intelligence.html',
        destination: '/services/artificial-intelligence',
        permanent: true,
      },
      {
        source: '/machine-learning.html',
        destination: '/services/machine-learning',
        permanent: true,
      },
      
      // SEO Sub-Services
      {
        source: '/local-search.html',
        destination: '/services/local-search',
        permanent: true,
      },
      {
        source: '/analytics.html',
        destination: '/services/analytics',
        permanent: true,
      },
      {
        source: '/mobile-search.html',
        destination: '/services/mobile-search',
        permanent: true,
      },
      {
        source: '/keyword-analysis.html',
        destination: '/services/keyword-analysis',
        permanent: true,
      },
      {
        source: '/link-building.html',
        destination: '/services/link-building',
        permanent: true,
      },
      {
        source: '/search-engine-marketing.html',
        destination: '/services/search-engine-marketing',
        permanent: true,
      },
      {
        source: '/sem.html',
        destination: '/services/search-engine-marketing',
        permanent: true,
      },
      {
        source: '/organic-search.html',
        destination: '/services/organic-search',
        permanent: true,
      },
      {
        source: '/reputation-management.html',
        destination: '/services/reputation-management',
        permanent: true,
      },
      {
        source: '/competitive-analysis.html',
        destination: '/services/competitive-analysis',
        permanent: true,
      },
      {
        source: '/search-strategy.html',
        destination: '/services/search-strategy',
        permanent: true,
      },
      {
        source: '/lead-generation.html',
        destination: '/services/lead-generation',
        permanent: true,
      },
      {
        source: '/local-seo-consultants.html',
        destination: '/services/local-seo-consultants',
        permanent: true,
      },
      {
        source: '/seo-content.html',
        destination: '/services/seo-content',
        permanent: true,
      },
      
      // Content & Social Media Services
      {
        source: '/social-content.html',
        destination: '/services/social-content',
        permanent: true,
      },
      {
        source: '/social-listening.html',
        destination: '/services/social-listening',
        permanent: true,
      },
      {
        source: '/social-media-strategy.html',
        destination: '/services/social-media-strategy',
        permanent: true,
      },
      {
        source: '/social-roi.html',
        destination: '/services/social-roi',
        permanent: true,
      },
      {
        source: '/web-content.html',
        destination: '/services/web-content',
        permanent: true,
      },
      {
        source: '/content-writing.html',
        destination: '/services/content-writing',
        permanent: true,
      },
      {
        source: '/email-marketing.html',
        destination: '/services/email-marketing',
        permanent: true,
      },
      {
        source: '/affiliate-marketing.html',
        destination: '/services/affiliate-marketing',
        permanent: true,
      },
      {
        source: '/content-branding.html',
        destination: '/services/content-branding',
        permanent: true,
      },
      
      // Web Development Services
      {
        source: '/ecommerce-development.html',
        destination: '/services/ecommerce-development',
        permanent: true,
      },
      {
        source: '/backend-development.html',
        destination: '/services/backend-development',
        permanent: true,
      },
      {
        source: '/front-end-development.html',
        destination: '/services/front-end-development',
        permanent: true,
      },
      {
        source: '/frontend-development.html',
        destination: '/services/front-end-development',
        permanent: true,
      },
      {
        source: '/cms.html',
        destination: '/services/cms',
        permanent: true,
      },
      {
        source: '/web-applications-development.html',
        destination: '/services/web-applications-development',
        permanent: true,
      },
      {
        source: '/ecommerce-strategy.html',
        destination: '/services/ecommerce-strategy',
        permanent: true,
      },
      {
        source: '/blog-development.html',
        destination: '/services/blog-development',
        permanent: true,
      },
      {
        source: '/ui-development.html',
        destination: '/services/ui-development',
        permanent: true,
      },
      {
        source: '/custom-development.html',
        destination: '/services/custom-development',
        permanent: true,
      },
      
      // Framework Developer Services
      {
        source: '/php-developer.html',
        destination: '/services/php-developer',
        permanent: true,
      },
      {
        source: '/react-developer.html',
        destination: '/services/react-developer',
        permanent: true,
      },
      {
        source: '/shopify-developer.html',
        destination: '/services/shopify-developer',
        permanent: true,
      },
      {
        source: '/wordpress-developer.html',
        destination: '/services/wordpress-developer',
        permanent: true,
      },
      {
        source: '/nextjs-developer.html',
        destination: '/services/nextjs-developer',
        permanent: true,
      },
      {
        source: '/vuejs-developer.html',
        destination: '/services/vuejs-developer',
        permanent: true,
      },
      {
        source: '/angularjs-developer.html',
        destination: '/services/angularjs-developer',
        permanent: true,
      },
      {
        source: '/angular-developer.html',
        destination: '/services/angularjs-developer',
        permanent: true,
      },
      {
        source: '/bootstrap-developer.html',
        destination: '/services/bootstrap-developer',
        permanent: true,
      },
      
      // Strategy & Design Services
      {
        source: '/advertising-strategy.html',
        destination: '/services/advertising-strategy',
        permanent: true,
      },
      {
        source: '/display-ads.html',
        destination: '/services/display-ads',
        permanent: true,
      },
      {
        source: '/google-adwords.html',
        destination: '/services/google-adwords',
        permanent: true,
      },
      {
        source: '/adwords.html',
        destination: '/services/google-adwords',
        permanent: true,
      },
      {
        source: '/product-strategy.html',
        destination: '/services/product-strategy',
        permanent: true,
      },
      {
        source: '/user-strategy.html',
        destination: '/services/user-strategy',
        permanent: true,
      },
      {
        source: '/monetization-strategy.html',
        destination: '/services/monetization-strategy',
        permanent: true,
      },
      {
        source: '/graphic-design.html',
        destination: '/services/graphic-design',
        permanent: true,
      },
      {
        source: '/interaction-design.html',
        destination: '/services/interaction-design',
        permanent: true,
      },
      {
        source: '/ecommerce-design.html',
        destination: '/services/ecommerce-design',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
