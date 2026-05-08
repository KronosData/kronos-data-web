"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success";

const INITIAL = { firstname: "", email: "", company: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: keyof typeof INITIAL) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.firstname || !form.email || !form.company || !form.message) return;
    setStatus("loading");
    // HubSpot passive tracking captures the submit automatically via the tracking script.
    // We simulate the success state after 1 second.
    setTimeout(() => {
      setStatus("success");
      setForm(INITIAL);
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="text-center py-10 animate-fade-up-success">
        <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
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

        <h3 className="text-xl font-bold text-white mb-5">
          Solicitud Registrada
        </h3>

        <div className="h-px max-w-[120px] mx-auto bg-gradient-to-r from-transparent via-blue-500/35 to-transparent mb-5" />

        <p className="text-slate-300 text-sm sm:text-base leading-[1.8] max-w-sm mx-auto">
          Su requerimiento ha sido registrado. Un consultor especializado de{" "}
          <span className="text-white font-semibold">Kronos Data</span> se
          pondrá en contacto con usted en un plazo máximo de{" "}
          <span className="text-white font-semibold">24 horas hábiles.</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Row 1: Nombre + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-semibold tracking-[0.28em] uppercase text-blue-400/70">
            Nombre Completo
          </label>
          <input
            type="text"
            name="firstname"
            required
            value={form.firstname}
            onChange={set("firstname")}
            placeholder="Nombre Completo"
            className="input-elite"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-semibold tracking-[0.28em] uppercase text-blue-400/70">
            Correo Corporativo
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={set("email")}
            placeholder="nombre@empresa.com"
            className="input-elite"
          />
        </div>
      </div>

      {/* Row 2: Empresa */}
      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-semibold tracking-[0.28em] uppercase text-blue-400/70">
          Empresa
        </label>
        <input
          type="text"
          name="company"
          required
          value={form.company}
          onChange={set("company")}
          placeholder="Nombre de su empresa"
          className="input-elite"
        />
      </div>

      {/* Row 3: Mensaje */}
      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-semibold tracking-[0.28em] uppercase text-blue-400/70">
          Mensaje
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={set("message")}
          placeholder="Describa brevemente el principal desafío operativo o de datos que enfrenta su empresa..."
          className="input-elite resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-glow w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base rounded-full tracking-wide transition-all duration-300 mt-3 hover:scale-[1.02]"
      >
        {status === "loading" ? (
          <>
            <svg
              className="animate-spin shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      <p className="text-slate-600 text-[11px] text-center pt-1">
        Sus datos están protegidos y nunca serán compartidos con terceros.
      </p>
    </form>
  );
}
