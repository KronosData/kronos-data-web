"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Necesito saber programar para trabajar con Kronos Data?",
    a: "No. Kronos Data entrega soluciones llave en mano, totalmente gestionadas. Nuestro equipo técnico se encarga de todo el proceso de implementación, configuración y mantenimiento. La empresa cliente no requiere conocimientos técnicos previos.",
  },
  {
    q: "¿En cuánto tiempo veré resultados?",
    a: "Nuestras implementaciones están diseñadas para generar impacto desde el primer ciclo operativo. La mayoría de los clientes reportan mejoras tangibles en eficiencia desde la primera semana de despliegue.",
  },
  {
    q: "¿Trabajan con empresas de cualquier tamaño?",
    a: "En Kronos Data impulsamos organizaciones de todas las escalas. Disponemos de soluciones diseñadas específicamente para el escalamiento tecnológico de PYMES, así como consultoría de alta gama para la optimización de procesos y arquitecturas complejas en grandes corporaciones que demandan agilidad y eficiencia.",
  },
  {
    q: "¿Qué sucede después del despliegue?",
    a: "Kronos Data ofrece monitoreo continuo y soporte técnico post-implementación. Hacemos seguimiento del ROI generado y ajustamos los sistemas para garantizar rendimiento óptimo y escalabilidad a largo plazo.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative py-24 px-6 bg-[#020617] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-blue-500/60" />
            <span className="text-blue-400 text-xs font-semibold tracking-[0.4em] uppercase">
              FAQ
            </span>
            <span className="w-8 h-px bg-blue-500/60" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Preguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              Frecuentes
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-sm mx-auto">
            Respuestas a las dudas más comunes antes de iniciar una consultoría.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-colors duration-300 overflow-hidden ${
                  isOpen
                    ? "border-blue-500/40 bg-blue-500/[0.05]"
                    : "border-blue-500/12 bg-blue-500/[0.02] hover:border-blue-500/25"
                }`}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`text-sm sm:text-base font-medium leading-snug transition-colors duration-200 ${
                      isOpen ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {faq.q}
                  </span>

                  {/* Chevron */}
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-500/15 border-blue-500/35 text-blue-400 rotate-180"
                        : "border-blue-500/15 text-slate-500"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {/* Answer — CSS grid trick for smooth height animation */}
                <div
                  className="grid transition-all duration-350 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-400 text-sm leading-[1.8] px-6 pb-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
