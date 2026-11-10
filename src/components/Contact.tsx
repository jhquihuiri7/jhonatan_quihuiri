"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "sonner";
import LocationGlobe from "./globe/LocationGlobe";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const EMPTY_FORM: FormState = { name: "", email: "", message: "" };

const FIELD_CLASS =
  "w-full rounded-xl border border-white/[0.14] bg-night-800 px-[18px] text-[15px] text-white transition-colors focus:border-brand-rose/70 focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);

  const isValid = Object.values(form).every((value) => value.trim() !== "");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid || loading) return;

    setLoading(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setForm(EMPTY_FORM);
        toast.success("Email sent successfully");
      } else {
        toast.error("Error sending email, try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending email, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pt-[clamp(64px,8vw,112px)] sm:px-10"
    >
      <div className="flex flex-wrap items-stretch gap-10">
        <Reveal className="flex min-w-0 flex-[1_1_520px] flex-col gap-7 rounded-3xl border border-white/[0.08] bg-night-900 p-[clamp(24px,4vw,44px)]">
          <SectionHeading eyebrow="Get in touch" title="Contact" id="contact-title" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2.5">
              <label htmlFor="contact-name" className="text-[15px] font-medium">
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className={`${FIELD_CLASS} h-[52px]`}
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="contact-email" className="text-[15px] font-medium">
                Your Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className={`${FIELD_CLASS} h-[52px]`}
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="contact-message" className="text-[15px] font-medium">
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className={`${FIELD_CLASS} resize-y py-3.5 leading-relaxed`}
              />
            </div>
            <button
              type="submit"
              disabled={!isValid || loading}
              className="min-h-[48px] self-start rounded-xl bg-gradient-to-br from-brand-violet to-brand-rose px-9 text-[15px] font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:brightness-100"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative flex min-h-[380px] min-w-0 flex-[1_1_360px] flex-col items-center justify-center gap-7"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[46%] aspect-square w-[460px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(79,124,255,0.32),rgba(79,124,255,0))]"
          />
          <LocationGlobe />
          <p className="relative inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-night-900/[0.85] px-[18px] py-2.5 text-sm font-medium text-lilac-100">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-pink" />
            San Cristóbal, Galápagos · Open to relocation
          </p>
        </Reveal>
      </div>
    </section>
  );
}
