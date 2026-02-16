'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface GlobalAIRaceProps {
  onNavigate?: (route: string) => void;
}

// ═══ DATA ═══
const COUNTRIES = [
  { rank: 1, name: "United States", flag: "🇺🇸", startups: 5509, funding: "470.9", patents: "68k", talent: 300000, talentStr: "300k+", density: 0.18, adoption: 71, hubs: "Silicon Valley, Boston", strength: "Sheer volume + Big Tech R&D" },
  { rank: 2, name: "China", flag: "🇨🇳", startups: 1446, funding: "119.3", patents: "301k", talent: 200000, talentStr: "200k+", density: 0.25, adoption: 91, hubs: "Beijing, Shenzhen", strength: "State programs + patent volume" },
  { rank: 3, name: "United Kingdom", flag: "🇬🇧", startups: 727, funding: "4.5", patents: "5k", talent: 25000, talentStr: "25k", density: 0.07, adoption: 65, hubs: "London, Cambridge", strength: "DeepMind + research excellence" },
  { rank: 4, name: "Israel", flag: "🇮🇱", startups: 442, funding: "15", patents: "3k", talent: 20000, talentStr: "20k", density: 1.98, adoption: 75, hubs: "Tel Aviv, Haifa", strength: "Highest density · Unit 8200" },
  { rank: 5, name: "Canada", flag: "🇨🇦", startups: 397, funding: "15.3", patents: "4k", talent: 18000, talentStr: "18k", density: 0.45, adoption: 68, hubs: "Toronto, Montreal", strength: "Immigration + MILA/Vector" },
  { rank: 6, name: "France", flag: "🇫🇷", startups: 391, funding: "~5", patents: "4k", talent: 14000, talentStr: "14k", density: 0.40, adoption: 70, hubs: "Paris, Toulouse", strength: "EU hub · Mistral / HuggingFace" },
  { rank: 7, name: "India", flag: "🇮🇳", startups: 338, funding: "0.56", patents: "26k", talent: 150000, talentStr: "150k+", density: 0.10, adoption: 55, hubs: "Bangalore, Hyderabad", strength: "1M+ CS grads · 252% growth" },
  { rank: 8, name: "Japan", flag: "🇯🇵", startups: 333, funding: "~4", patents: "26k", talent: 12000, talentStr: "12k", density: 0.20, adoption: 62, hubs: "Tokyo, Osaka", strength: "Robotics + manufacturing AI" },
  { rank: 9, name: "Germany", flag: "🇩🇪", startups: 319, funding: "~6", patents: "6k", talent: 15000, talentStr: "15k", density: 0.35, adoption: 72, hubs: "Berlin, Munich", strength: "Industrial AI powerhouse" },
  { rank: 10, name: "Singapore", flag: "🇸🇬", startups: 193, funding: "7.3", patents: "2k", talent: 10000, talentStr: "10k", density: 1.64, adoption: 88, hubs: "City-state · Nat'l Strategy", strength: "Asia gateway · 2nd highest density" },
];

const INDIA_GROWTH = [
  { year: '16', value: 42 },
  { year: '17', value: 56 },
  { year: '18', value: 68 },
  { year: '19', value: 82 },
  { year: '20', value: 95 },
  { year: '21', value: 105 },
  { year: '22', value: 118 },
  { year: '23', value: 132 },
  { year: '24', value: 143 },
  { year: '25', value: 150 },
];

