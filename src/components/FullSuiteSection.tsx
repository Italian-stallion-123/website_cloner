import Image from "next/image";
import { KilnIcon } from "@/components/icons";

const leftCards = [
  {
    title: "Create systems that allow you to sell, not prepare to sell",
    description:
      "The Kiln helps create sales enablement processes that give your sales team more time to close deals. Done are the days of researching, copywriting, and alternating between different tools.",
    image: "/images/framer/QDxWjAjuuBKtxwRqerxGI4OIcM.png.png",
    bg: "rgb(247, 247, 245)",
  },
  {
    title: "Deeply researched enrichment beyond conventional data providers",
    description:
      "If the information you're looking for can be found somewhere, we can help you find it at scale. We help create custom AI agents that scrape unstructured data with shocking accuracy.",
    image: "/images/framer/my8o3MW6KcC2z4FMJgcfoUYQI1M.png.png",
    bg: "rgb(242, 240, 233)",
  },
  {
    title: "Take full advantage of the new GTM tool stack",
    description:
      "Tools like Clay are powerful and complex. The Kiln helps spark new ideas on how to use them effectively, while integrating the existing stack you've worked so hard to build.",
    image: "/images/framer/SuqHjchWgpryZCf7NKuGonRV34.png.png",
    bg: "rgb(247, 247, 245)",
  },
];

const rightCards = [
  {
    title: "Ensure your data is actually usable",
    description:
      "CRMs are useless if the data in them is stale or messy. Our systems help clean and normalize data to make your CRM a true source of truth again.",
    image: "/images/framer/52A6en3V1ymt8dq5MRHBWA5L4I.png.png",
    bg: "rgb(238, 238, 238)",
  },
  {
    title: "Make inbound leads actionable before they fall off the vine",
    description:
      "We can aggregate leads from your marketing initiatives, score them on just about any criteria, and then create processes that actually take action on them.",
    image: "/images/framer/W4TOUYglKMU3XgEE3XLfZ0X5LaQ.png.png",
    bg: "rgb(247, 247, 245)",
  },
];

function FeatureCard({
  title,
  description,
  image,
  bg,
}: {
  title: string;
  description: string;
  image: string;
  bg: string;
}) {
  return (
    <div
      className="flex flex-col items-start rounded-3xl"
      style={{ backgroundColor: bg, padding: "28px 32px", borderRadius: 24 }}
    >
      <Image
        src={image}
        alt=""
        width={180}
        height={135}
        className="object-contain mb-4 self-end"
      />
      <h3
        className="text-[#111111] font-bold mb-3"
        style={{ fontSize: 20, fontWeight: 700, lineHeight: "24px", letterSpacing: "-0.3px" }}
      >
        {title}
      </h3>
      <p
        className="text-[#111111]"
        style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", opacity: 0.65 }}
      >
        {description}
      </p>
    </div>
  );
}

export function FullSuiteSection() {
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
        A full-suite of services to unlock your{" "}
        <em style={{ fontStyle: "italic" }}>growth</em>
      </h2>
      <p
        className="text-[#111111] mb-16"
        style={{ fontSize: 18, fontWeight: 500, lineHeight: "28px", maxWidth: 480, opacity: 0.7 }}
      >
        Leverage new sales tech the smart way.
      </p>

      {/* Two-column layout with center line */}
      <div
        className="w-full mx-auto"
        style={{ maxWidth: 1200, padding: "0 24px" }}
      >
        {/* Desktop: 3-col grid (left | center line | right), Mobile: single col */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "1fr 60px 1fr",
            alignItems: "start",
            gap: 0,
          }}
        >
          {/* Left column */}
          <div className="flex flex-col gap-6 pr-8">
            {leftCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>

          {/* Center line */}
          <div className="flex flex-col items-center">
            <div style={{ width: 1, flex: 1, backgroundColor: "rgba(0,0,0,0.12)", minHeight: 200 }} />
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-xl border border-black/10 bg-white"
              style={{ width: 40, height: 40, margin: "12px 0" }}
            >
              <KilnIcon className="w-5 h-5 text-[#111111]" />
            </div>
            <div style={{ width: 1, flex: 1, backgroundColor: "rgba(0,0,0,0.12)", minHeight: 200 }} />
          </div>

          {/* Right column — offset down */}
          <div className="flex flex-col gap-6 pl-8" style={{ paddingTop: 200 }}>
            {rightCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="lg:hidden flex flex-col gap-6">
          {[...leftCards, ...rightCards].map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
