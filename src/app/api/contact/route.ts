import { NextRequest, NextResponse } from "next/server";

const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID ?? "51436991";
const FORM_GUID  = process.env.HUBSPOT_FORM_GUID  ?? "";

export async function POST(req: NextRequest) {
  const { nombre, email, whatsapp, desafio } = await req.json();

  // Log always — visible en Vercel Functions logs como respaldo
  console.log("[contact] nuevo envío:", { nombre, email, whatsapp, desafio: desafio?.slice(0, 80) });

  if (FORM_GUID) {
    const payload = {
      fields: [
        { objectTypeId: "0-1", name: "firstname", value: nombre    },
        { objectTypeId: "0-1", name: "email",     value: email     },
        { objectTypeId: "0-1", name: "phone",     value: whatsapp  },
        { objectTypeId: "0-1", name: "message",   value: desafio   },
      ],
      context: {
        pageUri:  req.headers.get("referer") ?? "https://kronosdata.tech",
        pageName: "Kronos Data — Formulario de Contacto",
      },
    };

    try {
      const hs = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
        {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body:    JSON.stringify(payload),
        }
      );
      if (!hs.ok) {
        console.error("[contact] HubSpot API error:", await hs.text());
      }
    } catch (err) {
      console.error("[contact] HubSpot fetch failed:", err);
    }
  }

  // HubSpot tracking script ya captura el envío pasivamente desde el navegador.
  // Siempre devolvemos éxito para no bloquear al usuario.
  return NextResponse.json({ success: true });
}
