import { NextRequest, NextResponse } from 'next/server';

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  experience: string;
  department: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  posted: string;
  status: 'draft' | 'published';
  slug: string;
}

// Simulated job storage - replace with actual database
const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior SEO Specialist',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '3-5 years',
    department: 'SEO',
    description: 'We are looking for an experienced SEO specialist to lead our SEO strategies and drive organic growth for our clients.',
    requirements: ['3+ years of SEO experience', 'Google Analytics certified', 'Strong analytical skills'],
    responsibilities: ['Develop SEO strategies', 'Conduct keyword research', 'Optimize website content'],
    posted: '2025-09-30',
    status: 'published',
    slug: 'senior-seo-specialist'
  }
];

// GET - Fetch all jobs
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get('status');

  let filteredJobs = jobs;
  if (status) {
    filteredJobs = jobs.filter(job => job.status === status);
  }

  return NextResponse.json({
    success: true,
    data: filteredJobs,
  });
}

// POST - Create new job
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const newJob = {
      id: Date.now().toString(),
      ...body,
      posted: new Date().toISOString().split('T')[0],
    };

    jobs.push(newJob);

    return NextResponse.json({
      success: true,
      data: newJob,
      message: 'Job created successfully',
    });
  } catch (error) {
    console.error('Create job error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create job' },
      { status: 500 }
    );
  }
}

// PUT - Update job
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    const index = jobs.findIndex(job => job.id === id);
    if (index === -1) {
      return NextResponse.json(
        { success: false, error: 'Job not found' },
        { status: 404 }
      );
    }

    jobs[index] = { ...jobs[index], ...updates };

    return NextResponse.json({
      success: true,
      data: jobs[index],
      message: 'Job updated successfully',
    });
  } catch (error) {
    console.error('Update job error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update job' },
      { status: 500 }
    );
  }
}

// DELETE - Delete job
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Job ID is required' },
        { status: 400 }
      );
    }

    const index = jobs.findIndex(job => job.id === id);
    if (index === -1) {
      return NextResponse.json(
        { success: false, error: 'Job not found' },
        { status: 404 }
      );
    }

    jobs.splice(index, 1);

    return NextResponse.json({
      success: true,
      message: 'Job deleted successfully',
    });
  } catch (error) {
    console.error('Delete job error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete job' },
      { status: 500 }
    );
  }
}
