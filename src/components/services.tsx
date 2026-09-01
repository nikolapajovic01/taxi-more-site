import { AccessibleIcon } from "./icons";
import { Reveal } from "./reveal";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="usluge" className="bg-navy py-16 md:py-24">
      <div className="wrap">
        <p className="font-condensed text-[13px] font-semibold uppercase tracking-[0.28em] text-brand">
          Usluge
        </p>
        <h2 className="mt-3 max-w-[16ch] font-condensed text-[40px] font-extrabold uppercase leading-[0.92] tracking-tight md:text-[56px]">
          Gdje god da krenete
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {services.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="rounded-2xl border border-white/10 bg-navy-2 p-6 md:p-8">
                <span className="font-condensed text-[13px] font-bold tracking-widest text-brand">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-condensed text-[26px] font-bold uppercase leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-3 flex gap-4 rounded-2xl border border-brand/25 bg-brand/10 p-5 md:items-center md:p-6">
            <AccessibleIcon className="mt-0.5 h-7 w-7 shrink-0 text-brand md:mt-0" />
            <p className="text-[15px] leading-relaxed text-white/85">
              Za putnike sa invaliditetom imamo specijalno vozilo. Prilikom
              naručivanja naglasite da vam je potrebno - mi se brinemo o ostalom.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
