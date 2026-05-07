import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Glassmorphism bar */}
      <div
        className="mx-4 mt-4 rounded-2xl px-6 py-3 flex items-center justify-between"
        style={{
          background: "rgba(2, 6, 23, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(59, 130, 246, 0.15)",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59,130,246,0.06)",
        }}
      >
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-blue-500/20 group-hover:ring-blue-500/50 transition-all duration-300">
            <Image
              src="/logo-kronos.png"
              alt="Kronos Data"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-[0.95rem] tracking-tight group-hover:text-blue-200 transition-colors duration-300">
              Kronos Data
            </span>
            <span className="text-blue-400/60 text-[9px] font-medium tracking-[0.2em] uppercase hidden sm:block">
              Ingeniería de Eficiencia
            </span>
          </div>
        </Link>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { label: "Soluciones", href: "#soluciones" },
            { label: "Metodología", href: "#metodologia" },
            { label: "Nosotros",   href: "#nosotros"    },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contacto"
          className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-full transition-colors duration-300"
        >
          Agendar Auditoría
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </header>
  );
}
