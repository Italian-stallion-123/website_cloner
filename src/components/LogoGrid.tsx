import Image from "next/image";

const logos = [
  // Row 1
  { src: "/images/logo-twelvelabs.png", alt: "Notion", w: 92, h: 32 },
  { src: "/images/logo-antimetal.png", alt: "ReDocs", w: 110, h: 24 },
  { src: "/images/logo-gates-foundation.png", alt: "Cognition", w: 120, h: 25 },
  { src: "/images/logo-loxo.png", alt: "LendingOne", w: 120, h: 36 },
  // Row 2
  { src: "/images/logo-aligned.png", alt: "Bill & Melinda Gates Foundation", w: 140, h: 28 },
  { src: "/images/logo-density.png", alt: "spot.ai", w: 100, h: 22 },
  { src: "/images/logo-materialize.png", alt: "Loxo", w: 80, h: 28 },
  { src: "/images/logo-hologram.png", alt: "Hologram", w: 120, h: 38 },
  // Row 3
  { src: "/images/logo-integral.png", alt: "Integral", w: 95, h: 28 },
  { src: "/images/logo-rafay.png", alt: "Density", w: 110, h: 24 },
  { src: "/images/logo-captions.png", alt: "captions", w: 105, h: 22 },
  { src: "/images/logo-daxko.png", alt: "Daxko", w: 100, h: 26 },
  // Row 4
  { src: "/images/logo-azuga.png", alt: "azuga", w: 95, h: 40 },
  { src: "/images/logo-newstore.png", alt: "NewStore", w: 140, h: 26 },
  { src: "/images/logo-sendoso-real.png", alt: "Sendoso", w: 100, h: 22 },
  { src: "/images/logo-clientell.png", alt: "Clientell", w: 120, h: 30 },
];

export function LogoGrid() {
  return (
    <section className="w-full bg-white" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: 1160,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          padding: "0 24px",
        }}
      >
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex items-center justify-center"
            style={{
              padding: "20px 24px",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              className="object-contain"
              style={{ maxHeight: 40 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