const SOURCES = [
  { num: 1, title: "Stanford HAI — AI Index Report 2025", desc: "Primary source for startup counts, investment flows, and model production by country. 457-page report using Quid database.", url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" },
  { num: 2, title: "Forbes — Top 10 AI Nations: Global AI Superpowers Ranked", desc: "Sep 2025 ranking across startups, funding, patents, talent, and adoption dimensions.", url: "https://www.forbes.com/sites/johnkoetsier/2025/09/11/top-10-ai-nations-global-ai-superpowers-ranked/" },
  { num: 3, title: "Crunchbase — AI Funding Trends: Year-End 2025", desc: "$202.3B invested in AI globally in 2025. US captured 79% ($159B). AI = 47% of all VC funding.", url: "https://news.crunchbase.com/ai/big-funding-trends-charts-eoy-2025/" },
  { num: 4, title: "Visual Capitalist — AI Investment by Country 2025", desc: "Interactive map visualization of Stanford data on global investment distribution.", url: "https://www.visualcapitalist.com/visualizing-global-ai-investment-by-country/" },
  { num: 5, title: "LinkedIn — Top 10 Countries Leading the AI Talent Race 2025", desc: "Talent pool estimates from LinkedIn Talent Insights, workforce density calculations, and key hub analysis.", url: "https://www.linkedin.com/pulse/top-10-countries-leading-global-ai-talent-race-2025-yee-chun-lim-e0nec" },
  { num: 6, title: "Indian Express — Top 10 Countries with Most AI Startups", desc: "Startup count verification using 2025 Crunchbase cross-reference data.", url: "https://indianexpress.com/article/trending/top-10-listing/top-10-countries-with-the-most-ai-startups-9524745/" },
  { num: 7, title: "Arapacke Law — AI Patents by Country", desc: "Patent filing data by nation: China 301k, US 68k, India 26k, Japan 26k, South Korea 18k.", url: "https://arapackelaw.com/patents/ai-patents-by-country/" },
  { num: 8, title: "TechCrunch — 55 US AI Startups Raising $100M+ in 2025", desc: "Updated Jan 2026. Tracks every US mega-round including Anthropic, Cursor, Reflection AI.", url: "https://techcrunch.com/2026/01/19/here-are-the-49-us-ai-startups-that-have-raised-100m-or-more-in-2025/" },
  { num: 9, title: "Tortoise Media — Global AI Index", desc: "Composite ranking: talent, infrastructure, operating environment, research, development, strategy, and commercial activity.", url: "https://www.tortoisemedia.com/data/global-ai" },
  { num: 10, title: "MacroPolo — Global AI Talent Tracker", desc: "Where top-tier AI researchers are trained, work, and migrate globally. Paulson Institute project.", url: "https://macropolo.org/digital-projects/the-global-ai-talent-tracker/" },
  { num: 11, title: "Spherical Insights — AI Spending by Country 2025", desc: "Investment projections and spending analysis across 15 nations through 2035.", url: "https://www.sphericalinsights.com/blogs/top-10-artificial-intelligence-spending-countries-in-2025-statistics-and-facts-analysis-2024-to-2035" },
  { num: 12, title: "Ascendix Tech — How Many AI Companies Are There in 2026", desc: "Jan 2026 aggregation confirming Stanford Top 15, adding 2025 partial year data.", url: "https://ascendixtech.com/how-many-ai-companies-are-there/" },
];

export default function GlobalAIRace({ onNavigate }: GlobalAIRaceProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="min-h-screen bg-[#0A211F]">
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#8DFDBA] via-[#D8FF85] to-[#C4E878] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ACT 1: HERO */}
      <HeroSection />

      {/* ACT 2: STARTUP RANKING */}
      <StartupRankingSection />

      {/* ACT 3: FIVE DIMENSIONS */}
      <FiveDimensionsSection />

      {/* ACT 4: TALENT MAP */}
      <TalentMapSection />

      {/* ACT 5: GROWTH STORY */}
      <GrowthStorySection />

      {/* ACT 6: CLOSE + SOURCES */}
      <CloseSourcesSection onNavigate={onNavigate} />
    </div>
  );
}

// ============================================================================
// ACT 1: HERO SECTION
// ============================================================================

