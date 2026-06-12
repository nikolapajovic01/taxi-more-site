"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { CloseIcon, MenuIcon } from "./icons";
import { nav, site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-12 md:py-6">
        <a href="#pocetna" aria-label="Taxi More — početna">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[13.5px] transition-colors hover:text-white ${
                i === 0 ? "font-normal text-[#cfd4de]" : "font-light text-[#8b91a2]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-[18px] lg:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className="text-sm font-semibold tracking-[0.04em] text-white"
          >
            {site.shortPhone}
          </a>
          <a
            href="#naruci"
            className="rounded-[11px] bg-white px-5 py-[11px] text-[13px] font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Naruči vožnju
          </a>
        </div>

        {/* mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-ink/40 px-[13px] py-[7px] text-xs font-semibold tracking-[0.06em] text-white backdrop-blur"
          >
            {site.shortPhone}
          </a>
          <button
            type="button"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white"
          >
            {open ? (
              <CloseIcon className="h-[18px] w-[18px]" />
            ) : (
              <MenuIcon className="h-[18px] w-[18px]" />
            )}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="border-t border-white/[0.06] bg-ink/95 px-5 py-6 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-base font-light text-[#cfd4de] transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#naruci"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-[14px] bg-white py-4 text-center text-sm font-semibold text-ink"
          >
            Naruči vožnju
          </a>
        </div>
      )}
    </header>
  );
}
