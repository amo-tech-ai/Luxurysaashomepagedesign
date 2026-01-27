import React from 'react';
import { RoadmapContainer } from '@/components/dashboard/RoadmapContainer';

export const metadata = {
  title: 'Roadmap - StartupAI Auto',
  description: 'Product roadmap and feature planning',
};

export default function RoadmapPage({ onNavigate }: { onNavigate?: (route: string) => void }) {
  return <RoadmapContainer onNavigate={onNavigate} />;
}