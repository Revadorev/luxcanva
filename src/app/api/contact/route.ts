import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, website, country, monthly_volume, message, form_type } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. Save to Supabase
    const { error: dbError } = await supabase.from("contact_leads").insert({
      name,
      company,
      email,
      phone,
      website,
      country,
      monthly_volume,
      message,
      form_type: form_type || "contact",
    });

    if (dbError) {
      console.error("DB error:", dbError);
    }

    // 2. Send email via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f7f2ea;border-radius:16px;">
          <h2 style="color:#111;margin-bottom:8px;">New B2B Inquiry — LuxCanva</h2>
          <p style="color:#666;font-size:14px;margin-bottom:24px;">Form type: <strong>${form_type || "contact"}</strong></p>
          <table style="width:100%;border-collapse:collapse;">
            ${name ? `<tr><td style="padding:8px 0;color:#555;width:160px;"><strong>Name</strong></td><td style="padding:8px 0;">${name}</td></tr>` : ""}
            ${company ? `<tr><td style="padding:8px 0;color:#555;"><strong>Company</strong></td><td style="padding:8px 0;">${company}</td></tr>` : ""}
            <tr><td style="padding:8px 0;color:#555;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:8px 0;color:#555;"><strong>Phone</strong></td><td style="padding:8px 0;">${phone}</td></tr>` : ""}
            ${website ? `<tr><td style="padding:8px 0;color:#555;"><strong>Website</strong></td><td style="padding:8px 0;">${website}</td></tr>` : ""}
            ${country ? `<tr><td style="padding:8px 0;color:#555;"><strong>Country</strong></td><td style="padding:8px 0;">${country}</td></tr>` : ""}
            ${monthly_volume ? `<tr><td style="padding:8px 0;color:#555;"><strong>Monthly volume</strong></td><td style="padding:8px 0;">${monthly_volume}</td></tr>` : ""}
          </table>
          ${message ? `<div style="margin-top:20px;padding:16px;background:#fff;border-radius:12px;border:1px solid #e5e0d8;"><strong>Message:</strong><p style="margin:8px 0 0;">${message}</p></div>` : ""}
          <p style="margin-top:24px;font-size:12px;color:#999;">Submitted via LuxCanva website</p>
        </div>
      `;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "LuxCanva <onboarding@resend.dev>",
          to: ["horia.petrutiu@kidgps.ro"],
          subject: `New B2B Inquiry from ${company || name || email} — LuxCanva`,
          html,
          reply_to: email,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
