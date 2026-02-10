// Immersive Experience Canvas - Mock Data
// Production-ready sample for AR fashion try-on use case

import type {
  ImmersiveExperienceCanvas,
  ValueDimensionScore,
  ValueDimensionSummary,
  WeakDimension,
  AISuggestion,
} from './immersive-experience-types';

// VALUE DIMENSION CALCULATION

export function calculateValueSummary(scores: ValueDimensionScore): ValueDimensionSummary {
  // Customer Impact (a-e)
  const customerAvg = (
    scores.eliminates_pain +
    scores.increases_convenience +
    scores.increases_personalization +
    scores.increases_efficiency +
    scores.delights_innovation
  ) / 5;
  
  // Brand Impact (f-k)
  const brandAvg = (
    scores.omnichannel_integration +
    scores.brand_values_alignment +
    scores.competitor_differentiation +
    scores.positive_brand_perception +
    scores.increases_loyalty +
    scores.improves_positioning
  ) / 6;
  
  // Business Impact (l-o)
  const businessAvg = (
    scores.improves_targeting +
    scores.data_driven_decisions +
    scores.creates_revenue +
    scores.reaches_new_groups
  ) / 4;
  
  // Overall score
  const overallScore = (customerAvg + brandAvg + businessAvg) / 3;
  
  // Identify weak dimensions (< 3.0)
  const weakDimensions: WeakDimension[] = [];
  
  // Check customer criteria
  if (scores.eliminates_pain < 3) {
    weakDimensions.push({
      dimension: 'customer',
      criterion: 'eliminates_pain',
      criterion_label: 'Eliminates pain points',
      current_score: scores.eliminates_pain,
      target_score: 3.0,
    });
  }
  if (scores.increases_convenience < 3) {
    weakDimensions.push({
      dimension: 'customer',
      criterion: 'increases_convenience',
      criterion_label: 'Increases convenience',
      current_score: scores.increases_convenience,
      target_score: 3.0,
    });
  }
  if (scores.increases_personalization < 3) {
    weakDimensions.push({
      dimension: 'customer',
      criterion: 'increases_personalization',
      criterion_label: 'Increases personalization',
      current_score: scores.increases_personalization,
      target_score: 3.0,
    });
  }
  if (scores.increases_efficiency < 3) {
    weakDimensions.push({
      dimension: 'customer',
      criterion: 'increases_efficiency',
      criterion_label: 'Increases personal efficiency',
      current_score: scores.increases_efficiency,
      target_score: 3.0,
    });
  }
  if (scores.delights_innovation < 3) {
    weakDimensions.push({
      dimension: 'customer',
      criterion: 'delights_innovation',
      criterion_label: 'Delights with innovative experience',
      current_score: scores.delights_innovation,
      target_score: 3.0,
    });
  }
  
  // Check brand criteria
  if (scores.omnichannel_integration < 3) {
    weakDimensions.push({
      dimension: 'brand',
      criterion: 'omnichannel_integration',
      criterion_label: 'Integrates omni-channel',
      current_score: scores.omnichannel_integration,
      target_score: 3.0,
    });
  }
  if (scores.brand_values_alignment < 3) {
    weakDimensions.push({
      dimension: 'brand',
      criterion: 'brand_values_alignment',
      criterion_label: 'Aligns with brand values',
      current_score: scores.brand_values_alignment,
      target_score: 3.0,
    });
  }
  if (scores.competitor_differentiation < 3) {
    weakDimensions.push({
      dimension: 'brand',
      criterion: 'competitor_differentiation',
      criterion_label: 'Differentiates from competitors',
      current_score: scores.competitor_differentiation,
      target_score: 3.0,
    });
  }
  if (scores.positive_brand_perception < 3) {
    weakDimensions.push({
      dimension: 'brand',
      criterion: 'positive_brand_perception',
      criterion_label: 'Positive brand perception',
      current_score: scores.positive_brand_perception,
      target_score: 3.0,
    });
  }
  if (scores.increases_loyalty < 3) {
    weakDimensions.push({
      dimension: 'brand',
      criterion: 'increases_loyalty',
      criterion_label: 'Increases loyalty',
      current_score: scores.increases_loyalty,
      target_score: 3.0,
    });
  }
  if (scores.improves_positioning < 3) {
    weakDimensions.push({
      dimension: 'brand',
      criterion: 'improves_positioning',
      criterion_label: 'Improves positioning',
      current_score: scores.improves_positioning,
      target_score: 3.0,
    });
  }
  
  // Check business criteria
  if (scores.improves_targeting < 3) {
    weakDimensions.push({
      dimension: 'business',
      criterion: 'improves_targeting',
      criterion_label: 'Improves customer targeting',
      current_score: scores.improves_targeting,
      target_score: 3.0,
    });
  }
  if (scores.data_driven_decisions < 3) {
    weakDimensions.push({
      dimension: 'business',
      criterion: 'data_driven_decisions',
      criterion_label: 'Fosters data-driven decisions',
      current_score: scores.data_driven_decisions,
      target_score: 3.0,
    });
  }
  if (scores.creates_revenue < 3) {
    weakDimensions.push({
      dimension: 'business',
      criterion: 'creates_revenue',
      criterion_label: 'Creates revenue streams',
      current_score: scores.creates_revenue,
      target_score: 3.0,
    });
  }
  if (scores.reaches_new_groups < 3) {
    weakDimensions.push({
      dimension: 'business',
      criterion: 'reaches_new_groups',
      criterion_label: 'Reaches new target groups',
      current_score: scores.reaches_new_groups,
      target_score: 3.0,
    });
  }
  
  return {
    customer_impact: Number(customerAvg.toFixed(1)),
    brand_impact: Number(brandAvg.toFixed(1)),
    business_impact: Number(businessAvg.toFixed(1)),
    overall_score: Number(overallScore.toFixed(1)),
    weak_dimensions: weakDimensions,
  };
}

