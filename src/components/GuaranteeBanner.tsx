export default function GuaranteeBanner() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020c1e] to-[#020617]" />

      {/* Top & bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14">

          {/* ── Left: icon + heading ────────────────────────── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left shrink-0">
            {/* Shield icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0.04) 100%)",
                border: "1px solid rgba(59,130,246,0.28)",
                boxShadow: "0 0 24px rgba(59,130,246,0.12)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-400"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            {/* 30-day badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/[0.08] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase">
                30 Días
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight max-w-[260px]">
              Garantía de Optimización
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                Operativa
              </span>
            </h2>
          </div>

          {/* Vertical divider — desktop only */}
          <div className="hidden lg:block self-stretch w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent shrink-0" />

          {/* ── Right: description ──────────────────────────── */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-slate-300 text-base sm:text-[1.05rem] leading-[1.85] mb-6">
              Nuestra metodología de{" "}
              <span className="text-white font-semibold">
                Ingeniería Sin Errores
              </span>{" "}
              respalda cada implementación. Si durante los primeros{" "}
              <span className="text-white font-semibold">30 días</span> el
              sistema presenta desviaciones técnicas o requiere ajustes de
              calibración para alinearse con los objetivos acordados, nuestro
              equipo de ingeniería realizará las optimizaciones necesarias{" "}
              <span className="text-white font-semibold">
                sin costo adicional.
              </span>
            </p>

            {/* Closing statement */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-blue-500/18 bg-blue-500/[0.05]">
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
                className="text-blue-400 shrink-0"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-slate-400 text-xs font-medium tracking-wide">
                Garantizamos robustez tecnológica desde el primer día.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
