"use client";

import { useState } from "react";
import Image from "next/image";
import { photos } from "@/lib/site";
import { Lightbox } from "./lightbox";
import { Reveal } from "./reveal";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const items = photos.gallery;

  return (
    <section id="galerija" className="bg-navy-2 py-16 md:py-24">
      <div className="wrap">
        <p className="font-condensed text-[13px] font-semibold uppercase tracking-[0.28em] text-brand">
          Galerija
        </p>
        <h2 className="mt-3 font-condensed text-[40px] font-extrabold uppercase leading-[0.92] tracking-tight md:text-[56px]">
          Flota u pokretu
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {items.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 90}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="relative aspect-[3/2] w-full cursor-zoom-in overflow-hidden rounded-xl border-0 bg-transparent p-0 text-left"
                aria-label={`Otvori sliku: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open !== null && (
        <Lightbox
          photos={items}
          index={open}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((i) => (i === null ? 0 : (i + items.length - 1) % items.length))}
          onNext={() => setOpen((i) => (i === null ? 0 : (i + 1) % items.length))}
        />
      )}
    </section>
  );
}
