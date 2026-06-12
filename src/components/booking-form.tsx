"use client";

import { useState, type FormEvent } from "react";
import { PinIcon } from "./icons";
import { site } from "@/lib/site";

type Variant = "desktop" | "mobile";

export function BookingForm({ variant }: { variant: Variant }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [when, setWhen] = useState<"odmah" | "zakazi">("odmah");

  function submit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      "Zdravo, želim da naručim vožnju:",
      from ? `Polazak: ${from}` : "Polazak: (nije unijeto)",
      to ? `Odredište: ${to}` : "Odredište: (nije unijeto)",
      `Vrijeme: ${when === "odmah" ? "Odmah" : "Zakazano"}`,
    ];
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (variant === "desktop") {
    return (
      <form
        onSubmit={submit}
        className="mt-8 flex max-w-[440px] items-center gap-2.5 rounded-2xl border border-white/[0.09] bg-[#0e121c] p-2.5"
      >
        <label className="flex flex-1 items-center gap-2.5 px-3 py-2">
          <span className="h-[9px] w-[9px] shrink-0 rounded-full border-2 border-brand" />
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Polazak"
            className="w-full bg-transparent text-[13px] font-light text-[#cfd4de] outline-none placeholder:text-[#cfd4de]"
          />
        </label>
        <span className="h-6 w-px bg-white/[0.08]" />
        <label className="flex flex-1 items-center gap-2.5 px-3 py-2">
          <PinIcon className="h-[13px] w-[13px] shrink-0 text-brand" />
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Odredište"
            className="w-full bg-transparent text-[13px] font-light text-[#cfd4de] outline-none placeholder:text-[#cfd4de]"
          />
        </label>
        <button
          type="submit"
          className="rounded-[11px] bg-brand px-[22px] py-[13px] text-[13px] font-semibold text-white transition-transform hover:scale-[1.03]"
        >
          Naruči
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[22px] border border-white/[0.08] bg-gradient-to-b from-[#11151f] to-[#0b0e16] p-[18px] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)]"
    >
      <div className="mb-4 flex gap-1.5">
        {(["odmah", "zakazi"] as const).map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => setWhen(opt)}
            className={`flex-1 rounded-[11px] py-[9px] text-xs tracking-[0.02em] transition-colors ${
              when === opt
                ? "bg-brand font-semibold text-white"
                : "font-normal text-[#8b91a2]"
            }`}
          >
            {opt === "odmah" ? "Odmah" : "Zakaži"}
          </button>
        ))}
      </div>
      <label className="flex items-center gap-3 border-b border-white/[0.07] px-1 py-[13px]">
        <span className="h-[9px] w-[9px] shrink-0 rounded-full border-2 border-brand" />
        <input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Polazna lokacija"
          className="w-full bg-transparent text-[13.5px] font-light text-[#cfd4de] outline-none placeholder:text-[#cfd4de]"
        />
      </label>
      <label className="flex items-center gap-3 px-1 py-[13px]">
        <PinIcon className="h-[14px] w-[14px] shrink-0 text-brand" />
        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Odredište"
          className="w-full bg-transparent text-[13.5px] font-light text-[#cfd4de] outline-none placeholder:text-[#cfd4de]"
        />
      </label>
      <button
        type="submit"
        className="mt-3.5 w-full rounded-[14px] bg-white py-[15px] text-sm font-semibold text-ink transition-transform active:scale-[0.99]"
      >
        Naruči vožnju
      </button>
      <p className="mt-3 text-center text-[11.5px] font-light text-[#727989]">
        ili pozovi{" "}
        <a href={`tel:${site.phoneTel}`} className="font-medium text-[#cfd4de]">
          {site.shortPhone}
        </a>{" "}
        — dostupni 24/7
      </p>
    </form>
  );
}
