import React from 'react';
import IdeationDashboardWithToast from '@/components/dashboard/IdeationDashboard';

export const metadata = {
  title: 'Ideation - StartupAI',
  description: 'AI-generated ideas for your project',
};

export default function IdeationPage({ onNavigate }: { onNavigate?: (route: string) => void }) {
  return <IdeationDashboardWithToast onNavigate={onNavigate} />;
}