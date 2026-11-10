"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlights the link of the section currently in the middle of the screen
  // (none while the hero, #top, is there).
  useEffect(() => {
    const sections = ["top", ...navLinks.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === "top" ? "" : entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-night-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-3.5 sm:px-10">
        <a href="#top" onClick={close} className="flex items-center gap-3 text-white">
          <Image src="/logo.png" alt="" width={40} height={40} priority className="h-10 w-10 object-contain" />
          <span className="text-[17px] font-bold">
            Jhonatan{" "}
            <span className="hidden font-medium text-lilac-300 md:inline">| Backend Developer &amp; Data Scientist</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[15px] font-medium">
            {navLinks.map(({ id, title }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`inline-flex min-h-[44px] items-center transition-colors hover:text-white ${
                    active === id ? "text-white" : "text-lilac-200"
                  }`}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.15] text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <nav id="mobile-menu" aria-label="Mobile" hidden={!open} className="border-t border-white/[0.08] bg-night-900 md:hidden">
        <ul className="mx-auto flex max-w-[1200px] flex-col px-5 py-2 sm:px-10">
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={close}
                className="flex min-h-[48px] items-center text-base font-medium text-lilac-200 transition-colors hover:text-white"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
