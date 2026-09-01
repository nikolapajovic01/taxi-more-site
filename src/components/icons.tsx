import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ViberIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2c-4.8 0-8.7 3.7-8.7 8.26 0 1.7.55 3.28 1.5 4.58L3.5 21l6.36-1.7c1.3.5 2.7.76 4.18.76 4.8 0 8.7-3.7 8.7-8.26S16.84 2 12.04 2zm4.2 11.7c-.18.5-.88.95-1.22 1.01-.31.06-.7.08-1.13-.07-.26-.1-.6-.2-1.04-.4-1.83-.8-3.02-2.38-3.11-2.5-.1-.11-.78-1.04-.78-1.98s.48-1.4.66-1.6c.16-.18.36-.23.48-.23h.35c.11 0 .26 0 .4.31.18.4.6 1.47.65 1.58.05.11.09.24 0 .38-.08.14-.12.23-.24.36-.12.13-.25.29-.36.39-.12.11-.24.23-.1.45.14.22.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.12 1.08z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.5 2 2 6.4 2 11.85c0 1.74.46 3.44 1.34 4.94L2 22l5.37-1.4a10.2 10.2 0 004.67 1.12h.01c5.54 0 10.04-4.4 10.04-9.85C22.09 6.4 17.58 2 12.04 2zm5.83 13.96c-.25.7-1.46 1.28-2.03 1.36-.52.07-1.18.1-1.91-.12-.44-.13-1.01-.27-1.74-.53-3.06-1.32-5.05-4.4-5.2-4.6-.16-.2-1.3-1.73-1.3-3.3 0-1.56.82-2.33 1.1-2.65.29-.32.63-.4.84-.4h.58c.19 0 .44 0 .67.51.27.6 1 2.45 1.09 2.62.09.18.15.4.03.64-.13.23-.2.37-.4.58-.19.2-.4.46-.17.9.23.44 1.03 1.7 2.21 2.76 1.52 1.35 2.8 1.77 3.2 1.97.4.2.63.17.86-.1.23-.27 1-.1.16 1.17.27.4 1.53 1.1 1.84 1.3.31.2.52.3.6.47.07.16.07.95-.18 1.65z" />
    </svg>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16 3c.1 1-.3 2-1 2.7-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 1-2.7C14 3.5 15 3 16 3zm2.5 14c-.4 1-.6 1.4-1.1 2.3-.7 1.2-1.7 2.7-2.9 2.7-1.1 0-1.4-.7-2.9-.7s-1.8.7-2.9.7c-1.2 0-2.1-1.3-2.8-2.5-2-3.1-2.2-6.8-1-8.8.9-1.4 2.2-2.2 3.5-2.2 1.3 0 2.1.8 3.2.8 1 0 1.6-.8 3.2-.8 1.1 0 2.3.6 3.2 1.7-2.8 1.5-2.4 5.3.5 6.8z" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3.5 3.2v17.6L21 12 3.5 3.2z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.2C12.2 3 11 4.5 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.4l.4-2.8h-2.8z" />
    </svg>
  );
}

export function AccessibleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="5" r="2" fill="currentColor" />
      <path
        d="M7 9.5h10M9 21l2-8 2 3 2 5M11 13.5 8 16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 5 8 12l7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m9 5 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

