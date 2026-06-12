import { AppleIcon, PlayIcon, StarIcon } from "./icons";
import { reviews } from "@/lib/site";

function StoreButtons() {
  return (
    <div className="mt-5 flex gap-2.5 md:mt-[26px] md:gap-3">
      <a
        href="#"
        className="flex items-center gap-2.5 rounded-xl border border-white/[0.14] bg-black/30 px-3.5 py-2.5 transition-colors hover:border-white/30 md:px-[18px] md:py-3"
      >
        <AppleIcon className="h-[17px] w-[17px] text-white md:h-[18px] md:w-[18px]" />
        <span className="leading-tight">
          <span className="block text-[8px] tracking-[0.08em] text-[#8b91a2] md:text-[9px]">
            Preuzmi na
          </span>
          <span className="block text-[13px] font-semibold text-white md:text-[14px]">
            App Store
          </span>
        </span>
      </a>
      <a
        href="#"
        className="flex items-center gap-2.5 rounded-xl border border-white/[0.14] bg-black/30 px-3.5 py-2.5 transition-colors hover:border-white/30 md:px-[18px] md:py-3"
      >
        <PlayIcon className="h-4 w-4 md:h-[17px] md:w-[17px]" />
        <span className="leading-tight">
          <span className="block text-[8px] tracking-[0.08em] text-[#8b91a2] md:text-[9px]">
            Skini na
          </span>
          <span className="block text-[13px] font-semibold text-white md:text-[14px]">
            Google Play
          </span>
        </span>
      </a>
    </div>
  );
}

function Stars({ size = 14 }: { size?: number }) {
  return (
    <div className="flex gap-0.5 text-brand">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} style={{ width: size, height: size }} />
      ))}
    </div>
  );
}

function ReviewCard({
  text,
  author,
  place,
}: {
  text: string;
  author: string;
  place: string;
}) {
  return (
    <div className="rounded-[18px] border border-white/[0.07] bg-ink-2 p-[18px] md:p-[26px]">
      <Stars />
      <p className="mt-3.5 text-[13.5px] font-light leading-relaxed text-[#cfd4de] md:text-sm">
        „{text}”
      </p>
      <div className="mt-3.5 text-[12px] text-[#8b91a2] md:text-[12.5px]">
        <span className="font-medium text-[#e6e9f0]">{author}</span> · {place}
      </div>
    </div>
  );
}

export function AppAndReviews() {
  return (
    <section id="aplikacija" className="bg-ink py-10 md:py-12">
      <div className="mx-auto grid max-w-[1280px] gap-7 px-6 md:grid-cols-[1.2fr_1fr] md:gap-7 md:px-14">
        {/* app card */}
        <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[linear-gradient(155deg,#0e1320,#0a0d15)] md:rounded-[22px]">
          <div className="pointer-events-none absolute -right-8 -top-8 h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(47,125,246,0.22),transparent_70%)] md:h-[240px] md:w-[240px]" />
          <div className="relative p-[26px] md:flex md:items-center md:gap-10 md:p-12">
            <div>
              <div className="text-[10.5px] uppercase tracking-[0.3em] text-brand md:text-[11px]">
                Aplikacija
              </div>
              <h2 className="mt-2.5 text-[24px] font-light leading-[1.1] text-white md:mt-3.5 md:text-[34px]">
                Naruči u <span className="font-semibold">dva dodira.</span>
              </h2>
              <p className="mt-3 max-w-[340px] text-sm font-light leading-relaxed text-[#8b91a2] md:mt-3.5">
                Prati vozilo uživo, plati u aplikaciji, sačuvaj omiljene rute.
              </p>
              <StoreButtons />
            </div>
          </div>
        </div>

        {/* reviews */}
        <div className="flex flex-col gap-4 md:gap-[18px]">
          <div className="flex items-center gap-2.5 md:hidden">
            <Stars size={13} />
            <span className="text-[12px] font-light text-[#8b91a2]">
              4.9 · 1200+ vožnji
            </span>
          </div>
          {reviews.map((r) => (
            <ReviewCard key={r.author} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
