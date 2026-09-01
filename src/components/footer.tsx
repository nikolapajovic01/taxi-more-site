import { Logo } from "./logo";
import { FacebookIcon, InstagramIcon, PhoneIcon } from "./icons";
import { extras, phones, shortNumber, site } from "@/lib/site";

export function Footer() {
  return (
    <footer id="kontakt" className="border-t border-white/10 bg-[#03060d]">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1fr_1fr_1.2fr] md:py-16">
        <div>
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-condensed text-[22px] font-extrabold text-brand">
              {shortNumber.label}
            </span>
          </div>
          <p className="mt-4 max-w-[28ch] text-[14px] leading-relaxed text-white/55">
            Sestrinski brend DAJMI grupe. Električni taksi prevoz u Herceg
            Novom.
          </p>
          <a
            href={site.dajmi}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[13px] font-semibold tracking-wide text-brand hover:text-brand-bright"
          >
            Dio DAJMI grupe →
          </a>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Taxi More"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Taxi More"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:text-white"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-condensed text-[13px] font-bold uppercase tracking-[0.22em] text-white/40">
            Kontakt
          </h2>
          <a
            href={`tel:${shortNumber.tel}`}
            className="mt-4 flex items-center gap-2 font-condensed text-[34px] font-extrabold leading-none text-white hover:text-brand"
          >
            <PhoneIcon className="h-6 w-6 text-brand" />
            {shortNumber.label}
          </a>
          <ul className="mt-4 space-y-1.5 text-[14px] text-white/70">
            {phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="hover:text-white">
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-brand">
            Radno vrijeme {site.hours}
          </p>
          <ul className="mt-6 space-y-1.5 text-[13px] text-white/45">
            {extras.map((item) => (
              <li key={item.label}>
                {item.label}:{" "}
                <a href={`tel:${item.tel}`} className="text-white/70 hover:text-white">
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-condensed text-[13px] font-bold uppercase tracking-[0.22em] text-white/40">
            Lokacija
          </h2>
          <a
            href={site.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-[15px] text-white/75 hover:text-white"
          >
            {site.address}
            <br />
            {site.location}
          </a>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Taxi More na mapi - Herceg Novi"
              src={site.mapEmbed}
              className="h-[180px] w-full grayscale invert"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
