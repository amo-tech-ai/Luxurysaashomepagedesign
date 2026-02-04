# Data Visualization Style Guide
## BCG-Inspired Chart & Graph Standards

**Version**: 1.0  
**Philosophy**: Clarity, Minimal, Flat, Data-First

---

## Visualization Principles

### Core Rules

1. **Numbers > Decoration** — Labels prioritized over legends
2. **Flat design** — No gradients, no 3D effects
3. **Clean axes** — Thin lines, subtle grid
4. **Accent color sparingly** — Emerald for emphasis only
5. **Simple is better** — Bar charts > complex visualizations

---

## Color Usage in Charts

### Primary Data Color

```css
/* Primary Emerald */
--chart-primary: #0D5F4E;

/* Primary Hover */
--chart-primary-hover: #0A4D3F;

/* Primary Light (for backgrounds) */
--chart-primary-light: #E8F3F0;
```

### Secondary Data Color (When comparing)

```css
/* Secondary Sage */
--chart-secondary: #6B9D89;

/* Tertiary (rare) */
--chart-tertiary: #B8B6B3;
```

### Neutral Chart Elements

```css
/* Axis lines */
--chart-axis: #E6E4E1;

/* Grid lines */
--chart-grid: #F0EFEC;

/* Text labels */
--chart-text: #5A5A5A;

/* Background */
--chart-background: #FFFFFF;
```

---

## Chart Types & Styles

### 1. Bar Chart (Horizontal)

**Use for**: Comparing categories, rankings

**Visual**:
```
Category A  ████████████████████  85%
Category B  ███████████████       72%
Category C  ████████████          61%
Category D  ██████████            48%
```

**Recharts Configuration**:
```tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

<BarChart
  data={data}
  layout="horizontal"
  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
  <CartesianGrid 
    strokeDasharray="0" 
    stroke="#F0EFEC" 
    vertical={false}
  />
  <XAxis 
    type="number"
    stroke="#E6E4E1"
    tick={{ fill: '#5A5A5A', fontSize: 12 }}
    axisLine={{ stroke: '#E6E4E1' }}
  />
  <YAxis 
    type="category"
    dataKey="name"
    stroke="#E6E4E1"
    tick={{ fill: '#1F1F1F', fontSize: 14 }}
    axisLine={false}
    tickLine={false}
  />
  <Bar 
    dataKey="value" 
    fill="#0D5F4E"
    radius={[0, 4, 4, 0]}
  />
</BarChart>
```

**Custom CSS**:
```css
.bar-chart-container {
  background: #FFFFFF;
  padding: 32px;
  border: 1px solid #E6E4E1;
}

/* Bar hover effect */
.recharts-bar-rectangle:hover {
  fill: #0A4D3F;
}
```

---

### 2. Bar Chart (Vertical/Column)

**Use for**: Time-series data, trends over time

**Visual**:
```
     │
 100 │     
     │  █     
  75 │  █  █  
     │  █  █  █
  50 │  █  █  █
     │  █  █  █  █
  25 │  █  █  █  █
     └──┴──┴──┴──┴──
      Q1 Q2 Q3 Q4
```

**Recharts Configuration**:
```tsx
<BarChart
  data={data}
  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
  <CartesianGrid 
    strokeDasharray="0" 
    stroke="#F0EFEC"
    horizontal={true}
    vertical={false}
  />
  <XAxis 
    dataKey="quarter"
    stroke="#E6E4E1"
    tick={{ fill: '#5A5A5A', fontSize: 12 }}
  />
  <YAxis 
    stroke="#E6E4E1"
    tick={{ fill: '#5A5A5A', fontSize: 12 }}
    axisLine={false}
  />
  <Bar 
    dataKey="value" 
    fill="#0D5F4E"
    radius={[4, 4, 0, 0]}
  />
</BarChart>
```

---

### 3. Line Chart

**Use for**: Trends, continuous data, forecasts

