import { BookingForm } from "./booking-form";

function Eyebrow() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="h-px w-[26px] bg-brand" />
      <span className="text-[11px] uppercase tracking-[0.34em] text-[#aeb6c6]">
        Premium električni prevoz
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="pocetna" className="relative bg-ink">
      {/* ---------- Desktop ---------- */}
      <div className="relative hidden min-h-[760px] lg:flex">
        <div className="relative z-10 flex w-[45%] flex-col justify-center px-14">
          <Eyebrow />
          <h1 className="mt-6 text-[62px] font-light leading-[0.98] tracking-[-0.025em] text-white">
            Vaš put.
            <br />
            <span className="font-semibold">Naša briga.</span>
          </h1>
          <p className="mt-6 max-w-[380px] text-base font-light leading-relaxed text-[#aab1c0]">
            Tiha, udobna i potpuno električna vožnja kroz Herceg Novi — kad god
            vam treba, 24 sata dnevno.
          </p>
          <div id="naruci">
            <BookingForm variant="desktop" />
          </div>
        </div>
        <div className="relative w-[55%] overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/fleet/interior.jpg')",
              backgroundSize: "165%",
              backgroundPosition: "100% 56%",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#05070d_0%,rgba(5,7,13,0.2)_22%,rgba(5,7,13,0)_55%)]" />
        </div>
      </div>

      {/* ---------- Mobile ---------- */}
      <div className="lg:hidden">
        <div className="relative h-[560px] overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/fleet/interior.jpg')",
              backgroundSize: "174%",
              backgroundPosition: "100% 62%",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.55)_0%,rgba(5,7,13,0)_26%,rgba(5,7,13,0.1)_50%,rgba(5,7,13,0.92)_88%,#05070d_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.6),rgba(5,7,13,0)_55%)]" />
          <div className="absolute inset-x-6 bottom-10">
            <Eyebrow />
            <h1 className="mt-4 text-[44px] font-light leading-none tracking-[-0.02em] text-white">
              Vaš put.
              <br />
              <span className="font-semibold">Naša briga.</span>
            </h1>
            <p className="mt-4 max-w-[280px] text-[13.5px] font-light leading-[1.55] text-[#aab1c0]">
              Tiha, udobna i potpuno električna vožnja kroz Herceg Novi — kad god
              vam treba.
            </p>
          </div>
        </div>
        <div id="naruci" className="relative z-10 -mt-6 px-6">
          <BookingForm variant="mobile" />
        </div>
      </div>
    </section>
  );
}
