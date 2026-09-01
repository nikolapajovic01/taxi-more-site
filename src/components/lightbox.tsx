"use client";

import { useEffect } from "react";
import Image from "next/image";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";

export type LightboxPhoto = { src: string; alt: string };

export function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: LightboxPhoto[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Zatvori"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/50 text-white hover:bg-black/80"
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Prethodna slika"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/50 text-white hover:bg-black/80 md:left-6"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Sljedeća slika"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/50 text-white hover:bg-black/80 md:right-6"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </>
      )}

      <div
        className="relative h-[min(90vh,900px)] w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="90vw"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
