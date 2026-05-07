import { Fragment } from "react";
import type { ReactNode } from "react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Auditoría profunda de sus procesos actuales para detectar fugas de eficiencia y mapear oportunidades de automatización de alto impacto.",
    icon: <DiagnoseIcon />,
  },
  {
    number: "02",
    title: "Arquitectura",
    description:
      "Diseño de un ecosistema personalizado de IA y automatización, construido sobre la infraestructura tecnológica óptima para su operación.",
    icon: <ArchitectIcon />,
  },
  {
    number: "03",
    title: "Despliegue",
    description:
      "Implementación técnica, capacitación del equipo y monitoreo continuo de ROI en tiempo real para garantizar resultados medibles.",
    icon: <DeployIcon />,
  },
];

export default function MethodologySection() {
  return (
    <section id="metodologia" className="relative py-28 px-6 bg-[#020617] overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/18 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/[0.035] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-18">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-blue-500/60" />
            <span className="text-blue-400 text-xs font-semibold tracking-[0.4em] uppercase">
              Metodología
            </span>
            <span className="w-8 h-px bg-blue-500/60" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            El Proceso{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              Kronos
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-md mx-auto">
            Una metodología probada que convierte el análisis en resultados operativos tangibles.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-stretch gap-0 mt-16">
          {steps.map((step, i) => (
            <Fragment key={step.number}>
              <div className="flex-1 relative group">
                {/* Watermark number */}
                <span className="absolute -top-4 -left-1 text-[7rem] font-bold leading-none text-blue-500/[0.05] select-none pointer-events-none">
                  {step.number}
                </span>

                <div className="relative z-10 px-1 md:px-6 lg:px-8 py-2">
                  {/* Step badge */}
                  <div className="inline-flex items-center gap-2 mb-5">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-blue-400/70 uppercase bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                      Paso {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-blue-500/8 border border-blue-500/15 flex items-center justify-center mb-5 group-hover:bg-blue-500/15 group-hover:border-blue-500/30 transition-colors duration-300">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-2 shrink-0 text-blue-500/25 pt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Icons ───────────────────────────────────────────────── */

function DiagnoseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  );
}

function ArchitectIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
      <rect x="3"  y="3"  width="7" height="7" />
      <rect x="14" y="3"  width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <path d="M6.5 10v4h7v-4M10 14v3" />
    </svg>
  );
}

function DeployIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M15 12v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
