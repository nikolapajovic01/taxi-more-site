import Image from "next/image";

export function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/fleet/taxi-more/taxi-more-clean-alpha.png"
        alt="Taxi More"
        width={1536}
        height={1024}
        priority={priority}
        sizes="240px"
        className="h-14 w-auto md:h-[76px]"
      />
    </span>
  );
}
