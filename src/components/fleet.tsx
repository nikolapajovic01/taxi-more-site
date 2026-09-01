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

  return (
    <section id="flota" className="bg-navy-2 py-16 md:py-24">
      <div className="wrap grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        <div>
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
        </div>

        <Reveal className="grid gap-3">
          <button
            type="button"
            onClick={() => setOpen(ecoIndex >= 0 ? ecoIndex : 0)}
            className="relative aspect-[16/10] cursor-zoom-in overflow-hidden rounded-2xl border-0 bg-transparent p-0 text-left"
            aria-label="Otvori sliku: BYD Atto 3 Taxi More na električnom punjenju"
          >
            <Image
              src={photos.eco}
              alt="BYD Atto 3 Taxi More na električnom punjenju"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </button>
          <button
            type="button"
            onClick={() => setOpen(sideIndex >= 0 ? sideIndex : 0)}
            className="relative hidden aspect-[16/7] cursor-zoom-in overflow-hidden rounded-2xl border-0 bg-transparent p-0 text-left md:block"
            aria-label="Otvori sliku: Parkirana flota električnih taksija Taxi More"
          >
            <Image
              src={photos.ecoSide}
              alt="Parkirana flota električnih taksija Taxi More"
              fill
              sizes="50vw"
              className="object-cover object-center"
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
