import { useState } from "react";
import { ChevronRight, MapPin, TrendingDown, TrendingUp } from "lucide-react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { featuredProject } from "../../data/resume";

const kpiCards = [
  { label: "Revenue", value: "Illustrative", trend: "up" as const },
  { label: "Cost", value: "Illustrative", trend: "down" as const },
  { label: "Profit", value: "Illustrative", trend: "up" as const },
];

const trendPoints = "0,60 40,45 80,50 120,30 160,35 200,15 240,20 280,5";
const cityBars = [
  { city: "City A", height: 70 },
  { city: "City B", height: 45 },
  { city: "City C", height: 85 },
  { city: "City D", height: 30 },
  { city: "City E", height: 58 },
];

function DashboardPreview() {
  return (
    <div className="rounded-2xl border border-line bg-cream p-5 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-widest text-ink-soft">
          Dashboard Preview
        </p>
        <span className="rounded-full bg-terracotta/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-terracotta">
          Illustrative sample data
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {kpiCards.map((kpi) => (
          <div key={kpi.label} className="rounded-xl bg-white p-3 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wide text-ink-soft">
              {kpi.label}
            </p>
            <div className="mt-1.5 flex items-center gap-1">
              {kpi.trend === "up" ? (
                <TrendingUp size={13} className="text-terracotta" />
              ) : (
                <TrendingDown size={13} className="text-charcoal/40" />
              )}
              <span className="text-xs font-bold text-charcoal">{kpi.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl bg-white p-3 shadow-sm">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-ink-soft">
          Sales Performance Trend
        </p>
        <svg viewBox="0 0 280 70" className="h-16 w-full" aria-hidden="true">
          <polyline
            points={trendPoints}
            fill="none"
            stroke="#B96F52"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="mt-3 rounded-xl bg-white p-3 shadow-sm">
        <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-ink-soft">
          <MapPin size={11} />
          City-wise Profitability
        </p>
        <div className="flex h-16 items-end gap-2.5">
          {cityBars.map((bar) => (
            <div key={bar.city} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t bg-terracotta/70"
                style={{ height: `${bar.height}%` }}
              />
              <span className="text-[8px] font-semibold text-ink-soft">{bar.city}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SelectedProjects() {
  const ref = useFadeIn<HTMLDivElement>();
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="portfolio" className="bg-cream px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-ink-soft">
              Portfolio
            </p>
            <h2 className="display-heading break-words text-4xl text-charcoal sm:text-6xl">
              Selected <span className="serif-heading">Projects</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <DashboardPreview />
          </div>

          <div className="lg:col-span-3">
            <span className="display-heading text-6xl text-charcoal/15">
              {featuredProject.number}
            </span>
            <h3 className="display-heading -mt-4 text-3xl text-charcoal sm:text-4xl">
              {featuredProject.title}
            </h3>
            <p className="mt-2 text-xs font-bold uppercase tracking-wide text-terracotta">
              {featuredProject.category}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink-soft">
              <span>
                <strong className="text-charcoal">Tools:</strong> {featuredProject.tools}
              </span>
              <span>
                <strong className="text-charcoal">Type:</strong> {featuredProject.type}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="group mt-6 flex items-center gap-1.5 text-sm font-bold text-charcoal"
            >
              Project Overview
              <ChevronRight
                size={16}
                className={`transition-transform ${expanded ? "rotate-90" : ""}`}
              />
            </button>

            {expanded && (
              <ul className="animate-fade-up mt-4 flex flex-col gap-2.5 border-t border-line pt-4">
                {featuredProject.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