**Visual**:
```
     │       ╱
 100 │     ╱
     │   ╱
  75 │ ╱
     │
  50 │
     │
  25 │
     └──────────────
```

**Recharts Configuration**:
```tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Dot } from 'recharts';

<LineChart
  data={data}
  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
  <CartesianGrid 
    strokeDasharray="0" 
    stroke="#F0EFEC"
  />
  <XAxis 
    dataKey="month"
    stroke="#E6E4E1"
    tick={{ fill: '#5A5A5A', fontSize: 12 }}
  />
  <YAxis 
    stroke="#E6E4E1"
    tick={{ fill: '#5A5A5A', fontSize: 12 }}
  />
  <Line 
    type="monotone"
    dataKey="value" 
    stroke="#0D5F4E"
    strokeWidth={2}
    dot={{ fill: '#0D5F4E', r: 4 }}
    activeDot={{ r: 6 }}
  />
</LineChart>
```

**Multiple Lines**:
```tsx
<Line 
  type="monotone"
  dataKey="actual" 
  stroke="#0D5F4E"
  strokeWidth={2}
  name="Actual"
/>
<Line 
  type="monotone"
  dataKey="forecast" 
  stroke="#6B9D89"
  strokeWidth={2}
  strokeDasharray="5 5"
  name="Forecast"
/>
```

---

### 4. Area Chart

**Use for**: Volume over time, cumulative data

**Recharts Configuration**:
```tsx
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';

<AreaChart
  data={data}
  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
  <CartesianGrid 
    strokeDasharray="0" 
    stroke="#F0EFEC"
  />
  <XAxis 
    dataKey="month"
    stroke="#E6E4E1"
    tick={{ fill: '#5A5A5A', fontSize: 12 }}
  />
  <YAxis 
    stroke="#E6E4E1"
    tick={{ fill: '#5A5A5A', fontSize: 12 }}
  />
  <Area 
    type="monotone"
    dataKey="value" 
    stroke="#0D5F4E"
    strokeWidth={2}
    fill="#E8F3F0"
    fillOpacity={0.6}
  />
</AreaChart>
```

---

### 5. Comparison Chart (Grouped Bars)

**Use for**: Comparing multiple series side-by-side

**Recharts Configuration**:
```tsx
<BarChart data={data}>
  <CartesianGrid strokeDasharray="0" stroke="#F0EFEC" />
  <XAxis dataKey="category" />
  <YAxis />
  <Bar dataKey="seriesA" fill="#0D5F4E" name="Current Year" />
  <Bar dataKey="seriesB" fill="#6B9D89" name="Previous Year" />
</BarChart>
```

---

### 6. Simple Table (Alternative to Charts)

**When to use**: Precise numbers matter more than trends

**HTML Structure**:
```html
<table class="data-table">
  <thead>
    <tr>
      <th>Metric</th>
      <th class="numeric">Q1 2026</th>
      <th class="numeric">Q4 2025</th>
      <th class="numeric">Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Revenue</td>
      <td class="numeric">$4.2M</td>
      <td class="numeric">$3.8M</td>
      <td class="numeric accent">+10.5%</td>
    </tr>
    <tr>
      <td>Users</td>
      <td class="numeric">2,400</td>
      <td class="numeric">2,100</td>
      <td class="numeric accent">+14.3%</td>
    </tr>
  </tbody>
</table>
```

**CSS**:
```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  background: #FFFFFF;
  border: 1px solid #E6E4E1;
}

.data-table th {
  text-align: left;
  padding: 16px 24px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #5A5A5A;
  background: #F7F6F3;
  border-bottom: 2px solid #E6E4E1;
}

.data-table td {
  padding: 16px 24px;
  font-size: 14px;
  color: #1F1F1F;
  border-bottom: 1px solid #E6E4E1;
}

.data-table td.numeric {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.data-table td.accent {
  color: #0D5F4E;
  font-weight: 500;
}

.data-table tr:hover {
  background: #F7F6F3;
}
```

---

## Chart Formatting Guidelines

### Axes

