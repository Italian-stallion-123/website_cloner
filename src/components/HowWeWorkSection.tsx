import Image from "next/image";

const cards = [
  {
    title: "We invest deep time, not just hours",
    description:
      "We actually spend time on clients. Our GTM engineers only work on a few clients at a time to increase the time being spent on your projects.",
    icon: "/images/framer/v3NlRVDjuoIfT3lMfcCLAERzg54.png.png",
    bg: "rgb(242, 240, 233)",
    titleItalic: "not just hours",
  },
  {
    title: "Strategy that ships real solutions",
    description:
      "Our team is highly technical. While we're great at strategy, our team has the technical ability to make projects actually happen instead of staying theoretical.",
    icon: "/images/framer/EClIQ2707mAIbJBiMzlsuk9LE.png.png",
    bg: "rgb(255, 255, 255)",
    titleItalic: null,
  },
  {
    title: "Custom is our comfort zone",
    description:
      "We love complex, bespoke projects. Unlike more templatized agencies, we love to work on the custom projects that nobody else could complete.",
    icon: "/images/framer/Dkw8sKYVk8seWswDyxHytQHE.png.png",
    bg: "rgb(247, 247, 245)",
    titleItalic: null,
  },
];

function CardTitle({ title, italic }: { title: string; italic: string | null }) {
  if (!italic) return <>{title}</>;
  const idx = title.indexOf(italic);
  if (idx === -1) return <>{title}</>;
  return (
    <>
      {title.slice(0, idx)}
      <em style={{ fontStyle: "italic" }}>{italic}</em>
      {title.slice(idx + italic.length)}
    </>
  );
}

export function HowWeWorkSection() {
  return (
    <section
      className="w-full bg-white flex flex-col items-center text-center"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <p className="section-label mb-4">
        HOW WE <strong>WORK</strong>
      </p>
      <h2
        className="text-[#111111] font-bold"
        style={{
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: "clamp(36px, 4.5vw, 64px)",
          fontWeight: 700,
          lineHeight: "1",
          letterSpacing: "-3.2px",
          maxWidth: 700,
          marginBottom: 20,
        }}
      >
        Custom engineering for <em style={{ fontStyle: "italic" }}>unique</em>{" "}
        challenges
      </h2>
      <p
        className="text-[#111111] mb-16"
        style={{ fontSize: 18, fontWeight: 500, lineHeight: "28px", maxWidth: 600, opacity: 0.7 }}
      >
        We combine deep technical expertise with focused, bespoke execution -
        dedicating our GTM engineers to a select few clients to tackle complex,
        custom projects.
      </p>

      <div
        className="w-full mx-auto"
        style={{
          maxWidth: 1160,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          padding: "0 24px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-start text-left rounded-3xl"
            style={{ backgroundColor: card.bg, padding: 32, borderRadius: 24, minHeight: 300 }}
          >
            <Image
              src={card.icon}
              alt=""
              width={40}
              height={40}
              className="object-contain mb-5"
            />
            <h3
              className="text-[#111111] font-bold mb-4"
              style={{ fontSize: 24, fontWeight: 700, lineHeight: "28px", letterSpacing: "-0.5px" }}
            >
              <CardTitle title={card.title} italic={card.titleItalic} />
            </h3>
            <p
              className="text-[#111111]"
              style={{ fontSize: 16, fontWeight: 500, lineHeight: "24px", opacity: 0.7 }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
