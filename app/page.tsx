"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Star, Check, Mail, MapPin, ArrowUpRight, Sparkles, Eye, Heart } from 'lucide-react';
import Link from "next/link";
import { useTranslations } from "next-intl";
import { BRAND } from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
  textReveal,
  containerVariants,
} from "@/lib/motion";

// ─── Inline data ───────────────────────────────────────────────────────────────

const projects = [
  {
    id: "p1",
    title: "Luminary Brand Identity",
    category: "Branding",
    year: "2024",
    image: "https://spark.us/wp-content/uploads/2018/02/Luminary-Identity-Guidelines-Carousel2.gif",
    tags: ["Identity", "Motion", "3D"],
    featured: true,
    color: "#ff3c00",
  },
  {
    id: "p2",
    title: "Nexus SaaS Platform",
    category: "Web Design",
    year: "2024",
    image: "https://d7umqicpi7263.cloudfront.net/promotionalMedia/2f187c1466343a3299598002ba248061",
    tags: ["UI/UX", "Webflow", "Animation"],
    featured: true,
    color: "#7b2fff",
  },
  {
    id: "p3",
    title: "Orbit E-Commerce",
    category: "E-Commerce",
    year: "2023",
    image: "https://media.licdn.com/dms/image/v2/C4E0BAQFhhJhMLIAN7w/company-logo_200_200/company-logo_200_200/0/1631318396619?e=2147483647&v=beta&t=Ve-drc6CB7ajqCy_Kb1UGQNkDsd7smiWrh5mEeRPZ3Y",
    tags: ["Shopify", "3D", "Motion"],
    featured: false,
    color: "#00c2a8",
  },
  {
    id: "p4",
    title: "Pulse Health App",
    category: "App Design",
    year: "2023",
    image: "https://play-lh.googleusercontent.com/yEoqTUs_2pP2oxmuPvpiHfuooTjX5YkdJ8_0P1QxVp19X2d3sBmxUAQYQwkYYPEBbTScMEWqLeG1j8h323jY",
    tags: ["iOS", "Figma", "Prototyping"],
    featured: false,
    color: "#ff3c00",
  },
];

const services = [
  {
    id: "s1",
    number: "01",
    title: "Brand Identity",
    description:
      "From logo systems to full visual languages, we craft identities that resonate and endure. Every mark is built with intention.",
    icon: "✦",
  },
  {
    id: "s2",
    number: "02",
    title: "Web Design & Development",
    description:
      "Pixel-perfect interfaces built for performance. We design and develop sites that convert visitors into believers.",
    icon: "◈",
  },
  {
    id: "s3",
    number: "03",
    title: "Motion & 3D",
    description:
      "Cinematic animations and immersive 3D experiences that make your product impossible to ignore.",
    icon: "⬡",
  },
  {
    id: "s4",
    number: "04",
    title: "Creative Direction",
    description:
      "Strategic vision meets aesthetic mastery. We guide campaigns, shoots, and launches from concept to execution.",
    icon: "◎",
  },
];

const testimonials = [
  {
    id: "t1",
    quote:
      "Axiom Studio transformed our brand from forgettable to iconic. The 3D work alone tripled our social engagement.",
    author: "Mara Chen",
    role: "CEO, Luminary Labs",
    avatar: "https://www.salisbury.edu/_images/directory/mxchen.jpg",
    stars: 5,
  },
  {
    id: "t2",
    quote:
      "The team delivered a website that genuinely feels like the future. Our conversion rate jumped 40% in the first month.",
    author: "James Okafor",
    role: "Founder, Nexus",
    avatar: "https://achiya.org/wp-content/uploads/writers/james-okafor-4d4bc7.webp",
    stars: 5,
  },
  {
    id: "t3",
    quote:
      "Working with Axiom is unlike any other agency. They push creative limits while staying laser-focused on results.",
    author: "Sofia Reyes",
    role: "CMO, Orbit Commerce",
    avatar: "https://www.6sigma.us/wp-content/uploads/2024/08/project-delivery.webp",
    stars: 5,
  },
];

const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Industry Awards" },
  { value: "8yr", label: "Studio Experience" },
];

