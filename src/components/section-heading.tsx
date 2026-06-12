import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 text-[10.5px] uppercase tracking-[0.3em] text-brand md:mb-3 md:text-[11px]">
        {eyebrow}
      </div>
      <h2 className="text-[23px] font-light tracking-[-0.01em] text-[#f1f3f8] md:text-[38px]">
        {children}
      </h2>
    </div>
  );
}
