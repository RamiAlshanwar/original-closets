"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    sendContact,
    null,
  );

  const input =
    "w-full border border-teal/60 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-teal";

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <input name="name" placeholder="Your Name" required className={input} />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className={input}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Your Phone"
          className={input}
        />
      </div>
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        className={input}
      />

      {/* Spam trap: hidden from people, bots fill it */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-teal text-white text-xs font-semibold py-3 rounded-lg hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "SENDING..." : "SUBMIT"}
      </button>

      {state && (
        <p
          className={`text-sm text-center ${state.ok ? "text-teal" : "text-red-600"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
