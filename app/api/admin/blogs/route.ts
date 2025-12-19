import { NextRequest, NextResponse } from 'next/server';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  status: 'draft' | 'published';
  slug: string;
}

// Simulated blog storage - replace with actual database
const blogs: Blog[] = [
  {
    id: '1',
    title: 'Top 10 SEO Trends to Watch in 2025',
    excerpt: 'Discover the latest SEO trends that will dominate the digital landscape in 2025 and how to leverage them for your business.',
    content: 'Full content here...',
    category: 'SEO',
    author: 'My Digital Crown Team',
    date: '2025-10-01',
    readTime: '5 min read',
    status: 'published',
    slug: 'top-10-seo-trends-2025'
  }
];

// GET - Fetch all blogs
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get('status');

  let filteredBlogs = blogs;
  if (status) {
    filteredBlogs = blogs.filter(blog => blog.status === status);
  }

  return NextResponse.json({
    success: true,
    data: filteredBlogs,
  });
}

// POST - Create new blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const newBlog = {
      id: Date.now().toString(),
      ...body,
      date: new Date().toISOString().split('T')[0],
    };

    blogs.push(newBlog);

    return NextResponse.json({
      success: true,
      data: newBlog,
      message: 'Blog created successfully',
    });
  } catch (error) {
    console.error('Create blog error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}

// PUT - Update blog
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    const index = blogs.findIndex(blog => blog.id === id);
    if (index === -1) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    blogs[index] = { ...blogs[index], ...updates };

    return NextResponse.json({
      success: true,
      data: blogs[index],
      message: 'Blog updated successfully',
    });
  } catch (error) {
    console.error('Update blog error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Blog ID is required' },
        { status: 400 }
      );
    }

    const index = blogs.findIndex(blog => blog.id === id);
    if (index === -1) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    blogs.splice(index, 1);

    return NextResponse.json({
      success: true,
      message: 'Blog deleted successfully',
    });
  } catch (error) {
    console.error('Delete blog error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}
