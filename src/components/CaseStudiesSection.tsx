import Image from "next/image";
import Link from "next/link";
import { QuoteIcon, ArrowRightIcon } from "@/components/icons";

const caseStudies = [
  {
    logo: "/images/logo-azuga-case.png",
    logoAlt: "azuga",
    logoW: 152,
    logoH: 32,
    title: "How Azuga Went From 640+ Hours of Manual Work Per Week to a Scalable Data Engine",
    href: "/case-studies",
    quote:
      "This was supposed to be a basic enrichment project—what we got was full operational transformation.",
    personName: "Harish Bilimale",
    personTitle: "Sr. Director CRM Strategy and Salesforce Governance",
    avatar: "/images/framer/CQfHCV5lfzd8OP51p5zvM3f735o.jpeg.jpg",
    avatarAlt: "Harish Bilimale",
  },
  {
    logo: "/images/logo-sendoso-real.png",
    logoAlt: "Sendoso",
    logoW: 130,
    logoH: 40,
    title: "How Sendoso Created an AI-Forward, Scalable GTM Motion with The Kiln",
    href: "/case-studies",
    quote: "We handed off a dream. The Kiln built it flawlessly.",
    personName: "Katie Penner",
    personTitle: "Head of Sender Relations",
    avatar: "/images/avatar-katie-real.jpg",
    avatarAlt: "Katie Penner",
  },
];

export function CaseStudiesSection() {
  return (
    <section
      className="w-full bg-white flex flex-col items-center text-center"
      style={{ paddingTop: 80, paddingBottom: 60 }}
    >
      <p className="section-label mb-4">
        CASE <strong>STUDIES</strong>
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
        Trusted by <em style={{ fontStyle: "italic" }}>leading</em> companies
      </h2>
      <p
        className="text-[#111111] mb-16"
        style={{ fontSize: 18, fontWeight: 500, lineHeight: "28px", maxWidth: 560, opacity: 0.7 }}
      >
        Real projects. Real impact. Explore how top companies partner with us to
        execute smarter and grow quicker.
      </p>

      <div
        className="w-full mx-auto flex flex-col"
        style={{ maxWidth: 1000, gap: 24, padding: "0 24px" }}
      >
        {caseStudies.map((cs) => (
          <div
            key={cs.title}
            className="rounded-3xl overflow-hidden"
            style={{ backgroundColor: "rgb(247,247,245)", borderRadius: 24, padding: 40 }}
          >
            <div
              className="flex flex-col lg:grid gap-8 lg:gap-0"
              style={{
                gridTemplateColumns: "1fr auto 1fr",
                alignItems: "start",
              }}
            >
              {/* Left: content */}
              <div className="flex flex-col items-start gap-6">
                <Image
                  src={cs.logo}
                  alt={cs.logoAlt}
                  width={cs.logoW}
                  height={cs.logoH}
                  className="object-contain"
                />
                {/* Dotted divider */}
                <div className="dotted-h" />
                <h3
                  className="text-[#111111] font-bold text-left"
                  style={{ fontSize: 22, fontWeight: 700, lineHeight: "28px", letterSpacing: "-0.3px" }}
                >
                  {cs.title}
                </h3>
                <Link
                  href={cs.href}
                  className="inline-flex items-center gap-2 bg-[#111111] text-white rounded-full font-semibold hover:bg-[#333] transition-colors mt-auto"
                  style={{ padding: "12px 24px", fontSize: 15 }}
                >
                  Read story <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>

              {/* Center: dotted vertical divider */}
              <div className="dotted-v" style={{ margin: "0 20px" }} />

              {/* Right: testimonial */}
              <div
                className="flex flex-col gap-5 rounded-2xl"
                style={{ backgroundColor: "rgb(242,240,233)", padding: 28, borderRadius: 16 }}
              >
                <QuoteIcon className="w-8 h-8 text-[#111111] opacity-25" />
                <p
                  className="text-[#111111]"
                  style={{ fontSize: 16, fontWeight: 500, lineHeight: "24px", fontStyle: "italic" }}
                >
                  {cs.quote}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <Image
                    src={cs.avatar}
                    alt={cs.avatarAlt}
                    width={48}
                    height={48}
                    className="rounded-full object-cover flex-shrink-0"
                  />
                  <div className="text-left">
                    <p className="text-[#111111] font-bold" style={{ fontSize: 15 }}>
                      {cs.personName}
                    </p>
                    <p className="text-[#111111]" style={{ fontSize: 13, fontWeight: 500, opacity: 0.6 }}>
                      {cs.personTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/case-studies"
        className="text-[#111111] font-semibold mt-10 hover:opacity-70 transition-opacity"
        style={{ fontSize: 16 }}
      >
        More case studies &gt;&gt;&gt;
      </Link>
    </section>
  );
}
