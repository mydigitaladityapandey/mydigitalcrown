'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  status: 'draft' | 'published';
}

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  status: 'draft' | 'published';
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'blogs' | 'jobs'>('blogs');
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    // Load data
    loadData();
  }, [router]);

  const loadData = async () => {
    try {
      // Fetch blogs
      const blogsResponse = await fetch('/api/blogs');
      if (blogsResponse.ok) {
        const blogsData = await blogsResponse.json();
        const formattedBlogs = (blogsData.blogs || []).map((blog: { 
          id: number; 
          title: string; 
          excerpt: string; 
          category: string; 
          author: string; 
          date: string;
        }) => ({
          id: blog.id?.toString() || '',
          title: blog.title || '',
          excerpt: blog.excerpt || '',
          category: blog.category || '',
          author: blog.author || '',
          date: blog.date || '',
          status: 'published' as const
        }));
        setBlogs(formattedBlogs);
      }

      // Fetch jobs
      const jobsResponse = await fetch('/api/jobs');
      if (jobsResponse.ok) {
        const jobsData = await jobsResponse.json();
        const formattedJobs = (jobsData.jobs || []).map((job: { 
          id: number; 
          title: string; 
          location: string; 
          type: string; 
          department: string;
        }) => ({
          id: job.id?.toString() || '',
          title: job.title || '',
          location: job.location || '',
          type: job.type || '',
          department: job.department || '',
          status: 'published' as const
        }));
        setJobs(formattedJobs);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  const handleDelete = async (type: 'blog' | 'job', id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    try {
      const endpoint = type === 'blog' ? '/api/blogs' : '/api/jobs';
      const response = await fetch(`${endpoint}?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert(`${type === 'blog' ? 'Blog' : 'Job'} deleted successfully!`);
        // Reload data
        loadData();
      } else {
        const data = await response.json();
        alert(data.error || `Failed to delete ${type}`);
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
      alert(`Error deleting ${type}`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Manage your content</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
              >
                View Site →
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Blogs</p>
                <p className="text-3xl font-bold text-gray-900">{blogs.length}</p>
              </div>
              <div className="text-4xl">📝</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Jobs</p>
                <p className="text-3xl font-bold text-gray-900">{jobs.length}</p>
              </div>
              <div className="text-4xl">💼</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Published</p>
                <p className="text-3xl font-bold text-gray-900">
                  {blogs.filter(b => b.status === 'published').length + 
                   jobs.filter(j => j.status === 'published').length}
                </p>
              </div>
              <div className="text-4xl">✅</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('blogs')}
                className={`px-6 py-4 font-semibold border-b-2 transition-colors ${
                  activeTab === 'blogs'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Blog Posts
              </button>
              <button
                onClick={() => setActiveTab('jobs')}
                className={`px-6 py-4 font-semibold border-b-2 transition-colors ${
                  activeTab === 'jobs'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Job Openings
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'blogs' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Blog Posts</h2>
                  <Link
                    href="/admin/dashboard/blogs/new"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    + New Blog Post
                  </Link>
                </div>

                {blogs.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <p className="text-4xl mb-4">📝</p>
                    <p>No blog posts yet. Create your first one!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {blogs.map((blog) => (
                      <div
                        key={blog.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {blog.title}
                              </h3>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                blog.status === 'published' 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {blog.status}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{blog.excerpt}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span>{blog.category}</span>
                              <span>•</span>
                              <span>{blog.author}</span>
                              <span>•</span>
                              <span>{blog.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            <Link
                              href={`/admin/dashboard/blogs/edit/${blog.id}`}
                              className="text-blue-600 hover:text-blue-700 px-3 py-1 text-sm"
                            >
                              Edit
                            </Link>
                            <button 
                              onClick={() => handleDelete('blog', blog.id)}
                              className="text-red-600 hover:text-red-700 px-3 py-1 text-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'jobs' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Job Openings</h2>
                  <Link
                    href="/admin/dashboard/jobs/new"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    + New Job Opening
                  </Link>
                </div>

                {jobs.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <p className="text-4xl mb-4">💼</p>
                    <p>No job openings yet. Create your first one!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {jobs.map((job) => (
                      <div
                        key={job.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {job.title}
                              </h3>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                job.status === 'published' 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {job.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>📍 {job.location}</span>
                              <span>💼 {job.department}</span>
                              <span>⏰ {job.type}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            <Link
                              href={`/admin/dashboard/jobs/edit/${job.id}`}
                              className="text-blue-600 hover:text-blue-700 px-3 py-1 text-sm"
                            >
                              Edit
                            </Link>
                            <button 
                              onClick={() => handleDelete('job', job.id)}
                              className="text-red-600 hover:text-red-700 px-3 py-1 text-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
