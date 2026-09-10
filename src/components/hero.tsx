import Image from "next/image";
import { PhoneIcon } from "./icons";
import { photos, shortNumber } from "@/lib/site";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="pocetna" className="relative min-h-[100svh] overflow-hidden bg-navy">
      <Image
        src={photos.hero}
        alt="Dnevna flota električnih BYD vozila Taxi More pod nadstrešnicom"
        fill
        priority
        loading="eager"
        sizes="100vw"
        className="hero-drift object-cover object-[55%_45%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,20,0.28)_0%,rgba(5,10,20,0.08)_24%,rgba(5,10,20,0.22)_68%,#050a14_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,20,0.55)_0%,rgba(5,10,20,0.22)_40%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.14),transparent_70%)]" />

      <div className="wrap relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24">
        <div className="relative max-w-[36rem]">
          <div className="pointer-events-none absolute -inset-x-5 -inset-y-4 rounded-[1.75rem] bg-[linear-gradient(105deg,rgba(5,10,20,0.62)_0%,rgba(5,10,20,0.32)_60%,transparent_100%)] md:-inset-x-7 md:-inset-y-5" />
          <div className="relative">
            <Reveal when="load">
              <p className="font-condensed text-[13px] font-semibold uppercase tracking-[0.28em] text-white">
                Taxi More · Herceg Novi
              </p>
            </Reveal>
            <Reveal when="load" delay={120}>
              <h1 className="mt-7 max-w-[14ch] font-condensed text-[52px] font-extrabold uppercase leading-[0.88] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)] md:mt-8 md:text-[88px]">
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
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-black/25 px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/55 hover:bg-black/35"
                >
                  Preuzmite aplikaciju
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
