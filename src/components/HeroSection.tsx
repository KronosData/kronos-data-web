export default function HeroSection() {
  return (
    <section className="hero-mesh relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.18) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Brand badge */}
        <div className="fade-up fade-up-1 inline-flex items-center gap-3 mb-8">
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-blue-500/70" />
          <span className="text-blue-400 text-xs font-semibold tracking-[0.4em] uppercase">
            Kronos Data
          </span>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-blue-500/70" />
        </div>

        {/* H1 */}
        <h1 className="fade-up fade-up-2 text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.07] tracking-tight text-white mb-7">
          Ingeniería de Eficiencia
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
            y Consultoría Administrativa
          </span>
        </h1>

        {/* Subtitle */}
        <p className="fade-up fade-up-3 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-11">
          Transformamos la estructura de su negocio con Inteligencia de Datos y
          Automatización Estratégica.{" "}
          <span className="text-slate-300 font-medium">
            El estándar de élite para empresas de alto rendimiento.
          </span>
        </p>

        {/* CTA */}
        <div className="fade-up fade-up-4">
          <a
            href="#contacto"
            className="btn-glow inline-flex items-center gap-2.5 px-9 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-full tracking-wide transition-colors duration-300"
          >
            Agendar Auditoría Gratuita
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Scroll hint */}
        <div className="fade-up fade-up-4 mt-16 flex flex-col items-center gap-2 opacity-40">
          <span className="text-slate-500 text-xs tracking-widest uppercase">Explorar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-500 animate-bounce"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  );
}
