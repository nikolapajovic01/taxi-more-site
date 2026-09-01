"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  when = "view",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  when?: "view" | "load";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (when === "load") {
      const id = window.setTimeout(() => setShow(true), 40);
      return () => window.clearTimeout(id);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );

    const id = window.requestAnimationFrame(() => io.observe(el));
    return () => {
      window.cancelAnimationFrame(id);
      io.disconnect();
    };
  }, [when]);

  return (
    <div
      ref={ref}
      className={`reveal${show ? " is-in" : ""} ${className}`}
      style={{ animationDelay: show ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
