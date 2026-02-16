/**
 * Fashion 2026 Infographic Page
 * 
 * Two full-screen slides showcasing State of Fashion 2026 data:
 * - Slide 01: Market overview ($2T → $2.4T by 2030)
 * - Slide 02: Tariff crisis ($27B burden)
 * 
 * Source: BoF × McKinsey State of Fashion 2026
 */

import { Metadata } from 'next';
import { Slide01HeroCrossroads } from './components/Slide01HeroCrossroads';
import { Slide02TariffShock } from './components/Slide02TariffShock';

export const metadata: Metadata = {
  title: 'State of Fashion 2026: Data Infographic | StartupAI',
  description: 'Interactive data visualization of BoF × McKinsey State of Fashion 2026 report. Explore the $2 trillion fashion market facing tariff disruption and strategic shifts.',
  openGraph: {
    title: 'State of Fashion 2026: Data Infographic',
    description: 'Interactive visualization of fashion industry trends, tariff impacts, and brand strategies for 2026.',
    type: 'website',
  },
};

export default function Fashion2026Infographic() {
  return (
    <main className="bg-[#0E1117]">
      {/* Slide 01: Fashion's $2 Trillion Crossroads */}
      <Slide01HeroCrossroads />
      
      {/* Slide 02: The $27B Tariff Tax on Fashion */}
      <Slide02TariffShock />
    </main>
  );
}
