import { NextRequest, NextResponse } from "next/server";

const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID ?? "51436991";
const FORM_GUID  = process.env.HUBSPOT_FORM_GUID  ?? "";

export async function POST(req: NextRequest) {
  if (!FORM_GUID) {
    console.error("[contact] HUBSPOT_FORM_GUID no está definido en .env.local");
    return NextResponse.json(
      { error: "Formulario no configurado. Añade HUBSPOT_FORM_GUID en las variables de entorno." },
      { status: 500 }
    );
  }

  const { nombre, email, whatsapp, desafio } = await req.json();

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

  const hs = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
    {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    }
  );

  if (!hs.ok) {
    const msg = await hs.text();
    console.error("[contact] HubSpot error:", msg);
    return NextResponse.json({ error: "Error al enviar a HubSpot" }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
