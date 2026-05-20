import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";

const cards = [
  {
    title: "Sales/GTM",
    description:
      "Our systems improve GTM efficiency from outbound to inbound and throughout the sales funnel. We recommend top tools, create a unified system, and implement them for an optimized GTM tech stack.",
    bullets: [
      "Automated GTM co-pilots",
      "TAM mapping & deep enrichment",
      "Automated, personalized outbound",
      "Lead qualification and normalization",
      "Mid-funnel automation",
      "Custom sales/GTM requests",
      "Competitive intelligence",
      "AI research automation",
      "Meeting prep automation",
      "Email deliverability optimization",
      "Automated Linkedin outreach",
    ],
    image: "/images/framer/4pHKlbvN5zu7RKMddq5MAbB5kI.png.png",
    bg: "rgb(247, 247, 245)",
  },
  {
    title: "Marketing/Growth",
    description:
      "We transform your marketing data into valuable insights and streamline your growth data for automated next steps. Our approach converts your ads, webinars, conferences, and emails into impactful sales data.",
    bullets: [
      "Inbound lead enrichment",
      "Account scoring and assignment",
      "Inbound-led outbound sequences",
      "Paid ads audience building",
      "Custom landing pages at scale",
      "Deep ICP/account enrichment and research",
      "Custom marketing/growth requests",
      "Event marketing outreach automation",
      "Social tracking & competitive monitoring",
      "Website visitor tracking",
    ],
    image: "/images/framer/tXXQQBAJgd9dNConxgXnA3a5ifw.png.png",
    bg: "rgb(242, 240, 233)",
  },
  {
    title: "RevOps",
    description:
      "We help businesses transform their CRMs into thriving ecosystems. In the age of AI, strong CRMs are essential for success. We ensure your data is accurate and ready for automation to improve operations.",
    bullets: [
      "CRM data cleaning",
      "Automated CRM enrichment",
      "Data normalization",
      "Account, contact, and lead research",
      "Automated campaign updates",
      "CRM lead scoring",
      "Custom RevOps requests",
    ],
    image: "/images/framer/xE056aX7YuIChK3qjwj5JfLTSf0.png.png",
    bg: "rgb(247, 247, 245)",
  },
];

export function ServicesSection() {
  return (
    <section
      className="w-full bg-white flex flex-col items-center text-center"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <p className="section-label mb-4">
        SERVI<strong>CES</strong>
      </p>
      <h2
        className="text-[#111111] font-bold"
        style={{
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: "clamp(36px, 4.5vw, 64px)",
          fontWeight: 700,
          lineHeight: "1",
          letterSpacing: "-3.2px",
          maxWidth: 800,
          marginBottom: 20,
        }}
      >
        All-in-one GTM services that{" "}
        <em style={{ fontStyle: "italic" }}>grow</em> with you
      </h2>
      <p
        className="text-[#111111] mb-16"
        style={{ fontSize: 18, fontWeight: 500, lineHeight: "28px", maxWidth: 480, opacity: 0.7 }}
      >
        From strategy to execution, we equip your team with the systems and
        expertise to move faster and scale smarter.
      </p>

      <div
        className="w-full mx-auto"
        style={{
          maxWidth: 1160,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          padding: "0 24px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-center text-center rounded-3xl overflow-hidden"
            style={{ backgroundColor: card.bg, padding: 32, borderRadius: 24 }}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={200}
              height={180}
              className="object-contain mb-6"
            />
            <h3
              className="text-[#111111] font-bold mb-3"
              style={{ fontSize: 28, fontWeight: 700, lineHeight: "32px", letterSpacing: "-0.5px" }}
            >
              {card.title}
            </h3>
            <p
              className="text-[#111111] mb-6 text-left"
              style={{ fontSize: 16, fontWeight: 500, lineHeight: "24px", opacity: 0.7 }}
            >
              {card.description}
            </p>
            <ul className="w-full text-left flex flex-col gap-2 mb-8">
              {card.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#111111] opacity-60" />
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#111111" }}>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-auto inline-flex items-center justify-center bg-[#111111] text-white rounded-full font-medium hover:bg-[#333] transition-colors"
              style={{ padding: "10px 20px", fontSize: 14 }}
            >
              Talk with us
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
