import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// GET - Fetch all blogs
export async function GET() {
  try {
    // Import the blogs directly
    const { blogs } = await import('@/app/data/blogs');
    
    return NextResponse.json({ blogs, count: blogs.length }, { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

// POST - Add new blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, slug, excerpt, content, image, author, date, category, readTime } = body;

    // Validation
    if (!title || !slug || !excerpt || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Import the current blogs directly
    const { blogs } = await import('@/app/data/blogs');
    
    // Use provided ID or calculate new one
    const newId = id || (Math.max(...blogs.map(b => b.id), 0) + 1);

    // Create new blog object
    const newBlog = {
      id: newId,
      title,
      slug,
      excerpt,
      content,
      image: image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      author: author || 'Aditya Pandey',
      date: date || new Date().toISOString().split('T')[0],
      category: category || 'Digital Marketing',
      readTime: readTime || '5 min read'
    };

    // Add to blogs array
    const updatedBlogs = [...blogs, newBlog];

    // Read the file
    const filePath = path.join(process.cwd(), 'app/data/blogs.ts');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Find the blogs array in the file and replace it
    // We'll reconstruct the entire export statement
    const interfaceMatch = fileContent.match(/(export interface Blog \{[\s\S]*?\})/);
    const interfaceContent = interfaceMatch ? interfaceMatch[0] : '';

    // Create the new file content with proper TypeScript formatting
    const newFileContent = `${interfaceContent}

export const blogs: Blog[] = ${JSON.stringify(updatedBlogs, null, 2).replace(/"([^"]+)":/g, '$1:')};
`;

    // Write the file
    fs.writeFileSync(filePath, newFileContent, 'utf-8');

    return NextResponse.json({ 
      message: 'Blog created successfully', 
      blog: newBlog 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ 
      error: 'Failed to create blog', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// DELETE - Remove blog by ID
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id') || '0');

    if (!id) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
    }

    // Import the current blogs
    const { blogs } = await import('@/app/data/blogs');
    
    // Filter out the blog to delete
    const filteredBlogs = blogs.filter(blog => blog.id !== id);

    if (blogs.length === filteredBlogs.length) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Read the file
    const filePath = path.join(process.cwd(), 'app/data/blogs.ts');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Extract interface
    const interfaceMatch = fileContent.match(/(export interface Blog \{[\s\S]*?\})/);
    const interfaceContent = interfaceMatch ? interfaceMatch[0] : '';

    // Create new file content
    const newFileContent = `${interfaceContent}

export const blogs: Blog[] = ${JSON.stringify(filteredBlogs, null, 2).replace(/"([^"]+)":/g, '$1:')};
`;

    fs.writeFileSync(filePath, newFileContent, 'utf-8');

    return NextResponse.json({ message: 'Blog deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