function HeroSection() {
  const [counts, setCounts] = useState({ startups: 0, investment: 0, patents: 0, professionals: 0 });
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const y = useTransform(scrollY, [0, 600], [0, 72]);

  useEffect(() => {
    // Animate counters on mount
    const duration = 1400;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCounts({
        startups: Math.round(eased * 10595),
        investment: Math.round(eased * 252.3 * 10) / 10,
        patents: Math.round(eased * 430),
        professionals: Math.round(eased * 850),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    setTimeout(() => animate(), 500);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle,rgba(141,253,186,0.06)_0%,rgba(216,255,133,0.03)_40%,transparent_70%)] animate-pulse" style={{ animationDuration: '8s' }} />
      
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(141,253,186,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      {/* Top nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-14 py-7 z-10">
        <div className="text-[11px] font-semibold tracking-[3.5px] uppercase text-[#7C7D79]">StartupAI Research</div>
        <div className="font-mono text-[11px] text-[#2A4E45]">FEB 2026</div>
      </div>

      {/* Hero content */}
      <motion.div className="relative z-10" style={{ opacity, y }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] font-semibold tracking-[4px] uppercase text-[#8DFDBA] mb-7"
        >
          Comprehensive Intelligence Report
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(42px,7.5vw,82px)] leading-[1.06] tracking-[-1px] text-[#F7F9F2] mb-8"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          The Global<br />AI <em className="italic text-[#D8FF85]">Race</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-12 h-[1px] bg-[#2A4E45] mx-auto mb-8"
        />

        {/* Stats */}
        <div className="flex gap-10 justify-center flex-wrap">
          <StatCounter value={counts.startups} label="funded AI startups" color="#D8FF85" delay={1.05} />
          <StatCounter value={`$${counts.investment}B`} label="private investment 2024" color="#8DFDBA" delay={1.2} />
          <StatCounter value={`${counts.patents}k`} label="AI patents filed" color="#C4E878" delay={1.35} />
          <StatCounter value={`${counts.professionals}k+`} label="AI professionals" color="#DDE6C8" delay={1.5} />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[2px] uppercase text-[#2A4E45]">Scroll to explore</span>
        <div className="w-[1px] h-7 bg-gradient-to-b from-[#2A4E45] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}

function StatCounter({ value, label, color, delay }: { value: string | number; label: string; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <div
        className="text-[clamp(30px,4.8vw,50px)] tracking-[-1px] font-light"
        style={{ fontFamily: 'Playfair Display, Georgia, serif', color }}
      >
        {value.toLocaleString()}
      </div>
      <div className="text-[11px] text-[#7C7D79] mt-1">{label}</div>
    </motion.div>
  );
}

// ============================================================================
// ACT 2: STARTUP RANKING SECTION
// ============================================================================

function StartupRankingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const maxStartups = COUNTRIES[0].startups;

  return (
    <section ref={ref} className="py-[100px] px-14 bg-[#F7F9F2]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-[3px] h-[22px] rounded-sm bg-[#24423B]" />
            <span className="text-[11px] font-semibold tracking-[3px] uppercase text-[#24423B]">Startup Ranking</span>
          </div>
          <p className="text-[13px] text-[#7C7D79] leading-[1.7] max-w-[560px] mb-10">
            Top 10 countries by total funded AI startups (&gt;$1.5M raised). Cumulative 2013–2025 data from Stanford HAI, Crunchbase, and Forbes.
          </p>
        </motion.div>

        {/* Ranking Table */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-[#E6ECD6] rounded-[20px] overflow-hidden shadow-[0_1px_24px_rgba(0,0,0,0.04)]"
        >
          {COUNTRIES.map((country, index) => (
            <RankingRow
              key={country.rank}
              country={country}
              maxStartups={maxStartups}
              index={index}
              isInView={isInView}
            />
          ))}

          {/* Footer note */}
          <div className="px-6 py-4 text-[10px] text-[#7C7D79] text-center leading-[1.8] border-t border-[#EEF3E4]">
            Sources:{' '}
            <a href="https://indianexpress.com/article/trending/top-10-listing/top-10-countries-with-the-most-ai-startups-9524745/" target="_blank" rel="noopener noreferrer" className="text-[#24423B] border-b border-dotted border-[#DDE6C8] hover:text-[#0A211F] hover:border-[#0A211F]">Indian Express</a>
            {' · '}
            <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report" target="_blank" rel="noopener noreferrer" className="text-[#24423B] border-b border-dotted border-[#DDE6C8] hover:text-[#0A211F] hover:border-[#0A211F]">Stanford HAI 2025</a>
            {' · '}
            <a href="https://www.forbes.com/sites/johnkoetsier/2025/09/11/top-10-ai-nations-global-ai-superpowers-ranked/" target="_blank" rel="noopener noreferrer" className="text-[#24423B] border-b border-dotted border-[#DDE6C8] hover:text-[#0A211F] hover:border-[#0A211F]">Forbes</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RankingRow({ country, maxStartups, index, isInView }: { country: typeof COUNTRIES[0]; maxStartups: number; index: number; isInView: boolean }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const percentage = (country.startups / maxStartups * 100).toFixed(1);
  const barColors = ['#2A4E45', '#24423B', '#1D3730', '#2A4E45', '#24423B', '#1D3730', '#2A4E45', '#24423B', '#1D3730', '#2A4E45'];

  return (
    <div
      className="grid grid-cols-[30px_28px_minmax(80px,150px)_1fr_72px] items-center gap-2 px-6 py-3 transition-colors hover:bg-[rgba(42,78,69,0.03)] border-b border-[#EEF3E4] last:border-b-0 relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Rank */}
      <div className="text-[15px] text-[#DDE6C8] text-center font-light" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
        {country.rank}
      </div>

      {/* Flag */}
      <div className="text-[17px] text-center">{country.flag}</div>

      {/* Country name */}
      <div className={`text-[13px] ${index === 0 ? 'font-bold text-[#2A4E45]' : 'font-medium text-[#24423B]'}`}>
        {country.name}
      </div>

      {/* Bar */}
      <div className="h-7 bg-[#EEF3E4] rounded-md overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.3, delay: 0.2 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-md relative"
          style={{ background: barColors[index] }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent to-white/10" />
        </motion.div>
      </div>

      {/* Value */}
      <div className={`text-[13px] text-right font-medium ${index === 0 ? 'font-bold text-[#1D3730]' : 'text-[#24423B]'}`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        {country.startups.toLocaleString()}
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%+12px)] bg-white border border-[#E6ECD6] rounded-[14px] px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.1)] z-50 min-w-[230px]">
          <h4 className="text-[17px] text-[#1D3730] mb-3 flex items-center gap-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            {country.flag} {country.name}
          </h4>
          <div className="space-y-2">
            <TooltipLine label="Startups" value={country.startups.toLocaleString()} color="#1D3730" />
            <TooltipLine label="Funding" value={`$${country.funding}B`} color="#E8C547" />
            <TooltipLine label="Patents" value={country.patents} color="#19546D" />
            <TooltipLine label="Talent" value={country.talentStr} color="#A78BFA" />
            <TooltipLine label="Adoption" value={`${country.adoption}%`} color="#E88CA5" />
          </div>
        </div>
      )}
    </div>
  );
}

function TooltipLine({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex justify-between items-center py-1 border-b border-[#EEF3E4] last:border-b-0 text-[12px]">
      <span className="text-[#7C7D79]">{label}</span>
      <span className="font-medium" style={{ fontFamily: 'JetBrains Mono, monospace', color }}>{value}</span>
    </div>
  );
}

// ============================================================================
// ACT 3: FIVE DIMENSIONS SECTION
// ============================================================================

function FiveDimensionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-[100px] px-14 bg-[#0A211F]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-[3px] h-[22px] rounded-sm bg-[#D8FF85]" />
            <span className="text-[11px] font-semibold tracking-[3px] uppercase text-[#D8FF85]">Five Dimensions</span>
          </div>
          <p className="text-[13px] text-[#7C7D79] leading-[1.7] max-w-[560px] mb-10">
            AI leadership isn't one number. It's startups, funding, patents, talent, and adoption — different countries win on different axes.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px]">
          {/* Startups card (span 2) */}
          <DimensionCardStartups isInView={isInView} />
          
          {/* Funding card */}
          <DimensionCardFunding isInView={isInView} />
          
          {/* Patents card */}
          <DimensionCardPatents isInView={isInView} />
          
          {/* Talent card */}
          <DimensionCardTalent isInView={isInView} />
          
          {/* Adoption card */}
          <DimensionCardAdoption isInView={isInView} />
        </div>
      </div>
    </section>
  );
}

function DimensionCardStartups({ isInView }: { isInView: boolean }) {
  const top5 = COUNTRIES.slice(0, 5);
  const max = top5[0].startups;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#12211D] border border-[#1D3730] rounded-[18px] p-7 lg:col-span-2 hover:border-[#2A4E45] transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)]"
    >
      <div className="inline-flex items-center px-[14px] py-1 rounded-full bg-[rgba(141,253,186,0.12)] text-[#8DFDBA] text-[10px] font-semibold tracking-[1.5px] uppercase mb-4">
        Startups
      </div>
      <div className="text-[40px] font-light tracking-[-1px] text-[#8DFDBA] mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
        5,509
      </div>
      <div className="text-[12px] text-[#7C7D79] mb-4">
        United States — 45% of all globally funded AI startups
      </div>

      <div className="space-y-2">
        {top5.map((country, i) => {
          const width = (country.startups / max * 100).toFixed(1);
          return (
            <div key={country.rank}>
              <div className="flex justify-between items-center mb-1 text-[11px]">
                <span className="text-[#DDE6C8] flex items-center gap-1">
                  {country.flag} {country.name}
                </span>
                <span className="font-medium" style={{ fontFamily: 'JetBrains Mono, monospace', color: i === 0 ? '#8DFDBA' : '#DDE6C8' }}>
                  {country.startups.toLocaleString()}
                </span>
              </div>
              <div className="h-[7px] bg-[#1D3730] rounded-md overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${width}%` } : {}}
                  transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-md"
                  style={{ background: i === 0 ? '#8DFDBA' : '#24423B' }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-[9px] text-[#2A4E45] mt-4">
        Source:{' '}
        <a href="https://indianexpress.com/article/trending/top-10-listing/top-10-countries-with-the-most-ai-startups-9524745/" target="_blank" rel="noopener noreferrer" className="text-[#7C7D79] border-b border-dotted border-[rgba(124,125,121,0.3)] hover:text-[#8DFDBA] hover:border-[#8DFDBA]">
          Indian Express
        </a>
        {' · '}
        <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report" target="_blank" rel="noopener noreferrer" className="text-[#7C7D79] border-b border-dotted border-[rgba(124,125,121,0.3)] hover:text-[#8DFDBA] hover:border-[#8DFDBA]">
          Stanford HAI 2025
        </a>
      </div>
    </motion.div>
  );
}

function DimensionCardFunding({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#12211D] border border-[#1D3730] rounded-[18px] p-7 hover:border-[#2A4E45] transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)]"
    >
      <div className="inline-flex items-center px-[14px] py-1 rounded-full bg-[rgba(232,197,71,0.1)] text-[#E8C547] text-[10px] font-semibold tracking-[1.5px] uppercase mb-4">
        Funding
      </div>
      <div className="text-[40px] font-light tracking-[-1px] text-[#E8C547] mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
        $470.9B
      </div>
      <div className="text-[12px] text-[#7C7D79] mb-4">
        US cumulative AI investment
      </div>

      <div className="flex items-center gap-2 justify-center my-4">
        <div className="flex-1 h-[1px] bg-[#1D3730]" />
        <span className="text-[16px] text-[#7C7D79]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>3.9×</span>
        <div className="flex-1 h-[1px] bg-[#1D3730]" />
      </div>

      <div className="text-[28px] font-light tracking-[-1px] text-[#FF7B6B] text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
        $119.3B
      </div>
      <div className="text-[12px] text-[#7C7D79] text-center mb-4">
        China — 2nd largest
      </div>

      <div className="text-[9px] text-[#2A4E45] mt-4">
        Source:{' '}
        <a href="https://www.sphericalinsights.com/blogs/top-10-artificial-intelligence-spending-countries-in-2025-statistics-and-facts-analysis-2024-to-2035" target="_blank" rel="noopener noreferrer" className="text-[#7C7D79] border-b border-dotted border-[rgba(124,125,121,0.3)] hover:text-[#E8C547] hover:border-[#E8C547]">
          Spherical Insights 2025
        </a>
      </div>
    </motion.div>
  );
}

function DimensionCardPatents({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#12211D] border border-[#1D3730] rounded-[18px] p-7 hover:border-[#2A4E45] transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)]"
    >
      <div className="inline-flex items-center px-[14px] py-1 rounded-full bg-[rgba(216,255,133,0.12)] text-[#D8FF85] text-[10px] font-semibold tracking-[1.5px] uppercase mb-4">
        Patents
      </div>
      
      {/* Simple donut representation */}
      <div className="relative w-20 h-20 mx-auto my-4">
        <svg width="84" height="84" viewBox="0 0 84 84" className="-rotate-90">
          {/* China: 301k (70%) */}
          <circle cx="42" cy="42" r="34" fill="none" stroke="#FF7B6B" strokeWidth="7" strokeDasharray="149 214" strokeLinecap="round" />
          {/* US: 68k (16%) */}
          <circle cx="42" cy="42" r="34" fill="none" stroke="#D8FF85" strokeWidth="7" strokeDasharray="34 214" strokeDashoffset="-149" strokeLinecap="round" />
          {/* Others: 61k (14%) */}
          <circle cx="42" cy="42" r="34" fill="none" stroke="#24423B" strokeWidth="7" strokeDasharray="30 214" strokeDashoffset="-183" strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[20px] text-[#F7F9F2]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
          301k
        </div>
      </div>

      <div className="text-[12px] text-[#7C7D79] text-center">
        China leads volume · US leads quality
      </div>

      <div className="text-[9px] text-[#2A4E45] mt-4">
        Source:{' '}
        <a href="https://arapackelaw.com/patents/ai-patents-by-country/" target="_blank" rel="noopener noreferrer" className="text-[#7C7D79] border-b border-dotted border-[rgba(124,125,121,0.3)] hover:text-[#D8FF85] hover:border-[#D8FF85]">
          Arapacke Law
        </a>
      </div>
    </motion.div>
  );
}

function DimensionCardTalent({ isInView }: { isInView: boolean }) {
  const talent = [
    { name: "🇺🇸 US", value: 300, color: "#8DFDBA" },
    { name: "🇨🇳 China", value: 200, color: "#24423B" },
    { name: "🇮🇳 India", value: 150, color: "#24423B" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#12211D] border border-[#1D3730] rounded-[18px] p-7 hover:border-[#2A4E45] transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)]"
    >
      <div className="inline-flex items-center px-[14px] py-1 rounded-full bg-[rgba(167,139,250,0.08)] text-[#A78BFA] text-[10px] font-semibold tracking-[1.5px] uppercase mb-4">
        Talent
      </div>
      <div className="text-[40px] font-light tracking-[-1px] text-[#A78BFA] mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
        300k+
      </div>
      <div className="text-[12px] text-[#7C7D79] mb-4">
        US AI professionals
      </div>

      <div className="space-y-2">
        {talent.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-1 text-[11px]">
              <span className="text-[#DDE6C8]">{item.name}</span>
              <span className="font-medium" style={{ fontFamily: 'JetBrains Mono, monospace', color: item.color }}>
                {item.value}k+
              </span>
            </div>
            <div className="h-[7px] bg-[#1D3730] rounded-md overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${(item.value / 300 * 100)}%` } : {}}
                transition={{ duration: 1.2, delay: 0.6 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-md"
                style={{ background: item.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-[9px] text-[#2A4E45] mt-4">
        Source:{' '}
        <a href="https://www.linkedin.com/pulse/top-10-countries-leading-global-ai-talent-race-2025-yee-chun-lim-e0nec" target="_blank" rel="noopener noreferrer" className="text-[#7C7D79] border-b border-dotted border-[rgba(124,125,121,0.3)] hover:text-[#A78BFA] hover:border-[#A78BFA]">
          LinkedIn Talent Insights 2025
        </a>
      </div>
    </motion.div>
  );
}

function DimensionCardAdoption({ isInView }: { isInView: boolean }) {
  const adoption = [
    { name: "China", value: 91 },
    { name: "Singapore", value: 88 },
    { name: "Israel", value: 75 },
    { name: "Germany", value: 72 },
    { name: "US", value: 71 },
    { name: "France", value: 70 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#12211D] border border-[#1D3730] rounded-[18px] p-7 hover:border-[#2A4E45] transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)]"
    >
      <div className="inline-flex items-center px-[14px] py-1 rounded-full bg-[rgba(232,140,165,0.08)] text-[#E88CA5] text-[10px] font-semibold tracking-[1.5px] uppercase mb-4">
        Adoption
      </div>
      <div className="text-[40px] font-light tracking-[-1px] text-[#E88CA5] mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
        91%
      </div>
      <div className="text-[12px] text-[#7C7D79] mb-4">
        China — highest workforce AI adoption
      </div>

      <div className="space-y-[7px]">
        {adoption.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[11px] text-[#DDE6C8] w-[70px] text-right flex-shrink-0">{item.name}</span>
            <div className="flex-1 h-[2px] bg-[#1D3730] rounded-full relative">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${item.value}%` } : {}}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[9px] h-[9px] rounded-full bg-[#E88CA5] top-1/2 -translate-y-1/2"
                style={{ left: 0 }}
              />
            </div>
            <span className="text-[10px] font-medium text-[#E88CA5] w-8 flex-shrink-0" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              {item.value}%
            </span>
          </div>
        ))}
      </div>

      <div className="text-[9px] text-[#2A4E45] mt-4">
        Source:{' '}
        <a href="https://www.forbes.com/sites/johnkoetsier/2025/09/11/top-10-ai-nations-global-ai-superpowers-ranked/" target="_blank" rel="noopener noreferrer" className="text-[#7C7D79] border-b border-dotted border-[rgba(124,125,121,0.3)] hover:text-[#E88CA5] hover:border-[#E88CA5]">
          Forbes AI Nations 2025
        </a>
      </div>
    </motion.div>
  );
}

// ============================================================================
// ACT 4: TALENT MAP SECTION
// ============================================================================

function TalentMapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const barColors = ['#2A4E45', '#24423B', '#1D3730', '#2A4E45', '#24423B', '#1D3730', '#2A4E45', '#24423B', '#1D3730', '#2A4E45'];

  return (
    <section ref={ref} className="py-[100px] px-14 bg-[#EEF3E4]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-[3px] h-[22px] rounded-sm bg-[#24423B]" />
            <span className="text-[11px] font-semibold tracking-[3px] uppercase text-[#24423B]">Talent Map</span>
          </div>
          <p className="text-[13px] text-[#7C7D79] leading-[1.7] max-w-[560px] mb-10">
            Where the world's AI professionals live — estimated from LinkedIn, MacroPolo, and workforce reports. US leads scale; Israel leads density.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px]">
          {COUNTRIES.map((country, index) => (
            <TalentCard
              key={country.rank}
              country={country}
              color={barColors[index]}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TalentCard({ country, color, index, isInView }: { country: typeof COUNTRIES[0]; color: string; index: number; isInView: boolean }) {
  const maxTalent = COUNTRIES[0].talent;
  const poolScale = (country.talent / maxTalent * 100).toFixed(1);
  const densityScale = Math.min(country.density / 2 * 100, 100).toFixed(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-[#E6ECD6] rounded-[18px] p-7 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[18px] opacity-70" style={{ background: color }} />

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[26px]">{country.flag}</span>
        <span className="flex-1 text-[20px] text-[#0A211F] font-normal" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
          {country.name}
        </span>
        <span className="text-[9px] px-2 py-[2px] bg-[#EEF3E4] text-[#7C7D79] rounded-full font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          #{country.rank}
        </span>
      </div>

      <div className="w-7 h-[1px] bg-[#E6ECD6] mb-4" />

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div>
          <div className="text-[16px] font-semibold" style={{ fontFamily: 'JetBrains Mono, monospace', color }}>
            {country.talentStr}
          </div>
          <div className="text-[10px] text-[#7C7D79] uppercase tracking-[0.7px] mt-[1px]">
            AI Talent
          </div>
        </div>
        <div>
          <div className="text-[16px] font-semibold text-[#E8C547]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            {country.density}%
          </div>
          <div className="text-[10px] text-[#7C7D79] uppercase tracking-[0.7px] mt-[1px]">
            Workforce %
          </div>
        </div>
      </div>

      {/* Pool Scale bar */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-[3px] text-[10px]">
          <span className="text-[#7C7D79]">Pool Scale</span>
          <span className="font-medium" style={{ fontFamily: 'JetBrains Mono, monospace', color }}>
            {poolScale}%
          </span>
        </div>
        <div className="h-[5px] bg-[#EEF3E4] rounded-[3px] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${poolScale}%` } : {}}
            transition={{ duration: 1.2, delay: 0.3 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-[3px]"
            style={{ background: color }}
          />
        </div>
      </div>

      {/* Density bar */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-[3px] text-[10px]">
          <span className="text-[#7C7D79]">Density</span>
          <span className="font-medium text-[#E8C547]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            {country.density}%
          </span>
        </div>
        <div className="h-[5px] bg-[#EEF3E4] rounded-[3px] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${densityScale}%` } : {}}
            transition={{ duration: 1.2, delay: 0.5 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-[3px] bg-[#E8C547]"
          />
        </div>
      </div>

      {/* Hubs */}
      <div className="text-[11px] text-[#24423B] leading-[1.65]">
        <strong className="text-[9px] text-[#7C7D79] font-medium tracking-[1px] uppercase block mb-[2px]">
          Hubs
        </strong>
        {country.hubs} — {country.strength}
      </div>
    </motion.div>
  );
}

// ============================================================================
// ACT 5: GROWTH STORY SECTION
// ============================================================================

function GrowthStorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-[120px] px-14 bg-[#020505]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3">
            <div className="w-[3px] h-[22px] rounded-sm bg-[#8DFDBA]" />
            <span className="text-[11px] font-semibold tracking-[3px] uppercase text-[#8DFDBA]">The Growth Story</span>
          </div>
        </motion.div>

        {/* Story 1: India */}
        <GrowthStoryIndia isInView={isInView} />

        {/* Story 2: Density */}
        <GrowthStoryDensity isInView={isInView} />

        {/* Story 3: US Dominance */}
        <GrowthStoryUS isInView={isInView} />
      </div>
    </section>
  );
}

function GrowthStoryIndia({ isInView }: { isInView: boolean }) {
  const maxValue = 160;

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 min-w-[260px]"
      >
        <div className="text-[10px] font-semibold tracking-[3px] uppercase text-[#D8FF85] mb-2">
          Fastest Growth
        </div>
        <h3 className="text-[clamp(22px,3vw,32px)] text-[#F7F9F2] leading-[1.25] mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
          India's AI talent surged <strong className="text-[#D8FF85]">252%</strong> since 2016
        </h3>
        <p className="text-[14px] text-[#DDE6C8] leading-[1.75]">
          With <strong className="text-[#F7F9F2]">1M+ CS graduates per year</strong>, India floods the global AI pipeline. Bangalore alone hosts more AI engineers than most European nations. <strong className="text-[#F7F9F2]">125% funding increase</strong> in a single year makes it the fastest-accelerating ecosystem globally.
        </p>
        <div className="text-[10px] text-[#2A4E45] mt-3">
          Sources:{' '}
          <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report" target="_blank" rel="noopener noreferrer" className="text-[#7C7D79] border-b border-dotted border-[rgba(124,125,121,0.3)] hover:text-[#D8FF85] hover:border-[#D8FF85]">
            Stanford HAI 2025
          </a>
          {' · '}
          <a href="https://www.linkedin.com/pulse/top-10-countries-leading-global-ai-talent-race-2025-yee-chun-lim-e0nec" target="_blank" rel="noopener noreferrer" className="text-[#7C7D79] border-b border-dotted border-[rgba(124,125,121,0.3)] hover:text-[#D8FF85] hover:border-[#D8FF85]">
            LinkedIn Talent Insights
          </a>
        </div>
      </motion.div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 min-w-[260px]"
      >
        <div className="bg-[#12211D] border border-[#1D3730] rounded-[14px] p-5 pb-9 flex items-end gap-[6px] h-[240px]">
          {INDIA_GROWTH.map((item, index) => {
            const height = (item.value / maxValue * 85).toFixed(1);
            const isLast = index === INDIA_GROWTH.length - 1;
            
            return (
              <div key={item.year} className="flex-1 relative">
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${height}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full rounded-t-[5px] relative"
                  style={{ background: isLast ? '#D8FF85' : '#1D3730', border: `1px solid ${isLast ? '#D8FF85' : '#2A4E45'}` }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.08 }}
                    className="absolute -top-[18px] left-1/2 -translate-x-1/2 text-[9px] font-medium whitespace-nowrap"
                    style={{ fontFamily: 'JetBrains Mono, monospace', color: isLast ? '#D8FF85' : '#DDE6C8' }}
                  >
                    {item.value}k
                  </motion.span>
                </motion.div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] text-[#2A4E45] whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  '{item.year}
                </span>
              </div>
            );
          })}
        </div>
        <div className="text-[9px] text-[#2A4E45] text-center mt-6">
          India AI Talent Pool (est. thousands) · 2016–2025
        </div>
      </motion.div>
    </div>
  );
}

function GrowthStoryDensity({ isInView }: { isInView: boolean }) {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-20">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 min-w-[260px]"
      >
        <div className="text-[10px] font-semibold tracking-[3px] uppercase text-[#8DFDBA] mb-2">
          Density Champions
        </div>
        <h3 className="text-[clamp(22px,3vw,32px)] text-[#F7F9F2] leading-[1.25] mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
          Israel & Singapore: small nations, <em className="italic text-[#8DFDBA]">outsized impact</em>
        </h3>
        <p className="text-[14px] text-[#DDE6C8] leading-[1.75]">
          Israel commits <strong className="text-[#F7F9F2]">1.98% of its workforce</strong> to AI — 10× the US rate. Military tech transfer from Unit 8200 creates density no large nation can match. Singapore mirrors this at <strong className="text-[#F7F9F2]">1.64%</strong> via its National AI Strategy.
        </p>
        <div className="text-[10px] text-[#2A4E45] mt-3">
          Sources:{' '}
          <a href="https://www.forbes.com/sites/johnkoetsier/2025/09/11/top-10-ai-nations-global-ai-superpowers-ranked/" target="_blank" rel="noopener noreferrer" className="text-[#7C7D79] border-b border-dotted border-[rgba(124,125,121,0.3)] hover:text-[#8DFDBA] hover:border-[#8DFDBA]">
            Forbes AI Nations 2025
          </a>
          {' · '}
          <a href="https://macropolo.org/digital-projects/the-global-ai-talent-tracker/" target="_blank" rel="noopener noreferrer" className="text-[#7C7D79] border-b border-dotted border-[rgba(124,125,121,0.3)] hover:text-[#8DFDBA] hover:border-[#8DFDBA]">
            MacroPolo AI Tracker
          </a>
        </div>
      </motion.div>

      {/* Boxes */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 min-w-[260px] flex gap-[14px]"
      >
        <div className="flex-1 bg-[#12211D] border border-[#1D3730] rounded-[16px] p-7 text-center">
          <div className="text-[48px] font-light tracking-[-2px] text-[#D8FF85]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            1.98%
          </div>
          <div className="text-[12px] text-[#7C7D79] mt-1">
            Israel AI density
          </div>
          <div className="text-[11px] text-[#2A4E45] mt-2">
            10× United States rate
          </div>
        </div>
        <div className="flex-1 bg-[#12211D] border border-[#1D3730] rounded-[16px] p-7 text-center">
          <div className="text-[48px] font-light tracking-[-2px] text-[#8DFDBA]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            1.64%
          </div>
          <div className="text-[12px] text-[#7C7D79] mt-1">
            Singapore AI density
          </div>
          <div className="text-[11px] text-[#2A4E45] mt-2">
            9× United States rate
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function GrowthStoryUS({ isInView }: { isInView: boolean }) {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 min-w-[260px]"
      >
        <div className="text-[10px] font-semibold tracking-[3px] uppercase text-[#C4E878] mb-2">
          US Dominance
        </div>
        <h3 className="text-[clamp(22px,3vw,32px)] text-[#F7F9F2] leading-[1.25] mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
          $159B invested in 2025 — <em className="italic text-[#C4E878]">79% of global AI VC</em>
        </h3>
        <p className="text-[14px] text-[#DDE6C8] leading-[1.75]">
          The US <strong className="text-[#F7F9F2]">widened the gap</strong> in 2025. 55 startups raised $100M+ rounds. OpenAI reached a $500B valuation. AI captured 47% of all venture capital. The Bay Area alone attracted <strong className="text-[#F7F9F2]">$122B</strong>.
        </p>
        <div className="text-[10px] text-[#2A4E45] mt-3">
          Sources:{' '}
          <a href="https://news.crunchbase.com/ai/big-funding-trends-charts-eoy-2025/" target="_blank" rel="noopener noreferrer" className="text-[#7C7D79] border-b border-dotted border-[rgba(124,125,121,0.3)] hover:text-[#C4E878] hover:border-[#C4E878]">
            Crunchbase EOY 2025
          </a>
          {' · '}
          <a href="https://techcrunch.com/2026/01/19/here-are-the-49-us-ai-startups-that-have-raised-100m-or-more-in-2025/" target="_blank" rel="noopener noreferrer" className="text-[#7C7D79] border-b border-dotted border-[rgba(124,125,121,0.3)] hover:text-[#C4E878] hover:border-[#C4E878]">
            TechCrunch Jan 2026
          </a>
        </div>
      </motion.div>

      {/* Boxes */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 min-w-[260px]"
      >
        <div className="bg-[#12211D] border border-[#1D3730] rounded-[16px] p-7 text-center mb-3">
          <div className="text-[48px] font-light tracking-[-2px] text-[#D8FF85]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            $159B
          </div>
          <div className="text-[12px] text-[#7C7D79] mt-1">
            US AI investment in 2025
          </div>
          <div className="text-[11px] text-[#2A4E45] mt-2">
            SF Bay Area alone: $122B
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#12211D] border border-[#1D3730] rounded-[16px] p-5 text-center">
            <div className="text-[32px] font-light tracking-[-2px] text-[#8DFDBA]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              55
            </div>
            <div className="text-[12px] text-[#7C7D79] mt-1">
              $100M+ rounds
            </div>
          </div>
          <div className="bg-[#12211D] border border-[#1D3730] rounded-[16px] p-5 text-center">
            <div className="text-[32px] font-light tracking-[-2px] text-[#C4E878]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              47%
            </div>
            <div className="text-[12px] text-[#7C7D79] mt-1">
              of all global VC
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================================
// ACT 6: CLOSE + SOURCES SECTION
// ============================================================================

function CloseSourcesSection({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-[120px] px-14 bg-[#F7F9F2] text-center">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Closing statement */}
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(26px,4.5vw,44px)] leading-[1.2] text-[#0A211F] max-w-[620px] mx-auto mb-6"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          The US wins on <em className="italic text-[#24423B]">scale.</em><br />
          China wins on <em className="italic text-[#24423B]">patents.</em><br />
          Israel wins on <em className="italic text-[#24423B]">density.</em><br />
          India wins on <em className="italic text-[#24423B]">velocity.</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[15px] text-[#24423B] leading-[1.85] max-w-[500px] mx-auto text-left mb-10"
        >
          <strong className="text-[#0A211F] font-semibold">5,509</strong> funded AI startups in the United States.<br />
          <strong className="text-[#0A211F] font-semibold">301,000</strong> AI patents filed by China.<br />
          <strong className="text-[#0A211F] font-semibold">1.98%</strong> workforce density in Israel.<br />
          <strong className="text-[#0A211F] font-semibold">252%</strong> talent growth in India since 2016.<br /><br />
          <span className="text-[#E8C547] font-medium">Four strategies. Four different wins.</span><br /><br />
          The question for founders isn't where the most AI lives.<br />
          It's which strategy matches your stage.
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05, boxShadow: '0 8px 28px rgba(10,33,31,0.2)' }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onNavigate?.('startup-validator-v4')}
          className="inline-flex items-center gap-3 px-11 py-4 bg-[#0A211F] text-[#D8FF85] text-[15px] font-semibold rounded-[14px] tracking-[0.3px] hover:bg-[#1D3730] transition-colors"
        >
          Validate Your AI Idea
          <ArrowRight className="w-4 h-4" />
        </motion.button>

        {/* Sources Panel */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 bg-[#EEF3E4] border border-[#E6ECD6] rounded-[18px] p-9 text-left max-w-[740px] mx-auto"
        >
          <h3 className="text-[18px] text-[#0A211F] mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Sources & Methodology
          </h3>
          <ul className="space-y-2">
            {SOURCES.map((source) => (
              <li
                key={source.num}
                className="flex gap-3 text-[12px] leading-[1.6] p-[10px_14px] bg-white border border-[#E6ECD6] rounded-[10px] hover:border-[#24423B] transition-colors"
              >
                <span className="text-[10px] text-[#DDE6C8] min-w-[20px] pt-[2px]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {source.num}
                </span>
                <div className="flex-1">
                  <span className="font-semibold text-[#0A211F]">{source.title}</span>
                  {' '}
                  <span className="text-[#7C7D79]">— {source.desc}</span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-1 text-[10px] text-[#24423B] break-all hover:text-[#0A211F] hover:underline transition-colors"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {source.url}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-[10px] text-[#7C7D79] tracking-[0.3px]"
        >
          StartupAI Research · February 2026 · Data compiled from 12 verified sources
        </motion.div>
      </div>
    </section>
  );
}
