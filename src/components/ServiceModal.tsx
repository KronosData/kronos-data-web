"use client";

import { useState, useEffect, type ReactNode, type FormEvent, type ChangeEvent } from "react";

/* ── Types ───────────────────────────────────────────────── */

type Step   = "info" | "form";
type Status = "idle" | "loading" | "success";

interface Props {
  title:   string;
  detail:  string;
  impact:  string;
  icon:    ReactNode;
  onClose: () => void;
}

const EMPTY = { nombre: "", email: "", whatsapp: "", desafio: "" };

/* ── Main component ──────────────────────────────────────── */

export default function ServiceModal({ title, detail, impact, icon, onClose }: Props) {
  const [step,   setStep]   = useState<Step>("info");
  const [form,   setForm]   = useState(EMPTY);
  const [status, setStatus] = useState<Status>("idle");

  /* ESC + body lock */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const setField = (field: keyof typeof EMPTY) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [field]: e.target.value }));

  const goToForm = () => { setStep("form"); setStatus("idle"); };

  const handleBack = () => { setStep("info"); setForm(EMPTY); setStatus("idle"); };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.whatsapp || !form.desafio) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "idle");
    } catch {
      setStatus("idle");
    }
  };

  /* Key drives the fade animation: each distinct view gets its own key */
  const contentKey =
    step === "info" ? "info" : status === "success" ? "success" : "form";

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#020617]/85 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="modal-panel relative w-full max-w-lg rounded-2xl max-h-[88vh] flex flex-col"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(2,6,23,0.97) 100%)",
          border: "1px solid rgba(59,130,246,0.40)",
          boxShadow:
            "0 0 0 1px rgba(59,130,246,0.07), 0 0 50px rgba(59,130,246,0.17), 0 30px 70px rgba(0,0,0,0.65)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent rounded-t-2xl" />

        {/* ── Persistent header (no animation) ───────────── */}
        <div className="flex items-center justify-between px-8 pt-7 pb-5 shrink-0">
          {/* Left: icon (info) or back button (form) or empty (success) */}
          {status === "success" ? (
            <div className="w-8" /> /* spacer */
          ) : step === "info" ? (
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/22 flex items-center justify-center shrink-0">
              {icon}
            </div>
          ) : (
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-medium transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              Regresar
            </button>
          )}

          {/* Right: close X */}
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/6 transition-colors duration-200 ml-auto"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Animated content area ───────────────────────── */}
        <div className="overflow-y-auto overscroll-contain px-8 pb-8">
          <div key={contentKey} className="step-enter">

            {/* ── STEP 1: Info ──────────────────────────── */}
            {contentKey === "info" && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug pr-2">
                  {title}
                </h3>
                <div className="h-px bg-gradient-to-r from-blue-500/35 via-blue-500/12 to-transparent mb-5" />
                <p className="text-slate-300 text-[0.93rem] leading-[1.78] mb-5">
                  {detail}
                </p>

                {/* Impact badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-500/[0.07] border border-blue-500/20 mb-7">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 shrink-0">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  <span className="text-blue-300/85 text-[11px] font-medium">
                    Impacto Esperado: {impact}
                  </span>
                </div>

                <button
                  onClick={goToForm}
                  className="btn-glow w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-full tracking-wide transition-colors duration-300"
                >
                  Agendar Auditoría Gratuita
                  <ArrowRight />
                </button>
              </div>
            )}

            {/* ── STEP 2: Form ──────────────────────────── */}
            {contentKey === "form" && (
              <div>
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-blue-400/60 mb-5">
                  Solicitar este servicio
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Nombre + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Nombre Completo">
                      <input
                        type="text"
                        required
                        value={form.nombre}
                        onChange={setField("nombre")}
                        placeholder="Nombre Completo"
                        className="input-elite"
                      />
                    </Field>
                    <Field label="Correo Corporativo">
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={setField("email")}
                        placeholder="nombre@empresa.com"
                        className="input-elite"
                      />
                    </Field>
                  </div>

                  {/* WhatsApp */}
                  <Field label="WhatsApp">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm pointer-events-none select-none">
                        +
                      </span>
                      <input
                        type="tel"
                        required
                        value={form.whatsapp}
                        onChange={setField("whatsapp")}
                        placeholder="1 (555) 000-0000"
                        className="input-elite pl-7"
                      />
                    </div>
                  </Field>

                  {/* Desafío */}
                  <Field label="Descripción del Desafío">
                    <textarea
                      required
                      rows={3}
                      value={form.desafio}
                      onChange={setField("desafio")}
                      placeholder="Describa brevemente el desafío operativo o de datos que enfrenta su empresa..."
                      className="input-elite resize-none"
                    />
                  </Field>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-glow w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-full tracking-wide transition-colors duration-300 mt-1"
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="animate-spin shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Solicitud
                        <ArrowRight />
                      </>
                    )}
                  </button>
                </form>

                {/* Guarantee note */}
                <div className="flex items-start gap-2.5 px-3.5 py-3 rounded-xl border border-blue-500/15 bg-blue-500/[0.05] mt-5 mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400 shrink-0 mt-0.5"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <p className="text-slate-400 text-[11px] leading-[1.7]">
                    <span className="text-blue-300/90 font-semibold">Garantía 30 días — </span>
                    Si el sistema requiere ajustes de calibración durante los primeros 30 días,
                    nuestro equipo de ingeniería realiza las optimizaciones sin costo adicional.
                  </p>
                </div>

                {/* Calendly secondary */}
                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-blue-500/10" />
                  <span className="text-slate-600 text-[10px] tracking-widest uppercase">
                    o agenda directamente
                  </span>
                  <div className="flex-1 h-px bg-blue-500/10" />
                </div>
                <p className="text-center text-xs text-slate-500">
                  Agende su cita directamente vía{" "}
                  <a
                    href="https://calendly.com/alejandro-kronosdata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400/70 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200"
                  >
                    Calendly aquí
                  </a>
                  .
                </p>
              </div>
            )}

            {/* ── STEP 2: Success ───────────────────────── */}
            {contentKey === "success" && (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-white mb-4">
                  Solicitud Registrada
                </h3>

                <div className="h-px max-w-[100px] mx-auto bg-gradient-to-r from-transparent via-blue-500/35 to-transparent mb-5" />

                <p className="text-slate-300 text-sm leading-[1.8] max-w-xs mx-auto">
                  Su requerimiento ha sido registrado. Un consultor técnico
                  especializado de{" "}
                  <span className="text-white font-semibold">Kronos Data</span>{" "}
                  se pondrá en contacto con usted en un plazo máximo de{" "}
                  <span className="text-white font-semibold">
                    24 horas hábiles.
                  </span>
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ──────────────────────────────────────── */

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-semibold tracking-[0.28em] uppercase text-blue-400/65">
        {label}
      </label>
      {children}
    </div>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
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
  );
}
