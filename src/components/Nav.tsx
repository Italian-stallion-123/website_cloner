"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between"
      style={{ height: 64, padding: "12px 24px" }}
    >
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/images/kiln-logo.png"
          alt="The Kiln"
          width={122}
          height={40}
          className="object-contain"
          priority
        />
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { text: "Case Studies", href: "/case-studies" },
          { text: "Recruiting", href: "/recruiting" },
          { text: "Newsletter", href: "https://gtmcookbook.beehiiv.com/" },
        ].map((link) => (
          <Link
            key={link.text}
            href={link.href}
            className="relative text-[#111111] text-[15px] font-medium group"
          >
            {link.text}
            <span className="absolute bottom-[-2px] left-0 h-[1.5px] w-0 bg-[#111111] transition-all duration-200 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* CTA button */}
      <Link
        href="/contact"
        className="hidden md:inline-flex items-center gap-2 bg-[#111111] text-white rounded-full text-[15px] font-medium hover:bg-[#333] transition-colors"
        style={{ padding: "10px 20px" }}
      >
        Talk with us <span>👋</span>
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={cn("block h-0.5 w-5 bg-[#111] transition-all", mobileOpen && "rotate-45 translate-y-2")} />
        <span className={cn("block h-0.5 w-5 bg-[#111] transition-all", mobileOpen && "opacity-0")} />
        <span className={cn("block h-0.5 w-5 bg-[#111] transition-all", mobileOpen && "-rotate-45 -translate-y-2")} />
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-t border-black/8 p-6 flex flex-col gap-4 md:hidden">
          {[
            { text: "Case Studies", href: "/case-studies" },
            { text: "Recruiting", href: "/recruiting" },
            { text: "Newsletter", href: "https://gtmcookbook.beehiiv.com/" },
          ].map((link) => (
            <Link key={link.text} href={link.href} className="text-[#111] text-base font-medium">
              {link.text}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#111111] text-white rounded-full text-base font-medium mt-2"
            style={{ padding: "12px 24px" }}
          >
            Talk with us 👋
          </Link>
        </div>
      )}
    </nav>
  );
}