// SAMPLE VALUE SCORES

const SAMPLE_VALUE_SCORES: ValueDimensionScore = {
  // Customer Impact (a-e) - Average: 3.2
  eliminates_pain: 4, // No more ordering wrong sizes
  increases_convenience: 3, // Try without undressing
  increases_personalization: 5, // Body-type recommendations
  increases_efficiency: 2, // Still requires store visit
  delights_innovation: 2, // AR try-on is becoming common
  
  // Brand Impact (f-k) - Average: 2.8 (WEAK)
  omnichannel_integration: 2, // Only in flagship stores, not mobile yet
  brand_values_alignment: 4, // Innovation-forward fashion brand
  competitor_differentiation: 3, // Some competitors already have AR
  positive_brand_perception: 3, // Seen as modern
  increases_loyalty: 2, // Unclear if drives repeat visits
  improves_positioning: 3, // Positions as tech-savvy
  
  // Business Impact (l-o) - Average: 3.5
  improves_targeting: 4, // Track tech-savvy shoppers
  data_driven_decisions: 4, // See which items tried most
  creates_revenue: 3, // Modest conversion lift
  reaches_new_groups: 3, // Attracts younger demo
};

// SAMPLE CANVAS STATE

export const SAMPLE_IMMERSIVE_CANVAS: ImmersiveExperienceCanvas = {
  id: 'imx-001',
  startup_id: 'startup-001',
  
  // 12 Main Sections
  use_case_name: 'AR Virtual Try-On for Fashion Retail',
  
  use_case_description: 'An augmented reality experience allowing customers to virtually try on clothing and accessories in-store using AR mirrors and mobile devices. See yourself in different outfits instantly without changing clothes, get personalized recommendations based on body type, and make confident purchase decisions.',
  
  to_be_journey: 'Customer enters flagship store → Discovers AR mirror zone → Scans QR code or approaches mirror → Selects items from digital catalog → Sees realistic rendering on their body → Adjusts size/color → Gets AI styling suggestions → Saves favorites to mobile app → Completes purchase in-store or online → Receives follow-up recommendations',
  
  customer_segments: 'Tech-savvy fashion shoppers aged 18-35, existing flagship store visitors (500K monthly), early adopters who value convenience and personalization, time-constrained professionals who want efficient shopping experiences, social media influencers seeking shareable content.',
  
  customer_adoption: '500,000 monthly visitors to 20 flagship stores globally. Target 20% adoption rate (100K users/month) in first 6 months. Phased rollout: 5 stores launch month 1, 10 stores month 3, 20 stores month 6. Mobile app companion for 50% of in-store users.',
  
  technology_stack: 'ARKit/ARCore for rendering, Unity 3D engine, cloud-based body measurement API, real-time 3D garment simulation, Azure cloud infrastructure, REST API integration with existing POS and inventory systems, mobile SDK for iOS/Android companion app.',
  
  channels_devices: 'In-store AR mirrors (65-inch touchscreen displays with depth cameras), customer mobile devices (iOS/Android app), in-store tablets for staff assistance, web-based admin dashboard for store managers to track usage analytics.',
  
  key_resources: 'In-house: Design team (2 UX, 1 3D), engineering team (4 AR developers, 2 backend), product manager. External: 3D garment modeling agency (digitize entire catalog), AR hardware vendor, cloud infrastructure partner. Catalog: 5,000+ SKUs digitized in 3D.',
  
  cost_structure: 'One-off: Hardware installation ($50K/store × 20 = $1M), software development ($800K), 3D catalog creation ($300K). Ongoing: Cloud hosting ($15K/mo), maintenance & support ($10K/mo), content updates ($5K/mo), staff training ($2K/mo). Total Year 1: $2.48M.',
  
  revenue_generation: 'Direct: 15% conversion rate increase (Est. +$2.4M annual revenue from pilot stores), average order value +8% due to upsell recommendations. Indirect: Customer data insights sold to brands ($50K/year), reduced return rates (-12% = $180K savings), social media engagement driving online traffic.',
  
  key_partners: 'Strategic: Fashion brands for co-marketing, technology vendors (AR hardware, cloud providers), retail analytics platforms. Operational: 3D modeling agencies, installation contractors, customer support outsourcing. Innovation: University research lab for body measurement algorithms.',
  
  mvp_state: 'Minimum viable product for 1 pilot store: 500 SKUs digitized in 3D, 1 AR mirror installed, iOS app only (Android v2), basic garment categories (tops, dresses), manual size recommendations (no AI), analytics dashboard for store manager, 2-week staff training program, customer feedback collection system in place.',
  
  // Special Elements
  immersive_barometer: {
    position: 35, // More real-world (in-store mirrors) than fully virtual
  },
  
  experience_dimension: {
    type: 'shopping',
    reach: 65, // Moving toward mainstream but still niche
    lifecycle_phases: ['become_aware', 'purchase', 'use'],
  },
  
  value_dimensions: SAMPLE_VALUE_SCORES,
  value_summary: calculateValueSummary(SAMPLE_VALUE_SCORES),
  
  // Metadata
  source_lean_canvas: true,
  source_value_proposition: false,
  created_at: new Date('2026-02-05'),
  updated_at: new Date('2026-02-10T16:30:00'),
};

