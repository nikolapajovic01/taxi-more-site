"use client";

import { useState } from "react";
import Image from "next/image";
import { photos } from "@/lib/site";
import { Lightbox } from "./lightbox";
import { Reveal } from "./reveal";

function spanClass(span?: string) {
  switch (span) {
    case "feature":
      return "col-span-2 row-span-2 md:col-span-2";
    case "wide":
      return "col-span-2 row-span-1";
    case "tall":
      return "col-span-1 row-span-2";
    default:
      return "col-span-1 row-span-1";
  }
}

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const items = photos.gallery;

  return (
    <section id="galerija" className="bg-navy-2 py-16 md:py-24">
      <div className="wrap">
        <Reveal>
          <p className="font-condensed text-[13px] font-semibold uppercase tracking-[0.28em] text-brand">
            Galerija
          </p>
          <h2 className="mt-3 font-condensed text-[40px] font-extrabold uppercase leading-[0.92] tracking-tight md:text-[56px]">
            Flota u pokretu
          </h2>
        </Reveal>

        <div className="mt-10 grid auto-rows-[120px] grid-cols-2 gap-2 sm:auto-rows-[140px] md:auto-rows-[160px] md:grid-cols-4 md:gap-3 lg:auto-rows-[180px]">
          {items.map((photo, i) => {
            const span = "span" in photo ? photo.span : undefined;
            return (
              <Reveal
                key={photo.src}
                delay={(i % 5) * 60}
                className={spanClass(span)}
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group relative h-full min-h-full w-full cursor-zoom-in overflow-hidden rounded-xl border-0 bg-navy-3 p-0 text-left"
                  aria-label={`Otvori sliku: ${photo.alt}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={
                      span === "feature" || span === "wide"
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 50vw, 25vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {open !== null && (
        <Lightbox
          photos={items}
          index={open}
          onClose={() => setOpen(null)}
          onPrev={() =>
            setOpen((i) =>
              i === null ? 0 : (i + items.length - 1) % items.length,
            )
          }
          onNext={() =>
            setOpen((i) => (i === null ? 0 : (i + 1) % items.length))
          }
        />
      )}
    </section>
  );
}
