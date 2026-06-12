import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="border-y border-white/[0.06] bg-ink">
      <div className="mx-auto flex max-w-[1280px] items-stretch justify-around px-6 py-7 md:py-[34px]">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex items-center gap-4 md:gap-0 ${
              // hide "Decenije" on the smallest screens to avoid crowding
              s.label === "Decenije" ? "hidden sm:flex" : "flex"
            }`}
          >
            {i > 0 && (
              <span className="h-[38px] w-px self-center bg-white/[0.08]" />
            )}
            <div className="px-3 text-center md:px-10">
              <div className="text-[22px] font-semibold text-white md:text-[30px]">
                {s.value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#6c7385] md:text-[11px] md:tracking-[0.18em]">
                {s.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
