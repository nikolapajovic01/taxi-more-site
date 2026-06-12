import { SectionHeading } from "./section-heading";
import { transfers } from "@/lib/site";

export function Transfers() {
  return (
    <section id="transferi" className="bg-ink py-10 md:py-12">
      <div className="mx-auto max-w-[1280px] px-6 md:px-14">
        <div className="mb-5 md:mb-8">
          <SectionHeading eyebrow="Aerodromski transferi">
            Fiksna cijena. <span className="font-semibold">Bez iznenađenja.</span>
          </SectionHeading>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-white/[0.07] md:grid md:grid-cols-3 md:gap-5 md:rounded-none md:border-0">
          {transfers.map((t, i) => (
            <div
              key={t.code}
              className={`flex items-center gap-3.5 bg-ink-2 p-[15px] md:gap-[18px] md:rounded-2xl md:border md:border-white/[0.08] md:p-[26px] md:px-7 ${
                i > 0 ? "border-t border-white/[0.06] md:border-t-0" : ""
              }`}
            >
              <span className="w-[34px] text-[12px] font-bold text-brand md:w-auto md:text-[15px]">
                {t.code}
              </span>
              <div className="flex-1">
                <div className="text-[13.5px] font-medium text-[#e6e9f0] md:text-[16px]">
                  {t.city}
                </div>
                <div className="text-[10.5px] font-light text-[#6c7385] md:text-[12px]">
                  {t.time}
                </div>
              </div>
              <span className="text-[15px] font-semibold text-white md:text-[24px]">
                {t.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
