"use server";

import { Resend } from "resend";

export type ContactState = { ok: boolean; message: string } | null;

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const website = String(formData.get("website") || ""); // hidden field to catch spam bots

  if (website)
    return { ok: true, message: "Thank you! We will contact you soon." };
  if (!name || !email || !message) {
    return {
      ok: false,
      message: "Please fill in your name, email and message.",
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Original Closets Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    });
    if (error) throw error;
    return { ok: true, message: "Thank you! We will contact you soon." };
  } catch {
    return {
      ok: false,
      message: "Something went wrong. Please call us instead.",
    };
  }
}