**X-Axis**:
- Font size: 12px
- Color: #5A5A5A
- Line: 1px solid #E6E4E1
- Tick marks: Optional (or remove)

**Y-Axis**:
- Font size: 12px
- Color: #5A5A5A
- Line: Remove (axisLine: false)
- Grid: Horizontal only, thin, subtle

### Grid Lines

```css
/* Prefer horizontal grid only */
<CartesianGrid 
  strokeDasharray="0"     /* Solid, not dashed */
  stroke="#F0EFEC"        /* Very subtle */
  horizontal={true}
  vertical={false}         /* Remove vertical grid */
/>
```

### Labels

**Direct Labeling** (Preferred):
```tsx
/* Label bars directly instead of using legend */
<Bar dataKey="value" fill="#0D5F4E">
  <LabelList 
    dataKey="value" 
    position="right"
    style={{ fill: '#5A5A5A', fontSize: 12 }}
  />
</Bar>
```

**Legend** (If necessary):
```tsx
<Legend 
  verticalAlign="bottom"
  height={36}
  iconType="square"
  wrapperStyle={{
    fontSize: '12px',
    color: '#5A5A5A'
  }}
/>
```

---

## Chart Container Components

### Standard Chart Card

```tsx
interface ChartCardProps {
  title: string;
  subtitle?: string;
  source?: string;
  children: React.ReactNode;
}

const ChartCard = ({ title, subtitle, source, children }: ChartCardProps) => (
  <div className="chart-card">
    <div className="chart-header">
      <h3 className="chart-title">{title}</h3>
      {subtitle && <p className="chart-subtitle">{subtitle}</p>}
    </div>
    <div className="chart-body">
      {children}
    </div>
    {source && (
      <div className="chart-footer">
        <span className="chart-source">Source: {source}</span>
      </div>
    )}
  </div>
);
```

**CSS**:
```css
.chart-card {
  background: #FFFFFF;
  border: 1px solid #E6E4E1;
  padding: 48px;
  margin-bottom: 48px;
}

.chart-header {
  margin-bottom: 32px;
}

.chart-title {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 400;
  color: #1F1F1F;
  margin-bottom: 8px;
}

.chart-subtitle {
  font-size: 14px;
  color: #5A5A5A;
  line-height: 1.5;
}

.chart-body {
  margin-bottom: 24px;
}

.chart-footer {
  padding-top: 16px;
  border-top: 1px solid #E6E4E1;
}

.chart-source {
  font-size: 12px;
  color: #888888;
}
```

---

## Data Annotation

### Callout Numbers

**Use for**: Highlighting key data points

```tsx
<div className="stat-callout">
  <span className="stat-value">75%</span>
  <span className="stat-label">Accuracy Rate</span>
</div>
```

**CSS**:
```css
.stat-callout {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background: #E8F3F0;
  border: 1px solid #0D5F4E;
  border-radius: 4px;
}

.stat-value {
  font-size: 48px;
  font-weight: 300;
  line-height: 1;
  color: #0D5F4E;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #5A5A5A;
}
```

---

## Responsive Chart Behavior

### Desktop (>1024px)
- Full width charts
- Show all labels
- Multiple charts side-by-side (2-column grid)

### Tablet (768-1024px)
- Reduce margins
- Stack charts vertically
- Maintain readability

### Mobile (<768px)
- Single column
- Simplify charts (fewer data points)
- Consider replacing complex charts with tables
- Horizontal scroll for wide tables

```css
@media (max-width: 768px) {
  .chart-card {
    padding: 24px;
  }
  
  .chart-title {
    font-size: 20px;
  }
  
  /* Reduce chart height */
  .recharts-wrapper {
    width: 100% !important;
    height: 300px !important;
  }
  
  /* Make tables scrollable */
  .data-table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
```

---

## Chart Type Decision Tree

### Choose the right visualization:

**Comparing categories** → Horizontal bar chart  
**Trend over time** → Line chart or vertical bars  
**Part-to-whole** → Avoid pie charts, use stacked bars  
**Correlation** → Scatter plot (rare)  
**Distribution** → Histogram or box plot  
**Precise numbers** → Table instead of chart

