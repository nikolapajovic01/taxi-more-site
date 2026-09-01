import { Logo } from "./logo";
import { PhoneIcon, ViberIcon } from "./icons";
import { nav, phones, shortNumber } from "@/lib/site";

export function Header() {
  const viber = phones[0];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/75 backdrop-blur-md">
      <div className="wrap flex items-center justify-between gap-3 py-3 md:py-4">
        <a href="#pocetna" className="flex min-w-0 items-center gap-2.5">
          <Logo priority />
          <span className="font-condensed text-[22px] font-extrabold leading-none tracking-tight text-brand md:text-[26px]">
            {shortNumber.label}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-wide text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`viber://chat?number=%2B${viber.wa}`}
            className="hidden items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-[13px] font-semibold text-white transition-colors hover:border-white/40 sm:inline-flex"
          >
            <ViberIcon className="h-4 w-4" />
            Viber
          </a>
          <a
            href={`tel:${shortNumber.tel}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-brand-bright"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {shortNumber.label}
          </a>
        </div>
      </div>
    </header>
  );
}
