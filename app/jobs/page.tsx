'use client';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements?: string[];
  responsibilities?: string[];
  salary?: string;
  postedDate?: string;
  applyLink?: string;
}

export default function Jobs() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [jobs, setJobs] = useState<Job[]>([
    // Default jobs - will be replaced by API data if available
    {
      id: 1,
      title: "Senior SEO Specialist",
      department: "SEO",
      location: "Mumbai",
      type: "Full-time",
      experience: "5+ years",
      description: "We're looking for an experienced SEO specialist to lead our search optimization strategies.",
      applyLink: "mailto:mydigitalcrown@gmail.com"
    },
    {
      id: 2,
      title: "Social Media Manager",
      department: "Social Media",
      location: "Mumbai",
      type: "Full-time",
      experience: "3+ years",
      description: "Join us as a Social Media Manager to create engaging content and manage our clients' social presence.",
      applyLink: "mailto:mydigitalcrown@gmail.com"
    }
  ]);

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs');
        const data = await response.json();
        if (data.jobs && data.jobs.length > 0) {
          setJobs(data.jobs);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  const getBadgeColor = (index: number) => {
    const colors = [
      { bg: 'bg-blue-100', text: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700' },
      { bg: 'bg-purple-100', text: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700' },
      { bg: 'bg-green-100', text: 'text-green-600', button: 'bg-green-600 hover:bg-green-700' },
      { bg: 'bg-orange-100', text: 'text-orange-600', button: 'bg-orange-600 hover:bg-orange-700' },
    ];
    return colors[index % colors.length];
  };

  return (
    <>
      <Navbar />
      <main 
        className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-blue-50 to-white"
        itemScope 
        itemType="https://schema.org/WebPage"
        role="main"
        aria-label="Career Opportunities at MyDigital Crown"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - SEO Optimized */}
          <header className="text-center mb-12" itemScope itemType="https://schema.org/Organization" itemProp="provider">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" itemProp="headline">
              MyDigital Crown Job Opening - <span className="text-blue-600">Apply Now</span>
            </h1>
            <p className="text-2xl text-gray-700 font-semibold mb-4">
              Career Opportunities in Digital Marketing | Mumbai&apos;s #1 Agency
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6" itemProp="description">
              Join MyDigital Crown - Mumbai&apos;s leading digital marketing agency. Explore exciting career opportunities in SEO, Social Media Marketing, Web Development, Content Marketing & PPC with competitive salaries ₹3-15 LPA, growth opportunities, and a dynamic work culture. Apply for MyDigital Crown job opening today!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-700">
              <span className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <strong>Location:</strong> Mumbai, Maharashtra
              </span>
              <span className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <strong>Salary:</strong> ₹3-15 LPA
              </span>
              <span className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <strong>Positions:</strong> SEO, Social Media, Development
              </span>
            </div>
          </header>

          {/* Department Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedDepartment(null)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedDepartment === null
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                All Departments
              </button>
              {['SEO', 'Social Media', 'Content Marketing', 'Web Development', 'Digital Marketing', 'Design'].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedDepartment === dept
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filter Display */}
          {selectedDepartment && (
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="text-gray-600">Showing jobs in:</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                {selectedDepartment}
              </span>
              <button
                onClick={() => setSelectedDepartment(null)}
                className="text-red-600 hover:text-red-700 font-semibold"
              >
                Clear ✕
              </button>
            </div>
          )}

          <div className="space-y-6" id="job-listings">
            {jobs
              .filter((job) => !selectedDepartment || job.department === selectedDepartment)
              .length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <div className="text-6xl mb-6">💼</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedDepartment 
                    ? `No ${selectedDepartment} Positions Available` 
                    : 'No Job Openings Available'}
                </h3>
                <p className="text-gray-500 text-lg mb-8">
                  {selectedDepartment 
                    ? `We don't have any openings in ${selectedDepartment} at the moment.` 
                    : 'Please check back later!'}
                </p>
                {selectedDepartment && (
                  <button
                    onClick={() => setSelectedDepartment(null)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all"
                  >
                    View All Jobs
                  </button>
                )}
              </div>
            ) : (
              jobs
                .filter((job) => !selectedDepartment || job.department === selectedDepartment)
                .map((job, index) => {
              const colors = getBadgeColor(index);
              return (
                <div key={job.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-3xl font-bold text-gray-900">{job.title}</h3>
                        <span className={`${colors.bg} ${colors.text} px-4 py-2 rounded-full text-sm font-bold`}>
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <strong>{job.location}</strong>
                        </span>
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <strong>{job.experience} experience</strong>
                        </span>
                        {job.salary && (
                          <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <strong>{job.salary}</strong>
                          </span>
                        )}
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <strong>{job.department}</strong>
                        </span>
                      </div>
                    </div>
                    <a 
                      href={`mailto:mydigitalcrown@gmail.com?subject=Application for ${encodeURIComponent(job.title)}&body=Hi MyDigital Crown Team,%0D%0A%0D%0AI am interested in applying for the ${encodeURIComponent(job.title)} position.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AName: %0D%0APhone: %0D%0AExperience: %0D%0AResume: [Attach your resume]%0D%0A%0D%0AThank you!`}
                      className={`${colors.button} text-white px-8 py-4 rounded-lg transition-colors font-bold whitespace-nowrap text-center shadow-lg hover:shadow-xl`}
                    >
                      Apply Now
                    </a>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">About the Role</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Requirements */}
                  {job.requirements && Array.isArray(job.requirements) && job.requirements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Responsibilities */}
                  {job.responsibilities && Array.isArray(job.responsibilities) && job.responsibilities.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Posted Date */}
                  {job.postedDate && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        Posted on {new Date(job.postedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
            )}
          </div>

          {/* Keep the old hardcoded jobs below in case someone wants to see them */}
          <div className="hidden space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">Senior SEO Specialist</h3>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Full-time</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Join us as a Social Media Manager to create engaging content and manage our clients&apos; social presence.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Mumbai
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      3+ years experience
                    </span>
                  </div>
                </div>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">Digital Marketing Intern</h3>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">Internship</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Kickstart your career in digital marketing with hands-on experience across multiple channels.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Mumbai
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Freshers welcome
                    </span>
                  </div>
                </div>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Voice Search Quick Answers - VSO Optimization */}
          <section className="mt-16 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Quick Answers About <span className="text-blue-600">MyDigital Crown Jobs</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all border border-blue-100">
                <h3 className="text-xl font-bold mb-3 text-blue-600">
                  🎯 Who provides digital marketing job opportunities?
                </h3>
                <p className="text-gray-700">
                  MyDigital Crown, Mumbai&apos;s #1 digital marketing agency, offers exciting career opportunities in SEO, Social Media Marketing, Web Development, Content Marketing with ₹3-15 LPA salary packages and growth prospects.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all border border-purple-100">
                <h3 className="text-xl font-bold mb-3 text-purple-600">
                  💰 What is the salary for MyDigital Crown jobs?
                </h3>
                <p className="text-gray-700">
                  Competitive salaries: Entry-level ₹3-5 LPA, Mid-level ₹6-10 LPA, Senior roles ₹10-15+ LPA. Plus performance bonuses (20%), health insurance, paid leaves, and flexible work options.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all border border-green-100">
                <h3 className="text-xl font-bold mb-3 text-green-600">
                  ⏱️ How to apply for MyDigital Crown job opening?
                </h3>
                <p className="text-gray-700">
                  Browse openings above, click &quot;Apply Now&quot;, send resume to mydigitalcrown@gmail.com. HR reviews within 48 hours. Interview process takes 7-14 days. Call +91-83695-11877 for queries.
                </p>
              </div>
            </div>
          </section>

          {/* Comprehensive FAQ Section - SEO/VSO/ASO Optimization */}
          <section className="mt-16 mb-12" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Frequently Asked Questions About <span className="text-blue-600">MyDigital Crown Careers</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg text-gray-900" itemProp="name">
                  ✅ What job openings are available at MyDigital Crown?
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="mt-4 text-gray-700 leading-relaxed" itemProp="text">
                    MyDigital Crown currently offers positions in: <strong>SEO</strong> (SEO Specialist, SEO Executive), <strong>Social Media Marketing</strong> (Social Media Manager, Content Creator), <strong>Web Development</strong> (Frontend/Full Stack Developer), <strong>Content Marketing</strong> (Content Writer, Copywriter), <strong>PPC Advertising</strong> (Google Ads Specialist), and <strong>Design</strong> (Graphic Designer, UI/UX Designer). Check listings above for current openings, requirements, and application details.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg text-gray-900" itemProp="name">
                  ✅ How do I apply for MyDigital Crown job opening in Mumbai?
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="mt-4 text-gray-700 leading-relaxed" itemProp="text">
                    <strong>Application Process:</strong> 1) Browse job openings on this page 2) Click &quot;Apply Now&quot; on desired position 3) Email opens with pre-filled template 4) Attach resume (PDF format) 5) Include cover letter with skills/experience 6) Send to <strong>mydigitalcrown@gmail.com</strong>. Our recruitment team reviews applications within <strong>2-3 business days</strong> and contacts shortlisted candidates for interviews. Call <strong>+91-83695-11877</strong> for application status.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg text-gray-900" itemProp="name">
                  ✅ What is the salary range for digital marketing jobs at MyDigital Crown?
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="mt-4 text-gray-700 leading-relaxed" itemProp="text">
                    <strong>Salary Structure:</strong> Entry-level (0-2 years) - <strong>₹3-5 LPA</strong>, Mid-level (3-5 years) - <strong>₹6-10 LPA</strong>, Senior (5+ years) - <strong>₹10-15+ LPA</strong>, Management (8+ years) - <strong>₹15-25+ LPA</strong>. <strong>Additional Benefits:</strong> Performance bonuses (up to 20%), health insurance, 24 casual + 12 sick leaves, flexible work arrangements, WFH options, professional certifications, annual increments, festival bonuses, and career growth opportunities.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg text-gray-900" itemProp="name">
                  ✅ Does MyDigital Crown hire freshers or require experience?
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="mt-4 text-gray-700 leading-relaxed" itemProp="text">
                    <strong>Yes! We welcome both freshers and experienced professionals.</strong> MyDigital Crown offers internship programs and entry-level positions for fresh graduates passionate about digital marketing. Our <strong>comprehensive 2-week onboarding program</strong> provides hands-on training in SEO, social media, content creation, Google Analytics, and campaign management. We look for: strong communication skills, creativity, willingness to learn, analytical thinking, and passion for digital marketing regardless of experience level.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg text-gray-900" itemProp="name">
                  ✅ What is the interview process at MyDigital Crown?
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="mt-4 text-gray-700 leading-relaxed" itemProp="text">
                    <strong>5-Step Hiring Process:</strong> 1) <strong>Application Review</strong> - HR screens resumes within 48 hours 2) <strong>Phone Screening</strong> - 15-20 min call about background/expectations 3) <strong>Technical Interview</strong> - 45-60 min with department head covering skills/knowledge 4) <strong>Practical Assignment</strong> - Real-world task to assess problem-solving 5) <strong>Final Interview</strong> - Management discussion on culture fit/career goals. <strong>Timeline:</strong> 7-14 days total. Offer letter issued within 1 week of final interview. Transparency and feedback provided at every stage.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg text-gray-900" itemProp="name">
                  ✅ What skills are required for digital marketing jobs?
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="mt-4 text-gray-700 leading-relaxed" itemProp="text">
                    <strong>SEO:</strong> Keyword research, on-page/off-page optimization, Google Analytics, Search Console, link building, technical SEO. <strong>Social Media:</strong> Content creation, platform management (Facebook, Instagram, LinkedIn), analytics, engagement. <strong>Content:</strong> SEO copywriting, research, creativity, storytelling. <strong>Web Development:</strong> HTML/CSS/JavaScript, React/Next.js, responsive design. <strong>PPC:</strong> Google Ads, Facebook Ads, campaign optimization, budget management. <strong>Soft Skills:</strong> Communication, teamwork, creativity, analytical thinking, adaptability, time management.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg text-gray-900" itemProp="name">
                  ✅ What are MyDigital Crown office location and working hours?
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="mt-4 text-gray-700 leading-relaxed" itemProp="text">
                    <strong>Office Location:</strong> Chembur, Mumbai - 400071 (easily accessible via local trains & buses). <strong>Working Hours:</strong> Monday-Friday, 10:00 AM - 7:00 PM (<strong>5-day work week</strong>, Saturdays & Sundays off). <strong>Flexible Options:</strong> Early start (9 AM-6 PM) or late start (11 AM-8 PM). <strong>Hybrid Model:</strong> Work-from-home 2-3 days/week for eligible positions. Modern office with cafeteria, gaming zone, break rooms, and collaborative workspaces.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg text-gray-900" itemProp="name">
                  ✅ What employee benefits does MyDigital Crown provide?
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="mt-4 text-gray-700 leading-relaxed" itemProp="text">
                    <strong>Comprehensive Benefits Package:</strong> Competitive salary + annual increments, Performance bonuses (up to 20%), Health insurance (medical + accidental), 24 casual + 12 sick leaves annually, Flexible work & WFH options, Professional certifications (Google Analytics, Ads, HubSpot) sponsored, Training & skill development programs, Modern office amenities, Team outings & activities, Festival bonuses & gifts, Referral bonuses, Employee recognition programs, Career growth with clear promotion paths, Collaborative culture valuing innovation & creativity.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg text-gray-900" itemProp="name">
                  ✅ How can I prepare for a MyDigital Crown interview?
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="mt-4 text-gray-700 leading-relaxed" itemProp="text">
                    <strong>Interview Preparation Tips:</strong> Research MyDigital Crown services, clients, case studies thoroughly. Review job description, align your skills with requirements. Prepare examples of past projects/campaigns with <strong>measurable results</strong>. Stay updated on digital marketing trends, algorithm updates, best practices. Prepare questions about team structure, growth, responsibilities. For technical roles, brush up on tools (Google Analytics, SEMrush, social platforms, coding). Practice common interview questions, articulate thought process clearly. Bring portfolio samples, campaign metrics, project documentation. Dress professionally, arrive 10 minutes early.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg text-gray-900" itemProp="name">
                  ✅ Does MyDigital Crown provide training and skill development?
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="mt-4 text-gray-700 leading-relaxed" itemProp="text">
                    <strong>Yes! Extensive Training Programs:</strong> Comprehensive 2-week onboarding for new joiners, Regular training on new tools/platforms/strategies, Industry certifications (Google Analytics, Ads, HubSpot, Facebook Blueprint) company-sponsored, Weekly knowledge-sharing sessions & workshops, Access to premium learning platforms, Mentorship programs (juniors paired with seniors), Attendance at industry conferences/events, Hands-on experience with diverse client projects, Cross-functional training to expand skillsets, Continuous feedback & performance reviews for growth tracking. <strong>Investment in employee development is our priority.</strong>
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg text-gray-900" itemProp="name">
                  ✅ What is the company culture like at MyDigital Crown?
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="mt-4 text-gray-700 leading-relaxed" itemProp="text">
                    <strong>Vibrant & Collaborative Culture:</strong> Innovation & creativity in problem-solving, Open communication with flat hierarchy, Work-life balance with flexible schedules, Team collaboration across departments, Recognition & celebration of achievements, Diversity & inclusion welcoming all backgrounds, Continuous learning & growth mindset, Fun & energetic environment with activities, Results-oriented (impact over hours), Transparent feedback & evaluation systems, Employee well-being through health initiatives, Social responsibility via community programs. <strong>We&apos;re not just colleagues, we&apos;re a family!</strong>
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg text-gray-900" itemProp="name">
                  ✅ How long does it take to hear back after applying?
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="mt-4 text-gray-700 leading-relaxed" itemProp="text">
                    <strong>Response Timeline:</strong> Initial acknowledgment email within <strong>24 hours</strong> of application, Application review completed within <strong>2-3 business days</strong>, Phone screening for shortlisted candidates within <strong>1 week</strong>, Interview rounds over <strong>1-2 weeks</strong> (scheduling dependent), Final decision within <strong>3-5 days</strong> after last interview, Complete hiring process takes <strong>2-3 weeks average</strong>. If you don&apos;t hear back, follow up at mydigitalcrown@gmail.com or call +91-83695-11877. We appreciate your patience & interest in joining our team!
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-16 mb-12">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-12 shadow-2xl text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Don&apos;t see a position matching your skills? Send your resume anyway! We&apos;re always looking for talented individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:mydigitalcrown@gmail.com?subject=Job Application - MyDigital Crown"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all text-lg"
                >
                  📧 Send Your Resume
                </a>
                <a
                  href="tel:+918369511877"
                  className="bg-white/10 backdrop-blur-lg border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-lg"
                >
                  📞 Call HR: +91-83695-11877
                </a>
              </div>
            </div>
          </section>

          {/* Comprehensive Schema Markup for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "WebPage",
                    "@id": "https://mydigitalcrown.in/jobs#webpage",
                    "url": "https://mydigitalcrown.in/jobs",
                    "name": "MyDigital Crown Job Opening | Career Opportunities in Digital Marketing Mumbai",
                    "description": "Join MyDigital Crown - Mumbai's #1 Digital Marketing Agency. Explore exciting career opportunities in SEO, Social Media Marketing, Web Development with ₹3-15 LPA salary",
                    "isPartOf": {
                      "@id": "https://mydigitalcrown.in/#website"
                    },
                    "about": {
                      "@id": "https://mydigitalcrown.in/#organization"
                    },
                    "primaryImageOfPage": {
                      "@type": "ImageObject",
                      "url": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=630",
                      "width": 1200,
                      "height": 630
                    },
                    "datePublished": "2024-01-01T00:00:00+05:30",
                    "dateModified": "2025-10-23T00:00:00+05:30",
                    "inLanguage": "en-IN"
                  },
                  {
                    "@type": "Organization",
                    "@id": "https://mydigitalcrown.in/#organization",
                    "name": "MyDigital Crown",
                    "url": "https://mydigitalcrown.in",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://mydigitalcrown.in/images/logo.png",
                      "width": 250,
                      "height": 60
                    },
                    "contactPoint": [
                      {
                        "@type": "ContactPoint",
                        "telephone": "+91-83695-11877",
                        "contactType": "Human Resources",
                        "email": "mydigitalcrown@gmail.com",
                        "areaServed": "IN",
                        "availableLanguage": ["English", "Hindi"]
                      }
                    ],
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Chembur",
                      "addressLocality": "Mumbai",
                      "addressRegion": "Maharashtra",
                      "postalCode": "400071",
                      "addressCountry": "IN"
                    },
                    "sameAs": [
                      "https://www.facebook.com/mydigitalcrown",
                      "https://www.instagram.com/mydigitalcrown",
                      "https://www.linkedin.com/company/mydigitalcrown",
                      "https://twitter.com/mydigitalcrown"
                    ],
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "bestRating": "5",
                      "worstRating": "1",
                      "ratingCount": "127"
                    }
                  },
                  {
                    "@type": "BreadcrumbList",
                    "@id": "https://mydigitalcrown.in/jobs#breadcrumb",
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
                        "name": "Careers",
                        "item": "https://mydigitalcrown.in/jobs"
                      }
                    ]
                  },
                  {
                    "@type": "ItemList",
                    "@id": "https://mydigitalcrown.in/jobs#jobpostings",
                    "name": "MyDigital Crown Job Openings",
                    "description": "Current job openings at MyDigital Crown digital marketing agency",
                    "numberOfItems": jobs.length,
                    "itemListElement": jobs.slice(0, 10).map((job, index) => ({
                      "@type": "ListItem",
                      "position": index + 1,
                      "item": {
                        "@type": "JobPosting",
                        "title": job.title,
                        "description": job.description,
                        "identifier": {
                          "@type": "PropertyValue",
                          "name": "Job ID",
                          "value": `MDC-${job.id}`
                        },
                        "datePosted": job.postedDate || "2025-01-01",
                        "validThrough": "2025-12-31",
                        "employmentType": job.type === "Full-time" ? "FULL_TIME" : job.type === "Part-time" ? "PART_TIME" : "INTERN",
                        "hiringOrganization": {
                          "@type": "Organization",
                          "name": "MyDigital Crown",
                          "sameAs": "https://mydigitalcrown.in",
                          "logo": "https://mydigitalcrown.in/images/logo.png"
                        },
                        "jobLocation": {
                          "@type": "Place",
                          "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Chembur",
                            "addressLocality": "Mumbai",
                            "addressRegion": "Maharashtra",
                            "postalCode": "400071",
                            "addressCountry": "IN"
                          }
                        },
                        "baseSalary": {
                          "@type": "MonetaryAmount",
                          "currency": "INR",
                          "value": {
                            "@type": "QuantitativeValue",
                            "minValue": 300000,
                            "maxValue": 1500000,
                            "unitText": "YEAR"
                          }
                        },
                        "experienceRequirements": {
                          "@type": "OccupationalExperienceRequirements",
                          "monthsOfExperience": job.experience.includes("5") ? 60 : job.experience.includes("3") ? 36 : 0
                        },
                        "qualifications": job.requirements?.join(", ") || "Bachelor's degree, Strong communication skills, Digital marketing knowledge",
                        "responsibilities": job.responsibilities?.join(", ") || job.description,
                        "skills": "Digital Marketing, SEO, Social Media, Content Marketing, Analytics",
                        "industry": "Internet Marketing, Digital Marketing, Advertising",
                        "occupationalCategory": job.department,
                        "workHours": "Monday to Friday, 10:00 AM to 7:00 PM",
                        "benefits": "Health insurance, Performance bonuses, Flexible work arrangements, Professional development, Work-life balance",
                        "applicationContact": {
                          "@type": "ContactPoint",
                          "email": "mydigitalcrown@gmail.com",
                          "telephone": "+91-83695-11877",
                          "contactType": "Human Resources"
                        },
                        "directApply": true,
                        "jobImmediateStart": true,
                        "salaryCurrency": "INR"
                      }
                    }))
                  },
                  {
                    "@type": "FAQPage",
                    "@id": "https://mydigitalcrown.in/jobs#faq",
                    "mainEntity": [
                      {
                        "@type": "Question",
                        "name": "What job openings are currently available at MyDigital Crown?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "MyDigital Crown offers positions in SEO (Senior SEO Specialist, SEO Executive), Social Media Marketing (Social Media Manager, Content Creator), Web Development (Frontend Developer, Full Stack Developer), Content Marketing (Content Writer, Copywriter), PPC Advertising (Google Ads Specialist), and Design (Graphic Designer, UI/UX Designer). Salary ranges from ₹3-15 LPA based on experience."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How do I apply for a job at MyDigital Crown Mumbai?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Browse available job openings, click 'Apply Now' on your desired position, and send your resume via email to mydigitalcrown@gmail.com. Include a cover letter highlighting your skills and experience. Our HR team reviews applications within 48 hours and contacts shortlisted candidates within 2-3 business days."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the salary range for digital marketing jobs?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Salaries at MyDigital Crown range from ₹3-15 LPA: Entry-level (0-2 years) ₹3-5 LPA, Mid-level (3-5 years) ₹6-10 LPA, Senior (5+ years) ₹10-15+ LPA. Additional benefits include performance bonuses up to 20%, health insurance, paid leaves, flexible work options, and annual increments."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Does MyDigital Crown hire freshers?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes! MyDigital Crown welcomes both freshers and experienced professionals. We offer internship programs and entry-level positions for fresh graduates with comprehensive training in SEO, social media, content creation, and analytics. 2-week onboarding program included."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the interview process at MyDigital Crown?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "5-step process: 1) Application review (48 hours), 2) Phone screening (15-20 min), 3) Technical interview (45-60 min), 4) Practical assignment, 5) Final interview with management. Total process takes 7-14 days. Offer letter issued within 1 week of final interview."
                        }
                      }
                    ]
                  },
                  {
                    "@type": "HowTo",
                    "@id": "https://mydigitalcrown.in/jobs#howto",
                    "name": "How to Apply for MyDigital Crown Job Opening",
                    "description": "Step-by-step guide to apply for digital marketing jobs at MyDigital Crown",
                    "totalTime": "PT10M",
                    "step": [
                      {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Browse Job Openings",
                        "text": "Visit the careers page and review current job openings across SEO, Social Media, Web Development, and other departments",
                        "url": "https://mydigitalcrown.in/jobs",
                        "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Select Desired Position",
                        "text": "Click on the job title to view full requirements, responsibilities, and qualifications for the position"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Click Apply Now",
                        "text": "Click the 'Apply Now' button which will open your email client with a pre-filled application template"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Attach Resume and Send",
                        "text": "Attach your updated resume in PDF format, include a cover letter, and send to mydigitalcrown@gmail.com. HR team responds within 48 hours."
                      }
                    ]
                  }
                ]
              })
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
