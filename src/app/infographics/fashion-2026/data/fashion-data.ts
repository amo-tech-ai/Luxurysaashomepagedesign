/**
 * Data for Fashion 2026 Infographic
 * 
 * Source: BoF × McKinsey State of Fashion 2026
 * All data points verified against source documents
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface StatData {
  value: string;
  label: string;
  delay?: number;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  category?: 'improve' | 'worsen';
}

export interface CountryTariffData {
  country: string;
  fullName: string;
  rate: number;
}

export interface ResponseNodeData {
  id: string;
  label: string;
  percentage: string;
  description: string;
}

export interface FlowDiagramData {
  root: {
    label: string;
    sublabel: string;
  };
  responses: ResponseNodeData[];
}

// ============================================================================
// SLIDE 01: FASHION'S $2 TRILLION CROSSROADS
// ============================================================================

export const slide01Data = {
  sectionTitle: "Fashion's $2 Trillion Crossroads",
  
  // Hero stat (count-up animation)
  heroStat: {
    startValue: 2.0,
    endValue: 2.4,
    suffix: 'T',
    prefix: '$',
    subtitle: 'by 2030',
  },
  
  // Supporting stats (3-column cards)
  supportingStats: [
    {
      value: '46%',
      label: 'of executives expect conditions to worsen in 2026',
      delay: 0,
    },
    {
      value: '76%',
      label: 'cite tariffs as the #1 factor shaping the industry',
      delay: 0.15,
    },
    {
      value: 'Low single-digit',
      label: 'growth forecast across all regions',
      delay: 0.3,
    },
  ] as StatData[],
  
  // Analysis paragraph
  analysis: `The global fashion industry faces its most uncertain period in a decade. While the market is projected to grow from $2.0T to $2.4T by 2030, executive sentiment has turned sharply negative — 46% expect worsening conditions, up from 39% in 2025. Trade disruptions dominate the outlook.`,
  
  // Executive sentiment evolution chart
  sentimentChart: {
    title: 'Executive Sentiment Evolution',
    data: [
      // Conditions will improve
      { label: '2024', value: 20, category: 'improve' as const },
      { label: '2025', value: 20, category: 'improve' as const },
      { label: '2026', value: 25, category: 'improve' as const },
      // Conditions will worsen
      { label: '2024', value: 33, category: 'worsen' as const },
      { label: '2025', value: 39, category: 'worsen' as const },
      { label: '2026', value: 46, category: 'worsen' as const },
    ] as ChartDataPoint[],
  },
  
  // Source attribution
  source: 'BoF × McKinsey State of Fashion 2026',
};

// ============================================================================
// SLIDE 02: THE $27B TARIFF TAX ON FASHION
// ============================================================================

export const slide02Data = {
  sectionTitle: 'The $27B Tariff Tax on Fashion',
  
  // Hero stat (scale animation)
  heroStat: {
    value: '$27B',
    subtitle: 'incremental duties on US apparel imports',
  },
  
  // Supporting stats (3-column cards)
  supportingStats: [
    {
      value: 'Tariffs spiked 13% → 54%',
      label: 'in April 2025',
      delay: 0,
    },
    {
      value: '55%',
      label: 'of brands plan to raise prices',
      delay: 0.15,
    },
    {
      value: 'China imports down 30%',
      label: 'since 2019',
      delay: 0.3,
    },
  ] as StatData[],
  
  // Analysis paragraph
  analysis: `US fashion faces a $27B tariff shock. Duties spiked from 13% to 54% on apparel in April 2025, settling at 36%. With 89% of apparel imported, brands face a brutal choice: absorb costs, raise prices, or restructure supply chains. China's share is collapsing — down 30% — while Cambodia and Vietnam surge.`,
  
  // Country tariff rates chart
  tariffChart: {
    title: 'Tariff Rates by Sourcing Country (%)',
    data: [
      { country: 'CHN', fullName: 'China', rate: 76 },
      { country: 'VNM', fullName: 'Vietnam', rate: 58 },
      { country: 'IND', fullName: 'India', rate: 61 },
      { country: 'BGD', fullName: 'Bangladesh', rate: 45 },
      { country: 'KHM', fullName: 'Cambodia', rate: 58 },
      { country: 'IDN', fullName: 'Indonesia', rate: 47 },
      { country: 'EU', fullName: 'European Union', rate: 33 },
      { country: 'PAK', fullName: 'Pakistan', rate: 46 },
    ] as CountryTariffData[],
  },
  
  // Brand response flow diagram
  brandResponseDiagram: {
    title: 'How Brands Are Responding',
    root: {
      label: 'TARIFF SHOCK',
      sublabel: '13% → 54% April 2025',
    },
    responses: [
      {
        id: 'price',
        label: 'PRICE INCREASES',
        percentage: '55%',
        description: 'Brands pass costs to consumers',
      },
      {
        id: 'sourcing',
        label: 'SOURCING SHIFTS',
        percentage: '35%',
        description: 'Relocate production to lower-tariff countries',
      },
      {
        id: 'sku',
        label: 'SKU REDUCTION',
        percentage: '27%',
        description: 'Cut product lines to reduce complexity',
      },
    ] as ResponseNodeData[],
  } as FlowDiagramData,
  
  // Source attribution
  source: 'BoF × McKinsey State of Fashion 2026; Strategic Intelligence Report',
};

// ============================================================================
// COLOR PALETTE (Design System)
// ============================================================================

export const colors = {
  // Background
  background: '#0E1117',
  surface: '#1E293B',
  surfaceTransparent: 'rgba(30, 41, 59, 0.3)',
  
  // Accent colors
  violet: {
    primary: '#7C3AED',
    dark: '#6D28D9',
    light: '#8B5CF6',
  },
  emerald: {
    primary: '#10B981',
    dark: '#059669',
  },
  
  // Text
  text: {
    primary: '#F8FAFC',
    muted: '#94A3B8',
    subtle: '#64748B',
  },
  
  // Borders
  border: {
    default: '#334155',
  },
};

// ============================================================================
// TYPOGRAPHY SCALE
// ============================================================================

export const typography = {
  // Display type (headlines)
  display: {
    hero: 'clamp(48px, 10vw, 96px)',    // Hero stats
    h1: 'clamp(32px, 5vw, 40px)',        // Section titles
    h2: 'clamp(24px, 4vw, 32px)',        // Subsection titles
  },
  
  // UI type
  stat: {
    large: 'clamp(24px, 3vw, 28px)',     // Supporting stat values
    medium: '32px',                       // Flow diagram percentages
  },
  
  // Body type
  body: {
    large: '18px',
    medium: '16px',
    small: '14px',
    tiny: '13px',
  },
  
  // Labels
  label: {
    medium: '12px',
    small: '11px',
  },
};

// ============================================================================
// SPACING SCALE (8pt grid)
// ============================================================================

export const spacing = {
  section: {
    mobile: '5rem',      // 80px
    tablet: '8rem',      // 128px
    desktop: '12rem',    // 192px
  },
  card: {
    mobile: '2rem',      // 32px
    desktop: '3rem',     // 48px
  },
  gap: {
    small: '1.5rem',     // 24px
    medium: '2rem',      // 32px
    large: '4rem',       // 64px
  },
};

// ============================================================================
// EXPORT ALL
// ============================================================================

export const fashionData = {
  slide01: slide01Data,
  slide02: slide02Data,
  colors,
  typography,
  spacing,
};

export default fashionData;
