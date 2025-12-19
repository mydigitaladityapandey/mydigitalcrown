import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// GET - Fetch all jobs
export async function GET() {
  try {
    const { jobs } = await import('@/app/data/jobs');
    return NextResponse.json({ jobs, count: jobs.length }, { status: 200 });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}

// POST - Add new job
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      title, slug, department, location, type, experience, 
      description, requirements, responsibilities, salary, image 
    } = body;

    // Validation
    if (!title || !slug || !department || !location) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Import the current jobs
    const { jobs } = await import('@/app/data/jobs');
    
    // Use provided ID or calculate new one
    const newId = body.id || (Math.max(...jobs.map(j => j.id), 0) + 1);

    const newJob = {
      id: newId,
      title,
      slug,
      department: department || 'Digital Marketing',
      location: location || 'Mumbai, Maharashtra',
      type: type || 'Full-time',
      experience: experience || '2-4 years',
      description: description || '',
      requirements: requirements || [],
      responsibilities: responsibilities || [],
      postedDate: new Date().toISOString().split('T')[0],
      salary: salary || '₹3-6 LPA',
      image: image || 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop'
    };

    const updatedJobs = [...jobs, newJob];

    // Read file to preserve interface
    const filePath = path.join(process.cwd(), 'app/data/jobs.ts');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const interfaceMatch = fileContent.match(/(export interface Job \{[\s\S]*?\})/);
    const interfaceContent = interfaceMatch ? interfaceMatch[0] : '';

    // Write back to file
    const newFileContent = `${interfaceContent}

export const jobs: Job[] = ${JSON.stringify(updatedJobs, null, 2).replace(/"([^"]+)":/g, '$1:')};
`;

    fs.writeFileSync(filePath, newFileContent, 'utf-8');

    return NextResponse.json({ 
      message: 'Job created successfully', 
      job: newJob 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating job:', error);
    return NextResponse.json({ 
      error: 'Failed to create job',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// DELETE - Remove job by ID
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id') || '0');

    if (!id) {
      return NextResponse.json({ error: 'Job ID is required' }, { status: 400 });
    }

    // Import current jobs
    const { jobs } = await import('@/app/data/jobs');
    
    // Filter out the job to delete
    const filteredJobs = jobs.filter(job => job.id !== id);

    if (jobs.length === filteredJobs.length) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    // Read file to preserve interface
    const filePath = path.join(process.cwd(), 'app/data/jobs.ts');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const interfaceMatch = fileContent.match(/(export interface Job \{[\s\S]*?\})/);
    const interfaceContent = interfaceMatch ? interfaceMatch[0] : '';

    // Write back to file
    const newFileContent = `${interfaceContent}

export const jobs: Job[] = ${JSON.stringify(filteredJobs, null, 2).replace(/"([^"]+)":/g, '$1:')};
`;

    fs.writeFileSync(filePath, newFileContent, 'utf-8');

    return NextResponse.json({ message: 'Job deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting job:', error);
    return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 });
  }
}
