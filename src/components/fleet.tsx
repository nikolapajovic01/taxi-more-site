import { SectionHeading } from "./section-heading";
import { fleet } from "@/lib/site";

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-[7px] border border-white/10 px-[9px] py-1 text-[10px] text-[#aeb6c6] md:rounded-lg md:px-[11px] md:py-[5px] md:text-[11px]">
      {children}
    </span>
  );
}

export function Fleet() {
  return (
    <section id="flota" className="bg-ink py-12 md:py-[72px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-5 flex items-end justify-between px-6 md:mb-9 md:px-14">
          <SectionHeading eyebrow="Naša flota">
            Potpuno <span className="font-semibold">električna.</span>
          </SectionHeading>
          <a
            href="#transferi"
            className="shrink-0 text-[11px] font-light text-[#8b91a2] transition-colors hover:text-white md:text-[13px]"
          >
            Vidi sve →
          </a>
        </div>

        <div className="no-scrollbar flex gap-3.5 overflow-x-auto px-6 md:grid md:grid-cols-3 md:gap-[22px] md:overflow-visible md:px-14">
          {fleet.map((car) => (
            <article
              key={car.name}
              className="flex w-[232px] shrink-0 flex-col overflow-hidden rounded-[20px] border border-white/[0.07] bg-ink-3 md:w-auto md:rounded-[18px]"
            >
              <div
                className="h-[150px] bg-no-repeat md:h-[210px]"
                style={{
                  backgroundImage: `url('${car.image}')`,
                  backgroundSize: car.size,
                  backgroundPosition: car.position,
                }}
              />
              <div className="p-[14px] md:p-[22px] md:pb-6">
                <h3 className="text-[15px] font-semibold text-[#f1f3f8] md:text-[18px]">
                  {car.name}
                </h3>
                <p className="mt-0.5 text-[11px] font-light text-[#727989] md:mt-1 md:text-[12.5px]">
                  {car.desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 md:mt-4 md:gap-2">
                  {car.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
