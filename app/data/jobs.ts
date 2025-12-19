export interface Job {
  id: number;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string; // Full-time, Part-time, Contract, Internship
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
  salary: string;
  image: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior SEO Specialist",
    slug: "senior-seo-specialist",
    department: "Digital Marketing",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "3-5 years",
    description: "We are looking for an experienced SEO Specialist to optimize our clients' websites and improve their search engine rankings.",
    requirements: [
      "3+ years of SEO experience",
      "Strong knowledge of Google algorithms",
      "Experience with SEO tools (Ahrefs, SEMrush, etc.)",
      "Excellent analytical skills"
    ],
    responsibilities: [
      "Conduct keyword research and analysis",
      "Optimize website content and structure",
      "Monitor and report on SEO performance",
      "Stay updated with SEO trends"
    ],
    postedDate: "2025-01-10",
    salary: "₹4-7 LPA",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Social Media Manager",
    slug: "social-media-manager",
    department: "Social Media",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our team as a Social Media Manager and create engaging content strategies for our diverse client portfolio.",
    requirements: [
      "2+ years in social media management",
      "Expertise in Instagram, Facebook, LinkedIn",
      "Creative content creation skills",
      "Analytics and reporting experience"
    ],
    responsibilities: [
      "Develop social media strategies",
      "Create and schedule content",
      "Engage with community",
      "Analyze performance metrics"
    ],
    postedDate: "2025-01-08",
    salary: "₹3-6 LPA",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Google Ads Specialist",
    slug: "google-ads-specialist",
    department: "PPC",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "2-3 years",
    description: "Looking for a Google Ads expert to manage and optimize PPC campaigns for maximum ROI.",
    requirements: [
      "Google Ads certification required",
      "2+ years PPC campaign management",
      "Budget optimization experience",
      "Strong analytical mindset"
    ],
    responsibilities: [
      "Create and manage Google Ads campaigns",
      "Optimize ad performance",
      "A/B testing and experimentation",
      "Report on campaign results"
    ],
    postedDate: "2025-01-05",
    salary: "₹3.5-6 LPA",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Content Writer - Digital Marketing",
    slug: "content-writer-digital-marketing",
    department: "Content",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "1-3 years",
    description: "We're hiring a talented content writer to create compelling content for blogs, websites, and social media.",
    requirements: [
      "Excellent English writing skills",
      "1+ years of content writing experience",
      "SEO knowledge",
      "Research and creativity"
    ],
    responsibilities: [
      "Write blog posts and articles",
      "Create website content",
      "Develop social media copy",
      "Optimize content for SEO"
    ],
    postedDate: "2025-01-03",
    salary: "₹2.5-4 LPA",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Web Developer (React/Next.js)",
    slug: "web-developer-react-nextjs",
    department: "Development",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our development team to build modern, responsive websites using React and Next.js.",
    requirements: [
      "Strong React/Next.js experience",
      "HTML, CSS, JavaScript proficiency",
      "Responsive design expertise",
      "Git version control"
    ],
    responsibilities: [
      "Develop client websites",
      "Implement responsive designs",
      "Optimize website performance",
      "Collaborate with design team"
    ],
    postedDate: "2024-12-28",
    salary: "₹4-8 LPA",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Digital Marketing Intern",
    slug: "digital-marketing-intern",
    department: "Marketing",
    location: "Mumbai, Maharashtra",
    type: "Internship",
    experience: "0-1 year",
    description: "Start your career in digital marketing with hands-on experience across SEO, social media, and content marketing.",
    requirements: [
      "Currently pursuing or completed degree",
      "Basic understanding of digital marketing",
      "Eager to learn and grow",
      "Good communication skills"
    ],
    responsibilities: [
      "Assist in campaign management",
      "Content creation support",
      "Social media management",
      "Market research"
    ],
    postedDate: "2024-12-25",
    salary: "₹10-15k/month",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
  }
];
