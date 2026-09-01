import {
  AppleIcon,
  PhoneIcon,
  PlayIcon,
  ViberIcon,
  WhatsAppIcon,
} from "./icons";
import { phones, shortNumber, site } from "@/lib/site";

function StoreButtons() {
  return (
    <div className="flex flex-col gap-2.5 sm:flex-row">
      <a
        href={site.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-xl border border-white/12 bg-black/40 px-4 py-3 transition-colors hover:border-white/30"
      >
        <AppleIcon className="h-6 w-6 text-white" />
        <span className="leading-tight">
          <span className="block text-[10px] text-white/50">Preuzmite na</span>
          <span className="block text-[15px] font-semibold">App Store</span>
        </span>
      </a>
      <a
        href={site.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-xl border border-white/12 bg-black/40 px-4 py-3 transition-colors hover:border-white/30"
      >
        <PlayIcon className="h-6 w-6 text-white" />
        <span className="leading-tight">
          <span className="block text-[10px] text-white/50">Preuzmite na</span>
          <span className="block text-[15px] font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

export function Booking() {
  return (
    <section id="rezervacija" className="bg-navy py-16 md:py-24">
      <div className="wrap">
        <p className="font-condensed text-[13px] font-semibold uppercase tracking-[0.28em] text-brand">
          Rezervacija
        </p>
        <h2 className="mt-3 font-condensed text-[40px] font-extrabold uppercase leading-[0.92] tracking-tight md:text-[56px]">
          Brzo. Jednostavno. Pouzdano.
        </h2>

        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-navy-2 p-6 md:p-8">
            <div className="flex items-center gap-2 text-brand">
              <PhoneIcon className="h-5 w-5" />
              <h3 className="font-condensed text-[15px] font-bold uppercase tracking-[0.16em]">
                Poziv
              </h3>
            </div>
            <a
              href={`tel:${shortNumber.tel}`}
              className="mt-5 block font-condensed text-[56px] font-extrabold leading-none tracking-tight text-white hover:text-brand"
            >
              {shortNumber.label}
            </a>
            <ul className="mt-6 space-y-2">
              {phones.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="text-[16px] font-medium text-white/75 hover:text-white"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-navy-2 p-6 md:p-8">
            <div className="flex items-center gap-2 text-brand">
              <ViberIcon className="h-5 w-5" />
              <h3 className="font-condensed text-[15px] font-bold uppercase tracking-[0.16em]">
                Viber
              </h3>
            </div>
            <p className="mt-3 text-[13px] text-white/45">Samo poruke</p>
            <ul className="mt-5 space-y-3">
              {phones.map((p) => (
                <li key={`viber-${p.tel}`}>
                  <a
                    href={`viber://chat?number=%2B${p.wa}`}
                    className="text-[16px] font-medium text-white/75 hover:text-white"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-navy-2 p-6 md:p-8">
            <div className="flex items-center gap-2 text-brand">
              <WhatsAppIcon className="h-5 w-5" />
              <h3 className="font-condensed text-[15px] font-bold uppercase tracking-[0.16em]">
                WhatsApp
              </h3>
            </div>
            <p className="mt-3 text-[13px] text-white/45">Samo poruke</p>
            <ul className="mt-5 space-y-3">
              {phones.map((p) => (
                <li key={`wa-${p.tel}`}>
                  <a
                    href={`https://wa.me/${p.wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] font-medium text-white/75 hover:text-white"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-3 rounded-2xl border border-white/10 bg-navy-2 p-6 md:flex md:items-center md:justify-between md:p-8">
          <div className="mb-5 md:mb-0">
            <h3 className="font-condensed text-[22px] font-bold uppercase tracking-tight">
              Aplikacija Taxi More
            </h3>
            <p className="mt-1 text-[14px] text-white/55">
              Naručite vožnju, pratite vozilo i vidite cijenu unaprijed.
            </p>
          </div>
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}
