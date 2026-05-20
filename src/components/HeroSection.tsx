import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative w-full bg-white overflow-hidden flex flex-col items-center text-center"
      style={{ paddingTop: 120, paddingBottom: 60 }}
    >
      {/* Decorative hourglass — left */}
      <div
        className="absolute hidden lg:block"
        style={{ left: 40, top: 80, width: 200, transform: "rotate(-5deg)" }}
      >
        <Image
          src="/images/framer/y6qm7leGDMvqlDRbxQyrICgk.png.png"
          alt=""
          width={239}
          height={239}
          className="object-contain"
        />
      </div>

      {/* Decorative squiggle — right */}
      <div
        className="absolute hidden lg:block"
        style={{ right: 30, top: 180, width: 159, height: 161 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-squiggle-right.svg" alt="" width={159} height={161} />
      </div>

      {/* Cloud doodle — top center */}
      <div
        className="absolute hidden lg:block"
        style={{ left: "50%", transform: "translateX(-50%)", top: 80, width: 156, height: 80 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-cloud-doodle.svg" alt="" width={156} height={80} />
      </div>

      {/* Announcement banner */}
      <div
        className="inline-flex items-center gap-2 bg-[#111111] text-white rounded-full mb-6"
        style={{ padding: "6px 8px 6px 10px", fontSize: 13 }}
      >
        <span
          className="bg-white text-[#111111] font-bold uppercase rounded-full"
          style={{ padding: "2px 8px", fontSize: 11, letterSpacing: "0.5px" }}
        >
          NEW
        </span>
        <span className="font-medium" style={{ fontSize: 13 }}>
          The Kiln has been acquired by 2X!
        </span>
        <Link
          href="https://2x.marketing"
          className="bg-[#015870] text-white rounded-full font-medium flex items-center gap-1"
          style={{ padding: "4px 10px", fontSize: 12 }}
        >
          Learn More <span>→</span>
        </Link>
      </div>

      {/* H1 */}
      <h1
        className="text-[#111111] font-bold"
        style={{
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: "clamp(40px, 5vw, 64px)",
          fontWeight: 700,
          lineHeight: "1",
          letterSpacing: "-3.2px",
          maxWidth: 700,
          marginBottom: 20,
        }}
      >
        Expert GTM Engineers, at your fingertips.
      </h1>

      {/* Subtitle */}
      <p
        className="text-[#111111]"
        style={{
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: 18,
          fontWeight: 500,
          lineHeight: "28px",
          maxWidth: 480,
          marginBottom: 36,
          opacity: 0.75,
        }}
      >
        The Kiln is a team of automation experts, data scientists, and early Clay
        employees that help build inbound, outbound, and RevOps systems that scale.
      </p>

      {/* CTA button */}
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-[#111111] text-white rounded-full font-semibold hover:bg-[#333] transition-colors"
        style={{ padding: "14px 28px", fontSize: 18 }}
      >
        Talk with us <span>👋</span>
      </Link>
    </section>
  );
}
