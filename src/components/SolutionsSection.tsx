"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import ServiceModal from "./ServiceModal";

interface Solution {
  icon: ReactNode;
  title: string;
  description: string;
  detail: string;
  impact: string;
}

const solutions: Solution[] = [
  {
    icon: <AutoIcon />,
    title: "Sistemas de Operaciones Autónomas",
    description:
      "Ingeniería de flujos de trabajo mediante n8n para la eliminación de procesos manuales y escalabilidad operativa.",
    detail:
      "Implementación de flujos de trabajo con n8n y creación de Agentes de IA para atención al cliente y operaciones 24/7. Escalabilidad sin aumentar costes operativos.",
    impact: "Procesos 100% autónomos",
  },
  {
    icon: <DataIcon />,
    title: "Arquitectura de Datos y Dashboards",
    description:
      "Limpieza, procesamiento y visualización estratégica de Big Data (SQL/Python) para decisiones de negocio en tiempo real.",
    detail:
      "Visualización estratégica de Big Data. Usamos IA para generar arquitecturas en SQL y Python que transforman datos crudos en tableros de control para decisiones en tiempo real.",
    impact: "Decisiones basadas en datos",
  },
  {
    icon: <IntelIcon />,
    title: "Inteligencia Competitiva & Scraping",
    description:
      "Extracción automatizada de datos de mercado y análisis de competencia para posicionamiento estratégico de marca.",
    detail:
      "Extracción automatizada de datos (Web Scraping) y análisis de mercado con IA para detectar oportunidades y movimientos de la competencia antes que nadie.",
    impact: "Ventaja comercial inmediata",
  },
  {
    icon: <AuditIcon />,
    title: "Auditoría de Conversión Digital",
    description:
      "Optimización técnica de activos digitales (SEO, Ads, Social) basada en algoritmos de IA para maximizar el ROI.",
    detail:
      "Optimización avanzada de SEO y campañas de Ads utilizando modelos de IA para maximizar el ROI y la tasa de conversión de tu ecosistema digital.",
    impact: "Máximo retorno de inversión",
  },
];

const TAG = "Powered by Kronos Neural Engine";

export default function SolutionsSection() {
  const [visible, setVisible] = useState<boolean[]>(
    Array(solutions.length).fill(false)
  );
  const [selected, setSelected] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          solutions.forEach((_, i) => {
            setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 135);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const active = selected !== null ? solutions[selected] : null;

  return (
    <>
      <section
        ref={sectionRef}
        id="soluciones"
        className="relative py-28 px-6 bg-[#020617] overflow-hidden"
      >
        {/* Central ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/[0.045] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-blue-500/60" />
              <span className="text-blue-400 text-xs font-semibold tracking-[0.4em] uppercase">
                Soluciones
              </span>
              <span className="w-8 h-px bg-blue-500/60" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Tecnología de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                Vanguardia
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
              Cuatro pilares de ingeniería diseñados para empresas que operan en el nivel más alto.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {solutions.map((s, i) => (
              <div
                key={i}
                onClick={() => setSelected(i)}
                className={`group glass-card rounded-2xl p-5 sm:p-8 relative overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2.5 ${
                  visible[i]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-7"
                }`}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/45 to-transparent" />

                {/* Corner dot */}
                <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-blue-500/35 group-hover:bg-blue-400/70 transition-colors duration-300" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 shrink-0 group-hover:bg-blue-500/15 group-hover:border-blue-500/35 transition-colors duration-300 [&_svg]:overflow-visible">
                  {s.icon}
                </div>

                {/* Title */}
                <h3 className="text-[1.05rem] font-semibold text-white mb-3 leading-snug">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-7">
                  {s.description}
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between gap-3">
                  {/* Tag badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/[0.07]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
                    <span className="text-blue-400/80 text-[11px] font-medium tracking-wide">
                      {TAG}
                    </span>
                  </div>

                  {/* Hover indicator */}
                  <span className="text-blue-400/0 group-hover:text-blue-400/65 text-xs flex items-center gap-1 transition-colors duration-300 shrink-0">
                    Ver detalles
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {active !== null && (
        <ServiceModal
          title={active.title}
          detail={active.detail}
          impact={active.impact}
          icon={active.icon}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}

/* ── Icons ───────────────────────────────────────────────── */

function AutoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-400"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-400"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function IntelIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-400"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
    </svg>
  );
}

function AuditIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-400"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
