'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/admin/login');
  }, [router]);
  
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white text-lg">Redirecting to admin login...</div>
    </div>
  );
}
