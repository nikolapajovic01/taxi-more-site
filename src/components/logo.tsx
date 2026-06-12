import { BoltIcon } from "./icons";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-white ${className}`}>
      <span className="text-[19px] font-bold leading-none">TAXI</span>
      <span className="grid h-[21px] w-[21px] place-items-center rounded-full bg-brand text-white">
        <BoltIcon className="h-3 w-3" />
      </span>
      <span className="text-[19px] font-light leading-none tracking-[0.18em]">
        MORE
      </span>
    </div>
  );
}
