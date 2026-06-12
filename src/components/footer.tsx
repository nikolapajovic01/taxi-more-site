import { Logo } from "./logo";
import { PhoneIcon } from "./icons";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer id="o-nama" className="border-t border-white/[0.06] bg-[#04060b]">
      {/* ---------- Desktop ---------- */}
      <div className="mx-auto hidden max-w-[1280px] grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-9 px-14 py-14 md:grid">
        <div>
          <Logo className="mb-[18px]" />
          <p className="max-w-[240px] text-[13px] font-light leading-relaxed text-[#8b91a2]">
            Premium električni taksi prevoz u Herceg Novom i okolini.
          </p>
        </div>
        <div>
          <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#6c7385]">
            Navigacija
          </div>
          <div className="flex flex-col gap-[11px]">
            {nav.slice(1).map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[13.5px] font-light text-[#aeb6c6] transition-colors hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#6c7385]">
            Kontakt
          </div>
          <div className="flex flex-col gap-[11px] text-[13.5px] font-light text-[#aeb6c6]">
            <a href={`tel:${site.phoneTel}`} className="hover:text-white">
              {site.phone}
            </a>
            <span>Viber · WhatsApp</span>
            <span>{site.location}</span>
          </div>
        </div>
        <div>
          <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#6c7385]">
            Pozovi 24/7
          </div>
          <a
            href={`tel:${site.phoneTel}`}
            className="text-[34px] font-semibold tracking-[0.04em] text-white"
          >
            {site.shortPhone}
          </a>
          <div className="mt-3.5 text-[10px] font-light uppercase tracking-[0.22em] text-[#5b6172]">
            {site.tagline}
          </div>
        </div>
      </div>

      {/* ---------- Mobile ---------- */}
      <div className="px-6 py-8 md:hidden">
        <Logo className="mb-[18px]" />
        <a
          href={`tel:${site.phoneTel}`}
          className="mb-4 flex items-center gap-3.5 rounded-2xl border border-white/10 p-[15px]"
        >
          <PhoneIcon className="h-5 w-5 text-brand" />
          <span className="flex-1">
            <span className="block text-[10px] uppercase tracking-[0.18em] text-[#6c7385]">
              Pozovi 24/7
            </span>
            <span className="block text-[20px] font-semibold tracking-[0.04em] text-white">
              {site.shortPhone}
            </span>
          </span>
          <span className="text-[10.5px] text-[#6c7385]">Viber · WhatsApp</span>
        </a>
        <div className="text-center text-[10px] font-light uppercase tracking-[0.24em] text-[#5b6172]">
          {site.tagline}
        </div>
      </div>
    </footer>
  );
}
