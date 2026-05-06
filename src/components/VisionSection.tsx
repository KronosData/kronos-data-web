export default function VisionSection() {
  return (
    <section
      id="nosotros"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background gradient — slightly deeper than base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#02091c] to-[#020617]" />

      {/* Side ambient glows */}
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-64 h-64 bg-blue-600/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-64 h-64 bg-blue-600/[0.05] rounded-full blur-3xl pointer-events-none" />

      {/* Horizontal dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-blue-500/60" />
          <span className="text-blue-400 text-xs font-semibold tracking-[0.4em] uppercase">
            Sobre Nosotros
          </span>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-blue-500/60" />
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
          La Visión{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Kronos
          </span>
        </h2>

        {/* Decorative opening quote */}
        <div
          className="text-[90px] leading-[0.7] font-serif text-blue-500/12 select-none mb-6"
          aria-hidden="true"
        >
          &#8220;
        </div>

        {/* Quote */}
        <p className="text-lg sm:text-xl text-slate-300 leading-[1.85] tracking-wide">
          En la intersección de la excelencia administrativa y la vanguardia
          tecnológica,{" "}
          <span className="text-white font-semibold">
            transformamos la complejidad en rentabilidad.
          </span>{" "}
          Bajo estándares de ingeniería de datos, impulsamos a empresas que
          exigen{" "}
          <span className="text-white font-semibold">
            perfección operativa.
          </span>
        </p>

        {/* Decorative divider */}
        <div className="mt-14 flex items-center justify-center gap-2.5">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-500/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/70" />
          <div className="w-1 h-1 rounded-full bg-blue-500/35" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>
      </div>
    </section>
  );
}