// AI SUGGESTIONS

export const SAMPLE_AI_SUGGESTIONS: AISuggestion[] = [
  {
    id: 'sug-001',
    dimension: 'customer',
    weak_criterion: 'increases_efficiency',
    criterion_label: 'Increases personal efficiency',
    suggestion_text: 'Expand channels to include mobile app for at-home try-on. This would allow customers to browse and try on items before visiting the store, saving significant time. Consider adding a "pre-shop" feature where users can create a try-on list at home, then visit the store only for final decisions.',
    suggested_section: 7, // Channels & Devices
    priority: 'high',
  },
  {
    id: 'sug-002',
    dimension: 'customer',
    weak_criterion: 'delights_innovation',
    criterion_label: 'Delights with innovative experience',
    suggestion_text: 'Add AI-powered styling assistant that creates complete outfits based on the user\'s selections. Include social sharing features where users can get instant feedback from friends via WhatsApp/Instagram. Consider gamification: unlock exclusive items after 5 virtual try-ons.',
    suggested_section: 2, // Use Case Description
    priority: 'medium',
  },
  {
    id: 'sug-003',
    dimension: 'brand',
    weak_criterion: 'omnichannel_integration',
    criterion_label: 'Integrates omni-channel',
    suggestion_text: 'Ensure AR try-on history syncs across in-store mirrors, mobile app, and website. Allow customers to start a session on one device and continue on another. Add QR code in email marketing that pre-loads favorite items into the AR experience when scanned in-store.',
    suggested_section: 6, // Technology Stack
    priority: 'high',
  },
  {
    id: 'sug-004',
    dimension: 'brand',
    weak_criterion: 'increases_loyalty',
    criterion_label: 'Increases loyalty',
    suggestion_text: 'Create a loyalty program tier exclusively for AR users: "AR Insiders" who get early access to new collections in the AR experience 48 hours before general release. Offer personalized styling sessions (virtual or in-person) after 10 AR try-on sessions.',
    suggested_section: 10, // Revenue Generation
    priority: 'medium',
  },
];