---

## Anti-Patterns to Avoid

### ❌ Never Use

**Pie Charts**:
- Hard to compare slices
- Use horizontal bars instead

**3D Effects**:
- Distorts data perception
- Adds visual noise

**Gradients in Bars/Areas**:
- Unnecessary decoration
- Use flat colors

**Complex Multi-Axis Charts**:
- Confusing for readers
- Split into multiple simple charts

**Decorative Icons**:
- Use actual data labels
- Icons don't add information

**Animations** (Unless subtle):
- No bouncing bars
- No spinning charts
- Smooth transitions only (300ms max)

---

## Recharts Global Theme

```tsx
// chartTheme.ts
export const chartTheme = {
  colors: {
    primary: '#0D5F4E',
    secondary: '#6B9D89',
    tertiary: '#B8B6B3',
    grid: '#F0EFEC',
    axis: '#E6E4E1',
    text: '#5A5A5A',
    background: '#FFFFFF',
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    size: {
      small: 12,
      medium: 14,
      large: 16,
    }
  },
  spacing: {
    margin: { top: 20, right: 30, left: 20, bottom: 5 },
  }
};

// Usage
<BarChart margin={chartTheme.spacing.margin}>
  <Bar fill={chartTheme.colors.primary} />
</BarChart>
```

---

## Accessibility Considerations

### Color Contrast
- Ensure text labels have 4.5:1 contrast
- Use patterns/textures for colorblind users (if comparing)
- Provide data tables as alternative

### Keyboard Navigation
- Charts should be focusable
- Provide keyboard shortcuts for tooltips

### Screen Readers
- Add ARIA labels to charts
- Provide text summaries of key findings
- Include data tables for screen readers

```tsx
<BarChart aria-label="Revenue growth by quarter">
  {/* Chart content */}
</BarChart>

<table className="sr-only" aria-label="Revenue data table">
  {/* Accessible data table */}
</table>
```

---

## Example: Complete Chart Implementation

```tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';

const data = [
  { category: 'Problem Validation', value: 85 },
  { category: 'Solution Fit', value: 72 },
  { category: 'Market Size', value: 68 },
  { category: 'Competitive Advantage', value: 61 },
];

const ValidationChart = () => (
  <div className="chart-card">
    <div className="chart-header">
      <h3 className="chart-title">Validation Scores by Category</h3>
      <p className="chart-subtitle">
        Based on analysis of 2,000 startup applications
      </p>
    </div>
    
    <div className="chart-body">
      <BarChart
        data={data}
        layout="horizontal"
        width={600}
        height={300}
        margin={{ top: 20, right: 40, left: 150, bottom: 20 }}
      >
        <CartesianGrid 
          strokeDasharray="0" 
          stroke="#F0EFEC"
          vertical={false}
        />
        <XAxis 
          type="number"
          stroke="#E6E4E1"
          tick={{ fill: '#5A5A5A', fontSize: 12 }}
          domain={[0, 100]}
        />
        <YAxis 
          type="category"
          dataKey="category"
          stroke="#E6E4E1"
          tick={{ fill: '#1F1F1F', fontSize: 14 }}
          axisLine={false}
          tickLine={false}
        />
        <Bar 
          dataKey="value" 
          fill="#0D5F4E"
          radius={[0, 4, 4, 0]}
        >
          <LabelList 
            dataKey="value" 
            position="right"
            formatter={(value: number) => `${value}%`}
            style={{ fill: '#5A5A5A', fontSize: 12, fontWeight: 500 }}
          />
        </Bar>
      </BarChart>
    </div>
    
    <div className="chart-footer">
      <span className="chart-source">Source: StartupAI Platform Data, Q1 2026</span>
    </div>
  </div>
);
```

---

**End of Data Visualization Guide**

Next: See [Complete Examples](./05-EXAMPLES.md) for full page implementations.
