const techs = [
  { name: "n8n",          icon: <N8nIcon /> },
  { name: "Python",       icon: <PythonIcon /> },
  { name: "SQL",          icon: <SqlIcon /> },
  { name: "OpenAI",       icon: <OpenAiIcon /> },
  { name: "Google Cloud", icon: <GoogleCloudIcon /> },
  { name: "AWS",          icon: <AwsIcon /> },
  { name: "Selenium",     icon: <SeleniumIcon /> },
];

/*
 * Flat-list infinite marquee — works on all viewports (375 px → 4 K).
 *
 * half  = 4 copies × 7 items = 28 items
 *         width ≈ 28 × 130 px + 27 × 32 px gap ≈ 4 504 px  >  3 840 px (4 K) ✓
 *
 * track = [...half, ...half] = 56 items in ONE flat flex container.
 *         All gaps are identical — same CSS `gap` rule applies everywhere,
 *         including the seam between the two halves. No overflow, no overlap.
 *
 * translateX(-50%) = exactly one half's natural width → perfect seamless loop.
 */
const half  = [...techs, ...techs, ...techs, ...techs]; // 28 items ≈ 4 504 px
const track = [...half, ...half];                        // 56 items, 2 × half

import React from "react";

export default function TechStrip() {
  return (
    <section className="relative py-14 border-y border-blue-500/8 bg-[#020617]">

      {/* Label */}
      <p className="text-center text-[10px] font-semibold tracking-[0.38em] uppercase text-slate-600 mb-10">
        Tecnologías de Clase Mundial para Soluciones Locales
      </p>

      {/*
        marquee-viewport → overflow:hidden + CSS mask-image fade on both edges.
        marquee-track    → single flat flex row, gap-8, translateX(-50%).
        No nested sets, no space-around, no absolute overlays.
      */}
      <div className="marquee-viewport">
        <div className="marquee-track">
          {track.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 flex-shrink-0 px-5 py-2.5 rounded-full border border-blue-500/12 bg-blue-500/[0.03]"
            >
              <span className="text-blue-400/60 leading-none flex-shrink-0">
                {tech.icon}
              </span>
              <span className="text-slate-400 text-sm font-medium whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Icons ────────────────────────────────────────────────── */

function N8nIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="4"  cy="12" r="2.5" />
      <circle cx="20" cy="7"  r="2.5" />
      <circle cx="20" cy="17" r="2.5" />
      <path d="M6.2 11.2 17.8 7.8M6.2 12.8 17.8 16.2" />
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c-3 0-5 1.5-5 4v3h5" />
      <path d="M7 9H4a2 2 0 0 0-2 2v4c0 2 2 3.5 5 3.5h5V15" />
      <path d="M12 22c3 0 5-1.5 5-4v-3h-5" />
      <path d="M17 15h3a2 2 0 0 0 2-2V9c0-2-2-3.5-5-3.5h-5V9" />
      <circle cx="9.5"  cy="8.5"  r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="15.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SqlIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="8" ry="2.5" />
      <path d="M4 6v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V6" />
      <path d="M4 11v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" />
    </svg>
  );
}

function OpenAiIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 20.5 7 20.5 17 12 22 3.5 17 3.5 7" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function GoogleCloudIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      <path d="M12 11v4M10 13h4" />
    </svg>
  );
}

function AwsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      <polyline points="12 11 10 17 13 15.5 11 21" strokeWidth="1.4" />
    </svg>
  );
}

function SeleniumIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="14" rx="2" />
      <path d="M7 21h10M12 17v4" />
      <path d="M8 10c0-2.2 1.8-4 4-4s4 1.8 4 4" />
      <polyline points="10 10 12 8 14 10" />
    </svg>
  );
}
