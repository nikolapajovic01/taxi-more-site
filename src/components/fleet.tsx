"use client";

import { useState } from "react";
import Image from "next/image";
import { photos } from "@/lib/site";
import { Lightbox } from "./lightbox";
import { Reveal } from "./reveal";

export function Fleet() {
  const [open, setOpen] = useState<number | null>(null);
  const items = photos.gallery;
  const ecoIndex = items.findIndex((p) => p.src === photos.eco);
  const sideIndex = items.findIndex((p) => p.src === photos.ecoSide);
  const brandIndex = items.findIndex((p) => p.src.includes("AQ5A8978"));

  return (
    <section id="flota" className="relative overflow-hidden bg-navy-2 py-16 md:py-24">
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />

      <div className="wrap grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
        <div>
          <Reveal>
            <p className="font-condensed text-[13px] font-semibold uppercase tracking-[0.28em] text-brand">
              Eco flota
            </p>
            <h2 className="mt-3 font-condensed text-[40px] font-extrabold uppercase leading-[0.92] tracking-tight md:text-[56px]">
              Nova energija. Ista pouzdanost.
            </h2>
            <p className="mt-6 max-w-[42ch] text-[16px] leading-relaxed text-white/70">
              80 električnih BYD vozila u Herceg Novom. Tiha vožnja kroz grad,
              nulta lokalna emisija, isti 24/7 ritam na koji ste navikli.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                  EV vozila
                </dt>
                <dd className="mt-1 font-condensed text-[36px] font-extrabold leading-none text-white md:text-[44px]">
                  80
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Dostupnost
                </dt>
                <dd className="mt-1 font-condensed text-[36px] font-extrabold leading-none text-white md:text-[44px]">
                  24/7
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Broj
                </dt>
                <dd className="mt-1 font-condensed text-[36px] font-extrabold leading-none text-brand md:text-[44px]">
                  19730
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={80} className="grid grid-cols-2 gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => setOpen(ecoIndex >= 0 ? ecoIndex : 0)}
            className="group relative col-span-2 aspect-[16/10] cursor-zoom-in overflow-hidden rounded-2xl border-0 bg-transparent p-0 text-left"
            aria-label="Otvori sliku: flota Taxi More danju"
          >
            <Image
              src={photos.eco}
              alt="Flota Taxi More ispred baze i planine iznad Herceg Novog"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
          </button>
          <button
            type="button"
            onClick={() => setOpen(sideIndex >= 0 ? sideIndex : 0)}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-2xl border-0 bg-transparent p-0 text-left"
            aria-label="Otvori sliku: BYD Taxi More na punjenju"
          >
            <Image
              src={photos.ecoSide}
              alt="BYD Taxi More priključeno na punjač danju"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
          </button>
          <button
            type="button"
            onClick={() => setOpen(brandIndex >= 0 ? brandIndex : 0)}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-2xl border-0 bg-transparent p-0 text-left"
            aria-label="Otvori sliku: krovni znak Taxi More"
          >
            <Image
              src="/fleet/taxi-more/AQ5A8978.webp"
              alt="Krovni znak Taxi More na BYD vozilu"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
          </button>
        </Reveal>
      </div>

      {open !== null && (
        <Lightbox
          photos={items}
          index={open}
          onClose={() => setOpen(null)}
          onPrev={() =>
            setOpen((i) => (i === null ? 0 : (i + items.length - 1) % items.length))
          }
          onNext={() =>
            setOpen((i) => (i === null ? 0 : (i + 1) % items.length))
          }
        />
      )}
    </section>
  );
}
