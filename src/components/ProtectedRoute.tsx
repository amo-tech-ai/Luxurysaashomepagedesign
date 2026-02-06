/**
 * Protected Route Component
 * 
 * Wraps routes that require authentication. Redirects to login page
 * if user is not authenticated. Shows loading state while checking auth.
 */

import { useEffect, ReactNode } from 'react';
import { useAuth } from '../lib/AuthContext';
import { Loader } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

export function ProtectedRoute({ children, redirectTo = '/login' }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      // In a production app, use proper routing (React Router, Next.js, etc.)
      window.location.href = redirectTo;
    }
  }, [user, loading, redirectTo]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F7]">
        <div className="text-center">
          <Loader className="w-12 h-12 animate-spin text-[#0D5F4E] mx-auto mb-4" />
          <p className="text-sm text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render anything if not authenticated
  if (!user) {
    return null;
  }

  // Render children if authenticated
  return <>{children}</>;
}