const processSteps = [
  {
    id: "step1",
    number: "01",
    title: "Discover",
    description: "Deep-dive workshops to uncover your brand's core, audience, and competitive landscape.",
  },
  {
    id: "step2",
    number: "02",
    title: "Concept",
    description: "Bold creative directions presented as high-fidelity concepts — no wireframe guesswork.",
  },
  {
    id: "step3",
    number: "03",
    title: "Craft",
    description: "Meticulous execution across every touchpoint, from pixel to prototype to production.",
  },
  {
    id: "step4",
    number: "04",
    title: "Launch",
    description: "Seamless handoff, live deployment, and post-launch support to ensure lasting impact.",
  },
];

// ─── Floating orb component ────────────────────────────────────────────────────

function FloatingOrb({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className ?? ""}`}
      animate={{
        y: [0, -30, 0],
        scale: [1, 1.08, 1],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

// ─── Marquee strip ─────────────────────────────────────────────────────────────

const marqueeItems = [
  "Brand Identity",
  "3D Animation",
  "Web Design",
  "Motion Graphics",
  "Creative Direction",
  "UI/UX Design",
  "Webflow",
  "Shopify",
];

function MarqueeStrip() {
  const repeated = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden py-5 border-y border-white/5 bg-[#0d0d0d]">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-sm font-semibold uppercase tracking-widest text-[#f0f0f0]/30 flex items-center gap-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {item}
            <span className="text-[#ff3c00] text-lg">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Project card ──────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={scaleIn}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
        index === 0 ? "md:col-span-2 md:row-span-2" : ""
      }`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div
        className={`relative overflow-hidden ${
          index === 0 ? "aspect-[16/9] md:aspect-auto md:h-full min-h-[320px]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

        {/* Color accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 w-0"
          style={{ backgroundColor: project.color }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="flex flex-wrap gap-2 mb-3">
            {(project.tags ?? []).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[#f0f0f0]/70"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3
            className="text-xl md:text-2xl font-extrabold text-[#f0f0f0] tracking-tight leading-tight mb-1"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {project.title}
          </h3>
          <div className="flex items-center justify-between">
            <span
              className="text-sm text-[#f0f0f0]/50"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {project.category} · {project.year}
            </span>
            <motion.div
              className="w-8 h-8 rounded-full bg-[#ff3c00] flex items-center justify-center"
              animate={{ scale: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ArrowUpRight size={14} className="text-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  const t = useTranslations();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    budget: "10k-25k",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleFormChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-[#0a0a0a] text-[#f0f0f0] overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      >
        {/* Background orbs */}
        <FloatingOrb
          className="w-[600px] h-[600px] bg-[#ff3c00]/20 top-[-100px] left-[-200px]"
          delay={0}
        />
        <FloatingOrb
          className="w-[500px] h-[500px] bg-[#7b2fff]/20 bottom-[-80px] right-[-150px]"
          delay={2}
        />
        <FloatingOrb
          className="w-[300px] h-[300px] bg-[#ff3c00]/10 top-[40%] left-[50%]"
          delay={4}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff3c00] animate-pulse" />
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0f0f0]/50"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Creative Studio · Est. 2016
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="text-[clamp(3.5rem,10vw,9rem)] font-extrabold leading-[0.9] tracking-tighter text-[#f0f0f0]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Design
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#ff3c00] to-[#ff7a00]">
                  Beyond
                </span>
              </span>
              <br />
              Boundaries.
            </motion.h1>
          </div>

          {/* Sub + CTA row */}
          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="max-w-md text-base md:text-lg text-[#f0f0f0]/50 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Axiom Studio crafts brand identities, immersive web experiences,
              and cinematic 3D animations for brands that refuse to be ordinary.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#ff3c00] text-white font-semibold text-sm transition-all duration-300 hover:bg-[#e03500] shadow-[0_0_30px_rgba(255,60,0,0.35)]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                View Our Work
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-[#f0f0f0]/70 font-semibold text-sm hover:border-white/30 hover:text-[#f0f0f0] transition-all duration-300"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Start a Project
              </motion.a>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="bg-[#0d0d0d] px-6 py-6 flex flex-col gap-1"
              >
                <span
                  className="text-3xl md:text-4xl font-extrabold text-[#f0f0f0] tracking-tight"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs text-[#f0f0f0]/40 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-[10px] uppercase tracking-[0.2em] text-[#f0f0f0]/30"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Scroll
          </span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-[#ff3c00] to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────────────── */}
      <MarqueeStrip />

      {/* ── WORK ─────────────────────────────────────────────────────────── */}
      <section id="work" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff3c00] mb-3 block"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Selected Work
              </span>
              <h2
                className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-none tracking-tighter text-[#f0f0f0]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Projects that
                <br />
                move people.
              </h2>
            </div>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#f0f0f0]/50 hover:text-[#ff3c00] transition-colors duration-300 group"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              View all projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Project grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]"
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services" className="relative py-24 md:py-32 bg-[#0d0d0d] overflow-hidden">
        {/* Accent glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7b2fff]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Header */}
            <motion.div variants={slideInLeft} className="mb-16">
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff3c00] mb-3 block"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                What We Do
              </span>
              <h2
                className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-none tracking-tighter text-[#f0f0f0] max-w-2xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Capabilities built for impact.
              </h2>
            </motion.div>

            {/* Services list */}
            <div className="divide-y divide-white/5">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-8 cursor-default"
                >
                  <span
                    className="text-xs font-semibold text-[#f0f0f0]/20 w-8 shrink-0"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {service.number}
                  </span>
                  <span
                    className="text-2xl w-8 shrink-0 text-[#ff3c00] group-hover:scale-110 transition-transform duration-300"
                  >
                    {service.icon}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#f0f0f0] md:w-64 shrink-0"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm text-[#f0f0f0]/40 leading-relaxed max-w-md"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {service.description}
                  </p>
                  <div className="md:ml-auto">
                    <motion.div
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1, borderColor: "#ff3c00" }}
                    >
                      <ArrowUpRight size={16} className="text-[#ff3c00]" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT / PROCESS ──────────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left: image + badge */}
          <motion.div variants={slideInLeft} className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://www.weareaxiom.com/wp-content/uploads/2025/12/Axiom_Group3-1-scaled.jpg"
                alt="Axiom Studio team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="absolute -bottom-6 -right-6 bg-[#0d0d0d] border border-white/10 rounded-2xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ff3c00] flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <p
                    className="text-sm font-bold text-[#f0f0f0]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Award-Winning
                  </p>
                  <p
                    className="text-xs text-[#f0f0f0]/40"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    40+ industry awards
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: copy + process */}
          <motion.div variants={slideInRight} className="flex flex-col gap-8">
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff3c00] mb-3 block"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                About the Studio
              </span>
              <h2
                className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-tight tracking-tighter text-[#f0f0f0] mb-5"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                We make the
                <br />
                extraordinary
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3c00] to-[#ff7a00]">
                  feel inevitable.
                </span>
              </h2>
              <p
                className="text-sm text-[#f0f0f0]/50 leading-relaxed max-w-md"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Founded in 2016, Axiom Studio is a boutique creative agency
                obsessed with the intersection of art and technology. Our team
                of designers, developers, and motion artists work in tight
                collaboration to produce work that earns attention.
              </p>
            </div>

            {/* Process steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {processSteps.map((step) => (
                <motion.div
                  key={step.id}
                  whileHover={{ y: -4, borderColor: "rgba(255,60,0,0.3)" }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-xl border border-white/8 bg-[#0d0d0d] hover:bg-[#111] transition-colors duration-300"
                >
                  <span
                    className="text-xs font-semibold text-[#ff3c00] mb-2 block"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {step.number}
                  </span>
                  <h4
                    className="text-base font-bold text-[#f0f0f0] mb-1"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="text-xs text-[#f0f0f0]/40 leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 bg-[#0d0d0d] overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#ff3c00]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-14">
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff3c00] mb-3 block"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Client Love
              </span>
              <h2
                className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-none tracking-tighter text-[#f0f0f0]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Trusted by
                <br />
                bold brands.
              </h2>
            </motion.div>

            {/* Testimonial cards — asymmetric layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  variants={scaleIn}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                  className={`relative p-7 rounded-2xl border border-white/8 bg-[#0a0a0a] flex flex-col gap-5 ${
                    i === 1 ? "md:mt-8" : ""
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <Star
                        key={si}
                        size={12}
                        className="text-[#ff3c00] fill-[#ff3c00]"
                      />
                    ))}
                  </div>

                  <p
                    className="text-sm text-[#f0f0f0]/70 leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover ring-1 ring-white/10"
                    />
                    <div>
                      <p
                        className="text-sm font-bold text-[#f0f0f0]"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {t.author}
                      </p>
                      <p
                        className="text-xs text-[#f0f0f0]/40"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left */}
          <motion.div variants={slideInLeft} className="flex flex-col gap-8">
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff3c00] mb-3 block"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Get In Touch
              </span>
              <h2
                className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-none tracking-tighter text-[#f0f0f0] mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Let&apos;s build
                <br />
                something
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3c00] to-[#ff7a00]">
                  remarkable.
                </span>
              </h2>
              <p
                className="text-sm text-[#f0f0f0]/50 leading-relaxed max-w-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Whether you have a fully-formed brief or just a spark of an
                idea, we want to hear from you. Most projects kick off within
                two weeks of first contact.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 text-sm text-[#f0f0f0]/60 hover:text-[#ff3c00] transition-colors duration-300 group"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#ff3c00]/40 transition-colors duration-300">
                  <Mail size={14} />
                </div>
                {BRAND.email}
              </a>
              <div
                className="flex items-center gap-3 text-sm text-[#f0f0f0]/60"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                {BRAND.location}
              </div>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0d0d0d] border border-white/8 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span
                className="text-xs font-semibold text-[#f0f0f0]/60"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Available for new projects in Q3 2025
              </span>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div variants={slideInRight}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full flex flex-col items-center justify-center gap-5 p-10 rounded-2xl border border-white/8 bg-[#0d0d0d] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#ff3c00]/15 flex items-center justify-center">
                  <Check size={28} className="text-[#ff3c00]" />
                </div>
                <h3
                  className="text-2xl font-extrabold text-[#f0f0f0]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Message received.
                </h3>
                <p
                  className="text-sm text-[#f0f0f0]/50 max-w-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  We&apos;ll review your brief and get back to you within 24
                  hours. Exciting things ahead.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-8 rounded-2xl border border-white/8 bg-[#0d0d0d]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-widest text-[#f0f0f0]/40"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleFormChange}
                      placeholder="Your name"
                      className="bg-[#111] border border-white/8 rounded-xl px-4 py-3 text-sm text-[#f0f0f0] placeholder:text-[#f0f0f0]/20 focus:outline-none focus:border-[#ff3c00]/50 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-widest text-[#f0f0f0]/40"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleFormChange}
                      placeholder="you@company.com"
                      className="bg-[#111] border border-white/8 rounded-xl px-4 py-3 text-sm text-[#f0f0f0] placeholder:text-[#f0f0f0]/20 focus:outline-none focus:border-[#ff3c00]/50 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="budget"
                    className="text-xs font-semibold uppercase tracking-widest text-[#f0f0f0]/40"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formState.budget}
                    onChange={handleFormChange}
                    className="bg-[#111] border border-white/8 rounded-xl px-4 py-3 text-sm text-[#f0f0f0] focus:outline-none focus:border-[#ff3c00]/50 transition-colors duration-300 appearance-none"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <option value="under-10k">Under $10k</option>
                    <option value="10k-25k">$10k – $25k</option>
                    <option value="25k-50k">$25k – $50k</option>
                    <option value="50k-plus">$50k+</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-widest text-[#f0f0f0]/40"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleFormChange}
                    placeholder="What are you building? What's the vision?"
                    className="bg-[#111] border border-white/8 rounded-xl px-4 py-3 text-sm text-[#f0f0f0] placeholder:text-[#f0f0f0]/20 focus:outline-none focus:border-[#ff3c00]/50 transition-colors duration-300 resize-none"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-[#ff3c00] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#e03500] transition-colors duration-300 shadow-[0_0_30px_rgba(255,60,0,0.25)]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Send Message
                  <ArrowRight size={16} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* ── FULL-BLEED CTA BANNER ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#ff3c00] py-20 md:py-28">
        {/* Texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <FloatingOrb
          className="w-[400px] h-[400px] bg-[#ff7a00]/40 top-[-100px] right-[-100px]"
          delay={1}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <motion.h2
            variants={slideInLeft}
            className="text-[clamp(2rem,6vw,5rem)] font-extrabold leading-none tracking-tighter text-white max-w-2xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Ready to make something unforgettable?
          </motion.h2>

          <motion.div variants={slideInRight} className="shrink-0">
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05, backgroundColor: "#0a0a0a" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#ff3c00] font-bold text-sm transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Start a Project
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}