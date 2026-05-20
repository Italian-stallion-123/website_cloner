import Link from "next/link";
import Image from "next/image";
import { KilnIcon } from "@/components/icons";

const footerCols = [
  {
    heading: "About us",
    links: [
      { text: "Home", href: "/" },
      { text: "Case Studies", href: "/case-studies" },
      { text: "Follow us on LinkedIn", href: "https://linkedin.com/company/thekiln" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { text: "Tutorials", href: "#" },
      { text: "Tools", href: "#" },
      { text: "Newsletter", href: "https://gtmcookbook.beehiiv.com/" },
    ],
  },
];

export function CTAAndFooter() {
  return (
    <div style={{ backgroundColor: "rgb(3, 0, 0)", color: "#ffffff" }}>
      {/* CTA Section */}
      <section
        className="flex flex-col items-center text-center mx-auto"
        style={{ maxWidth: 900, paddingTop: 100, paddingBottom: 80, padding: "100px 24px 80px" }}
      >
        <p className="mb-5" style={{ fontSize: 12, letterSpacing: "3px", textTransform: "uppercase" }}>
          <span style={{ opacity: 0.6, fontWeight: 400 }}>BOOK A </span>
          <strong style={{ fontWeight: 700 }}>DEMO</strong>
        </p>
        <h2
          className="font-bold"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontSize: "clamp(36px, 4.5vw, 64px)",
            fontWeight: 700,
            lineHeight: "1",
            letterSpacing: "-3.2px",
            color: "#ffffff",
            maxWidth: 700,
            marginBottom: 24,
          }}
        >
          Get in touch today to level-up your processes
        </h2>
        <p
          style={{
            fontSize: 18,
            fontWeight: 500,
            lineHeight: "28px",
            color: "rgba(255,255,255,0.7)",
            maxWidth: 480,
            marginBottom: 48,
          }}
        >
          Partnered with leading go-to-market teams to automate outbound, sales
          flows, and much more.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full font-semibold hover:bg-white/10 transition-colors"
          style={{
            padding: "14px 28px",
            fontSize: 18,
            color: "#ffffff",
            border: "2px solid rgba(255,255,255,0.5)",
            backgroundColor: "transparent",
          }}
        >
          Talk with us <span>👋</span>
        </Link>
      </section>

      {/* Footer */}
      <footer
        className="mx-auto"
        style={{
          maxWidth: 1160,
          padding: "60px 24px",
          borderTop: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div
          className="grid"
          style={{ gridTemplateColumns: "2fr 1fr 1fr", gap: 60, alignItems: "start" }}
        >
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/kiln-logo.png"
                alt="The Kiln"
                width={100}
                height={32}
                className="object-contain brightness-0 invert"
              />
            </div>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "22px",
                color: "rgba(255,255,255,0.6)",
                maxWidth: 280,
              }}
            >
              The Kiln is a team of GTM experts, data scientists, and former Clay
              employees that help the world's leading RevOps and growth teams scale
              their most creative ideas.
            </p>
          </div>

          {/* Link cols */}
          {footerCols.map((col) => (
            <div key={col.heading}>
              <h4
                className="font-bold mb-5"
                style={{ fontSize: 16, color: "#ffffff" }}
              >
                {col.heading}
              </h4>
              <ul className="flex flex-col">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: "36px",
                        display: "block",
                      }}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
