import Image from "next/image";
import { PhoneIcon } from "./icons";
import { photos, shortNumber } from "@/lib/site";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="pocetna" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src={photos.hero}
        alt="Flota električnih BYD vozila Taxi More"
        fill
        priority
        loading="eager"
        sizes="100vw"
        className="object-cover object-[50%_62%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,20,0.45)_0%,rgba(5,10,20,0.2)_32%,rgba(5,10,20,0.72)_78%,#050a14_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,20,0.55)_0%,transparent_55%)]" />

      <div className="wrap relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24">
        <Reveal when="load">
            <p className="font-condensed text-[13px] font-semibold uppercase tracking-[0.28em] text-white">
            Taxi More · Herceg Novi
          </p>
        </Reveal>
        <Reveal when="load" delay={120}>
          <h1 className="mt-7 max-w-[14ch] font-condensed text-[52px] font-extrabold uppercase leading-[0.88] tracking-tight text-white md:text-[88px] md:mt-8">
            Tišina je nova energija grada
          </h1>
        </Reveal>
        <Reveal when="load" delay={240}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${shortNumber.tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-bright"
            >
              <PhoneIcon className="h-4 w-4" />
              Pozovite {shortNumber.label}
            </a>
            <a
              href="#rezervacija"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/50"
            >
              Preuzmite aplikaciju
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
