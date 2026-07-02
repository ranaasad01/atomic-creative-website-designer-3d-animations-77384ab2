"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks, BRAND } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useTranslations } from "next-intl";

const socials = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function getHref(href: string) {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  }

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Big wordmark */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="overflow-hidden mb-16">
            <h2
              className="text-[clamp(3rem,12vw,10rem)] font-extrabold leading-none tracking-tighter text-[#f0f0f0]/5 select-none"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {BRAND.name}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Brand column */}
            <motion.div variants={fadeInUp} className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-sm bg-[#ff3c00] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M7 0L14 14H0L7 0Z" fill="#f0f0f0" />
                  </svg>
                </span>
                <span
                  className="font-extrabold text-base text-[#f0f0f0]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {BRAND.name}
                </span>
              </div>
              <p
                className="text-sm text-[#f0f0f0]/40 leading-relaxed max-w-xs"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {BRAND.tagline}. Crafting digital experiences that push the boundaries of what the web can be.
              </p>
            </motion.div>

            {/* Nav links */}
            <motion.div variants={fadeInUp}>
              <p
                className="text-xs font-semibold uppercase tracking-widest text-[#f0f0f0]/30 mb-5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Navigation
              </p>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={getHref(link.href)}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-[#f0f0f0]/50 hover:text-[#ff3c00] transition-colors duration-300 focus-visible:outline-none focus-visible:text-[#ff3c00]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact + socials */}
            <motion.div variants={fadeInUp}>
              <p
                className="text-xs font-semibold uppercase tracking-widest text-[#f0f0f0]/30 mb-5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Connect
              </p>
              <a
                href={`mailto:${BRAND.email}`}
                className="block text-sm text-[#f0f0f0]/50 hover:text-[#ff3c00] transition-colors duration-300 mb-6 focus-visible:outline-none"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {BRAND.email}
              </a>
              <div className="flex flex-wrap gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#f0f0f0]/30 hover:text-[#f0f0f0] transition-colors duration-300 focus-visible:outline-none"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <p
              className="text-xs text-[#f0f0f0]/20"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              &copy; 2025 {BRAND.name}. All rights reserved.
            </p>
            <p
              className="text-xs text-[#f0f0f0]/20"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {BRAND.location}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}