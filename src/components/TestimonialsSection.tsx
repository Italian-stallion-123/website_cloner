"use client";

import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "The Kiln team was incredibly helpful. They met us exactly where we needed. They hit our major asks in just 48 hours! Highly recommend working with this collaborative team.",
    name: "Taylor Bond",
    role: "Senior Director of Operations",
    company: "NewStore",
    avatar: "/images/framer/kRiTonGZJYeiarcncT2epmnlSk0.png.png",
  },
  {
    quote:
      "Working with The Kiln team was great – their work was fast and effective. They helped us set up several detailed waterfall tables in Clay and recorded detailed SOPs for our team to use after the engagement. They made everything so easy.",
    name: "Jon Caldwell",
    role: "Growth",
    company: "Bunker",
    avatar: "/images/framer/hYwpQrUuDglPpaE8njic6n9y0.png.png",
  },
  {
    quote:
      "They bring the right mix of speed, structure, and systems thinking for companies looking to make GTM Engineering a competitive edge.",
    name: "Liam Mulcahy",
    role: "Ops Partner",
    company: "Kleiner Perkins",
    avatar: "/images/framer/yRs3Adu924hQOMwtCvCdl9qfc.png.png",
  },
  {
    quote:
      "The Kiln has my highest recommendation for getting things done when it matters. They are reliable, thorough, and a great partner for the long term.",
    name: "Varun Anand",
    role: "Co-Founder",
    company: "Clay",
    avatar: "/images/framer/a4lqflbX5Zr94YFW3scgBl8lc.png.png",
  },
  {
    quote:
      "The Kiln crushed it. We hired them to scale campaigns we were setting up manually, and it would take us months to do what they did in weeks.",
    name: "Alex Chen",
    role: "Head of Growth",
    company: "Azuga",
    avatar: "/images/framer/SpHcwMsLRCZBFZ2ZGqptGwOYg0.png.png",
  },
];

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="w-full bg-white flex flex-col items-center text-center overflow-hidden"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <p className="section-label mb-4">
        TESTIM<strong>ONIALS</strong>
      </p>
      <h2
        className="text-[#111111] font-bold mb-16"
        style={{
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: "clamp(36px, 4.5vw, 64px)",
          fontWeight: 700,
          lineHeight: "1",
          letterSpacing: "-3.2px",
          maxWidth: 700,
        }}
      >
        Leading GTM teams love The Kiln
      </h2>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="w-full flex gap-5 no-scrollbar cursor-grab active:cursor-grabbing"
        style={{
          overflowX: "auto",
          paddingLeft: 120,
          paddingRight: 120,
          paddingBottom: 20,
          scrollBehavior: "smooth",
        }}
        onMouseDown={(e) => {
          const el = trackRef.current;
          if (!el) return;
          const startX = e.pageX - el.offsetLeft;
          const scrollLeft = el.scrollLeft;
          const onMove = (e: MouseEvent) => {
            const x = e.pageX - el.offsetLeft;
            el.scrollLeft = scrollLeft - (x - startX);
          };
          const onUp = () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
          };
          window.addEventListener("mousemove", onMove);
          window.addEventListener("mouseup", onUp);
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col gap-6 flex-shrink-0 bg-white rounded-3xl select-none"
            style={{
              width: 340,
              padding: 32,
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 24,
            }}
          >
            <p
              className="text-[#111111] text-left flex-1"
              style={{ fontSize: 16, fontWeight: 500, lineHeight: "24px" }}
            >
              {t.quote}
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                className="rounded-full object-cover flex-shrink-0"
              />
              <div className="text-left">
                <p className="text-[#111111] font-bold" style={{ fontSize: 15 }}>
                  {t.name}
                </p>
                <p className="text-[#111111]" style={{ fontSize: 13, fontWeight: 500, opacity: 0.6 }}>
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
