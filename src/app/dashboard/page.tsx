import React from 'react';
import { DashboardProvider } from '@/lib/dashboard/DashboardContext';
import { ToastProvider } from '@/components/dashboard/ui/Toast';
import { DashboardContainer } from '@/components/dashboard/DashboardContainer';

export const metadata = {
  title: 'Dashboard - StartupAI Auto',
  description: 'Luxury 3-panel dashboard for AI task management',
};

export default function DashboardPage({ onNavigate }: { onNavigate?: (route: string) => void }) {
  return (
    <DashboardProvider>
      <ToastProvider>
        <DashboardContainer onNavigate={onNavigate} />
      </ToastProvider>
    </DashboardProvider>
  );
}