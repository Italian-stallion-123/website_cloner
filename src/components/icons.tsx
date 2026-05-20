import { SVGProps } from "react";

export function KilnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2" y="2" width="12" height="12" rx="2" fill="currentColor" />
      <rect x="18" y="2" width="12" height="12" rx="2" fill="currentColor" />
      <rect x="2" y="18" width="12" height="12" rx="2" fill="currentColor" />
      <rect x="18" y="18" width="12" height="12" rx="2" fill="currentColor" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function QuoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H8c0-1.105.895-2 2-2V8zm16 0c-3.314 0-6 2.686-6 6v10h10V14h-6c0-1.105.895-2 2-2V8z" />
    </svg>
  );
}

export function WaveHandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text y="18" fontSize="16">👋</text>
    </svg>
  );
}
