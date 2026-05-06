import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <footer id="contacto" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020d24] to-[#010510]" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/35 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/[0.055] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-28 pb-12">

        {/* ── Primary: Contact form ───────────────────────────── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-blue-500/60" />
            <span className="text-blue-400 text-xs font-semibold tracking-[0.4em] uppercase">
              Contacto
            </span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-blue-500/60" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Inicie su{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              Transformación
            </span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-md mx-auto">
            Complete el formulario y un consultor de Kronos Data le responderá
            en{" "}
            <span className="text-slate-300 font-medium">
              menos de 24 horas hábiles.
            </span>
          </p>
        </div>

        {/* Form card */}
        <div
          className="rounded-2xl p-8 sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(2,6,23,0.95) 100%)",
            border: "1px solid rgba(59,130,246,0.2)",
            boxShadow:
              "0 0 0 1px rgba(59,130,246,0.06), 0 30px 60px rgba(0,0,0,0.4)",
          }}
        >
          {/* Card top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent rounded-t-2xl" />
          <ContactForm />
        </div>

        {/* ── Secondary: Calendly ─────────────────────────────── */}
        <div className="mt-10 text-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-blue-500/10" />
            <span className="text-slate-600 text-xs tracking-widest uppercase">
              o agenda directamente
            </span>
            <div className="flex-1 h-px bg-blue-500/10" />
          </div>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500/25 text-blue-400/80 hover:text-blue-300 hover:border-blue-400/45 text-sm font-medium transition-all duration-300 hover:bg-blue-500/5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Agendar en Calendly
          </a>
        </div>

        {/* ── Footer ─────────────────────────────────────────── */}
        <div className="mt-16 pt-8 border-t border-blue-500/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-[11px]">
          <span>© 2025 Kronos Data. Todos los derechos reservados.</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-blue-500/50" />
            Ingeniería de Eficiencia y Consultoría Administrativa
          </span>
        </div>
      </div>
    </footer>
  );
}
